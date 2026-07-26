import { useState } from 'react';

function Field({ inputRef, label, className = '', ...props }) {
  return <label className={`partner-field ${className}`.trim()}><span>{label}</span><input {...props} ref={inputRef} /></label>;
}

function FormCard({ id, title, detail, isOpen, onToggle, children }) {
  return (
    <section className="partner-form-card" aria-labelledby={`${id}-title`}>
      <button className="partner-form-card-toggle" type="button" aria-expanded={isOpen} aria-controls={`${id}-content`} onClick={onToggle}>
        <span><span className="partner-form-card-title" id={`${id}-title`}>{title}</span>{detail && <span className="partner-form-card-detail"> · {detail}</span>}</span>
        <span className="partner-form-card-indicator" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="partner-form-card-content" id={`${id}-content`} hidden={!isOpen}>{children}</div>
    </section>
  );
}

function hasValues(values, ignore = []) { return Object.entries(values).some(([key, value]) => !ignore.includes(key) && Boolean(value)); }

export default function OwnDataForm({ record, companyInputRef, onCompanyNameChange, onUpdateField }) {
  const [openSections, setOpenSections] = useState({ company: true, address: true, contact: false, tax: false, bank: false, settings: false });
  const toggle = (section) => setOpenSections((current) => ({ ...current, [section]: !current[section] }));
  const field = (path, label, className = '', type = 'text', extra = {}) => (
    <Field id={`own-data-${record.id}-${path.join('-')}`} label={label} className={className} type={type} value={path.reduce((value, key) => value[key], record)} onChange={(event) => onUpdateField(path, event.target.value)} {...extra} />
  );
  const companyDetail = [record.legalForm, record.ownerOrManagingDirector, record.contactPerson, record.department].filter(Boolean).join(' · ');
  const addressDetail = [record.address.city, record.address.country !== 'Deutschland' ? record.address.country : ''].filter(Boolean).join(' · ');
  return (
    <form className="partner-form" onSubmit={(event) => event.preventDefault()}>
      <FormCard id="own-company" title="Unternehmensdaten" detail={companyDetail} isOpen={openSections.company} onToggle={() => toggle('company')}>
        <div className="partner-form-grid partner-form-grid-partner">
          <Field inputRef={companyInputRef} id={`own-data-${record.id}-company`} label="Unternehmensname" value={record.companyName} onChange={(event) => onCompanyNameChange(event.target.value)} />
          {field(['legalForm'], 'Rechtsform')}
          {field(['ownerOrManagingDirector'], 'Inhaber / Geschäftsführer')}
          {field(['contactPerson'], 'Ansprechpartner')}
          {field(['department'], 'Abteilung')}
          <label className="partner-checkbox-field"><input type="checkbox" checked={record.isActive} onChange={(event) => onUpdateField(['isActive'], event.target.checked)} /> Aktiv</label>
        </div>
      </FormCard>
      <FormCard id="own-address" title="Anschrift" detail={addressDetail} isOpen={openSections.address} onToggle={() => toggle('address')}>
        <div className="partner-form-grid partner-address-grid">
          {field(['address', 'companyName'], 'Firmenname')}
          {field(['address', 'extra'], 'Zusatz')}
          {field(['address', 'street'], 'Straße', 'partner-field-street')}
          {field(['address', 'houseNumber'], 'Hausnummer')}
          {field(['address', 'postalCode'], 'PLZ')}
          {field(['address', 'city'], 'Ort', 'partner-field-city')}
          {field(['address', 'country'], 'Land', 'partner-field-country')}
        </div>
      </FormCard>
      <FormCard id="own-contact" title="Kontaktdaten" detail={hasValues(record.contact) ? 'Angaben vorhanden' : ''} isOpen={openSections.contact} onToggle={() => toggle('contact')}>
        <div className="partner-form-grid partner-form-grid-contact">
          {field(['contact', 'email'], 'E-Mail', '', 'email')}
          {field(['contact', 'phone'], 'Telefon', '', 'tel')}
          {field(['contact', 'mobile'], 'Mobil', '', 'tel')}
          {field(['contact', 'fax'], 'Fax', '', 'tel')}
          {field(['contact', 'website'], 'Website', '', 'url')}
        </div>
      </FormCard>
      <FormCard id="own-tax" title="Steuer- und Registerdaten" detail={hasValues(record.taxAndRegister) ? 'Angaben vorhanden' : ''} isOpen={openSections.tax} onToggle={() => toggle('tax')}>
        <div className="partner-form-grid partner-form-grid-contact">
          {field(['taxAndRegister', 'taxNumber'], 'Steuernummer')}
          {field(['taxAndRegister', 'vatId'], 'USt-IdNr.')}
          {field(['taxAndRegister', 'commercialRegister'], 'Handelsregister')}
          {field(['taxAndRegister', 'registerNumber'], 'Registernummer')}
          {field(['taxAndRegister', 'registerCourt'], 'Registergericht')}
        </div>
      </FormCard>
      <FormCard id="own-bank" title="Bankdaten" detail={hasValues(record.bank) ? 'Angaben vorhanden' : ''} isOpen={openSections.bank} onToggle={() => toggle('bank')}>
        <div className="partner-form-grid partner-form-grid-two-columns">
          {field(['bank', 'accountHolder'], 'Kontoinhaber')}
          {field(['bank', 'bankName'], 'Bankname')}
          {field(['bank', 'iban'], 'IBAN')}
          {field(['bank', 'bic'], 'BIC')}
        </div>
      </FormCard>
      <FormCard id="own-settings" title="Dokumentbezogene Grundeinstellungen" detail={record.settings.isSmallBusiness || record.settings.defaultPaymentTermDays ? 'Vorgaben vorhanden' : ''} isOpen={openSections.settings} onToggle={() => toggle('settings')}>
        <div className="partner-form-grid partner-form-grid-two-columns">
          <label className="partner-checkbox-field"><input type="checkbox" checked={record.settings.isSmallBusiness} onChange={(event) => onUpdateField(['settings', 'isSmallBusiness'], event.target.checked)} /> Kleinunternehmerregelung nach § 19 UStG</label>
          <Field id={`own-data-${record.id}-payment-term`} label="Standard-Zahlungsziel in Tagen" type="number" min="1" step="1" inputMode="numeric" value={record.settings.defaultPaymentTermDays} onChange={(event) => onUpdateField(['settings', 'defaultPaymentTermDays'], event.target.value.replace(/\D/g, ''))} />
        </div>
        <p className="partner-form-help">Diese Angaben dienen später nur als Vorschlag für einzelne Dokumente.</p>
      </FormCard>
    </form>
  );
}
