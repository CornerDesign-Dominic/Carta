import { useEffect, useMemo, useRef, useState } from 'react';
import A4Page from './documentBlocks/A4Page.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import OpenItemsTable from './documentBlocks/OpenItemsTable.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import TextBlock from './documentBlocks/TextBlock.jsx';
import TextBlockControls from './documentBlocks/TextBlockControls.jsx';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const reminderSchemaVersion = 1;

const initialReminderLabels = {
  title: '1. Mahnung',
  reminderNumber: 'Mahnungsnummer',
  reminderDate: 'Mahnungsdatum',
  paymentTerm: 'Zahlungsfrist',
  reference: 'Bezug',
  customerNumber: 'Kundennummer',
  invoiceNumber: 'Rechnungsnummer',
  dueDate: 'Faelligkeitsdatum',
  overdueDays: 'Faelligkeitstage',
  invoiceTotal: 'Rechnungsbetrag brutto',
  sumInvoices: 'Summe Rechnungen',
  interest: 'Zinsen',
  reminderFee: 'Mahngebuehr',
  grandTotal: 'Gesamt zu zahlender Betrag',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

const reminderContactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const reminderMetaFields = [
  { field: 'reminderNumber', ariaLabel: 'Mahnungsnummer', type: 'text' },
  { field: 'reminderDate', ariaLabel: 'Mahnungsdatum', type: 'date' },
  { field: 'paymentTerm', ariaLabel: 'Zahlungsfrist', type: 'text' },
  { field: 'reference', ariaLabel: 'Bezug', type: 'text' },
  { field: 'customerNumber', ariaLabel: 'Kundennummer', type: 'text' },
];

const reminderFooterColumns = [
  [
    { field: 'companyName', label: 'Firma' },
    { field: 'companyStreet', label: 'Strasse und Hausnummer' },
    { field: 'companyCity', label: 'PLZ und Stadt' },
    { field: 'companyExtra', label: 'Zusatzzeile Firma' },
  ],
  [
    { field: 'vatId', label: 'USt-IdNr.' },
    { field: 'taxNumber', label: 'Steuernummer' },
    { field: 'commercialRegister', label: 'Handelsregister' },
    { field: 'managingDirector', label: 'Geschaeftsfuehrer' },
  ],
  [
    { field: 'bankName', label: 'Bankname' },
    { field: 'iban', label: 'IBAN' },
    { field: 'bic', label: 'BIC' },
    { field: 'bankExtra', label: 'Zusatzzeile Bank' },
  ],
];

const defaultReminderTextBlocks = [
  {
    id: 'intro',
    label: 'Vorlauftext',
    value:
      'bei der Durchsicht unserer Unterlagen haben wir festgestellt, dass die unten aufgefuehrte Rechnung noch nicht ausgeglichen wurde. Bitte ueberweisen Sie den offenen Betrag innerhalb von 7 Tagen nach Erhalt dieser Mahnung.',
    visible: true,
  },
  {
    id: 'closing',
    label: 'Nachlauftext',
    value:
      'Sollten Sie die Zahlung bereits veranlasst haben, betrachten Sie dieses Schreiben bitte als gegenstandslos. Vielen Dank fuer Ihre zeitnahe Rueckmeldung.',
    visible: true,
  },
];

function createOpenInvoice() {
  return {
    id: crypto.randomUUID(),
    invoiceNumber: 'RE-2026-001',
    dueDate: '2026-04-24',
    overdueDays: '14',
    amount: '595.00',
  };
}

function createFieldConfig(fields) {
  return {
    hidden: [],
    order: fields.map((field) => field.field),
  };
}

function normalizeFieldConfig(config) {
  const fallback = {
    contact: createFieldConfig(reminderContactFields),
    details: createFieldConfig(reminderMetaFields),
    footerMiddle: createFieldConfig(reminderFooterColumns[1]),
  };

  if (!config || typeof config !== 'object') {
    return fallback;
  }

  return {
    contact: normalizeFieldConfigBlock(config.contact, fallback.contact),
    details: normalizeFieldConfigBlock(config.details, fallback.details),
    footerMiddle: normalizeFieldConfigBlock(config.footerMiddle, fallback.footerMiddle),
  };
}

function normalizeFieldConfigBlock(config, fallback) {
  const knownFields = new Set(fallback.order);
  const configuredOrder = Array.isArray(config?.order)
    ? config.order.filter((field) => knownFields.has(field))
    : [];
  const order = [
    ...configuredOrder,
    ...fallback.order.filter((field) => !configuredOrder.includes(field)),
  ];

  return {
    hidden: Array.isArray(config?.hidden)
      ? config.hidden.filter((field) => knownFields.has(field))
      : [],
    order,
  };
}

function normalizeTextBlocks(templateTextBlocks, legacyIntroText, legacyClosingText) {
  const defaults = defaultReminderTextBlocks.map((block) => ({ ...block }));

  if (!Array.isArray(templateTextBlocks)) {
    return defaults.map((block) => {
      if (block.id === 'intro' && typeof legacyIntroText === 'string') {
        return { ...block, value: legacyIntroText };
      }

      if (block.id === 'closing' && typeof legacyClosingText === 'string') {
        return { ...block, value: legacyClosingText };
      }

      return block;
    });
  }

  return defaults.map((block) => {
    const configured = templateTextBlocks.find((entry) => entry?.id === block.id);

    return configured
      ? {
          ...block,
          value: String(configured.value ?? block.value),
          visible: configured.visible !== false,
        }
      : block;
  });
}

function normalizeOpenInvoices(templateInvoices) {
  if (!Array.isArray(templateInvoices) || templateInvoices.length === 0) {
    return [createOpenInvoice()];
  }

  return templateInvoices.map((invoice) => ({
    id: typeof invoice.id === 'string' && invoice.id ? invoice.id : crypto.randomUUID(),
    invoiceNumber: String(invoice.invoiceNumber ?? 'RE-2026-001'),
    dueDate: String(invoice.dueDate ?? ''),
    overdueDays: String(invoice.overdueDays ?? '0'),
    amount: String(invoice.amount ?? '0'),
  }));
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
  const cleanType = createSlug(type || 'mahnung');
  const cleanNumber = createSlug(number || new Date().toISOString().slice(0, 10));

  return `${cleanType || 'mahnung'}-${cleanNumber || 'dokument'}.pdf`;
}

function createJsonFileName(number) {
  const cleanNumber = createSlug(number || '');

  return cleanNumber ? `mahnung-${cleanNumber}.json` : 'mahnung-vorlage.json';
}

function createSlug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9aouess]+/gi, '-')
    .replace(/^-+|-+$/g, '');
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function validateReminderTemplate(template) {
  if (!template || typeof template !== 'object') {
    throw new Error('Die JSON-Datei ist kein gueltiges Mahnungsdokument.');
  }

  if (template.documentType !== 'reminder') {
    throw new Error('Diese JSON-Datei ist keine Mahnung.');
  }

  if (template.schemaVersion !== reminderSchemaVersion) {
    throw new Error('Diese Mahnungsversion wird nicht unterstuetzt.');
  }

  if (!template.data || typeof template.data !== 'object') {
    throw new Error('Die JSON-Datei enthaelt keine Mahnungsdaten.');
  }

  return template.data;
}

