import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  mapCreditNoteToDocument,
  mapReminderToDocument,
  restoreReminderState,
  validateBelege24Document,
  validateReminderDocument,
  type ReminderGeneratorState,
} from '../src/documentModel/index.js';

function createReminderState(): ReminderGeneratorState {
  return {
    reminderVariant: 'secondReminder',
    labels: {
      title: 'Mahnung Ä', reminderNumber: 'Mahnungsnummer', reminderDate: 'Belegdatum', customerNumber: 'Kundennummer',
      invoiceNumber: 'Rechnung Nr.', externalNumber: 'Externe Nummer', dueDate: 'Fälligkeit', overdueDays: 'Verzug',
      invoiceTotal: 'Rechnungsbetrag', sumInvoices: 'Summe Rechnungen', interest: 'Zinsen', reminderFee: 'Mahngebühr', grandTotal: 'Zu zahlen',
      contactEmail: 'E-Mail', contactPhone: 'Telefon', contactFax: 'Fax', contactWebsite: 'Webseite',
    },
    reminderData: {
      sender: { companyName: 'Müller  GmbH', returnAddress: '  frei  ', address: { street: 'Äußere Straße', houseNumber: '', postalCode: ' 12345 ', city: 'Köln' }, contact: { email: '', phone: ' 1 ', fax: '', website: '' } },
      recipient: { companyName: 'Käufer', attention: '', name: '  Abteilung  ', address: { street: '', houseNumber: '', postalCode: '', city: '' } },
      details: { reminderNumber: 'MAH- 1', reminderDate: '', customerNumber: 'K Ä' },
      footer: { company: { companyName: '', street: '', houseNumber: '', postalCode: '', city: '', extra: '  ' }, tax: { vatIdLabel: '', vatId: '', taxNumberLabel: '', taxNumber: '', commercialRegister: '', representation: '' }, bank: { bankName: '', ibanLabel: '', iban: '', bicLabel: '', bic: '', bankExtra: '' } },
    },
    openItems: [
      { id: '123e4567-e89b-42d3-a456-426614174000', invoiceNumber: 'RE- 1', externalNumber: 'EXT Ä', dueDate: '', overdueDays: ' 2 ', amount: '001,20' },
      { id: '123e4567-e89b-42d3-a456-426614174001', invoiceNumber: '', externalNumber: '', dueDate: '2026-05-01', overdueDays: '', amount: '' },
    ],
    charges: { interest: ' 0,50 ', reminderFee: '' },
    textBlocks: [{ id: 'intro', label: 'Einleitung', value: '  Ä  ', visible: true }, { id: 'closing', label: 'Ende', value: '', visible: false }],
    fieldConfig: {
      contact: { hidden: ['fax'], order: ['website', 'email', 'phone', 'fax'] },
      details: { hidden: ['customerNumber'], order: ['customerNumber', 'reminderDate', 'reminderNumber'] },
      recipient: { hidden: ['attention'], order: ['name', 'attention'] },
      footerMiddle: { hidden: ['taxNumber'], order: ['managingDirector', 'vatId', 'commercialRegister', 'taxNumber'] },
    },
  };
}

describe('reminder document mapping and validation', () => {
  it('maps and restores the complete generator state without normalizing inputs', () => {
    const state = createReminderState();
    const document = mapReminderToDocument(state);

    expect(document.document.documentType).toBe('reminder');
    expect(document.documentData.reminderVariant).toBe('secondReminder');
    expect(document.documentData.openItems).toEqual(state.openItems);
    expect(document.documentData.textBlocks).toEqual(state.textBlocks);
    expect(document.documentData.fieldConfiguration).toEqual(state.fieldConfig);
    expect(document.documentData.charges).toEqual(state.charges);
    expect(restoreReminderState(document)).toEqual({ status: 'valid', state });
  });

  it('accepts a valid reminder through the central dispatcher', () => {
    expect(validateBelege24Document(mapReminderToDocument(createReminderState()))).toEqual({
      valid: true,
      errors: [],
    });
  });

  it('rejects incomplete data and wrong field types', () => {
    const document = mapReminderToDocument(createReminderState());
    const { charges: _charges, ...withoutCharges } = document.documentData;
    const incomplete = { ...document, documentData: withoutCharges };
    const wrongAmountType = {
      ...document,
      documentData: {
        ...document.documentData,
        openItems: [{ ...document.documentData.openItems[0], amount: 12 }],
      },
    };

    expect(validateReminderDocument(incomplete).valid).toBe(false);
    expect(validateReminderDocument(wrongAmountType).valid).toBe(false);
  });

  it('rejects an unknown reminder variant while accepting older PDFs without one', () => {
    const document = mapReminderToDocument(createReminderState());
    const unknownVariant = {
      ...document,
      documentData: { ...document.documentData, reminderVariant: 'thirdReminder' },
    };
    const { reminderVariant: _legacyVariant, ...legacyData } = document.documentData;
    const legacyDocument = { ...document, documentData: legacyData };

    expect(validateReminderDocument(unknownVariant)).toEqual({
      valid: false,
      errors: ['documentData.reminderVariant must be "paymentReminder", "firstReminder", "secondReminder" or "finalReminder"'],
    });
    expect(restoreReminderState(legacyDocument)).toMatchObject({
      status: 'valid',
      state: { reminderVariant: 'paymentReminder' },
    });
  });

  it('rejects a wrong or unknown document type', () => {
    const document = mapReminderToDocument(createReminderState());
    const wrongType = { ...document, document: { ...document.document, documentType: 'invoice' } };
    const unknownType = { ...document, document: { ...document.document, documentType: 'unknown' } };

    expect(restoreReminderState(wrongType)).toEqual({ status: 'wrong-document-type' });
    expect(validateReminderDocument(wrongType).valid).toBe(false);
    expect(validateBelege24Document(unknownType).valid).toBe(false);
  });

  it('keeps invoice and credit note validation available', () => {
    const invoicePath = fileURLToPath(new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url));
    const invoice = JSON.parse(readFileSync(invoicePath, 'utf8'));
    const creditNote = mapCreditNoteToDocument({
      creditNoteVariant: 'creditNote', isSmallBusiness: false, labels: {},
      offerData: {
        sender: { companyName: '', returnAddress: '', address: { street: '', houseNumber: '', postalCode: '', city: '' }, contact: { email: '', phone: '', fax: '', website: '' } },
        recipient: { companyName: '', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } },
        details: { creditNoteNumber: '', creditNoteDate: '', serviceDate: '' }, references: { internalReference: '', externalReference: '', customerReference: '' }, correction: { originalInvoiceNumber: '', cancellationReason: '', correctionReason: '' },
        footer: { company: { companyName: '', street: '', houseNumber: '', postalCode: '', city: '', extra: '' }, tax: { vatIdLabel: '', vatId: '', taxNumberLabel: '', taxNumber: '', commercialRegister: '', representation: '' }, bank: { bankName: '', ibanLabel: '', iban: '', bicLabel: '', bic: '', bankExtra: '' } },
      },
      positions: [], textBlocks: [], fieldConfig: { contact: { hidden: [], order: [] }, details: { hidden: [], order: [] }, recipient: { hidden: [], order: [] }, footerMiddle: { hidden: [], order: [] } },
    });

    expect(validateBelege24Document(invoice).valid).toBe(true);
    expect(validateBelege24Document(creditNote).valid).toBe(true);
  });
});
