import { useMemo, useState } from 'react';
import {
  calculateBreakEven,
  createBreakEvenCalculation,
  formatCapacityPeriod,
  formatCurrency,
  formatTimeToBreakEven,
  formatUnits,
  formatUtilization,
} from './breakEvenUtils.js';

const periodOptions = [
  { id: 'monthly', label: 'monatlich' },
  { id: 'yearly', label: 'jährlich' },
];

export default function BreakEvenCalculator() {
  const [calculation, setCalculation] = useState(() => createBreakEvenCalculation());
  const result = useMemo(() => calculateBreakEven(calculation), [calculation]);

  function updateCalculation(field, value) {
    setCalculation((currentCalculation) => ({
      ...currentCalculation,
      [field]: value,
    }));
  }

  function handleNumberChange(field, { optional = false } = {}) {
    return (event) => {
      const nextValue = event.target.value;

      if (
        nextValue === ''
        || /^-?\d*(?:[,.]\d*)?$/.test(nextValue)
        || (optional && nextValue.trim() === '')
      ) {
        updateCalculation(field, nextValue);
      }
    };
  }

  function PeriodSwitch({ ariaLabel, field, value }) {
    return (
      <div className="tools-period-switch" aria-label={ariaLabel}>
        {periodOptions.map((option) => (
          <button
            className={value === option.id ? 'is-active' : undefined}
            key={option.id}
            type="button"
            aria-pressed={value === option.id}
            onClick={() => updateCalculation(field, option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 id="tools-title">Break-even-Rechner</h1>
      <p className="intro tools-intro">
        Berechne, ab welcher Absatzmenge deine Erlöse die Kosten decken und wie lange du bei einer angegebenen Kapazität voraussichtlich bis dahin brauchst.
      </p>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="break-even-calculation">
          <div className="tools-calculation-header">
            <h2 id="break-even-calculation">Break-even berechnen</h2>
          </div>

          <div className="tools-calculator-layout">
            <section className="tools-calculator-panel" aria-label="Eingaben">
              <h2>Eingaben</h2>
              <div className="tools-form-grid tools-form-grid-break-even">
                <label className="tools-field-break-fixed">
                  <span>Fixkosten</span>
                  <input
                    inputMode="decimal"
                    type="text"
                    value={calculation.fixedCosts}
                    onChange={handleNumberChange('fixedCosts')}
                  />
                </label>

                <div className="tools-field-break-fixed-period tools-period-field">
                  <span>Zeitraum der Fixkosten</span>
                  <PeriodSwitch
                    ariaLabel="Zeitraum der Fixkosten auswählen"
                    field="fixedCostPeriod"
                    value={calculation.fixedCostPeriod}
                  />
                </div>

                <label className="tools-field-break-price">
                  <span>Verkaufspreis pro Einheit</span>
                  <input
                    inputMode="decimal"
                    type="text"
                    value={calculation.pricePerUnit}
                    onChange={handleNumberChange('pricePerUnit')}
                  />
                </label>

                <label className="tools-field-break-variable">
                  <span>Variable Kosten pro Einheit</span>
                  <input
                    inputMode="decimal"
                    type="text"
                    value={calculation.variableCostPerUnit}
                    onChange={handleNumberChange('variableCostPerUnit')}
                  />
                </label>
              </div>

              <div className="tools-optional-panel" aria-label="Optionale Angaben">
                <h3>Optionale Kapazität</h3>
                <div className="tools-form-grid tools-form-grid-break-even-optional">
                  <label className="tools-field-break-capacity">
                    <span>Maximale Kapazität in Einheiten</span>
                    <input
                      inputMode="decimal"
                      type="text"
                      placeholder="optional"
                      value={calculation.capacity}
                      onChange={handleNumberChange('capacity', { optional: true })}
                    />
                  </label>

                  <div className="tools-field-break-capacity-period tools-period-field">
                    <span>Zeitraum der Kapazität</span>
                    <PeriodSwitch
                      ariaLabel="Zeitraum der Kapazität auswählen"
                      field="capacityPeriod"
                      value={calculation.capacityPeriod}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="tools-result-panel" aria-label="Ergebnis">
              <h2>Ergebnis</h2>
              {result.status === 'success' ? (
                <>
                  <div className="tools-result-highlight">
                    <span>Benötigte Einheiten bis zum Break-even</span>
                    <strong>{formatUnits(result.breakEvenUnits)}</strong>
                  </div>

                  <dl>
                    <div>
                      <dt>Deckungsbeitrag pro Einheit</dt>
                      <dd>{formatCurrency(result.contributionMargin)}</dd>
                    </div>
                    <div>
                      <dt>Erforderlicher Umsatz am Break-even</dt>
                      <dd>{formatCurrency(result.breakEvenRevenue)}</dd>
                    </div>
                    <div>
                      <dt>Fixkostenbasis</dt>
                      <dd>{formatCurrency(result.fixedCostsPerYear)} pro Jahr</dd>
                    </div>
                  </dl>

                  {result.capacity ? (
                    <div className="tools-break-even-capacity-result">
                      <h3>Kapazitätsauswertung</h3>
                      <dl>
                        <div>
                          <dt>Zeit bis zum Break-even</dt>
                          <dd>{formatTimeToBreakEven(result)}</dd>
                        </div>
                        <div>
                          <dt>Kapazität</dt>
                          <dd>{formatUnits(result.capacity)} {formatCapacityPeriod(result.capacityPeriod)}</dd>
                        </div>
                        <div>
                          <dt>Auslastung bis zum Break-even</dt>
                          <dd>{formatUtilization(result.periodUtilization)}</dd>
                        </div>
                      </dl>
                      <p className="tools-result-note">{result.capacityPeriodWarning}</p>
                    </div>
                  ) : (
                    <p className="tools-result-note">Ohne Kapazitätsangabe wird nur die Break-even-Menge berechnet.</p>
                  )}
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
