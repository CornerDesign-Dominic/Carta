const navigationItems = [
  { label: 'Dokumente', view: 'documents' },
  { label: 'Werkzeuge', view: 'tools' },
  { label: 'Wissen', view: 'knowledge' },
];

export default function Header({ currentView, enableKnowledge = true, onNavigate }) {
  const visibleNavigationItems = navigationItems.filter(
    (item) => item.view !== 'knowledge' || enableKnowledge,
  );

  return (
    <header className="site-header" aria-label="Hauptnavigation">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate({ view: 'home' })}
        aria-label="Belege24 Startseite"
      >
        Belege24
      </button>
      <nav className="nav-links">
        {visibleNavigationItems.map((item) => {
          const isActive = item.view === currentView;

          return (
            <button
              className={isActive ? 'is-active' : undefined}
              type="button"
              onClick={() => onNavigate(item)}
              key={item.label}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
