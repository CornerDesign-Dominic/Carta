import { describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  BELEGE24_ATTACHMENT_FILE_NAME, BELEGE24_ATTACHMENT_MIME_TYPE,
  confirmDeliveryNoteOverwrite, confirmOfferOverwrite, confirmReceiptOverwrite, confirmSelfReceiptOverwrite,
  embedBelege24DocumentInPdf, importDeliveryNotePdf, importOfferPdf, importReceiptPdf, importSelfReceiptPdf,
  mapDeliveryNoteToDocument, mapOfferToDocument, mapReceiptToDocument, mapSelfReceiptToDocument,
  restoreDeliveryNoteState, restoreOfferState, restoreReceiptState, restoreSelfReceiptState, validateBelege24Document,
  type DeliveryNoteEditorState, type OfferEditorState, type ReceiptGeneratorState, type SelfReceiptEditorState,
} from '../src/documentModel/index.js';

const offerLabelKeys = ['title', 'offerNumber', 'offerDate', 'validUntil', 'internalNumber', 'externalNumber', 'customerNumber', 'position', 'description', 'unitPrice', 'quantity', 'unit', 'tax', 'total', 'net', 'taxAmount', 'grandTotal', 'contactEmail', 'contactPhone', 'contactFax', 'contactWebsite'];
const deliveryLabelKeys = ['title', 'deliveryNoteNumber', 'deliveryDate', 'orderDate', 'internalReference', 'externalReference', 'customerReference', 'position', 'quantity', 'unit', 'description', 'contactEmail', 'contactPhone', 'contactFax', 'contactWebsite'];
const receiptLabelKeys = ['title', 'receiptId', 'receiptDate', 'paymentDate', 'internalReference', 'externalReference', 'netAmount', 'taxRate', 'taxAmount', 'grossAmount', 'amountInWords', 'from', 'purpose', 'placeDate', 'bookingNote', 'receiverSignature'];
const selfReceiptLabelKeys = ['title', 'recipientTitle', 'selfReceiptId', 'receiptDate', 'expenseDate', 'internalReference', 'externalReference', 'costCenter', 'position', 'description', 'netAmount', 'tax', 'grossAmount', 'net', 'taxAmount', 'grandTotal', 'occasion', 'reason', 'settlementType', 'location', 'contactEmail', 'contactPhone', 'contactFax', 'contactWebsite'];
const labels = (keys: string[]) => Object.fromEntries(keys.map((key) => [key, `${key} Ä `]));
const footer = { company: { companyName: 'Müller GmbH', street: 'Äußere Straße', houseNumber: '1', postalCode: '10115', city: 'Berlin', extra: '  Extra  ' }, tax: { vatIdLabel: 'USt.', vatId: 'DE1', taxNumberLabel: 'StNr.', taxNumber: '1', commercialRegister: 'HRB', representation: 'GF' }, bank: { bankName: 'Bank', ibanLabel: 'IBAN', iban: 'DE1', bicLabel: 'BIC', bic: 'BIC', bankExtra: '' } };
const data = (details: Record<string, string>, references: Record<string, string>) => ({ sender: { companyName: 'Müller GmbH', returnAddress: '  Freie Senderzeile  ', address: { street: 'Äußere Straße', houseNumber: '1', postalCode: '10115', city: 'Berlin' }, contact: { email: 'a@test', phone: ' 1 ', fax: '', website: '' } }, recipient: { companyName: 'Kunde', attention: '', name: '  Einkauf ', address: { street: 'Weg', houseNumber: '2', postalCode: '20095', city: 'Hamburg' } }, details, references, footer });
const businessConfig = (details: string[]) => ({ contact: { hidden: ['fax'], order: ['email', 'phone', 'fax', 'website'] }, details: { hidden: [], order: details }, recipient: { hidden: [], order: ['attention', 'name'] }, footerMiddle: { hidden: [], order: ['vatId', 'taxNumber', 'commercialRegister', 'managingDirector'] } });

