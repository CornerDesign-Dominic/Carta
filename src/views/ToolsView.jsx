import { useEffect } from 'react';
import CompoundInterestCalculator from '../components/tools/compound-interest/CompoundInterestCalculator.jsx';
import CostComparisonCalculator from '../components/tools/cost-comparison/CostComparisonCalculator.jsx';
import DefaultInterestCalculator from '../components/tools/default-interest/DefaultInterestCalculator.jsx';
import DueDateCalculator from '../components/tools/due-date/DueDateCalculator.jsx';
import HourlyWageCalculator from '../components/tools/hourly-wage/HourlyWageCalculator.jsx';
import InterestCalculator from '../components/tools/interest/InterestCalculator.jsx';
import VatCalculator from '../components/tools/vat/VatCalculator.jsx';
import WorkingTimeCalculator from '../components/tools/working-time/WorkingTimeCalculator.jsx';
import ToolsSidebar from '../components/tools/ToolsSidebar.jsx';
import { findToolItem, toolItems } from '../data/tools.js';

function ToolUsageMiniVisual({ type }) {
  return (
    <div className={`tools-usage-mini tools-usage-mini-${type}`} aria-hidden="true">
      <div className="tools-usage-mini-header">
        <strong>Belege24</strong>
        <span>Werkzeug</span>
      </div>
      <div className="tools-usage-mini-title">
        {type === 'document' ? 'Berechnung' : 'Rechner'}
      </div>

      {type === 'input' && (
        <div className="tools-usage-mini-fields">
          <span className="tools-usage-mini-line is-highlighted">Betrag eingeben</span>
          <span className="tools-usage-mini-line is-highlighted">Zeitraum wählen</span>
          <span className="tools-usage-mini-line">Zinssatz</span>
          <span className="tools-usage-mini-line">Berechnung starten</span>
        </div>
      )}

      {type === 'result' && (
        <div className="tools-usage-mini-fields">
          <span className="tools-usage-mini-line">Eingaben vollständig</span>
          <span className="tools-usage-mini-line is-result">Ergebnis: 1.250,00 €</span>
          <span className="tools-usage-mini-line">Nebenwerte prüfen</span>
        </div>
      )}

      {type === 'compare' && (
        <div className="tools-usage-mini-fields">
          <span className="tools-usage-mini-line is-code">Variante 1</span>
          <span className="tools-usage-mini-line is-code">Variante 2</span>
          <span className="tools-usage-mini-line is-marked">Differenz erkennen</span>
          <span className="tools-usage-mini-line">Entscheidung vorbereiten</span>
        </div>
      )}

      {type === 'document' && (
        <div className="tools-usage-mini-fields">
          <span className="tools-usage-mini-line">Übersicht im Dokument</span>
          <span className="tools-usage-mini-line">Werte sauber festhalten</span>
          <div className="tools-usage-mini-actions">
            <span>PDF</span>
            <span>Drucken</span>
          </div>
        </div>
      )}

      {type === 'online' && (
        <div className="tools-usage-mini-fields">
          <span className="tools-usage-mini-line is-highlighted">ohne Anmeldung</span>
          <span className="tools-usage-mini-line">direkt im Browser</span>
          <span className="tools-usage-mini-line">kostenlos nutzen</span>
          <span className="tools-usage-mini-line is-result">weiterarbeiten</span>
        </div>
      )}
    </div>
  );
}

function ToolOverview({ onSelect }) {
  const usageSections = [
    {
      title: 'Angaben eintragen',
      text:
        'Fülle die Felder mit deinen Angaben aus. Der Rechner zeigt dir, welche Werte benötigt werden und führt dich Schritt für Schritt zur Berechnung.',
      visual: 'input',
    },
    {
      title: 'Ergebnis prüfen',
      text:
        'Sobald alle Pflichtfelder ausgefüllt sind, wird das Ergebnis übersichtlich angezeigt. So erkennst du schnell, welche Werte für dich wichtig sind.',
      visual: 'result',
    },
    {
      title: 'Vergleiche erstellen',
      text:
        'Bei vielen Rechnern kannst du mehrere Varianten anlegen und direkt miteinander vergleichen. Das hilft dir, Unterschiede schneller zu erkennen und Entscheidungen besser vorzubereiten.',
      visual: 'compare',
    },
    {
      title: 'Berechnungen dokumentieren',
      text:
        'Einige Werkzeuge übernehmen deine Berechnung zusätzlich in ein Dokument. Dieses kannst du drucken oder als PDF speichern, damit wichtige Ergebnisse nicht verloren gehen.',
      visual: 'document',
    },
    {
      title: 'Direkt weiterarbeiten',
      text:
        'Du kannst die Werkzeuge kostenlos, ohne Anmeldung und direkt online nutzen. So bleiben einfache Berechnungen schnell erledigt, ohne zusätzliche Software.',
      visual: 'online',
    },
  ];

  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Werkzeuge für schnelle Berechnungen</h1>
      <p className="intro tools-intro">
        Hier findest du praktische Rechner und Hilfen für den geschäftlichen Alltag.
      </p>

      <section className="tools-usage-section" aria-label="Anleitung zur Nutzung der Werkzeuge">
        <h2>Nutze deine Werkzeuge</h2>
        <p className="tools-usage-intro">
          Mit unseren Online-Rechnern kannst du wichtige Werte direkt im
          Browser berechnen. Trage deine Angaben ein, prüfe das Ergebnis und
          nutze die Berechnung für deinen geschäftlichen Alltag.
        </p>
        <div className="tools-usage-grid" aria-label="Hinweise zur Nutzung der Werkzeuge">
          {usageSections.map((section) => (
            <section className="tools-usage-row" key={section.title}>
              <div className="tools-usage-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <ToolUsageMiniVisual type={section.visual} />
            </section>
          ))}
        </div>
      </section>

      <section className="tools-overview-grid" aria-label="Verfügbare Werkzeuge">
        {toolItems.map((item) => (
          <button
            className="tools-overview-card"
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

    if (activeToolId === 'zinseszins') {
      return <CompoundInterestCalculator />;
    }

    if (activeToolId === 'umsatzsteuerrechner') {
      return <VatCalculator />;
    }

    if (activeToolId === 'arbeitszeitrechner') {
      return <WorkingTimeCalculator />;
    }

    if (activeToolId === 'faelligkeitsrechner') {
      return <DueDateCalculator />;
    }

    if (activeToolId === 'verzugszinsenrechner') {
      return <DefaultInterestCalculator />;
    }

    if (activeToolId === 'stundenlohnrechner') {
      return <HourlyWageCalculator />;
    }

    if (activeToolId === 'kostenvergleichsrechner') {
      return <CostComparisonCalculator />;
    }

    return <ToolOverview onSelect={handleSelectTool} />;
  }

  return (
    <main className="tools-layout">
      <ToolsSidebar
        activeToolId={activeTool?.id ?? null}
        onSelect={handleSelectTool}
        onShowOverview={handleShowOverview}
      />

      <section className="tools-paper" aria-labelledby="tools-title">
        {renderTool()}
      </section>
    </main>
  );
}
