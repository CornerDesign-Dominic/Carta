import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import A4Page from './documentBlocks/A4Page.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import OpenItemsTable from './documentBlocks/OpenItemsTable.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import TextBlock from './documentBlocks/TextBlock.jsx';
import TextBlockControls from './documentBlocks/TextBlockControls.jsx';
import ReminderDocumentForm from './ReminderDocumentForm.jsx';
import { paginateMeasuredItems, takeMeasuredText } from './documentExport/MeasuredPaginator.jsx';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const reminderSchemaVersion = '1.0';

const initialReminderLabels = {
  title: '1. Mahnung',
  reminderNumber: 'Mahnungsnummer',
  reminderDate: 'Mahnungsdatum',
  paymentTerm: 'Zahlungsfrist',
  reference: 'Bezug',
  customerNumber: 'Kundennummer',
  invoiceNumber: 'Rechnungsnummer',
  dueDate: 'Fälligkeitsdatum',
  overdueDays: 'Fälligkeitstage',
  invoiceTotal: 'Rechnungsbetrag brutto',
  sumInvoices: 'Summe Rechnungen',
  interest: 'Zinsen',
  reminderFee: 'Mahngebühr',
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
  {
    autoComplete: 'new-password',
    field: 'reminderNumber',
    ariaLabel: 'Mahnungskennung',
    name: 'carta-reminder-code',
    type: 'text',
  },
  { field: 'reminderDate', ariaLabel: 'Mahnungsdatum', type: 'date' },
  { field: 'paymentTerm', ariaLabel: 'Zahlungsfrist', type: 'text' },
  { field: 'reference', ariaLabel: 'Referenz', type: 'text' },
  { field: 'customerNumber', ariaLabel: 'Kundenreferenz', name: 'carta-reminder-customer-reference', type: 'text' },
];

const reminderRecipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Haenden' },
  { field: 'name', label: 'Name / Abteilung' },
];

