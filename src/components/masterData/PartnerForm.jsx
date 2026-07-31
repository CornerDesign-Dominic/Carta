import { useEffect, useRef, useState } from 'react';
import { resizeTextarea } from '../../utils/resizeTextarea.js';
import FieldHelpTooltip from './FieldHelpTooltip.jsx';

function Field({ inputRef, label, helpText, className = '', ...props }) {
  return <label className={`partner-field ${className}`.trim()}><span>{label}{helpText && <FieldHelpTooltip label={label}>{helpText}</FieldHelpTooltip>}</span><input {...props} ref={inputRef} /></label>;
}

function TextareaField({ label, helpText, ...props }) {
  const textareaRef = useRef(null);
  useEffect(() => { resizeTextarea(textareaRef.current); }, [props.value]);
  return <label className="partner-field partner-field-wide"><span>{label}{helpText && <FieldHelpTooltip label={label}>{helpText}</FieldHelpTooltip>}</span><textarea {...props} ref={textareaRef} rows="2" onInput={(event) => { resizeTextarea(event.currentTarget); props.onInput?.(event); }} /></label>;
}

function FormArea({ title, hint, internal = false, children }) {
  return <section className={internal ? 'partner-master-form-area is-internal' : 'partner-master-form-area'}>
    <div className="partner-master-form-area-heading"><h3>{title}</h3><p>{hint}</p></div>
    <div className="partner-master-form-area-content">{children}</div>
  </section>;
}

function FormSection({ title, helpText, collapsible = false, isOpen = true, onToggle, children }) {
  return <section className="partner-master-form-section"><h4>{collapsible ? <button className="partner-master-section-toggle" type="button" aria-expanded={isOpen} onClick={onToggle}>{title}{helpText && <FieldHelpTooltip label={title}>{helpText}</FieldHelpTooltip>}<span>{isOpen ? 'Ausblenden' : 'Anzeigen'}</span></button> : <>{title}{helpText && <FieldHelpTooltip label={title}>{helpText}</FieldHelpTooltip>}</>}</h4>{(!collapsible || isOpen) && children}</section>;
}

function DeliveryAddressFields({ address, idPrefix, onChange }) {
  const field = (name, label, className = '', type = 'text') => <Field className={className} id={`${idPrefix}-${name}`} label={label} name={`${idPrefix}-${name}`} type={type} value={address[name]} onChange={(event) => onChange(name, event.target.value)} />;
  return <div className="partner-master-grid partner-master-two-grid delivery-address-fields">
    {field('companyName', 'Firmenname', 'partner-master-span-two')}
    {field('attention', 'Zusatz / zu Händen')}
    {field('department', 'Abteilung')}
    {field('street', 'Straße')}
    {field('houseNumber', 'Hausnummer')}
    {field('postalCode', 'PLZ')}
    {field('city', 'Ort')}
    {field('country', 'Land')}
  </div>;
}

function DeliveryAddressEditor({ address, index, isLast, isOpen, onToggle, onChange, onDuplicate, onDelete, onMove }) {
  const summary = [address.companyName, address.city].filter(Boolean).join(' - ') || 'Unbenannte Lieferanschrift';
  return <section className="delivery-address-editor" aria-labelledby={`delivery-${address.id}-title`}>
    <div className="delivery-address-header">
      <button className={`delivery-address-toggle${isOpen ? ' is-open' : ''}`} type="button" id={`delivery-${address.id}-title`} aria-expanded={isOpen} aria-controls={`delivery-${address.id}-content`} title={summary} onClick={onToggle}><span>{summary}</span><span className="delivery-address-chevron" aria-hidden="true">›</span></button>
      <div className="delivery-address-actions" aria-label={`${address.label || 'Lieferanschrift'} verwalten`}>
        <button type="button" onClick={() => onMove(-1)} disabled={index === 0}>Nach oben</button>
        <button type="button" onClick={() => onMove(1)} disabled={isLast}>Nach unten</button>
        <button type="button" onClick={onDuplicate}>Duplizieren</button>
        <button type="button" onClick={onDelete}>Löschen</button>
      </div>
    </div>
    <div className="delivery-address-body" id={`delivery-${address.id}-content`} hidden={!isOpen}>
      <DeliveryAddressFields address={address} idPrefix={`delivery-${address.id}`} onChange={onChange} />
    </div>
  </section>;
}

