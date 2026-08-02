import { describe, expect, it } from 'vitest';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';
import {
  isCatalogItemSupportedForCreditNote,
  mapCatalogItemToCreditNotePosition,
  mapCatalogItemsToCreditNotePositions,
} from '../src/components/masterDataPanel/mappings/catalogItemsToCreditNote.js';

const service = createCatalogItem('service', {
  id: 'service-1',
  title: 'Interne Bezeichnung',
  descriptions: { standard: 'Beratung' },
  quantity: { defaultValue: '2', unit: 'Stunde' },
  pricing: { netUnitPrice: '90,00', taxRate: '19' },
});
const goods = createCatalogItem('goods', {
  id: 'goods-1',
  descriptions: { standard: 'Ersatzteil' },
  quantity: { defaultValue: '', unit: 'Stk.' },
  pricing: { netUnitPrice: '12,50', taxRate: '7' },
});
const textService = createCatalogItem('textService', { id: 'text-1' });
const deliveryItem = createCatalogItem('deliveryItem', { id: 'delivery-1' });

describe('catalog items to credit note positions', () => {
  it('supports services and goods only for all credit-note variants', () => {
    expect(isCatalogItemSupportedForCreditNote(service)).toBe(true);
    expect(isCatalogItemSupportedForCreditNote(goods)).toBe(true);
    expect(isCatalogItemSupportedForCreditNote(textService)).toBe(false);
    expect(isCatalogItemSupportedForCreditNote(deliveryItem)).toBe(false);
  });

  it('maps compatible records to the editor position shape without calculations', () => {
    expect(mapCatalogItemToCreditNotePosition(goods)).toMatchObject({
      description: 'Ersatzteil',
      quantity: '1',
      unit: 'Stk.',
      unitPrice: '12,50',
      taxRate: '7',
    });
  });

  it('creates independent positions and rejects mixed selections atomically', () => {
    const positions = mapCatalogItemsToCreditNotePositions([service, service]);
    expect(positions).toHaveLength(2);
    expect(new Set(positions.map((position) => position.id)).size).toBe(2);
    expect(mapCatalogItemsToCreditNotePositions([service, textService])).toBeNull();
  });
});
