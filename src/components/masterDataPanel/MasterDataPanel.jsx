import { useEffect, useMemo, useRef, useState } from 'react';
import { getCatalogItemTypeLabel, formatCatalogCurrency } from '../../masterData/catalogItemModel.js';
import { getOwnDataDisplayName } from '../../masterData/ownDataModel.js';
import { getPartnerDisplayName, getPartnerTypeLabel } from '../../masterData/partnerModel.js';
import {
  createMasterDataFileId,
  hasRecordIdConflict,
  MASTER_DATA_PANEL_TABS,
  readMasterDataPdf,
} from './masterDataPanelLoader.js';

const initialLoadedFiles = { ownData: [], partners: [], catalogItems: [] };

export function getSupportedMasterDataTabs(documentAdapter) {
  if (!documentAdapter) return MASTER_DATA_PANEL_TABS;

  return MASTER_DATA_PANEL_TABS.filter((tab) => (
    (tab.id === 'ownData' && typeof documentAdapter.applyOwnData === 'function')
    || (tab.id === 'partners' && typeof documentAdapter.applyPartner === 'function')
    || (tab.id === 'catalogItems' && typeof documentAdapter.addCatalogItems === 'function')
  ));
}

function MasterDataFileDropzone({ onFiles }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  return <div className={`master-data-file-dropzone${isDragging ? ' is-dragging' : ''}`} onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={(event) => { if (event.currentTarget === event.target) setIsDragging(false); }} onDrop={(event) => { event.preventDefault(); setIsDragging(false); onFiles([...event.dataTransfer.files]); }}>
    <input ref={inputRef} type="file" accept="application/pdf,.pdf" multiple hidden onChange={(event) => { onFiles([...event.target.files]); event.target.value = ''; }} />
    <button className="master-data-file-add-button" type="button" aria-label="PDF auswählen" onClick={() => inputRef.current?.click()}>+</button>
    <p>PDF ablegen / auswählen</p>
  </div>;
}

function MasterDataLoadedFiles({ files, onRemove }) {
  if (!files.length) return null;
  return <section className="master-data-loaded-files" aria-label="Geladene Stammdatenblätter"><h3>Geladene Dateien</h3><ul>{files.map((file) => <li key={file.id}><div><strong>{file.name}</strong><span>{file.typeLabel} · {file.records.length} {file.records.length === 1 ? 'Datensatz' : 'Datensätze'}</span></div><button type="button" onClick={() => onRemove(file)}>Entfernen</button></li>)}</ul></section>;
}

function OwnDataPanel({ appliedOwnData, documentAdapter, records, selectedId, onApply, onRemove, onSelect, onShowSelection }) {
  const appliedRecord = appliedOwnData && records.find((record) => record.id === appliedOwnData.recordId && record.sourceFileId === appliedOwnData.sourceFileId);

  if (appliedOwnData) {
    return <div className="master-data-panel-content master-data-panel-applied-content"><section className="master-data-applied-record" aria-label="Im Dokument verwendete eigene Daten"><span>Im Dokument verwendet{appliedOwnData.sourceFileRemoved ? ' – Quelldatei nicht mehr geladen' : ''}</span><strong>{appliedOwnData.companyName}</strong><small>{[appliedOwnData.city, appliedOwnData.sourceFileName].filter(Boolean).join(' · ')}</small></section><div className="master-data-panel-actions"><button className="partner-button is-primary" type="button" disabled={!appliedRecord || !documentAdapter} onClick={() => onApply(appliedRecord)}>Erneut übernehmen</button><button className="partner-button" type="button" onClick={onShowSelection}>Andere eigene Daten auswählen</button><button className="partner-button" type="button" onClick={onRemove}>Aus Dokument entfernen</button></div>{appliedOwnData.sourceFileRemoved && <p className="master-data-panel-note">Die Quelldatei wurde aus dem Panel entfernt. Die bereits übernommenen Daten bleiben im Dokument erhalten.</p>}</div>;
  }

  return <div className="master-data-panel-content"><div className="master-data-record-list own-data-panel-list">{records.length ? records.map((record) => <button className={selectedId === record.id ? 'is-selected' : undefined} type="button" aria-pressed={selectedId === record.id} key={record.id} onClick={() => onSelect(record.id)}><strong>{getOwnDataDisplayName(record)}</strong><span>{[record.address.city, record.taxAndRegister.vatId].filter(Boolean).join(' · ') || 'Keine weiteren Angaben'}</span><small>{record.sourceFileName}</small></button>) : null}</div><button className="partner-button is-primary" type="button" disabled={!selectedId || !documentAdapter} onClick={() => onApply()}>In Dokument übernehmen</button></div>;
}

