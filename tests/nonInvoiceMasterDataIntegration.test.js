import { describe, expect, it } from 'vitest';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import { createPartner } from '../src/masterData/partnerModel.js';
import {
  applyOwnDataToBusinessLetter,
} from '../src/components/masterDataPanel/mappings/ownDataToBusinessLetter.js';
import {
  applyPartnerToBusinessLetter,
  removePartnerFromBusinessLetter,
} from '../src/components/masterDataPanel/mappings/partnerToBusinessLetter.js';
import {
  applyOwnDataToReminder,
} from '../src/components/masterDataPanel/mappings/ownDataToReminder.js';
import {
  applyPartnerToReminder,
  removePartnerFromReminder,
} from '../src/components/masterDataPanel/mappings/partnerToReminder.js';
import {
  applyOwnDataToReceipt,
  removeOwnDataFromReceipt,
} from '../src/components/masterDataPanel/mappings/ownDataToReceipt.js';
import {
  applyOwnDataToSelfReceipt,
} from '../src/components/masterDataPanel/mappings/ownDataToSelfReceipt.js';
import {
  applyPartnerToSelfReceipt,
  removePartnerFromSelfReceipt,
} from '../src/components/masterDataPanel/mappings/partnerToSelfReceipt.js';

const ownData = createOwnDataRecord({
  documentHeaderName: 'Corner Design',
  address: { companyName: 'Corner Design GmbH', street: 'Neue Straße', houseNumber: '12', postalCode: '42103', city: 'Wuppertal' },
  contact: { email: 'post@corner.test', phone: '0202 123', fax: '0202 124', website: 'corner.test' },
  taxAndRegister: { vatId: 'DE123', taxNumber: '12/345', commercialRegister: 'HRB 1' },
  bank: { bankName: 'Musterbank', iban: 'DE123', bic: 'MUSTDEFF' },
});
const partner = createPartner({
  companyName: 'Musterlieferant GmbH',
  mainAddress: { attention: 'Verkauf', department: 'Zentrale', street: 'Lieferweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' },
});

