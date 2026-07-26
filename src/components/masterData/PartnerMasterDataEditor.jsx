import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {
  createPartnerEditorState,
  getPartnerDisplayName,
  matchesPartnerSearch,
  partnerEditorReducer,
} from '../../masterData/partnerModel.js';
import {
  createPartnerMasterDataCollectionMetadata,
  createPartnerMasterDataDocument,
  getPartnerMasterDataPdfFilename,
  importPartnerMasterDataPdf,
  PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME,
} from '../../masterData/partnerMasterDataContract.js';
import { requestPdfDownload } from '../../utils/requestPdfDownload.js';
import PartnerForm from './PartnerForm.jsx';
import PartnerMasterDataDocument from './PartnerMasterDataDocument.jsx';
import PartnerMasterDataDocumentToolbar from './PartnerMasterDataDocumentToolbar.jsx';
import PartnerMasterDataToolbar from './PartnerMasterDataToolbar.jsx';

function ConfirmDialog({ confirmation, onCancel, onConfirm }) {
  if (!confirmation) {
    return null;
  }

  return (
    <div className="partner-confirmation-backdrop">
      <section className="partner-confirmation" role="alertdialog" aria-modal="true" aria-labelledby="partner-confirmation-title">
        <h2 id="partner-confirmation-title">{confirmation.title}</h2>
        <p>{confirmation.message}</p>
        <div className="partner-confirmation-actions">
          <button className="partner-button" type="button" autoFocus onClick={onCancel}>Abbrechen</button>
          <button className="partner-button is-primary" type="button" onClick={onConfirm}>Löschen</button>
        </div>
      </section>
    </div>
  );
}

function CollectionActionDialog({ action, onCancel, onConfirm }) {
  if (!action) return null;

  return (
    <div className="partner-confirmation-backdrop">
      <section className="partner-confirmation" role="alertdialog" aria-modal="true" aria-labelledby="partner-collection-action-title">
        <h2 id="partner-collection-action-title">{action.title}</h2>
        <p>{action.message}</p>
        <div className="partner-confirmation-actions">
          <button className="partner-button" type="button" autoFocus onClick={onCancel}>{action.cancelLabel}</button>
          <button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel}</button>
        </div>
      </section>
    </div>
  );
}

