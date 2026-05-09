import { useEffect, useMemo, useRef, useState } from 'react';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const initialReminderLabels = {
  title: '1. Mahnung',
  reminderNumber: 'Mahnungsnummer',
  reminderDate: 'Mahnungsdatum',
  paymentTerm: 'Zahlungsfrist',
  reference: 'Bezug',
  customerNumber: 'Kundennummer',
  invoiceNumber: 'Rechnungsnummer',
  dueDate: 'Fälligkeitsdatum',
  overdueDays: 'Fälligkeitstage',
  invoiceTotal: 'Rechnungsbetrag brutto',
  sumInvoices: 'Summe Rechnungen',
  interest: 'Zinsen',
  reminderFee: 'Mahngebühr',
  grandTotal: 'Gesamt zu zahlender Betrag',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

function createOpenInvoice() {
  return {
    id: crypto.randomUUID(),
    invoiceNumber: 'RE-2026-001',
    dueDate: '2026-04-24',
    overdueDays: '14',
    amount: '595.00',
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

function resizeTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function createPdfFileName(type, number) {
  const cleanType = String(type || 'mahnung')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  const cleanNumber = String(number || new Date().toISOString().slice(0, 10))
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return `${cleanType || 'mahnung'}-${cleanNumber || 'dokument'}.pdf`;
}

export default function ReminderDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [labels, setLabels] = useState(initialReminderLabels);
  const sheetRef = useRef(null);
  const introTextRef = useRef(null);
  const closingTextRef = useRef(null);
  const dateInputRefs = useRef({});
  const [sender, setSender] = useState({
    company: 'Belege24 Muster GmbH',
    senderLine: 'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
    email: 'kontakt@belege24.com',
    phone: '+49 30 123456',
    fax: '+49 30 123457',
    website: 'www.belege24.com',
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
    reminderNumber: 'MAH-2026-001',
    reminderDate: '2026-05-07',
    paymentTerm: '7 Tage',
    reference: 'Offene Rechnung',
    customerNumber: 'K-2048',
  });
  const [introText, setIntroText] = useState(
    'bei der Durchsicht unserer Unterlagen haben wir festgestellt, dass die unten aufgeführte Rechnung noch nicht ausgeglichen wurde. Bitte überweisen Sie den offenen Betrag innerhalb von 7 Tagen nach Erhalt dieser Mahnung.',
  );
  const [closingText, setClosingText] = useState(
    'Sollten Sie die Zahlung bereits veranlasst haben, betrachten Sie dieses Schreiben bitte als gegenstandslos. Vielen Dank für Ihre zeitnahe Rückmeldung.',
  );
  const [openInvoices, setOpenInvoices] = useState([createOpenInvoice()]);
  const [charges, setCharges] = useState({
    interest: '0',
    reminderFee: '5.00',
  });

  useEffect(() => {
    resizeTextarea(introTextRef.current);
    resizeTextarea(closingTextRef.current);
  }, [introText, closingText]);

  const totals = useMemo(() => {
    const invoiceSum = openInvoices.reduce(
      (sum, invoice) => sum + toNumber(invoice.amount),
      0,
    );
    const interest = toNumber(charges.interest);
    const reminderFee = toNumber(charges.reminderFee);

    return {
      invoiceSum,
      interest,
      reminderFee,
      grandTotal: invoiceSum + interest + reminderFee,
    };
  }, [openInvoices, charges]);

  function updateLabel(field, value) {
    setLabels((current) => ({ ...current, [field]: value }));
  }

  function updateSender(field, value) {
    setSender((current) => ({ ...current, [field]: value }));
  }

  function updateRecipient(field, value) {
    setRecipient((current) => ({ ...current, [field]: value }));
  }

  function updateDetail(field, value) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function updateFooterLine(field, value) {
    setFooterLines((current) => ({ ...current, [field]: value }));
  }

  function updateCharge(field, value) {
    setCharges((current) => ({ ...current, [field]: value }));
  }

  function updateOpenInvoice(invoiceId, field, value) {
    setOpenInvoices((current) =>
      current.map((invoice) =>
        invoice.id === invoiceId ? { ...invoice, [field]: value } : invoice,
      ),
    );
  }

  function addOpenInvoice() {
    setOpenInvoices((current) => [...current, createOpenInvoice()]);
  }

  function removeOpenInvoice(invoiceId) {
    setOpenInvoices((current) =>
      current.length === 1 ? current : current.filter((invoice) => invoice.id !== invoiceId),
    );
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
        documentType: 'reminder',
        filename: createPdfFileName(labels.title, details.reminderNumber),
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
    <div className="visual-editor invoice-visual-editor">
      <div className="visual-toolbar" aria-label="Mahnung Werkzeuge">
        <button
          className={highlightFields ? 'is-active' : undefined}
          type="button"
          title="Bearbeitbare Felder im Dokument anzeigen"
          aria-label="Bearbeitbare Felder im Dokument anzeigen"
          aria-pressed={highlightFields}
          onClick={() => setHighlightFields((current) => !current)}
        >
          {highlightFields ? 'Vorschau' : 'Bearbeiten'}
        </button>
        <button
          type="button"
          title="Druckdialog öffnen"
          aria-label="Druckdialog öffnen"
          onClick={handlePrint}
        >
          Drucken
        </button>
        <button
          type="button"
          title="PDF-Datei erstellen"
          aria-label="PDF-Datei erstellen"
          onClick={handleCreatePdf}
          disabled={isExporting}
        >
          {isExporting ? 'PDF wird erstellt' : 'PDF erstellen'}
        </button>
      </div>

      <article
        ref={sheetRef}
        className={`offer-sheet invoice-sheet reminder-sheet${highlightFields ? ' is-highlight-mode' : ''}`}
        aria-label="Editierbare Mahnung"
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
              ['reminderNumber', 'Mahnungsnummer', 'text'],
              ['reminderDate', 'Mahnungsdatum', 'date'],
              ['paymentTerm', 'Zahlungsfrist', 'text'],
              ['reference', 'Bezug', 'text'],
              ['customerNumber', 'Kundennummer', 'text'],
            ].map(([field, ariaLabel, type]) => (
              <label className={field === 'reminderNumber' ? 'is-emphasized' : undefined} key={field}>
                <input
                  className="document-label-input"
                  aria-label={`Beschriftung ${ariaLabel}`}
                  value={labels[field]}
                  onChange={(event) => updateLabel(field, event.target.value)}
                />
                {type === 'date' ? (
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

        <table className="offer-position-table invoice-position-table reminder-invoice-table">
          <thead>
            <tr>
              {[
                ['invoiceNumber', 'Tabellenkopf Rechnungsnummer'],
                ['dueDate', 'Tabellenkopf Fälligkeitsdatum'],
                ['overdueDays', 'Tabellenkopf Fälligkeitstage'],
                ['invoiceTotal', 'Tabellenkopf Rechnungsbetrag brutto'],
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
            {openInvoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>
                  <input
                    aria-label={`Rechnungsnummer ${index + 1}`}
                    value={invoice.invoiceNumber}
                    onChange={(event) => updateOpenInvoice(invoice.id, 'invoiceNumber', event.target.value)}
                  />
                </td>
                <td>
                  <span className="invoice-date-field">
                    <input
                      ref={(element) => {
                        dateInputRefs.current[`dueDate-${invoice.id}`] = element;
                      }}
                      className="invoice-date-input"
                      aria-label={`Fälligkeitsdatum ${index + 1}`}
                      type="date"
                      value={invoice.dueDate}
                      onChange={(event) => updateOpenInvoice(invoice.id, 'dueDate', event.target.value)}
                    />
                    <button
                      className="invoice-icon-action invoice-date-picker"
                      type="button"
                      aria-label={`Fälligkeitsdatum ${index + 1} auswählen`}
                      onClick={() => openDatePicker(`dueDate-${invoice.id}`)}
                    >
                      <span aria-hidden="true" />
                    </button>
                  </span>
                </td>
                <td>
                  <input
                    aria-label={`Fälligkeitstage ${index + 1}`}
                    inputMode="numeric"
                    type="text"
                    value={invoice.overdueDays}
                    onChange={(event) => updateOpenInvoice(invoice.id, 'overdueDays', event.target.value)}
                  />
                </td>
                <td>
                  <input
                    aria-label={`Rechnungsbetrag brutto ${index + 1}`}
                    inputMode="decimal"
                    type="text"
                    value={invoice.amount}
                    onChange={(event) => updateOpenInvoice(invoice.id, 'amount', event.target.value)}
                  />
                </td>
                <td>
                  <button
                    aria-label={`Offene Rechnung ${index + 1} löschen`}
                    className="offer-remove"
                    type="button"
                    onClick={() => removeOpenInvoice(invoice.id)}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="offer-add-position" type="button" onClick={addOpenInvoice}>
          + Rechnung hinzufügen
        </button>

        <aside className="offer-summary invoice-document-summary reminder-document-summary" aria-label="Mahnungssummen">
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Summe Rechnungen"
              value={labels.sumInvoices}
              onChange={(event) => updateLabel('sumInvoices', event.target.value)}
            />
            <strong>{formatCurrency(totals.invoiceSum)}</strong>
          </div>
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Zinsen"
              value={labels.interest}
              onChange={(event) => updateLabel('interest', event.target.value)}
            />
            <input
              className="reminder-summary-value"
              aria-label="Zinsen"
              inputMode="decimal"
              type="text"
              value={charges.interest}
              onChange={(event) => updateCharge('interest', event.target.value)}
            />
          </div>
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Mahngebühr"
              value={labels.reminderFee}
              onChange={(event) => updateLabel('reminderFee', event.target.value)}
            />
            <input
              className="reminder-summary-value"
              aria-label="Mahngebühr"
              inputMode="decimal"
              type="text"
              value={charges.reminderFee}
              onChange={(event) => updateCharge('reminderFee', event.target.value)}
            />
          </div>
          <div>
            <input
              className="document-label-input"
              aria-label="Beschriftung Gesamt zu zahlender Betrag"
              value={labels.grandTotal}
              onChange={(event) => updateLabel('grandTotal', event.target.value)}
            />
            <strong>{formatCurrency(totals.grandTotal)}</strong>
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
