import { useRef } from 'react';

export function CatalogCollectionActions({ isExporting, onLoadPdf, onNewCollection, ariaLabel = 'Leistungs- und Artikelstammdaten verwalten' }) {
  const pdfInputRef = useRef(null);

  return <div className="visual-toolbar catalog-collection-toolbar" aria-label={ariaLabel}>
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
      <button type="button" aria-label="Neues Stammdatenblatt erstellen" title="Neues Stammdatenblatt erstellen" disabled={isExporting} onClick={onNewCollection}>Neues Stammdatenblatt</button>
      <button type="button" aria-label="Vorhandenes Stammdatenblatt laden" title="Vorhandenes Stammdatenblatt laden" disabled={isExporting} onClick={() => pdfInputRef.current?.click()}>Stammdatenblatt laden</button>
    </div>
  </div>;
}

export function CatalogExportAction({ isExporting, onCreatePdf, ariaLabel = 'Leistungs- und Artikelstammdaten exportieren' }) {
  return <div className="visual-toolbar catalog-document-toolbar" aria-label={ariaLabel}>
    <div className="visual-toolbar-group">
      <button className="partner-button master-data-export-button" type="button" aria-label="Stammdatenblatt erstellen und herunterladen" title="Stammdatenblatt erstellen und herunterladen" disabled={isExporting} onClick={onCreatePdf}>{isExporting ? 'Stammdatenblatt wird erstellt …' : 'Stammdatenblatt erstellen und herunterladen'}</button>
    </div>
  </div>;
}
