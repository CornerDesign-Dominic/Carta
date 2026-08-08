import type { FinalInvoiceGeneratorState, GoodsInvoiceGeneratorState, PartialInvoiceGeneratorState, ProgressInvoiceGeneratorState, StandardInvoiceGeneratorState, TextInvoiceGeneratorState } from './invoiceMapping.js';
import { readBelege24DocumentFromPdf } from './pdfAttachment.js';
import { restoreFinalInvoiceState, restoreGoodsInvoiceState, restorePartialInvoiceState, restoreProgressInvoiceState, restoreStandardInvoiceState, restoreTextInvoiceState } from './invoiceRestore.js';

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

export type GoodsInvoicePdfImportResult =
  | { status: 'valid'; state: GoodsInvoiceGeneratorState; message: string }
  | {
      status:
        | 'not-found'
        | 'invalid-data'
        | 'unsupported'
        | 'wrong-document-type'
        | 'wrong-invoice-variant'
        | 'unreadable-pdf';
      message: string;
    };
export type TextInvoicePdfImportResult = GoodsInvoicePdfImportResult & { state?: TextInvoiceGeneratorState };
export type ProgressInvoicePdfImportResult = GoodsInvoicePdfImportResult & { state?: ProgressInvoiceGeneratorState };
export type PartialInvoicePdfImportResult = GoodsInvoicePdfImportResult & { state?: PartialInvoiceGeneratorState };
export type FinalInvoicePdfImportResult = GoodsInvoicePdfImportResult & { state?: FinalInvoiceGeneratorState };

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

export function confirmGoodsInvoiceOverwrite(
  currentState: GoodsInvoiceGeneratorState,
  initialState: GoodsInvoiceGeneratorState,
  confirmOverwrite: () => boolean,
): boolean {
  return areStandardInvoiceStatesEqual(currentState, initialState) || confirmOverwrite();
}
export const confirmTextInvoiceOverwrite = confirmGoodsInvoiceOverwrite;
export const confirmProgressInvoiceOverwrite = confirmGoodsInvoiceOverwrite;
export const confirmPartialInvoiceOverwrite = confirmGoodsInvoiceOverwrite;
export const confirmFinalInvoiceOverwrite = confirmGoodsInvoiceOverwrite;

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

