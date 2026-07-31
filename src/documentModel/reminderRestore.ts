import { BELEGE24_DOCUMENT_FORMAT, BELEGE24_SCHEMA_VERSION } from './constants.js';
import type {
  FieldConfiguration,
  FooterColumn,
  FooterField,
  InvoiceTextBlock,
  ReminderDocumentData,
  ReminderOpenItem,
  SharedData,
} from './types.js';
import type { ReminderGeneratorState } from './reminderMapping.js';
import {
  DEFAULT_REMINDER_VARIANT,
  isReminderVariant,
} from './reminderVariants.js';

export type RestoreReminderResult =
  | { status: 'valid'; state: ReminderGeneratorState }
  | { status: 'invalid' }
  | { status: 'wrong-variant' }
  | { status: 'wrong-document-type' };

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const expectedFooterKeys = [
  ['companyName', 'streetAndNumber', 'postalCodeAndCity', 'custom'],
  ['vatId', 'taxNumber', 'commercialRegister', 'custom'],
  ['bankName', 'iban', 'bic', 'custom'],
] as const;
const requiredLabelKeys = [
  'title', 'reminderNumber', 'reminderDate', 'customerNumber', 'invoiceNumber', 'externalNumber',
  'dueDate', 'overdueDays', 'invoiceTotal', 'sumInvoices', 'interest', 'reminderFee', 'grandTotal',
  'contactEmail', 'contactPhone', 'contactFax', 'contactWebsite',
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasStrings(value: unknown, keys: readonly string[]): value is Record<string, string> {
  return isRecord(value) && keys.every((key) => typeof value[key] === 'string');
}

function isStringRecord(value: unknown): value is Record<string, string> {
  return isRecord(value) && Object.values(value).every((entry) => typeof entry === 'string');
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === 'string');
}

function isAddress(value: unknown): boolean {
  return hasStrings(value, ['street', 'houseNumber', 'postalCode', 'city']);
}

function isFooterField(value: unknown): value is FooterField {
  return hasStrings(value, ['key', 'value']);
}

function isFooterColumn(value: unknown, expectedKeys: readonly string[]): value is FooterColumn {
  return isRecord(value)
    && Array.isArray(value.fields)
    && value.fields.length === 4
    && value.fields.every(isFooterField)
    && value.fields.every((field, index) => field.key === expectedKeys[index]);
}

function isSharedData(value: unknown): value is SharedData {
  if (!isRecord(value) || !isRecord(value.sender) || !isRecord(value.recipient)) return false;
  const footer = value.sender.companyFooter;
  return hasStrings(value.sender, ['brandName', 'senderLine'])
    && isAddress(value.sender.address)
    && isRecord(footer)
    && isAddress(footer.companyAddress)
    && Array.isArray(footer.columns)
    && footer.columns.length === 3
    && footer.columns.every((column, index) => isFooterColumn(column, expectedFooterKeys[index]))
    && hasStrings(value.recipient, ['company', 'contactPerson', 'department', 'streetAndNumber', 'countryPostalCodeAndCity', 'customerNumber'])
    && isAddress(value.recipient.address);
}

function isFieldConfiguration(value: unknown, fields: readonly string[]): value is FieldConfiguration {
  if (!isRecord(value) || !isStringArray(value.hidden) || !isStringArray(value.order)) return false;
  const { hidden, order } = value;
  return new Set(hidden).size === hidden.length
    && hidden.every((field) => fields.includes(field))
    && new Set(order).size === fields.length
    && order.length === fields.length
    && fields.every((field) => order.includes(field));
}

function isReminderFieldConfiguration(value: unknown): value is ReminderDocumentData['fieldConfiguration'] {
  return isRecord(value)
    && isFieldConfiguration(value.contact, ['email', 'phone', 'fax', 'website'])
    && isFieldConfiguration(value.details, ['reminderNumber', 'reminderDate', 'customerNumber'])
    && isFieldConfiguration(value.recipient, ['attention', 'name'])
    && isFieldConfiguration(value.footerMiddle, ['vatId', 'taxNumber', 'commercialRegister', 'managingDirector']);
}

function isOpenItem(value: unknown): value is ReminderOpenItem {
  return hasStrings(value, ['id', 'invoiceNumber', 'externalNumber', 'dueDate', 'overdueDays', 'amount'])
    && uuidPattern.test(value.id);
}

