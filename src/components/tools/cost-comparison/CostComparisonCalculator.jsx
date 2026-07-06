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
          {isCostRevenueMode ? (
            <div className="tools-cost-group-list">
              <InputGroup title="Variante">
                <TextField
                  label="Bezeichnung"
                  value={variant.label}
                  onChange={(value) => onChange('label', value)}
                />
              </InputGroup>

              <InputGroup title="Maschine / Investition">
                <MoneyField
                  label="Anschaffungskosten"
                  value={variant.acquisitionCost}
                  onChange={handlePositiveNumberChange('acquisitionCost')}
                />
                <MoneyField
                  label="Restwert"
                  value={variant.residualValue}
                  onChange={handlePositiveNumberChange('residualValue')}
                />
                <DurationField
                  onMonthsChange={handleWholeNumberChange('termMonths')}
                  onYearsChange={handleWholeNumberChange('termYears')}
                  months={variant.termMonths}
                  years={variant.termYears}
                />
              </InputGroup>

              <InputGroup title="Laufende Fixkosten">
                <MoneyField
                  label="Laufende Kosten pro Monat"
                  value={variant.monthlyCost}
                  onChange={handlePositiveNumberChange('monthlyCost')}
                />
                <MoneyField
                  label="Mtl. Lohnkosten"
                  value={variant.payrollCost}
                  onChange={handlePositiveNumberChange('payrollCost')}
                />
              </InputGroup>

              <InputGroup title="Stück / Ertrag">
                <WholeNumberField
                  label="Stückzahl"
                  value={variant.quantity}
                  onChange={handleWholeNumberChange('quantity')}
                />
                <MoneyField
                  label="Einzelsonderkosten pro Stück"
                  value={variant.specialCost}
                  onChange={handlePositiveNumberChange('specialCost')}
                />
                <MoneyField
                  label="Verkaufsertrag pro Stück"
                  value={variant.revenuePerUnit}
                  onChange={handlePositiveNumberChange('revenuePerUnit')}
                />
              </InputGroup>
            </div>
          ) : (
            <div className="tools-form-grid tools-form-grid-cost-comparison">
              <TextField
                className="tools-field-cost-label"
                label="Bezeichnung"
                value={variant.label}
                onChange={(value) => onChange('label', value)}
              />
              <MoneyField
                className="tools-field-cost-acquisition"
                label="Anschaffungskosten"
                value={variant.acquisitionCost}
                onChange={handlePositiveNumberChange('acquisitionCost')}
              />
              <MoneyField
                className="tools-field-cost-monthly"
                label="Laufende Kosten pro Monat"
                value={variant.monthlyCost}
                onChange={handlePositiveNumberChange('monthlyCost')}
              />
              <DurationField
                className="tools-field-cost-duration"
                onMonthsChange={handleWholeNumberChange('termMonths')}
                onYearsChange={handleWholeNumberChange('termYears')}
                months={variant.termMonths}
                years={variant.termYears}
              />
              <MoneyField
                className="tools-field-cost-residual"
                label="Restwert"
                value={variant.residualValue}
                onChange={handlePositiveNumberChange('residualValue')}
              />
            </div>
          )}
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

function InputGroup({ children, title }) {
  return (
    <fieldset className="tools-input-group">
      <legend>{title}</legend>
      <div className="tools-form-grid tools-form-grid-cost-comparison">
        {children}
      </div>
    </fieldset>
  );
}

function TextField({ className = '', label, onChange, value }) {
  return (
    <label className={className}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function MoneyField({ className = '', label, onChange, value }) {
  return (
    <label className={className}>
      <span>{label}</span>
      <input
        inputMode="decimal"
        min="0"
        type="number"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function WholeNumberField({ className = '', label, onChange, value }) {
  return (
    <label className={className}>
      <span>{label}</span>
      <input
        inputMode="numeric"
        min="0"
        type="number"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function DurationField({ className = '', months, onMonthsChange, onYearsChange, years }) {
  return (
    <div className={`tools-duration-field${className ? ` ${className}` : ''}`}>
      <span>Nutzungsdauer</span>
      <div className="tools-duration-inputs">
        <label>
          <span>Jahre</span>
          <input
            inputMode="numeric"
            min="0"
            type="number"
            value={years}
            onChange={onYearsChange}
          />
        </label>
        <label>
          <span>Monate</span>
          <input
            inputMode="numeric"
            min="0"
            type="number"
            value={months}
            onChange={onMonthsChange}
          />
        </label>
      </div>
    </div>
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
