import {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_SCHEMA_VERSION,
} from './constants.js';
import type { GoodsInvoiceGeneratorState, StandardInvoiceGeneratorState, TextInvoiceGeneratorState } from './invoiceMapping.js';
import type {
  FieldConfiguration,
  FooterField,
  InvoicePositionInput,
  InvoiceTextBlock,
  PreviousPaymentInput,
  StandardInvoiceDocument,
} from './types.js';

export type RestoreStandardInvoiceResult =
  | { status: 'valid'; state: StandardInvoiceGeneratorState }
  | { status: 'wrong-document-type'; documentType: unknown }
  | { status: 'unsupported'; format: unknown; schemaVersion: unknown }
  | { status: 'incomplete-data'; errors: string[] }
  | { status: 'invalid-field-values'; errors: string[] };

export type RestoreGoodsInvoiceResult =
  | { status: 'valid'; state: GoodsInvoiceGeneratorState }
  | { status: 'wrong-document-type'; documentType: unknown }
  | { status: 'wrong-invoice-variant'; invoiceVariant: unknown }
  | { status: 'unsupported'; format: unknown; schemaVersion: unknown }
  | { status: 'incomplete-data'; errors: string[] }
  | { status: 'invalid-field-values'; errors: string[] };

const expectedFooterKeys = [
  ['companyName', 'streetAndNumber', 'postalCodeAndCity', 'custom'],
  ['vatId', 'taxNumber', 'commercialRegister', 'custom'],
  ['bankName', 'iban', 'bic', 'custom'],
] as const;
const decimalPattern = /^-?\d+(?:\.\d+)?$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStringRecord(value: unknown): value is Record<string, string> {
  return isRecord(value) && Object.values(value).every((entry) => typeof entry === 'string');
}

function isFieldConfiguration(value: unknown): value is FieldConfiguration {
  return isRecord(value)
    && Array.isArray(value.hidden)
    && value.hidden.every((entry) => typeof entry === 'string')
    && Array.isArray(value.order)
    && value.order.every((entry) => typeof entry === 'string');
}

function isTextBlock(value: unknown): value is InvoiceTextBlock {
  return isRecord(value)
    && typeof value.id === 'string'
    && typeof value.label === 'string'
    && typeof value.value === 'string'
    && typeof value.visible === 'boolean';
}

function isPosition(value: unknown): value is InvoicePositionInput & { calculated: unknown } {
  const generatorInput = isRecord(value) ? value.generatorInput : undefined;
  return isRecord(value)
    && typeof value.id === 'string'
    && uuidPattern.test(value.id)
    && typeof value.articleNumber === 'string'
    && typeof value.description === 'string'
    && typeof value.unitPrice === 'string'
    && decimalPattern.test(value.unitPrice)
    && typeof value.quantity === 'string'
    && decimalPattern.test(value.quantity)
    && typeof value.unit === 'string'
    && typeof value.taxRate === 'string'
    && decimalPattern.test(value.taxRate)
    && isRecord(generatorInput)
    && typeof generatorInput.unitPrice === 'string'
    && typeof generatorInput.quantity === 'string'
    && typeof generatorInput.taxRate === 'string'
    && isRecord(value.calculated);
}

function isPreviousPayment(value: unknown): value is PreviousPaymentInput & { calculated: unknown } {
  const generatorInput = isRecord(value) ? value.generatorInput : undefined;
  return isRecord(value)
    && typeof value.id === 'string'
    && uuidPattern.test(value.id)
    && typeof value.label === 'string'
    && typeof value.invoiceNumber === 'string'
    && typeof value.invoiceDate === 'string'
    && (value.invoiceDate === '' || datePattern.test(value.invoiceDate))
    && typeof value.netAmount === 'string'
    && decimalPattern.test(value.netAmount)
    && typeof value.taxRate === 'string'
    && decimalPattern.test(value.taxRate)
    && isRecord(generatorInput)
    && typeof generatorInput.netAmount === 'string'
    && typeof generatorInput.taxRate === 'string'
    && (value.status === 'paid' || value.status === 'open')
    && isRecord(value.calculated);
}

function requireRecord(
  value: unknown,
  path: string,
  incompleteErrors: string[],
): Record<string, unknown> | undefined {
  if (!isRecord(value)) {
    incompleteErrors.push(`${path} must be an object`);
    return undefined;
  }
  return value;
}

