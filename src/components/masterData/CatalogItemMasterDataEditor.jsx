import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { catalogItemTypes, catalogItemEditorReducer, createCatalogEditorState, createCatalogItem, getCatalogItemDisplayName, matchesCatalogItemSearch } from '../../masterData/catalogItemModel.js';
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

function cloneRecord(record) {
  return JSON.parse(JSON.stringify(record));
}

function updateAtPath(value, path, nextValue) {
  const [key, ...remaining] = path;
  if (!key) return nextValue;
  return { ...value, [key]: remaining.length ? updateAtPath(value[key], remaining, nextValue) : nextValue };
}

function getCatalogDraftHeading(type, isSaved) {
  const headings = {
    service: isSaved ? 'Leistung bearbeiten' : 'Neue Leistung anlegen',
    goods: isSaved ? 'Artikel bearbeiten' : 'Neuen Artikel anlegen',
    textService: isSaved ? 'Textleistung bearbeiten' : 'Neue Textleistung anlegen',
    deliveryItem: isSaved ? 'Lieferscheinposition bearbeiten' : 'Neue Lieferscheinposition anlegen',
  };
  return headings[type] ?? (isSaved ? 'Eintrag bearbeiten' : 'Neuen Eintrag anlegen');
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
  const [draft, setDraft] = useState(null);
  const [draftSourceId, setDraftSourceId] = useState(null);
  const [draftBaseline, setDraftBaseline] = useState(null);
  const titleInputRef = useRef(null);
  const previewPagesRef = useRef(null);
  const activeRecord = state.records.find((record) => record.id === state.activeRecordId) ?? null;
  const hasRecords = state.records.length > 0;
  const isDraftDirty = Boolean(draft && (!draftBaseline || JSON.stringify(draft) !== JSON.stringify(draftBaseline)));
  const searchResults = useMemo(() => state.records.filter((record) => matchesCatalogItemSearch(record, searchQuery) && (typeFilter === 'all' || record.type === typeFilter)), [searchQuery, state.records, typeFilter]);

  useEffect(() => {
    if (activeRecord && (searchQuery || typeFilter !== 'all') && !searchResults.some((record) => record.id === activeRecord.id)) setStatusMessage('Der aktuell bearbeitete Eintrag ist nicht Teil des Suchergebnisses oder Filters.');
  }, [activeRecord, searchQuery, searchResults, typeFilter]);
  function focusTitleField() { window.requestAnimationFrame(() => titleInputRef.current?.focus()); }
  function openTypeChoice() { setDialog({ kind: 'choose-type', title: 'Was möchtest du anlegen?', message: 'Wähle den Typ für den neuen Eintrag aus.' }); }
  function handleCreate() {
    if (draft && isDraftDirty) {
      setDialog({ kind: 'discard-and-create', title: 'Ungespeicherte Änderungen', message: 'Deine Änderungen wurden noch nicht gespeichert. Möchtest du sie verwerfen und einen neuen Eintrag anlegen?', cancelLabel: 'Weiter bearbeiten', confirmLabel: 'Änderungen verwerfen' });
      return;
    }
    openTypeChoice();
  }
  function openSavedRecord(recordId) {
    const record = state.records.find((candidate) => candidate.id === recordId);
    if (!record) return;
    dispatch({ type: 'select', recordId });
    setDraft(cloneRecord(record));
    setDraftSourceId(recordId);
    setDraftBaseline(cloneRecord(record));
    focusTitleField();
  }
  function requestSelectRecord(recordId) {
    if (draft && isDraftDirty) {
      setDialog({ kind: 'discard-draft', recordId, title: 'Ungespeicherte Änderungen', message: 'Deine Änderungen wurden noch nicht gespeichert. Möchtest du sie verwerfen und den anderen Eintrag öffnen?', cancelLabel: 'Weiter bearbeiten', confirmLabel: 'Änderungen verwerfen' });
      return;
    }
    openSavedRecord(recordId);
  }
  function createItemOfType(itemType) {
    const nextDraft = createCatalogItem(itemType);
    setDraft(nextDraft);
    setDraftSourceId(null);
    setDraftBaseline(cloneRecord(nextDraft));
    setSearchQuery('');
    setTypeFilter('all');
    focusTitleField();
  }
  function updateDraft(path, value) {
    setDraft((current) => (current ? updateAtPath(current, path, value) : current));
  }
  function persistDraft(status) {
    if (!draft) return false;
    try {
      dispatch({ type: 'upsert', record: draft });
      setDraftSourceId(draft.id);
      setDraftBaseline(cloneRecord(draft));
      setIsDirty(true);
      setStatusMessage(status);
      return true;
    } catch {
      setStatusMessage('Der Eintrag konnte nicht gespeichert werden.');
      return false;
    }
  }
  function handleSaveDraft() { persistDraft('Eintrag wurde gespeichert.'); }
  function handleSaveAndCreate() {
    if (!persistDraft('Eintrag wurde gespeichert. Wähle den Typ des nächsten Eintrags.')) return;
    openTypeChoice();
  }
  function handleDeleteDraft() {
    if (!draftSourceId || !draft) return;
    setDialog({ kind: 'delete', recordId: draftSourceId, title: 'Eintrag löschen?', message: `Möchtest du „${getCatalogItemDisplayName(draft)}“ wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`, confirmLabel: 'Eintrag löschen' });
  }
  function handleNewCollection() { setDialog({ kind: 'new', title: 'Neue Stammdatensammlung erstellen', message: 'Alle aktuellen Leistungs- und Artikeleinträge werden aus dem Editor entfernt. Eine nicht gespeicherte Sammlung kann danach nicht wiederhergestellt werden.', confirmLabel: 'Neue Sammlung erstellen' }); }
  function handleConfirm(value) {
    if (dialog?.kind === 'choose-type') createItemOfType(value);
    if (dialog?.kind === 'discard-and-create') {
      setDraft(null);
      setDraftSourceId(null);
      setDraftBaseline(null);
      openTypeChoice();
      return;
    }
    if (dialog?.kind === 'delete') { dispatch({ type: 'delete', recordId: dialog.recordId }); setDraft(null); setDraftSourceId(null); setDraftBaseline(null); setSearchQuery(''); setIsDirty(true); setStatusMessage('Eintrag wurde gelöscht.'); }
    if (dialog?.kind === 'discard-draft') openSavedRecord(dialog.recordId);
    if (dialog?.kind === 'new') { dispatch({ type: 'reset-collection' }); setDraft(null); setDraftSourceId(null); setDraftBaseline(null); setCollectionMetadata(createCatalogItemMasterDataCollectionMetadata()); setSearchQuery(''); setTypeFilter('all'); setIsDirty(true); setHasStartedCollection(true); setStatusMessage('Neue leere Stammdatensammlung wurde erstellt.'); }
    if (dialog?.kind === 'import') {
      const imported = dialog.document;
      dispatch({ type: 'replace-collection', records: imported.records, activeRecordId: imported.records[0]?.id ?? null });
      const firstRecord = imported.records[0] ?? null;
      setDraft(firstRecord ? cloneRecord(firstRecord) : null);
      setDraftSourceId(firstRecord?.id ?? null);
      setDraftBaseline(firstRecord ? cloneRecord(firstRecord) : null);
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
    {hasStartedCollection && hasRecords && <><CatalogItemMasterDataToolbar activeRecordId={draftSourceId} records={state.records} searchQuery={searchQuery} typeFilter={typeFilter} searchResults={searchResults} onChangeSearch={setSearchQuery} onChangeTypeFilter={setTypeFilter} onSelectRecord={requestSelectRecord} />
      <span className="catalog-status-for-screenreaders" aria-live="polite">{statusMessage || (isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert')}</span></>}
    {hasStartedCollection && (draft ? <section className="partner-editor-section catalog-item-editor-section" aria-labelledby="catalog-form-title"><div className="catalog-new-entry-action"><button className="partner-button is-primary" type="button" onClick={handleCreate}>Weiteren Eintrag anlegen</button></div><div className="partner-editor-section-heading"><h2 id="catalog-form-title">{getCatalogDraftHeading(draft.type, Boolean(draftSourceId))}</h2>{draftSourceId ? draft.title.trim() && <p>{draft.title.trim()}</p> : <p>Noch nicht gespeichert</p>}</div><CatalogItemForm item={draft} titleInputRef={titleInputRef} onUpdateField={updateDraft} actions={<><div className="catalog-item-form-save-actions"><button className="partner-button is-primary" type="button" onClick={handleSaveDraft}>Speichern</button><button className="partner-button" type="button" onClick={handleSaveAndCreate}>Speichern & neuer Eintrag</button></div>{draftSourceId && <span className="catalog-item-form-delete-action"><button className="partner-button" type="button" onClick={handleDeleteDraft}>Löschen</button></span>}</>} /></section> : <section className="partner-editor-section catalog-new-entry-empty"><button className="partner-button is-primary" type="button" onClick={handleCreate}>{hasRecords ? 'Weiteren Eintrag anlegen' : 'Ersten Eintrag anlegen'}</button></section>)}
    {hasStartedCollection && <CatalogItemMasterDataDocument
      records={state.records}
      pagesRef={previewPagesRef}
      toolbar={<CatalogExportAction isExporting={isExporting} onCreatePdf={handleCreatePdf} />}
    />}
    <Dialog action={dialog} onCancel={() => setDialog(null)} onConfirm={handleConfirm} />
  </div>;
}
