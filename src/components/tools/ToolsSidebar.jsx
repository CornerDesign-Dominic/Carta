import { toolItems } from '../../data/tools.js';

export default function ToolsSidebar({ activeToolId, onSelect, onShowOverview }) {
  function handleInternalLinkClick(event, callback) {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.altKey
      || event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    callback();
  }

  return (
    <aside className="tools-sidebar" aria-label="Werkzeugnavigation">
      <a
        className={!activeToolId ? 'tools-sidebar-title is-active' : 'tools-sidebar-title'}
        href="/tools"
        onClick={(event) => handleInternalLinkClick(event, onShowOverview)}
      >
        Werkzeuge
      </a>

      <nav className="tools-sidebar-nav">
        {toolItems.map((item) => (
          <a
            className={activeToolId === item.id ? 'tools-sidebar-link is-active' : 'tools-sidebar-link'}
            href={item.path}
            onClick={(event) => handleInternalLinkClick(event, () => onSelect(item.id))}
            key={item.id}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
