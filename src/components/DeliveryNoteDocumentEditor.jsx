import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import DeliveryNoteDocumentForm from './DeliveryNoteDocumentForm.jsx';
import A4Page from './documentBlocks/A4Page.jsx';
import DeliveryNoteTable from './documentBlocks/DeliveryNoteTable.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import TextBlock from './documentBlocks/TextBlock.jsx';
import TextBlockControls from './documentBlocks/TextBlockControls.jsx';
import { paginateMeasuredItems, takeMeasuredText } from './documentExport/MeasuredPaginator.jsx';
import {
  createDocumentDataCheckState,
  getDocumentModeHint,
} from '../utils/documentDataCheck.js';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';
import { SHOW_DOCUMENT_FORM_PANEL } from '../config/documentFeatures.js';
import { mapDeliveryNoteToDocument } from '../documentModel/additionalDocumentModel.js';
import { applyOwnDataToInvoice, hasInvoiceOwnData, removeOwnDataFromInvoice } from './masterDataPanel/mappings/ownDataToInvoice.js';
import {
  applyDeliveryAddressToDeliveryNote,
  applyPartnerToDeliveryNote,
  hasDeliveryNoteRecipientData,
  removeDeliveryAddressFromDeliveryNote,
  removePartnerFromDeliveryNote,
} from './masterDataPanel/mappings/partnerToDeliveryNote.js';
import { isCatalogItemSupportedForDeliveryNote, mapCatalogItemsToDeliveryNotePositions } from './masterDataPanel/mappings/catalogItemsToDeliveryNote.js';


const initialDeliveryNoteLabels = {
  title: 'Lieferschein',
  deliveryNoteNumber: 'Lieferscheinnummer',
  deliveryDate: 'Belegdatum',
  orderDate: 'Bestelldatum',
  internalReference: 'Interne Referenz',
  externalReference: 'Externe Referenz',
  customerReference: 'Kundenreferenz',
  position: 'Pos.',
  quantity: 'Menge',
  unit: 'Einheit',
  description: 'Beschreibung',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

const deliveryNoteContactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const deliveryNoteMetaFields = [
  {
    autoComplete: 'new-password',
    field: 'deliveryNoteNumber',
    ariaLabel: 'Lieferscheinkennung',
    name: 'carta-delivery-note-code',
    type: 'text',
  },
    { field: 'deliveryDate', ariaLabel: 'Belegdatum', type: 'date' },
  { field: 'orderDate', ariaLabel: 'Bestelldatum', type: 'date' },
  {
    autoComplete: 'new-password',
    field: 'internalReference',
    ariaLabel: 'Interne Referenz',
    name: 'carta-delivery-note-internal-reference',
    type: 'text',
  },
  {
    autoComplete: 'new-password',
    field: 'externalReference',
    ariaLabel: 'Externe Referenz',
    name: 'carta-delivery-note-external-reference',
    type: 'text',
  },
  {
    autoComplete: 'new-password',
    field: 'customerReference',
    ariaLabel: 'Kundenreferenz',
    name: 'carta-delivery-note-customer-reference',
    type: 'text',
  },
];

const deliveryNoteRecipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Händen' },
  { field: 'name', label: 'Name / Abteilung' },
];

