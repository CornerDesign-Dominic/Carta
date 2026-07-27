import { formatCatalogCurrency, getCatalogItemDisplayName, getCatalogItemTypeLabel } from '../../masterData/catalogItemModel.js';

export default function CatalogItemMasterDataToolbar({
  activeRecordId, records, searchQuery, typeFilter, searchResults, onChangeSearch, onChangeTypeFilter, onSelectRecord,
}) {
  return <section className="partner-toolbar catalog-management-toolbar catalog-management-toolbar-list-only" aria-label="Leistungs- und Artikelverwaltung">
    <div className="partner-selection">
      <div className="catalog-filter-row">
        <label className="partner-search-field" htmlFor="catalog-search"><span>Einträge suchen</span><input id="catalog-search" type="search" value={searchQuery} placeholder="Suchwort, Artikelnummer, Beschreibung oder Notiz" onChange={(event) => onChangeSearch(event.target.value)} /></label>
        <label className="partner-search-field" htmlFor="catalog-type-filter"><span>Typ filtern</span><select id="catalog-type-filter" value={typeFilter} onChange={(event) => onChangeTypeFilter(event.target.value)}><option value="all">Alle</option><option value="service">Leistungen</option><option value="goods">Artikel / Ware</option><option value="textService">Textleistungen</option><option value="deliveryItem">Lieferscheinpositionen</option></select></label>
      </div>
      <div className="partner-list" aria-label="Leistungs- und Artikelliste">
        {searchResults.map((item) => {
          const amount = item.type === 'textService' ? item.pricing.netTotalAmount : item.type === 'deliveryItem' ? '' : item.pricing.netUnitPrice;
          return <button className={item.id === activeRecordId ? 'partner-list-item is-active' : 'partner-list-item'} type="button" key={item.id} onClick={() => onSelectRecord(item.id)}>
            <span className="partner-list-item-name">{getCatalogItemDisplayName(item)}</span>
            <span className="partner-list-item-meta">{getCatalogItemTypeLabel(item.type)}{item.type === 'goods' && item.number ? ` · ${item.number}` : ''}{amount ? ` · ${formatCatalogCurrency(amount)}` : ''}</span>
            <span className="partner-list-item-status">{item.isActive ? 'Aktiv' : 'Inaktiv'}</span>
          </button>;
        })}
        {!searchResults.length && <p className="partner-list-empty">Für diese Suche und diesen Filter wurden keine Einträge gefunden.</p>}
      </div>
      <p className="partner-selection-summary">{records.length === 1 ? '1 Eintrag in der Sammlung' : `${records.length} Einträge in der Sammlung`}</p>
    </div>
  </section>;
}
