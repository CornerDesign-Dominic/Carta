import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { mapCreditNoteToDocument, validateBelege24Document } from '../src/documentModel/index.js';

function createCreditNote() {
  return mapCreditNoteToDocument({
    creditNoteVariant: 'creditNote', isSmallBusiness: false, labels: {},
    offerData: {
      sender: { companyName: '', returnAddress: '', address: { street: '', houseNumber: '', postalCode: '', city: '' }, contact: { email: '', phone: '', fax: '', website: '' } },
      recipient: { companyName: '', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } },
      details: { creditNoteNumber: '', creditNoteDate: '', serviceDate: '' }, references: { internalReference: '', externalReference: '', customerReference: '' }, correction: { originalInvoiceNumber: '', cancellationReason: '', correctionReason: '' },
      footer: { company: { companyName: '', street: '', houseNumber: '', postalCode: '', city: '', extra: '' }, tax: { vatIdLabel: '', vatId: '', taxNumberLabel: '', taxNumber: '', commercialRegister: '', representation: '' }, bank: { bankName: '', ibanLabel: '', iban: '', bicLabel: '', bic: '', bankExtra: '' } },
    },
    positions: [], textBlocks: [], fieldConfig: { contact: { hidden: [], order: [] }, details: { hidden: [], order: [] }, recipient: { hidden: [], order: [] }, footerMiddle: { hidden: [], order: [] } },
  });
}

describe('Belege24 document validation dispatcher', () => {
  it('accepts a valid invoice', () => {
    const invoicePath = fileURLToPath(new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url));
    expect(validateBelege24Document(JSON.parse(readFileSync(invoicePath, 'utf8'))).valid).toBe(true);
  });

  it('accepts a valid credit note', () => {
    expect(validateBelege24Document(createCreditNote()).valid).toBe(true);
  });

  it('rejects an unknown document type', () => {
    const creditNote = createCreditNote();
    const unknownDocumentType = {
      ...creditNote,
      document: { ...creditNote.document, documentType: 'offer' },
    };
    expect(validateBelege24Document(unknownDocumentType).valid).toBe(false);
  });

  it('rejects unknown credit note variants', () => {
    const creditNote = createCreditNote();
    const unknownVariant = {
      ...creditNote,
      documentData: { ...creditNote.documentData, creditNoteVariant: 'unknownVariant' },
    };
    expect(validateBelege24Document(unknownVariant).valid).toBe(false);
  });
});
