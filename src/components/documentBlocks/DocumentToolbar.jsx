import { trackAnalyticsEvent } from '../../utils/analytics.js';

const toolbarGeneratorMeta = {
  Angebot: { generatorId: 'write-offer', generatorLabel: 'Angebot' },
  Rechnung: { generatorId: 'write-invoice', generatorLabel: 'Rechnung' },
  Lieferschein: { generatorId: 'write-delivery-note', generatorLabel: 'Lieferschein' },
  Gutschrift: { generatorId: 'write-credit-note', generatorLabel: 'Gutschrift' },
  Mahnung: { generatorId: 'write-reminder', generatorLabel: 'Mahnung' },
  Quittung: { generatorId: 'write-receipt', generatorLabel: 'Quittung' },
  Eigenbeleg: { generatorId: 'write-self-receipt', generatorLabel: 'Eigenbeleg' },
};

export default function DocumentToolbar({
  ariaLabel,
  editLabel = 'Bearbeiten',
  exportingLabel = 'PDF wird erstellt',
  isEditable,
  isDataCheckActive = false,
  isExporting,
  jsonInputRef,
  onCreatePdf,
  onToggleDataCheck,
  onLoadJson,
  onPrint,
  onSaveJson,
  onToggleEditable,
  previewLabel = 'Vorschau',
}) {
  const documentName = String(ariaLabel ?? '').replace(/\s+Werkzeuge$/, '');
  const analyticsMeta = toolbarGeneratorMeta[documentName];

  function trackDocumentAction(action) {
    if (!analyticsMeta) {
      return;
    }

    trackAnalyticsEvent('document_action', {
      generator_id: analyticsMeta.generatorId,
      generator_label: analyticsMeta.generatorLabel,
      action,
    });
  }

  return (
    <div className="visual-toolbar" aria-label={ariaLabel}>
      <div className="visual-toolbar-group">
        <button
          className={isEditable ? 'is-active' : undefined}
          type="button"
          title="Bearbeitbare Felder im Dokument anzeigen"
          aria-label="Bearbeitbare Felder im Dokument anzeigen"
          aria-pressed={isEditable}
          onClick={() => {
            trackDocumentAction('toggle_edit');
            onToggleEditable?.();
          }}
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
            onClick={() => {
              trackDocumentAction('toggle_data_check');
              onToggleDataCheck?.();
            }}
          >
            Daten prüfen
          </button>
        )}
      </div>
      <div className="visual-toolbar-group">
        <button
          type="button"
          title="Druckdialog öffnen"
          aria-label="Druckdialog öffnen"
          onClick={() => {
            trackDocumentAction('print');
            onPrint?.();
          }}
        >
          Drucken
        </button>
        <button
          type="button"
          title="PDF-Datei erstellen"
          aria-label="PDF-Datei erstellen"
          onClick={() => {
            trackDocumentAction('create_pdf');
            onCreatePdf?.();
          }}
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
            onClick={() => {
              trackDocumentAction('save_template');
              onSaveJson?.();
            }}
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
              onClick={() => {
                trackDocumentAction('load_template');
                jsonInputRef?.current?.click();
              }}
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
