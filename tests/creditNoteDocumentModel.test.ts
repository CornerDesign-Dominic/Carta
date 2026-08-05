import { describe, expect, it } from 'vitest';
import {
  mapCreditNoteToDocument,
  restoreCreditNoteState,
  validateCreditNoteDocument,
  type CreditNoteGeneratorState,
  type CreditNoteVariant,
} from '../src/documentModel/index.js';

function createCreditNoteState(creditNoteVariant: CreditNoteVariant): CreditNoteGeneratorState {
  return {
    creditNoteVariant,
    isSmallBusiness: true,
    labels: { title: 'Gutschrift Ä', originalInvoiceNumber: 'Ursprungsrechnung' },
    offerData: {
      sender: { companyName: 'Müller  GmbH', returnAddress: '  frei  ', address: { street: 'Äußere Straße', houseNumber: '', postalCode: ' 12345 ', city: 'Köln' }, contact: { email: '', phone: ' 1 ', fax: '', website: '' } },
      recipient: { companyName: 'Käufer', attention: '', name: '  Abteilung  ', address: { street: '', houseNumber: '', postalCode: '', city: '' } },
      details: { creditNoteNumber: 'GUT- 1', creditNoteDate: '', serviceDate: '' },
      references: { internalReference: '', externalReference: 'Ä', customerReference: '' },
      correction: { originalInvoiceNumber: 'RE 1', cancellationReason: '  Stornieren  ', correctionReason: '  Korrigieren  ' },
      footer: { company: { companyName: '', street: '', houseNumber: '', postalCode: '', city: '', extra: '  ' }, tax: { vatIdLabel: '', vatId: '', taxNumberLabel: '', taxNumber: '', commercialRegister: '', representation: '' }, bank: { bankName: '', ibanLabel: '', iban: '', bicLabel: '', bic: '', bankExtra: '' } },
    },
    positions: [{ id: '123e4567-e89b-42d3-a456-426614174000', description: 'Öl', unitPrice: '001,20', quantity: ' 2 ', unit: '', taxRate: '7,5' }, { id: '123e4567-e89b-42d3-a456-426614174001', description: '', unitPrice: '', quantity: '', unit: 'Stk.', taxRate: '' }],
    textBlocks: [
      { id: 'intro', label: 'Einleitung', value: '  Ä  ', visible: true },
      { id: 'closing', label: 'Ende', value: '', visible: false },
      ...(creditNoteVariant === 'creditNote'
        ? [
            { id: 'payoutNotice', label: 'Auszahlungshinweis', value: 'Die Zahlung wird auf folgende Bankverbindung vorgenommen:', visible: true },
            { id: 'payoutIban', label: 'IBAN', value: 'IBAN: DE12 3456 7890 1234 5678 90', visible: false },
            { id: 'payoutBic', label: 'BIC', value: 'BIC:', visible: true },
          ]
        : []),
    ],
    fieldConfig: { contact: { hidden: [], order: ['email'] }, details: { hidden: ['serviceDate'], order: ['creditNoteNumber'] }, recipient: { hidden: [], order: ['attention'] }, footerMiddle: { hidden: [], order: ['vatId'] } },
  };
}

describe('credit note mapping and validation', () => {
  it.each<CreditNoteVariant>(['creditNote', 'cancellationInvoice', 'invoiceCorrection'])(
    'roundtrips %s without changing generator values or ordering',
    (creditNoteVariant) => {
      const state = createCreditNoteState(creditNoteVariant);
      const document = mapCreditNoteToDocument(state);

      expect(validateCreditNoteDocument(document)).toEqual({ valid: true, errors: [] });
      expect(restoreCreditNoteState(document)).toEqual({ status: 'valid', state });
    },
  );

  it('rejects an unknown variant', () => {
    const document = mapCreditNoteToDocument(createCreditNoteState('creditNote'));
    const unknownVariant = {
      ...document,
      documentData: { ...document.documentData, creditNoteVariant: 'unknownVariant' },
    };

    expect(validateCreditNoteDocument(unknownVariant).valid).toBe(false);
    expect(restoreCreditNoteState(unknownVariant)).toEqual({ status: 'wrong-variant' });
  });

  it.each([
    ['cancellationInvoice', 'cancellationReason'],
    ['invoiceCorrection', 'correctionReason'],
  ] as const)('rejects %s without required %s', (creditNoteVariant, missingField) => {
    const document = mapCreditNoteToDocument(createCreditNoteState(creditNoteVariant));
    const { [missingField]: _missingValue, ...correction } = document.documentData.correction;
    const incomplete = {
      ...document,
      documentData: { ...document.documentData, correction },
    };

    expect(validateCreditNoteDocument(incomplete).valid).toBe(false);
    expect(restoreCreditNoteState(incomplete)).toEqual({ status: 'invalid' });
  });
});
