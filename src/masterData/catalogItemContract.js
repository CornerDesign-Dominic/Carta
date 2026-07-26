import { readJsonAttachmentFromPdf } from '../documentModel/pdfAttachment.js';
import { isCatalogItemType, normalizeCatalogAmountValue, normalizeCatalogTaxRate } from './catalogItemModel.js';

export const CATALOG_ITEM_MASTER_DATA_SCHEMA = 'belege24.master-data';
export const CATALOG_ITEM_MASTER_DATA_SCHEMA_VERSION = 1;
export const CATALOG_ITEM_MASTER_DATA_TYPE = 'catalogItems';
export const CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME = 'belege24-leistungen-artikel-stammdaten.json';
export const CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAMES = [CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME];
export const CATALOG_ITEM_MASTER_DATA_MAX_RECORDS = 1000;
export const CATALOG_ITEM_MASTER_DATA_MAX_STRING_LENGTH = 10000;
export const CATALOG_ITEM_MASTER_DATA_MAX_JSON_BYTES = 4 * 1024 * 1024;

function createStableId(prefix) { return globalThis.crypto?.randomUUID ? `${prefix}-${globalThis.crypto.randomUUID()}` : `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`; }
function isPlainObject(value) { return typeof value === 'object' && value !== null && !Array.isArray(value); }
function isIsoDate(value) { return typeof value === 'string' && Number.isFinite(Date.parse(value)); }
function normalizeString(value) { return value === undefined || value === null ? '' : typeof value === 'string' && value.length <= CATALOG_ITEM_MASTER_DATA_MAX_STRING_LENGTH ? value : null; }
function normalizeStrings(source, fields) {
  if (!isPlainObject(source)) return null;
  const result = {};
  for (const field of fields) { const value = normalizeString(source[field]); if (value === null) return null; result[field] = value; }
  return result;
}

export function normalizeCatalogItemRecord(source) {
  if (!isPlainObject(source) || typeof source.id !== 'string' || !source.id.trim() || !isCatalogItemType(source.type)) return null;
  if (source.isActive !== undefined && typeof source.isActive !== 'boolean') return null;
  const top = normalizeStrings(source, ['number', 'title', 'category', 'internalNote']);
  const descriptions = normalizeStrings(source.descriptions ?? {}, ['standard', 'textInvoice', 'deliveryNote']);
  const quantity = normalizeStrings(source.quantity ?? {}, ['defaultValue', 'unit', 'textLabel']);
  const rawPricing = normalizeStrings(source.pricing ?? {}, ['netUnitPrice', 'netTotalAmount', 'taxRate']);
  const delivery = normalizeStrings(source.delivery ?? {}, ['defaultNote']);
  if (!top || !descriptions || !quantity || !rawPricing || !delivery) return null;
  const netUnitPrice = normalizeCatalogAmountValue(rawPricing.netUnitPrice);
  const netTotalAmount = normalizeCatalogAmountValue(rawPricing.netTotalAmount);
  const taxRate = normalizeCatalogTaxRate(rawPricing.taxRate);
  if (netUnitPrice === null || netTotalAmount === null || taxRate === null) return null;
  return { id: source.id, type: source.type, ...top, descriptions, quantity, pricing: { netUnitPrice, netTotalAmount, taxRate }, delivery, isActive: source.isActive ?? true };
}

export function validateAndNormalizeCatalogItemMasterData(document) {
  if (!isPlainObject(document)) return { valid: false, reason: 'invalid-document' };
  if (document.schema !== CATALOG_ITEM_MASTER_DATA_SCHEMA) return { valid: false, reason: 'wrong-schema' };
  if (document.schemaVersion > CATALOG_ITEM_MASTER_DATA_SCHEMA_VERSION) return { valid: false, reason: 'newer-version' };
  if (document.schemaVersion !== CATALOG_ITEM_MASTER_DATA_SCHEMA_VERSION) return { valid: false, reason: 'wrong-schema-version' };
  if (document.masterDataType !== CATALOG_ITEM_MASTER_DATA_TYPE) return { valid: false, reason: 'wrong-master-data-type' };
  if (typeof document.documentId !== 'string' || !document.documentId.trim() || !isIsoDate(document.createdAt) || !isIsoDate(document.updatedAt) || !Array.isArray(document.records)) return { valid: false, reason: 'invalid-document' };
  if (document.records.length > CATALOG_ITEM_MASTER_DATA_MAX_RECORDS) return { valid: false, reason: 'invalid-records' };
  const records = document.records.map(normalizeCatalogItemRecord);
  if (records.some((record) => !record) || new Set(records.map((record) => record.id)).size !== records.length) return { valid: false, reason: 'invalid-records' };
  return { valid: true, document: { schema: CATALOG_ITEM_MASTER_DATA_SCHEMA, schemaVersion: CATALOG_ITEM_MASTER_DATA_SCHEMA_VERSION, masterDataType: CATALOG_ITEM_MASTER_DATA_TYPE, documentId: document.documentId, createdAt: document.createdAt, updatedAt: document.updatedAt, records } };
}

