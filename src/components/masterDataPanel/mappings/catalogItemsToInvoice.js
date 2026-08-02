function clean(value) {
  return String(value ?? '').trim();
}

function createPositionId() {
  return globalThis.crypto?.randomUUID?.() ?? `invoice-position-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalDescription(record) {
  return clean(record?.descriptions?.standard) || clean(record?.title);
}

function textDescription(record) {
  return clean(record?.descriptions?.textInvoice) || normalDescription(record);
}

function normalTaxRate(record) {
  return clean(record?.pricing?.taxRate) || '19';
}

export function isCatalogItemSupportedForInvoiceVariant(record, invoiceVariant) {
  if (!record || record.type === 'deliveryItem') return false;
  if (invoiceVariant === 'text') return record.type === 'textService';
  return ['standard', 'goods', 'progressInvoice', 'partialInvoice', 'finalInvoice'].includes(invoiceVariant)
    && ['service', 'goods'].includes(record.type);
}

export function mapCatalogItemToInvoicePosition(record, invoiceVariant) {
  if (!isCatalogItemSupportedForInvoiceVariant(record, invoiceVariant)) return null;

  if (invoiceVariant === 'text') {
    return {
      id: createPositionId(),
      articleNumber: '',
      description: textDescription(record),
      unitPrice: clean(record.pricing?.netTotalAmount),
      quantity: '1',
      unit: clean(record.quantity?.textLabel),
      taxRate: `${normalTaxRate(record)} %`,
    };
  }

  return {
    id: createPositionId(),
    articleNumber: invoiceVariant === 'goods' && record.type === 'goods' ? clean(record.number) : '',
    description: normalDescription(record),
    unitPrice: clean(record.pricing?.netUnitPrice),
    quantity: clean(record.quantity?.defaultValue) || '1',
    unit: clean(record.quantity?.unit),
    taxRate: normalTaxRate(record),
  };
}

export function mapCatalogItemsToInvoicePositions(records, invoiceVariant) {
  if (!Array.isArray(records) || !records.length) return [];
  const positions = records.map((record) => mapCatalogItemToInvoicePosition(record, invoiceVariant));
  return positions.some((position) => !position) ? null : positions;
}

export function appendCatalogItemsToInvoice(currentPositions, records, invoiceVariant) {
  const newPositions = mapCatalogItemsToInvoicePositions(records, invoiceVariant);
  if (newPositions === null) return null;
  return [...currentPositions, ...newPositions];
}
