import { useMemo, useRef, useState } from 'react';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const initialOfferLabels = {
  title: 'Angebot',
  offerNumber: 'Angebotsnummer',
  offerDate: 'Angebotsdatum',
  validUntil: 'Gültigkeit',
  customerNumber: 'Kundennummer',
  internalNumber: 'Interne Nummer',
  externalNumber: 'Externe Nummer',
  position: 'Pos.',
  description: 'Beschreibung',
  unitPrice: 'Einzelpreis',
  quantity: 'Anzahl',
  unit: 'Einheit',
  tax: 'USt.',
  total: 'Gesamt',
  net: 'Nettobetrag',
  taxAmount: 'Umsatzsteuer',
  grandTotal: 'Gesamtbetrag',
};

function createOfferPosition() {
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

function calculatePosition(position) {
  const net = toNumber(position.unitPrice) * toNumber(position.quantity);
  const tax = net * (toNumber(position.taxRate) / 100);
  return { net, tax, gross: net + tax };
}

function createPdfFileName(title, number) {
  const baseTitle = String(title || 'angebot')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  const baseNumber = String(number || new Date().toISOString().slice(0, 10))
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return `${baseTitle || 'angebot'}-${baseNumber || 'dokument'}.pdf`;
}

export default function OfferDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [labels, setLabels] = useState(initialOfferLabels);
  const sheetRef = useRef(null);
  const [sender, setSender] = useState({
    company: 'Belege24 Muster GmbH',
    street: 'Musterstraße 12',
    postalCode: '10115',
    city: 'Berlin',
    email: 'kontakt@belege24.com',
    phone: '+49 30 123456',
    fax: '+49 30 123457',
    website: 'www.belege24.com',
  });
  const [recipient, setRecipient] = useState({
    company: 'Beispielkunde GmbH',
    name: 'Einkauf',
    street: 'Kundenstraße 8',
    postalCode: '20095',
    city: 'Hamburg',
  });
  const [taxAndBank, setTaxAndBank] = useState({
    vatId: 'DE123456789',
    taxNumber: '12/345/67890',
    bankName: 'Musterbank',
    iban: 'DE00 0000 0000 0000 0000 00',
    bic: 'COBADEFFXXX',
  });
  const [details, setDetails] = useState({
    offerNumber: 'ANG-2026-001',
    offerDate: '2026-05-07',
    validUntil: '14 Tage',
    customerNumber: 'K-2048',
    internalNumber: 'INT-1001',
    externalNumber: 'EXT-4711',
  });
  const [introText, setIntroText] = useState(
    'vielen Dank für Ihre Anfrage. Gerne unterbreiten wir Ihnen folgendes Angebot.',
  );
  const [closingText, setClosingText] = useState(
    'Wir freuen uns auf Ihre Rückmeldung und stehen für Fragen jederzeit zur Verfügung.',
  );
  const [positions, setPositions] = useState([createOfferPosition()]);

  const totals = useMemo(() => {
    return positions.reduce(
      (summary, position) => {
        const calculated = calculatePosition(position);
        summary.net += calculated.net;
        summary.tax += calculated.tax;
        summary.gross += calculated.gross;
        return summary;
      },
      { net: 0, tax: 0, gross: 0 },
    );
  }, [positions]);

  function updateLabel(field, value) {
    setLabels((current) => ({ ...current, [field]: value }));
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

  function updateDetail(field, value) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function updatePosition(positionId, field, value) {
    setPositions((current) =>
      current.map((position) =>
        position.id === positionId ? { ...position, [field]: value } : position,
      ),
    );
  }

  function addPosition() {
    setPositions((current) => [...current, createOfferPosition()]);
  }

  function removePosition(positionId) {
    setPositions((current) =>
      current.length === 1 ? current : current.filter((position) => position.id !== positionId),
    );
  }

  async function runWithCleanDocument(callback) {
    const sheet = sheetRef.current;

    if (!sheet) {
      return;
    }

    const hadHighlight = sheet.classList.contains('is-highlight-mode');
    sheet.classList.add('is-export-mode');
    sheet.classList.remove('is-highlight-mode');

    try {
      await callback(sheet);
    } finally {
      sheet.classList.remove('is-export-mode');

      if (hadHighlight) {
        sheet.classList.add('is-highlight-mode');
      }
    }
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await requestPdfDownload({
        sheet: sheetRef.current,
        documentType: 'offer',
        filename: createPdfFileName(labels.title, details.offerNumber),
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

    void runWithCleanDocument(async () => {
      window.print();
    });

    const cleanup = () => {
      document.body.classList.remove('document-print-mode');
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  return (
    <div className="visual-editor">
      <div className="visual-toolbar" aria-label="Angebot Werkzeuge">
        <button
          className={highlightFields ? 'is-active' : undefined}
          type="button"
          aria-pressed={highlightFields}
          onClick={() => setHighlightFields((current) => !current)}
        >
          {highlightFields ? 'Vorschau' : 'Bearbeiten'}
        </button>
        <button type="button" onClick={handlePrint}>Drucken</button>
        <button type="button" onClick={handleCreatePdf} disabled={isExporting}>
          {isExporting ? 'PDF wird erstellt' : 'PDF erstellen'}
        </button>
      </div>

      <article
        ref={sheetRef}
        className={`offer-sheet invoice-sheet${highlightFields ? ' is-highlight-mode' : ''}`}
        aria-label="Editierbares Angebot"
      >
        <header className="invoice-document-header">
          <div className="editable-group">
            <input
              aria-label="Absender Firmenname"
              value={sender.company}
              onChange={(event) => updateSender('company', event.target.value)}
            />
            <input
              aria-label="Absender Straße und Hausnummer"
              value={sender.street}
              onChange={(event) => updateSender('street', event.target.value)}
            />
            <div className="invoice-recipient-location">
              <input
                aria-label="Absender PLZ"
                value={sender.postalCode}
                onChange={(event) => updateSender('postalCode', event.target.value)}
              />
              <input
                aria-label="Absender Stadt"
                value={sender.city}
                onChange={(event) => updateSender('city', event.target.value)}
              />
            </div>
          </div>

          <div className="invoice-sender-side">
            {[
              ['email', 'E-Mail'],
              ['phone', 'Telefon'],
              ['fax', 'Fax'],
              ['website', 'Website'],
            ].map(([field, label]) => (
              <label key={field}>
                <span>{label}</span>
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
            <p className="invoice-sender-line">
              {sender.company} | {sender.street} | {sender.postalCode} {sender.city}
            </p>
            <input
              aria-label="Empfänger Firma"
              value={recipient.company}
              onChange={(event) => updateRecipient('company', event.target.value)}
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
            <div className="invoice-recipient-location">
              <input
                aria-label="Empfänger PLZ"
                value={recipient.postalCode}
                onChange={(event) => updateRecipient('postalCode', event.target.value)}
              />
              <input
                aria-label="Empfänger Stadt"
                value={recipient.city}
                onChange={(event) => updateRecipient('city', event.target.value)}
              />
            </div>
          </div>

          <div className="invoice-details">
            {[
              ['offerNumber', 'Angebotsnummer', 'text'],
              ['offerDate', 'Angebotsdatum', 'date'],
              ['validUntil', 'Gültigkeit', 'text'],
              ['customerNumber', 'Kundennummer', 'text'],
              ['internalNumber', 'Interne Nummer', 'text'],
              ['externalNumber', 'Externe Nummer', 'text'],
            ].map(([field, ariaLabel, type]) => (
              <label key={field}>
                <input
                  className="document-label-input"
                  aria-label={`Beschriftung ${ariaLabel}`}
                  value={labels[field]}
                  onChange={(event) => updateLabel(field, event.target.value)}
                />
                <input
                  aria-label={ariaLabel}
                  type={type}
                  value={details[field]}
                  onChange={(event) => updateDetail(field, event.target.value)}
                />
              </label>
            ))}
          </div>
        </section>

        <h2>
          <input
            className="document-label-input document-title-label"
            aria-label="Dokumenttitel"
            value={labels.title}
            onChange={(event) => updateLabel('title', event.target.value)}
          />
        </h2>

        <textarea
          className="offer-flow-text invoice-flow-text"
          aria-label="Vorlauftext"
          value={introText}
          onChange={(event) => setIntroText(event.target.value)}
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
                      type="number"
                      value={position.unitPrice}
                      onChange={(event) => updatePosition(position.id, 'unitPrice', event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      aria-label={`Anzahl Position ${index + 1}`}
                      type="number"
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
                    <select
                      aria-label={`Umsatzsteuer Position ${index + 1}`}
                      value={position.taxRate}
                      onChange={(event) => updatePosition(position.id, 'taxRate', event.target.value)}
                    >
                      <option value="0">0 %</option>
                      <option value="7">7 %</option>
                      <option value="19">19 %</option>
                    </select>
                  </td>
                  <td>{formatCurrency(calculated.net)}</td>
                  <td>
                    <button
                      aria-label={`Position ${index + 1} löschen`}
                      className="offer-remove"
                      type="button"
                      onClick={() => removePosition(position.id)}
                    >
                      ×
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

        <aside className="offer-summary invoice-document-summary" aria-label="Angebotssummen">
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Nettobetrag"
              value={labels.net}
              onChange={(event) => updateLabel('net', event.target.value)}
            />
            <strong>{formatCurrency(totals.net)}</strong>
          </div>
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Umsatzsteuer"
              value={labels.taxAmount}
              onChange={(event) => updateLabel('taxAmount', event.target.value)}
            />
            <strong>{formatCurrency(totals.tax)}</strong>
          </div>
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Gesamtbetrag"
              value={labels.grandTotal}
              onChange={(event) => updateLabel('grandTotal', event.target.value)}
            />
            <strong>{formatCurrency(totals.gross)}</strong>
          </div>
        </aside>

        <textarea
          className="offer-flow-text invoice-flow-text"
          aria-label="Nachlauftext"
          value={closingText}
          onChange={(event) => setClosingText(event.target.value)}
        />

        <footer className="invoice-footer-data" aria-label="Fußbereich mit Steuer- und Bankdaten">
          {[
            ['USt-IdNr.', 'vatId'],
            ['Steuernummer', 'taxNumber'],
            ['Bankname', 'bankName'],
            ['IBAN', 'iban'],
            ['BIC', 'bic'],
          ].map(([label, field]) => (
            <label key={field}>
              <span>{label}</span>
              <input
                aria-label={label}
                value={taxAndBank[field]}
                onChange={(event) => updateTaxAndBank(field, event.target.value)}
              />
            </label>
          ))}
        </footer>
      </article>
    </div>
  );
}
