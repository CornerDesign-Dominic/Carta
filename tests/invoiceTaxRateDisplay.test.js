import { describe, expect, it } from 'vitest';
import { formatPrintTaxRate } from '../src/components/InvoiceDocumentEditor.jsx';
import { formatTaxRateInputValue, normalizeTaxRateInput } from '../src/components/documentBlocks/PositionTable.jsx';

describe('standard invoice tax-rate display', () => {
  it('renders every supported standard rate once in the print output', () => {
    expect([19, 15, 7, 0].map((rate) => formatPrintTaxRate(rate, true))).toEqual([
      '19 %',
      '15 %',
      '7 %',
      '0 %',
    ]);
    expect(formatPrintTaxRate(15, false)).toBe('15%');
  });

  it('keeps the editor value free of the separately rendered percent suffix after blur', () => {
    expect(formatTaxRateInputValue('15 %')).toBe('15');
    expect(normalizeTaxRateInput('15 %')).toBe('15');
    expect(normalizeTaxRateInput('7,0')).toBe('7');
    expect(normalizeTaxRateInput('0')).toBe('0');
  });
});
