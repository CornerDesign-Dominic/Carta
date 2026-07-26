import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { catalogItemTypes, catalogItemEditorReducer, createCatalogEditorState, getCatalogItemDisplayName, getCatalogItemTypeLabel, matchesCatalogItemSearch } from '../../masterData/catalogItemModel.js';
import { CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME, createCatalogItemMasterDataCollectionMetadata, createCatalogItemMasterDataDocument, getCatalogItemMasterDataPdfFilename, importCatalogItemMasterDataPdf } from '../../masterData/catalogItemContract.js';
import { requestPdfDownload } from '../../utils/requestPdfDownload.js';
import { CatalogCollectionActions, CatalogExportAction } from './CatalogItemMasterDataActions.jsx';
import CatalogItemMasterDataToolbar from './CatalogItemMasterDataToolbar.jsx';
import CatalogItemForm from './CatalogItemForm.jsx';
import CatalogItemMasterDataDocument from './CatalogItemMasterDataDocument.jsx';

function Dialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="dialog" aria-modal="true" aria-labelledby="catalog-dialog-title"><h2 id="catalog-dialog-title">{action.title}</h2><p>{action.message}</p>
    {action.kind === 'choose-type' && <><div className="catalog-type-choice" aria-label="Eintragstyp auswählen">{catalogItemTypes.map((type) => <button className="partner-button" type="button" key={type.value} onClick={() => onConfirm(type.value)}>{type.label}</button>)}</div><div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>Abbrechen</button></div></>}
    {action.kind !== 'choose-type' && <div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>{action.cancelLabel || 'Abbrechen'}</button><button className="partner-button is-primary" type="button" onClick={() => onConfirm()}>{action.confirmLabel || 'Bestätigen'}</button></div>}
  </section></div>;
}

