import { useMemo } from 'react';
import {
  calculateVatResult,
  formatCurrency,
  getVatAmountLabel,
  getVatResultTitle,
  vatExampleValues,
  vatRateOptions,
} from './vatCalculatorUtils.js';

export default function VatCalculationCard({
  calculation,
  calculationMode,
  canRemove,
  index,
  onChange,
  onRemove,
}) {
  const result = useMemo(
    () => calculateVatResult(calculation, calculationMode),
    [calculation, calculationMode],
  );

  function handleNumberChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        setValue(nextValue);
      }
    };
  }

  return (
    <section className="tools-calculation-section" aria-labelledby={`vat-calculation-${calculation.id}`}>
      <div className="tools-calculation-header">
        <h2 id={`vat-calculation-${calculation.id}`}>Berechnung {index + 1}</h2>
        {canRemove && (
          <div className="tools-calculation-actions">
            <button className="tools-remove-calculation" type="button" onClick={onRemove}>
              Vergleich entfernen
            </button>
          </div>
        )}
      </div>

      <div className="tools-calculator-layout">
        <section className="tools-calculator-panel" aria-label="Eingaben">
          <h2>Eingaben</h2>
          <div className="tools-form-grid tools-form-grid-vat">
            <label className="tools-field-vat-amount">
              <span>{getVatAmountLabel(calculationMode)}</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                placeholder={vatExampleValues.amount}
                value={calculation.amount}
                onChange={handleNumberChange((value) => onChange('amount', value))}
              />
            </label>

            <label className="tools-field-vat-rate">
              <span>Umsatzsteuersatz</span>
              <select
                value={calculation.rateOption}
                onChange={(event) => onChange('rateOption', event.target.value)}
              >
                {vatRateOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            {calculation.rateOption === 'custom' && (
              <label className="tools-field-vat-custom-rate">
                <span>Eigener Satz in %</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder={vatExampleValues.customRate}
                  value={calculation.customRate}
                  onChange={handleNumberChange((value) => onChange('customRate', value))}
                />
              </label>
            )}
          </div>
        </section>

        <section className="tools-result-panel" aria-label="Ergebnis">
          <h2>Ergebnis</h2>
          {result.status === 'success' ? (
            <>
              <div className="tools-result-highlight">
                <span>{getVatResultTitle(calculationMode)}</span>
                <strong>
                  {calculationMode === 'net' && formatCurrency(result.netAmount)}
                  {calculationMode === 'tax' && formatCurrency(result.vatAmount)}
                  {calculationMode === 'gross' && formatCurrency(result.grossAmount)}
                </strong>
              </div>

              <dl>
                <div>
                  <dt>Nettobetrag</dt>
                  <dd>{formatCurrency(result.netAmount)}</dd>
                </div>
                <div>
                  <dt>Umsatzsteuer</dt>
                  <dd>{formatCurrency(result.vatAmount)}</dd>
                </div>
                <div>
                  <dt>Bruttobetrag</dt>
                  <dd>{formatCurrency(result.grossAmount)}</dd>
                </div>
              </dl>
            </>
          ) : (
            <p className="tools-result-empty">{result.message}</p>
          )}
        </section>
      </div>
    </section>
  );
}
