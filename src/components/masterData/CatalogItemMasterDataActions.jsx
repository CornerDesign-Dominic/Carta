import { useRef } from 'react';

export function CatalogCollectionActions({ isExporting, onLoadPdf, onNewCollection }) {
  const pdfInputRef = useRef(null);

  return <div className="visual-toolbar catalog-collection-toolbar" aria-label="Leistungs- und Artikelstammdaten verwalten">
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

export function CatalogExportAction({ isExporting, onCreatePdf }) {
  return <div className="visual-toolbar catalog-document-toolbar" aria-label="Leistungs- und Artikelstammdaten exportieren">
    <div className="visual-toolbar-group">
      <button type="button" aria-label="Stammdatenblatt erstellen" title="Stammdatenblatt erstellen" disabled={isExporting} onClick={onCreatePdf}>{isExporting ? 'Stammdatenblatt wird erstellt …' : 'Stammdatenblatt erstellen'}</button>
    </div>
  </div>;
}
