import { useEffect, useRef } from 'react';
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

function SelectField({ label, children, ...props }) {
  return (
    <label className="partner-field">
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

function AddressFields({ address, idPrefix, onChange, includeContactPerson = false }) {
  const field = (name, label, type = 'text') => (
    <Field
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
      {field('street', 'Straße')}
      {field('houseNumber', 'Hausnummer')}
      {field('postalCode', 'PLZ')}
      {field('city', 'Ort')}
      {field('country', 'Land')}
    </div>
  );
}

function DeliveryAddressEditor({ address, index, isLast, onChange, onDuplicate, onDelete, onMove }) {
  const summary = [address.label || 'Unbenannte Lieferanschrift', address.companyName, address.city]
    .filter(Boolean)
    .join(' · ');

  return (
    <details className="delivery-address-editor">
      <summary>
        <span>{summary}</span>
        <span className="delivery-address-summary-action">Bearbeiten</span>
      </summary>
      <div className="delivery-address-body">
        <div className="delivery-address-actions" aria-label={`${address.label || 'Lieferanschrift'} verwalten`}>
          <button type="button" onClick={onDuplicate}>Duplizieren</button>
          <button type="button" onClick={() => onMove(-1)} disabled={index === 0}>Nach oben</button>
          <button type="button" onClick={() => onMove(1)} disabled={isLast}>Nach unten</button>
          <button type="button" onClick={onDelete}>Löschen</button>
        </div>
        <div className="partner-form-grid">
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
    </details>
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
  const update = (path, value) => onUpdateField(path, value);

  return (
    <form className="partner-form" onSubmit={(event) => event.preventDefault()}>
      <fieldset className="partner-form-section">
        <legend>Partnerdaten</legend>
        <div className="partner-form-grid">
          <SelectField
            id="partner-type"
            label="Partnerart"
            value={partner.type}
            onChange={(event) => update(['type'], event.target.value)}
          >
            {partnerTypes.map((type) => <option value={type.value} key={type.value}>{type.label}</option>)}
          </SelectField>
          <Field
            id="partner-company-name"
            label="Firmenname"
            inputRef={companyInputRef}
            value={partner.companyName}
            onChange={(event) => onCompanyNameChange(event.target.value)}
          />
          <Field id="partner-legal-form" label="Rechtsform" value={partner.legalForm} onChange={(event) => update(['legalForm'], event.target.value)} />
          <Field id="partner-contact-person" label="Ansprechpartner" value={partner.contactPerson} onChange={(event) => update(['contactPerson'], event.target.value)} />
          <Field id="partner-department" label="Abteilung" value={partner.department} onChange={(event) => update(['department'], event.target.value)} />
          <Field id="partner-customer-number" label="Kundennummer" value={partner.customerNumber} onChange={(event) => update(['customerNumber'], event.target.value)} />
          <Field id="partner-supplier-number" label="Lieferantennummer" value={partner.supplierNumber} onChange={(event) => update(['supplierNumber'], event.target.value)} />
          <label className="partner-checkbox-field" htmlFor="partner-active">
            <input id="partner-active" type="checkbox" checked={partner.isActive} onChange={(event) => update(['isActive'], event.target.checked)} />
            <span>Partner ist aktiv</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="partner-form-section">
        <legend>Hauptanschrift</legend>
        <AddressFields
          address={partner.mainAddress}
          idPrefix="partner-main-address"
          onChange={(field, value) => update(['mainAddress', field], value)}
        />
      </fieldset>

      <fieldset className="partner-form-section">
        <legend>Kontaktdaten</legend>
        <div className="partner-form-grid">
          <Field id="partner-email" label="E-Mail" type="email" value={partner.contact.email} onChange={(event) => update(['contact', 'email'], event.target.value)} />
          <Field id="partner-phone" label="Telefon" type="tel" value={partner.contact.phone} onChange={(event) => update(['contact', 'phone'], event.target.value)} />
          <Field id="partner-mobile" label="Mobil" type="tel" value={partner.contact.mobile} onChange={(event) => update(['contact', 'mobile'], event.target.value)} />
          <Field id="partner-fax" label="Fax" type="tel" value={partner.contact.fax} onChange={(event) => update(['contact', 'fax'], event.target.value)} />
          <Field id="partner-website" label="Website" type="url" value={partner.contact.website} onChange={(event) => update(['contact', 'website'], event.target.value)} />
        </div>
      </fieldset>

      <fieldset className="partner-form-section">
        <legend>Steuerdaten</legend>
        <div className="partner-form-grid">
          <Field id="partner-vat-id" label="USt-IdNr." value={partner.tax.vatId} onChange={(event) => update(['tax', 'vatId'], event.target.value)} />
          <Field id="partner-tax-number" label="Steuernummer" value={partner.tax.taxNumber} onChange={(event) => update(['tax', 'taxNumber'], event.target.value)} />
        </div>
      </fieldset>

      <fieldset className="partner-form-section">
        <legend>Bankdaten</legend>
        <div className="partner-form-grid">
          <Field id="partner-account-holder" label="Kontoinhaber" value={partner.bank.accountHolder} onChange={(event) => update(['bank', 'accountHolder'], event.target.value)} />
          <Field id="partner-bank-name" label="Bankname" value={partner.bank.bankName} onChange={(event) => update(['bank', 'bankName'], event.target.value)} />
          <Field id="partner-iban" label="IBAN" value={partner.bank.iban} onChange={(event) => update(['bank', 'iban'], event.target.value)} />
          <Field id="partner-bic" label="BIC" value={partner.bank.bic} onChange={(event) => update(['bank', 'bic'], event.target.value)} />
        </div>
      </fieldset>

      <fieldset className="partner-form-section">
        <legend>Lieferanschriften</legend>
        <p className="partner-form-help">Lieferanschriften können später getrennt von der Hauptanschrift ausgewählt werden.</p>
        <div className="delivery-address-list">
          {partner.deliveryAddresses.map((address, index) => (
            <DeliveryAddressEditor
              address={address}
              index={index}
              isLast={index === partner.deliveryAddresses.length - 1}
              key={address.id}
              onChange={(field, value) => onUpdateDeliveryAddress(address.id, field, value)}
              onDuplicate={() => onDuplicateDeliveryAddress(address.id)}
              onDelete={() => onDeleteDeliveryAddress(address)}
              onMove={(direction) => onMoveDeliveryAddress(address.id, direction)}
            />
          ))}
        </div>
        <button className="partner-button" type="button" onClick={onAddDeliveryAddress}>Lieferanschrift hinzufügen</button>
      </fieldset>

      <fieldset className="partner-form-section">
        <legend>Notiz</legend>
        <TextareaField
          id="partner-notes"
          label="Freie Notiz"
          value={partner.notes}
          onChange={(event) => update(['notes'], event.target.value)}
        />
      </fieldset>
    </form>
  );
}
