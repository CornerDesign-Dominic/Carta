import { useReducer, useRef, useState } from 'react';
import { createOwnDataEditorState, createOwnDataRecord, ownDataEditorReducer } from '../../masterData/ownDataModel.js';
import { createOwnDataMasterDataCollectionMetadata, createOwnDataMasterDataDocument, getOwnDataMasterDataPdfFilename, importOwnDataMasterDataPdf, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME } from '../../masterData/ownDataContract.js';
import { requestPdfDownload } from '../../utils/requestPdfDownload.js';
import { CatalogCollectionActions, CatalogExportAction } from './CatalogItemMasterDataActions.jsx';
import OwnDataForm from './OwnDataForm.jsx';
import OwnDataMasterDataDocument from './OwnDataMasterDataDocument.jsx';

function Dialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="dialog" aria-modal="true" aria-labelledby="own-data-dialog-title"><h2 id="own-data-dialog-title">{action.title}</h2><p>{action.message}</p><div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>{action.cancelLabel || 'Abbrechen'}</button><button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel || 'Bestätigen'}</button></div></section></div>;
}

function cloneRecord(record) { return JSON.parse(JSON.stringify(record)); }
function updateAtPath(value, path, nextValue) { const [key, ...remaining] = path; return !key ? nextValue : { ...value, [key]: remaining.length ? updateAtPath(value[key], remaining, nextValue) : nextValue }; }

