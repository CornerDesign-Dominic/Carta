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

const contactFieldDefinitions = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const detailFieldDefinitions = [
  { field: 'invoiceDate', label: 'Rechnungsdatum', type: 'date' },
  { field: 'serviceDate', label: 'Leistungsdatum', type: 'date' },
  { field: 'internalNumber', label: 'Interne Nummer', type: 'text' },
  { field: 'externalNumber', label: 'Externe Nummer', type: 'text' },
  { field: 'customerNumber', label: 'Kundennummer', type: 'text' },
];

const footerMiddleDefinitions = [
  { field: 'vatId', label: 'USt-IdNr.' },
  { field: 'taxNumber', label: 'Steuernummer' },
  { field: 'commercialRegister', label: 'Handelsregister' },
  { field: 'managingDirector', label: 'Geschäftsführer' },
];

function createFieldConfig(fields) {
  return {
    hidden: [],
    order: fields.map((field) => field.field),
  };
}

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

const defaultSenderAddressParts = {
  street: 'Musterstraße',
  houseNumber: '12',
  postalCode: '10115',
  city: 'Berlin',
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

const defaultRecipientAddressParts = {
  street: 'Kundenstraße',
  houseNumber: '8',
  postalCode: '20095',
  city: 'Hamburg',
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

function joinAddressLine(...parts) {
  return parts.map((part) => String(part || '').trim()).filter(Boolean).join(' ');
}

function buildSenderLine(company, address) {
  return [company, joinAddressLine(address.street, address.houseNumber), joinAddressLine(address.postalCode, address.city)]
    .map((part) => String(part || '').trim())
    .filter(Boolean)
    .join(' - ');
}

function InvoicePanelInput({
  autoComplete,
  className = '',
  inputMode,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}) {
  return (
    <label className={`invoice-panel-field${className ? ` ${className}` : ''}`}>
      <span>{label}</span>
      <input
        autoComplete={autoComplete}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        type={type}
        value={getFormValue(value, placeholder)}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function InvoicePanelTextarea({ label, name, value, placeholder, onChange }) {
  return (
    <label className="invoice-panel-field invoice-panel-field-wide">
      <span>{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        value={getFormValue(value, placeholder)}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function FieldActions({ canMove = false, isHidden, isFirst, isLast, label, onMoveDown, onMoveUp, onToggle }) {
  return (
    <span className="invoice-field-actions" aria-label={`${label} konfigurieren`}>
      <button
        type="button"
        aria-label={isHidden ? `${label} einblenden` : `${label} ausblenden`}
        onClick={onToggle}
      >
        <span className={isHidden ? 'invoice-icon-eye-off' : 'invoice-icon-eye'} aria-hidden="true" />
      </button>
      {canMove && (
        <>
          <button type="button" aria-label={`${label} nach oben`} disabled={isFirst} onClick={onMoveUp}>
            ↑
          </button>
          <button type="button" aria-label={`${label} nach unten`} disabled={isLast} onClick={onMoveDown}>
            ↓
          </button>
        </>
      )}
    </span>
  );
}

function HiddenFieldActions({ block, className = '', definitions, hiddenFields, onToggle }) {
  if (hiddenFields.length === 0) {
    return null;
  }

  return (
    <div className={`invoice-hidden-field-row${className ? ` ${className}` : ''}`}>
      <span className="invoice-hidden-field-actions" aria-label="Ausgeblendete Felder">
        {hiddenFields.map((field) => {
          const definition = definitions.find((entry) => entry.field === field);
          const label = definition?.label ?? field;

          return (
            <button
              key={`${block}-${field}`}
              type="button"
              aria-label={`${label} einblenden`}
              title={`${label} einblenden`}
              onClick={() => onToggle(block, field)}
            >
              <span className="invoice-icon-eye-off" aria-hidden="true" />
            </button>
          );
        })}
      </span>
    </div>
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

function createTemplateFileName(number) {
  const cleanNumber = String(number || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9Ã¤Ã¶Ã¼ÃŸ]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return `rechnung-vorlage${cleanNumber ? `-${cleanNumber}` : ''}.json`;
}

function normalizeFieldConfig(config) {
  const fallback = {
    contact: createFieldConfig(contactFieldDefinitions),
    details: createFieldConfig(detailFieldDefinitions),
    footerMiddle: createFieldConfig(footerMiddleDefinitions),
    texts: {
      hidden: [],
      order: ['introText', 'closingText'],
    },
  };

  if (!config || typeof config !== 'object') {
    return fallback;
  }

  return {
    contact: {
      ...fallback.contact,
      ...config.contact,
      hidden: Array.isArray(config.contact?.hidden) ? config.contact.hidden : fallback.contact.hidden,
      order: Array.isArray(config.contact?.order) ? config.contact.order : fallback.contact.order,
    },
    details: {
      ...fallback.details,
      ...config.details,
      hidden: Array.isArray(config.details?.hidden) ? config.details.hidden : fallback.details.hidden,
      order: Array.isArray(config.details?.order) ? config.details.order : fallback.details.order,
    },
    footerMiddle: {
      ...fallback.footerMiddle,
      ...config.footerMiddle,
      hidden: Array.isArray(config.footerMiddle?.hidden) ? config.footerMiddle.hidden : fallback.footerMiddle.hidden,
      order: Array.isArray(config.footerMiddle?.order) ? config.footerMiddle.order : fallback.footerMiddle.order,
    },
    texts: {
      ...fallback.texts,
      ...config.texts,
      hidden: Array.isArray(config.texts?.hidden) ? config.texts.hidden : fallback.texts.hidden,
      order: Array.isArray(config.texts?.order) ? config.texts.order : fallback.texts.order,
    },
  };
}

function normalizePositions(templatePositions) {
  if (!Array.isArray(templatePositions) || templatePositions.length === 0) {
    return [createPosition()];
  }

  return templatePositions.map((position) => ({
    id: typeof position.id === 'string' && position.id ? position.id : crypto.randomUUID(),
    description: String(position.description ?? defaultPosition.description),
    unitPrice: String(position.unitPrice ?? defaultPosition.unitPrice),
    quantity: String(position.quantity ?? defaultPosition.quantity),
    unit: String(position.unit ?? defaultPosition.unit),
    taxRate: String(position.taxRate ?? defaultPosition.taxRate),
  }));
}

export default function InvoiceForm() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const sheetRef = useRef(null);
  const introTextRef = useRef(null);
  const closingTextRef = useRef(null);
  const templateInputRef = useRef(null);
  const dateInputRefs = useRef({});
  const [labels, setLabels] = useState(initialLabels);
  const [sender, setSender] = useState(defaultSender);
  const [senderAddress, setSenderAddress] = useState(defaultSenderAddressParts);
  const [footerLines, setFooterLines] = useState(defaultFooterLines);
  const [recipient, setRecipient] = useState(defaultRecipient);
  const [recipientAddress, setRecipientAddress] = useState(defaultRecipientAddressParts);
  const [details, setDetails] = useState(defaultDetails);
  const [introText, setIntroText] = useState(defaultIntroText);
  const [closingText, setClosingText] = useState(defaultClosingText);
  const [positions, setPositions] = useState([createPosition()]);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(contactFieldDefinitions),
    details: createFieldConfig(detailFieldDefinitions),
    footerMiddle: createFieldConfig(footerMiddleDefinitions),
    texts: {
      hidden: [],
      order: ['introText', 'closingText'],
    },
  });

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

  function updateSenderCompany(value) {
    setSender((current) => ({
      ...current,
      company: value,
      senderLine: buildSenderLine(value, senderAddress),
    }));
    setFooterLines((current) => ({ ...current, companyName: value }));
  }

  function updateSenderAddress(field, value) {
    setSenderAddress((current) => {
      const next = { ...current, [field]: value };
      const streetLine = joinAddressLine(next.street, next.houseNumber);
      const cityLine = joinAddressLine(next.postalCode, next.city);

      setSender((senderCurrent) => ({
        ...senderCurrent,
        street: streetLine,
        cityLine,
        senderLine: buildSenderLine(senderCurrent.company, next),
      }));
      setFooterLines((footerCurrent) => ({
        ...footerCurrent,
        companyStreet: streetLine,
        companyCity: cityLine,
      }));

      return next;
    });
  }

  function updateRecipient(field, value) {
    setRecipient((current) => ({ ...current, [field]: value }));
  }

  function updateRecipientAddress(field, value) {
    setRecipientAddress((current) => {
      const next = { ...current, [field]: value };

      setRecipient((recipientCurrent) => ({
        ...recipientCurrent,
        street: joinAddressLine(next.street, next.houseNumber),
        cityLine: joinAddressLine(next.postalCode, next.city),
      }));

      return next;
    });
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

  function isFieldHidden(block, field) {
    return fieldConfig[block].hidden.includes(field);
  }

  function getOrderedDefinitions(block, definitions) {
    return fieldConfig[block].order
      .map((field) => definitions.find((definition) => definition.field === field))
      .filter(Boolean);
  }

  function getHiddenFields(block, definitions) {
    return getOrderedDefinitions(block, definitions)
      .filter((definition) => isFieldHidden(block, definition.field))
      .map((definition) => definition.field);
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
      const nextIndex = index + direction;

      if (index < 0 || nextIndex < 0 || nextIndex >= order.length) {
        return current;
      }

      [order[index], order[nextIndex]] = [order[nextIndex], order[index]];

      return {
        ...current,
        [block]: {
          ...current[block],
          order,
        },
      };
    });
  }

  function addPosition() {
    setPositions((current) => [...current, createPosition()]);
  }

  function removePosition(positionId) {
    setPositions((current) =>
      current.length === 1 ? current : current.filter((position) => position.id !== positionId),
    );
  }

  function movePosition(positionId, direction) {
    setPositions((current) => {
      const index = current.findIndex((position) => position.id === positionId);
      const nextIndex = index + direction;

      if (index < 0 || nextIndex < 0 || nextIndex >= current.length) {
        return current;
      }

      const next = [...current];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];

      return next;
    });
  }

  function handleDownloadTemplate() {
    const template = {
      schemaVersion: 1,
      documentType: 'invoice',
      createdAt: new Date().toISOString(),
      labels,
      sender,
      senderAddress,
      recipient,
      recipientAddress,
      details,
      positions,
      introText,
      closingText,
      footerLines,
      fieldConfig,
    };
    const blob = new Blob([JSON.stringify(template, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = createTemplateFileName(details.invoiceNumber);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function handleLoadTemplateClick() {
    templateInputRef.current?.click();
  }

  async function handleTemplateFileChange(event) {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    try {
      const template = JSON.parse(await file.text());

      if (!template || template.documentType !== 'invoice') {
        throw new Error('Invalid invoice template');
      }

      setLabels({ ...initialLabels, ...(template.labels ?? {}) });
      setSender({ ...defaultSender, ...(template.sender ?? {}) });
      setSenderAddress({ ...defaultSenderAddressParts, ...(template.senderAddress ?? {}) });
      setRecipient({ ...defaultRecipient, ...(template.recipient ?? {}) });
      setRecipientAddress({ ...defaultRecipientAddressParts, ...(template.recipientAddress ?? {}) });
      setDetails({ ...defaultDetails, ...(template.details ?? {}) });
      setFooterLines({ ...defaultFooterLines, ...(template.footerLines ?? {}) });
      setIntroText(template.introText ?? defaultIntroText);
      setClosingText(template.closingText ?? defaultClosingText);
      setPositions(normalizePositions(template.positions));
      setFieldConfig(normalizeFieldConfig(template.fieldConfig));
    } catch {
      window.alert('Die Vorlage konnte nicht geladen werden. Bitte prüfen Sie die Datei.');
    }
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
            <div className="invoice-panel-row">
              <div className="invoice-panel-section">
                <h3>Eigene Absenderdaten</h3>
                <div className="invoice-panel-grid">
                  <InvoicePanelInput autoComplete="organization" className="invoice-panel-field-wide" label="Firma" name="sender-company" placeholder={defaultSender.company} value={sender.company} onChange={updateSenderCompany} />
                  <InvoicePanelInput autoComplete="address-line1" label="Straße" name="sender-street" placeholder={defaultSenderAddressParts.street} value={senderAddress.street} onChange={(value) => updateSenderAddress('street', value)} />
                  <InvoicePanelInput autoComplete="address-line2" label="Hausnummer" name="sender-house-number" placeholder={defaultSenderAddressParts.houseNumber} value={senderAddress.houseNumber} onChange={(value) => updateSenderAddress('houseNumber', value)} />
                  <InvoicePanelInput autoComplete="postal-code" label="PLZ" name="sender-postal-code" placeholder={defaultSenderAddressParts.postalCode} value={senderAddress.postalCode} onChange={(value) => updateSenderAddress('postalCode', value)} />
                  <InvoicePanelInput autoComplete="address-level2" label="Ort" name="sender-city" placeholder={defaultSenderAddressParts.city} value={senderAddress.city} onChange={(value) => updateSenderAddress('city', value)} />
                  <InvoicePanelInput autoComplete="off" className="invoice-panel-field-wide" label="Absenderzeile" name="sender-line" placeholder={defaultSender.senderLine} value={sender.senderLine} onChange={(value) => updateSender('senderLine', value)} />
                </div>
              </div>

              <div className="invoice-panel-section">
                <h3>Empfängerdaten</h3>
                <div className="invoice-panel-grid">
                  <InvoicePanelInput autoComplete="organization" className="invoice-panel-field-wide" label="Firma" name="recipient-company" placeholder={defaultRecipient.company} value={recipient.company} onChange={(value) => updateRecipient('company', value)} />
                  <InvoicePanelInput autoComplete="off" label="Zusatz / Ansprechpartner" name="recipient-attention" placeholder={defaultRecipient.attention} value={recipient.attention} onChange={(value) => updateRecipient('attention', value)} />
                  <InvoicePanelInput autoComplete="name" label="Name / Abteilung" name="recipient-name" placeholder={defaultRecipient.name} value={recipient.name} onChange={(value) => updateRecipient('name', value)} />
                  <InvoicePanelInput autoComplete="address-line1" label="Straße" name="recipient-street" placeholder={defaultRecipientAddressParts.street} value={recipientAddress.street} onChange={(value) => updateRecipientAddress('street', value)} />
                  <InvoicePanelInput autoComplete="address-line2" label="Hausnummer" name="recipient-house-number" placeholder={defaultRecipientAddressParts.houseNumber} value={recipientAddress.houseNumber} onChange={(value) => updateRecipientAddress('houseNumber', value)} />
                  <InvoicePanelInput autoComplete="postal-code" label="PLZ" name="recipient-postal-code" placeholder={defaultRecipientAddressParts.postalCode} value={recipientAddress.postalCode} onChange={(value) => updateRecipientAddress('postalCode', value)} />
                  <InvoicePanelInput autoComplete="address-level2" label="Ort" name="recipient-city" placeholder={defaultRecipientAddressParts.city} value={recipientAddress.city} onChange={(value) => updateRecipientAddress('city', value)} />
                </div>
              </div>
            </div>

            <div className="invoice-panel-row">
              <div className="invoice-panel-section">
                <h3>Bankverbindung</h3>
                <div className="invoice-panel-grid">
                  {[
                    ['bankName', 'Bankname', defaultFooterLines.bankName],
                    ['iban', 'IBAN', defaultFooterLines.iban],
                    ['bic', 'BIC', defaultFooterLines.bic],
                  ].map(([field, label, placeholder]) => (
                    <InvoicePanelInput key={field} autoComplete="off" className="invoice-panel-field-wide" label={label} name={`footer-${field}`} placeholder={placeholder} value={footerLines[field]} onChange={(value) => updateFooterLine(field, value)} />
                  ))}
                </div>
              </div>

              <div className="invoice-panel-section">
                <h3>Steuer- und Firmendaten</h3>
                <div className="invoice-panel-grid">
                  {[
                    ['vatId', 'USt-IdNr.', defaultFooterLines.vatId],
                    ['taxNumber', 'Steuernummer', defaultFooterLines.taxNumber],
                    ['commercialRegister', 'Handelsregister', defaultFooterLines.commercialRegister],
                    ['managingDirector', 'Geschäftsführer', defaultFooterLines.managingDirector],
                  ].map(([field, label, placeholder]) => (
                    <InvoicePanelInput key={field} autoComplete="off" className="invoice-panel-field-wide" label={label} name={`footer-${field}`} placeholder={placeholder} value={footerLines[field]} onChange={(value) => updateFooterLine(field, value)} />
                  ))}
                </div>
              </div>
            </div>

            <div className="invoice-panel-row">
              <div className="invoice-panel-section">
                <h3>Kontakt</h3>
                <div className="invoice-panel-grid">
                  <InvoicePanelInput autoComplete="email" className="invoice-panel-field-wide" label="E-Mail" name="sender-email" placeholder={defaultSender.email} value={sender.email} onChange={(value) => updateSender('email', value)} />
                  <InvoicePanelInput autoComplete="url" className="invoice-panel-field-wide" label="Website" name="sender-website" placeholder={defaultSender.website} value={sender.website} onChange={(value) => updateSender('website', value)} />
                </div>
              </div>

              <div className="invoice-panel-section">
                <h3 className="invoice-panel-muted-heading">Kontakt</h3>
                <div className="invoice-panel-grid">
                  <InvoicePanelInput autoComplete="tel" className="invoice-panel-field-wide" label="Telefon" name="sender-phone" placeholder={defaultSender.phone} value={sender.phone} onChange={(value) => updateSender('phone', value)} />
                  <InvoicePanelInput autoComplete="tel" className="invoice-panel-field-wide" label="Fax" name="sender-fax" placeholder={defaultSender.fax} value={sender.fax} onChange={(value) => updateSender('fax', value)} />
                </div>
              </div>
            </div>

            <div className="invoice-panel-row">
              <div className="invoice-panel-section">
                <h3>Rechnungsdaten</h3>
                <div className="invoice-panel-grid invoice-panel-grid-stacked">
                  <InvoicePanelInput autoComplete="off" label="Rechnungsnummer" name="invoice-number" placeholder={defaultDetails.invoiceNumber} value={details.invoiceNumber} onChange={(value) => updateDetail('invoiceNumber', value)} />
                  <InvoicePanelInput autoComplete="off" label="Rechnungsdatum" name="invoice-date" placeholder={defaultDetails.invoiceDate} type="date" value={details.invoiceDate} onChange={(value) => updateDetail('invoiceDate', value)} />
                  <InvoicePanelInput autoComplete="off" label="Leistungsdatum" name="service-date" placeholder={defaultDetails.serviceDate} type="date" value={details.serviceDate} onChange={(value) => updateDetail('serviceDate', value)} />
                </div>
              </div>

              <div className="invoice-panel-section">
                <h3>Referenzen</h3>
                <div className="invoice-panel-grid invoice-panel-grid-stacked">
                  <InvoicePanelInput autoComplete="off" label="Interne Nummer" name="internal-number" placeholder={defaultDetails.internalNumber} value={details.internalNumber} onChange={(value) => updateDetail('internalNumber', value)} />
                  <InvoicePanelInput autoComplete="off" label="Externe Nummer" name="external-number" placeholder={defaultDetails.externalNumber} value={details.externalNumber} onChange={(value) => updateDetail('externalNumber', value)} />
                  <InvoicePanelInput autoComplete="off" label="Kundennummer" name="customer-number" placeholder={defaultDetails.customerNumber} value={details.customerNumber} onChange={(value) => updateDetail('customerNumber', value)} />
                </div>
              </div>
            </div>

            <div className="invoice-panel-row">
              <div className="invoice-panel-section">
                <h3>Vorlauftext</h3>
                <InvoicePanelTextarea label="Text oberhalb der Positionen" name="intro-text" placeholder={defaultIntroText} value={introText} onChange={setIntroText} />
              </div>

              <div className="invoice-panel-section">
                <h3>Nachlauftext</h3>
                <InvoicePanelTextarea label="Text unterhalb der Summen" name="closing-text" placeholder={defaultClosingText} value={closingText} onChange={setClosingText} />
              </div>
            </div>

            <div className="invoice-panel-section invoice-panel-section-wide">
              <h3>Positionen</h3>
              <div className="invoice-panel-positions">
                {positions.map((position, index) => (
                  <div className="invoice-panel-position" key={position.id}>
                    <span>{index + 1}</span>
                    <InvoicePanelInput autoComplete="off" label="Leistung" name={`position-${index + 1}-description`} placeholder={defaultPosition.description} value={position.description} onChange={(value) => updatePosition(position.id, 'description', value)} />
                    <InvoicePanelInput autoComplete="off" inputMode="decimal" label="Einzelpreis" name={`position-${index + 1}-unit-price`} placeholder={defaultPosition.unitPrice} value={position.unitPrice} onChange={(value) => updatePosition(position.id, 'unitPrice', value)} />
                    <InvoicePanelInput autoComplete="off" inputMode="decimal" label="Anzahl" name={`position-${index + 1}-quantity`} placeholder={defaultPosition.quantity} value={position.quantity} onChange={(value) => updatePosition(position.id, 'quantity', value)} />
                    <InvoicePanelInput autoComplete="off" label="Einheit" name={`position-${index + 1}-unit`} placeholder={defaultPosition.unit} value={position.unit} onChange={(value) => updatePosition(position.id, 'unit', value)} />
                    <InvoicePanelInput autoComplete="off" inputMode="decimal" label="USt." name={`position-${index + 1}-tax-rate`} placeholder={defaultPosition.taxRate} value={position.taxRate} onChange={(value) => updatePosition(position.id, 'taxRate', value)} />
                    <div className="invoice-panel-position-actions">
                      <button className="invoice-panel-remove" type="button" aria-label={`Position ${index + 1} löschen`} onClick={() => removePosition(position.id)}>
                        ×
                      </button>
                      <button
                        className="invoice-panel-move"
                        type="button"
                        aria-label={`Position ${index + 1} nach oben verschieben`}
                        disabled={index === 0}
                        onClick={() => movePosition(position.id, -1)}
                      >
                        ↑
                      </button>
                      <button
                        className="invoice-panel-move"
                        type="button"
                        aria-label={`Position ${index + 1} nach unten verschieben`}
                        disabled={index === positions.length - 1}
                        onClick={() => movePosition(position.id, 1)}
                      >
                        ↓
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="invoice-panel-add" type="button" onClick={addPosition}>
                + Position hinzufügen
              </button>
            </div>
          </div>
        )}
      </section>

      <div className="visual-toolbar" aria-label="Rechnung Werkzeuge">
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
          title="Gespeicherte JSON Vorlage laden"
          aria-label="Gespeicherte JSON Vorlage laden"
          onClick={handleLoadTemplateClick}
        >
          Vorlage laden
        </button>
        <button
          type="button"
          title="Aktuelle Daten als JSON Vorlage speichern"
          aria-label="Aktuelle Daten als JSON Vorlage speichern"
          onClick={handleDownloadTemplate}
        >
          Vorlage erstellen
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
        <input
          ref={templateInputRef}
          className="invoice-template-input"
          type="file"
          accept="application/json,.json"
          onChange={handleTemplateFileChange}
        />
      </div>

      <article
        ref={sheetRef}
        className={`offer-sheet invoice-sheet${highlightFields ? ' is-highlight-mode' : ''}`}
        aria-label="Editierbare Rechnung"
      >
        <header className="invoice-document-header">
          <div className="editable-group">
            <textarea
              className="invoice-company-name"
              aria-label="Absender Firmenname"
              rows={2}
              value={sender.company}
              onChange={(event) => updateSender('company', event.target.value)}
            />
          </div>

          <div className="invoice-sender-side">
            {getOrderedDefinitions('contact', contactFieldDefinitions).map((definition, index) => {
              const isHidden = isFieldHidden('contact', definition.field);

              if (isHidden) {
                return null;
              }

              return (
                <div className="invoice-config-row" key={definition.field}>
                  <label>
                    <input
                      className="document-label-input"
                      aria-label={`Beschriftung ${definition.label}`}
                      value={labels[definition.labelField]}
                      onChange={(event) => updateLabel(definition.labelField, event.target.value)}
                    />
                    <input
                      aria-label={definition.label}
                      value={sender[definition.field]}
                      onChange={(event) => updateSender(definition.field, event.target.value)}
                    />
                  </label>
                  <FieldActions
                    canMove
                    isFirst={index === 0}
                    isLast={index === fieldConfig.contact.order.length - 1}
                    isHidden={isHidden}
                    label={definition.label}
                    onMoveDown={() => moveConfiguredField('contact', definition.field, 1)}
                    onMoveUp={() => moveConfiguredField('contact', definition.field, -1)}
                    onToggle={() => toggleConfiguredField('contact', definition.field)}
                  />
                </div>
              );
            })}
            <HiddenFieldActions
              block="contact"
              definitions={contactFieldDefinitions}
              hiddenFields={getHiddenFields('contact', contactFieldDefinitions)}
              onToggle={toggleConfiguredField}
            />
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
            <label className="is-emphasized">
              <input
                className="document-label-input"
                aria-label="Beschriftung Rechnungsnummer"
                value={labels.invoiceNumber}
                onChange={(event) => updateLabel('invoiceNumber', event.target.value)}
              />
              <input
                aria-label="Rechnungsnummer"
                type="text"
                value={details.invoiceNumber}
                onChange={(event) => updateDetail('invoiceNumber', event.target.value)}
              />
            </label>
            {getOrderedDefinitions('details', detailFieldDefinitions).map((definition, index) => {
              const isHidden = isFieldHidden('details', definition.field);

              if (isHidden) {
                return null;
              }

              return (
                <div className="invoice-config-row" key={definition.field}>
                  <label>
                    <input
                      className="document-label-input"
                      aria-label={`Beschriftung ${definition.label}`}
                      value={labels[definition.field]}
                      onChange={(event) => updateLabel(definition.field, event.target.value)}
                    />
                    {definition.type === 'date' ? (
                      <span className="invoice-date-field">
                        <input
                          ref={(element) => {
                            dateInputRefs.current[definition.field] = element;
                          }}
                          className="invoice-date-input"
                          aria-label={definition.label}
                          type="date"
                          value={details[definition.field]}
                          onChange={(event) => updateDetail(definition.field, event.target.value)}
                        />
                        <button
                          className="invoice-icon-action invoice-date-picker"
                          type="button"
                          aria-label={`${definition.label} auswählen`}
                          onClick={() => openDatePicker(definition.field)}
                        >
                          <span aria-hidden="true" />
                        </button>
                      </span>
                    ) : (
                      <input
                        aria-label={definition.label}
                        type="text"
                        value={details[definition.field]}
                        onChange={(event) => updateDetail(definition.field, event.target.value)}
                      />
                    )}
                  </label>
                  <FieldActions
                    canMove
                    isFirst={index === 0}
                    isLast={index === fieldConfig.details.order.length - 1}
                    isHidden={isHidden}
                    label={definition.label}
                    onMoveDown={() => moveConfiguredField('details', definition.field, 1)}
                    onMoveUp={() => moveConfiguredField('details', definition.field, -1)}
                    onToggle={() => toggleConfiguredField('details', definition.field)}
                  />
                </div>
              );
            })}
            <HiddenFieldActions
              block="details"
              definitions={detailFieldDefinitions}
              hiddenFields={getHiddenFields('details', detailFieldDefinitions)}
              onToggle={toggleConfiguredField}
            />
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

        <HiddenFieldActions
          block="texts"
          className="invoice-flow-hidden-row"
          definitions={[{ field: 'introText', label: 'Vorlauftext' }]}
          hiddenFields={fieldConfig.texts.hidden.filter((field) => field === 'introText')}
          onToggle={toggleConfiguredField}
        />

        {!isFieldHidden('texts', 'introText') && (
          <div className="invoice-flow-config-row">
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
            <FieldActions
              isHidden={false}
              label="Vorlauftext"
              onToggle={() => toggleConfiguredField('texts', 'introText')}
            />
          </div>
        )}

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

        <HiddenFieldActions
          block="texts"
          className="invoice-flow-hidden-row"
          definitions={[{ field: 'closingText', label: 'Nachlauftext' }]}
          hiddenFields={fieldConfig.texts.hidden.filter((field) => field === 'closingText')}
          onToggle={toggleConfiguredField}
        />

        {!isFieldHidden('texts', 'closingText') && (
          <div className="invoice-flow-config-row">
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
            <FieldActions
              isHidden={false}
              label="Nachlauftext"
              onToggle={() => toggleConfiguredField('texts', 'closingText')}
            />
          </div>
        )}

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
            {getOrderedDefinitions('footerMiddle', footerMiddleDefinitions).map((definition, index) => {
              const isHidden = isFieldHidden('footerMiddle', definition.field);

              if (isHidden) {
                return null;
              }

              return (
                <div className="invoice-config-row" key={definition.field}>
                  <input
                    aria-label={definition.label}
                    value={footerLines[definition.field]}
                    onChange={(event) => updateFooterLine(definition.field, event.target.value)}
                  />
                  <FieldActions
                    canMove
                    isFirst={index === 0}
                    isLast={index === fieldConfig.footerMiddle.order.length - 1}
                    isHidden={isHidden}
                    label={definition.label}
                    onMoveDown={() => moveConfiguredField('footerMiddle', definition.field, 1)}
                    onMoveUp={() => moveConfiguredField('footerMiddle', definition.field, -1)}
                    onToggle={() => toggleConfiguredField('footerMiddle', definition.field)}
                  />
                </div>
              );
            })}
            <HiddenFieldActions
              block="footerMiddle"
              definitions={footerMiddleDefinitions}
              hiddenFields={getHiddenFields('footerMiddle', footerMiddleDefinitions)}
              onToggle={toggleConfiguredField}
            />
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
