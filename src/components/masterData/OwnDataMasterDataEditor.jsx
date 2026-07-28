import { useMemo, useReducer, useRef, useState } from 'react';
import { createOwnDataEditorState, createOwnDataRecord, getOwnDataDisplayName, matchesOwnDataSearch, ownDataEditorReducer } from '../../masterData/ownDataModel.js';
import { createOwnDataMasterDataCollectionMetadata, createOwnDataMasterDataDocument, getOwnDataMasterDataPdfFilename, importOwnDataMasterDataPdf, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME } from '../../masterData/ownDataContract.js';
import { requestPdfDownload } from '../../utils/requestPdfDownload.js';
import { CatalogCollectionActions, CatalogExportAction } from './CatalogItemMasterDataActions.jsx';
import OwnDataForm from './OwnDataForm.jsx';
import OwnDataMasterDataDocument from './OwnDataMasterDataDocument.jsx';
import OwnDataMasterDataToolbar from './OwnDataMasterDataToolbar.jsx';

function Dialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="dialog" aria-modal="true" aria-labelledby="own-data-dialog-title"><h2 id="own-data-dialog-title">{action.title}</h2><p>{action.message}</p><div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>{action.cancelLabel || 'Abbrechen'}</button><button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel || 'Bestätigen'}</button></div></section></div>;
}

function cloneRecord(record) { return JSON.parse(JSON.stringify(record)); }
function updateAtPath(value, path, nextValue) { const [key, ...remaining] = path; return !key ? nextValue : { ...value, [key]: remaining.length ? updateAtPath(value[key], remaining, nextValue) : nextValue }; }

