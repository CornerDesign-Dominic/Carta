import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import A4Page from './documentBlocks/A4Page.jsx';
import ShortSelfReceiptDocument from './ShortSelfReceiptDocument.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import { FieldActions, HiddenFieldActions } from './documentBlocks/FieldActions.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import TotalsBox from './documentBlocks/TotalsBox.jsx';
import SelfReceiptDocumentForm from './SelfReceiptDocumentForm.jsx';
import SelfReceiptExpenseTable from './documentBlocks/SelfReceiptExpenseTable.jsx';
import { paginateMeasuredItems, takeMeasuredText } from './documentExport/MeasuredPaginator.jsx';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';
import { SHOW_DOCUMENT_FORM_PANEL } from '../config/documentFeatures.js';
import { createDocumentDataCheckState, getDocumentModeHint } from '../utils/documentDataCheck.js';
import { mapSelfReceiptToDocument } from '../documentModel/additionalDocumentModel.js';
import { applyOwnDataToSelfReceipt, hasSelfReceiptOwnData, removeOwnDataFromSelfReceipt } from './masterDataPanel/mappings/ownDataToSelfReceipt.js';
import {
  applyPartnerToSelfReceipt,
  hasSelfReceiptPaymentRecipientData,
  removePartnerFromSelfReceipt,
} from './masterDataPanel/mappings/partnerToSelfReceipt.js';


const initialSelfReceiptLabels = {
  title: 'Eigenbeleg',
  recipientTitle: 'Zahlungsempfänger / Lieferant',
  selfReceiptId: 'Belegkennung',
  receiptDate: 'Belegdatum',
  expenseDate: 'Ausgabendatum',
  internalReference: 'Interne Referenz',
  externalReference: 'Externe Referenz',
  costCenter: 'Kostenstelle',
  position: 'Pos.',
  description: 'Beschreibung',
  netAmount: 'Netto',
  tax: 'USt.',
  grossAmount: 'Brutto',
  net: 'Nettobetrag',
  taxAmount: 'Umsatzsteuer',
  grandTotal: 'Gesamtbetrag',
  occasion: 'Betrieblicher Anlass der Ausgabe',
  reason: 'Grund für den Eigenbeleg',
  settlementType: 'Zahlungsart',
  location: 'Ausgabestelle / Ort',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

const selfReceiptContactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const selfReceiptMetaFields = [
  { autoComplete: 'new-password', field: 'selfReceiptId', ariaLabel: 'Interne Belegkennung', name: 'carta-self-receipt-id', type: 'text' },
  { field: 'receiptDate', ariaLabel: 'Belegdatum', type: 'date' },
  { field: 'expenseDate', ariaLabel: 'Ausgabendatum', type: 'date' },
  { autoComplete: 'new-password', field: 'internalReference', ariaLabel: 'Interne Referenz', name: 'carta-self-receipt-internal-reference', type: 'text' },
  { autoComplete: 'new-password', field: 'externalReference', ariaLabel: 'Externe Referenz', name: 'carta-self-receipt-external-reference', type: 'text' },
  { autoComplete: 'new-password', field: 'costCenter', ariaLabel: 'Kostenstelle', name: 'carta-self-receipt-cost-center', type: 'text' },
];

const selfReceiptRecipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Händen' },
  { field: 'name', label: 'Name / Abteilung' },
];

const selfReceiptFooterColumns = [
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
    { field: 'managingDirector', label: 'Geschäftsführer' },
  ],
  [
    { field: 'bankName', label: 'Bankname' },
    { field: 'iban', label: 'IBAN' },
    { field: 'bic', label: 'BIC' },
    { field: 'bankExtra', label: 'Zusatzzeile Bank' },
  ],
];

const selfReceiptFooterLabeledFields = {
  vatId: 'vatIdLabel',
  taxNumber: 'taxNumberLabel',
  iban: 'ibanLabel',
  bic: 'bicLabel',
};

const selfReceiptFooterDefaultLabels = {
  vatId: 'USt-IdNr.:',
  taxNumber: 'Steuernummer:',
  iban: 'IBAN:',
  bic: 'BIC:',
};

const selfReceiptFooterLabelPrefixes = {
  vatId: ['USt-IdNr.:', 'USt-IdNr.', 'USt-ID:', 'USt-ID'],
  taxNumber: ['Steuernummer:', 'Steuernummer'],
  iban: ['IBAN:', 'IBAN'],
  bic: ['BIC:', 'BIC'],
  bankName: ['Bankname:', 'Bankname'],
};

