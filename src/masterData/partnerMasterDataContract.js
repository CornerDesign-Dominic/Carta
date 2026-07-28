import { readJsonAttachmentFromPdf } from '../documentModel/pdfAttachment.js';

export const PARTNER_MASTER_DATA_SCHEMA = 'belege24.master-data';
export const PARTNER_MASTER_DATA_SCHEMA_VERSION = 1;
export const PARTNER_MASTER_DATA_TYPE = 'partners';
export const PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME = 'belege24-partner-stammdaten.json';
export const PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAMES = [PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME];
export const PARTNER_MASTER_DATA_MAX_PARTNERS = 500;
export const PARTNER_MASTER_DATA_MAX_DELIVERY_ADDRESSES = 200;
export const PARTNER_MASTER_DATA_MAX_STRING_LENGTH = 10000;
export const PARTNER_MASTER_DATA_MAX_JSON_BYTES = 4 * 1024 * 1024;

const partnerTypes = new Set(['customer', 'supplier', 'customerAndSupplier', 'other']);

function createStableId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isIsoDate(value) {
  return typeof value === 'string' && Number.isFinite(Date.parse(value));
}

function normalizeString(value) {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string' || value.length > PARTNER_MASTER_DATA_MAX_STRING_LENGTH) return null;
  return value;
}

function normalizeStringFields(source, fields) {
  if (!isPlainObject(source)) return null;
  const result = {};
  for (const field of fields) {
    const value = normalizeString(source[field]);
    if (value === null) return null;
    result[field] = value;
  }
  return result;
}

function normalizeAddress(source, includeContactPerson = false, includePhone = false, includeNotes = false) {
  const fields = [
    'companyName', 'attention', 'department', 'street', 'houseNumber', 'postalCode', 'city', 'country',
    ...(includeContactPerson ? ['contactPerson'] : []),
    ...(includePhone ? ['phone'] : []),
    ...(includeNotes ? ['notes'] : []),
  ];
  const address = normalizeStringFields(source ?? {}, fields);
  if (!address) return null;
  return { ...address, country: address.country || 'Deutschland' };
}

function normalizeDeliveryAddress(source) {
  if (!isPlainObject(source) || typeof source.id !== 'string' || !source.id.trim()) return null;
  const normalized = normalizeAddress(source, true, true, true);
  if (!normalized) return null;
  const label = normalizeString(source.label);
  if (label === null) return null;
  return { id: source.id, label, ...normalized };
}

export function normalizePartnerRecord(source) {
  if (!isPlainObject(source) || typeof source.id !== 'string' || !source.id.trim()) return null;
  if (source.type !== undefined && !partnerTypes.has(source.type)) return null;
  if (source.deliveryAddresses !== undefined && !Array.isArray(source.deliveryAddresses)) return null;
  if (source.isActive !== undefined && typeof source.isActive !== 'boolean') return null;

  const strings = normalizeStringFields(source, [
    'companyName', 'legalForm', 'contactPerson', 'department', 'customerNumber', 'supplierNumber', 'notes',
  ]);
  const mainAddress = normalizeAddress(source.mainAddress ?? {});
  const contact = normalizeStringFields(source.contact ?? {}, ['email', 'phone', 'mobile', 'fax', 'website']);
  const tax = normalizeStringFields(source.tax ?? {}, ['vatId', 'taxNumber']);
  const bank = normalizeStringFields(source.bank ?? {}, ['accountHolder', 'bankName', 'iban', 'bic']);
  if (!strings || !mainAddress || !contact || !tax || !bank) return null;

  const rawDeliveries = source.deliveryAddresses ?? [];
  if (rawDeliveries.length > PARTNER_MASTER_DATA_MAX_DELIVERY_ADDRESSES) return null;
  const deliveryAddresses = rawDeliveries.map(normalizeDeliveryAddress);
  if (deliveryAddresses.some((address) => !address)) return null;
  const deliveryIds = new Set(deliveryAddresses.map((address) => address.id));
  if (deliveryIds.size !== deliveryAddresses.length) return null;

  return {
    id: source.id,
    type: source.type ?? 'customer',
    ...strings,
    mainAddress,
    contact,
    tax,
    bank,
    deliveryAddresses,
    isActive: source.isActive ?? true,
  };
}