function offerState(): OfferEditorState { return { labels: labels(offerLabelKeys), offerData: data({ offerNumber: 'ANG 1', offerDate: '2026-07-24', validUntil: '' }, { internalNumber: 'I', externalNumber: 'E', customerNumber: 'K' }), positions: [{ id: '123e4567-e89b-42d3-a456-426614174000', description: 'Leistung  Ä ', unitPrice: '001,20', quantity: ' 2 ', unit: 'Stück', taxRate: '19' }], textBlocks: [{ id: 'intro', label: 'Intro', value: '  Text  ', visible: true }, { id: 'closing', label: 'Ende', value: '', visible: false }], fieldConfig: businessConfig(['offerNumber', 'offerDate', 'validUntil', 'internalNumber', 'externalNumber', 'customerNumber']) }; }
function deliveryState(): DeliveryNoteEditorState { return { labels: labels(deliveryLabelKeys), deliveryNoteData: data({ deliveryNoteNumber: 'LFS 1', deliveryDate: '2026-07-24', orderDate: '' }, { internalReference: 'I', externalReference: 'E', customerReference: 'K' }), positions: [{ id: '123e4567-e89b-42d3-a456-426614174001', quantity: ' 2 ', unit: 'Stück', description: 'Ware Ä', deliveryDate: '', note: '  Hinweis  ' }], textBlocks: [{ id: 'intro', label: 'Intro', value: 'Text', visible: true }, { id: 'closing', label: 'Ende', value: '', visible: false }], fieldConfig: businessConfig(['deliveryNoteNumber', 'deliveryDate', 'orderDate', 'internalReference', 'externalReference', 'customerReference']) }; }
function receiptState(): ReceiptGeneratorState { return { labels: labels(receiptLabelKeys), receiptData: { sender: { companyName: 'Müller GmbH', returnAddress: '  Zeile ', address: { street: 'Äußere Straße', houseNumber: '1', postalCode: '10115', city: 'Berlin' }, contact: { email: 'a@test', phone: '1', website: '' } }, recipient: { companyName: 'Kunde', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } }, details: { receiptId: 'Q-1', receiptDate: '2026-07-24', paymentDate: '', place: 'Berlin', from: 'Kunde', purpose: 'Leistung', bookingNote: '', receiverSignature: '' }, references: { internalReference: 'I', externalReference: 'E' }, amount: { netAmount: '100,00', taxRate: '19', taxAmount: '19,00', grossAmount: '119,00', amountInWords: 'einhundertneunzehn Euro', settlementMethod: 'Bar' }, footer: { company: footer.company, tax: { vatIdLabel: 'USt.', vatId: 'DE1', taxIdLabel: 'StNr.', taxId: '1', representation: 'GF' }, bank: { bankName: 'Bank', ibanLabel: 'IBAN', iban: 'DE1', bicLabel: 'BIC', bic: 'BIC' } } }, amountCalculationSource: 'netAmount', textBlocks: [{ id: 'receiptText', label: 'Text', value: '  Bestätigung ', visible: true }, { id: 'purpose', label: 'Zweck', value: '  Leistung ', visible: true }], fieldConfig: { contact: { hidden: [], order: ['email', 'phone', 'website'] }, details: { hidden: [], order: ['receiptId', 'receiptDate', 'paymentDate', 'internalReference', 'externalReference'] }, header: { hidden: [], order: ['company', 'streetLine', 'cityLine'] }, recipient: { hidden: [], order: ['attention', 'name'] }, footerMiddle: { hidden: [], order: ['vatId', 'taxId', 'representation'] } } }; }
async function plainPdf() { const pdf = await PDFDocument.create(); pdf.addPage([595, 842]); return pdf.save(); }

