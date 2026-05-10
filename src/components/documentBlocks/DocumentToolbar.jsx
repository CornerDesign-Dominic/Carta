export default function DocumentToolbar({
  ariaLabel,
  editLabel = 'Bearbeiten',
  exportingLabel = 'PDF wird erstellt',
  isEditable,
  isExporting,
  jsonInputRef,
  onCreatePdf,
  onLoadJson,
  onPrint,
  onSaveJson,
  onToggleEditable,
  previewLabel = 'Vorschau',
}) {
  return (
    <div className="visual-toolbar" aria-label={ariaLabel}>
      <button
        className={isEditable ? 'is-active' : undefined}
        type="button"
        title="Bearbeitbare Felder im Dokument anzeigen"
        aria-label="Bearbeitbare Felder im Dokument anzeigen"
        aria-pressed={isEditable}
        onClick={onToggleEditable}
      >
        {isEditable ? previewLabel : editLabel}
      </button>
      <button type="button" title="Druckdialog öffnen" aria-label="Druckdialog öffnen" onClick={onPrint}>
        Drucken
      </button>
      {onSaveJson && (
        <button
          type="button"
          title="Dokument als JSON speichern"
          aria-label="Dokument als JSON speichern"
          onClick={onSaveJson}
        >
          JSON speichern
        </button>
      )}
      {onLoadJson && (
        <>
          <button
            type="button"
            title="Dokument aus JSON laden"
            aria-label="Dokument aus JSON laden"
            onClick={() => jsonInputRef?.current?.click()}
          >
            JSON laden
          </button>
          <input
            ref={jsonInputRef}
            className="invoice-template-input"
            type="file"
            accept="application/json,.json"
            aria-label="JSON-Datei laden"
            onChange={onLoadJson}
          />
        </>
      )}
      <button
        type="button"
        title="PDF-Datei erstellen"
        aria-label="PDF-Datei erstellen"
        onClick={onCreatePdf}
        disabled={isExporting}
      >
        {isExporting ? exportingLabel : 'PDF erstellen'}
      </button>
    </div>
  );
}
