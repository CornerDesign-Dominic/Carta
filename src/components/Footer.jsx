const footerItems = [
  { label: 'Impressum', view: 'legal:impressum' },
  { label: 'Datenschutz', view: 'legal:datenschutz' },
  { label: 'AGB', view: 'legal:agb' },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer" id="rechtliches">
      <nav className="footer-links" aria-label="Rechtliches">
        {footerItems.map((item) => (
          <button type="button" onClick={() => onNavigate(item)} key={item.label}>
            {item.label}
          </button>
        ))}
      </nav>
    </footer>
  );
}
