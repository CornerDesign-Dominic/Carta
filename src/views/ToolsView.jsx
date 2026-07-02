import { useEffect, useMemo, useState } from 'react';
import ToolsSidebar from '../components/tools/ToolsSidebar.jsx';
import { findToolItem, toolItems } from '../data/tools.js';

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
});

const calculationModes = [
  { value: 'initialCapital', label: 'Anfangskapital' },
  { value: 'interestRate', label: 'Zinssatz' },
  { value: 'duration', label: 'Laufzeit' },
  { value: 'finalCapital', label: 'Endkapital' },
];

const maxInterestCalculations = 10;

function createInterestCalculation(id) {
  return {
    id,
    initialCapital: '1000',
    finalCapital: '1050',
    interestRate: '5',
    durationYears: '1',
    durationMonths: '0',
  };
}

function parsePositiveNumber(value) {
  if (String(value).trim() === '') {
    return null;
  }

  const normalized = String(value).replace(',', '.');
  const parsed = Number.parseFloat(normalized);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }

  return parsed;
}

function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

function formatDuration(durationInYears) {
  if (!Number.isFinite(durationInYears) || durationInYears < 0) {
    return null;
  }

  const totalMonths = Math.round(durationInYears * 12);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'Jahr' : 'Jahre'}`);
  }

  if (months > 0 || parts.length === 0) {
    parts.push(`${months} ${months === 1 ? 'Monat' : 'Monate'}`);
  }

  return parts.join(' und ');
}

function calculateInterestResult(calculation, calculationMode) {
  const parsedInitialCapital = parsePositiveNumber(calculation.initialCapital);
  const parsedFinalCapital = parsePositiveNumber(calculation.finalCapital);
  const parsedInterestRate = parsePositiveNumber(calculation.interestRate);
  const parsedDurationYears = parsePositiveNumber(calculation.durationYears);
  const parsedDurationMonths = parsePositiveNumber(calculation.durationMonths);
  const durationInYears =
    parsedDurationYears !== null && parsedDurationMonths !== null
      ? parsedDurationYears + parsedDurationMonths / 12
      : null;

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  function success(values) {
    if (
      !Number.isFinite(values.initialCapital)
      || !Number.isFinite(values.finalCapital)
      || !Number.isFinite(values.interestRate)
      || !Number.isFinite(values.durationInYears)
      || !Number.isFinite(values.interest)
    ) {
      return invalid();
    }

    return { status: 'success', ...values };
  }

  if (calculationMode === 'finalCapital') {
    if (parsedInitialCapital === null || parsedInterestRate === null || durationInYears === null) {
      return invalid();
    }

    const interest = (parsedInitialCapital * parsedInterestRate * durationInYears) / 100;
    const computedFinalCapital = parsedInitialCapital + interest;

    return success({
      calculatedValue: computedFinalCapital,
      initialCapital: parsedInitialCapital,
      finalCapital: computedFinalCapital,
      interestRate: parsedInterestRate,
      durationInYears,
      interest,
    });
  }

  if (calculationMode === 'initialCapital') {
    if (parsedFinalCapital === null || parsedInterestRate === null || durationInYears === null) {
      return invalid();
    }

    const factor = 1 + (parsedInterestRate * durationInYears) / 100;
    if (factor <= 0) {
      return invalid();
    }

    const computedInitialCapital = parsedFinalCapital / factor;
    const interest = parsedFinalCapital - computedInitialCapital;

    return success({
      calculatedValue: computedInitialCapital,
      initialCapital: computedInitialCapital,
      finalCapital: parsedFinalCapital,
      interestRate: parsedInterestRate,
      durationInYears,
      interest,
    });
  }

  if (calculationMode === 'interestRate') {
    if (parsedInitialCapital === null || parsedFinalCapital === null || durationInYears === null) {
      return invalid();
    }

    if (parsedInitialCapital <= 0 || durationInYears <= 0) {
      return invalid();
    }

    if (parsedFinalCapital <= parsedInitialCapital) {
      return invalid('Für die Zinssatzberechnung muss das Endkapital größer als das Anfangskapital sein.');
    }

    const computedInterestRate = ((parsedFinalCapital / parsedInitialCapital - 1) / durationInYears) * 100;
    const interest = parsedFinalCapital - parsedInitialCapital;

    return success({
      calculatedValue: computedInterestRate,
      initialCapital: parsedInitialCapital,
      finalCapital: parsedFinalCapital,
      interestRate: computedInterestRate,
      durationInYears,
      interest,
    });
  }

  if (calculationMode === 'duration') {
    if (parsedInitialCapital === null || parsedFinalCapital === null || parsedInterestRate === null) {
      return invalid();
    }

    if (parsedInitialCapital <= 0 || parsedInterestRate <= 0) {
      return invalid();
    }

    if (parsedFinalCapital <= parsedInitialCapital) {
      return invalid('Für die Laufzeitberechnung muss das Endkapital größer als das Anfangskapital sein.');
    }

    const computedDuration = ((parsedFinalCapital / parsedInitialCapital - 1) / parsedInterestRate) * 100;
    const interest = parsedFinalCapital - parsedInitialCapital;

    return success({
      calculatedValue: computedDuration,
      initialCapital: parsedInitialCapital,
      finalCapital: parsedFinalCapital,
      interestRate: parsedInterestRate,
      durationInYears: computedDuration,
      interest,
    });
  }

  return invalid();
}

function ToolOverview({ onSelect }) {
  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Werkzeuge für schnelle Berechnungen</h1>
      <p className="intro document-intro">
        Hier findest du praktische Rechner und Hilfen für den geschäftlichen Alltag.
      </p>

      <section className="tools-overview-grid" aria-label="Verfügbare Werkzeuge">
        {toolItems.map((item) => (
          <button
            className="document-overview-card tools-overview-card"
            type="button"
            onClick={() => onSelect(item.id)}
            key={item.id}
          >
            <span>{item.title}</span>
            <p>{item.description}</p>
          </button>
        ))}
      </section>
    </>
  );
}

function InterestCalculationCard({ calculation, calculationMode, index, canRemove, onChange, onRemove }) {
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

  function getResultLabel() {
    return calculationModes.find((mode) => mode.value === calculationMode)?.label ?? 'Ergebnis';
  }

  function formatMainResult() {
    if (result.status !== 'success') {
      return null;
    }

    if (calculationMode === 'initialCapital') {
      return euroFormatter.format(result.calculatedValue);
    }

    if (calculationMode === 'interestRate') {
      return formatPercent(result.calculatedValue);
    }

    if (calculationMode === 'duration') {
      return formatDuration(result.calculatedValue);
    }

    return euroFormatter.format(result.calculatedValue);
  }

  return (
    <section className="tools-calculation-card" aria-labelledby={`interest-calculation-${calculation.id}`}>
      <div className="tools-calculation-card-header">
        <h2 id={`interest-calculation-${calculation.id}`}>Berechnung {index + 1}</h2>
        {canRemove && (
          <button className="tools-remove-calculation" type="button" onClick={onRemove}>
            Vergleich entfernen
          </button>
        )}
      </div>

      <div className="tools-calculator-layout">
        <section className="tools-calculator-panel" aria-label="Eingaben">
          <h2>Eingaben</h2>
          <div className="tools-form-grid">
            {calculationMode !== 'initialCapital' && (
              <label>
                <span>Anfangskapital</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  value={calculation.initialCapital}
                  onChange={handleNumberChange((value) => onChange('initialCapital', value))}
                />
              </label>
            )}

            {calculationMode !== 'interestRate' && (
              <label>
                <span>Zinssatz pro Jahr in %</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  value={calculation.interestRate}
                  onChange={handleNumberChange((value) => onChange('interestRate', value))}
                />
              </label>
            )}

            {calculationMode !== 'duration' && (
              <>
                <label>
                  <span>Laufzeit in Jahren</span>
                  <input
                    min="0"
                    inputMode="decimal"
                    type="number"
                    value={calculation.durationYears}
                    onChange={handleNumberChange((value) => onChange('durationYears', value))}
                  />
                </label>

                <label>
                  <span>Laufzeit in Monaten</span>
                  <input
                    min="0"
                    inputMode="decimal"
                    type="number"
                    value={calculation.durationMonths}
                    onChange={handleNumberChange((value) => onChange('durationMonths', value))}
                  />
                </label>
              </>
            )}

            {calculationMode !== 'finalCapital' && (
              <label>
                <span>Endkapital</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
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
                <strong>{formatMainResult()}</strong>
              </div>

              <dl>
                <div>
                  <dt>Anfangskapital</dt>
                  <dd>{euroFormatter.format(result.initialCapital)}</dd>
                </div>
                <div>
                  <dt>Zinssatz</dt>
                  <dd>{formatPercent(result.interestRate)} p.a.</dd>
                </div>
                <div>
                  <dt>Laufzeit</dt>
                  <dd>{formatDuration(result.durationInYears)}</dd>
                </div>
                <div>
                  <dt>Berechnete Zinsen</dt>
                  <dd>{euroFormatter.format(result.interest)}</dd>
                </div>
                <div className="tools-result-total">
                  <dt>Endkapital</dt>
                  <dd>{euroFormatter.format(result.finalCapital)}</dd>
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

function InterestCalculator() {
  const [calculationMode, setCalculationMode] = useState('finalCapital');
  const [nextCalculationId, setNextCalculationId] = useState(2);
  const [calculations, setCalculations] = useState([createInterestCalculation(1)]);
  const canAddCalculation = calculations.length < maxInterestCalculations;

  function updateCalculation(calculationId, field, value) {
    setCalculations((currentCalculations) => currentCalculations.map((calculation) => (
      calculation.id === calculationId
        ? { ...calculation, [field]: value }
        : calculation
    )));
  }

  function addCalculation() {
    if (!canAddCalculation) {
      return;
    }

    setCalculations((currentCalculations) => [
      ...currentCalculations,
      createInterestCalculation(nextCalculationId),
    ]);
    setNextCalculationId((currentId) => currentId + 1);
  }

  function removeCalculation(calculationId) {
    setCalculations((currentCalculations) => currentCalculations.filter(
      (calculation) => calculation.id !== calculationId,
    ));
  }

  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Zinsrechner</h1>

      <div className="tools-mode-selector" aria-label="Berechnungsart auswählen">
        {calculationModes.map((mode) => (
          <button
            className={calculationMode === mode.value ? 'is-active' : undefined}
            type="button"
            aria-pressed={calculationMode === mode.value}
            onClick={() => setCalculationMode(mode.value)}
            key={mode.value}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="tools-calculation-list">
        {calculations.map((calculation, index) => (
          <InterestCalculationCard
            calculation={calculation}
            calculationMode={calculationMode}
            index={index}
            canRemove={index > 0}
            onChange={(field, value) => updateCalculation(calculation.id, field, value)}
            onRemove={() => removeCalculation(calculation.id)}
            key={calculation.id}
          />
        ))}
      </div>

      <div className="tools-add-calculation">
        {canAddCalculation ? (
          <button type="button" onClick={addCalculation}>
            Weitere Vergleichsberechnung hinzufügen
          </button>
        ) : (
          <p>Maximal 10 Vergleichsberechnungen möglich.</p>
        )}
      </div>
    </>
  );
}

export default function ToolsView({ activeToolId, onSelectTool }) {
  const activeTool = findToolItem(activeToolId);

  useEffect(() => {
    if (activeToolId && !activeTool) {
      onSelectTool(null);
    }
  }, [activeTool, activeToolId, onSelectTool]);

  function handleSelectTool(toolId) {
    onSelectTool(toolId);
  }

  function handleShowOverview() {
    onSelectTool(null);
  }

  function renderTool() {
    if (!activeToolId) {
      return <ToolOverview onSelect={handleSelectTool} />;
    }

    if (activeToolId === 'zinsrechner') {
      return <InterestCalculator />;
    }

    return <ToolOverview onSelect={handleSelectTool} />;
  }

  return (
    <main className="documents-layout tools-layout">
      <ToolsSidebar
        activeToolId={activeTool?.id ?? null}
        onSelect={handleSelectTool}
        onShowOverview={handleShowOverview}
      />

      <section className="paper-page document-paper tools-paper" aria-labelledby="tools-title">
        {renderTool()}
      </section>
    </main>
  );
}
