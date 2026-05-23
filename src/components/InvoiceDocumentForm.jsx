import { MoveDownIcon, MoveUpIcon } from './documentBlocks/FieldActions.jsx';

const invoiceFormDefaults = {
  sender: {
    companyName: 'Belege24 Muster GmbH',
    returnAddress: 'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
    address: {
      street: 'Musterstraße',
      houseNumber: '12',
      postalCode: '10115',
      city: 'Berlin',
    },
    contact: {
      email: 'kontakt@belege24.com',
      phone: '+49 30 123456',
      fax: '+49 30 123457',
      website: 'www.belege24.com',
    },
  },
  recipient: {
    companyName: 'Beispielkunde GmbH',
    attention: 'z. Hd. Frau Beispiel',
    name: 'Buchhaltung',
    address: {
      street: 'Kundenstraße',
      houseNumber: '8',
      postalCode: '20095',
      city: 'Hamburg',
    },
  },
  details: {
    invoiceNumber: 'RE-2026-001',
    invoiceDate: '2026-05-07',
    serviceDate: '2026-05-07',
    internalNumber: 'INT-1001',
    externalNumber: 'EXT-4711',
    customerNumber: 'K-2048',
  },
  textBlocks: {
    intro: 'vielen Dank fuer Ihren Auftrag. Fuer unsere Leistungen stellen wir Ihnen wie folgt in Rechnung:',
    closing:
      'Bitte begleichen Sie den Rechnungsbetrag innerhalb der angegebenen Zahlungsfrist. Vielen Dank fuer die angenehme Zusammenarbeit.',
  },
  position: {
    description: 'Leistung beschreiben',
    unitPrice: '0',
    quantity: '1',
    unit: 'Stk.',
    taxRate: '19',
  },
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
};

