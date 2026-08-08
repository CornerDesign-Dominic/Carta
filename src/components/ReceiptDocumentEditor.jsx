import { useEffect, useMemo, useRef, useState } from 'react';
import A5LandscapePage from './documentBlocks/A5LandscapePage.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import { FieldActions, HiddenFieldActions } from './documentBlocks/FieldActions.jsx';
import ReceiptDocumentForm from './ReceiptDocumentForm.jsx';
import {
  clearMasterDataOriginAtPath,
  clearMasterDataOriginsForPaths,
  createMasterDataOrigin,
  getDataCheckClassName,
  getDocumentModeHint,
  markChangedViewOrigins,
  mergeDataCheckStateWithOrigins,
} from '../utils/documentDataCheck.js';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';
import { SHOW_DOCUMENT_FORM_PANEL } from '../config/documentFeatures.js';
import { mapReceiptToDocument } from '../documentModel/additionalDocumentModel.js';
import {
  applyOwnDataToReceipt,
  hasReceiptOwnData,
  removeOwnDataFromReceipt,
} from './masterDataPanel/mappings/ownDataToReceipt.js';


const initialReceiptLabels = {
  title: 'Quittung',
  receiptId: 'Quittungsnummer',
  receiptDate: 'Belegdatum',
  paymentDate: 'Zahlungsdatum',
  internalReference: 'Interne Referenz',
  externalReference: 'Externe Referenz',
  netAmount: 'Netto Betrag',
  taxRate: 'USt.-Satz',
  taxAmount: 'USt.-Betrag',
  grossAmount: 'Brutto Gesamtbetrag',
  amountInNumbers: 'Betrag in Zahlen',
  amountInWords: 'Betrag in Worten',
  settlementMethod: 'Zahlungsart',
  from: 'von',
  purpose: 'für',
  place: 'Ort',
  placeDate: 'Ort/Datum',
  bookingNote: 'Buchungsvermerk',
  signature: 'Unterschrift',
  receiverSignature: 'Stempel/Unterschrift des Empfängers',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactWebsite: 'Website',
};

const receiptContactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const receiptMetaFields = [
  {
    autoComplete: 'new-password',
    field: 'receiptId',
    ariaLabel: 'Interne Quittungskennung',
    name: 'carta-receipt-code',
    type: 'text',
  },
  { field: 'receiptDate', ariaLabel: 'Belegdatum', type: 'date' },
  { field: 'paymentDate', ariaLabel: 'Datum des Eingangs', type: 'date' },
  {
    autoComplete: 'new-password',
    field: 'internalReference',
    ariaLabel: 'Interne Referenz',
    name: 'carta-receipt-internal-reference',
    type: 'text',
  },
  {
    autoComplete: 'new-password',
    field: 'externalReference',
    ariaLabel: 'Externe Referenz',
    name: 'carta-receipt-external-reference',
    type: 'text',
  },
];

const receiptRecipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Händen' },
  { field: 'name', label: 'Name / Abteilung' },
];

const receiptHeaderFields = [
  { field: 'company', label: 'Firma' },
  { field: 'streetLine', label: 'Straße und Hausnummer' },
  { field: 'cityLine', label: 'PLZ und Stadt' },
];

const receiptFooterColumns = [
  [
    { field: 'companyName', label: 'Firma' },
    { field: 'companyStreet', label: 'Straße und Hausnummer' },
    { field: 'companyCity', label: 'PLZ und Stadt' },
    { field: 'companyExtra', label: 'Zusatzzeile Firma' },
  ],
  [
    { field: 'vatId', label: 'USt-IdNr.' },
    { field: 'taxId', label: 'Steuernummer' },
    { field: 'representation', label: 'Vertretung' },
  ],
  [
    { field: 'bankName', label: 'Bankname' },
    { field: 'iban', label: 'IBAN' },
    { field: 'bic', label: 'BIC' },
  ],
];

const defaultReceiptData = {
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
  details: {
    receiptId: 'Q-2026-001',
    receiptDate: '2026-05-12',
    paymentDate: '2026-05-12',
    place: 'Berlin',
    from: 'Beispielkunde GmbH',
    purpose: 'Leistung oder Verwendungszweck kurz beschreiben',
    bookingNote: '',
    receiverSignature: '',
  },
  references: {
    internalReference: 'REF-1001',
    externalReference: 'AUF-4711',
  },
  amount: {
    netAmount: '100,00',
    taxRate: '19',
    taxAmount: '19,00',
    grossAmount: '119,00',
    amountInWords: 'einhundertneunzehn Euro',
    settlementMethod: 'Bar',
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
      taxIdLabel: 'Steuernummer:',
      taxId: '12/345/67890',
      representation: 'Geschäftsführer: Max Mustermann',
    },
    bank: {
      bankName: 'Musterbank',
      ibanLabel: 'IBAN:',
      iban: 'DE00 0000 0000 0000 0000 00',
      bicLabel: 'BIC:',
      bic: 'COBADEFFXXX',
    },
  },
};

