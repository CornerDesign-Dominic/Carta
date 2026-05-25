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

export default function ReceiptDocumentForm({
  amount,
  defaults,
  details,
  isOpen,
  onToggle,
  sender,
  updateAmount,
  updateDetail,
  updateSender,
}) {
  const senderAddress = sender.address;

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
          {isOpen ? 'Formular schließen' : 'Formular (optional) ausfüllen'}
        </span>
        <span className="invoice-form-panel-toggle-mark" aria-hidden="true">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="invoice-form-panel-body">
          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Absender / Aussteller</h3>
            <div className="invoice-panel-grid">
              <ReceiptPanelInput autoComplete="organization" className="invoice-panel-field-wide" label="Firma" name="receipt-sender-company" placeholder={defaults.sender.companyName} value={sender.companyName} onChange={(value) => updateSenderAddress('company', value)} />
              <ReceiptPanelInput label="Strasse" name="receipt-sender-street" placeholder={defaults.sender.address.street} value={senderAddress.street} onChange={(value) => updateSenderAddress('street', value)} />
              <ReceiptPanelInput label="Hausnummer" name="receipt-sender-house" placeholder={defaults.sender.address.houseNumber} value={senderAddress.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
              <ReceiptPanelInput label="PLZ" name="receipt-sender-postal" placeholder={defaults.sender.address.postalCode} value={senderAddress.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
              <ReceiptPanelInput label="Stadt" name="receipt-sender-city" placeholder={defaults.sender.address.city} value={senderAddress.city} onChange={(value) => updateSenderAddress('city', value)} />
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Quittungsangaben</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <ReceiptPanelInput autoComplete="off" inputMode="text" label="Quittungsnummer" name="receipt-code" placeholder={defaults.details.receiptId} spellCheck={false} value={details.receiptId} onChange={(value) => updateDetail('receiptId', value)} />
                <ReceiptPanelInput label="Ort" name="receipt-place" placeholder={defaults.details.place} value={details.place} onChange={(value) => updateDetail('place', value)} />
                <ReceiptPanelInput label="Datum" name="receipt-date" placeholder={defaults.details.receiptDate} type="date" value={details.receiptDate} onChange={(value) => updateDetail('receiptDate', value)} />
                <ReceiptPanelInput className="invoice-panel-field-wide" label="Von" name="receipt-from" placeholder={defaults.details.from} value={details.from} onChange={(value) => updateDetail('from', value)} />
                <ReceiptPanelInput className="invoice-panel-field-wide" label="Für" name="receipt-purpose" placeholder={defaults.details.purpose} value={details.purpose} onChange={(value) => updateDetail('purpose', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Beträge</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <ReceiptPanelInput inputMode="decimal" label="Netto Betrag" name="receipt-net-amount" placeholder={defaults.amount.netAmount} value={amount.netAmount} onChange={(value) => updateAmount('netAmount', value)} />
                <ReceiptPanelInput inputMode="decimal" label="USt.-Satz" name="receipt-tax-rate" placeholder={defaults.amount.taxRate} value={amount.taxRate} onChange={(value) => updateAmount('taxRate', value)} />
                <ReceiptPanelInput inputMode="decimal" label="USt.-Betrag" name="receipt-tax-amount" placeholder={defaults.amount.taxAmount} value={amount.taxAmount} onChange={(value) => updateAmount('taxAmount', value)} />
                <ReceiptPanelInput inputMode="decimal" label="Brutto Gesamtbetrag / Betrag in Zahlen" name="receipt-gross-amount" placeholder={defaults.amount.grossAmount} value={amount.grossAmount} onChange={(value) => updateAmount('grossAmount', value)} />
                <ReceiptPanelInput label="Betrag in Worten" name="receipt-amount-words" placeholder={defaults.amount.amountInWords} value={amount.amountInWords} onChange={(value) => updateAmount('amountInWords', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Abschluss</h3>
            <div className="invoice-panel-grid">
              <ReceiptPanelTextarea label="Buchungsvermerk" name="receipt-booking-note" placeholder={defaults.details.bookingNote} value={details.bookingNote} onChange={(value) => updateDetail('bookingNote', value)} />
              <ReceiptPanelTextarea label="Stempel / Unterschrift des Empfängers" name="receipt-receiver-signature" placeholder={defaults.details.receiverSignature} value={details.receiverSignature} onChange={(value) => updateDetail('receiverSignature', value)} />
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
