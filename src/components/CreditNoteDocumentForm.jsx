import { MoveDownIcon, MoveUpIcon } from './documentBlocks/FieldActions.jsx';

function OfferPanelInput({
  autoComplete = 'off',
  className = '',
  inputMode,
  label,
  name,
  onChange,
  placeholder = '',
  spellCheck,
  type = 'text',
  value,
}) {
  const effectivePlaceholder = placeholder || getCreditNoteInputPlaceholder(name);
  const effectiveAutoComplete = autoComplete === 'off' ? getCreditNoteAutoComplete(name) : autoComplete;
  const documentValue = value ?? effectivePlaceholder;

  return (
    <label className={`invoice-panel-field${className ? ` ${className}` : ''}`}>
      <span>{label}</span>
      <input
        autoComplete={effectiveAutoComplete}
        inputMode={inputMode}
        name={name}
        placeholder={effectivePlaceholder}
        spellCheck={spellCheck}
        type={type}
        value={getFormValue(documentValue, effectivePlaceholder)}
        onChange={(event) => onChange(getDocumentValue(event.target.value, effectivePlaceholder))}
      />
    </label>
  );
}

function OfferPanelTextarea({ label, name, onChange, placeholder = '', value }) {
  const documentValue = value ?? placeholder;

  return (
    <label className="invoice-panel-field invoice-panel-field-wide">
      <span>{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        value={getFormValue(documentValue, placeholder)}
        onChange={(event) => onChange(getDocumentValue(event.target.value, placeholder))}
      />
    </label>
  );
}

const defaultDetails = {
  creditNoteNumber: 'GUT-2026-001',
  creditNoteDate: '2026-05-12',
  serviceDate: '2026-05-10',
  internalReference: 'INT-1001',
  externalReference: 'EXT-4711',
  customerReference: 'K-2048',
};

const defaultPosition = {
  description: 'Leistung beschreiben',
  unitPrice: '0',
  quantity: '1',
  unit: 'Stk.',
  taxRate: '19',
};

const creditNoteFormDefaults = {
  sender: {
    company: 'Belege24 Muster GmbH',
    senderLine: 'Belege24 Muster GmbH - Musterstra\u00dfe 12 - 10115 Berlin',
    email: 'kontakt@belege24.com',
    phone: '+49 30 123456',
    fax: '+49 30 123457',
    website: 'www.belege24.com',
  },
  recipient: {
    company: 'Beispielkunde GmbH',
    attention: 'z. Hd. Frau Beispiel',
    name: 'Einkauf',
    street: 'Kundenstra\u00dfe 8',
    cityLine: '20095 Hamburg',
  },
  details: defaultDetails,
  footer: {
    company: {
      companyName: 'Belege24 Muster GmbH',
      street: 'Musterstraße',
      houseNumber: '12',
      postalCode: '10115',
      city: 'Berlin',
      extra: '',
    },
    tax: {
      vatIdLabel: 'USt-IdNr.:',
      vatId: 'DE123456789',
      taxNumberLabel: 'Steuernummer:',
      taxNumber: '12/345/67890',
      commercialRegister: 'HRB 123456',
      representation: 'Geschäftsführer: Max Mustermann',
    },
    bank: {
      bankName: 'Musterbank',
      ibanLabel: 'IBAN:',
      iban: 'DE00 0000 0000 0000 0000 00',
      bicLabel: 'BIC:',
      bic: 'COBADEFFXXX',
      bankExtra: '',
    },
  },
  textBlocks: {
    intro: 'für die unten aufgeführten Leistungen erstellen wir Ihnen die folgende Gutschrift:',
    closing:
      'Bitte prüfen Sie die Angaben zu Leistungsdatum, Positionen und Betrag. Für Rückfragen stehen wir Ihnen jederzeit gerne zur Verfügung.',
  },
  position: defaultPosition,
};

const defaultSenderAddress = {
  company: creditNoteFormDefaults.sender.company,
  street: 'Musterstraße',
  houseNumber: '12',
  postalCode: '10115',
  city: 'Berlin',
};
const defaultRecipientStreet = { street: 'Kundenstraße', houseNumber: '8' };
const defaultRecipientCity = { postalCode: '20095', city: 'Hamburg' };

const creditNoteFooterLabelFields = {
  vatId: 'vatIdLabel',
  taxNumber: 'taxNumberLabel',
  iban: 'ibanLabel',
  bic: 'bicLabel',
};

function getFormValue(value, placeholder) {
  return value === placeholder ? '' : value;
}

function getDocumentValue(value, placeholder) {
  return value === '' ? placeholder : value;
}

function getFooterAutoComplete(field) {
  switch (field) {
    case 'companyName':
      return 'organization';
    case 'companyStreet':
      return 'address-line1';
    case 'companyCity':
      return 'address-level2';
    default:
      return 'off';
  }
}

function getCreditNoteInputPlaceholder(name) {
  if (name.startsWith('position-') && name.endsWith('-description')) return creditNoteFormDefaults.position.description;
  if (name.startsWith('position-') && name.endsWith('-unit-price')) return creditNoteFormDefaults.position.unitPrice;
  if (name.startsWith('position-') && name.endsWith('-quantity')) return creditNoteFormDefaults.position.quantity;
  if (name.startsWith('position-') && name.endsWith('-unit')) return creditNoteFormDefaults.position.unit;
  if (name.startsWith('position-') && name.endsWith('-tax-rate')) return creditNoteFormDefaults.position.taxRate;

  const placeholders = {
    'sender-company': defaultSenderAddress.company,
    'sender-street': defaultSenderAddress.street,
    'sender-house-number': defaultSenderAddress.houseNumber,
    'sender-postal-code': defaultSenderAddress.postalCode,
    'sender-city': defaultSenderAddress.city,
    'sender-line': creditNoteFormDefaults.sender.senderLine,
    'sender-email': creditNoteFormDefaults.sender.email,
    'sender-website': creditNoteFormDefaults.sender.website,
    'sender-phone': creditNoteFormDefaults.sender.phone,
    'sender-fax': creditNoteFormDefaults.sender.fax,
    'recipient-company': creditNoteFormDefaults.recipient.company,
    'recipient-name': creditNoteFormDefaults.recipient.name,
    'recipient-street': defaultRecipientStreet.street,
    'recipient-house-number': defaultRecipientStreet.houseNumber,
    'recipient-postal-code': defaultRecipientCity.postalCode,
    'recipient-city': defaultRecipientCity.city,
    'recipient-attention': creditNoteFormDefaults.recipient.attention,
    'credit-note-id': creditNoteFormDefaults.details.creditNoteNumber,
    'credit-note-date': creditNoteFormDefaults.details.creditNoteDate,
    'service-date': creditNoteFormDefaults.details.serviceDate,
    'internal-reference': creditNoteFormDefaults.details.internalReference,
    'external-reference': creditNoteFormDefaults.details.externalReference,
    'customer-reference': creditNoteFormDefaults.details.customerReference,
  };

  if (name.startsWith('footer-')) {
    const field = name.replace('footer-', '');
    const footerPlaceholders = {
      companyName: creditNoteFormDefaults.footer.company.companyName,
      companyStreetName: creditNoteFormDefaults.footer.company.street,
      companyHouseNumber: creditNoteFormDefaults.footer.company.houseNumber,
      companyPostalCode: creditNoteFormDefaults.footer.company.postalCode,
      companyCityName: creditNoteFormDefaults.footer.company.city,
      companyExtra: creditNoteFormDefaults.footer.company.extra,
      vatId: creditNoteFormDefaults.footer.tax.vatId,
      taxNumber: creditNoteFormDefaults.footer.tax.taxNumber,
      commercialRegister: creditNoteFormDefaults.footer.tax.commercialRegister,
      managingDirector: creditNoteFormDefaults.footer.tax.representation,
      bankName: creditNoteFormDefaults.footer.bank.bankName,
      iban: creditNoteFormDefaults.footer.bank.iban,
      bic: creditNoteFormDefaults.footer.bank.bic,
      bankExtra: creditNoteFormDefaults.footer.bank.bankExtra,
    };

    return footerPlaceholders[field] ?? '';
  }

  return placeholders[name] ?? '';
}

function getCreditNoteAutoComplete(name) {
  if (name.startsWith('footer-')) {
    return getFooterAutoComplete(name.replace('footer-', ''));
  }

  const autoCompleteValues = {
    'sender-company': 'organization',
    'sender-street': 'address-line1',
    'sender-house-number': 'address-line2',
    'sender-postal-code': 'postal-code',
    'sender-city': 'address-level2',
    'sender-email': 'email',
    'sender-website': 'url',
    'sender-phone': 'tel',
    'sender-fax': 'tel',
    'recipient-company': 'organization',
    'recipient-name': 'name',
    'recipient-street': 'address-line1',
    'recipient-house-number': 'address-line2',
    'recipient-postal-code': 'postal-code',
    'recipient-city': 'address-level2',
  };

  return autoCompleteValues[name] ?? 'off';
}

function splitStreetLine(value = '') {
  const trimmed = value.trim();
  const match = trimmed.match(/^(.*?)(?:\s+(\d+\s*[a-zA-Z]?))$/);

  return {
    street: match ? match[1].trim() : trimmed,
    houseNumber: match ? match[2].trim() : '',
  };
}

function splitCityLine(value = '') {
  const trimmed = value.trim();
  const match = trimmed.match(/^(\d{4,5})\s+(.+)$/);

  return {
    postalCode: match ? match[1].trim() : '',
    city: match ? match[2].trim() : trimmed,
  };
}

function splitSenderLine(value = '', company = '') {
  const parts = value
    .split(' - ')
    .map((part) => part.trim())
    .filter(Boolean);
  const addressPart = parts.length >= 3 ? parts[1] : parts[0] ?? '';
  const cityPart = parts.length >= 3 ? parts[2] : parts[1] ?? '';

  return {
    company,
    ...splitStreetLine(addressPart),
    ...splitCityLine(cityPart),
  };
}

function joinStreetLine(street, houseNumber) {
  return [street, houseNumber].map((part) => part.trim()).filter(Boolean).join(' ');
}

function joinCityLine(postalCode, city) {
  return [postalCode, city].map((part) => part.trim()).filter(Boolean).join(' ');
}

function joinSenderLine({ company, street, houseNumber, postalCode, city }) {
  return [company, joinStreetLine(street, houseNumber), joinCityLine(postalCode, city)]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(' - ');
}

function TextBlockFormSection({ block, onToggleVisible, onUpdate }) {
  return (
    <div className="invoice-panel-section">
      <div className="invoice-panel-heading-row">
        <h3>{block.label}</h3>
        <button className="invoice-panel-inline-toggle" type="button" onClick={onToggleVisible}>
          {block.visible ? 'Ausblenden' : 'Einblenden'}
        </button>
      </div>
      <div className="invoice-panel-grid invoice-panel-grid-stacked">
        <OfferPanelTextarea
          label="Text"
          name={`credit-note-text-${block.id}`}
          placeholder={creditNoteFormDefaults.textBlocks[block.id] ?? ''}
          value={block.value}
          onChange={(value) => onUpdate(block.id, { value })}
        />
      </div>
    </div>
  );
}

function CreditNoteLabeledFooterValueInput({ field, label, footerLines, updateFooterLine }) {
  const labelField = creditNoteFooterLabelFields[field];

  return (
    <div className="offer-footer-labeled-field">
      <span>{label}</span>
      <div className="offer-footer-labeled-row">
        <input
          aria-label={`${label} Bezeichnung`}
          autoComplete="off"
          name={`footer-${labelField}`}
          value={footerLines[labelField] ?? ''}
          onChange={(event) => updateFooterLine(labelField, event.target.value)}
        />
        <input
          aria-label={`${label} Inhalt`}
          autoComplete="off"
          name={`footer-${field}`}
          placeholder={getCreditNoteInputPlaceholder(`footer-${field}`)}
          value={getFormValue(footerLines[field] ?? getCreditNoteInputPlaceholder(`footer-${field}`), getCreditNoteInputPlaceholder(`footer-${field}`))}
          onChange={(event) => updateFooterLine(field, getDocumentValue(event.target.value, getCreditNoteInputPlaceholder(`footer-${field}`)))}
        />
      </div>
    </div>
  );
}

export default function CreditNoteDocumentForm({
  addPosition,
  details,
  footerData,
  footerLines,
  formatCurrency,
  formatPercent,
  isOpen,
  movePosition,
  onToggle,
  positions,
  recipient,
  references,
  removePosition,
  sender,
  textBlocks,
  toggleTextBlockVisibility,
  totals,
  updateDetail,
  updateFooterLine,
  updatePosition,
  updateRecipient,
  updateSender,
  updateTextBlock,
}) {
  const introBlock = textBlocks.find((block) => block.id === 'intro');
  const closingBlock = textBlocks.find((block) => block.id === 'closing');
  const senderAddress = sender.address;
  const recipientStreet = recipient.address;
  const recipientCity = recipient.address;

  function updateSenderAddress(field, value) {
    if (field === 'company') {
      updateSender('company', value);
      return;
    }

    updateSender('address', { ...senderAddress, [field]: value });
  }

  return (
    <section className="invoice-form-panel" aria-label="Gutschriftsformular">
      <button className="invoice-form-panel-toggle" type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span className="invoice-form-panel-toggle-label">
          {isOpen ? 'Formular schließen' : 'Formular (optional) ausfüllen'}
        </span>
        <span className="invoice-form-panel-toggle-mark" aria-hidden="true">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="invoice-form-panel-body">
          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Absender</h3>
              <div className="invoice-panel-grid">
                <OfferPanelInput autoComplete="organization" className="invoice-panel-field-wide" label="Firmenname" name="sender-company" placeholder={defaultSenderAddress.company} value={sender.companyName} onChange={(value) => updateSenderAddress('company', value)} />
                <OfferPanelInput label="Straße" name="sender-street" value={senderAddress.street} onChange={(value) => updateSenderAddress('street', value)} />
                <OfferPanelInput label="Hausnummer" name="sender-house-number" value={senderAddress.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                <OfferPanelInput label="PLZ" name="sender-postal-code" value={senderAddress.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                <OfferPanelInput label="Stadt" name="sender-city" value={senderAddress.city} onChange={(value) => updateSenderAddress('city', value)} />
                <OfferPanelInput className="invoice-panel-field-wide" label="Absenderzeile" name="sender-line" value={sender.returnAddress} onChange={(value) => updateSender('senderLine', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <OfferPanelInput className="invoice-panel-field-wide" label="Firmenname" name="recipient-company" value={recipient.companyName} onChange={(value) => updateRecipient('company', value)} />
                <OfferPanelInput className="invoice-panel-field-wide" label="Zusatz / zu Händen" name="recipient-attention" value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                <OfferPanelInput className="invoice-panel-field-wide" label="Name / Abteilung" name="recipient-name" value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                <OfferPanelInput label="Straße" name="recipient-street" value={recipientStreet.street} onChange={(value) => updateRecipient('address', { ...recipient.address, street: value })} />
                <OfferPanelInput label="Hausnummer" name="recipient-house-number" value={recipientStreet.houseNumber} onChange={(value) => updateRecipient('address', { ...recipient.address, houseNumber: value })} />
                <OfferPanelInput label="PLZ" name="recipient-postal-code" value={recipientCity.postalCode} onChange={(value) => updateRecipient('address', { ...recipient.address, postalCode: value })} />
                <OfferPanelInput label="Stadt" name="recipient-city" value={recipientCity.city} onChange={(value) => updateRecipient('address', { ...recipient.address, city: value })} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigene Kontakt</h3>
            <div className="invoice-panel-grid offer-contact-form-grid">
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput autoComplete="email" className="invoice-panel-field-wide" label="E-Mail" name="sender-email" value={sender.contact.email} onChange={(value) => updateSender('email', value)} />
                <OfferPanelInput autoComplete="url" className="invoice-panel-field-wide" label="Website" name="sender-website" value={sender.contact.website} onChange={(value) => updateSender('website', value)} />
              </div>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput autoComplete="tel" className="invoice-panel-field-wide" label="Telefon" name="sender-phone" value={sender.contact.phone} onChange={(value) => updateSender('phone', value)} />
                <OfferPanelInput autoComplete="tel" className="invoice-panel-field-wide" label="Fax" name="sender-fax" value={sender.contact.fax} onChange={(value) => updateSender('fax', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Gutschriftsdaten</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput autoComplete="off" inputMode="text" label="Gutschriftskennung" name="credit-note-id" spellCheck={false} value={details.creditNoteNumber} onChange={(value) => updateDetail('creditNoteNumber', value)} />
                <OfferPanelInput label="Belegdatum" name="credit-note-date" type="date" value={details.creditNoteDate} onChange={(value) => updateDetail('creditNoteDate', value)} />
                <OfferPanelInput label="Leistungsdatum" name="service-date" type="date" value={details.serviceDate} onChange={(value) => updateDetail('serviceDate', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Referenzen</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput autoComplete="off" inputMode="text" label="Interne Referenz" name="internal-reference" spellCheck={false} value={references.internalReference} onChange={(value) => updateDetail('internalReference', value)} />
                <OfferPanelInput autoComplete="off" inputMode="text" label="Externe Referenz" name="external-reference" spellCheck={false} value={references.externalReference} onChange={(value) => updateDetail('externalReference', value)} />
                <OfferPanelInput label="Kundenreferenz" name="customer-reference" value={references.customerReference} onChange={(value) => updateDetail('customerReference', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            {introBlock && (
              <TextBlockFormSection
                block={introBlock}
                onToggleVisible={() => toggleTextBlockVisibility(introBlock.id)}
                onUpdate={updateTextBlock}
              />
            )}
            {closingBlock && (
              <TextBlockFormSection
                block={closingBlock}
                onToggleVisible={() => toggleTextBlockVisibility(closingBlock.id)}
                onUpdate={updateTextBlock}
              />
            )}
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Positionen</h3>
            <div className="invoice-panel-positions">
              {positions.map((position, index) => (
                <div className="invoice-panel-position" key={position.id}>
                  <span>{index + 1}</span>
                  <OfferPanelInput label="Leistung" name={`position-${index + 1}-description`} value={position.description} onChange={(value) => updatePosition(position.id, 'description', value)} />
                  <OfferPanelInput inputMode="decimal" label="Einzelpreis" name={`position-${index + 1}-unit-price`} value={position.unitPrice} onChange={(value) => updatePosition(position.id, 'unitPrice', value)} />
                  <OfferPanelInput inputMode="decimal" label="Anzahl" name={`position-${index + 1}-quantity`} value={position.quantity} onChange={(value) => updatePosition(position.id, 'quantity', value)} />
                  <OfferPanelInput label="Einheit" name={`position-${index + 1}-unit`} value={position.unit} onChange={(value) => updatePosition(position.id, 'unit', value)} />
                  <OfferPanelInput inputMode="decimal" label="USt." name={`position-${index + 1}-tax-rate`} value={position.taxRate} onChange={(value) => updatePosition(position.id, 'taxRate', value)} />
                  <div className="invoice-panel-position-actions">
                    <button className="invoice-panel-remove" type="button" aria-label={`Position ${index + 1} löschen`} disabled={positions.length === 1} onClick={() => removePosition(position.id)}>
                      x
                    </button>
                    <button className="invoice-panel-move" type="button" aria-label={`Position ${index + 1} nach oben verschieben`} disabled={index === 0} onClick={() => movePosition(position.id, -1)}>
                      <MoveUpIcon />
                    </button>
                    <button className="invoice-panel-move" type="button" aria-label={`Position ${index + 1} nach unten verschieben`} disabled={index === positions.length - 1} onClick={() => movePosition(position.id, 1)}>
                      <MoveDownIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="invoice-panel-add" type="button" onClick={addPosition}>
              + Position hinzufügen
            </button>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Fußdaten</h3>
            <div className="offer-footer-form-columns">
              {[
                {
                  title: 'Firmendaten/Adresse',
                  fields: [
                    ['companyName', 'Firma'],
                    ['companyStreetName', 'Straße'],
                    ['companyHouseNumber', 'Hausnummer'],
                    ['companyPostalCode', 'PLZ'],
                    ['companyCityName', 'Stadt'],
                    ['companyExtra', 'Zusatzzeile Firma'],
                  ],
                },
                {
                  title: 'Steuer- und Firmendaten',
                  fields: [
                    ['vatId', 'USt-IdNr.'],
                    ['taxNumber', 'Steuernummer'],
                    ['commercialRegister', 'Handelsregister'],
                    ['managingDirector', 'Geschäftsführer'],
                  ],
                },
                {
                  title: 'Bankverbindung',
                  fields: [
                    ['bankName', 'Bankname'],
                    ['iban', 'IBAN'],
                    ['bic', 'BIC'],
                    ['bankExtra', 'Zusatzzeile Bank'],
                  ],
                },
              ].map((column) => (
                <div className="invoice-panel-section offer-footer-form-column" key={column.title}>
                  <h3 className="invoice-panel-muted-heading">{column.title}</h3>
                  <div className="invoice-panel-grid invoice-panel-grid-stacked">
                    {column.fields.map(([field, label]) =>
                      creditNoteFooterLabelFields[field] ? (
                        <CreditNoteLabeledFooterValueInput
                          key={field}
                          field={field}
                          footerLines={footerLines}
                          label={label}
                          updateFooterLine={updateFooterLine}
                        />
                      ) : (
                        <OfferPanelInput
                          key={field}
                          className="invoice-panel-field-wide"
                          label={label}
                          name={`footer-${field}`}
                          value={footerLines[field]}
                          onChange={(value) => updateFooterLine(field, value)}
                        />
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="invoice-form-panel-toggle invoice-form-panel-close" type="button" aria-expanded="true" onClick={onToggle}>
            <span className="invoice-form-panel-toggle-label">Formular zuklappen</span>
            <span className="invoice-form-panel-toggle-mark" aria-hidden="true">
              -
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
