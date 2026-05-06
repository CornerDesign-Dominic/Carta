import { documentSections } from '../data/documents.js';

export default function DocumentSidebar({ activeId, onSelect }) {
  return (
    <aside className="document-sidebar" aria-label="Dokumentnavigation">
      <p className="sidebar-title">Dokumente</p>
      <nav className="sidebar-nav">
        {documentSections.map((item) => (
          <button
            className={activeId === item.id ? 'is-active' : undefined}
            type="button"
            onClick={() => onSelect(item.id)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
