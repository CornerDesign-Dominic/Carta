import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { createOwnDataEditorState, getOwnDataDisplayName, matchesOwnDataSearch, ownDataEditorReducer } from '../../masterData/ownDataModel.js';
import {
  createOwnDataMasterDataCollectionMetadata, createOwnDataMasterDataDocument, getOwnDataMasterDataPdfFilename,
  importOwnDataMasterDataPdf, OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME,
} from '../../masterData/ownDataContract.js';
import { requestPdfDownload } from '../../utils/requestPdfDownload.js';
import OwnDataForm from './OwnDataForm.jsx';
import OwnDataMasterDataDocument from './OwnDataMasterDataDocument.jsx';
import OwnDataMasterDataToolbar from './OwnDataMasterDataToolbar.jsx';
import PartnerMasterDataDocumentToolbar from './PartnerMasterDataDocumentToolbar.jsx';

function ConfirmationDialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="alertdialog" aria-modal="true" aria-labelledby="own-data-confirmation-title">
    <h2 id="own-data-confirmation-title">{action.title}</h2><p>{action.message}</p><div className="partner-confirmation-actions">
      <button className="partner-button" type="button" autoFocus onClick={onCancel}>{action.cancelLabel || 'Abbrechen'}</button>
      <button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel || 'Löschen'}</button>
    </div>
  </section></div>;
}

