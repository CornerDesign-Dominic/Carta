function OfferPanelInput({
  autoComplete = 'off',
  className = '',
  inputMode,
  label,
  name,
  onChange,
  type = 'text',
  value,
}) {
  return (
    <label className={`invoice-panel-field${className ? ` ${className}` : ''}`}>
      <span>{label}</span>
      <input
        autoComplete={autoComplete}
        inputMode={inputMode}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function OfferPanelTextarea({ label, name, onChange, value }) {
  return (
    <label className="invoice-panel-field invoice-panel-field-wide">
      <span>{label}</span>
      <textarea name={name} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
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
          name={`offer-text-${block.id}`}
          value={block.value}
          onChange={(value) => onUpdate(block.id, { value })}
        />
      </div>
    </div>
  );
}

export default function OfferDocumentForm({
  addPosition,
  details,
  footerLines,
  formatCurrency,
  formatPercent,
  isOpen,
  movePosition,
  onToggle,
  positions,
  recipient,
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
  const senderAddress = splitSenderLine(sender.senderLine, sender.company);
  const recipientStreet = splitStreetLine(recipient.street);
  const recipientCity = splitCityLine(recipient.cityLine);

  function updateSenderAddress(field, value) {
    const nextAddress = { ...senderAddress, [field]: value };

    if (field === 'company') {
      updateSender('company', value);
    }

    updateSender('senderLine', joinSenderLine(nextAddress));
  }

  return (
    <section className="invoice-form-panel" aria-label="Angebotsformular">
      <button className="invoice-form-panel-toggle" type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span className="invoice-form-panel-toggle-label">
          {isOpen ? 'Formular schließen' : 'Formular öffnen'}
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
                <OfferPanelInput className="invoice-panel-field-wide" label="Firmenname" name="sender-company" value={senderAddress.company} onChange={(value) => updateSenderAddress('company', value)} />
                <OfferPanelInput label="Straße" name="sender-street" value={senderAddress.street} onChange={(value) => updateSenderAddress('street', value)} />
                <OfferPanelInput label="Hausnummer" name="sender-house-number" value={senderAddress.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                <OfferPanelInput label="PLZ" name="sender-postal-code" value={senderAddress.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                <OfferPanelInput label="Stadt" name="sender-city" value={senderAddress.city} onChange={(value) => updateSenderAddress('city', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <OfferPanelInput className="invoice-panel-field-wide" label="Firmenname" name="recipient-company" value={recipient.company} onChange={(value) => updateRecipient('company', value)} />
                <OfferPanelInput label="Straße" name="recipient-street" value={recipientStreet.street} onChange={(value) => updateRecipient('street', joinStreetLine(value, recipientStreet.houseNumber))} />
                <OfferPanelInput label="Hausnummer" name="recipient-house-number" value={recipientStreet.houseNumber} onChange={(value) => updateRecipient('street', joinStreetLine(recipientStreet.street, value))} />
                <OfferPanelInput label="PLZ" name="recipient-postal-code" value={recipientCity.postalCode} onChange={(value) => updateRecipient('cityLine', joinCityLine(value, recipientCity.city))} />
                <OfferPanelInput label="Stadt" name="recipient-city" value={recipientCity.city} onChange={(value) => updateRecipient('cityLine', joinCityLine(recipientCity.postalCode, value))} />
                <OfferPanelInput className="invoice-panel-field-wide" label="Zusatz / zu Händen" name="recipient-attention" value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigene Kontakt</h3>
            <div className="invoice-panel-grid offer-contact-form-grid">
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput autoComplete="email" className="invoice-panel-field-wide" label="E-Mail" name="sender-email" value={sender.email} onChange={(value) => updateSender('email', value)} />
                <OfferPanelInput autoComplete="url" className="invoice-panel-field-wide" label="Website" name="sender-website" value={sender.website} onChange={(value) => updateSender('website', value)} />
              </div>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput autoComplete="tel" className="invoice-panel-field-wide" label="Telefon" name="sender-phone" value={sender.phone} onChange={(value) => updateSender('phone', value)} />
                <OfferPanelInput autoComplete="tel" className="invoice-panel-field-wide" label="Fax" name="sender-fax" value={sender.fax} onChange={(value) => updateSender('fax', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Angebotsdaten</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput label="Angebotsnummer" name="offer-number" value={details.offerNumber} onChange={(value) => updateDetail('offerNumber', value)} />
                <OfferPanelInput label="Angebotsdatum" name="offer-date" type="date" value={details.offerDate} onChange={(value) => updateDetail('offerDate', value)} />
                <OfferPanelInput label="Gültig bis" name="valid-until" type="date" value={details.validUntil} onChange={(value) => updateDetail('validUntil', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Referenzen</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <OfferPanelInput label="Interne Nummer" name="internal-number" value={details.internalNumber} onChange={(value) => updateDetail('internalNumber', value)} />
                <OfferPanelInput label="Externe Nummer" name="external-number" value={details.externalNumber} onChange={(value) => updateDetail('externalNumber', value)} />
                <OfferPanelInput label="Kundennummer" name="customer-number" value={details.customerNumber} onChange={(value) => updateDetail('customerNumber', value)} />
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
                      &uarr;
                    </button>
                    <button className="invoice-panel-move" type="button" aria-label={`Position ${index + 1} nach unten verschieben`} disabled={index === positions.length - 1} onClick={() => movePosition(position.id, 1)}>
                      &darr;
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
                    ['companyStreet', 'Straße und Hausnummer'],
                    ['companyCity', 'PLZ und Stadt'],
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
                    {column.fields.map(([field, label]) => (
                      <OfferPanelInput
                        key={field}
                        className="invoice-panel-field-wide"
                        label={label}
                        name={`footer-${field}`}
                        value={footerLines[field]}
                        onChange={(value) => updateFooterLine(field, value)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
