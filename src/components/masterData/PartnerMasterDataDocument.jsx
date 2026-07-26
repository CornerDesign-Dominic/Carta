import { Children } from 'react';
import { getPartnerDisplayName, getPartnerTypeLabel } from '../../masterData/partnerModel.js';

function joinLine(...values) {
  return values.filter(Boolean).join(' ');
}

function DetailSection({ title, children }) {
  const items = Children.toArray(children).filter(Boolean);

  if (!items.length) {
    return null;
  }

  return (
    <section className="partner-document-section">
      <h3>{title}</h3>
      <div>{items}</div>
    </section>
  );
}

function AddressLines({ address }) {
  return [
    address.companyName,
    address.attention,
    address.department,
    joinLine(address.street, address.houseNumber),
    joinLine(address.postalCode, address.city),
    address.country,
  ].filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>);
}

function LabeledLine({ label, value }) {
  return value ? <p><strong>{label}:</strong> {value}</p> : null;
}

function PartnerDocumentBlock({ partner, index }) {
  const hasMainAddress = Object.entries(partner.mainAddress)
    .some(([field, value]) => field !== 'country' && Boolean(value));

  return (
    <article className="partner-document-block">
      <header className="partner-document-block-header">
        <div>
          <h2><span className="partner-document-index">{String(index + 1).padStart(2, '0')}</span> {getPartnerDisplayName(partner)}</h2>
          <p>{getPartnerTypeLabel(partner.type)} · {partner.isActive ? 'Aktiv' : 'Inaktiv'}</p>
        </div>
        {partner.legalForm && <span>{partner.legalForm}</span>}
      </header>

      {hasMainAddress && (
        <DetailSection title="Hauptanschrift">
          <div className="partner-document-address"><AddressLines address={partner.mainAddress} /></div>
        </DetailSection>
      )}

      <DetailSection title="Kontakt">
        <LabeledLine label="E-Mail" value={partner.contact.email} />
        <LabeledLine label="Telefon" value={partner.contact.phone} />
        <LabeledLine label="Mobil" value={partner.contact.mobile} />
        <LabeledLine label="Fax" value={partner.contact.fax} />
        <LabeledLine label="Website" value={partner.contact.website} />
      </DetailSection>

      <DetailSection title="Referenzen">
        <LabeledLine label="Kundennummer" value={partner.customerNumber} />
        <LabeledLine label="Lieferantennummer" value={partner.supplierNumber} />
      </DetailSection>

      <DetailSection title="Steuerdaten">
        <LabeledLine label="USt-IdNr." value={partner.tax.vatId} />
        <LabeledLine label="Steuernummer" value={partner.tax.taxNumber} />
      </DetailSection>

      <DetailSection title="Bankdaten">
        <LabeledLine label="Kontoinhaber" value={partner.bank.accountHolder} />
        <LabeledLine label="Bankname" value={partner.bank.bankName} />
        <LabeledLine label="IBAN" value={partner.bank.iban} />
        <LabeledLine label="BIC" value={partner.bank.bic} />
      </DetailSection>

      {partner.deliveryAddresses.length > 0 && (
        <section className="partner-document-section">
          <h3>Lieferanschriften</h3>
          <ol className="partner-document-deliveries">
            {partner.deliveryAddresses.map((address) => (
              <li key={address.id}>
                <strong>{address.label || 'Unbenannte Lieferanschrift'}</strong>
                <div className="partner-document-address"><AddressLines address={address} /></div>
                {address.contactPerson && <p>Ansprechpartner: {address.contactPerson}</p>}
                {address.phone && <p>Telefon: {address.phone}</p>}
                {address.notes && <p>Hinweis: {address.notes}</p>}
              </li>
            ))}
          </ol>
        </section>
      )}

      {partner.notes && (
        <section className="partner-document-section">
          <h3>Notiz</h3>
          <p className="partner-document-notes">{partner.notes}</p>
        </section>
      )}
    </article>
  );
}

export default function PartnerMasterDataDocument({ partners }) {
  const dateLabel = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date());

  return (
    <section className="partner-document-preview" aria-labelledby="partner-document-preview-title">
      <div className="partner-document-preview-heading">
        <h2 id="partner-document-preview-title">Dokumentvorschau</h2>
        <p>Die Vorschau zeigt den späteren Aufbau der Stammdatensammlung.</p>
      </div>
      <div className="partner-document-pages">
        {partners.map((partner, index) => (
          <article className="partner-document-page" aria-label={`Stammdatenblatt ${index + 1}`} key={partner.id}>
            <header className="partner-document-page-header">
              <strong>Belege24</strong>
              <span>Stammdatensammlung</span>
            </header>
            <div className="partner-document-page-meta">
              <span>Anzahl Partner: {partners.length}</span>
              <span>Stand: {dateLabel}</span>
            </div>
            <h1 className="partner-document-title">Partner- und Empfängerstammdaten</h1>
            <PartnerDocumentBlock partner={partner} index={index} />
            <footer className="partner-document-page-footer">Seite {index + 1}</footer>
          </article>
        ))}
      </div>
    </section>
  );
}
