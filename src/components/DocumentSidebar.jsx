import { documentSections } from '../data/documents.js';

export default function DocumentSidebar({ activeId, activeParentId, onSelect }) {
  return (
    <aside className="document-sidebar" aria-label="Dokumentnavigation">
      <button
        className={activeId === 'overview' ? 'sidebar-title is-active' : 'sidebar-title'}
        type="button"
        onClick={() => onSelect('overview')}
      >
        Dokumente
      </button>
      <nav className="sidebar-nav">
        {documentSections.map((item) => {
          const isActive = activeId === item.id;
          const isExpanded = activeParentId === item.id;

          return (
            <div className="sidebar-group" key={item.id}>
              <button
                className={isActive ? 'is-active' : undefined}
                type="button"
                onClick={() => onSelect(item.id)}
              >
                {item.label}
              </button>

              {isExpanded && item.children?.length > 0 && (
                <div className="sidebar-subnav">
                  {item.children.map((child) => (
                    <button
                      className={activeId === child.id ? 'is-active' : undefined}
                      type="button"
                      onClick={() => onSelect(child.id)}
                      key={child.id}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
