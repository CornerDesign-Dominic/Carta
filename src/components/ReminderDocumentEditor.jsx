import { useRef, useState } from 'react';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const initialReminder = {
  senderCompany: 'Belege24 Muster GmbH',
  senderAddress: 'Musterstraße 12 · 10115 Berlin',
  senderContact: 'kontakt@belege24.com · +49 30 123456',
  recipient: 'Beispielkunde GmbH\nBuchhaltung\nKundenstraße 8\n20095 Hamburg',
  reminderNumber: 'MAH-2026-001',
  date: '2026-05-07',
  invoiceNumber: 'RE-2026-001',
  invoiceDate: '2026-04-10',
  dueDate: '2026-04-24',
  openAmount: '595.00',
  reminderFee: '5.00',
  newDueDate: '2026-05-21',
  subject: 'Mahnung',
  introText:
    'nach Prüfung unserer Unterlagen ist die unten genannte Rechnung noch nicht vollständig ausgeglichen.',
  paymentNote:
    'Bitte überweisen Sie den offenen Betrag zuzüglich Mahngebühr bis zum neuen Zahlungstermin auf das unten angegebene Konto.',
  closingText:
    'Sollten Sie die Zahlung bereits veranlasst haben, betrachten Sie dieses Schreiben bitte als gegenstandslos.',
  footer: 'Bank: Musterbank · IBAN DE00 0000 0000 0000 0000 00 · BIC COBADEFFXXX · USt-IdNr. DE123456789',
};

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
  const [reminder, setReminder] = useState(initialReminder);
  const sheetRef = useRef(null);

  const totalAmount = toNumber(reminder.openAmount) + toNumber(reminder.reminderFee);

  function updateField(field, value) {
    setReminder((current) => ({ ...current, [field]: value }));
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
        filename: createPdfFileName(reminder.subject, reminder.reminderNumber),
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
      <div className="visual-toolbar" aria-label="Mahnung Werkzeuge">
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
        className={`offer-sheet reminder-sheet${highlightFields ? ' is-highlight-mode' : ''}`}
        aria-label="Editierbare Mahnung"
      >
        <header className="offer-header">
          <div className="editable-group">
            <input
              aria-label="Absender Firmenname"
              value={reminder.senderCompany}
              onChange={(event) => updateField('senderCompany', event.target.value)}
            />
            <input
              aria-label="Absender Adresse"
              value={reminder.senderAddress}
              onChange={(event) => updateField('senderAddress', event.target.value)}
            />
          </div>
          <textarea
            aria-label="Absender Kontakt"
            value={reminder.senderContact}
            onChange={(event) => updateField('senderContact', event.target.value)}
          />
        </header>

        <section className="offer-address-row">
          <textarea
            aria-label="Empfänger"
            value={reminder.recipient}
            onChange={(event) => updateField('recipient', event.target.value)}
          />
          <div className="offer-details">
            <label>
              <span>Mahnungsnummer</span>
              <input
                value={reminder.reminderNumber}
                onChange={(event) => updateField('reminderNumber', event.target.value)}
              />
            </label>
            <label>
              <span>Datum</span>
              <input
                type="date"
                value={reminder.date}
                onChange={(event) => updateField('date', event.target.value)}
              />
            </label>
            <label>
              <span>Neue Zahlungsfrist</span>
              <input
                type="date"
                value={reminder.newDueDate}
                onChange={(event) => updateField('newDueDate', event.target.value)}
              />
            </label>
          </div>
        </section>

        <input
          className="document-label-input document-title-label reminder-subject"
          aria-label="Betreff"
          value={reminder.subject}
          onChange={(event) => updateField('subject', event.target.value)}
        />

        <textarea
          className="offer-flow-text"
          aria-label="Einleitungstext"
          value={reminder.introText}
          onChange={(event) => updateField('introText', event.target.value)}
        />

        <section className="reminder-reference-grid" aria-label="Bezug zur Rechnung">
          <label>
            <span>Rechnungsnummer</span>
            <input
              value={reminder.invoiceNumber}
              onChange={(event) => updateField('invoiceNumber', event.target.value)}
            />
          </label>
          <label>
            <span>Rechnungsdatum</span>
            <input
              type="date"
              value={reminder.invoiceDate}
              onChange={(event) => updateField('invoiceDate', event.target.value)}
            />
          </label>
          <label>
            <span>Fälligkeitsdatum</span>
            <input
              type="date"
              value={reminder.dueDate}
              onChange={(event) => updateField('dueDate', event.target.value)}
            />
          </label>
        </section>

        <section className="reminder-amount-box" aria-label="Offener Betrag">
          <label>
            <span>Offener Betrag</span>
            <input
              type="number"
              inputMode="decimal"
              value={reminder.openAmount}
              onChange={(event) => updateField('openAmount', event.target.value)}
            />
          </label>
          <label>
            <span>Mahngebühr</span>
            <input
              type="number"
              inputMode="decimal"
              value={reminder.reminderFee}
              onChange={(event) => updateField('reminderFee', event.target.value)}
            />
          </label>
          <div>
            <span>Zu zahlender Betrag</span>
            <strong>{formatCurrency(totalAmount)}</strong>
          </div>
        </section>

        <textarea
          className="offer-flow-text"
          aria-label="Zahlungshinweis"
          value={reminder.paymentNote}
          onChange={(event) => updateField('paymentNote', event.target.value)}
        />

        <textarea
          className="offer-flow-text"
          aria-label="Nachlauftext"
          value={reminder.closingText}
          onChange={(event) => updateField('closingText', event.target.value)}
        />

        <textarea
          className="offer-footer-data"
          aria-label="Bankdaten und Fußbereich"
          value={reminder.footer}
          onChange={(event) => updateField('footer', event.target.value)}
        />
      </article>
    </div>
  );
}
