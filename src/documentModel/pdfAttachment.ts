import {
  PDFArray,
  PDFDict,
  PDFDocument,
  PDFHexString,
  PDFName,
  PDFRawStream,
  PDFStream,
  PDFString,
  decodePDFRawStream,
} from 'pdf-lib';
import {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_SCHEMA_VERSION,
} from './constants.js';
import type { StandardInvoiceDocument } from './types.js';
import { validateBelege24Document } from './validation.js';

export const BELEGE24_ATTACHMENT_FILE_NAME = 'belege24-document.json' as const;
export const BELEGE24_ATTACHMENT_MIME_TYPE = 'application/json' as const;
export const BELEGE24_PDF_SUBJECT = 'Belege24-Dokument' as const;

export type ReadBelege24PdfResult =
  | {
      status: 'valid';
      fileName: typeof BELEGE24_ATTACHMENT_FILE_NAME;
      mimeType: string | undefined;
      document: StandardInvoiceDocument;
    }
  | { status: 'not-found' }
  | { status: 'invalid-json'; error: string }
  | { status: 'unsupported'; format: unknown; schemaVersion: unknown }
  | { status: 'invalid-document'; errors: string[] }
  | { status: 'unreadable-pdf'; error: string };

function attachmentNameArrays(embeddedFiles: PDFDict): PDFArray[] {
  const result: PDFArray[] = [];
  const directNames = embeddedFiles.lookupMaybe(PDFName.of('Names'), PDFArray);
  if (directNames) result.push(directNames);

  const kids = embeddedFiles.lookupMaybe(PDFName.of('Kids'), PDFArray);
  if (kids) {
    for (let index = 0; index < kids.size(); index += 1) {
      const kid = kids.lookupMaybe(index, PDFDict);
      if (kid) result.push(...attachmentNameArrays(kid));
    }
  }

  return result;
}

function findBelege24Attachment(pdfDocument: PDFDocument) {
  const names = pdfDocument.catalog.lookupMaybe(PDFName.of('Names'), PDFDict);
  const embeddedFiles = names?.lookupMaybe(PDFName.of('EmbeddedFiles'), PDFDict);
  if (!embeddedFiles) return undefined;

  for (const nameArray of attachmentNameArrays(embeddedFiles)) {
    for (let index = 0; index + 1 < nameArray.size(); index += 2) {
      const name = nameArray.lookupMaybe(index, PDFString, PDFHexString)?.decodeText();
      if (name !== BELEGE24_ATTACHMENT_FILE_NAME) continue;

      const fileSpec = nameArray.lookupMaybe(index + 1, PDFDict);
      const embeddedFileDictionary = fileSpec?.lookupMaybe(PDFName.of('EF'), PDFDict);
      const stream = embeddedFileDictionary?.lookupMaybe(PDFName.of('UF'), PDFStream)
        ?? embeddedFileDictionary?.lookupMaybe(PDFName.of('F'), PDFStream);
      if (!(stream instanceof PDFRawStream)) {
        throw new Error('Embedded Belege24 attachment stream is missing or unreadable');
      }

      const mimeType = stream.dict.lookupMaybe(PDFName.of('Subtype'), PDFName)?.decodeText();
      return {
        bytes: decodePDFRawStream(stream).decode(),
        mimeType,
      };
    }
  }

  return undefined;
}

export async function embedBelege24DocumentInPdf(
  pdfBytes: Uint8Array | ArrayBuffer,
  document: StandardInvoiceDocument,
): Promise<Uint8Array> {
  const validation = validateBelege24Document(document);
  if (!validation.valid) {
    throw new Error(`Invalid Belege24 document: ${validation.errors.join('; ')}`);
  }

  const pdfDocument = await PDFDocument.load(pdfBytes);
  const attachmentBytes = new TextEncoder().encode(JSON.stringify(document, null, 2));
  const createdAt = new Date(document.document.createdAt);

  await pdfDocument.attach(attachmentBytes, BELEGE24_ATTACHMENT_FILE_NAME, {
    mimeType: BELEGE24_ATTACHMENT_MIME_TYPE,
    description: `${BELEGE24_DOCUMENT_FORMAT} ${BELEGE24_SCHEMA_VERSION}`,
    creationDate: createdAt,
    modificationDate: createdAt,
  });

  pdfDocument.setCreator(`Belege24 ${document.document.generatorVersion}`);
  pdfDocument.setSubject(BELEGE24_PDF_SUBJECT);
  pdfDocument.setKeywords([
    BELEGE24_DOCUMENT_FORMAT,
    `schema-version:${BELEGE24_SCHEMA_VERSION}`,
    `document-type:${document.document.documentType}`,
    `document-id:${document.document.documentId}`,
  ]);

  return pdfDocument.save();
}

export async function readBelege24DocumentFromPdf(
  pdfBytes: Uint8Array | ArrayBuffer,
): Promise<ReadBelege24PdfResult> {
  let pdfDocument: PDFDocument;

  try {
    pdfDocument = await PDFDocument.load(pdfBytes);
  } catch (error) {
    return {
      status: 'unreadable-pdf',
      error: error instanceof Error ? error.message : String(error),
    };
  }

  let attachment: ReturnType<typeof findBelege24Attachment>;
  try {
    attachment = findBelege24Attachment(pdfDocument);
  } catch (error) {
    return {
      status: 'unreadable-pdf',
      error: error instanceof Error ? error.message : String(error),
    };
  }

  if (!attachment) return { status: 'not-found' };

  let document: unknown;
  try {
    document = JSON.parse(new TextDecoder().decode(attachment.bytes));
  } catch (error) {
    return {
      status: 'invalid-json',
      error: error instanceof Error ? error.message : String(error),
    };
  }

  const candidate = document as Record<string, unknown>;
  if (
    candidate?.format !== BELEGE24_DOCUMENT_FORMAT
    || candidate?.schemaVersion !== BELEGE24_SCHEMA_VERSION
  ) {
    return {
      status: 'unsupported',
      format: candidate?.format,
      schemaVersion: candidate?.schemaVersion,
    };
  }

  const validation = validateBelege24Document(document);
  if (!validation.valid) {
    return { status: 'invalid-document', errors: validation.errors };
  }

  return {
    status: 'valid',
    fileName: BELEGE24_ATTACHMENT_FILE_NAME,
    mimeType: attachment.mimeType,
    document: document as StandardInvoiceDocument,
  };
}
