import FieldHelpTooltip from './FieldHelpTooltip.jsx';

function Field({ inputRef, label, helpText, className = '', ...props }) {
  return <label className={`partner-field ${className}`.trim()}><span>{label}{helpText && <FieldHelpTooltip label={label}>{helpText}</FieldHelpTooltip>}</span><input {...props} ref={inputRef} /></label>;
}

function FormArea({ title, hint, internal = false, children }) {
  return <section className={internal ? 'own-data-form-area is-internal' : 'own-data-form-area'}><div className="own-data-form-area-heading"><h3>{title}</h3><p>{hint}</p></div><div className="own-data-form-area-content">{children}</div></section>;
}

function FormSection({ title, children }) { return <section className="own-data-form-section"><h4>{title}</h4>{children}</section>; }

export default function OwnDataForm({ record, entryStatus, companyInputRef, onUpdateField, actions }) {
  const field = (path, label, className = '', type = 'text', extra = {}) => <Field id={`own-data-${record.id}-${path.join('-')}`} label={label} className={className} type={type} value={path.reduce((value, key) => value[key], record)} onChange={(event) => onUpdateField(path, event.target.value)} {...extra} />;
  const registerEntryValue = [record.taxAndRegister.commercialRegister, record.taxAndRegister.registerNumber].filter(Boolean).join(' · ');
  const statusLabel = entryStatus === 'new' ? 'Neu' : entryStatus === 'edited' ? 'Bearbeitet' : 'Im Datenblatt';
  const statusClass = entryStatus === 'new' ? 'is-new' : entryStatus === 'edited' ? 'is-edited' : 'is-saved';
  return <form className="partner-form own-data-form" onSubmit={(event) => event.preventDefault()}>
    <div className={`own-data-status-card ${statusClass}`}><span className="own-data-status-name" title={record.address.companyName || 'Unbenanntes Unternehmen'}>{record.address.companyName || 'Unbenanntes Unternehmen'}</span><span className="own-data-status-label">{statusLabel}</span></div>
    <FormArea title="Daten für Belege24-Dokumente" hint="Diese Angaben können später schnell in z. B. Rechnungen, Angebote oder Lieferscheine übernommen werden.">
      <FormSection title="Anschrift"><div className="own-data-grid own-data-address-grid">
        <Field inputRef={companyInputRef} id={`own-data-${record.id}-address-company-name`} label="Unternehmensname inkl. Rechtsform" helpText="Wird als Firmen- und Anschriftsname in Absenderangaben, Rücksendezeile und Fußbereich verwendet." className="own-data-span-two" value={record.address.companyName} onChange={(event) => onUpdateField(['address', 'companyName'], event.target.value)} />
        {field(['address', 'street'], 'Straße', 'own-data-span-two')}{field(['address', 'houseNumber'], 'Hausnummer')}{field(['address', 'postalCode'], 'PLZ')}{field(['address', 'city'], 'Ort')}{field(['address', 'country'], 'Land')}
      </div></FormSection>
      <FormSection title="Kontaktdaten"><div className="own-data-grid own-data-two-grid">{field(['contact', 'email'], 'E-Mail', '', 'email')}{field(['contact', 'phone'], 'Telefon', '', 'tel')}{field(['contact', 'fax'], 'Fax', '', 'tel')}{field(['contact', 'website'], 'Website', '', 'url')}</div></FormSection>
      <FormSection title="Bankdaten"><div className="own-data-grid own-data-two-grid">{field(['bank', 'bankName'], 'Bankname')}{field(['bank', 'iban'], 'IBAN')}{field(['bank', 'bic'], 'BIC')}</div></FormSection>
      <FormSection title="Steuer- und Registerdaten"><div className="own-data-grid own-data-two-grid">{field(['taxAndRegister', 'taxNumber'], 'Steuernummer')}{field(['taxAndRegister', 'vatId'], 'Umsatzsteuer-ID')}<Field id={`own-data-${record.id}-tax-and-register-register-entry`} label="Handelsregisternummer" helpText="Wird in den Unternehmens- oder Fußangaben ausgegeben, sofern das Dokument diese Daten verwendet." value={registerEntryValue} onChange={(event) => { onUpdateField(['taxAndRegister', 'commercialRegister'], event.target.value); onUpdateField(['taxAndRegister', 'registerNumber'], ''); }} />{field(['taxAndRegister', 'registerCourt'], 'Registergericht', '', 'text', { helpText: 'Wird zusammen mit dem Registereintrag in den Unternehmensangaben verwendet.' })}</div></FormSection>
      <FormSection title="Weiteres"><div className="own-data-grid own-data-two-grid">{field(['ownerOrManagingDirector'], 'Inhaber / Geschäftsführer', '', 'text', { helpText: 'Wird bei Bedarf in den Unternehmens- oder Fußangaben des Dokuments verwendet.' })}{field(['documentHeaderName'], 'Firmenname im Dokumentkopf', '', 'text', { helpText: 'Wird oben links im Dokumentkopf angezeigt, z. B. als Firmenname, Markenname oder Geschäftsbezeichnung.' })}<label className="partner-checkbox-field"><input type="checkbox" checked={record.settings.isSmallBusiness} onChange={(event) => onUpdateField(['settings', 'isSmallBusiness'], event.target.checked)} /><span>Kleinunternehmerregelung<FieldHelpTooltip label="Kleinunternehmerregelung">Wird als Vorgabe für die steuerliche Darstellung geeigneter Dokumente übernommen.</FieldHelpTooltip></span></label><Field id={`own-data-${record.id}-payment-term`} label="Standard-Zahlungsziel in Tagen" helpText="Wird bei neuen Dokumenten als Vorschlag für die Zahlungsfrist verwendet und kann dort geändert werden." type="number" min="1" step="1" inputMode="numeric" value={record.settings.defaultPaymentTermDays} onChange={(event) => onUpdateField(['settings', 'defaultPaymentTermDays'], event.target.value.replace(/\D/g, ''))} /></div></FormSection>
    </FormArea>
    {actions && <div className="own-data-form-actions">{actions}</div>}
  </form>;
}
