import { useEffect, useRef, useState } from 'react';
import { partnerTypes } from '../../masterData/partnerModel.js';
import { resizeTextarea } from '../../utils/resizeTextarea.js';

function Field({ inputRef, label, className = '', ...props }) {
  return (
    <label className={`partner-field ${className}`.trim()}>
      <span>{label}</span>
      <input {...props} ref={inputRef} />
    </label>
  );
}

function SelectField({ label, children, className = '', ...props }) {
  return (
    <label className={`partner-field ${className}`.trim()}>
      <span>{label}</span>
      <select {...props}>{children}</select>
    </label>
  );
}

function TextareaField({ label, ...props }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    resizeTextarea(textareaRef.current);
  }, [props.value]);

  return (
    <label className="partner-field partner-field-wide">
      <span>{label}</span>
      <textarea
        {...props}
        ref={textareaRef}
        rows="3"
        onInput={(event) => {
          resizeTextarea(event.currentTarget);
          props.onInput?.(event);
        }}
      />
    </label>
  );
}

function hasEnteredValue(values, ignoredFields = []) {
  return Object.entries(values).some(([field, value]) => !ignoredFields.includes(field) && Boolean(value));
}

function PartnerFormCard({ id, title, detail, isOpen, onToggle, children }) {
  return (
    <section className="partner-form-card" aria-labelledby={`${id}-title`}>
      <button
        className="partner-form-card-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={onToggle}
      >
        <span>
          <span className="partner-form-card-title" id={`${id}-title`}>{title}</span>
          {detail && <span className="partner-form-card-detail"> · {detail}</span>}
        </span>
        <span className="partner-form-card-indicator" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="partner-form-card-content" id={`${id}-content`} hidden={!isOpen}>{children}</div>
    </section>
  );
}

function AddressFields({ address, idPrefix, onChange, includeContactPerson = false }) {
  const field = (name, label, className = '', type = 'text') => (
    <Field
      className={className}
      id={`${idPrefix}-${name}`}
      label={label}
      name={`${idPrefix}-${name}`}
      type={type}
      value={address[name]}
      onChange={(event) => onChange(name, event.target.value)}
    />
  );

  return (
    <div className="partner-form-grid partner-address-grid">
      {field('companyName', 'Firmenname')}
      {field('attention', 'Zusatz / zu Händen')}
      {field('department', 'Abteilung')}
      {includeContactPerson && field('contactPerson', 'Ansprechpartner')}
      {field('street', 'Straße', 'partner-field-street')}
      {field('houseNumber', 'Hausnummer')}
      {field('postalCode', 'PLZ')}
      {field('city', 'Ort', 'partner-field-city')}
      {field('country', 'Land', 'partner-field-country')}
    </div>
  );
}

function DeliveryAddressEditor({ address, index, isLast, isOpen, onToggle, onChange, onDuplicate, onDelete, onMove }) {
  const summary = [address.label || 'Unbenannte Lieferanschrift', address.city].filter(Boolean).join(' · ');

  return (
    <section className="delivery-address-editor" aria-labelledby={`delivery-${address.id}-title`}>
      <div className="delivery-address-header">
        <button
          className="delivery-address-toggle"
          type="button"
          id={`delivery-${address.id}-title`}
          aria-expanded={isOpen}
          aria-controls={`delivery-${address.id}-content`}
          onClick={onToggle}
        >
          <span>{summary}</span>
          <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
        <div className="delivery-address-actions" aria-label={`${address.label || 'Lieferanschrift'} verwalten`}>
          <button type="button" onClick={() => onMove(-1)} disabled={index === 0}>Nach oben</button>
          <button type="button" onClick={() => onMove(1)} disabled={isLast}>Nach unten</button>
          <button type="button" onClick={onDuplicate}>Duplizieren</button>
          <button type="button" onClick={onDelete}>Löschen</button>
        </div>
      </div>
      <div className="delivery-address-body" id={`delivery-${address.id}-content`} hidden={!isOpen}>
          <div className="partner-form-grid partner-delivery-meta-grid">
            <Field
              id={`delivery-${address.id}-label`}
              label="Bezeichnung (Pflichtfeld)"
              required
              value={address.label}
              onChange={(event) => onChange('label', event.target.value)}
            />
            <Field
              id={`delivery-${address.id}-phone`}
              label="Telefon"
              type="tel"
              value={address.phone}
              onChange={(event) => onChange('phone', event.target.value)}
            />
          </div>
          <AddressFields
            address={address}
            idPrefix={`delivery-${address.id}`}
            includeContactPerson
            onChange={onChange}
          />
          <TextareaField
            id={`delivery-${address.id}-notes`}
            label="Hinweis"
            value={address.notes}
            onChange={(event) => onChange('notes', event.target.value)}
          />
      </div>
    </section>
  );
}

