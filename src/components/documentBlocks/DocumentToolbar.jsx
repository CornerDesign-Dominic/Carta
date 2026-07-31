import { useRef } from 'react';
import { trackAnalyticsEvent } from '../../utils/analytics.js';

const toolbarGeneratorMeta = {
  Angebot: { generatorId: 'write-offer', generatorLabel: 'Angebot' },
  Rechnung: { generatorId: 'write-invoice', generatorLabel: 'Rechnung' },
  Lieferschein: { generatorId: 'write-delivery-note', generatorLabel: 'Lieferschein' },
  Gutschrift: { generatorId: 'write-credit-note', generatorLabel: 'Gutschrift' },
  Mahnung: { generatorId: 'write-reminder', generatorLabel: 'Mahnung' },
  Geschäftsbrief: { generatorId: 'write-business-letter', generatorLabel: 'Geschäftsbrief' },
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
  onCreatePdf,
  onLoadPdf,
  onToggleDataCheck,
  onNewDocument,
  onPrint,
  onToggleEditable,
  previewLabel = 'Vorschau',
}) {
  const pdfInputRef = useRef(null);
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
        {onLoadPdf && (
          <>
            <input
              ref={pdfInputRef}
              type="file"
              accept="application/pdf,.pdf"
              hidden
              onChange={(event) => {
                const file = event.target.files?.[0];
                event.target.value = '';
                if (file) onLoadPdf(file);
              }}
            />
            <button
              type="button"
              title="Belege24-PDF laden"
              aria-label="Belege24-PDF laden"
              onClick={() => {
                trackDocumentAction('load_pdf');
                pdfInputRef.current?.click();
              }}
            >
              PDF laden
            </button>
          </>
        )}
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
      {onNewDocument && (
        <div className="visual-toolbar-group visual-toolbar-new-group">
          <button
            className="visual-toolbar-new-button"
            type="button"
            title="Neues Dokument erstellen"
            aria-label="Neues Dokument erstellen"
            onClick={() => {
              const confirmed = window.confirm(
                'Möchtest du dieses Dokument wirklich zurücksetzen? Alle aktuellen Eingaben gehen verloren.',
              );

              if (!confirmed) {
                return;
              }

              trackDocumentAction('new_document');
              onNewDocument?.();
            }}
          >
            Neu
          </button>
        </div>
      )}
    </div>
  );
}
