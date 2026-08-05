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
import CreditNoteDocumentForm from './CreditNoteDocumentForm.jsx';
import { paginateMeasuredItems, takeMeasuredText } from './documentExport/MeasuredPaginator.jsx';
import {
  createDocumentDataCheckState,
  getDocumentModeHint,
} from '../utils/documentDataCheck.js';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';
import { mapCreditNoteToDocument } from '../documentModel/creditNoteMapping.js';
import { SHOW_DOCUMENT_FORM_PANEL } from '../config/documentFeatures.js';
import { applyOwnDataToInvoice, hasInvoiceOwnData, removeOwnDataFromInvoice } from './masterDataPanel/mappings/ownDataToInvoice.js';
import {
  applyPartnerToCreditNote,
  hasCreditNoteRecipientData,
  removePartnerFromCreditNote,
} from './masterDataPanel/mappings/partnerToCreditNote.js';
import {
  isCatalogItemSupportedForCreditNote,
  mapCatalogItemsToCreditNotePositions,
} from './masterDataPanel/mappings/catalogItemsToCreditNote.js';

const smallBusinessStorageKey = 'carta.creditNote.smallBusinessMode';
const smallBusinessTaxNotice =
  'Aufgrund der Anwendung der Kleinunternehmerregelung gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.';

const creditNoteVariants = [
  { id: 'creditNote', label: 'Gutschrift' },
  { id: 'cancellationInvoice', label: 'Stornorechnung' },
  { id: 'invoiceCorrection', label: 'Rechnungskorrektur' },
];
const creditNoteVariantIds = creditNoteVariants.map((variant) => variant.id);
const creditNoteVariantConfig = {
  creditNote: {
    title: 'Gutschrift',
    intro: 'für die unten aufgeführten Leistungen erstellen wir Ihnen die folgende Gutschrift:',
    closing:
      'Bitte prüfen Sie die Angaben zu Leistungsdatum, Positionen und Betrag. Für Rückfragen stehen wir Ihnen jederzeit gerne zur Verfügung.',
    referenceFields: [],
  },
  cancellationInvoice: {
    title: 'Stornorechnung',
    intro:
      'mit diesem Dokument stornieren wir die unten bezeichnete ursprüngliche Rechnung vollständig. Die Stornierung umfasst die nachfolgend aufgeführten Positionen:',
    closing:
      'Die ursprüngliche Rechnung wird durch diese Stornorechnung vollständig aufgehoben. Bitte berücksichtigen Sie diese Korrektur in Ihren Unterlagen.',
    referenceFields: [
      { field: 'originalInvoiceNumber', labelField: 'originalInvoiceNumber', multiline: false },
      { field: 'cancellationReason', labelField: 'cancellationReason', multiline: true },
    ],
  },
  invoiceCorrection: {
    title: 'Rechnungskorrektur',
    intro:
      'mit diesem Dokument korrigieren wir die unten bezeichnete ursprüngliche Rechnung. Die Korrektur bezieht sich auf die nachfolgend aufgeführten Positionen:',
    closing:
      'Diese Rechnungskorrektur ersetzt beziehungsweise ergänzt die bezeichnete ursprüngliche Rechnung im dargestellten Umfang.',
    referenceFields: [
      { field: 'originalInvoiceNumber', labelField: 'originalInvoiceNumber', multiline: false },
      { field: 'correctionReason', labelField: 'correctionReason', multiline: true },
    ],
  },
};
const creditNoteVariantTitles = Object.values(creditNoteVariantConfig).map((config) => config.title);
const creditNoteGrandTotalLabels = ['Gutschriftsbetrag', 'Stornobetrag', 'Korrekturbetrag'];

const initialCreditNoteLabels = {
  title: 'Gutschrift',
  creditNoteNumber: 'Gutschriftsnummer',
  creditNoteDate: 'Belegdatum',
  serviceDate: 'Leistungsdatum',
  internalReference: 'Interne Referenz',
  externalReference: 'Externe Referenz',
  customerReference: 'Kundenreferenz',
  position: 'Pos.',
  description: 'Beschreibung',
  unitPrice: 'Einzelpreis',
  quantity: 'Anzahl',
  unit: 'Einheit',
  tax: 'USt.',
  total: 'Gesamt',
  net: 'Nettobetrag',
  taxAmount: 'Umsatzsteuer',
  grandTotal: 'Gutschriftsbetrag',
  originalInvoiceNumber: 'Zu Rechnungsnummer',
  cancellationReason: 'Stornogrund',
  correctionReason: 'Korrekturgrund',
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
  { autoComplete: 'new-password', field: 'creditNoteNumber', ariaLabel: 'Gutschriftskennung', name: 'carta-credit-note-id', type: 'text' },
    { field: 'creditNoteDate', ariaLabel: 'Belegdatum', type: 'date' },
  { field: 'serviceDate', ariaLabel: 'Leistungsdatum', type: 'date' },
  { autoComplete: 'new-password', field: 'internalReference', ariaLabel: 'Interne Referenz', name: 'carta-internal-reference', type: 'text' },
  { autoComplete: 'new-password', field: 'externalReference', ariaLabel: 'Externe Referenz', name: 'carta-external-reference', type: 'text' },
  { autoComplete: 'new-password', field: 'customerReference', ariaLabel: 'Kundenreferenz', name: 'carta-customer-reference', type: 'text' },
];

const offerRecipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Händen' },
  { field: 'name', label: 'Name / Abteilung' },
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

const offerFooterLabeledFields = {
  vatId: 'vatIdLabel',
  taxNumber: 'taxNumberLabel',
  iban: 'ibanLabel',
  bic: 'bicLabel',
};

const offerFooterDefaultLabels = {
  vatId: 'USt-IdNr.:',
  taxNumber: 'Steuernummer:',
  iban: 'IBAN:',
  bic: 'BIC:',
};

