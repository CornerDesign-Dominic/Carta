function getFormValue(value) {
  return value ?? '';
}

function ReceiptPanelInput({
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
  return (
    <label className={`invoice-panel-field${className ? ` ${className}` : ''}`}>
      <span>{label}</span>
      <input
        autoComplete={autoComplete}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        spellCheck={spellCheck}
        type={type}
        value={getFormValue(value)}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function ReceiptPanelTextarea({ label, name, onChange, placeholder = '', value }) {
  return (
    <label className="invoice-panel-field invoice-panel-field-wide">
      <span>{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        value={getFormValue(value)}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextBlockFormSection({ block, fallback, onToggleVisible, onUpdate }) {
  return (
    <div className="invoice-panel-section">
      <div className="invoice-panel-heading-row">
        <h3>{block.label}</h3>
        <button className="invoice-panel-inline-toggle" type="button" onClick={onToggleVisible}>
          {block.visible ? 'Ausblenden' : 'Einblenden'}
        </button>
      </div>
      <ReceiptPanelTextarea
        label="Text"
        name={`receipt-text-${block.id}`}
        placeholder={fallback}
        value={block.value}
        onChange={(value) => onUpdate(block.id, { value })}
      />
    </div>
  );
}

function ReceiptFooterInput({ field, footerLines, label, onFooterLineChange, placeholder }) {
  return (
    <ReceiptPanelInput
      className="invoice-panel-field-wide"
      label={label}
      name={`receipt-footer-${field}`}
      placeholder={placeholder}
      value={footerLines[field]}
      onChange={(value) => onFooterLineChange(field, value)}
    />
  );
}

function LabeledFooterValueInput({
  field,
  footerData,
  footerLines,
  label,
  labelField,
  onFooterLabelChange,
  onFooterLineChange,
  placeholder,
  placeholderLabel,
}) {
  return (
    <div className="offer-footer-labeled-field">
      <span>{label}</span>
      <div className="offer-footer-labeled-row">
        <input
          aria-label={`${label} Beschriftung`}
          name={`receipt-footer-${field}-label`}
          placeholder={placeholderLabel}
          value={footerData[labelField] ?? ''}
          onChange={(event) => onFooterLabelChange(labelField, event.target.value)}
        />
        <input
          aria-label={label}
          name={`receipt-footer-${field}-value`}
          placeholder={placeholder}
          value={footerLines[field] ?? ''}
          onChange={(event) => onFooterLineChange(field, event.target.value)}
        />
      </div>
    </div>
  );
}

export default function ReceiptDocumentForm({
  amount,
  defaults,
  details,
  footerData,
  footerLines,
  isOpen,
  onToggle,
  recipient,
  sender,
  textBlocks,
  toggleTextBlockVisibility,
  updateAmount,
  updateDetail,
  updateFooterLabel,
  updateFooterLine,
  updateRecipient,
  updateSender,
  updateTextBlock,
}) {
  const receiptTextBlock = textBlocks.find((block) => block.id === 'receiptText');
  const purposeBlock = textBlocks.find((block) => block.id === 'purpose');
  const senderAddress = sender.address;
  const recipientAddress = recipient.address;

  function updateSenderAddress(field, value) {
    if (field === 'company') {
      updateSender('company', value);
      return;
    }

    updateSender('address', { ...senderAddress, [field]: value });
  }

  return (
    <section className="invoice-form-panel" aria-label="Quittungsformular">
      <button className="invoice-form-panel-toggle" type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span className="invoice-form-panel-toggle-label">
          {isOpen ? 'Formular schliessen' : 'Formular (optional) ausfuellen'}
        </span>
        <span className="invoice-form-panel-toggle-mark" aria-hidden="true">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="invoice-form-panel-body">
          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Absender / Aussteller</h3>
              <div className="invoice-panel-grid">
                <ReceiptPanelInput autoComplete="organization" className="invoice-panel-field-wide" label="Firmenname" name="receipt-sender-company" placeholder={defaults.sender.companyName} value={sender.companyName} onChange={(value) => updateSenderAddress('company', value)} />
                <ReceiptPanelInput label="Strasse" name="receipt-sender-street" placeholder={defaults.sender.address.street} value={senderAddress.street} onChange={(value) => updateSenderAddress('street', value)} />
                <ReceiptPanelInput label="Hausnummer" name="receipt-sender-house" placeholder={defaults.sender.address.houseNumber} value={senderAddress.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                <ReceiptPanelInput label="PLZ" name="receipt-sender-postal" placeholder={defaults.sender.address.postalCode} value={senderAddress.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                <ReceiptPanelInput label="Stadt" name="receipt-sender-city" placeholder={defaults.sender.address.city} value={senderAddress.city} onChange={(value) => updateSenderAddress('city', value)} />
                <ReceiptPanelInput className="invoice-panel-field-wide" label="Absenderzeile" name="receipt-sender-line" placeholder={defaults.sender.returnAddress} value={sender.returnAddress} onChange={(value) => updateSender('senderLine', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Zahlungspflichtiger / Empfaenger</h3>
              <div className="invoice-panel-grid">
                <ReceiptPanelInput className="invoice-panel-field-wide" label="Firmenname" name="receipt-recipient-company" placeholder={defaults.recipient.companyName} value={recipient.companyName} onChange={(value) => updateRecipient('company', value)} />
                <ReceiptPanelInput className="invoice-panel-field-wide" label="Zusatz / zu Haenden" name="receipt-recipient-attention" placeholder={defaults.recipient.attention} value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                <ReceiptPanelInput className="invoice-panel-field-wide" label="Name / Abteilung" name="receipt-recipient-name" placeholder={defaults.recipient.name} value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                <ReceiptPanelInput label="Strasse" name="receipt-recipient-street" placeholder={defaults.recipient.address.street} value={recipientAddress.street} onChange={(value) => updateRecipient('address', { ...recipientAddress, street: value })} />
                <ReceiptPanelInput label="Hausnummer" name="receipt-recipient-house" placeholder={defaults.recipient.address.houseNumber} value={recipientAddress.houseNumber} onChange={(value) => updateRecipient('address', { ...recipientAddress, houseNumber: value })} />
                <ReceiptPanelInput label="PLZ" name="receipt-recipient-postal" placeholder={defaults.recipient.address.postalCode} value={recipientAddress.postalCode} onChange={(value) => updateRecipient('address', { ...recipientAddress, postalCode: value })} />
                <ReceiptPanelInput label="Stadt" name="receipt-recipient-city" placeholder={defaults.recipient.address.city} value={recipientAddress.city} onChange={(value) => updateRecipient('address', { ...recipientAddress, city: value })} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Quittungsdaten</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <ReceiptPanelInput autoComplete="off" inputMode="text" label="Quittungskennung" name="receipt-internal-code" placeholder={defaults.details.receiptId} spellCheck={false} value={details.receiptId} onChange={(value) => updateDetail('receiptId', value)} />
                <ReceiptPanelInput label="Belegdatum" name="receipt-date" placeholder={defaults.details.receiptDate} type="date" value={details.receiptDate} onChange={(value) => updateDetail('receiptDate', value)} />
                <ReceiptPanelInput label="Zahlungsdatum" name="receipt-booking-date" placeholder={defaults.details.paymentDate} type="date" value={details.paymentDate} onChange={(value) => updateDetail('paymentDate', value)} />
                <ReceiptPanelInput label="Ort" name="receipt-place" placeholder={defaults.details.place} value={details.place} onChange={(value) => updateDetail('place', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Referenzen</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <ReceiptPanelInput autoComplete="off" inputMode="text" label="Interne Referenz" name="receipt-internal-reference" placeholder={defaults.references.internalReference} spellCheck={false} value={details.internalReference} onChange={(value) => updateDetail('internalReference', value)} />
                <ReceiptPanelInput autoComplete="off" inputMode="text" label="Externe Referenz" name="receipt-external-reference" placeholder={defaults.references.externalReference} spellCheck={false} value={details.externalReference} onChange={(value) => updateDetail('externalReference', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Betrag und Leistung</h3>
            <div className="invoice-panel-grid">
              <ReceiptPanelInput inputMode="decimal" label="Betrag netto" name="receipt-net-amount" placeholder={defaults.amount.netAmount} value={amount.netAmount} onChange={(value) => updateAmount('netAmount', value)} />
              <ReceiptPanelInput inputMode="decimal" label="Umsatzsteuer" name="receipt-tax-amount" placeholder={defaults.amount.taxAmount} value={amount.taxAmount} onChange={(value) => updateAmount('taxAmount', value)} />
              <ReceiptPanelInput inputMode="decimal" label="Betrag brutto" name="receipt-gross-amount" placeholder={defaults.amount.grossAmount} value={amount.grossAmount} onChange={(value) => updateAmount('grossAmount', value)} />
              <ReceiptPanelInput label="Betrag in Worten" name="receipt-amount-words" placeholder={defaults.amount.amountInWords} value={amount.amountInWords} onChange={(value) => updateAmount('amountInWords', value)} />
              <ReceiptPanelInput label="Zahlungsart" name="receipt-method" placeholder={defaults.amount.settlementMethod} value={amount.settlementMethod} onChange={(value) => updateAmount('settlementMethod', value)} />
            </div>
          </div>

          <div className="invoice-panel-row">
            {receiptTextBlock && (
              <TextBlockFormSection
                block={receiptTextBlock}
                fallback={defaults.textBlocks.receiptText}
                onToggleVisible={() => toggleTextBlockVisibility(receiptTextBlock.id)}
                onUpdate={updateTextBlock}
              />
            )}
            {purposeBlock && (
              <TextBlockFormSection
                block={purposeBlock}
                fallback={defaults.textBlocks.purpose}
                onToggleVisible={() => toggleTextBlockVisibility(purposeBlock.id)}
                onUpdate={updateTextBlock}
              />
            )}
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Fussdaten</h3>
            <div className="offer-footer-form-columns">
              <div className="invoice-panel-section offer-footer-form-column">
                <h3 className="invoice-panel-muted-heading">Adresse</h3>
                <div className="invoice-panel-grid invoice-panel-grid-stacked">
                  <ReceiptFooterInput field="companyName" footerLines={footerLines} label="Firma" placeholder={defaults.footer.company.companyName} onFooterLineChange={updateFooterLine} />
                  <ReceiptFooterInput field="companyStreet" footerLines={footerLines} label="Strasse und Hausnummer" placeholder={`${defaults.footer.company.street} ${defaults.footer.company.houseNumber}`} onFooterLineChange={updateFooterLine} />
                  <ReceiptFooterInput field="companyCity" footerLines={footerLines} label="PLZ und Stadt" placeholder={`${defaults.footer.company.postalCode} ${defaults.footer.company.city}`} onFooterLineChange={updateFooterLine} />
                  <ReceiptFooterInput field="companyExtra" footerLines={footerLines} label="Zusatzzeile Firma" placeholder={defaults.footer.company.extra} onFooterLineChange={updateFooterLine} />
                </div>
              </div>
              <div className="invoice-panel-section offer-footer-form-column">
                <h3 className="invoice-panel-muted-heading">Steuerdaten</h3>
                <div className="invoice-panel-grid invoice-panel-grid-stacked">
                  <LabeledFooterValueInput field="vatId" footerData={footerData.tax} footerLines={footerLines} label="USt-IdNr." labelField="vatIdLabel" placeholder={defaults.footer.tax.vatId} placeholderLabel={defaults.footer.tax.vatIdLabel} onFooterLabelChange={updateFooterLabel} onFooterLineChange={updateFooterLine} />
                  <LabeledFooterValueInput field="taxId" footerData={footerData.tax} footerLines={footerLines} label="Steuernummer" labelField="taxIdLabel" placeholder={defaults.footer.tax.taxId} placeholderLabel={defaults.footer.tax.taxIdLabel} onFooterLabelChange={updateFooterLabel} onFooterLineChange={updateFooterLine} />
                  <ReceiptFooterInput field="representation" footerLines={footerLines} label="Vertretung" placeholder={defaults.footer.tax.representation} onFooterLineChange={updateFooterLine} />
                </div>
              </div>
              <div className="invoice-panel-section offer-footer-form-column">
                <h3 className="invoice-panel-muted-heading">Bankdaten</h3>
                <div className="invoice-panel-grid invoice-panel-grid-stacked">
                  <ReceiptFooterInput field="bankName" footerLines={footerLines} label="Bankname" placeholder={defaults.footer.bank.bankName} onFooterLineChange={updateFooterLine} />
                  <LabeledFooterValueInput field="iban" footerData={footerData.bank} footerLines={footerLines} label="IBAN" labelField="ibanLabel" placeholder={defaults.footer.bank.iban} placeholderLabel={defaults.footer.bank.ibanLabel} onFooterLabelChange={updateFooterLabel} onFooterLineChange={updateFooterLine} />
                  <LabeledFooterValueInput field="bic" footerData={footerData.bank} footerLines={footerLines} label="BIC" labelField="bicLabel" placeholder={defaults.footer.bank.bic} placeholderLabel={defaults.footer.bank.bicLabel} onFooterLabelChange={updateFooterLabel} onFooterLineChange={updateFooterLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
