export default function ToolToolbar({
  ariaLabel,
  editLabel = 'Bearbeiten',
  exportingLabel = 'PDF wird erstellt',
  isDataCheckActive = false,
  isEditable,
  isExporting,
  onCreatePdf,
  onPrint,
  onToggleDataCheck,
  onToggleEditable,
  previewLabel = 'Vorschau',
}) {
  return (
    <div className="tool-document-toolbar" aria-label={ariaLabel}>
      <div className="tool-document-toolbar-group">
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
        {onToggleDataCheck && (
          <button
            className={isDataCheckActive ? 'is-active' : undefined}
            type="button"
            title="Beispieldaten im Dokument markieren"
            aria-label="Beispieldaten im Dokument markieren"
            aria-pressed={isDataCheckActive}
            onClick={onToggleDataCheck}
          >
            Daten prüfen
          </button>
        )}
      </div>

      <div className="tool-document-toolbar-group">
        <button
          type="button"
          title="PDF-Datei erstellen"
          aria-label="PDF-Datei erstellen"
          onClick={onCreatePdf}
          disabled={isExporting}
        >
          {isExporting ? exportingLabel : 'PDF erstellen'}
        </button>
        <button type="button" title="Druckdialog öffnen" aria-label="Druckdialog öffnen" onClick={onPrint}>
          Drucken
        </button>
      </div>
    </div>
  );
}