const footerLabelFields = {
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

function getPlaceholder(name) {
  if (name.startsWith('position-') && name.endsWith('-description')) return invoiceFormDefaults.position.description;
  if (name.startsWith('position-') && name.endsWith('-unit-price')) return invoiceFormDefaults.position.unitPrice;
  if (name.startsWith('position-') && name.endsWith('-quantity')) return invoiceFormDefaults.position.quantity;
  if (name.startsWith('position-') && name.endsWith('-unit')) return invoiceFormDefaults.position.unit;
  if (name.startsWith('position-') && name.endsWith('-tax-rate')) return invoiceFormDefaults.position.taxRate;

  const placeholders = {
    'sender-company': invoiceFormDefaults.sender.companyName,
    'sender-line': invoiceFormDefaults.sender.returnAddress,
    'sender-street': invoiceFormDefaults.sender.address.street,
    'sender-house-number': invoiceFormDefaults.sender.address.houseNumber,
    'sender-postal-code': invoiceFormDefaults.sender.address.postalCode,
    'sender-city': invoiceFormDefaults.sender.address.city,
    'sender-email': invoiceFormDefaults.sender.contact.email,
    'sender-website': invoiceFormDefaults.sender.contact.website,
    'sender-phone': invoiceFormDefaults.sender.contact.phone,
    'sender-fax': invoiceFormDefaults.sender.contact.fax,
    'recipient-company': invoiceFormDefaults.recipient.companyName,
    'recipient-attention': invoiceFormDefaults.recipient.attention,
    'recipient-name': invoiceFormDefaults.recipient.name,
    'recipient-street': invoiceFormDefaults.recipient.address.street,
    'recipient-house-number': invoiceFormDefaults.recipient.address.houseNumber,
    'recipient-postal-code': invoiceFormDefaults.recipient.address.postalCode,
    'recipient-city': invoiceFormDefaults.recipient.address.city,
    'invoice-code': invoiceFormDefaults.details.invoiceNumber,
    'invoice-date': invoiceFormDefaults.details.invoiceDate,
    'service-date': invoiceFormDefaults.details.serviceDate,
    'invoice-internal-reference': invoiceFormDefaults.details.internalNumber,
    'invoice-external-reference': invoiceFormDefaults.details.externalNumber,
    'customer-reference': invoiceFormDefaults.details.customerNumber,
  };

  if (name.startsWith('footer-')) {
    const field = name.replace('footer-', '');
    const footerPlaceholders = {
      companyName: invoiceFormDefaults.footer.company.companyName,
      companyStreetName: invoiceFormDefaults.footer.company.street,
      companyHouseNumber: invoiceFormDefaults.footer.company.houseNumber,
      companyPostalCode: invoiceFormDefaults.footer.company.postalCode,
      companyCityName: invoiceFormDefaults.footer.company.city,
      companyExtra: invoiceFormDefaults.footer.company.extra,
      vatId: invoiceFormDefaults.footer.tax.vatId,
      taxNumber: invoiceFormDefaults.footer.tax.taxNumber,
      commercialRegister: invoiceFormDefaults.footer.tax.commercialRegister,
      managingDirector: invoiceFormDefaults.footer.tax.representation,
      bankName: invoiceFormDefaults.footer.bank.bankName,
      iban: invoiceFormDefaults.footer.bank.iban,
      bic: invoiceFormDefaults.footer.bank.bic,
      bankExtra: invoiceFormDefaults.footer.bank.bankExtra,
    };

    return footerPlaceholders[field] ?? '';
  }

  return placeholders[name] ?? '';
}

function getAutoComplete(name) {
  const values = {
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

  return values[name] ?? 'off';
}

function InvoicePanelInput({
  autoComplete,
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
  const effectivePlaceholder = placeholder || getPlaceholder(name);
  const documentValue = value ?? effectivePlaceholder;

  return (
    <label className={`invoice-panel-field${className ? ` ${className}` : ''}`}>
      <span>{label}</span>
      <input
        autoComplete={autoComplete ?? getAutoComplete(name)}
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

function InvoicePanelTextarea({ label, name, onChange, placeholder = '', value }) {
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
        <InvoicePanelTextarea
          label="Text"
          name={`invoice-text-${block.id}`}
          placeholder={invoiceFormDefaults.textBlocks[block.id] ?? ''}
          value={block.value}
          onChange={(value) => onUpdate(block.id, { value })}
        />
      </div>
    </div>
  );
}

function LabeledFooterValueInput({ field, label, footerLines, updateFooterLine }) {
  const labelField = footerLabelFields[field];

  return (
    <div className="offer-footer-labeled-field">
      <span>{label}</span>
      <div className="offer-footer-labeled-row">
        <input
          aria-label={`${label} Label`}
          autoComplete="off"
          name={`footer-${labelField}`}
          value={footerLines[labelField] ?? ''}
          onChange={(event) => updateFooterLine(labelField, event.target.value)}
        />
        <input
          aria-label={`${label} Wert`}
          autoComplete="off"
          name={`footer-${field}`}
          placeholder={getPlaceholder(`footer-${field}`)}
          value={getFormValue(footerLines[field] ?? getPlaceholder(`footer-${field}`), getPlaceholder(`footer-${field}`))}
          onChange={(event) => updateFooterLine(field, getDocumentValue(event.target.value, getPlaceholder(`footer-${field}`)))}
        />
      </div>
    </div>
  );
}

export default function InvoiceDocumentForm({
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

  function updateSenderAddress(field, value) {
    if (field === 'company') {
      updateSender('company', value);
      return;
    }

    updateSender('address', { ...sender.address, [field]: value });
  }

  return (
    <section className="invoice-form-panel" aria-label="Rechnungsformular">
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
                <InvoicePanelInput className="invoice-panel-field-wide" label="Firmenname" name="sender-company" value={sender.companyName} onChange={(value) => updateSenderAddress('company', value)} />
                <InvoicePanelInput label="Straße" name="sender-street" value={sender.address.street} onChange={(value) => updateSenderAddress('street', value)} />
                <InvoicePanelInput label="Hausnummer" name="sender-house-number" value={sender.address.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                <InvoicePanelInput label="PLZ" name="sender-postal-code" value={sender.address.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                <InvoicePanelInput label="Stadt" name="sender-city" value={sender.address.city} onChange={(value) => updateSenderAddress('city', value)} />
                <InvoicePanelInput className="invoice-panel-field-wide" label="Absenderzeile" name="sender-line" value={sender.returnAddress} onChange={(value) => updateSender('senderLine', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <InvoicePanelInput className="invoice-panel-field-wide" label="Firmenname" name="recipient-company" value={recipient.companyName} onChange={(value) => updateRecipient('company', value)} />
                <InvoicePanelInput className="invoice-panel-field-wide" label="Zusatz / zu Haenden" name="recipient-attention" value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                <InvoicePanelInput className="invoice-panel-field-wide" label="Name / Abteilung" name="recipient-name" value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                <InvoicePanelInput label="Straße" name="recipient-street" value={recipient.address.street} onChange={(value) => updateRecipient('address', { ...recipient.address, street: value })} />
                <InvoicePanelInput label="Hausnummer" name="recipient-house-number" value={recipient.address.houseNumber} onChange={(value) => updateRecipient('address', { ...recipient.address, houseNumber: value })} />
                <InvoicePanelInput label="PLZ" name="recipient-postal-code" value={recipient.address.postalCode} onChange={(value) => updateRecipient('address', { ...recipient.address, postalCode: value })} />
                <InvoicePanelInput label="Stadt" name="recipient-city" value={recipient.address.city} onChange={(value) => updateRecipient('address', { ...recipient.address, city: value })} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigene Kontakt</h3>
            <div className="invoice-panel-grid offer-contact-form-grid">
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <InvoicePanelInput className="invoice-panel-field-wide" label="E-Mail" name="sender-email" value={sender.contact.email} onChange={(value) => updateSender('email', value)} />
                <InvoicePanelInput className="invoice-panel-field-wide" label="Website" name="sender-website" value={sender.contact.website} onChange={(value) => updateSender('website', value)} />
              </div>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <InvoicePanelInput className="invoice-panel-field-wide" label="Telefon" name="sender-phone" value={sender.contact.phone} onChange={(value) => updateSender('phone', value)} />
                <InvoicePanelInput className="invoice-panel-field-wide" label="Fax" name="sender-fax" value={sender.contact.fax} onChange={(value) => updateSender('fax', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Rechnungsdaten</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <InvoicePanelInput autoComplete="off" inputMode="text" label="Rechnungsnummer" name="invoice-code" spellCheck={false} value={details.invoiceNumber} onChange={(value) => updateDetail('invoiceNumber', value)} />
                <InvoicePanelInput label="Belegdatum" name="invoice-date" type="date" value={details.invoiceDate} onChange={(value) => updateDetail('invoiceDate', value)} />
                <InvoicePanelInput label="Leistungsdatum" name="service-date" type="date" value={details.serviceDate} onChange={(value) => updateDetail('serviceDate', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Referenzen</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <InvoicePanelInput autoComplete="off" inputMode="text" label="Interne Nummer" name="invoice-internal-reference" spellCheck={false} value={references.internalNumber} onChange={(value) => updateDetail('internalNumber', value)} />
                <InvoicePanelInput autoComplete="off" inputMode="text" label="Externe Nummer" name="invoice-external-reference" spellCheck={false} value={references.externalNumber} onChange={(value) => updateDetail('externalNumber', value)} />
                <InvoicePanelInput label="Kundennummer" name="customer-reference" value={references.customerNumber} onChange={(value) => updateDetail('customerNumber', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            {introBlock && <TextBlockFormSection block={introBlock} onToggleVisible={() => toggleTextBlockVisibility(introBlock.id)} onUpdate={updateTextBlock} />}
            {closingBlock && <TextBlockFormSection block={closingBlock} onToggleVisible={() => toggleTextBlockVisibility(closingBlock.id)} onUpdate={updateTextBlock} />}
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Positionen</h3>
            <div className="invoice-panel-positions">
              {positions.map((position, index) => (
                <div className="invoice-panel-position" key={position.id}>
                  <span>{index + 1}</span>
                  <InvoicePanelInput label="Leistung" name={`position-${index + 1}-description`} value={position.description} onChange={(value) => updatePosition(position.id, 'description', value)} />
                  <InvoicePanelInput inputMode="decimal" label="Einzelpreis" name={`position-${index + 1}-unit-price`} value={position.unitPrice} onChange={(value) => updatePosition(position.id, 'unitPrice', value)} />
                  <InvoicePanelInput inputMode="decimal" label="Anzahl" name={`position-${index + 1}-quantity`} value={position.quantity} onChange={(value) => updatePosition(position.id, 'quantity', value)} />
                  <InvoicePanelInput label="Einheit" name={`position-${index + 1}-unit`} value={position.unit} onChange={(value) => updatePosition(position.id, 'unit', value)} />
                  <InvoicePanelInput inputMode="decimal" label="USt." name={`position-${index + 1}-tax-rate`} value={position.taxRate} onChange={(value) => updatePosition(position.id, 'taxRate', value)} />
                  <div className="invoice-panel-position-actions">
                    <button className="invoice-panel-remove" type="button" aria-label={`Position ${index + 1} loeschen`} disabled={positions.length === 1} onClick={() => removePosition(position.id)}>
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
            <p className="invoice-panel-note">
              Rechnungsbetrag: {formatCurrency(totals.gross)} | USt.: {formatCurrency(totals.tax)} ({totals.taxGroups.map((group) => `${formatPercent(group.taxRate)}%`).join(', ') || '0%'})
            </p>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Fussdaten</h3>
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
                      footerLabelFields[field] ? (
                        <LabeledFooterValueInput key={field} field={field} footerLines={footerLines} label={label} updateFooterLine={updateFooterLine} />
                      ) : (
                        <InvoicePanelInput key={field} className="invoice-panel-field-wide" label={label} name={`footer-${field}`} value={footerLines[field]} onChange={(value) => updateFooterLine(field, value)} />
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