function requiredStrings(
  value: Record<string, unknown> | undefined,
  fields: readonly string[],
  path: string,
  incompleteErrors: string[],
  invalidErrors: string[],
) {
  fields.forEach((field) => {
    if (!value || !(field in value)) {
      incompleteErrors.push(`${path}.${field} is required`);
    } else if (typeof value[field] !== 'string') {
      invalidErrors.push(`${path}.${field} must be a string`);
    }
  });
}

function requireAddress(
  value: unknown,
  path: string,
  incompleteErrors: string[],
  invalidErrors: string[],
) {
  const address = requireRecord(value, path, incompleteErrors);
  requiredStrings(
    address,
    ['street', 'houseNumber', 'postalCode', 'city'],
    path,
    incompleteErrors,
    invalidErrors,
  );
}

function restoreInvoiceState(
  document: unknown,
  expectedInvoiceVariant: 'standard' | 'goods' | 'text',
): RestoreStandardInvoiceResult | RestoreGoodsInvoiceResult {
  if (!isRecord(document)) {
    return { status: 'incomplete-data', errors: ['root must be an object'] };
  }

  if (
    ('format' in document && document.format !== BELEGE24_DOCUMENT_FORMAT)
    || ('schemaVersion' in document && document.schemaVersion !== BELEGE24_SCHEMA_VERSION)
  ) {
    return {
      status: 'unsupported',
      format: document.format,
      schemaVersion: document.schemaVersion,
    };
  }

  const metadata = isRecord(document.document) ? document.document : undefined;
  if (metadata && metadata.documentType !== 'invoice') {
    return { status: 'wrong-document-type', documentType: metadata.documentType };
  }

  const incompleteErrors: string[] = [];
  const invalidErrors: string[] = [];
  if (document.format === undefined) incompleteErrors.push('format is required');
  if (document.schemaVersion === undefined) incompleteErrors.push('schemaVersion is required');
  if (!metadata) incompleteErrors.push('document must be an object');
  if (metadata && !('documentType' in metadata)) incompleteErrors.push('document.documentType is required');

  const sharedData = requireRecord(document.sharedData, 'sharedData', incompleteErrors);
  const sender = requireRecord(sharedData?.sender, 'sharedData.sender', incompleteErrors);
  const recipient = requireRecord(sharedData?.recipient, 'sharedData.recipient', incompleteErrors);
  requiredStrings(sender, ['brandName', 'senderLine'], 'sharedData.sender', incompleteErrors, invalidErrors);
  requireAddress(sender?.address, 'sharedData.sender.address', incompleteErrors, invalidErrors);
  requiredStrings(
    recipient,
    ['company', 'contactPerson', 'department', 'streetAndNumber', 'countryPostalCodeAndCity', 'customerNumber'],
    'sharedData.recipient',
    incompleteErrors,
    invalidErrors,
  );

  const companyFooter = requireRecord(sender?.companyFooter, 'sharedData.sender.companyFooter', incompleteErrors);
  requireAddress(
    companyFooter?.companyAddress,
    'sharedData.sender.companyFooter.companyAddress',
    incompleteErrors,
    invalidErrors,
  );
  const columns = companyFooter?.columns;
  const footerFields: FooterField[][] = [];
  if (!Array.isArray(columns) || columns.length !== 3) {
    incompleteErrors.push('sharedData.sender.companyFooter.columns must contain three columns');
  } else {
    columns.forEach((column, columnIndex) => {
      const fields = isRecord(column) ? column.fields : undefined;
      if (!Array.isArray(fields) || fields.length !== 4) {
        incompleteErrors.push(`footer column ${columnIndex} must contain four fields`);
        return;
      }
      const restoredFields: FooterField[] = [];
      fields.forEach((field, fieldIndex) => {
        if (!isRecord(field) || typeof field.key !== 'string' || typeof field.value !== 'string') {
          invalidErrors.push(`footer field ${columnIndex}:${fieldIndex} must contain string key and value`);
          return;
        }
        if (field.key !== expectedFooterKeys[columnIndex][fieldIndex]) {
          invalidErrors.push(
            `footer field ${columnIndex}:${fieldIndex} must use key ${expectedFooterKeys[columnIndex][fieldIndex]}`,
          );
        }
        restoredFields.push({ key: field.key, value: field.value });
      });
      footerFields[columnIndex] = restoredFields;
    });
  }

  const documentData = requireRecord(document.documentData, 'documentData', incompleteErrors);
  const invoice = requireRecord(documentData?.invoice, 'documentData.invoice', incompleteErrors);
  const senderContact = requireRecord(documentData?.senderContact, 'documentData.senderContact', incompleteErrors);
  const deliveryAddress = requireRecord(documentData?.deliveryAddress, 'documentData.deliveryAddress', incompleteErrors);
  const project = requireRecord(documentData?.project, 'documentData.project', incompleteErrors);
  const footerFieldLabels = requireRecord(documentData?.footerFieldLabels, 'documentData.footerFieldLabels', incompleteErrors);
  const fieldConfiguration = requireRecord(documentData?.fieldConfiguration, 'documentData.fieldConfiguration', incompleteErrors);
  requireRecord(documentData?.calculated, 'documentData.calculated', incompleteErrors);

  requiredStrings(
    invoice,
    ['invoiceNumber', 'invoiceDate', 'serviceDate', 'internalNumber', 'externalNumber'],
    'documentData.invoice',
    incompleteErrors,
    invalidErrors,
  );
  requireAddress(recipient?.address, 'sharedData.recipient.address', incompleteErrors, invalidErrors);
  requiredStrings(senderContact, ['email', 'phone', 'fax', 'website'], 'documentData.senderContact', incompleteErrors, invalidErrors);
  requiredStrings(
    deliveryAddress,
    ['company', 'contactPerson', 'department', 'street', 'houseNumber', 'postalCode', 'city'],
    'documentData.deliveryAddress',
    incompleteErrors,
    invalidErrors,
  );
  requiredStrings(
    project,
    ['progressPaymentNumber', 'projectName', 'orderNumber', 'billingSection', 'partialService', 'completionDate'],
    'documentData.project',
    incompleteErrors,
    invalidErrors,
  );
  requiredStrings(footerFieldLabels, ['vatId', 'taxNumber', 'iban', 'bic'], 'documentData.footerFieldLabels', incompleteErrors, invalidErrors);

  if (invoice && typeof invoice.invoiceDate === 'string' && invoice.invoiceDate !== '' && !datePattern.test(invoice.invoiceDate)) {
    invalidErrors.push('documentData.invoice.invoiceDate must be empty or YYYY-MM-DD');
  }
  if (invoice && typeof invoice.serviceDate === 'string' && invoice.serviceDate !== '' && !datePattern.test(invoice.serviceDate)) {
    invalidErrors.push('documentData.invoice.serviceDate must be empty or YYYY-MM-DD');
  }
  if (documentData?.invoiceVariant !== expectedInvoiceVariant) {
    return {
      status: 'wrong-invoice-variant',
      invoiceVariant: documentData?.invoiceVariant,
    };
  }
  if (!isStringRecord(documentData?.labels)) {
    invalidErrors.push('documentData.labels must contain string values');
  }
  if (!Array.isArray(documentData?.positions) || documentData.positions.length === 0) {
    incompleteErrors.push('documentData.positions must contain at least one position');
  } else if (!documentData.positions.every(isPosition)) {
    invalidErrors.push('documentData.positions contains invalid field values');
  }
  if (!Array.isArray(documentData?.previousPayments)) {
    incompleteErrors.push('documentData.previousPayments must be an array');
  } else if (!documentData.previousPayments.every(isPreviousPayment)) {
    invalidErrors.push('documentData.previousPayments contains invalid field values');
  }
  if (!Array.isArray(documentData?.textBlocks)) {
    incompleteErrors.push('documentData.textBlocks must be an array');
  } else if (!documentData.textBlocks.every(isTextBlock)) {
    invalidErrors.push('documentData.textBlocks contains invalid field values');
  }
  const smallBusinessRule = requireRecord(documentData?.smallBusinessRule, 'documentData.smallBusinessRule', incompleteErrors);
  if (smallBusinessRule && typeof smallBusinessRule.enabled !== 'boolean') {
    invalidErrors.push('documentData.smallBusinessRule.enabled must be a boolean');
  }

  const fieldConfigKeys = ['contact', 'details', 'deliveryAddress', 'recipient', 'footerMiddle'] as const;
  fieldConfigKeys.forEach((key) => {
    if (!fieldConfiguration || !(key in fieldConfiguration)) {
      incompleteErrors.push(`documentData.fieldConfiguration.${key} is required`);
    } else if (!isFieldConfiguration(fieldConfiguration[key])) {
      invalidErrors.push(`documentData.fieldConfiguration.${key} is invalid`);
    }
  });

  if (incompleteErrors.length > 0) return { status: 'incomplete-data', errors: incompleteErrors };
  if (invalidErrors.length > 0) return { status: 'invalid-field-values', errors: invalidErrors };

  const typedDocument = document as unknown as StandardInvoiceDocument;
  const data = typedDocument.documentData;
  const shared = typedDocument.sharedData;
  const fields = shared.sender.companyFooter.columns.map((column) =>
    column.fields.map((field) => ({ ...field })),
  );

  return {
    status: 'valid',
    state: {
      invoiceVariant: expectedInvoiceVariant,
      labels: { ...data.labels },
      invoiceData: {
        sender: {
          companyName: shared.sender.brandName,
          returnAddress: shared.sender.senderLine,
          address: { ...shared.sender.address },
          contact: { ...data.senderContact },
        },
        recipient: {
          companyName: shared.recipient.company,
          attention: shared.recipient.contactPerson,
          name: shared.recipient.department,
          address: { ...shared.recipient.address },
        },
        deliveryAddress: {
          companyName: data.deliveryAddress.company,
          attention: data.deliveryAddress.contactPerson,
          name: data.deliveryAddress.department,
          address: {
            street: data.deliveryAddress.street,
            houseNumber: data.deliveryAddress.houseNumber,
            postalCode: data.deliveryAddress.postalCode,
            city: data.deliveryAddress.city,
          },
        },
        details: {
          invoiceNumber: data.invoice.invoiceNumber,
          invoiceDate: data.invoice.invoiceDate,
          serviceDate: data.invoice.serviceDate,
        },
        references: {
          internalNumber: data.invoice.internalNumber,
          externalNumber: data.invoice.externalNumber,
          customerNumber: shared.recipient.customerNumber,
        },
        project: { ...data.project },
        footer: {
          company: {
            companyName: fields[0][0].value,
            ...shared.sender.companyFooter.companyAddress,
            extra: fields[0][3].value,
          },
          tax: {
            vatIdLabel: data.footerFieldLabels.vatId,
            vatId: fields[1][0].value,
            taxNumberLabel: data.footerFieldLabels.taxNumber,
            taxNumber: fields[1][1].value,
            commercialRegister: fields[1][2].value,
            representation: fields[1][3].value,
          },
          bank: {
            bankName: fields[2][0].value,
            ibanLabel: data.footerFieldLabels.iban,
            iban: fields[2][1].value,
            bicLabel: data.footerFieldLabels.bic,
            bic: fields[2][2].value,
            bankExtra: fields[2][3].value,
          },
        },
      },
      positions: data.positions.map(({ calculated: _calculated, generatorInput, ...position }) => ({
        ...position,
        ...generatorInput,
      })),
      previousPayments: data.previousPayments.map(({ calculated: _calculated, generatorInput, ...payment }) => ({
        ...payment,
        ...generatorInput,
      })),
      textBlocks: data.textBlocks.map((block) => ({ ...block })),
      isSmallBusinessInvoice: data.smallBusinessRule.enabled,
      fieldConfig: {
        contact: structuredClone(data.fieldConfiguration.contact),
        details: structuredClone(data.fieldConfiguration.details),
        deliveryAddress: structuredClone(data.fieldConfiguration.deliveryAddress),
        recipient: structuredClone(data.fieldConfiguration.recipient),
        footerMiddle: structuredClone(data.fieldConfiguration.footerMiddle),
      },
    },
  };
}

export function restoreStandardInvoiceState(document: unknown): RestoreStandardInvoiceResult {
  const restored = restoreInvoiceState(document, 'standard');
  if (restored.status === 'wrong-invoice-variant') {
    return { status: 'invalid-field-values', errors: ['documentData.invoiceVariant must be "standard"'] };
  }
  return restored as RestoreStandardInvoiceResult;
}

export function restoreGoodsInvoiceState(document: unknown): RestoreGoodsInvoiceResult {
  return restoreInvoiceState(document, 'goods') as RestoreGoodsInvoiceResult;
}
export function restoreTextInvoiceState(document: unknown) { return restoreInvoiceState(document, 'text') as RestoreGoodsInvoiceResult & { state: TextInvoiceGeneratorState }; }
