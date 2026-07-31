import type {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_SCHEMA_VERSION,
  SupportedDocumentType,
} from './constants.js';
import type { ReminderVariant } from './reminderVariants.js';

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
  taxAmount: MoneyDecimal;
  status: 'paid' | 'open';
}

export interface CalculatedPreviousPayment extends PreviousPaymentInput {
  generatorInput: {
    netAmount: string;
    taxAmount: string;
  };
  calculated: {
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
    project?: FieldConfiguration;
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

export type CreditNoteVariant = 'creditNote' | 'cancellationInvoice' | 'invoiceCorrection';

export interface CreditNoteCorrectionData {
  originalInvoiceNumber: string;
  cancellationReason: string;
  correctionReason: string;
}

export interface CreditNoteCommonDocumentData {
  labels: Record<string, string>;
  details: { creditNoteNumber: string; creditNoteDate: string; serviceDate: string };
  references: { internalReference: string; externalReference: string; customerReference: string };
  correction: CreditNoteCorrectionData;
  senderContact: { email: string; phone: string; fax: string; website: string };
  positions: Array<{ id: Uuid; description: string; unitPrice: string; quantity: string; unit: string; taxRate: string }>;
  textBlocks: InvoiceTextBlock[];
  smallBusinessRule: { enabled: boolean };
  footerFieldLabels: { vatId: string; taxNumber: string; iban: string; bic: string };
  fieldConfiguration: { contact: FieldConfiguration; details: FieldConfiguration; recipient: FieldConfiguration; footerMiddle: FieldConfiguration };
}

export interface StandardCreditNoteDocumentData extends CreditNoteCommonDocumentData {
  creditNoteVariant: 'creditNote';
}

export interface CancellationInvoiceDocumentData extends CreditNoteCommonDocumentData {
  creditNoteVariant: 'cancellationInvoice';
  correction: CreditNoteCorrectionData & {
    originalInvoiceNumber: string;
    cancellationReason: string;
  };
}

export interface InvoiceCorrectionDocumentData extends CreditNoteCommonDocumentData {
  creditNoteVariant: 'invoiceCorrection';
  correction: CreditNoteCorrectionData & {
    originalInvoiceNumber: string;
    correctionReason: string;
  };
}

export type CreditNoteDocumentData =
  | StandardCreditNoteDocumentData
  | CancellationInvoiceDocumentData
  | InvoiceCorrectionDocumentData;

export type CreditNoteDocument = Belege24Document<'creditNote', CreditNoteDocumentData>;

export interface ReminderOpenItem {
  id: Uuid;
  invoiceNumber: string;
  externalNumber: string;
  dueDate: string;
  overdueDays: string;
  amount: string;
}

export interface ReminderDocumentData {
  reminderVariant: ReminderVariant;
  labels: Record<string, string>;
  details: {
    reminderNumber: string;
    reminderDate: string;
    customerNumber: string;
  };
  senderContact: {
    email: string;
    phone: string;
    fax: string;
    website: string;
  };
  openItems: ReminderOpenItem[];
  charges: {
    interest: string;
    reminderFee: string;
  };
  textBlocks: InvoiceTextBlock[];
  footerFieldLabels: {
    vatId: string;
    taxNumber: string;
    iban: string;
    bic: string;
  };
  fieldConfiguration: {
    contact: FieldConfiguration;
    details: FieldConfiguration;
    recipient: FieldConfiguration;
    footerMiddle: FieldConfiguration;
  };
}

export type ReminderDocument = Belege24Document<'reminder', ReminderDocumentData>;

export interface OfferDocumentData {
  state: OfferGeneratorState;
}

export interface DeliveryNoteDocumentData {
  state: DeliveryNoteGeneratorState;
}

export interface ReceiptDocumentData {
  state: ReceiptPersistedGeneratorState;
}

export interface SelfReceiptDocumentData {
  state: SelfReceiptGeneratorState;
}

export interface DocumentAddress {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

export interface DocumentFooter {
  company: { companyName: string; street: string; houseNumber: string; postalCode: string; city: string; extra: string };
  tax: { vatIdLabel: string; vatId: string; taxNumberLabel: string; taxNumber: string; commercialRegister: string; representation: string };
  bank: { bankName: string; ibanLabel: string; iban: string; bicLabel: string; bic: string; bankExtra: string };
}

export interface BusinessDocumentState<TPosition> {
  labels: Record<string, string>;
  documentData: {
    sender: { companyName: string; returnAddress: string; address: DocumentAddress; contact: { email: string; phone: string; fax: string; website: string } };
    recipient: { companyName: string; attention: string; name: string; address: DocumentAddress };
    details: Record<string, string>;
    references: Record<string, string>;
    footer: DocumentFooter;
  };
  positions: TPosition[];
  textBlocks: InvoiceTextBlock[];
  fieldConfig: { contact: FieldConfiguration; details: FieldConfiguration; recipient: FieldConfiguration; footerMiddle: FieldConfiguration };
}

export type OfferGeneratorState = BusinessDocumentState<{
  id: Uuid; description: string; unitPrice: string; quantity: string; unit: string; taxRate: string;
}>;

export type DeliveryNoteGeneratorState = BusinessDocumentState<{
  id: Uuid; quantity: string; unit: string; description: string; deliveryDate: string; note: string;
}>;

export interface ReceiptGeneratorState {
  labels: Record<string, string>;
  receiptData: {
    sender: { companyName: string; returnAddress: string; address: DocumentAddress; contact: { email: string; phone: string; website: string } };
    recipient: { companyName: string; attention: string; name: string; address: DocumentAddress };
    details: { receiptId: string; receiptDate: string; paymentDate: string; place: string; from: string; purpose: string; bookingNote: string; receiverSignature: string };
    references: { internalReference: string; externalReference: string };
    amount: { netAmount: string; taxRate: string; taxAmount: string; grossAmount: string; amountInWords: string; settlementMethod: string };
    footer: { company: DocumentFooter['company']; tax: { vatIdLabel: string; vatId: string; taxIdLabel: string; taxId: string; representation: string }; bank: { bankName: string; ibanLabel: string; iban: string; bicLabel: string; bic: string } };
  };
  amountCalculationSource: 'netAmount' | 'grossAmount';
  textBlocks: InvoiceTextBlock[];
  fieldConfig: { contact: FieldConfiguration; details: FieldConfiguration; header: FieldConfiguration; recipient: FieldConfiguration; footerMiddle: FieldConfiguration };
}

export interface ReceiptPersistedGeneratorState extends Omit<ReceiptGeneratorState, 'receiptData'> {
  receiptData: Omit<ReceiptGeneratorState['receiptData'], 'amount'> & {
    amount: { calculationSource: 'netAmount' | 'grossAmount'; sourceAmount: string; taxRate: string; amountInWords: string; settlementMethod: string };
  };
}

export interface SelfReceiptGeneratorState {
  labels: Record<string, string>;
  selfReceiptData: {
    sender: { companyName: string; returnAddress: string; address: DocumentAddress; contact: { email: string; phone: string; fax: string; website: string } };
    recipient: { companyName: string; attention: string; name: string; address: DocumentAddress };
    details: { selfReceiptId: string; receiptDate: string; expenseDate: string };
    references: { internalReference: string; externalReference: string; costCenter: string };
    expenseInfo: { occasion: string; reason: string; settlementType: string; location: string };
    footer: DocumentFooter;
  };
  positions: Array<{ id: Uuid; expenseDate: string; description: string; netAmount: string; taxRate: string }>;
  fieldConfig: { contact: FieldConfiguration; details: FieldConfiguration; recipient: FieldConfiguration; footerMiddle: FieldConfiguration };
}

export type OfferDocument = Belege24Document<'offer', OfferDocumentData>;
export type DeliveryNoteDocument = Belege24Document<'deliveryNote', DeliveryNoteDocumentData>;
export type ReceiptDocument = Belege24Document<'receipt', ReceiptDocumentData>;
export type SelfReceiptDocument = Belege24Document<'selfReceipt', SelfReceiptDocumentData>;

export interface BusinessLetterGeneratorState {
  labels: Record<string, string>;
  letterData: {
    sender: {
      companyName: string;
      returnAddress: string;
      address: DocumentAddress;
      contact: { email: string; phone: string; fax: string; website: string };
    };
    recipient: {
      companyName: string;
      attention: string;
      name: string;
      address: DocumentAddress;
    };
    details: {
      yourReference: string;
      ourReference: string;
      contactPerson: string;
      place: string;
      letterDate: string;
    };
    references: Record<string, string>;
    footer: DocumentFooter;
  };
  content: {
    subject: string;
    salutation: string;
    body: string;
    closing: string;
    signerName: string;
    signerRole: string;
    attachments: string;
    distribution: string;
  };
  fieldConfig: {
    contact: FieldConfiguration;
    details: FieldConfiguration;
    recipient: FieldConfiguration;
    footerMiddle: FieldConfiguration;
    letterContent: FieldConfiguration;
  };
}

export interface BusinessLetterDocumentData {
  state: BusinessLetterGeneratorState;
}

export type BusinessLetterDocument = Belege24Document<'businessLetter', BusinessLetterDocumentData>;

export type Belege24SupportedDocument = StandardInvoiceDocument | CreditNoteDocument | ReminderDocument | OfferDocument | DeliveryNoteDocument | ReceiptDocument | SelfReceiptDocument | BusinessLetterDocument;