export default function OwnDataMasterDataEditor() {
  const [state, dispatch] = useReducer(ownDataEditorReducer, undefined, createOwnDataEditorState);
  const [searchQuery, setSearchQuery] = useState('');
  const [dialog, setDialog] = useState(null);
  const [collectionMetadata, setCollectionMetadata] = useState(createOwnDataMasterDataCollectionMetadata);
  const [isExporting, setIsExporting] = useState(false);
  const [isDirty, setIsDirty] = useState(true);
  const [hasStartedCollection, setHasStartedCollection] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [draft, setDraft] = useState(null);
  const [draftSourceId, setDraftSourceId] = useState(null);
  const [draftBaseline, setDraftBaseline] = useState(null);
  const companyInputRef = useRef(null);
  const previewPagesRef = useRef(null);
  const hasRecords = state.records.length > 0;
  const isDraftDirty = Boolean(draft && (!draftBaseline || JSON.stringify(draft) !== JSON.stringify(draftBaseline)));
  const canDiscardDraft = Boolean(draft && (!draftSourceId || isDraftDirty));
  const searchResults = useMemo(() => state.records.filter((record) => matchesOwnDataSearch(record, searchQuery)), [searchQuery, state.records]);

  function focusCompanyField() { window.requestAnimationFrame(() => companyInputRef.current?.focus()); }
  function clearDraft() { setDraft(null); setDraftSourceId(null); setDraftBaseline(null); }
  function createRecordDraft() { const nextDraft = createOwnDataRecord(); setDraft(nextDraft); setDraftSourceId(null); setDraftBaseline(cloneRecord(nextDraft)); setSearchQuery(''); focusCompanyField(); }
  function openSavedRecord(recordId) {
    const record = state.records.find((candidate) => candidate.id === recordId);
    if (!record) return;
    dispatch({ type: 'select', recordId }); setDraft(cloneRecord(record)); setDraftSourceId(recordId); setDraftBaseline(cloneRecord(record)); focusCompanyField();
  }
  function requestSelectRecord(recordId) {
    if (draft && isDraftDirty) { setDialog({ kind: 'discard-draft', recordId, title: 'Ungespeicherte Änderungen', message: 'Möchtest du die Änderungen verwerfen und ein anderes Unternehmen öffnen?', cancelLabel: 'Weiter bearbeiten', confirmLabel: 'Änderungen verwerfen' }); return; }
    openSavedRecord(recordId);
  }
  function handleCreate() {
    if (draft && isDraftDirty) { setDialog({ kind: 'discard-and-create', title: 'Ungespeicherte Änderungen', message: 'Deine Änderungen wurden noch nicht gespeichert. Möchtest du sie verwerfen und ein neues Unternehmen anlegen?', cancelLabel: 'Weiter bearbeiten', confirmLabel: 'Änderungen verwerfen' }); return; }
    createRecordDraft();
  }
  function updateDraft(path, value) { setDraft((current) => current ? updateAtPath(current, path, value) : current); }
  function persistDraft(message) { if (!draft) return false; dispatch({ type: 'upsert', record: draft }); setDraftSourceId(draft.id); setDraftBaseline(cloneRecord(draft)); setIsDirty(true); setStatusMessage(message); return true; }
  function handleSave() { persistDraft('Unternehmen wurde gespeichert.'); }
  function handleSaveAndCreate() { if (persistDraft('Unternehmen wurde gespeichert. Neues Unternehmen kann angelegt werden.')) createRecordDraft(); }
  function handleDelete() { if (draft && draftSourceId) setDialog({ kind: 'delete', recordId: draftSourceId, title: 'Unternehmen löschen?', message: `Möchtest du „${getOwnDataDisplayName(draft)}“ wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`, confirmLabel: 'Unternehmen löschen' }); }
  function handleDiscard() {
    if (!draft) return;
    if (!draftSourceId) setDialog({ kind: 'discard-new', title: 'Entwurf verwerfen?', message: 'Alle Eingaben dieses noch nicht gespeicherten Unternehmens gehen verloren.', confirmLabel: 'Entwurf verwerfen' });
    else if (isDraftDirty) setDialog({ kind: 'discard-changes', title: 'Änderungen verwerfen?', message: 'Alle seit dem letzten Speichern vorgenommenen Änderungen gehen verloren.', confirmLabel: 'Änderungen verwerfen' });
  }
  function applyNewCollection() { dispatch({ type: 'reset-collection' }); clearDraft(); setCollectionMetadata(createOwnDataMasterDataCollectionMetadata()); setSearchQuery(''); setIsDirty(true); setHasStartedCollection(true); setStatusMessage('Neue leere Unternehmensstammdatensammlung wurde erstellt.'); }
  function handleNewCollection() {
    if (!hasStartedCollection && !hasRecords && !draft) { applyNewCollection(); return; }
    setDialog({ kind: 'new', title: 'Neue Stammdatensammlung erstellen', message: 'Alle aktuellen Unternehmensdaten werden aus dem Editor entfernt. Eine nicht gespeicherte Sammlung kann danach nicht wiederhergestellt werden.', confirmLabel: 'Neue Sammlung erstellen' });
  }
  function applyImportedCollection(imported) {
    dispatch({ type: 'replace-collection', records: imported.records, activeRecordId: null }); clearDraft();
    setCollectionMetadata({ documentId: imported.documentId, createdAt: imported.createdAt, updatedAt: imported.updatedAt }); setSearchQuery(''); setIsDirty(false); setHasStartedCollection(true); setStatusMessage('Eigene Stammdaten wurden aus der PDF geladen.');
  }
  async function handleLoadPdf(file) {
    if (file.type && file.type !== 'application/pdf') { setStatusMessage('Bitte wähle eine PDF-Datei aus.'); return; }
    let result; try { result = await importOwnDataMasterDataPdf(await file.arrayBuffer()); } catch { setStatusMessage('Die eigenen Stammdaten konnten nicht geladen werden.'); return; }
    if (result.status !== 'valid') { setStatusMessage(result.message); return; }
    if (!hasStartedCollection && !hasRecords && !draft && !isDraftDirty) { applyImportedCollection(result.document); return; }
    setDialog({ kind: 'import', document: result.document, title: 'Vorhandene Sammlung ersetzen', message: 'Im Editor befinden sich bereits Unternehmensdaten. Beim Laden der PDF wird die aktuelle Sammlung vollständig ersetzt.', cancelLabel: 'Import abbrechen', confirmLabel: 'Vorhandene Sammlung ersetzen' });
  }
  function handleConfirm() {
    const action = dialog; setDialog(null); if (!action) return;
    if (action.kind === 'discard-and-create') { clearDraft(); createRecordDraft(); }
    if (action.kind === 'discard-draft') openSavedRecord(action.recordId);
    if (action.kind === 'discard-new') { clearDraft(); setStatusMessage('Entwurf wurde verworfen.'); }
    if (action.kind === 'discard-changes' && draftBaseline) { setDraft(cloneRecord(draftBaseline)); setStatusMessage('Änderungen wurden verworfen.'); }
    if (action.kind === 'delete') { dispatch({ type: 'delete', recordId: action.recordId }); clearDraft(); setSearchQuery(''); setIsDirty(true); setStatusMessage('Unternehmen wurde gelöscht.'); }
    if (action.kind === 'new') applyNewCollection();
    if (action.kind === 'import') applyImportedCollection(action.document);
  }
  async function handleCreatePdf() {
    const updatedAt = new Date().toISOString(); const exportRoot = previewPagesRef.current; const firstPage = exportRoot?.querySelector('.partner-document-page');
    if (!firstPage || !exportRoot) { setStatusMessage('Die PDF konnte nicht erstellt werden.'); return; }
    setIsExporting(true);
    try {
      const document = createOwnDataMasterDataDocument({ records: state.records, ...collectionMetadata, updatedAt });
      await requestPdfDownload({ sheet: firstPage, exportRoot, documentType: 'masterDataOwn', filename: getOwnDataMasterDataPdfFilename(new Date(updatedAt)), jsonAttachment: { fileName: OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME, document, description: 'Belege24 Eigene Unternehmensstammdaten', creator: 'Belege24', subject: 'Belege24 Eigene Unternehmensstammdaten', keywords: ['belege24.master-data', 'schema-version:1', 'master-data-type:ownData'], creationDate: updatedAt, modificationDate: updatedAt } });
      setCollectionMetadata((current) => ({ ...current, updatedAt })); setIsDirty(false); setStatusMessage('Eigene Stammdaten wurden als PDF erstellt.');
    } catch { setStatusMessage('Die PDF konnte nicht erstellt werden.'); } finally { setIsExporting(false); }
  }

  return <div className="partner-editor">
    <h1 id="master-data-title">Eigene Daten</h1><p className="intro master-data-intro">Erstelle eine übersichtliche Sammlung deiner eigenen Unternehmens-, Kontakt-, Steuer-, Register- und Bankdaten. Die Datensätze können später gezielt als Absender- und Herausgeberdaten in Belege24-Dokumenten verwendet werden.</p>
    <CatalogCollectionActions isExporting={isExporting} onLoadPdf={handleLoadPdf} onNewCollection={handleNewCollection} ariaLabel="Eigene Unternehmensstammdaten verwalten" />
    {hasStartedCollection && hasRecords && <><div className="catalog-collection-divider" aria-hidden="true" /><OwnDataMasterDataToolbar activeRecordId={draftSourceId} records={state.records} searchQuery={searchQuery} searchResults={searchResults} onChangeSearch={setSearchQuery} onSelectRecord={requestSelectRecord} /><span className="catalog-status-for-screenreaders" aria-live="polite">{statusMessage || (isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert')}</span></>}
    {hasStartedCollection && (draft ? <section className="partner-editor-section own-data-editor-section" aria-labelledby="own-data-form-title"><div className="catalog-new-entry-action"><button className="partner-button is-primary" type="button" onClick={handleCreate}>Unternehmen anlegen</button></div><div className="own-data-editor-heading"><h2 id="own-data-form-title">{draftSourceId ? 'Unternehmen bearbeiten' : 'Neues Unternehmen anlegen'}</h2></div><OwnDataForm record={draft} entryStatus={!draftSourceId ? 'new' : isDraftDirty ? 'edited' : 'saved'} companyInputRef={companyInputRef} onUpdateField={updateDraft} actions={<><div className="catalog-item-form-save-actions"><button className="partner-button is-primary" type="button" onClick={handleSave}>Speichern</button><button className="partner-button" type="button" onClick={handleSaveAndCreate}>Speichern & neues Unternehmen</button>{canDiscardDraft && <button className="partner-button" type="button" onClick={handleDiscard}>{draftSourceId ? 'Änderungen verwerfen' : 'Entwurf verwerfen'}</button>}</div>{draftSourceId && <span className="catalog-item-form-delete-action"><button className="partner-button" type="button" onClick={handleDelete}>Löschen</button></span>}</>} /></section> : <section className="partner-editor-section own-data-new-entry"><button className="partner-button is-primary" type="button" onClick={handleCreate}>Unternehmen anlegen</button></section>)}
    {hasStartedCollection && <OwnDataMasterDataDocument records={state.records} pagesRef={previewPagesRef} toolbar={<CatalogExportAction isExporting={isExporting} onCreatePdf={handleCreatePdf} ariaLabel="Eigene Unternehmensstammdaten exportieren" />} />}
    <Dialog action={dialog} onCancel={() => setDialog(null)} onConfirm={handleConfirm} />
  </div>;
}
