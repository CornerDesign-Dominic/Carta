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
      <div className="visual-toolbar-group">
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
      </div>
      <div className="visual-toolbar-group">
        <button type="button" title="Druckdialog oeffnen" aria-label="Druckdialog oeffnen" onClick={onPrint}>
          Drucken
        </button>
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
      <div className="visual-toolbar-group">
        {onSaveJson && (
          <button
            type="button"
            title="Dokument als Vorlage speichern"
            aria-label="Dokument als Vorlage speichern"
            onClick={onSaveJson}
          >
            Vorlage erstellen
          </button>
        )}
        {onLoadJson && (
          <>
            <button
              type="button"
              title="Dokument aus Vorlage laden"
              aria-label="Dokument aus Vorlage laden"
              onClick={() => jsonInputRef?.current?.click()}
            >
              Vorlage laden
            </button>
            <input
              ref={jsonInputRef}
              className="invoice-template-input"
              type="file"
              accept="application/json,.json"
              aria-label="Vorlage laden"
              onChange={onLoadJson}
            />
          </>
        )}
      </div>
    </div>
  );
}
