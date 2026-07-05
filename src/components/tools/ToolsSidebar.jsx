import { toolItems } from '../../data/tools.js';

export default function ToolsSidebar({ activeToolId, onSelect, onShowOverview }) {
  return (
    <aside className="tools-sidebar" aria-label="Werkzeugnavigation">
      <button
        className={!activeToolId ? 'tools-sidebar-title is-active' : 'tools-sidebar-title'}
        type="button"
        onClick={onShowOverview}
      >
        Werkzeuge
      </button>

      <nav className="tools-sidebar-nav">
        {toolItems.map((item) => (
          <button
            className={activeToolId === item.id ? 'tools-sidebar-link is-active' : 'tools-sidebar-link'}
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
