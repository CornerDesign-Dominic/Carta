import { useMemo } from 'react';
import {
  calculateInterestResult,
  calculationModes,
  formatCalculatedValue,
  formatCurrency,
  formatDuration,
  interestExampleValues,
} from './interestCalculatorUtils.js';

export default function InterestCalculationCard({
  calculation,
  calculationMode,
  index,
  canRemove,
  onChange,
  onRemove,
}) {
  const result = useMemo(
    () => calculateInterestResult(calculation, calculationMode),
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

  function handleIntegerChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || /^\d+$/.test(nextValue)) {
        setValue(nextValue);
      }
    };
  }

  function getResultLabel() {
    return calculationModes.find((mode) => mode.value === calculationMode)?.label ?? 'Ergebnis';
  }

  return (
    <section className="tools-calculation-section" aria-labelledby={`interest-calculation-${calculation.id}`}>
      <div className="tools-calculation-header">
        <h2 id={`interest-calculation-${calculation.id}`}>Berechnung {index + 1}</h2>
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
          <div className={`tools-form-grid tools-form-grid-${calculationMode}`}>
            {calculationMode !== 'initialCapital' && (
              <label className="tools-field-initial-capital">
                <span>Anfangskapital</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder={interestExampleValues.initialCapital}
                  value={calculation.initialCapital}
                  onChange={handleNumberChange((value) => onChange('initialCapital', value))}
                />
              </label>
            )}

            {calculationMode !== 'interestRate' && (
              <label className="tools-field-interest-rate">
                <span>Zinssatz pro Jahr in %</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder={interestExampleValues.interestRate}
                  value={calculation.interestRate}
                  onChange={handleNumberChange((value) => onChange('interestRate', value))}
                />
              </label>
            )}

            {calculationMode !== 'duration' && (
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
                      placeholder={interestExampleValues.durationYears}
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
                      placeholder={interestExampleValues.durationMonths}
                      value={calculation.durationMonths}
                      onChange={handleIntegerChange((value) => onChange('durationMonths', value))}
                    />
                  </label>
                </div>
              </div>
            )}

            {calculationMode !== 'finalCapital' && (
              <label className="tools-field-final-capital">
                <span>Endkapital</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder={interestExampleValues.finalCapital}
                  value={calculation.finalCapital}
                  onChange={handleNumberChange((value) => onChange('finalCapital', value))}
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
                <span>{getResultLabel()}</span>
                <strong>{formatCalculatedValue(calculationMode, result)}</strong>
              </div>

              <dl>
                {calculationMode !== 'duration' && (
                  <div>
                    <dt>Laufzeit</dt>
                    <dd>{formatDuration(result.durationInYears)}</dd>
                  </div>
                )}
                <div>
                  <dt>Berechnete Zinsen</dt>
                  <dd>{formatCurrency(result.interest)}</dd>
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
