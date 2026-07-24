import { BELEGE24_DOCUMENT_FORMAT, BELEGE24_GENERATOR_VERSION, BELEGE24_SCHEMA_VERSION } from './constants.js';
import type {
  CreditNoteDocument,
  CreditNoteDocumentData,
  CreditNoteVariant,
  FieldConfiguration,
  InvoiceTextBlock,
} from './types.js';

type Address = { street: string; houseNumber: string; postalCode: string; city: string };
type Footer = {
  company: { companyName: string; street: string; houseNumber: string; postalCode: string; city: string; extra: string };
  tax: { vatIdLabel: string; vatId: string; taxNumberLabel: string; taxNumber: string; commercialRegister: string; representation: string };
  bank: { bankName: string; ibanLabel: string; iban: string; bicLabel: string; bic: string; bankExtra: string };
};

export interface CreditNoteGeneratorState {
  labels: Record<string, string>;
  creditNoteVariant: CreditNoteVariant;
  isSmallBusiness: boolean;
  offerData: {
    sender: { companyName: string; returnAddress: string; address: Address; contact: { email: string; phone: string; fax: string; website: string } };
    recipient: { companyName: string; attention: string; name: string; address: Address };
    details: { creditNoteNumber: string; creditNoteDate: string; serviceDate: string };
    references: { internalReference: string; externalReference: string; customerReference: string };
    correction: { originalInvoiceNumber: string; cancellationReason: string; correctionReason: string };
    footer: Footer;
  };
  positions: Array<{ id: string; description: string; unitPrice: string; quantity: string; unit: string; taxRate: string }>;
  textBlocks: InvoiceTextBlock[];
  fieldConfig: { contact: FieldConfiguration; details: FieldConfiguration; recipient: FieldConfiguration; footerMiddle: FieldConfiguration };
}

function mapDocumentData(state: CreditNoteGeneratorState, footer: Footer): CreditNoteDocumentData {
  const common = {
    labels: { ...state.labels },
    details: { ...state.offerData.details },
    references: { ...state.offerData.references },
    correction: { ...state.offerData.correction },
    senderContact: { ...state.offerData.sender.contact },
    positions: state.positions.map((position) => ({ ...position })),
    textBlocks: state.textBlocks.map((block) => ({ ...block })),
    smallBusinessRule: { enabled: state.isSmallBusiness },
    footerFieldLabels: {
      vatId: footer.tax.vatIdLabel,
      taxNumber: footer.tax.taxNumberLabel,
      iban: footer.bank.ibanLabel,
      bic: footer.bank.bicLabel,
    },
    fieldConfiguration: structuredClone(state.fieldConfig),
  };

  switch (state.creditNoteVariant) {
    case 'creditNote':
      return { ...common, creditNoteVariant: 'creditNote' };
    case 'cancellationInvoice':
      return { ...common, creditNoteVariant: 'cancellationInvoice' };
    case 'invoiceCorrection':
      return { ...common, creditNoteVariant: 'invoiceCorrection' };
  }
}

export function mapCreditNoteToDocument(state: CreditNoteGeneratorState): CreditNoteDocument {
  const footer = state.offerData.footer;

  return {
    format: BELEGE24_DOCUMENT_FORMAT,
    schemaVersion: BELEGE24_SCHEMA_VERSION,
    document: {
      documentType: 'creditNote',
      documentId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      generatorVersion: BELEGE24_GENERATOR_VERSION,
    },
    sharedData: {
      sender: {
        brandName: state.offerData.sender.companyName,
        senderLine: state.offerData.sender.returnAddress,
        address: { ...state.offerData.sender.address },
        companyFooter: {
          columns: [
            { fields: [{ key: 'companyName', value: footer.company.companyName }, { key: 'streetAndNumber', value: `${footer.company.street} ${footer.company.houseNumber}` }, { key: 'postalCodeAndCity', value: `${footer.company.postalCode} ${footer.company.city}` }, { key: 'custom', value: footer.company.extra }] },
            { fields: [{ key: 'vatId', value: footer.tax.vatId }, { key: 'taxNumber', value: footer.tax.taxNumber }, { key: 'commercialRegister', value: footer.tax.commercialRegister }, { key: 'custom', value: footer.tax.representation }] },
            { fields: [{ key: 'bankName', value: footer.bank.bankName }, { key: 'iban', value: footer.bank.iban }, { key: 'bic', value: footer.bank.bic }, { key: 'custom', value: footer.bank.bankExtra }] },
          ],
          companyAddress: { street: footer.company.street, houseNumber: footer.company.houseNumber, postalCode: footer.company.postalCode, city: footer.company.city },
        },
      },
      recipient: {
        company: state.offerData.recipient.companyName,
        contactPerson: state.offerData.recipient.attention,
        department: state.offerData.recipient.name,
        streetAndNumber: '',
        countryPostalCodeAndCity: '',
        address: { ...state.offerData.recipient.address },
        customerNumber: state.offerData.references.customerReference,
      },
    },
    documentData: mapDocumentData(state, footer),
  };
}