export default function PartnerForm({
  partner, entryStatus, companyInputRef, onCompanyNameChange, onUpdateField, onAddDeliveryAddress,
  onUpdateDeliveryAddress, onDuplicateDeliveryAddress, onDeleteDeliveryAddress, onMoveDeliveryAddress, actions,
}) {
  const [openDeliveryIds, setOpenDeliveryIds] = useState([]);
  const [isContactSectionOpen, setIsContactSectionOpen] = useState(false);
  const previousDeliveryIdsRef = useRef(new Set(partner.deliveryAddresses.map((address) => address.id)));
  const hasPendingDeliveryRef = useRef(false);
  const update = (path, value) => onUpdateField(path, value);
  const combinedCompanyName = [partner.companyName, partner.legalForm].filter(Boolean).join(' ');
  const statusLabel = entryStatus === 'new' ? 'Neu' : entryStatus === 'edited' ? 'Bearbeitet' : 'Gespeichert';
  const statusClass = entryStatus === 'new' ? 'is-new' : entryStatus === 'edited' ? 'is-edited' : 'is-saved';

  useEffect(() => {
    const currentIds = new Set(partner.deliveryAddresses.map((address) => address.id));
    if (hasPendingDeliveryRef.current) {
      const newIds = [...currentIds].filter((id) => !previousDeliveryIdsRef.current.has(id));
      if (newIds.length) setOpenDeliveryIds((current) => [...new Set([...current, ...newIds])]);
      hasPendingDeliveryRef.current = false;
    }
    previousDeliveryIdsRef.current = currentIds;
  }, [partner.deliveryAddresses]);

  function handleAddDeliveryAddress() { hasPendingDeliveryRef.current = true; onAddDeliveryAddress(); }
  function toggleDeliveryAddress(addressId) { setOpenDeliveryIds((current) => current.includes(addressId) ? current.filter((id) => id !== addressId) : [...current, addressId]); }

  return <form className="partner-form partner-master-data-form" onSubmit={(event) => event.preventDefault()}>
    <div className={`partner-master-status-card ${statusClass}`}>
      <span className="partner-master-status-name" title={partner.companyName || 'Unbenannter Partner'}>{partner.companyName || 'Unbenannter Partner'}</span>
      <span className="partner-master-status-label">{statusLabel}</span>
    </div>
    <FormArea title="Angaben für die Schnellauswahl in Belege24-Dokumenten" hint="Diese Angaben können später schnell in z. B. Rechnungen, Angebote oder Lieferscheine übernommen werden.">
      <FormSection title="Anschrift">
        <div className="partner-master-grid partner-master-partner-grid">
          <Field className="partner-master-span-two" id="partner-company-name" label="Firmenname" inputRef={companyInputRef} value={combinedCompanyName} onChange={(event) => { onCompanyNameChange(event.target.value); update(['legalForm'], ''); }} />
          <Field id="partner-department" label="Abteilung" value={partner.department} onChange={(event) => update(['department'], event.target.value)} />
          <Field id="partner-main-address-attention" label="Zusatz / zu Händen" value={partner.mainAddress.attention} onChange={(event) => update(['mainAddress', 'attention'], event.target.value)} />
          <Field id="partner-main-address-street" label="Straße" value={partner.mainAddress.street} onChange={(event) => update(['mainAddress', 'street'], event.target.value)} />
          <Field id="partner-main-address-house-number" label="Hausnummer" value={partner.mainAddress.houseNumber} onChange={(event) => update(['mainAddress', 'houseNumber'], event.target.value)} />
          <Field id="partner-main-address-postal-code" label="PLZ" value={partner.mainAddress.postalCode} onChange={(event) => update(['mainAddress', 'postalCode'], event.target.value)} />
          <Field id="partner-main-address-city" label="Ort" value={partner.mainAddress.city} onChange={(event) => update(['mainAddress', 'city'], event.target.value)} />
          <Field id="partner-main-address-country" label="Land" value={partner.mainAddress.country} onChange={(event) => update(['mainAddress', 'country'], event.target.value)} />
        </div>
      </FormSection>
      <FormSection title="Kontaktdaten (optional)" collapsible isOpen={isContactSectionOpen} onToggle={() => setIsContactSectionOpen((current) => !current)}><div className="partner-master-grid partner-master-two-grid"><Field id="partner-email" label="E-Mail" type="email" value={partner.contact.email} onChange={(event) => update(['contact', 'email'], event.target.value)} /><Field id="partner-phone" label="Telefon" type="tel" value={partner.contact.phone} onChange={(event) => update(['contact', 'phone'], event.target.value)} /></div></FormSection>
      <FormSection title="Steuerdaten"><div className="partner-master-grid partner-master-two-grid"><Field id="partner-vat-id" label="USt-IdNr." value={partner.tax.vatId} onChange={(event) => update(['tax', 'vatId'], event.target.value)} /><Field id="partner-tax-number" label="Steuernummer" value={partner.tax.taxNumber} onChange={(event) => update(['tax', 'taxNumber'], event.target.value)} /></div></FormSection>
      <FormSection title="Bankdaten"><div className="partner-master-grid partner-master-two-grid"><Field id="partner-account-holder" label="Kontoinhaber" value={partner.bank.accountHolder} onChange={(event) => update(['bank', 'accountHolder'], event.target.value)} /><Field id="partner-bank-name" label="Bankname" value={partner.bank.bankName} onChange={(event) => update(['bank', 'bankName'], event.target.value)} /><Field id="partner-iban" label="IBAN" value={partner.bank.iban} onChange={(event) => update(['bank', 'iban'], event.target.value)} /><Field id="partner-bic" label="BIC" value={partner.bank.bic} onChange={(event) => update(['bank', 'bic'], event.target.value)} /></div></FormSection>
      <FormSection title="Weiteres"><div className="partner-master-grid partner-master-two-grid"><Field id="partner-customer-number" label="Kundennummer" helpText="Kann später in das Kundennummernfeld von Rechnungen, Angeboten oder anderen Dokumenten übernommen werden." value={partner.customerNumber} onChange={(event) => update(['customerNumber'], event.target.value)} /><Field id="partner-supplier-number" label="Lieferantennummer" helpText="Dient der Stammdatenverwaltung und wird nur in passenden späteren Vorgängen verwendet." value={partner.supplierNumber} onChange={(event) => update(['supplierNumber'], event.target.value)} /></div></FormSection>
      <FormSection title="Lieferanschriften" helpText="Können bei Warenrechnungen und Lieferscheinen unabhängig von der Hauptanschrift ausgewählt werden.">
        <p className="partner-form-help">Lieferanschriften können später getrennt von der Hauptanschrift ausgewählt werden.</p>
        <div className="delivery-address-list">{partner.deliveryAddresses.map((address, index) => <DeliveryAddressEditor key={address.id} address={address} index={index} isLast={index === partner.deliveryAddresses.length - 1} isOpen={openDeliveryIds.includes(address.id)} onToggle={() => toggleDeliveryAddress(address.id)} onChange={(field, value) => onUpdateDeliveryAddress(address.id, field, value)} onDuplicate={() => onDuplicateDeliveryAddress(address.id)} onDelete={() => onDeleteDeliveryAddress(address)} onMove={(direction) => onMoveDeliveryAddress(address.id, direction)} />)}</div>
        <button className="partner-button" type="button" onClick={handleAddDeliveryAddress}>Lieferanschrift hinzufügen</button>
      </FormSection>
    </FormArea>
    <FormArea internal title="Angaben für die Stammdatenverwaltung" hint="Diese Angaben dienen ausschließlich der Verwaltung und werden in kein Dokument übernommen.">
      <FormSection title="Status"><label className="partner-checkbox-field" htmlFor="partner-active"><input id="partner-active" type="checkbox" checked={partner.isActive} onChange={(event) => update(['isActive'], event.target.checked)} /><span>Aktiv</span></label></FormSection>
      <FormSection title="Interne Notiz" helpText="Bleibt ausschließlich in der Stammdatenverwaltung und wird nicht in Dokumente übernommen."><TextareaField id="partner-notes-text" label="Notiz" value={partner.notes} onChange={(event) => update(['notes'], event.target.value)} /></FormSection>
    </FormArea>
    {actions && <div className="partner-master-form-actions">{actions}</div>}
  </form>;
}
