import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import {
  getFinalInvoicePreviousPaymentColumns,
  InvoicePrintPreviousPaymentsTable,
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