export default function PartnerForm({
  partner,
  companyInputRef,
  onCompanyNameChange,
  onUpdateField,
  onAddDeliveryAddress,
  onUpdateDeliveryAddress,
  onDuplicateDeliveryAddress,
  onDeleteDeliveryAddress,
  onMoveDeliveryAddress,
}) {
  const [openSections, setOpenSections] = useState({
    partnerData: true,
    mainAddress: true,
    contact: false,
    tax: false,
    bank: false,
    deliveries: false,
    notes: false,
  });
  const [openDeliveryIdsByPartner, setOpenDeliveryIdsByPartner] = useState({});
  const previousDeliveryIdsRef = useRef(new Set(partner.deliveryAddresses.map((address) => address.id)));
  const hasPendingDeliveryRef = useRef(false);
  const update = (path, value) => onUpdateField(path, value);

  useEffect(() => {
    const currentIds = new Set(partner.deliveryAddresses.map((address) => address.id));

    if (hasPendingDeliveryRef.current) {
      const newAddressIds = [...currentIds].filter((id) => !previousDeliveryIdsRef.current.has(id));
      if (newAddressIds.length) {
        setOpenDeliveryIdsByPartner((current) => ({
          ...current,
          [partner.id]: [...new Set([...(current[partner.id] ?? []), ...newAddressIds])],
        }));
      }
      hasPendingDeliveryRef.current = false;
    }

    previousDeliveryIdsRef.current = currentIds;
  }, [partner.deliveryAddresses, partner.id]);

  function toggleSection(section) {
    setOpenSections((current) => ({ ...current, [section]: !current[section] }));
  }

  function isDeliveryOpen(addressId) {
    return (openDeliveryIdsByPartner[partner.id] ?? []).includes(addressId);
  }

  function toggleDeliveryAddress(addressId) {
    setOpenDeliveryIdsByPartner((current) => {
      const currentIds = current[partner.id] ?? [];
      const isOpen = currentIds.includes(addressId);
      return {
        ...current,
        [partner.id]: isOpen
          ? currentIds.filter((id) => id !== addressId)
          : [...currentIds, addressId],
      };
    });
  }

  function handleAddDeliveryAddress() {
    hasPendingDeliveryRef.current = true;
    onAddDeliveryAddress();
  }

  return (
    <form className="partner-form" onSubmit={(event) => event.preventDefault()}>
      <PartnerFormCard id="partner-data" title="Partnerdaten" isOpen={openSections.partnerData} onToggle={() => toggleSection('partnerData')}>
        <div className="partner-form-grid partner-form-grid-partner">
          <SelectField
            className="partner-field-type"
            id="partner-type"
            label="Partnerart"
            value={partner.type}
            onChange={(event) => update(['type'], event.target.value)}
          >
            {partnerTypes.map((type) => <option value={type.value} key={type.value}>{type.label}</option>)}
          </SelectField>
          <Field className="partner-field-company" id="partner-company-name" label="Firmenname" inputRef={companyInputRef} value={partner.companyName} onChange={(event) => onCompanyNameChange(event.target.value)} />
          <Field id="partner-legal-form" label="Rechtsform" value={partner.legalForm} onChange={(event) => update(['legalForm'], event.target.value)} />
          <Field id="partner-contact-person" label="Ansprechpartner" value={partner.contactPerson} onChange={(event) => update(['contactPerson'], event.target.value)} />
          <Field id="partner-department" label="Abteilung" value={partner.department} onChange={(event) => update(['department'], event.target.value)} />
          <Field id="partner-customer-number" label="Kundennummer" value={partner.customerNumber} onChange={(event) => update(['customerNumber'], event.target.value)} />
          <Field id="partner-supplier-number" label="Lieferantennummer" value={partner.supplierNumber} onChange={(event) => update(['supplierNumber'], event.target.value)} />
          <label className="partner-checkbox-field" htmlFor="partner-active">
            <input id="partner-active" type="checkbox" checked={partner.isActive} onChange={(event) => update(['isActive'], event.target.checked)} />
            <span>Aktiv</span>
          </label>
        </div>
      </PartnerFormCard>

      <PartnerFormCard
        id="partner-main-address"
        title="Hauptanschrift"
        detail={hasEnteredValue(partner.mainAddress, ['country']) ? 'Angaben vorhanden' : ''}
        isOpen={openSections.mainAddress}
        onToggle={() => toggleSection('mainAddress')}
      >
        <AddressFields address={partner.mainAddress} idPrefix="partner-main-address" onChange={(field, value) => update(['mainAddress', field], value)} />
      </PartnerFormCard>

      <PartnerFormCard
        id="partner-contact"
        title="Kontaktdaten"
        detail={hasEnteredValue(partner.contact) ? 'Angaben vorhanden' : ''}
        isOpen={openSections.contact}
        onToggle={() => toggleSection('contact')}
      >
        <div className="partner-form-grid partner-form-grid-contact">
          <Field id="partner-email" label="E-Mail" type="email" value={partner.contact.email} onChange={(event) => update(['contact', 'email'], event.target.value)} />
          <Field id="partner-phone" label="Telefon" type="tel" value={partner.contact.phone} onChange={(event) => update(['contact', 'phone'], event.target.value)} />
          <Field id="partner-mobile" label="Mobil" type="tel" value={partner.contact.mobile} onChange={(event) => update(['contact', 'mobile'], event.target.value)} />
          <Field id="partner-fax" label="Fax" type="tel" value={partner.contact.fax} onChange={(event) => update(['contact', 'fax'], event.target.value)} />
          <Field id="partner-website" label="Website" type="url" value={partner.contact.website} onChange={(event) => update(['contact', 'website'], event.target.value)} />
        </div>
      </PartnerFormCard>

      <PartnerFormCard id="partner-tax" title="Steuerdaten" detail={hasEnteredValue(partner.tax) ? 'Angaben vorhanden' : ''} isOpen={openSections.tax} onToggle={() => toggleSection('tax')}>
        <div className="partner-form-grid partner-form-grid-two-columns">
          <Field id="partner-vat-id" label="USt-IdNr." value={partner.tax.vatId} onChange={(event) => update(['tax', 'vatId'], event.target.value)} />
          <Field id="partner-tax-number" label="Steuernummer" value={partner.tax.taxNumber} onChange={(event) => update(['tax', 'taxNumber'], event.target.value)} />
        </div>
      </PartnerFormCard>

      <PartnerFormCard id="partner-bank" title="Bankdaten" detail={hasEnteredValue(partner.bank) ? 'Angaben vorhanden' : ''} isOpen={openSections.bank} onToggle={() => toggleSection('bank')}>
        <div className="partner-form-grid partner-form-grid-two-columns">
          <Field id="partner-account-holder" label="Kontoinhaber" value={partner.bank.accountHolder} onChange={(event) => update(['bank', 'accountHolder'], event.target.value)} />
          <Field id="partner-bank-name" label="Bankname" value={partner.bank.bankName} onChange={(event) => update(['bank', 'bankName'], event.target.value)} />
          <Field id="partner-iban" label="IBAN" value={partner.bank.iban} onChange={(event) => update(['bank', 'iban'], event.target.value)} />
          <Field id="partner-bic" label="BIC" value={partner.bank.bic} onChange={(event) => update(['bank', 'bic'], event.target.value)} />
        </div>
      </PartnerFormCard>

      <PartnerFormCard
        id="partner-deliveries"
        title="Lieferanschriften"
        detail={partner.deliveryAddresses.length ? `${partner.deliveryAddresses.length} vorhanden` : ''}
        isOpen={openSections.deliveries}
        onToggle={() => toggleSection('deliveries')}
      >
        <p className="partner-form-help">Lieferanschriften können später getrennt von der Hauptanschrift ausgewählt werden.</p>
        <div className="delivery-address-list">
          {partner.deliveryAddresses.map((address, index) => (
            <DeliveryAddressEditor
              address={address}
              index={index}
              isLast={index === partner.deliveryAddresses.length - 1}
              isOpen={isDeliveryOpen(address.id)}
              key={address.id}
              onToggle={() => toggleDeliveryAddress(address.id)}
              onChange={(field, value) => onUpdateDeliveryAddress(address.id, field, value)}
              onDuplicate={() => onDuplicateDeliveryAddress(address.id)}
              onDelete={() => onDeleteDeliveryAddress(address)}
              onMove={(direction) => onMoveDeliveryAddress(address.id, direction)}
            />
          ))}
        </div>
        <button className="partner-button" type="button" onClick={handleAddDeliveryAddress}>Lieferanschrift hinzufügen</button>
      </PartnerFormCard>

      <PartnerFormCard id="partner-notes" title="Notiz" detail={partner.notes ? 'Angaben vorhanden' : ''} isOpen={openSections.notes} onToggle={() => toggleSection('notes')}>
        <TextareaField id="partner-notes-text" label="Freie Notiz" value={partner.notes} onChange={(event) => update(['notes'], event.target.value)} />
      </PartnerFormCard>
    </form>
  );
}
