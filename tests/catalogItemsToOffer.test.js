import { describe, expect, it } from 'vitest';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';
import {
  isCatalogItemSupportedForOffer,
  mapCatalogItemToOfferPosition,
  mapCatalogItemsToOfferPositions,
} from '../src/components/masterDataPanel/mappings/catalogItemsToOffer.js';

const service = createCatalogItem('service', {
  id: 'service-1',
  title: 'Interne Bezeichnung',
  descriptions: { standard: 'Montage Baugerüst' },
  quantity: { defaultValue: '2', unit: 'Stunde' },
  pricing: { netUnitPrice: '75,00', taxRate: '19' },
});
const goods = createCatalogItem('goods', {
  id: 'goods-1',
  descriptions: { standard: 'Ersatzteil' },
  quantity: { defaultValue: '', unit: 'Stk.' },
  pricing: { netUnitPrice: '12,50', taxRate: '7' },
});
const textService = createCatalogItem('textService', { id: 'text-1' });
const deliveryItem = createCatalogItem('deliveryItem', { id: 'delivery-1' });

describe('catalog items to offer positions', () => {
  it('supports services and goods only', () => {
    expect(isCatalogItemSupportedForOffer(service)).toBe(true);
    expect(isCatalogItemSupportedForOffer(goods)).toBe(true);
    expect(isCatalogItemSupportedForOffer(textService)).toBe(false);
    expect(isCatalogItemSupportedForOffer(deliveryItem)).toBe(false);
  });

  it('maps compatible records to the existing offer position shape', () => {
    expect(mapCatalogItemToOfferPosition(goods)).toMatchObject({
      description: 'Ersatzteil',
      quantity: '1',
      unit: 'Stk.',
      unitPrice: '12,50',
      taxRate: '7',
    });
  });

  it('creates independent new positions and rejects mixed selections', () => {
    const positions = mapCatalogItemsToOfferPositions([service, service]);
    expect(positions).toHaveLength(2);
    expect(new Set(positions.map((position) => position.id)).size).toBe(2);
    expect(mapCatalogItemsToOfferPositions([service, textService])).toBeNull();
  });
});

