import { BELEGE24_DOCUMENT_FORMAT, BELEGE24_SCHEMA_VERSION } from './constants.js';
import type { CreditNoteDocument } from './types.js';
import type { CreditNoteGeneratorState } from './creditNoteMapping.js';

export function restoreCreditNoteState(document: unknown): { status: 'valid'; state: CreditNoteGeneratorState } | { status: 'invalid' } | { status: 'wrong-document-type' } | { status: 'wrong-variant' } {
  const candidate = document as CreditNoteDocument;
  if (!candidate || candidate.format !== BELEGE24_DOCUMENT_FORMAT || candidate.schemaVersion !== BELEGE24_SCHEMA_VERSION) return { status: 'invalid' };
  if (candidate.document?.documentType !== 'creditNote') return { status: 'wrong-document-type' };
  if (candidate.documentData?.creditNoteVariant !== 'creditNote') return { status: 'wrong-variant' };
  const data = candidate.documentData; const shared = candidate.sharedData; const fields = shared?.sender?.companyFooter?.columns;
  const strings = (value: unknown, keys: string[]) => !!value && typeof value === 'object' && keys.every((key) => typeof (value as Record<string, unknown>)[key] === 'string');
  const address = (value: unknown) => strings(value, ['street', 'houseNumber', 'postalCode', 'city']);
  const configuration = (value: unknown) => !!value && typeof value === 'object' && ['contact', 'details', 'recipient', 'footerMiddle'].every((key) => {
    const block = (value as Record<string, unknown>)[key];
    return !!block && typeof block === 'object' && Array.isArray((block as Record<string, unknown>).hidden) && Array.isArray((block as Record<string, unknown>).order);
  });
  if (!data || !shared || !fields || fields.length !== 3 || !address(shared.sender?.address) || !address(shared.recipient?.address)
    || !address(shared.sender?.companyFooter?.companyAddress) || !strings(shared.sender, ['brandName', 'senderLine'])
    || !strings(shared.recipient, ['company', 'contactPerson', 'department', 'streetAndNumber', 'countryPostalCodeAndCity', 'customerNumber'])
    || !strings(data.details, ['creditNoteNumber', 'creditNoteDate', 'serviceDate']) || !strings(data.references, ['internalReference', 'externalReference', 'customerReference'])
    || !strings(data.correction, ['originalInvoiceNumber', 'cancellationReason', 'correctionReason']) || !strings(data.senderContact, ['email', 'phone', 'fax', 'website'])
    || !strings(data.footerFieldLabels, ['vatId', 'taxNumber', 'iban', 'bic']) || !configuration(data.fieldConfiguration)
    || typeof data.smallBusinessRule?.enabled !== 'boolean' || !Array.isArray(data.positions) || !data.positions.every((position) => strings(position, ['id', 'description', 'unitPrice', 'quantity', 'unit', 'taxRate']))
    || !Array.isArray(data.textBlocks) || !data.textBlocks.every((block) => strings(block, ['id', 'label', 'value']) && typeof block.visible === 'boolean')
    || !fields.every((column) => Array.isArray(column.fields) && column.fields.length === 4 && column.fields.every((field) => strings(field, ['key', 'value'])))) return { status: 'invalid' };
  return { status: 'valid', state: { creditNoteVariant: 'creditNote', labels: { ...data.labels }, isSmallBusiness: data.smallBusinessRule.enabled, offerData: { sender: { companyName: shared.sender.brandName, returnAddress: shared.sender.senderLine, address: { ...shared.sender.address }, contact: { ...data.senderContact } }, recipient: { companyName: shared.recipient.company, attention: shared.recipient.contactPerson, name: shared.recipient.department, address: { ...shared.recipient.address } }, details: { ...data.details }, references: { ...data.references }, correction: { ...data.correction }, footer: { company: { companyName: fields[0].fields[0].value, ...shared.sender.companyFooter.companyAddress, extra: fields[0].fields[3].value }, tax: { vatIdLabel: data.footerFieldLabels.vatId, vatId: fields[1].fields[0].value, taxNumberLabel: data.footerFieldLabels.taxNumber, taxNumber: fields[1].fields[1].value, commercialRegister: fields[1].fields[2].value, representation: fields[1].fields[3].value }, bank: { bankName: fields[2].fields[0].value, ibanLabel: data.footerFieldLabels.iban, iban: fields[2].fields[1].value, bicLabel: data.footerFieldLabels.bic, bic: fields[2].fields[2].value, bankExtra: fields[2].fields[3].value } } }, positions: data.positions.map((position) => ({ ...position })), textBlocks: data.textBlocks.map((block) => ({ ...block })), fieldConfig: structuredClone(data.fieldConfiguration) } };
}