export default function OwnDataMasterDataEditor() {
  const [state, dispatch] = useReducer(ownDataEditorReducer, undefined, createOwnDataEditorState);
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
  const hasRecord = state.records.length > 0;
  const isDraftDirty = Boolean(draft && (!draftBaseline || JSON.stringify(draft) !== JSON.stringify(draftBaseline)));
  const canDiscardDraft = Boolean(draft && (!draftSourceId || isDraftDirty));

  function focusCompanyField() { window.requestAnimationFrame(() => companyInputRef.current?.focus()); }
  function clearDraft() { setDraft(null); setDraftSourceId(null); setDraftBaseline(null); }
  function createRecordDraft() { const nextDraft = createOwnDataRecord(); setDraft(nextDraft); setDraftSourceId(null); setDraftBaseline(cloneRecord(nextDraft)); focusCompanyField(); }
  function updateDraft(path, value) { setDraft((current) => current ? updateAtPath(current, path, value) : current); }
  function persistDraft() {
    if (!draft) return false;
    dispatch({ type: 'upsert', record: draft }); setDraftSourceId(draft.id); setDraftBaseline(cloneRecord(draft)); setIsDirty(true); setStatusMessage('Unternehmen wurde übernommen.'); return true;
  }
  function handleDiscard() {
    if (!draft) return;
    if (!draftSourceId) setDialog({ kind: 'discard-new', title: 'Entwurf verwerfen?', message: 'Alle Eingaben dieses noch nicht übernommenen Unternehmens gehen verloren.', confirmLabel: 'Entwurf verwerfen' });
    else if (isDraftDirty) setDialog({ kind: 'discard-changes', title: 'Änderungen verwerfen?', message: 'Alle seit dem letzten Übernehmen vorgenommenen Änderungen gehen verloren.', confirmLabel: 'Änderungen verwerfen' });
  }
  function applyNewCollection() {
    dispatch({ type: 'reset-collection' }); clearDraft(); setCollectionMetadata(createOwnDataMasterDataCollectionMetadata()); setIsDirty(true); setHasStartedCollection(true); setStatusMessage('Neue leere Unternehmensstammdatensammlung wurde erstellt.'); createRecordDraft();
  }
  function handleNewCollection() {
    if (!hasStartedCollection && !hasRecord && !draft) { applyNewCollection(); return; }
    setDialog({ kind: 'new', title: 'Neue Stammdatensammlung erstellen', message: 'Die aktuellen Unternehmensdaten werden aus dem Editor entfernt. Nicht übernommene Eingaben können danach nicht wiederhergestellt werden.', confirmLabel: 'Neue Sammlung erstellen' });
  }
  function applyImportedCollection(imported) {
    const record = imported.records[0] ?? null;
    dispatch({ type: 'replace-collection', records: record ? [record] : [], activeRecordId: record?.id ?? null });
    setCollectionMetadata({ documentId: imported.documentId, createdAt: imported.createdAt, updatedAt: imported.updatedAt });
    if (record) { setDraft(cloneRecord(record)); setDraftSourceId(record.id); setDraftBaseline(cloneRecord(record)); } else clearDraft();
    setIsDirty(false); setHasStartedCollection(true); setStatusMessage(imported.records.length > 1 ? 'Eigene Stammdaten wurden geladen. Zusätzliche Unternehmen wurden nicht übernommen.' : 'Eigene Stammdaten wurden aus der PDF geladen.');
  }
  async function handleLoadPdf(file) {
    if (file.type && file.type !== 'application/pdf') { setStatusMessage('Bitte wähle eine PDF-Datei aus.'); return; }
    let result; try { result = await importOwnDataMasterDataPdf(await file.arrayBuffer()); } catch { setStatusMessage('Die eigenen Stammdaten konnten nicht geladen werden.'); return; }
    if (result.status !== 'valid') { setStatusMessage(result.message); return; }
    if (!hasStartedCollection && !hasRecord && !draft && !isDraftDirty) { applyImportedCollection(result.document); return; }
    setDialog({ kind: 'import', document: result.document, title: 'Vorhandene Sammlung ersetzen', message: 'Im Editor befindet sich bereits ein Stammdatenblatt. Beim Laden der PDF wird es vollständig ersetzt.', cancelLabel: 'Import abbrechen', confirmLabel: 'Vorhandene Sammlung ersetzen' });
  }
  function handleConfirm() {
    const action = dialog; setDialog(null); if (!action) return;
    if (action.kind === 'discard-new') { dispatch({ type: 'reset-collection' }); clearDraft(); setCollectionMetadata(createOwnDataMasterDataCollectionMetadata()); setIsDirty(true); setHasStartedCollection(false); setStatusMessage('Entwurf wurde verworfen.'); }
    if (action.kind === 'discard-changes' && draftBaseline) { setDraft(cloneRecord(draftBaseline)); setStatusMessage('Änderungen wurden verworfen.'); }
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
    <h1 id="master-data-title">Eigene Daten</h1><p className="intro master-data-intro">Erfasse deine eigenen Unternehmens-, Kontakt-, Steuer-, Register- und Bankdaten als Absender- und Herausgeberdaten für Belege24-Dokumente.</p>
    <CatalogCollectionActions isExporting={isExporting} onLoadPdf={handleLoadPdf} onNewCollection={handleNewCollection} ariaLabel="Eigene Unternehmensstammdaten verwalten" />
    {hasStartedCollection && draft && <section className="partner-editor-section own-data-editor-section" aria-labelledby="own-data-form-title"><div className="own-data-editor-heading"><h2 id="own-data-form-title">{draftSourceId ? 'Eigene Daten bearbeiten' : 'Eigene Daten anlegen'}</h2></div><OwnDataForm record={draft} entryStatus={!draftSourceId ? 'new' : isDraftDirty ? 'edited' : 'saved'} companyInputRef={companyInputRef} onUpdateField={updateDraft} actions={<div className="catalog-item-form-save-actions"><button className="partner-button is-primary" type="button" onClick={persistDraft}>Übernehmen</button>{canDiscardDraft && <button className="partner-button" type="button" onClick={handleDiscard}>{draftSourceId ? 'Änderungen verwerfen' : 'Entwurf verwerfen'}</button>}</div>} /></section>}
    {hasStartedCollection && <><span className="catalog-status-for-screenreaders" aria-live="polite">{statusMessage || (isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert')}</span><OwnDataMasterDataDocument records={state.records} pagesRef={previewPagesRef} toolbar={<CatalogExportAction isExporting={isExporting} onCreatePdf={handleCreatePdf} ariaLabel="Eigene Unternehmensstammdaten exportieren" />} /></>}
    <Dialog action={dialog} onCancel={() => setDialog(null)} onConfirm={handleConfirm} />
  </div>;
}
