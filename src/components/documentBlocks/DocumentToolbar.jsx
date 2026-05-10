export default function DocumentToolbar({
  ariaLabel,
  editLabel = 'Bearbeiten',
  exportingLabel = 'PDF wird erstellt',
  isEditable,
  isExporting,
  onCreatePdf,
  onPrint,
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