function PartnerDataPanel({ partnerRoleLabel, records, selectedId, onSelect, onFutureAction }) {
  const [query, setQuery] = useState('');
  const visibleRecords = records.filter((record) => [record.companyName, record.mainAddress.city, record.customerNumber, record.supplierNumber].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(query.trim().toLocaleLowerCase('de-DE'))));
  return <div className="master-data-panel-content">{records.length > 0 && <><label className="master-data-panel-search"><span>Partner suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, Ort oder Nummer" /></label><div className="master-data-record-list">{visibleRecords.length ? visibleRecords.map((record) => <button className={selectedId === record.id ? 'is-selected' : undefined} type="button" aria-pressed={selectedId === record.id} key={record.id} onClick={() => onSelect(record.id)}><strong>{getPartnerTypeLabel(record.type)} – {getPartnerDisplayName(record)}</strong><span>{[record.mainAddress.city, record.customerNumber || record.supplierNumber, record.sourceFileName].filter(Boolean).join(' · ')}</span>{record.deliveryAddresses.length > 0 && <small>{record.deliveryAddresses.length} Lieferanschrift{record.deliveryAddresses.length === 1 ? '' : 'en'}</small>}</button>) : <p className="master-data-panel-empty">Keine passenden Partner vorhanden.</p>}</div></>}<button className="partner-button is-primary" type="button" disabled={!selectedId} onClick={onFutureAction}>Als {partnerRoleLabel} übernehmen</button></div>;
}

function deliveryAddressName(address) {
  return [address?.companyName, address?.city].filter(Boolean).join(' · ') || 'Unbenannte Lieferanschrift';
}

function DeliveryAddressPanel({ addresses, appliedDeliveryAddress, documentAdapter, disabled, onApply, onRemove }) {
  if (!documentAdapter?.canManageDeliveryAddresses) return null;

  return <section className="master-data-delivery-addresses" aria-label="Lieferanschrift"><h3>Lieferanschrift</h3>{addresses.length ? <><div className="master-data-record-list">{addresses.map((address) => <button className={appliedDeliveryAddress?.addressId === address.id ? 'is-selected' : undefined} type="button" disabled={disabled} aria-pressed={appliedDeliveryAddress?.addressId === address.id} key={address.id} onClick={() => onApply(address)}><strong>{deliveryAddressName(address)}</strong><span>{[address.attention, address.street && [address.street, address.houseNumber].filter(Boolean).join(' '), [address.postalCode, address.city].filter(Boolean).join(' ')].filter(Boolean).join(' · ')}</span></button>)}</div>{appliedDeliveryAddress && <button className="partner-button" type="button" disabled={disabled} onClick={onRemove}>Lieferanschrift entfernen</button>}</> : <p className="master-data-panel-empty">Für diesen Partner sind keine Lieferanschriften hinterlegt.</p>}</section>;
}

