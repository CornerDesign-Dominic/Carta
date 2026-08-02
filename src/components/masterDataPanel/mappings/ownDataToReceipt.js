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

export function mapOwnDataToReceipt(record) {
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
        taxId: clean(taxAndRegister.taxNumber),
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

export function applyOwnDataToReceipt(currentData, record) {
  const mapped = mapOwnDataToReceipt(record);

  return {
    ...currentData,
    sender: {
      ...currentData.sender,
      ...mapped.sender,
      address: { ...currentData.sender.address, ...mapped.sender.address },
      contact: { ...currentData.sender.contact, ...mapped.sender.contact },
    },
    footer: {
      ...currentData.footer,
      company: { ...currentData.footer.company, ...mapped.footer.company },
      tax: { ...currentData.footer.tax, ...mapped.footer.tax },
      bank: { ...currentData.footer.bank, ...mapped.footer.bank },
    },
  };
}

export function removeOwnDataFromReceipt(currentData) {
  const emptyAddress = { street: '', houseNumber: '', postalCode: '', city: '' };

  return {
    ...currentData,
    sender: {
      ...currentData.sender,
      companyName: '',
      address: { ...currentData.sender.address, ...emptyAddress },
      returnAddress: '',
      contact: { ...currentData.sender.contact, email: '', phone: '', website: '' },
    },
    footer: {
      ...currentData.footer,
      company: { ...currentData.footer.company, companyName: '', ...emptyAddress, extra: '' },
      tax: { ...currentData.footer.tax, vatId: '', taxId: '', representation: '' },
      bank: { ...currentData.footer.bank, bankName: '', iban: '', bic: '' },
    },
  };
}

export function hasReceiptOwnData(data) {
  const sender = data?.sender ?? {};
  const footer = data?.footer ?? {};
  return [
    sender.companyName,
    sender.returnAddress,
    sender.address?.street,
    sender.address?.houseNumber,
    sender.address?.postalCode,
    sender.address?.city,
    sender.contact?.email,
    sender.contact?.phone,
    sender.contact?.website,
    footer.company?.companyName,
    footer.company?.street,
    footer.company?.houseNumber,
    footer.company?.postalCode,
    footer.company?.city,
    footer.company?.extra,
    footer.tax?.vatId,
    footer.tax?.taxId,
    footer.tax?.representation,
    footer.bank?.bankName,
    footer.bank?.iban,
    footer.bank?.bic,
  ].some((value) => clean(value));
}
