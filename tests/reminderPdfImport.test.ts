import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  BELEGE24_ATTACHMENT_FILE_NAME,
  BELEGE24_ATTACHMENT_MIME_TYPE,
  confirmReminderOverwrite,
  embedBelege24DocumentInPdf,
  importReminderPdf,
  mapReminderToDocument,
  validateReminderDocument,
  type ReminderGeneratorState,
} from '../src/documentModel/index.js';

function createReminderState(): ReminderGeneratorState {
  return {
    reminderVariant: 'finalReminder',
    labels: {
      title: 'Mahnung', reminderNumber: 'Mahnungsnummer', reminderDate: 'Datum', customerNumber: 'Kundennummer',
      invoiceNumber: 'Rechnung', externalNumber: 'Extern', dueDate: 'Fälligkeit', overdueDays: 'Tage',
      invoiceTotal: 'Rechnungsbetrag', sumInvoices: 'Summe', interest: 'Zinsen', reminderFee: 'Gebühr', grandTotal: 'Gesamt',
      contactEmail: 'E-Mail', contactPhone: 'Telefon', contactFax: 'Fax', contactWebsite: 'Web',
    },
    reminderData: {
      sender: { companyName: 'Müller GmbH', returnAddress: '  Freie Senderzeile  ', address: { street: 'Äußere Straße', houseNumber: '12', postalCode: '10115', city: 'Berlin' }, contact: { email: 'mail@example.test', phone: ' 1 ', fax: '', website: '' } },
      recipient: { companyName: 'Kunde GmbH', attention: 'z. Hd.', name: 'Buchhaltung', address: { street: 'Weg', houseNumber: '2', postalCode: '20095', city: 'Hamburg' } },
      details: { reminderNumber: 'MAH-1', reminderDate: '2026-07-24', customerNumber: 'K-1' },
      footer: { company: { companyName: 'Müller GmbH', street: 'Straße', houseNumber: '12', postalCode: '10115', city: 'Berlin', extra: '  Hinweis  ' }, tax: { vatIdLabel: 'USt-IdNr.', vatId: 'DE1', taxNumberLabel: 'Steuer-Nr.', taxNumber: '1', commercialRegister: 'HRB 1', representation: 'GF' }, bank: { bankName: 'Bank', ibanLabel: 'IBAN', iban: 'DE1', bicLabel: 'BIC', bic: 'BIC1', bankExtra: '' } },
    },
    openItems: [
      { id: '123e4567-e89b-42d3-a456-426614174000', invoiceNumber: 'RE- 1', externalNumber: 'EXT Ä', dueDate: '2026-05-01', overdueDays: ' 2 ', amount: '001,20' },
      { id: '123e4567-e89b-42d3-a456-426614174001', invoiceNumber: '', externalNumber: '', dueDate: '', overdueDays: '', amount: '' },
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

async function createPlainPdf() {
  const pdf = await PDFDocument.create();
  pdf.addPage([595, 842]);
  return pdf.save();
}

describe('reminder PDF import', () => {
  it('roundtrips validated source data and leaves calculated totals out of the attachment', async () => {
    const state = createReminderState();
    const document = mapReminderToDocument(state);
    const pdf = await embedBelege24DocumentInPdf(await createPlainPdf(), document);

    expect(validateReminderDocument(document)).toEqual({ valid: true, errors: [] });
    expect(document.documentData).not.toHaveProperty('invoiceSum');
    expect(document.documentData).not.toHaveProperty('grandTotal');
    expect(document.documentData.reminderVariant).toBe('finalReminder');
    await expect(importReminderPdf(pdf)).resolves.toEqual({
      status: 'valid', state, message: 'PDF erfolgreich geladen.',
    });
  });

  it('rejects another document type, invalid data and missing attachments without changing the current state', async () => {
    const currentState = createReminderState();
    const snapshot = structuredClone(currentState);
    const invoicePath = fileURLToPath(new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url));
    const invoice = JSON.parse(readFileSync(invoicePath, 'utf8'));
    const invoicePdf = await embedBelege24DocumentInPdf(await createPlainPdf(), invoice);
    const invalidPdf = await PDFDocument.load(await createPlainPdf());
    const invalidDocument = mapReminderToDocument(createReminderState());
    await invalidPdf.attach(
      new TextEncoder().encode(JSON.stringify({
        ...invalidDocument,
        documentData: { ...invalidDocument.documentData, charges: { interest: 1, reminderFee: '5' } },
      })),
      BELEGE24_ATTACHMENT_FILE_NAME,
      { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE },
    );

    await expect(importReminderPdf(invoicePdf)).resolves.toMatchObject({ status: 'wrong-document-type' });
    await expect(importReminderPdf(await invalidPdf.save())).resolves.toMatchObject({ status: 'invalid-data' });
    await expect(importReminderPdf(await createPlainPdf())).resolves.toMatchObject({ status: 'not-found' });
    expect(currentState).toEqual(snapshot);
  });

  it('rejects an unsupported reminder variant', async () => {
    const pdfDocument = await PDFDocument.load(await createPlainPdf());
    const document = mapReminderToDocument(createReminderState());
    await pdfDocument.attach(
      new TextEncoder().encode(JSON.stringify({
        ...document,
        documentData: { ...document.documentData, reminderVariant: 'thirdReminder' },
      })),
      BELEGE24_ATTACHMENT_FILE_NAME,
      { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE },
    );

    await expect(importReminderPdf(await pdfDocument.save())).resolves.toMatchObject({
      status: 'wrong-reminder-variant',
    });
  });

  it('protects changed input and treats new or imported data as its baseline', () => {
    const initial = createReminderState();
    const changed = structuredClone(initial);
    changed.charges.reminderFee = '8.00';
    const confirm = vi.fn(() => false);

    expect(confirmReminderOverwrite(initial, initial, confirm)).toBe(true);
    expect(confirm).not.toHaveBeenCalled();
    expect(confirmReminderOverwrite(changed, initial, confirm)).toBe(false);
    expect(confirm).toHaveBeenCalledOnce();
    expect(confirmReminderOverwrite(changed, changed, confirm)).toBe(true);
  });
});
