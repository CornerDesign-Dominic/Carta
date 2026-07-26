import { useRef } from 'react';

export default function PartnerMasterDataDocumentToolbar({
  isExporting,
  onCreatePdf,
  onLoadPdf,
  onNewCollection,
  onPrint,
  labelPrefix = 'Partner-Stammdaten',
  className = 'partner-document-toolbar',
}) {
  const pdfInputRef = useRef(null);

  return (
    <div className={`visual-toolbar ${className}`} aria-label={`${labelPrefix} Aktionen`}>
      <div className="visual-toolbar-group">
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
          aria-label={`Belege24 ${labelPrefix} PDF laden`}
          title={`Belege24 ${labelPrefix} PDF laden`}
          disabled={isExporting}
          onClick={() => pdfInputRef.current?.click()}
        >
          PDF laden
        </button>
        <button type="button" aria-label={`${labelPrefix} drucken`} title={`${labelPrefix} drucken`} disabled={isExporting} onClick={onPrint}>
          Drucken
        </button>
        <button type="button" aria-label={`${labelPrefix} PDF erstellen`} title={`${labelPrefix} PDF erstellen`} disabled={isExporting} onClick={onCreatePdf}>
          {isExporting ? 'PDF wird erstellt …' : 'PDF erstellen'}
        </button>
        <button type="button" aria-label={`Neue ${labelPrefix}-Sammlung erstellen`} title={`Neue ${labelPrefix}-Sammlung erstellen`} disabled={isExporting} onClick={onNewCollection}>
          Neu
        </button>
      </div>
    </div>
  );
}
