import { BELEGE24_DOCUMENT_FORMAT, BELEGE24_SCHEMA_VERSION } from './constants.js';
import type {
  CreditNoteDocumentData,
  CreditNoteVariant,
  FieldConfiguration,
  FooterColumn,
  FooterField,
  InvoiceTextBlock,
  SharedData,
} from './types.js';
import type { CreditNoteGeneratorState } from './creditNoteMapping.js';

export type RestoreCreditNoteResult =
  | { status: 'valid'; state: CreditNoteGeneratorState }
  | { status: 'invalid' }
  | { status: 'wrong-document-type' }
  | { status: 'wrong-variant' };

type CreditNotePosition = { id: string; description: string; unitPrice: string; quantity: string; unit: string; taxRate: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasStrings(value: unknown, keys: readonly string[]): value is Record<string, string> {
  return isRecord(value) && keys.every((key) => typeof value[key] === 'string');
}

function isStringRecord(value: unknown): value is Record<string, string> {
  return isRecord(value) && Object.values(value).every((entry) => typeof entry === 'string');
}

function isAddress(value: unknown): boolean {
  return hasStrings(value, ['street', 'houseNumber', 'postalCode', 'city']);
}

function isFooterField(value: unknown): value is FooterField {
  return hasStrings(value, ['key', 'value']);
}

function isFooterColumn(value: unknown): value is FooterColumn {
  return isRecord(value)
    && Array.isArray(value.fields)
    && value.fields.length === 4
    && value.fields.every(isFooterField);
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
    && footer.columns.every(isFooterColumn)
    && hasStrings(value.recipient, ['company', 'contactPerson', 'department', 'streetAndNumber', 'countryPostalCodeAndCity', 'customerNumber'])
    && isAddress(value.recipient.address);
}

function isFieldConfiguration(value: unknown): value is FieldConfiguration {
  return isRecord(value)
    && Array.isArray(value.hidden)
    && value.hidden.every((entry) => typeof entry === 'string')
    && Array.isArray(value.order)
    && value.order.every((entry) => typeof entry === 'string');
}

function isConfiguration(value: unknown): value is CreditNoteDocumentData['fieldConfiguration'] {
  return isRecord(value)
    && isFieldConfiguration(value.contact)
    && isFieldConfiguration(value.details)
    && isFieldConfiguration(value.recipient)
    && isFieldConfiguration(value.footerMiddle);
}

function isTextBlock(value: unknown): value is InvoiceTextBlock {
  return isRecord(value)
    && hasStrings(value, ['id', 'label', 'value'])
    && typeof value.visible === 'boolean';
}

function isPosition(value: unknown): value is CreditNotePosition {
  return hasStrings(value, ['id', 'description', 'unitPrice', 'quantity', 'unit', 'taxRate']);
}

function isCreditNoteVariant(value: unknown): value is CreditNoteVariant {
  return value === 'creditNote' || value === 'cancellationInvoice' || value === 'invoiceCorrection';
}

function hasVariantFields(data: Record<string, unknown>): boolean {
  if (!isCreditNoteVariant(data.creditNoteVariant) || !hasStrings(data.correction, ['originalInvoiceNumber', 'cancellationReason', 'correctionReason'])) {
    return false;
  }

  switch (data.creditNoteVariant) {
    case 'creditNote':
      return true;
    case 'cancellationInvoice':
      return hasStrings(data.correction, ['originalInvoiceNumber', 'cancellationReason']);
    case 'invoiceCorrection':
      return hasStrings(data.correction, ['originalInvoiceNumber', 'correctionReason']);
  }
}

function isCreditNoteDocumentData(value: unknown): value is CreditNoteDocumentData {
  if (!isRecord(value) || !hasVariantFields(value)) return false;
  return isStringRecord(value.labels)
    && hasStrings(value.details, ['creditNoteNumber', 'creditNoteDate', 'serviceDate'])
    && hasStrings(value.references, ['internalReference', 'externalReference', 'customerReference'])
    && hasStrings(value.senderContact, ['email', 'phone', 'fax', 'website'])
    && hasStrings(value.footerFieldLabels, ['vatId', 'taxNumber', 'iban', 'bic'])
    && isConfiguration(value.fieldConfiguration)
    && isRecord(value.smallBusinessRule)
    && typeof value.smallBusinessRule.enabled === 'boolean'
    && Array.isArray(value.positions)
    && value.positions.every(isPosition)
    && Array.isArray(value.textBlocks)
    && value.textBlocks.every(isTextBlock);
}

export function restoreCreditNoteState(document: unknown): RestoreCreditNoteResult {
  if (!isRecord(document)
    || document.format !== BELEGE24_DOCUMENT_FORMAT
    || document.schemaVersion !== BELEGE24_SCHEMA_VERSION) return { status: 'invalid' };
  if (!isRecord(document.document) || document.document.documentType !== 'creditNote') {
    return { status: 'wrong-document-type' };
  }
  if (!isRecord(document.documentData) || !isCreditNoteVariant(document.documentData.creditNoteVariant)) {
    return { status: 'wrong-variant' };
  }
  if (!isSharedData(document.sharedData) || !isCreditNoteDocumentData(document.documentData)) {
    return { status: 'invalid' };
  }

  const data = document.documentData;
  const shared = document.sharedData;
  const fields = shared.sender.companyFooter.columns;

  return {
    status: 'valid',
    state: {
      creditNoteVariant: data.creditNoteVariant,
      labels: { ...data.labels },
      isSmallBusiness: data.smallBusinessRule.enabled,
      offerData: {
        sender: { companyName: shared.sender.brandName, returnAddress: shared.sender.senderLine, address: { ...shared.sender.address }, contact: { ...data.senderContact } },
        recipient: { companyName: shared.recipient.company, attention: shared.recipient.contactPerson, name: shared.recipient.department, address: { ...shared.recipient.address } },
        details: { ...data.details },
        references: { ...data.references },
        correction: { ...data.correction },
        footer: {
          company: { companyName: fields[0].fields[0].value, ...shared.sender.companyFooter.companyAddress, extra: fields[0].fields[3].value },
          tax: { vatIdLabel: data.footerFieldLabels.vatId, vatId: fields[1].fields[0].value, taxNumberLabel: data.footerFieldLabels.taxNumber, taxNumber: fields[1].fields[1].value, commercialRegister: fields[1].fields[2].value, representation: fields[1].fields[3].value },
          bank: { bankName: fields[2].fields[0].value, ibanLabel: data.footerFieldLabels.iban, iban: fields[2].fields[1].value, bicLabel: data.footerFieldLabels.bic, bic: fields[2].fields[2].value, bankExtra: fields[2].fields[3].value },
        },
      },
      positions: data.positions.map((position) => ({ ...position })),
      textBlocks: data.textBlocks.map((block) => ({ ...block })),
      fieldConfig: structuredClone(data.fieldConfiguration),
    },
  };
}
