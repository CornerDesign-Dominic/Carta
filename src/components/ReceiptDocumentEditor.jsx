import { useMemo, useRef, useState } from 'react';
import A5LandscapePage from './documentBlocks/A5LandscapePage.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import { FieldActions, HiddenFieldActions } from './documentBlocks/FieldActions.jsx';
import TextBlock from './documentBlocks/TextBlock.jsx';
import TextBlockControls from './documentBlocks/TextBlockControls.jsx';
import ReceiptDocumentForm from './ReceiptDocumentForm.jsx';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const receiptSchemaVersion = '1.0';

const initialReceiptLabels = {
  title: 'Quittung',
  receiptId: 'Quittungskennung',
  receiptDate: 'Belegdatum',
  paymentDate: 'Zahlungsdatum',
  internalReference: 'Interne Referenz',
  externalReference: 'Externe Referenz',
  netAmount: 'Betrag netto',
  taxAmount: 'Umsatzsteuer',
  grossAmount: 'Betrag brutto',
  amountInWords: 'Betrag in Worten',
  settlementMethod: 'Zahlungsart',
  place: 'Ort',
  signature: 'Unterschrift',
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
  { field: 'attention', label: 'Zusatz / zu Haenden' },
  { field: 'name', label: 'Name / Abteilung' },
];

const receiptFooterColumns = [
  [
    { field: 'companyName', label: 'Firma' },
    { field: 'companyStreet', label: 'Strasse und Hausnummer' },
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
      street: 'Musterstrasse',
      houseNumber: '12',
      postalCode: '10115',
      city: 'Berlin',
    },
    returnAddress: 'Belege24 Muster GmbH - Musterstrasse 12 - 10115 Berlin',
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
      street: 'Kundenstrasse',
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
  },
  references: {
    internalReference: 'REF-1001',
    externalReference: 'AUF-4711',
  },
  amount: {
    netAmount: '100,00',
    taxAmount: '19,00',
    grossAmount: '119,00',
    amountInWords: 'einhundertneunzehn Euro',
    settlementMethod: 'Bar',
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
      taxIdLabel: 'Steuernummer:',
      taxId: '12/345/67890',
      representation: 'Geschaeftsfuehrer: Max Mustermann',
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
  },
  references: {
    internalReference: '',
    externalReference: '',
  },
  amount: {
    netAmount: '',
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
  receiptText: 'Hiermit bestaetigen wir den Erhalt des unten genannten Betrags.',
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
    recipient: createFieldConfig(receiptRecipientOptionalFields),
    footerMiddle: createFieldConfig(receiptFooterColumns[1]),
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

function firstFilled(value, fallback) {
  return String(value ?? '').trim() ? value : fallback;
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
      company: firstFilled(senderData.companyName, defaultReceiptData.sender.companyName),
      senderLine: firstFilled(senderData.returnAddress, defaultReceiptData.sender.returnAddress),
      email: firstFilled(senderData.contact.email, defaultReceiptData.sender.contact.email),
      phone: firstFilled(senderData.contact.phone, defaultReceiptData.sender.contact.phone),
      website: firstFilled(senderData.contact.website, defaultReceiptData.sender.contact.website),
    },
    recipient: {
      company: firstFilled(recipientData.companyName, defaultReceiptData.recipient.companyName),
      attention: firstFilled(recipientData.attention, defaultReceiptData.recipient.attention),
      name: firstFilled(recipientData.name, defaultReceiptData.recipient.name),
      street: firstFilled(
        joinLine(recipientData.address.street, recipientData.address.houseNumber),
        joinLine(defaultReceiptData.recipient.address.street, defaultReceiptData.recipient.address.houseNumber),
      ),
      cityLine: firstFilled(
        joinLine(recipientData.address.postalCode, recipientData.address.city),
        joinLine(defaultReceiptData.recipient.address.postalCode, defaultReceiptData.recipient.address.city),
      ),
    },
    details: {
      receiptId: firstFilled(data.details.receiptId, defaultReceiptData.details.receiptId),
      receiptDate: firstFilled(data.details.receiptDate, defaultReceiptData.details.receiptDate),
      paymentDate: firstFilled(data.details.paymentDate, defaultReceiptData.details.paymentDate),
      place: firstFilled(data.details.place, defaultReceiptData.details.place),
      internalReference: firstFilled(data.references.internalReference, defaultReceiptData.references.internalReference),
      externalReference: firstFilled(data.references.externalReference, defaultReceiptData.references.externalReference),
    },
    amount: {
      netAmount: firstFilled(data.amount.netAmount, defaultReceiptData.amount.netAmount),
      taxAmount: firstFilled(data.amount.taxAmount, defaultReceiptData.amount.taxAmount),
      grossAmount: firstFilled(data.amount.grossAmount, defaultReceiptData.amount.grossAmount),
      amountInWords: firstFilled(data.amount.amountInWords, defaultReceiptData.amount.amountInWords),
      settlementMethod: firstFilled(data.amount.settlementMethod, defaultReceiptData.amount.settlementMethod),
    },
    footerLines: {
      companyName: firstFilled(footerData.company.companyName, defaultReceiptData.footer.company.companyName),
      companyStreet: firstFilled(
        joinLine(footerData.company.street, footerData.company.houseNumber),
        joinLine(defaultReceiptData.footer.company.street, defaultReceiptData.footer.company.houseNumber),
      ),
      companyCity: firstFilled(
        joinLine(footerData.company.postalCode, footerData.company.city),
        joinLine(defaultReceiptData.footer.company.postalCode, defaultReceiptData.footer.company.city),
      ),
      companyExtra: firstFilled(footerData.company.extra, defaultReceiptData.footer.company.extra),
      vatId: firstFilled(footerData.tax.vatId, defaultReceiptData.footer.tax.vatId),
      taxId: firstFilled(footerData.tax.taxId, defaultReceiptData.footer.tax.taxId),
      representation: firstFilled(footerData.tax.representation, defaultReceiptData.footer.tax.representation),
      bankName: firstFilled(footerData.bank.bankName, defaultReceiptData.footer.bank.bankName),
      iban: firstFilled(footerData.bank.iban, defaultReceiptData.footer.bank.iban),
      bic: firstFilled(footerData.bank.bic, defaultReceiptData.footer.bank.bic),
    },
  };
}

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
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

