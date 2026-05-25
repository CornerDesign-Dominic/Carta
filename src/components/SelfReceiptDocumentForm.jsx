import { MoveDownIcon, MoveUpIcon } from './documentBlocks/FieldActions.jsx';

function SelfReceiptPanelInput({
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
  const effectivePlaceholder = placeholder || getSelfReceiptInputPlaceholder(name);
  const effectiveAutoComplete = autoComplete === 'off' ? getSelfReceiptAutoComplete(name) : autoComplete;
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

function SelfReceiptPanelTextarea({ label, name, onChange, placeholder = '', value }) {
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
  selfReceiptId: 'EB-2026-001',
  receiptDate: '2026-05-12',
  expenseDate: '2026-05-07',
  internalReference: 'INT-1001',
  externalReference: 'EXT-4711',
  costCenter: 'KST-200',
};

const defaultExpenseInfo = {
  occasion: 'Bewirtung während eines kurzfristigen Projekttermins ohne ausgehändigten Fremdbeleg.',
  reason:
    'Der ursprüngliche Fremdbeleg wurde trotz Nachfrage nicht ausgehändigt beziehungsweise war nachträglich nicht mehr beschaffbar.',
  settlementType: 'Bar',
  location: 'Berlin',
};

const defaultPosition = {
  expenseDate: '2026-05-07',
  category: 'Bewirtung',
  description: 'Besprechung mit Projektpartnern inkl. Verpflegung',
  netAmount: '42,00',
  taxRate: '19',
};

const selfReceiptFormDefaults = {
  sender: {
    company: 'Belege24 Muster GmbH',
    senderLine: 'Belege24 Muster GmbH - Musterstrasse 12 - 10115 Berlin',
    email: 'kontakt@belege24.com',
    phone: '+49 30 123456',
    fax: '+49 30 123457',
    website: 'www.belege24.com',
  },
  recipient: {
    company: 'Musterlieferant GmbH',
    attention: 'Verkauf',
    name: 'Zentrale',
    street: 'Lieferantenweg 4',
    cityLine: '80331 München',
  },
  details: defaultDetails,
  expenseInfo: defaultExpenseInfo,
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
  textBlocks: {
    intro: 'Hiermit wird folgender Aufwand ohne vorhandenen Fremdbeleg dokumentiert.',
    declaration:
      'Ich versichere, dass die oben aufgeführten Angaben vollständig und nach bestem Wissen richtig sind. Die Ausgaben wurden betrieblich veranlasst und ein Fremdbeleg konnte nicht vorgelegt werden.',
  },
  position: defaultPosition,
};

const defaultSenderAddress = {
  company: selfReceiptFormDefaults.sender.company,
  street: 'Musterstrasse',
  houseNumber: '12',
  postalCode: '10115',
  city: 'Berlin',
};

const defaultRecipientStreet = { street: 'Lieferantenweg', houseNumber: '4' };
const defaultRecipientCity = { postalCode: '80331', city: 'München' };

const selfReceiptFooterLabelFields = {
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

function getSelfReceiptInputPlaceholder(name) {
  if (name.startsWith('position-') && name.endsWith('-expense-date')) return selfReceiptFormDefaults.position.expenseDate;
  if (name.startsWith('position-') && name.endsWith('-category')) return selfReceiptFormDefaults.position.category;
  if (name.startsWith('position-') && name.endsWith('-description')) return selfReceiptFormDefaults.position.description;
  if (name.startsWith('position-') && name.endsWith('-net-amount')) return selfReceiptFormDefaults.position.netAmount;
  if (name.startsWith('position-') && name.endsWith('-tax-rate')) return selfReceiptFormDefaults.position.taxRate;

  const placeholders = {
    'sender-company': defaultSenderAddress.company,
    'sender-street': defaultSenderAddress.street,
    'sender-house-id': defaultSenderAddress.houseNumber,
    'sender-postal': defaultSenderAddress.postalCode,
    'sender-city': defaultSenderAddress.city,
    'sender-line': selfReceiptFormDefaults.sender.senderLine,
    'sender-email': selfReceiptFormDefaults.sender.email,
    'sender-website': selfReceiptFormDefaults.sender.website,
    'sender-phone': selfReceiptFormDefaults.sender.phone,
    'sender-fax': selfReceiptFormDefaults.sender.fax,
    'recipient-company': selfReceiptFormDefaults.recipient.company,
    'recipient-name': selfReceiptFormDefaults.recipient.name,
    'recipient-street': defaultRecipientStreet.street,
    'recipient-house-id': defaultRecipientStreet.houseNumber,
    'recipient-postal': defaultRecipientCity.postalCode,
    'recipient-city': defaultRecipientCity.city,
    'recipient-attention': selfReceiptFormDefaults.recipient.attention,
    'receipt-id': selfReceiptFormDefaults.details.selfReceiptId,
    'receipt-date': selfReceiptFormDefaults.details.receiptDate,
    'expense-date': selfReceiptFormDefaults.details.expenseDate,
    'receipt-internal-reference': selfReceiptFormDefaults.details.internalReference,
    'receipt-external-reference': selfReceiptFormDefaults.details.externalReference,
    'receipt-cost-center': selfReceiptFormDefaults.details.costCenter,
    'expense-occasion': selfReceiptFormDefaults.expenseInfo.occasion,
    'expense-reason': selfReceiptFormDefaults.expenseInfo.reason,
    'expense-settlement-kind': selfReceiptFormDefaults.expenseInfo.settlementType,
    'expense-location': selfReceiptFormDefaults.expenseInfo.location,
  };

  if (name.startsWith('footer-')) {
    const field = name.replace('footer-', '');
    const footerPlaceholders = {
      companyName: selfReceiptFormDefaults.footer.company.companyName,
      companyStreetName: selfReceiptFormDefaults.footer.company.street,
      companyHouseNumber: selfReceiptFormDefaults.footer.company.houseNumber,
      companyPostalCode: selfReceiptFormDefaults.footer.company.postalCode,
      companyCityName: selfReceiptFormDefaults.footer.company.city,
      companyExtra: selfReceiptFormDefaults.footer.company.extra,
      vatId: selfReceiptFormDefaults.footer.tax.vatId,
      taxNumber: selfReceiptFormDefaults.footer.tax.taxNumber,
      commercialRegister: selfReceiptFormDefaults.footer.tax.commercialRegister,
      managingDirector: selfReceiptFormDefaults.footer.tax.representation,
      bankName: selfReceiptFormDefaults.footer.bank.bankName,
      iban: selfReceiptFormDefaults.footer.bank.iban,
      bic: selfReceiptFormDefaults.footer.bank.bic,
      bankExtra: selfReceiptFormDefaults.footer.bank.bankExtra,
    };

    return footerPlaceholders[field] ?? '';
  }

  return placeholders[name] ?? '';
}

function getSelfReceiptAutoComplete(name) {
  if (name.startsWith('footer-')) {
    return getFooterAutoComplete(name.replace('footer-', ''));
  }

  const autoCompleteValues = {
    'sender-company': 'organization',
    'sender-street': 'address-line1',
    'sender-house-id': 'address-line2',
    'sender-postal': 'postal-code',
    'sender-city': 'address-level2',
    'sender-email': 'email',
    'sender-website': 'url',
    'sender-phone': 'tel',
    'sender-fax': 'tel',
    'recipient-company': 'organization',
    'recipient-name': 'name',
    'recipient-street': 'address-line1',
    'recipient-house-id': 'address-line2',
    'recipient-postal': 'postal-code',
    'recipient-city': 'address-level2',
  };

  return autoCompleteValues[name] ?? 'off';
}

function TextBlockFormSection({ block, onMove, onToggleVisible, onUpdate }) {
  return (
    <div className="invoice-panel-section">
      <div className="invoice-panel-heading-row">
        <h3>{block.label}</h3>
        <div className="invoice-panel-position-actions">
          <button className="invoice-panel-inline-toggle" type="button" onClick={onToggleVisible}>
            {block.visible ? 'Ausblenden' : 'Einblenden'}
          </button>
          <button
            className="invoice-panel-move"
            type="button"
            aria-label={`${block.label} nach oben verschieben`}
            disabled={!onMove?.canMoveUp}
            onClick={() => onMove?.move(-1)}
          >
            <MoveUpIcon />
          </button>
          <button
            className="invoice-panel-move"
            type="button"
            aria-label={`${block.label} nach unten verschieben`}
            disabled={!onMove?.canMoveDown}
            onClick={() => onMove?.move(1)}
          >
            <MoveDownIcon />
          </button>
        </div>
      </div>
      <div className="invoice-panel-grid invoice-panel-grid-stacked">
        <SelfReceiptPanelTextarea
          label="Text"
          name={`self-receipt-text-${block.id}`}
          placeholder={selfReceiptFormDefaults.textBlocks[block.id] ?? ''}
          value={block.value}
          onChange={(value) => onUpdate(block.id, { value })}
        />
      </div>
    </div>
  );
}

function LabeledFooterValueInput({ field, label, footerLines, updateFooterLine }) {
  const labelField = selfReceiptFooterLabelFields[field];
  const valuePlaceholder = getSelfReceiptInputPlaceholder(`footer-${field}`);

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
          placeholder={valuePlaceholder}
          value={getFormValue(footerLines[field] ?? valuePlaceholder, valuePlaceholder)}
          onChange={(event) => updateFooterLine(field, getDocumentValue(event.target.value, valuePlaceholder))}
        />
      </div>
    </div>
  );
}

export default function SelfReceiptDocumentForm({
  addPosition,
  details,
  expenseInfo,
  footerLines,
  isOpen,
  movePosition,
  moveTextBlock,
  onToggle,
  positions,
  recipient,
  references,
  removePosition,
  sender,
  textBlocks,
  toggleTextBlockVisibility,
  updateDetail,
  updateExpenseInfo,
  updateFooterLine,
  updatePosition,
  updateRecipient,
  updateSender,
  updateTextBlock,
}) {
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
    <section className="invoice-form-panel" aria-label="Eigenbelegformular">
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
                <SelfReceiptPanelInput
                  autoComplete="organization"
                  className="invoice-panel-field-wide"
                  label="Firmenname"
                  name="sender-company"
                  value={sender.companyName}
                  onChange={(value) => updateSenderAddress('company', value)}
                />
                <SelfReceiptPanelInput
                  label="Strasse"
                  name="sender-street"
                  value={senderAddress.street}
                  onChange={(value) => updateSenderAddress('street', value)}
                />
                <SelfReceiptPanelInput
                  label="Hausnummer"
                  name="sender-house-id"
                  value={senderAddress.houseNumber}
                  onChange={(value) => updateSenderAddress('houseNumber', value)}
                />
                <SelfReceiptPanelInput
                  label="PLZ"
                  name="sender-postal"
                  value={senderAddress.postalCode}
                  onChange={(value) => updateSenderAddress('postalCode', value)}
                />
                <SelfReceiptPanelInput
                  label="Stadt"
                  name="sender-city"
                  value={senderAddress.city}
                  onChange={(value) => updateSenderAddress('city', value)}
                />
                <SelfReceiptPanelInput
                  className="invoice-panel-field-wide"
                  label="Absenderzeile"
                  name="sender-line"
                  value={sender.returnAddress}
                  onChange={(value) => updateSender('senderLine', value)}
                />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Zahlungsempfänger / Lieferant</h3>
              <div className="invoice-panel-grid">
                <SelfReceiptPanelInput
                  className="invoice-panel-field-wide"
                  label="Firmenname"
                  name="recipient-company"
                  value={recipient.companyName}
                  onChange={(value) => updateRecipient('company', value)}
                />
                <SelfReceiptPanelInput
                  className="invoice-panel-field-wide"
                  label="Zusatz / zu Händen"
                  name="recipient-attention"
                  value={recipient.attention}
                  onChange={(value) => updateRecipient('attention', value)}
                />
                <SelfReceiptPanelInput
                  className="invoice-panel-field-wide"
                  label="Name / Abteilung"
                  name="recipient-name"
                  value={recipient.name}
                  onChange={(value) => updateRecipient('name', value)}
                />
                <SelfReceiptPanelInput
                  label="Strasse"
                  name="recipient-street"
                  value={recipientAddress.street}
                  onChange={(value) => updateRecipient('address', { ...recipient.address, street: value })}
                />
                <SelfReceiptPanelInput
                  label="Hausnummer"
                  name="recipient-house-id"
                  value={recipientAddress.houseNumber}
                  onChange={(value) => updateRecipient('address', { ...recipient.address, houseNumber: value })}
                />
                <SelfReceiptPanelInput
                  label="PLZ"
                  name="recipient-postal"
                  value={recipientAddress.postalCode}
                  onChange={(value) => updateRecipient('address', { ...recipient.address, postalCode: value })}
                />
                <SelfReceiptPanelInput
                  label="Stadt"
                  name="recipient-city"
                  value={recipientAddress.city}
                  onChange={(value) => updateRecipient('address', { ...recipient.address, city: value })}
                />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigene Kontaktangaben</h3>
            <div className="invoice-panel-grid offer-contact-form-grid">
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <SelfReceiptPanelInput
                  autoComplete="email"
                  className="invoice-panel-field-wide"
                  label="E-Mail"
                  name="sender-email"
                  value={sender.contact.email}
                  onChange={(value) => updateSender('email', value)}
                />
                <SelfReceiptPanelInput
                  autoComplete="url"
                  className="invoice-panel-field-wide"
                  label="Website"
                  name="sender-website"
                  value={sender.contact.website}
                  onChange={(value) => updateSender('website', value)}
                />
              </div>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <SelfReceiptPanelInput
                  autoComplete="tel"
                  className="invoice-panel-field-wide"
                  label="Telefon"
                  name="sender-phone"
                  value={sender.contact.phone}
                  onChange={(value) => updateSender('phone', value)}
                />
                <SelfReceiptPanelInput
                  autoComplete="tel"
                  className="invoice-panel-field-wide"
                  label="Fax"
                  name="sender-fax"
                  value={sender.contact.fax}
                  onChange={(value) => updateSender('fax', value)}
                />
              </div>
            </div>
          </div>

          <div className="invoice-panel-row">
            <div className="invoice-panel-section">
              <h3>Belegdaten</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <SelfReceiptPanelInput
                  autoComplete="off"
                  inputMode="text"
                  label="Belegkennung"
                  name="receipt-id"
                  spellCheck={false}
                  value={details.selfReceiptId}
                  onChange={(value) => updateDetail('selfReceiptId', value)}
                />
                <SelfReceiptPanelInput
                  label="Belegdatum"
                  name="receipt-date"
                  type="date"
                  value={details.receiptDate}
                  onChange={(value) => updateDetail('receiptDate', value)}
                />
                <SelfReceiptPanelInput
                  label="Ausgabendatum"
                  name="expense-date"
                  type="date"
                  value={details.expenseDate}
                  onChange={(value) => updateDetail('expenseDate', value)}
                />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Referenzen</h3>
              <div className="invoice-panel-grid invoice-panel-grid-stacked">
                <SelfReceiptPanelInput
                  autoComplete="off"
                  inputMode="text"
                  label="Interne Referenz"
                  name="receipt-internal-reference"
                  spellCheck={false}
                  value={references.internalReference}
                  onChange={(value) => updateDetail('internalReference', value)}
                />
                <SelfReceiptPanelInput
                  autoComplete="off"
                  inputMode="text"
                  label="Externe Referenz"
                  name="receipt-external-reference"
                  spellCheck={false}
                  value={references.externalReference}
                  onChange={(value) => updateDetail('externalReference', value)}
                />
                <SelfReceiptPanelInput
                  autoComplete="off"
                  inputMode="text"
                  label="Kostenstelle"
                  name="receipt-cost-center"
                  spellCheck={false}
                  value={references.costCenter}
                  onChange={(value) => updateDetail('costCenter', value)}
                />
              </div>
            </div>
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Eigenbeleg-Details</h3>
            <div className="invoice-panel-grid">
              <SelfReceiptPanelTextarea
                label="Anlass der Ausgabe"
                name="expense-occasion"
                placeholder={selfReceiptFormDefaults.expenseInfo.occasion}
                value={expenseInfo.occasion}
                onChange={(value) => updateExpenseInfo('occasion', value)}
              />
              <SelfReceiptPanelTextarea
                label="Grund für Eigenbeleg / fehlenden Fremdbeleg"
                name="expense-reason"
                placeholder={selfReceiptFormDefaults.expenseInfo.reason}
                value={expenseInfo.reason}
                onChange={(value) => updateExpenseInfo('reason', value)}
              />
              <SelfReceiptPanelInput
                className="invoice-panel-field-wide"
                label="Zahlungsart"
                name="expense-settlement-kind"
                value={expenseInfo.settlementType}
                onChange={(value) => updateExpenseInfo('settlementType', value)}
              />
              <SelfReceiptPanelInput
                className="invoice-panel-field-wide"
                label="Ort der Ausgabe"
                name="expense-location"
                value={expenseInfo.location}
                onChange={(value) => updateExpenseInfo('location', value)}
              />
            </div>
          </div>

          <div className="invoice-panel-row">
            {textBlocks.map((block, index) => (
              <TextBlockFormSection
                key={block.id}
                block={block}
                onMove={{
                  canMoveUp: index > 0,
                  canMoveDown: index < textBlocks.length - 1,
                  move: (direction) => moveTextBlock(block.id, direction),
                }}
                onToggleVisible={() => toggleTextBlockVisibility(block.id)}
                onUpdate={updateTextBlock}
              />
            ))}
          </div>

          <div className="invoice-panel-section invoice-panel-section-wide">
            <h3>Ausgabenpositionen</h3>
            <div className="invoice-panel-positions">
              {positions.map((position, index) => (
                <div className="invoice-panel-position" key={position.id}>
                  <span>{index + 1}</span>
                  <SelfReceiptPanelInput
                    label="Datum"
                    name={`position-${index + 1}-expense-date`}
                    type="date"
                    value={position.expenseDate}
                    onChange={(value) => updatePosition(position.id, 'expenseDate', value)}
                  />
                  <SelfReceiptPanelInput
                    label="Kategorie"
                    name={`position-${index + 1}-category`}
                    value={position.category}
                    onChange={(value) => updatePosition(position.id, 'category', value)}
                  />
                  <SelfReceiptPanelTextarea
                    label="Beschreibung"
                    name={`position-${index + 1}-description`}
                    value={position.description}
                    placeholder={selfReceiptFormDefaults.position.description}
                    onChange={(value) => updatePosition(position.id, 'description', value)}
                  />
                  <SelfReceiptPanelInput
                    inputMode="decimal"
                    label="Betrag netto"
                    name={`position-${index + 1}-net-amount`}
                    value={position.netAmount}
                    onChange={(value) => updatePosition(position.id, 'netAmount', value)}
                  />
                  <SelfReceiptPanelInput
                    inputMode="decimal"
                    label="USt."
                    name={`position-${index + 1}-tax-rate`}
                    value={position.taxRate}
                    onChange={(value) => updatePosition(position.id, 'taxRate', value)}
                  />
                  <div className="invoice-panel-position-actions">
                    <button
                      className="invoice-panel-remove"
                      type="button"
                      aria-label={`Position ${index + 1} löschen`}
                      disabled={positions.length === 1}
                      onClick={() => removePosition(position.id)}
                    >
                      x
                    </button>
                    <button
                      className="invoice-panel-move"
                      type="button"
                      aria-label={`Position ${index + 1} nach oben verschieben`}
                      disabled={index === 0}
                      onClick={() => movePosition(position.id, -1)}
                    >
                      <MoveUpIcon />
                    </button>
                    <button
                      className="invoice-panel-move"
                      type="button"
                      aria-label={`Position ${index + 1} nach unten verschieben`}
                      disabled={index === positions.length - 1}
                      onClick={() => movePosition(position.id, 1)}
                    >
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
                      selfReceiptFooterLabelFields[field] ? (
                        <LabeledFooterValueInput
                          key={field}
                          field={field}
                          footerLines={footerLines}
                          label={label}
                          updateFooterLine={updateFooterLine}
                        />
                      ) : (
                        <SelfReceiptPanelInput
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
        </div>
      )}
    </section>
  );
}
