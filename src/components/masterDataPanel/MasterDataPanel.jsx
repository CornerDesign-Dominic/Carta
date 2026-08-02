import { useMemo, useRef, useState } from 'react';
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

function MasterDataFileDropzone({ onFiles }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  return <div className={`master-data-file-dropzone${isDragging ? ' is-dragging' : ''}`} onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={(event) => { if (event.currentTarget === event.target) setIsDragging(false); }} onDrop={(event) => { event.preventDefault(); setIsDragging(false); onFiles([...event.dataTransfer.files]); }}>
    <input ref={inputRef} type="file" accept="application/pdf,.pdf" multiple hidden onChange={(event) => { onFiles([...event.target.files]); event.target.value = ''; }} />
    <p>PDF hier ablegen oder auswählen</p>
    <button className="partner-button" type="button" onClick={() => inputRef.current?.click()}>PDF auswählen</button>
    <small>Die Datei wird ausschließlich lokal in deinem Browser verarbeitet und nicht an Belege24 übertragen.</small>
  </div>;
}

function MasterDataLoadedFiles({ files, onRemove }) {
  if (!files.length) return null;
  return <section className="master-data-loaded-files" aria-label="Geladene Stammdatenblätter"><h3>Geladene Dateien</h3><ul>{files.map((file) => <li key={file.id}><div><strong>{file.name}</strong><span>{file.typeLabel} · {file.records.length} {file.records.length === 1 ? 'Datensatz' : 'Datensätze'}</span></div><button type="button" onClick={() => onRemove(file)}>Entfernen</button></li>)}</ul></section>;
}

function OwnDataPanel({ records, selectedId, onSelect, onFutureAction }) {
  return <div className="master-data-panel-content"><div className="master-data-record-list own-data-panel-list">{records.length ? records.map((record) => <button className={selectedId === record.id ? 'is-selected' : undefined} type="button" aria-pressed={selectedId === record.id} key={record.id} onClick={() => onSelect(record.id)}><strong>{getOwnDataDisplayName(record)}</strong><span>{[record.address.city, record.taxAndRegister.vatId].filter(Boolean).join(' · ') || 'Keine weiteren Angaben'}</span><small>{record.sourceFileName}</small></button>) : <p className="master-data-panel-empty">Lade ein Stammdatenblatt mit deinen Unternehmensdaten.</p>}</div><button className="partner-button is-primary" type="button" disabled={!selectedId} onClick={onFutureAction}>In Dokument übernehmen</button></div>;
}

function PartnerDataPanel({ records, selectedId, onSelect, onFutureAction }) {
  const [query, setQuery] = useState('');
  const visibleRecords = records.filter((record) => [record.companyName, record.mainAddress.city, record.customerNumber, record.supplierNumber].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(query.trim().toLocaleLowerCase('de-DE'))));
  return <div className="master-data-panel-content"><label className="master-data-panel-search"><span>Partner suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, Ort oder Nummer" /></label><div className="master-data-record-list">{visibleRecords.length ? visibleRecords.map((record) => <button className={selectedId === record.id ? 'is-selected' : undefined} type="button" aria-pressed={selectedId === record.id} key={record.id} onClick={() => onSelect(record.id)}><strong>{getPartnerTypeLabel(record.type)} – {getPartnerDisplayName(record)}</strong><span>{[record.mainAddress.city, record.customerNumber || record.supplierNumber, record.sourceFileName].filter(Boolean).join(' · ')}</span>{record.deliveryAddresses.length > 0 && <small>{record.deliveryAddresses.length} Lieferanschrift{record.deliveryAddresses.length === 1 ? '' : 'en'}</small>}</button>) : <p className="master-data-panel-empty">Keine passenden Partner vorhanden.</p>}</div><button className="partner-button is-primary" type="button" disabled={!selectedId} onClick={onFutureAction}>In Dokument übernehmen</button></div>;
}

function catalogDetails(record) {
  const price = record.type === 'textService' ? record.pricing.netTotalAmount : record.pricing.netUnitPrice;
  const quantity = record.type === 'textService' ? record.quantity.textLabel : [record.quantity.defaultValue, record.quantity.unit].filter(Boolean).join(' · ');
  return [quantity, formatCatalogCurrency(price), record.pricing.taxRate ? `${record.pricing.taxRate} %` : ''].filter(Boolean).join(' · ');
}

function CatalogDataPanel({ records, selectedIds, onToggle, onFutureAction }) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const visibleRecords = records.filter((record) => (typeFilter === 'all' || record.type === typeFilter) && [record.title, record.number, record.internalNote, ...Object.values(record.descriptions)].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(query.trim().toLocaleLowerCase('de-DE'))));
  return <div className="master-data-panel-content"><div className="master-data-panel-filter-row"><label className="master-data-panel-search"><span>Leistungen suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Bezeichnung oder Beschreibung" /></label><label className="master-data-panel-search"><span>Typ</span><select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option value="all">Alle</option><option value="service">Leistung</option><option value="goods">Artikel</option><option value="textService">Textleistung</option><option value="deliveryItem">Lieferscheinposition</option></select></label></div><div className="master-data-record-list">{visibleRecords.length ? visibleRecords.map((record) => <label className="master-data-catalog-record" key={record.id}><input type="checkbox" checked={selectedIds.includes(record.id)} onChange={() => onToggle(record.id)} /><span><strong>{getCatalogItemTypeLabel(record.type)} – {record.title || 'Unbenannter Eintrag'}</strong><small>{catalogDetails(record)}</small><em>{record.sourceFileName}</em></span></label>) : <p className="master-data-panel-empty">Keine passenden Leistungen vorhanden.</p>}</div><button className="partner-button is-primary" type="button" disabled={!selectedIds.length} onClick={onFutureAction}>Ausgewählte Positionen hinzufügen</button></div>;
}

