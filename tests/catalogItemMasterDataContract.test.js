import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { embedJsonAttachmentInPdf } from '../src/documentModel/pdfAttachment.js';
import {
  catalogItemEditorReducer, createCatalogEditorState, createCatalogItem, duplicateCatalogItem,
  matchesCatalogItemSearch, normalizeCatalogAmountValue, normalizeCatalogTaxRate,
} from '../src/masterData/catalogItemModel.js';
import {
  CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME, createCatalogItemMasterDataDocument,
  importCatalogItemMasterDataPdf, validateAndNormalizeCatalogItemMasterData,
} from '../src/masterData/catalogItemContract.js';

const timestamps = { createdAt: '2026-07-26T12:00:00.000Z', updatedAt: '2026-07-26T12:00:00.000Z' };
function createDocument(records) { return createCatalogItemMasterDataDocument({ records, documentId: 'masterdata-catalog-test', ...timestamps }); }

describe('catalog item master data', () => {
  it('creates all four types with their type-specific defaults', () => {
    const service = createCatalogItem('service');
    const goods = createCatalogItem('goods');
    const textService = createCatalogItem('textService');
    const deliveryItem = createCatalogItem('deliveryItem');
    expect(service).toMatchObject({ type: 'service', quantity: { defaultValue: '1', unit: 'pauschal' }, pricing: { taxRate: '19' } });
    expect(goods).toMatchObject({ type: 'goods', quantity: { defaultValue: '1' }, pricing: { taxRate: '19' } });
    expect(textService).toMatchObject({ type: 'textService', quantity: { textLabel: '' }, pricing: { netTotalAmount: '', taxRate: '19' } });
    expect(deliveryItem).toMatchObject({ type: 'deliveryItem', quantity: { defaultValue: '1', unit: 'pauschal' }, pricing: { taxRate: '' } });
  });

  it('changes types without replacing the ID, duplicates with a new ID, and permits an empty collection after deletion', () => {
    const item = createCatalogItem('service', { title: 'Beratung', descriptions: { standard: 'Analyse' } });
    const state = { records: [item], activeRecordId: item.id };
    const changed = catalogItemEditorReducer(state, { type: 'change-type', recordId: item.id, itemType: 'textService' });
    const duplicated = duplicateCatalogItem(item);
    const deleted = catalogItemEditorReducer(state, { type: 'delete', recordId: item.id });
    expect(changed.records[0]).toMatchObject({ id: item.id, type: 'textService', descriptions: { standard: 'Analyse' } });
    expect(duplicated).toMatchObject({ type: 'service', title: 'Beratung Kopie' });
    expect(duplicated.id).not.toBe(item.id);
    expect(deleted).toEqual(createCatalogEditorState());
  });

  it('searches all description fields and normalizes German money and tax input', () => {
    const item = createCatalogItem('goods', { title: 'Transportbox', descriptions: { standard: 'Rechnungstext', deliveryNote: 'Lieferscheintext' }, internalNote: 'Lager A' });
    expect(matchesCatalogItemSearch(item, 'lieferscheintext')).toBe(true);
    expect(matchesCatalogItemSearch(item, 'lager a')).toBe(true);
    expect(normalizeCatalogAmountValue('1.234,5 €')).toBe('1.234,50');
    expect(normalizeCatalogAmountValue('100')).toBe('100,00');
    expect(normalizeCatalogTaxRate('19 %')).toBe('19');
    expect(normalizeCatalogTaxRate('101')).toBeNull();
  });

  it('validates the catalog contract, retains types and IDs, and rejects wrong master-data types', () => {
    const records = [
      createCatalogItem('service', { id: 'catalog-service', title: 'Beratung', pricing: { netUnitPrice: '100', taxRate: '19' } }),
      createCatalogItem('goods', { id: 'catalog-goods', title: 'Ware', descriptions: { deliveryNote: 'Liefern' } }),
      createCatalogItem('textService', { id: 'catalog-text', title: 'Text', quantity: { textLabel: '3 Stunden' }, pricing: { netTotalAmount: '300,00' } }),
      createCatalogItem('deliveryItem', { id: 'catalog-delivery', title: 'Kiste' }),
    ];
    const document = createDocument(records);
    const validation = validateAndNormalizeCatalogItemMasterData(document);
    expect(validation).toMatchObject({ valid: true });
    if (!validation.valid) throw new Error('Expected a valid catalog document.');
    expect(validation.document.records.map((record) => [record.id, record.type])).toEqual(records.map((record) => [record.id, record.type]));
    expect(validation.document.records[0].pricing.netUnitPrice).toBe('100,00');
    expect(validateAndNormalizeCatalogItemMasterData({ ...document, masterDataType: 'partners' })).toMatchObject({ valid: false, reason: 'wrong-master-data-type' });
    expect(validateAndNormalizeCatalogItemMasterData({ ...document, records: [document.records[0], document.records[0]] })).toMatchObject({ valid: false, reason: 'invalid-records' });
  });

  it('roundtrips an ordered mixed collection through the named PDF attachment', async () => {
    const document = createDocument([createCatalogItem('service', { title: 'A' }), createCatalogItem('deliveryItem', { title: 'B' })]);
    const pdf = await PDFDocument.create(); pdf.addPage([595, 842]);
    const pdfBytes = await embedJsonAttachmentInPdf(await pdf.save(), { fileName: CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME, document, creationDate: new Date(timestamps.createdAt) });
    const imported = await importCatalogItemMasterDataPdf(pdfBytes);
    expect(imported).toMatchObject({ status: 'valid' });
    if (imported.status !== 'valid') throw new Error(imported.message);
    expect(imported.document).toEqual(document);
  });
});
