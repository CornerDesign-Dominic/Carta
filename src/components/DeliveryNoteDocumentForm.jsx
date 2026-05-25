import { MoveDownIcon, MoveUpIcon } from './documentBlocks/FieldActions.jsx';

const deliveryNoteFormDefaults = {
  sender: {
    companyName: 'Belege24 Muster GmbH',
    returnAddress: 'Belege24 Muster GmbH - Musterstrasse 12 - 10115 Berlin',
    address: {
      street: 'Musterstrasse',
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
    name: 'Wareneingang',
    address: {
      street: 'Kundenstrasse',
      houseNumber: '8',
      postalCode: '20095',
      city: 'Hamburg',
    },
  },
  details: {
    deliveryNoteNumber: 'LFS-2026-001',
    deliveryDate: '2026-05-12',
    orderDate: '2026-05-10',
  },
  references: {
    internalReference: 'INT-1001',
    externalReference: 'EXT-4711',
    customerReference: 'K-2048',
  },
  textBlocks: {
    intro: 'gemäß Ihrer Bestellung liefern wir Ihnen die folgenden Positionen:',
    closing:
      'Bitte prüfen Sie die Lieferung nach Erhalt. Bei Rückfragen oder Abweichungen freuen wir uns über Ihre kurze Nachricht.',
  },
  position: {
    quantity: '1',
    unit: 'Stk.',
    description: 'Artikel oder Leistung beschreiben',
  },
  footer: {
    company: {
      companyName: 'Belege24 Muster GmbH',
      street: 'Musterstrasse',
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
  if (name.startsWith('position-') && name.endsWith('-quantity')) return deliveryNoteFormDefaults.position.quantity;
  if (name.startsWith('position-') && name.endsWith('-unit')) return deliveryNoteFormDefaults.position.unit;
  if (name.startsWith('position-') && name.endsWith('-description')) return deliveryNoteFormDefaults.position.description;

  const placeholders = {
    'sender-company': deliveryNoteFormDefaults.sender.companyName,
    'sender-line': deliveryNoteFormDefaults.sender.returnAddress,
    'sender-street': deliveryNoteFormDefaults.sender.address.street,
    'sender-house-code': deliveryNoteFormDefaults.sender.address.houseNumber,
    'sender-postal-code': deliveryNoteFormDefaults.sender.address.postalCode,
    'sender-city': deliveryNoteFormDefaults.sender.address.city,
    'sender-email': deliveryNoteFormDefaults.sender.contact.email,
    'sender-website': deliveryNoteFormDefaults.sender.contact.website,
    'sender-phone': deliveryNoteFormDefaults.sender.contact.phone,
    'sender-fax': deliveryNoteFormDefaults.sender.contact.fax,
    'recipient-company': deliveryNoteFormDefaults.recipient.companyName,
    'recipient-attention': deliveryNoteFormDefaults.recipient.attention,
    'recipient-name': deliveryNoteFormDefaults.recipient.name,
    'recipient-street': deliveryNoteFormDefaults.recipient.address.street,
    'recipient-house-code': deliveryNoteFormDefaults.recipient.address.houseNumber,
    'recipient-postal-code': deliveryNoteFormDefaults.recipient.address.postalCode,
    'recipient-city': deliveryNoteFormDefaults.recipient.address.city,
    'delivery-note-code': deliveryNoteFormDefaults.details.deliveryNoteNumber,
    'delivery-date': deliveryNoteFormDefaults.details.deliveryDate,
    'order-date': deliveryNoteFormDefaults.details.orderDate,
    'internal-reference': deliveryNoteFormDefaults.references.internalReference,
    'external-reference': deliveryNoteFormDefaults.references.externalReference,
    'customer-reference': deliveryNoteFormDefaults.references.customerReference,
  };

  if (name.startsWith('footer-')) {
    const field = name.replace('footer-', '');
    const footerPlaceholders = {
      companyName: deliveryNoteFormDefaults.footer.company.companyName,
      companyStreetName: deliveryNoteFormDefaults.footer.company.street,
      companyHouseNumber: deliveryNoteFormDefaults.footer.company.houseNumber,
      companyPostalCode: deliveryNoteFormDefaults.footer.company.postalCode,
      companyCityName: deliveryNoteFormDefaults.footer.company.city,
      companyExtra: deliveryNoteFormDefaults.footer.company.extra,
      vatId: deliveryNoteFormDefaults.footer.tax.vatId,
      taxNumber: deliveryNoteFormDefaults.footer.tax.taxNumber,
      commercialRegister: deliveryNoteFormDefaults.footer.tax.commercialRegister,
      managingDirector: deliveryNoteFormDefaults.footer.tax.representation,
      bankName: deliveryNoteFormDefaults.footer.bank.bankName,
      iban: deliveryNoteFormDefaults.footer.bank.iban,
      bic: deliveryNoteFormDefaults.footer.bank.bic,
      bankExtra: deliveryNoteFormDefaults.footer.bank.bankExtra,
    };

    return footerPlaceholders[field] ?? '';
  }

  return placeholders[name] ?? '';
}

function getAutoComplete(name) {
  const values = {
    'sender-company': 'organization',
    'sender-street': 'address-line1',
    'sender-house-code': 'address-line2',
    'sender-postal-code': 'postal-code',
    'sender-city': 'address-level2',
    'sender-email': 'email',
    'sender-website': 'url',
    'sender-phone': 'tel',
    'sender-fax': 'tel',
    'recipient-company': 'organization',
    'recipient-name': 'name',
    'recipient-street': 'address-line1',
    'recipient-house-code': 'address-line2',
    'recipient-postal-code': 'postal-code',
    'recipient-city': 'address-level2',
  };

  return values[name] ?? 'off';
}

function DeliveryNotePanelInput({
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

function DeliveryNotePanelTextarea({ label, name, onChange, placeholder = '', value }) {
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
        <DeliveryNotePanelTextarea
          label="Text"
          name={`delivery-note-text-${block.id}`}
          placeholder={deliveryNoteFormDefaults.textBlocks[block.id] ?? ''}
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

export default function DeliveryNoteDocumentForm({
  addPosition,
  details,
  footerLines,
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
    <section className="invoice-form-panel" aria-label="Lieferscheinformular">
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
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Firmenname" name="sender-company" value={sender.companyName} onChange={(value) => updateSenderAddress('company', value)} />
                <DeliveryNotePanelInput label="Strasse" name="sender-street" value={sender.address.street} onChange={(value) => updateSenderAddress('street', value)} />
                <DeliveryNotePanelInput label="Hausnummer" name="sender-house-code" value={sender.address.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                <DeliveryNotePanelInput label="PLZ" name="sender-postal-code" value={sender.address.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                <DeliveryNotePanelInput label="Stadt" name="sender-city" value={sender.address.city} onChange={(value) => updateSenderAddress('city', value)} />
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Absenderzeile" name="sender-line" value={sender.returnAddress} onChange={(value) => updateSender('senderLine', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Firmenname" name="recipient-company" value={recipient.companyName} onChange={(value) => updateRecipient('company', value)} />
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Zusatz / zu Händen" name="recipient-attention" value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Name / Abteilung" name="recipient-name" value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                <DeliveryNotePanelInput label="Strasse" name="recipient-street" value={recipient.address.street} onChange={(value) => updateRecipient('address', { ...recipient.address, street: value })} />
                <DeliveryNotePanelInput label="Hausnummer" name="recipient-house-code" value={recipient.address.houseNumber} onChange={(value) => updateRecipient('address', { ...recipient.address, houseNumber: value })} />
                <DeliveryNotePanelInput label="PLZ" name="recipient-postal-code" value={recipient.address.postalCode} onChange={(value) => updateRecipient('address', { ...recipient.address, postalCode: value })} />
                <DeliveryNotePanelInput label="Stadt" name="recipient-city" value={recipient.address.city} onChange={(value) => updateRecipient('address', { ...recipient.address, city: value })} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigene Kontakt</h3>
            <div className="invoice-panel-grid offer-contact-form-grid">
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="E-Mail" name="sender-email" value={sender.contact.email} onChange={(value) => updateSender('email', value)} />
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Website" name="sender-website" value={sender.contact.website} onChange={(value) => updateSender('website', value)} />
              </div>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Telefon" name="sender-phone" value={sender.contact.phone} onChange={(value) => updateSender('phone', value)} />
                <DeliveryNotePanelInput className="invoice-panel-field-wide" label="Fax" name="sender-fax" value={sender.contact.fax} onChange={(value) => updateSender('fax', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Lieferscheindaten</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <DeliveryNotePanelInput autoComplete="off" inputMode="text" label="Lieferscheinnummer" name="delivery-note-code" spellCheck={false} value={details.deliveryNoteNumber} onChange={(value) => updateDetail('deliveryNoteNumber', value)} />
                <DeliveryNotePanelInput label="Belegdatum" name="delivery-date" type="date" value={details.deliveryDate} onChange={(value) => updateDetail('deliveryDate', value)} />
                <DeliveryNotePanelInput label="Bestelldatum" name="order-date" type="date" value={details.orderDate} onChange={(value) => updateDetail('orderDate', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Referenzen</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <DeliveryNotePanelInput autoComplete="off" inputMode="text" label="Interne Referenz" name="internal-reference" spellCheck={false} value={references.internalReference} onChange={(value) => updateDetail('internalReference', value)} />
                <DeliveryNotePanelInput autoComplete="off" inputMode="text" label="Externe Referenz" name="external-reference" spellCheck={false} value={references.externalReference} onChange={(value) => updateDetail('externalReference', value)} />
                <DeliveryNotePanelInput autoComplete="off" inputMode="text" label="Kundenreferenz" name="customer-reference" spellCheck={false} value={references.customerReference} onChange={(value) => updateDetail('customerReference', value)} />
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
                  <DeliveryNotePanelInput inputMode="decimal" label="Menge" name={`position-${index + 1}-quantity`} value={position.quantity} onChange={(value) => updatePosition(position.id, 'quantity', value)} />
                  <DeliveryNotePanelInput label="Einheit" name={`position-${index + 1}-unit`} value={position.unit} onChange={(value) => updatePosition(position.id, 'unit', value)} />
                  <DeliveryNotePanelTextarea label="Beschreibung" name={`position-${index + 1}-description`} placeholder={deliveryNoteFormDefaults.position.description} value={position.description} onChange={(value) => updatePosition(position.id, 'description', value)} />
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
                    ['companyStreetName', 'Strasse'],
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
                        <LabeledFooterValueInput
                          key={field}
                          field={field}
                          footerLines={footerLines}
                          label={label}
                          updateFooterLine={updateFooterLine}
                        />
                      ) : (
                        <DeliveryNotePanelInput
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