export default function MasterDataPanel() {
  const [activeTab, setActiveTab] = useState('ownData');
  const [collapsed, setCollapsed] = useState(false);
  const [loadedFiles, setLoadedFiles] = useState(initialLoadedFiles);
  const loadedFilesRef = useRef(initialLoadedFiles);
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedOwnId, setSelectedOwnId] = useState(null);
  const [selectedPartnerId, setSelectedPartnerId] = useState(null);
  const [selectedCatalogIds, setSelectedCatalogIds] = useState([]);
  const activeTabIndex = MASTER_DATA_PANEL_TABS.findIndex((tab) => tab.id === activeTab);
  const activeFiles = loadedFiles[activeTab];
  const records = useMemo(() => Object.fromEntries(MASTER_DATA_PANEL_TABS.map((tab) => [tab.id, loadedFiles[tab.id].flatMap((file) => file.records)])), [loadedFiles]);

  function commitLoadedFiles(next) { loadedFilesRef.current = next; setLoadedFiles(next); }
  function selectTab(tabId) { setActiveTab(tabId); }
  function handleTabKeyDown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? MASTER_DATA_PANEL_TABS.length - 1 : (activeTabIndex + (event.key === 'ArrowRight' ? 1 : -1) + MASTER_DATA_PANEL_TABS.length) % MASTER_DATA_PANEL_TABS.length;
    selectTab(MASTER_DATA_PANEL_TABS[nextIndex].id);
    event.currentTarget.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  }
  async function handleFiles(files) {
    for (const file of files) {
      const result = await readMasterDataPdf(file);
      if (result.status !== 'valid') { setStatusMessage(result.message); continue; }
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
    commitLoadedFiles({ ...loadedFilesRef.current, [activeTab]: loadedFilesRef.current[activeTab].filter((item) => item.id !== file.id) });
    setSelectedOwnId((id) => records.ownData.find((record) => record.id === id)?.sourceFileId === file.id ? null : id);
    setSelectedPartnerId((id) => records.partners.find((record) => record.id === id)?.sourceFileId === file.id ? null : id);
    setSelectedCatalogIds((ids) => ids.filter((id) => records.catalogItems.find((record) => record.id === id)?.sourceFileId !== file.id));
    setStatusMessage('Datei wurde aus dem Panel entfernt.');
  }
  function futureAction() { setStatusMessage('Die Übernahme in das Dokument wird in einer folgenden Phase ergänzt.'); }

  if (collapsed) return <aside className="master-data-panel is-collapsed" aria-label="Stammdatenpanel"><button type="button" aria-expanded="false" onClick={() => setCollapsed(false)}>Stammdaten öffnen</button></aside>;
  return <aside className="master-data-panel" aria-label="Stammdatenpanel"><header><div><h2>Stammdaten</h2><p>Für dieses Dokument auswählen</p></div><button type="button" aria-expanded="true" onClick={() => setCollapsed(true)}>Schließen</button></header><div className="master-data-panel-tabs" role="tablist" aria-label="Stammdatenbereiche" onKeyDown={handleTabKeyDown}>{MASTER_DATA_PANEL_TABS.map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`master-data-panel-${tab.id}`} id={`master-data-tab-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} className={activeTab === tab.id ? 'is-active' : undefined} onClick={() => selectTab(tab.id)} key={tab.id}>{tab.label}</button>)}</div><section id={`master-data-panel-${activeTab}`} role="tabpanel" aria-labelledby={`master-data-tab-${activeTab}`}><MasterDataFileDropzone onFiles={handleFiles} /><MasterDataLoadedFiles files={activeFiles} onRemove={removeFile} />{activeTab === 'ownData' && <OwnDataPanel records={records.ownData} selectedId={selectedOwnId} onSelect={setSelectedOwnId} onFutureAction={futureAction} />}{activeTab === 'partners' && <PartnerDataPanel records={records.partners} selectedId={selectedPartnerId} onSelect={setSelectedPartnerId} onFutureAction={futureAction} />}{activeTab === 'catalogItems' && <CatalogDataPanel records={records.catalogItems} selectedIds={selectedCatalogIds} onToggle={(id) => setSelectedCatalogIds((ids) => ids.includes(id) ? ids.filter((itemId) => itemId !== id) : [...ids, id])} onFutureAction={futureAction} />}</section><p className="master-data-panel-status" aria-live="polite">{statusMessage}</p></aside>;
}
