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

function TextBlockFormSection({ block, onToggleVisible, onUpdate }) {
  return (
    <div className="invoice-panel-section">
      <h3>{block.label}</h3>
      <div className="invoice-panel-grid invoice-panel-grid-stacked">
        <button className="invoice-panel-move" type="button" onClick={onToggleVisible}>
          {block.visible ? 'Ausblenden' : 'Einblenden'}
        </button>
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
              <h3>Absender und Kontakt</h3>
              <div className="invoice-panel-grid">
                <OfferPanelInput className="invoice-panel-field-wide" label="Firma" name="sender-company" value={sender.company} onChange={(value) => updateSender('company', value)} />
                <OfferPanelInput className="invoice-panel-field-wide" label="Absenderzeile" name="sender-line" value={sender.senderLine} onChange={(value) => updateSender('senderLine', value)} />
                <OfferPanelInput autoComplete="email" label="E-Mail" name="sender-email" value={sender.email} onChange={(value) => updateSender('email', value)} />
                <OfferPanelInput autoComplete="tel" label="Telefon" name="sender-phone" value={sender.phone} onChange={(value) => updateSender('phone', value)} />
                <OfferPanelInput autoComplete="tel" label="Fax" name="sender-fax" value={sender.fax} onChange={(value) => updateSender('fax', value)} />
                <OfferPanelInput autoComplete="url" label="Website" name="sender-website" value={sender.website} onChange={(value) => updateSender('website', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <OfferPanelInput className="invoice-panel-field-wide" label="Firma" name="recipient-company" value={recipient.company} onChange={(value) => updateRecipient('company', value)} />
                <OfferPanelInput label="Zusatz / z. Hd." name="recipient-attention" value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                <OfferPanelInput label="Name / Abteilung" name="recipient-name" value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                <OfferPanelInput className="invoice-panel-field-wide" label="Straße und Hausnummer" name="recipient-street" value={recipient.street} onChange={(value) => updateRecipient('street', value)} />
                <OfferPanelInput className="invoice-panel-field-wide" label="PLZ und Stadt" name="recipient-city" value={recipient.cityLine} onChange={(value) => updateRecipient('cityLine', value)} />
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

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Summen</h3>
              <div className="invoice-summary">
                <div className="summary-row">
                  <span>Nettobetrag</span>
                  <strong>{formatCurrency(totals.net)}</strong>
                </div>
                {totals.taxGroups.map((group) => (
                  <div className="summary-row" key={group.taxRate}>
                    <span>Umsatzsteuer {formatPercent(group.taxRate)}%</span>
                    <strong>{formatCurrency(group.tax)}</strong>
                  </div>
                ))}
                <div className="summary-row summary-total">
                  <span>Gesamtbetrag</span>
                  <strong>{formatCurrency(totals.gross)}</strong>
                </div>
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Fußdaten</h3>
              <div className="invoice-panel-grid">
                {[
                  ['companyName', 'Firma'],
                  ['companyStreet', 'Straße und Hausnummer'],
                  ['companyCity', 'PLZ und Stadt'],
                  ['companyExtra', 'Zusatzzeile Firma'],
                  ['vatId', 'USt-IdNr.'],
                  ['taxNumber', 'Steuernummer'],
                  ['commercialRegister', 'Handelsregister'],
                  ['managingDirector', 'Geschäftsführer'],
                  ['bankName', 'Bankname'],
                  ['iban', 'IBAN'],
                  ['bic', 'BIC'],
                  ['bankExtra', 'Zusatzzeile Bank'],
                ].map(([field, label]) => (
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
          </div>
        </div>
      )}
    </section>
  );
}
