import { useEffect, useMemo, useRef, useState } from 'react';
import { getCatalogItemTypeLabel, formatCatalogCurrency } from '../../masterData/catalogItemModel.js';
import { getOwnDataDisplayName } from '../../masterData/ownDataModel.js';
import { getPartnerDisplayName, getPartnerTypeLabel } from '../../masterData/partnerModel.js';
import {
  createMasterDataFileId,
  MASTER_DATA_PANEL_TABS,
  readMasterDataPdf,
} from './masterDataPanelLoader.js';
import { isLastUsedRecord, useMasterDataSession } from './MasterDataSessionProvider.jsx';

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

function MasterDataLoadedFiles({ files, showRecordCountOnly = false }) {
  if (!files.length) return null;
  return <section className="master-data-loaded-files" aria-label="Geladene Stammdatenblätter"><h3>Geladene Dateien</h3><ul>{files.map((file) => <li key={file.id}><div><strong>{file.name}</strong><span>{showRecordCountOnly ? `Anzahl Datensätze: ${file.records.length}` : `${file.typeLabel} · ${file.records.length} ${file.records.length === 1 ? 'Datensatz' : 'Datensätze'}`}</span></div></li>)}</ul></section>;
}

function formatOwnDataLocation(postalCode, city) {
  return [postalCode, city].filter(Boolean).join(' ');
}

function OwnDataPanel({ appliedOwnData, documentAdapter, lastUsedOwnData, records, selectedId, onApply, onRemove, onSelect }) {
  const selectedRecord = records.find((record) => record.id === selectedId);
  const appliedLocation = appliedOwnData && formatOwnDataLocation(appliedOwnData.postalCode, appliedOwnData.city);
  const isSelectedApplied = Boolean(selectedRecord && appliedOwnData && selectedRecord.id === appliedOwnData.recordId && selectedRecord.sourceFileId === appliedOwnData.sourceFileId);

  return <div className="master-data-panel-content">{(records.length || appliedOwnData) ? <><h3 className="master-data-selection-title">Auswahl</h3>{appliedOwnData && <section className="master-data-applied-record" aria-label="Im Dokument verwendete eigene Daten"><span>Im Dokument verwendet{appliedOwnData.sourceFileRemoved ? ' – Quelldatei nicht mehr geladen' : ''}</span><strong>{appliedOwnData.companyName}</strong>{appliedLocation && <small>{appliedLocation}</small>}{appliedOwnData.vatId && <small>USt-IdNr.: {appliedOwnData.vatId}</small>}</section>}{records.length > 0 && <div className="master-data-record-list own-data-panel-list">{records.map((record) => {
    const location = formatOwnDataLocation(record.address.postalCode, record.address.city);
    const isLastUsed = isLastUsedRecord(record, lastUsedOwnData);
    return <button className={`${selectedId === record.id ? 'is-selected ' : ''}${isLastUsed ? 'is-last-used' : ''}`.trim() || undefined} type="button" aria-pressed={selectedId === record.id} key={record.id} onClick={() => onSelect(record.id)}><strong>{getOwnDataDisplayName(record)}</strong>{location && <span>{location}</span>}{record.taxAndRegister.vatId && <small>USt-IdNr.: {record.taxAndRegister.vatId}</small>}{isLastUsed && <em className="master-data-last-used">Zuletzt verwendet</em>}</button>;
  })}</div>}</> : null}<div className="master-data-panel-actions"><button className="partner-button is-primary" type="button" disabled={!selectedRecord || !documentAdapter || isSelectedApplied} onClick={() => onApply()}>Eigene Daten übernehmen</button>{appliedOwnData && <button className="partner-button" type="button" onClick={onRemove}>Aus Dokument entfernen</button>}</div>{appliedOwnData?.sourceFileRemoved && <p className="master-data-panel-note">Die Quelldatei wurde aus dem Panel entfernt. Die bereits übernommenen Daten bleiben im Dokument erhalten.</p>}</div>;
}

