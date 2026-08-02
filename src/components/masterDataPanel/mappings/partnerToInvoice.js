function clean(value) {
  return String(value ?? '').trim();
}

export function mapPartnerToInvoice(record) {
  const address = record?.mainAddress ?? {};

  return {
    recipient: {
      companyName: clean(record?.companyName),
      attention: clean(address.attention),
      name: clean(address.department),
      address: {
        street: clean(address.street),
        houseNumber: clean(address.houseNumber),
        postalCode: clean(address.postalCode),
        city: clean(address.city),
      },
    },
    references: {
      customerNumber: clean(record?.customerNumber),
    },
  };
}

export function applyPartnerToInvoice(currentInvoiceData, record) {
  const mapped = mapPartnerToInvoice(record);

  return {
    ...currentInvoiceData,
    recipient: {
      ...currentInvoiceData.recipient,
      ...mapped.recipient,
      address: { ...currentInvoiceData.recipient.address, ...mapped.recipient.address },
    },
    references: { ...currentInvoiceData.references, ...mapped.references },
  };
}

export function removePartnerFromInvoice(currentInvoiceData) {
  return {
    ...currentInvoiceData,
    recipient: {
      ...currentInvoiceData.recipient,
      companyName: '',
      attention: '',
      name: '',
      address: {
        ...currentInvoiceData.recipient.address,
        street: '',
        houseNumber: '',
        postalCode: '',
        city: '',
      },
    },
    references: { ...currentInvoiceData.references, customerNumber: '' },
  };
}

export function hasInvoiceRecipientData(invoiceData) {
  const recipient = invoiceData?.recipient ?? {};
  const address = recipient.address ?? {};

  return [
    recipient.companyName,
    recipient.attention,
    recipient.name,
    address.street,
    address.houseNumber,
    address.postalCode,
    address.city,
    invoiceData?.references?.customerNumber,
  ].some((value) => clean(value));
}
