import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { embedJsonAttachmentInPdf, readJsonAttachmentFromPdf } from '../src/documentModel/pdfAttachment.js';
import { createExamplePartner } from '../src/masterData/partnerModel.js';
import {
  createPartnerMasterDataDocument,
  importPartnerMasterDataPdf,
  PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME,
  validateAndNormalizePartnerMasterData,
} from '../src/masterData/partnerMasterDataContract.js';

const timestamps = {
  createdAt: '2026-07-26T12:00:00.000Z',
  updatedAt: '2026-07-26T12:00:00.000Z',
};

function createDocument(records = [createExamplePartner()]) {
  return createPartnerMasterDataDocument({
    records,
    documentId: 'masterdata-partners-test',
    ...timestamps,
  });
}

async function createPlainPdf() {
  const pdf = await PDFDocument.create();
  pdf.addPage([595, 842]);
  return pdf.save();
}

describe('partner master data contract', () => {
  it('normalizes optional partner fields while retaining stable IDs and record order', () => {
    const partner = createExamplePartner();
    const source = {
      ...partner,
      legalForm: undefined,
      contact: { email: partner.contact.email },
      deliveryAddresses: [
        partner.deliveryAddresses[0],
        { ...partner.deliveryAddresses[0], id: 'delivery-second', label: 'Filiale' },
      ],
    };
    const result = validateAndNormalizePartnerMasterData(createDocument([source]));

    expect(result.valid).toBe(true);
    if (!result.valid) throw new Error('Expected a valid master-data document.');
    expect(result.document.records[0]).toMatchObject({
      id: partner.id,
      legalForm: '',
      contact: { email: partner.contact.email, phone: '', mobile: '', fax: '', website: '' },
    });
    expect(result.document.records[0].deliveryAddresses.map((address) => address.id)).toEqual([
      partner.deliveryAddresses[0].id,
      'delivery-second',
    ]);
  });

  it('retains legacy delivery contact fields during import for backward compatibility', () => {
    const partner = createExamplePartner();
    const legacyDelivery = {
      ...partner.deliveryAddresses[0],
      contactPerson: 'Mara Beispiel',
      phone: '+49 40 555 01 40',
      notes: 'Bitte an der Warenannahme melden.',
    };
    const result = validateAndNormalizePartnerMasterData(createDocument([{ ...partner, deliveryAddresses: [legacyDelivery] }]));

    expect(result.valid).toBe(true);
    if (!result.valid) throw new Error('Expected a valid master-data document.');
    expect(result.document.records[0].deliveryAddresses[0]).toMatchObject({
      contactPerson: 'Mara Beispiel',
      phone: '+49 40 555 01 40',
      notes: 'Bitte an der Warenannahme melden.',
    });
  });

  it('rejects invalid document headers and invalid IDs', () => {
    const valid = createDocument();
    expect(validateAndNormalizePartnerMasterData({ ...valid, schema: 'other' })).toMatchObject({ valid: false, reason: 'wrong-schema' });
    expect(validateAndNormalizePartnerMasterData({ ...valid, schemaVersion: 2 })).toMatchObject({ valid: false, reason: 'newer-version' });
    expect(validateAndNormalizePartnerMasterData({ ...valid, masterDataType: 'services' })).toMatchObject({ valid: false, reason: 'wrong-master-data-type' });
    expect(validateAndNormalizePartnerMasterData({ ...valid, createdAt: '' })).toMatchObject({ valid: false, reason: 'invalid-document' });
    expect(validateAndNormalizePartnerMasterData({ ...valid, records: [{ ...valid.records[0], id: '' }] })).toMatchObject({ valid: false, reason: 'invalid-records' });
    expect(validateAndNormalizePartnerMasterData({ ...valid, records: [valid.records[0], valid.records[0]] })).toMatchObject({ valid: false, reason: 'invalid-records' });
    expect(validateAndNormalizePartnerMasterData({
      ...valid,
      records: [{
        ...valid.records[0],
        deliveryAddresses: [
          valid.records[0].deliveryAddresses[0],
          valid.records[0].deliveryAddresses[0],
        ],
      }],
    })).toMatchObject({ valid: false, reason: 'invalid-records' });
  });

  it('roundtrips a complete partner collection through a named PDF JSON attachment', async () => {
    const document = createDocument();
    const pdfBytes = await embedJsonAttachmentInPdf(await createPlainPdf(), {
      fileName: PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME,
      document,
      creationDate: new Date(timestamps.createdAt),
    });
    const attachment = await readJsonAttachmentFromPdf(pdfBytes, [PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME]);
    const imported = await importPartnerMasterDataPdf(pdfBytes);

    expect(attachment).toMatchObject({ status: 'valid', fileName: PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME });
    expect(imported).toMatchObject({ status: 'valid' });
    if (imported.status !== 'valid') throw new Error(imported.message);
    expect(imported.document).toEqual(document);
  });
});
