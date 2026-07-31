import { useMemo, useReducer, useRef, useState } from 'react';
import {
  createDeliveryAddress, createPartner, createPartnerEditorState, duplicateDeliveryAddress,
  getPartnerDisplayName, matchesPartnerSearch, partnerEditorReducer,
} from '../../masterData/partnerModel.js';
import {
  createPartnerMasterDataCollectionMetadata, createPartnerMasterDataDocument, getPartnerMasterDataPdfFilename,
  importPartnerMasterDataPdf, PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME,
} from '../../masterData/partnerMasterDataContract.js';
import { requestPdfDownload } from '../../utils/requestPdfDownload.js';
import { CatalogCollectionActions, CatalogExportAction } from './CatalogItemMasterDataActions.jsx';
import PartnerForm from './PartnerForm.jsx';
import PartnerMasterDataDocument from './PartnerMasterDataDocument.jsx';
import PartnerMasterDataToolbar from './PartnerMasterDataToolbar.jsx';

function Dialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="dialog" aria-modal="true" aria-labelledby="partner-dialog-title"><h2 id="partner-dialog-title">{action.title}</h2><p>{action.message}</p><div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>{action.cancelLabel || 'Abbrechen'}</button><button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel || 'Bestätigen'}</button></div></section></div>;
}

function clonePartner(partner) {
  return JSON.parse(JSON.stringify(partner));
}

function updateAtPath(value, path, nextValue) {
  const [key, ...remaining] = path;
  if (!key) return nextValue;
  return { ...value, [key]: remaining.length ? updateAtPath(value[key], remaining, nextValue) : nextValue };
}