function createJsonFileName(receiptId) {
  const cleanId = String(receiptId || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, '-')
    .replace(/^-+|-+$/g, '');

  return cleanId ? `quittung-${cleanId}.json` : 'quittung-vorlage.json';
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

function normalizeTextBlocks(templateTextBlocks) {
  const knownBlocks = new Map(defaultReceiptTextBlocks.map((block) => [block.id, block]));

  if (!Array.isArray(templateTextBlocks)) {
    return defaultReceiptTextBlocks.map((block) => ({ ...block }));
  }

  const normalized = templateTextBlocks
    .filter((block) => knownBlocks.has(block?.id))
    .map((block) => ({
      ...knownBlocks.get(block.id),
      label: typeof block.label === 'string' && block.label ? block.label : knownBlocks.get(block.id).label,
      value: typeof block.value === 'string' ? block.value : knownBlocks.get(block.id).value,
      visible: typeof block.visible === 'boolean' ? block.visible : true,
    }));

  defaultReceiptTextBlocks.forEach((block) => {
    if (!normalized.some((entry) => entry.id === block.id)) {
      normalized.push({ ...block });
    }
  });

  return normalized;
}

function validateReceiptTemplate(template) {
  if (!template || typeof template !== 'object') {
    throw new Error('Die JSON-Datei ist ungueltig.');
  }

  if (template.documentType !== 'receipt') {
    throw new Error('Diese JSON-Datei ist keine Quittung.');
  }

  if (template.schemaVersion !== receiptSchemaVersion) {
    throw new Error('Diese Quittungsversion wird nicht unterstuetzt.');
  }

  if (!template.data || typeof template.data !== 'object') {
    throw new Error('Die JSON-Datei enthaelt keine Quittungsdaten.');
  }

  return template.data;
}

function ReceiptHeaderContact({
  contactFields,
  hiddenFields = [],
  labels,
  onLabelChange,
  onMoveField,
  onSenderChange,
  onToggleField,
  sender,
}) {
  const visibleFields = contactFields.filter(({ field }) => !hiddenFields.includes(field));

  return (
    <div className="receipt-header-contact">
      <div className="editable-group">
        <input
          aria-label="Aussteller Firmenname"
          value={sender.company}
          onChange={(event) => onSenderChange('company', event.target.value)}
        />
      </div>

      <div className="receipt-contact-lines">
        {visibleFields.map(({ field, label, labelField }, index) => (
          <div className="invoice-config-row" key={field}>
            <label>
              <input
                className="document-label-input"
                aria-label={`Beschriftung ${label}`}
                value={labels[labelField]}
                onChange={(event) => onLabelChange(labelField, event.target.value)}
              />
              <input
                aria-label={label}
                value={sender[field]}
                onChange={(event) => onSenderChange(field, event.target.value)}
              />
            </label>
            <FieldActions
              canMove
              isFirst={index === 0}
              isLast={index === visibleFields.length - 1}
              label={label}
              onMoveDown={() => onMoveField(field, 1)}
              onMoveUp={() => onMoveField(field, -1)}
              onToggle={() => onToggleField(field)}
            />
          </div>
        ))}
        <HiddenFieldActions definitions={contactFields} hiddenFields={hiddenFields} onToggle={onToggleField} />
      </div>
    </div>
  );
}

export default function ReceiptDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isFormPanelOpen, setIsFormPanelOpen] = useState(false);
  const [labels, setLabels] = useState(initialReceiptLabels);
  const [receiptData, setReceiptData] = useState(emptyReceiptData);
  const [textBlocks, setTextBlocks] = useState(defaultReceiptTextBlocks);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(receiptContactFields),
    details: createFieldConfig(receiptMetaFields),
    recipient: createFieldConfig(receiptRecipientOptionalFields),
    footerMiddle: createFieldConfig(receiptFooterColumns[1]),
  });
  const sheetRef = useRef(null);
  const jsonInputRef = useRef(null);
  const dateInputRefs = useRef({});
  const { sender, details, amount } = useMemo(
    () => createViewData(receiptData),
    [receiptData],
  );
  const documentTextBlocks = useMemo(
    () =>
      textBlocks.map((block) => ({
        ...block,
        value: firstFilled(block.value, receiptTextDefaults[block.id]),
      })),
    [textBlocks],
  );

  function updateLabel(field, value) {
    setLabels((current) => ({ ...current, [field]: value }));
  }

  function updateSender(field, value) {
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
    setReceiptData((current) => ({
      ...current,
      amount: { ...current.amount, [field]: value },
    }));
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

  function createReceiptTemplate() {
    return {
      documentType: 'receipt',
      schemaVersion: receiptSchemaVersion,
      createdWith: 'Carta',
      data: {
        labels,
        ...receiptData,
        textBlocks,
        fieldConfig,
      },
    };
  }

  function handleSaveJson() {
    downloadJson(createReceiptTemplate(), createJsonFileName(details.receiptId));
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
      const data = validateReceiptTemplate(template);

      setLabels({ ...initialReceiptLabels, ...(data.labels ?? {}) });
      setReceiptData(mergeWithDefaults(data));
      setTextBlocks(normalizeTextBlocks(data.textBlocks));
      setFieldConfig(normalizeFieldConfig(data.fieldConfig));
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Die JSON-Datei konnte nicht geladen werden.');
    }
  }

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await requestPdfDownload({
        sheet: sheetRef.current,
        documentType: 'receipt',
        filename: createPdfFileName(labels.title, details.receiptId),
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
    document.body.classList.add('document-print-mode', 'receipt-print-mode');
    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode', 'receipt-print-mode');
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
        <div className="invoice-flow-config-row invoice-flow-hidden-row receipt-flow-row" key={block.id}>
          <TextBlockControls
            label={block.label}
            visible={block.visible}
            onToggle={() => toggleTextBlockVisibility(block.id)}
          />
        </div>
      );
    }

    return (
      <div className="invoice-flow-config-row receipt-flow-row" key={block.id}>
        <TextBlock
          ariaLabel={block.label}
          className="receipt-flow-text"
          value={block.value}
          onChange={(value) => updateTextBlock(block.id, { value })}
        />
        <TextBlockControls
          isFirst={index === 0}
          isLast={index === documentTextBlocks.length - 1}
          label={block.label}
          visible={block.visible}
          onToggle={() => toggleTextBlockVisibility(block.id)}
        />
      </div>
    );
  }

  return (
    <div className="visual-editor invoice-visual-editor receipt-visual-editor">
      <ReceiptDocumentForm
        amount={receiptData.amount}
        defaults={{ ...defaultReceiptData, textBlocks: receiptTextDefaults }}
        details={{ ...receiptData.details, ...receiptData.references }}
        footerData={receiptData.footer}
        footerLines={{
          companyName: receiptData.footer.company.companyName,
          companyStreet: joinLine(receiptData.footer.company.street, receiptData.footer.company.houseNumber),
          companyCity: joinLine(receiptData.footer.company.postalCode, receiptData.footer.company.city),
          companyExtra: receiptData.footer.company.extra,
          vatId: receiptData.footer.tax.vatId,
          taxId: receiptData.footer.tax.taxId,
          representation: receiptData.footer.tax.representation,
          bankName: receiptData.footer.bank.bankName,
          iban: receiptData.footer.bank.iban,
          bic: receiptData.footer.bank.bic,
        }}
        isOpen={isFormPanelOpen}
        onToggle={() => setIsFormPanelOpen((current) => !current)}
        recipient={receiptData.recipient}
        sender={receiptData.sender}
        textBlocks={textBlocks}
        toggleTextBlockVisibility={toggleTextBlockVisibility}
        updateAmount={updateAmount}
        updateDetail={updateDetail}
        updateFooterLabel={updateFooterLabel}
        updateFooterLine={updateFooterLine}
        updateRecipient={updateRecipient}
        updateSender={updateSender}
        updateTextBlock={updateTextBlock}
      />

      <DocumentToolbar
        ariaLabel="Quittung Werkzeuge"
        isEditable={highlightFields}
        isExporting={isExporting}
        jsonInputRef={jsonInputRef}
        onCreatePdf={handleCreatePdf}
        onLoadJson={handleLoadJson}
        onPrint={handlePrint}
        onSaveJson={handleSaveJson}
        onToggleEditable={() => setHighlightFields((current) => !current)}
      />

      <A5LandscapePage
        ref={sheetRef}
        ariaLabel="Editierbare Quittung"
        className="receipt-sheet"
        editable={highlightFields}
      >
        <header className="receipt-header">
          <div className="receipt-header-empty" aria-hidden="true" />
          <div className="receipt-header-right">
            <ReceiptHeaderContact
              contactFields={getOrderedDefinitions('contact', receiptContactFields)}
              hiddenFields={getHiddenFields('contact', receiptContactFields)}
              labels={labels}
              sender={sender}
              onLabelChange={updateLabel}
              onMoveField={(field, direction) => moveConfiguredField('contact', field, direction)}
              onSenderChange={updateSender}
              onToggleField={(field) => toggleConfiguredField('contact', field)}
            />
            <DocumentMetaBlock
              dateInputRefs={dateInputRefs}
              details={details}
              emphasizedField="receiptId"
              fields={getOrderedDefinitions('details', receiptMetaFields)}
              hiddenFields={getHiddenFields('details', receiptMetaFields)}
              labels={labels}
              onDatePicker={openDatePicker}
              onDetailChange={updateDetail}
              onLabelChange={updateLabel}
              onMoveField={(field, direction) => moveConfiguredField('details', field, direction)}
              onToggleField={(field) => toggleConfiguredField('details', field)}
            />
          </div>
        </header>

        <h2 className="invoice-document-title receipt-document-title">
          <input
            className="document-label-input document-title-label"
            aria-label="Dokumenttitel"
            value={labels.title}
            onChange={(event) => updateLabel('title', event.target.value)}
          />
        </h2>

        {renderTextBlock(documentTextBlocks.find((block) => block.id === 'receiptText'), 0)}
        {renderTextBlock(documentTextBlocks.find((block) => block.id === 'purpose'), 1)}

        <section className="receipt-amount-box" aria-label="Betragsdarstellung">
          {['netAmount', 'taxAmount', 'grossAmount', 'amountInWords', 'settlementMethod'].map((field) => (
            <label className={field === 'grossAmount' ? 'is-emphasized' : undefined} key={field}>
              <input
                className="document-label-input"
                aria-label={`Beschriftung ${labels[field]}`}
                value={labels[field]}
                onChange={(event) => updateLabel(field, event.target.value)}
              />
              <input
                aria-label={labels[field]}
                value={amount[field]}
                onChange={(event) => updateAmount(field, event.target.value)}
              />
            </label>
          ))}
        </section>

        <section className="receipt-signature-row" aria-label="Abschluss der Quittung">
          <label>
            <input
              className="document-label-input"
              aria-label="Beschriftung Ort"
              value={labels.place}
              onChange={(event) => updateLabel('place', event.target.value)}
            />
            <input
              aria-label="Ort der Ausstellung"
              value={details.place}
              onChange={(event) => updateDetail('place', event.target.value)}
            />
          </label>
          <label>
            <input
              className="document-label-input"
              aria-label="Beschriftung Datum"
              value={labels.receiptDate}
              onChange={(event) => updateLabel('receiptDate', event.target.value)}
            />
            <input
              aria-label="Ausstellungsdatum"
              value={formatGermanDate(details.receiptDate)}
              onChange={(event) => updateDetail('receiptDate', event.target.value)}
            />
          </label>
          <div className="receipt-signature-field">
            <input
              className="document-label-input"
              aria-label="Beschriftung Unterschrift"
              value={labels.signature}
              onChange={(event) => updateLabel('signature', event.target.value)}
            />
          </div>
        </section>

      </A5LandscapePage>
    </div>
  );
}
