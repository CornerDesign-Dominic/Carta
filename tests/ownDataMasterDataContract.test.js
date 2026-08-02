import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { embedJsonAttachmentInPdf } from '../src/documentModel/pdfAttachment.js';
import { createOwnDataEditorState, createOwnDataRecord, ownDataEditorReducer } from '../src/masterData/ownDataModel.js';
import {
  createOwnDataMasterDataDocument,
  importOwnDataMasterDataPdf,
  OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME,
  validateAndNormalizeOwnDataMasterData,
} from '../src/masterData/ownDataContract.js';

const timestamps = { createdAt: '2026-07-26T12:00:00.000Z', updatedAt: '2026-07-26T12:00:00.000Z' };
function createRecord() {
  return createOwnDataRecord({
    companyName: 'Muster GmbH', legalForm: 'GmbH', ownerOrManagingDirector: 'Max Muster', contactPerson: 'Mara Muster', department: 'Verwaltung',
    address: { companyName: 'Muster GmbH', street: 'Musterweg', houseNumber: '12', postalCode: '42103', city: 'Wuppertal' },
    contact: { email: 'post@muster.test', phone: '+49 202 1234' },
    taxAndRegister: { taxNumber: '123/456/789', vatId: 'DE123456789', commercialRegister: 'HRB', registerNumber: '1234', registerCourt: 'Wuppertal' },
    bank: { accountHolder: 'Muster GmbH', bankName: 'Musterbank', iban: 'DE12 3456 7890 1234 5678 90', bic: 'MUSTDEFFXXX' },
    settings: { isSmallBusiness: true, defaultPaymentTermDays: '14' }, isActive: false,
  });
}
function createDocument(records = [createRecord()]) {
  return createOwnDataMasterDataDocument({ records, documentId: 'masterdata-own-test', ...timestamps });
}

describe('own data master data model and contract', () => {
  it('creates a standard record and keeps only the current company in the editor', () => {
    const record = createOwnDataRecord();
    const replacement = createOwnDataRecord({ companyName: 'Nachfolger GmbH' });
    const state = ownDataEditorReducer(createOwnDataEditorState(), { type: 'upsert', record });
    const replacedState = ownDataEditorReducer(state, { type: 'upsert', record: replacement });

    expect(record).toMatchObject({ id: expect.stringMatching(/^own-data-/), address: { country: 'Deutschland' }, settings: { isSmallBusiness: false, defaultPaymentTermDays: '' }, isActive: true });
    expect(replacedState).toMatchObject({ records: [replacement], activeRecordId: replacement.id });
  });

  it('normalizes optional fields while retaining records and their IDs in order', () => {
    const record = createRecord();
    const result = validateAndNormalizeOwnDataMasterData(createDocument([{ id: record.id, companyName: record.companyName, settings: { isSmallBusiness: true } }]));
    expect(result.valid).toBe(true);
    if (!result.valid) throw new Error('Expected valid own data.');
    expect(result.document.records[0]).toMatchObject({ id: record.id, legalForm: '', address: { country: 'Deutschland' }, settings: { isSmallBusiness: true, defaultPaymentTermDays: '' }, isActive: true });
  });

  it('rejects invalid headers, invalid settings and duplicate or missing IDs', () => {
    const valid = createDocument();
    expect(validateAndNormalizeOwnDataMasterData({ ...valid, schema: 'other' })).toMatchObject({ valid: false, reason: 'wrong-schema' });
    expect(validateAndNormalizeOwnDataMasterData({ ...valid, schemaVersion: 2 })).toMatchObject({ valid: false, reason: 'newer-version' });
    expect(validateAndNormalizeOwnDataMasterData({ ...valid, masterDataType: 'partners' })).toMatchObject({ valid: false, reason: 'wrong-master-data-type' });
    expect(validateAndNormalizeOwnDataMasterData({ ...valid, records: [{ ...valid.records[0], id: '' }] })).toMatchObject({ valid: false, reason: 'invalid-records' });
    expect(validateAndNormalizeOwnDataMasterData({ ...valid, records: [valid.records[0], valid.records[0]] })).toMatchObject({ valid: false, reason: 'invalid-records' });
    expect(validateAndNormalizeOwnDataMasterData({ ...valid, records: [{ ...valid.records[0], settings: { defaultPaymentTermDays: '1.5' } }] })).toMatchObject({ valid: false, reason: 'invalid-records' });
  });

  it('roundtrips complete own data through the named PDF attachment', async () => {
    const document = createDocument([createRecord(), createOwnDataRecord({ companyName: 'Zweite Einheit', settings: { defaultPaymentTermDays: '30' } })]);
    const pdf = await PDFDocument.create(); pdf.addPage([595, 842]);
    const pdfBytes = await embedJsonAttachmentInPdf(await pdf.save(), { fileName: OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME, document, creationDate: new Date(timestamps.createdAt) });
    const imported = await importOwnDataMasterDataPdf(pdfBytes);
    expect(imported).toMatchObject({ status: 'valid' });
    if (imported.status !== 'valid') throw new Error(imported.message);
    expect(imported.document).toEqual(document);
  });
});
