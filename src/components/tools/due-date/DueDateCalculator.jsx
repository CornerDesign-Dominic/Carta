import { useMemo, useState } from 'react';
import {
  calculateDueDate,
  createDueDateCalculation,
  formatDate,
} from './dueDateUtils.js';

export default function DueDateCalculator() {
  const [calculation, setCalculation] = useState(() => createDueDateCalculation());
  const result = useMemo(() => calculateDueDate(calculation), [calculation]);

  function updateCalculation(field, value) {
    setCalculation((currentCalculation) => ({
      ...currentCalculation,
      [field]: value,
    }));
  }

  function handlePaymentTermChange(event) {
    const nextValue = event.target.value;

    if (/^\d*$/.test(nextValue)) {
      updateCalculation('paymentTermDays', nextValue);
    }
  }

  return (
    <>
      <h1 id="tools-title">Fälligkeit</h1>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="due-date-calculation">
          <div className="tools-calculation-header">
            <h2 id="due-date-calculation">Fälligkeit berechnen</h2>
          </div>

          <div className="tools-calculator-layout">
            <section className="tools-calculator-panel" aria-label="Eingaben">
              <h2>Eingaben</h2>
              <div className="tools-form-grid tools-form-grid-due-date">
                <label className="tools-field-due-invoice-date">
                  <span>Rechnungsdatum</span>
                  <input
                    type="date"
                    value={calculation.invoiceDate}
                    onChange={(event) => updateCalculation('invoiceDate', event.target.value)}
                  />
                </label>

                <label className="tools-field-due-payment-term">
                  <span>Zahlungsziel in Tagen</span>
                  <input
                    inputMode="numeric"
                    min="0"
                    type="number"
                    value={calculation.paymentTermDays}
                    onChange={handlePaymentTermChange}
                  />
                </label>

                <label className="tools-checkbox-field tools-field-due-weekend">
                  <input
                    type="checkbox"
                    checked={calculation.shiftWeekends}
                    onChange={(event) => updateCalculation('shiftWeekends', event.target.checked)}
                  />
                  <span>Wochenenden berücksichtigen</span>
                </label>
              </div>
            </section>

            <section className="tools-result-panel" aria-label="Ergebnis">
              <h2>Ergebnis</h2>
              {result.status === 'success' ? (
                <>
                  <div className="tools-result-highlight">
                    <span>Fälligkeitsdatum</span>
                    <strong>{formatDate(result.dueDate)}</strong>
                  </div>

                  <dl>
                    <div>
                      <dt>Wochentag</dt>
                      <dd>{result.weekday}</dd>
                    </div>
                    <div>
                      <dt>Zahlungsziel</dt>
                      <dd>{result.paymentTermDays} Tage</dd>
                    </div>
                    {result.shifted && (
                      <div>
                        <dt>Hinweis</dt>
                        <dd>Vom Wochenende auf Montag verschoben</dd>
                      </div>
                    )}
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
