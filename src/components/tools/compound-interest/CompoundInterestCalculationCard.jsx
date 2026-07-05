import { useMemo } from 'react';
import {
  calculateCompoundInterestResult,
  compoundInterestExampleValues,
  compoundInterestIntervals,
  formatCurrency,
} from './compoundInterestUtils.js';

export default function CompoundInterestCalculationCard({
  calculation,
  canRemove,
  index,
  onChange,
  onRemove,
}) {
  const result = useMemo(
    () => calculateCompoundInterestResult(calculation),
    [calculation],
  );

  function handleNumberChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        setValue(nextValue);
      }
    };
  }

  function handleIntegerChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || /^\d+$/.test(nextValue)) {
        setValue(nextValue);
      }
    };
  }

  return (
    <section className="tools-calculation-section" aria-labelledby={`compound-interest-calculation-${calculation.id}`}>
      <div className="tools-calculation-header">
        <h2 id={`compound-interest-calculation-${calculation.id}`}>Berechnung {index + 1}</h2>
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
          <div className="tools-form-grid tools-form-grid-compound-interest">
            <label className="tools-field-initial-capital">
              <span>Anfangskapital</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                placeholder={compoundInterestExampleValues.initialCapital}
                value={calculation.initialCapital}
                onChange={handleNumberChange((value) => onChange('initialCapital', value))}
              />
            </label>

            <label className="tools-field-monthly-rate">
              <span>Monatliche Rate</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                placeholder={compoundInterestExampleValues.monthlyRate}
                value={calculation.monthlyRate}
                onChange={handleNumberChange((value) => onChange('monthlyRate', value))}
              />
            </label>

            <div className="tools-duration-field tools-field-duration">
              <span>Laufzeit</span>
              <div className="tools-duration-inputs">
                <label>
                  <span>Jahre</span>
                  <input
                    min="0"
                    step="1"
                    inputMode="numeric"
                    type="number"
                    placeholder={compoundInterestExampleValues.durationYears}
                    value={calculation.durationYears}
                    onChange={handleIntegerChange((value) => onChange('durationYears', value))}
                  />
                </label>

                <label>
                  <span>Monate</span>
                  <input
                    min="0"
                    step="1"
                    inputMode="numeric"
                    type="number"
                    placeholder={compoundInterestExampleValues.durationMonths}
                    value={calculation.durationMonths}
                    onChange={handleIntegerChange((value) => onChange('durationMonths', value))}
                  />
                </label>
              </div>
            </div>

            <label className="tools-field-interest-rate">
              <span>Zinssatz p.a. in %</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                placeholder={compoundInterestExampleValues.interestRate}
                value={calculation.interestRate}
                onChange={handleNumberChange((value) => onChange('interestRate', value))}
              />
            </label>

            <label className="tools-field-interest-interval">
              <span>Zinsintervall</span>
              <select
                value={calculation.interestInterval}
                onChange={(event) => onChange('interestInterval', event.target.value)}
              >
                {compoundInterestIntervals.map((interval) => (
                  <option value={interval.value} key={interval.value}>
                    {interval.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="tools-result-panel" aria-label="Ergebnis">
          <h2>Ergebnis</h2>
          {result.status === 'success' ? (
            <>
              <div className="tools-result-highlight">
                <span>Endkapital</span>
                <strong>{formatCurrency(result.finalCapital)}</strong>
              </div>

              <dl>
                <div>
                  <dt>Eingezahlt</dt>
                  <dd>{formatCurrency(result.paidInCapital)}</dd>
                </div>
                <div>
                  <dt>Zinsertrag</dt>
                  <dd>{formatCurrency(result.interestReturn)}</dd>
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
