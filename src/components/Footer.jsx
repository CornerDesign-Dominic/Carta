const footerItems = [
  { label: 'Impressum', view: 'legal:impressum' },
  { label: 'Datenschutz', view: 'legal:datenschutz' },
  { label: 'Nutzungsbedingungen', view: 'legal:agb' },
];

export default function Footer({ onNavigate, onOpenCookieSettings, showPatchnotes = false }) {
  return (
    <footer className="site-footer" id="rechtliches">
      <nav className="footer-links" aria-label="Rechtliches">
        {footerItems.map((item) => (
          <button type="button" onClick={() => onNavigate(item)} key={item.label}>
            {item.label}
          </button>
        ))}
        <button type="button" onClick={onOpenCookieSettings}>
          Cookie-Einstellungen
        </button>
      </nav>
      {showPatchnotes && (
        <nav className="footer-development-links" aria-label="Entwicklung">
          <button type="button" onClick={() => onNavigate({ path: '/patchnotes' })}>
            Patchnotes
          </button>
        </nav>
      )}
    </footer>
  );
}
