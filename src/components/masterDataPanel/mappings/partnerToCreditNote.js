import { mapPartnerRecipient } from './partnerToInvoice.js';

function clean(value) {
  return String(value ?? '').trim();
}

export function mapPartnerToCreditNote(record) {
  return { recipient: mapPartnerRecipient(record) };
}

export function applyPartnerToCreditNote(currentData, record) {
  const { recipient } = mapPartnerToCreditNote(record);

  return {
    ...currentData,
    recipient: {
      ...currentData.recipient,
      ...recipient,
      address: { ...currentData.recipient.address, ...recipient.address },
    },
  };
}

export function removePartnerFromCreditNote(currentData) {
  return {
    ...currentData,
    recipient: {
      ...currentData.recipient,
      companyName: '',
      attention: '',
      name: '',
      address: {
        ...currentData.recipient.address,
        street: '',
        houseNumber: '',
        postalCode: '',
        city: '',
      },
    },
  };
}

export function hasCreditNoteRecipientData(data) {
  const recipient = data?.recipient ?? {};
  const address = recipient.address ?? {};

  return [
    recipient.companyName,
    recipient.attention,
    recipient.name,
    address.street,
    address.houseNumber,
    address.postalCode,
    address.city,
  ].some((value) => clean(value));
}
