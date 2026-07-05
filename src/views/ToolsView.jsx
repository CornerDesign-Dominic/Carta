import { useEffect } from 'react';
import InterestCalculator from '../components/tools/interest/InterestCalculator.jsx';
import ToolsSidebar from '../components/tools/ToolsSidebar.jsx';
import { findToolItem, toolItems } from '../data/tools.js';

function ToolOverview({ onSelect }) {
  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Werkzeuge für schnelle Berechnungen</h1>
      <p className="intro tools-intro">
        Hier findest du praktische Rechner und Hilfen für den geschäftlichen Alltag.
      </p>

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
