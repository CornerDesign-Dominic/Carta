import { useEffect, useMemo, useRef, useState } from 'react';

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

export default function InvoiceForm() {
  const [highlightFields, setHighlightFields] = useState(false);
  const introTextRef = useRef(null);
  const closingTextRef = useRef(null);
  const dateInputRefs = useRef({});
  const [labels, setLabels] = useState(initialLabels);
  const [sender, setSender] = useState({
    company: 'Belege24 Muster GmbH',
    senderLine: 'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
    street: 'Musterstraße 12',
    cityLine: '10115 Berlin',
    email: 'kontakt@belege24.com',
    phone: '+49 30 123456',
    fax: '+49 30 123457',
    website: 'www.belege24.com',
  });
  const [taxAndBank, setTaxAndBank] = useState({
    vatId: 'DE123456789',
    taxNumber: '12/345/67890',
    commercialRegister: 'HRB 123456',
    managingDirector: 'Max Mustermann',
    bankName: 'Musterbank',
    iban: 'DE00 0000 0000 0000 0000 00',
    bic: 'COBADEFFXXX',
  });
  const [footerLines, setFooterLines] = useState({
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
  });
  const [recipient, setRecipient] = useState({
    company: 'Beispielkunde GmbH',
    attention: 'z. Hd. Frau Beispiel',
    name: 'Buchhaltung',
    street: 'Kundenstraße 8',
    cityLine: '20095 Hamburg',
  });
  const [details, setDetails] = useState({
    invoiceNumber: 'RE-2026-001',
    invoiceDate: '2026-05-07',
    serviceDate: '2026-05-07',
    internalNumber: 'INT-1001',
    externalNumber: 'EXT-4711',
    customerNumber: 'K-2048',
  });
  const [introText, setIntroText] = useState(
    'vielen Dank für Ihren Auftrag. Für unsere Leistungen stellen wir Ihnen wie folgt in Rechnung:',
  );
  const [closingText, setClosingText] = useState(
    'Bitte begleichen Sie den Rechnungsbetrag innerhalb der angegebenen Zahlungsfrist. Vielen Dank für die angenehme Zusammenarbeit.',
  );
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

  function updateTaxAndBank(field, value) {
    setTaxAndBank((current) => ({ ...current, [field]: value }));
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
        <button type="button" onClick={() => window.alert('PDF erstellen ist als Platzhalter vorbereitet.')}>
          PDF erstellen
        </button>
      </div>

      <article
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
