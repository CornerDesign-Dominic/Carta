import type { ReminderGeneratorState } from './reminderMapping.js';
import { readBelege24DocumentFromPdf } from './pdfAttachment.js';
import { restoreReminderState } from './reminderRestore.js';

export type ReminderPdfImportResult =
  | { status: 'valid'; state: ReminderGeneratorState; message: string }
  | {
      status: 'not-found' | 'invalid-data' | 'unsupported' | 'wrong-document-type' | 'unreadable-pdf';
      message: string;
    };

export function areReminderStatesEqual(
  first: ReminderGeneratorState,
  second: ReminderGeneratorState,
): boolean {
  return JSON.stringify(first) === JSON.stringify(second);
}

export function confirmReminderOverwrite(
  currentState: ReminderGeneratorState,
  initialState: ReminderGeneratorState,
  confirmOverwrite: () => boolean,
): boolean {
  return areReminderStatesEqual(currentState, initialState) || confirmOverwrite();
}

export async function importReminderPdf(
  pdfBytes: ArrayBuffer | Uint8Array,
): Promise<ReminderPdfImportResult> {
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

  if (readResult.document.document.documentType !== 'reminder') {
    return {
      status: 'wrong-document-type',
      message: 'Die PDF enthält keinen Belege24-Datensatz für eine Mahnung.',
    };
  }

  const restored = restoreReminderState(readResult.document);
  if (restored.status === 'wrong-document-type') {
    return {
      status: 'wrong-document-type',
      message: 'Die PDF enthält keinen Belege24-Datensatz für eine Mahnung.',
    };
  }
  if (restored.status !== 'valid') {
    return {
      status: 'invalid-data',
      message: 'Die eingebetteten Belege24-Daten sind ungültig oder beschädigt.',
    };
  }

  return { status: 'valid', state: restored.state, message: 'PDF erfolgreich geladen.' };
}