const emptyReceiptData = {
  sender: {
    companyName: '',
    address: { street: '', houseNumber: '', postalCode: '', city: '' },
    returnAddress: '',
    contact: { email: '', phone: '', website: '' },
  },
  recipient: {
    companyName: '',
    attention: '',
    name: '',
    address: { street: '', houseNumber: '', postalCode: '', city: '' },
  },
  details: {
    receiptId: '',
    receiptDate: '',
    paymentDate: '',
    place: '',
    from: '',
    purpose: '',
    bookingNote: '',
    receiverSignature: '',
  },
  references: {
    internalReference: '',
    externalReference: '',
  },
  amount: {
    netAmount: '',
    taxRate: '0',
    taxAmount: '',
    grossAmount: '',
    amountInWords: '',
    settlementMethod: '',
  },
  footer: {
    company: { companyName: '', street: '', houseNumber: '', postalCode: '', city: '', extra: '' },
    tax: { vatIdLabel: '', vatId: '', taxIdLabel: '', taxId: '', representation: '' },
    bank: { bankName: '', ibanLabel: '', iban: '', bicLabel: '', bic: '' },
  },
};

const defaultReceiptTextBlocks = [
  {
    id: 'receiptText',
    label: 'Quittungstext',
    value: '',
    visible: true,
  },
  {
    id: 'purpose',
    label: 'Verwendungszweck / Leistung',
    value: '',
    visible: true,
  },
];

const receiptTextDefaults = {
  receiptText: 'Hiermit bestätigen wir den Erhalt des unten genannten Betrags.',
  purpose: 'Leistung oder Verwendungszweck kurz beschreiben.',
};

function createFieldConfig(fields) {
  return {
    hidden: [],
    order: fields.map((field) => field.field),
  };
}

