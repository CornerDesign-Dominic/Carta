import { useMemo, useState } from 'react';
import { filterPatchnotes, patchnotes } from '../data/patchnotes.js';

function formatDate(value) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`));
}

export default function PatchnotesView() {
  const [query, setQuery] = useState('');
  const visiblePatchnotes = useMemo(() => filterPatchnotes(patchnotes, query), [query]);

  return (
    <main className="paper-page patchnotes-page">
      <header className="patchnotes-header">
        <div>
          <p className="eyebrow">ENTWICKLUNG</p>
          <h1>Patchnotes</h1>
          <p>Interne Übersicht der zuletzt umgesetzten Änderungen.</p>
        </div>
        <label className="patchnotes-search">
          <span>Patchnotes durchsuchen</span>
          <input
            type="search"
            value={query}
            placeholder="Nach Änderung suchen"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </header>

      <section className="patchnotes-list" aria-label="Patchnotes-Einträge">
        {visiblePatchnotes.map((entry) => (
          <article className="patchnote-card" key={`${entry.date}-${entry.title}`}>
            <time dateTime={entry.date}>{formatDate(entry.date)}</time>
            <h2>{entry.title}</h2>
            <ul>
              {entry.changes.map((change) => <li key={change}>{change}</li>)}
            </ul>
          </article>
        ))}
        {visiblePatchnotes.length === 0 && (
          <p className="patchnotes-empty">Keine passenden Patchnotes gefunden.</p>
        )}
      </section>
    </main>
  );
}
