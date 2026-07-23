import type {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_SCHEMA_VERSION,
  SupportedDocumentType,
} from './constants.js';

export type IsoDate = string;
export type IsoDateTime = string;
export type Uuid = string;

/**
 * Decimal values are JSON strings using a dot as decimal separator.
 * This avoids binary floating-point values in the persisted contract.
 */
export type DecimalString = string;
export type MoneyDecimal = DecimalString;

export interface FooterField {
  key: string;
  value: string;
}

export interface FooterColumn {
  fields: [FooterField, FooterField, FooterField, FooterField];
}

export interface SharedAddressData {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

export interface SharedData {
  sender: {
    brandName: string;
    senderLine: string;
    address: SharedAddressData;
    companyFooter: {
      columns: [FooterColumn, FooterColumn, FooterColumn];
      companyAddress: SharedAddressData;
    };
  };
  recipient: {
    company: string;
    contactPerson: string;
    department: string;
    streetAndNumber: string;
    countryPostalCodeAndCity: string;
    address: SharedAddressData;
    customerNumber: string;
  };
}

export interface DocumentMetadata<TDocumentType extends SupportedDocumentType> {
  documentType: TDocumentType;
  documentId: Uuid;
  createdAt: IsoDateTime;
  generatorVersion: string;
}

export interface Belege24Document<
  TDocumentType extends SupportedDocumentType,
  TDocumentData extends object,
> {
  format: typeof BELEGE24_DOCUMENT_FORMAT;
  schemaVersion: typeof BELEGE24_SCHEMA_VERSION;
  document: DocumentMetadata<TDocumentType>;
  sharedData: SharedData;
  documentData: TDocumentData;
}

export type InvoiceVariant =
  | 'standard'
  | 'goods'
  | 'text'
  | 'progressInvoice'
  | 'partialInvoice'
  | 'finalInvoice';

export interface FieldConfiguration {
  hidden: string[];
  order: string[];
}

export interface InvoicePositionInput {
  id: Uuid;
  articleNumber: string;
  description: string;
  unitPrice: MoneyDecimal;
  quantity: DecimalString;
  unit: string;
  taxRate: DecimalString;
}

export interface CalculatedInvoicePosition extends InvoicePositionInput {
  generatorInput: {
    unitPrice: string;
    quantity: string;
    taxRate: string;
  };
  calculated: {
    netAmount: MoneyDecimal;
    taxAmount: MoneyDecimal;
    grossAmount: MoneyDecimal;
  };
}

export interface PreviousPaymentInput {
  id: Uuid;
  label: string;
  invoiceNumber: string;
  invoiceDate: IsoDate | '';
  netAmount: MoneyDecimal;
  taxRate: DecimalString;
  status: 'paid' | 'open';
}

export interface CalculatedPreviousPayment extends PreviousPaymentInput {
  generatorInput: {
    netAmount: string;
    taxRate: string;
  };
  calculated: {
    taxAmount: MoneyDecimal;
    grossAmount: MoneyDecimal;
  };
}

export interface InvoiceTextBlock {
  id: string;
  label: string;
  value: string;
  visible: boolean;
}

export interface InvoiceTaxGroup {
  taxRate: DecimalString;
  netAmount: MoneyDecimal;
  taxAmount: MoneyDecimal;
  grossAmount: MoneyDecimal;
}

export interface InvoiceAmountSummary {
  netAmount: MoneyDecimal;
  taxAmount: MoneyDecimal;
  grossAmount: MoneyDecimal;
  taxGroups: InvoiceTaxGroup[];
}

export interface StandardInvoiceDocumentData {
  invoiceVariant: InvoiceVariant;
  labels: Record<string, string>;
  invoice: {
    invoiceNumber: string;
    invoiceDate: IsoDate | '';
    serviceDate: IsoDate | '';
    internalNumber: string;
    externalNumber: string;
  };
  senderContact: {
    email: string;
    phone: string;
    fax: string;
    website: string;
  };
  deliveryAddress: {
    company: string;
    contactPerson: string;
    department: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
  };
  project: {
    progressPaymentNumber: string;
    projectName: string;
    orderNumber: string;
    billingSection: string;
    partialService: string;
    completionDate: string;
  };
  positions: CalculatedInvoicePosition[];
  previousPayments: CalculatedPreviousPayment[];
  textBlocks: InvoiceTextBlock[];
  smallBusinessRule: {
    enabled: boolean;
  };
  footerFieldLabels: {
    vatId: string;
    taxNumber: string;
    iban: string;
    bic: string;
  };
  fieldConfiguration: {
    contact: FieldConfiguration;
    details: FieldConfiguration;
    deliveryAddress: FieldConfiguration;
    recipient: FieldConfiguration;
    footerMiddle: FieldConfiguration;
  };
  calculated: {
    invoiceTotals: InvoiceAmountSummary;
    serviceTotals: InvoiceAmountSummary;
    deductedPayments: InvoiceAmountSummary;
    remainingTotals: InvoiceAmountSummary;
  };
}

export type StandardInvoiceDocument = Belege24Document<'invoice', StandardInvoiceDocumentData>;
