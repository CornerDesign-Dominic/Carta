import { Children, useLayoutEffect, useRef, useState } from 'react';
import { getPartnerDisplayName, getPartnerTypeLabel } from '../../masterData/partnerModel.js';
import { paginateMeasuredItems } from '../documentExport/MeasuredPaginator.jsx';

function joinLine(...values) { return values.filter(Boolean).join(' '); }
function DetailSection({ title, children }) { const items = Children.toArray(children).filter(Boolean); return items.length ? <section className="partner-document-section"><h3>{title}</h3><div>{items}</div></section> : null; }
function AddressLines({ address, fallbackCompanyName = '' }) { return [address.companyName || fallbackCompanyName, address.attention, address.department, joinLine(address.street, address.houseNumber), joinLine(address.postalCode, address.city), address.country].filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>); }
function LabeledLine({ label, value }) { return value ? <p><strong>{label}:</strong> {value}</p> : null; }

function PartnerDocumentBlock({ partner }) {
  const hasMainAddress = Object.entries(partner.mainAddress).some(([field, value]) => field !== 'country' && Boolean(value));
  return <article className="partner-document-block">
    <header className="partner-document-block-header"><div><h2>{getPartnerDisplayName(partner)}</h2><p>{getPartnerTypeLabel(partner.type)} · {partner.isActive ? 'Aktiv' : 'Inaktiv'}</p></div></header>
    {hasMainAddress && <DetailSection title="Hauptanschrift"><div className="partner-document-address"><AddressLines address={partner.mainAddress} fallbackCompanyName={partner.companyName} /></div></DetailSection>}
    <DetailSection title="Kontakt"><LabeledLine label="E-Mail" value={partner.contact.email} /><LabeledLine label="Telefon" value={partner.contact.phone} /><LabeledLine label="Mobil" value={partner.contact.mobile} /><LabeledLine label="Fax" value={partner.contact.fax} /><LabeledLine label="Website" value={partner.contact.website} /></DetailSection>
    <DetailSection title="Referenzen"><LabeledLine label="Kundennummer" value={partner.customerNumber} /><LabeledLine label="Lieferantennummer" value={partner.supplierNumber} /></DetailSection>
    <DetailSection title="Steuerdaten"><LabeledLine label="USt-IdNr." value={partner.tax.vatId} /><LabeledLine label="Steuernummer" value={partner.tax.taxNumber} /></DetailSection>
    <DetailSection title="Bankdaten"><LabeledLine label="Kontoinhaber" value={partner.bank.accountHolder} /><LabeledLine label="Bankname" value={partner.bank.bankName} /><LabeledLine label="IBAN" value={partner.bank.iban} /><LabeledLine label="BIC" value={partner.bank.bic} /></DetailSection>
    {partner.deliveryAddresses.length > 0 && <section className="partner-document-section"><h3>Lieferanschriften</h3><ol className="partner-document-deliveries">{partner.deliveryAddresses.map((address) => <li key={address.id}><strong>{address.label || 'Unbenannte Lieferanschrift'}</strong><div className="partner-document-address"><AddressLines address={address} /></div></li>)}</ol></section>}
    {partner.notes && <section className="partner-document-section"><h3>Notiz</h3><p className="partner-document-notes">{partner.notes}</p></section>}
  </article>;
}

function DocumentHeader({ dateLabel }) {
  return <div className="partner-document-page-heading"><header className="partner-document-page-header"><strong>Partner- und Empfängerstammdaten</strong><span>Belege24</span></header><div className="partner-document-page-meta"><span>Erstellungsdatum: {dateLabel}</span></div></div>;
}

export default function PartnerMasterDataDocument({ partners, pagesRef, toolbar }) {
  const dateLabel = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date());
  const measurementPageRef = useRef(null);
  const measurementHeaderRef = useRef(null);
  const blockRefs = useRef([]);
  const [pages, setPages] = useState(() => partners.length ? [partners] : [[]]);

  useLayoutEffect(() => {
    if (!partners.length || !measurementPageRef.current || !measurementHeaderRef.current) {
      setPages((current) => current.length === 1 && current[0].length === 0 ? current : [[]]);
      return;
    }
    const page = measurementPageRef.current;
    const styles = window.getComputedStyle(page);
    const verticalPadding = Number.parseFloat(styles.paddingTop) + Number.parseFloat(styles.paddingBottom);
    const footerReserve = 34;
    const capacity = Math.max(120, page.clientHeight - verticalPadding - measurementHeaderRef.current.offsetHeight - footerReserve);
    const heights = partners.map((partner, index) => blockRefs.current[index]?.getBoundingClientRect().height ?? capacity);
    const paginated = paginateMeasuredItems({ items: partners.map((partner, index) => ({ type: 'partner', partner, height: heights[index] })), firstPageCapacity: capacity, followPageCapacity: capacity, getItemHeight: (item) => item.height, getItemGap: (currentPage) => currentPage.items.length ? 20 : 0 });
    const nextPages = paginated.map((pageItem) => pageItem.items.map((item) => item.partner));
    const nextKey = nextPages.map((pageItems) => pageItems.map((partner) => partner.id).join(',')).join('|');
    const currentKey = pages.map((pageItems) => pageItems.map((partner) => partner.id).join(',')).join('|');
    if (nextKey !== currentKey) setPages(nextPages);
  }, [partners, pages]);

  return <section className="partner-document-preview partner-master-document-preview" aria-labelledby="partner-document-preview-title">
    <div className="partner-document-preview-heading"><h2 id="partner-document-preview-title">Dokumentvorschau</h2></div>
    {toolbar}
    <div className="partner-document-measurements" aria-hidden="true"><article className="partner-document-page" ref={measurementPageRef}><div ref={measurementHeaderRef}><DocumentHeader dateLabel={dateLabel} /></div>{partners.map((partner, index) => <div className="partner-document-measure-block" ref={(node) => { blockRefs.current[index] = node; }} key={partner.id}><PartnerDocumentBlock partner={partner} /></div>)}</article></div>
    <div className="partner-document-pages" ref={pagesRef}>
      {partners.length ? pages.map((pagePartners, index) => <article className="partner-document-page" aria-label={`Partner-Stammdatenblatt ${index + 1}`} key={`page-${pagePartners.map((partner) => partner.id).join('-')}`}><DocumentHeader dateLabel={dateLabel} />{pagePartners.map((partner) => <PartnerDocumentBlock partner={partner} key={partner.id} />)}{pages.length > 1 && <footer className="partner-document-page-footer">Seite {index + 1} von {pages.length}</footer>}</article>) : <article className="partner-document-page" aria-label="Leeres Stammdatenblatt"><DocumentHeader dateLabel={dateLabel} /><p className="partner-document-empty">Noch keine Daten übernommen oder Stammdaten geladen.</p></article>}
    </div>
  </section>;
}
