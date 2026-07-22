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
  const themeToggleLabel = isDarkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren';

  return (
    <header className="site-header" aria-label="Hauptnavigation">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate({ view: 'home' })}
        aria-label="Belege24 Startseite"
      >
        <span className="brand-word">Belege</span><span className="brand-number">24</span>
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
        aria-label={themeToggleLabel}
        title={themeToggleLabel}
      >
        {isDarkMode ? (
          <svg
            aria-hidden="true"
            className="theme-toggle-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="theme-toggle-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.99 12.62A8.5 8.5 0 1 1 11.38 3.01 6.6 6.6 0 0 0 20.99 12.62Z" />
          </svg>
        )}
      </button>
    </header>
  );
}
