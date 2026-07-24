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
import { mapFinalInvoiceToDocument, mapGoodsInvoiceToDocument, mapPartialInvoiceToDocument, mapProgressInvoiceToDocument, mapStandardInvoiceToDocument, mapTextInvoiceToDocument } from '../documentModel/invoiceMapping.js';

const smallBusinessStorageKey = 'carta.invoice.smallBusinessMode';
const invoiceVariants = [
  { id: 'standard', label: 'Standardrechnung' },
  { id: 'goods', label: 'Warenrechnung' },
  { id: 'text', label: 'Textrechnung' },
  { id: 'progressInvoice', label: 'Abschlagsrechnung' },
  { id: 'partialInvoice', label: 'Teilrechnung' },
  { id: 'finalInvoice', label: 'Schlussrechnung' },
];
const invoiceVariantIds = invoiceVariants.map((variant) => variant.id);
const tradeInvoiceVariantIds = ['progressInvoice', 'partialInvoice', 'finalInvoice'];
const invoiceVariantTitles = {
  standard: 'Rechnung',
  goods: 'Rechnung',
  text: 'Rechnung',
  progressInvoice: 'Abschlagsrechnung',
  partialInvoice: 'Teilrechnung',
  finalInvoice: 'Schlussrechnung',
};
const smallBusinessTaxNotice =
  'Aufgrund der Anwendung der Kleinunternehmerregelung gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.';
const textInvoiceIntro =
  'Sehr geehrte Damen und Herren,\n\nvielen Dank für Ihren Auftrag und das entgegengebrachte Vertrauen.\n\nFür meine Leistungen erlaube ich mir, Ihnen folgende Positionen in Rechnung zu stellen:';
const textInvoiceClosing =
  'Bitte begleichen Sie den Gesamtbetrag innerhalb der angegebenen Zahlungsfrist auf das unten genannte Konto.\n\nBei Rückfragen stehe ich Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen';

const tradeInvoiceTextDefaults = {
  progressInvoice: {
    intro:
      'fuer das unten genannte Projekt stellen wir Ihnen den vereinbarten Abschlag entsprechend dem aktuellen Leistungsstand in Rechnung:',
    closing:
      'Dieser Abschlag bezieht sich auf den angegebenen Abrechnungsabschnitt und stellt keine abschliessende Abrechnung des Gesamtauftrags dar.',
  },
  partialInvoice: {
    intro:
      'die unten aufgefuehrte, abgegrenzte Teilleistung wurde fertiggestellt. Diese Teilleistung rechnen wir hiermit endgueltig ab:',
    closing:
      'Diese Teilrechnung betrifft ausschliesslich die beschriebene abgeschlossene Teilleistung. Weitere Leistungen bleiben davon unberuehrt.',
  },
  finalInvoice: {
    intro:
      'vielen Dank fuer Ihren Auftrag. Fuer unsere Leistungen stellen wir Ihnen wie folgt in Rechnung:',
    closing:
      'Bereits vereinnahmte Abschlagszahlungen wurden in der Schlussrechnung beruecksichtigt. Bitte begleichen Sie den verbleibenden Restbetrag.',
  },
};

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
  progressPaymentNumber: 'Abschlag',
  projectName: 'Projekt / Bauvorhaben',
  orderNumber: 'Auftrags- oder Angebotsnummer',
  billingSection: 'Leistungsstand / Abrechnungsabschnitt',
  partialService: 'Abgeschlossene Teilleistung',
  completionDate: 'Fertigstellung / Leistungszeitraum',
  previousPayments: 'Bisherige Abschlagsrechnungen',
  previousPaymentLabel: 'Abschlag',
  previousPaymentInvoiceNumber: 'Rechnungsnr.',
  previousPaymentInvoiceDate: 'Datum',
  previousPaymentNet: 'Netto',
  previousPaymentTaxAmount: 'USt.',
  previousPaymentGross: 'Brutto',
  previousPaymentStatus: 'Status',
  serviceTotal: 'Gesamtbetrag der Leistungen',
  serviceTax: 'enthaltene Umsatzsteuer',
  deductedPayments: 'beruecksichtigte Abschlagszahlungen',
  deductedPaymentTax: 'darin enthaltene Umsatzsteuer',
  remainingNet: 'verbleibender Nettobetrag',
  remainingTax: 'verbleibende Umsatzsteuer',
  remainingGross: 'verbleibender Restbetrag',
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

const finalInvoicePreviousPaymentColumns = [
  { field: 'invoiceNumber', labelField: 'previousPaymentInvoiceNumber' },
  { field: 'invoiceDate', labelField: 'previousPaymentInvoiceDate' },
  { field: 'netAmount', labelField: 'previousPaymentNet' },
  { field: 'taxAmount', labelField: 'previousPaymentTaxAmount' },
  { field: 'grossAmount', labelField: 'previousPaymentGross' },
];

export function getFinalInvoicePreviousPaymentColumns(labels = initialInvoiceLabels) {
  return finalInvoicePreviousPaymentColumns.map((column) => ({
    ...column,
    label: labels[column.labelField],
  }));
}

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
  project: {
    progressPaymentNumber: '1. Abschlag',
    projectName: 'Sanierung Musterobjekt',
    orderNumber: 'ANG-2026-014',
    billingSection: 'Leistungsstand bis 30.05.2026',
    partialService: 'Abgeschlossene Montagearbeiten im Erdgeschoss',
    completionDate: 'Leistungszeitraum 01.05.2026 bis 30.05.2026',
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
  const sourceParts = parts.map((part) => String(part ?? ''));
  const nonEmptyParts = sourceParts.filter((part) => part !== '');
  if (nonEmptyParts.length === 1) return nonEmptyParts[0];
  return sourceParts.map((part) => part.trim()).filter(Boolean).join(' ');
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

function createInvoiceViewData({ sender, recipient, deliveryAddress, details, references, project, footer }) {
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
    project: { ...project },
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
    unit: 'pauschal',
    taxRate: '19',
  };
}

