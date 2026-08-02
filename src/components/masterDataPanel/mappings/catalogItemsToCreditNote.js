import {
  isCatalogItemSupportedForMonetaryPosition,
  mapCatalogItemToMonetaryPosition,
  mapCatalogItemsToMonetaryPositions,
} from './catalogItemsToMonetaryPositions.js';

export function isCatalogItemSupportedForCreditNote(record) {
  return isCatalogItemSupportedForMonetaryPosition(record);
}

export function mapCatalogItemToCreditNotePosition(record) {
  if (!isCatalogItemSupportedForCreditNote(record)) return null;

  return mapCatalogItemToMonetaryPosition(record, { idPrefix: 'credit-note-position' });
}

export function mapCatalogItemsToCreditNotePositions(records) {
  return mapCatalogItemsToMonetaryPositions(records, { idPrefix: 'credit-note-position' });
}
