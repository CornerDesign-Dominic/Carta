import {
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_GENERATOR_VERSION,
  BELEGE24_SCHEMA_VERSION,
} from './constants.js';
import type {
  DecimalString,
  FieldConfiguration,
  InvoiceAmountSummary,
  InvoicePositionInput,
  InvoiceTextBlock,
  InvoiceVariant,
  MoneyDecimal,
  PreviousPaymentInput,
  StandardInvoiceDocument,
} from './types.js';

interface AddressState {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

export interface StandardInvoiceGeneratorState {
  invoiceVariant: InvoiceVariant;
  labels: Record<string, string>;
  invoiceData: {
    sender: {
      companyName: string;
      returnAddress: string;
      address: AddressState;
      contact: { email: string; phone: string; fax: string; website: string };
    };
    recipient: {
      companyName: string;
      attention: string;
      name: string;
      address: AddressState;
    };
    deliveryAddress: {
      companyName: string;
      attention: string;
      name: string;
      address: AddressState;
    };
    details: { invoiceNumber: string; invoiceDate: string; serviceDate: string };
    references: { internalNumber: string; externalNumber: string; customerNumber: string };
    project: {
      progressPaymentNumber: string;
      projectName: string;
      orderNumber: string;
      billingSection: string;
      partialService: string;
      completionDate: string;
    };
    footer: {
      company: {
        companyName: string;
        street: string;
        houseNumber: string;
        postalCode: string;
        city: string;
        extra: string;
      };
      tax: {
        vatIdLabel: string;
        vatId: string;
        taxNumberLabel: string;
        taxNumber: string;
        commercialRegister: string;
        representation: string;
      };
      bank: {
        bankName: string;
        ibanLabel: string;
        iban: string;
        bicLabel: string;
        bic: string;
        bankExtra: string;
      };
    };
  };
  positions: InvoicePositionInput[];
  previousPayments: PreviousPaymentInput[];
  textBlocks: InvoiceTextBlock[];
  isSmallBusinessInvoice: boolean;
  fieldConfig: {
    contact: FieldConfiguration;
    details: FieldConfiguration;
    deliveryAddress: FieldConfiguration;
    recipient: FieldConfiguration;
    footerMiddle: FieldConfiguration;
  };
}

export interface MappingOptions {
  documentId?: string;
  createdAt?: string;
  generatorVersion?: string;
}

function joinVisibleLine(...parts: string[]): string {
  const nonEmptyParts = parts.filter((part) => part !== '');
  if (nonEmptyParts.length === 1) return nonEmptyParts[0];
  return parts.map((part) => part.trim()).filter(Boolean).join(' ');
}

function joinAddress(address: AddressState): { streetAndNumber: string; countryPostalCodeAndCity: string } {
  return {
    streetAndNumber: joinVisibleLine(address.street, address.houseNumber),
    countryPostalCodeAndCity: joinVisibleLine(address.postalCode, address.city),
  };
}

function parseDecimal(value: string): number {
  const normalized = String(value ?? '')
    .trim()
    .replace(/[^\d,.-]/g, '')
    .replace(/\.(?=\d{3}(?:\D|$))/g, '')
    .replace(',', '.');
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function decimalString(value: string | number): DecimalString {
  const number = typeof value === 'number' ? value : parseDecimal(value);
  return Number.isInteger(number) ? String(number) : String(number).replace(/0+$/, '').replace(/\.$/, '');
}

function money(value: number): MoneyDecimal {
  return (Math.round((value + Number.EPSILON) * 100) / 100).toFixed(2);
}

function calculatePosition(position: InvoicePositionInput, isSmallBusiness: boolean, isTextInvoice: boolean) {
  const net = isTextInvoice
    ? parseDecimal(position.unitPrice)
    : parseDecimal(position.unitPrice) * parseDecimal(position.quantity);
  const taxRate = isSmallBusiness ? 0 : Math.max(0, parseDecimal(position.taxRate));
  const tax = net * (taxRate / 100);
  return { net, tax, gross: net + tax, taxRate };
}

function emptySummary() {
  return { net: 0, tax: 0, groups: new Map<string, { taxRate: number; net: number; tax: number; gross: number }>() };
}

function addAmount(
  summary: ReturnType<typeof emptySummary>,
  calculated: { net: number; tax: number; gross: number; taxRate: number },
) {
  const key = String(calculated.taxRate);
  const group = summary.groups.get(key) ?? { taxRate: calculated.taxRate, net: 0, tax: 0, gross: 0 };
  group.net += calculated.net;
  group.tax += calculated.tax;
  group.gross += calculated.gross;
  summary.groups.set(key, group);
  summary.net += calculated.net;
  summary.tax += calculated.tax;
}

function amountSummary(
  net: number,
  tax: number,
  groups: Iterable<{ taxRate: number; net: number; tax: number; gross: number }>,
): InvoiceAmountSummary {
  return {
    netAmount: money(net),
    taxAmount: money(tax),
    grossAmount: money(net + tax),
    taxGroups: [...groups]
      .sort((first, second) => first.taxRate - second.taxRate)
      .map((group) => ({
        taxRate: decimalString(group.taxRate),
        netAmount: money(group.net),
        taxAmount: money(group.tax),
        grossAmount: money(group.gross),
      })),
  };
}

export function mapStandardInvoiceToDocument(
  state: StandardInvoiceGeneratorState,
  options: MappingOptions = {},
): StandardInvoiceDocument {
  const isTextInvoice = state.invoiceVariant === 'text';
  const isFinalInvoice = state.invoiceVariant === 'finalInvoice';
  const service = emptySummary();
  const deducted = emptySummary();

  const positions = state.positions.map((position) => {
    const calculated = calculatePosition(position, state.isSmallBusinessInvoice, isTextInvoice);
    addAmount(service, calculated);
    return {
      ...position,
      unitPrice: money(parseDecimal(position.unitPrice)),
      quantity: decimalString(position.quantity),
      taxRate: decimalString(position.taxRate),
      generatorInput: {
        unitPrice: position.unitPrice,
        quantity: position.quantity,
        taxRate: position.taxRate,
      },
      calculated: {
        netAmount: money(calculated.net),
        taxAmount: money(calculated.tax),
        grossAmount: money(calculated.gross),
      },
    };
  });

  const previousPayments = state.previousPayments.map((payment) => {
    const net = parseDecimal(payment.netAmount);
    const taxRate = state.isSmallBusinessInvoice ? 0 : Math.max(0, parseDecimal(payment.taxRate));
    const tax = net * (taxRate / 100);
    const calculated = { net, tax, gross: net + tax, taxRate };
    if (payment.status === 'paid') addAmount(deducted, calculated);
    return {
      ...payment,
      netAmount: money(net),
      taxRate: decimalString(payment.taxRate),
      generatorInput: {
        netAmount: payment.netAmount,
        taxRate: payment.taxRate,
      },
      calculated: { taxAmount: money(tax), grossAmount: money(net + tax) },
    };
  });

  const remainingGroups = new Map<string, { taxRate: number; net: number; tax: number; gross: number }>();
  service.groups.forEach((group, key) => {
    const paid = deducted.groups.get(key) ?? { net: 0, tax: 0, gross: 0 };
    remainingGroups.set(key, {
      taxRate: group.taxRate,
      net: group.net - paid.net,
      tax: group.tax - paid.tax,
      gross: group.gross - paid.gross,
    });
  });
  deducted.groups.forEach((group, key) => {
    if (!remainingGroups.has(key)) {
      remainingGroups.set(key, {
        taxRate: group.taxRate,
        net: -group.net,
        tax: -group.tax,
        gross: -group.gross,
      });
    }
  });

  const remainingNet = service.net - deducted.net;
  const remainingTax = service.tax - deducted.tax;
  const invoiceNet = isFinalInvoice ? remainingNet : service.net;
  const invoiceTax = isFinalInvoice ? remainingTax : service.tax;
  const recipientAddress = joinAddress(state.invoiceData.recipient.address);
  const footer = state.invoiceData.footer;

  return {
    format: BELEGE24_DOCUMENT_FORMAT,
    schemaVersion: BELEGE24_SCHEMA_VERSION,
    document: {
      documentType: 'invoice',
      documentId: options.documentId ?? crypto.randomUUID(),
      createdAt: options.createdAt ?? new Date().toISOString(),
      generatorVersion: options.generatorVersion ?? BELEGE24_GENERATOR_VERSION,
    },
    sharedData: {
      sender: {
        brandName: state.invoiceData.sender.companyName,
        senderLine: state.invoiceData.sender.returnAddress,
        address: { ...state.invoiceData.sender.address },
        companyFooter: {
          columns: [
            {
              fields: [
                { key: 'companyName', value: footer.company.companyName },
                { key: 'streetAndNumber', value: joinVisibleLine(footer.company.street, footer.company.houseNumber) },
                { key: 'postalCodeAndCity', value: joinVisibleLine(footer.company.postalCode, footer.company.city) },
                { key: 'custom', value: footer.company.extra },
              ],
            },
            {
              fields: [
                { key: 'vatId', value: footer.tax.vatId },
                { key: 'taxNumber', value: footer.tax.taxNumber },
                { key: 'commercialRegister', value: footer.tax.commercialRegister },
                { key: 'custom', value: footer.tax.representation },
              ],
            },
            {
              fields: [
                { key: 'bankName', value: footer.bank.bankName },
                { key: 'iban', value: footer.bank.iban },
                { key: 'bic', value: footer.bank.bic },
                { key: 'custom', value: footer.bank.bankExtra },
              ],
            },
          ],
          companyAddress: {
            street: footer.company.street,
            houseNumber: footer.company.houseNumber,
            postalCode: footer.company.postalCode,
            city: footer.company.city,
          },
        },
      },
      recipient: {
        company: state.invoiceData.recipient.companyName,
        contactPerson: state.invoiceData.recipient.attention,
        department: state.invoiceData.recipient.name,
        ...recipientAddress,
        address: { ...state.invoiceData.recipient.address },
        customerNumber: state.invoiceData.references.customerNumber,
      },
    },
    documentData: {
      invoiceVariant: state.invoiceVariant,
      labels: { ...state.labels },
      invoice: {
        ...state.invoiceData.details,
        internalNumber: state.invoiceData.references.internalNumber,
        externalNumber: state.invoiceData.references.externalNumber,
      },
      senderContact: { ...state.invoiceData.sender.contact },
      deliveryAddress: {
        company: state.invoiceData.deliveryAddress.companyName,
        contactPerson: state.invoiceData.deliveryAddress.attention,
        department: state.invoiceData.deliveryAddress.name,
        ...state.invoiceData.deliveryAddress.address,
      },
      project: { ...state.invoiceData.project },
      positions,
      previousPayments,
      textBlocks: state.textBlocks.map((block) => ({ ...block })),
      smallBusinessRule: { enabled: state.isSmallBusinessInvoice },
      footerFieldLabels: {
        vatId: footer.tax.vatIdLabel,
        taxNumber: footer.tax.taxNumberLabel,
        iban: footer.bank.ibanLabel,
        bic: footer.bank.bicLabel,
      },
      fieldConfiguration: structuredClone(state.fieldConfig),
      calculated: {
        invoiceTotals: amountSummary(invoiceNet, invoiceTax, isFinalInvoice ? remainingGroups.values() : service.groups.values()),
        serviceTotals: amountSummary(service.net, service.tax, service.groups.values()),
        deductedPayments: amountSummary(deducted.net, deducted.tax, deducted.groups.values()),
        remainingTotals: amountSummary(remainingNet, remainingTax, remainingGroups.values()),
      },
    },
  };
}
