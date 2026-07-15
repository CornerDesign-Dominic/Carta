export default function ToolDocumentTitle({ onChange, value }) {
  return (
    <input
      className="tool-document-title tools-letter-subject"
      aria-label="Dokumenttitel"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
