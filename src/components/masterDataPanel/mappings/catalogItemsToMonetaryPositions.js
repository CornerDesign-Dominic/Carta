function clean(value) {
  return String(value ?? '').trim();
}

function createPositionId(prefix) {
  return globalThis.crypto?.randomUUID?.()
    ?? `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function isCatalogItemSupportedForMonetaryPosition(record) {
  return ['service', 'goods'].includes(record?.type);
}

export function mapCatalogItemToMonetaryPosition(record, { idPrefix }) {
  if (!isCatalogItemSupportedForMonetaryPosition(record)) return null;

  return {
    id: createPositionId(idPrefix),
    description: clean(record?.descriptions?.standard) || clean(record?.title),
    unitPrice: clean(record?.pricing?.netUnitPrice),
    quantity: clean(record?.quantity?.defaultValue) || '1',
    unit: clean(record?.quantity?.unit),
    taxRate: clean(record?.pricing?.taxRate) || '19',
  };
}

export function mapCatalogItemsToMonetaryPositions(records, options) {
  if (!Array.isArray(records) || !records.length) return [];

  const positions = records.map((record) => mapCatalogItemToMonetaryPosition(record, options));
  return positions.some((position) => !position) ? null : positions;
}
