import { useMemo, useState } from 'react';
import {
  baseInterestRate,
  calculateDefaultInterest,
  createDefaultInterestCalculation,
  defaultInterestRateOptions,
  formatCurrency,
  formatPercent,
} from './defaultInterestUtils.js';

export default function DefaultInterestCalculator() {
  const [calculation, setCalculation] = useState(() => createDefaultInterestCalculation());
  const result = useMemo(() => calculateDefaultInterest(calculation), [calculation]);

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

  return (
    <>
      <h1 id="tools-title">Verzugszinsen</h1>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="default-interest-calculation">
          <div className="tools-calculation-header">
            <h2 id="default-interest-calculation">Verzugszinsen berechnen</h2>
          </div>

          <div className="tools-calculator-layout">
            <section className="tools-calculator-panel" aria-label="Eingaben">
              <h2>Eingaben</h2>
              <div className="tools-form-grid tools-form-grid-default-interest">
                <label className="tools-field-default-amount">
                  <span>Offener Betrag</span>
                  <input
                    inputMode="decimal"
                    min="0"
                    type="number"
                    value={calculation.amount}
                    onChange={handlePositiveNumberChange('amount')}
                  />
                </label>

                <label className="tools-field-default-rate-option">
                  <span>Zinssatz</span>
                  <select
                    value={calculation.rateOption}
                    onChange={(event) => updateCalculation('rateOption', event.target.value)}
                  >
                    {defaultInterestRateOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                {calculation.rateOption === 'custom' && (
                  <label className="tools-field-default-custom-rate">
                    <span>Zinssatz p.a. in %</span>
                    <input
                      inputMode="decimal"
                      min="0"
                      type="number"
                      value={calculation.customRate}
                      onChange={handlePositiveNumberChange('customRate')}
                    />
                  </label>
                )}

                <label className="tools-field-default-start-date">
                  <span>Verzugsbeginn</span>
                  <input
                    type="date"
                    value={calculation.startDate}
                    onChange={(event) => updateCalculation('startDate', event.target.value)}
                  />
                </label>

                <label className="tools-field-default-end-date">
                  <span>Zahlungs-/Berechnungsdatum</span>
                  <input
                    type="date"
                    value={calculation.endDate}
                    onChange={(event) => updateCalculation('endDate', event.target.value)}
                  />
                </label>
              </div>
            </section>

            <section className="tools-result-panel" aria-label="Ergebnis">
              <h2>Ergebnis</h2>
              {result.status === 'success' ? (
                <>
                  <div className="tools-result-highlight">
                    <span>Verzugszinsen</span>
                    <strong>{formatCurrency(result.interestAmount)}</strong>
                  </div>

                  <dl>
                    <div>
                      <dt>Verzugstage</dt>
                      <dd>{result.daysInDefault} Tage</dd>
                    </div>
                    <div>
                      <dt>Zinssatz p.a.</dt>
                      <dd>{formatPercent(result.interestRate)}</dd>
                    </div>
                    <div>
                      <dt>Gesamtbetrag</dt>
                      <dd>{formatCurrency(result.totalAmount)}</dd>
                    </div>
                    {calculation.rateOption !== 'custom' && (
                      <div>
                        <dt>Basiszinssatz</dt>
                        <dd>{formatPercent(baseInterestRate)}</dd>
                      </div>
                    )}
                  </dl>
                </>
              ) : (
                <p className="tools-result-empty">{result.message}</p>
              )}
            </section>
          </div>

          <p className="tools-external-note">
            Den aktuellen Basiszinssatz veröffentlicht die{' '}
            <a
              href="https://www.bundesbank.de/de/bundesbank/organisation/agb-und-regelungen/basiszinssatz-607820"
              target="_blank"
              rel="noreferrer"
            >
              Deutsche Bundesbank
            </a>
            . Bitte prüfe den Wert dort, da der hier hinterlegte Zinssatz nicht immer dem aktuellen Stand
            entsprechen muss.
          </p>
        </section>
      </div>
    </>
  );
}
