const footerItems = [
  { label: 'Impressum', view: 'legal:impressum' },
  { label: 'Datenschutz', view: 'legal:datenschutz' },
  { label: 'AGB', view: 'legal:agb' },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer" id="rechtliches">
      {footerItems.map((item) => (
        <button type="button" onClick={() => onNavigate(item)} key={item.label}>
          {item.label}
        </button>
      ))}
    </footer>
  );
}
