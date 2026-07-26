import { readJsonAttachmentFromPdf } from '../documentModel/pdfAttachment.js';

export const OWN_DATA_MASTER_DATA_SCHEMA = 'belege24.master-data';
export const OWN_DATA_MASTER_DATA_SCHEMA_VERSION = 1;
export const OWN_DATA_MASTER_DATA_TYPE = 'ownData';
export const OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME = 'belege24-eigene-stammdaten.json';
export const OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAMES = [OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME];
export const OWN_DATA_MASTER_DATA_MAX_RECORDS = 500;
export const OWN_DATA_MASTER_DATA_MAX_STRING_LENGTH = 10000;
export const OWN_DATA_MASTER_DATA_MAX_JSON_BYTES = 4 * 1024 * 1024;

function createStableId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function isPlainObject(value) { return typeof value === 'object' && value !== null && !Array.isArray(value); }
function isIsoDate(value) { return typeof value === 'string' && Number.isFinite(Date.parse(value)); }
function normalizeString(value) {
  if (value === undefined || value === null) return '';
  return typeof value === 'string' && value.length <= OWN_DATA_MASTER_DATA_MAX_STRING_LENGTH ? value : null;
}
function normalizeStrings(source, fields) {
  if (!isPlainObject(source)) return null;
  const result = {};
  for (const field of fields) {
    const value = normalizeString(source[field]);
    if (value === null) return null;
    result[field] = value;
  }
  return result;
}

function normalizePaymentTermDays(value) {
  if (value === undefined || value === null || value === '') return '';
  if (typeof value === 'number' && Number.isInteger(value) && value > 0) return String(value);
  if (typeof value === 'string' && /^\d+$/.test(value) && Number(value) > 0) return value;
  return null;
}

export function normalizeOwnDataRecord(source) {
  if (!isPlainObject(source) || typeof source.id !== 'string' || !source.id.trim()) return null;
  if (source.isActive !== undefined && typeof source.isActive !== 'boolean') return null;
  if (source.settings !== undefined && !isPlainObject(source.settings)) return null;
  const topLevel = normalizeStrings(source, ['companyName', 'legalForm', 'ownerOrManagingDirector', 'contactPerson', 'department']);
  const address = normalizeStrings(source.address ?? {}, ['companyName', 'extra', 'street', 'houseNumber', 'postalCode', 'city', 'country']);
  const contact = normalizeStrings(source.contact ?? {}, ['email', 'phone', 'mobile', 'fax', 'website']);
  const taxAndRegister = normalizeStrings(source.taxAndRegister ?? {}, ['taxNumber', 'vatId', 'commercialRegister', 'registerNumber', 'registerCourt']);
  const bank = normalizeStrings(source.bank ?? {}, ['accountHolder', 'bankName', 'iban', 'bic']);
  const defaultPaymentTermDays = normalizePaymentTermDays((source.settings ?? {}).defaultPaymentTermDays);
  const isSmallBusiness = (source.settings ?? {}).isSmallBusiness;
  if (!topLevel || !address || !contact || !taxAndRegister || !bank || defaultPaymentTermDays === null) return null;
  if (isSmallBusiness !== undefined && typeof isSmallBusiness !== 'boolean') return null;
  return {
    id: source.id,
    ...topLevel,
    address: { ...address, country: address.country || 'Deutschland' },
    contact,
    taxAndRegister,
    bank,
    settings: { isSmallBusiness: isSmallBusiness ?? false, defaultPaymentTermDays },
    isActive: source.isActive ?? true,
  };
}

