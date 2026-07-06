import { useMemo, useState } from 'react';
import {
  calculateCostComparison,
  createCostComparisonVariant,
  createCostComparisonVariants,
  formatCurrency,
  formatMonths,
  maxCostComparisonVariants,
  minCostComparisonVariants,
} from './costComparisonUtils.js';

export default function CostComparisonCalculator() {
  const [nextVariantId, setNextVariantId] = useState(3);
  const [variants, setVariants] = useState(() => createCostComparisonVariants());
  const results = useMemo(() => calculateCostComparison(variants), [variants]);
  const canAddVariant = variants.length < maxCostComparisonVariants;

  function updateVariant(variantId, field, value) {
    setVariants((currentVariants) => currentVariants.map((variant) => (
      variant.id === variantId ? { ...variant, [field]: value } : variant
    )));
  }

  function addVariant() {
    if (!canAddVariant) {
      return;
    }

    setVariants((currentVariants) => [
      ...currentVariants,
      createCostComparisonVariant(nextVariantId, currentVariants.length),
    ]);
    setNextVariantId((currentId) => currentId + 1);
  }

  function removeVariant(variantId) {
    setVariants((currentVariants) => {
      if (currentVariants.length <= minCostComparisonVariants) {
        return currentVariants;
      }

      return currentVariants.filter((variant) => variant.id !== variantId);
    });
  }

  return (
    <>
      <h1 id="tools-title">Kostenvergleich</h1>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="cost-comparison-calculation">
          <div className="tools-calculation-header">
            <h2 id="cost-comparison-calculation">Varianten vergleichen</h2>
          </div>

          <div className="tools-cost-variant-list">
            {variants.map((variant, index) => (
              <CostVariantCard
                canRemove={variants.length > minCostComparisonVariants}
                index={index}
                key={variant.id}
                onChange={(field, value) => updateVariant(variant.id, field, value)}
                onRemove={() => removeVariant(variant.id)}
                result={results[index]}
                variant={variant}
              />
            ))}
          </div>

          <div className="tools-add-calculation">
            {canAddVariant ? (
              <button type="button" onClick={addVariant}>
                Variante hinzufügen
              </button>
            ) : (
              <p>Maximal 5 Varianten möglich.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

function CostVariantCard({ canRemove, index, onChange, onRemove, result, variant }) {
  function handlePositiveNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        onChange(field, nextValue);
      }
    };
  }

  function handleWholeNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (/^\d*$/.test(nextValue)) {
        onChange(field, nextValue);
      }
    };
  }

  return (
    <section
      className={`tools-cost-variant${result?.isCheapest ? ' is-cheapest' : ''}`}
      aria-labelledby={`cost-variant-${variant.id}`}
    >
      <div className="tools-calculation-header">
        <h3 id={`cost-variant-${variant.id}`}>Variante {index + 1}</h3>
        {canRemove && (
          <div className="tools-calculation-actions">
            <button className="tools-remove-calculation" type="button" onClick={onRemove}>
              Variante entfernen
            </button>
          </div>
        )}
      </div>

      <div className="tools-calculator-layout tools-cost-variant-layout">
        <section className="tools-calculator-panel" aria-label={`Eingaben Variante ${index + 1}`}>
          <h2>Eingaben</h2>
          <div className="tools-form-grid tools-form-grid-cost-comparison">
            <label className="tools-field-cost-label">
              <span>Bezeichnung</span>
              <input
                type="text"
                value={variant.label}
                onChange={(event) => onChange('label', event.target.value)}
              />
            </label>

            <label className="tools-field-cost-acquisition">
              <span>Anschaffungskosten</span>
              <input
                inputMode="decimal"
                min="0"
                type="number"
                value={variant.acquisitionCost}
                onChange={handlePositiveNumberChange('acquisitionCost')}
              />
            </label>

            <label className="tools-field-cost-monthly">
              <span>Laufende Kosten pro Monat</span>
              <input
                inputMode="decimal"
                min="0"
                type="number"
                value={variant.monthlyCost}
                onChange={handlePositiveNumberChange('monthlyCost')}
              />
            </label>

            <div className="tools-duration-field tools-field-cost-duration">
              <span>Nutzungsdauer</span>
              <div className="tools-duration-inputs">
                <label>
                  <span>Jahre</span>
                  <input
                    inputMode="numeric"
                    min="0"
                    type="number"
                    value={variant.termYears}
                    onChange={handleWholeNumberChange('termYears')}
                  />
                </label>
                <label>
                  <span>Monate</span>
                  <input
                    inputMode="numeric"
                    min="0"
                    type="number"
                    value={variant.termMonths}
                    onChange={handleWholeNumberChange('termMonths')}
                  />
                </label>
              </div>
            </div>

            <label className="tools-field-cost-residual">
              <span>Restwert</span>
              <input
                inputMode="decimal"
                min="0"
                type="number"
                value={variant.residualValue}
                onChange={handlePositiveNumberChange('residualValue')}
              />
            </label>
          </div>
        </section>

        <section className="tools-result-panel" aria-label={`Ergebnis Variante ${index + 1}`}>
          <h2>Ergebnis</h2>
          {result.status === 'success' ? (
            <>
              <div className="tools-result-highlight">
                <span>{result.isCheapest ? 'Günstigste Variante' : 'Gesamtkosten'}</span>
                <strong>{formatCurrency(result.totalCost)}</strong>
              </div>

              <dl>
                <div>
                  <dt>Kosten pro Monat</dt>
                  <dd>{formatCurrency(result.monthlyAverageCost)}</dd>
                </div>
                <div>
                  <dt>Kosten pro Jahr</dt>
                  <dd>{formatCurrency(result.yearlyAverageCost)}</dd>
                </div>
                <div>
                  <dt>Laufzeit</dt>
                  <dd>{formatMonths(result.totalMonths)}</dd>
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
