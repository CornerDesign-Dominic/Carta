export default function FooterBlock({ columns, footerLines, onFooterLineChange }) {
  return (
    <footer className="invoice-footer-data" aria-label="Fußbereich">
      {columns.map((column) => (
        <section key={column.map(({ field }) => field).join('-')}>
          {column.map(({ field, label }) => (
            <input
              key={field}
              aria-label={label}
              value={footerLines[field]}
              onChange={(event) => onFooterLineChange(field, event.target.value)}
            />
          ))}
        </section>
      ))}
    </footer>
  );
}
