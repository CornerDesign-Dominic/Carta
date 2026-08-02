import { describe, expect, it } from 'vitest';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';
import {
  appendCatalogItemsToInvoice,
  isCatalogItemSupportedForInvoiceVariant,
  mapCatalogItemToInvoicePosition,
  mapCatalogItemsToInvoicePositions,
} from '../src/components/masterDataPanel/mappings/catalogItemsToInvoice.js';

const service = createCatalogItem('service', {
  id: 'service-1',
  title: 'Interne Bezeichnung',
  descriptions: { standard: 'Montage Baugerüst', textInvoice: 'Montage als Text' },
  quantity: { defaultValue: '2', unit: 'Stunde', textLabel: '' },
  pricing: { netUnitPrice: '75,00', netTotalAmount: '', taxRate: '19' },
});
const goods = createCatalogItem('goods', {
  id: 'goods-1',
  number: 'ART-42',
  descriptions: { standard: 'Ersatzteil', textInvoice: '' },
  quantity: { defaultValue: '', unit: 'Stk.', textLabel: '' },
  pricing: { netUnitPrice: '12,50', netTotalAmount: '', taxRate: '7' },
});
const textService = createCatalogItem('textService', {
  id: 'text-1',
  descriptions: { standard: 'Kurztext', textInvoice: 'Prozessberatung' },
  quantity: { defaultValue: '', unit: '', textLabel: '3 Stunden' },
  pricing: { netUnitPrice: '', netTotalAmount: '300,00', taxRate: '19' },
});
const deliveryItem = createCatalogItem('deliveryItem', { id: 'delivery-1' });

describe('catalog items to invoice positions', () => {
  it('supports only appropriate catalog types per invoice variant', () => {
    expect(isCatalogItemSupportedForInvoiceVariant(service, 'standard')).toBe(true);
    expect(isCatalogItemSupportedForInvoiceVariant(goods, 'goods')).toBe(true);
    expect(isCatalogItemSupportedForInvoiceVariant(textService, 'text')).toBe(true);
    expect(isCatalogItemSupportedForInvoiceVariant(service, 'text')).toBe(false);
    expect(isCatalogItemSupportedForInvoiceVariant(textService, 'standard')).toBe(false);
    expect(isCatalogItemSupportedForInvoiceVariant(deliveryItem, 'goods')).toBe(false);
  });

  it('maps goods with article number and defaults a missing quantity to one', () => {
    const position = mapCatalogItemToInvoicePosition(goods, 'goods');
    expect(position).toMatchObject({ articleNumber: 'ART-42', description: 'Ersatzteil', quantity: '1', unit: 'Stk.', unitPrice: '12,50', taxRate: '7' });
  });

  it('maps a text service without calculating a quantity or total', () => {
    const position = mapCatalogItemToInvoicePosition(textService, 'text');
    expect(position).toMatchObject({ description: 'Prozessberatung', quantity: '1', unit: '3 Stunden', unitPrice: '300,00', taxRate: '19 %' });
  });

  it('adds independent positions at the end and keeps existing positions unchanged', () => {
    const existing = [{ id: 'document-position-1', description: 'Bestehend' }];
    const appended = appendCatalogItemsToInvoice(existing, [service, goods], 'standard');
    expect(appended).toHaveLength(3);
    expect(appended[0]).toEqual(existing[0]);
    expect(appended.slice(1).map((position) => position.id)).not.toContain('service-1');
    expect(new Set(appended.slice(1).map((position) => position.id)).size).toBe(2);
    const duplicated = appendCatalogItemsToInvoice([], [service, service], 'standard');
    expect(new Set(duplicated.map((position) => position.id)).size).toBe(2);
    expect(mapCatalogItemsToInvoicePositions([service, deliveryItem], 'standard')).toBeNull();
  });
});