function PartnerDataPanel({ appliedDeliveryAddress, appliedPartnerData, documentAdapter, lastUsedPartner, partnerRoleLabel, records, selectedId, onApply, onApplyDeliveryAddress, onRemove, onRemoveDeliveryAddress, onSelect }) {
  const [query, setQuery] = useState('');
  const visibleRecords = records.filter((record) => [record.companyName, record.mainAddress.city, record.customerNumber, record.supplierNumber].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(query.trim().toLocaleLowerCase('de-DE'))));
  const selectedRecord = records.find((record) => record.id === selectedId);
  const appliedSourceRecord = appliedPartnerData && records.find((record) => record.id === appliedPartnerData.recordId && record.sourceFileId === appliedPartnerData.sourceFileId);
  const appliedRecord = appliedSourceRecord ?? appliedPartnerData?.partnerRecord;
  const appliedDetails = appliedPartnerData && [appliedPartnerData.city, appliedPartnerData.customerNumber].filter(Boolean).join(' · ');
  const isSelectedApplied = Boolean(selectedRecord && appliedPartnerData && selectedRecord.id === appliedPartnerData.recordId && selectedRecord.sourceFileId === appliedPartnerData.sourceFileId);

  return <div className="master-data-panel-content">{(records.length || appliedPartnerData) && <><h3 className="master-data-selection-title">Auswahl</h3>{appliedPartnerData && <section className="master-data-applied-record" aria-label={`Im Dokument verwendeter ${partnerRoleLabel}`}><span>Im Dokument verwendet{appliedPartnerData.sourceFileRemoved ? ' – Quelldatei nicht mehr geladen' : ''}</span><strong>{appliedPartnerData.companyName}</strong>{appliedDetails && <small>{[appliedDetails, appliedPartnerData.sourceFileName].filter(Boolean).join(' · ')}</small>}</section>}{records.length > 0 && <><label className="master-data-panel-search"><span>Partner suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, Ort oder Nummer" /></label><div className="master-data-record-list">{visibleRecords.length ? visibleRecords.map((record) => {
    const isLastUsed = isLastUsedRecord(record, lastUsedPartner);
    return <button className={`${selectedId === record.id ? 'is-selected ' : ''}${isLastUsed ? 'is-last-used' : ''}`.trim() || undefined} type="button" aria-pressed={selectedId === record.id} key={record.id} onClick={() => onSelect(record.id)}><strong>{getPartnerTypeLabel(record.type)} – {getPartnerDisplayName(record)}</strong><span>{[record.mainAddress.city, record.customerNumber || record.supplierNumber, record.sourceFileName].filter(Boolean).join(' · ')}</span>{record.deliveryAddresses.length > 0 && <small>{record.deliveryAddresses.length} Lieferanschrift{record.deliveryAddresses.length === 1 ? '' : 'en'}</small>}{isLastUsed && <em className="master-data-last-used">Zuletzt verwendet</em>}</button>;
  }) : <p className="master-data-panel-empty">Keine passenden Partner vorhanden.</p>}</div></>}</>}<div className="master-data-panel-actions"><button className="partner-button is-primary" type="button" disabled={!selectedRecord || !documentAdapter || isSelectedApplied} onClick={() => onApply()}>Partner übernehmen</button>{appliedPartnerData && <button className="partner-button" type="button" onClick={onRemove}>Aus Dokument entfernen</button>}</div>{appliedPartnerData && <><DeliveryAddressPanel addresses={appliedRecord?.deliveryAddresses ?? []} appliedDeliveryAddress={appliedDeliveryAddress} documentAdapter={documentAdapter} disabled={appliedPartnerData.sourceFileRemoved} onApply={onApplyDeliveryAddress} onRemove={onRemoveDeliveryAddress} />{appliedPartnerData.sourceFileRemoved && <p className="master-data-panel-note">Die Quelldatei wurde aus dem Panel entfernt. Die bereits übernommenen Partnerdaten bleiben im Dokument erhalten.</p>}</>}</div>;
}

function deliveryAddressName(address) {
  return [address?.companyName, address?.city].filter(Boolean).join(' · ') || 'Unbenannte Lieferanschrift';
}