export default function CatalogItemMasterDataEditor() {
  const [state, dispatch] = useReducer(catalogItemEditorReducer, undefined, createCatalogEditorState);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [dialog, setDialog] = useState(null);
  const [collectionMetadata, setCollectionMetadata] = useState(createCatalogItemMasterDataCollectionMetadata);
  const [isExporting, setIsExporting] = useState(false);
  const [isDirty, setIsDirty] = useState(true);
  const [hasStartedCollection, setHasStartedCollection] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const titleInputRef = useRef(null);
  const previewPagesRef = useRef(null);
  const activeRecord = state.records.find((record) => record.id === state.activeRecordId) ?? null;
  const hasRecords = state.records.length > 0;
  const searchResults = useMemo(() => state.records.filter((record) => matchesCatalogItemSearch(record, searchQuery) && (typeFilter === 'all' || record.type === typeFilter)), [searchQuery, state.records, typeFilter]);

  useEffect(() => {
    if (activeRecord && (searchQuery || typeFilter !== 'all') && !searchResults.some((record) => record.id === activeRecord.id)) setStatusMessage('Der aktuell bearbeitete Eintrag ist nicht Teil des Suchergebnisses oder Filters.');
  }, [activeRecord, searchQuery, searchResults, typeFilter]);
  function focusTitleField() { window.requestAnimationFrame(() => titleInputRef.current?.focus()); }
  function applyChange(action) { dispatch(action); setIsDirty(true); }
  function handleCreate() { setDialog({ kind: 'choose-type', title: 'Was möchtest du anlegen?', message: 'Wähle den Typ für den neuen Eintrag aus.' }); }
  function handleDuplicate() { if (!activeRecord) return; applyChange({ type: 'duplicate', recordId: activeRecord.id }); setSearchQuery(''); setTypeFilter('all'); setStatusMessage(`${getCatalogItemDisplayName(activeRecord)} wurde dupliziert.`); focusTitleField(); }
  function handleDelete() { if (!activeRecord) return; setDialog({ kind: 'delete', recordId: activeRecord.id, title: 'Eintrag löschen', message: `Möchtest du „${getCatalogItemDisplayName(activeRecord)}“ wirklich löschen?`, confirmLabel: 'Löschen' }); }
  function handleNewCollection() { setDialog({ kind: 'new', title: 'Neue Stammdatensammlung erstellen', message: 'Alle aktuellen Leistungs- und Artikeleinträge werden aus dem Editor entfernt. Eine nicht gespeicherte Sammlung kann danach nicht wiederhergestellt werden.', confirmLabel: 'Neue Sammlung erstellen' }); }
  function handleRequestTypeChange(itemType) {
    if (!activeRecord || itemType === activeRecord.type) return;
    setDialog({ kind: 'change-type', itemType, title: 'Eintragstyp ändern', message: 'Beim Wechsel des Eintragstyps werden nicht unterstützte Felder im Formular ausgeblendet. Vorhandene Werte bleiben zunächst erhalten, werden aber beim späteren Übernehmen in Dokumente möglicherweise nicht verwendet.', confirmLabel: 'Typ ändern' });
  }
  function handleConfirm(value) {
    if (dialog?.kind === 'choose-type') { applyChange({ type: 'create', itemType: value }); setSearchQuery(''); setTypeFilter('all'); setStatusMessage(`${getCatalogItemTypeLabel(value)} wurde angelegt.`); focusTitleField(); }
    if (dialog?.kind === 'delete') { applyChange({ type: 'delete', recordId: dialog.recordId }); setSearchQuery(''); setStatusMessage('Eintrag wurde gelöscht.'); }
    if (dialog?.kind === 'new') { dispatch({ type: 'reset-collection' }); setCollectionMetadata(createCatalogItemMasterDataCollectionMetadata()); setSearchQuery(''); setTypeFilter('all'); setIsDirty(true); setHasStartedCollection(true); setStatusMessage('Neue leere Stammdatensammlung wurde erstellt.'); }
    if (dialog?.kind === 'change-type' && activeRecord) { applyChange({ type: 'change-type', recordId: activeRecord.id, itemType: dialog.itemType }); setStatusMessage(`Eintragstyp wurde zu ${getCatalogItemTypeLabel(dialog.itemType)} geändert.`); }
    if (dialog?.kind === 'import') {
      const imported = dialog.document;
      dispatch({ type: 'replace-collection', records: imported.records, activeRecordId: imported.records[0]?.id ?? null });
      setCollectionMetadata({ documentId: imported.documentId, createdAt: imported.createdAt, updatedAt: imported.updatedAt });
      setSearchQuery(''); setTypeFilter('all'); setIsDirty(false); setHasStartedCollection(true); setStatusMessage('Leistungs- und Artikelstammdaten wurden aus der PDF geladen.'); focusTitleField();
    }
    setDialog(null);
  }
  async function handleCreatePdf() {
    const updatedAt = new Date().toISOString();
    const exportRoot = previewPagesRef.current;
    const firstPage = exportRoot?.querySelector('.partner-document-page');
    if (!firstPage || !exportRoot) { setStatusMessage('Die PDF konnte nicht erstellt werden.'); return; }
    setIsExporting(true);
    try {
      const document = createCatalogItemMasterDataDocument({ records: state.records, ...collectionMetadata, updatedAt });
      await requestPdfDownload({ sheet: firstPage, exportRoot, documentType: 'masterDataCatalog', filename: getCatalogItemMasterDataPdfFilename(new Date(updatedAt)), jsonAttachment: { fileName: CATALOG_ITEM_MASTER_DATA_ATTACHMENT_FILE_NAME, document, description: 'Belege24 Leistungs- und Artikelstammdaten', creator: 'Belege24', subject: 'Belege24 Leistungs- und Artikelstammdaten', keywords: ['belege24.master-data', 'schema-version:1', 'master-data-type:catalogItems'], creationDate: updatedAt, modificationDate: updatedAt } });
      setCollectionMetadata((current) => ({ ...current, updatedAt })); setIsDirty(false); setStatusMessage('Leistungs- und Artikelstammdaten wurden als PDF erstellt.');
    } catch { setStatusMessage('Die PDF konnte nicht erstellt werden.'); } finally { setIsExporting(false); }
  }
  async function handleLoadPdf(file) {
    if (file.type && file.type !== 'application/pdf') { setStatusMessage('Bitte wähle eine PDF-Datei aus.'); return; }
    let result;
    try { result = await importCatalogItemMasterDataPdf(await file.arrayBuffer()); } catch { setStatusMessage('Die Leistungs- und Artikelstammdaten konnten nicht geladen werden.'); return; }
    if (result.status !== 'valid') { setStatusMessage(result.message); return; }
    setDialog({ kind: 'import', document: result.document, title: 'Vorhandene Sammlung ersetzen', message: 'Im Editor befinden sich bereits Leistungs- und Artikeleinträge. Beim Laden der PDF wird die aktuelle Sammlung vollständig ersetzt.', cancelLabel: 'Import abbrechen', confirmLabel: 'Vorhandene Sammlung ersetzen' });
  }
  function handlePrint() { document.body.classList.add('master-data-print-mode'); window.print(); const cleanup = () => { document.body.classList.remove('master-data-print-mode'); window.removeEventListener('afterprint', cleanup); }; window.addEventListener('afterprint', cleanup); window.setTimeout(cleanup, 1200); }
  return <div className="partner-editor">
    <h1 id="master-data-title">Leistungen und Artikel</h1><p className="intro master-data-intro">Erstelle eine übersichtliche Sammlung wiederkehrender Leistungen, Artikel, Textleistungen und Lieferscheinpositionen. Die Einträge können später gezielt in Rechnungen, Angebote und Lieferscheine übernommen werden.</p>
    <CatalogCollectionActions isExporting={isExporting} onLoadPdf={handleLoadPdf} onNewCollection={handleNewCollection} />
    {hasStartedCollection && hasRecords && <><CatalogItemMasterDataToolbar activeRecordId={activeRecord?.id} records={state.records} searchQuery={searchQuery} typeFilter={typeFilter} searchResults={searchResults} onChangeSearch={setSearchQuery} onChangeTypeFilter={setTypeFilter} onSelectRecord={(recordId) => dispatch({ type: 'select', recordId })} onCreateRecord={handleCreate} onDuplicateRecord={handleDuplicate} onDeleteRecord={handleDelete} />
      <p className="partner-live-status" aria-live="polite">{statusMessage}</p><p className="partner-save-status" aria-live="polite">{isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert'}</p></>}
    {hasStartedCollection && (activeRecord ? <section className="partner-editor-section" aria-labelledby="catalog-form-title"><div className="partner-editor-section-heading"><h2 id="catalog-form-title">Eintrag bearbeiten</h2><p>{getCatalogItemDisplayName(activeRecord)}</p></div><CatalogItemForm item={activeRecord} titleInputRef={titleInputRef} onRequestTypeChange={handleRequestTypeChange} onUpdateField={(path, value) => applyChange({ type: 'update-field', recordId: activeRecord.id, path, value })} /></section> : <section className="partner-editor-section catalog-empty-editor" aria-labelledby="catalog-empty-title"><h2 id="catalog-empty-title">Noch keine Einträge</h2><p>Lege einen neuen Eintrag an oder lade ein vorhandenes Stammdatenblatt.</p><button className="partner-button is-primary" type="button" onClick={handleCreate}>Neuen Eintrag anlegen</button></section>)}
    {hasStartedCollection && <CatalogItemMasterDataDocument
      records={state.records}
      pagesRef={previewPagesRef}
      toolbar={<CatalogExportAction isExporting={isExporting} onCreatePdf={handleCreatePdf} />}
    />}
    <Dialog action={dialog} onCancel={() => setDialog(null)} onConfirm={handleConfirm} />
  </div>;
}