export function createCatalogItemMasterDataCollectionMetadata(timestamp = new Date().toISOString()) { return { documentId: createStableId('masterdata-catalog'), createdAt: timestamp, updatedAt: timestamp }; }
export function createCatalogItemMasterDataDocument({ records, documentId, createdAt, updatedAt }) {
  const validation = validateAndNormalizeCatalogItemMasterData({ schema: CATALOG_ITEM_MASTER_DATA_SCHEMA, schemaVersion: CATALOG_ITEM_MASTER_DATA_SCHEMA_VERSION, masterDataType: CATALOG_ITEM_MASTER_DATA_TYPE, documentId, createdAt, updatedAt, records });
  if (!validation.valid) throw new Error('Leistungs- und Artikelstammdaten konnten nicht für den Export vorbereitet werden.');
  return validation.document;
}
export function getCatalogItemMasterDataPdfFilename(timestamp = new Date()) { return `Belege24_Leistungen_Artikel_Stammdaten_${timestamp.toISOString().slice(0, 10)}.pdf`; }
export async function importCatalogItemMasterDataPdf(pdfBytes) {
  if (pdfBytes.byteLength > CATALOG_ITEM_MASTER_DATA_MAX_JSON_BYTES * 8) return { status: 'invalid-records', message: 'Die Leistungs- und Artikelstammdaten sind unvollständig oder beschädigt.' };
  const attachment = await readJsonAttachmentFromPdf(pdfBytes, CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAMES, CATALOG_ITEM_MASTER_DATA_MAX_JSON_BYTES);
  if (attachment.status === 'not-found') return { status: 'not-found', message: 'In dieser PDF wurden keine Belege24-Leistungs- und Artikelstammdaten gefunden.' };
  if (attachment.status === 'invalid-json') return { status: 'invalid-json', message: 'Die eingebetteten Leistungs- und Artikelstammdaten konnten nicht gelesen werden.' };
  if (attachment.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die Leistungs- und Artikelstammdaten konnten nicht geladen werden.' };
  if (attachment.status === 'too-large') return { status: 'invalid-records', message: 'Die Leistungs- und Artikelstammdaten sind unvollständig oder beschädigt.' };
  if (new TextEncoder().encode(JSON.stringify(attachment.document)).byteLength > CATALOG_ITEM_MASTER_DATA_MAX_JSON_BYTES) return { status: 'invalid-records', message: 'Die Leistungs- und Artikelstammdaten sind unvollständig oder beschädigt.' };
  const validation = validateAndNormalizeCatalogItemMasterData(attachment.document);
  if (validation.valid) return { status: 'valid', document: validation.document, message: 'Leistungs- und Artikelstammdaten wurden aus der PDF geladen.' };
  if (validation.reason === 'newer-version') return { status: 'newer-version', message: 'Diese Stammdatendatei wurde mit einer neueren, derzeit nicht unterstützten Version erstellt.' };
  if (validation.reason === 'wrong-master-data-type') return { status: 'wrong-master-data-type', message: 'Diese Datei enthält einen anderen Stammdatentyp und kann nicht im Bereich „Leistungen und Artikel“ geladen werden.' };
  if (validation.reason === 'wrong-schema' || validation.reason === 'wrong-schema-version') return { status: 'wrong-schema', message: 'Die Datei enthält kein unterstütztes Belege24-Stammdatenformat.' };
  return { status: 'invalid-records', message: 'Die Leistungs- und Artikelstammdaten sind unvollständig oder beschädigt.' };
}
