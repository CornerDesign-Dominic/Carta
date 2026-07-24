import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  BELEGE24_ATTACHMENT_FILE_NAME,
  BELEGE24_ATTACHMENT_MIME_TYPE,
  confirmGoodsInvoiceOverwrite,
  confirmStandardInvoiceOverwrite,
  embedBelege24DocumentInPdf,
  importGoodsInvoicePdf,
  importFinalInvoicePdf,
  importPartialInvoicePdf,
  importProgressInvoicePdf,
  importStandardInvoicePdf,
  importTextInvoicePdf,
  mapFinalInvoiceToDocument,
  mapGoodsInvoiceToDocument,
  mapPartialInvoiceToDocument,
  mapProgressInvoiceToDocument,
  mapTextInvoiceToDocument,
  restoreStandardInvoiceState,
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

    expect(confirmStandardInvoiceOverwrite(changed, changed, confirm)).toBe(true);

    confirm.mockReturnValue(true);
    expect(confirmStandardInvoiceOverwrite(changed, initial, confirm)).toBe(true);
  });
});

function createGoodsInvoiceState() {
  const restored = restoreStandardInvoiceState(readExampleDocument());
  if (restored.status !== 'valid') throw new Error('Example invoice must be restorable.');

  return {
    ...restored.state,
    invoiceVariant: 'goods' as const,
    positions: [
      {
        ...restored.state.positions[0],
        articleNumber: 'ART-Ä 01',
        description: 'Ölfilter  mit  Sonderzeichen',
        unitPrice: '0012,340',
        quantity: '2,50',
        unit: 'Stück ',
        taxRate: '7,50',
      },
      {
        ...restored.state.positions[0],
        id: 'f8b0d9ba-dda1-4ed5-a3b8-e38e89ec98ae',
        articleNumber: '',
        description: 'Zusatzteil',
        unitPrice: '0.10',
        quantity: '3',
        unit: '',
        taxRate: '19',
      },
    ],
  };
}

describe('visible goods-invoice PDF import', () => {
  it('roundtrips all goods inputs through mapping, PDF attachment and restoration', async () => {
    const sourceState = createGoodsInvoiceState();
    sourceState.isSmallBusinessInvoice = true;
    const document = mapGoodsInvoiceToDocument(sourceState, {
      documentId: '123e4567-e89b-42d3-a456-426614174000',
      createdAt: '2026-07-24T12:00:00.000Z',
    });
    const result = await importGoodsInvoicePdf(
      await embedBelege24DocumentInPdf(await createPlainPdf(), document),
    );

    expect(result.status).toBe('valid');
    if (result.status !== 'valid') throw new Error(result.message);
    expect(result.state).toEqual(sourceState);
    expect(result.state.positions[0]).toMatchObject({
      articleNumber: 'ART-Ä 01',
      unitPrice: '0012,340',
      quantity: '2,50',
      taxRate: '7,50',
    });
  });

  it('rejects missing data and the standard-invoice variant without producing a state', async () => {
    const plainResult = await importGoodsInvoicePdf(await createPlainPdf());
    const standardDocument = readExampleDocument();
    const variantResult = await importGoodsInvoicePdf(
      await embedBelege24DocumentInPdf(await createPlainPdf(), standardDocument),
    );

    expect(plainResult).toMatchObject({ status: 'not-found' });
    expect(variantResult).toEqual({
      status: 'wrong-invoice-variant',
      message: 'Diese Belege24-PDF ist keine Warenrechnung.',
    });
  });

  it('only asks before overwriting changed goods-invoice input', () => {
    const initial = createGoodsInvoiceState();
    const changed = structuredClone(initial);
    changed.positions[0].description = 'Geändert';
    const confirm = vi.fn(() => false);

    expect(confirmGoodsInvoiceOverwrite(initial, initial, confirm)).toBe(true);
    expect(confirm).not.toHaveBeenCalled();
    expect(confirmGoodsInvoiceOverwrite(changed, initial, confirm)).toBe(false);
    expect(confirm).toHaveBeenCalledOnce();
    confirm.mockReturnValue(true);
    expect(confirmGoodsInvoiceOverwrite(changed, initial, confirm)).toBe(true);
  });
});

describe('remaining invoice-variant PDF imports', () => {
  it('roundtrips text, progress, partial and final invoices through their selected import routes', async () => {
    const source = createGoodsInvoiceState();
    const text = { ...source, invoiceVariant: 'text' as const };
    const progress = { ...source, invoiceVariant: 'progressInvoice' as const };
    const partial = { ...source, invoiceVariant: 'partialInvoice' as const };
    const final = { ...source, invoiceVariant: 'finalInvoice' as const };

    await expect(importTextInvoicePdf(await embedBelege24DocumentInPdf(await createPlainPdf(), mapTextInvoiceToDocument(text)))).resolves.toMatchObject({ status: 'valid', state: text });
    await expect(importProgressInvoicePdf(await embedBelege24DocumentInPdf(await createPlainPdf(), mapProgressInvoiceToDocument(progress)))).resolves.toMatchObject({ status: 'valid', state: progress });
    await expect(importPartialInvoicePdf(await embedBelege24DocumentInPdf(await createPlainPdf(), mapPartialInvoiceToDocument(partial)))).resolves.toMatchObject({ status: 'valid', state: partial });
    await expect(importFinalInvoicePdf(await embedBelege24DocumentInPdf(await createPlainPdf(), mapFinalInvoiceToDocument(final)))).resolves.toMatchObject({ status: 'valid', state: final });
  });
});
