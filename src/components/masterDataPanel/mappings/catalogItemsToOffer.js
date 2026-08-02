import {
  isCatalogItemSupportedForMonetaryPosition,
  mapCatalogItemToMonetaryPosition,
  mapCatalogItemsToMonetaryPositions,
} from './catalogItemsToMonetaryPositions.js';

export function isCatalogItemSupportedForOffer(record) {
  return isCatalogItemSupportedForMonetaryPosition(record);
}

export function mapCatalogItemToOfferPosition(record) {
  if (!isCatalogItemSupportedForOffer(record)) return null;

  return mapCatalogItemToMonetaryPosition(record, { idPrefix: 'offer-position' });
}

export function mapCatalogItemsToOfferPositions(records) {
  return mapCatalogItemsToMonetaryPositions(records, { idPrefix: 'offer-position' });
}