function selfReceiptState(): SelfReceiptEditorState { const business = data({ selfReceiptId: 'EB-1', receiptDate: '2026-07-24', expenseDate: '2026-07-23' }, { internalReference: 'I', externalReference: 'E', costCenter: 'K-1' }); return { labels: labels(selfReceiptLabelKeys), selfReceiptData: { sender: business.sender, recipient: business.recipient, details: { selfReceiptId: 'EB-1', receiptDate: '2026-07-24', expenseDate: '2026-07-23' }, references: { internalReference: 'I', externalReference: 'E', costCenter: 'K-1' }, footer: business.footer, expenseInfo: { occasion: 'Termin', reason: 'Kein Fremdbeleg', settlementType: 'Bar', location: 'Berlin' } }, positions: [{ id: '123e4567-e89b-42d3-a456-426614174002', description: 'Leistung', netAmount: '42,00', taxRate: '19' }], fieldConfig: { ...businessConfig(['selfReceiptId', 'receiptDate', 'expenseDate', 'internalReference', 'externalReference', 'costCenter']), expenseInfo: { hidden: ['reason'], order: ['reason', 'settlementType', 'location'] }, signature: { hidden: ['signature'], order: ['signature'] } } }; }
function shortSelfReceiptState(): SelfReceiptEditorState { return { ...selfReceiptState(), selfReceiptVariant: 'short', shortSelfReceipt: { title: 'Eigenbeleg Barzahlung', receiptNumber: 'Beleg Nr. 001', recipientAddress: 'Firma Meier\nMusterstraße 12\n12345 Musterhausen', purpose: 'Bürostuhl', reason: 'Originalbeleg verloren', date: '2026-07-24', dateLabel: 'Belegdatum', signatureLabel: 'Freigabe', signatureValue: 'Max Mustermann', ownAddress: { company: 'Muster GmbH', street: 'Musterstraße 1', cityLine: '10115 Berlin' }, amount: { calculationSource: 'netAmount', sourceAmount: '100,00', taxRate: '19' }, fieldConfig: { signature: { hidden: ['signature'], order: ['signature'] }, header: { hidden: ['streetLine'], order: ['company', 'streetLine', 'cityLine'] } } } }; }

