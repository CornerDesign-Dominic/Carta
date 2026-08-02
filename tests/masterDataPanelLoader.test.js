import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { embedJsonAttachmentInPdf } from '../src/documentModel/pdfAttachment.js';
import { createCatalogItemMasterDataDocument, CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME } from '../src/masterData/catalogItemContract.js';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';
import { createOwnDataMasterDataDocument, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME } from '../src/masterData/ownDataContract.js';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import { createPartnerMasterDataDocument, PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME } from '../src/masterData/partnerMasterDataContract.js';
import { createPartner } from '../src/masterData/partnerModel.js';
import { createMasterDataFileId, hasRecordIdConflict, readMasterDataPdf } from '../src/components/masterDataPanel/masterDataPanelLoader.js';

const timestamps = { createdAt: '2026-08-01T10:00:00.000Z', updatedAt: '2026-08-01T10:00:00.000Z' };

async function createPdf(document, fileName) {
  const pdf = await PDFDocument.create();
  pdf.addPage([595, 842]);
  return embedJsonAttachmentInPdf(await pdf.save(), { document, fileName, creationDate: new Date(timestamps.createdAt) });
}

function createFile(name, bytes, lastModified = 1) {
  return { name, size: bytes.byteLength, lastModified, type: 'application/pdf', arrayBuffer: async () => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) };
}

describe('master data panel loader', () => {
  it('recognizes own-data, partner, and catalog PDFs with their existing contracts', async () => {
    const own = createOwnDataMasterDataDocument({ records: [createOwnDataRecord({ id: 'own-1', address: { companyName: 'Corner Design', city: 'Wuppertal' } })], documentId: 'own-doc', ...timestamps });
    const partner = createPartnerMasterDataDocument({ records: [createPartner({ id: 'partner-1', companyName: 'Musterkunde', mainAddress: { city: 'Hamburg' } })], documentId: 'partner-doc', ...timestamps });
    const catalog = createCatalogItemMasterDataDocument({ records: [createCatalogItem('service', { id: 'catalog-1', title: 'Montage' })], documentId: 'catalog-doc', ...timestamps });
    await expect(readMasterDataPdf(createFile('eigene.pdf', await createPdf(own, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME)))).resolves.toMatchObject({ status: 'valid', tabId: 'ownData' });
    await expect(readMasterDataPdf(createFile('partner.pdf', await createPdf(partner, PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME)))).resolves.toMatchObject({ status: 'valid', tabId: 'partners' });
    await expect(readMasterDataPdf(createFile('leistungen.pdf', await createPdf(catalog, CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME)))).resolves.toMatchObject({ status: 'valid', tabId: 'catalogItems' });
  });

  it('supports automatic tab assignment metadata, duplicate detection, ID conflicts, and invalid PDFs', async () => {
    const partner = createPartnerMasterDataDocument({ records: [createPartner({ id: 'partner-1', companyName: 'Musterkunde' })], documentId: 'partner-doc', ...timestamps });
    const bytes = await createPdf(partner, PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME);
    const file = createFile('partner.pdf', bytes, 123);
    const result = await readMasterDataPdf(file);
    expect(result).toMatchObject({ status: 'valid', tabId: 'partners' });
    if (result.status !== 'valid') throw new Error(result.message);
    const fileId = createMasterDataFileId(file, result.document.documentId);
    const loadedFile = { id: fileId, records: result.document.records };
    expect(createMasterDataFileId(file, result.document.documentId)).toBe(fileId);
    expect(hasRecordIdConflict([loadedFile], result.document.records)).toBe(true);
    expect(hasRecordIdConflict([], result.document.records)).toBe(false);
    await expect(readMasterDataPdf(createFile('fremd.pdf', new TextEncoder().encode('keine PDF')))).resolves.toMatchObject({ status: 'unreadable-pdf' });
  });

  it('rejects own-data sheets that contain more than one company', async () => {
    const document = createOwnDataMasterDataDocument({ records: [createOwnDataRecord(), createOwnDataRecord()], documentId: 'own-multiple', ...timestamps });
    await expect(readMasterDataPdf(createFile('mehrere-unternehmen.pdf', await createPdf(document, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME)))).resolves.toMatchObject({ status: 'invalid-records' });
  });
});
