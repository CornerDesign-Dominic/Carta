const navigationItems = [
  { label: 'Dokumente', view: 'documents' },
];

export default function Header({ currentView, onNavigate }) {
  return (
    <header className="site-header" aria-label="Hauptnavigation">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate({ view: 'home' })}
        aria-label="Carta Startseite"
      >
        Carta
      </button>
      <nav className="nav-links">
        {navigationItems.map((item) => {
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
