import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
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
import InvoiceDocumentForm from './InvoiceDocumentForm.jsx';
import { paginateMeasuredItems, takeMeasuredText } from './documentExport/MeasuredPaginator.jsx';
import {
  createDocumentDataCheckState,
  getDocumentModeHint,
} from '../utils/documentDataCheck.js';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';
import { resizeTextarea } from '../utils/resizeTextarea.js';
import { SHOW_DOCUMENT_FORM_PANEL } from '../config/documentFeatures.js';

const invoiceSchemaVersion = '1.0';
const smallBusinessStorageKey = 'carta.invoice.smallBusinessMode';
const invoiceVariants = [
  { id: 'standard', label: 'Standardrechnung' },
  { id: 'goods', label: 'Warenrechnung' },
  { id: 'text', label: 'Textrechnung' },
];
const smallBusinessTaxNotice =
  'Aufgrund der Anwendung der Kleinunternehmerregelung gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.';
const textInvoiceIntro =
  'Sehr geehrte Damen und Herren,\n\nvielen Dank für Ihren Auftrag und das entgegengebrachte Vertrauen.\n\nFür meine Leistungen erlaube ich mir, Ihnen folgende Positionen in Rechnung zu stellen:';
const textInvoiceClosing =
  'Bitte begleichen Sie den Gesamtbetrag innerhalb der angegebenen Zahlungsfrist auf das unten genannte Konto.\n\nBei Rückfragen stehe ich Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen';

const initialInvoiceLabels = {
  title: 'Rechnung',
  invoiceNumber: 'Rechnungsnummer',
  invoiceDate: 'Belegdatum',
  serviceDate: 'Leistungsdatum',
  internalNumber: 'Interne Nummer',
  externalNumber: 'Externe Nummer',
  customerNumber: 'Kundennummer',
  position: 'Pos.',
  articleNumber: 'Artikelnummer',
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

const invoiceContactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const invoiceMetaFields = [
  { autoComplete: 'new-password', field: 'invoiceNumber', ariaLabel: 'Rechnungskennung', name: 'carta-invoice-code', type: 'text' },
    { field: 'invoiceDate', ariaLabel: 'Belegdatum', type: 'date' },
  { field: 'serviceDate', ariaLabel: 'Leistungsdatum', type: 'date' },
  { autoComplete: 'new-password', field: 'internalNumber', ariaLabel: 'Interne Referenz', name: 'carta-invoice-internal-code', type: 'text' },
  { autoComplete: 'new-password', field: 'externalNumber', ariaLabel: 'Externe Referenz', name: 'carta-invoice-external-code', type: 'text' },
  { field: 'customerNumber', ariaLabel: 'Kundenreferenz', name: 'carta-invoice-customer-reference', type: 'text' },
];

const invoiceRecipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Händen' },
  { field: 'name', label: 'Name / Abteilung' },
];

const invoiceDeliveryAddressOptionalFields = [
  { field: 'attention', label: 'z. Hd.' },
  { field: 'name', label: 'Abteilung' },
];

