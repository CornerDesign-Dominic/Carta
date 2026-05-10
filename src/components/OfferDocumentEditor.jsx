import { useEffect, useMemo, useRef, useState } from 'react';
import A4Page from './documentBlocks/A4Page.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import PositionTable from './documentBlocks/PositionTable.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import TextBlock from './documentBlocks/TextBlock.jsx';
import TextBlockControls from './documentBlocks/TextBlockControls.jsx';
import TotalsBox from './documentBlocks/TotalsBox.jsx';
import OfferDocumentForm from './OfferDocumentForm.jsx';
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

const offerSchemaVersion = 2;

const defaultOfferTextBlocks = [
  {
    id: 'intro',
    label: 'Einleitung',
    value: 'vielen Dank für Ihre Anfrage. Gerne unterbreiten wir Ihnen folgendes Angebot:',
    visible: true,
  },
  {
    id: 'closing',
    label: 'Schlusstext',
    value:
      'Dieses Angebot ist bis zum oben genannten Datum gültig. Wir freuen uns auf Ihre Rückmeldung und stehen für Fragen jederzeit zur Verfügung.',
    visible: true,
  },
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

function createFieldConfig(fields) {
  return {
    hidden: [],
    order: fields.map((field) => field.field),
  };
}

function normalizeFieldConfig(config) {
  const fallback = {
    contact: createFieldConfig(offerContactFields),
    details: createFieldConfig(offerMetaFields),
    footerMiddle: createFieldConfig(offerFooterColumns[1]),
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
      : fallback.hidden,
    order,
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

function createJsonFileName(number) {
  const cleanNumber = String(number || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return cleanNumber ? `angebot-${cleanNumber}.json` : 'angebot-vorlage.json';
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

function normalizeTextBlocks(templateTextBlocks, legacyIntroText, legacyClosingText) {
  const defaults = defaultOfferTextBlocks.map((block) => ({ ...block }));

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

  const knownBlocks = new Map(defaults.map((block) => [block.id, block]));
  const normalized = templateTextBlocks
    .filter((block) => knownBlocks.has(block?.id))
    .map((block) => ({
      ...knownBlocks.get(block.id),
      label: typeof block.label === 'string' && block.label ? block.label : knownBlocks.get(block.id).label,
      value: typeof block.value === 'string' ? block.value : knownBlocks.get(block.id).value,
      visible: typeof block.visible === 'boolean' ? block.visible : true,
    }));

  defaults.forEach((block) => {
    if (!normalized.some((entry) => entry.id === block.id)) {
      normalized.push(block);
    }
  });

  return normalized;
}

function normalizePositions(templatePositions) {
  if (!Array.isArray(templatePositions) || templatePositions.length === 0) {
    return [createOfferPosition()];
  }

  return templatePositions.map((position) => ({
    id: typeof position.id === 'string' && position.id ? position.id : crypto.randomUUID(),
    description: String(position.description ?? 'Leistung beschreiben'),
    unitPrice: String(position.unitPrice ?? '0'),
    quantity: String(position.quantity ?? '1'),
    unit: String(position.unit ?? 'Stk.'),
    taxRate: String(position.taxRate ?? '19'),
  }));
}

function validateOfferTemplate(template) {
  if (!template || typeof template !== 'object') {
    throw new Error('Die JSON-Datei ist kein gültiges Angebotsdokument.');
  }

  if (template.documentType !== 'offer') {
    throw new Error('Diese JSON-Datei ist kein Angebot.');
  }

  if (![1, offerSchemaVersion].includes(template.schemaVersion)) {
    throw new Error('Diese Angebotsversion wird nicht unterstützt.');
  }

  if (!template.data || typeof template.data !== 'object') {
    throw new Error('Die JSON-Datei enthält keine Angebotsdaten.');
  }

  return template.data;
}

export default function OfferDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialOfferLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(offerContactFields),
    details: createFieldConfig(offerMetaFields),
    footerMiddle: createFieldConfig(offerFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const jsonInputRef = useRef(null);
  const textBlockRefs = useRef({});
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
  const [textBlocks, setTextBlocks] = useState(defaultOfferTextBlocks);
  const [positions, setPositions] = useState([createOfferPosition()]);

  useEffect(() => {
    textBlocks.forEach((block) => {
      if (block.visible) {
        resizeTextarea(textBlockRefs.current[block.id]);
      }
    });
  }, [textBlocks]);

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

  function movePosition(positionId, direction) {
    setPositions((current) => {
      const index = current.findIndex((position) => position.id === positionId);
      const targetIndex = index + direction;

      if (index < 0 || targetIndex < 0 || targetIndex >= current.length) {
        return current;
      }

      const next = [...current];
      const [position] = next.splice(index, 1);
      next.splice(targetIndex, 0, position);

      return next;
    });
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

  function addPosition() {
    setPositions((current) => [...current, createOfferPosition()]);
  }

  function removePosition(positionId) {
    setPositions((current) =>
      current.length === 1 ? current : current.filter((position) => position.id !== positionId),
    );
  }

  function updateTextBlock(blockId, patch) {
    setTextBlocks((current) =>
      current.map((block) => (block.id === blockId ? { ...block, ...patch } : block)),
    );
  }

  function toggleTextBlockVisibility(blockId) {
    setTextBlocks((current) =>
      current.map((block) =>
        block.id === blockId ? { ...block, visible: !block.visible } : block,
      ),
    );
  }

  function createOfferTemplate() {
    return {
      documentType: 'offer',
      schemaVersion: offerSchemaVersion,
      createdWith: 'Carta',
      data: {
        labels,
        sender,
        recipient,
        details,
        positions,
        textBlocks,
        fieldConfig,
        introText: textBlocks.find((block) => block.id === 'intro')?.value ?? '',
        closingText: textBlocks.find((block) => block.id === 'closing')?.value ?? '',
        footerLines,
      },
    };
  }

  function handleSaveJson() {
    downloadJson(createOfferTemplate(), createJsonFileName(details.offerNumber));
  }

  async function handleLoadJson(event) {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    if (!file.name.toLowerCase().endsWith('.json') && file.type !== 'application/json') {
      window.alert('Bitte eine JSON-Datei auswählen.');
      return;
    }

    try {
      const template = JSON.parse(await file.text());
      const data = validateOfferTemplate(template);

      setLabels({ ...initialOfferLabels, ...(data.labels ?? {}) });
      setSender((current) => ({ ...current, ...(data.sender ?? {}) }));
      setRecipient((current) => ({ ...current, ...(data.recipient ?? {}) }));
      setDetails((current) => ({ ...current, ...(data.details ?? {}) }));
      setFooterLines((current) => ({ ...current, ...(data.footerLines ?? {}) }));
      setPositions(normalizePositions(data.positions));
      setTextBlocks(normalizeTextBlocks(data.textBlocks, data.introText, data.closingText));
      setFieldConfig(normalizeFieldConfig(data.fieldConfig));
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Die JSON-Datei konnte nicht geladen werden.');
    }
  }

  function runWithCleanDocument(callback) {
    const sheet = sheetRef.current;

    if (!sheet) {
      return;
    }

    const hadHighlight = sheet.classList.contains('is-highlight-mode');
    sheet.classList.add('is-export-mode');
    sheet.classList.remove('is-highlight-mode');

    try {
      callback(sheet);
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
    document.body.classList.add('offer-print-mode');

    const sheet = sheetRef.current;
    const hadHighlight = sheet?.classList.contains('is-highlight-mode') ?? false;

    sheet?.classList.add('is-export-mode');
    sheet?.classList.remove('is-highlight-mode');

    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode');
      document.body.classList.remove('offer-print-mode');
      sheet?.classList.remove('is-export-mode');

      if (hadHighlight) {
        sheet?.classList.add('is-highlight-mode');
      }

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
      <OfferDocumentForm
        addPosition={addPosition}
        details={details}
        footerLines={footerLines}
        formatCurrency={formatCurrency}
        formatPercent={formatPercent}
        isOpen={isFormPanelOpen}
        movePosition={movePosition}
        onToggle={() => setIsFormPanelOpen((current) => !current)}
        positions={positions}
        recipient={recipient}
        removePosition={removePosition}
        sender={sender}
        textBlocks={textBlocks}
        toggleTextBlockVisibility={toggleTextBlockVisibility}
        totals={totals}
        updateDetail={updateDetail}
        updateFooterLine={updateFooterLine}
        updatePosition={updatePosition}
        updateRecipient={updateRecipient}
        updateSender={updateSender}
        updateTextBlock={updateTextBlock}
      />

      <DocumentToolbar
        ariaLabel="Angebot Werkzeuge"
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
        ariaLabel="Editierbares Angebot"
        className="offer-sheet invoice-sheet"
        editable={highlightFields}
      >
        <SenderBlock
          contactFields={getOrderedDefinitions('contact', offerContactFields)}
          hiddenFields={getHiddenFields('contact', offerContactFields)}
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
            emphasizedField="offerNumber"
            fields={getOrderedDefinitions('details', offerMetaFields)}
            hiddenFields={getHiddenFields('details', offerMetaFields)}
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

        <PositionTable
          calculatePosition={calculatePosition}
          formatCurrency={formatCurrency}
          labels={labels}
          positions={positions}
          variant="offer"
          onLabelChange={updateLabel}
          onMovePosition={movePosition}
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

        {renderTextBlock(textBlocks.find((block) => block.id === 'closing'), 1)}

        <FooterBlock
          columns={[
            offerFooterColumns[0],
            getOrderedDefinitions('footerMiddle', offerFooterColumns[1]),
            offerFooterColumns[2],
          ]}
          footerLines={footerLines}
          hiddenFields={getHiddenFields('footerMiddle', offerFooterColumns[1])}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
        />
      </A4Page>
    </div>
  );
}
