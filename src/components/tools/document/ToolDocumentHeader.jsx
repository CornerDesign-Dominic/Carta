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
  const openDatePicker = (event) => {
    const dateInput = event.currentTarget.parentElement?.querySelector('input[type="date"]');
    dateInput?.showPicker?.();
    dateInput?.focus();
  };

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
        <span className="tool-document-date-display">{formatToolDocumentDate(date)}</span>
        <input
          className={dataCheckActive ? 'tool-document-data-check-marker' : undefined}
          type="date"
          aria-label="Dokumentdatum"
          value={date}
          onChange={(event) => onDateChange(event.target.value)}
        />
        <button
          className="tool-document-date-picker"
          type="button"
          aria-label="Datum auswählen"
          onClick={openDatePicker}
        >
          <span aria-hidden="true" />
        </button>
      </label>
    </header>
  );
}
