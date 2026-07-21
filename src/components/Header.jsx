const navigationItems = [
  { label: 'Dokumente', view: 'documents' },
  { label: 'Werkzeuge', view: 'tools' },
  { label: 'Wissen', view: 'knowledge' },
];

export default function Header({
  currentView,
  enableKnowledge = true,
  theme = 'light',
  onNavigate,
  onToggleTheme,
}) {
  const visibleNavigationItems = navigationItems.filter(
    (item) => item.view !== 'knowledge' || enableKnowledge,
  );
  const isDarkMode = theme === 'dark';

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
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-pressed={isDarkMode}
        aria-label={isDarkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
      >
        <span aria-hidden="true">{isDarkMode ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  );
}
