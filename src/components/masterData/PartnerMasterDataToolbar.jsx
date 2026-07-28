import { getPartnerDisplayName, getPartnerTypeLabel } from '../../masterData/partnerModel.js';

function getListValues(partner) {
  return [
    partner.mainAddress.city,
    partner.customerNumber && `K: ${partner.customerNumber}`,
    partner.supplierNumber && `L: ${partner.supplierNumber}`,
    partner.contact.email,
  ].filter(Boolean).join(' · ');
}

function getListTypeLabel(type) {
  return type === 'customerAndSupplier' ? 'Kunde & Lieferant' : getPartnerTypeLabel(type);
}

export default function PartnerMasterDataToolbar({
  activePartnerId, partners, searchQuery, searchResults, onChangeSearch, onSelectPartner,
}) {
  return <section className="partner-toolbar partner-management-toolbar" aria-label="Partnerverwaltung">
    <div className="partner-selection">
      <label className="partner-search-field" htmlFor="partner-search">
        <span>Partner suchen</span>
        <input
          id="partner-search"
          type="search"
          value={searchQuery}
          placeholder="Name, Ort, Nummer oder E-Mail"
          onChange={(event) => onChangeSearch(event.target.value)}
        />
      </label>

      <div className="partner-list" aria-label="Partnerliste">
        {searchResults.map((partner) => {
          const entryTitle = `${getListTypeLabel(partner.type)} – ${getPartnerDisplayName(partner)}`;
          const entryValues = getListValues(partner);
          return <button
            className={partner.id === activePartnerId ? 'partner-list-item is-active' : 'partner-list-item'}
            type="button"
            key={partner.id}
            onClick={() => onSelectPartner(partner.id)}
          >
            <span className="partner-list-item-name" title={entryTitle}>{entryTitle}</span>
            {entryValues && <span className="partner-list-item-meta" title={entryValues}>{entryValues}</span>}
            <span className="partner-list-item-status">{partner.isActive ? 'Aktiv' : 'Inaktiv'}</span>
          </button>;
        })}
        {!searchResults.length && <p className="partner-list-empty">Für diese Suche wurden keine Partner gefunden.</p>}
      </div>
      <p className="partner-selection-summary">{partners.length === 1 ? '1 Partner in der Sammlung' : `${partners.length} Partner in der Sammlung`}</p>
    </div>
  </section>;
}
