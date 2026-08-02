import { describe, expect, it } from 'vitest';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';
import {
  isCatalogItemSupportedForDeliveryNote,
  mapCatalogItemToDeliveryNotePosition,
  mapCatalogItemsToDeliveryNotePositions,
} from '../src/components/masterDataPanel/mappings/catalogItemsToDeliveryNote.js';

const goods = createCatalogItem('goods', {
  id: 'goods-1',
  descriptions: { standard: 'Ersatzteil', deliveryNote: 'Ersatzteil geliefert' },
  quantity: { defaultValue: '2', unit: 'Stk.' },
  pricing: { netUnitPrice: '12,50', taxRate: '7' },
});
const deliveryItem = createCatalogItem('deliveryItem', {
  id: 'delivery-1',
  descriptions: { deliveryNote: 'Transportbox' },
  quantity: { defaultValue: '', unit: 'Box' },
  pricing: { netUnitPrice: '90,00', taxRate: '19' },
});
const service = createCatalogItem('service', { id: 'service-1' });
const textService = createCatalogItem('textService', { id: 'text-1' });

describe('catalog items to delivery-note positions', () => {
  it('supports goods and delivery items only', () => {
    expect(isCatalogItemSupportedForDeliveryNote(goods)).toBe(true);
    expect(isCatalogItemSupportedForDeliveryNote(deliveryItem)).toBe(true);
    expect(isCatalogItemSupportedForDeliveryNote(service)).toBe(false);
    expect(isCatalogItemSupportedForDeliveryNote(textService)).toBe(false);
  });

  it('maps no pricing or tax data into delivery-note positions', () => {
    expect(mapCatalogItemToDeliveryNotePosition(goods)).toMatchObject({ quantity: '2', unit: 'Stk.', description: 'Ersatzteil geliefert' });
    expect(mapCatalogItemToDeliveryNotePosition(goods)).not.toHaveProperty('unitPrice');
    expect(mapCatalogItemToDeliveryNotePosition(goods)).not.toHaveProperty('taxRate');
  });

  it('creates new IDs and rejects mixed unsupported selections', () => {
    const positions = mapCatalogItemsToDeliveryNotePositions([deliveryItem, deliveryItem]);
    expect(positions).toHaveLength(2);
    expect(new Set(positions.map((position) => position.id)).size).toBe(2);
    expect(positions[0]).toMatchObject({ quantity: '1', unit: 'Box', description: 'Transportbox' });
    expect(mapCatalogItemsToDeliveryNotePositions([goods, service])).toBeNull();
  });
});
