import { toolItems } from '../../data/tools.js';

export default function ToolsSidebar({ activeToolId, onSelect, onShowOverview }) {
  return (
    <aside className="document-sidebar tools-sidebar" aria-label="Werkzeugnavigation">
      <button
        className={!activeToolId ? 'sidebar-title is-active' : 'sidebar-title'}
        type="button"
        onClick={onShowOverview}
      >
        Werkzeuge
      </button>

      <nav className="sidebar-nav tools-sidebar-nav">
        {toolItems.map((item) => (
          <button
            className={activeToolId === item.id ? 'is-active' : undefined}
            type="button"
            onClick={() => onSelect(item.id)}
            key={item.id}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}