function isTextBlock(value: unknown): value is InvoiceTextBlock {
  return isRecord(value)
    && hasStrings(value, ['id', 'label', 'value'])
    && typeof value.visible === 'boolean';
}

function isReminderTextBlocks(value: unknown): value is InvoiceTextBlock[] {
  return Array.isArray(value)
    && value.length === 2
    && value.every(isTextBlock)
    && value[0].id === 'intro'
    && value[1].id === 'closing';
}

function isReminderDocumentData(value: unknown): value is ReminderDocumentData {
  return isRecord(value)
    && (value.reminderVariant === undefined || isReminderVariant(value.reminderVariant))
    && isStringRecord(value.labels)
    && hasStrings(value.labels, requiredLabelKeys)
    && hasStrings(value.details, ['reminderNumber', 'reminderDate', 'customerNumber'])
    && hasStrings(value.senderContact, ['email', 'phone', 'fax', 'website'])
    && Array.isArray(value.openItems)
    && value.openItems.length > 0
    && value.openItems.every(isOpenItem)
    && hasStrings(value.charges, ['interest', 'reminderFee'])
    && isReminderTextBlocks(value.textBlocks)
    && hasStrings(value.footerFieldLabels, ['vatId', 'taxNumber', 'iban', 'bic'])
    && isReminderFieldConfiguration(value.fieldConfiguration);
}

function hasValidMetadata(value: Record<string, unknown>): boolean {
  const metadata = value.document;
  return isRecord(metadata)
    && metadata.documentType === 'reminder'
    && typeof metadata.documentId === 'string'
    && uuidPattern.test(metadata.documentId)
    && typeof metadata.createdAt === 'string'
    && !Number.isNaN(Date.parse(metadata.createdAt))
    && new Date(metadata.createdAt).toISOString() === metadata.createdAt
    && typeof metadata.generatorVersion === 'string'
    && metadata.generatorVersion.length > 0;
}

export function restoreReminderState(document: unknown): RestoreReminderResult {
  if (!isRecord(document)
    || document.format !== BELEGE24_DOCUMENT_FORMAT
    || document.schemaVersion !== BELEGE24_SCHEMA_VERSION) return { status: 'invalid' };
  if (!isRecord(document.document) || document.document.documentType !== 'reminder') {
    return { status: 'wrong-document-type' };
  }
  if (!isRecord(document.documentData)
    || (document.documentData.reminderVariant !== undefined && !isReminderVariant(document.documentData.reminderVariant))) {
    return { status: 'wrong-variant' };
  }
  if (!hasValidMetadata(document) || !isSharedData(document.sharedData) || !isReminderDocumentData(document.documentData)
    || document.sharedData.recipient.customerNumber !== document.documentData.details.customerNumber) {
    return { status: 'invalid' };
  }

  const data = document.documentData;
  const shared = document.sharedData;
  const fields = shared.sender.companyFooter.columns;

  return {
    status: 'valid',
    state: {
      reminderVariant: data.reminderVariant ?? DEFAULT_REMINDER_VARIANT,
      labels: { ...data.labels },
      reminderData: {
        sender: { companyName: shared.sender.brandName, returnAddress: shared.sender.senderLine, address: { ...shared.sender.address }, contact: { ...data.senderContact } },
        recipient: { companyName: shared.recipient.company, attention: shared.recipient.contactPerson, name: shared.recipient.department, address: { ...shared.recipient.address } },
        details: { ...data.details },
        footer: {
          company: { companyName: fields[0].fields[0].value, ...shared.sender.companyFooter.companyAddress, extra: fields[0].fields[3].value },
          tax: { vatIdLabel: data.footerFieldLabels.vatId, vatId: fields[1].fields[0].value, taxNumberLabel: data.footerFieldLabels.taxNumber, taxNumber: fields[1].fields[1].value, commercialRegister: fields[1].fields[2].value, representation: fields[1].fields[3].value },
          bank: { bankName: fields[2].fields[0].value, ibanLabel: data.footerFieldLabels.iban, iban: fields[2].fields[1].value, bicLabel: data.footerFieldLabels.bic, bic: fields[2].fields[2].value, bankExtra: fields[2].fields[3].value },
        },
      },
      openItems: data.openItems.map((item) => ({ ...item })),
      charges: { ...data.charges },
      textBlocks: data.textBlocks.map((block) => ({ ...block })),
      fieldConfig: structuredClone(data.fieldConfiguration),
    },
  };
}
