import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {
  createPartnerEditorState,
  getPartnerDisplayName,
  matchesPartnerSearch,
  partnerEditorReducer,
} from '../../masterData/partnerModel.js';
import PartnerForm from './PartnerForm.jsx';
import PartnerMasterDataDocument from './PartnerMasterDataDocument.jsx';
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

export default function PartnerMasterDataEditor() {
  const [state, dispatch] = useReducer(partnerEditorReducer, undefined, createPartnerEditorState);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const companyInputRef = useRef(null);
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

  function handleCreatePartner() {
    dispatch({ type: 'create' });
    setSearchQuery('');
    setStatusMessage('Neuer leerer Partner wurde angelegt.');
    focusCompanyField();
  }

  function handleDuplicatePartner() {
    dispatch({ type: 'duplicate', partnerId: activePartner.id });
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
      dispatch({ type: 'delete', partnerId: confirmation.partnerId });
      setSearchQuery('');
      setStatusMessage('Partner wurde gelöscht.');
      focusCompanyField();
    }

    if (confirmation?.kind === 'delivery') {
      dispatch({ type: 'delete-delivery', partnerId: confirmation.partnerId, addressId: confirmation.addressId });
      setStatusMessage('Lieferanschrift wurde gelöscht.');
    }

    setConfirmation(null);
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

      <section className="partner-editor-section" aria-labelledby="partner-form-title">
        <div className="partner-editor-section-heading">
          <h2 id="partner-form-title">Partner bearbeiten</h2>
          <p>{getPartnerDisplayName(activePartner)}</p>
        </div>
        <PartnerForm
          partner={activePartner}
          companyInputRef={companyInputRef}
          onCompanyNameChange={(value) => dispatch({ type: 'update-company-name', partnerId: activePartner.id, value })}
          onUpdateField={(path, value) => dispatch({ type: 'update-field', partnerId: activePartner.id, path, value })}
          onAddDeliveryAddress={() => dispatch({ type: 'add-delivery', partnerId: activePartner.id })}
          onUpdateDeliveryAddress={(addressId, field, value) => dispatch({
            type: 'update-delivery', partnerId: activePartner.id, addressId, field, value,
          })}
          onDuplicateDeliveryAddress={(addressId) => dispatch({
            type: 'duplicate-delivery', partnerId: activePartner.id, addressId,
          })}
          onDeleteDeliveryAddress={handleDeleteDeliveryAddress}
          onMoveDeliveryAddress={(addressId, direction) => dispatch({
            type: 'move-delivery', partnerId: activePartner.id, addressId, direction,
          })}
        />
      </section>

      <PartnerMasterDataDocument partners={state.partners} />
      <ConfirmDialog
        confirmation={confirmation}
        onCancel={() => setConfirmation(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
