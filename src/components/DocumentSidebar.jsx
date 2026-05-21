import { documentSections } from '../data/documents.js';

function isPlainLeftClick(event) {
  return (
    event.button === 0
    && !event.metaKey
    && !event.ctrlKey
    && !event.shiftKey
    && !event.altKey
    && !event.defaultPrevented
  );
}

export default function DocumentSidebar({ activeId, activeParentId, onSelect }) {
  function handleNavigationClick(event, targetId) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    onSelect(targetId);
  }

  return (
    <aside className="document-sidebar" aria-label="Dokumentnavigation">
      <a
        className={activeId === 'overview' ? 'sidebar-title is-active' : 'sidebar-title'}
        href="/dokumente"
        onClick={(event) => handleNavigationClick(event, 'overview')}
      >
        Dokumente
      </a>
      <nav className="sidebar-nav">
        {documentSections.map((item) => {
          const target = item.children?.[0] ?? item;
          const targetId = target.id;
          const targetPath = target.path ?? '/dokumente';
          const isActive = activeParentId === item.id || activeId === item.id;

          return (
            <div className="sidebar-group" key={item.id}>
              <a
                className={isActive ? 'is-active' : undefined}
                href={targetPath}
                onClick={(event) => handleNavigationClick(event, targetId)}
              >
                {item.label}
              </a>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
