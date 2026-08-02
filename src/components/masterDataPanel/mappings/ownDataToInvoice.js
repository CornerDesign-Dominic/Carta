function clean(value) {
  return String(value ?? '').trim();
}

function joinLine(...parts) {
  return parts.map(clean).filter(Boolean).join(' ');
}

function createReturnAddress(companyName, address) {
  return [
    companyName,
    joinLine(address.street, address.houseNumber),
    joinLine(address.postalCode, address.city),
  ].filter(Boolean).join(' - ');
}

function createCommercialRegisterLine(taxAndRegister) {
  return [
    clean(taxAndRegister.commercialRegister),
    clean(taxAndRegister.registerNumber),
    clean(taxAndRegister.registerCourt),
  ].filter(Boolean).join(' · ');
}

export function mapOwnDataToInvoice(record) {
  const address = record?.address ?? {};
  const contact = record?.contact ?? {};
  const taxAndRegister = record?.taxAndRegister ?? {};
  const bank = record?.bank ?? {};
  const addressCompanyName = clean(address.companyName) || clean(record?.companyName);
  const documentCompanyName = clean(record?.documentHeaderName) || addressCompanyName;

  return {
    sender: {
      companyName: documentCompanyName,
      address: {
        street: clean(address.street),
        houseNumber: clean(address.houseNumber),
        postalCode: clean(address.postalCode),
        city: clean(address.city),
      },
      returnAddress: createReturnAddress(documentCompanyName, address),
      contact: {
        email: clean(contact.email),
        phone: clean(contact.phone),
        fax: clean(contact.fax),
        website: clean(contact.website),
      },
    },
    footer: {
      company: {
        companyName: addressCompanyName,
        street: clean(address.street),
        houseNumber: clean(address.houseNumber),
        postalCode: clean(address.postalCode),
        city: clean(address.city),
        extra: clean(address.extra),
      },
      tax: {
        vatId: clean(taxAndRegister.vatId),
        taxNumber: clean(taxAndRegister.taxNumber),
        commercialRegister: createCommercialRegisterLine(taxAndRegister),
        representation: clean(record?.ownerOrManagingDirector),
      },
      bank: {
        bankName: clean(bank.bankName),
        iban: clean(bank.iban),
        bic: clean(bank.bic),
      },
    },
  };
}

export function applyOwnDataToInvoice(currentInvoiceData, record) {
  const mapped = mapOwnDataToInvoice(record);

  return {
    ...currentInvoiceData,
    sender: {
      ...currentInvoiceData.sender,
      ...mapped.sender,
      address: { ...currentInvoiceData.sender.address, ...mapped.sender.address },
      contact: { ...currentInvoiceData.sender.contact, ...mapped.sender.contact },
    },
    footer: {
      ...currentInvoiceData.footer,
      company: { ...currentInvoiceData.footer.company, ...mapped.footer.company },
      tax: { ...currentInvoiceData.footer.tax, ...mapped.footer.tax },
      bank: { ...currentInvoiceData.footer.bank, ...mapped.footer.bank },
    },
  };
}

export function removeOwnDataFromInvoice(currentInvoiceData) {
  const emptyAddress = { street: '', houseNumber: '', postalCode: '', city: '' };
  const emptyContact = { email: '', phone: '', fax: '', website: '' };

  return {
    ...currentInvoiceData,
    sender: {
      ...currentInvoiceData.sender,
      companyName: '',
      address: { ...currentInvoiceData.sender.address, ...emptyAddress },
      returnAddress: '',
      contact: { ...currentInvoiceData.sender.contact, ...emptyContact },
    },
    footer: {
      ...currentInvoiceData.footer,
      company: {
        ...currentInvoiceData.footer.company,
        companyName: '',
        ...emptyAddress,
        extra: '',
      },
      tax: {
        ...currentInvoiceData.footer.tax,
        vatId: '',
        taxNumber: '',
        commercialRegister: '',
        representation: '',
      },
      bank: {
        ...currentInvoiceData.footer.bank,
        bankName: '',
        iban: '',
        bic: '',
      },
    },
  };
}

export function hasInvoiceOwnData(invoiceData) {
  const sender = invoiceData?.sender ?? {};
  const footer = invoiceData?.footer ?? {};
  const values = [
    sender.companyName,
    sender.returnAddress,
    sender.address?.street,
    sender.address?.houseNumber,
    sender.address?.postalCode,
    sender.address?.city,
    sender.contact?.email,
    sender.contact?.phone,
    sender.contact?.fax,
    sender.contact?.website,
    footer.company?.companyName,
    footer.company?.street,
    footer.company?.houseNumber,
    footer.company?.postalCode,
    footer.company?.city,
    footer.company?.extra,
    footer.tax?.vatId,
    footer.tax?.taxNumber,
    footer.tax?.commercialRegister,
    footer.tax?.representation,
    footer.bank?.bankName,
    footer.bank?.iban,
    footer.bank?.bic,
  ];

  return values.some((value) => clean(value));
}