export default function ReminderDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [labels, setLabels] = useState(initialReminderLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(reminderContactFields),
    details: createFieldConfig(reminderMetaFields),
    footerMiddle: createFieldConfig(reminderFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const jsonInputRef = useRef(null);
  const textBlockRefs = useRef({});
  const dateInputRefs = useRef({});
  const [sender, setSender] = useState({
    company: 'Belege24 Muster GmbH',
    senderLine: 'Belege24 Muster GmbH - Musterstrasse 12 - 10115 Berlin',
    email: 'kontakt@belege24.com',
    phone: '+49 30 123456',
    fax: '+49 30 123457',
    website: 'www.belege24.com',
  });
  const [footerLines, setFooterLines] = useState({
    companyName: 'Belege24 Muster GmbH',
    companyStreet: 'Musterstrasse 12',
    companyCity: '10115 Berlin',
    companyExtra: '',
    vatId: 'USt-IdNr.: DE123456789',
    taxNumber: 'Steuernummer: 12/345/67890',
    commercialRegister: 'HRB 123456',
    managingDirector: 'Geschaeftsfuehrer: Max Mustermann',
    bankName: 'Bankname: Musterbank',
    iban: 'IBAN: DE00 0000 0000 0000 0000 00',
    bic: 'BIC: COBADEFFXXX',
    bankExtra: '',
  });
  const [recipient, setRecipient] = useState({
    company: 'Beispielkunde GmbH',
    attention: 'z. Hd. Frau Beispiel',
    name: 'Buchhaltung',
    street: 'Kundenstrasse 8',
    cityLine: '20095 Hamburg',
  });
  const [details, setDetails] = useState({
    reminderNumber: 'MAH-2026-001',
    reminderDate: '2026-05-07',
    paymentTerm: '7 Tage',
    reference: 'Offene Rechnung',
    customerNumber: 'K-2048',
  });
  const [textBlocks, setTextBlocks] = useState(defaultReminderTextBlocks);
  const [openInvoices, setOpenInvoices] = useState([createOpenInvoice()]);
  const [charges, setCharges] = useState({
    interest: '0',
    reminderFee: '5.00',
  });

  useEffect(() => {
    textBlocks.forEach((block) => {
      if (block.visible) {
        resizeTextarea(textBlockRefs.current[block.id]);
      }
    });
  }, [textBlocks]);

  const totals = useMemo(() => {
    const invoiceSum = openInvoices.reduce((sum, invoice) => sum + toNumber(invoice.amount), 0);
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
      current.map((invoice) => (invoice.id === invoiceId ? { ...invoice, [field]: value } : invoice)),
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

  function getOrderedDefinitions(block, definitions) {
    const order = fieldConfig[block].order;

    return order
      .map((field) => definitions.find((definition) => definition.field === field))
      .filter(Boolean);
  }

  function getHiddenFields(block, definitions) {
    const knownFields = new Set(definitions.map((definition) => definition.field));

    return fieldConfig[block].hidden.filter((field) => knownFields.has(field));
  }

  function toggleConfiguredField(block, field) {
    setFieldConfig((current) => {
      const hidden = current[block].hidden.includes(field)
        ? current[block].hidden.filter((entry) => entry !== field)
        : [...current[block].hidden, field];

      return {
        ...current,
        [block]: {
          ...current[block],
          hidden,
        },
      };
    });
  }

  function moveConfiguredField(block, field, direction) {
    setFieldConfig((current) => {
      const order = [...current[block].order];
      const index = order.indexOf(field);
      const targetIndex = index + direction;

      if (index < 0 || targetIndex < 0 || targetIndex >= order.length) {
        return current;
      }

      const [entry] = order.splice(index, 1);
      order.splice(targetIndex, 0, entry);

      return {
        ...current,
        [block]: {
          ...current[block],
          order,
        },
      };
    });
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

  function updateTextBlock(blockId, patch) {
    setTextBlocks((current) =>
      current.map((block) => (block.id === blockId ? { ...block, ...patch } : block)),
    );
  }

  function toggleTextBlockVisibility(blockId) {
    setTextBlocks((current) =>
      current.map((block) => (block.id === blockId ? { ...block, visible: !block.visible } : block)),
    );
  }

  function createReminderTemplate() {
    return {
      documentType: 'reminder',
      schemaVersion: reminderSchemaVersion,
      createdWith: 'Carta',
      data: {
        labels,
        sender,
        recipient,
        details,
        openItems: openInvoices,
        openInvoices,
        charges,
        textBlocks,
        fieldConfig,
        footerLines,
      },
    };
  }

  function handleSaveJson() {
    downloadJson(createReminderTemplate(), createJsonFileName(details.reminderNumber));
  }

  async function handleLoadJson(event) {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    if (!file.name.toLowerCase().endsWith('.json') && file.type !== 'application/json') {
      window.alert('Bitte eine JSON-Datei auswaehlen.');
      return;
    }

    try {
      const template = JSON.parse(await file.text());
      const data = validateReminderTemplate(template);

      setLabels({ ...initialReminderLabels, ...(data.labels ?? {}) });
      setSender((current) => ({ ...current, ...(data.sender ?? {}) }));
      setRecipient((current) => ({ ...current, ...(data.recipient ?? {}) }));
      setDetails((current) => ({ ...current, ...(data.details ?? {}) }));
      setFooterLines((current) => ({ ...current, ...(data.footerLines ?? {}) }));
      setOpenInvoices(normalizeOpenInvoices(data.openItems ?? data.openInvoices));
      setCharges((current) => ({ ...current, ...(data.charges ?? {}) }));
      setTextBlocks(normalizeTextBlocks(data.textBlocks, data.introText, data.closingText));
      setFieldConfig(normalizeFieldConfig(data.fieldConfig));
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Die JSON-Datei konnte nicht geladen werden.');
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
        `PDF konnte nicht erstellt werden. Pruefe bitte, ob die Vercel Function lokal oder auf Vercel verfuegbar ist.\n\n${error.message}`,
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

  function renderTextBlock(block, index) {
    if (!block) {
      return null;
    }

    if (!block.visible) {
      return (
        <div className="invoice-flow-config-row invoice-flow-hidden-row" key={block.id}>
          <TextBlockControls
            isFirst={index === 0}
            isLast={index === textBlocks.length - 1}
            label={block.label}
            visible={block.visible}
            onToggle={() => toggleTextBlockVisibility(block.id)}
          />
        </div>
      );
    }

    return (
      <div className="invoice-flow-config-row" key={block.id}>
        <TextBlock
          ref={(element) => {
            textBlockRefs.current[block.id] = element;
          }}
          ariaLabel={block.label}
          value={block.value}
          onChange={(value, event) => {
            updateTextBlock(block.id, { value });
            resizeTextarea(event.target);
          }}
        />
        <TextBlockControls
          isFirst={index === 0}
          isLast={index === textBlocks.length - 1}
          label={block.label}
          visible={block.visible}
          onToggle={() => toggleTextBlockVisibility(block.id)}
        />
      </div>
    );
  }

  return (
    <div className="visual-editor invoice-visual-editor">
      <DocumentToolbar
        ariaLabel="Mahnung Werkzeuge"
        isEditable={highlightFields}
        isExporting={isExporting}
        jsonInputRef={jsonInputRef}
        onCreatePdf={handleCreatePdf}
        onLoadJson={handleLoadJson}
        onPrint={handlePrint}
        onSaveJson={handleSaveJson}
        onToggleEditable={() => setHighlightFields((current) => !current)}
      />

      <A4Page
        ref={sheetRef}
        ariaLabel="Editierbare Mahnung"
        className="offer-sheet invoice-sheet reminder-sheet"
        editable={highlightFields}
      >
        <SenderBlock
          contactFields={getOrderedDefinitions('contact', reminderContactFields)}
          hiddenFields={getHiddenFields('contact', reminderContactFields)}
          labels={labels}
          sender={sender}
          onLabelChange={updateLabel}
          onMoveField={(field, direction) => moveConfiguredField('contact', field, direction)}
          onSenderChange={updateSender}
          onToggleField={(field) => toggleConfiguredField('contact', field)}
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
            emphasizedField="reminderNumber"
            fields={getOrderedDefinitions('details', reminderMetaFields)}
            hiddenFields={getHiddenFields('details', reminderMetaFields)}
            labels={labels}
            onDatePicker={openDatePicker}
            onDetailChange={updateDetail}
            onLabelChange={updateLabel}
            onMoveField={(field, direction) => moveConfiguredField('details', field, direction)}
            onToggleField={(field) => toggleConfiguredField('details', field)}
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

        {renderTextBlock(textBlocks.find((block) => block.id === 'intro'), 0)}

        <OpenItemsTable
          dateInputRefs={dateInputRefs}
          items={openInvoices}
          labels={labels}
          onAddItem={addOpenInvoice}
          onDatePicker={openDatePicker}
          onItemChange={updateOpenInvoice}
          onLabelChange={updateLabel}
          onRemoveItem={removeOpenInvoice}
        />

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
              aria-label="Beschriftung Mahngebuehr"
              value={labels.reminderFee}
              onChange={(event) => updateLabel('reminderFee', event.target.value)}
            />
            <input
              className="reminder-summary-value"
              aria-label="Mahngebuehr"
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

        {renderTextBlock(textBlocks.find((block) => block.id === 'closing'), 1)}

        <FooterBlock
          columns={[
            reminderFooterColumns[0],
            getOrderedDefinitions('footerMiddle', reminderFooterColumns[1]),
            reminderFooterColumns[2],
          ]}
          footerLines={footerLines}
          hiddenFields={getHiddenFields('footerMiddle', reminderFooterColumns[1])}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
        />
      </A4Page>
    </div>
  );
}