export default function PartnerMasterDataEditor() {
  const [state, dispatch] = useReducer(partnerEditorReducer, undefined, createPartnerEditorState);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [collectionAction, setCollectionAction] = useState(null);
  const [collectionMetadata, setCollectionMetadata] = useState(createPartnerMasterDataCollectionMetadata);
  const [isExporting, setIsExporting] = useState(false);
  const [isDirty, setIsDirty] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const companyInputRef = useRef(null);
  const previewPagesRef = useRef(null);
  const activePartner = state.partners.find((partner) => partner.id === state.activePartnerId) ?? state.partners[0];
  const searchResults = useMemo(
    () => state.partners.filter((partner) => matchesPartnerSearch(partner, searchQuery)),
    [searchQuery, state.partners],
  );

  useEffect(() => {
    if (searchQuery && !searchResults.some((partner) => partner.id === activePartner.id)) {
      setStatusMessage('Der aktuell bearbeitete Partner ist nicht Teil des Suchergebnisses.');
    }
  }, [activePartner.id, searchQuery, searchResults]);

  function focusCompanyField() {
    window.requestAnimationFrame(() => companyInputRef.current?.focus());
  }

  function applyPartnerChange(action) {
    dispatch(action);
    setIsDirty(true);
  }

  function handleCreatePartner() {
    applyPartnerChange({ type: 'create' });
    setSearchQuery('');
    setStatusMessage('Neuer leerer Partner wurde angelegt.');
    focusCompanyField();
  }

  function handleDuplicatePartner() {
    applyPartnerChange({ type: 'duplicate', partnerId: activePartner.id });
    setSearchQuery('');
    setStatusMessage(`${getPartnerDisplayName(activePartner)} wurde dupliziert.`);
  }

  function handleDeletePartner() {
    setConfirmation({
      kind: 'partner',
      partnerId: activePartner.id,
      title: 'Partner löschen',
      message: `Möchtest du „${getPartnerDisplayName(activePartner)}“ wirklich löschen?`,
    });
  }

  function handleDeleteDeliveryAddress(address) {
    setConfirmation({
      kind: 'delivery',
      partnerId: activePartner.id,
      addressId: address.id,
      title: 'Lieferanschrift löschen',
      message: `Möchtest du die Lieferanschrift „${address.label || 'Unbenannte Lieferanschrift'}“ wirklich löschen?`,
    });
  }

  function handleConfirmDelete() {
    if (confirmation?.kind === 'partner') {
      applyPartnerChange({ type: 'delete', partnerId: confirmation.partnerId });
      setSearchQuery('');
      setStatusMessage('Partner wurde gelöscht.');
      focusCompanyField();
    }

    if (confirmation?.kind === 'delivery') {
      applyPartnerChange({ type: 'delete-delivery', partnerId: confirmation.partnerId, addressId: confirmation.addressId });
      setStatusMessage('Lieferanschrift wurde gelöscht.');
    }

    setConfirmation(null);
  }

  async function handleCreatePdf() {
    const updatedAt = new Date().toISOString();
    const exportDocument = createPartnerMasterDataDocument({
      records: state.partners,
      documentId: collectionMetadata.documentId,
      createdAt: collectionMetadata.createdAt,
      updatedAt,
    });
    const exportRoot = previewPagesRef.current;
    const firstPage = exportRoot?.querySelector('.partner-document-page');

    if (!firstPage || !exportRoot) {
      setStatusMessage('Die PDF konnte nicht erstellt werden.');
      return;
    }

    setIsExporting(true);
    try {
      await requestPdfDownload({
        sheet: firstPage,
        exportRoot,
        documentType: 'masterDataPartners',
        filename: getPartnerMasterDataPdfFilename(new Date(updatedAt)),
        jsonAttachment: {
          fileName: PARTNER_MASTER_DATA_ATTACHMENT_FILE_NAME,
          document: exportDocument,
          description: 'Belege24 Partner-Stammdaten',
          creator: 'Belege24',
          subject: 'Belege24 Partner-Stammdaten',
          keywords: ['belege24.master-data', 'schema-version:1', 'master-data-type:partners'],
          creationDate: updatedAt,
          modificationDate: updatedAt,
        },
      });
      setCollectionMetadata((current) => ({ ...current, updatedAt }));
      setIsDirty(false);
      setStatusMessage('Partner-Stammdaten wurden als PDF erstellt.');
    } catch {
      setStatusMessage('Die PDF konnte nicht erstellt werden.');
    } finally {
      setIsExporting(false);
    }
  }

  async function handleLoadPdf(file) {
    if (file.type && file.type !== 'application/pdf') {
      setStatusMessage('Bitte wähle eine PDF-Datei aus.');
      return;
    }

    let result;
    try {
      result = await importPartnerMasterDataPdf(await file.arrayBuffer());
    } catch {
      setStatusMessage('Die Partner-Stammdaten konnten nicht geladen werden.');
      return;
    }
    if (result.status !== 'valid') {
      setStatusMessage(result.message);
      return;
    }

    setCollectionAction({
      kind: 'import',
      document: result.document,
      title: 'Vorhandene Sammlung ersetzen',
      message: 'Im Editor befinden sich bereits Partnerdaten. Beim Laden der PDF wird die aktuelle Sammlung vollständig ersetzt.',
      cancelLabel: 'Import abbrechen',
      confirmLabel: 'Vorhandene Sammlung ersetzen',
    });
  }

  function handleNewCollection() {
    setCollectionAction({
      kind: 'new',
      title: 'Neue Stammdatensammlung erstellen',
      message: 'Alle aktuellen Partnerdaten werden aus dem Editor entfernt. Eine nicht gespeicherte Sammlung kann danach nicht wiederhergestellt werden.',
      cancelLabel: 'Abbrechen',
      confirmLabel: 'Neue Sammlung erstellen',
    });
  }

  function handleConfirmCollectionAction() {
    if (collectionAction?.kind === 'import') {
      const imported = collectionAction.document;
      dispatch({ type: 'replace-collection', partners: imported.records, activePartnerId: imported.records[0].id });
      setCollectionMetadata({
        documentId: imported.documentId,
        createdAt: imported.createdAt,
        updatedAt: imported.updatedAt,
      });
      setSearchQuery('');
      setIsDirty(false);
      setStatusMessage('Partner-Stammdaten wurden aus der PDF geladen.');
      focusCompanyField();
    }

    if (collectionAction?.kind === 'new') {
      dispatch({ type: 'reset-collection' });
      setCollectionMetadata(createPartnerMasterDataCollectionMetadata());
      setSearchQuery('');
      setIsDirty(true);
      setStatusMessage('Neue Partner-Stammdatensammlung wurde erstellt.');
      focusCompanyField();
    }

    setCollectionAction(null);
  }

  function handlePrint() {
    document.body.classList.add('master-data-print-mode');
    window.print();
    const cleanup = () => {
      document.body.classList.remove('master-data-print-mode');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  return (
    <div className="partner-editor">
      <h1 id="master-data-title">Partner und Empfänger</h1>
      <p className="intro master-data-intro">
        Erstelle eine übersichtliche Sammlung deiner Kunden, Lieferanten und sonstigen Geschäftspartner.
        Hauptanschriften, Lieferanschriften, Kontakt-, Steuer- und Bankdaten können später gezielt in
        Belege24-Dokumenten verwendet werden.
      </p>
      <p className="partner-example-note">
        Zu Beginn ist ein Beispieldatensatz enthalten. Er kann direkt bearbeitet, dupliziert oder gelöscht werden.
      </p>
      <PartnerMasterDataDocumentToolbar
        isExporting={isExporting}
        onCreatePdf={handleCreatePdf}
        onLoadPdf={handleLoadPdf}
        onNewCollection={handleNewCollection}
        onPrint={handlePrint}
      />

      <PartnerMasterDataToolbar
        activePartnerId={activePartner.id}
        partners={state.partners}
        searchQuery={searchQuery}
        searchResults={searchResults}
        onChangeSearch={setSearchQuery}
        onSelectPartner={(partnerId) => dispatch({ type: 'select', partnerId })}
        onCreatePartner={handleCreatePartner}
        onDuplicatePartner={handleDuplicatePartner}
        onDeletePartner={handleDeletePartner}
      />
      <p className="partner-live-status" aria-live="polite">{statusMessage}</p>
      <p className="partner-save-status" aria-live="polite">{isDirty ? 'Nicht gespeicherte Änderungen' : 'Als PDF gespeichert'}</p>

      <section className="partner-editor-section" aria-labelledby="partner-form-title">
        <div className="partner-editor-section-heading">
          <h2 id="partner-form-title">Partner bearbeiten</h2>
          <p>{getPartnerDisplayName(activePartner)}</p>
        </div>
        <PartnerForm
          partner={activePartner}
          companyInputRef={companyInputRef}
          onCompanyNameChange={(value) => applyPartnerChange({ type: 'update-company-name', partnerId: activePartner.id, value })}
          onUpdateField={(path, value) => applyPartnerChange({ type: 'update-field', partnerId: activePartner.id, path, value })}
          onAddDeliveryAddress={() => applyPartnerChange({ type: 'add-delivery', partnerId: activePartner.id })}
          onUpdateDeliveryAddress={(addressId, field, value) => applyPartnerChange({
            type: 'update-delivery', partnerId: activePartner.id, addressId, field, value,
          })}
          onDuplicateDeliveryAddress={(addressId) => applyPartnerChange({
            type: 'duplicate-delivery', partnerId: activePartner.id, addressId,
          })}
          onDeleteDeliveryAddress={handleDeleteDeliveryAddress}
          onMoveDeliveryAddress={(addressId, direction) => applyPartnerChange({
            type: 'move-delivery', partnerId: activePartner.id, addressId, direction,
          })}
        />
      </section>

      <PartnerMasterDataDocument partners={state.partners} pagesRef={previewPagesRef} />
      <ConfirmDialog
        confirmation={confirmation}
        onCancel={() => setConfirmation(null)}
        onConfirm={handleConfirmDelete}
      />
      <CollectionActionDialog
        action={collectionAction}
        onCancel={() => setCollectionAction(null)}
        onConfirm={handleConfirmCollectionAction}
      />
    </div>
  );
}