function DeliveryAddressPanel({ addresses, appliedDeliveryAddress, documentAdapter, disabled, onApply, onRemove }) {
  if (!documentAdapter?.canManageDeliveryAddresses) return null;

  return <section className="master-data-delivery-addresses" aria-label="Lieferanschrift"><h3>Lieferanschrift</h3>{addresses.length ? <><div className="master-data-record-list">{addresses.map((address) => <button className={appliedDeliveryAddress?.addressId === address.id ? 'is-selected' : undefined} type="button" disabled={disabled} aria-pressed={appliedDeliveryAddress?.addressId === address.id} key={address.id} onClick={() => onApply(address)}><strong>{deliveryAddressName(address)}</strong><span>{[address.attention, address.street && [address.street, address.houseNumber].filter(Boolean).join(' '), [address.postalCode, address.city].filter(Boolean).join(' ')].filter(Boolean).join(' · ')}</span></button>)}</div>{appliedDeliveryAddress && <button className="partner-button" type="button" disabled={disabled} onClick={onRemove}>Lieferanschrift entfernen</button>}</> : <p className="master-data-panel-empty">Für diesen Partner sind keine Lieferanschriften hinterlegt.</p>}</section>;
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
  return <div className="master-data-panel-content">{records.length > 0 && <><h3 className="master-data-selection-title">Auswahl</h3><div className="master-data-panel-filter-row"><label className="master-data-panel-search"><span>Leistungen suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Bezeichnung oder Beschreibung" /></label><label className="master-data-panel-search"><span>Typ</span><select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option value="all">Alle</option><option value="service">Leistung</option><option value="goods">Artikel</option><option value="textService">Textleistung</option><option value="deliveryItem">Lieferscheinposition</option></select></label></div><div className="master-data-record-list">{visibleRecords.length ? visibleRecords.map((record) => { const isSupported = canAddCatalogItem?.(record) === true; return <label className={`master-data-catalog-record${isSupported ? '' : ' is-unavailable'}`} key={record.id}><input type="checkbox" checked={selectedIds.includes(record.id)} disabled={!isSupported} onChange={() => onToggle(record.id)} /><span><strong>{getCatalogItemTypeLabel(record.type)} – {record.title || 'Unbenannter Eintrag'}</strong><small>{catalogDetails(record)}</small>{!isSupported && <small className="master-data-catalog-unavailable">Für dieses Dokument nicht verfügbar</small>}<em>{record.sourceFileName}</em></span></label>; }) : <p className="master-data-panel-empty">Keine passenden Leistungen vorhanden.</p>}</div></>}<button className="partner-button is-primary" type="button" disabled={!selectedIds.length || !canAddCatalogItem} onClick={onFutureAction}>Ausgewählte Positionen hinzufügen</button></div>;
}

function MasterDataPanelDialog({ action, onCancel, onConfirm }) {
  if (!action) return null;
  return <div className="partner-confirmation-backdrop"><section className="partner-confirmation" role="dialog" aria-modal="true" aria-labelledby="master-data-panel-dialog-title"><h2 id="master-data-panel-dialog-title">{action.title}</h2><p>{action.message}</p><div className="partner-confirmation-actions"><button className="partner-button" type="button" autoFocus onClick={onCancel}>Abbrechen</button><button className="partner-button is-primary" type="button" onClick={onConfirm}>{action.confirmLabel}</button></div></section></div>;
}

export default function MasterDataPanel({ documentAdapter, documentType, documentVariant }) {
  const [activeTab, setActiveTab] = useState('ownData');
  const { loadedFiles, records, lastUsedOwnData, lastUsedPartner, getLoadedFiles, rememberOwnData, rememberPartner, replaceLoadedFile } = useMasterDataSession();
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedOwnId, setSelectedOwnId] = useState(null);
  const [selectedPartnerId, setSelectedPartnerId] = useState(null);
  const [selectedCatalogIds, setSelectedCatalogIds] = useState([]);
  const [appliedOwnData, setAppliedOwnData] = useState(null);
  const [appliedPartnerData, setAppliedPartnerData] = useState(null);
  const [appliedDeliveryAddress, setAppliedDeliveryAddress] = useState(null);
  const [dialog, setDialog] = useState(null);
  const supportedTabs = useMemo(() => getSupportedMasterDataTabs(documentAdapter), [documentAdapter]);
  const partnerRoleLabel = documentAdapter?.partnerRoleLabel ?? 'Empfänger';
  const activeTabIndex = supportedTabs.findIndex((tab) => tab.id === activeTab);
  const activeFiles = loadedFiles[activeTab];

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
    setSelectedCatalogIds([]);
    setStatusMessage('');
  }, [documentType]);

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
      const existingFiles = getLoadedFiles()[result.tabId];
      if (existingFiles.some((loadedFile) => loadedFile.id === sourceFileId)) { setStatusMessage('Diese Datei wurde bereits geladen.'); continue; }
      const typeLabel = MASTER_DATA_PANEL_TABS.find((tab) => tab.id === result.tabId)?.label ?? 'Stammdaten';
      const loadedFile = { id: sourceFileId, name: file.name, typeLabel, records: result.document.records.map((record) => ({ ...record, sourceFileId, sourceFileName: file.name })) };
      const replacedSourceIds = new Set(existingFiles.map((loadedFile) => loadedFile.id));
      replaceLoadedFile(result.tabId, loadedFile);
      if (result.tabId === 'ownData') {
        setSelectedOwnId(null);
        if (replacedSourceIds.has(appliedOwnData?.sourceFileId)) setAppliedOwnData((current) => current ? { ...current, sourceFileRemoved: true } : current);
      }
      if (result.tabId === 'partners') {
        setSelectedPartnerId(null);
        if (replacedSourceIds.has(appliedPartnerData?.sourceFileId)) {
          setAppliedPartnerData((current) => current ? { ...current, sourceFileRemoved: true } : current);
          setAppliedDeliveryAddress((current) => current && replacedSourceIds.has(current.sourceFileId) ? { ...current, sourceFileRemoved: true } : current);
        }
      }
      if (result.tabId === 'catalogItems') setSelectedCatalogIds([]);
      selectTab(result.tabId);
      setStatusMessage('');
    }
  }
  function futureAction() { setStatusMessage('Die Übernahme in das Dokument wird in einer folgenden Phase ergänzt.'); }
  function applyOwnData(record = records.ownData.find((item) => item.id === selectedOwnId)) {
    if (!record || !documentAdapter) return;
    documentAdapter.applyOwnData(record);
    rememberOwnData(record);
    setSelectedOwnId(record.id);
    setAppliedOwnData({ recordId: record.id, sourceFileId: record.sourceFileId, sourceFileName: record.sourceFileName, companyName: getOwnDataDisplayName(record), postalCode: record.address.postalCode, city: record.address.city, vatId: record.taxAndRegister.vatId, sourceFileRemoved: false });
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
    rememberPartner(record);
    setSelectedPartnerId(record.id);
    setAppliedPartnerData({ recordId: record.id, sourceFileId: record.sourceFileId, sourceFileName: record.sourceFileName, companyName: getPartnerDisplayName(record), city: record.mainAddress.city, customerNumber: record.customerNumber, deliveryAddresses: record.deliveryAddresses, partnerRecord: record, sourceFileRemoved: false });
    setAppliedDeliveryAddress(null);
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
      setStatusMessage(`Partner wurde als ${partnerRoleLabel} aus dem Dokument entfernt.`);
    }
  }

  return <aside className="master-data-panel" aria-label="Stammdatenpanel"><header><h2>Stammdaten laden</h2></header><div className="master-data-panel-tabs" role="tablist" aria-label="Stammdatenbereiche" onKeyDown={handleTabKeyDown}>{supportedTabs.map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`master-data-panel-${tab.id}`} id={`master-data-tab-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} className={activeTab === tab.id ? 'is-active' : undefined} onClick={() => selectTab(tab.id)} key={tab.id}>{tab.label}</button>)}</div><section id={`master-data-panel-${activeTab}`} role="tabpanel" aria-labelledby={`master-data-tab-${activeTab}`}><MasterDataFileDropzone onFiles={handleFiles} /><MasterDataLoadedFiles files={activeFiles} showRecordCountOnly={activeTab === 'ownData'} />{activeTab === 'ownData' && <OwnDataPanel appliedOwnData={appliedOwnData} documentAdapter={documentAdapter} lastUsedOwnData={lastUsedOwnData} records={records.ownData} selectedId={selectedOwnId} onApply={requestOwnDataApply} onRemove={requestOwnDataRemoval} onSelect={setSelectedOwnId} />}{activeTab === 'partners' && <PartnerDataPanel appliedDeliveryAddress={appliedDeliveryAddress} appliedPartnerData={appliedPartnerData} documentAdapter={documentAdapter} lastUsedPartner={lastUsedPartner} partnerRoleLabel={partnerRoleLabel} records={records.partners} selectedId={selectedPartnerId} onApply={requestPartnerApply} onApplyDeliveryAddress={requestDeliveryAddressApply} onRemove={requestPartnerRemoval} onRemoveDeliveryAddress={removeDeliveryAddress} onSelect={setSelectedPartnerId} />}{activeTab === 'catalogItems' && <CatalogDataPanel canAddCatalogItem={documentAdapter?.canAddCatalogItem} records={records.catalogItems} selectedIds={selectedCatalogIds} onToggle={toggleCatalogSelection} onFutureAction={addSelectedCatalogItems} />}</section>{statusMessage && <p className="master-data-panel-status" aria-live="polite">{statusMessage}</p>}<MasterDataPanelDialog action={dialog} onCancel={() => setDialog(null)} onConfirm={confirmDialog} /></aside>;
}
