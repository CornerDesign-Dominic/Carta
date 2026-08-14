import { findGlossaryEntry } from '../../data/knowledge/glossary.js';

const contentSections = [
  ['definition', 'Definition'],
  ['explanation', 'Erläuterung'],
  ['example', 'Beispiel'],
  ['important', 'Wichtig'],
];

export default function KnowledgeGlossaryPanel({ activeGlossaryId }) {
  const entry = activeGlossaryId ? findGlossaryEntry(activeGlossaryId) : null;

  return (
    <aside className="knowledge-glossary-panel" aria-live="polite" aria-label="Kurz erklärt">
      {entry ? (
        <>
          <header className="knowledge-glossary-panel-header">
            <p className="knowledge-glossary-panel-kicker">Kurz erklärt</p>
            <h2>{entry.term}</h2>
          </header>
          <div className="knowledge-glossary-panel-content">
            {contentSections.map(([field, label]) => (
              entry[field] ? (
                <section className="knowledge-glossary-section" key={field}>
                  <h3>{label}</h3>
                  <p>{entry[field]}</p>
                </section>
              ) : null
            ))}
          </div>
        </>
      ) : (
        <>
          <header className="knowledge-glossary-panel-header">
            <h2>Kurz erklärt</h2>
          </header>
          <p className="knowledge-glossary-placeholder">
            Wähle einen markierten Begriff im Artikel aus, um hier eine kurze Erklärung zu sehen.
          </p>
        </>
      )}
    </aside>
  );
}
