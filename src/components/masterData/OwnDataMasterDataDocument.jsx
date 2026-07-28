import { getOwnDataDisplayName } from '../../masterData/ownDataModel.js';

function joinLine(...values) { return values.filter(Boolean).join(' '); }
function LabeledLine({ label, value }) { return value ? <p><strong>{label}:</strong> {value}</p> : null; }
function DetailSection({ title, isVisible = true, children }) { return isVisible ? <section className="partner-document-section"><h3>{title}</h3><div>{children}</div></section> : null; }
function AddressLines({ address }) { return [address.companyName, address.extra, joinLine(address.street, address.houseNumber), joinLine(address.postalCode, address.city), address.country].filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>); }

function OwnDataDocumentBlock({ record, index }) {
  const hasAddress = Object.entries(record.address).some(([field, value]) => field !== 'country' && Boolean(value));
  const hasCompanyData = [record.ownerOrManagingDirector, record.contactPerson, record.department].some(Boolean);
  const hasContact = Object.values(record.contact).some(Boolean);
  const hasTaxAndRegister = Object.values(record.taxAndRegister).some(Boolean);
  const hasBank = Object.values(record.bank).some(Boolean);
  return <article className="partner-document-block">
    <header className="partner-document-block-header"><div><h2><span className="partner-document-index">{String(index + 1).padStart(2, '0')}</span> {getOwnDataDisplayName(record)}</h2><p>{record.legalForm ? `${record.legalForm} · ` : ''}{record.isActive ? 'Aktiv' : 'Inaktiv'}</p></div></header>
    <DetailSection title="Unternehmensdaten" isVisible={hasCompanyData}><LabeledLine label="Inhaber / Geschäftsführer" value={record.ownerOrManagingDirector} /><LabeledLine label="Ansprechpartner" value={record.contactPerson} /><LabeledLine label="Abteilung" value={record.department} /></DetailSection>
    {hasAddress && <DetailSection title="Anschrift"><div className="partner-document-address"><AddressLines address={record.address} /></div></DetailSection>}
    <DetailSection title="Kontakt" isVisible={hasContact}><LabeledLine label="E-Mail" value={record.contact.email} /><LabeledLine label="Telefon" value={record.contact.phone} /><LabeledLine label="Mobil" value={record.contact.mobile} /><LabeledLine label="Fax" value={record.contact.fax} /><LabeledLine label="Website" value={record.contact.website} /></DetailSection>
    <DetailSection title="Steuer- und Registerdaten" isVisible={hasTaxAndRegister}><LabeledLine label="Steuernummer" value={record.taxAndRegister.taxNumber} /><LabeledLine label="USt-IdNr." value={record.taxAndRegister.vatId} /><LabeledLine label="Handelsregister" value={record.taxAndRegister.commercialRegister} /><LabeledLine label="Registernummer" value={record.taxAndRegister.registerNumber} /><LabeledLine label="Registergericht" value={record.taxAndRegister.registerCourt} /></DetailSection>
    <DetailSection title="Bankverbindung" isVisible={hasBank}><LabeledLine label="Kontoinhaber" value={record.bank.accountHolder} /><LabeledLine label="Bankname" value={record.bank.bankName} /><LabeledLine label="IBAN" value={record.bank.iban} /><LabeledLine label="BIC" value={record.bank.bic} /></DetailSection>
    <DetailSection title="Grundeinstellungen"><p><strong>Kleinunternehmerregelung:</strong> {record.settings.isSmallBusiness ? 'Ja' : 'Nein'}</p>{record.settings.defaultPaymentTermDays && <p><strong>Standard-Zahlungsziel:</strong> {record.settings.defaultPaymentTermDays} Tage</p>}</DetailSection>
  </article>;
}

export default function OwnDataMasterDataDocument({ records, pagesRef, toolbar }) {
  const dateLabel = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date());
  return <section className="partner-document-preview" aria-labelledby="own-data-document-preview-title">
    <div className="partner-document-preview-heading"><h2 id="own-data-document-preview-title">Dokumentvorschau</h2></div>
    {toolbar}
    <div className="partner-document-pages" ref={pagesRef}>
      {records.map((record, index) => <article className="partner-document-page" aria-label={`Unternehmensstammdatenblatt ${index + 1}`} key={record.id}>
        <header className="partner-document-page-header"><strong>Belege24</strong><span>Eigene Unternehmensstammdaten</span></header>
        <div className="partner-document-page-meta"><span>Anzahl Unternehmen: {records.length}</span><span>Stand: {dateLabel}</span></div>
        <h1 className="partner-document-title">Eigene Unternehmensstammdaten</h1>
        <OwnDataDocumentBlock record={record} index={index} />
        <footer className="partner-document-page-footer">Seite {index + 1}</footer>
      </article>)}
      {!records.length && <article className="partner-document-page" aria-label="Leeres Unternehmensstammdatenblatt"><header className="partner-document-page-header"><strong>Belege24</strong><span>Eigene Unternehmensstammdaten</span></header><div className="partner-document-page-meta"><span>Anzahl Unternehmen: 0</span><span>Stand: {dateLabel}</span></div><h1 className="partner-document-title">Eigene Unternehmensstammdaten</h1><p className="partner-document-empty">Noch keine Unternehmen gespeichert.</p><footer className="partner-document-page-footer">Seite 1</footer></article>}
    </div>
  </section>;
}
