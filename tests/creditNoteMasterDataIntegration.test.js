import { describe, expect, it } from 'vitest';
import { createCatalogItem } from '../src/masterData/catalogItemModel.js';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import { createPartner } from '../src/masterData/partnerModel.js';
import { applyOwnDataToInvoice } from '../src/components/masterDataPanel/mappings/ownDataToInvoice.js';
import {
  applyPartnerToCreditNote,
  removePartnerFromCreditNote,
} from '../src/components/masterDataPanel/mappings/partnerToCreditNote.js';
import { mapCatalogItemsToCreditNotePositions } from '../src/components/masterDataPanel/mappings/catalogItemsToCreditNote.js';

function createCreditNoteData() {
  return {
    sender: { companyName: 'Alt GmbH', address: { street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt' }, returnAddress: 'Alt GmbH - Altweg 1', contact: { email: 'alt@example.test', phone: '1', fax: '2', website: 'alt.test' } },
    recipient: { companyName: 'Alter Empfänger', attention: '', name: '', address: { street: 'Altweg', houseNumber: '2', postalCode: '22222', city: 'Altstadt' } },
    details: { creditNoteNumber: 'GUT-2026-001', creditNoteDate: '2026-05-12', serviceDate: '2026-05-10' },
    references: { internalReference: 'INT-1001', externalReference: 'EXT-4711', customerReference: 'K-2048' },
    correction: { originalInvoiceNumber: 'RE-2026-010', cancellationReason: 'Storno', correctionReason: 'Korrektur' },
    footer: { company: { companyName: 'Alt GmbH', street: 'Altweg', houseNumber: '1', postalCode: '11111', city: 'Altstadt', extra: '' }, tax: { vatId: 'DEALT', taxNumber: 'ALT', commercialRegister: 'HRB ALT', representation: 'Alt' }, bank: { bankName: 'Altbank', iban: 'DE00', bic: 'ALT' } },
  };
}

const ownData = createOwnDataRecord({
  documentHeaderName: 'Corner Design',
  address: { companyName: 'Corner Design GmbH', street: 'Neue Straße', houseNumber: '12', postalCode: '42103', city: 'Wuppertal' },
  contact: { email: 'post@corner.test', phone: '0202 123', fax: '0202 124', website: 'corner.test' },
  taxAndRegister: { vatId: 'DE123', taxNumber: '12/345', commercialRegister: 'HRB 1' },
  bank: { bankName: 'Musterbank', iban: 'DE123', bic: 'MUSTDEFF' },
});
const partner = createPartner({
  companyName: 'Musterkunde GmbH',
  customerNumber: 'K-NEU',
  mainAddress: { attention: 'z. Hd. Frau Beispiel', department: 'Einkauf', street: 'Beispielweg', houseNumber: '18', postalCode: '20095', city: 'Hamburg' },
});

describe('credit note master data integration', () => {
  it.each(['creditNote', 'cancellationInvoice', 'invoiceCorrection'])(
    'preserves protected %s fields while applying sender and recipient data',
    () => {
      const source = createCreditNoteData();
      const withOwnData = applyOwnDataToInvoice(source, ownData);
      const next = applyPartnerToCreditNote(withOwnData, partner);

      expect(next.sender.companyName).toBe('Corner Design');
      expect(next.recipient).toMatchObject({ companyName: 'Musterkunde GmbH', name: 'Einkauf' });
      expect(next.details).toEqual(source.details);
      expect(next.references).toEqual(source.references);
      expect(next.correction).toEqual(source.correction);
    },
  );

  it('removes only the recipient while preserving all credit-note references', () => {
    const source = createCreditNoteData();
    const next = removePartnerFromCreditNote(applyPartnerToCreditNote(source, partner));

    expect(next.recipient).toMatchObject({ companyName: '', attention: '', name: '' });
    expect(next.references).toEqual(source.references);
    expect(next.correction).toEqual(source.correction);
  });

  it('appends catalog positions without replacing an existing position', () => {
    const service = createCatalogItem('service', { descriptions: { standard: 'Beratung' }, quantity: { defaultValue: '1', unit: 'Stunde' }, pricing: { netUnitPrice: '90,00', taxRate: '19' } });
    const existing = [{ id: 'credit-note-position-existing', description: 'Bestehende Position' }];
    const additions = mapCatalogItemsToCreditNotePositions([service, service]);
    const next = [...existing, ...additions];

    expect(next[0]).toEqual(existing[0]);
    expect(new Set(next.slice(1).map((position) => position.id)).size).toBe(2);
  });
});