function createBusinessData() {
  return {
    sender: { companyName: 'Alt GmbH', address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' }, returnAddress: 'Alt GmbH - Altweg 1', contact: { email: 'alt@example.test', phone: '1', fax: '2', website: 'alt.test' } },
    recipient: { companyName: 'Alter Partner', attention: '', name: '', address: { street: 'Altweg', houseNumber: '2', postalCode: '22222', city: 'Altstadt' } },
    details: { number: 'D-1', dueDate: '2026-08-05' },
    references: { customerReference: 'REF-1' },
    footer: { company: { companyName: 'Alt GmbH', street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt', extra: '' }, tax: { vatId: 'DEALT', taxNumber: 'ALT', commercialRegister: 'HRB ALT', representation: 'Alt' }, bank: { bankName: 'Altbank', iban: 'DE00', bic: 'ALT' } },
  };
}

function createReceiptData() {
  return {
    sender: { companyName: 'Alt GmbH', address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' }, returnAddress: 'Alt GmbH - Altweg 1', contact: { email: 'alt@example.test', phone: '1', website: 'alt.test' } },
    recipient: { companyName: 'Nicht als Partner verwendet', attention: '', name: '', address: { street: '', houseNumber: '', postalCode: '', city: '' } },
    details: { receiptId: 'Q-1', from: 'Barzahler', purpose: 'Bewirtung', place: 'Berlin' },
    references: { internalReference: 'INT-1', externalReference: 'EXT-1' },
    amount: { netAmount: '100,00', taxRate: '19', taxAmount: '19,00', grossAmount: '119,00', amountInWords: 'einhundertneunzehn Euro', settlementMethod: 'Bar' },
    footer: { company: { companyName: 'Alt GmbH', street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt', extra: '' }, tax: { vatId: 'DEALT', taxId: 'ALT', representation: 'Alt' }, bank: { bankName: 'Altbank', iban: 'DE00', bic: 'ALT' } },
  };
}

describe('master data integration for reminder, business letter, self receipt and receipt', () => {
  it('preserves reminder open-item data and references while applying sender and reminder recipient', () => {
    const reminderData = createBusinessData();
    const openItems = [{ id: 'open-1', invoiceNumber: 'RE-1', amount: '120,00' }];
    const charges = { interest: '2,00', reminderFee: '5,00' };
    const withOwnData = applyOwnDataToReminder(reminderData, ownData);
    const next = applyPartnerToReminder(withOwnData, partner);

    expect(next.sender.companyName).toBe('Corner Design');
    expect(next.recipient.companyName).toBe('Musterlieferant GmbH');
    expect(next.details).toEqual(reminderData.details);
    expect(next.references).toEqual(reminderData.references);
    expect(openItems).toEqual([{ id: 'open-1', invoiceNumber: 'RE-1', amount: '120,00' }]);
    expect(charges).toEqual({ interest: '2,00', reminderFee: '5,00' });
  });

  it('preserves all business-letter content while applying sender and letter recipient', () => {
    const letterData = createBusinessData();
    const content = { subject: 'Vertrauliches Schreiben', salutation: 'Guten Tag', body: 'Individueller Brieftext', closing: 'Viele Grüße' };
    const next = applyPartnerToBusinessLetter(applyOwnDataToBusinessLetter(letterData, ownData), partner);

    expect(next.sender.companyName).toBe('Corner Design');
    expect(next.recipient).toMatchObject({ companyName: 'Musterlieferant GmbH', name: 'Zentrale' });
    expect(next.details).toEqual(letterData.details);
    expect(content).toEqual({ subject: 'Vertrauliches Schreiben', salutation: 'Guten Tag', body: 'Individueller Brieftext', closing: 'Viele Grüße' });
  });

  it('maps a self-receipt partner only into the explicit payment-recipient/supplier address block', () => {
    const selfReceiptData = createBusinessData();
    const next = applyPartnerToSelfReceipt(applyOwnDataToSelfReceipt(selfReceiptData, ownData), partner);
    const removed = removePartnerFromSelfReceipt(next);

    expect(next.recipient).toMatchObject({ companyName: 'Musterlieferant GmbH', attention: 'Verkauf', name: 'Zentrale' });
    expect(next.details).toEqual(selfReceiptData.details);
    expect(next.references).toEqual(selfReceiptData.references);
    expect(removed.recipient).toMatchObject({ companyName: '', attention: '', name: '' });
    expect(removed.details).toEqual(selfReceiptData.details);
  });

  it('maps only own data to a receipt and preserves payer, purpose, references and amounts', () => {
    const receiptData = createReceiptData();
    const next = applyOwnDataToReceipt(receiptData, ownData);
    const removed = removeOwnDataFromReceipt(next);

    expect(next.sender.companyName).toBe('Corner Design');
    expect(next.footer.tax).toMatchObject({ vatId: 'DE123', taxId: '12/345' });
    expect(next.details).toEqual(receiptData.details);
    expect(next.references).toEqual(receiptData.references);
    expect(next.amount).toEqual(receiptData.amount);
    expect(next.recipient).toEqual(receiptData.recipient);
    expect(removed.details).toEqual(receiptData.details);
    expect(removed.amount).toEqual(receiptData.amount);
  });

  it('removes reminder and letter partners without changing their protected document fields', () => {
    const source = createBusinessData();
    const next = removePartnerFromReminder(applyPartnerToReminder(source, partner));
    const letterNext = removePartnerFromBusinessLetter(applyPartnerToBusinessLetter(source, partner));

    expect(next.recipient.companyName).toBe('');
    expect(next.details).toEqual(source.details);
    expect(next.references).toEqual(source.references);
    expect(letterNext.recipient.companyName).toBe('');
    expect(letterNext.details).toEqual(source.details);
    expect(letterNext.references).toEqual(source.references);
  });
});
