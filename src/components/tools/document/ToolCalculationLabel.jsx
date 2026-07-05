export default function ToolCalculationLabel({ onChange, value }) {
  return (
    <input
      className="tool-calculation-label"
      aria-label="Bezeichnung der Berechnung"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