const invoiceFooterColumns = [
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

const invoiceFooterLabeledFields = {
  vatId: 'vatIdLabel',
  taxNumber: 'taxNumberLabel',
  iban: 'ibanLabel',
  bic: 'bicLabel',
};

const invoiceFooterDefaultLabels = {
  vatId: 'USt-IdNr.:',
  taxNumber: 'Steuernummer:',
  iban: 'IBAN:',
  bic: 'BIC:',
};

const invoiceFooterLabelPrefixes = {
  vatId: ['USt-IdNr.:', 'USt-IdNr.', 'USt-ID:', 'USt-ID'],
  taxNumber: ['Steuernummer:', 'Steuernummer'],
  iban: ['IBAN:', 'IBAN'],
  bic: ['BIC:', 'BIC'],
};

const defaultInvoiceData = {
  sender: {
    companyName: 'Belege24 Muster GmbH',
    address: {
      street: 'Musterstraße',
      houseNumber: '12',
      postalCode: '10115',
      city: 'Berlin',
    },
    returnAddress: 'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
    contact: {
      email: 'kontakt@belege24.com',
      phone: '+49 30 123456',
      fax: '+49 30 123457',
      website: 'www.belege24.com',
    },
  },
  recipient: {
    companyName: 'Beispielkunde GmbH',
    attention: 'z. Hd. Frau Beispiel',
    name: 'Buchhaltung',
    address: {
      street: 'Kundenstraße',
      houseNumber: '8',
      postalCode: '20095',
      city: 'Hamburg',
    },
  },
  deliveryAddress: {
    companyName: 'Beispielkunde GmbH',
    attention: 'z. Hd. Warenannahme',
    name: 'Logistik',
    address: {
      street: 'Lieferstrasse',
      houseNumber: '3',
      postalCode: '20097',
      city: 'Hamburg',
    },
  },
  details: {
    invoiceNumber: 'RE-2026-001',
    invoiceDate: '2026-05-07',
    serviceDate: '2026-05-07',
  },
  references: {
    internalNumber: 'INT-1001',
    externalNumber: 'EXT-4711',
    customerNumber: 'K-2048',
  },
  footer: {
    company: {
      companyName: 'Belege24 Muster GmbH',
      street: 'Musterstraße',
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
};

const defaultInvoiceTextBlocks = [
  {
    id: 'intro',
    label: 'Vorlauftext',
    value: 'vielen Dank für Ihren Auftrag. Für unsere Leistungen stellen wir Ihnen wie folgt in Rechnung:',
    visible: true,
  },
  {
    id: 'closing',
    label: 'Nachlauftext',
    value:
      'Bitte begleichen Sie den Rechnungsbetrag innerhalb der angegebenen Zahlungsfrist. Vielen Dank für die angenehme Zusammenarbeit.',
    visible: true,
  },
  {
    id: 'smallBusinessNotice',
    label: 'Hinweis Kleinunternehmerregelung',
    value: smallBusinessTaxNotice,
    visible: true,
  },
];

const invoicePrintLayout = {
  blockGap: 16,
  smallSafetyBuffer: 8,
};

function joinLine(...parts) {
  return parts.map((part) => String(part ?? '').trim()).filter(Boolean).join(' ');
}

function createReturnAddress(sender) {
  return [
    sender.companyName,
    joinLine(sender.address.street, sender.address.houseNumber),
    joinLine(sender.address.postalCode, sender.address.city),
  ]
    .filter(Boolean)
    .join(' - ');
}

function createInvoiceViewData({ sender, recipient, deliveryAddress, details, references, footer }) {
  return {
    sender: {
      company: sender.companyName,
      senderLine: sender.returnAddress,
      email: sender.contact.email,
      phone: sender.contact.phone,
      fax: sender.contact.fax,
      website: sender.contact.website,
    },
    recipient: {
      company: recipient.companyName,
      attention: recipient.attention,
      name: recipient.name,
      street: joinLine(recipient.address.street, recipient.address.houseNumber),
      cityLine: joinLine(recipient.address.postalCode, recipient.address.city),
    },
    deliveryAddress: {
      company: deliveryAddress.companyName,
      attention: deliveryAddress.attention,
      name: deliveryAddress.name,
      street: joinLine(deliveryAddress.address.street, deliveryAddress.address.houseNumber),
      cityLine: joinLine(deliveryAddress.address.postalCode, deliveryAddress.address.city),
    },
    details: {
      ...details,
      ...references,
    },
    footerLines: {
      companyName: footer.company.companyName,
      companyStreetName: footer.company.street,
      companyHouseNumber: footer.company.houseNumber,
      companyStreet: joinLine(footer.company.street, footer.company.houseNumber),
      companyPostalCode: footer.company.postalCode,
      companyCityName: footer.company.city,
      companyCity: joinLine(footer.company.postalCode, footer.company.city),
      companyExtra: footer.company.extra,
      vatIdLabel: footer.tax.vatIdLabel,
      vatId: footer.tax.vatId,
      taxNumberLabel: footer.tax.taxNumberLabel,
      taxNumber: footer.tax.taxNumber,
      commercialRegister: footer.tax.commercialRegister,
      managingDirector: footer.tax.representation,
      bankName: footer.bank.bankName,
      ibanLabel: footer.bank.ibanLabel,
      iban: footer.bank.iban,
      bicLabel: footer.bank.bicLabel,
      bic: footer.bank.bic,
      bankExtra: footer.bank.bankExtra,
    },
  };
}

function createInvoicePosition() {
  return {
    id: crypto.randomUUID(),
    articleNumber: '',
    description: 'Leistung beschreiben',
    unitPrice: '0',
    quantity: '1',
    unit: 'Stk.',
    taxRate: '19',
  };
}

const textInvoicePositionDefaults = {
  description: 'Leistung in Textform beschreiben',
  unitPrice: '150,00',
  quantity: '1',
  unit: '3 Stunden',
};

function createTextInvoicePosition() {
  return {
    ...createInvoicePosition(),
    ...textInvoicePositionDefaults,
  };
}

const defaultInvoiceViewData = createInvoiceViewData(defaultInvoiceData);
const defaultInvoicePositionForCheck = {
  articleNumber: '',
  description: 'Leistung beschreiben',
  unitPrice: '0',
  quantity: '1',
  unit: 'Stk.',
  taxRate: '19',
};

const legacyTextInvoiceDefaultPositions = [
  {
    description: 'Leistung beschreiben',
    unitPrice: '0',
    quantity: '1',
    unit: 'Stk.',
    taxRate: '19',
  },
  {
    description: 'Leistungsbeschreibung eintragen',
    unitPrice: '0',
    quantity: '1',
    unit: 'pauschal',
    taxRate: '19',
  },
];

function createFieldConfig(fields) {
  return {
    hidden: [],
    order: fields.map((field) => field.field),
  };
}

function normalizeFieldConfig(config) {
  const fallback = {
    contact: createFieldConfig(invoiceContactFields),
    details: createFieldConfig(invoiceMetaFields),
    deliveryAddress: createFieldConfig(invoiceDeliveryAddressOptionalFields),
    recipient: createFieldConfig(invoiceRecipientOptionalFields),
    footerMiddle: createFieldConfig(invoiceFooterColumns[1]),
  };

  if (!config || typeof config !== 'object') {
    return fallback;
  }

  return {
    contact: normalizeFieldConfigBlock(config.contact, fallback.contact),
    details: normalizeFieldConfigBlock(config.details, fallback.details),
    deliveryAddress: normalizeFieldConfigBlock(config.deliveryAddress, fallback.deliveryAddress),
    recipient: normalizeFieldConfigBlock(config.recipient, fallback.recipient),
    footerMiddle: normalizeFieldConfigBlock(config.footerMiddle, fallback.footerMiddle),
  };
}

function normalizeFieldConfigBlock(config, fallback) {
  const knownFields = new Set(fallback.order);
  const configuredOrder = Array.isArray(config?.order)
    ? config.order.filter((field) => knownFields.has(field))
    : [];

  return {
    hidden: Array.isArray(config?.hidden)
      ? config.hidden.filter((field) => knownFields.has(field))
      : fallback.hidden,
    order: [...configuredOrder, ...fallback.order.filter((field) => !configuredOrder.includes(field))],
  };
}

function normalizeInvoiceData(data = {}) {
  return {
    sender: {
      ...defaultInvoiceData.sender,
      ...(data.sender ?? {}),
      address: { ...defaultInvoiceData.sender.address, ...(data.sender?.address ?? {}) },
      contact: { ...defaultInvoiceData.sender.contact, ...(data.sender?.contact ?? {}) },
    },
    recipient: {
      ...defaultInvoiceData.recipient,
      ...(data.recipient ?? {}),
      address: { ...defaultInvoiceData.recipient.address, ...(data.recipient?.address ?? {}) },
    },
    deliveryAddress: {
      ...defaultInvoiceData.deliveryAddress,
      ...(data.deliveryAddress ?? {}),
      address: { ...defaultInvoiceData.deliveryAddress.address, ...(data.deliveryAddress?.address ?? {}) },
    },
    details: { ...defaultInvoiceData.details, ...(data.details ?? {}) },
    references: { ...defaultInvoiceData.references, ...(data.references ?? {}) },
    footer: {
      company: { ...defaultInvoiceData.footer.company, ...(data.footer?.company ?? {}) },
      tax: { ...defaultInvoiceData.footer.tax, ...(data.footer?.tax ?? {}) },
      bank: { ...defaultInvoiceData.footer.bank, ...(data.footer?.bank ?? {}) },
    },
  };
}

function normalizeTextBlocks(templateTextBlocks) {
  const defaults = defaultInvoiceTextBlocks.map((block) => ({ ...block }));

  if (!Array.isArray(templateTextBlocks)) {
    return defaults;
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

function createTextInvoiceTextBlocks() {
  return normalizeTextBlocks().map((block) => {
    if (block.id === 'intro') {
      return { ...block, value: textInvoiceIntro };
    }

    if (block.id === 'closing') {
      return { ...block, value: textInvoiceClosing };
    }

    return block;
  });
}

function getTextBlockSetKey(invoiceVariant) {
  return invoiceVariant === 'text' ? 'text' : 'default';
}

function createInitialTextBlockSets() {
  return {
    default: normalizeTextBlocks(),
    text: createTextInvoiceTextBlocks(),
  };
}

function normalizeTextBlocksForVariant(templateTextBlocks, invoiceVariant) {
  if (invoiceVariant === 'text' && !Array.isArray(templateTextBlocks)) {
    return createTextInvoiceTextBlocks();
  }

  return normalizeTextBlocks(templateTextBlocks);
}

function readStoredSmallBusinessMode() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(smallBusinessStorageKey) === 'true';
}

function writeStoredSmallBusinessMode(isSmallBusiness) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(smallBusinessStorageKey, isSmallBusiness ? 'true' : 'false');
}

function normalizePositions(templatePositions) {
  if (!Array.isArray(templatePositions) || templatePositions.length === 0) {
    return [createInvoicePosition()];
  }

  return templatePositions.map((position) => ({
    id: typeof position.id === 'string' && position.id ? position.id : crypto.randomUUID(),
    articleNumber: String(position.articleNumber ?? ''),
    description: String(position.description ?? 'Leistung beschreiben'),
    unitPrice: String(position.unitPrice ?? '0'),
    quantity: String(position.quantity ?? '1'),
    unit: String(position.unit ?? 'Stk.'),
    taxRate: String(position.taxRate ?? '19'),
  }));
}

function isLegacyTextInvoiceDefaultPosition(position) {
  return legacyTextInvoiceDefaultPositions.some((defaultPosition) =>
    Object.entries(defaultPosition).every(([field, value]) => String(position[field] ?? '') === value),
  );
}

function normalizeTextInvoiceDefaultPosition(position) {
  if (!isLegacyTextInvoiceDefaultPosition(position)) {
    return position;
  }

  return {
    ...position,
    ...textInvoicePositionDefaults,
  };
}

function formatInvoiceFooterLine(field, value = '', footerLines = {}) {
  const normalized = String(value ?? '').trim();
  const labelField = invoiceFooterLabeledFields[field];
  const label = labelField ? String(footerLines[labelField] ?? '').trim() : '';

  if (!labelField) {
    return normalized;
  }

  return [label, normalized].filter(Boolean).join(' ');
}

function parseInvoiceFooterLine(field, value = '') {
  const labelField = invoiceFooterLabeledFields[field];

  if (!labelField) {
    return String(value ?? '').trim();
  }

  const source = String(value ?? '').trim();
  const prefixes = invoiceFooterLabelPrefixes[field] ?? [];

  for (const prefix of prefixes) {
    if (source.toLowerCase().startsWith(prefix.toLowerCase())) {
      return {
        [labelField]: prefix.endsWith(':') ? prefix : `${prefix}:`,
        [field]: source.slice(prefix.length).replace(/^[:\s]+/, '').trim(),
      };
    }
  }

  return {
    [labelField]: invoiceFooterDefaultLabels[field],
    [field]: source,
  };
}

function toNumber(value) {
  const normalized = String(value)
    .replace(/[^\d,.-]/g, '')
    .replace(/\.(?=\d{3}(?:\D|$))/g, '')
    .replace(',', '.');
  const parsed = Number.parseFloat(normalized);
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

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

function calculatePosition(position, { isSmallBusinessInvoice = false, isTextInvoice = false } = {}) {
  const net = isTextInvoice ? toNumber(position.unitPrice) : toNumber(position.unitPrice) * toNumber(position.quantity);
  const taxRate = isSmallBusinessInvoice ? 0 : Math.max(0, toNumber(position.taxRate));
  const tax = net * (taxRate / 100);

  return { net, tax, gross: net + tax, taxRate };
}

function createPdfFileName(title, number, invoiceVariant = 'standard') {
  const cleanTitle = createSlug(
    invoiceVariant === 'text'
      ? 'textrechnung'
      : invoiceVariant === 'goods'
        ? 'warenrechnung'
        : title || 'rechnung',
  );
  const cleanNumber = createSlug(number || new Date().toISOString().slice(0, 10));

  return `${cleanTitle || 'rechnung'}-${cleanNumber || 'dokument'}.pdf`;
}

function createJsonFileName(number) {
  const cleanNumber = createSlug(number || '');

  return cleanNumber ? `rechnung-${cleanNumber}.json` : 'rechnung-vorlage.json';
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

function validateInvoiceTemplate(template) {
  if (!template || typeof template !== 'object') {
    throw new Error('Die JSON-Datei ist kein gültiges Rechnungsdokument.');
  }

  if (template.documentType !== 'invoice') {
    throw new Error('Diese JSON-Datei ist keine Rechnung.');
  }

  if (template.schemaVersion !== invoiceSchemaVersion) {
    throw new Error('Diese Rechnungsversion wird nicht unterstützt.');
  }

  if (!template.data || typeof template.data !== 'object') {
    throw new Error('Die JSON-Datei enthält keine Rechnungsdaten.');
  }

  return template.data;
}

function createInvoicePrintItems({ isSmallBusinessInvoice, positions, textBlocks }) {
  const introBlock = textBlocks.find((block) => block.id === 'intro');
  const closingBlock = textBlocks.find((block) => block.id === 'closing');
  const smallBusinessNoticeBlock = textBlocks.find((block) => block.id === 'smallBusinessNotice');

  return [
    ...(introBlock?.visible ? [{ type: 'text', id: 'intro', text: introBlock.value }] : []),
    ...positions.map((position, index) => ({ type: 'position', index, position })),
    { type: 'summary' },
    ...(closingBlock?.visible ? [{ type: 'text', id: 'closing', text: closingBlock.value }] : []),
    ...(isSmallBusinessInvoice && smallBusinessNoticeBlock?.visible
      ? [{ type: 'text', id: 'smallBusinessNotice', text: smallBusinessNoticeBlock.value }]
      : []),
  ];
}

function InvoiceVariantChoiceBar({ activeVariant, onChange }) {
  return (
    <div className="document-choice-bar" aria-label="Rechnungsart auswählen">
      {invoiceVariants.map((variant) => (
        <button
          className={activeVariant === variant.id ? 'is-active' : undefined}
          type="button"
          aria-pressed={activeVariant === variant.id}
          onClick={() => onChange?.(variant.id)}
          key={variant.id}
        >
          {variant.label}
        </button>
      ))}
    </div>
  );
}

export default function InvoiceDocumentEditor({ initialSmallBusiness, invoiceVariant = 'standard', onInvoiceVariantChange, onSmallBusinessChange }) {
  const normalizedInvoiceVariant = ['standard', 'text', 'goods'].includes(invoiceVariant)
    ? invoiceVariant
    : 'standard';
  const isTextInvoice = normalizedInvoiceVariant === 'text';
  const isGoodsInvoice = normalizedInvoiceVariant === 'goods';
  const [highlightFields, setHighlightFields] = useState(false);
  const [isDataCheckMode, setIsDataCheckMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialInvoiceLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(invoiceContactFields),
    details: createFieldConfig(invoiceMetaFields),
    deliveryAddress: createFieldConfig(invoiceDeliveryAddressOptionalFields),
    recipient: createFieldConfig(invoiceRecipientOptionalFields),
    footerMiddle: createFieldConfig(invoiceFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const paginatorRef = useRef(null);
  const jsonInputRef = useRef(null);
  const textBlockRefs = useRef({});
  const dateInputRefs = useRef({});
  const [invoiceData, setInvoiceData] = useState(defaultInvoiceData);
  const [isSmallBusinessInvoice, setIsSmallBusinessInvoice] = useState(() =>
    typeof initialSmallBusiness === 'boolean' ? initialSmallBusiness : readStoredSmallBusinessMode(),
  );
  const [textBlockSets, setTextBlockSets] = useState(createInitialTextBlockSets);
  const [positions, setPositions] = useState(() => [isTextInvoice ? createTextInvoicePosition() : createInvoicePosition()]);
  const { sender, recipient, deliveryAddress, details, footerLines } = useMemo(
    () => createInvoiceViewData(invoiceData),
    [invoiceData],
  );
  const activeTextBlockSetKey = getTextBlockSetKey(normalizedInvoiceVariant);
  const textBlocks = textBlockSets[activeTextBlockSetKey] ?? textBlockSets.default;

  useEffect(() => {
    if (typeof initialSmallBusiness === 'boolean') {
      setIsSmallBusinessInvoice(initialSmallBusiness);
    }
  }, [initialSmallBusiness]);

  useEffect(() => {
    textBlocks.forEach((block) => {
      if (block.visible) {
        resizeTextarea(textBlockRefs.current[block.id]);
      }
    });
  }, [textBlocks]);

  useEffect(() => {
    if (!isTextInvoice) {
      return;
    }

    setPositions((current) => current.map(normalizeTextInvoiceDefaultPosition));
  }, [isTextInvoice]);

  const totals = useMemo(() => {
    const summary = positions.reduce(
      (current, position) => {
        const calculated = calculatePosition(position, { isSmallBusinessInvoice, isTextInvoice });

        if (!isSmallBusinessInvoice) {
          const taxKey = String(calculated.taxRate);
          const taxGroup = current.taxGroups.get(taxKey) ?? { taxRate: calculated.taxRate, tax: 0 };

          taxGroup.tax += calculated.tax;
          current.taxGroups.set(taxKey, taxGroup);
        }

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
  }, [isSmallBusinessInvoice, isTextInvoice, positions]);

  const calculateCurrentPosition = useMemo(
    () => (position) => calculatePosition(position, { isSmallBusinessInvoice, isTextInvoice }),
    [isSmallBusinessInvoice, isTextInvoice],
  );
  const printItems = useMemo(
    () => createInvoicePrintItems({ isSmallBusinessInvoice, positions, textBlocks }),
    [isSmallBusinessInvoice, positions, textBlocks],
  );
  const dataCheckState = useMemo(
    () =>
      createDocumentDataCheckState({
        defaultPosition: isTextInvoice
          ? { ...defaultInvoicePositionForCheck, ...textInvoicePositionDefaults }
          : defaultInvoicePositionForCheck,
        defaultViewData: defaultInvoiceViewData,
        deliveryAddress,
        deliveryAddressHiddenFields: fieldConfig.deliveryAddress.hidden,
        details,
        footerLines,
        isActive: isDataCheckMode,
        positions,
        positionFields: isTextInvoice
          ? ['description', 'unitPrice', 'unit']
          : isGoodsInvoice
          ? [
              'articleNumber',
              'description',
              'unitPrice',
              'quantity',
              'unit',
              ...(isSmallBusinessInvoice ? [] : ['taxRate']),
            ]
          : isSmallBusinessInvoice
          ? ['description', 'unitPrice', 'quantity', 'unit']
          : ['description', 'unitPrice', 'quantity', 'unit', 'taxRate'],
        recipient,
        recipientHiddenFields: fieldConfig.recipient.hidden,
        sender,
        visibleContactFields: getOrderedDefinitions('contact', invoiceContactFields).filter(
          ({ field }) => !fieldConfig.contact.hidden.includes(field),
        ),
        visibleDetailFields: getOrderedDefinitions('details', invoiceMetaFields).filter(
          ({ field }) => !fieldConfig.details.hidden.includes(field),
        ),
        visibleFooterMiddleFields: getOrderedDefinitions('footerMiddle', invoiceFooterColumns[1]).filter(
          ({ field }) => !fieldConfig.footerMiddle.hidden.includes(field),
        ),
      }),
    [deliveryAddress, details, fieldConfig, footerLines, isDataCheckMode, isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice, positions, recipient, sender],
  );
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const viewModeHint = getDocumentModeHint({ isDataCheckMode, isEditable: highlightFields });

  async function refreshPrintPages() {
    setIsExportRenderActive(true);
    await waitForNextFrame();

    const nextPages = paginatorRef.current?.measureNow();

    if (nextPages) {
      setPrintPages((currentPages) => (arePrintPagesEqual(currentPages, nextPages) ? currentPages : nextPages));
      await waitForNextFrame();
    }
  }

  function updateLabel(field, value) {
    setLabels((current) => ({ ...current, [field]: value }));
  }

  function toggleEditableMode() {
    setIsDataCheckMode(false);
    setHighlightFields((current) => !current);
  }

  function toggleDataCheckMode() {
    setHighlightFields(false);
    setIsDataCheckMode((current) => !current);
  }

  function updateSender(field, value) {
    setInvoiceData((current) => {
      if (field === 'company') {
        const nextSender = { ...current.sender, companyName: value };
        return { ...current, sender: { ...nextSender, returnAddress: createReturnAddress(nextSender) } };
      }

      if (field === 'senderLine') {
        return { ...current, sender: { ...current.sender, returnAddress: value } };
      }

      if (field === 'address') {
        const nextSender = { ...current.sender, address: { ...current.sender.address, ...value } };
        return { ...current, sender: { ...nextSender, returnAddress: createReturnAddress(nextSender) } };
      }

      return { ...current, sender: { ...current.sender, contact: { ...current.sender.contact, [field]: value } } };
    });
  }

  function updateRecipient(field, value) {
    setInvoiceData((current) => {
      if (field === 'company') {
        return { ...current, recipient: { ...current.recipient, companyName: value } };
      }

      if (field === 'address') {
        return { ...current, recipient: { ...current.recipient, address: { ...current.recipient.address, ...value } } };
      }

      return { ...current, recipient: { ...current.recipient, [field]: value } };
    });
  }

  function updateDetail(field, value) {
    setInvoiceData((current) => {
      if (['internalNumber', 'externalNumber', 'customerNumber'].includes(field)) {
        return { ...current, references: { ...current.references, [field]: value } };
      }

      return { ...current, details: { ...current.details, [field]: value } };
    });
  }

  function updateFooterLine(field, value) {
    setInvoiceData((current) => {
      const patch = value && typeof value === 'object' ? value : { [field]: value };
      const footer = {
        company: { ...current.footer.company },
        tax: { ...current.footer.tax },
        bank: { ...current.footer.bank },
      };

      Object.entries(patch).forEach(([entryField, entryValue]) => {
        const normalizedValue = String(entryValue ?? '').trim();

        if (entryField === 'companyName') footer.company.companyName = normalizedValue;
        if (entryField === 'companyStreetName') footer.company.street = normalizedValue;
        if (entryField === 'companyHouseNumber') footer.company.houseNumber = normalizedValue;
        if (entryField === 'companyPostalCode') footer.company.postalCode = normalizedValue;
        if (entryField === 'companyCityName') footer.company.city = normalizedValue;
        if (entryField === 'companyExtra') footer.company.extra = normalizedValue;
        if (entryField === 'vatIdLabel') footer.tax.vatIdLabel = normalizedValue;
        if (entryField === 'vatId') footer.tax.vatId = normalizedValue;
        if (entryField === 'taxNumberLabel') footer.tax.taxNumberLabel = normalizedValue;
        if (entryField === 'taxNumber') footer.tax.taxNumber = normalizedValue;
        if (entryField === 'commercialRegister') footer.tax.commercialRegister = normalizedValue;
        if (entryField === 'managingDirector') footer.tax.representation = normalizedValue;
        if (entryField === 'bankName') footer.bank.bankName = normalizedValue;
        if (entryField === 'ibanLabel') footer.bank.ibanLabel = normalizedValue;
        if (entryField === 'iban') footer.bank.iban = normalizedValue;
        if (entryField === 'bicLabel') footer.bank.bicLabel = normalizedValue;
        if (entryField === 'bic') footer.bank.bic = normalizedValue;
        if (entryField === 'bankExtra') footer.bank.bankExtra = normalizedValue;
      });

      return { ...current, footer };
    });
  }

  function updatePosition(positionId, field, value) {
    setPositions((current) =>
      current.map((position) => (position.id === positionId ? { ...position, [field]: value } : position)),
    );
  }

  function addPosition() {
    setPositions((current) => [...current, isTextInvoice ? createTextInvoicePosition() : createInvoicePosition()]);
  }

  function updateDeliveryAddress(field, value) {
    setInvoiceData((current) => {
      if (field === 'company') {
        return { ...current, deliveryAddress: { ...current.deliveryAddress, companyName: value } };
      }

      if (field === 'address') {
        return {
          ...current,
          deliveryAddress: {
            ...current.deliveryAddress,
            address: { ...current.deliveryAddress.address, ...value },
          },
        };
      }

      return { ...current, deliveryAddress: { ...current.deliveryAddress, [field]: value } };
    });
  }

  function removePosition(positionId) {
    setPositions((current) => (current.length === 1 ? current : current.filter((position) => position.id !== positionId)));
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

    return order.map((field) => definitions.find((definition) => definition.field === field)).filter(Boolean);
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

      return { ...current, [block]: { ...current[block], hidden } };
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

      return { ...current, [block]: { ...current[block], order } };
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

  function setSmallBusinessMode(isSmallBusiness, { persist = true } = {}) {
    setIsSmallBusinessInvoice(isSmallBusiness);
    if (persist) {
      writeStoredSmallBusinessMode(isSmallBusiness);
    }
    onSmallBusinessChange?.(isSmallBusiness);
  }

  function updateTextBlock(blockId, patch) {
    setTextBlockSets((current) => (
      {
        ...current,
        [activeTextBlockSetKey]: current[activeTextBlockSetKey].map((block) =>
          block.id === blockId ? { ...block, ...patch } : block,
        ),
      }
    ));
  }

  function setActiveTextBlocks(nextTextBlocks, invoiceVariant = normalizedInvoiceVariant) {
    const textBlockSetKey = getTextBlockSetKey(invoiceVariant);

    setTextBlockSets((current) => (
      {
        ...current,
        [textBlockSetKey]: nextTextBlocks,
      }
    ));
  }

  function toggleTextBlockVisibility(blockId) {
    setTextBlockSets((current) => (
      {
        ...current,
        [activeTextBlockSetKey]: current[activeTextBlockSetKey].map((block) =>
          block.id === blockId ? { ...block, visible: !block.visible } : block,
        ),
      }
    ));
  }

  function createInvoiceTemplate() {
    return {
      documentType: 'invoice',
      invoiceVariant: normalizedInvoiceVariant,
      schemaVersion: invoiceSchemaVersion,
      createdWith: 'Carta',
      data: {
        labels,
        ...invoiceData,
        isSmallBusiness: isSmallBusinessInvoice,
        positions,
        textBlocks,
        fieldConfig,
      },
    };
  }

  function handleSaveJson() {
    downloadJson(createInvoiceTemplate(), createJsonFileName(details.invoiceNumber));
  }

  function handleNewDocument() {
    const resetSmallBusinessMode = readStoredSmallBusinessMode();

    setLabels(initialInvoiceLabels);
    setInvoiceData(defaultInvoiceData);
    setPositions([isTextInvoice ? createTextInvoicePosition() : createInvoicePosition()]);
    setTextBlockSets(createInitialTextBlockSets());
    setSmallBusinessMode(resetSmallBusinessMode);
    setFieldConfig({
      contact: createFieldConfig(invoiceContactFields),
      details: createFieldConfig(invoiceMetaFields),
      deliveryAddress: createFieldConfig(invoiceDeliveryAddressOptionalFields),
      recipient: createFieldConfig(invoiceRecipientOptionalFields),
      footerMiddle: createFieldConfig(invoiceFooterColumns[1]),
    });
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setIsExporting(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
  }

  async function handleLoadJson(event) {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    if (!file.name.toLowerCase().endsWith('.json') && file.type !== 'application/json') {
      window.alert('Bitte eine JSON-Datei auswÃ¤hlen.');
      return;
    }

    try {
      const template = JSON.parse(await file.text());
      const data = validateInvoiceTemplate(template);
      const templateInvoiceVariant = ['standard', 'text', 'goods'].includes(data.invoiceVariant)
        ? data.invoiceVariant
        : normalizedInvoiceVariant;
      const templateSmallBusiness =
        data.invoiceVariant === 'smallBusiness' ? true : data.isSmallBusiness === true;

      setLabels({ ...initialInvoiceLabels, ...(data.labels ?? {}) });
      setInvoiceData(normalizeInvoiceData(data));
      setPositions(normalizePositions(data.positions));
      setActiveTextBlocks(normalizeTextBlocksForVariant(data.textBlocks, templateInvoiceVariant), templateInvoiceVariant);
      setSmallBusinessMode(templateSmallBusiness, { persist: false });
      setFieldConfig(normalizeFieldConfig(data.fieldConfig));
      if (
        data.invoiceVariant === 'standard' ||
        data.invoiceVariant === 'text' ||
        data.invoiceVariant === 'goods'
      ) {
        onInvoiceVariantChange?.(templateInvoiceVariant);
      }

      if (data.invoiceVariant === 'smallBusiness') {
        onInvoiceVariantChange?.('standard');
      }
      setIsDataCheckMode(false);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Die JSON-Datei konnte nicht geladen werden.');
    }
  }


  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await refreshPrintPages();
      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'invoice',
        filename: createPdfFileName(labels.title, details.invoiceNumber, normalizedInvoiceVariant),
      });
    } catch (error) {
      window.alert(
        `PDF konnte nicht erstellt werden. Prüfe bitte, ob die Vercel Function lokal oder auf Vercel verfügbar ist.\n\n${error.message}`,
      );
    } finally {
      setIsExportRenderActive(false);
      setIsExporting(false);
    }
  }

  async function handlePrint() {
    await refreshPrintPages();
    document.body.classList.add('document-print-mode');
    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode');
      setIsExportRenderActive(false);
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  function renderTextBlock(block, index, lastIndex = textBlocks.length - 1) {
    if (!block) return null;

    if (!block.visible) {
      return (
        <div className="invoice-flow-config-row invoice-flow-hidden-row" key={block.id}>
          <TextBlockControls
            isFirst={index === 0}
            isLast={index === lastIndex}
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
            resizeTextarea(element);
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
          isLast={index === lastIndex}
          label={block.label}
          visible={block.visible}
          onToggle={() => toggleTextBlockVisibility(block.id)}
        />
      </div>
    );
  }

  return (
    <div className="visual-editor invoice-visual-editor">
      {SHOW_DOCUMENT_FORM_PANEL && (
        <InvoiceDocumentForm
          addPosition={addPosition}
          details={invoiceData.details}
          footerLines={footerLines}
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
          isOpen={isFormPanelOpen}
          movePosition={movePosition}
          onToggle={() => setIsFormPanelOpen((current) => !current)}
          positions={positions}
          recipient={invoiceData.recipient}
          references={invoiceData.references}
          removePosition={removePosition}
          sender={invoiceData.sender}
          showTaxFields={!isSmallBusinessInvoice}
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
      )}

      <div className="invoice-variant-controls">
        <InvoiceVariantChoiceBar
          activeVariant={normalizedInvoiceVariant}
          onChange={onInvoiceVariantChange}
        />

        <label className="invoice-small-business-toggle">
          <input
            type="checkbox"
            checked={isSmallBusinessInvoice}
            onChange={(event) => setSmallBusinessMode(event.target.checked)}
          />
          <span>Kleinunternehmerregelung nach § 19 UStG anwenden</span>
        </label>

        <div className="invoice-variant-controls-divider" aria-hidden="true" />

        <DocumentToolbar
          ariaLabel="Rechnung Werkzeuge"
          isDataCheckActive={isDataCheckMode}
          isEditable={highlightFields}
          isExporting={isExporting}
          jsonInputRef={jsonInputRef}
          onCreatePdf={handleCreatePdf}
          onLoadJson={handleLoadJson}
          onNewDocument={handleNewDocument}
          onPrint={handlePrint}
          onSaveJson={handleSaveJson}
          onToggleDataCheck={toggleDataCheckMode}
          onToggleEditable={toggleEditableMode}
        />
      </div>

      <p className="document-mode-hint">{viewModeHint}</p>

      <A4Page
        ref={sheetRef}
        ariaLabel="Editierbare Rechnung"
        className={`offer-sheet invoice-sheet${isDataCheckMode ? ' is-data-check-mode' : ''}`}
        editable={highlightFields}
      >
        <SenderBlock
          contactFields={getOrderedDefinitions('contact', invoiceContactFields)}
          dataCheckFields={dataCheckState.sender}
          hiddenFields={getHiddenFields('contact', invoiceContactFields)}
          labels={labels}
          sender={sender}
          onLabelChange={updateLabel}
          onMoveField={(field, direction) => moveConfiguredField('contact', field, direction)}
          onSenderChange={updateSender}
          onToggleField={(field) => toggleConfiguredField('contact', field)}
        />

        <section className="invoice-address-row">
          <div className="invoice-address-stack">
            <RecipientBlock
              ariaPrefix="Empfaenger"
              dataCheckFields={{ ...dataCheckState.recipient, senderLine: dataCheckState.sender.senderLine }}
              hiddenFields={getHiddenFields('recipient', invoiceRecipientOptionalFields)}
              recipient={recipient}
              senderLine={sender.senderLine}
              onRecipientChange={updateRecipient}
              onSenderLineChange={(value) => updateSender('senderLine', value)}
              onToggleField={(field) => toggleConfiguredField('recipient', field)}
            />

            {isGoodsInvoice && (
              <section className="invoice-delivery-address-block" aria-label="Lieferadresse">
                <p className="invoice-delivery-address-title">Lieferadresse</p>
                <RecipientBlock
                  ariaPrefix="Lieferadresse"
                  attentionToggleLabel="z. Hd."
                  dataCheckFields={dataCheckState.deliveryAddress}
                  hiddenFields={getHiddenFields('deliveryAddress', invoiceDeliveryAddressOptionalFields)}
                  nameToggleLabel="Abteilung"
                  recipient={deliveryAddress}
                  showSenderLine={false}
                  onRecipientChange={updateDeliveryAddress}
                  onToggleField={(field) => toggleConfiguredField('deliveryAddress', field)}
                />
              </section>
            )}
          </div>

          <DocumentMetaBlock
            dataCheckFields={dataCheckState.details}
            dateInputRefs={dateInputRefs}
            details={details}
            emphasizedField="invoiceNumber"
            fields={getOrderedDefinitions('details', invoiceMetaFields)}
            hiddenFields={getHiddenFields('details', invoiceMetaFields)}
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

        {renderTextBlock(textBlocks.find((block) => block.id === 'intro'), 0, isSmallBusinessInvoice ? 2 : 1)}

        <PositionTable
          autoResizeDescription
          calculatePosition={calculateCurrentPosition}
          dataCheckPositions={dataCheckState.positions}
          formatCurrency={formatCurrency}
          isGoodsInvoice={isGoodsInvoice}
          isTextInvoice={isTextInvoice}
          labels={labels}
          positions={positions}
          showTaxColumn={!isSmallBusinessInvoice}
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
          ariaLabel="Rechnungssummen"
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
          labels={labels}
          showNetTotal={!isSmallBusinessInvoice}
          showTaxDetails={!isSmallBusinessInvoice}
          totals={totals}
          onLabelChange={updateLabel}
        />

        {renderTextBlock(textBlocks.find((block) => block.id === 'closing'), 1, isSmallBusinessInvoice ? 2 : 1)}

        {isSmallBusinessInvoice && renderTextBlock(textBlocks.find((block) => block.id === 'smallBusinessNotice'), 2, 2)}

        <FooterBlock
          columns={[
            invoiceFooterColumns[0],
            getOrderedDefinitions('footerMiddle', invoiceFooterColumns[1]),
            invoiceFooterColumns[2],
          ]}
          dataCheckFields={dataCheckState.footerLines}
          footerLines={footerLines}
          formatFooterLine={(field, value) => formatInvoiceFooterLine(field, value, footerLines)}
          hiddenFields={getHiddenFields('footerMiddle', invoiceFooterColumns[1])}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
          parseFooterLine={parseInvoiceFooterLine}
        />
      </A4Page>

      {isExportRenderActive ? (
        <>
          <MeasuredInvoicePaginator
            ref={paginatorRef}
            calculatePosition={calculateCurrentPosition}
            isGoodsInvoice={isGoodsInvoice}
            isSmallBusinessInvoice={isSmallBusinessInvoice}
            isTextInvoice={isTextInvoice}
            items={printItems}
            labels={labels}
            totals={totals}
          />
          <InvoicePrintPages
            ref={printPagesRef}
            calculatePosition={calculateCurrentPosition}
            details={details}
            deliveryAddress={deliveryAddress}
            footerLines={footerLines}
            isGoodsInvoice={isGoodsInvoice}
            isSmallBusinessInvoice={isSmallBusinessInvoice}
            isTextInvoice={isTextInvoice}
            labels={labels}
            pages={printPages}
            recipient={recipient}
            sender={sender}
            totals={totals}
            visibleContactDefinitions={getOrderedDefinitions('contact', invoiceContactFields).filter(
              (definition) => !fieldConfig.contact.hidden.includes(definition.field),
            )}
            visibleDetailDefinitions={getOrderedDefinitions('details', invoiceMetaFields).filter(
              (definition) => !fieldConfig.details.hidden.includes(definition.field),
            )}
            visibleDeliveryAddressFields={invoiceDeliveryAddressOptionalFields.filter(
              (definition) => !fieldConfig.deliveryAddress.hidden.includes(definition.field),
            )}
            visibleRecipientFields={invoiceRecipientOptionalFields.filter(
              (definition) => !fieldConfig.recipient.hidden.includes(definition.field),
            )}
            visibleFooterMiddleDefinitions={getOrderedDefinitions('footerMiddle', invoiceFooterColumns[1]).filter(
              (definition) => !fieldConfig.footerMiddle.hidden.includes(definition.field),
            )}
          />
        </>
      ) : null}
    </div>
  );
}

const MeasuredInvoicePaginator = forwardRef(function MeasuredInvoicePaginator(
  { calculatePosition: calculateInvoicePosition, isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice, items, labels, totals },
  ref,
) {
  const measureRootRef = useRef(null);
  const positionItems = items.filter((item) => item.type === 'position');

  function measureNow() {
    return measureInvoicePages(measureRootRef.current, items);
  }

  useImperativeHandle(ref, () => ({ measureNow }), [items]);

  return (
    <div className="offer-measure-root" ref={measureRootRef} aria-hidden="true">
      <div className="invoice-print-page offer-print-page is-first-page">
        <div className="invoice-print-page-content" data-measure-first-content />
      </div>
      <div className="invoice-print-page offer-print-page is-follow-page">
        <div className="invoice-print-page-content" data-measure-follow-content />
      </div>
      <div className="offer-measure-content">
        <p className="invoice-print-flow-text" data-measure-text-probe />
        <table className={`invoice-print-position-table${isSmallBusinessInvoice ? ' is-without-tax-column' : ''}${isTextInvoice ? ' is-text-invoice' : ''}${isGoodsInvoice ? ' is-goods-invoice' : ''}`}>
          {!isTextInvoice && (
            <thead>
              <tr data-measure-position-header>
                <th>{labels.position}</th>
                {isGoodsInvoice && <th>Artikel-Nr.</th>}
                <th>{labels.description}</th>
                <th>{labels.unitPrice}</th>
                <th>{isGoodsInvoice ? 'Anz.' : labels.quantity}</th>
                <th>{labels.unit}</th>
                {!isSmallBusinessInvoice && <th>{labels.tax}</th>}
                <th>{labels.total}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {positionItems.map(({ index, position }) => {
              const calculated = calculateInvoicePosition(position);

              return (
                <tr data-measure-position-row={String(index)} key={position.id}>
                  {isTextInvoice ? (
                    <>
                      <td>{position.description}</td>
                      <td>{position.unit}</td>
                      <td>{formatCurrency(calculated.net)}</td>
                    </>
                  ) : (
                    <>
                      <td>{index + 1}</td>
                      {isGoodsInvoice && <td>{position.articleNumber}</td>}
                      <td>{position.description}</td>
                      <td>{formatCurrency(toNumber(position.unitPrice))}</td>
                      <td>{position.quantity}</td>
                      <td>{position.unit}</td>
                      {!isSmallBusinessInvoice && <td>{formatPercent(calculated.taxRate)}%</td>}
                      <td>{formatCurrency(calculated.net)}</td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div data-measure-summary>
          <InvoicePrintSummary isSmallBusinessInvoice={isSmallBusinessInvoice} labels={labels} totals={totals} />
        </div>
      </div>
    </div>
  );
});

function measureInvoicePages(measureRoot, items) {
  if (!measureRoot) return null;

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const summaryProbe = measureRoot.querySelector('[data-measure-summary] .invoice-print-summary');
  const positionHeader = measureRoot.querySelector('[data-measure-position-header]');
  const positionRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-position-row]')].map((row) => [
      row.dataset.measurePositionRow,
      getOuterHeight(row),
    ]),
  );

  if (!firstContent || !followContent || !textProbe || !summaryProbe) return null;

  const firstPageCapacity = firstContent.getBoundingClientRect().height - invoicePrintLayout.smallSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - invoicePrintLayout.smallSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || invoicePrintLayout.blockGap;
  const positionHeaderHeight = getOuterHeight(positionHeader);

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'text') return measureTextHeight(item.text);
    if (item.type === 'position') return positionRows.get(String(item.index)) || 0;
    if (item.type === 'summary') return getOuterHeight(summaryProbe);
    return 0;
  }

  function getItemGap(page, item) {
    const previousItem = page.items[page.items.length - 1];
    const startsPositionTable = item.type === 'position' && previousItem?.type !== 'position';
    const startsNewBlock = page.items.length > 0 && !(item.type === 'position' && previousItem?.type === 'position');

    return (startsNewBlock ? blockGap : 0) + (startsPositionTable ? positionHeaderHeight : 0);
  }

  return paginateMeasuredItems({
    items,
    firstPageCapacity,
    followPageCapacity,
    getItemHeight,
    getItemGap,
    splitTextItem: (item, availableHeight) => takeMeasuredText(item.text, availableHeight, measureTextHeight),
  });
}

function arePrintPagesEqual(currentPages, nextPages) {
  if (currentPages.length !== nextPages.length) return false;

  return currentPages.every((page, pageIndex) => {
    const nextPage = nextPages[pageIndex];
    if (page.items.length !== nextPage.items.length) return false;
    return page.items.every((item, itemIndex) => arePrintItemsEqual(item, nextPage.items[itemIndex]));
  });
}

function arePrintItemsEqual(first, second) {
  if (first.type !== second.type) return false;
  if (first.type === 'text') return first.id === second.id && first.text === second.text;
  if (first.type === 'position') {
    return (
      first.index === second.index &&
    first.position.id === second.position.id &&
      first.position.articleNumber === second.position.articleNumber &&
      first.position.description === second.position.description &&
      first.position.unitPrice === second.position.unitPrice &&
      first.position.quantity === second.position.quantity &&
      first.position.unit === second.position.unit &&
      first.position.taxRate === second.position.taxRate
    );
  }

  return true;
}

const InvoicePrintPages = forwardRef(function InvoicePrintPages(
  {
    calculatePosition: calculateInvoicePosition,
    details,
    deliveryAddress,
    footerLines,
    isGoodsInvoice,
    isSmallBusinessInvoice,
    isTextInvoice,
    labels,
    pages,
    recipient,
    sender,
    totals,
    visibleContactDefinitions,
    visibleDeliveryAddressFields,
    visibleDetailDefinitions,
    visibleRecipientFields,
    visibleFooterMiddleDefinitions,
  },
  ref,
) {
  const totalPages = pages.length;

  return (
    <div className="invoice-print-pages offer-print-pages invoice-export-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`invoice-print-page offer-print-page invoice-export-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <InvoicePrintFirstPageHeader
              details={details}
              deliveryAddress={deliveryAddress}
              isGoodsInvoice={isGoodsInvoice}
              labels={labels}
              recipient={recipient}
              sender={sender}
              visibleContactDefinitions={visibleContactDefinitions}
              visibleDeliveryAddressFields={visibleDeliveryAddressFields}
              visibleDetailDefinitions={visibleDetailDefinitions}
              visibleRecipientFields={visibleRecipientFields}
            />
          ) : (
            <InvoicePrintContinuationHeader companyName={sender.company} />
          )}

          <div className="invoice-print-page-content">
            <InvoicePrintPageItems
              calculatePosition={calculateInvoicePosition}
              isGoodsInvoice={isGoodsInvoice}
              isSmallBusinessInvoice={isSmallBusinessInvoice}
              isTextInvoice={isTextInvoice}
              items={page.items}
              labels={labels}
              totals={totals}
            />
          </div>

          <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <InvoicePrintFooter footerLines={footerLines} visibleFooterMiddleDefinitions={visibleFooterMiddleDefinitions} />
        </article>
      ))}
    </div>
  );
});

function InvoicePrintFirstPageHeader({
  details,
  deliveryAddress,
  isGoodsInvoice,
  labels,
  recipient,
  sender,
  visibleContactDefinitions,
  visibleDeliveryAddressFields,
  visibleDetailDefinitions,
  visibleRecipientFields,
}) {
  const showRecipientAttention = visibleRecipientFields.some((definition) => definition.field === 'attention');
  const showRecipientName = visibleRecipientFields.some((definition) => definition.field === 'name');
  const showDeliveryAttention = visibleDeliveryAddressFields.some((definition) => definition.field === 'attention');
  const showDeliveryName = visibleDeliveryAddressFields.some((definition) => definition.field === 'name');
  const recipientLines = [
    recipient.company,
    showRecipientAttention ? recipient.attention : '',
    showRecipientName ? recipient.name : '',
    recipient.street,
    recipient.cityLine,
  ];
  const deliveryAddressLines = [
    deliveryAddress.company,
    showDeliveryAttention ? deliveryAddress.attention : '',
    showDeliveryName ? deliveryAddress.name : '',
    deliveryAddress.street,
    deliveryAddress.cityLine,
  ];

  return (
    <div className="offer-print-first-page-header">
      <header className="invoice-print-header">
        <div>
          <p className="invoice-print-company-name">{sender.company}</p>
        </div>
        <div className="invoice-print-contact">
          {visibleContactDefinitions.map((definition) => (
            <p key={definition.field}>
              <span>{labels[definition.labelField]}</span>
              {sender[definition.field]}
            </p>
          ))}
        </div>
      </header>

      <section className="invoice-print-address-row">
        <div className="invoice-print-recipient">
          <p className="invoice-print-sender-line">{sender.senderLine}</p>
          {recipientLines.filter(Boolean).map((line) => (
            <p key={line}>{line}</p>
          ))}
          {isGoodsInvoice && (
            <section className="invoice-print-delivery-address" aria-label="Lieferadresse">
              <p className="invoice-print-delivery-address-title">Lieferadresse</p>
              {deliveryAddressLines.filter(Boolean).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </section>
          )}
        </div>

        <div className="invoice-print-details">
          {visibleDetailDefinitions.map((definition) => (
            <PrintDetailRow
              key={definition.field}
              emphasized={definition.field === 'invoiceNumber'}
              label={labels[definition.field]}
              value={definition.type === 'date' ? formatGermanDate(details[definition.field]) : details[definition.field]}
            />
          ))}
        </div>
      </section>

      <h2 className="invoice-print-title">{labels.title}</h2>
    </div>
  );
}

function InvoicePrintContinuationHeader({ companyName }) {
  return (
    <header className="invoice-print-header invoice-print-continuation-header">
      <p className="invoice-print-company-name">{companyName}</p>
    </header>
  );
}

function PrintDetailRow({ emphasized = false, label, value }) {
  return (
    <p className={emphasized ? 'is-emphasized' : undefined}>
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

function InvoicePrintPageItems({ calculatePosition: calculateInvoicePosition, isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice, items, labels, totals }) {
  const renderedItems = [];
  let index = 0;

  while (index < items.length) {
    const item = items[index];

    if (item.type === 'position') {
      const positionItems = [];

      while (items[index]?.type === 'position') {
        positionItems.push(items[index]);
        index += 1;
      }

      renderedItems.push(
        <InvoicePrintPositionTable
          calculatePosition={calculateInvoicePosition}
          isGoodsInvoice={isGoodsInvoice}
          isSmallBusinessInvoice={isSmallBusinessInvoice}
          isTextInvoice={isTextInvoice}
          key={`positions-${positionItems[0].index}`}
          labels={labels}
          positionItems={positionItems}
        />,
      );
      continue;
    }

    if (item.type === 'summary') {
      renderedItems.push(
        <InvoicePrintSummary
          isSmallBusinessInvoice={isSmallBusinessInvoice}
          key="summary"
          labels={labels}
          totals={totals}
        />,
      );
    }

    if (item.type === 'text') {
      renderedItems.push(
        <p className="invoice-print-flow-text" key={`${item.id}-${index}`}>
          {item.text}
        </p>,
      );
    }

    index += 1;
  }

  return renderedItems;
}

function InvoicePrintPositionTable({ calculatePosition: calculateInvoicePosition, isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice, labels, positionItems }) {
  return (
    <table className={`invoice-print-position-table${isSmallBusinessInvoice ? ' is-without-tax-column' : ''}${isTextInvoice ? ' is-text-invoice' : ''}${isGoodsInvoice ? ' is-goods-invoice' : ''}`}>
      {!isTextInvoice && (
        <thead>
          <tr>
            <th>{labels.position}</th>
            {isGoodsInvoice && <th>Artikel-Nr.</th>}
            <th>{labels.description}</th>
            <th>{labels.unitPrice}</th>
            <th>{isGoodsInvoice ? 'Anz.' : labels.quantity}</th>
            <th>{labels.unit}</th>
            {!isSmallBusinessInvoice && <th>{labels.tax}</th>}
            <th>{labels.total}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {positionItems.map(({ index, position }) => {
          const calculated = calculateInvoicePosition(position);

          return (
            <tr key={position.id}>
              {isTextInvoice ? (
                <>
                  <td>{position.description}</td>
                  <td>{position.unit}</td>
                  <td>{formatCurrency(calculated.net)}</td>
                </>
              ) : (
                <>
                  <td>{index + 1}</td>
                  {isGoodsInvoice && <td>{position.articleNumber}</td>}
                  <td>{position.description}</td>
                  <td>{formatCurrency(toNumber(position.unitPrice))}</td>
                  <td>{position.quantity}</td>
                  <td>{position.unit}</td>
                  {!isSmallBusinessInvoice && <td>{formatPercent(calculated.taxRate)}%</td>}
                  <td>{formatCurrency(calculated.net)}</td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function InvoicePrintSummary({ isSmallBusinessInvoice = false, labels, totals }) {
  return (
    <aside className="invoice-print-summary" aria-label="Rechnungssummen">
      {!isSmallBusinessInvoice && (
        <div>
          <span>{labels.net}</span>
          <strong>{formatCurrency(totals.net)}</strong>
        </div>
      )}
      {!isSmallBusinessInvoice && totals.taxGroups.map((group) => (
        <div key={group.taxRate}>
          <span>
            {labels.taxAmount} {formatPercent(group.taxRate)}%
          </span>
          <strong>{formatCurrency(group.tax)}</strong>
        </div>
      ))}
      <div>
        <span>{labels.grandTotal}</span>
        <strong>{formatCurrency(totals.gross)}</strong>
      </div>
    </aside>
  );
}

function InvoicePrintFooter({ footerLines, visibleFooterMiddleDefinitions }) {
  return (
    <footer className="invoice-print-footer">
      <section>
        {['companyName', 'companyStreet', 'companyCity', 'companyExtra']
          .map((field) => footerLines[field])
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
      <section>
        {visibleFooterMiddleDefinitions
          .map((definition) => formatInvoiceFooterLine(definition.field, footerLines[definition.field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
      <section>
        {['bankName', 'iban', 'bic', 'bankExtra']
          .map((field) => formatInvoiceFooterLine(field, footerLines[field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
    </footer>
  );
}

function getOuterHeight(element) {
  if (!element) return 0;

  const styles = window.getComputedStyle(element);
  const marginTop = parseFloat(styles.marginTop) || 0;
  const marginBottom = parseFloat(styles.marginBottom) || 0;

  return element.getBoundingClientRect().height + marginTop + marginBottom;
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}
