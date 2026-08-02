function clean(value) {
  return String(value ?? '').trim();
}

function createPositionId() {
  return globalThis.crypto?.randomUUID?.() ?? `delivery-note-position-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function description(record) {
  return clean(record?.descriptions?.deliveryNote) || clean(record?.descriptions?.standard) || clean(record?.title);
}

export function isCatalogItemSupportedForDeliveryNote(record) {
  return ['goods', 'deliveryItem'].includes(record?.type);
}

export function mapCatalogItemToDeliveryNotePosition(record) {
  if (!isCatalogItemSupportedForDeliveryNote(record)) return null;

  return {
    id: createPositionId(),
    quantity: clean(record.quantity?.defaultValue) || '1',
    unit: clean(record.quantity?.unit),
    description: description(record),
  };
}

export function mapCatalogItemsToDeliveryNotePositions(records) {
  if (!Array.isArray(records) || !records.length) return [];

  const positions = records.map(mapCatalogItemToDeliveryNotePosition);
  return positions.some((position) => !position) ? null : positions;
}

