import type { StandardInvoiceGeneratorState } from './invoiceMapping.js';
import { readBelege24DocumentFromPdf } from './pdfAttachment.js';
import { restoreStandardInvoiceState } from './invoiceRestore.js';

export type StandardInvoicePdfImportResult =
  | { status: 'valid'; state: StandardInvoiceGeneratorState; message: string }
  | {
      status:
        | 'not-found'
        | 'invalid-data'
        | 'unsupported'
        | 'wrong-document-type'
        | 'unreadable-pdf';
      message: string;
    };

export function areStandardInvoiceStatesEqual(
  first: StandardInvoiceGeneratorState,
  second: StandardInvoiceGeneratorState,
): boolean {
  return JSON.stringify(first) === JSON.stringify(second);
}

export function confirmStandardInvoiceOverwrite(
  currentState: StandardInvoiceGeneratorState,
  initialState: StandardInvoiceGeneratorState,
  confirmOverwrite: () => boolean,
): boolean {
  return areStandardInvoiceStatesEqual(currentState, initialState) || confirmOverwrite();
}

export async function importStandardInvoicePdf(
  pdfBytes: ArrayBuffer | Uint8Array,
): Promise<StandardInvoicePdfImportResult> {
  const readResult = await readBelege24DocumentFromPdf(pdfBytes);

  if (readResult.status === 'not-found') {
    return { status: 'not-found', message: 'Diese PDF enthält keine Belege24-Daten.' };
  }
  if (readResult.status === 'unsupported') {
    return {
      status: 'unsupported',
      message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.',
    };
  }
  if (readResult.status === 'unreadable-pdf') {
    return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  }
  if (readResult.status === 'invalid-json' || readResult.status === 'invalid-document') {
    return {
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    };
  }

  const restored = restoreStandardInvoiceState(readResult.document);
  if (restored.status === 'wrong-document-type') {
    return {
      status: 'wrong-document-type',
      message: 'Die PDF enthält keinen Belege24-Datensatz für eine Standardrechnung.',
    };
  }
  if (restored.status === 'unsupported') {
    return {
      status: 'unsupported',
      message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.',
    };
  }
  if (restored.status === 'incomplete-data' || restored.status === 'invalid-field-values') {
    return {
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    };
  }

  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