const reminderFooterColumns = [
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

const reminderFooterLabeledFields = {
  vatId: 'vatIdLabel',
  taxNumber: 'taxNumberLabel',
  iban: 'ibanLabel',
  bic: 'bicLabel',
};

const defaultReminderData = {
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
  details: {
    reminderNumber: 'MAH-2026-001',
    reminderDate: '2026-05-07',
    paymentTerm: '7 Tage',
    reference: 'Offene Rechnung',
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

const reminderPrintLayout = {
  blockGap: 12,
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

function createReminderViewData({ sender, recipient, details, footer }) {
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
    details,
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

function createOpenItem() {
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
    recipient: createFieldConfig(reminderRecipientOptionalFields),
    footerMiddle: createFieldConfig(reminderFooterColumns[1]),
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

  return {
    hidden: Array.isArray(config?.hidden)
      ? config.hidden.filter((field) => knownFields.has(field))
      : fallback.hidden,
    order: [...configuredOrder, ...fallback.order.filter((field) => !configuredOrder.includes(field))],
  };
}

function normalizeReminderData(data = {}) {
  return {
    sender: {
      ...defaultReminderData.sender,
      ...(data.sender ?? {}),
      address: { ...defaultReminderData.sender.address, ...(data.sender?.address ?? {}) },
      contact: { ...defaultReminderData.sender.contact, ...(data.sender?.contact ?? {}) },
    },
    recipient: {
      ...defaultReminderData.recipient,
      ...(data.recipient ?? {}),
      address: { ...defaultReminderData.recipient.address, ...(data.recipient?.address ?? {}) },
    },
    details: { ...defaultReminderData.details, ...(data.details ?? {}) },
    footer: {
      company: { ...defaultReminderData.footer.company, ...(data.footer?.company ?? {}) },
      tax: { ...defaultReminderData.footer.tax, ...(data.footer?.tax ?? {}) },
      bank: { ...defaultReminderData.footer.bank, ...(data.footer?.bank ?? {}) },
    },
  };
}

function normalizeTextBlocks(templateTextBlocks) {
  const defaults = defaultReminderTextBlocks.map((block) => ({ ...block }));

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

function normalizeOpenItems(templateItems) {
  if (!Array.isArray(templateItems) || templateItems.length === 0) {
    return [createOpenItem()];
  }

  return templateItems.map((item) => ({
    id: typeof item.id === 'string' && item.id ? item.id : crypto.randomUUID(),
    invoiceNumber: String(item.invoiceNumber ?? 'RE-2026-001'),
    dueDate: String(item.dueDate ?? ''),
    overdueDays: String(item.overdueDays ?? '0'),
    amount: String(item.amount ?? '0'),
  }));
}

function formatReminderFooterLine(field, value = '', footerLines = {}) {
  const normalized = String(value ?? '').trim();
  const labelField = reminderFooterLabeledFields[field];
  const label = labelField ? String(footerLines[labelField] ?? '').trim() : '';

  if (!labelField) {
    return normalized;
  }

  return [label, normalized].filter(Boolean).join(' ');
}

function parseReminderFooterLine(field, value = '') {
  const labelField = reminderFooterLabeledFields[field];

  if (!labelField) {
    return String(value ?? '').trim();
  }

  return {
    [labelField]: '',
    [field]: String(value ?? '').trim(),
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

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

function resizeTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function createPdfFileName(title, number) {
  const cleanTitle = createSlug(title || 'mahnung');
  const cleanNumber = createSlug(number || new Date().toISOString().slice(0, 10));

  return `${cleanTitle || 'mahnung'}-${cleanNumber || 'dokument'}.pdf`;
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
    throw new Error('Die JSON-Datei ist kein gültiges Mahnungsdokument.');
  }

  if (template.documentType !== 'reminder') {
    throw new Error('Diese JSON-Datei ist keine Mahnung.');
  }

  if (template.schemaVersion !== reminderSchemaVersion) {
    throw new Error('Diese Mahnungsversion wird nicht unterstützt.');
  }

  if (!template.data || typeof template.data !== 'object') {
    throw new Error('Die JSON-Datei enthält keine Mahnungsdaten.');
  }

  return template.data;
}

function createReminderPrintItems({ openItems, textBlocks }) {
  const introBlock = textBlocks.find((block) => block.id === 'intro');
  const closingBlock = textBlocks.find((block) => block.id === 'closing');

  return [
    ...(introBlock?.visible ? [{ type: 'text', id: 'intro', text: introBlock.value }] : []),
    ...openItems.map((item, index) => ({
      type: 'openItem',
      index,
      item,
    })),
    { type: 'summary' },
    ...(closingBlock?.visible ? [{ type: 'text', id: 'closing', text: closingBlock.value }] : []),
  ];
}

export default function ReminderDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialReminderLabels);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(reminderContactFields),
    details: createFieldConfig(reminderMetaFields),
    recipient: createFieldConfig(reminderRecipientOptionalFields),
    footerMiddle: createFieldConfig(reminderFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const paginatorRef = useRef(null);
  const jsonInputRef = useRef(null);
  const textBlockRefs = useRef({});
  const dateInputRefs = useRef({});
  const [reminderData, setReminderData] = useState(defaultReminderData);
  const [textBlocks, setTextBlocks] = useState(defaultReminderTextBlocks);
  const [openItems, setOpenItems] = useState([createOpenItem()]);
  const [charges, setCharges] = useState({ interest: '0', reminderFee: '5.00' });
  const { sender, recipient, details, footerLines } = useMemo(
    () => createReminderViewData(reminderData),
    [reminderData],
  );

  useEffect(() => {
    textBlocks.forEach((block) => {
      if (block.visible) {
        resizeTextarea(textBlockRefs.current[block.id]);
      }
    });
  }, [textBlocks]);

  const totals = useMemo(() => {
    const invoiceSum = openItems.reduce((sum, item) => sum + toNumber(item.amount), 0);
    const interest = toNumber(charges.interest);
    const reminderFee = toNumber(charges.reminderFee);

    return {
      invoiceSum,
      interest,
      reminderFee,
      grandTotal: invoiceSum + interest + reminderFee,
    };
  }, [openItems, charges]);

  const printItems = useMemo(
    () => createReminderPrintItems({ openItems, textBlocks }),
    [openItems, textBlocks],
  );
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);

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

  function updateSender(field, value) {
    setReminderData((current) => {
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
    setReminderData((current) => {
      if (field === 'company') {
        return { ...current, recipient: { ...current.recipient, companyName: value } };
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
    setReminderData((current) => ({
      ...current,
      details: { ...current.details, [field]: value },
    }));
  }

  function updateFooterLine(field, value) {
    setReminderData((current) => {
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

  function updateCharge(field, value) {
    setCharges((current) => ({ ...current, [field]: value }));
  }

  function updateOpenItem(itemId, field, value) {
    setOpenItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, [field]: value } : item)),
    );
  }

  function addOpenItem() {
    setOpenItems((current) => [...current, createOpenItem()]);
  }

  function removeOpenItem(itemId) {
    setOpenItems((current) => (current.length === 1 ? current : current.filter((item) => item.id !== itemId)));
  }

  function moveOpenItem(itemId, direction) {
    setOpenItems((current) => {
      const index = current.findIndex((item) => item.id === itemId);
      const targetIndex = index + direction;

      if (index < 0 || targetIndex < 0 || targetIndex >= current.length) {
        return current;
      }

      const next = [...current];
      const [item] = next.splice(index, 1);
      next.splice(targetIndex, 0, item);

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
        ...reminderData,
        openItems,
        charges,
        textBlocks,
        fieldConfig,
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
      window.alert('Bitte eine JSON-Datei auswählen.');
      return;
    }

    try {
      const template = JSON.parse(await file.text());
      const data = validateReminderTemplate(template);

      setLabels({ ...initialReminderLabels, ...(data.labels ?? {}) });
      setReminderData(normalizeReminderData(data));
      setOpenItems(normalizeOpenItems(data.openItems));
      setCharges({ interest: '0', reminderFee: '5.00', ...(data.charges ?? {}) });
      setTextBlocks(normalizeTextBlocks(data.textBlocks));
      setFieldConfig(normalizeFieldConfig(data.fieldConfig));
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
        documentType: 'reminder',
        filename: createPdfFileName(labels.title, details.reminderNumber),
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
      <ReminderDocumentForm
        addOpenItem={addOpenItem}
        charges={charges}
        details={reminderData.details}
        footerLines={footerLines}
        formatCurrency={formatCurrency}
        isOpen={isFormPanelOpen}
        moveOpenItem={moveOpenItem}
        onToggle={() => setIsFormPanelOpen((current) => !current)}
        openItems={openItems}
        recipient={reminderData.recipient}
        removeOpenItem={removeOpenItem}
        sender={reminderData.sender}
        textBlocks={textBlocks}
        toggleTextBlockVisibility={toggleTextBlockVisibility}
        totals={totals}
        updateCharge={updateCharge}
        updateDetail={updateDetail}
        updateFooterLine={updateFooterLine}
        updateOpenItem={updateOpenItem}
        updateRecipient={updateRecipient}
        updateSender={updateSender}
        updateTextBlock={updateTextBlock}
      />

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
            hiddenFields={getHiddenFields('recipient', reminderRecipientOptionalFields)}
            recipient={recipient}
            senderLine={sender.senderLine}
            onRecipientChange={updateRecipient}
            onSenderLineChange={(value) => updateSender('senderLine', value)}
            onToggleField={(field) => toggleConfiguredField('recipient', field)}
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
          items={openItems}
          labels={labels}
          onAddItem={addOpenItem}
          onDatePicker={openDatePicker}
          onItemChange={updateOpenItem}
          onLabelChange={updateLabel}
          onMoveItem={moveOpenItem}
          onRemoveItem={removeOpenItem}
        />

        <ReminderSummary labels={labels} totals={totals} charges={charges} updateCharge={updateCharge} updateLabel={updateLabel} />

        {renderTextBlock(textBlocks.find((block) => block.id === 'closing'), 1)}

        <FooterBlock
          columns={[
            reminderFooterColumns[0],
            getOrderedDefinitions('footerMiddle', reminderFooterColumns[1]),
            reminderFooterColumns[2],
          ]}
          footerLines={footerLines}
          formatFooterLine={(field, value) => formatReminderFooterLine(field, value, footerLines)}
          hiddenFields={getHiddenFields('footerMiddle', reminderFooterColumns[1])}
          onFooterLineChange={updateFooterLine}
          onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)}
          onToggleField={(field) => toggleConfiguredField('footerMiddle', field)}
          parseFooterLine={parseReminderFooterLine}
        />
      </A4Page>

      {isExportRenderActive ? (
        <>
          <MeasuredReminderPaginator ref={paginatorRef} items={printItems} labels={labels} totals={totals} />
          <ReminderPrintPages
            ref={printPagesRef}
            details={details}
            footerLines={footerLines}
            labels={labels}
            pages={printPages}
            recipient={recipient}
            sender={sender}
            totals={totals}
            visibleContactDefinitions={getOrderedDefinitions('contact', reminderContactFields).filter(
              (definition) => !fieldConfig.contact.hidden.includes(definition.field),
            )}
            visibleDetailDefinitions={getOrderedDefinitions('details', reminderMetaFields).filter(
              (definition) => !fieldConfig.details.hidden.includes(definition.field),
            )}
            visibleRecipientFields={reminderRecipientOptionalFields.filter(
              (definition) => !fieldConfig.recipient.hidden.includes(definition.field),
            )}
            visibleFooterMiddleDefinitions={getOrderedDefinitions('footerMiddle', reminderFooterColumns[1]).filter(
              (definition) => !fieldConfig.footerMiddle.hidden.includes(definition.field),
            )}
          />
        </>
      ) : null}
    </div>
  );
}

function ReminderSummary({ charges, labels, totals, updateCharge, updateLabel }) {
  return (
    <aside className="offer-summary invoice-document-summary reminder-document-summary" aria-label="Mahnungssummen">
      <div>
        <input className="document-label-input" aria-label="Beschriftung Summe Rechnungen" value={labels.sumInvoices} onChange={(event) => updateLabel('sumInvoices', event.target.value)} />
        <strong>{formatCurrency(totals.invoiceSum)}</strong>
      </div>
      <div>
        <input className="document-label-input" aria-label="Beschriftung Zinsen" value={labels.interest} onChange={(event) => updateLabel('interest', event.target.value)} />
        <input className="reminder-summary-value" aria-label="Zinsen" inputMode="decimal" type="text" value={charges.interest} onChange={(event) => updateCharge('interest', event.target.value)} />
      </div>
      <div>
        <input className="document-label-input" aria-label="Beschriftung Mahngebühr" value={labels.reminderFee} onChange={(event) => updateLabel('reminderFee', event.target.value)} />
        <input className="reminder-summary-value" aria-label="Mahngebühr" inputMode="decimal" type="text" value={charges.reminderFee} onChange={(event) => updateCharge('reminderFee', event.target.value)} />
      </div>
      <div>
        <input className="document-label-input" aria-label="Beschriftung Gesamt zu zahlender Betrag" value={labels.grandTotal} onChange={(event) => updateLabel('grandTotal', event.target.value)} />
        <strong>{formatCurrency(totals.grandTotal)}</strong>
      </div>
    </aside>
  );
}

const MeasuredReminderPaginator = forwardRef(function MeasuredReminderPaginator({ items, labels, totals }, ref) {
  const measureRootRef = useRef(null);
  const openItemItems = items.filter((item) => item.type === 'openItem');

  function measureNow() {
    return measureReminderPages(measureRootRef.current, items);
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
        <table className="invoice-print-position-table reminder-print-open-items-table">
          <thead>
            <tr data-measure-open-item-header>
              <th>{labels.invoiceNumber}</th>
              <th>{labels.dueDate}</th>
              <th>{labels.overdueDays}</th>
              <th>{labels.invoiceTotal}</th>
            </tr>
          </thead>
          <tbody>
            {openItemItems.map(({ index, item }) => (
              <tr data-measure-open-item-row={String(index)} key={item.id}>
                <td>{item.invoiceNumber}</td>
                <td>{formatGermanDate(item.dueDate)}</td>
                <td>{item.overdueDays}</td>
                <td>{formatCurrency(toNumber(item.amount))}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div data-measure-summary>
          <ReminderPrintSummary labels={labels} totals={totals} />
        </div>
      </div>
    </div>
  );
});

function measureReminderPages(measureRoot, items) {
  if (!measureRoot) {
    return null;
  }

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const summaryProbe = measureRoot.querySelector('[data-measure-summary] .invoice-print-summary');
  const openItemHeader = measureRoot.querySelector('[data-measure-open-item-header]');
  const openItemRows = new Map(
    [...measureRoot.querySelectorAll('[data-measure-open-item-row]')].map((row) => [
      row.dataset.measureOpenItemRow,
      getOuterHeight(row),
    ]),
  );

  if (!firstContent || !followContent || !textProbe || !summaryProbe || !openItemHeader) {
    return null;
  }

  const firstPageCapacity = firstContent.getBoundingClientRect().height - reminderPrintLayout.smallSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - reminderPrintLayout.smallSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || reminderPrintLayout.blockGap;
  const openItemHeaderHeight = getOuterHeight(openItemHeader);

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'text') return measureTextHeight(item.text);
    if (item.type === 'openItem') return openItemRows.get(String(item.index)) || 0;
    if (item.type === 'summary') return getOuterHeight(summaryProbe);
    return 0;
  }

  function getItemGap(page, item) {
    const previousItem = page.items[page.items.length - 1];
    const startsOpenItemTable = item.type === 'openItem' && previousItem?.type !== 'openItem';
    const startsNewBlock = page.items.length > 0 && !(item.type === 'openItem' && previousItem?.type === 'openItem');

    return (startsNewBlock ? blockGap : 0) + (startsOpenItemTable ? openItemHeaderHeight : 0);
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
  if (first.type === 'openItem') {
    return (
      first.index === second.index &&
      first.item.id === second.item.id &&
      first.item.invoiceNumber === second.item.invoiceNumber &&
      first.item.dueDate === second.item.dueDate &&
      first.item.overdueDays === second.item.overdueDays &&
      first.item.amount === second.item.amount
    );
  }

  return true;
}

function ReminderPrintPagesBase(
  {
    details,
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
    <div className="invoice-print-pages offer-print-pages reminder-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`invoice-print-page offer-print-page reminder-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <ReminderPrintFirstPageHeader
              details={details}
              labels={labels}
              recipient={recipient}
              sender={sender}
              visibleContactDefinitions={visibleContactDefinitions}
              visibleDetailDefinitions={visibleDetailDefinitions}
              visibleRecipientFields={visibleRecipientFields}
            />
          ) : (
            <ReminderPrintContinuationHeader companyName={sender.company} />
          )}

          <div className="invoice-print-page-content">
            <ReminderPrintPageItems items={page.items} labels={labels} totals={totals} />
          </div>

          <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <ReminderPrintFooter
            footerLines={footerLines}
            visibleFooterMiddleDefinitions={visibleFooterMiddleDefinitions}
          />
        </article>
      ))}
    </div>
  );
}

const ReminderPrintPages = forwardRef(ReminderPrintPagesBase);

function ReminderPrintFirstPageHeader({
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
            <ReminderPrintDetailRow
              key={definition.field}
              emphasized={definition.field === 'reminderNumber'}
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

function ReminderPrintContinuationHeader({ companyName }) {
  return (
    <header className="invoice-print-header invoice-print-continuation-header">
      <p className="invoice-print-company-name">{companyName}</p>
    </header>
  );
}

function ReminderPrintDetailRow({ emphasized = false, label, value }) {
  return (
    <p className={emphasized ? 'is-emphasized' : undefined}>
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

function ReminderPrintPageItems({ items, labels, totals }) {
  const renderedItems = [];
  let index = 0;

  while (index < items.length) {
    const item = items[index];

    if (item.type === 'openItem') {
      const openItemRows = [];

      while (items[index]?.type === 'openItem') {
        openItemRows.push(items[index]);
        index += 1;
      }

      renderedItems.push(
        <ReminderPrintOpenItemsTable
          key={`open-items-${openItemRows[0].index}`}
          labels={labels}
          openItemRows={openItemRows}
        />,
      );
      continue;
    }

    if (item.type === 'summary') {
      renderedItems.push(<ReminderPrintSummary key="summary" labels={labels} totals={totals} />);
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

function ReminderPrintOpenItemsTable({ labels, openItemRows }) {
  return (
    <table className="invoice-print-position-table reminder-print-open-items-table">
      <thead>
        <tr>
          <th>{labels.invoiceNumber}</th>
          <th>{labels.dueDate}</th>
          <th>{labels.overdueDays}</th>
          <th>{labels.invoiceTotal}</th>
        </tr>
      </thead>
      <tbody>
        {openItemRows.map(({ index, item }) => (
          <tr key={item.id}>
            <td>{item.invoiceNumber}</td>
            <td>{formatGermanDate(item.dueDate)}</td>
            <td>{item.overdueDays}</td>
            <td>{formatCurrency(toNumber(item.amount))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ReminderPrintSummary({ labels, totals }) {
  return (
    <aside className="invoice-print-summary" aria-label="Mahnungssummen">
      <div>
        <span>{labels.sumInvoices}</span>
        <strong>{formatCurrency(totals.invoiceSum)}</strong>
      </div>
      <div>
        <span>{labels.interest}</span>
        <strong>{formatCurrency(totals.interest)}</strong>
      </div>
      <div>
        <span>{labels.reminderFee}</span>
        <strong>{formatCurrency(totals.reminderFee)}</strong>
      </div>
      <div>
        <span>{labels.grandTotal}</span>
        <strong>{formatCurrency(totals.grandTotal)}</strong>
      </div>
    </aside>
  );
}

function ReminderPrintFooter({ footerLines, visibleFooterMiddleDefinitions }) {
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
          .map((definition) => formatReminderFooterLine(definition.field, footerLines[definition.field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
      <section>
        {['bankName', 'iban', 'bic', 'bankExtra']
          .map((field) => formatReminderFooterLine(field, footerLines[field], footerLines))
          .filter(Boolean)
          .map((line) => (
            <p key={line}>{line}</p>
          ))}
      </section>
    </footer>
  );
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
