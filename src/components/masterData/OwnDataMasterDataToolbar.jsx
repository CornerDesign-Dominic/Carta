import { getOwnDataDisplayName } from '../../masterData/ownDataModel.js';

export default function OwnDataMasterDataToolbar({
  activeRecordId, records, searchQuery, searchResults, onChangeSearch, onSelectRecord, onCreateRecord, onDuplicateRecord, onDeleteRecord,
}) {
  return (
    <section className="partner-toolbar" aria-label="Unternehmensverwaltung">
      <div className="partner-toolbar-actions">
        <button className="partner-button is-primary" type="button" onClick={onCreateRecord}>Neues Unternehmen</button>
        <button className="partner-button" type="button" onClick={onDuplicateRecord}>Unternehmen duplizieren</button>
        <button className="partner-button" type="button" onClick={onDeleteRecord}>Unternehmen löschen</button>
      </div>
      <div className="partner-selection">
        <label className="partner-search-field" htmlFor="own-data-search">
          <span>Unternehmen suchen</span>
          <input id="own-data-search" type="search" value={searchQuery} placeholder="Name, Ort, Steuerdaten oder IBAN" onChange={(event) => onChangeSearch(event.target.value)} />
        </label>
        <div className="partner-list" aria-label="Unternehmensliste">
          {searchResults.map((record) => (
            <button className={record.id === activeRecordId ? 'partner-list-item is-active' : 'partner-list-item'} type="button" key={record.id} onClick={() => onSelectRecord(record.id)}>
              <span className="partner-list-item-name">{getOwnDataDisplayName(record)}</span>
              <span className="partner-list-item-meta">{record.legalForm || 'Rechtsform offen'} · {record.address.city || 'Ort offen'} · {record.settings.isSmallBusiness ? 'Kleinunternehmer' : 'Regelbesteuerung'}</span>
              <span className="partner-list-item-status">{record.isActive ? 'Aktiv' : 'Inaktiv'}</span>
            </button>
          ))}
          {!searchResults.length && <p className="partner-list-empty">Für diese Suche wurden keine Unternehmen gefunden.</p>}
        </div>
        <p className="partner-selection-summary">{records.length === 1 ? '1 Unternehmen in der Sammlung' : `${records.length} Unternehmen in der Sammlung`}</p>
      </div>
    </section>
  );
}
