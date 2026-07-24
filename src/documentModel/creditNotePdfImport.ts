import type { CreditNoteGeneratorState } from './creditNoteMapping.js';
import type { CreditNoteVariant } from './types.js';
import { readBelege24DocumentFromPdf } from './pdfAttachment.js';
import { restoreCreditNoteState } from './creditNoteRestore.js';

export type CreditNotePdfImportResult =
  | { status: 'valid'; state: CreditNoteGeneratorState; message: string }
  | {
      status: 'not-found' | 'invalid-data' | 'unsupported' | 'wrong-document-type' | 'wrong-credit-note-variant' | 'unreadable-pdf';
      message: string;
    };

export function areCreditNoteStatesEqual(
  first: CreditNoteGeneratorState,
  second: CreditNoteGeneratorState,
): boolean {
  return JSON.stringify(first) === JSON.stringify(second);
}

export function confirmCreditNoteOverwrite(
  currentState: CreditNoteGeneratorState,
  initialState: CreditNoteGeneratorState,
  confirmOverwrite: () => boolean,
): boolean {
  return areCreditNoteStatesEqual(currentState, initialState) || confirmOverwrite();
}

export async function importCreditNotePdf(
  pdfBytes: ArrayBuffer | Uint8Array,
  expectedVariant: CreditNoteVariant = 'creditNote',
): Promise<CreditNotePdfImportResult> {
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
  if (readResult.status === 'invalid-json') {
    return {
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    };
  }
  if (readResult.status === 'invalid-document') {
    if (readResult.errors.some((error) => error.startsWith('documentData.creditNoteVariant must be'))) {
      return {
        status: 'wrong-credit-note-variant',
        message: 'Diese Belege24-PDF enthält keine unterstützte Gutschriftvariante.',
      };
    }
    if (readResult.errors.includes('document.documentType is not supported')) {
      return {
        status: 'wrong-document-type',
        message: 'Diese Belege24-PDF enthält keine unterstützte Gutschrift.',
      };
    }
    return {
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    };
  }

  if (readResult.document.document.documentType !== 'creditNote') {
    return {
      status: 'wrong-document-type',
      message: 'Die PDF enthält keinen Belege24-Datensatz für eine Gutschrift.',
    };
  }
  const restored = restoreCreditNoteState(readResult.document);
  if (restored.status === 'wrong-variant') {
    return {
      status: 'wrong-credit-note-variant',
      message: 'Diese Belege24-PDF enthält keine unterstützte Gutschriftvariante.',
    };
  }
  if (restored.status === 'wrong-document-type') {
    return {
      status: 'wrong-document-type',
      message: 'Die PDF enthält keinen Belege24-Datensatz für eine Gutschrift.',
    };
  }
  if (restored.status !== 'valid') {
    return {
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    };
  }
  if (restored.state.creditNoteVariant !== expectedVariant) {
    return {
      status: 'wrong-credit-note-variant',
      message: 'Diese Belege24-PDF enthält keine unterstützte Gutschriftvariante.',
    };
  }

  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
