function Field({ inputRef, label, className = '', ...props }) {
  return <label className={`partner-field ${className}`.trim()}><span>{label}</span><input {...props} ref={inputRef} /></label>;
}

function FormArea({ title, hint, internal = false, children }) {
  return <section className={internal ? 'own-data-form-area is-internal' : 'own-data-form-area'}><div className="own-data-form-area-heading"><h3>{title}</h3><p>{hint}</p></div><div className="own-data-form-area-content">{children}</div></section>;
}

function FormSection({ title, children }) { return <section className="own-data-form-section"><h4>{title}</h4>{children}</section>; }

export default function OwnDataForm({ record, entryStatus, companyInputRef, onCompanyNameChange, onUpdateField, actions }) {
  const field = (path, label, className = '', type = 'text', extra = {}) => <Field id={`own-data-${record.id}-${path.join('-')}`} label={label} className={className} type={type} value={path.reduce((value, key) => value[key], record)} onChange={(event) => onUpdateField(path, event.target.value)} {...extra} />;
  const statusLabel = entryStatus === 'new' ? 'Neu' : entryStatus === 'edited' ? 'Bearbeitet' : 'Gespeichert';
  const statusClass = entryStatus === 'new' ? 'is-new' : entryStatus === 'edited' ? 'is-edited' : 'is-saved';
  return <form className="partner-form own-data-form" onSubmit={(event) => event.preventDefault()}>
    <div className={`own-data-status-card ${statusClass}`}><span className="own-data-status-name" title={record.companyName || 'Unbenanntes Unternehmen'}>{record.companyName || 'Unbenanntes Unternehmen'}</span><span className="own-data-status-label">{statusLabel}</span></div>
    <FormArea title="Angaben für die Schnellauswahl in Belege24-Dokumenten" hint="Diese Angaben können später schnell in z. B. Rechnungen, Angebote oder Lieferscheine übernommen werden.">
      <FormSection title="Unternehmensdaten"><div className="own-data-grid own-data-company-grid">
        <Field inputRef={companyInputRef} id={`own-data-${record.id}-company`} label="Unternehmensname" value={record.companyName} onChange={(event) => onCompanyNameChange(event.target.value)} />
        {field(['legalForm'], 'Rechtsform')}
        {field(['ownerOrManagingDirector'], 'Inhaber / Geschäftsführer')}
        {field(['contactPerson'], 'Ansprechpartner')}
        {field(['department'], 'Abteilung')}
      </div></FormSection>
      <FormSection title="Anschrift"><div className="own-data-grid own-data-address-grid">
        {field(['address', 'companyName'], 'Firmenname')}
        {field(['address', 'extra'], 'Zusatz')}
        {field(['address', 'street'], 'Straße', 'own-data-span-two')}
        {field(['address', 'houseNumber'], 'Hausnummer')}
        {field(['address', 'postalCode'], 'PLZ')}
        {field(['address', 'city'], 'Ort')}
        {field(['address', 'country'], 'Land')}
      </div></FormSection>
      <FormSection title="Kontaktdaten"><div className="own-data-grid">{field(['contact', 'email'], 'E-Mail', '', 'email')}{field(['contact', 'phone'], 'Telefon', '', 'tel')}{field(['contact', 'mobile'], 'Mobil', '', 'tel')}{field(['contact', 'fax'], 'Fax', '', 'tel')}{field(['contact', 'website'], 'Website', '', 'url')}</div></FormSection>
      <FormSection title="Steuer- und Registerdaten"><div className="own-data-grid">
        {field(['taxAndRegister', 'taxNumber'], 'Steuernummer')}{field(['taxAndRegister', 'vatId'], 'USt-IdNr.')}{field(['taxAndRegister', 'commercialRegister'], 'Handelsregister')}{field(['taxAndRegister', 'registerNumber'], 'Registernummer')}{field(['taxAndRegister', 'registerCourt'], 'Registergericht')}
      </div></FormSection>
      <FormSection title="Bankdaten"><div className="own-data-grid own-data-two-grid">{field(['bank', 'accountHolder'], 'Kontoinhaber')}{field(['bank', 'bankName'], 'Bankname')}{field(['bank', 'iban'], 'IBAN')}{field(['bank', 'bic'], 'BIC')}</div></FormSection>
      <FormSection title="Grundeinstellungen"><div className="own-data-grid own-data-two-grid"><label className="partner-checkbox-field"><input type="checkbox" checked={record.settings.isSmallBusiness} onChange={(event) => onUpdateField(['settings', 'isSmallBusiness'], event.target.checked)} /><span>Kleinunternehmerregelung</span></label><Field id={`own-data-${record.id}-payment-term`} label="Standard-Zahlungsziel in Tagen" type="number" min="1" step="1" inputMode="numeric" value={record.settings.defaultPaymentTermDays} onChange={(event) => onUpdateField(['settings', 'defaultPaymentTermDays'], event.target.value.replace(/\D/g, ''))} /></div></FormSection>
    </FormArea>
    <FormArea internal title="Angaben für die Stammdatenverwaltung" hint="Diese Angaben dienen ausschließlich der Verwaltung und werden in kein Dokument übernommen."><FormSection title="Status"><label className="partner-checkbox-field"><input type="checkbox" checked={record.isActive} onChange={(event) => onUpdateField(['isActive'], event.target.checked)} /><span>Aktiv</span></label></FormSection></FormArea>
    {actions && <div className="own-data-form-actions">{actions}</div>}
  </form>;
}
