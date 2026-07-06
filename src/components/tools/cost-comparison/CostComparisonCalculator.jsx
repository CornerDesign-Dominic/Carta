import { useMemo, useState } from 'react';
import {
  calculateCostComparison,
  costComparisonModes,
  createCostComparisonVariant,
  createCostComparisonVariants,
  formatCurrency,
  formatMonths,
  maxCostComparisonVariants,
  minCostComparisonVariants,
} from './costComparisonUtils.js';

export default function CostComparisonCalculator() {
  const [comparisonMode, setComparisonMode] = useState('cost');
  const [nextVariantId, setNextVariantId] = useState(3);
  const [variants, setVariants] = useState(() => createCostComparisonVariants('cost'));
  const results = useMemo(
    () => calculateCostComparison(variants, comparisonMode),
    [comparisonMode, variants],
  );
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
      createCostComparisonVariant(nextVariantId, currentVariants.length, comparisonMode),
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

  function handleModeChange(nextMode) {
    if (nextMode === comparisonMode) {
      return;
    }

    setComparisonMode(nextMode);
    setVariants((currentVariants) => currentVariants.map((variant, index) => (
      createCostComparisonVariant(variant.id, index, nextMode)
    )));
  }

  return (
    <>
      <h1 id="tools-title">Kostenvergleich</h1>

      <div className="tools-mode-selector" aria-label="Vergleichsart auswählen">
        {costComparisonModes.map((mode) => (
          <button
            className={comparisonMode === mode.value ? 'is-active' : undefined}
            type="button"
            aria-pressed={comparisonMode === mode.value}
            onClick={() => handleModeChange(mode.value)}
            key={mode.value}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="cost-comparison-calculation">
          <div className="tools-calculation-header">
            <h2 id="cost-comparison-calculation">Varianten vergleichen</h2>
          </div>

          <div className="tools-cost-variant-list">
            {variants.map((variant, index) => (
              <CostVariantCard
                canRemove={variants.length > minCostComparisonVariants}
                comparisonMode={comparisonMode}
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

function CostVariantCard({ canRemove, comparisonMode, index, onChange, onRemove, result, variant }) {
  const isCostRevenueMode = comparisonMode === 'costRevenue';

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
      className={`tools-cost-variant${result?.isBest ? ' is-cheapest' : ''}`}
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

            {isCostRevenueMode && (
              <>
                <label className="tools-field-cost-payroll">
                  <span>Mtl. Lohnkosten</span>
                  <input
                    inputMode="decimal"
                    min="0"
                    type="number"
                    value={variant.payrollCost}
                    onChange={handlePositiveNumberChange('payrollCost')}
                  />
                </label>

                <label className="tools-field-cost-special">
                  <span>Einzelsonderkosten</span>
                  <input
                    inputMode="decimal"
                    min="0"
                    type="number"
                    value={variant.specialCost}
                    onChange={handlePositiveNumberChange('specialCost')}
                  />
                </label>

                <label className="tools-field-cost-quantity">
                  <span>Stückzahl</span>
                  <input
                    inputMode="numeric"
                    min="0"
                    type="number"
                    value={variant.quantity}
                    onChange={handleWholeNumberChange('quantity')}
                  />
                </label>

                <label className="tools-field-cost-revenue">
                  <span>Verkaufsertrag pro Stück</span>
                  <input
                    inputMode="decimal"
                    min="0"
                    type="number"
                    value={variant.revenuePerUnit}
                    onChange={handlePositiveNumberChange('revenuePerUnit')}
                  />
                </label>
              </>
            )}

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
            isCostRevenueMode ? (
              <CostRevenueResult result={result} />
            ) : (
              <CostResult result={result} />
            )
          ) : (
            <p className="tools-result-empty">{result.message}</p>
          )}
        </section>
      </div>
    </section>
  );
}

function CostResult({ result }) {
  return (
    <>
      <div className="tools-result-highlight">
        <span>{result.isBest ? 'Günstigste Variante' : 'Gesamtkosten'}</span>
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
  );
}

function CostRevenueResult({ result }) {
  return (
    <>
      <div className="tools-result-highlight">
        <span>{result.isBest ? 'Wirtschaftlichste Variante' : 'Gewinn/Verlust'}</span>
        <strong>{formatCurrency(result.profit)}</strong>
      </div>

      <dl>
        <div>
          <dt>Gesamtkosten</dt>
          <dd>{formatCurrency(result.totalCost)}</dd>
        </div>
        <div>
          <dt>Gesamtertrag</dt>
          <dd>{formatCurrency(result.totalRevenue)}</dd>
        </div>
        <div>
          <dt>Kosten pro Stück</dt>
          <dd>{formatCurrency(result.costPerUnit)}</dd>
        </div>
        <div>
          <dt>Ertrag pro Stück</dt>
          <dd>{formatCurrency(result.revenuePerUnit)}</dd>
        </div>
      </dl>
    </>
  );
}
