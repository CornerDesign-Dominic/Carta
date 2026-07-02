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

function InterestCalculator() {
  const [calculationMode, setCalculationMode] = useState('finalCapital');
  const [capital, setCapital] = useState('1000');
  const [interestRate, setInterestRate] = useState('5');
  const [duration, setDuration] = useState('12');
  const [durationUnit, setDurationUnit] = useState('months');

  const result = useMemo(() => {
    const parsedCapital = parsePositiveNumber(capital);
    const parsedInterestRate = parsePositiveNumber(interestRate);
    const parsedDuration = parsePositiveNumber(duration);

    if (parsedCapital === null || parsedInterestRate === null || parsedDuration === null) {
      return null;
    }

    const durationInYears = durationUnit === 'months' ? parsedDuration / 12 : parsedDuration;
    const interest = (parsedCapital * parsedInterestRate * durationInYears) / 100;

    return {
      capital: parsedCapital,
      interestRate: parsedInterestRate,
      durationInYears,
      interest,
      total: parsedCapital + interest,
    };
  }, [capital, interestRate, duration, durationUnit]);

  function handleNumberChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        setValue(nextValue);
      }
    };
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

      <div className="tools-calculator-layout">
        <section className="tools-calculator-panel" aria-label="Eingaben">
          <h2>Eingaben</h2>
          <div className="tools-form-grid">
            <label>
              <span>Kapital / Startbetrag</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                value={capital}
                onChange={handleNumberChange(setCapital)}
              />
            </label>

            <label>
              <span>Zinssatz pro Jahr in %</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                value={interestRate}
                onChange={handleNumberChange(setInterestRate)}
              />
            </label>

            <label>
              <span>Laufzeit</span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                value={duration}
                onChange={handleNumberChange(setDuration)}
              />
            </label>

            <label>
              <span>Laufzeit-Einheit</span>
              <select value={durationUnit} onChange={(event) => setDurationUnit(event.target.value)}>
                <option value="years">Jahre</option>
                <option value="months">Monate</option>
              </select>
            </label>
          </div>
        </section>

        <section className="tools-result-panel" aria-label="Ergebnis">
          <h2>Ergebnis</h2>
          {calculationMode !== 'finalCapital' ? (
            <p className="tools-result-empty">
              Diese Berechnungsart ist vorbereitet. Die Endkapital-Berechnung ist bereits aktiv nutzbar.
            </p>
          ) : result ? (
            <dl>
              <div>
                <dt>Eingegebenes Kapital</dt>
                <dd>{euroFormatter.format(result.capital)}</dd>
              </div>
              <div>
                <dt>Zinssatz</dt>
                <dd>{percentFormatter.format(result.interestRate)} % p.a.</dd>
              </div>
              <div>
                <dt>Laufzeit in Jahren</dt>
                <dd>{percentFormatter.format(result.durationInYears)}</dd>
              </div>
              <div>
                <dt>Berechnete Zinsen</dt>
                <dd>{euroFormatter.format(result.interest)}</dd>
              </div>
              <div className="tools-result-total">
                <dt>Endbetrag</dt>
                <dd>{euroFormatter.format(result.total)}</dd>
              </div>
            </dl>
          ) : (
            <p className="tools-result-empty">
              Gib gültige Werte ein, um Kapital, Zinsen und Endbetrag zu berechnen.
            </p>
          )}
        </section>
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
