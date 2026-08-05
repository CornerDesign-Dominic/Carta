import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  BELEGE24_ATTACHMENT_FILE_NAME,
  BELEGE24_ATTACHMENT_MIME_TYPE,
  confirmCreditNoteOverwrite,
  embedBelege24DocumentInPdf,
  importCreditNotePdf,
  mapCreditNoteToDocument,
  type CreditNoteGeneratorState,
  type CreditNoteVariant,
} from '../src/documentModel/index.js';

function createCreditNoteState(creditNoteVariant: CreditNoteVariant = 'creditNote'): CreditNoteGeneratorState {
  return {
    creditNoteVariant, isSmallBusiness: true, labels: { title: 'Gutschrift', creditNoteNumber: 'Nummer' },
    offerData: {
      sender: { companyName: 'Muster GmbH', returnAddress: 'Musterzeile', address: { street: 'Straße', houseNumber: '1', postalCode: '10115', city: 'Berlin' }, contact: { email: 'a@example.test', phone: '1', fax: '', website: '' } },
      recipient: { companyName: 'Kunde GmbH', attention: 'z. Hd.', name: 'Buchhaltung', address: { street: 'Weg', houseNumber: '2', postalCode: '20095', city: 'Hamburg' } },
      details: { creditNoteNumber: 'GUT-1', creditNoteDate: '2026-07-24', serviceDate: '2026-07-23' }, references: { internalReference: 'I-1', externalReference: 'E-1', customerReference: 'K-1' }, correction: { originalInvoiceNumber: 'RE-1', cancellationReason: 'Grund', correctionReason: 'Korrektur' },
      footer: { company: { companyName: 'Muster GmbH', street: 'Straße', houseNumber: '1', postalCode: '10115', city: 'Berlin', extra: 'Extra' }, tax: { vatIdLabel: 'USt-IdNr.', vatId: 'DE1', taxNumberLabel: 'Steuernummer', taxNumber: '1', commercialRegister: 'HRB 1', representation: 'GF' }, bank: { bankName: 'Bank', ibanLabel: 'IBAN', iban: 'DE1', bicLabel: 'BIC', bic: 'BIC1', bankExtra: 'Hinweis' } },
    },
    positions: [{ id: '123e4567-e89b-42d3-a456-426614174000', description: 'Leistung', unitPrice: '10,00', quantity: '2', unit: 'Stück', taxRate: '19' }],
    textBlocks: [
      { id: 'intro', label: 'Einleitung', value: 'Text', visible: true },
      ...(creditNoteVariant === 'creditNote'
        ? [
            { id: 'payoutNotice', label: 'Auszahlungshinweis', value: 'Die Zahlung wird auf folgende Bankverbindung vorgenommen:', visible: true },
            { id: 'payoutIban', label: 'IBAN', value: 'IBAN: DE12 3456 7890 1234 5678 90', visible: true },
            { id: 'payoutBic', label: 'BIC', value: 'BIC:', visible: false },
          ]
        : []),
    ],
    fieldConfig: { contact: { hidden: ['fax'], order: ['email'] }, details: { hidden: [], order: ['creditNoteNumber'] }, recipient: { hidden: [], order: ['attention'] }, footerMiddle: { hidden: [], order: ['vatId'] } },
  };
}

async function createPlainPdf() {
  const pdf = await PDFDocument.create();
  pdf.addPage([595, 842]);
  return pdf.save();
}

describe('credit-note PDF import', () => {
  it.each<CreditNoteVariant>(['creditNote', 'cancellationInvoice', 'invoiceCorrection'])(
    'roundtrips all PDF data for %s',
    async (creditNoteVariant) => {
      const state = createCreditNoteState(creditNoteVariant);
      state.offerData.correction = {
        originalInvoiceNumber: `RE-${creditNoteVariant} Ä`,
        cancellationReason: `Storno ${creditNoteVariant}  `,
        correctionReason: `Korrektur ${creditNoteVariant}  `,
      };
      const pdf = await embedBelege24DocumentInPdf(await createPlainPdf(), mapCreditNoteToDocument(state));
      const result = await importCreditNotePdf(pdf, creditNoteVariant);

      expect(result.status).toBe('valid');
      if (result.status !== 'valid') throw new Error(result.message);
      expect(result.state).toEqual(state);
    },
  );

  it('rejects invoices and unsupported credit note variants', async () => {
    const invoicePath = fileURLToPath(new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url));
    const invoice = JSON.parse(readFileSync(invoicePath, 'utf8'));
    const invoiceResult = await importCreditNotePdf(
      await embedBelege24DocumentInPdf(await createPlainPdf(), invoice),
    );
    const invalidVariantPdf = await PDFDocument.load(await createPlainPdf());
    const document = mapCreditNoteToDocument(createCreditNoteState());
    const invalidVariant = {
      ...document,
      documentData: { ...document.documentData, creditNoteVariant: 'unknownVariant' },
    };
    await invalidVariantPdf.attach(
      new TextEncoder().encode(JSON.stringify(invalidVariant)),
      BELEGE24_ATTACHMENT_FILE_NAME,
      { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE },
    );

    expect(invoiceResult).toMatchObject({ status: 'wrong-document-type' });
    expect(await importCreditNotePdf(await invalidVariantPdf.save())).toMatchObject({ status: 'wrong-credit-note-variant' });
  });

  it('rejects a valid but differently selected credit note variant', async () => {
    const cancellationInvoice = createCreditNoteState('cancellationInvoice');
    const pdf = await embedBelege24DocumentInPdf(
      await createPlainPdf(),
      mapCreditNoteToDocument(cancellationInvoice),
    );

    await expect(importCreditNotePdf(pdf, 'invoiceCorrection')).resolves.toMatchObject({
      status: 'wrong-credit-note-variant',
    });
  });

  it('returns invalid data without changing the existing state', async () => {
    const currentState = createCreditNoteState();
    const snapshot = structuredClone(currentState);
    const result = await importCreditNotePdf(await createPlainPdf());

    expect(result).toMatchObject({ status: 'not-found' });
    expect(currentState).toEqual(snapshot);
  });

  it.each<CreditNoteVariant>(['creditNote', 'cancellationInvoice', 'invoiceCorrection'])(
    'protects changed %s input and treats a new initial state as unchanged',
    (creditNoteVariant) => {
      const initial = createCreditNoteState(creditNoteVariant);
      const changed = structuredClone(initial);
      changed.offerData.correction.originalInvoiceNumber = 'Geändert';
      const confirm = vi.fn(() => false);

      expect(confirmCreditNoteOverwrite(initial, initial, confirm)).toBe(true);
      expect(confirm).not.toHaveBeenCalled();
      expect(confirmCreditNoteOverwrite(changed, initial, confirm)).toBe(false);
      expect(confirm).toHaveBeenCalledOnce();
      expect(confirmCreditNoteOverwrite(changed, changed, confirm)).toBe(true);
    },
  );
});
