import { useMemo, useState } from 'react';
import {
  calculateHourlyWage,
  createHourlyWageCalculation,
  formatCurrency,
  formatDuration,
} from './hourlyWageUtils.js';

export default function HourlyWageCalculator() {
  const [calculation, setCalculation] = useState(() => createHourlyWageCalculation());
  const result = useMemo(() => calculateHourlyWage(calculation), [calculation]);

  function updateCalculation(field, value) {
    setCalculation((currentCalculation) => ({
      ...currentCalculation,
      [field]: value,
    }));
  }

  function handlePositiveNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        updateCalculation(field, nextValue);
      }
    };
  }

  function handleWholeNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (/^\d*$/.test(nextValue)) {
        updateCalculation(field, nextValue);
      }
    };
  }

  return (
    <>
      <h1 id="tools-title">Stundenlohn</h1>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="hourly-wage-calculation">
          <div className="tools-calculation-header">
            <h2 id="hourly-wage-calculation">Stundenlohn berechnen</h2>
          </div>

          <div className="tools-calculator-layout">
            <section className="tools-calculator-panel" aria-label="Eingaben">
              <h2>Eingaben</h2>
              <div className="tools-form-grid tools-form-grid-hourly-wage">
                <label className="tools-field-hourly-amount">
                  <span>Vergütung</span>
                  <input
                    inputMode="decimal"
                    min="0"
                    type="number"
                    value={calculation.amount}
                    onChange={handlePositiveNumberChange('amount')}
                  />
                </label>

                <div className="tools-duration-field tools-field-hourly-duration">
                  <span>Arbeitszeit</span>
                  <div className="tools-duration-inputs">
                    <label>
                      <span>Stunden</span>
                      <input
                        inputMode="numeric"
                        min="0"
                        type="number"
                        value={calculation.hours}
                        onChange={handleWholeNumberChange('hours')}
                      />
                    </label>
                    <label>
                      <span>Minuten</span>
                      <input
                        inputMode="numeric"
                        min="0"
                        type="number"
                        value={calculation.minutes}
                        onChange={handleWholeNumberChange('minutes')}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="tools-result-panel" aria-label="Ergebnis">
              <h2>Ergebnis</h2>
              {result.status === 'success' ? (
                <>
                  <div className="tools-result-highlight">
                    <span>Stundenlohn</span>
                    <strong>{formatCurrency(result.hourlyWage)}</strong>
                  </div>

                  <dl>
                    <div>
                      <dt>Verwendete Arbeitszeit</dt>
                      <dd>{formatDuration(result.totalMinutes)}</dd>
                    </div>
                    <div>
                      <dt>Minutenlohn</dt>
                      <dd>{formatCurrency(result.minuteWage)}</dd>
                    </div>
                    <div>
                      <dt>Gesamtvergütung</dt>
                      <dd>{formatCurrency(result.amount)}</dd>
                    </div>
                  </dl>
                </>
              ) : (
                <p className="tools-result-empty">{result.message}</p>
              )}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
