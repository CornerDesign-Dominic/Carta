import { getOwnDataDisplayName } from '../../masterData/ownDataModel.js';

function joinLine(...values) { return values.filter(Boolean).join(' '); }
function LabeledLine({ label, value }) { return value ? <p><strong>{label}:</strong> {value}</p> : null; }
function DetailSection({ title, isVisible = true, children }) { return isVisible ? <section className="partner-document-section"><h3>{title}</h3><div>{children}</div></section> : null; }
function AddressLines({ address }) { return [address.companyName, address.extra, joinLine(address.street, address.houseNumber), joinLine(address.postalCode, address.city), address.country].filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>); }

function OwnDataDocumentBlock({ record }) {
  const hasAddress = Object.entries(record.address).some(([field, value]) => field !== 'country' && Boolean(value));
  const hasContact = Object.values(record.contact).some(Boolean);
  const hasTaxAndRegister = Object.values(record.taxAndRegister).some(Boolean);
  const hasBank = Object.values(record.bank).some(Boolean);
  const hasFurtherDetails = Boolean(record.ownerOrManagingDirector || record.documentHeaderName || record.settings.isSmallBusiness || record.settings.defaultPaymentTermDays);
  return <article className="partner-document-block">
    <header className="partner-document-block-header"><div><h2>{getOwnDataDisplayName(record)}</h2></div></header>
    {hasAddress && <DetailSection title="Anschrift"><div className="partner-document-address"><AddressLines address={record.address} /></div></DetailSection>}
    <DetailSection title="Kontaktdaten" isVisible={hasContact}><LabeledLine label="E-Mail" value={record.contact.email} /><LabeledLine label="Telefon" value={record.contact.phone} /><LabeledLine label="Fax" value={record.contact.fax} /><LabeledLine label="Website" value={record.contact.website} /></DetailSection>
    <DetailSection title="Bankverbindung" isVisible={hasBank}><LabeledLine label="Kontoinhaber" value={record.bank.accountHolder} /><LabeledLine label="Bankname" value={record.bank.bankName} /><LabeledLine label="IBAN" value={record.bank.iban} /><LabeledLine label="BIC" value={record.bank.bic} /></DetailSection>
    <DetailSection title="Steuer- und Registerdaten" isVisible={hasTaxAndRegister}><LabeledLine label="Steuernummer" value={record.taxAndRegister.taxNumber} /><LabeledLine label="USt-IdNr." value={record.taxAndRegister.vatId} /><LabeledLine label="Handelsregistereintrag" value={[record.taxAndRegister.commercialRegister, record.taxAndRegister.registerNumber].filter(Boolean).join(' · ')} /><LabeledLine label="Registergericht" value={record.taxAndRegister.registerCourt} /></DetailSection>
    <DetailSection title="Weiteres" isVisible={hasFurtherDetails}><LabeledLine label="Inhaber / Geschäftsführer" value={record.ownerOrManagingDirector} /><LabeledLine label="Titel / Name / Markenname" value={record.documentHeaderName} /><p><strong>Kleinunternehmerregelung:</strong> {record.settings.isSmallBusiness ? 'Ja' : 'Nein'}</p>{record.settings.defaultPaymentTermDays && <p><strong>Standard-Zahlungsziel:</strong> {record.settings.defaultPaymentTermDays} Tage</p>}</DetailSection>
  </article>;
}

export default function OwnDataMasterDataDocument({ records, pagesRef, toolbar }) {
  const dateLabel = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date());
  return <section className="partner-document-preview own-data-document-preview" aria-labelledby="own-data-document-preview-title">
    <div className="partner-document-preview-heading"><h2 id="own-data-document-preview-title">Dokumentvorschau</h2></div>
    {toolbar}
    <div className="partner-document-pages" ref={pagesRef}>
      {records.map((record, index) => <article className="partner-document-page" aria-label={`Unternehmensstammdatenblatt ${index + 1}`} key={record.id}>
        <header className="partner-document-page-header"><strong>Belege24</strong><span>Eigene Unternehmensstammdaten</span></header>
        <div className="partner-document-page-meta"><span>Erstellungsdatum: {dateLabel}</span></div>
        <OwnDataDocumentBlock record={record} />
        {records.length > 1 && <footer className="partner-document-page-footer">Seite {index + 1} von {records.length}</footer>}
      </article>)}
      {!records.length && <article className="partner-document-page" aria-label="Leeres Unternehmensstammdatenblatt"><header className="partner-document-page-header"><strong>Belege24</strong><span>Eigene Unternehmensstammdaten</span></header><div className="partner-document-page-meta"><span>Erstellungsdatum: {dateLabel}</span></div><p className="partner-document-empty">Noch keine Unternehmen gespeichert.</p></article>}
    </div>
  </section>;
}