const deliveryNoteFooterColumns = [
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

const deliveryNoteFooterLabeledFields = {
  vatId: 'vatIdLabel',
  taxNumber: 'taxNumberLabel',
  iban: 'ibanLabel',
  bic: 'bicLabel',
};

const deliveryNoteFooterDefaultLabels = {
  vatId: 'USt-IdNr.:',
  taxNumber: 'Steuernummer:',
  iban: 'IBAN:',
  bic: 'BIC:',
};

const deliveryNoteFooterLabelPrefixes = {
  vatId: ['USt-IdNr.:', 'USt-IdNr.', 'USt-ID:', 'USt-ID'],
  taxNumber: ['Steuernummer:', 'Steuernummer'],
  iban: ['IBAN:', 'IBAN'],
  bic: ['BIC:', 'BIC'],
  bankName: ['Bankname:', 'Bankname'],
};

const defaultDeliveryNoteData = {
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
    name: 'Wareneingang',
    address: {
      street: 'Kundenstraße',
      houseNumber: '8',
      postalCode: '20095',
      city: 'Hamburg',
    },
  },
  details: {
    deliveryNoteNumber: 'LFS-2026-001',
    deliveryDate: '2026-05-12',
    orderDate: '2026-05-10',
  },
  references: {
    internalReference: 'INT-1001',
    externalReference: 'EXT-4711',
    customerReference: 'K-2048',
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

const defaultDeliveryNoteTextBlocks = [
  {
    id: 'intro',
    label: 'Einleitung',
    value: 'gemäß Ihrer Bestellung liefern wir Ihnen die folgenden Positionen:',
    visible: true,
  },
  {
    id: 'closing',
    label: 'Schlusstext',
    value:
      'Bitte prüfen Sie die Lieferung nach Erhalt. Bei Rückfragen oder Abweichungen freuen wir uns über Ihre kurze Nachricht.',
    visible: true,
  },
];

const deliveryNotePrintLayout = {
  blockGap: 16,
  smallSafetyBuffer: 8,
};

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

function normalizeDeliveryNoteData(data = {}) {
  return {
    sender: {
      ...defaultDeliveryNoteData.sender,
      ...(data.sender ?? {}),
      address: { ...defaultDeliveryNoteData.sender.address, ...(data.sender?.address ?? {}) },
      contact: { ...defaultDeliveryNoteData.sender.contact, ...(data.sender?.contact ?? {}) },
    },
    recipient: {
      ...defaultDeliveryNoteData.recipient,
      ...(data.recipient ?? {}),
      address: { ...defaultDeliveryNoteData.recipient.address, ...(data.recipient?.address ?? {}) },
    },
    details: { ...defaultDeliveryNoteData.details, ...(data.details ?? {}) },
    references: { ...defaultDeliveryNoteData.references, ...(data.references ?? {}) },
    footer: {
      company: { ...defaultDeliveryNoteData.footer.company, ...(data.footer?.company ?? {}) },
      tax: { ...defaultDeliveryNoteData.footer.tax, ...(data.footer?.tax ?? {}) },
      bank: { ...defaultDeliveryNoteData.footer.bank, ...(data.footer?.bank ?? {}) },
    },
  };
}

function createDeliveryNoteViewData({ sender, recipient, details, references, footer }) {
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

function splitFooterLabelAndValue(field, value = '', fallbackLabel = deliveryNoteFooterDefaultLabels[field] ?? '') {
  const prefixes = deliveryNoteFooterLabelPrefixes[field] ?? [];
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

  Object.entries(deliveryNoteFooterLabeledFields).forEach(([field, labelField]) => {
    const hasExplicitLabel = Object.prototype.hasOwnProperty.call(lines, labelField);
    const { label, value } = splitFooterLabelAndValue(
      field,
      lines[field],
      hasExplicitLabel ? String(lines[labelField] ?? '') : deliveryNoteFooterDefaultLabels[field],
    );

    normalized[labelField] = hasExplicitLabel ? String(lines[labelField] ?? '').trim() : label;
    normalized[field] = value;
  });

  normalized.bankName = normalizeFooterValue('bankName', normalized.bankName);

  return normalized;
}

function formatFooterLine(field, value = '', footerLines = {}) {
  const normalized = String(value ?? '').trim();
  const labelField = deliveryNoteFooterLabeledFields[field];
  const label = labelField ? String(footerLines[labelField] ?? '').trim() : '';

  if (!labelField) {
    return normalized;
  }

  return [label, normalized].filter(Boolean).join(' ');
}

function parseFooterLine(field, value = '') {
  const labelField = deliveryNoteFooterLabeledFields[field];

  if (!labelField) {
    return normalizeFooterValue(field, value);
  }

  const { label, value: normalizedValue } = splitFooterLabelAndValue(field, value, '');

  return {
    [labelField]: label,
    [field]: normalizedValue,
  };
}

function createDeliveryNotePosition() {
  return {
    id: crypto.randomUUID(),
    quantity: '1',
    unit: 'Stk.',
    description: 'Artikel oder Leistung beschreiben',
    deliveryDate: '2026-05-12',
    note: 'Hinweis zur Lieferung',
  };
}

const defaultDeliveryNoteViewData = createDeliveryNoteViewData(defaultDeliveryNoteData);
const defaultDeliveryNotePositionForCheck = {
  quantity: '1',
  unit: 'Stk.',
  description: 'Artikel oder Leistung beschreiben',
};

function createFieldConfig(fields) {
  return {
    hidden: [],
    order: fields.map((field) => field.field),
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

function normalizeFieldConfig(config) {
  const fallback = {
    contact: createFieldConfig(deliveryNoteContactFields),
    details: createFieldConfig(deliveryNoteMetaFields),
    recipient: createFieldConfig(deliveryNoteRecipientOptionalFields),
    footerMiddle: createFieldConfig(deliveryNoteFooterColumns[1]),
  };

  if (!config || typeof config !== 'object') {
    return fallback;
  }

  return {
    contact: normalizeFieldConfigBlock(config.contact, fallback.contact),
    details: normalizeFieldConfigBlock(config.details, fallback.details),
    recipient: normalizeFieldConfigBlock(config.recipient, fallback.recipient),
    footerMiddle: normalizeFieldConfigBlock(config.footerMiddle, fallback.footerMiddle),
  };
}

function resizeTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function createDeliveryNotePrintItems({ positions, textBlocks }) {
  const introBlock = textBlocks.find((block) => block.id === 'intro');
  const closingBlock = textBlocks.find((block) => block.id === 'closing');

  return [
    ...(introBlock?.visible ? [{ type: 'text', id: 'intro', text: introBlock.value }] : []),
    ...positions.map((position, index) => ({
      type: 'position',
      index,
      position,
    })),
    ...(closingBlock?.visible ? [{ type: 'text', id: 'closing', text: closingBlock.value }] : []),
  ];
}

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

function createSlug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9aouess]+/gi, '-')
    .replace(/^-+|-+$/g, '');
}

function createPdfFileName(title, number) {
  const cleanTitle = createSlug(title || 'lieferschein');
  const cleanNumber = createSlug(number || new Date().toISOString().slice(0, 10));

  return `${cleanTitle || 'lieferschein'}-${cleanNumber || 'dokument'}.pdf`;
}

export default function DeliveryNoteDocumentEditor({ onMasterDataAdapterChange }) {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isDataCheckMode, setIsDataCheckMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialDeliveryNoteLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(deliveryNoteContactFields),
    details: createFieldConfig(deliveryNoteMetaFields),
    recipient: createFieldConfig(deliveryNoteRecipientOptionalFields),
    footerMiddle: createFieldConfig(deliveryNoteFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const paginatorRef = useRef(null);
  const titleTextareaRef = useRef(null);
  const textBlockRefs = useRef({});
  const dateInputRefs = useRef({});
  const [deliveryNoteData, setDeliveryNoteData] = useState(defaultDeliveryNoteData);
  const [textBlocks, setTextBlocks] = useState(defaultDeliveryNoteTextBlocks);
  const [positions, setPositions] = useState([createDeliveryNotePosition()]);
  const deliveryNoteDataRef = useRef(deliveryNoteData);
  deliveryNoteDataRef.current = deliveryNoteData;
  const deliveryNoteMasterDataAdapter = useMemo(() => ({
    applyOwnData(record) {
      setDeliveryNoteData((current) => applyOwnDataToInvoice(current, record));
    },
    hasOwnDocumentData() {
      return hasInvoiceOwnData(deliveryNoteDataRef.current);
    },
    removeOwnData() {
      setDeliveryNoteData((current) => removeOwnDataFromInvoice(current));
    },
    applyPartner(record) {
      setDeliveryNoteData((current) => applyPartnerToDeliveryNote(current, record));
    },
    hasRecipientData() {
      return hasDeliveryNoteRecipientData(deliveryNoteDataRef.current);
    },
    removePartner() {
      setDeliveryNoteData((current) => removePartnerFromDeliveryNote(current));
    },
    canManageDeliveryAddresses: true,
    applyDeliveryAddress(address) {
      setDeliveryNoteData((current) => applyDeliveryAddressToDeliveryNote(current, address));
    },
    removeDeliveryAddress(partner) {
      setDeliveryNoteData((current) => removeDeliveryAddressFromDeliveryNote(current, partner));
    },
    canAddCatalogItem(record) {
      return isCatalogItemSupportedForDeliveryNote(record);
    },
    addCatalogItems(records) {
      const newPositions = mapCatalogItemsToDeliveryNotePositions(records);
      if (newPositions === null || !newPositions.length) return { ok: false, count: 0 };
      setPositions((current) => [...current, ...newPositions]);
      return { ok: true, count: newPositions.length };
    },
  }), []);
  const initialGeneratorStateRef = useRef(null);
  const currentGeneratorState = { labels, deliveryNoteData, positions, textBlocks, fieldConfig };
  if (!initialGeneratorStateRef.current) initialGeneratorStateRef.current = structuredClone(currentGeneratorState);
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const { sender, recipient, details, footerLines } = useMemo(
    () => createDeliveryNoteViewData(deliveryNoteData),
    [deliveryNoteData],
  );

  useEffect(() => {
    onMasterDataAdapterChange?.(deliveryNoteMasterDataAdapter);

    return () => onMasterDataAdapterChange?.(null);
  }, [deliveryNoteMasterDataAdapter, onMasterDataAdapterChange]);

  useEffect(() => {
    resizeTextarea(titleTextareaRef.current);

    textBlocks.forEach((block) => {
      if (block.visible) {
        resizeTextarea(textBlockRefs.current[block.id]);
      }
    });
  }, [labels.title, textBlocks]);

  const printItems = useMemo(
    () => createDeliveryNotePrintItems({ positions, textBlocks }),
    [positions, textBlocks],
  );
  const dataCheckState = useMemo(
    () =>
      createDocumentDataCheckState({
        defaultPosition: defaultDeliveryNotePositionForCheck,
        defaultViewData: defaultDeliveryNoteViewData,
        details,
        footerLines,
        isActive: isDataCheckMode,
        positions,
        positionFields: ['quantity', 'unit', 'description'],
        recipient,
        recipientHiddenFields: fieldConfig.recipient.hidden,
        sender,
        visibleContactFields: getOrderedDefinitions('contact', deliveryNoteContactFields).filter(
          ({ field }) => !fieldConfig.contact.hidden.includes(field),
        ),
        visibleDetailFields: getOrderedDefinitions('details', deliveryNoteMetaFields).filter(
          ({ field }) => !fieldConfig.details.hidden.includes(field),
        ),
        visibleFooterMiddleFields: getOrderedDefinitions('footerMiddle', deliveryNoteFooterColumns[1]).filter(
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

  function toggleEditableMode() {
    setIsDataCheckMode(false);
    setHighlightFields((current) => !current);
  }

  function toggleDataCheckMode() {
    setHighlightFields(false);
    setIsDataCheckMode((current) => !current);
  }

  function updateSender(field, value) {
    setDeliveryNoteData((current) => {
      if (field === 'company') {
        const nextSender = { ...current.sender, companyName: value };
        return {
          ...current,
          sender: { ...nextSender, returnAddress: createReturnAddress(nextSender) },
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
          sender: { ...nextSender, returnAddress: createReturnAddress(nextSender) },
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
    setDeliveryNoteData((current) => {
      if (field === 'company') {
        return { ...current, recipient: { ...current.recipient, companyName: value } };
      }

      if (field === 'street') {
        const street = splitStreetLine(value);
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: {
              ...current.recipient.address,
              street: street.street,
              houseNumber: street.houseNumber,
            },
          },
        };
      }

      if (field === 'cityLine') {
        const city = splitCityLine(value);
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: {
              ...current.recipient.address,
              postalCode: city.postalCode,
              city: city.city,
            },
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
    setDeliveryNoteData((current) => {
      if (['internalReference', 'externalReference', 'customerReference'].includes(field)) {
        return { ...current, references: { ...current.references, [field]: value } };
      }

      return { ...current, details: { ...current.details, [field]: value } };
    });
  }

  function updateFooterLine(field, value) {
    setDeliveryNoteData((current) => {
      const patch = value && typeof value === 'object' ? value : { [field]: value };
      const footer = {
        company: { ...current.footer.company },
        tax: { ...current.footer.tax },
        bank: { ...current.footer.bank },
      };

      Object.entries(patch).forEach(([entryField, entryValue]) => {
        const normalizedValue = String(entryValue ?? '').trim();

        if (entryField === 'companyName') footer.company.companyName = normalizedValue;
        if (entryField === 'companyStreet') {
          const street = splitStreetLine(normalizedValue);
          footer.company.street = street.street;
          footer.company.houseNumber = street.houseNumber;
        }
        if (entryField === 'companyStreetName') footer.company.street = normalizedValue;
        if (entryField === 'companyHouseNumber') footer.company.houseNumber = normalizedValue;
        if (entryField === 'companyCity') {
          const city = splitCityLine(normalizedValue);
          footer.company.postalCode = city.postalCode;
          footer.company.city = city.city;
        }
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

  function addPosition() {
    setPositions((current) => [...current, createDeliveryNotePosition()]);
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
      current.map((block) => (block.id === blockId ? { ...block, visible: !block.visible } : block)),
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

  function handleNewDocument() {
    setLabels(initialDeliveryNoteLabels);
    setDeliveryNoteData(defaultDeliveryNoteData);
    setTextBlocks(defaultDeliveryNoteTextBlocks);
    setPositions([createDeliveryNotePosition()]);
    setFieldConfig({
      contact: createFieldConfig(deliveryNoteContactFields),
      details: createFieldConfig(deliveryNoteMetaFields),
      recipient: createFieldConfig(deliveryNoteRecipientOptionalFields),
      footerMiddle: createFieldConfig(deliveryNoteFooterColumns[1]),
    });
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setIsExporting(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStateRef.current = null;
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await refreshPrintPages();
      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'deliveryNote',
        filename: createPdfFileName(labels.title, details.deliveryNoteNumber),
        belege24Document: mapDeliveryNoteToDocument(currentGeneratorState),
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

  async function handleLoadPdf(file) {
    if (!(file instanceof File) || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))) {
      window.alert('Bitte wähle eine PDF-Datei aus.');
      return;
    }
    let result;
    try {
      const { importDeliveryNotePdf } = await import('../documentModel/additionalDocumentModel.js');
      result = await importDeliveryNotePdf(await file.arrayBuffer());
    } catch {
      window.alert('Die PDF konnte nicht gelesen werden.');
      return;
    }
    if (result.status !== 'valid') { window.alert(result.message); return; }
    const { confirmDeliveryNoteOverwrite } = await import('../documentModel/additionalDocumentModel.js');
    if (!confirmDeliveryNoteOverwrite(currentGeneratorState, initialGeneratorStateRef.current, () => window.confirm('Der aktuelle Lieferschein enthält Änderungen. Möchtest du ihn vollständig durch die Daten aus der PDF ersetzen?'))) return;
    const restored = result.state;
    setLabels(restored.labels);
    setDeliveryNoteData(restored.deliveryNoteData);
    setPositions(restored.positions);
    setTextBlocks(restored.textBlocks);
    setFieldConfig(restored.fieldConfig);
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStateRef.current = structuredClone(restored);
    window.alert(result.message);
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
      {SHOW_DOCUMENT_FORM_PANEL && (
        <DeliveryNoteDocumentForm
          addPosition={addPosition}
          details={deliveryNoteData.details}
          footerLines={footerLines}
          isOpen={isFormPanelOpen}
          movePosition={movePosition}
          onToggle={() => setIsFormPanelOpen((current) => !current)}
          positions={positions}
          recipient={deliveryNoteData.recipient}
          references={deliveryNoteData.references}
          removePosition={removePosition}
          sender={deliveryNoteData.sender}
          textBlocks={textBlocks}
          toggleTextBlockVisibility={toggleTextBlockVisibility}
          updateDetail={updateDetail}
          updateFooterLine={updateFooterLine}
          updatePosition={updatePosition}
          updateRecipient={updateRecipient}
          updateSender={updateSender}
          updateTextBlock={updateTextBlock}
        />
      )}

      <DocumentToolbar
        ariaLabel="Lieferschein Werkzeuge"
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

      <A4Page
        ref={sheetRef}
        ariaLabel="Editierbarer Lieferschein"
        className={`offer-sheet invoice-sheet delivery-note-sheet${isDataCheckMode ? ' is-data-check-mode' : ''}`}
        editable={highlightFields}
      >
        <SenderBlock
          contactFields={getOrderedDefinitions('contact', deliveryNoteContactFields)}
          dataCheckFields={dataCheckState.sender}
          hiddenFields={getHiddenFields('contact', deliveryNoteContactFields)}
          labels={labels}
          sender={sender}
          onLabelChange={updateLabel}
          onMoveField={(field, direction) => moveConfiguredField('contact', field, direction)}
          onSenderChange={updateSender}
          onToggleField={(field) => toggleConfiguredField('contact', field)}
        />

        <section className="invoice-address-row">
          <RecipientBlock
            dataCheckFields={{ ...dataCheckState.recipient, senderLine: dataCheckState.sender.senderLine }}
            hiddenFields={getHiddenFields('recipient', deliveryNoteRecipientOptionalFields)}
            recipient={recipient}
            senderLine={sender.senderLine}
            onRecipientChange={updateRecipient}
            onSenderLineChange={(value) => updateSender('senderLine', value)}
            onToggleField={(field) => toggleConfiguredField('recipient', field)}
          />

          <DocumentMetaBlock
            dataCheckFields={dataCheckState.details}
            dateInputRefs={dateInputRefs}
            details={{
              ...details,
              deliveryDate: details.deliveryDate,
              orderDate: details.orderDate,
              internalReference: details.internalReference,
              externalReference: details.externalReference,
              customerReference: details.customerReference,
            }}
            emphasizedField="deliveryNoteNumber"
            fields={getOrderedDefinitions('details', deliveryNoteMetaFields)}
            hiddenFields={getHiddenFields('details', deliveryNoteMetaFields)}
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

        {renderTextBlock(textBlocks.find((block) => block.id === 'intro'), 0)}

        <DeliveryNoteTable
          dataCheckPositions={dataCheckState.positions}
          labels={labels}
          onLabelChange={updateLabel}
          onMovePosition={movePosition}
          onPositionChange={updatePosition}
          onRemovePosition={removePosition}
          positions={positions}
        />

        <button className="offer-add-position" type="button" onClick={addPosition}>
          + Position hinzufügen
        </button>

        {renderTextBlock(textBlocks.find((block) => block.id === 'closing'), 1)}

        <FooterBlock
          columns={[
            deliveryNoteFooterColumns[0],
            getOrderedDefinitions('footerMiddle', deliveryNoteFooterColumns[1]),
            deliveryNoteFooterColumns[2],
          ]}
          dataCheckFields={dataCheckState.footerLines}
          footerLines={footerLines}
          formatFooterLine={(field, value) => formatFooterLine(field, value, footerLines)}
          hiddenFields={getHiddenFields('footerMiddle', deliveryNoteFooterColumns[1])}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
          parseFooterLine={parseFooterLine}
        />
      </A4Page>

      {isExportRenderActive ? (
        <>
          <MeasuredDeliveryNotePaginator
            ref={paginatorRef}
            items={printItems}
            labels={labels}
          />

          <DeliveryNotePrintPages
            ref={printPagesRef}
            details={details}
            footerLines={footerLines}
            labels={labels}
            pages={printPages}
            recipient={recipient}
            sender={sender}
            visibleContactDefinitions={getOrderedDefinitions('contact', deliveryNoteContactFields).filter(
              (definition) => !fieldConfig.contact.hidden.includes(definition.field),
            )}
            visibleDetailDefinitions={getOrderedDefinitions('details', deliveryNoteMetaFields).filter(
              (definition) => !fieldConfig.details.hidden.includes(definition.field),
            )}
            visibleRecipientFields={deliveryNoteRecipientOptionalFields.filter(
              (definition) => !fieldConfig.recipient.hidden.includes(definition.field),
            )}
            visibleFooterMiddleDefinitions={getOrderedDefinitions('footerMiddle', deliveryNoteFooterColumns[1]).filter(
              (definition) => !fieldConfig.footerMiddle.hidden.includes(definition.field),
            )}
          />
        </>
      ) : null}
    </div>
  );
}

const MeasuredDeliveryNotePaginator = forwardRef(function MeasuredDeliveryNotePaginator({ items, labels }, ref) {
  const measureRootRef = useRef(null);
  const positionItems = items.filter((item) => item.type === 'position');

  function measureNow() {
    return measureDeliveryNotePages(measureRootRef.current, items);
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
        <table className="invoice-print-position-table delivery-note-print-table">
          <thead>
            <tr data-measure-position-header>
              <th>{labels.position}</th>
              <th>{labels.quantity}</th>
              <th>{labels.unit}</th>
              <th>{labels.description}</th>
            </tr>
          </thead>
          <tbody>
            {positionItems.map(({ index, position }) => (
              <tr data-measure-position-row={String(index)} key={position.id}>
                <td>{index + 1}</td>
                <td>{position.quantity}</td>
                <td>{position.unit}</td>
                <td>{position.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

function measureDeliveryNotePages(measureRoot, items) {
  if (!measureRoot) {
    return null;
  }

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const positionHeader = measureRoot.querySelector('[data-measure-position-header]');
  const positionRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-position-row]')].map((row) => [
      row.dataset.measurePositionRow,
      getOuterHeight(row),
    ]),
  );

  if (!firstContent || !followContent || !textProbe || !positionHeader) {
    return null;
  }

  const firstPageCapacity = firstContent.getBoundingClientRect().height - deliveryNotePrintLayout.smallSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - deliveryNotePrintLayout.smallSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || deliveryNotePrintLayout.blockGap;
  const positionHeaderHeight = getOuterHeight(positionHeader);

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'text') return measureTextHeight(item.text);
    if (item.type === 'position') return positionRows.get(String(item.index)) || 0;
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

const DeliveryNotePrintPages = forwardRef(function DeliveryNotePrintPages(
  {
    details,
    footerLines,
    labels,
    pages,
    recipient,
    sender,
    visibleContactDefinitions,
    visibleDetailDefinitions,
    visibleRecipientFields,
    visibleFooterMiddleDefinitions,
  },
  ref,
) {
  const totalPages = pages.length;

  return (
    <div className="invoice-print-pages offer-print-pages delivery-note-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`invoice-print-page offer-print-page delivery-note-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <DeliveryNotePrintFirstPageHeader
              details={details}
              labels={labels}
              recipient={recipient}
              sender={sender}
              visibleContactDefinitions={visibleContactDefinitions}
              visibleDetailDefinitions={visibleDetailDefinitions}
              visibleRecipientFields={visibleRecipientFields}
            />
          ) : (
            <DeliveryNotePrintContinuationHeader companyName={sender.company} />
          )}

          <div className="invoice-print-page-content">
            <DeliveryNotePrintPageItems items={page.items} labels={labels} />
          </div>

          <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <DeliveryNotePrintFooter
            footerLines={footerLines}
            visibleFooterMiddleDefinitions={visibleFooterMiddleDefinitions}
          />
        </article>
      ))}
    </div>
  );
});

function DeliveryNotePrintFirstPageHeader({
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
        <div className="invoice-print-recipient">
          <p className="invoice-print-sender-line">{sender.senderLine}</p>
          {recipientLines
            .filter(Boolean)
            .map((line) => (
              <p key={line}>{line}</p>
            ))}
        </div>

        <div className="invoice-print-details">
          {visibleDetailDefinitions.map((definition) => (
            <DeliveryNotePrintDetailRow
              key={definition.field}
              emphasized={definition.field === 'deliveryNoteNumber'}
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

function DeliveryNotePrintContinuationHeader({ companyName }) {
  return (
    <header className="invoice-print-header invoice-print-continuation-header">
      <p className="invoice-print-company-name">{companyName}</p>
    </header>
  );
}

function DeliveryNotePrintDetailRow({ emphasized = false, label, value }) {
  return (
    <p className={emphasized ? 'is-emphasized' : undefined}>
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

function DeliveryNotePrintPageItems({ items, labels }) {
  const renderedItems = [];
  let index = 0;

  while (index < items.length) {
    const item = items[index];

    if (item.type === 'position') {
      const blockStartIndex = index;
      const positionItems = [];

      while (items[index]?.type === 'position') {
        positionItems.push(items[index]);
        index += 1;
      }

      renderedItems.push(
        <DeliveryNotePrintPositionTable
          className={items[blockStartIndex - 1]?.type === 'text' ? 'delivery-note-print-table-after-text' : undefined}
          key={`positions-${positionItems[0].index}`}
          labels={labels}
          positionItems={positionItems}
        />,
      );
      continue;
    }

    if (item.type === 'text') {
      const previousItem = items[index - 1];
      const nextItem = items[index + 1];
      const textClassName = [
        previousItem?.type === 'position' ? 'delivery-note-print-text-after-table' : '',
        nextItem?.type === 'position' ? 'delivery-note-print-text-before-table' : '',
      ]
        .filter(Boolean)
        .join(' ');

      renderedItems.push(
        <p
          className={`invoice-print-flow-text${textClassName ? ` ${textClassName}` : ''}`}
          key={`${item.id}-${index}`}
        >
          {item.text}
        </p>,
      );
    }

    index += 1;
  }

  return renderedItems;
}

function DeliveryNotePrintPositionTable({ className = '', labels, positionItems }) {
  return (
    <table className={`invoice-print-position-table delivery-note-print-table${className ? ` ${className}` : ''}`}>
      <thead>
        <tr>
          <th>{labels.position}</th>
          <th>{labels.quantity}</th>
          <th>{labels.unit}</th>
          <th>{labels.description}</th>
        </tr>
      </thead>
      <tbody>
        {positionItems.map(({ index, position }) => (
          <tr key={position.id}>
            <td>{index + 1}</td>
            <td>{position.quantity}</td>
            <td>{position.unit}</td>
            <td>{position.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DeliveryNotePrintFooter({ footerLines, visibleFooterMiddleDefinitions }) {
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

  if (first.type === 'position') {
    return (
      first.index === second.index &&
      first.position.id === second.position.id &&
      first.position.quantity === second.position.quantity &&
      first.position.unit === second.position.unit &&
      first.position.description === second.position.description &&
      first.position.deliveryDate === second.position.deliveryDate &&
      first.position.note === second.position.note
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