function normalizeFieldConfig(config) {
  const fallback = {
    contact: createFieldConfig(receiptContactFields),
    details: createFieldConfig(receiptMetaFields),
    header: createFieldConfig(receiptHeaderFields),
    recipient: createFieldConfig(receiptRecipientOptionalFields),
    footerMiddle: createFieldConfig(receiptFooterColumns[1]),
  };

  if (!config || typeof config !== 'object') {
    return fallback;
  }

  return {
    contact: normalizeFieldConfigBlock(config.contact, fallback.contact),
    details: normalizeFieldConfigBlock(config.details, fallback.details),
    header: normalizeFieldConfigBlock(config.header, fallback.header),
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

function viewValue(value) {
  return value ?? '';
}

function joinLine(...parts) {
  return parts.map((part) => String(part ?? '').trim()).filter(Boolean).join(' ');
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

function createReturnAddress(sender) {
  return [
    sender.companyName,
    joinLine(sender.address.street, sender.address.houseNumber),
    joinLine(sender.address.postalCode, sender.address.city),
  ]
    .filter(Boolean)
    .join(' - ');
}

function mergeWithDefaults(data = {}) {
  return {
    sender: {
      ...emptyReceiptData.sender,
      ...(data.sender ?? {}),
      address: { ...emptyReceiptData.sender.address, ...(data.sender?.address ?? {}) },
      contact: { ...emptyReceiptData.sender.contact, ...(data.sender?.contact ?? {}) },
    },
    recipient: {
      ...emptyReceiptData.recipient,
      ...(data.recipient ?? {}),
      address: { ...emptyReceiptData.recipient.address, ...(data.recipient?.address ?? {}) },
    },
    details: { ...emptyReceiptData.details, ...(data.details ?? {}) },
    references: { ...emptyReceiptData.references, ...(data.references ?? {}) },
    amount: { ...emptyReceiptData.amount, ...(data.amount ?? {}) },
    footer: {
      company: { ...emptyReceiptData.footer.company, ...(data.footer?.company ?? {}) },
      tax: { ...emptyReceiptData.footer.tax, ...(data.footer?.tax ?? {}) },
      bank: { ...emptyReceiptData.footer.bank, ...(data.footer?.bank ?? {}) },
    },
  };
}

function createViewData(data) {
  const senderData = data.sender;
  const recipientData = data.recipient;
  const footerData = data.footer;

  return {
    sender: {
      company: viewValue(senderData.companyName),
      senderLine: viewValue(senderData.returnAddress),
      streetLine: joinLine(senderData.address.street, senderData.address.houseNumber),
      cityLine: joinLine(senderData.address.postalCode, senderData.address.city),
      email: viewValue(senderData.contact.email),
      phone: viewValue(senderData.contact.phone),
      website: viewValue(senderData.contact.website),
    },
    recipient: {
      company: viewValue(recipientData.companyName),
      attention: viewValue(recipientData.attention),
      name: viewValue(recipientData.name),
      street: joinLine(recipientData.address.street, recipientData.address.houseNumber),
      cityLine: joinLine(recipientData.address.postalCode, recipientData.address.city),
    },
    details: {
      receiptId: viewValue(data.details.receiptId),
      receiptDate: viewValue(data.details.receiptDate),
      paymentDate: viewValue(data.details.paymentDate),
      place: viewValue(data.details.place),
      from: viewValue(data.details.from),
      purpose: viewValue(data.details.purpose),
      bookingNote: viewValue(data.details.bookingNote),
      receiverSignature: viewValue(data.details.receiverSignature),
      internalReference: viewValue(data.references.internalReference),
      externalReference: viewValue(data.references.externalReference),
    },
    amount: {
      netAmount: viewValue(data.amount.netAmount),
      taxRate: viewValue(data.amount.taxRate),
      taxAmount: viewValue(data.amount.taxAmount),
      grossAmount: viewValue(data.amount.grossAmount)
        || calculateReceiptGrossAmount({
          netAmount: data.amount.netAmount,
          taxRate: data.amount.taxRate,
          taxAmount: data.amount.taxAmount,
          grossAmount: data.amount.grossAmount,
        }),
      amountInWords: viewValue(data.amount.amountInWords),
      settlementMethod: viewValue(data.amount.settlementMethod),
    },
    footerLines: {
      companyName: viewValue(footerData.company.companyName),
      companyStreet: joinLine(footerData.company.street, footerData.company.houseNumber),
      companyCity: joinLine(footerData.company.postalCode, footerData.company.city),
      companyExtra: viewValue(footerData.company.extra),
      vatId: viewValue(footerData.tax.vatId),
      taxId: viewValue(footerData.tax.taxId),
      representation: viewValue(footerData.tax.representation),
      bankName: viewValue(footerData.bank.bankName),
      iban: viewValue(footerData.bank.iban),
      bic: viewValue(footerData.bank.bic),
    },
  };
}

const defaultReceiptViewData = createViewData(defaultReceiptData);
const receiptOwnDataOriginViewPaths = [
  ['sender', 'company'],
  ['sender', 'senderLine'],
  ['sender', 'streetLine'],
  ['sender', 'cityLine'],
  ['sender', 'email'],
  ['sender', 'phone'],
  ['sender', 'website'],
  ['footerLines', 'companyName'],
  ['footerLines', 'companyStreet'],
  ['footerLines', 'companyCity'],
  ['footerLines', 'companyExtra'],
  ['footerLines', 'vatId'],
  ['footerLines', 'taxId'],
  ['footerLines', 'representation'],
  ['footerLines', 'bankName'],
  ['footerLines', 'iban'],
  ['footerLines', 'bic'],
];

function usesReceiptExampleValue(value, defaultValue) {
  const current = String(value ?? '').trim();
  const expected = String(defaultValue ?? '').trim();

  return current !== '' && expected !== '' && current === expected;
}

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

function joinPlaceDate(place, date) {
  return [String(place ?? '').trim(), formatGermanDate(date)].filter(Boolean).join(', ');
}

function parseReceiptAmount(value) {
  if (value === undefined || value === null) return null;
  const normalized = String(value)
    .trim()
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  if (!normalized) return null;
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatReceiptAmount(value) {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function receiptNumberToGermanWords(value, standaloneOne = true) {
  const smallNumbers = [
    'null',
    standaloneOne ? 'eins' : 'ein',
    'zwei',
    'drei',
    'vier',
    'fünf',
    'sechs',
    'sieben',
    'acht',
    'neun',
    'zehn',
    'elf',
    'zwölf',
    'dreizehn',
    'vierzehn',
    'fünfzehn',
    'sechzehn',
    'siebzehn',
    'achtzehn',
    'neunzehn',
  ];
  const tens = {
    20: 'zwanzig',
    30: 'dreißig',
    40: 'vierzig',
    50: 'fünfzig',
    60: 'sechzig',
    70: 'siebzig',
    80: 'achtzig',
    90: 'neunzig',
  };

  if (value < 20) {
    return smallNumbers[value];
  }

  if (value < 100) {
    const unit = value % 10;
    const ten = value - unit;
    return unit === 0 ? tens[ten] : `${receiptNumberToGermanWords(unit, false)}und${tens[ten]}`;
  }

  if (value < 1000) {
    const hundred = Math.floor(value / 100);
    const remainder = value % 100;
    const prefix = `${receiptNumberToGermanWords(hundred, false)}hundert`;
    return remainder === 0 ? prefix : `${prefix}${receiptNumberToGermanWords(remainder)}`;
  }

  if (value < 1000000) {
    const thousand = Math.floor(value / 1000);
    const remainder = value % 1000;
    const prefix = `${receiptNumberToGermanWords(thousand, false)}tausend`;
    return remainder === 0 ? prefix : `${prefix}${receiptNumberToGermanWords(remainder)}`;
  }

  const million = Math.floor(value / 1000000);
  const remainder = value % 1000000;
  const prefix = million === 1
    ? 'eine Million'
    : `${receiptNumberToGermanWords(million)} Millionen`;
  return remainder === 0 ? prefix : `${prefix} ${receiptNumberToGermanWords(remainder)}`;
}

function formatReceiptAmountInWords(value) {
  const amount = parseReceiptAmount(value);

  if (amount === null || amount < 0) {
    return '';
  }

  const totalCents = Math.round(amount * 100);
  const euros = Math.floor(totalCents / 100);
  const cents = totalCents % 100;
  const euroText = euros === 1
    ? 'ein Euro'
    : `${receiptNumberToGermanWords(euros)} Euro`;
  const centText = cents === 1
    ? 'ein Cent'
    : `${receiptNumberToGermanWords(cents)} Cent`;

  return `${euroText} und ${centText}`;
}

function calculateReceiptGrossAmount(amount) {
  const netAmount = parseReceiptAmount(amount.netAmount);

  if (netAmount === null) {
    return '';
  }

  const taxAmount = parseReceiptAmount(amount.taxAmount);
  if (taxAmount !== null) {
    return formatReceiptAmount(netAmount + taxAmount);
  }

  const taxRate = parseReceiptAmount(amount.taxRate);
  if (taxRate !== null) {
    return formatReceiptAmount(netAmount + netAmount * (taxRate / 100));
  }

  return '';
}

function calculateReceiptAmounts(amount, sourceField = 'netAmount') {
  const netAmount = parseReceiptAmount(amount.netAmount);
  const grossAmount = parseReceiptAmount(amount.grossAmount);
  const taxRate = String(amount.taxRate ?? '').trim() === '' ? 0 : parseReceiptAmount(amount.taxRate);

  if (taxRate === null) {
    return {
      ...amount,
      taxAmount: '',
      [sourceField === 'grossAmount' ? 'netAmount' : 'grossAmount']: '',
    };
  }

  const taxFactor = 1 + taxRate / 100;

  if (sourceField === 'grossAmount') {
    if (grossAmount === null || taxFactor === 0) {
      return {
        ...amount,
        netAmount: '',
        taxAmount: '',
      };
    }

    const calculatedNet = grossAmount / taxFactor;

    return {
      ...amount,
      netAmount: formatReceiptAmount(calculatedNet),
      taxAmount: formatReceiptAmount(grossAmount - calculatedNet),
    };
  }

  if (netAmount === null) {
    return {
      ...amount,
      taxAmount: '',
      grossAmount: '',
    };
  }

  const calculatedTax = netAmount * (taxRate / 100);

  return {
    ...amount,
    taxAmount: formatReceiptAmount(calculatedTax),
    grossAmount: formatReceiptAmount(netAmount + calculatedTax),
  };
}

function limitReceiptTaxRate(value) {
  const parsed = parseReceiptAmount(value);

  if (parsed === null || parsed < 1000) {
    return value;
  }

  return '999';
}

function createPdfFileName(title, receiptId) {
  const baseTitle = String(title || 'quittung')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  const baseId = String(receiptId || new Date().toISOString().slice(0, 10))
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return `${baseTitle || 'quittung'}-${baseId || 'dokument'}.pdf`;
}

function ReceiptHeaderAddress({
  dataCheckFields = {},
  hiddenFields = [],
  onSenderChange,
  onToggleField,
  sender,
}) {
  const rows = [
    {
      className: 'editable-group',
      field: 'company',
      label: 'Firma',
      value: sender.company,
      onChange: (value) => onSenderChange('company', value),
      ariaLabel: 'Aussteller Firmenname',
    },
    {
      field: 'streetLine',
      label: 'Straße und Hausnummer',
      value: sender.streetLine,
      onChange: (value) => onSenderChange('address', splitStreetLine(value)),
      ariaLabel: 'Aussteller Straße und Hausnummer',
    },
    {
      field: 'cityLine',
      label: 'PLZ und Stadt',
      value: sender.cityLine,
      onChange: (value) => onSenderChange('address', splitCityLine(value)),
      ariaLabel: 'Aussteller PLZ und Stadt',
    },
  ];

  return (
    <div className="receipt-header-address">
      {rows
        .filter(({ field }) => !hiddenFields.includes(field))
        .map(({ ariaLabel, className = '', field, label, onChange, value }) => (
          <div className={`receipt-header-row${className ? ` ${className}` : ''}`} key={field}>
            <input
              className={getDataCheckClassName(dataCheckFields[field])}
              aria-label={ariaLabel}
              value={value}
              onChange={(event) => onChange(event.target.value)}
            />
            {onToggleField && <FieldActions label={label} onToggle={() => onToggleField(field)} />}
          </div>
        ))}
      {onToggleField && (
        <HiddenFieldActions
          className="receipt-header-hidden-fields"
          definitions={receiptHeaderFields}
          hiddenFields={hiddenFields}
          onToggle={onToggleField}
        />
      )}
    </div>
  );
}

function ReceiptLineField({ dataCheck = false, label, onLabelChange, value, onChange, valueClassName = '' }) {
  return (
    <label className="receipt-line-field">
      <input
        className="document-label-input receipt-line-label"
        aria-label={`Beschriftung ${label}`}
        value={label}
        onChange={(event) => onLabelChange(event.target.value)}
      />
      <input
        className={getDataCheckClassName(dataCheck, ['receipt-line-value', valueClassName].filter(Boolean).join(' '))}
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default function ReceiptDocumentEditor({ onMasterDataAdapterChange }) {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isDataCheckMode, setIsDataCheckMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialReceiptLabels);
  const [receiptData, setReceiptData] = useState(emptyReceiptData);
  const [masterDataFieldOrigins, setMasterDataFieldOrigins] = useState({});
  const [amountCalculationSource, setAmountCalculationSource] = useState('netAmount');
  const [textBlocks, setTextBlocks] = useState(defaultReceiptTextBlocks);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(receiptContactFields),
    details: createFieldConfig(receiptMetaFields),
    header: createFieldConfig(receiptHeaderFields),
    recipient: createFieldConfig(receiptRecipientOptionalFields),
    footerMiddle: createFieldConfig(receiptFooterColumns[1]),
  });
  const receiptDataRef = useRef(receiptData);
  receiptDataRef.current = receiptData;
  const receiptMasterDataAdapter = useMemo(() => ({
    applyOwnData(record) {
      const origin = createMasterDataOrigin(record, 'ownData');
      setReceiptData((current) => {
        const next = applyOwnDataToReceipt(current, record);
        setMasterDataFieldOrigins((origins) =>
          markChangedViewOrigins(origins, createViewData(current), createViewData(next), origin, receiptOwnDataOriginViewPaths),
        );
        return next;
      });
    },
    hasOwnDocumentData() {
      return hasReceiptOwnData(receiptDataRef.current);
    },
    removeOwnData() {
      setReceiptData((current) => removeOwnDataFromReceipt(current));
      setMasterDataFieldOrigins((origins) => clearMasterDataOriginsForPaths(origins, receiptOwnDataOriginViewPaths));
    },
  }), []);
  const initialGeneratorStateRef = useRef(null);
  const currentGeneratorState = { labels, receiptData, amountCalculationSource, textBlocks, fieldConfig };
  if (!initialGeneratorStateRef.current) initialGeneratorStateRef.current = structuredClone(currentGeneratorState);
  const sheetRef = useRef(null);
  const dateInputRefs = useRef({});
  const { sender, details, amount } = useMemo(
    () => createViewData(receiptData),
    [receiptData],
  );

  useEffect(() => {
    onMasterDataAdapterChange?.(receiptMasterDataAdapter);

    return () => onMasterDataAdapterChange?.(null);
  }, [onMasterDataAdapterChange, receiptMasterDataAdapter]);
  const formAmount = useMemo(
    () => ({ ...receiptData.amount, grossAmount: amount.grossAmount }),
    [amount.grossAmount, receiptData.amount],
  );
  const dataCheckState = useMemo(() => {
    if (!isDataCheckMode) {
      return { amount: {}, details: {}, sender: {} };
    }

    return mergeDataCheckStateWithOrigins({
      amount: {
        netAmount: usesReceiptExampleValue(amount.netAmount, defaultReceiptViewData.amount.netAmount),
        taxRate: usesReceiptExampleValue(amount.taxRate, defaultReceiptViewData.amount.taxRate),
        amountInWords: usesReceiptExampleValue(amount.amountInWords, defaultReceiptViewData.amount.amountInWords),
      },
      details: {
        from: usesReceiptExampleValue(details.from, defaultReceiptViewData.details.from),
        placeDate: usesReceiptExampleValue(
          joinPlaceDate(details.place, details.receiptDate),
          joinPlaceDate(defaultReceiptViewData.details.place, defaultReceiptViewData.details.receiptDate),
        ),
        purpose: usesReceiptExampleValue(details.purpose, defaultReceiptViewData.details.purpose),
        receiptDate: usesReceiptExampleValue(details.receiptDate, defaultReceiptViewData.details.receiptDate),
        receiptId: usesReceiptExampleValue(details.receiptId, defaultReceiptViewData.details.receiptId),
        receiverSignature: usesReceiptExampleValue(
          details.receiverSignature,
          defaultReceiptViewData.details.receiverSignature,
        ),
      },
      sender: {
        cityLine: usesReceiptExampleValue(sender.cityLine, defaultReceiptViewData.sender.cityLine),
        company: usesReceiptExampleValue(sender.company, defaultReceiptViewData.sender.company),
        streetLine: usesReceiptExampleValue(sender.streetLine, defaultReceiptViewData.sender.streetLine),
      },
    }, masterDataFieldOrigins, isDataCheckMode);
  }, [amount, details, isDataCheckMode, masterDataFieldOrigins, sender]);
  const viewModeHint = getDocumentModeHint({ isDataCheckMode, isEditable: highlightFields });

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

  function openDatePicker(field) {
    const dateInput = dateInputRefs.current[field];
    dateInput?.showPicker?.();
    dateInput?.focus();
  }

  function updateSender(field, value) {
    const originPathsByField = {
      company: [['sender', 'company'], ['footerLines', 'companyName']],
      senderLine: [['sender', 'senderLine']],
      address: [
        ['sender', 'senderLine'],
        ['sender', 'streetLine'],
        ['sender', 'cityLine'],
        ['footerLines', 'companyStreet'],
        ['footerLines', 'companyCity'],
      ],
    };
    const originPaths = originPathsByField[field] ?? [['sender', field]];
    setMasterDataFieldOrigins((origins) => clearMasterDataOriginsForPaths(origins, originPaths));
    setReceiptData((current) => {
      if (field === 'company') {
        const nextSender = { ...current.sender, companyName: value };
        return {
          ...current,
          sender: {
            ...nextSender,
            returnAddress: createReturnAddress(nextSender),
          },
        };
      }

      if (field === 'senderLine') {
        return { ...current, sender: { ...current.sender, returnAddress: value } };
      }

      if (field === 'address') {
        const nextSender = {
          ...current.sender,
          address: { ...current.sender.address, ...value },
        };

        return {
          ...current,
          sender: {
            ...nextSender,
            returnAddress: createReturnAddress(nextSender),
          },
        };
      }

      return {
        ...current,
        sender: {
          ...current.sender,
          contact: { ...current.sender.contact, [field]: value },
        },
      };
    });
  }

  function updateRecipient(field, value) {
    setReceiptData((current) => {
      if (field === 'company') {
        return { ...current, recipient: { ...current.recipient, companyName: value } };
      }

      if (field === 'street') {
        const street = splitStreetLine(value);
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: { ...current.recipient.address, ...street },
          },
        };
      }

      if (field === 'cityLine') {
        const city = splitCityLine(value);
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: { ...current.recipient.address, ...city },
          },
        };
      }

      if (field === 'address') {
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: { ...current.recipient.address, ...value },
          },
        };
      }

      return { ...current, recipient: { ...current.recipient, [field]: value } };
    });
  }

  function updateDetail(field, value) {
    setReceiptData((current) => {
      if (field === 'internalReference' || field === 'externalReference') {
        return {
          ...current,
          references: { ...current.references, [field]: value },
        };
      }

      return {
        ...current,
        details: { ...current.details, [field]: value },
      };
    });
  }

  function updateAmount(field, value) {
    const nextSource = field === 'grossAmount' ? 'grossAmount' : field === 'netAmount' ? 'netAmount' : amountCalculationSource;

    if (field === 'grossAmount' || field === 'netAmount') {
      setAmountCalculationSource(field);
    }

    setReceiptData((current) => {
      const nextValue = field === 'taxRate' ? limitReceiptTaxRate(value) : value;
      const nextAmount = { ...current.amount, [field]: nextValue };

      if (field === 'netAmount' || field === 'grossAmount' || field === 'taxRate') {
        const calculatedAmount = calculateReceiptAmounts(nextAmount, nextSource);
        return {
          ...current,
          amount: {
            ...calculatedAmount,
            amountInWords: formatReceiptAmountInWords(calculatedAmount.grossAmount),
          },
        };
      }

      return {
        ...current,
        amount: nextAmount,
      };
    });
  }

  function formatAmountField(field) {
    setReceiptData((current) => {
      const currentValue = current.amount[field];
      const parsedValue = parseReceiptAmount(currentValue);

      if (parsedValue === null) {
        return current;
      }

      const sourceField = field === 'grossAmount' ? 'grossAmount' : 'netAmount';
      const nextAmount = {
        ...current.amount,
        [field]: formatReceiptAmount(parsedValue),
      };
      const calculatedAmount = calculateReceiptAmounts(nextAmount, sourceField);

      return {
        ...current,
        amount: {
          ...calculatedAmount,
          amountInWords: formatReceiptAmountInWords(calculatedAmount.grossAmount),
        },
      };
    });
  }

  function updateFooterLabel(field, value) {
    setReceiptData((current) => {
      if (field === 'vatIdLabel' || field === 'taxIdLabel') {
        return {
          ...current,
          footer: {
            ...current.footer,
            tax: { ...current.footer.tax, [field]: value },
          },
        };
      }

      return {
        ...current,
        footer: {
          ...current.footer,
          bank: { ...current.footer.bank, [field]: value },
        },
      };
    });
  }

  function updateFooterLine(field, value) {
    setMasterDataFieldOrigins((origins) => clearMasterDataOriginAtPath(origins, ['footerLines', field]));
    setReceiptData((current) => {
      const footer = {
        company: { ...current.footer.company },
        tax: { ...current.footer.tax },
        bank: { ...current.footer.bank },
      };

      if (field === 'companyName') footer.company.companyName = value;
      if (field === 'companyStreet') {
        const street = splitStreetLine(value);
        footer.company.street = street.street;
        footer.company.houseNumber = street.houseNumber;
      }
      if (field === 'companyCity') {
        const city = splitCityLine(value);
        footer.company.postalCode = city.postalCode;
        footer.company.city = city.city;
      }
      if (field === 'companyExtra') footer.company.extra = value;
      if (field === 'vatId') footer.tax.vatId = value;
      if (field === 'taxId') footer.tax.taxId = value;
      if (field === 'representation') footer.tax.representation = value;
      if (field === 'bankName') footer.bank.bankName = value;
      if (field === 'iban') footer.bank.iban = value;
      if (field === 'bic') footer.bank.bic = value;

      return { ...current, footer };
    });
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
        [block]: { ...current[block], hidden },
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
        [block]: { ...current[block], order },
      };
    });
  }

  function handleNewDocument() {
    setLabels(initialReceiptLabels);
    setReceiptData(emptyReceiptData);
    setAmountCalculationSource('netAmount');
    setTextBlocks(defaultReceiptTextBlocks);
    setFieldConfig({
      contact: createFieldConfig(receiptContactFields),
      details: createFieldConfig(receiptMetaFields),
      header: createFieldConfig(receiptHeaderFields),
      recipient: createFieldConfig(receiptRecipientOptionalFields),
      footerMiddle: createFieldConfig(receiptFooterColumns[1]),
    });
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExporting(false);
    setMasterDataFieldOrigins({});
    initialGeneratorStateRef.current = null;
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await requestPdfDownload({
        sheet: sheetRef.current,
        documentType: 'receipt',
        filename: createPdfFileName(labels.title, details.receiptId),
        belege24Document: mapReceiptToDocument(currentGeneratorState),
      });
    } catch (error) {
      window.alert(
        `PDF konnte nicht erstellt werden. Prüfe bitte, ob die Vercel Function lokal oder auf Vercel verfügbar ist.\n\n${error.message}`,
      );
    } finally {
      setIsExporting(false);
    }
  }

  async function handleLoadPdf(file) {
    if (!(file instanceof File) || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))) {
      window.alert('Bitte wähle eine PDF-Datei aus.');
      return;
    }
    let result;
    try {
      const { importReceiptPdf } = await import('../documentModel/additionalDocumentModel.js');
      result = await importReceiptPdf(await file.arrayBuffer());
    } catch {
      window.alert('Die PDF konnte nicht gelesen werden.');
      return;
    }
    if (result.status !== 'valid') { window.alert(result.message); return; }
    const { confirmReceiptOverwrite } = await import('../documentModel/additionalDocumentModel.js');
    if (!confirmReceiptOverwrite(currentGeneratorState, initialGeneratorStateRef.current, () => window.confirm('Die aktuelle Quittung enthält Änderungen. Möchtest du sie vollständig durch die Daten aus der PDF ersetzen?'))) return;
    const restored = result.state;
    setLabels(restored.labels);
    setReceiptData(restored.receiptData);
    setAmountCalculationSource(restored.amountCalculationSource);
    setTextBlocks(restored.textBlocks);
    setFieldConfig(restored.fieldConfig);
    setMasterDataFieldOrigins({});
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    initialGeneratorStateRef.current = structuredClone(restored);
    window.alert(result.message);
  }

  function handlePrint() {
    document.body.classList.add('document-print-mode', 'receipt-print-mode');
    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode', 'receipt-print-mode');
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  return (
    <div className="visual-editor invoice-visual-editor receipt-visual-editor">
      {SHOW_DOCUMENT_FORM_PANEL && (
        <ReceiptDocumentForm
          amount={formAmount}
          defaults={{ ...defaultReceiptData, textBlocks: receiptTextDefaults }}
          details={{ ...receiptData.details, ...receiptData.references }}
          isOpen={isFormPanelOpen}
          formatAmountField={formatAmountField}
          onToggle={() => setIsFormPanelOpen((current) => !current)}
          sender={receiptData.sender}
          updateAmount={updateAmount}
          updateDetail={updateDetail}
          updateSender={updateSender}
        />
      )}

      <DocumentToolbar
        ariaLabel="Quittung Werkzeuge"
        isDataCheckActive={isDataCheckMode}
        isEditable={highlightFields}
        isExporting={isExporting}
        onCreatePdf={handleCreatePdf}
        onLoadPdf={handleLoadPdf}
        onNewDocument={handleNewDocument}
        onPrint={handlePrint}
        onToggleDataCheck={toggleDataCheckMode}
        onToggleEditable={toggleEditableMode}
      />

      <p className="document-mode-hint">{viewModeHint}</p>

      <A5LandscapePage
        ref={sheetRef}
        ariaLabel="Editierbare Quittung"
        className={`receipt-sheet${isDataCheckMode ? ' is-data-check-mode' : ''}`}
        editable={highlightFields}
      >
        <header className="receipt-header">
          <ReceiptHeaderAddress
            dataCheckFields={dataCheckState.sender}
            hiddenFields={getHiddenFields('header', receiptHeaderFields)}
            onSenderChange={updateSender}
            onToggleField={(field) => toggleConfiguredField('header', field)}
            sender={sender}
          />
          <div className="receipt-header-summary">
            <h2 className="invoice-document-title receipt-document-title">
              <input
                className="document-label-input document-title-label"
                aria-label="Dokumenttitel"
                value={labels.title}
                onChange={(event) => updateLabel('title', event.target.value)}
              />
            </h2>
            <section className="receipt-amount-box" aria-label="Betragsdarstellung">
              <label>
                <span className="document-label-input receipt-fixed-amount-label">{labels.netAmount}</span>
                <input
                  className={getDataCheckClassName(dataCheckState.amount.netAmount)}
                  aria-label={labels.netAmount}
                  value={amount.netAmount}
                  onChange={(event) => updateAmount('netAmount', event.target.value)}
                  onBlur={() => formatAmountField('netAmount')}
                />
                <span className="receipt-amount-unit" aria-hidden="true">
                  {'\u20ac'}
                </span>
              </label>
              <label className="receipt-tax-line">
                <span className="document-label-input receipt-fixed-amount-label">{labels.taxRate}</span>
                <select
                  className={getDataCheckClassName(dataCheckState.amount.taxRate)}
                  aria-label={labels.taxRate}
                  value={amount.taxRate}
                  onChange={(event) => updateAmount('taxRate', event.target.value)}
                >
                  <option value="0">0</option>
                  <option value="7">7</option>
                  <option value="19">19</option>
                </select>
                <span className="receipt-amount-unit" aria-hidden="true">
                  %
                </span>
              </label>
              <label>
                <span className="document-label-input receipt-fixed-amount-label">{labels.taxAmount}</span>
                <input
                  className="receipt-readonly-amount"
                  aria-label={labels.taxAmount}
                  value={amount.taxAmount}
                  readOnly
                />
                <span className="receipt-amount-unit" aria-hidden="true">
                  {'\u20ac'}
                </span>
              </label>
              <label className="is-emphasized">
                <span className="document-label-input receipt-fixed-amount-label">{labels.grossAmount}</span>
                <input
                  className={getDataCheckClassName(dataCheckState.amount.grossAmount)}
                  aria-label={labels.grossAmount}
                  value={amount.grossAmount}
                  onChange={(event) => updateAmount('grossAmount', event.target.value)}
                  onBlur={() => formatAmountField('grossAmount')}
                />
                <span className="receipt-amount-unit" aria-hidden="true">
                  {'\u20ac'}
                </span>
              </label>
            </section>
          </div>
        </header>

        <section className="receipt-lines" aria-label="Quittungsangaben">
          <ReceiptLineField
            dataCheck={dataCheckState.details.receiptId}
            label={labels.receiptId}
            onLabelChange={(value) => updateLabel('receiptId', value)}
            value={details.receiptId}
            onChange={(value) => updateDetail('receiptId', value)}
          />
          <ReceiptLineField
            dataCheck={dataCheckState.amount.amountInWords}
            label={labels.amountInWords}
            onLabelChange={(value) => updateLabel('amountInWords', value)}
            value={amount.amountInWords}
            onChange={(value) => updateAmount('amountInWords', value)}
          />
          <ReceiptLineField
            dataCheck={dataCheckState.details.from}
            label={labels.from}
            onLabelChange={(value) => updateLabel('from', value)}
            value={details.from}
            onChange={(value) => updateDetail('from', value)}
          />
          <ReceiptLineField
            dataCheck={dataCheckState.details.purpose}
            label={labels.purpose}
            onLabelChange={(value) => updateLabel('purpose', value)}
            value={details.purpose}
            onChange={(value) => updateDetail('purpose', value)}
          />
          <label className="receipt-line-field receipt-place-date-line">
            <input
              className="document-label-input receipt-line-label"
              aria-label={`Beschriftung ${labels.placeDate}`}
              value={labels.placeDate}
              onChange={(event) => updateLabel('placeDate', event.target.value)}
            />
            <span className="receipt-place-date-fields">
              <input
                className={getDataCheckClassName(dataCheckState.details.placeDate, 'receipt-line-value receipt-place-input')}
                aria-label="Ort"
                value={details.place}
                onChange={(event) => updateDetail('place', event.target.value)}
              />
              <span className={getDataCheckClassName(dataCheckState.details.placeDate, 'receipt-date-field')}>
                <input
                  className={getDataCheckClassName(dataCheckState.details.receiptDate, 'receipt-line-value receipt-date-display-input')}
                  aria-hidden="true"
                  readOnly
                  tabIndex="-1"
                  value={formatGermanDate(details.receiptDate)}
                />
                <input
                  ref={(element) => {
                    dateInputRefs.current.receiptDate = element;
                  }}
                  className="receipt-date-native-input"
                  aria-label="Datum"
                  type="date"
                  value={details.receiptDate}
                  onChange={(event) => updateDetail('receiptDate', event.target.value)}
                />
                <button
                  className="invoice-icon-action invoice-date-picker"
                  type="button"
                  aria-label="Datum auswählen"
                  onClick={() => openDatePicker('receiptDate')}
                >
                  <span aria-hidden="true" />
                </button>
              </span>
            </span>
          </label>
        </section>

        <section className="receipt-bottom-row" aria-label="Abschluss der Quittung">
          <label className="receipt-bottom-field receipt-booking-note">
            <input
              className="document-label-input"
              aria-label="Beschriftung Buchungsvermerk"
              value={labels.bookingNote}
              onChange={(event) => updateLabel('bookingNote', event.target.value)}
            />
            <textarea
              aria-label={labels.bookingNote}
              value={details.bookingNote}
              onChange={(event) => updateDetail('bookingNote', event.target.value)}
            />
          </label>
          <label className="receipt-bottom-field receipt-receiver-signature">
            <input
              className="document-label-input"
              aria-label="Beschriftung Empfänger-Unterschrift"
              value={labels.receiverSignature}
              onChange={(event) => updateLabel('receiverSignature', event.target.value)}
            />
            <textarea
              className={getDataCheckClassName(dataCheckState.details.receiverSignature)}
              aria-label={labels.receiverSignature}
              value={details.receiverSignature}
              onChange={(event) => updateDetail('receiverSignature', event.target.value)}
            />
          </label>
        </section>

      </A5LandscapePage>
    </div>
  );
}