export function validateAndNormalizeOwnDataMasterData(document) {
  if (!isPlainObject(document)) return { valid: false, reason: 'invalid-document' };
  if (document.schema !== OWN_DATA_MASTER_DATA_SCHEMA) return { valid: false, reason: 'wrong-schema' };
  if (document.schemaVersion > OWN_DATA_MASTER_DATA_SCHEMA_VERSION) return { valid: false, reason: 'newer-version' };
  if (document.schemaVersion !== OWN_DATA_MASTER_DATA_SCHEMA_VERSION) return { valid: false, reason: 'wrong-schema-version' };
  if (document.masterDataType !== OWN_DATA_MASTER_DATA_TYPE) return { valid: false, reason: 'wrong-master-data-type' };
  if (typeof document.documentId !== 'string' || !document.documentId.trim() || !isIsoDate(document.createdAt) || !isIsoDate(document.updatedAt) || !Array.isArray(document.records)) {
    return { valid: false, reason: 'invalid-document' };
  }
  if (!document.records.length || document.records.length > OWN_DATA_MASTER_DATA_MAX_RECORDS) return { valid: false, reason: 'invalid-records' };
  const records = document.records.map(normalizeOwnDataRecord);
  if (records.some((record) => !record) || new Set(records.map((record) => record.id)).size !== records.length) {
    return { valid: false, reason: 'invalid-records' };
  }
  return { valid: true, document: {
    schema: OWN_DATA_MASTER_DATA_SCHEMA, schemaVersion: OWN_DATA_MASTER_DATA_SCHEMA_VERSION,
    masterDataType: OWN_DATA_MASTER_DATA_TYPE, documentId: document.documentId,
    createdAt: document.createdAt, updatedAt: document.updatedAt, records,
  } };
}

export function createOwnDataMasterDataCollectionMetadata(timestamp = new Date().toISOString()) {
  return { documentId: createStableId('masterdata-own'), createdAt: timestamp, updatedAt: timestamp };
}

export function createOwnDataMasterDataDocument({ records, documentId, createdAt, updatedAt }) {
  const validation = validateAndNormalizeOwnDataMasterData({
    schema: OWN_DATA_MASTER_DATA_SCHEMA, schemaVersion: OWN_DATA_MASTER_DATA_SCHEMA_VERSION,
    masterDataType: OWN_DATA_MASTER_DATA_TYPE, documentId, createdAt, updatedAt, records,
  });
  if (!validation.valid) throw new Error('Eigene Stammdaten konnten nicht für den Export vorbereitet werden.');
  return validation.document;
}

export function getOwnDataMasterDataPdfFilename(timestamp = new Date()) {
  return `Belege24_Eigene_Stammdaten_${timestamp.toISOString().slice(0, 10)}.pdf`;
}

export async function importOwnDataMasterDataPdf(pdfBytes) {
  if (pdfBytes.byteLength > OWN_DATA_MASTER_DATA_MAX_JSON_BYTES * 8) return { status: 'invalid-records', message: 'Die eigenen Stammdaten sind unvollständig oder beschädigt.' };
  const attachment = await readJsonAttachmentFromPdf(pdfBytes, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAMES, OWN_DATA_MASTER_DATA_MAX_JSON_BYTES);
  if (attachment.status === 'not-found') return { status: 'not-found', message: 'In dieser PDF wurden keine Belege24-Unternehmensstammdaten gefunden.' };
  if (attachment.status === 'invalid-json') return { status: 'invalid-json', message: 'Die eingebetteten Unternehmensstammdaten konnten nicht gelesen werden.' };
  if (attachment.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die Unternehmensstammdaten konnten nicht geladen werden.' };
  if (attachment.status === 'too-large') return { status: 'invalid-records', message: 'Die eigenen Stammdaten sind unvollständig oder beschädigt.' };
  if (new TextEncoder().encode(JSON.stringify(attachment.document)).byteLength > OWN_DATA_MASTER_DATA_MAX_JSON_BYTES) return { status: 'invalid-records', message: 'Die eigenen Stammdaten sind unvollständig oder beschädigt.' };
  const validation = validateAndNormalizeOwnDataMasterData(attachment.document);
  if (validation.valid) return { status: 'valid', document: validation.document, message: 'Eigene Stammdaten wurden aus der PDF geladen.' };
  if (validation.reason === 'newer-version') return { status: 'newer-version', message: 'Diese Stammdatendatei wurde mit einer neueren, derzeit nicht unterstützten Version erstellt.' };
  if (validation.reason === 'wrong-master-data-type') return { status: 'wrong-master-data-type', message: 'Diese Datei enthält Partnerstammdaten und kann nicht im Bereich „Eigene Daten“ geladen werden.' };
  if (validation.reason === 'wrong-schema' || validation.reason === 'wrong-schema-version') return { status: 'wrong-schema', message: 'Die Datei enthält kein unterstütztes Belege24-Stammdatenformat.' };
  return { status: 'invalid-records', message: 'Die eigenen Stammdaten sind unvollständig oder beschädigt.' };
}
