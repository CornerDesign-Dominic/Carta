import { describe, expect, it } from 'vitest';
import {
  createInvoicePrintItems,
  createTradeInvoiceTextBlocks,
  getProjectFieldDefinitions,
} from '../src/components/InvoiceDocumentEditor.jsx';

describe('final invoice project information', () => {
  it('uses the final-invoice-only labels in the requested order', () => {
    expect(getProjectFieldDefinitions('finalInvoice')).toEqual([
      { field: 'projectName', label: 'Projekt', labelField: 'projectName' },
      { field: 'orderNumber', label: 'Referenznr.', labelField: 'orderNumber' },
      { field: 'completionDate', label: 'Zeitraum', labelField: 'completionDate' },
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
