import { getPartnerDisplayName, getPartnerTypeLabel } from '../../masterData/partnerModel.js';

export default function PartnerMasterDataToolbar({
  activePartnerId,
  partners,
  searchQuery,
  searchResults,
  onChangeSearch,
  onSelectPartner,
  onCreatePartner,
  onDuplicatePartner,
  onDeletePartner,
}) {
  return (
    <section className="partner-toolbar" aria-label="Partnerverwaltung">
      <div className="partner-toolbar-actions">
        <button className="partner-button is-primary" type="button" onClick={onCreatePartner}>
          Neuer Partner
        </button>
        <button className="partner-button" type="button" onClick={onDuplicatePartner}>
          Partner duplizieren
        </button>
        <button className="partner-button" type="button" onClick={onDeletePartner}>
          Partner löschen
        </button>
      </div>

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
            const reference = partner.customerNumber || partner.supplierNumber;
            return (
              <button
                className={partner.id === activePartnerId ? 'partner-list-item is-active' : 'partner-list-item'}
                type="button"
                key={partner.id}
                onClick={() => onSelectPartner(partner.id)}
              >
                <span className="partner-list-item-name">{getPartnerDisplayName(partner)}</span>
                <span className="partner-list-item-meta">
                  {getPartnerTypeLabel(partner.type)} · {partner.mainAddress.city || 'Ort offen'}
                  {reference ? ` · ${reference}` : ''}
                </span>
                <span className="partner-list-item-status">{partner.isActive ? 'Aktiv' : 'Inaktiv'}</span>
              </button>
            );
          })}
          {!searchResults.length && (
            <p className="partner-list-empty">
              Für diese Suche wurden keine Partner gefunden.
            </p>
          )}
        </div>
        <p className="partner-selection-summary">
          {partners.length === 1 ? '1 Partner in der Sammlung' : `${partners.length} Partner in der Sammlung`}
        </p>
      </div>
    </section>
  );
}
