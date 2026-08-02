import { mapPartnerRecipient } from './partnerToInvoice.js';

function clean(value) {
  return String(value ?? '').trim();
}

function emptyRecipient(currentRecipient = {}) {
  return {
    ...currentRecipient,
    companyName: '',
    attention: '',
    name: '',
    address: {
      ...currentRecipient.address,
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
    },
  };
}

function applyRecipient(currentDeliveryNoteData, recipient) {
  return {
    ...currentDeliveryNoteData,
    recipient: {
      ...currentDeliveryNoteData.recipient,
      ...recipient,
      address: { ...currentDeliveryNoteData.recipient.address, ...recipient.address },
    },
  };
}

export function mapPartnerToDeliveryNote(record) {
  return { recipient: mapPartnerRecipient(record) };
}

export function mapDeliveryAddressToDeliveryNote(address) {
  return {
    recipient: {
      companyName: clean(address?.companyName),
      attention: clean(address?.attention),
      name: clean(address?.department),
      address: {
        street: clean(address?.street),
        houseNumber: clean(address?.houseNumber),
        postalCode: clean(address?.postalCode),
        city: clean(address?.city),
      },
    },
  };
}

export function applyPartnerToDeliveryNote(currentDeliveryNoteData, record) {
  return applyRecipient(currentDeliveryNoteData, mapPartnerToDeliveryNote(record).recipient);
}

export function applyDeliveryAddressToDeliveryNote(currentDeliveryNoteData, address) {
  return applyRecipient(currentDeliveryNoteData, mapDeliveryAddressToDeliveryNote(address).recipient);
}

export function removeDeliveryAddressFromDeliveryNote(currentDeliveryNoteData, partner) {
  return applyPartnerToDeliveryNote(currentDeliveryNoteData, partner);
}

export function removePartnerFromDeliveryNote(currentDeliveryNoteData) {
  return { ...currentDeliveryNoteData, recipient: emptyRecipient(currentDeliveryNoteData.recipient) };
}

export function hasDeliveryNoteRecipientData(deliveryNoteData) {
  const recipient = deliveryNoteData?.recipient ?? {};
  const address = recipient.address ?? {};

  return [recipient.companyName, recipient.attention, recipient.name, address.street, address.houseNumber, address.postalCode, address.city]
    .some((value) => clean(value));
}
