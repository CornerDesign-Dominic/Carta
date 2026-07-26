import { formatCatalogCurrency, getCatalogItemDisplayName, getCatalogItemTypeLabel } from '../../masterData/catalogItemModel.js';

function LabeledLine({ label, value }) { return value ? <p><strong>{label}:</strong> {value}</p> : null; }
function Section({ title, isVisible, children }) { return isVisible ? <section className="partner-document-section"><h3>{title}</h3><div>{children}</div></section> : null; }

function ItemBlock({ item, index }) {
  const isText = item.type === 'textService';
  const isDelivery = item.type === 'deliveryItem';
  const isGoods = item.type === 'goods';
  const description = isText ? item.descriptions.textInvoice : isDelivery ? item.descriptions.deliveryNote : item.descriptions.standard;
  const hasDescription = Boolean(description || (isGoods && item.descriptions.deliveryNote));
  const hasQuantity = isText ? Boolean(item.quantity.textLabel) : Boolean(item.quantity.defaultValue || item.quantity.unit);
  const hasPricing = !isDelivery && Boolean((isText ? item.pricing.netTotalAmount : item.pricing.netUnitPrice) || item.pricing.taxRate);
  return <article className="partner-document-block">
    <header className="partner-document-block-header"><div><h2><span className="partner-document-index">{String(index + 1).padStart(2, '0')}</span> {getCatalogItemDisplayName(item)}</h2><p>{getCatalogItemTypeLabel(item.type)} · {item.isActive ? 'Aktiv' : 'Inaktiv'}</p></div></header>
    <Section title="Grunddaten" isVisible={Boolean(item.number || item.category)}><LabeledLine label={isGoods ? 'Artikelnummer' : isDelivery ? 'Positionsnummer' : 'Leistungsnummer'} value={item.number} /><LabeledLine label="Kategorie" value={item.category} /></Section>
    <Section title={isText ? 'Leistungsbeschreibung' : isDelivery ? 'Lieferbeschreibung' : isGoods ? 'Beschreibungen' : 'Beschreibung'} isVisible={hasDescription}>
      {description && <p className="partner-document-notes">{description}</p>}
      {isGoods && item.descriptions.deliveryNote && <LabeledLine label="Beschreibung Lieferschein" value={item.descriptions.deliveryNote} />}
    </Section>
    <Section title={isText ? 'Mengen- oder Zeitangabe' : 'Menge und Einheit'} isVisible={hasQuantity}>{isText ? <p>{item.quantity.textLabel}</p> : <><LabeledLine label="Standardmenge" value={item.quantity.defaultValue} /><LabeledLine label="Einheit" value={item.quantity.unit} /></>}</Section>
    <Section title={isText ? 'Betrag und Steuer' : 'Preis und Steuer'} isVisible={hasPricing}>
      <LabeledLine label={isText ? 'Positionsbetrag netto' : 'Netto-Einzelpreis'} value={formatCatalogCurrency(isText ? item.pricing.netTotalAmount : item.pricing.netUnitPrice)} />
      <LabeledLine label="USt." value={item.pricing.taxRate ? `${item.pricing.taxRate} %` : ''} />
    </Section>
    <Section title="Lieferscheindaten" isVisible={Boolean((isGoods || isDelivery) && item.delivery.defaultNote)}><LabeledLine label="Standard-Lieferhinweis" value={item.delivery.defaultNote} /></Section>
    <Section title="Interne Angaben" isVisible={Boolean(item.internalNote)}><LabeledLine label="Interne Notiz" value={item.internalNote} /></Section>
  </article>;
}

export default function CatalogItemMasterDataDocument({ records, pagesRef, toolbar }) {
  const dateLabel = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date());
  return <section className="partner-document-preview" aria-labelledby="catalog-document-preview-title"><div className="partner-document-preview-heading"><h2 id="catalog-document-preview-title">Dokumentvorschau</h2></div>{toolbar}<div className="partner-document-pages" ref={pagesRef}>
    {records.map((item, index) => <article className="partner-document-page" aria-label={`Leistungs- und Artikeldatenblatt ${index + 1}`} key={item.id}><header className="partner-document-page-header"><strong>Belege24</strong><span>Leistungs- und Artikelstammdaten</span></header><div className="partner-document-page-meta"><span>Anzahl Einträge: {records.length}</span><span>Stand: {dateLabel}</span></div><h1 className="partner-document-title">Leistungs- und Artikelstammdaten</h1><ItemBlock item={item} index={index} /><footer className="partner-document-page-footer">Seite {index + 1}</footer></article>)}
    {!records.length && <article className="partner-document-page" aria-label="Leere Leistungs- und Artikelstammdatensammlung"><header className="partner-document-page-header"><strong>Belege24</strong><span>Leistungs- und Artikelstammdaten</span></header><div className="partner-document-page-meta"><span>Anzahl Einträge: 0</span><span>Stand: {dateLabel}</span></div><h1 className="partner-document-title">Leistungs- und Artikelstammdaten</h1><p>Diese Stammdatensammlung enthält derzeit keine Einträge.</p><footer className="partner-document-page-footer">Seite 1</footer></article>}
  </div></section>;
}
