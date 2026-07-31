export const catalogItemTypes = [
  { value: 'service', label: 'Leistung' },
  { value: 'goods', label: 'Artikel / Ware' },
  { value: 'textService', label: 'Textleistung' },
  { value: 'deliveryItem', label: 'Lieferscheinposition' },
];

const catalogItemTypeValues = new Set(catalogItemTypes.map((item) => item.value));

function createStableId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function isCatalogItemType(value) { return catalogItemTypeValues.has(value); }
export function getCatalogItemTypeLabel(type) { return catalogItemTypes.find((item) => item.value === type)?.label ?? 'Unbekannter Typ'; }
export function getCatalogItemDisplayName(item) { return item?.title?.trim() || 'Unbenannter Eintrag'; }

export function normalizeCatalogAmountValue(value) {
  if (value === undefined || value === null || String(value).trim() === '') return '';
  const raw = String(value).trim().replace(/[^\d,.-]/g, '');
  const normalized = raw.includes(',')
    ? raw.replace(/\./g, '').replace(',', '.')
    : /^\d{1,3}(\.\d{3})+$/.test(raw) ? raw.replace(/\./g, '') : raw;
  const amount = Number.parseFloat(normalized);
  if (!Number.isFinite(amount) || amount < 0) return null;
  return amount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function normalizeCatalogTaxRate(value) {
  if (value === undefined || value === null || String(value).trim() === '') return '';
  const raw = String(value).trim().replace(/[^\d,.-]/g, '').replace(',', '.');
  const rate = Number.parseFloat(raw);
  if (!Number.isFinite(rate) || rate < 0 || rate > 100) return null;
  return String(Math.round(rate * 100) / 100).replace('.', ',');
}

export function formatCatalogCurrency(value) {
  const normalized = normalizeCatalogAmountValue(value);
  if (!normalized) return '';
  return `${normalized} €`;
}

export function createCatalogItem(type, overrides = {}) {
  if (!isCatalogItemType(type)) throw new Error('Unbekannter Eintragstyp.');
  const source = { ...overrides };
  delete source.id;
  delete source.type;
  const {
    descriptions: descriptionOverrides = {}, quantity: quantityOverrides = {}, pricing: pricingOverrides = {}, delivery: deliveryOverrides = {}, ...itemOverrides
  } = source;
  const supportsQuantity = type !== 'textService';
  const supportsTax = type !== 'deliveryItem';
  return {
    id: createStableId('catalog-item'),
    type,
    number: '',
    title: '',
    category: '',
    descriptions: { standard: '', textInvoice: '', deliveryNote: '', ...descriptionOverrides },
    quantity: { defaultValue: supportsQuantity ? '1' : '', unit: supportsQuantity ? 'pauschal' : '', textLabel: '', ...quantityOverrides },
    pricing: { netUnitPrice: '', netTotalAmount: '', taxRate: supportsTax ? '19' : '', ...pricingOverrides },
    delivery: { defaultNote: '', ...deliveryOverrides },
    internalNote: '',
    isActive: true,
    ...itemOverrides,
  };
}

export function duplicateCatalogItem(item) {
  return createCatalogItem(item.type, {
    ...item,
    title: item.title ? `${item.title} Kopie` : '',
    descriptions: { ...item.descriptions }, quantity: { ...item.quantity }, pricing: { ...item.pricing }, delivery: { ...item.delivery },
  });
}

export function matchesCatalogItemSearch(item, query) {
  const normalized = query.trim().toLocaleLowerCase('de-DE');
  if (!normalized) return true;
  return [item.type === 'goods' ? item.number : '', item.title, ...Object.values(item.descriptions), item.internalNote]
    .some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(normalized));
}

function updateAtPath(value, path, nextValue) {
  const [key, ...remaining] = path;
  if (!key) return nextValue;
  return { ...value, [key]: remaining.length ? updateAtPath(value[key], remaining, nextValue) : nextValue };
}
function updateItemById(records, itemId, updater) { return records.map((item) => (item.id === itemId ? updater(item) : item)); }

export function createCatalogEditorState() { return { records: [], activeRecordId: null }; }

export function shouldStartNewCatalogCollectionWithoutConfirmation({ hasStartedCollection, hasRecords, draft, isDraftDirty }) {
  return !hasStartedCollection && !hasRecords && !draft && !isDraftDirty;
}
export function catalogItemEditorReducer(state, action) {
  switch (action.type) {
    case 'replace-collection': return { records: action.records, activeRecordId: action.activeRecordId === undefined ? action.records[0]?.id ?? null : action.activeRecordId };
    case 'reset-collection': return createCatalogEditorState();
    case 'select': return { ...state, activeRecordId: action.recordId };
    case 'create': {
      const record = createCatalogItem(action.itemType);
      return { records: [...state.records, record], activeRecordId: record.id };
    }
    case 'upsert': {
      const alreadyExists = state.records.some((record) => record.id === action.record.id);
      return {
        records: alreadyExists
          ? state.records.map((record) => (record.id === action.record.id ? action.record : record))
          : [...state.records, action.record],
        activeRecordId: action.record.id,
      };
    }
    case 'update-field': return { ...state, records: updateItemById(state.records, action.recordId, (item) => updateAtPath(item, action.path, action.value)) };
    case 'change-type': return { ...state, records: updateItemById(state.records, action.recordId, (item) => ({ ...item, type: action.itemType })) };
    case 'duplicate': {
      const source = state.records.find((item) => item.id === action.recordId);
      if (!source) return state;
      const copy = duplicateCatalogItem(source);
      return { records: [...state.records, copy], activeRecordId: copy.id };
    }
    case 'delete': {
      const records = state.records.filter((item) => item.id !== action.recordId);
      return { records, activeRecordId: records[0]?.id ?? null };
    }
    default: return state;
  }
}
