import { MoveDownIcon, MoveUpIcon } from './documentBlocks/FieldActions.jsx';

const reminderFormDefaults = {
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
    reminderNumber: 'MAH-2026-001',
    reminderDate: '2026-05-07',
    customerNumber: 'K-2048',
  },
  textBlocks: {
    intro:
      'bei der Durchsicht unserer Unterlagen haben wir festgestellt, dass die unten aufgefuehrte Rechnung noch nicht ausgeglichen wurde. Bitte ueberweisen Sie den offenen Betrag innerhalb von 7 Tagen nach Erhalt dieser Mahnung.',
    closing:
      'Sollten Sie die Zahlung bereits veranlasst haben, betrachten Sie dieses Schreiben bitte als gegenstandslos. Vielen Dank fuer Ihre zeitnahe Rueckmeldung.',
  },
  openItem: {
    invoiceNumber: 'RE-2026-001',
    dueDate: '2026-04-24',
    overdueDays: '14',
    amount: '595.00',
  },
  charges: {
    interest: '0',
    reminderFee: '5.00',
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
  if (name.startsWith('open-item-') && name.endsWith('-invoice-number')) return reminderFormDefaults.openItem.invoiceNumber;
  if (name.startsWith('open-item-') && name.endsWith('-due-date')) return reminderFormDefaults.openItem.dueDate;
  if (name.startsWith('open-item-') && name.endsWith('-overdue-days')) return reminderFormDefaults.openItem.overdueDays;
  if (name.startsWith('open-item-') && name.endsWith('-amount')) return reminderFormDefaults.openItem.amount;

  const placeholders = {
    'sender-company': reminderFormDefaults.sender.companyName,
    'sender-line': reminderFormDefaults.sender.returnAddress,
    'sender-street': reminderFormDefaults.sender.address.street,
    'sender-house-number': reminderFormDefaults.sender.address.houseNumber,
    'sender-postal-code': reminderFormDefaults.sender.address.postalCode,
    'sender-city': reminderFormDefaults.sender.address.city,
    'sender-email': reminderFormDefaults.sender.contact.email,
    'sender-website': reminderFormDefaults.sender.contact.website,
    'sender-phone': reminderFormDefaults.sender.contact.phone,
    'sender-fax': reminderFormDefaults.sender.contact.fax,
    'recipient-company': reminderFormDefaults.recipient.companyName,
    'recipient-attention': reminderFormDefaults.recipient.attention,
    'recipient-name': reminderFormDefaults.recipient.name,
    'recipient-street': reminderFormDefaults.recipient.address.street,
    'recipient-house-number': reminderFormDefaults.recipient.address.houseNumber,
    'recipient-postal-code': reminderFormDefaults.recipient.address.postalCode,
    'recipient-city': reminderFormDefaults.recipient.address.city,
    'reminder-code': reminderFormDefaults.details.reminderNumber,
    'reminder-date': reminderFormDefaults.details.reminderDate,
    'customer-reference': reminderFormDefaults.details.customerNumber,
    interest: reminderFormDefaults.charges.interest,
    'reminder-fee': reminderFormDefaults.charges.reminderFee,
  };

  if (name.startsWith('footer-')) {
    const field = name.replace('footer-', '');
    const footerPlaceholders = {
      companyName: reminderFormDefaults.footer.company.companyName,
      companyStreetName: reminderFormDefaults.footer.company.street,
      companyHouseNumber: reminderFormDefaults.footer.company.houseNumber,
      companyPostalCode: reminderFormDefaults.footer.company.postalCode,
      companyCityName: reminderFormDefaults.footer.company.city,
      companyExtra: reminderFormDefaults.footer.company.extra,
      vatId: reminderFormDefaults.footer.tax.vatId,
      taxNumber: reminderFormDefaults.footer.tax.taxNumber,
      commercialRegister: reminderFormDefaults.footer.tax.commercialRegister,
      managingDirector: reminderFormDefaults.footer.tax.representation,
      bankName: reminderFormDefaults.footer.bank.bankName,
      iban: reminderFormDefaults.footer.bank.iban,
      bic: reminderFormDefaults.footer.bank.bic,
      bankExtra: reminderFormDefaults.footer.bank.bankExtra,
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

function ReminderPanelInput({
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

function ReminderPanelTextarea({ label, name, onChange, placeholder = '', value }) {
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
        <ReminderPanelTextarea
          label="Text"
          name={`reminder-text-${block.id}`}
          placeholder={reminderFormDefaults.textBlocks[block.id] ?? ''}
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

export default function ReminderDocumentForm({
  addOpenItem,
  charges,
  details,
  footerLines,
  formatCurrency,
  isOpen,
  moveOpenItem,
  onToggle,
  openItems,
  recipient,
  removeOpenItem,
  sender,
  textBlocks,
  toggleTextBlockVisibility,
  totals,
  updateCharge,
  updateDetail,
  updateFooterLine,
  updateOpenItem,
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
    <section className="invoice-form-panel" aria-label="Mahnungsformular">
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
                <ReminderPanelInput className="invoice-panel-field-wide" label="Firmenname" name="sender-company" value={sender.companyName} onChange={(value) => updateSenderAddress('company', value)} />
                <ReminderPanelInput label="Straße" name="sender-street" value={sender.address.street} onChange={(value) => updateSenderAddress('street', value)} />
                <ReminderPanelInput label="Hausnummer" name="sender-house-number" value={sender.address.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                <ReminderPanelInput label="PLZ" name="sender-postal-code" value={sender.address.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                <ReminderPanelInput label="Stadt" name="sender-city" value={sender.address.city} onChange={(value) => updateSenderAddress('city', value)} />
                <ReminderPanelInput className="invoice-panel-field-wide" label="Absenderzeile" name="sender-line" value={sender.returnAddress} onChange={(value) => updateSender('senderLine', value)} />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <ReminderPanelInput className="invoice-panel-field-wide" label="Firmenname" name="recipient-company" value={recipient.companyName} onChange={(value) => updateRecipient('company', value)} />
                <ReminderPanelInput className="invoice-panel-field-wide" label="Zusatz / zu Haenden" name="recipient-attention" value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                <ReminderPanelInput className="invoice-panel-field-wide" label="Name / Abteilung" name="recipient-name" value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                <ReminderPanelInput label="Straße" name="recipient-street" value={recipient.address.street} onChange={(value) => updateRecipient('address', { ...recipient.address, street: value })} />
                <ReminderPanelInput label="Hausnummer" name="recipient-house-number" value={recipient.address.houseNumber} onChange={(value) => updateRecipient('address', { ...recipient.address, houseNumber: value })} />
                <ReminderPanelInput label="PLZ" name="recipient-postal-code" value={recipient.address.postalCode} onChange={(value) => updateRecipient('address', { ...recipient.address, postalCode: value })} />
                <ReminderPanelInput label="Stadt" name="recipient-city" value={recipient.address.city} onChange={(value) => updateRecipient('address', { ...recipient.address, city: value })} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigene Kontakt</h3>
            <div className="invoice-panel-grid offer-contact-form-grid">
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <ReminderPanelInput className="invoice-panel-field-wide" label="E-Mail" name="sender-email" value={sender.contact.email} onChange={(value) => updateSender('email', value)} />
                <ReminderPanelInput className="invoice-panel-field-wide" label="Website" name="sender-website" value={sender.contact.website} onChange={(value) => updateSender('website', value)} />
              </div>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <ReminderPanelInput className="invoice-panel-field-wide" label="Telefon" name="sender-phone" value={sender.contact.phone} onChange={(value) => updateSender('phone', value)} />
                <ReminderPanelInput className="invoice-panel-field-wide" label="Fax" name="sender-fax" value={sender.contact.fax} onChange={(value) => updateSender('fax', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section invoice-panel-section-wide">
              <h3>Mahndaten</h3>
              <div className="invoice-panel-grid">
                <ReminderPanelInput autoComplete="off" inputMode="text" label="Mahnungsnummer" name="reminder-code" spellCheck={false} value={details.reminderNumber} onChange={(value) => updateDetail('reminderNumber', value)} />
                <ReminderPanelInput label="Belegdatum" name="reminder-date" type="date" value={details.reminderDate} onChange={(value) => updateDetail('reminderDate', value)} />
                <ReminderPanelInput label="Kundennummer" name="customer-reference" value={details.customerNumber} onChange={(value) => updateDetail('customerNumber', value)} />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            {introBlock && <TextBlockFormSection block={introBlock} onToggleVisible={() => toggleTextBlockVisibility(introBlock.id)} onUpdate={updateTextBlock} />}
            {closingBlock && <TextBlockFormSection block={closingBlock} onToggleVisible={() => toggleTextBlockVisibility(closingBlock.id)} onUpdate={updateTextBlock} />}
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Offene Posten</h3>
            <div className="invoice-panel-positions">
              {openItems.map((item, index) => (
                <div className="invoice-panel-position" key={item.id}>
                  <span>{index + 1}</span>
                  <ReminderPanelInput label="Rechnung" name={`open-item-${index + 1}-invoice-number`} value={item.invoiceNumber} onChange={(value) => updateOpenItem(item.id, 'invoiceNumber', value)} />
                  <ReminderPanelInput label="Fälligkeitsdatum" name={`open-item-${index + 1}-due-date`} type="date" value={item.dueDate} onChange={(value) => updateOpenItem(item.id, 'dueDate', value)} />
                  <ReminderPanelInput inputMode="numeric" label="Verzugstage" name={`open-item-${index + 1}-overdue-days`} value={item.overdueDays} onChange={(value) => updateOpenItem(item.id, 'overdueDays', value)} />
                  <ReminderPanelInput inputMode="decimal" label="Betrag" name={`open-item-${index + 1}-amount`} value={item.amount} onChange={(value) => updateOpenItem(item.id, 'amount', value)} />
                  <div className="invoice-panel-position-actions">
                    <button className="invoice-panel-remove" type="button" aria-label={`Offenen Posten ${index + 1} loeschen`} disabled={openItems.length === 1} onClick={() => removeOpenItem(item.id)}>
                      x
                    </button>
                    <button className="invoice-panel-move" type="button" aria-label={`Offenen Posten ${index + 1} nach oben verschieben`} disabled={index === 0} onClick={() => moveOpenItem(item.id, -1)}>
                      <MoveUpIcon />
                    </button>
                    <button className="invoice-panel-move" type="button" aria-label={`Offenen Posten ${index + 1} nach unten verschieben`} disabled={index === openItems.length - 1} onClick={() => moveOpenItem(item.id, 1)}>
                      <MoveDownIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="invoice-panel-add" type="button" onClick={addOpenItem}>
              + Rechnung hinzufügen
            </button>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Summen</h3>
            <div className="invoice-panel-grid">
              <ReminderPanelInput inputMode="decimal" label="Zinsen" name="interest" value={charges.interest} onChange={(value) => updateCharge('interest', value)} />
              <ReminderPanelInput inputMode="decimal" label="Mahngebühr" name="reminder-fee" value={charges.reminderFee} onChange={(value) => updateCharge('reminderFee', value)} />
              <p className="invoice-panel-note">Summe Rechnungen: {formatCurrency(totals.invoiceSum)}</p>
              <p className="invoice-panel-note">Gesamt: {formatCurrency(totals.grandTotal)}</p>
            </div>
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
                        <ReminderPanelInput key={field} className="invoice-panel-field-wide" label={label} name={`footer-${field}`} value={footerLines[field]} onChange={(value) => updateFooterLine(field, value)} />
                      ),
                    )}
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
