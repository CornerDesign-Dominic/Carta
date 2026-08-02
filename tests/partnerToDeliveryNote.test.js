import { describe, expect, it } from 'vitest';
import { createDeliveryAddress, createPartner } from '../src/masterData/partnerModel.js';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import { applyOwnDataToInvoice } from '../src/components/masterDataPanel/mappings/ownDataToInvoice.js';
import {
  applyDeliveryAddressToDeliveryNote,
  applyPartnerToDeliveryNote,
  hasDeliveryNoteRecipientData,
  removeDeliveryAddressFromDeliveryNote,
  removePartnerFromDeliveryNote,
} from '../src/components/masterDataPanel/mappings/partnerToDeliveryNote.js';

const deliveryNoteData = {
  sender: { companyName: 'Alt GmbH', address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' }, returnAddress: 'Alt GmbH - Altweg 1', contact: { email: 'alt@example.test', phone: '1', fax: '2', website: 'alt.test' } },
  recipient: { companyName: 'Alter Empfänger', attention: 'z. Hd. Alt', name: 'Wareneingang', address: { street: 'Altweg', houseNumber: '2', postalCode: '22222', city: 'Altstadt' } },
  details: { deliveryNoteNumber: 'LFS-2026-001', deliveryDate: '2026-05-12', orderDate: '2026-05-10' },
  references: { internalReference: 'INT-1001', externalReference: 'EXT-4711', customerReference: 'K-2048' },
  footer: { company: { companyName: 'Alt GmbH', street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt', extra: '' }, tax: { vatId: 'DEALT', taxNumber: 'ALT', commercialRegister: 'HRB ALT', representation: 'Alt' }, bank: { bankName: 'Altbank', iban: 'DE00', bic: 'ALT' } },
};

const partner = createPartner({
  companyName: 'Musterkunde GmbH',
  mainAddress: { attention: 'z. Hd. Einkauf', department: 'Einkauf', street: 'Kundenweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' },
  deliveryAddresses: [
    createDeliveryAddress({ id: 'delivery-1', companyName: 'Musterlager GmbH', attention: 'Warenannahme', department: 'Lager', street: 'Lagerstraße', houseNumber: '4', postalCode: '22113', city: 'Hamburg' }),
    createDeliveryAddress({ id: 'delivery-2', companyName: 'Musterfiliale GmbH', attention: 'Filiale', department: 'Warenausgabe', street: 'Filialweg', houseNumber: '9', postalCode: '42103', city: 'Wuppertal' }),
  ],
});

describe('partner and delivery addresses for delivery notes', () => {
  it('uses the partner main address first and restores it after delivery-address removal', () => {
    const mainAddress = applyPartnerToDeliveryNote(deliveryNoteData, partner);
    const deliveryAddress = applyDeliveryAddressToDeliveryNote(mainAddress, partner.deliveryAddresses[0]);
    const restored = removeDeliveryAddressFromDeliveryNote(deliveryAddress, partner);

    expect(mainAddress.recipient).toEqual({ companyName: 'Musterkunde GmbH', attention: 'z. Hd. Einkauf', name: 'Einkauf', address: { street: 'Kundenweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' } });
    expect(deliveryAddress.recipient).toEqual({ companyName: 'Musterlager GmbH', attention: 'Warenannahme', name: 'Lager', address: { street: 'Lagerstraße', houseNumber: '4', postalCode: '22113', city: 'Hamburg' } });
    expect(restored.recipient).toEqual(mainAddress.recipient);
    expect(restored.details).toEqual(deliveryNoteData.details);
    expect(restored.references).toEqual(deliveryNoteData.references);
  });

  it('replaces a previous delivery address on partner change and clears the recipient only when the partner is removed', () => {
    const otherPartner = createPartner({ companyName: 'Neuer Kunde GmbH', mainAddress: { street: 'Neue Straße', houseNumber: '7', postalCode: '42103', city: 'Wuppertal' } });
    const withFirstDeliveryAddress = applyDeliveryAddressToDeliveryNote(applyPartnerToDeliveryNote(deliveryNoteData, partner), partner.deliveryAddresses[0]);
    const withDeliveryAddress = applyDeliveryAddressToDeliveryNote(withFirstDeliveryAddress, partner.deliveryAddresses[1]);
    const withOtherPartner = applyPartnerToDeliveryNote(withDeliveryAddress, otherPartner);
    const withoutPartner = removePartnerFromDeliveryNote(withOtherPartner);

    expect(withDeliveryAddress.recipient).toMatchObject({ companyName: 'Musterfiliale GmbH', name: 'Warenausgabe' });
    expect(withOtherPartner.recipient).toMatchObject({ companyName: 'Neuer Kunde GmbH', address: { street: 'Neue Straße', houseNumber: '7', postalCode: '42103', city: 'Wuppertal' } });
    expect(withoutPartner.recipient).toEqual({ companyName: '', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } });
    expect(withoutPartner.details).toEqual(deliveryNoteData.details);
    expect(hasDeliveryNoteRecipientData(withoutPartner)).toBe(false);
  });

  it('maps own data without changing delivery-note-specific details or references', () => {
    const ownData = createOwnDataRecord({ documentHeaderName: 'Corner Design', address: { companyName: 'Corner Design GmbH', street: 'Neue Straße', houseNumber: '12', postalCode: '42103', city: 'Wuppertal' } });
    const next = applyOwnDataToInvoice(deliveryNoteData, ownData);

    expect(next.sender.companyName).toBe('Corner Design');
    expect(next.details).toEqual(deliveryNoteData.details);
    expect(next.references).toEqual(deliveryNoteData.references);
  });
});