const textInvoicePositionDefaults = {
  description: 'Leistung in Textform beschreiben',
  unitPrice: '150,00',
  quantity: '1',
  unit: 'pauschal',
  taxRate: '19 %',
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
  unit: 'pauschal',
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
    project: { ...defaultInvoiceData.project, ...(data.project ?? {}) },
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

export function createTradeInvoiceTextBlocks(invoiceVariant) {
  const defaults = tradeInvoiceTextDefaults[invoiceVariant];

  return normalizeTextBlocks().map((block) => {
    if (block.id === 'intro') {
      return { ...block, value: defaults?.intro ?? block.value };
    }

    if (block.id === 'closing') {
      return { ...block, value: defaults?.closing ?? block.value };
    }

    return block;
  });
}

function getTextBlockSetKey(invoiceVariant) {
  return invoiceVariant === 'text' || tradeInvoiceVariantIds.includes(invoiceVariant)
    ? invoiceVariant
    : 'default';
}

function createInitialTextBlockSets() {
  return {
    default: normalizeTextBlocks(),
    text: createTextInvoiceTextBlocks(),
    progressInvoice: createTradeInvoiceTextBlocks('progressInvoice'),
    partialInvoice: createTradeInvoiceTextBlocks('partialInvoice'),
    finalInvoice: createTradeInvoiceTextBlocks('finalInvoice'),
  };
}

function normalizeTextBlocksForVariant(templateTextBlocks, invoiceVariant) {
  if (invoiceVariant === 'text' && !Array.isArray(templateTextBlocks)) {
    return createTextInvoiceTextBlocks();
  }

  if (tradeInvoiceVariantIds.includes(invoiceVariant) && !Array.isArray(templateTextBlocks)) {
    return createTradeInvoiceTextBlocks(invoiceVariant);
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

function createPreviousPayment(index = 1) {
  return {
    id: crypto.randomUUID(),
    label: `${index}. Abschlag`,
    invoiceNumber: `AR-2026-${String(index).padStart(3, '0')}`,
    invoiceDate: '2026-05-07',
    netAmount: '0',
    taxAmount: '0',
    status: index === 1 ? 'paid' : 'open',
  };
}

function normalizePreviousPayments(templatePayments) {
  if (!Array.isArray(templatePayments) || templatePayments.length === 0) {
    return [createPreviousPayment()];
  }

  return templatePayments.map((payment, index) => ({
    id: typeof payment.id === 'string' && payment.id ? payment.id : crypto.randomUUID(),
    label: String(payment.label ?? `${index + 1}. Abschlag`),
    invoiceNumber: String(payment.invoiceNumber ?? ''),
    invoiceDate: String(payment.invoiceDate ?? ''),
    netAmount: String(payment.netAmount ?? '0'),
    taxAmount: typeof payment.taxAmount === 'string'
      ? payment.taxAmount
      : String(Math.round(toNumber(payment.netAmount) * Math.max(0, toNumber(payment.taxRate)) / 100 * 100) / 100),
    status: payment.status === 'open' ? 'open' : 'paid',
  }));
}

function normalizeTextInvoiceDefaultPosition(position) {
  return {
    ...position,
    unit: String(position.unit ?? 'pauschal'),
    taxRate: normalizeTaxRateDisplay(position.taxRate ?? textInvoicePositionDefaults.taxRate),
  };
}

function normalizeTaxRateDisplay(value, fallback = '19 %') {
  const parsed = parseTaxRateNumber(value);

  if (parsed === null || parsed < 0 || parsed > 100) {
    return fallback;
  }

  return `${formatPercent(parsed)} %`;
}

function parseTaxRateNumber(value) {
  const normalized = String(value ?? '')
    .trim()
    .replace(/[^\d,.-]/g, '')
    .replace(/\.(?=\d{3}(?:\D|$))/g, '')
    .replace(',', '.');

  if (!normalized) {
    return null;
  }

  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
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
    return String(value ?? '');
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

export function formatPreviousPaymentNetAmount(value) {
  return formatCurrency(toNumber(value));
}

function formatPercent(value) {
  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPrintTaxRate(value, isStandardInvoice) {
  return `${formatPercent(value)}${isStandardInvoice ? ' %' : '%'}`;
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

function calculatePreviousPayment(payment, { isSmallBusinessInvoice = false } = {}) {
  const net = toNumber(payment.netAmount);
  const tax = isSmallBusinessInvoice ? 0 : Math.max(0, toNumber(payment.taxAmount));

  return { net, tax, gross: net + tax };
}

function emptyTaxGroupSummary() {
  return { net: 0, tax: 0, taxGroups: new Map(), hasDirectPreviousPayments: false };
}

function addToTaxGroup(summary, calculated) {
  const taxKey = String(calculated.taxRate);
  const taxGroup = summary.taxGroups.get(taxKey) ?? {
    taxRate: calculated.taxRate,
    net: 0,
    tax: 0,
    gross: 0,
  };

  taxGroup.net += calculated.net;
  taxGroup.tax += calculated.tax;
  taxGroup.gross += calculated.gross;
  summary.taxGroups.set(taxKey, taxGroup);
  summary.net += calculated.net;
  summary.tax += calculated.tax;
}

function addDirectPreviousPayment(summary, calculated) {
  summary.net += calculated.net;
  summary.tax += calculated.tax;
  summary.hasDirectPreviousPayments = true;
}

function toSortedTaxGroups(taxGroups) {
  return [...taxGroups.values()].sort((first, second) => first.taxRate - second.taxRate);
}

function createInvoiceTotals({
  isFinalInvoice,
  isSmallBusinessInvoice,
  isTextInvoice,
  positions,
  previousPayments,
}) {
  const service = positions.reduce((summary, position) => {
    const calculated = calculatePosition(position, { isSmallBusinessInvoice, isTextInvoice });
    addToTaxGroup(summary, calculated);
    return summary;
  }, emptyTaxGroupSummary());
  const deducted = previousPayments.reduce((summary, payment) => {
    if (payment.status !== 'paid') {
      return summary;
    }

    addDirectPreviousPayment(summary, calculatePreviousPayment(payment, { isSmallBusinessInvoice }));
    return summary;
  }, emptyTaxGroupSummary());
  const remainingGroups = new Map();

  if (!deducted.hasDirectPreviousPayments) {
    toSortedTaxGroups(service.taxGroups).forEach((group) => {
      const deductedGroup = deducted.taxGroups.get(String(group.taxRate)) ?? { net: 0, tax: 0, gross: 0 };
      remainingGroups.set(String(group.taxRate), {
        taxRate: group.taxRate,
        net: group.net - deductedGroup.net,
        tax: group.tax - deductedGroup.tax,
        gross: group.gross - deductedGroup.gross,
      });
    });
  }

  const remaining = {
    net: service.net - deducted.net,
    tax: service.tax - deducted.tax,
    taxGroups: remainingGroups,
  };

  return {
    net: isFinalInvoice ? remaining.net : service.net,
    tax: isFinalInvoice ? remaining.tax : service.tax,
    gross: isFinalInvoice ? remaining.net + remaining.tax : service.net + service.tax,
    taxGroups: toSortedTaxGroups(isFinalInvoice ? remaining.taxGroups : service.taxGroups),
    service: {
      net: service.net,
      tax: service.tax,
      gross: service.net + service.tax,
      taxGroups: toSortedTaxGroups(service.taxGroups),
    },
    deducted: {
      net: deducted.net,
      tax: deducted.tax,
      gross: deducted.net + deducted.tax,
      taxGroups: toSortedTaxGroups(deducted.taxGroups),
      hasDirectPreviousPayments: deducted.hasDirectPreviousPayments,
    },
    remaining: {
      net: remaining.net,
      tax: remaining.tax,
      gross: remaining.net + remaining.tax,
      taxGroups: toSortedTaxGroups(remaining.taxGroups),
      hasDirectPreviousPayments: deducted.hasDirectPreviousPayments,
    },
  };
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

function createSlug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9aouess]+/gi, '-')
    .replace(/^-+|-+$/g, '');
}

export function createInvoicePrintItems({
  isFinalInvoice,
  isSmallBusinessInvoice,
  positions,
  previousPayments,
  projectInfo,
  textBlocks,
  visibleProjectFields,
}) {
  const introBlock = textBlocks.find((block) => block.id === 'intro');
  const closingBlock = textBlocks.find((block) => block.id === 'closing');
  const smallBusinessNoticeBlock = textBlocks.find((block) => block.id === 'smallBusinessNotice');

  return [
    ...(introBlock?.visible ? [{ type: 'text', id: 'intro', text: introBlock.value }] : []),
    ...(visibleProjectFields.length > 0 ? [{ type: 'projectInfo', projectInfo, visibleProjectFields }] : []),
    ...positions.map((position, index) => ({ type: 'position', index, position })),
    ...(isFinalInvoice ? previousPayments.map((payment, index) => ({ type: 'previousPayment', index, payment })) : []),
    { type: 'summary' },
    ...(closingBlock?.visible ? [{ type: 'text', id: 'closing', text: closingBlock.value }] : []),
    ...(isSmallBusinessInvoice && smallBusinessNoticeBlock?.visible
      ? [{ type: 'text', id: 'smallBusinessNotice', text: smallBusinessNoticeBlock.value }]
      : []),
  ];
}

export function getProjectFieldDefinitions(invoiceVariant) {
  if (invoiceVariant === 'progressInvoice') {
    return [
      { field: 'progressPaymentNumber', labelField: 'progressPaymentNumber' },
      { field: 'projectName', labelField: 'projectName' },
      { field: 'orderNumber', labelField: 'orderNumber' },
      { field: 'billingSection', labelField: 'billingSection' },
    ];
  }

  if (invoiceVariant === 'partialInvoice') {
    return [
      { field: 'projectName', labelField: 'projectName' },
      { field: 'orderNumber', labelField: 'orderNumber' },
      { field: 'partialService', labelField: 'partialService' },
      { field: 'completionDate', labelField: 'completionDate' },
    ];
  }

  if (invoiceVariant === 'finalInvoice') {
    return [
      { field: 'projectName', label: 'Projekt', labelField: 'projectName' },
      { field: 'orderNumber', label: 'Referenznr.', labelField: 'orderNumber' },
      { field: 'completionDate', label: 'Zeitraum', labelField: 'completionDate' },
    ];
  }

  return [];
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

function InvoiceProjectBlock({ labels, project, visibleFields, onChange }) {
  if (visibleFields.length === 0) {
    return null;
  }

  return (
    <section className="invoice-project-block" aria-label="Projektangaben">
      {visibleFields.map(({ field, label, labelField }) => {
        const displayLabel = label ?? labels[labelField];

        return (
          <label className="invoice-project-field" key={field}>
            <input
              className="document-label-input"
              aria-label={`Beschriftung ${displayLabel}`}
              value={displayLabel}
              readOnly
            />
            <input
              aria-label={displayLabel}
              value={project[field] ?? ''}
              onChange={(event) => onChange(field, event.target.value)}
            />
          </label>
        );
      })}
    </section>
  );
}

export function PreviousPaymentsTable({
  calculatePayment,
  formatCurrency: formatPaymentCurrency,
  labels,
  onAddPayment,
  onPaymentChange,
  onRemovePayment,
  payments,
}) {
  const columns = getFinalInvoicePreviousPaymentColumns(labels);
  const [focusedAmountField, setFocusedAmountField] = useState(null);

  return (
    <section className="invoice-previous-payments" aria-label={labels.previousPayments}>
      <h3>{labels.previousPayments}</h3>
      <table className="invoice-previous-payments-table">
        <thead>
          <tr>
            {columns.map((column) => <th key={column.field}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => {
            const calculated = calculatePayment(payment);

            return (
              <tr key={payment.id}>
                <td>
                  <span className="invoice-previous-payment-actions">
                    <button
                      aria-label={`${labels.previousPaymentInvoiceNumber} ${index + 1} entfernen`}
                      className="invoice-position-action invoice-position-delete"
                      type="button"
                      disabled={payments.length === 1}
                      onClick={() => onRemovePayment(payment.id)}
                    >
                      &times;
                    </button>
                  </span>
                  <input
                    aria-label={`${labels.previousPaymentInvoiceNumber} ${index + 1}`}
                    value={payment.invoiceNumber}
                    onChange={(event) => onPaymentChange(payment.id, 'invoiceNumber', event.target.value)}
                  />
                </td>
                <td>
                  <input
                    aria-label={`${labels.previousPaymentInvoiceDate} ${index + 1}`}
                    type="date"
                    value={payment.invoiceDate}
                    onChange={(event) => onPaymentChange(payment.id, 'invoiceDate', event.target.value)}
                  />
                </td>
                <td>
                  <input
                    aria-label={`${labels.previousPaymentNet} ${index + 1}`}
                    inputMode="decimal"
                    type="text"
                    value={focusedAmountField === `${payment.id}:netAmount`
                      ? payment.netAmount
                      : formatPreviousPaymentNetAmount(payment.netAmount)}
                    onChange={(event) => onPaymentChange(payment.id, 'netAmount', event.target.value)}
                    onBlur={() => {
                      setFocusedAmountField(null);
                    }}
                    onFocus={(event) => {
                      setFocusedAmountField(`${payment.id}:netAmount`);
                      event.target.select();
                    }}
                    onClick={(event) => {
                      setFocusedAmountField(`${payment.id}:netAmount`);
                      event.target.select();
                    }}
                  />
                </td>
                <td>
                  <input
                    aria-label={`${labels.previousPaymentTaxAmount} ${index + 1}`}
                    inputMode="decimal"
                    type="text"
                    value={focusedAmountField === `${payment.id}:taxAmount`
                      ? payment.taxAmount
                      : formatPreviousPaymentNetAmount(payment.taxAmount)}
                    onChange={(event) => onPaymentChange(payment.id, 'taxAmount', event.target.value)}
                    onBlur={() => {
                      setFocusedAmountField(null);
                    }}
                    onFocus={(event) => {
                      setFocusedAmountField(`${payment.id}:taxAmount`);
                      event.target.select();
                    }}
                    onClick={(event) => {
                      setFocusedAmountField(`${payment.id}:taxAmount`);
                      event.target.select();
                    }}
                  />
                </td>
                <td>{formatPaymentCurrency(calculated.gross)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="offer-add-position" type="button" onClick={onAddPayment}>
        + Abschlagsrechnung hinzufuegen
      </button>
      <p className="invoice-previous-payments-note">
        Nur als vereinnahmt markierte Abschlagsrechnungen werden vom Restbetrag abgezogen.
      </p>
    </section>
  );
}

function FinalInvoiceSummary({ formatCurrency: formatSummaryCurrency, formatPercent: formatSummaryPercent, labels, totals }) {
  return (
    <aside className="offer-summary invoice-document-summary final-invoice-summary" aria-label="Schlussrechnungssummen">
      <div>
        <span>{labels.serviceTotal}</span>
        <strong>{formatSummaryCurrency(totals.service.gross)}</strong>
      </div>
      {totals.service.taxGroups.map((group) => (
        <div key={`service-${group.taxRate}`}>
          <span>
            {labels.serviceTax} {formatSummaryPercent(group.taxRate)}%
          </span>
          <strong>{formatSummaryCurrency(group.tax)}</strong>
        </div>
      ))}
      <div>
        <span>{labels.deductedPayments}</span>
        <strong>-{formatSummaryCurrency(totals.deducted.gross)}</strong>
      </div>
      {totals.deducted.taxGroups.map((group) => (
        <div key={`deducted-${group.taxRate}`}>
          <span>
            {labels.deductedPaymentTax} {formatSummaryPercent(group.taxRate)}%
          </span>
          <strong>-{formatSummaryCurrency(group.tax)}</strong>
        </div>
      ))}
      {totals.deducted.hasDirectPreviousPayments && (
        <div>
          <span>{labels.deductedPaymentTax}</span>
          <strong>-{formatSummaryCurrency(totals.deducted.tax)}</strong>
        </div>
      )}
      <div>
        <span>{labels.remainingNet}</span>
        <strong>{formatSummaryCurrency(totals.remaining.net)}</strong>
      </div>
      {totals.remaining.taxGroups.map((group) => (
        <div key={`remaining-${group.taxRate}`}>
          <span>
            {labels.remainingTax} {formatSummaryPercent(group.taxRate)}%
          </span>
          <strong>{formatSummaryCurrency(group.tax)}</strong>
        </div>
      ))}
      {totals.remaining.hasDirectPreviousPayments && (
        <div>
          <span>{labels.remainingTax}</span>
          <strong>{formatSummaryCurrency(totals.remaining.tax)}</strong>
        </div>
      )}
      <div>
        <span>{labels.remainingGross}</span>
        <strong>{formatSummaryCurrency(totals.remaining.gross)}</strong>
      </div>
    </aside>
  );
}

export default function InvoiceDocumentEditor({ initialSmallBusiness, invoiceVariant = 'standard', onInvoiceVariantChange, onSmallBusinessChange }) {
  const normalizedInvoiceVariant = invoiceVariantIds.includes(invoiceVariant)
    ? invoiceVariant
    : 'standard';
  const isStandardInvoice = normalizedInvoiceVariant === 'standard';
  const isTextInvoice = normalizedInvoiceVariant === 'text';
  const isGoodsInvoice = normalizedInvoiceVariant === 'goods';
  const isFinalInvoice = normalizedInvoiceVariant === 'finalInvoice';
  const projectFieldDefinitions = getProjectFieldDefinitions(normalizedInvoiceVariant);
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
  const textBlockRefs = useRef({});
  const dateInputRefs = useRef({});
  const [invoiceData, setInvoiceData] = useState(defaultInvoiceData);
  const [isSmallBusinessInvoice, setIsSmallBusinessInvoice] = useState(() =>
    typeof initialSmallBusiness === 'boolean' ? initialSmallBusiness : readStoredSmallBusinessMode(),
  );
  const [textBlockSets, setTextBlockSets] = useState(createInitialTextBlockSets);
  const [positions, setPositions] = useState(() => [isTextInvoice ? createTextInvoicePosition() : createInvoicePosition()]);
  const [previousPayments, setPreviousPayments] = useState(() => [createPreviousPayment()]);
  const { sender, recipient, deliveryAddress, details, project, footerLines } = useMemo(
    () => createInvoiceViewData(invoiceData),
    [invoiceData],
  );
  const activeTextBlockSetKey = getTextBlockSetKey(normalizedInvoiceVariant);
  const textBlocks = textBlockSets[activeTextBlockSetKey] ?? textBlockSets.default;
  const initialGeneratorStatesRef = useRef({});
  const currentGeneratorState = {
    invoiceVariant: normalizedInvoiceVariant,
    labels,
    invoiceData,
    positions,
    previousPayments,
    textBlocks,
    isSmallBusinessInvoice,
    fieldConfig,
  };
  if (!initialGeneratorStatesRef.current[normalizedInvoiceVariant]) {
    initialGeneratorStatesRef.current[normalizedInvoiceVariant] = structuredClone(currentGeneratorState);
  }

  useEffect(() => {
    if (typeof initialSmallBusiness === 'boolean') {
      setIsSmallBusinessInvoice(initialSmallBusiness);
    }
  }, [initialSmallBusiness]);

  useEffect(() => {
    setTextBlockSets((current) => {
      const textBlockSetKey = getTextBlockSetKey(normalizedInvoiceVariant);

      if (current[textBlockSetKey]) {
        return current;
      }

      return {
        ...current,
        [textBlockSetKey]: normalizeTextBlocksForVariant(undefined, normalizedInvoiceVariant),
      };
    });

    setLabels((current) => {
      const nextTitle = invoiceVariantTitles[normalizedInvoiceVariant] ?? invoiceVariantTitles.standard;
      const knownTitles = new Set(Object.values(invoiceVariantTitles));

      if (knownTitles.has(current.title)) {
        return {
          ...current,
          title: nextTitle,
          grandTotal: normalizedInvoiceVariant === 'finalInvoice' ? 'Offener Restbetrag' : initialInvoiceLabels.grandTotal,
        };
      }

      return current;
    });
  }, [normalizedInvoiceVariant]);

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

  const totals = useMemo(
    () =>
      createInvoiceTotals({
        isFinalInvoice,
        isSmallBusinessInvoice,
        isTextInvoice,
        positions,
        previousPayments,
      }),
    [isFinalInvoice, isSmallBusinessInvoice, isTextInvoice, positions, previousPayments],
  );

  const calculateCurrentPosition = useMemo(
    () => (position) => calculatePosition(position, { isSmallBusinessInvoice, isTextInvoice }),
    [isSmallBusinessInvoice, isTextInvoice],
  );
  const calculateCurrentPreviousPayment = useMemo(
    () => (payment) => calculatePreviousPayment(payment, { isSmallBusinessInvoice }),
    [isSmallBusinessInvoice],
  );
  const printItems = useMemo(
    () =>
      createInvoicePrintItems({
        isFinalInvoice,
        isSmallBusinessInvoice,
        positions,
        previousPayments,
        projectInfo: project,
        textBlocks,
        visibleProjectFields: projectFieldDefinitions,
      }),
    [isFinalInvoice, isSmallBusinessInvoice, positions, previousPayments, project, projectFieldDefinitions, textBlocks],
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
          ? ['description', 'unitPrice', 'unit', ...(isSmallBusinessInvoice ? [] : ['taxRate'])]
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

      if (field === 'street') {
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: { ...current.recipient.address, street: value, houseNumber: '' },
          },
        };
      }

      if (field === 'cityLine') {
        return {
          ...current,
          recipient: {
            ...current.recipient,
            address: { ...current.recipient.address, postalCode: value, city: '' },
          },
        };
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

  function updateProjectField(field, value) {
    setInvoiceData((current) => ({
      ...current,
      project: {
        ...current.project,
        [field]: value,
      },
    }));
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
        if (entryField === 'companyStreet') {
          footer.company.street = String(entryValue ?? '');
          footer.company.houseNumber = '';
        }
        if (entryField === 'companyPostalCode') footer.company.postalCode = normalizedValue;
        if (entryField === 'companyCityName') footer.company.city = normalizedValue;
        if (entryField === 'companyCity') {
          footer.company.postalCode = String(entryValue ?? '');
          footer.company.city = '';
        }
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

  function addPreviousPayment() {
    setPreviousPayments((current) => [...current, createPreviousPayment(current.length + 1)]);
  }

  function updatePreviousPayment(paymentId, field, value) {
    setPreviousPayments((current) =>
      current.map((payment) => (payment.id === paymentId ? { ...payment, [field]: value } : payment)),
    );
  }

  function removePreviousPayment(paymentId) {
    setPreviousPayments((current) =>
      current.length === 1 ? current : current.filter((payment) => payment.id !== paymentId),
    );
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

      if (field === 'street') {
        return {
          ...current,
          deliveryAddress: {
            ...current.deliveryAddress,
            address: { ...current.deliveryAddress.address, street: value, houseNumber: '' },
          },
        };
      }

      if (field === 'cityLine') {
        return {
          ...current,
          deliveryAddress: {
            ...current.deliveryAddress,
            address: { ...current.deliveryAddress.address, postalCode: value, city: '' },
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

  function handleInvoiceVariantSelect(nextVariant) {
    if (!invoiceVariantIds.includes(nextVariant)) {
      return;
    }

    onInvoiceVariantChange?.(nextVariant);
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

  function handleNewDocument() {
    const resetSmallBusinessMode = readStoredSmallBusinessMode();

    setLabels(initialInvoiceLabels);
    setInvoiceData(defaultInvoiceData);
    setPositions([isTextInvoice ? createTextInvoicePosition() : createInvoicePosition()]);
    setPreviousPayments([createPreviousPayment()]);
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
    delete initialGeneratorStatesRef.current[normalizedInvoiceVariant];
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await refreshPrintPages();
      const belege24Document = normalizedInvoiceVariant === 'standard'
        ? mapStandardInvoiceToDocument({
            invoiceVariant: normalizedInvoiceVariant,
            labels,
            invoiceData,
            positions,
            previousPayments,
            textBlocks,
            isSmallBusinessInvoice,
            fieldConfig,
          })
        : isGoodsInvoice
          ? mapGoodsInvoiceToDocument({
              invoiceVariant: 'goods',
              labels,
              invoiceData,
              positions,
              previousPayments,
              textBlocks,
              isSmallBusinessInvoice,
              fieldConfig,
            })
          : normalizedInvoiceVariant === 'text' ? mapTextInvoiceToDocument({ invoiceVariant: 'text', labels, invoiceData, positions, previousPayments, textBlocks, isSmallBusinessInvoice, fieldConfig }) : normalizedInvoiceVariant === 'progressInvoice' ? mapProgressInvoiceToDocument({ invoiceVariant: 'progressInvoice', labels, invoiceData, positions, previousPayments, textBlocks, isSmallBusinessInvoice, fieldConfig }) : normalizedInvoiceVariant === 'partialInvoice' ? mapPartialInvoiceToDocument({ invoiceVariant: 'partialInvoice', labels, invoiceData, positions, previousPayments, textBlocks, isSmallBusinessInvoice, fieldConfig }) : normalizedInvoiceVariant === 'finalInvoice' ? mapFinalInvoiceToDocument({ invoiceVariant: 'finalInvoice', labels, invoiceData, positions, previousPayments, textBlocks, isSmallBusinessInvoice, fieldConfig }) : undefined;

      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'invoice',
        filename: createPdfFileName(labels.title, details.invoiceNumber, normalizedInvoiceVariant),
        belege24Document,
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
      const { importFinalInvoicePdf, importGoodsInvoicePdf, importPartialInvoicePdf, importProgressInvoicePdf, importStandardInvoicePdf, importTextInvoicePdf } = await import('../documentModel/invoicePdfImport.js');
      importResult = normalizedInvoiceVariant === 'goods'
        ? await importGoodsInvoicePdf(await file.arrayBuffer())
        : normalizedInvoiceVariant === 'text' ? await importTextInvoicePdf(await file.arrayBuffer()) : normalizedInvoiceVariant === 'progressInvoice' ? await importProgressInvoicePdf(await file.arrayBuffer()) : normalizedInvoiceVariant === 'partialInvoice' ? await importPartialInvoicePdf(await file.arrayBuffer()) : normalizedInvoiceVariant === 'finalInvoice' ? await importFinalInvoicePdf(await file.arrayBuffer()) : await importStandardInvoicePdf(await file.arrayBuffer());
    } catch {
      window.alert('Die PDF konnte nicht gelesen werden.');
      return;
    }
    if (importResult.status !== 'valid') {
      window.alert(importResult.message);
      return;
    }

    const { confirmGoodsInvoiceOverwrite, confirmStandardInvoiceOverwrite } = await import('../documentModel/invoicePdfImport.js');
    const confirmOverwrite = normalizedInvoiceVariant === 'goods'
      ? confirmGoodsInvoiceOverwrite
      : confirmStandardInvoiceOverwrite;
    const mayOverwrite = confirmOverwrite(
      currentGeneratorState,
      initialGeneratorStatesRef.current[normalizedInvoiceVariant],
      () => window.confirm(
        `Die aktuelle ${invoiceVariants.find((variant) => variant.id === normalizedInvoiceVariant)?.label ?? 'Rechnung'} enthält Änderungen. Möchtest du sie vollständig durch die Daten aus der PDF ersetzen?`,
      ),
    );
    if (!mayOverwrite) return;

    const restored = importResult.state;
    setLabels(restored.labels);
    setInvoiceData(restored.invoiceData);
    setPositions(restored.positions);
    setPreviousPayments(restored.previousPayments);
    setActiveTextBlocks(restored.textBlocks, normalizedInvoiceVariant);
    setSmallBusinessMode(restored.isSmallBusinessInvoice, { persist: false });
    setFieldConfig(restored.fieldConfig);
    setHighlightFields(false);
    setIsDataCheckMode(false);
    setIsFormPanelOpen(false);
    setIsExportRenderActive(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialGeneratorStatesRef.current[normalizedInvoiceVariant] = structuredClone({
      invoiceVariant: normalizedInvoiceVariant,
      labels: restored.labels,
      invoiceData: restored.invoiceData,
      positions: restored.positions,
      previousPayments: restored.previousPayments,
      textBlocks: restored.textBlocks,
      isSmallBusinessInvoice: restored.isSmallBusinessInvoice,
      fieldConfig: restored.fieldConfig,
    });
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
          onChange={handleInvoiceVariantSelect}
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
          onCreatePdf={handleCreatePdf}
          onLoadPdf={['standard', 'goods', 'text', 'progressInvoice', 'partialInvoice', 'finalInvoice'].includes(normalizedInvoiceVariant) ? handleLoadPdf : undefined}
          onNewDocument={handleNewDocument}
          onPrint={handlePrint}
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

        {isFinalInvoice && renderTextBlock(textBlocks.find((block) => block.id === 'intro'), 0, isSmallBusinessInvoice ? 2 : 1)}

        <InvoiceProjectBlock
          labels={labels}
          project={project}
          visibleFields={projectFieldDefinitions}
          onChange={updateProjectField}
        />

        {!isFinalInvoice && renderTextBlock(textBlocks.find((block) => block.id === 'intro'), 0, isSmallBusinessInvoice ? 2 : 1)}

        <PositionTable
          autoResizeDescription
          calculatePosition={calculateCurrentPosition}
          dataCheckPositions={dataCheckState.positions}
          formatUnitPriceOnBlur
          formatCurrency={formatCurrency}
          normalizeTaxRateOnBlur={isStandardInvoice}
          isGoodsInvoice={isGoodsInvoice}
          isTextInvoice={isTextInvoice}
          labels={labels}
          positions={positions}
          showTaxColumn={!isSmallBusinessInvoice}
          useInvoiceColumnWidths
          variant="offer"
          onLabelChange={updateLabel}
          onMovePosition={movePosition}
          onPositionChange={updatePosition}
          onRemovePosition={removePosition}
        />

        <button className="offer-add-position" type="button" onClick={addPosition}>
          + Position hinzufügen
        </button>

        {isFinalInvoice && (
          <PreviousPaymentsTable
            calculatePayment={calculateCurrentPreviousPayment}
            formatCurrency={formatCurrency}
            labels={labels}
            payments={previousPayments}
            onAddPayment={addPreviousPayment}
            onPaymentChange={updatePreviousPayment}
            onRemovePayment={removePreviousPayment}
          />
        )}

        {isFinalInvoice ? (
          <FinalInvoiceSummary
            formatCurrency={formatCurrency}
            formatPercent={formatPercent}
            labels={labels}
            totals={totals}
          />
        ) : (
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
        )}

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
            calculatePreviousPayment={calculateCurrentPreviousPayment}
            isFinalInvoice={isFinalInvoice}
            isGoodsInvoice={isGoodsInvoice}
            isSmallBusinessInvoice={isSmallBusinessInvoice}
            isStandardInvoice={isStandardInvoice}
            isTextInvoice={isTextInvoice}
            items={printItems}
            labels={labels}
            totals={totals}
          />
          <InvoicePrintPages
            ref={printPagesRef}
            calculatePosition={calculateCurrentPosition}
            calculatePreviousPayment={calculateCurrentPreviousPayment}
            details={details}
            deliveryAddress={deliveryAddress}
            footerLines={footerLines}
            isFinalInvoice={isFinalInvoice}
            isGoodsInvoice={isGoodsInvoice}
            isSmallBusinessInvoice={isSmallBusinessInvoice}
            isStandardInvoice={isStandardInvoice}
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
  {
    calculatePosition: calculateInvoicePosition,
    calculatePreviousPayment: calculateInvoicePreviousPayment,
    isFinalInvoice,
    isGoodsInvoice,
    isSmallBusinessInvoice,
    isStandardInvoice,
    isTextInvoice,
    items,
    labels,
    totals,
  },
  ref,
) {
  const measureRootRef = useRef(null);
  const positionItems = items.filter((item) => item.type === 'position');
  const previousPaymentItems = items.filter((item) => item.type === 'previousPayment');
  const projectInfoItem = items.find((item) => item.type === 'projectInfo');

  function measureNow() {
    return measureInvoicePages(measureRootRef.current, items, { isFinalInvoice });
  }

  useImperativeHandle(ref, () => ({ measureNow }), [isFinalInvoice, items]);

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
        <div data-measure-project-info>
          {isFinalInvoice && projectInfoItem && (
            <InvoicePrintProjectInfo
              labels={labels}
              projectInfo={projectInfoItem.projectInfo}
              visibleProjectFields={projectInfoItem.visibleProjectFields}
            />
          )}
        </div>
        <table className={`invoice-print-position-table${isSmallBusinessInvoice ? ' is-without-tax-column' : ''}${isTextInvoice ? ' is-text-invoice' : ''}${isGoodsInvoice ? ' is-goods-invoice' : ''}`}>
          <InvoicePrintColumnGroup
            isGoodsInvoice={isGoodsInvoice}
            isSmallBusinessInvoice={isSmallBusinessInvoice}
            isTextInvoice={isTextInvoice}
          />
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
                      {!isSmallBusinessInvoice && <td>{formatPercent(calculated.taxRate)} %</td>}
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
                      {!isSmallBusinessInvoice && <td>{formatPrintTaxRate(calculated.taxRate, isStandardInvoice)}</td>}
                      <td>{formatCurrency(calculated.net)}</td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div data-measure-summary>
          <InvoicePrintSummary isFinalInvoice={isFinalInvoice} isSmallBusinessInvoice={isSmallBusinessInvoice} labels={labels} totals={totals} />
        </div>
        <div data-measure-previous-payments>
          {isFinalInvoice && (
            <InvoicePrintPreviousPaymentsTable
              calculatePreviousPayment={calculateInvoicePreviousPayment}
              labels={labels}
              measureRows
              previousPaymentItems={previousPaymentItems}
            />
          )}
        </div>
      </div>
    </div>
  );
});

function getInvoicePrintColumnWidths({ isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice }) {
  if (isTextInvoice) {
    return [];
  }

  if (isGoodsInvoice) {
    return isSmallBusinessInvoice
      ? ['5%', '17.4378%', '42.6%', '11.2%', '5.2%', '8.5622%', '10%']
      : ['5%', '17.4378%', '37.8%', '11.2%', '5.2%', '8.5622%', '4.8%', '10%'];
  }

  return isSmallBusinessInvoice
    ? ['5.5%', '49.7378%', '13.5%', '8.5%', '9.2622%', '14%']
    : ['5.5%', '42.7378%', '13.5%', '8.5%', '9.2622%', '6.5%', '14%'];
}

function InvoicePrintColumnGroup({ isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice }) {
  const widths = getInvoicePrintColumnWidths({ isGoodsInvoice, isSmallBusinessInvoice, isTextInvoice });

  if (widths.length === 0) {
    return null;
  }

  return (
    <colgroup>
      {widths.map((width, index) => (
        <col key={`${width}-${index}`} style={{ width }} />
      ))}
    </colgroup>
  );
}

export function measureInvoicePages(measureRoot, items, { isFinalInvoice = false } = {}) {
  if (!measureRoot) return null;

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const projectInfoProbe = measureRoot.querySelector('[data-measure-project-info]');
  const summaryProbe = measureRoot.querySelector('[data-measure-summary] .invoice-print-summary');
  const previousPaymentsProbe = measureRoot.querySelector(
    '[data-measure-previous-payments] .invoice-print-previous-payments',
  );
  const positionHeader = measureRoot.querySelector('[data-measure-position-header]');
  const positionRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-position-row]')].map((row) => [
      row.dataset.measurePositionRow,
      getOuterHeight(row),
    ]),
  );
  const previousPaymentRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-previous-payment-row]')].map((row) => [
      row.dataset.measurePreviousPaymentRow,
      getOuterHeight(row),
    ]),
  );

  if (!firstContent || !followContent || !textProbe || !summaryProbe) return null;
  if (isFinalInvoice && (!projectInfoProbe || !previousPaymentsProbe)) return null;

  const firstPageSafetyBuffer = isFinalInvoice
    ? parseFloat(
      window.getComputedStyle(firstContent).getPropertyValue('--offer-print-small-safety-buffer'),
    ) || invoicePrintLayout.smallSafetyBuffer
    : invoicePrintLayout.smallSafetyBuffer;
  const followPageSafetyBuffer = isFinalInvoice
    ? parseFloat(
      window.getComputedStyle(followContent).getPropertyValue('--offer-print-small-safety-buffer'),
    ) || invoicePrintLayout.smallSafetyBuffer
    : invoicePrintLayout.smallSafetyBuffer;
  const firstPageCapacity = firstContent.getBoundingClientRect().height - firstPageSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - followPageSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || invoicePrintLayout.blockGap;
  const positionHeaderHeight = getOuterHeight(positionHeader);
  const previousPaymentRowsHeight = [...previousPaymentRows.values()].reduce(
    (total, height) => total + height,
    0,
  );
  const previousPaymentBlockOverhead = isFinalInvoice ? Math.max(
    0,
    getOuterHeight(previousPaymentsProbe) - previousPaymentRowsHeight,
  ) : 0;

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'text') return measureTextHeight(item.text);
    if (item.type === 'projectInfo') {
      if (isFinalInvoice) return getOuterHeight(projectInfoProbe);
      return measureTextHeight(
        item.visibleProjectFields
          .map(({ field, labelField }) => `${initialInvoiceLabels[labelField]}: ${item.projectInfo[field]}`)
          .join('\n'),
      );
    }
    if (item.type === 'position') return positionRows.get(String(item.index)) || 0;
    if (item.type === 'previousPayment') return previousPaymentRows.get(String(item.index)) || 0;
    if (item.type === 'summary') return getOuterHeight(summaryProbe);
    return 0;
  }

  function getItemGap(page, item) {
    const previousItem = page.items[page.items.length - 1];
    const startsPositionTable = item.type === 'position' && previousItem?.type !== 'position';
    const startsPreviousPaymentTable = item.type === 'previousPayment' && previousItem?.type !== 'previousPayment';
    const startsNewBlock = page.items.length > 0
      && !(item.type === 'position' && previousItem?.type === 'position')
      && !(item.type === 'previousPayment' && previousItem?.type === 'previousPayment');

    return (startsNewBlock ? blockGap : 0)
      + (startsPositionTable ? positionHeaderHeight : 0)
      + (startsPreviousPaymentTable ? previousPaymentBlockOverhead : 0);
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
  if (first.type === 'projectInfo') {
    return (
      first.visibleProjectFields.map(({ field }) => field).join('|') ===
        second.visibleProjectFields.map(({ field }) => field).join('|') &&
      first.visibleProjectFields.every(({ field }) => first.projectInfo[field] === second.projectInfo[field])
    );
  }
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
  if (first.type === 'previousPayment') {
    return (
      first.index === second.index &&
      first.payment.id === second.payment.id &&
      first.payment.label === second.payment.label &&
      first.payment.invoiceNumber === second.payment.invoiceNumber &&
      first.payment.invoiceDate === second.payment.invoiceDate &&
      first.payment.netAmount === second.payment.netAmount &&
      first.payment.taxAmount === second.payment.taxAmount &&
      first.payment.status === second.payment.status
    );
  }

  return true;
}

const InvoicePrintPages = forwardRef(function InvoicePrintPages(
  {
    calculatePosition: calculateInvoicePosition,
    calculatePreviousPayment: calculateInvoicePreviousPayment,
    details,
    deliveryAddress,
    footerLines,
    isFinalInvoice,
    isGoodsInvoice,
    isSmallBusinessInvoice,
    isStandardInvoice,
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
              calculatePreviousPayment={calculateInvoicePreviousPayment}
              isFinalInvoice={isFinalInvoice}
              isGoodsInvoice={isGoodsInvoice}
              isSmallBusinessInvoice={isSmallBusinessInvoice}
              isStandardInvoice={isStandardInvoice}
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

function InvoicePrintPageItems({
  calculatePosition: calculateInvoicePosition,
  calculatePreviousPayment: calculateInvoicePreviousPayment,
  isFinalInvoice,
  isGoodsInvoice,
  isSmallBusinessInvoice,
  isStandardInvoice,
  isTextInvoice,
  items,
  labels,
  totals,
}) {
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
          isStandardInvoice={isStandardInvoice}
          isTextInvoice={isTextInvoice}
          key={`positions-${positionItems[0].index}`}
          labels={labels}
          positionItems={positionItems}
        />,
      );
      continue;
    }

    if (item.type === 'previousPayment') {
      const previousPaymentItems = [];

      while (items[index]?.type === 'previousPayment') {
        previousPaymentItems.push(items[index]);
        index += 1;
      }

      renderedItems.push(
        <InvoicePrintPreviousPaymentsTable
          calculatePreviousPayment={calculateInvoicePreviousPayment}
          key={`previous-payments-${previousPaymentItems[0].index}`}
          labels={labels}
          previousPaymentItems={previousPaymentItems}
        />,
      );
      continue;
    }

    if (item.type === 'summary') {
      renderedItems.push(
        <InvoicePrintSummary
          isFinalInvoice={isFinalInvoice}
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

    if (item.type === 'projectInfo') {
      renderedItems.push(
        <InvoicePrintProjectInfo
          key={`project-${index}`}
          labels={labels}
          projectInfo={item.projectInfo}
          visibleProjectFields={item.visibleProjectFields}
        />,
      );
    }

    index += 1;
  }

  return renderedItems;
}

function InvoicePrintProjectInfo({ labels, projectInfo, visibleProjectFields }) {
  return (
    <section className="invoice-print-project-info">
      {visibleProjectFields.map(({ field, label, labelField }) => (
        <p key={field}>
          <span>{label ?? labels[labelField]}</span>
          <strong>{projectInfo[field]}</strong>
        </p>
      ))}
    </section>
  );
}

export function InvoicePrintPreviousPaymentsTable({
  calculatePreviousPayment: calculateInvoicePreviousPayment,
  labels,
  measureRows = false,
  previousPaymentItems,
}) {
  const columns = getFinalInvoicePreviousPaymentColumns(labels);

  return (
    <section className="invoice-print-previous-payments">
      <h3>{labels.previousPayments}</h3>
      <table className="invoice-print-position-table invoice-print-previous-payments-table">
        <thead>
          <tr>
            {columns.map((column) => <th key={column.field}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {previousPaymentItems.map(({ index, payment }) => {
            const calculated = calculateInvoicePreviousPayment(payment);

            return (
              <tr data-measure-previous-payment-row={measureRows ? String(index) : undefined} key={payment.id}>
                <td>{payment.invoiceNumber}</td>
                <td>{formatGermanDate(payment.invoiceDate)}</td>
                <td>{formatCurrency(calculated.net)}</td>
                <td>{formatCurrency(calculated.tax)}</td>
                <td>{formatCurrency(calculated.gross)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

function InvoicePrintPositionTable({ calculatePosition: calculateInvoicePosition, isGoodsInvoice, isSmallBusinessInvoice, isStandardInvoice, isTextInvoice, labels, positionItems }) {
  return (
    <table className={`invoice-print-position-table${isSmallBusinessInvoice ? ' is-without-tax-column' : ''}${isTextInvoice ? ' is-text-invoice' : ''}${isGoodsInvoice ? ' is-goods-invoice' : ''}`}>
      <InvoicePrintColumnGroup
        isGoodsInvoice={isGoodsInvoice}
        isSmallBusinessInvoice={isSmallBusinessInvoice}
        isTextInvoice={isTextInvoice}
      />
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
                  {!isSmallBusinessInvoice && <td>{formatPercent(calculated.taxRate)} %</td>}
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
                  {!isSmallBusinessInvoice && <td>{formatPrintTaxRate(calculated.taxRate, isStandardInvoice)}</td>}
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

function InvoicePrintSummary({ isFinalInvoice = false, isSmallBusinessInvoice = false, labels, totals }) {
  if (isFinalInvoice) {
    return (
      <aside className="invoice-print-summary final-invoice-print-summary" aria-label="Schlussrechnungssummen">
        <div>
          <span>{labels.serviceTotal}</span>
          <strong>{formatCurrency(totals.service.gross)}</strong>
        </div>
        {!isSmallBusinessInvoice && totals.service.taxGroups.map((group) => (
          <div key={`service-${group.taxRate}`}>
            <span>
              {labels.serviceTax} {formatPercent(group.taxRate)}%
            </span>
            <strong>{formatCurrency(group.tax)}</strong>
          </div>
        ))}
        <div>
          <span>{labels.deductedPayments}</span>
          <strong>-{formatCurrency(totals.deducted.gross)}</strong>
        </div>
        {!isSmallBusinessInvoice && totals.deducted.taxGroups.map((group) => (
          <div key={`deducted-${group.taxRate}`}>
            <span>
              {labels.deductedPaymentTax} {formatPercent(group.taxRate)}%
            </span>
            <strong>-{formatCurrency(group.tax)}</strong>
          </div>
        ))}
        {!isSmallBusinessInvoice && totals.deducted.hasDirectPreviousPayments && (
          <div>
            <span>{labels.deductedPaymentTax}</span>
            <strong>-{formatCurrency(totals.deducted.tax)}</strong>
          </div>
        )}
        <div>
          <span>{labels.remainingNet}</span>
          <strong>{formatCurrency(totals.remaining.net)}</strong>
        </div>
        {!isSmallBusinessInvoice && totals.remaining.taxGroups.map((group) => (
          <div key={`remaining-${group.taxRate}`}>
            <span>
              {labels.remainingTax} {formatPercent(group.taxRate)}%
            </span>
            <strong>{formatCurrency(group.tax)}</strong>
          </div>
        ))}
        {!isSmallBusinessInvoice && totals.remaining.hasDirectPreviousPayments && (
          <div>
            <span>{labels.remainingTax}</span>
            <strong>{formatCurrency(totals.remaining.tax)}</strong>
          </div>
        )}
        <div>
          <span>{labels.remainingGross}</span>
          <strong>{formatCurrency(totals.remaining.gross)}</strong>
        </div>
      </aside>
    );
  }

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
