import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  BELEGE24_ATTACHMENT_FILE_NAME,
  BELEGE24_ATTACHMENT_MIME_TYPE,
  confirmStandardInvoiceOverwrite,
  embedBelege24DocumentInPdf,
  importStandardInvoicePdf,
  type StandardInvoiceGeneratorState,
} from '../src/documentModel/index.js';

function readExampleDocument() {
  const examplePath = fileURLToPath(
    new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url),
  );
  return JSON.parse(readFileSync(examplePath, 'utf8'));
}

async function createPlainPdf() {
  const pdf = await PDFDocument.create();
  pdf.addPage([595, 842]);
  return pdf.save();
}

describe('visible standard-invoice PDF import', () => {
  it('loads a valid invoice PDF with exact addresses, text and generator decimal inputs', async () => {
    const pdf = await embedBelege24DocumentInPdf(await createPlainPdf(), readExampleDocument());
    const result = await importStandardInvoicePdf(pdf);

    expect(result.status).toBe('valid');
    if (result.status !== 'valid') throw new Error(result.message);
    expect(result.state.invoiceData.sender.returnAddress).toBe(
      'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
    );
    expect(result.state.invoiceData.recipient.address).toEqual({
      street: 'Kundenstraße',
      houseNumber: '8',
      postalCode: '20095',
      city: 'Hamburg',
    });
    expect(result.state.textBlocks[0].value).toContain('vielen Dank für Ihren Auftrag');
    expect(result.state.positions[0].unitPrice).toBe('125.50');
    expect(result.state.previousPayments[0].netAmount).toBe('0');
  });

  it('returns understandable errors for non-importable PDFs without changing current state', async () => {
    const currentState = { marker: 'unverändert' };
    const snapshot = structuredClone(currentState);
    const plainResult = await importStandardInvoicePdf(await createPlainPdf());

    const invalidPdf = await PDFDocument.load(await createPlainPdf());
    await invalidPdf.attach(
      new TextEncoder().encode('{invalid'),
      BELEGE24_ATTACHMENT_FILE_NAME,
      { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE },
    );
    const invalidResult = await importStandardInvoicePdf(await invalidPdf.save());

    expect(plainResult).toEqual({
      status: 'not-found',
      message: 'Diese PDF enthält keine Belege24-Daten.',
    });
    expect(invalidResult).toEqual({
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    });
    expect(currentState).toEqual(snapshot);
  });

  it('skips confirmation for the initial state and protects changed input on cancel', () => {
    const initial = { marker: 'initial' } as unknown as StandardInvoiceGeneratorState;
    const changed = { marker: 'geändert' } as unknown as StandardInvoiceGeneratorState;
    const confirm = vi.fn(() => false);

    expect(confirmStandardInvoiceOverwrite(initial, initial, confirm)).toBe(true);
    expect(confirm).not.toHaveBeenCalled();
    expect(confirmStandardInvoiceOverwrite(changed, initial, confirm)).toBe(false);
    expect(confirm).toHaveBeenCalledOnce();

    confirm.mockReturnValue(true);
    expect(confirmStandardInvoiceOverwrite(changed, initial, confirm)).toBe(true);
  });
});