export default function PartnerMasterDataEditor() {
  const [state, dispatch] = useReducer(partnerEditorReducer, undefined, createPartnerEditorState);
  const [searchQuery, setSearchQuery] = useState('');
  const [dialog, setDialog] = useState(null);
  const [collectionMetadata, setCollectionMetadata] = useState(createPartnerMasterDataCollectionMetadata);
  const [isExporting, setIsExporting] = useState(false);
  const [isDirty, setIsDirty] = useState(true);
  const [hasStartedCollection, setHasStartedCollection] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [draft, setDraft] = useState(null);
  const [draftSourceId, setDraftSourceId] = useState(null);
  const [draftBaseline, setDraftBaseline] = useState(null);
  const companyInputRef = useRef(null);
  const previewPagesRef = useRef(null);
  const hasPartners = state.partners.length > 0;
  const isDraftDirty = Boolean(draft && (!draftBaseline || JSON.stringify(draft) !== JSON.stringify(draftBaseline)));
  const canDiscardDraft = Boolean(draft && (!draftSourceId || isDraftDirty));
  const searchResults = useMemo(() => state.partners.filter((partner) => matchesPartnerSearch(partner, searchQuery)), [searchQuery, state.partners]);

  function focusCompanyField() { window.requestAnimationFrame(() => companyInputRef.current?.focus()); }
  function clearDraft() { setDraft(null); setDraftSourceId(null); setDraftBaseline(null); }
  function createPartnerDraft() {
    const nextDraft = createPartner();
    setDraft(nextDraft);
    setDraftSourceId(null);
    setDraftBaseline(clonePartner(nextDraft));
    setSearchQuery('');
    focusCompanyField();
  }
  function openSavedPartner(partnerId) {
    const partner = state.partners.find((candidate) => candidate.id === partnerId);
    if (!partner) return;
    dispatch({ type: 'select', partnerId });
    setDraft(clonePartner(partner));
    setDraftSourceId(partnerId);
    setDraftBaseline(clonePartner(partner));
    focusCompanyField();
  }
  function requestSelectPartner(partnerId) {
    if (draft && isDraftDirty) {
      setDialog({ kind: 'discard-draft', partnerId, title: 'Ungespeicherte Änderungen', message: 'Deine Änderungen wurden noch nicht gespeichert. Möchtest du sie verwerfen und den anderen Partner öffnen?', cancelLabel: 'Weiter bearbeiten', confirmLabel: 'Änderungen verwerfen' });
      return;
    }
    openSavedPartner(partnerId);
  }
  function handleCreatePartner() {
    if (draft && isDraftDirty) {
      setDialog({ kind: 'discard-and-create', title: 'Ungespeicherte Änderungen', message: 'Deine Änderungen wurden noch nicht gespeichert. Möchtest du sie verwerfen und einen neuen Partner anlegen?', cancelLabel: 'Weiter bearbeiten', confirmLabel: 'Änderungen verwerfen' });
      return;
    }
    createPartnerDraft();
  }
  function updateDraft(path, value) { setDraft((current) => current ? updateAtPath(current, path, value) : current); }
  function updateDraftCompanyName(value) {
    setDraft((current) => {
      if (!current) return current;
      const shouldUpdateMainAddress = !current.mainAddress.companyName || current.mainAddress.companyName === current.companyName;
      return { ...current, companyName: value, mainAddress: shouldUpdateMainAddress ? { ...current.mainAddress, companyName: value } : current.mainAddress };
    });
  }
  function updateDraftDelivery(addressId, field, value) {
    setDraft((current) => current ? { ...current, deliveryAddresses: current.deliveryAddresses.map((address) => address.id === addressId ? { ...address, [field]: value } : address) } : current);
  }
  function addDraftDelivery() { setDraft((current) => current ? { ...current, deliveryAddresses: [...current.deliveryAddresses, createDeliveryAddress()] } : current); }
  function duplicateDraftDelivery(addressId) {
    setDraft((current) => {
      if (!current) return current;
      const index = current.deliveryAddresses.findIndex((address) => address.id === addressId);
      if (index === -1) return current;
      return { ...current, deliveryAddresses: [...current.deliveryAddresses.slice(0, index + 1), duplicateDeliveryAddress(current.deliveryAddresses[index]), ...current.deliveryAddresses.slice(index + 1)] };
    });
  }
  function moveDraftDelivery(addressId, direction) {
    setDraft((current) => {
      if (!current) return current;
      const fromIndex = current.deliveryAddresses.findIndex((address) => address.id === addressId);
      const toIndex = fromIndex + direction;
      if (fromIndex === -1 || toIndex < 0 || toIndex >= current.deliveryAddresses.length) return current;
      const deliveryAddresses = [...current.deliveryAddresses];
      [deliveryAddresses[fromIndex], deliveryAddresses[toIndex]] = [deliveryAddresses[toIndex], deliveryAddresses[fromIndex]];
      return { ...current, deliveryAddresses };
    });
  }
  function requestDeleteDelivery(address) {
    setDialog({ kind: 'delete-delivery', addressId: address.id, title: 'Lieferanschrift löschen?', message: `Möchtest du die Lieferanschrift „${address.label || 'Unbenannte Lieferanschrift'}“ wirklich löschen?`, confirmLabel: 'Lieferanschrift löschen' });
  }
  function persistDraft(message) {
    if (!draft) return false;
    dispatch({ type: 'upsert', partner: draft });
    setDraftSourceId(draft.id);
    setDraftBaseline(clonePartner(draft));
    setIsDirty(true);
    setStatusMessage(message);
    return true;
  }
  function handleSaveDraft() { persistDraft('Partner wurde gespeichert.'); }
  function handleSaveAndCreate() { if (persistDraft('Partner wurde gespeichert. Neuer Partner kann angelegt werden.')) createPartnerDraft(); }
  function handleDeleteDraft() {
    if (!draft || !draftSourceId) return;
    setDialog({ kind: 'delete-partner', partnerId: draftSourceId, title: 'Partner löschen?', message: `Möchtest du „${getPartnerDisplayName(draft)}“ wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`, confirmLabel: 'Partner löschen' });
  }
  function handleDiscardDraft() {
    if (!draft) return;
    if (!draftSourceId) setDialog({ kind: 'discard-new', title: 'Entwurf verwerfen?', message: 'Alle Eingaben dieses noch nicht gespeicherten Partners gehen verloren.', confirmLabel: 'Entwurf verwerfen' });
    else if (isDraftDirty) setDialog({ kind: 'discard-changes', title: 'Änderungen verwerfen?', message: 'Alle seit dem letzten Speichern vorgenommenen Änderungen gehen verloren.', confirmLabel: 'Änderungen verwerfen' });
  }
  function applyNewCollection() {
    dispatch({ type: 'reset-collection' });
    clearDraft();
    setCollectionMetadata(createPartnerMasterDataCollectionMetadata());
    setSearchQuery('');
    setIsDirty(true);
    setHasStartedCollection(true);
    setStatusMessage('Neue leere Partner-Stammdatensammlung wurde erstellt.');
  }
  function handleNewCollection() {
    if (!hasStartedCollection && !hasPartners && !draft) { applyNewCollection(); return; }
    setDialog({ kind: 'new', title: 'Neue Stammdatensammlung erstellen', message: 'Alle aktuellen Partnerdaten werden aus dem Editor entfernt. Eine nicht gespeicherte Sammlung kann danach nicht wiederhergestellt werden.', confirmLabel: 'Neue Sammlung erstellen' });
  }
  function applyImportedCollection(imported) {
    dispatch({ type: 'replace-collection', partners: imported.records, activePartnerId: null });
    clearDraft();
    setCollectionMetadata({ documentId: imported.documentId, createdAt: imported.createdAt, updatedAt: imported.updatedAt });
    setSearchQuery('');
    setIsDirty(false);
    setHasStartedCollection(true);
    setStatusMessage('Partner-Stammdaten wurden aus der PDF geladen.');
  }
  async function handleLoadPdf(file) {
    if (file.type && file.type !== 'application/pdf') { setStatusMessage('Bitte wähle eine PDF-Datei aus.'); return; }
    let result;
    try { result = await importPartnerMasterDataPdf(await file.arrayBuffer()); } catch { setStatusMessage('Die Partner-Stammdaten konnten nicht geladen werden.'); return; }
    if (result.status !== 'valid') { setStatusMessage(result.message); return; }
    if (!hasStartedCollection && !hasPartners && !draft && !isDraftDirty) { applyImportedCollection(result.document); return; }
    setDialog({ kind: 'import', document: result.document, title: 'Vorhandene Sammlung ersetzen', message: 'Im Editor befinden sich bereits Partnerdaten. Beim Laden der PDF wird die aktuelle Sammlung vollständig ersetzt.', cancelLabel: 'Import abbrechen', confirmLabel: 'Vorhandene Sammlung ersetzen' });
  }
  function handleConfirm() {
    const action = dialog;
    setDialog(null);
    if (!action) return;
    if (action.kind === 'discard-and-create') { clearDraft(); createPartnerDraft(); }
    if (action.kind === 'discard-draft') openSavedPartner(action.partnerId);
    if (action.kind === 'discard-new') { clearDraft(); setStatusMessage('Entwurf wurde verworfen.'); }
    if (action.kind === 'discard-changes' && draftBaseline) { setDraft(clonePartner(draftBaseline)); setStatusMessage('Änderungen wurden verworfen.'); }
    if (action.kind === 'delete-delivery') { setDraft((current) => current ? { ...current, deliveryAddresses: current.deliveryAddresses.filter((address) => address.id !== action.addressId) } : current); setStatusMessage('Lieferanschrift wurde gelöscht.'); }
    if (action.kind === 'delete-partner') { dispatch({ type: 'delete', partnerId: action.partnerId }); clearDraft(); setSearchQuery(''); setIsDirty(true); setStatusMessage('Partner wurde gelöscht.'); }
    if (action.kind === 'new') applyNewCollection();
    if (action.kind === 'import') applyImportedCollection(action.document);
  }
  async function handleCreatePdf() {
    const updatedAt = new Date().toISOString();
    const exportRoot = previewPagesRef.current;
    const firstPage = exportRoot?.querySelector('.partner-document-page');
    if (!firstPage || !exportRoot) { setStatusMessage('Die PDF konnte nicht erstellt werden.'); return; }
    setIsExporting(true);
    try {
      const document = createPartnerMasterDataDocument({ records: state.partners, ...collectionMetadata, updatedAt });
      await requestPdfDownload({ sheet: firstPage, exportRoot, documentType: 'masterDataPartners', filename: getPartnerMasterDataPdfFilename(new Date(updatedAt)), jsonAttachment: { fileName: PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME, document, description: 'Belege24 Partner-Stammdaten', creator: 'Belege24', subject: 'Belege24 Partner-Stammdaten', keywords: ['belege24.master-data', 'schema-version:1', 'master-data-type:partners'], creationDate: updatedAt, modificationDate: updatedAt } });
      setCollectionMetadata((current) => ({ ...current, updatedAt }));
      setIsDirty(false);
      setStatusMessage('Partner-Stammdaten wurden als PDF erstellt.');
    } catch { setStatusMessage('Die PDF konnte nicht erstellt werden.'); } finally { setIsExporting(false); }
  }

  return <div className="partner-editor">
    <h1 id="master-data-title">Partner und Empfänger</h1>
    <p className="intro master-data-intro">Erstelle eine übersichtliche Sammlung deiner Kunden, Lieferanten und sonstigen Geschäftspartner. Hauptanschriften, Lieferanschriften, Kontakt-, Steuer- und Bankdaten können später gezielt in Belege24-Dokumenten verwendet werden.</p>
    <CatalogCollectionActions isExporting={isExporting} onLoadPdf={handleLoadPdf} onNewCollection={handleNewCollection} ariaLabel="Partner- und Empfängerstammdaten verwalten" />
    {hasStartedCollection && hasPartners && <><div className="catalog-collection-divider" aria-hidden="true" /><PartnerMasterDataToolbar activePartnerId={draftSourceId} partners={state.partners} searchQuery={searchQuery} searchResults={searchResults} onChangeSearch={setSearchQuery} onSelectPartner={requestSelectPartner} /><span className="catalog-status-for-screenreaders" aria-live="polite">{statusMessage || (isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert')}</span></>}
    {hasStartedCollection && (draft ? <section className="partner-editor-section partner-master-editor-section" aria-label="Partner bearbeiten"><PartnerForm partner={draft} entryStatus={!draftSourceId ? 'new' : isDraftDirty ? 'edited' : 'saved'} companyInputRef={companyInputRef} onCompanyNameChange={updateDraftCompanyName} onUpdateField={updateDraft} onAddDeliveryAddress={addDraftDelivery} onUpdateDeliveryAddress={updateDraftDelivery} onDuplicateDeliveryAddress={duplicateDraftDelivery} onDeleteDeliveryAddress={requestDeleteDelivery} onMoveDeliveryAddress={moveDraftDelivery} actions={<><div className="catalog-item-form-save-actions"><button className="partner-button is-primary" type="button" onClick={handleSaveDraft}>Speichern</button><button className="partner-button" type="button" onClick={handleSaveAndCreate}>Speichern & neuer Partner</button>{canDiscardDraft && <button className="partner-button" type="button" onClick={handleDiscardDraft}>{draftSourceId ? 'Änderungen verwerfen' : 'Entwurf verwerfen'}</button>}</div>{draftSourceId && <span className="catalog-item-form-delete-action"><button className="partner-button" type="button" onClick={handleDeleteDraft}>Löschen</button></span>}</>} /></section> : <section className="partner-editor-section partner-master-new-entry"><button className="partner-button is-primary" type="button" onClick={handleCreatePartner}>Partner anlegen</button></section>)}
    {hasStartedCollection && <PartnerMasterDataDocument partners={state.partners} pagesRef={previewPagesRef} toolbar={<CatalogExportAction isExporting={isExporting} onCreatePdf={handleCreatePdf} ariaLabel="Partner- und Empfängerstammdaten exportieren" />} />}
    <Dialog action={dialog} onCancel={() => setDialog(null)} onConfirm={handleConfirm} />
  </div>;
}