describe('offer, delivery note and receipt PDF imports', () => {
  it('roundtrips complete validated offer source data', async () => {
    const state = offerState(); const document = mapOfferToDocument(state);
    expect(validateBelege24Document(document)).toEqual({ valid: true, errors: [] });
    expect(restoreOfferState(document)).toEqual({ status: 'valid', state });
    await expect(importOfferPdf(await embedBelege24DocumentInPdf(await plainPdf(), document))).resolves.toEqual({ status: 'valid', state, message: 'PDF erfolgreich geladen.' });
  });

  it('roundtrips complete validated delivery note source data', async () => {
    const state = deliveryState(); const document = mapDeliveryNoteToDocument(state);
    expect(validateBelege24Document(document)).toEqual({ valid: true, errors: [] });
    expect(restoreDeliveryNoteState(document)).toEqual({ status: 'valid', state });
    await expect(importDeliveryNotePdf(await embedBelege24DocumentInPdf(await plainPdf(), document))).resolves.toEqual({ status: 'valid', state, message: 'PDF erfolgreich geladen.' });
  });

  it('roundtrips complete validated receipt source data', async () => {
    const state = receiptState(); const document = mapReceiptToDocument(state);
    expect(validateBelege24Document(document)).toEqual({ valid: true, errors: [] });
    expect(restoreReceiptState(document)).toEqual({ status: 'valid', state });
    expect(document.documentData.state.receiptData.amount).not.toHaveProperty('taxAmount');
    await expect(importReceiptPdf(await embedBelege24DocumentInPdf(await plainPdf(), document))).resolves.toEqual({ status: 'valid', state, message: 'PDF erfolgreich geladen.' });
  });

  it('roundtrips complete validated self receipt source data', async () => {
    const state = selfReceiptState(); const document = mapSelfReceiptToDocument(state);
    expect(validateBelege24Document(document)).toEqual({ valid: true, errors: [] });
    expect(document.document.documentType).toBe('selfReceipt');
    expect(document.documentData.state.positions[0]).not.toHaveProperty('category');
    expect(document.documentData.state).not.toHaveProperty('textBlocks');
    expect(restoreSelfReceiptState(document)).toEqual({ status: 'valid', state });
    await expect(importSelfReceiptPdf(await embedBelege24DocumentInPdf(await plainPdf(), document))).resolves.toEqual({ status: 'valid', state, message: 'PDF erfolgreich geladen.' });
  });

  it('roundtrips the validated short self receipt variant and its visible-state configuration', async () => {
    const state = shortSelfReceiptState(); const document = mapSelfReceiptToDocument(state);
    expect(validateBelege24Document(document)).toEqual({ valid: true, errors: [] });
    expect(document.documentData.state.selfReceiptVariant).toBe('short');
    expect(document.documentData.state.shortSelfReceipt?.fieldConfig.signature.hidden).toEqual(['signature']);
    expect(document.documentData.state.shortSelfReceipt?.fieldConfig.header.hidden).toEqual(['streetLine']);
    expect(document.documentData.state.shortSelfReceipt).toMatchObject({ dateLabel: 'Belegdatum', signatureLabel: 'Freigabe', signatureValue: 'Max Mustermann', ownAddress: { company: 'Muster GmbH', street: 'Musterstraße 1', cityLine: '10115 Berlin' } });
    expect(restoreSelfReceiptState(document)).toEqual({ status: 'valid', state });
    await expect(importSelfReceiptPdf(await embedBelege24DocumentInPdf(await plainPdf(), document))).resolves.toEqual({ status: 'valid', state, message: 'PDF erfolgreich geladen.' });
  });

  it('rejects wrong document types, invalid structures and attachments without state mutation', async () => {
    const current = offerState();
    const snapshot = structuredClone(current);
    const wrongType = await embedBelege24DocumentInPdf(await plainPdf(), mapDeliveryNoteToDocument(deliveryState()));
    const invalid = { ...mapOfferToDocument(offerState()), documentData: { state: { ...mapOfferToDocument(offerState()).documentData.state, positions: [] } } };
    await expect(importOfferPdf(wrongType)).resolves.toMatchObject({ status: 'wrong-document-type' });
    const invalidPdf = await PDFDocument.load(await plainPdf());
    await invalidPdf.attach(new TextEncoder().encode(JSON.stringify(invalid)), BELEGE24_ATTACHMENT_FILE_NAME, { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE });
    await expect(importOfferPdf(await invalidPdf.save())).resolves.toMatchObject({ status: 'invalid-data' });
    await expect(importOfferPdf(await plainPdf())).resolves.toMatchObject({ status: 'not-found' });
    expect(current).toEqual(snapshot);
  });

  it('recognizes unchanged, changed and newly established overwrite baselines', () => {
    const offer = offerState(); const changedOffer = structuredClone(offer); changedOffer.positions[0].quantity = '3';
    const delivery = deliveryState(); const receipt = receiptState(); const confirm = vi.fn(() => false);
    expect(confirmOfferOverwrite(offer, offer, confirm)).toBe(true);
    expect(confirmOfferOverwrite(changedOffer, offer, confirm)).toBe(false);
    expect(confirmOfferOverwrite(changedOffer, changedOffer, confirm)).toBe(true);
    expect(confirmDeliveryNoteOverwrite(delivery, delivery, confirm)).toBe(true);
    expect(confirmReceiptOverwrite(receipt, receipt, confirm)).toBe(true);
    const selfReceipt = selfReceiptState(); const changedSelfReceipt = structuredClone(selfReceipt); changedSelfReceipt.positions[0].netAmount = '43,00';
    expect(confirmSelfReceiptOverwrite(selfReceipt, selfReceipt, confirm)).toBe(true);
    expect(confirmSelfReceiptOverwrite(changedSelfReceipt, selfReceipt, confirm)).toBe(false);
  });
});
