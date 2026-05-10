import { useEffect, useMemo, useRef, useState } from 'react';
import A4Page from './documentBlocks/A4Page.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import PositionTable from './documentBlocks/PositionTable.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import TextBlock from './documentBlocks/TextBlock.jsx';
import TotalsBox from './documentBlocks/TotalsBox.jsx';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const initialOfferLabels = {
  title: 'Angebot',
  offerNumber: 'Angebotsnummer',
  offerDate: 'Angebotsdatum',
  validUntil: 'Gültig bis',
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
  grandTotal: 'Gesamtbetrag',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

const offerContactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const offerMetaFields = [
  { field: 'offerNumber', ariaLabel: 'Angebotsnummer', type: 'text' },
  { field: 'offerDate', ariaLabel: 'Angebotsdatum', type: 'date' },
  { field: 'validUntil', ariaLabel: 'Gültig bis', type: 'date' },
  { field: 'internalNumber', ariaLabel: 'Interne Nummer', type: 'text' },
  { field: 'externalNumber', ariaLabel: 'Externe Nummer', type: 'text' },
  { field: 'customerNumber', ariaLabel: 'Kundennummer', type: 'text' },
];

const offerFooterColumns = [
  [
    { field: 'companyName', label: 'Firma' },
    { field: 'companyStreet', label: 'Straße und Hausnummer' },
    { field: 'companyCity', label: 'PLZ und Stadt' },
    { field: 'companyExtra', label: 'Zusatzzeile Firma' },
  ],
  [
    { field: 'vatId', label: 'USt-IdNr.' },
    { field: 'taxNumber', label: 'Steuernummer' },
    { field: 'commercialRegister', label: 'Handelsregister' },
    { field: 'managingDirector', label: 'Geschäftsführer' },
  ],
  [
    { field: 'bankName', label: 'Bankname' },
    { field: 'iban', label: 'IBAN' },
    { field: 'bic', label: 'BIC' },
    { field: 'bankExtra', label: 'Zusatzzeile Bank' },
  ],
];

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
    name: 'Einkauf',
    street: 'Kundenstraße 8',
    cityLine: '20095 Hamburg',
  });
  const [details, setDetails] = useState({
    offerNumber: 'ANG-2026-001',
    offerDate: '2026-05-07',
    validUntil: '2026-05-21',
    internalNumber: 'INT-1001',
    externalNumber: 'EXT-4711',
    customerNumber: 'K-2048',
  });
  const [introText, setIntroText] = useState(
    'vielen Dank für Ihre Anfrage. Gerne unterbreiten wir Ihnen folgendes Angebot:',
  );
  const [closingText, setClosingText] = useState(
    'Dieses Angebot ist bis zum oben genannten Datum gültig. Wir freuen uns auf Ihre Rückmeldung und stehen für Fragen jederzeit zur Verfügung.',
  );
  const [positions, setPositions] = useState([createOfferPosition()]);

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

  function updatePosition(positionId, field, value) {
    setPositions((current) =>
      current.map((position) =>
        position.id === positionId ? { ...position, [field]: value } : position,
      ),
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
    <div className="visual-editor invoice-visual-editor">
      <DocumentToolbar
        ariaLabel="Angebot Werkzeuge"
        isEditable={highlightFields}
        isExporting={isExporting}
        onCreatePdf={handleCreatePdf}
        onPrint={handlePrint}
        onToggleEditable={() => setHighlightFields((current) => !current)}
      />

      <A4Page ref={sheetRef} ariaLabel="Editierbares Angebot" editable={highlightFields}>
        <SenderBlock
          contactFields={offerContactFields}
          labels={labels}
          sender={sender}
          onLabelChange={updateLabel}
          onSenderChange={updateSender}
        />

        <section className="invoice-address-row">
          <RecipientBlock
            recipient={recipient}
            senderLine={sender.senderLine}
            onRecipientChange={updateRecipient}
            onSenderLineChange={(value) => updateSender('senderLine', value)}
          />

          <DocumentMetaBlock
            dateInputRefs={dateInputRefs}
            details={details}
            emphasizedField="offerNumber"
            fields={offerMetaFields}
            labels={labels}
            onDatePicker={openDatePicker}
            onDetailChange={updateDetail}
            onLabelChange={updateLabel}
          />
        </section>

        <h2 className="invoice-document-title">
          <input
            className="document-label-input document-title-label"
            aria-label="Dokumenttitel"
            value={labels.title}
            onChange={(event) => updateLabel('title', event.target.value)}
          />
        </h2>

        <TextBlock
          ref={introTextRef}
          ariaLabel="Vorlauftext"
          value={introText}
          onChange={(value, event) => {
            setIntroText(value);
            resizeTextarea(event.target);
          }}
        />

        <PositionTable
          calculatePosition={calculatePosition}
          formatCurrency={formatCurrency}
          labels={labels}
          positions={positions}
          variant="offer"
          onLabelChange={updateLabel}
          onPositionChange={updatePosition}
          onRemovePosition={removePosition}
        />

        <button className="offer-add-position" type="button" onClick={addPosition}>
          + Position hinzufügen
        </button>

        <TotalsBox
          ariaLabel="Angebotssummen"
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
          labels={labels}
          totals={totals}
          onLabelChange={updateLabel}
        />

        <TextBlock
          ref={closingTextRef}
          ariaLabel="Nachlauftext"
          value={closingText}
          onChange={(value, event) => {
            setClosingText(value);
            resizeTextarea(event.target);
          }}
        />

        <FooterBlock
          columns={offerFooterColumns}
          footerLines={footerLines}
          onFooterLineChange={updateFooterLine}
        />
      </A4Page>
    </div>
  );
}
