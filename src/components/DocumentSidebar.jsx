import { documentSections } from '../data/documents.js';

export default function DocumentSidebar({ activeId, activeParentId, onSelect }) {
  return (
    <aside className="document-sidebar" aria-label="Dokumentnavigation">
      <div className="sidebar-title">Dokumente</div>
      <nav className="sidebar-nav">
        {documentSections.map((item) => {
          const targetId = item.children?.[0]?.id ?? item.id;
          const isActive = activeParentId === item.id || activeId === item.id;

          return (
            <div className="sidebar-group" key={item.id}>
              <button
                className={isActive ? 'is-active' : undefined}
                type="button"
                onClick={() => onSelect(targetId)}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
