import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import {
  formatPreviousPaymentNetAmount,
  getFinalInvoicePreviousPaymentColumns,
  InvoicePrintPreviousPaymentsTable,
  PreviousPaymentsTable,
} from '../src/components/InvoiceDocumentEditor.jsx';

const labels = {
  previousPayments: 'Bisherige Abschlagsrechnungen',
  previousPaymentInvoiceNumber: 'Rechnungsnr.',
  previousPaymentInvoiceDate: 'Datum',
  previousPaymentNet: 'Netto',
  previousPaymentTaxRate: 'USt.',
  previousPaymentTaxAmount: 'USt.-Betrag',
  previousPaymentGross: 'Brutto',
};

describe('final invoice previous payments', () => {
  it('uses exactly the six compact columns with correct umlauts', () => {
    expect(getFinalInvoicePreviousPaymentColumns()).toEqual([
      { field: 'invoiceNumber', labelField: 'previousPaymentInvoiceNumber', label: 'Rechnungsnr.' },
      { field: 'invoiceDate', labelField: 'previousPaymentInvoiceDate', label: 'Datum' },
      { field: 'netAmount', labelField: 'previousPaymentNet', label: 'Netto' },
      { field: 'taxRate', labelField: 'previousPaymentTaxRate', label: 'USt.' },
      { field: 'taxAmount', labelField: 'previousPaymentTaxAmount', label: 'USt.-Betrag' },
      { field: 'grossAmount', labelField: 'previousPaymentGross', label: 'Brutto' },
    ]);
  });

  it('formats the editable net amount as a German euro amount without altering its stored value', () => {
    expect(formatPreviousPaymentNetAmount('0')).toMatch(/^0,00\s€$/);
    expect(formatPreviousPaymentNetAmount('1234.5')).toMatch(/^1\.234,50\s€$/);
    expect(formatPreviousPaymentNetAmount('1.234,5 €')).toMatch(/^1\.234,50\s€$/);
  });

  it('places the editor remove action in the first cell without an action column', () => {
    const markup = renderToStaticMarkup(createElement(PreviousPaymentsTable, {
      calculatePayment: () => ({ net: 0, taxRate: 19, tax: 0, gross: 0 }),
      formatCurrency: (value) => new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(value),
      labels,
      onAddPayment: () => {},
      onPaymentChange: () => {},
      onRemovePayment: () => {},
      payments: [{
        id: 'payment-1',
        invoiceNumber: 'AR-2026-001',
        invoiceDate: '2026-05-07',
        netAmount: '0',
        taxRate: '19',
      }],
    }));

    expect(markup).toMatch(/value="0,00\s€"/);
    expect(markup).toContain('invoice-previous-payment-actions');
    expect(markup.match(/<td/g)).toHaveLength(6);
  });

  it('prints multiple payments without the former payment label or status column', () => {
    const markup = renderToStaticMarkup(createElement(InvoicePrintPreviousPaymentsTable, {
      calculatePreviousPayment: (payment) => ({
        net: Number(payment.netAmount),
        taxRate: Number(payment.taxRate),
        tax: Number(payment.netAmount) * Number(payment.taxRate) / 100,
        gross: Number(payment.netAmount) * (1 + Number(payment.taxRate) / 100),
      }),
      labels,
      previousPaymentItems: [
        {
          index: 0,
          payment: {
            id: 'payment-1',
            label: '1. Abschlag',
            invoiceNumber: 'AR-2026-LANGE-REFERENZ-0001',
            invoiceDate: '2026-05-07',
            netAmount: '1000',
            taxRate: '19',
            status: 'paid',
          },
        },
        {
          index: 1,
          payment: {
            id: 'payment-2',
            label: '2. Abschlag',
            invoiceNumber: 'AR-2026-002',
            invoiceDate: '2026-06-07',
            netAmount: '500',
            taxRate: '7',
            status: 'open',
          },
        },
      ],
    }));

    expect(markup).toContain('Bisherige Abschlagsrechnungen');
    expect(markup).toContain('AR-2026-LANGE-REFERENZ-0001');
    expect(markup.match(/<tr/g)).toHaveLength(3);
    expect(markup).not.toContain('1. Abschlag');
    expect(markup).not.toContain('vereinnahmt');
    expect(markup).not.toContain('gestellt');
  });
});
