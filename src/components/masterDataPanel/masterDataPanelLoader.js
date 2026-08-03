import { readJsonAttachmentFromPdf } from '../../documentModel/pdfAttachment.js';
import {
  CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAMES,
  CATALOG_ITEM_MASTER_DATA_TYPE,
  validateAndNormalizeCatalogItemMasterData,
} from '../../masterData/catalogItemContract.js';
import {
  OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAMES,
  OWN_DATA_MASTER_DATA_TYPE,
  validateAndNormalizeOwnDataMasterData,
} from '../../masterData/ownDataContract.js';
import {
  PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAMES,
  PARTNER_MASTER_DATA_TYPE,
  validateAndNormalizePartnerMasterData,
} from '../../masterData/partnerMasterDataContract.js';

export const MASTER_DATA_PANEL_TABS = [
  { id: 'ownData', label: 'Eigene Daten' },
  { id: 'partners', label: 'Partner & Empfänger' },
  { id: 'catalogItems', label: 'Leistungen & Artikel' },
];

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
const masterDataDefinitions = {
  [OWN_DATA_MASTER_DATA_TYPE]: {
    tabId: 'ownData',
    attachmentFileNames: OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAMES,
    validate: validateAndNormalizeOwnDataMasterData,
    exactRecordCount: 1,
  },
  [PARTNER_MASTER_DATA_TYPE]: {
    tabId: 'partners',
    attachmentFileNames: PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAMES,
    validate: validateAndNormalizePartnerMasterData,
  },
  [CATALOG_ITEM_MASTER_DATA_TYPE]: {
    tabId: 'catalogItems',
    attachmentFileNames: CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAMES,
    validate: validateAndNormalizeCatalogItemMasterData,
  },
};
const acceptedFileNames = Object.values(masterDataDefinitions).flatMap((definition) => definition.attachmentFileNames);

function validationMessage(reason) {
  if (reason === 'newer-version') return 'Diese Stammdatendatei wurde mit einer neueren, derzeit nicht unterstützten Version erstellt.';
  if (reason === 'wrong-schema-version') return 'Die Datei enthält keine unterstützte Version des Belege24-Stammdatenformats.';
  if (reason === 'wrong-schema') return 'Die Datei enthält kein unterstütztes Belege24-Stammdatenformat.';
  return 'Die Stammdaten in dieser PDF sind unvollständig oder beschädigt.';
}

export function createMasterDataFileId(file, documentId) {
  return `${file.name}:${file.size}:${file.lastModified}:${documentId}`;
}

export function hasRecordIdConflict(loadedFiles, records) {
  const existingIds = new Set(loadedFiles.flatMap((file) => file.records.map((record) => record.id)));
  return records.some((record) => existingIds.has(record.id));
}

export async function readMasterDataPdf(file) {
  if (!file || (!(file.type ?? '').includes('pdf') && !file.name.toLowerCase().endsWith('.pdf'))) {
    return { status: 'invalid-file', message: 'Bitte wähle eine PDF-Datei aus.' };
  }

  let pdfBytes;
  try {
    pdfBytes = await file.arrayBuffer();
  } catch {
    return { status: 'unreadable-pdf', message: 'Die PDF konnte nicht gelesen werden.' };
  }

  const attachment = await readJsonAttachmentFromPdf(pdfBytes, acceptedFileNames, MAX_ATTACHMENT_BYTES);
  if (attachment.status === 'not-found') return { status: 'not-found', message: 'In dieser PDF wurden keine Belege24-Stammdaten gefunden.' };
  if (attachment.status === 'invalid-json') return { status: 'invalid-json', message: 'Die eingebetteten Stammdaten konnten nicht gelesen werden.' };
  if (attachment.status === 'too-large') return { status: 'too-large', message: 'Die eingebetteten Stammdaten sind zu groß.' };
  if (attachment.status === 'unreadable-pdf') return { status: 'unreadable-pdf', message: 'Die PDF ist beschädigt oder kann nicht gelesen werden.' };

  const masterDataType = attachment.document?.masterDataType;
  const definition = masterDataDefinitions[masterDataType];
  if (!definition) return { status: 'unsupported-type', message: 'Die PDF enthält keinen unterstützten Stammdatentyp.' };

  const validation = definition.validate(attachment.document);
  if (!validation.valid) return { status: validation.reason, message: validationMessage(validation.reason) };
  if (definition.exactRecordCount && validation.document.records.length !== definition.exactRecordCount) {
    return { status: 'invalid-records', message: 'Ein Stammdatenblatt für Eigene Daten muss genau ein Unternehmen enthalten.' };
  }
  return { status: 'valid', tabId: definition.tabId, document: validation.document };
}
