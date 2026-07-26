import { afterEach, describe, expect, it, vi } from 'vitest';
import { measureInvoicePages } from '../src/components/InvoiceDocumentEditor.jsx';

function measuredElement(height, dataset = {}) {
  return {
    dataset,
    getBoundingClientRect: () => ({ height }),
  };
}

function createMeasureRoot({ projectHeight = 80, summaryHeight = 120 }) {
  const positionRow = measuredElement(100, { measurePositionRow: '0' });
  const previousPaymentRows = [
    measuredElement(50, { measurePreviousPaymentRow: '0' }),
    measuredElement(50, { measurePreviousPaymentRow: '1' }),
  ];
  const elements = new Map([
    ['[data-measure-first-content]', measuredElement(558)],
    ['[data-measure-follow-content]', measuredElement(788)],
    ['[data-measure-text-probe]', measuredElement(0)],
    ['[data-measure-project-info]', measuredElement(projectHeight)],
    ['[data-measure-summary] .invoice-print-summary', measuredElement(summaryHeight)],
    ['[data-measure-previous-payments] .invoice-print-previous-payments', measuredElement(140)],
    ['[data-measure-position-header]', measuredElement(30)],
  ]);

  return {
    querySelector: (selector) => elements.get(selector) ?? null,
    querySelectorAll: (selector) => {
      if (selector === '[data-measure-position-row]') return [positionRow];
      if (selector === '[data-measure-previous-payment-row]') return previousPaymentRows;
      return [];
    },
  };
}

const project = { type: 'projectInfo', projectInfo: {}, visibleProjectFields: [] };
const position = { type: 'position', index: 0, position: {} };
const previousPayments = [
  { type: 'previousPayment', index: 0, payment: {} },
  { type: 'previousPayment', index: 1, payment: {} },
];
const summary = { type: 'summary' };

afterEach(() => vi.unstubAllGlobals());

describe('final invoice measured pagination', () => {
  it('uses the rendered height for the one-column partial-invoice project block', () => {
    vi.stubGlobal('window', {
      getComputedStyle: () => ({
        marginTop: '0px',
        marginBottom: '0px',
        gap: '24px',
        getPropertyValue: (property) => (property === '--offer-print-small-safety-buffer' ? '16px' : ''),
      }),
    });

    const pages = measureInvoicePages(createMeasureRoot({ projectHeight: 300 }), [project, position, summary], {
      isProjectInfoMeasured: true,
    });

    expect(pages).toHaveLength(2);
    expect(pages[1].items).toEqual([summary]);
  });

  it('keeps a short final invoice on its first page', () => {
    vi.stubGlobal('window', {
      getComputedStyle: () => ({
        marginTop: '0px',
        marginBottom: '0px',
        gap: '24px',
        getPropertyValue: (property) => (property === '--offer-print-small-safety-buffer' ? '16px' : ''),
      }),
    });

    const pages = measureInvoicePages(createMeasureRoot({}), [project, position, summary], { isFinalInvoice: true });

    expect(pages).toHaveLength(1);
    expect(pages[0].items.map((item) => item.type)).toEqual(['projectInfo', 'position', 'summary']);
  });

  it('keeps an exactly fitting summary on the first page', () => {
    vi.stubGlobal('window', {
      getComputedStyle: () => ({
        marginTop: '0px',
        marginBottom: '0px',
        gap: '24px',
        getPropertyValue: (property) => (property === '--offer-print-small-safety-buffer' ? '16px' : ''),
      }),
    });

    const pages = measureInvoicePages(createMeasureRoot({ summaryHeight: 144 }), [
      project,
      position,
      ...previousPayments,
      summary,
    ], { isFinalInvoice: true });

    expect(pages).toHaveLength(1);
    expect(pages[0].used).toBe(542);
  });

  it('moves the intact summary to the next page after measured project and payment overhead', () => {
    vi.stubGlobal('window', {
      getComputedStyle: () => ({
        marginTop: '0px',
        marginBottom: '0px',
        gap: '24px',
        getPropertyValue: (property) => (property === '--offer-print-small-safety-buffer' ? '16px' : ''),
      }),
    });

    const pages = measureInvoicePages(createMeasureRoot({ projectHeight: 200, summaryHeight: 121 }), [
      project,
      position,
      ...previousPayments,
      summary,
    ], { isFinalInvoice: true });

    expect(pages).toHaveLength(2);
    expect(pages[1].items).toEqual([summary]);
  });
});