export async function importGoodsInvoicePdf(
  pdfBytes: ArrayBuffer | Uint8Array,
): Promise<GoodsInvoicePdfImportResult> {
  const readResult = await readBelege24DocumentFromPdf(pdfBytes);

  if (readResult.status === 'not-found') {
    return { status: 'not-found', message: 'Diese PDF enthält keine Belege24-Daten.' };
  }
  if (readResult.status === 'unsupported') {
    return { status: 'unsupported', message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.' };
  }
  if (readResult.status === 'unreadable-pdf') {
    return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  }
  if (readResult.status === 'invalid-json' || readResult.status === 'invalid-document') {
    return { status: 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  }

  const restored = restoreGoodsInvoiceState(readResult.document);
  if (restored.status === 'wrong-document-type') {
    return { status: 'wrong-document-type', message: 'Die PDF enthält keinen Belege24-Datensatz für eine Warenrechnung.' };
  }
  if (restored.status === 'wrong-invoice-variant') {
    return { status: 'wrong-invoice-variant', message: 'Diese Belege24-PDF ist keine Warenrechnung.' };
  }
  if (restored.status === 'unsupported') {
    return { status: 'unsupported', message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.' };
  }
  if (restored.status === 'incomplete-data' || restored.status === 'invalid-field-values') {
    return { status: 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  }

  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}

export async function importTextInvoicePdf(pdfBytes: ArrayBuffer | Uint8Array): Promise<TextInvoicePdfImportResult> {
  const readResult = await readBelege24DocumentFromPdf(pdfBytes);
  if (readResult.status === 'not-found') return { status: 'not-found', message: 'Diese PDF enthält keine Belege24-Daten.' };
  if (readResult.status === 'unsupported') return { status: 'unsupported', message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.' };
  if (readResult.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  if (readResult.status === 'invalid-json' || readResult.status === 'invalid-document') return { status: 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  const restored = restoreTextInvoiceState(readResult.document);
  if (restored.status === 'wrong-invoice-variant') return { status: 'wrong-invoice-variant', message: 'Diese Belege24-PDF ist keine Textrechnung.' };
  if (restored.status === 'wrong-document-type') return { status: 'wrong-document-type', message: 'Die PDF enthält keinen Belege24-Datensatz für eine Textrechnung.' };
  if (restored.status !== 'valid') return { status: restored.status === 'unsupported' ? 'unsupported' : 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
export async function importProgressInvoicePdf(pdfBytes: ArrayBuffer | Uint8Array): Promise<ProgressInvoicePdfImportResult> {
  const readResult = await readBelege24DocumentFromPdf(pdfBytes);
  if (readResult.status === 'not-found') return { status: 'not-found', message: 'Diese PDF enthält keine Belege24-Daten.' };
  if (readResult.status === 'unsupported') return { status: 'unsupported', message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.' };
  if (readResult.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  if (readResult.status === 'invalid-json' || readResult.status === 'invalid-document') return { status: 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  const restored = restoreProgressInvoiceState(readResult.document);
  if (restored.status === 'wrong-invoice-variant') return { status: 'wrong-invoice-variant', message: 'Diese Belege24-PDF ist keine Abschlagsrechnung.' };
  if (restored.status === 'wrong-document-type') return { status: 'wrong-document-type', message: 'Die PDF enthält keinen Belege24-Datensatz für eine Abschlagsrechnung.' };
  if (restored.status !== 'valid') return { status: restored.status === 'unsupported' ? 'unsupported' : 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
export async function importPartialInvoicePdf(pdfBytes: ArrayBuffer | Uint8Array): Promise<PartialInvoicePdfImportResult> {
  const readResult = await readBelege24DocumentFromPdf(pdfBytes);
  if (readResult.status === 'not-found') return { status: 'not-found', message: 'Diese PDF enthält keine Belege24-Daten.' };
  if (readResult.status === 'unsupported') return { status: 'unsupported', message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.' };
  if (readResult.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  if (readResult.status === 'invalid-json' || readResult.status === 'invalid-document') return { status: 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  const restored = restorePartialInvoiceState(readResult.document);
  if (restored.status === 'wrong-invoice-variant') return { status: 'wrong-invoice-variant', message: 'Diese Belege24-PDF ist keine Teilrechnung.' };
  if (restored.status === 'wrong-document-type') return { status: 'wrong-document-type', message: 'Die PDF enthält keinen Belege24-Datensatz für eine Teilrechnung.' };
  if (restored.status !== 'valid') return { status: restored.status === 'unsupported' ? 'unsupported' : 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
export async function importFinalInvoicePdf(pdfBytes: ArrayBuffer | Uint8Array): Promise<FinalInvoicePdfImportResult> {
  const readResult = await readBelege24DocumentFromPdf(pdfBytes);
  if (readResult.status === 'not-found') return { status: 'not-found', message: 'Diese PDF enthält keine Belege24-Daten.' };
  if (readResult.status === 'unsupported') return { status: 'unsupported', message: 'Die Format- oder Schema-Version dieser Belege24-PDF wird nicht unterstützt.' };
  if (readResult.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  if (readResult.status === 'invalid-json' || readResult.status === 'invalid-document') return { status: 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  const restored = restoreFinalInvoiceState(readResult.document);
  if (restored.status === 'wrong-invoice-variant') return { status: 'wrong-invoice-variant', message: 'Diese Belege24-PDF ist keine Schlussrechnung.' };
  if (restored.status === 'wrong-document-type') return { status: 'wrong-document-type', message: 'Die PDF enthält keinen Belege24-Datensatz für eine Schlussrechnung.' };
  if (restored.status !== 'valid') return { status: restored.status === 'unsupported' ? 'unsupported' : 'invalid-data', message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.' };
  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
