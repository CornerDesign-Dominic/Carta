import { describe, expect, it } from 'vitest';
import { createPartner, createDeliveryAddress } from '../src/masterData/partnerModel.js';
import {
  applyPartnerToInvoice,
  hasInvoiceRecipientData,
  removePartnerFromInvoice,
} from '../src/components/masterDataPanel/mappings/partnerToInvoice.js';

const invoiceData = {
  sender: { companyName: 'Absender GmbH' },
  recipient: {
    companyName: 'Alter Empfänger',
    attention: 'z. Hd. Alt',
    name: 'Alte Abteilung',
    address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' },
  },
  deliveryAddress: { companyName: 'Lieferort GmbH', address: { street: 'Lieferweg', houseNumber: '3', postalCode: '22222', city: 'Lieferstadt' } },
  references: { internalNumber: 'INT-1', externalNumber: 'EXT-1', customerNumber: 'ALT-1' },
  footer: { bank: { iban: 'DE00' } },
};

describe('partner to invoice mapping', () => {
  it('replaces recipient and customer number without mapping internal partner data', () => {
    const partner = createPartner({
      id: 'partner-1',
      companyName: 'Musterkunde GmbH',
      customerNumber: 'K-2048',
      supplierNumber: 'L-55',
      mainAddress: { attention: 'z. Hd. Frau Beispiel', department: 'Einkauf', street: 'Beispielweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' },
      contact: { email: 'kontakt@example.test' },
      bank: { iban: 'DE99' },
      deliveryAddresses: [createDeliveryAddress({ city: 'Hamburg' })],
    });
    const next = applyPartnerToInvoice(invoiceData, partner);

    expect(next.recipient).toEqual({ companyName: 'Musterkunde GmbH', attention: 'z. Hd. Frau Beispiel', name: 'Einkauf', address: { street: 'Beispielweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' } });
    expect(next.references).toEqual({ internalNumber: 'INT-1', externalNumber: 'EXT-1', customerNumber: 'K-2048' });
    expect(next.sender).toEqual(invoiceData.sender);
    expect(next.deliveryAddress).toEqual(invoiceData.deliveryAddress);
    expect(next.footer).toEqual(invoiceData.footer);
  });

  it('clears an existing customer number when the partner has none', () => {
    const next = applyPartnerToInvoice(invoiceData, createPartner({ companyName: 'Ohne Nummer' }));
    expect(next.references.customerNumber).toBe('');
  });

  it('removes only recipient data and customer number', () => {
    const next = removePartnerFromInvoice(invoiceData);

    expect(next.recipient).toEqual({ companyName: '', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } });
    expect(next.references).toEqual({ internalNumber: 'INT-1', externalNumber: 'EXT-1', customerNumber: '' });
    expect(next.sender).toEqual(invoiceData.sender);
    expect(next.deliveryAddress).toEqual(invoiceData.deliveryAddress);
  });

  it('recognizes recipient data without considering a delivery address', () => {
    expect(hasInvoiceRecipientData(invoiceData)).toBe(true);
    expect(hasInvoiceRecipientData({ ...invoiceData, recipient: { companyName: '', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } }, references: { ...invoiceData.references, customerNumber: '' } })).toBe(false);
  });
});
