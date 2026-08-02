import { describe, expect, it } from 'vitest';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import {
  applyOwnDataToInvoice,
  hasInvoiceOwnData,
  removeOwnDataFromInvoice,
} from '../src/components/masterDataPanel/mappings/ownDataToInvoice.js';

const invoiceData = {
  sender: {
    companyName: 'Alte Firma',
    address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' },
    returnAddress: 'Alte Firma - Altweg 1 - 11111 Altstadt',
    contact: { email: 'alt@example.test', phone: '1', fax: '2', website: 'alt.test' },
  },
  recipient: { companyName: 'Beispielkunde GmbH' },
  footer: {
    company: { companyName: 'Alte Firma', street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt', extra: 'Alt' },
    tax: { vatId: 'DEALT', taxNumber: 'ALT', commercialRegister: 'HRB ALT', representation: 'Alt' },
    bank: { bankName: 'Altbank', iban: 'DE00', bic: 'ALT', bankExtra: 'bleibt' },
  },
};

const ownRecord = createOwnDataRecord({
  id: 'own-1',
  documentHeaderName: 'Corner Design',
  ownerOrManagingDirector: 'Max Mustermann',
  address: { companyName: 'Corner Design GmbH', street: 'Neue Straße', houseNumber: '12', postalCode: '42103', city: 'Wuppertal', country: 'Deutschland' },
  contact: { email: 'post@corner.test', phone: '0202 123', fax: '0202 124', website: 'corner.test' },
  taxAndRegister: { taxNumber: '12/345/67890', vatId: 'DE123456789', commercialRegister: 'HRB 123', registerNumber: '456', registerCourt: 'Amtsgericht Wuppertal' },
  bank: { bankName: 'Musterbank', iban: 'DE123', bic: 'MUSTDEFF' },
  settings: { isSmallBusiness: true, defaultPaymentTermDays: '14' },
});

describe('own data to invoice mapping', () => {
  it('replaces all supported sender, contact, footer, bank, and tax fields', () => {
    const next = applyOwnDataToInvoice(invoiceData, ownRecord);

    expect(next.sender).toMatchObject({
      companyName: 'Corner Design',
      returnAddress: 'Corner Design - Neue Straße 12 - 42103 Wuppertal',
      address: { street: 'Neue Straße', houseNumber: '12', postalCode: '42103', city: 'Wuppertal' },
      contact: { email: 'post@corner.test', phone: '0202 123', fax: '0202 124', website: 'corner.test' },
    });
    expect(next.footer).toMatchObject({
      company: { companyName: 'Corner Design GmbH' },
      tax: { vatId: 'DE123456789', taxNumber: '12/345/67890', commercialRegister: 'HRB 123 · 456 · Amtsgericht Wuppertal', representation: 'Max Mustermann' },
      bank: { bankName: 'Musterbank', iban: 'DE123', bic: 'MUSTDEFF' },
    });
    expect(next.recipient).toEqual(invoiceData.recipient);
  });

  it('clears only fields controlled by own data and preserves recipients', () => {
    const next = removeOwnDataFromInvoice(invoiceData);

    expect(next.sender).toMatchObject({ companyName: '', returnAddress: '', address: { street: '', houseNumber: '', postalCode: '', city: '' }, contact: { email: '', phone: '', fax: '', website: '' } });
    expect(next.footer.tax).toMatchObject({ vatId: '', taxNumber: '', commercialRegister: '', representation: '' });
    expect(next.footer.bank).toMatchObject({ bankName: '', iban: '', bic: '', bankExtra: 'bleibt' });
    expect(next.recipient).toEqual(invoiceData.recipient);
  });

  it('recognizes existing own document data for the replacement warning', () => {
    expect(hasInvoiceOwnData(invoiceData)).toBe(true);
    expect(hasInvoiceOwnData(removeOwnDataFromInvoice(invoiceData))).toBe(false);
  });
});