const offerFooterLabelPrefixes = {
  vatId: ['USt-IdNr.:', 'USt-IdNr.', 'USt-ID:', 'USt-ID'],
  taxNumber: ['Steuernummer:', 'Steuernummer'],
  iban: ['IBAN:', 'IBAN'],
  bic: ['BIC:', 'BIC'],
  bankName: ['Bankname:', 'Bankname'],
};

function splitOfferStreetLine(value = '') {
  const trimmed = String(value ?? '').trim();
  const match = trimmed.match(/^(.*?)(?:\s+(\d+\s*[a-zA-Z]?))$/);

  return {
    street: match ? match[1].trim() : trimmed,
    houseNumber: match ? match[2].trim() : '',
  };
}

function splitOfferCityLine(value = '') {
  const trimmed = String(value ?? '').trim();
  const match = trimmed.match(/^(\d{4,5})\s+(.+)$/);

  return {
    postalCode: match ? match[1].trim() : '',
    city: match ? match[2].trim() : trimmed,
  };
}

function joinOfferLine(...parts) {
  return parts.map((part) => String(part ?? '').trim()).filter(Boolean).join(' ');
}

function createReturnAddress(sender) {
  return [
    sender.companyName,
    joinOfferLine(sender.address.street, sender.address.houseNumber),
    joinOfferLine(sender.address.postalCode, sender.address.city),
  ]
    .filter(Boolean)
    .join(' - ');
}

function combineLabelValue(label, value) {
  return [String(label ?? '').trim(), String(value ?? '').trim()].filter(Boolean).join(' ');
}

