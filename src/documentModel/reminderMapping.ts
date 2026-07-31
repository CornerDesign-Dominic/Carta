import {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_GENERATOR_VERSION,
  BELEGE24_SCHEMA_VERSION,
} from './constants.js';
import type {
  FieldConfiguration,
  InvoiceTextBlock,
  ReminderDocument,
  ReminderOpenItem,
} from './types.js';
import type { ReminderVariant } from './reminderVariants.js';

type Address = { street: string; houseNumber: string; postalCode: string; city: string };

type ReminderFooter = {
  company: { companyName: string; street: string; houseNumber: string; postalCode: string; city: string; extra: string };
  tax: { vatIdLabel: string; vatId: string; taxNumberLabel: string; taxNumber: string; commercialRegister: string; representation: string };
  bank: { bankName: string; ibanLabel: string; iban: string; bicLabel: string; bic: string; bankExtra: string };
};

export interface ReminderGeneratorState {
  reminderVariant: ReminderVariant;
  labels: Record<string, string>;
  reminderData: {
    sender: {
      companyName: string;
      returnAddress: string;
      address: Address;
      contact: { email: string; phone: string; fax: string; website: string };
    };
    recipient: {
      companyName: string;
      attention: string;
      name: string;
      address: Address;
    };
    details: {
      reminderNumber: string;
      reminderDate: string;
      customerNumber: string;
    };
    footer: ReminderFooter;
  };
  openItems: ReminderOpenItem[];
  charges: { interest: string; reminderFee: string };
  textBlocks: InvoiceTextBlock[];
  fieldConfig: {
    contact: FieldConfiguration;
    details: FieldConfiguration;
    recipient: FieldConfiguration;
    footerMiddle: FieldConfiguration;
  };
}

export function mapReminderToDocument(state: ReminderGeneratorState): ReminderDocument {
  const { footer } = state.reminderData;

  return {
    format: BELEGE24_DOCUMENT_FORMAT,
    schemaVersion: BELEGE24_SCHEMA_VERSION,
    document: {
      documentType: 'reminder',
      documentId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      generatorVersion: BELEGE24_GENERATOR_VERSION,
    },
    sharedData: {
      sender: {
        brandName: state.reminderData.sender.companyName,
        senderLine: state.reminderData.sender.returnAddress,
        address: { ...state.reminderData.sender.address },
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
        company: state.reminderData.recipient.companyName,
        contactPerson: state.reminderData.recipient.attention,
        department: state.reminderData.recipient.name,
        streetAndNumber: '',
        countryPostalCodeAndCity: '',
        address: { ...state.reminderData.recipient.address },
        customerNumber: state.reminderData.details.customerNumber,
      },
    },
    documentData: {
      reminderVariant: state.reminderVariant,
      labels: { ...state.labels },
      details: { ...state.reminderData.details },
      senderContact: { ...state.reminderData.sender.contact },
      openItems: state.openItems.map((item) => ({ ...item })),
      charges: { ...state.charges },
      textBlocks: state.textBlocks.map((block) => ({ ...block })),
      footerFieldLabels: {
        vatId: footer.tax.vatIdLabel,
        taxNumber: footer.tax.taxNumberLabel,
        iban: footer.bank.ibanLabel,
        bic: footer.bank.bicLabel,
      },
      fieldConfiguration: structuredClone(state.fieldConfig),
    },
  };
}