function AppliedPartnerPanel({ appliedPartnerData, appliedDeliveryAddress, documentAdapter, partnerRoleLabel, records, onApply, onApplyDeliveryAddress, onRemove, onRemoveDeliveryAddress, onShowSelection }) {
  const sourceRecord = records.find((record) => record.id === appliedPartnerData.recordId && record.sourceFileId === appliedPartnerData.sourceFileId);
  const appliedRecord = sourceRecord ?? appliedPartnerData.partnerRecord;
  const details = [appliedPartnerData.city, appliedPartnerData.customerNumber].filter(Boolean).join(' · ');

  return <div className="master-data-panel-content master-data-panel-applied-content"><section className="master-data-applied-record" aria-label={`Im Dokument verwendeter ${partnerRoleLabel}`}><span>Im Dokument verwendet{appliedPartnerData.sourceFileRemoved ? ' – Quelldatei nicht mehr geladen' : ''}</span><strong>{appliedPartnerData.companyName}</strong><small>{[details, appliedPartnerData.sourceFileName].filter(Boolean).join(' · ')}</small></section><div className="master-data-panel-actions"><button className="partner-button is-primary" type="button" disabled={!sourceRecord || !documentAdapter} onClick={() => onApply(sourceRecord)}>Erneut übernehmen</button><button className="partner-button" type="button" onClick={onShowSelection}>Anderen Partner auswählen</button><button className="partner-button" type="button" onClick={onRemove}>Aus Dokument entfernen</button></div><DeliveryAddressPanel addresses={appliedRecord?.deliveryAddresses ?? []} appliedDeliveryAddress={appliedDeliveryAddress} documentAdapter={documentAdapter} disabled={appliedPartnerData.sourceFileRemoved} onApply={onApplyDeliveryAddress} onRemove={onRemoveDeliveryAddress} />{appliedPartnerData.sourceFileRemoved && <p className="master-data-panel-note">Die Quelldatei wurde aus dem Panel entfernt. Die bereits übernommenen Partnerdaten bleiben im Dokument erhalten.</p>}</div>;
}

function catalogDetails(record) {
  const price = record.type === 'textService' ? record.pricing.netTotalAmount : record.pricing.netUnitPrice;
  const quantity = record.type === 'textService' ? record.quantity.textLabel : [record.quantity.defaultValue, record.quantity.unit].filter(Boolean).join(' · ');
  return [quantity, formatCatalogCurrency(price), record.pricing.taxRate ? `${record.pricing.taxRate} %` : ''].filter(Boolean).join(' · ');
}

function CatalogDataPanel({ canAddCatalogItem, records, selectedIds, onToggle, onFutureAction }) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const visibleRecords = records.filter((record) => (typeFilter === 'all' || record.type === typeFilter) && [record.title, record.number, record.internalNote, ...Object.values(record.descriptions)].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(query.trim().toLocaleLowerCase('de-DE'))));
  return <div className="master-data-panel-content">{records.length > 0 && <><div className="master-data-panel-filter-row"><label className="master-data-panel-search"><span>Leistungen suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Bezeichnung oder Beschreibung" /></label><label className="master-data-panel-search"><span>Typ</span><select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option value="all">Alle</option><option value="service">Leistung</option><option value="goods">Artikel</option><option value="textService">Textleistung</option><option value="deliveryItem">Lieferscheinposition</option></select></label></div><div className="master-data-record-list">{visibleRecords.length ? visibleRecords.map((record) => { const isSupported = canAddCatalogItem?.(record) === true; return <label className={`master-data-catalog-record${isSupported ? '' : ' is-unavailable'}`} key={record.id}><input type="checkbox" checked={selectedIds.includes(record.id)} disabled={!isSupported} onChange={() => onToggle(record.id)} /><span><strong>{getCatalogItemTypeLabel(record.type)} – {record.title || 'Unbenannter Eintrag'}</strong><small>{catalogDetails(record)}</small>{!isSupported && <small className="master-data-catalog-unavailable">Für dieses Dokument nicht verfügbar</small>}<em>{record.sourceFileName}</em></span></label>; }) : <p className="master-data-panel-empty">Keine passenden Leistungen vorhanden.</p>}</div></>}<button className="partner-button is-primary" type="button" disabled={!selectedIds.length || !canAddCatalogItem} onClick={onFutureAction}>Ausgewählte Positionen hinzufügen</button></div>;
}

function MasterDataPanelDialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="dialog" aria-modal="true" aria-labelledby="master-data-panel-dialog-title"><h2 id="master-data-panel-dialog-title">{action.title}</h2><p>{action.message}</p><div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>Abbrechen</button><button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel}</button></div></section></div>;
}