export default function OwnDataMasterDataEditor() {
  const [state, dispatch] = useReducer(ownDataEditorReducer, undefined, createOwnDataEditorState);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [collectionMetadata, setCollectionMetadata] = useState(createOwnDataMasterDataCollectionMetadata);
  const [isExporting, setIsExporting] = useState(false);
  const [isDirty, setIsDirty] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const companyInputRef = useRef(null);
  const previewPagesRef = useRef(null);
  const activeRecord = state.records.find((record) => record.id === state.activeRecordId) ?? state.records[0];
  const searchResults = useMemo(() => state.records.filter((record) => matchesOwnDataSearch(record, searchQuery)), [searchQuery, state.records]);

  useEffect(() => {
    if (searchQuery && !searchResults.some((record) => record.id === activeRecord.id)) setStatusMessage('Das aktuell bearbeitete Unternehmen ist nicht Teil des Suchergebnisses.');
  }, [activeRecord.id, searchQuery, searchResults]);
  function focusCompanyField() { window.requestAnimationFrame(() => companyInputRef.current?.focus()); }
  function applyChange(action) { dispatch(action); setIsDirty(true); }
  function handleCreate() { applyChange({ type: 'create' }); setSearchQuery(''); setStatusMessage('Neues leeres Unternehmen wurde angelegt.'); focusCompanyField(); }
  function handleDuplicate() { applyChange({ type: 'duplicate', recordId: activeRecord.id }); setSearchQuery(''); setStatusMessage(`${getOwnDataDisplayName(activeRecord)} wurde dupliziert.`); }
  function handleDelete() { setConfirmation({ kind: 'delete', recordId: activeRecord.id, title: 'Unternehmen löschen', message: `Möchtest du „${getOwnDataDisplayName(activeRecord)}“ wirklich löschen?` }); }
  function handleNewCollection() { setConfirmation({ kind: 'new', title: 'Neue Stammdatensammlung erstellen', message: 'Alle aktuellen Unternehmensdaten werden aus dem Editor entfernt. Eine nicht gespeicherte Sammlung kann danach nicht wiederhergestellt werden.', cancelLabel: 'Abbrechen', confirmLabel: 'Neue Sammlung erstellen' }); }
  function handleConfirm() {
    if (confirmation?.kind === 'delete') { applyChange({ type: 'delete', recordId: confirmation.recordId }); setSearchQuery(''); setStatusMessage('Unternehmen wurde gelöscht.'); focusCompanyField(); }
    if (confirmation?.kind === 'new') { dispatch({ type: 'reset-collection' }); setCollectionMetadata(createOwnDataMasterDataCollectionMetadata()); setSearchQuery(''); setIsDirty(true); setStatusMessage('Neue Stammdatensammlung wurde erstellt.'); focusCompanyField(); }
    if (confirmation?.kind === 'import') {
      const imported = confirmation.document;
      dispatch({ type: 'replace-collection', records: imported.records, activeRecordId: imported.records[0].id });
      setCollectionMetadata({ documentId: imported.documentId, createdAt: imported.createdAt, updatedAt: imported.updatedAt });
      setSearchQuery(''); setIsDirty(false); setStatusMessage('Eigene Stammdaten wurden aus der PDF geladen.'); focusCompanyField();
    }
    setConfirmation(null);
  }
  async function handleCreatePdf() {
    const updatedAt = new Date().toISOString();
    const exportRoot = previewPagesRef.current;
    const firstPage = exportRoot?.querySelector('.partner-document-page');
    if (!firstPage || !exportRoot) { setStatusMessage('Die PDF konnte nicht erstellt werden.'); return; }
    setIsExporting(true);
    try {
      const exportDocument = createOwnDataMasterDataDocument({ records: state.records, ...collectionMetadata, updatedAt });
      await requestPdfDownload({ sheet: firstPage, exportRoot, documentType: 'masterDataOwn', filename: getOwnDataMasterDataPdfFilename(new Date(updatedAt)), jsonAttachment: {
        fileName: OWN_DATA_MASTER_DATA_ATTACHMENT_FILE_NAME, document: exportDocument, description: 'Belege24 Eigene Unternehmensstammdaten', creator: 'Belege24', subject: 'Belege24 Eigene Unternehmensstammdaten',
        keywords: ['belege24.master-data', 'schema-version:1', 'master-data-type:ownData'], creationDate: updatedAt, modificationDate: updatedAt,
      } });
      setCollectionMetadata((current) => ({ ...current, updatedAt })); setIsDirty(false); setStatusMessage('Eigene Stammdaten wurden als PDF erstellt.');
    } catch { setStatusMessage('Die PDF konnte nicht erstellt werden.'); } finally { setIsExporting(false); }
  }
  async function handleLoadPdf(file) {
    if (file.type && file.type !== 'application/pdf') { setStatusMessage('Bitte wähle eine PDF-Datei aus.'); return; }
    let result;
    try { result = await importOwnDataMasterDataPdf(await file.arrayBuffer()); } catch { setStatusMessage('Die eigenen Stammdaten konnten nicht geladen werden.'); return; }
    if (result.status !== 'valid') { setStatusMessage(result.message); return; }
    setConfirmation({ kind: 'import', document: result.document, title: 'Vorhandene Sammlung ersetzen', message: 'Im Editor befinden sich bereits Unternehmensdaten. Beim Laden der PDF wird die aktuelle Sammlung vollständig ersetzt.', cancelLabel: 'Import abbrechen', confirmLabel: 'Vorhandene Sammlung ersetzen' });
  }
  function handlePrint() {
    document.body.classList.add('master-data-print-mode'); window.print();
    const cleanup = () => { document.body.classList.remove('master-data-print-mode'); window.removeEventListener('afterprint', cleanup); };
    window.addEventListener('afterprint', cleanup); window.setTimeout(cleanup, 1200);
  }
  return <div className="partner-editor">
    <h1 id="master-data-title">Eigene Daten</h1>
    <p className="intro master-data-intro">Erstelle eine übersichtliche Sammlung deiner eigenen Unternehmens-, Kontakt-, Steuer-, Register- und Bankdaten. Die Datensätze können später gezielt als Absender- und Herausgeberdaten in Belege24-Dokumenten verwendet werden.</p>
    <PartnerMasterDataDocumentToolbar labelPrefix="Eigene Unternehmensstammdaten" className="partner-document-toolbar" isExporting={isExporting} onCreatePdf={handleCreatePdf} onLoadPdf={handleLoadPdf} onNewCollection={handleNewCollection} onPrint={handlePrint} />
    <OwnDataMasterDataToolbar activeRecordId={activeRecord.id} records={state.records} searchQuery={searchQuery} searchResults={searchResults} onChangeSearch={setSearchQuery} onSelectRecord={(recordId) => dispatch({ type: 'select', recordId })} onCreateRecord={handleCreate} onDuplicateRecord={handleDuplicate} onDeleteRecord={handleDelete} />
    <p className="partner-live-status" aria-live="polite">{statusMessage}</p><p className="partner-save-status" aria-live="polite">{isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert'}</p>
    <section className="partner-editor-section" aria-labelledby="own-data-form-title"><div className="partner-editor-section-heading"><h2 id="own-data-form-title">Unternehmen bearbeiten</h2><p>{getOwnDataDisplayName(activeRecord)}</p></div>
      <OwnDataForm record={activeRecord} companyInputRef={companyInputRef} onCompanyNameChange={(value) => applyChange({ type: 'update-company-name', recordId: activeRecord.id, value })} onUpdateField={(path, value) => applyChange({ type: 'update-field', recordId: activeRecord.id, path, value })} />
    </section>
    <OwnDataMasterDataDocument records={state.records} pagesRef={previewPagesRef} />
    <ConfirmationDialog action={confirmation} onCancel={() => setConfirmation(null)} onConfirm={handleConfirm} />
  </div>;
}
