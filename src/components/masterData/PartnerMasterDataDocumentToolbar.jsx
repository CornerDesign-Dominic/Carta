import { useRef } from 'react';

export default function PartnerMasterDataDocumentToolbar({
  isExporting,
  onCreatePdf,
  onLoadPdf,
  onNewCollection,
  onPrint,
}) {
  const pdfInputRef = useRef(null);

  return (
    <div className="visual-toolbar partner-document-toolbar" aria-label="Partner-Stammdaten Aktionen">
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
          aria-label="Belege24 Partner-Stammdaten PDF laden"
          title="Belege24 Partner-Stammdaten PDF laden"
          disabled={isExporting}
          onClick={() => pdfInputRef.current?.click()}
        >
          PDF laden
        </button>
        <button type="button" aria-label="Partner-Stammdaten drucken" title="Partner-Stammdaten drucken" disabled={isExporting} onClick={onPrint}>
          Drucken
        </button>
        <button type="button" aria-label="Partner-Stammdaten PDF erstellen" title="Partner-Stammdaten PDF erstellen" disabled={isExporting} onClick={onCreatePdf}>
          {isExporting ? 'PDF wird erstellt …' : 'PDF erstellen'}
        </button>
        <button type="button" aria-label="Neue Partner-Stammdatensammlung erstellen" title="Neue Partner-Stammdatensammlung erstellen" disabled={isExporting} onClick={onNewCollection}>
          Neu
        </button>
      </div>
    </div>
  );
}
