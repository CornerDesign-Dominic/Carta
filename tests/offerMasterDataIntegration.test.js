import { describe, expect, it } from 'vitest';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import { createPartner } from '../src/masterData/partnerModel.js';
import { applyOwnDataToInvoice } from '../src/components/masterDataPanel/mappings/ownDataToInvoice.js';
import { applyPartnerToInvoice } from '../src/components/masterDataPanel/mappings/partnerToInvoice.js';
import { mapCatalogItemsToOfferPositions } from '../src/components/masterDataPanel/mappings/catalogItemsToOffer.js';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';

const offerData = {
  sender: { companyName: 'Alt GmbH', address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' }, returnAddress: 'Alt GmbH - Altweg 1', contact: { email: 'alt@example.test', phone: '1', fax: '2', website: 'alt.test' } },
  recipient: { companyName: 'Alter Empfänger', attention: '', name: '', address: { street: 'Altweg', houseNumber: '2', postalCode: '22222', city: 'Altstadt' } },
  details: { offerNumber: 'ANG-2026-001', offerDate: '2026-05-07', validUntil: '2026-05-21' },
  references: { internalNumber: 'INT-1001', externalNumber: 'EXT-4711', customerNumber: 'ALT-1' },
  footer: { company: { companyName: 'Alt GmbH', street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt', extra: '' }, tax: { vatId: 'DEALT', taxNumber: 'ALT', commercialRegister: 'HRB ALT', representation: 'Alt' }, bank: { bankName: 'Altbank', iban: 'DE00', bic: 'ALT' } },
};

describe('offer master data integration', () => {
  it('updates only own-data and recipient fields while preserving offer-specific data', () => {
    const ownData = createOwnDataRecord({
      documentHeaderName: 'Corner Design',
      address: { companyName: 'Corner Design GmbH', street: 'Neue Straße', houseNumber: '12', postalCode: '42103', city: 'Wuppertal' },
      contact: { email: 'post@corner.test', phone: '0202 123', fax: '0202 124', website: 'corner.test' },
      taxAndRegister: { vatId: 'DE123', taxNumber: '12/345', commercialRegister: 'HRB 1' },
      bank: { bankName: 'Musterbank', iban: 'DE123', bic: 'MUSTDEFF' },
    });
    const partner = createPartner({
      companyName: 'Musterkunde GmbH',
      customerNumber: 'K-2048',
      mainAddress: { attention: 'z. Hd. Frau Beispiel', department: 'Einkauf', street: 'Beispielweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' },
    });

    const withOwnData = applyOwnDataToInvoice(offerData, ownData);
    const next = applyPartnerToInvoice(withOwnData, partner);

    expect(next.sender.companyName).toBe('Corner Design');
    expect(next.recipient).toMatchObject({ companyName: 'Musterkunde GmbH', name: 'Einkauf' });
    expect(next.references).toEqual({ internalNumber: 'INT-1001', externalNumber: 'EXT-4711', customerNumber: 'K-2048' });
    expect(next.details).toEqual(offerData.details);
  });

  it('appends mapped catalog records without replacing existing offer positions', () => {
    const service = createCatalogItem('service', { descriptions: { standard: 'Beratung' }, quantity: { defaultValue: '1', unit: 'Stunde' }, pricing: { netUnitPrice: '90,00', taxRate: '19' } });
    const existing = [{ id: 'offer-position-existing', description: 'Bestehende Position' }];
    const additions = mapCatalogItemsToOfferPositions([service, service]);
    const next = [...existing, ...additions];

    expect(next[0]).toEqual(existing[0]);
    expect(new Set(next.slice(1).map((position) => position.id)).size).toBe(2);
  });
});