export default function MasterDataPanel({ documentAdapter, documentType, documentVariant }) {
  const [activeTab, setActiveTab] = useState('ownData');
  const [loadedFiles, setLoadedFiles] = useState(initialLoadedFiles);
  const loadedFilesRef = useRef(initialLoadedFiles);
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedOwnId, setSelectedOwnId] = useState(null);
  const [selectedPartnerId, setSelectedPartnerId] = useState(null);
  const [selectedCatalogIds, setSelectedCatalogIds] = useState([]);
  const [appliedOwnData, setAppliedOwnData] = useState(null);
  const [appliedPartnerData, setAppliedPartnerData] = useState(null);
  const [appliedDeliveryAddress, setAppliedDeliveryAddress] = useState(null);
  const [isPartnerSelectionOpen, setIsPartnerSelectionOpen] = useState(false);
  const [dialog, setDialog] = useState(null);
  const supportedTabs = useMemo(() => getSupportedMasterDataTabs(documentAdapter), [documentAdapter]);
  const partnerRoleLabel = documentAdapter?.partnerRoleLabel ?? 'Empfänger';
  const activeTabIndex = supportedTabs.findIndex((tab) => tab.id === activeTab);
  const activeFiles = loadedFiles[activeTab];
  const records = useMemo(() => Object.fromEntries(MASTER_DATA_PANEL_TABS.map((tab) => [tab.id, loadedFiles[tab.id].flatMap((file) => file.records)])), [loadedFiles]);

  useEffect(() => {
    const compatibleIds = selectedCatalogIds.filter((id) => {
      const record = records.catalogItems.find((item) => item.id === id);
      return record && documentAdapter?.canAddCatalogItem?.(record);
    });
    if (compatibleIds.length !== selectedCatalogIds.length) {
      setSelectedCatalogIds(compatibleIds);
      setStatusMessage('Nicht passende Einträge wurden aus der Auswahl entfernt.');
    }
  }, [documentAdapter, documentType, documentVariant, records.catalogItems, selectedCatalogIds]);

  useEffect(() => {
    if (!supportedTabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(supportedTabs[0]?.id ?? 'ownData');
    }
  }, [activeTab, supportedTabs]);

  useEffect(() => {
    setAppliedOwnData(null);
    setAppliedPartnerData(null);
    setAppliedDeliveryAddress(null);
    setIsPartnerSelectionOpen(false);
    setSelectedCatalogIds([]);
    setStatusMessage('');
  }, [documentType]);

  function commitLoadedFiles(next) { loadedFilesRef.current = next; setLoadedFiles(next); }
  function selectTab(tabId) { setActiveTab(tabId); }
  function handleTabKeyDown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? supportedTabs.length - 1 : (activeTabIndex + (event.key === 'ArrowRight' ? 1 : -1) + supportedTabs.length) % supportedTabs.length;
    selectTab(supportedTabs[nextIndex].id);
    event.currentTarget.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  }
  async function handleFiles(files) {
    for (const file of files) {
      const result = await readMasterDataPdf(file);
      if (result.status !== 'valid') { setStatusMessage(result.message); continue; }
      if (!supportedTabs.some((tab) => tab.id === result.tabId)) { setStatusMessage(`Diese Stammdatenart wird für dieses Dokument nicht unterstützt.`); continue; }
      const sourceFileId = createMasterDataFileId(file, result.document.documentId);
      const existingFiles = loadedFilesRef.current[result.tabId];
      if (existingFiles.some((loadedFile) => loadedFile.id === sourceFileId)) { setStatusMessage('Diese Datei wurde bereits geladen.'); continue; }
      if (hasRecordIdConflict(existingFiles, result.document.records)) { setStatusMessage('Die Datei enthält Datensatz-IDs, die bereits aus einer anderen Datei geladen wurden. Sie wurde nicht übernommen.'); continue; }
      const typeLabel = MASTER_DATA_PANEL_TABS.find((tab) => tab.id === result.tabId)?.label ?? 'Stammdaten';
      const loadedFile = { id: sourceFileId, name: file.name, typeLabel, records: result.document.records.map((record) => ({ ...record, sourceFileId, sourceFileName: file.name })) };
      commitLoadedFiles({ ...loadedFilesRef.current, [result.tabId]: [...existingFiles, loadedFile] });
      selectTab(result.tabId);
      setStatusMessage(result.tabId === activeTab ? 'Stammdatenblatt wurde geladen.' : `Die Datei enthält ${typeLabel} und wurde dem Reiter „${typeLabel}“ zugeordnet.`);
    }
  }
  function removeFile(file) {
    const removesAppliedOwnData = file.id === appliedOwnData?.sourceFileId;
    const removesAppliedPartnerData = file.id === appliedPartnerData?.sourceFileId;
    const removesAppliedDeliveryAddress = file.id === appliedDeliveryAddress?.sourceFileId;
    commitLoadedFiles({ ...loadedFilesRef.current, [activeTab]: loadedFilesRef.current[activeTab].filter((item) => item.id !== file.id) });
    setSelectedOwnId((id) => records.ownData.find((record) => record.id === id)?.sourceFileId === file.id ? null : id);
    setSelectedPartnerId((id) => records.partners.find((record) => record.id === id)?.sourceFileId === file.id ? null : id);
    setSelectedCatalogIds((ids) => ids.filter((id) => records.catalogItems.find((record) => record.id === id)?.sourceFileId !== file.id));
    if (removesAppliedOwnData) {
      setAppliedOwnData((current) => current ? { ...current, sourceFileRemoved: true } : current);
      setStatusMessage('Die Quelldatei wurde aus dem Panel entfernt. Die bereits übernommenen Daten bleiben im Dokument erhalten.');
      return;
    }
    if (removesAppliedPartnerData) {
      setAppliedPartnerData((current) => current ? { ...current, sourceFileRemoved: true } : current);
      if (removesAppliedDeliveryAddress) setAppliedDeliveryAddress((current) => current ? { ...current, sourceFileRemoved: true } : current);
      setStatusMessage('Die Quelldatei wurde aus dem Panel entfernt. Die bereits übernommenen Partnerdaten bleiben im Dokument erhalten.');
      return;
    }
    if (activeTab === 'catalogItems') {
      setStatusMessage('Die Datei wurde aus dem Panel entfernt. Bereits hinzugefügte Positionen bleiben im Dokument erhalten.');
      return;
    }
    setStatusMessage('Datei wurde aus dem Panel entfernt.');
  }
  function futureAction() { setStatusMessage('Die Übernahme in das Dokument wird in einer folgenden Phase ergänzt.'); }
  function applyOwnData(record = records.ownData.find((item) => item.id === selectedOwnId)) {
    if (!record || !documentAdapter) return;
    documentAdapter.applyOwnData(record);
    setSelectedOwnId(record.id);
    setAppliedOwnData({ recordId: record.id, sourceFileId: record.sourceFileId, sourceFileName: record.sourceFileName, companyName: getOwnDataDisplayName(record), city: record.address.city, sourceFileRemoved: false });
    setStatusMessage('Eigene Daten wurden in das Dokument übernommen.');
  }
  function requestOwnDataApply(record) {
    const selectedRecord = record ?? records.ownData.find((item) => item.id === selectedOwnId);
    if (!selectedRecord || !documentAdapter) return;
    if (documentAdapter.hasOwnDocumentData()) {
      const message = documentType === 'invoice'
        ? 'Im Dokument sind bereits eigene Unternehmensdaten eingetragen. Durch die Übernahme werden Absenderdaten, Kontaktdaten, Bankdaten, Steuerangaben und der Kleinunternehmerstatus ersetzt.'
        : 'Im Dokument sind bereits eigene Unternehmensdaten eingetragen. Durch die Übernahme werden Absenderdaten, Kontaktdaten, Bankdaten und Steuerangaben ersetzt.';
      setDialog({ kind: 'replace-own-data', record: selectedRecord, title: 'Eigene Daten ersetzen?', message, confirmLabel: 'Daten ersetzen' });
      return;
    }
    applyOwnData(selectedRecord);
  }
  function requestOwnDataRemoval() {
    if (!documentAdapter) return;
    setDialog({ kind: 'remove-own-data', title: 'Eigene Daten aus Dokument entfernen?', message: 'Die übernommenen Unternehmens-, Kontakt-, Bank- und Steuerdaten werden aus dem Dokument entfernt.', confirmLabel: 'Daten entfernen' });
  }
  function applyPartner(record = records.partners.find((item) => item.id === selectedPartnerId)) {
    if (!record || !documentAdapter) return;
    documentAdapter.applyPartner(record);
    setSelectedPartnerId(record.id);
    setAppliedPartnerData({ recordId: record.id, sourceFileId: record.sourceFileId, sourceFileName: record.sourceFileName, companyName: getPartnerDisplayName(record), city: record.mainAddress.city, customerNumber: record.customerNumber, deliveryAddresses: record.deliveryAddresses, partnerRecord: record, sourceFileRemoved: false });
    setAppliedDeliveryAddress(null);
    setIsPartnerSelectionOpen(false);
    setStatusMessage(`Partner wurde als ${partnerRoleLabel} in das Dokument übernommen.`);
  }
  function requestPartnerApply(record) {
    const selectedRecord = record?.currentTarget ? records.partners.find((item) => item.id === selectedPartnerId) : record ?? records.partners.find((item) => item.id === selectedPartnerId);
    if (!selectedRecord || !documentAdapter) return;
    if (documentAdapter.hasRecipientData()) {
      const message = ['invoice', 'offer'].includes(documentType)
        ? `Im Dokument sind bereits ${partnerRoleLabel}daten eingetragen. Durch die Übernahme werden Firma, Anschrift, Zusatz, Abteilung und Kundennummer ersetzt.`
        : `Im Dokument sind bereits Daten für ${partnerRoleLabel} eingetragen. Durch die Übernahme werden Firma, Anschrift, Zusatz und Abteilung ersetzt.`;
      setDialog({ kind: 'replace-partner', record: selectedRecord, title: `${partnerRoleLabel} ersetzen?`, message, confirmLabel: 'Daten ersetzen' });
      return;
    }
    applyPartner(selectedRecord);
  }
  function requestPartnerRemoval() {
    if (!documentAdapter) return;
    const message = ['invoice', 'offer'].includes(documentType)
      ? `Die übernommenen ${partnerRoleLabel}daten und die Kundennummer werden aus dem Dokument entfernt.`
      : `Die übernommenen Daten für ${partnerRoleLabel} werden aus dem Dokument entfernt.`;
    setDialog({ kind: 'remove-partner', title: `${partnerRoleLabel} aus Dokument entfernen?`, message, confirmLabel: 'Daten entfernen' });
  }
  function applyDeliveryAddress(address) {
    const partner = appliedPartnerData?.partnerRecord ?? records.partners.find((record) => record.id === appliedPartnerData?.recordId && record.sourceFileId === appliedPartnerData?.sourceFileId);
    if (!address || !partner || !documentAdapter?.canManageDeliveryAddresses || !partner.deliveryAddresses.some((item) => item.id === address.id)) return;
    documentAdapter.applyDeliveryAddress(address);
    setAppliedDeliveryAddress({ addressId: address.id, sourceFileId: appliedPartnerData.sourceFileId, companyName: address.companyName, city: address.city, sourceFileRemoved: false });
    setStatusMessage('Lieferanschrift wurde in das Dokument übernommen.');
  }
  function requestDeliveryAddressApply(address) {
    if (!address || !documentAdapter?.canManageDeliveryAddresses) return;
    if (appliedDeliveryAddress && appliedDeliveryAddress.addressId !== address.id) {
      setDialog({ kind: 'replace-delivery-address', address, title: 'Lieferanschrift ersetzen?', message: 'Die ausgewählte Lieferanschrift ersetzt den aktuellen Empfängeradressblock im Lieferschein.', confirmLabel: 'Lieferanschrift ersetzen' });
      return;
    }
    applyDeliveryAddress(address);
  }
  function removeDeliveryAddress() {
    const partner = appliedPartnerData?.partnerRecord ?? records.partners.find((record) => record.id === appliedPartnerData?.recordId && record.sourceFileId === appliedPartnerData?.sourceFileId);
    if (!partner || !documentAdapter?.canManageDeliveryAddresses) return;
    documentAdapter.removeDeliveryAddress(partner);
    setAppliedDeliveryAddress(null);
    setStatusMessage('Lieferanschrift wurde entfernt. Die Hauptanschrift des Partners wird wieder verwendet.');
  }
  function toggleCatalogSelection(recordId) {
    const record = records.catalogItems.find((item) => item.id === recordId);
    if (!record || !documentAdapter?.canAddCatalogItem?.(record)) return;
    setSelectedCatalogIds((current) => current.includes(recordId) ? current.filter((id) => id !== recordId) : [...current, recordId]);
  }
  function addSelectedCatalogItems() {
    if (!documentAdapter) return;
    const selectedRecords = selectedCatalogIds.map((id) => records.catalogItems.find((record) => record.id === id)).filter(Boolean);
    if (!selectedRecords.length || selectedRecords.length !== selectedCatalogIds.length || selectedRecords.some((record) => !documentAdapter.canAddCatalogItem?.(record))) {
      setStatusMessage('Die ausgewählten Positionen konnten nicht vollständig übernommen werden.');
      return;
    }
    const result = documentAdapter.addCatalogItems(selectedRecords);
    if (!result?.ok) {
      setStatusMessage('Die ausgewählten Positionen konnten nicht vollständig übernommen werden.');
      return;
    }
    setSelectedCatalogIds([]);
    setStatusMessage(`${result.count} ${result.count === 1 ? 'Position wurde' : 'Positionen wurden'} zum Dokument hinzugefügt.`);
  }
  function confirmDialog() {
    const action = dialog;
    setDialog(null);
    if (action?.kind === 'replace-own-data') applyOwnData(action.record);
    if (action?.kind === 'remove-own-data') {
      documentAdapter?.removeOwnData();
      setAppliedOwnData(null);
      setStatusMessage('Eigene Daten wurden aus dem Dokument entfernt.');
    }
    if (action?.kind === 'replace-partner') applyPartner(action.record);
    if (action?.kind === 'replace-delivery-address') applyDeliveryAddress(action.address);
    if (action?.kind === 'remove-partner') {
      documentAdapter?.removePartner();
      setAppliedPartnerData(null);
      setAppliedDeliveryAddress(null);
      setIsPartnerSelectionOpen(false);
      setStatusMessage(`Partner wurde als ${partnerRoleLabel} aus dem Dokument entfernt.`);
    }
  }

  return <aside className="master-data-panel" aria-label="Stammdatenpanel"><header><h2>Stammdaten laden</h2></header><div className="master-data-panel-tabs" role="tablist" aria-label="Stammdatenbereiche" onKeyDown={handleTabKeyDown}>{supportedTabs.map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`master-data-panel-${tab.id}`} id={`master-data-tab-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} className={activeTab === tab.id ? 'is-active' : undefined} onClick={() => selectTab(tab.id)} key={tab.id}>{tab.label}</button>)}</div><section id={`master-data-panel-${activeTab}`} role="tabpanel" aria-labelledby={`master-data-tab-${activeTab}`}><MasterDataFileDropzone onFiles={handleFiles} /><MasterDataLoadedFiles files={activeFiles} onRemove={removeFile} />{activeTab === 'ownData' && <OwnDataPanel appliedOwnData={appliedOwnData} documentAdapter={documentAdapter} records={records.ownData} selectedId={selectedOwnId} onApply={requestOwnDataApply} onRemove={requestOwnDataRemoval} onSelect={setSelectedOwnId} onShowSelection={() => setAppliedOwnData(null)} />}{activeTab === 'partners' && (appliedPartnerData && !isPartnerSelectionOpen ? <AppliedPartnerPanel appliedPartnerData={appliedPartnerData} appliedDeliveryAddress={appliedDeliveryAddress} documentAdapter={documentAdapter} partnerRoleLabel={partnerRoleLabel} records={records.partners} onApply={requestPartnerApply} onApplyDeliveryAddress={requestDeliveryAddressApply} onRemove={requestPartnerRemoval} onRemoveDeliveryAddress={removeDeliveryAddress} onShowSelection={() => setIsPartnerSelectionOpen(true)} /> : <PartnerDataPanel partnerRoleLabel={partnerRoleLabel} records={records.partners} selectedId={selectedPartnerId} onSelect={setSelectedPartnerId} onFutureAction={requestPartnerApply} />)}{activeTab === 'catalogItems' && <CatalogDataPanel canAddCatalogItem={documentAdapter?.canAddCatalogItem} records={records.catalogItems} selectedIds={selectedCatalogIds} onToggle={toggleCatalogSelection} onFutureAction={addSelectedCatalogItems} />}</section><p className="master-data-panel-status" aria-live="polite">{statusMessage}</p><MasterDataPanelDialog action={dialog} onCancel={() => setDialog(null)} onConfirm={confirmDialog} /></aside>;
}
