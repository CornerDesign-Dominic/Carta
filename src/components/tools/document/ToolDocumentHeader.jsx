export function createTodayDateValue() {
  return new Date().toISOString().slice(0, 10);
}

export function formatToolDocumentDate(dateValue) {
  if (!dateValue) {
    return '';
  }

  const [year, month, day] = String(dateValue).split('-');

  if (!year || !month || !day) {
    return dateValue;
  }

  return `${day}.${month}.${year}`;
}

export default function ToolDocumentHeader({
  dataCheckActive = false,
  date,
  onCompanyNameChange,
  onDateChange,
  senderCompanyName,
}) {
  return (
    <header className="tool-document-header tools-letter-header">
      <div className="tool-document-editable-group tools-letter-company-field">
        <input
          className={dataCheckActive ? 'tool-document-data-check-marker' : undefined}
          aria-label="Eigener Firmenname"
          value={senderCompanyName}
          onChange={(event) => onCompanyNameChange(event.target.value)}
        />
      </div>

      <label className="tool-document-date-field">
        <input
          className={dataCheckActive ? 'tool-document-data-check-marker' : undefined}
          type="date"
          aria-label="Dokumentdatum"
          value={date}
          onChange={(event) => onDateChange(event.target.value)}
        />
      </label>
    </header>
  );
}
