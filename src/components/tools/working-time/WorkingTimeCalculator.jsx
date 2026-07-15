import { useMemo, useState } from 'react';
import {
  calculateWorkingTime,
  createWorkingTimeCalculation,
  formatDecimalHours,
  formatDuration,
} from './workingTimeUtils.js';

export default function WorkingTimeCalculator() {
  const [calculation, setCalculation] = useState(() => createWorkingTimeCalculation());
  const result = useMemo(() => calculateWorkingTime(calculation), [calculation]);

  function updateCalculation(field, value) {
    setCalculation((currentCalculation) => ({
      ...currentCalculation,
      [field]: value,
    }));
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
      <h1 id="tools-title">Arbeitszeit</h1>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="working-time-calculation">
          <div className="tools-calculation-header">
            <h2 id="working-time-calculation">Arbeitszeit berechnen</h2>
          </div>

          <div className="tools-calculator-layout">
            <section className="tools-calculator-panel" aria-label="Eingaben">
              <h2>Eingaben</h2>
              <div className="tools-form-grid tools-form-grid-working-time">
                <label className="tools-field-working-start">
                  <span>Arbeitsbeginn</span>
                  <input
                    type="time"
                    value={calculation.startTime}
                    onChange={(event) => updateCalculation('startTime', event.target.value)}
                  />
                </label>

                <label className="tools-field-working-end">
                  <span>Arbeitsende</span>
                  <input
                    type="time"
                    value={calculation.endTime}
                    onChange={(event) => updateCalculation('endTime', event.target.value)}
                  />
                </label>

                <div className="tools-duration-field tools-field-working-break">
                  <span>Pausedauer</span>
                  <div className="tools-duration-inputs">
                    <label>
                      <span>Stunden</span>
                      <input
                        inputMode="numeric"
                        min="0"
                        type="number"
                        value={calculation.breakHours}
                        onChange={handleWholeNumberChange('breakHours')}
                      />
                    </label>
                    <label>
                      <span>Minuten</span>
                      <input
                        inputMode="numeric"
                        min="0"
                        type="number"
                        value={calculation.breakMinutes}
                        onChange={handleWholeNumberChange('breakMinutes')}
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
                    <span>Reine Arbeitszeit</span>
                    <strong>{formatDuration(result.workingMinutes)}</strong>
                  </div>

                  <dl>
                    <div>
                      <dt>Dezimal</dt>
                      <dd>{formatDecimalHours(result.decimalHours)}</dd>
                    </div>
                    <div>
                      <dt>Gesamtzeit vor Pause</dt>
                      <dd>{formatDuration(result.grossMinutes)}</dd>
                    </div>
                    <div>
                      <dt>Pause</dt>
                      <dd>{formatDuration(result.breakMinutes)}</dd>
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