function createOfferViewData({ sender, recipient, details, references, correction, footer }) {
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
      street: joinOfferLine(recipient.address.street, recipient.address.houseNumber),
      cityLine: joinOfferLine(recipient.address.postalCode, recipient.address.city),
    },
    details: {
      ...details,
      ...references,
    },
    correction: { ...correction },
    footerLines: {
      companyName: footer.company.companyName,
      companyStreetName: footer.company.street,
      companyHouseNumber: footer.company.houseNumber,
      companyStreet: joinOfferLine(footer.company.street, footer.company.houseNumber),
      companyPostalCode: footer.company.postalCode,
      companyCityName: footer.company.city,
      companyCity: joinOfferLine(footer.company.postalCode, footer.company.city),
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

function normalizeOfferData(data = {}) {
  return {
    sender: {
      ...defaultOfferData.sender,
      ...(data.sender ?? {}),
      address: { ...defaultOfferData.sender.address, ...(data.sender?.address ?? {}) },
      contact: { ...defaultOfferData.sender.contact, ...(data.sender?.contact ?? {}) },
    },
    recipient: {
      ...defaultOfferData.recipient,
      ...(data.recipient ?? {}),
      address: { ...defaultOfferData.recipient.address, ...(data.recipient?.address ?? {}) },
    },
    details: { ...defaultOfferData.details, ...(data.details ?? {}) },
    references: { ...defaultOfferData.references, ...(data.references ?? {}) },
    correction: {
      originalInvoiceNumber: String(data.correction?.originalInvoiceNumber ?? defaultOfferData.correction.originalInvoiceNumber),
      cancellationReason: String(data.correction?.cancellationReason ?? defaultOfferData.correction.cancellationReason),
      correctionReason: String(data.correction?.correctionReason ?? defaultOfferData.correction.correctionReason),
    },
    footer: {
      company: { ...defaultOfferData.footer.company, ...(data.footer?.company ?? {}) },
      tax: { ...defaultOfferData.footer.tax, ...(data.footer?.tax ?? {}) },
      bank: { ...defaultOfferData.footer.bank, ...(data.footer?.bank ?? {}) },
    },
  };
}

function splitOfferFooterLabelAndValue(field, value = '', fallbackLabel = offerFooterDefaultLabels[field] ?? '') {
  const prefixes = offerFooterLabelPrefixes[field] ?? [];
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

function normalizeOfferFooterValue(field, value = '') {
  return splitOfferFooterLabelAndValue(field, value).value;
}

function normalizeOfferFooterLines(lines = {}) {
  const normalized = Object.fromEntries(
    Object.entries(lines).map(([field, value]) => [field, String(value ?? '').trim()]),
  );
  const companyStreetParts = splitOfferStreetLine(normalized.companyStreet);
  const companyCityParts = splitOfferCityLine(normalized.companyCity);

  normalized.companyStreetName = normalized.companyStreetName ?? companyStreetParts.street;
  normalized.companyHouseNumber = normalized.companyHouseNumber ?? companyStreetParts.houseNumber;
  normalized.companyPostalCode = normalized.companyPostalCode ?? companyCityParts.postalCode;
  normalized.companyCityName = normalized.companyCityName ?? companyCityParts.city;
  normalized.companyStreet = joinOfferLine(normalized.companyStreetName, normalized.companyHouseNumber);
  normalized.companyCity = joinOfferLine(normalized.companyPostalCode, normalized.companyCityName);

  Object.entries(offerFooterLabeledFields).forEach(([field, labelField]) => {
    const hasExplicitLabel = Object.prototype.hasOwnProperty.call(lines, labelField);
    const { label, value } = splitOfferFooterLabelAndValue(
      field,
      lines[field],
      hasExplicitLabel ? String(lines[labelField] ?? '') : offerFooterDefaultLabels[field],
    );

    normalized[labelField] = hasExplicitLabel ? String(lines[labelField] ?? '').trim() : label;
    normalized[field] = value;
  });

  normalized.bankName = normalizeOfferFooterValue('bankName', normalized.bankName);

  return normalized;
}

function formatOfferFooterLine(field, value = '', footerLines = {}) {
  const normalized = String(value ?? '').trim();
  const labelField = offerFooterLabeledFields[field];
  const label = labelField ? String(footerLines[labelField] ?? '').trim() : '';

  if (!labelField) {
    return normalized;
  }

  return [label, normalized].filter(Boolean).join(' ');
}

function parseOfferFooterLine(field, value = '') {
  const labelField = offerFooterLabeledFields[field];

  if (!labelField) {
    return normalizeOfferFooterValue(field, value);
  }

  const { label, value: normalizedValue } = splitOfferFooterLabelAndValue(field, value, '');

  return {
    [labelField]: label,
    [field]: normalizedValue,
  };
}


const defaultOfferData = {
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
    name: 'Einkauf',
    address: {
      street: 'Kundenstraße',
      houseNumber: '8',
      postalCode: '20095',
      city: 'Hamburg',
    },
  },
  details: {
    creditNoteNumber: 'GUT-2026-001',
    creditNoteDate: '2026-05-12',
    serviceDate: '2026-05-10',
  },
  references: {
    internalReference: 'INT-1001',
    externalReference: 'EXT-4711',
    customerReference: 'K-2048',
  },
  correction: {
    originalInvoiceNumber: '',
    cancellationReason: '',
    correctionReason: '',
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

const defaultOfferTextBlocks = [
  {
    id: 'intro',
    label: 'Einleitung',
    value: 'für die unten aufgeführten Leistungen erstellen wir Ihnen die folgende Gutschrift:',
    visible: true,
  },
  {
    id: 'closing',
    label: 'Schlusstext',
    value:
      'Bitte prüfen Sie die Angaben zu Leistungsdatum, Positionen und Betrag. Für Rückfragen stehen wir Ihnen jederzeit gerne zur Verfügung.',
    visible: true,
  },
  {
    id: 'smallBusinessNotice',
    label: 'Hinweis Kleinunternehmerregelung',
    value: smallBusinessTaxNotice,
    visible: true,
  },
];

const defaultCreditNotePayoutTextBlocks = [
  {
    id: 'payoutNotice',
    label: 'Auszahlungshinweis',
    value: 'Die Zahlung wird auf folgende Bankverbindung vorgenommen:',
    visible: true,
  },
  {
    id: 'payoutIban',
    label: 'IBAN',
    value: 'IBAN:',
    visible: true,
  },
  {
    id: 'payoutBic',
    label: 'BIC',
    value: 'BIC:',
    visible: true,
  },
];

const creditNotePayoutBlockIds = new Set(defaultCreditNotePayoutTextBlocks.map((block) => block.id));

function createCreditNotePosition() {
  return {
    id: crypto.randomUUID(),
    description: 'Leistung beschreiben',
    unitPrice: '0',
    quantity: '1',
    unit: 'Stk.',
    taxRate: '19',
  };
}

const defaultCreditNoteViewData = createOfferViewData(defaultOfferData);
const defaultCreditNotePositionForCheck = {
  description: 'Leistung beschreiben',
  unitPrice: '0',
  quantity: '1',
  unit: 'Stk.',
  taxRate: '19',
};

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
    recipient: createFieldConfig(offerRecipientOptionalFields),
    footerMiddle: createFieldConfig(offerFooterColumns[1]),
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

function readSmallBusinessPreference() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(smallBusinessStorageKey) === 'true';
}

function writeSmallBusinessPreference(isSmallBusiness) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(smallBusinessStorageKey, isSmallBusiness ? 'true' : 'false');
}

function calculatePosition(position, { isSmallBusiness = false } = {}) {
  const net = toNumber(position.unitPrice) * toNumber(position.quantity);
  const taxRate = isSmallBusiness ? 0 : Math.max(0, toNumber(position.taxRate));
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
  const baseTitle = String(title || 'gutschrift')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  const baseNumber = String(number || new Date().toISOString().slice(0, 10))
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return `${baseTitle || 'gutschrift'}-${baseNumber || 'dokument'}.pdf`;
}

function getDefaultCreditNoteTextBlocks(variant = 'creditNote') {
  return [
    ...defaultOfferTextBlocks,
    ...(variant === 'creditNote' ? defaultCreditNotePayoutTextBlocks : []),
  ].map((block) => ({ ...block }));
}

function normalizeTextBlocks(templateTextBlocks, legacyIntroText, legacyClosingText, variant = 'creditNote') {
  const defaults = getDefaultCreditNoteTextBlocks(variant);

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

function createCreditNoteTextBlocks(variant = 'creditNote') {
  const config = creditNoteVariantConfig[variant] ?? creditNoteVariantConfig.creditNote;

  return normalizeTextBlocks(undefined, undefined, undefined, variant).map((block) => {
    if (block.id === 'intro') {
      return { ...block, value: config.intro };
    }

    if (block.id === 'closing') {
      return { ...block, value: config.closing };
    }

    return block;
  });
}

function createInitialTextBlockSets() {
  return Object.fromEntries(
    creditNoteVariants.map((variant) => [variant.id, createCreditNoteTextBlocks(variant.id)]),
  );
}

function normalizeTextBlocksForVariant(templateTextBlocks, variant = 'creditNote') {
  if (!Array.isArray(templateTextBlocks)) {
    return createCreditNoteTextBlocks(variant);
  }

  return normalizeTextBlocks(templateTextBlocks, undefined, undefined, variant);
}

const offerPrintLayout = {
  blockGap: 16,
  smallSafetyBuffer: 8,
};

function createOfferPrintItems({
  correction,
  creditNoteVariant,
  isSmallBusiness = false,
  labels,
  positions,
  referenceFields,
  textBlocks,
}) {
  const introBlock = textBlocks.find((block) => block.id === 'intro');
  const closingBlock = textBlocks.find((block) => block.id === 'closing');
  const smallBusinessNoticeBlock = textBlocks.find((block) => block.id === 'smallBusinessNotice');
  const payoutBlocks = creditNoteVariant === 'creditNote'
    ? defaultCreditNotePayoutTextBlocks
      .map(({ id }) => textBlocks.find((block) => block.id === id))
      .filter((block) => block?.visible)
    : [];
  const visibleReferences = referenceFields
    .map((definition) => ({
      ...definition,
      label: labels[definition.labelField],
      value: String(correction?.[definition.field] ?? '').trim(),
    }))
    .filter((definition) => definition.value);

  return [
    ...(introBlock?.visible
      ? [
          {
            type: 'text',
            id: 'intro',
            text: introBlock.value,
          },
        ]
      : []),
    ...(visibleReferences.length
      ? [
          {
            type: 'references',
            id: 'references',
            fields: visibleReferences,
          },
        ]
      : []),
    ...positions.map((position, index) => ({
      type: 'position',
      index,
      position,
    })),
    {
      type: 'summary',
    },
    ...(isSmallBusiness && smallBusinessNoticeBlock?.visible
      ? [
          {
            type: 'text',
            id: 'smallBusinessNotice',
            text: smallBusinessNoticeBlock.value,
          },
        ]
      : []),
    ...(closingBlock?.visible
      ? [
          {
            type: 'text',
            id: 'closing',
            text: closingBlock.value,
          },
        ]
      : []),
    ...payoutBlocks.map((block) => ({
      type: 'text',
      id: block.id,
      text: block.value,
    })),
  ];
}

function CreditNoteVariantControls({ activeVariant, onSelect }) {
  return (
    <div className="document-choice-bar credit-note-variant-choice-bar" aria-label="Gutschriftsart auswählen">
        {creditNoteVariants.map((variant) => (
          <button
            className={activeVariant === variant.id ? 'is-active' : undefined}
            type="button"
            aria-pressed={activeVariant === variant.id}
            key={variant.id}
            onClick={() => onSelect(variant.id)}
          >
            {variant.label}
          </button>
        ))}
    </div>
  );
}

function CreditNoteReferenceBlock({
  correction,
  labels,
  referenceFields,
  onCorrectionChange,
  onLabelChange,
}) {
  if (referenceFields.length === 0) {
    return null;
  }

  return (
    <section className="credit-note-reference-block" aria-label="Gutschriftsreferenzen">
      <div className="credit-note-reference-grid">
        {referenceFields.map((definition) => (
          <label className={definition.multiline ? 'is-multiline' : undefined} key={definition.field}>
            <input
              className="document-label-input"
              aria-label={`Beschriftung ${labels[definition.labelField]}`}
              value={labels[definition.labelField]}
              onChange={(event) => onLabelChange(definition.labelField, event.target.value)}
            />
            {definition.multiline ? (
              <textarea
                ref={(element) => resizeTextarea(element)}
                aria-label={labels[definition.labelField]}
                rows={1}
                value={correction[definition.field]}
                onChange={(event) => {
                  onCorrectionChange(definition.field, event.target.value);
                  resizeTextarea(event.target);
                }}
              />
            ) : (
              <input
                aria-label={labels[definition.labelField]}
                value={correction[definition.field]}
                onChange={(event) => onCorrectionChange(definition.field, event.target.value)}
              />
            )}
          </label>
        ))}
      </div>
    </section>
  );
}

export default function CreditNoteDocumentEditor({ onMasterDataAdapterChange }) {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isDataCheckMode, setIsDataCheckMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialCreditNoteLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(offerContactFields),
    details: createFieldConfig(offerMetaFields),
    recipient: createFieldConfig(offerRecipientOptionalFields),
    footerMiddle: createFieldConfig(offerFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const paginatorRef = useRef(null);
  const titleTextareaRef = useRef(null);
  const textBlockRefs = useRef({});
  const dateInputRefs = useRef({});
  const [offerData, setOfferData] = useState(defaultOfferData);
  const [creditNoteVariant, setCreditNoteVariant] = useState('creditNote');
  const [textBlockSets, setTextBlockSets] = useState(createInitialTextBlockSets);
  const [positions, setPositions] = useState([createCreditNotePosition()]);
  const [isSmallBusiness, setIsSmallBusiness] = useState(readSmallBusinessPreference);
  const offerDataRef = useRef(offerData);
  const smallBusinessRef = useRef(isSmallBusiness);
  offerDataRef.current = offerData;
  smallBusinessRef.current = isSmallBusiness;
  const creditNoteMasterDataAdapter = useMemo(() => ({
    applyOwnData(record) {
      setOfferData((current) => applyOwnDataToInvoice(current, record));
      setIsSmallBusiness(record?.settings?.isSmallBusiness === true);
    },
    hasOwnDocumentData() {
      return hasInvoiceOwnData(offerDataRef.current) || smallBusinessRef.current;
    },
    removeOwnData() {
      setOfferData((current) => removeOwnDataFromInvoice(current));
      setIsSmallBusiness(false);
    },
    applyPartner(record) {
      setOfferData((current) => applyPartnerToCreditNote(current, record));
      const partnerBank = record?.bank ?? {};
      setTextBlockSets((current) => ({
        ...current,
        creditNote: normalizeTextBlocksForVariant(current.creditNote, 'creditNote').map((block) => {
          if (block.id === 'payoutIban' && block.value === 'IBAN:' && partnerBank.iban) {
            return { ...block, value: `IBAN: ${partnerBank.iban}` };
          }

          if (block.id === 'payoutBic' && block.value === 'BIC:' && partnerBank.bic) {
            return { ...block, value: `BIC: ${partnerBank.bic}` };
          }

          return block;
        }),
      }));
    },
    hasRecipientData() {
      return hasCreditNoteRecipientData(offerDataRef.current);
    },
    removePartner() {
      setOfferData((current) => removePartnerFromCreditNote(current));
    },
    canAddCatalogItem(record) {
      return isCatalogItemSupportedForCreditNote(record);
    },
    addCatalogItems(records) {
      const newPositions = mapCatalogItemsToCreditNotePositions(records);
      if (newPositions === null || !newPositions.length) return { ok: false, count: 0 };
      setPositions((current) => [...current, ...newPositions]);
      return { ok: true, count: newPositions.length };
    },
  }), []);
  const normalizedCreditNoteVariant = creditNoteVariantIds.includes(creditNoteVariant)
    ? creditNoteVariant
    : 'creditNote';
  const activeVariantConfig = creditNoteVariantConfig[normalizedCreditNoteVariant];
  const referenceFields = activeVariantConfig.referenceFields;
  const textBlocks = textBlockSets[normalizedCreditNoteVariant] ?? textBlockSets.creditNote;
  const initialGeneratorStatesRef = useRef({});
  const currentGeneratorState = {
    creditNoteVariant: normalizedCreditNoteVariant,
    labels,
    offerData,
    positions,
    textBlocks,
    isSmallBusiness,
    fieldConfig,
  };
  if (!initialGeneratorStatesRef.current[normalizedCreditNoteVariant]) {
    initialGeneratorStatesRef.current[normalizedCreditNoteVariant] = structuredClone(currentGeneratorState);
  }
  const { sender, recipient, details, correction, footerLines } = useMemo(
    () => createOfferViewData(offerData),
    [offerData],
  );

  useEffect(() => {
    onMasterDataAdapterChange?.(creditNoteMasterDataAdapter);

    return () => onMasterDataAdapterChange?.(null);
  }, [creditNoteMasterDataAdapter, onMasterDataAdapterChange]);

  useEffect(() => {
    resizeTextarea(titleTextareaRef.current);

    textBlocks.forEach((block) => {
      if (block.visible) {
        resizeTextarea(textBlockRefs.current[block.id]);
      }
    });
  }, [labels.title, textBlocks]);

  const totals = useMemo(() => {
    const summary = positions.reduce(
      (current, position) => {
        const calculated = calculatePosition(position, { isSmallBusiness });
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
  }, [isSmallBusiness, positions]);

  const printItems = useMemo(
    () =>
      createOfferPrintItems({
        correction,
        creditNoteVariant: normalizedCreditNoteVariant,
        isSmallBusiness,
        labels,
        positions,
        referenceFields,
        textBlocks,
      }),
    [correction, isSmallBusiness, labels, normalizedCreditNoteVariant, positions, referenceFields, textBlocks],
  );
  const dataCheckState = useMemo(
    () =>
      createDocumentDataCheckState({
        defaultPosition: defaultCreditNotePositionForCheck,
        defaultViewData: defaultCreditNoteViewData,
        details,
        footerLines,
        isActive: isDataCheckMode,
        positions,
        recipient,
        recipientHiddenFields: fieldConfig.recipient.hidden,
        sender,
        visibleContactFields: getOrderedDefinitions('contact', offerContactFields).filter(
          ({ field }) => !fieldConfig.contact.hidden.includes(field),
        ),
        visibleDetailFields: getOrderedDefinitions('details', offerMetaFields).filter(
          ({ field }) => !fieldConfig.details.hidden.includes(field),
        ),
        visibleFooterMiddleFields: getOrderedDefinitions('footerMiddle', offerFooterColumns[1]).filter(
          ({ field }) => !fieldConfig.footerMiddle.hidden.includes(field),
        ),
      }),
    [details, fieldConfig, footerLines, isDataCheckMode, positions, recipient, sender],
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

  function handleSmallBusinessToggle(event) {
    const nextValue = event.target.checked;
    setIsSmallBusiness(nextValue);
    writeSmallBusinessPreference(nextValue);
  }

  function updateCorrection(field, value) {
    setOfferData((current) => ({
      ...current,
      correction: {
        ...current.correction,
        [field]: value,
      },
    }));
  }

  function handleCreditNoteVariantSelect(nextVariant) {
    if (!creditNoteVariantIds.includes(nextVariant)) {
      return;
    }

    const nextConfig = creditNoteVariantConfig[nextVariant];
    setCreditNoteVariant(nextVariant);
    setLabels((current) => ({
      ...current,
      title: creditNoteVariantTitles.includes(current.title) ? nextConfig.title : current.title,
      grandTotal:
        creditNoteGrandTotalLabels.includes(current.grandTotal)
          ? (nextVariant === 'creditNote' ? 'Gutschriftsbetrag' : nextConfig.title === 'Stornorechnung' ? 'Stornobetrag' : 'Korrekturbetrag')
          : current.grandTotal,
    }));
    setTextBlockSets((current) => ({
      ...createInitialTextBlockSets(),
      ...current,
      [nextVariant]: current[nextVariant] ?? createCreditNoteTextBlocks(nextVariant),
    }));
  }

  function updateSender(field, value) {
    setOfferData((current) => {
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
    setOfferData((current) => {
      if (field === 'company') {
        return { ...current, recipient: { ...current.recipient, companyName: value } };
      }

      if (field === 'street') {
        const street = splitOfferStreetLine(value);
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
        const city = splitOfferCityLine(value);
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
    setOfferData((current) => {
      if (['internalReference', 'externalReference', 'customerReference'].includes(field)) {
        return { ...current, references: { ...current.references, [field]: value } };
      }

      return { ...current, details: { ...current.details, [field]: value } };
    });
  }

  function updateFooterLine(field, value) {
    setOfferData((current) => {
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
          const street = splitOfferStreetLine(normalizedValue);
          footer.company.street = street.street;
          footer.company.houseNumber = street.houseNumber;
        }
        if (entryField === 'companyStreetName') footer.company.street = normalizedValue;
        if (entryField === 'companyHouseNumber') footer.company.houseNumber = normalizedValue;
        if (entryField === 'companyCity') {
          const city = splitOfferCityLine(normalizedValue);
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
    setPositions((current) => [...current, createCreditNotePosition()]);
  }

  function removePosition(positionId) {
    setPositions((current) =>
      current.length === 1 ? current : current.filter((position) => position.id !== positionId),
    );
  }

  function updateTextBlock(blockId, patch) {
    setTextBlockSets((current) => ({
      ...current,
      [normalizedCreditNoteVariant]: (current[normalizedCreditNoteVariant] ?? createCreditNoteTextBlocks(normalizedCreditNoteVariant)).map((block) =>
        block.id === blockId ? { ...block, ...patch } : block,
      ),
    }));
  }

  function toggleTextBlockVisibility(blockId) {
    setTextBlockSets((current) => ({
      ...current,
      [normalizedCreditNoteVariant]: (current[normalizedCreditNoteVariant] ?? createCreditNoteTextBlocks(normalizedCreditNoteVariant)).map((block) =>
        block.id === blockId ? { ...block, visible: !block.visible } : block,
      ),
    }));
  }

  function handleNewDocument() {
    setLabels({
      ...initialCreditNoteLabels,
      title: activeVariantConfig.title,
      grandTotal: normalizedCreditNoteVariant === 'creditNote'
        ? 'Gutschriftsbetrag'
        : activeVariantConfig.title === 'Stornorechnung' ? 'Stornobetrag' : 'Korrekturbetrag',
    });
    setOfferData(defaultOfferData);
    setCreditNoteVariant(normalizedCreditNoteVariant);
    setTextBlockSets(createInitialTextBlockSets());
    setPositions([createCreditNotePosition()]);
    setIsSmallBusiness(readSmallBusinessPreference());
    setFieldConfig({
      contact: createFieldConfig(offerContactFields),
      details: createFieldConfig(offerMetaFields),
      recipient: createFieldConfig(offerRecipientOptionalFields),
      footerMiddle: createFieldConfig(offerFooterColumns[1]),
    });
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setIsExporting(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStatesRef.current = {};
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
      await refreshPrintPages();
      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'creditNote',
        filename: createPdfFileName(labels.title, details.creditNoteNumber),
        belege24Document: mapCreditNoteToDocument({
          labels,
          creditNoteVariant: normalizedCreditNoteVariant,
          offerData,
          positions,
          textBlocks,
          isSmallBusiness,
          fieldConfig,
        }),
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
    if (
      !(file instanceof File)
      || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))
    ) {
      window.alert('Bitte wähle eine PDF-Datei aus.');
      return;
    }

    let importResult;
    try {
      const { importCreditNotePdf } = await import('../documentModel/creditNotePdfImport.js');
      importResult = await importCreditNotePdf(
        await file.arrayBuffer(),
        normalizedCreditNoteVariant,
      );
    } catch {
      window.alert('Die PDF konnte nicht gelesen werden.');
      return;
    }
    if (importResult.status !== 'valid') {
      window.alert(importResult.message);
      return;
    }

    const { confirmCreditNoteOverwrite } = await import('../documentModel/creditNotePdfImport.js');
    const mayOverwrite = confirmCreditNoteOverwrite(
      currentGeneratorState,
      initialGeneratorStatesRef.current[normalizedCreditNoteVariant],
      () => window.confirm(
        'Die aktuelle Gutschrift enthält Änderungen. Möchtest du sie vollständig durch die Daten aus der PDF ersetzen?',
      ),
    );
    if (!mayOverwrite) return;

    const restored = importResult.state;
    setLabels(restored.labels);
    setOfferData(restored.offerData);
    setCreditNoteVariant(restored.creditNoteVariant);
    setTextBlockSets((current) => ({
      ...current,
      [restored.creditNoteVariant]: normalizeTextBlocksForVariant(
        restored.textBlocks,
        restored.creditNoteVariant,
      ),
    }));
    setPositions(restored.positions);
    setIsSmallBusiness(restored.isSmallBusiness);
    setFieldConfig(restored.fieldConfig);
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStatesRef.current[restored.creditNoteVariant] = structuredClone(restored);
    window.alert(importResult.message);
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
          className={creditNotePayoutBlockIds.has(block.id) ? 'credit-note-payout-text' : ''}
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
        <CreditNoteDocumentForm
          addPosition={addPosition}
          details={offerData.details}
          footerLines={footerLines}
          footerData={offerData.footer}
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
          correction={offerData.correction}
          creditNoteVariant={normalizedCreditNoteVariant}
          isOpen={isFormPanelOpen}
          movePosition={movePosition}
          onToggle={() => setIsFormPanelOpen((current) => !current)}
          positions={positions}
          recipient={offerData.recipient}
          references={offerData.references}
          removePosition={removePosition}
          sender={offerData.sender}
          showTaxFields={!isSmallBusiness}
          referenceFields={referenceFields}
          textBlocks={textBlocks}
          toggleTextBlockVisibility={toggleTextBlockVisibility}
          totals={totals}
          updateDetail={updateDetail}
          updateFooterLine={updateFooterLine}
          updatePosition={updatePosition}
          updateRecipient={updateRecipient}
          updateSender={updateSender}
          updateTextBlock={updateTextBlock}
          updateCorrection={updateCorrection}
        />
      )}

      <div className="invoice-variant-controls credit-note-variant-controls">
        <CreditNoteVariantControls
          activeVariant={normalizedCreditNoteVariant}
          onSelect={handleCreditNoteVariantSelect}
        />

        <label className={`invoice-small-business-toggle${isSmallBusiness ? ' is-active' : ''}`}>
          <input
            type="checkbox"
            checked={isSmallBusiness}
            onChange={handleSmallBusinessToggle}
          />
          <span>Kleinunternehmerregelung nach § 19 UStG anwenden</span>
        </label>

        <div className="invoice-variant-controls-divider" aria-hidden="true" />

        <DocumentToolbar
          ariaLabel="Gutschrift Werkzeuge"
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
      </div>

      <p className="document-mode-hint">{viewModeHint}</p>

      <A4Page
        ref={sheetRef}
        ariaLabel="Editierbare Gutschrift"
        className={`offer-sheet invoice-sheet credit-note-sheet${isDataCheckMode ? ' is-data-check-mode' : ''}`}
        editable={highlightFields}
      >
        <SenderBlock
          contactFields={getOrderedDefinitions('contact', offerContactFields)}
          dataCheckFields={dataCheckState.sender}
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
            dataCheckFields={{ ...dataCheckState.recipient, senderLine: dataCheckState.sender.senderLine }}
            hiddenFields={getHiddenFields('recipient', offerRecipientOptionalFields)}
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
            emphasizedField="creditNoteNumber"
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
          <textarea
            ref={titleTextareaRef}
            className="document-label-input document-title-label credit-note-title-label"
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

        <CreditNoteReferenceBlock
          correction={correction}
          labels={labels}
          referenceFields={referenceFields}
          onCorrectionChange={updateCorrection}
          onLabelChange={updateLabel}
        />

        <PositionTable
          autoResizeDescription
          calculatePosition={(position) => calculatePosition(position, { isSmallBusiness })}
          dataCheckPositions={dataCheckState.positions}
          formatCurrency={formatCurrency}
          labels={labels}
          positions={positions}
          showTaxColumn={!isSmallBusiness}
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
          ariaLabel="Gutschriftssummen"
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
          labels={labels}
          showTaxDetails={!isSmallBusiness}
          totals={totals}
          onLabelChange={updateLabel}
        />

        {isSmallBusiness && renderTextBlock(textBlocks.find((block) => block.id === 'smallBusinessNotice'), 1)}

        {renderTextBlock(textBlocks.find((block) => block.id === 'closing'), 2)}

        {normalizedCreditNoteVariant === 'creditNote' && (
          <>
            {renderTextBlock(textBlocks.find((block) => block.id === 'payoutNotice'), 3)}
            {renderTextBlock(textBlocks.find((block) => block.id === 'payoutIban'), 4)}
            {renderTextBlock(textBlocks.find((block) => block.id === 'payoutBic'), 5)}
          </>
        )}

        <FooterBlock
          columns={[
            offerFooterColumns[0],
            getOrderedDefinitions('footerMiddle', offerFooterColumns[1]),
            offerFooterColumns[2],
          ]}
          dataCheckFields={dataCheckState.footerLines}
          footerLines={footerLines}
          formatFooterLine={(field, value) => formatOfferFooterLine(field, value, footerLines)}
          hiddenFields={getHiddenFields('footerMiddle', offerFooterColumns[1])}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          parseFooterLine={parseOfferFooterLine}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
        />
      </A4Page>

      {isExportRenderActive ? (
        <>
          <MeasuredOfferPaginator
            ref={paginatorRef}
            isSmallBusiness={isSmallBusiness}
            items={printItems}
            labels={labels}
            totals={totals}
          />

          <OfferPrintPages
            ref={printPagesRef}
            details={details}
            footerLines={footerLines}
            isSmallBusiness={isSmallBusiness}
            labels={labels}
            pages={printPages}
            recipient={recipient}
            sender={sender}
            totals={totals}
            visibleContactDefinitions={getOrderedDefinitions('contact', offerContactFields).filter(
              (definition) => !fieldConfig.contact.hidden.includes(definition.field),
            )}
            visibleDetailDefinitions={getOrderedDefinitions('details', offerMetaFields).filter(
              (definition) => !fieldConfig.details.hidden.includes(definition.field),
            )}
            visibleRecipientFields={offerRecipientOptionalFields.filter(
              (definition) => !fieldConfig.recipient.hidden.includes(definition.field),
            )}
            visibleFooterMiddleDefinitions={getOrderedDefinitions('footerMiddle', offerFooterColumns[1]).filter(
              (definition) => !fieldConfig.footerMiddle.hidden.includes(definition.field),
            )}
          />
        </>
      ) : null}
    </div>
  );
}

const MeasuredOfferPaginator = forwardRef(function MeasuredOfferPaginator(
  { isSmallBusiness = false, items, labels, totals },
  ref,
) {
  const measureRootRef = useRef(null);

  function measureNow() {
    return measureOfferPages(measureRootRef.current, items);
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
        <div className="credit-note-print-references" data-measure-references-probe />
        <p className="invoice-print-flow-text" data-measure-text-probe />
        <table className={`invoice-print-position-table${isSmallBusiness ? ' is-without-tax-column' : ''}`}>
          <thead>
            <tr data-measure-position-header>
              <th>{labels.position}</th>
              <th>{labels.description}</th>
              <th>{labels.unitPrice}</th>
              <th>{labels.quantity}</th>
              <th>{labels.unit}</th>
              {!isSmallBusiness && <th>{labels.tax}</th>}
              <th>{labels.total}</th>
            </tr>
          </thead>
          <tbody>
            {positionItems.map(({ index, position }) => {
              const calculated = calculatePosition(position, { isSmallBusiness });

              return (
                <tr data-measure-position-row={String(index)} key={position.id}>
                  <td>{index + 1}</td>
                  <td>{position.description}</td>
                  <td>{formatCurrency(toNumber(position.unitPrice))}</td>
                  <td>{position.quantity}</td>
                  <td>{position.unit}</td>
                  {!isSmallBusiness && <td>{formatPercent(calculated.taxRate)}%</td>}
                  <td>{formatCurrency(calculated.net)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div data-measure-summary>
          <OfferPrintSummary isSmallBusiness={isSmallBusiness} labels={labels} totals={totals} />
        </div>
      </div>
    </div>
  );
});

function measureOfferPages(measureRoot, items) {
  if (!measureRoot) {
    return null;
  }

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const referencesProbe = measureRoot.querySelector('[data-measure-references-probe]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const summaryProbe = measureRoot.querySelector('[data-measure-summary] .invoice-print-summary');
  const positionHeader = measureRoot.querySelector('[data-measure-position-header]');
  const positionRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-position-row]')].map((row) => [
      row.dataset.measurePositionRow,
      getOuterHeight(row),
    ]),
  );

  if (!firstContent || !followContent || !referencesProbe || !textProbe || !summaryProbe || !positionHeader) {
    return null;
  }

  const firstPageCapacity = firstContent.getBoundingClientRect().height - offerPrintLayout.smallSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - offerPrintLayout.smallSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || offerPrintLayout.blockGap;
  const positionHeaderHeight = getOuterHeight(positionHeader);

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'references') {
      referencesProbe.innerHTML = '';
      item.fields.forEach((field) => {
        const row = document.createElement('p');
        const label = document.createElement('span');
        const value = document.createElement('strong');
        label.textContent = field.label;
        value.textContent = field.value;
        row.append(label, value);
        referencesProbe.append(row);
      });

      return getOuterHeight(referencesProbe);
    }

    if (item.type === 'text') {
      return measureTextHeight(item.text);
    }

    if (item.type === 'position') {
      return positionRows.get(String(item.index)) || 0;
    }

    if (item.type === 'summary') {
      return getOuterHeight(summaryProbe);
    }

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

  if (first.type === 'references') {
    return (
      first.fields.length === second.fields.length &&
      first.fields.every((field, index) => (
        field.field === second.fields[index].field &&
        field.label === second.fields[index].label &&
        field.value === second.fields[index].value
      ))
    );
  }

  if (first.type === 'position') {
    return (
      first.index === second.index &&
      first.position.id === second.position.id &&
      first.position.description === second.position.description &&
      first.position.unitPrice === second.position.unitPrice &&
      first.position.quantity === second.position.quantity &&
      first.position.unit === second.position.unit &&
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

const OfferPrintPages = forwardRef(function OfferPrintPages(
  {
    details,
    footerLines,
    isSmallBusiness,
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
    <div className="invoice-print-pages offer-print-pages credit-note-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`invoice-print-page offer-print-page credit-note-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <OfferPrintFirstPageHeader
              details={details}
              labels={labels}
              recipient={recipient}
              sender={sender}
              visibleContactDefinitions={visibleContactDefinitions}
              visibleDetailDefinitions={visibleDetailDefinitions}
              visibleRecipientFields={visibleRecipientFields}
            />
          ) : (
            <OfferPrintContinuationHeader companyName={sender.company} />
          )}

          <div className="invoice-print-page-content">
            <OfferPrintPageItems
              isSmallBusiness={isSmallBusiness}
              items={page.items}
              labels={labels}
              totals={totals}
            />
          </div>

          <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <OfferPrintFooter
            footerLines={footerLines}
            visibleFooterMiddleDefinitions={visibleFooterMiddleDefinitions}
          />
        </article>
      ))}
    </div>
  );
});

function OfferPrintFirstPageHeader({
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
            <OfferPrintDetailRow
              key={definition.field}
              emphasized={definition.field === 'creditNoteNumber'}
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

function OfferPrintContinuationHeader({ companyName }) {
  return (
    <header className="invoice-print-header invoice-print-continuation-header">
      <p className="invoice-print-company-name">{companyName}</p>
    </header>
  );
}

function OfferPrintDetailRow({ emphasized = false, label, value }) {
  return (
    <p className={emphasized ? 'is-emphasized' : undefined}>
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

function OfferPrintPageItems({ isSmallBusiness = false, items, labels, totals }) {
  const renderedItems = [];
  let index = 0;

  while (index < items.length) {
    const item = items[index];

    if (item.type === 'references') {
      renderedItems.push(
        <CreditNotePrintReferences fields={item.fields} key="references" />,
      );
    }

    if (item.type === 'position') {
      const blockStartIndex = index;
      const positionItems = [];

      while (items[index]?.type === 'position') {
        positionItems.push(items[index]);
        index += 1;
      }

      renderedItems.push(
        <OfferPrintPositionTable
          className={items[blockStartIndex - 1]?.type === 'text' ? 'credit-note-print-table-after-text' : undefined}
          key={`positions-${positionItems[0].index}`}
          isSmallBusiness={isSmallBusiness}
          labels={labels}
          positionItems={positionItems}
        />,
      );
      continue;
    }

    if (item.type === 'summary') {
      renderedItems.push(
        <OfferPrintSummary
          className={items[index - 1]?.type === 'position' ? 'credit-note-print-summary-after-table' : undefined}
          isSmallBusiness={isSmallBusiness}
          key="summary"
          labels={labels}
          totals={totals}
        />,
      );
    }

    if (item.type === 'text') {
      const previousItem = items[index - 1];
      const nextItem = items[index + 1];
      const textClassName = [
        nextItem?.type === 'position' ? 'credit-note-print-text-before-table' : '',
        previousItem?.type === 'summary' ? 'credit-note-print-text-after-summary' : '',
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

function CreditNotePrintReferences({ fields }) {
  return (
    <section className="credit-note-print-references">
      {fields.map((field) => (
        <p key={field.field}>
          <span>{field.label}</span>
          <strong>{field.value}</strong>
        </p>
      ))}
    </section>
  );
}

function OfferPrintPositionTable({ className = '', isSmallBusiness = false, labels, positionItems }) {
  return (
    <table
      className={`invoice-print-position-table${isSmallBusiness ? ' is-without-tax-column' : ''}${className ? ` ${className}` : ''}`}
    >
      <thead>
        <tr>
          <th>{labels.position}</th>
          <th>{labels.description}</th>
          <th>{labels.unitPrice}</th>
          <th>{labels.quantity}</th>
          <th>{labels.unit}</th>
          {!isSmallBusiness && <th>{labels.tax}</th>}
          <th>{labels.total}</th>
        </tr>
      </thead>
      <tbody>
        {positionItems.map(({ index, position }) => {
          const calculated = calculatePosition(position, { isSmallBusiness });

          return (
            <tr key={position.id}>
              <td>{index + 1}</td>
              <td>{position.description}</td>
              <td>{formatCurrency(toNumber(position.unitPrice))}</td>
              <td>{position.quantity}</td>
              <td>{position.unit}</td>
              {!isSmallBusiness && <td>{formatPercent(calculated.taxRate)}%</td>}
              <td>{formatCurrency(calculated.net)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function OfferPrintSummary({ className = '', isSmallBusiness = false, labels, totals }) {
  return (
    <aside className={`invoice-print-summary${className ? ` ${className}` : ''}`} aria-label="Gutschriftssummen">
      <div>
        <span>{labels.net}</span>
        <strong>{formatCurrency(totals.net)}</strong>
      </div>
      {!isSmallBusiness && totals.taxGroups.map((group) => (
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

function OfferPrintFooter({ footerLines, visibleFooterMiddleDefinitions }) {
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
          .map((definition) => formatOfferFooterLine(definition.field, footerLines[definition.field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
      <section>
        {['bankName', 'iban', 'bic', 'bankExtra']
          .map((field) => formatOfferFooterLine(field, footerLines[field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
    </footer>
  );
}