export function validateAndNormalizePartnerMasterData(document) {
  if (!isPlainObject(document)) return { valid: false, reason: 'invalid-document' };
  if (document.schema !== PARTNER_MASTER_DATA_SCHEMA) return { valid: false, reason: 'wrong-schema' };
  if (document.schemaVersion > PARTNER_MASTER_DATA_SCHEMA_VERSION) return { valid: false, reason: 'newer-version' };
  if (document.schemaVersion !== PARTNER_MASTER_DATA_SCHEMA_VERSION) return { valid: false, reason: 'wrong-schema-version' };
  if (document.masterDataType !== PARTNER_MASTER_DATA_TYPE) return { valid: false, reason: 'wrong-master-data-type' };
  if (typeof document.documentId !== 'string' || !document.documentId.trim()) return { valid: false, reason: 'invalid-document' };
  if (!isIsoDate(document.createdAt) || !isIsoDate(document.updatedAt) || !Array.isArray(document.records)) {
    return { valid: false, reason: 'invalid-document' };
  }
  if (document.records.length > PARTNER_MASTER_DATA_MAX_PARTNERS) {
    return { valid: false, reason: 'invalid-records' };
  }

  const records = document.records.map(normalizePartnerRecord);
  if (records.some((record) => !record)) return { valid: false, reason: 'invalid-records' };
  const partnerIds = new Set(records.map((record) => record.id));
  if (partnerIds.size !== records.length) return { valid: false, reason: 'invalid-records' };

  return {
    valid: true,
    document: {
      schema: PARTNER_MASTER_DATA_SCHEMA,
      schemaVersion: PARTNER_MASTER_DATA_SCHEMA_VERSION,
      masterDataType: PARTNER_MASTER_DATA_TYPE,
      documentId: document.documentId,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
      records,
    },
  };
}

export function createPartnerMasterDataCollectionMetadata(timestamp = new Date().toISOString()) {
  return {
    documentId: createStableId('masterdata-partners'),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export function createPartnerMasterDataDocument({ records, documentId, createdAt, updatedAt }) {
  const candidate = {
    schema: PARTNER_MASTER_DATA_SCHEMA,
    schemaVersion: PARTNER_MASTER_DATA_SCHEMA_VERSION,
    masterDataType: PARTNER_MASTER_DATA_TYPE,
    documentId,
    createdAt,
    updatedAt,
    records,
  };
  const validation = validateAndNormalizePartnerMasterData(candidate);
  if (!validation.valid) throw new Error('Partner-Stammdaten konnten nicht für den Export vorbereitet werden.');
  return validation.document;
}

export function getPartnerMasterDataPdfFilename(timestamp = new Date()) {
  return `Belege24_Partnerstammdaten_${timestamp.toISOString().slice(0, 10)}.pdf`;
}

export async function importPartnerMasterDataPdf(pdfBytes) {
  if (pdfBytes.byteLength > PARTNER_MASTER_DATA_MAX_JSON_BYTES * 8) {
    return { status: 'invalid-records', message: 'Die Partner-Stammdaten sind unvollständig oder beschädigt.' };
  }

  const attachment = await readJsonAttachmentFromPdf(
    pdfBytes,
    PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAMES,
    PARTNER_MASTER_DATA_MAX_JSON_BYTES,
  );
  if (attachment.status === 'not-found') {
    return { status: 'not-found', message: 'In dieser PDF wurden keine Belege24-Partnerstammdaten gefunden.' };
  }
  if (attachment.status === 'invalid-json') {
    return { status: 'invalid-json', message: 'Die eingebetteten Partnerstammdaten konnten nicht gelesen werden.' };
  }
  if (attachment.status === 'unreadable-pdf') {
    return { status: 'unreadable-pdf', message: 'Die Partner-Stammdaten konnten nicht geladen werden.' };
  }
  if (attachment.status === 'too-large') {
    return { status: 'invalid-records', message: 'Die Partnerstammdaten sind unvollständig oder beschädigt.' };
  }

  const encodedDocument = new TextEncoder().encode(JSON.stringify(attachment.document));
  if (encodedDocument.byteLength > PARTNER_MASTER_DATA_MAX_JSON_BYTES) {
    return { status: 'invalid-records', message: 'Die Partnerstammdaten sind unvollständig oder beschädigt.' };
  }

  const validation = validateAndNormalizePartnerMasterData(attachment.document);
  if (validation.valid) return { status: 'valid', document: validation.document, message: 'Partner-Stammdaten wurden aus der PDF geladen.' };
  if (validation.reason === 'newer-version') return { status: 'newer-version', message: 'Diese Stammdatendatei wurde mit einer neueren, derzeit nicht unterstützten Version erstellt.' };
  if (validation.reason === 'wrong-master-data-type') return { status: 'wrong-master-data-type', message: 'Diese Datei enthält andere Stammdaten und kann nicht im Bereich „Partner und Empfänger“ geladen werden.' };
  if (validation.reason === 'wrong-schema' || validation.reason === 'wrong-schema-version') return { status: 'wrong-schema', message: 'Die Datei enthält kein unterstütztes Belege24-Stammdatenformat.' };
  return { status: 'invalid-records', message: 'Die Partnerstammdaten sind unvollständig oder beschädigt.' };
}
