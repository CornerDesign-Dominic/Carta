import {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_SCHEMA_VERSION,
  SUPPORTED_DOCUMENT_TYPES,
  type SupportedDocumentType,
} from './constants.js';
import type { Belege24Document } from './types.js';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validateAddress(value: unknown, path: string, errors: string[]) {
  if (!isRecord(value)) {
    errors.push(`${path} must be an object`);
    return;
  }

  ['street', 'houseNumber', 'postalCode', 'city'].forEach((field) => {
    if (typeof value[field] !== 'string') errors.push(`${path}.${field} must be a string`);
  });
}

export function validateBelege24Document(value: unknown): ValidationResult {
  const errors: string[] = [];

  if (!isRecord(value)) {
    return { valid: false, errors: ['root must be an object'] };
  }

  if (value.format !== BELEGE24_DOCUMENT_FORMAT) {
    errors.push(`format must be "${BELEGE24_DOCUMENT_FORMAT}"`);
  }
  if (value.schemaVersion !== BELEGE24_SCHEMA_VERSION) {
    errors.push(`schemaVersion must be "${BELEGE24_SCHEMA_VERSION}"`);
  }

  const document = value.document;
  if (!isRecord(document)) {
    errors.push('document must be an object');
  } else {
    if (!SUPPORTED_DOCUMENT_TYPES.includes(document.documentType as SupportedDocumentType)) {
      errors.push('document.documentType is not supported');
    }
    if (typeof document.documentId !== 'string' || !uuidPattern.test(document.documentId)) {
      errors.push('document.documentId must be a UUID');
    }
    if (
      typeof document.createdAt !== 'string'
      || Number.isNaN(Date.parse(document.createdAt))
      || new Date(document.createdAt).toISOString() !== document.createdAt
    ) {
      errors.push('document.createdAt must be an ISO-8601 UTC timestamp');
    }
    if (typeof document.generatorVersion !== 'string' || document.generatorVersion.length === 0) {
      errors.push('document.generatorVersion must be a non-empty string');
    }
  }

  const sharedData = value.sharedData;
  if (!isRecord(sharedData)) {
    errors.push('sharedData must be an object');
  } else {
    const sender = sharedData.sender;
    const recipient = sharedData.recipient;
    if (!isRecord(sender)) {
      errors.push('sharedData.sender must be an object');
    } else {
      if (typeof sender.brandName !== 'string') errors.push('sharedData.sender.brandName must be a string');
      if (typeof sender.senderLine !== 'string') errors.push('sharedData.sender.senderLine must be a string');
      validateAddress(sender.address, 'sharedData.sender.address', errors);
      const companyFooter = sender.companyFooter;
      const columns = isRecord(companyFooter) ? companyFooter.columns : undefined;
      validateAddress(
        isRecord(companyFooter) ? companyFooter.companyAddress : undefined,
        'sharedData.sender.companyFooter.companyAddress',
        errors,
      );
      if (!Array.isArray(columns) || columns.length !== 3) {
        errors.push('sharedData.sender.companyFooter.columns must contain exactly three columns');
      } else {
        columns.forEach((column, columnIndex) => {
          const fields = isRecord(column) ? column.fields : undefined;
          if (!Array.isArray(fields) || fields.length !== 4) {
            errors.push(`sharedData.sender.companyFooter.columns[${columnIndex}].fields must contain exactly four fields`);
            return;
          }
          fields.forEach((field, fieldIndex) => {
            if (
              !isRecord(field)
              || typeof field.key !== 'string'
              || field.key.length === 0
              || typeof field.value !== 'string'
            ) {
              errors.push(`sharedData.sender.companyFooter.columns[${columnIndex}].fields[${fieldIndex}] is invalid`);
            }
          });
        });
      }
    }

    if (!isRecord(recipient)) {
      errors.push('sharedData.recipient must be an object');
    } else {
      ['company', 'contactPerson', 'department', 'streetAndNumber', 'countryPostalCodeAndCity', 'customerNumber']
        .forEach((field) => {
          if (typeof recipient[field] !== 'string') {
            errors.push(`sharedData.recipient.${field} must be a string`);
          }
        });
      validateAddress(recipient.address, 'sharedData.recipient.address', errors);
    }
  }

  if (!isRecord(value.documentData)) {
    errors.push('documentData must be an object');
  }

  return { valid: errors.length === 0, errors };
}

export function isBelege24Document(
  value: unknown,
): value is Belege24Document<SupportedDocumentType, Record<string, unknown>> {
  return validateBelege24Document(value).valid;
}
