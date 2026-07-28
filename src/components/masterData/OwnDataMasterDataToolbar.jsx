import { getOwnDataDisplayName } from '../../masterData/ownDataModel.js';

function getEntryTitle(record) {
  return record.legalForm ? `${record.legalForm} – ${getOwnDataDisplayName(record)}` : getOwnDataDisplayName(record);
}

function getEntryValues(record) {
  return [record.address.city, record.taxAndRegister.vatId, record.contact.email].filter(Boolean).join(' · ');
}

export default function OwnDataMasterDataToolbar({ activeRecordId, records, searchQuery, searchResults, onChangeSearch, onSelectRecord }) {
  return <section className="partner-toolbar own-data-management-toolbar" aria-label="Unternehmensverwaltung">
    <div className="partner-selection">
      <label className="partner-search-field" htmlFor="own-data-search"><span>Unternehmen suchen</span><input id="own-data-search" type="search" value={searchQuery} placeholder="Name, Ort, Steuerdaten oder IBAN" onChange={(event) => onChangeSearch(event.target.value)} /></label>
      <div className="partner-list" aria-label="Unternehmensliste">
        {searchResults.map((record) => {
          const entryTitle = getEntryTitle(record);
          const entryValues = getEntryValues(record);
          return <button className={record.id === activeRecordId ? 'partner-list-item is-active' : 'partner-list-item'} type="button" key={record.id} onClick={() => onSelectRecord(record.id)}>
            <span className="partner-list-item-name" title={entryTitle}>{entryTitle}</span>
            {entryValues && <span className="partner-list-item-meta" title={entryValues}>{entryValues}</span>}
          </button>;
        })}
        {!searchResults.length && <p className="partner-list-empty">Für diese Suche wurden keine Unternehmen gefunden.</p>}
      </div>
      <p className="partner-selection-summary">{records.length === 1 ? '1 Unternehmen in der Sammlung' : `${records.length} Unternehmen in der Sammlung`}</p>
    </div>
  </section>;
}
