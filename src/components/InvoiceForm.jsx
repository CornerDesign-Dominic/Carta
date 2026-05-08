import { useEffect, useMemo, useRef, useState } from 'react';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const initialLabels = {
  title: 'Rechnung',
  invoiceNumber: 'Rechnungsnummer',
  invoiceDate: 'Rechnungsdatum',
  serviceDate: 'Leistungsdatum',
  internalNumber: 'Interne Nummer',
  externalNumber: 'Externe Nummer',
  customerNumber: 'Kundennummer',
  position: 'Pos.',
  description: 'Beschreibung',
  unitPrice: 'Einzelpreis',
  quantity: 'Anzahl',
  unit: 'Einheit',
  tax: 'USt.',
  total: 'Gesamt',
  net: 'Nettobetrag',
  taxAmount: 'Umsatzsteuer',
  grandTotal: 'Rechnungsbetrag',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

function createPosition() {
  return {
    id: crypto.randomUUID(),
    description: 'Leistung beschreiben',
    unitPrice: '0',
    quantity: '1',
    unit: 'Stk.',
    taxRate: '19',
  };
}

const defaultPosition = {
  description: 'Leistung beschreiben',
  unitPrice: '0',
  quantity: '1',
  unit: 'Stk.',
  taxRate: '19',
};

const defaultSender = {
  company: 'Belege24 Muster GmbH',
  senderLine: 'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
  street: 'Musterstraße 12',
  cityLine: '10115 Berlin',
  email: 'kontakt@belege24.com',
  phone: '+49 30 123456',
  fax: '+49 30 123457',
  website: 'www.belege24.com',
};

const defaultFooterLines = {
  companyName: 'Belege24 Muster GmbH',
  companyStreet: 'Musterstraße 12',
  companyCity: '10115 Berlin',
  companyExtra: '',
  vatId: 'USt-IdNr.: DE123456789',
  taxNumber: 'Steuernummer: 12/345/67890',
  commercialRegister: 'HRB 123456',
  managingDirector: 'Geschäftsführer: Max Mustermann',
  bankName: 'Bankname: Musterbank',
  iban: 'IBAN: DE00 0000 0000 0000 0000 00',
  bic: 'BIC: COBADEFFXXX',
  bankExtra: '',
};

const defaultRecipient = {
  company: 'Beispielkunde GmbH',
  attention: 'z. Hd. Frau Beispiel',
  name: 'Buchhaltung',
  street: 'Kundenstraße 8',
  cityLine: '20095 Hamburg',
};

const defaultDetails = {
  invoiceNumber: 'RE-2026-001',
  invoiceDate: '2026-05-07',
  serviceDate: '2026-05-07',
  internalNumber: 'INT-1001',
  externalNumber: 'EXT-4711',
  customerNumber: 'K-2048',
};

const defaultIntroText =
  'vielen Dank für Ihren Auftrag. Für unsere Leistungen stellen wir Ihnen wie folgt in Rechnung:';

const defaultClosingText =
  'Bitte begleichen Sie den Rechnungsbetrag innerhalb der angegebenen Zahlungsfrist. Vielen Dank für die angenehme Zusammenarbeit.';

function toNumber(value) {
  const parsed = Number.parseFloat(String(value).replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

function formatPercent(value) {
  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
  }).format(value);
}

function calculatePosition(position) {
  const net = toNumber(position.unitPrice) * toNumber(position.quantity);
  const taxRate = Math.max(0, toNumber(position.taxRate));
  const tax = net * (taxRate / 100);

  return { net, tax, gross: net + tax, taxRate };
}

function resizeTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function getInlineLabelWidth(value) {
  return `${Math.max(String(value).length, 2)}ch`;
}

function getInlineValueWidth(value) {
  return `${Math.max(String(value).length, 4)}ch`;
}

function getFormValue(value, placeholder) {
  return value === placeholder ? '' : value;
}

function InvoicePanelInput({ label, value, placeholder, onChange, type = 'text', inputMode }) {
  return (
    <label className="invoice-panel-field">
      <span>{label}</span>
      <input
        inputMode={inputMode}
        placeholder={placeholder}
        type={type}
        value={getFormValue(value, placeholder)}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function InvoicePanelTextarea({ label, value, placeholder, onChange }) {
  return (
    <label className="invoice-panel-field invoice-panel-field-wide">
      <span>{label}</span>
      <textarea
        placeholder={placeholder}
        value={getFormValue(value, placeholder)}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function createPdfFileName(type, number) {
  const cleanType = String(type || 'rechnung')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  const cleanNumber = String(number || new Date().toISOString().slice(0, 10))
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return `${cleanType || 'rechnung'}-${cleanNumber || 'dokument'}.pdf`;
}

export default function InvoiceForm() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const sheetRef = useRef(null);
  const introTextRef = useRef(null);
  const closingTextRef = useRef(null);
  const dateInputRefs = useRef({});
  const [labels, setLabels] = useState(initialLabels);
  const [sender, setSender] = useState(defaultSender);
  const [footerLines, setFooterLines] = useState(defaultFooterLines);
  const [recipient, setRecipient] = useState(defaultRecipient);
  const [details, setDetails] = useState(defaultDetails);
  const [introText, setIntroText] = useState(defaultIntroText);
  const [closingText, setClosingText] = useState(defaultClosingText);
  const [positions, setPositions] = useState([createPosition()]);

  useEffect(() => {
    resizeTextarea(introTextRef.current);
    resizeTextarea(closingTextRef.current);
  }, [introText, closingText]);

  const totals = useMemo(() => {
    const summary = positions.reduce(
      (current, position) => {
        const calculated = calculatePosition(position);
        const taxKey = String(calculated.taxRate);
        const taxGroup = current.taxGroups.get(taxKey) ?? {
          taxRate: calculated.taxRate,
          tax: 0,
        };

        taxGroup.tax += calculated.tax;
        current.taxGroups.set(taxKey, taxGroup);
        current.net += calculated.net;
        current.tax += calculated.tax;

        return current;
      },
      { net: 0, tax: 0, taxGroups: new Map() },
    );

    return {
      net: summary.net,
      tax: summary.tax,
      gross: summary.net + summary.tax,
      taxGroups: [...summary.taxGroups.values()].sort((first, second) => first.taxRate - second.taxRate),
    };
  }, [positions]);

  function updateLabel(field, value) {
    setLabels((current) => ({ ...current, [field]: value }));
  }

  function updateDetail(field, value) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function openDatePicker(field) {
    const dateInput = dateInputRefs.current[field];

    if (!dateInput) {
      return;
    }

    dateInput.focus();

    if (typeof dateInput.showPicker === 'function') {
      dateInput.showPicker();
    }
  }

  function updateSender(field, value) {
    setSender((current) => ({ ...current, [field]: value }));
  }

  function updateRecipient(field, value) {
    setRecipient((current) => ({ ...current, [field]: value }));
  }

  function updateFooterLine(field, value) {
    setFooterLines((current) => ({ ...current, [field]: value }));
  }

  function updatePosition(positionId, field, value) {
    setPositions((current) =>
      current.map((position) =>
        position.id === positionId ? { ...position, [field]: value } : position,
      ),
    );
  }

  function addPosition() {
    setPositions((current) => [...current, createPosition()]);
  }

  function removePosition(positionId) {
    setPositions((current) =>
      current.length === 1 ? current : current.filter((position) => position.id !== positionId),
    );
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await requestPdfDownload({
        sheet: sheetRef.current,
        documentType: 'invoice',
        filename: createPdfFileName(labels.title, details.invoiceNumber),
      });
    } catch (error) {
      window.alert(
        `PDF konnte nicht erstellt werden. Prüfe bitte, ob die Vercel Function lokal oder auf Vercel verfügbar ist.\n\n${error.message}`,
      );
    } finally {
      setIsExporting(false);
    }
  }

  function handlePrint() {
    document.body.classList.add('document-print-mode');
    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode');
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  return (
    <div className="visual-editor invoice-visual-editor">
      <section className="invoice-form-panel" aria-label="Rechnungsformular">
        <button
          className="invoice-form-panel-toggle"
          type="button"
          aria-expanded={isFormPanelOpen}
          onClick={() => setIsFormPanelOpen((current) => !current)}
        >
          <span>{isFormPanelOpen ? 'Formular schließen' : 'Formular öffnen'}</span>
          <span aria-hidden="true">{isFormPanelOpen ? '−' : '+'}</span>
        </button>

        {isFormPanelOpen && (
          <div className="invoice-form-panel-body">
            <div className="invoice-panel-section">
              <h3>Absender</h3>
              <div className="invoice-panel-grid">
                <InvoicePanelInput
                  label="Firma"
                  placeholder={defaultSender.company}
                  value={sender.company}
                  onChange={(value) => updateSender('company', value)}
                />
                <InvoicePanelInput
                  label="Absenderzeile"
                  placeholder={defaultSender.senderLine}
                  value={sender.senderLine}
                  onChange={(value) => updateSender('senderLine', value)}
                />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Kontakt</h3>
              <div className="invoice-panel-grid">
                <InvoicePanelInput
                  label="E-Mail"
                  placeholder={defaultSender.email}
                  value={sender.email}
                  onChange={(value) => updateSender('email', value)}
                />
                <InvoicePanelInput
                  label="Telefon"
                  placeholder={defaultSender.phone}
                  value={sender.phone}
                  onChange={(value) => updateSender('phone', value)}
                />
                <InvoicePanelInput
                  label="Fax"
                  placeholder={defaultSender.fax}
                  value={sender.fax}
                  onChange={(value) => updateSender('fax', value)}
                />
                <InvoicePanelInput
                  label="Website"
                  placeholder={defaultSender.website}
                  value={sender.website}
                  onChange={(value) => updateSender('website', value)}
                />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Empfänger</h3>
              <div className="invoice-panel-grid">
                <InvoicePanelInput
                  label="Firma"
                  placeholder={defaultRecipient.company}
                  value={recipient.company}
                  onChange={(value) => updateRecipient('company', value)}
                />
                <InvoicePanelInput
                  label="Zusatz"
                  placeholder={defaultRecipient.attention}
                  value={recipient.attention}
                  onChange={(value) => updateRecipient('attention', value)}
                />
                <InvoicePanelInput
                  label="Name"
                  placeholder={defaultRecipient.name}
                  value={recipient.name}
                  onChange={(value) => updateRecipient('name', value)}
                />
                <InvoicePanelInput
                  label="Straße"
                  placeholder={defaultRecipient.street}
                  value={recipient.street}
                  onChange={(value) => updateRecipient('street', value)}
                />
                <InvoicePanelInput
                  label="PLZ Ort"
                  placeholder={defaultRecipient.cityLine}
                  value={recipient.cityLine}
                  onChange={(value) => updateRecipient('cityLine', value)}
                />
              </div>
            </div>

            <div className="invoice-panel-section">
              <h3>Rechnungsdaten</h3>
              <div className="invoice-panel-grid">
                <InvoicePanelInput
                  label="Rechnungsnummer"
                  placeholder={defaultDetails.invoiceNumber}
                  value={details.invoiceNumber}
                  onChange={(value) => updateDetail('invoiceNumber', value)}
                />
                <InvoicePanelInput
                  label="Rechnungsdatum"
                  placeholder={defaultDetails.invoiceDate}
                  value={details.invoiceDate}
                  onChange={(value) => updateDetail('invoiceDate', value)}
                />
                <InvoicePanelInput
                  label="Leistungsdatum"
                  placeholder={defaultDetails.serviceDate}
                  value={details.serviceDate}
                  onChange={(value) => updateDetail('serviceDate', value)}
                />
                <InvoicePanelInput
                  label="Interne Nummer"
                  placeholder={defaultDetails.internalNumber}
                  value={details.internalNumber}
                  onChange={(value) => updateDetail('internalNumber', value)}
                />
                <InvoicePanelInput
                  label="Externe Nummer"
                  placeholder={defaultDetails.externalNumber}
                  value={details.externalNumber}
                  onChange={(value) => updateDetail('externalNumber', value)}
                />
                <InvoicePanelInput
                  label="Kundennummer"
                  placeholder={defaultDetails.customerNumber}
                  value={details.customerNumber}
                  onChange={(value) => updateDetail('customerNumber', value)}
                />
              </div>
            </div>

            <div className="invoice-panel-section invoice-panel-section-wide">
              <h3>Positionen</h3>
              <div className="invoice-panel-positions">
                {positions.map((position, index) => (
                  <div className="invoice-panel-position" key={position.id}>
                    <span>{index + 1}</span>
                    <InvoicePanelInput
                      label="Leistung"
                      placeholder={defaultPosition.description}
                      value={position.description}
                      onChange={(value) => updatePosition(position.id, 'description', value)}
                    />
                    <InvoicePanelInput
                      inputMode="decimal"
                      label="Einzelpreis"
                      placeholder={defaultPosition.unitPrice}
                      value={position.unitPrice}
                      onChange={(value) => updatePosition(position.id, 'unitPrice', value)}
                    />
                    <InvoicePanelInput
                      inputMode="decimal"
                      label="Anzahl"
                      placeholder={defaultPosition.quantity}
                      value={position.quantity}
                      onChange={(value) => updatePosition(position.id, 'quantity', value)}
                    />
                    <InvoicePanelInput
                      label="Einheit"
                      placeholder={defaultPosition.unit}
                      value={position.unit}
                      onChange={(value) => updatePosition(position.id, 'unit', value)}
                    />
                    <InvoicePanelInput
                      inputMode="decimal"
                      label="USt."
                      placeholder={defaultPosition.taxRate}
                      value={position.taxRate}
                      onChange={(value) => updatePosition(position.id, 'taxRate', value)}
                    />
                    <button
                      className="invoice-panel-remove"
                      type="button"
                      aria-label={`Position ${index + 1} löschen`}
                      onClick={() => removePosition(position.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <button className="invoice-panel-add" type="button" onClick={addPosition}>
                + Position hinzufügen
              </button>
            </div>

            <div className="invoice-panel-section invoice-panel-section-wide">
              <h3>Texte</h3>
              <div className="invoice-panel-grid invoice-panel-grid-two">
                <InvoicePanelTextarea
                  label="Vorlauftext"
                  placeholder={defaultIntroText}
                  value={introText}
                  onChange={setIntroText}
                />
                <InvoicePanelTextarea
                  label="Nachlauftext"
                  placeholder={defaultClosingText}
                  value={closingText}
                  onChange={setClosingText}
                />
              </div>
            </div>

            <div className="invoice-panel-section invoice-panel-section-wide">
              <h3>Fußdaten</h3>
              <div className="invoice-panel-grid">
                {[
                  ['companyName', 'Firma', defaultFooterLines.companyName],
                  ['companyStreet', 'Straße', defaultFooterLines.companyStreet],
                  ['companyCity', 'PLZ Ort', defaultFooterLines.companyCity],
                  ['vatId', 'USt-IdNr.', defaultFooterLines.vatId],
                  ['taxNumber', 'Steuernummer', defaultFooterLines.taxNumber],
                  ['commercialRegister', 'Handelsregister', defaultFooterLines.commercialRegister],
                  ['managingDirector', 'Geschäftsführer', defaultFooterLines.managingDirector],
                  ['bankName', 'Bankname', defaultFooterLines.bankName],
                  ['iban', 'IBAN', defaultFooterLines.iban],
                  ['bic', 'BIC', defaultFooterLines.bic],
                ].map(([field, label, placeholder]) => (
                  <InvoicePanelInput
                    key={field}
                    label={label}
                    placeholder={placeholder}
                    value={footerLines[field]}
                    onChange={(value) => updateFooterLine(field, value)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="visual-toolbar" aria-label="Rechnung Werkzeuge">
        <button
          className={highlightFields ? 'is-active' : undefined}
          type="button"
          aria-pressed={highlightFields}
          onClick={() => setHighlightFields((current) => !current)}
        >
          {highlightFields ? 'Vorschau' : 'Bearbeiten'}
        </button>
        <button type="button" onClick={handlePrint}>
          Drucken
        </button>
        <button type="button" onClick={handleCreatePdf} disabled={isExporting}>
          {isExporting ? 'PDF wird erstellt' : 'PDF erstellen'}
        </button>
      </div>

      <article
        ref={sheetRef}
        className={`offer-sheet invoice-sheet${highlightFields ? ' is-highlight-mode' : ''}`}
        aria-label="Editierbare Rechnung"
      >
        <header className="invoice-document-header">
          <div className="editable-group">
            <input
              aria-label="Absender Firmenname"
              value={sender.company}
              onChange={(event) => updateSender('company', event.target.value)}
            />
          </div>

          <div className="invoice-sender-side">
            {[
              ['email', 'contactEmail', 'E-Mail'],
              ['phone', 'contactPhone', 'Telefon'],
              ['fax', 'contactFax', 'Fax'],
              ['website', 'contactWebsite', 'Website'],
            ].map(([field, labelField, label]) => (
              <label key={field}>
                <input
                  className="document-label-input"
                  aria-label={`Beschriftung ${label}`}
                  value={labels[labelField]}
                  onChange={(event) => updateLabel(labelField, event.target.value)}
                />
                <input
                  aria-label={label}
                  value={sender[field]}
                  onChange={(event) => updateSender(field, event.target.value)}
                />
              </label>
            ))}
          </div>
        </header>

        <section className="invoice-address-row">
          <div className="invoice-recipient-fields">
            <input
              className="invoice-sender-line"
              aria-label="Absenderzeile über Empfängeradresse"
              value={sender.senderLine}
              onChange={(event) => updateSender('senderLine', event.target.value)}
            />
            <input
              aria-label="Empfänger Firma"
              value={recipient.company}
              onChange={(event) => updateRecipient('company', event.target.value)}
            />
            <input
              aria-label="Empfänger Zusatz oder z. Hd."
              value={recipient.attention}
              onChange={(event) => updateRecipient('attention', event.target.value)}
            />
            <input
              aria-label="Ansprechpartner oder Name"
              value={recipient.name}
              onChange={(event) => updateRecipient('name', event.target.value)}
            />
            <input
              aria-label="Empfänger Straße und Hausnummer"
              value={recipient.street}
              onChange={(event) => updateRecipient('street', event.target.value)}
            />
            <input
              aria-label="Empfänger PLZ und Stadt"
              value={recipient.cityLine}
              onChange={(event) => updateRecipient('cityLine', event.target.value)}
            />
          </div>

          <div className="invoice-details">
            {[
              ['invoiceNumber', 'Rechnungsnummer'],
              ['invoiceDate', 'Rechnungsdatum'],
              ['serviceDate', 'Leistungsdatum'],
              ['internalNumber', 'Interne Nummer'],
              ['externalNumber', 'Externe Nummer'],
              ['customerNumber', 'Kundennummer'],
            ].map(([field, ariaLabel]) => (
              <label className={field === 'invoiceNumber' ? 'is-emphasized' : undefined} key={field}>
                <input
                  className="document-label-input"
                  aria-label={`Beschriftung ${ariaLabel}`}
                  value={labels[field]}
                  onChange={(event) => updateLabel(field, event.target.value)}
                />
                {['invoiceDate', 'serviceDate'].includes(field) ? (
                  <span className="invoice-date-field">
                    <input
                      ref={(element) => {
                        dateInputRefs.current[field] = element;
                      }}
                      className="invoice-date-input"
                      aria-label={ariaLabel}
                      type="date"
                      value={details[field]}
                      onChange={(event) => updateDetail(field, event.target.value)}
                    />
                    <button
                      className="invoice-icon-action invoice-date-picker"
                      type="button"
                      aria-label={`${ariaLabel} auswählen`}
                      onClick={() => openDatePicker(field)}
                    >
                      <span aria-hidden="true" />
                    </button>
                  </span>
                ) : (
                  <input
                    aria-label={ariaLabel}
                    type="text"
                    value={details[field]}
                    onChange={(event) => updateDetail(field, event.target.value)}
                  />
                )}
              </label>
            ))}
          </div>
        </section>

        <h2 className="invoice-document-title">
          <input
            className="document-label-input document-title-label"
            aria-label="Dokumenttitel"
            value={labels.title}
            onChange={(event) => updateLabel('title', event.target.value)}
          />
        </h2>

        <textarea
          ref={introTextRef}
          className="offer-flow-text invoice-flow-text"
          aria-label="Vorlauftext"
          value={introText}
          onChange={(event) => {
            setIntroText(event.target.value);
            resizeTextarea(event.target);
          }}
        />

        <table className="offer-position-table invoice-position-table">
          <thead>
            <tr>
              {[
                ['position', 'Tabellenkopf Position'],
                ['description', 'Tabellenkopf Beschreibung'],
                ['unitPrice', 'Tabellenkopf Einzelpreis'],
                ['quantity', 'Tabellenkopf Anzahl'],
                ['unit', 'Tabellenkopf Einheit'],
                ['tax', 'Tabellenkopf Umsatzsteuer'],
                ['total', 'Tabellenkopf Gesamt'],
              ].map(([field, ariaLabel]) => (
                <th key={field}>
                  <input
                    className="document-label-input"
                    aria-label={ariaLabel}
                    value={labels[field]}
                    onChange={(event) => updateLabel(field, event.target.value)}
                  />
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => {
              const calculated = calculatePosition(position);

              return (
                <tr key={position.id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      aria-label={`Beschreibung Position ${index + 1}`}
                      value={position.description}
                      onChange={(event) => updatePosition(position.id, 'description', event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      aria-label={`Einzelpreis Position ${index + 1}`}
                      inputMode="decimal"
                      type="text"
                      value={position.unitPrice}
                      onChange={(event) => updatePosition(position.id, 'unitPrice', event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      aria-label={`Anzahl Position ${index + 1}`}
                      inputMode="decimal"
                      type="text"
                      value={position.quantity}
                      onChange={(event) => updatePosition(position.id, 'quantity', event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      aria-label={`Einheit Position ${index + 1}`}
                      value={position.unit}
                      onChange={(event) => updatePosition(position.id, 'unit', event.target.value)}
                    />
                  </td>
                  <td>
                    <span className="invoice-tax-rate-cell">
                      <input
                        aria-label={`Umsatzsteuer Position ${index + 1}`}
                        inputMode="decimal"
                        type="text"
                        value={position.taxRate}
                        onChange={(event) => updatePosition(position.id, 'taxRate', event.target.value)}
                      />
                      <span>%</span>
                    </span>
                  </td>
                  <td>{formatCurrency(calculated.net)}</td>
                  <td>
                    <button
                      aria-label={`Position ${index + 1} löschen`}
                      className="offer-remove"
                      type="button"
                      onClick={() => removePosition(position.id)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button className="offer-add-position" type="button" onClick={addPosition}>
          + Position hinzufügen
        </button>

        <aside className="offer-summary invoice-document-summary" aria-label="Rechnungssummen">
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Nettobetrag"
              value={labels.net}
              onChange={(event) => updateLabel('net', event.target.value)}
            />
            <strong>{formatCurrency(totals.net)}</strong>
          </div>
          {totals.taxGroups.map((group) => (
            <div key={group.taxRate}>
              <span className="document-summary-label">
                <input
                  className="document-label-input"
                  aria-label="Beschriftung Umsatzsteuer"
                  value={labels.taxAmount}
                  onChange={(event) => updateLabel('taxAmount', event.target.value)}
                />
                <span>{formatPercent(group.taxRate)}%</span>
              </span>
              <strong>{formatCurrency(group.tax)}</strong>
            </div>
          ))}
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Rechnungsbetrag"
              value={labels.grandTotal}
              onChange={(event) => updateLabel('grandTotal', event.target.value)}
            />
            <strong>{formatCurrency(totals.gross)}</strong>
          </div>
        </aside>

        <textarea
          ref={closingTextRef}
          className="offer-flow-text invoice-flow-text"
          aria-label="Nachlauftext"
          value={closingText}
          onChange={(event) => {
            setClosingText(event.target.value);
            resizeTextarea(event.target);
          }}
        />

        <footer className="invoice-footer-data" aria-label="Fußbereich">
          <section>
            {[
              ['companyName', 'Firma'],
              ['companyStreet', 'Straße und Hausnummer'],
              ['companyCity', 'PLZ und Stadt'],
              ['companyExtra', 'Zusatzzeile Firma'],
            ].map(([field, label]) => (
              <input
                key={field}
                aria-label={label}
                value={footerLines[field]}
                onChange={(event) => updateFooterLine(field, event.target.value)}
              />
            ))}
          </section>

          <section>
            {[
              ['vatId', 'USt-IdNr.'],
              ['taxNumber', 'Steuernummer'],
              ['commercialRegister', 'Handelsregister'],
              ['managingDirector', 'Geschäftsführer'],
            ].map(([field, label]) => (
              <input
                key={field}
                aria-label={label}
                value={footerLines[field]}
                onChange={(event) => updateFooterLine(field, event.target.value)}
              />
            ))}
          </section>

          <section>
            {[
              ['bankName', 'Bankname'],
              ['iban', 'IBAN'],
              ['bic', 'BIC'],
              ['bankExtra', 'Zusatzzeile Bank'],
            ].map(([field, label]) => (
              <input
                key={field}
                aria-label={label}
                value={footerLines[field]}
                onChange={(event) => updateFooterLine(field, event.target.value)}
              />
            ))}
          </section>
        </footer>
      </article>
    </div>
  );
}
