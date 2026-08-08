import { useEffect } from 'react';
import CompoundInterestCalculator from '../components/tools/compound-interest/CompoundInterestCalculator.jsx';
import BreakEvenCalculator from '../components/tools/break-even/BreakEvenCalculator.jsx';
import CostComparisonCalculator from '../components/tools/cost-comparison/CostComparisonCalculator.jsx';
import DefaultInterestCalculator from '../components/tools/default-interest/DefaultInterestCalculator.jsx';
import DueDateCalculator from '../components/tools/due-date/DueDateCalculator.jsx';
import HourlyWageCalculator from '../components/tools/hourly-wage/HourlyWageCalculator.jsx';
import InterestCalculator from '../components/tools/interest/InterestCalculator.jsx';
import VatCalculator from '../components/tools/vat/VatCalculator.jsx';
import WorkingTimeCalculator from '../components/tools/working-time/WorkingTimeCalculator.jsx';
import ToolsSidebar from '../components/tools/ToolsSidebar.jsx';
import { findToolItem } from '../data/tools.js';

function ToolOverview() {
  const usageSections = [
    {
      title: 'Für unterschiedliche Aufgaben',
      text:
        'Die Werkzeuge unterstützen dich bei verschiedenen Berechnungen, Vergleichen und kaufmännischen Fragestellungen. Eingaben und Ergebnisse sind jeweils auf den entsprechenden Anwendungsfall abgestimmt.',
    },
    {
      title: 'Ergebnisse dokumentieren',
      text:
        'Einige Werkzeuge übernehmen deine Berechnung zusätzlich in ein übersichtliches Dokument. Dieses kannst du direkt drucken oder als PDF speichern und so deine Ergebnisse dauerhaft festhalten.',
    },
    {
      title: 'Direkt im Browser',
      text:
        'Die Werkzeuge können direkt online und ohne zusätzliche Software genutzt werden. So lassen sich Berechnungen schnell durchführen und Ergebnisse unmittelbar weiterverwenden.',
    },
  ];

  return (
    <>
      <h1 id="tools-title">Nutze deine Werkzeuge</h1>
      <p className="intro tools-intro">
        Mit den Belege24 Werkzeugen kannst du Berechnungen, Vergleiche und typische
        kaufmännische Aufgaben direkt im Browser erledigen. Die einzelnen Werkzeuge sind
        auf ihren jeweiligen Anwendungsfall abgestimmt.
      </p>

      <section className="tools-usage-section" aria-label="Hinweise zur Nutzung der Werkzeuge">
        <div className="tools-usage-grid" aria-label="Hinweise zur Nutzung der Werkzeuge">
          {usageSections.map((section) => (
            <section className="tools-usage-row" key={section.title}>
              <div className="tools-usage-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="tools-overview-info" aria-labelledby="tools-overview-info-title">
        <h2 id="tools-overview-info-title">Online-Werkzeuge für kaufmännische Berechnungen</h2>
        <p>
          Belege24 bietet verschiedene Online-Werkzeuge für typische kaufmännische
          Berechnungen und Aufgaben. Dazu gehören unter anderem Rechner für Zinsen,
          Umsatzsteuer, Arbeitszeit, Fälligkeiten, Verzugszinsen, Stundenlohn sowie Kosten-
          und Wirtschaftlichkeitsvergleiche.
        </p>
        <p>
          Die Werkzeuge können direkt im Browser genutzt werden und helfen dabei,
          Berechnungen nachvollziehbar durchzuführen und Ergebnisse übersichtlich auszuwerten.
        </p>
        <p>
          Bei ausgewählten Werkzeugen lassen sich die Ergebnisse zusätzlich in einem Dokument
          darstellen, als PDF speichern oder direkt ausdrucken.
        </p>
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
      return <ToolOverview />;
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

    if (activeToolId === 'break-even-rechner') {
      return <BreakEvenCalculator />;
    }

    if (activeToolId === 'kostenvergleichsrechner') {
      return <CostComparisonCalculator />;
    }

    return <ToolOverview />;
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