const defaultSelfReceiptData = {
  sender: {
    companyName: 'Belege24 Muster GmbH',
    address: {
      street: 'Musterstrasse',
      houseNumber: '12',
      postalCode: '10115',
      city: 'Berlin',
    },
    returnAddress: 'Belege24 Muster GmbH - Musterstrasse 12 - 10115 Berlin',
    contact: {
      email: 'kontakt@belege24.com',
      phone: '+49 30 123456',
      fax: '+49 30 123457',
      website: 'www.belege24.com',
    },
  },
  recipient: {
    companyName: 'Musterlieferant GmbH',
    attention: 'Verkauf',
    name: 'Zentrale',
    address: {
      street: 'Lieferantenweg',
      houseNumber: '4',
      postalCode: '80331',
      city: 'München',
    },
  },
  details: {
    selfReceiptId: 'EB-2026-001',
    receiptDate: '2026-05-12',
    expenseDate: '2026-05-07',
  },
  references: {
    internalReference: 'INT-1001',
    externalReference: 'EXT-4711',
    costCenter: 'KST-200',
  },
  expenseInfo: {
    occasion: 'Betrieblicher Anlass der Ausgabe:',
    reason: 'Grund für den Eigenbeleg:',
    settlementType: 'Zahlungsart:',
    location: 'Ausgabestelle / Ort:',
  },
  footer: {
    company: {
      companyName: 'Belege24 Muster GmbH',
      street: 'Musterstrasse',
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

const selfReceiptDetailFields = [
  { field: 'occasion', labelField: 'occasion', ariaLabel: 'Betrieblicher Anlass der Ausgabe' },
  { field: 'reason', labelField: 'reason', ariaLabel: 'Grund für den Eigenbeleg' },
  { field: 'settlementType', labelField: 'settlementType', ariaLabel: 'Zahlungsart' },
  { field: 'location', labelField: 'location', ariaLabel: 'Ausgabestelle oder Ort' },
];
const selfReceiptSignatureFields = [{ field: 'signature', label: 'Unterschrift' }];
const selfReceiptVariants = [
  { id: 'standard', label: 'Ausführlicher Eigenbeleg (A4)' },
  { id: 'short', label: 'Einfacher Eigenbeleg (A5)' },
];

const selfReceiptPrintLayout = {
  blockGap: 16,
  detailGap: 4,
  smallSafetyBuffer: 8,
};

function createSelfReceiptPosition() {
  return {
    id: crypto.randomUUID(),
    ...defaultSelfReceiptPositionForCheck,
  };
}

function currentLocalIsoDate() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function createShortSelfReceiptData() {
  return {
    title: 'Eigenbeleg',
    receiptNumber: 'Beleg Nr. 001',
    recipientAddress: 'Firma Meier\nMusterstraße 12\n12345 Musterhausen',
    purpose: 'Kauf eines Bürostuhls bei Kaufhaus XYZ',
    reason: 'Verlust des Originalbelegs',
    date: currentLocalIsoDate(),
    amount: {
      calculationSource: 'netAmount',
      sourceAmount: '100,00',
      taxRate: '19',
    },
    fieldConfig: {
      signature: { hidden: [], order: ['signature'] },
    },
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
    contact: createFieldConfig(selfReceiptContactFields),
    details: createFieldConfig(selfReceiptMetaFields),
    expenseInfo: createFieldConfig(selfReceiptDetailFields),
    signature: createFieldConfig(selfReceiptSignatureFields),
    recipient: createFieldConfig(selfReceiptRecipientOptionalFields),
    footerMiddle: createFieldConfig(selfReceiptFooterColumns[1]),
  };

  if (!config || typeof config !== 'object') {
    return fallback;
  }

  return {
    contact: normalizeFieldConfigBlock(config.contact, fallback.contact),
    details: normalizeFieldConfigBlock(config.details, fallback.details),
    expenseInfo: normalizeFieldConfigBlock(config.expenseInfo, fallback.expenseInfo),
    signature: normalizeFieldConfigBlock(config.signature, fallback.signature),
    recipient: normalizeFieldConfigBlock(config.recipient, fallback.recipient),
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

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

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

function splitStreetLine(value = '') {
  const trimmed = String(value ?? '').trim();
  const match = trimmed.match(/^(.*?)(?:\s+(\d+\s*[a-zA-Z]?))$/);

  return {
    street: match ? match[1].trim() : trimmed,
    houseNumber: match ? match[2].trim() : '',
  };
}

function splitCityLine(value = '') {
  const trimmed = String(value ?? '').trim();
  const match = trimmed.match(/^(\d{4,5})\s+(.+)$/);

  return {
    postalCode: match ? match[1].trim() : '',
    city: match ? match[2].trim() : trimmed,
  };
}

function createSelfReceiptViewData({ sender, recipient, details, references, expenseInfo, footer }) {
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
    details: {
      ...details,
      ...references,
    },
    expenseInfo: { ...expenseInfo },
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

const defaultSelfReceiptViewData = createSelfReceiptViewData(defaultSelfReceiptData);
const defaultSelfReceiptPositionForCheck = {
  description: 'Besprechung mit Projektpartnern inkl. Verpflegung',
  netAmount: '42,00',
  taxRate: '19',
};

function normalizeSelfReceiptData(data = {}) {
  return {
    sender: {
      ...defaultSelfReceiptData.sender,
      ...(data.sender ?? {}),
      address: { ...defaultSelfReceiptData.sender.address, ...(data.sender?.address ?? {}) },
      contact: { ...defaultSelfReceiptData.sender.contact, ...(data.sender?.contact ?? {}) },
    },
    recipient: {
      ...defaultSelfReceiptData.recipient,
      ...(data.recipient ?? {}),
      address: { ...defaultSelfReceiptData.recipient.address, ...(data.recipient?.address ?? {}) },
    },
    details: { ...defaultSelfReceiptData.details, ...(data.details ?? {}) },
    references: { ...defaultSelfReceiptData.references, ...(data.references ?? {}) },
    expenseInfo: { ...defaultSelfReceiptData.expenseInfo, ...(data.expenseInfo ?? {}) },
    footer: {
      company: { ...defaultSelfReceiptData.footer.company, ...(data.footer?.company ?? {}) },
      tax: { ...defaultSelfReceiptData.footer.tax, ...(data.footer?.tax ?? {}) },
      bank: { ...defaultSelfReceiptData.footer.bank, ...(data.footer?.bank ?? {}) },
    },
  };
}

function splitFooterLabelAndValue(field, value = '', fallbackLabel = selfReceiptFooterDefaultLabels[field] ?? '') {
  const prefixes = selfReceiptFooterLabelPrefixes[field] ?? [];
  let normalized = String(value ?? '').trim();
  let label = fallbackLabel;

  for (const prefix of prefixes) {
    if (normalized.toLowerCase().startsWith(prefix.toLowerCase())) {
      label = prefix.endsWith(':') ? prefix : `${prefix}:`;
      normalized = normalized.slice(prefix.length).replace(/^[:\s]+/, '').trim();
      break;
    }
  }

  return { label, value: normalized };
}

function normalizeFooterValue(field, value = '') {
  return splitFooterLabelAndValue(field, value).value;
}

function normalizeFooterLines(lines = {}) {
  const normalized = Object.fromEntries(
    Object.entries(lines).map(([field, value]) => [field, String(value ?? '').trim()]),
  );
  const companyStreetParts = splitStreetLine(normalized.companyStreet);
  const companyCityParts = splitCityLine(normalized.companyCity);

  normalized.companyStreetName = normalized.companyStreetName ?? companyStreetParts.street;
  normalized.companyHouseNumber = normalized.companyHouseNumber ?? companyStreetParts.houseNumber;
  normalized.companyPostalCode = normalized.companyPostalCode ?? companyCityParts.postalCode;
  normalized.companyCityName = normalized.companyCityName ?? companyCityParts.city;
  normalized.companyStreet = joinLine(normalized.companyStreetName, normalized.companyHouseNumber);
  normalized.companyCity = joinLine(normalized.companyPostalCode, normalized.companyCityName);

  Object.entries(selfReceiptFooterLabeledFields).forEach(([field, labelField]) => {
    const hasExplicitLabel = Object.prototype.hasOwnProperty.call(lines, labelField);
    const { label, value } = splitFooterLabelAndValue(
      field,
      lines[field],
      hasExplicitLabel ? String(lines[labelField] ?? '') : selfReceiptFooterDefaultLabels[field],
    );

    normalized[labelField] = hasExplicitLabel ? String(lines[labelField] ?? '').trim() : label;
    normalized[field] = value;
  });

  normalized.bankName = normalizeFooterValue('bankName', normalized.bankName);

  return normalized;
}

function formatFooterLine(field, value = '', footerLines = {}) {
  const normalized = String(value ?? '').trim();
  const labelField = selfReceiptFooterLabeledFields[field];
  const label = labelField ? String(footerLines[labelField] ?? '').trim() : '';

  if (!labelField) {
    return normalized;
  }

  return [label, normalized].filter(Boolean).join(' ');
}

function parseFooterLine(field, value = '') {
  const labelField = selfReceiptFooterLabeledFields[field];

  if (!labelField) {
    return normalizeFooterValue(field, value);
  }

  const { label, value: normalizedValue } = splitFooterLabelAndValue(field, value, '');

  return {
    [labelField]: label,
    [field]: normalizedValue,
  };
}

function calculatePosition(position) {
  const net = toNumber(position.netAmount);
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

function createSlug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9aouess]+/gi, '-')
    .replace(/^-+|-+$/g, '');
}

function createPdfFileName(title, number) {
  const cleanTitle = createSlug(title || 'eigenbeleg');
  const cleanNumber = createSlug(number || new Date().toISOString().slice(0, 10));
  return `${cleanTitle || 'eigenbeleg'}-${cleanNumber || 'dokument'}.pdf`;
}

function normalizeExpenseInfo(expenseInfo = {}) {
  return {
    occasion: String(expenseInfo.occasion ?? defaultSelfReceiptData.expenseInfo.occasion),
    reason: String(expenseInfo.reason ?? defaultSelfReceiptData.expenseInfo.reason),
    settlementType: String(expenseInfo.settlementType ?? defaultSelfReceiptData.expenseInfo.settlementType),
    location: String(expenseInfo.location ?? defaultSelfReceiptData.expenseInfo.location),
  };
}

function createSelfReceiptPrintItems({ expenseInfo, positions, showSignature, visibleDetailDefinitions }) {
  return [
    ...visibleDetailDefinitions.map((definition) => ({
      type: 'detail',
      field: definition.field,
      value: expenseInfo[definition.field],
    })),
    ...positions.map((position, index) => ({ type: 'position', index, position })),
    { type: 'summary' },
    ...(showSignature ? [{ type: 'signature' }] : []),
  ];
}

export default function SelfReceiptDocumentEditor({ onMasterDataAdapterChange }) {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isDataCheckMode, setIsDataCheckMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [selfReceiptVariant, setSelfReceiptVariant] = useState('standard');
  const [labels, setLabels] = useState(initialSelfReceiptLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(selfReceiptContactFields),
    details: createFieldConfig(selfReceiptMetaFields),
    expenseInfo: createFieldConfig(selfReceiptDetailFields),
    signature: createFieldConfig(selfReceiptSignatureFields),
    recipient: createFieldConfig(selfReceiptRecipientOptionalFields),
    footerMiddle: createFieldConfig(selfReceiptFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const paginatorRef = useRef(null);
  const titleTextareaRef = useRef(null);
  const detailTextareaRefs = useRef({});
  const positionTextareaRefs = useRef({});
  const dateInputRefs = useRef({});
  const [selfReceiptData, setSelfReceiptData] = useState(defaultSelfReceiptData);
  const [positions, setPositions] = useState([createSelfReceiptPosition()]);
  const [shortSelfReceipt, setShortSelfReceipt] = useState(createShortSelfReceiptData);
  const selfReceiptDataRef = useRef(selfReceiptData);
  selfReceiptDataRef.current = selfReceiptData;
  const selfReceiptMasterDataAdapter = useMemo(() => ({
    partnerRoleLabel: 'Zahlungsempfänger / Lieferant',
    applyOwnData(record) {
      setSelfReceiptData((current) => applyOwnDataToSelfReceipt(current, record));
    },
    hasOwnDocumentData() {
      return hasSelfReceiptOwnData(selfReceiptDataRef.current);
    },
    removeOwnData() {
      setSelfReceiptData((current) => removeOwnDataFromSelfReceipt(current));
    },
    applyPartner(record) {
      setSelfReceiptData((current) => applyPartnerToSelfReceipt(current, record));
    },
    hasRecipientData() {
      return hasSelfReceiptPaymentRecipientData(selfReceiptDataRef.current);
    },
    removePartner() {
      setSelfReceiptData((current) => removePartnerFromSelfReceipt(current));
    },
  }), []);
  const initialGeneratorStateRef = useRef(null);
  const currentGeneratorState = { selfReceiptVariant, labels, selfReceiptData, positions, fieldConfig, shortSelfReceipt };
  if (!initialGeneratorStateRef.current) initialGeneratorStateRef.current = structuredClone(currentGeneratorState);
  const { sender, recipient, details, expenseInfo, footerLines } = useMemo(
    () => createSelfReceiptViewData(selfReceiptData),
    [selfReceiptData],
  );

  useEffect(() => {
    onMasterDataAdapterChange?.(selfReceiptMasterDataAdapter);

    return () => onMasterDataAdapterChange?.(null);
  }, [onMasterDataAdapterChange, selfReceiptMasterDataAdapter]);

  useEffect(() => {
    resizeTextarea(titleTextareaRef.current);

    Object.values(detailTextareaRefs.current).forEach((element) => {
      resizeTextarea(element);
    });

    Object.values(positionTextareaRefs.current).forEach((element) => {
      resizeTextarea(element);
    });
  }, [expenseInfo, labels.title, positions]);

  const totals = useMemo(() => {
    const summary = positions.reduce(
      (current, position) => {
        const calculated = calculatePosition(position);
        const taxKey = String(calculated.taxRate);
        const taxGroup = current.taxGroups.get(taxKey) ?? { taxRate: calculated.taxRate, tax: 0 };

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

  const visibleExpenseDefinitions = useMemo(
    () => getOrderedDefinitions('expenseInfo', selfReceiptDetailFields)
      .filter((definition) => !fieldConfig.expenseInfo.hidden.includes(definition.field)),
    [fieldConfig.expenseInfo],
  );
  const printItems = useMemo(
    () => createSelfReceiptPrintItems({ expenseInfo, positions, showSignature: !fieldConfig.signature.hidden.includes('signature'), visibleDetailDefinitions: visibleExpenseDefinitions }),
    [expenseInfo, fieldConfig.signature.hidden, positions, visibleExpenseDefinitions],
  );
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const dataCheckState = useMemo(
    () => createDocumentDataCheckState({
      defaultPosition: defaultSelfReceiptPositionForCheck,
      defaultViewData: defaultSelfReceiptViewData,
      details,
      footerLines,
      isActive: isDataCheckMode,
      positionFields: ['description', 'netAmount', 'taxRate'],
      positions,
      recipient,
      recipientHiddenFields: fieldConfig.recipient.hidden,
      sender,
      visibleContactFields: getOrderedDefinitions('contact', selfReceiptContactFields).filter(
        ({ field }) => !fieldConfig.contact.hidden.includes(field),
      ),
      visibleDetailFields: getOrderedDefinitions('details', selfReceiptMetaFields).filter(
        ({ field }) => !fieldConfig.details.hidden.includes(field),
      ),
      visibleFooterMiddleFields: getOrderedDefinitions('footerMiddle', selfReceiptFooterColumns[1]).filter(
        ({ field }) => !fieldConfig.footerMiddle.hidden.includes(field),
      ),
    }),
    [details, fieldConfig, footerLines, isDataCheckMode, positions, recipient, sender],
  );
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

  function updateShortSelfReceipt(value) {
    setShortSelfReceipt(value);
  }

  function toggleShortSignature() {
    setShortSelfReceipt((current) => {
      const hidden = current.fieldConfig.signature.hidden.includes('signature')
        ? current.fieldConfig.signature.hidden.filter((field) => field !== 'signature')
        : [...current.fieldConfig.signature.hidden, 'signature'];

      return {
        ...current,
        fieldConfig: {
          ...current.fieldConfig,
          signature: { ...current.fieldConfig.signature, hidden },
        },
      };
    });
  }

  function updateSender(field, value) {
    setSelfReceiptData((current) => {
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
    setSelfReceiptData((current) => {
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
    setSelfReceiptData((current) => {
      if (field in current.details) {
        return { ...current, details: { ...current.details, [field]: value } };
      }

      return { ...current, references: { ...current.references, [field]: value } };
    });
  }

  function updateExpenseInfo(field, value) {
    setSelfReceiptData((current) => ({
      ...current,
      expenseInfo: { ...current.expenseInfo, [field]: value },
    }));
  }

  function updateFooterLine(field, value) {
    setSelfReceiptData((current) => {
      const normalizedValue = typeof value === 'object' && value !== null ? value : { [field]: value };
      const streetParts = Object.prototype.hasOwnProperty.call(normalizedValue, 'companyStreet')
        ? splitStreetLine(normalizedValue.companyStreet)
        : {};
      const cityParts = Object.prototype.hasOwnProperty.call(normalizedValue, 'companyCity')
        ? splitCityLine(normalizedValue.companyCity)
        : {};

      return {
        ...current,
        footer: {
          company: {
            ...current.footer.company,
            companyName: normalizedValue.companyName ?? current.footer.company.companyName,
            street: normalizedValue.companyStreetName ?? streetParts.street ?? current.footer.company.street,
            houseNumber: normalizedValue.companyHouseNumber ?? streetParts.houseNumber ?? current.footer.company.houseNumber,
            postalCode: normalizedValue.companyPostalCode ?? cityParts.postalCode ?? current.footer.company.postalCode,
            city: normalizedValue.companyCityName ?? cityParts.city ?? current.footer.company.city,
            extra: normalizedValue.companyExtra ?? current.footer.company.extra,
          },
          tax: {
            ...current.footer.tax,
            vatIdLabel: normalizedValue.vatIdLabel ?? current.footer.tax.vatIdLabel,
            vatId: normalizedValue.vatId ?? current.footer.tax.vatId,
            taxNumberLabel: normalizedValue.taxNumberLabel ?? current.footer.tax.taxNumberLabel,
            taxNumber: normalizedValue.taxNumber ?? current.footer.tax.taxNumber,
            commercialRegister: normalizedValue.commercialRegister ?? current.footer.tax.commercialRegister,
            representation: normalizedValue.managingDirector ?? current.footer.tax.representation,
          },
          bank: {
            ...current.footer.bank,
            bankName: normalizedValue.bankName ?? current.footer.bank.bankName,
            ibanLabel: normalizedValue.ibanLabel ?? current.footer.bank.ibanLabel,
            iban: normalizedValue.iban ?? current.footer.bank.iban,
            bicLabel: normalizedValue.bicLabel ?? current.footer.bank.bicLabel,
            bic: normalizedValue.bic ?? current.footer.bank.bic,
            bankExtra: normalizedValue.bankExtra ?? current.footer.bank.bankExtra,
          },
        },
      };
    });
  }

  function addPosition() {
    setPositions((current) => [...current, createSelfReceiptPosition()]);
  }

  function updatePosition(id, field, value) {
    setPositions((current) =>
      current.map((position) => (position.id === id ? { ...position, [field]: value } : position)),
    );
  }

  function removePosition(id) {
    setPositions((current) => (current.length === 1 ? current : current.filter((position) => position.id !== id)));
  }

  function movePosition(id, direction) {
    setPositions((current) => {
      const index = current.findIndex((position) => position.id === id);
      const nextIndex = index + direction;

      if (index === -1 || nextIndex < 0 || nextIndex >= current.length) {
        return current;
      }

      const next = [...current];
      const [position] = next.splice(index, 1);
      next.splice(nextIndex, 0, position);
      return next;
    });
  }

  function openDatePicker(field) {
    dateInputRefs.current[field]?.showPicker?.();
    dateInputRefs.current[field]?.focus();
  }

  function handleNewDocument() {
    if (selfReceiptVariant === 'short') {
      setShortSelfReceipt(createShortSelfReceiptData());
      setHighlightFields(false);
      setIsDataCheckMode(false);
      setIsFormPanelOpen(false);
      setIsExportRenderActive(false);
      setIsExporting(false);
      initialGeneratorStateRef.current = null;
      return;
    }

    setLabels(initialSelfReceiptLabels);
    setFieldConfig({
      contact: createFieldConfig(selfReceiptContactFields),
      details: createFieldConfig(selfReceiptMetaFields),
      expenseInfo: createFieldConfig(selfReceiptDetailFields),
      signature: createFieldConfig(selfReceiptSignatureFields),
      recipient: createFieldConfig(selfReceiptRecipientOptionalFields),
      footerMiddle: createFieldConfig(selfReceiptFooterColumns[1]),
    });
    setSelfReceiptData(defaultSelfReceiptData);
    setPositions([createSelfReceiptPosition()]);
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setIsExporting(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStateRef.current = null;
  }

  function toggleDataCheckMode() {
    setIsDataCheckMode((current) => !current);
    setHighlightFields(true);
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      if (selfReceiptVariant === 'short') {
        await requestPdfDownload({
          sheet: sheetRef.current,
          documentType: 'selfReceipt',
          filename: createPdfFileName(shortSelfReceipt.title, shortSelfReceipt.receiptNumber),
          belege24Document: mapSelfReceiptToDocument(currentGeneratorState),
        });
        return;
      }

      await refreshPrintPages();
      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'selfReceipt',
        filename: createPdfFileName(labels.title, details.selfReceiptId),
        belege24Document: mapSelfReceiptToDocument(currentGeneratorState),
      });
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Die PDF-Datei konnte nicht erstellt werden.');
    } finally {
      setIsExporting(false);
      setIsExportRenderActive(false);
    }
  }

  async function handleLoadPdf(file) {
    if (!(file instanceof File) || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))) {
      window.alert('Bitte wähle eine PDF-Datei aus.');
      return;
    }

    let result;
    try {
      const { importSelfReceiptPdf } = await import('../documentModel/additionalDocumentModel.js');
      result = await importSelfReceiptPdf(await file.arrayBuffer());
    } catch {
      window.alert('Die PDF konnte nicht gelesen werden.');
      return;
    }

    if (result.status !== 'valid') {
      window.alert(result.message);
      return;
    }

    const { confirmSelfReceiptOverwrite } = await import('../documentModel/additionalDocumentModel.js');
    if (!confirmSelfReceiptOverwrite(currentGeneratorState, initialGeneratorStateRef.current, () => window.confirm('Der aktuelle Eigenbeleg enthält Änderungen. Möchtest du ihn vollständig durch die Daten aus der PDF ersetzen?'))) return;

    const restored = result.state;
    setSelfReceiptVariant(restored.selfReceiptVariant ?? 'standard');
    setLabels(restored.labels);
    setSelfReceiptData(restored.selfReceiptData);
    setPositions(restored.positions);
    setFieldConfig(restored.fieldConfig);
    setShortSelfReceipt(restored.shortSelfReceipt ?? createShortSelfReceiptData());
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStateRef.current = structuredClone(restored);
    window.alert(result.message);
  }

  async function handlePrint() {
    if (selfReceiptVariant === 'short') {
      document.body.classList.add('document-print-mode', 'receipt-print-mode');
      window.print();

      const cleanup = () => {
        document.body.classList.remove('document-print-mode', 'receipt-print-mode');
        window.removeEventListener('afterprint', cleanup);
      };

      window.addEventListener('afterprint', cleanup);
      window.setTimeout(cleanup, 1200);
      return;
    }

    try {
      await refreshPrintPages();
      document.body.classList.add('document-print-mode');
      window.print();
    } finally {
      const cleanup = () => {
        document.body.classList.remove('document-print-mode');
        setIsExportRenderActive(false);
        window.removeEventListener('afterprint', cleanup);
      };

      window.addEventListener('afterprint', cleanup);
      window.setTimeout(cleanup, 1200);
    }
  }

  function toggleConfiguredField(block, field) {
    setFieldConfig((current) => {
      const hidden = current[block].hidden.includes(field)
        ? current[block].hidden.filter((entry) => entry !== field)
        : [...current[block].hidden, field];

      return {
        ...current,
        [block]: { ...current[block], hidden },
      };
    });
  }

  function moveConfiguredField(block, field, direction) {
    setFieldConfig((current) => {
      const order = [...current[block].order];
      const index = order.indexOf(field);
      const nextIndex = index + direction;

      if (index === -1 || nextIndex < 0 || nextIndex >= order.length) {
        return current;
      }

      order.splice(index, 1);
      order.splice(nextIndex, 0, field);

      return {
        ...current,
        [block]: { ...current[block], order },
      };
    });
  }

  function getOrderedDefinitions(block, definitions) {
    const order = fieldConfig[block].order;
    return [...definitions].sort((first, second) => order.indexOf(first.field) - order.indexOf(second.field));
  }

  function getHiddenFields(block) {
    return fieldConfig[block].hidden;
  }

  function renderExpenseField(definition) {
    const value = expenseInfo[definition.field];
    return (
      <div className="invoice-flow-config-row self-receipt-detail-line" key={definition.field}>
        <FieldActions label={definition.ariaLabel} onToggle={() => toggleConfiguredField('expenseInfo', definition.field)} />
        <textarea
          ref={(element) => {
            detailTextareaRefs.current[definition.field] = element;
          }}
          className={dataCheckState.details[definition.field] ? 'document-data-check-marker' : undefined}
          aria-label={definition.ariaLabel}
          rows={1}
          wrap="soft"
          value={value}
          onChange={(event) => {
            updateExpenseInfo(definition.field, event.target.value);
            resizeTextarea(event.target);
          }}
        />
      </div>
    );
  }

  return (
    <div className="visual-editor invoice-visual-editor">
      {SHOW_DOCUMENT_FORM_PANEL && selfReceiptVariant === 'standard' && (
        <SelfReceiptDocumentForm
          addPosition={addPosition}
          details={selfReceiptData.details}
          expenseInfo={selfReceiptData.expenseInfo}
          footerLines={footerLines}
          isOpen={isFormPanelOpen}
          movePosition={movePosition}
          onToggle={() => setIsFormPanelOpen((current) => !current)}
          positions={positions}
          recipient={selfReceiptData.recipient}
          references={selfReceiptData.references}
          removePosition={removePosition}
          sender={selfReceiptData.sender}
          updateDetail={updateDetail}
          updateExpenseInfo={updateExpenseInfo}
          updateFooterLine={updateFooterLine}
          updatePosition={updatePosition}
          updateRecipient={updateRecipient}
          updateSender={updateSender}
        />
      )}

      <div className="document-choice-bar self-receipt-variant-choice-bar" aria-label="Eigenbelegvariante auswählen">
        {selfReceiptVariants.map((variant) => (
          <button
            className={selfReceiptVariant === variant.id ? 'is-active' : undefined}
            type="button"
            aria-pressed={selfReceiptVariant === variant.id}
            key={variant.id}
            onClick={() => setSelfReceiptVariant(variant.id)}
          >
            {variant.label}
          </button>
        ))}
      </div>

      <DocumentToolbar
        ariaLabel="Eigenbeleg Werkzeuge"
        isDataCheckActive={isDataCheckMode}
        isEditable={highlightFields}
        isExporting={isExporting}
        onCreatePdf={handleCreatePdf}
        onLoadPdf={handleLoadPdf}
        onNewDocument={handleNewDocument}
        onPrint={handlePrint}
        onToggleDataCheck={toggleDataCheckMode}
        onToggleEditable={() => setHighlightFields((current) => !current)}
      />

      <p className="document-mode-hint">{viewModeHint}</p>

      {selfReceiptVariant === 'short' ? (
        <ShortSelfReceiptDocument
          data={shortSelfReceipt}
          editable={highlightFields}
          isDataCheckMode={isDataCheckMode}
          onChange={updateShortSelfReceipt}
          onToggleSignature={toggleShortSignature}
          pageRef={sheetRef}
        />
      ) : (
        <>

      <A4Page
        ref={sheetRef}
        ariaLabel="Editierbarer Eigenbeleg"
        className={`offer-sheet invoice-sheet self-receipt-sheet${isDataCheckMode ? ' is-data-check-mode' : ''}`}
        editable={highlightFields}
      >
        <SenderBlock
          contactFields={getOrderedDefinitions('contact', selfReceiptContactFields)}
          dataCheckFields={dataCheckState.sender}
          hiddenFields={getHiddenFields('contact')}
          labels={labels}
          sender={sender}
          onLabelChange={updateLabel}
          onMoveField={(field, direction) => moveConfiguredField('contact', field, direction)}
          onSenderChange={updateSender}
          onToggleField={(field) => toggleConfiguredField('contact', field)}
        />

        <section className="invoice-address-row">
          <RecipientBlock
            dataCheckFields={dataCheckState.recipient}
            hiddenFields={getHiddenFields('recipient')}
            recipient={recipient}
            senderLine={sender.senderLine}
            onRecipientChange={updateRecipient}
            onSenderLineChange={(value) => updateSender('senderLine', value)}
            onToggleField={(field) => toggleConfiguredField('recipient', field)}
          />

          <DocumentMetaBlock
            dataCheckFields={dataCheckState.details}
            dateInputRefs={dateInputRefs}
            details={details}
            emphasizedField="selfReceiptId"
            fields={getOrderedDefinitions('details', selfReceiptMetaFields)}
            hiddenFields={getHiddenFields('details')}
            labels={labels}
            onDatePicker={openDatePicker}
            onDetailChange={updateDetail}
            onLabelChange={updateLabel}
            onMoveField={(field, direction) => moveConfiguredField('details', field, direction)}
            onToggleField={(field) => toggleConfiguredField('details', field)}
          />
        </section>

        <h2 className="invoice-document-title">
          <textarea
            ref={titleTextareaRef}
            className="document-label-input document-title-label"
            aria-label="Dokumenttitel"
            rows={1}
            wrap="soft"
            value={labels.title}
            onChange={(event) => {
              updateLabel('title', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </h2>

        <section className="self-receipt-document-fields" aria-label="Eigenbeleg-Details">
          {visibleExpenseDefinitions.map(renderExpenseField)}
          <HiddenFieldActions
            className="self-receipt-hidden-detail-fields"
            definitions={selfReceiptDetailFields}
            hiddenFields={getHiddenFields('expenseInfo')}
            onToggle={(field) => toggleConfiguredField('expenseInfo', field)}
          />
        </section>

        <SelfReceiptExpenseTable
          calculatePosition={calculatePosition}
          dataCheckPositions={dataCheckState.positions}
          formatCurrency={formatCurrency}
          labels={labels}
          positions={positions}
          textareaRefs={positionTextareaRefs}
          onLabelChange={updateLabel}
          onMovePosition={movePosition}
          onPositionChange={updatePosition}
          onRemovePosition={removePosition}
          onResizeTextarea={resizeTextarea}
        />

        <button className="offer-add-position" type="button" onClick={addPosition}>
          + Position hinzufügen
        </button>

        <TotalsBox
          ariaLabel="Eigenbelegsummen"
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
          labels={labels}
          totals={totals}
          onLabelChange={updateLabel}
        />

        {!getHiddenFields('signature').includes('signature') && (
          <section className="invoice-flow-config-row self-receipt-signature" aria-label="Unterschrift">
            <FieldActions label="Unterschrift" onToggle={() => toggleConfiguredField('signature', 'signature')} />
            <div className="self-receipt-signature-content">
              <div className="self-receipt-signature-line" />
              <p>Unterschrift</p>
            </div>
          </section>
        )}
        <HiddenFieldActions
          className="self-receipt-hidden-signature"
          definitions={selfReceiptSignatureFields}
          hiddenFields={getHiddenFields('signature')}
          onToggle={(field) => toggleConfiguredField('signature', field)}
        />

        <FooterBlock
          columns={[
            selfReceiptFooterColumns[0],
            getOrderedDefinitions('footerMiddle', selfReceiptFooterColumns[1]),
            selfReceiptFooterColumns[2],
          ]}
          footerLines={footerLines}
          dataCheckFields={dataCheckState.footerLines}
          formatFooterLine={(field, value) => formatFooterLine(field, value, footerLines)}
          hiddenFields={getHiddenFields('footerMiddle')}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
          parseFooterLine={parseFooterLine}
        />
      </A4Page>

      {isExportRenderActive ? (
        <>
          <MeasuredSelfReceiptPaginator
            ref={paginatorRef}
            expenseInfo={expenseInfo}
            items={printItems}
            labels={labels}
            totals={totals}
          />
          <SelfReceiptPrintPages
            ref={printPagesRef}
            details={details}
            expenseInfo={expenseInfo}
            footerLines={footerLines}
            labels={labels}
            pages={printPages}
            recipient={recipient}
            sender={sender}
            totals={totals}
            visibleContactDefinitions={getOrderedDefinitions('contact', selfReceiptContactFields).filter(
              (definition) => !fieldConfig.contact.hidden.includes(definition.field),
            )}
            visibleDetailDefinitions={getOrderedDefinitions('details', selfReceiptMetaFields).filter(
              (definition) => !fieldConfig.details.hidden.includes(definition.field),
            )}
            visibleRecipientFields={selfReceiptRecipientOptionalFields.filter(
              (definition) => !fieldConfig.recipient.hidden.includes(definition.field),
            )}
            visibleFooterMiddleDefinitions={getOrderedDefinitions('footerMiddle', selfReceiptFooterColumns[1]).filter(
              (definition) => !fieldConfig.footerMiddle.hidden.includes(definition.field),
            )}
          />
        </>
      ) : null}
        </>
      )}
    </div>
  );
}

const MeasuredSelfReceiptPaginator = forwardRef(function MeasuredSelfReceiptPaginator(
  { expenseInfo, items, labels, totals },
  ref,
) {
  const measureRootRef = useRef(null);

  function measureNow() {
    return measureSelfReceiptPages(measureRootRef.current, items, labels);
  }

  useImperativeHandle(ref, () => ({ measureNow }), [items]);

  const positionItems = items.filter((item) => item.type === 'position');

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
        <div data-measure-detail>
          <SelfReceiptPrintDetailLine value={expenseInfo.occasion} />
        </div>
        <table className="invoice-print-position-table self-receipt-print-position-table">
          <thead>
            <tr data-measure-position-header>
              <th>{labels.position}</th>
              <th>{labels.description}</th>
              <th>{labels.netAmount}</th>
              <th>{labels.tax}</th>
              <th>{labels.grossAmount}</th>
            </tr>
          </thead>
          <tbody>
            {positionItems.map(({ index, position }) => {
              const calculated = calculatePosition(position);

              return (
                <tr data-measure-position-row={String(index)} key={position.id}>
                  <td>{index + 1}</td>
                  <td>{position.description}</td>
                  <td>{formatCurrency(calculated.net)}</td>
                  <td>{formatPercent(calculated.taxRate)}%</td>
                  <td>{formatCurrency(calculated.gross)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div data-measure-summary>
          <SelfReceiptPrintSummary labels={labels} totals={totals} />
        </div>
        <div data-measure-signature>
          <SelfReceiptPrintSignature />
        </div>
      </div>
    </div>
  );
});

function measureSelfReceiptPages(measureRoot, items, labels) {
  if (!measureRoot) {
    return null;
  }

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const detailProbe = measureRoot.querySelector('[data-measure-detail] .self-receipt-print-detail-line');
  const summaryProbe = measureRoot.querySelector('[data-measure-summary] .invoice-print-summary');
  const signatureProbe = measureRoot.querySelector('[data-measure-signature] .self-receipt-print-signature');
  const positionHeader = measureRoot.querySelector('[data-measure-position-header]');
  const positionRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-position-row]')].map((row) => [
      row.dataset.measurePositionRow,
      getOuterHeight(row),
    ]),
  );

  if (!firstContent || !followContent || !textProbe || !summaryProbe || !signatureProbe || !positionHeader || !detailProbe) {
    return null;
  }

  const firstPageCapacity = firstContent.getBoundingClientRect().height - selfReceiptPrintLayout.smallSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - selfReceiptPrintLayout.smallSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || selfReceiptPrintLayout.blockGap;
  const positionHeaderHeight = getOuterHeight(positionHeader);

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function measureDetailHeight(text) {
    detailProbe.textContent = text;
    return getOuterHeight(detailProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'text') {
      return measureTextHeight(item.text);
    }

    if (item.type === 'detail') {
      return measureDetailHeight(item.value);
    }

    if (item.type === 'position') {
      return positionRows.get(String(item.index)) || 0;
    }

    if (item.type === 'summary') {
      return getOuterHeight(summaryProbe);
    }

    if (item.type === 'signature') {
      return getOuterHeight(signatureProbe);
    }

    return 0;
  }

  function getItemGap(page, item) {
    const previousItem = page.items[page.items.length - 1];
    const startsPositionTable = item.type === 'position' && previousItem?.type !== 'position';
    const continuesDetailBlock = item.type === 'detail' && previousItem?.type === 'detail';
    const startsNewBlock = page.items.length > 0 && !(item.type === 'position' && previousItem?.type === 'position') && !continuesDetailBlock;

    return (startsNewBlock ? blockGap : 0) + (continuesDetailBlock ? selfReceiptPrintLayout.detailGap : 0) + (startsPositionTable ? positionHeaderHeight : 0);
  }

  function splitDetailItem(item, availableHeight) {
    const split = takeMeasuredText(item.value, availableHeight, measureDetailHeight);

    if (!split) {
      return null;
    }

    return {
      current: { ...item, value: split.currentText },
      next: { ...item, value: split.remainingText },
    };
  }

  return paginateMeasuredItems({
    items,
    firstPageCapacity,
    followPageCapacity,
    getItemHeight,
    getItemGap,
    splitTextItem: (item, availableHeight) => {
      if (item.type === 'text') {
        const split = takeMeasuredText(item.text, availableHeight, measureTextHeight);
        return split ? { current: { ...item, text: split.currentText }, next: { ...item, text: split.remainingText } } : null;
      }

      if (item.type === 'detail') {
        return splitDetailItem(item, availableHeight);
      }

      return null;
    },
  });
}

function arePrintPagesEqual(currentPages, nextPages) {
  if (currentPages.length !== nextPages.length) {
    return false;
  }

  return currentPages.every((page, pageIndex) => {
    const nextPage = nextPages[pageIndex];

    if (page.items.length !== nextPage.items.length) {
      return false;
    }

    return page.items.every((item, itemIndex) => arePrintItemsEqual(item, nextPage.items[itemIndex]));
  });
}

function arePrintItemsEqual(first, second) {
  if (first.type !== second.type) {
    return false;
  }

  if (first.type === 'text') {
    return first.id === second.id && first.text === second.text;
  }

  if (first.type === 'detail') {
    return first.field === second.field && first.value === second.value;
  }

  if (first.type === 'position') {
    return (
      first.index === second.index &&
      first.position.id === second.position.id &&
      first.position.description === second.position.description &&
      first.position.netAmount === second.position.netAmount &&
      first.position.taxRate === second.position.taxRate
    );
  }

  return true;
}

function getOuterHeight(element) {
  if (!element) {
    return 0;
  }

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

const SelfReceiptPrintPages = forwardRef(function SelfReceiptPrintPages(
  {
    details,
    expenseInfo,
    footerLines,
    labels,
    pages,
    recipient,
    sender,
    totals,
    visibleContactDefinitions,
    visibleDetailDefinitions,
    visibleRecipientFields,
    visibleFooterMiddleDefinitions,
  },
  ref,
) {
  const totalPages = pages.length;

  return (
    <div className="invoice-print-pages offer-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`invoice-print-page offer-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <SelfReceiptPrintFirstPageHeader
              details={details}
              labels={labels}
              recipient={recipient}
              sender={sender}
              visibleContactDefinitions={visibleContactDefinitions}
              visibleDetailDefinitions={visibleDetailDefinitions}
              visibleRecipientFields={visibleRecipientFields}
            />
          ) : (
            <SelfReceiptPrintContinuationHeader companyName={sender.company} />
          )}

          <div className="invoice-print-page-content">
            <SelfReceiptPrintPageItems expenseInfo={expenseInfo} items={page.items} labels={labels} totals={totals} />
          </div>

          <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <SelfReceiptPrintFooter
            footerLines={footerLines}
            visibleFooterMiddleDefinitions={visibleFooterMiddleDefinitions}
          />
        </article>
      ))}
    </div>
  );
});

function SelfReceiptPrintFirstPageHeader({
  details,
  labels,
  recipient,
  sender,
  visibleContactDefinitions,
  visibleDetailDefinitions,
  visibleRecipientFields,
}) {
  const showRecipientAttention = visibleRecipientFields.some((definition) => definition.field === 'attention');
  const showRecipientName = visibleRecipientFields.some((definition) => definition.field === 'name');
  const recipientLines = [
    recipient.company,
    showRecipientAttention ? recipient.attention : '',
    showRecipientName ? recipient.name : '',
    recipient.street,
    recipient.cityLine,
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
        <div className="invoice-print-recipient self-receipt-print-recipient">
          <p className="invoice-print-sender-line">{sender.senderLine}</p>
          {recipientLines.filter(Boolean).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="invoice-print-details">
          {visibleDetailDefinitions.map((definition) => (
            <SelfReceiptPrintDetailRow
              key={definition.field}
              emphasized={definition.field === 'selfReceiptId'}
              label={labels[definition.field]}
              value={definition.type === 'date' ? formatGermanDate(details[definition.field]) : details[definition.field]}
            />
          ))}
        </div>
      </section>

      <h2 className="invoice-print-title self-receipt-print-title">{labels.title}</h2>

    </div>
  );
}

function SelfReceiptPrintContinuationHeader({ companyName }) {
  return (
    <header className="invoice-print-header invoice-print-continuation-header">
      <p className="invoice-print-company-name">{companyName}</p>
    </header>
  );
}

function SelfReceiptPrintDetailRow({ emphasized = false, label, value }) {
  return (
    <p className={emphasized ? 'is-emphasized' : undefined}>
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

function SelfReceiptPrintPageItems({ expenseInfo, items, labels, totals }) {
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
        <SelfReceiptPrintPositionTable
          key={`positions-${positionItems[0].index}`}
          labels={labels}
          positionItems={positionItems}
        />,
      );
      continue;
    }

    if (item.type === 'summary') {
      renderedItems.push(<SelfReceiptPrintSummary key="summary" labels={labels} totals={totals} />);
    }

    if (item.type === 'signature') {
      renderedItems.push(<SelfReceiptPrintSignature key="signature" />);
    }

    if (item.type === 'detail') {
      const detailItems = [];

      while (items[index]?.type === 'detail') {
        detailItems.push(items[index]);
        index += 1;
      }

      renderedItems.push(
        <section className="self-receipt-print-detail-block" key={`details-${detailItems[0].field}`}>
          {detailItems.map((detail) => (
            <SelfReceiptPrintDetailLine key={detail.field} value={detail.value} />
          ))}
        </section>,
      );
      continue;
    }

    index += 1;
  }

  return renderedItems;
}

function SelfReceiptPrintDetailLine({ value }) {
  return (
    <p className="self-receipt-print-detail-line">{value}</p>
  );
}

function SelfReceiptPrintSignature() {
  return (
    <section className="self-receipt-print-signature">
      <div />
      <p>Unterschrift</p>
    </section>
  );
}

function SelfReceiptPrintPositionTable({ labels, positionItems }) {
  return (
    <table className="invoice-print-position-table self-receipt-print-position-table">
      <thead>
        <tr>
          <th>{labels.position}</th>
          <th>{labels.description}</th>
          <th>{labels.netAmount}</th>
          <th>{labels.tax}</th>
          <th>{labels.grossAmount}</th>
        </tr>
      </thead>
      <tbody>
        {positionItems.map(({ index, position }) => {
          const calculated = calculatePosition(position);

          return (
            <tr key={position.id}>
              <td>{index + 1}</td>
              <td>{position.description}</td>
              <td>{formatCurrency(calculated.net)}</td>
              <td>{formatPercent(calculated.taxRate)}%</td>
              <td>{formatCurrency(calculated.gross)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SelfReceiptPrintSummary({ labels, totals }) {
  return (
    <aside className="invoice-print-summary" aria-label="Eigenbelegsummen">
      <div>
        <span>{labels.net}</span>
        <strong>{formatCurrency(totals.net)}</strong>
      </div>
      {totals.taxGroups.map((group) => (
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

function SelfReceiptPrintFooter({ footerLines, visibleFooterMiddleDefinitions }) {
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
          .map((definition) => formatFooterLine(definition.field, footerLines[definition.field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
      <section>
        {['bankName', 'iban', 'bic', 'bankExtra']
          .map((field) => formatFooterLine(field, footerLines[field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
    </footer>
  );
}
