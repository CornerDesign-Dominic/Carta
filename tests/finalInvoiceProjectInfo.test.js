import { describe, expect, it } from 'vitest';
import {
  createInvoicePrintItems,
  createTradeInvoiceTextBlocks,
  getProjectFieldDefinitions,
} from '../src/components/InvoiceDocumentEditor.jsx';

describe('final invoice project information', () => {
  it('uses compact labels for the one-column partial-invoice project block', () => {
    expect(getProjectFieldDefinitions('partialInvoice')).toEqual([
      { field: 'projectName', label: 'Projekt', labelField: 'projectName' },
      { field: 'orderNumber', label: 'Referenznr.', labelField: 'orderNumber' },
      { field: 'partialService', label: 'Leistung', labelField: 'partialService' },
      { field: 'completionDate', label: 'Zeitraum', labelField: 'completionDate' },
    ]);
  });

  it('keeps the compact progress-invoice project block above the preamble in print output', () => {
    const visibleProjectFields = getProjectFieldDefinitions('progressInvoice');

    expect(visibleProjectFields).toEqual([
      { field: 'progressPaymentNumber', label: 'Abschlag', labelField: 'progressPaymentNumber' },
      { field: 'projectName', label: 'Projekt', labelField: 'projectName' },
      { field: 'orderNumber', label: 'Referenznr.', labelField: 'orderNumber' },
      { field: 'billingSection', label: 'Leistungsstand', labelField: 'billingSection' },
    ]);

    const items = createInvoicePrintItems({
      isFinalInvoice: false,
      isPartialInvoice: false,
      isProgressInvoice: true,
      isSmallBusinessInvoice: false,
      positions: [],
      previousPayments: [],
      projectInfo: {},
      textBlocks: [{ id: 'intro', value: 'Vorlauftext', visible: true }],
      visibleProjectFields,
    });

    expect(items.slice(0, 2).map((item) => item.type)).toEqual(['projectInfo', 'text']);
  });

  it('keeps partial-invoice project information above the preamble in print output', () => {
    const items = createInvoicePrintItems({
      isFinalInvoice: false,
      isPartialInvoice: true,
      isSmallBusinessInvoice: false,
      positions: [],
      previousPayments: [],
      projectInfo: {},
      textBlocks: [{ id: 'intro', value: 'Vorlauftext', visible: true }],
      visibleProjectFields: getProjectFieldDefinitions('partialInvoice'),
    });

    expect(items.slice(0, 2).map((item) => item.type)).toEqual(['projectInfo', 'text']);
  });

  it('uses the final-invoice-only labels in the requested order', () => {
    expect(getProjectFieldDefinitions('finalInvoice')).toEqual([
      { field: 'projectName', label: 'Projekt', labelField: 'projectName' },
      { field: 'completionDate', label: 'Zeitraum', labelField: 'completionDate' },
      { field: 'orderNumber', label: 'Referenznr.', labelField: 'orderNumber' },
    ]);
  });

  it('uses the regular preamble instead of the former final-invoice introduction', () => {
    const intro = createTradeInvoiceTextBlocks('finalInvoice').find((block) => block.id === 'intro');

    expect(intro?.value).toBe('vielen Dank fuer Ihren Auftrag. Fuer unsere Leistungen stellen wir Ihnen wie folgt in Rechnung:');
    expect(intro?.value).not.toContain('nach Fertigstellung');
  });

  it('keeps the preamble before the project information in print output', () => {
    const items = createInvoicePrintItems({
      isFinalInvoice: true,
      isSmallBusinessInvoice: false,
      positions: [],
      previousPayments: [],
      projectInfo: {},
      textBlocks: [{ id: 'intro', value: 'Vorlauftext', visible: true }],
      visibleProjectFields: getProjectFieldDefinitions('finalInvoice'),
    });

    expect(items.slice(0, 2).map((item) => item.type)).toEqual(['text', 'projectInfo']);
    expect(items[0]).toMatchObject({ id: 'intro', text: 'Vorlauftext' });
  });
});
