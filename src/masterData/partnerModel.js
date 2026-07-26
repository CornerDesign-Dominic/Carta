export const partnerTypes = [
  { value: 'customer', label: 'Kunde' },
  { value: 'supplier', label: 'Lieferant' },
  { value: 'customerAndSupplier', label: 'Kunde und Lieferant' },
  { value: 'other', label: 'Sonstiges' },
];

function createStableId(prefix) {
  if (globalThis.crypto?.randomUUID) {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getPartnerTypeLabel(type) {
  return partnerTypes.find((item) => item.value === type)?.label ?? 'Sonstiges';
}

export function getPartnerDisplayName(partner) {
  return partner?.companyName?.trim() || 'Unbenannter Partner';
}

export function createDeliveryAddress(overrides = {}) {
  const deliveryAddressOverrides = { ...overrides };
  delete deliveryAddressOverrides.id;

  return {
    id: createStableId('delivery'),
    label: '',
    companyName: '',
    attention: '',
    department: '',
    contactPerson: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: 'Deutschland',
    phone: '',
    notes: '',
    ...deliveryAddressOverrides,
  };
}

export function createPartner(overrides = {}) {
  const partnerSource = { ...overrides };
  delete partnerSource.id;
  const {
    mainAddress: mainAddressOverrides = {},
    contact: contactOverrides = {},
    tax: taxOverrides = {},
    bank: bankOverrides = {},
    deliveryAddresses: deliveryAddressOverrides = [],
    ...partnerOverrides
  } = partnerSource;

  return {
    id: createStableId('partner'),
    type: 'customer',
    companyName: '',
    legalForm: '',
    contactPerson: '',
    department: '',
    customerNumber: '',
    supplierNumber: '',
    mainAddress: {
      companyName: '',
      attention: '',
      department: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      country: 'Deutschland',
      ...mainAddressOverrides,
    },
    contact: {
      email: '',
      phone: '',
      mobile: '',
      fax: '',
      website: '',
      ...contactOverrides,
    },
    tax: {
      vatId: '',
      taxNumber: '',
      ...taxOverrides,
    },
    bank: {
      accountHolder: '',
      bankName: '',
      iban: '',
      bic: '',
      ...bankOverrides,
    },
    deliveryAddresses: Array.isArray(deliveryAddressOverrides) ? deliveryAddressOverrides : [],
    notes: '',
    isActive: true,
    ...partnerOverrides,
  };
}

export function createExamplePartner() {
  return createPartner({
    companyName: 'Beispielkunde GmbH',
    contactPerson: 'Mara Beispiel',
    department: 'Einkauf',
    customerNumber: 'K-2048',
    mainAddress: {
      companyName: 'Beispielkunde GmbH',
      attention: 'z. Hd. Mara Beispiel',
      department: 'Einkauf',
      street: 'Beispielweg',
      houseNumber: '18',
      postalCode: '20095',
      city: 'Hamburg',
    },
    contact: {
      email: 'kontakt@beispielkunde.test',
      phone: '+49 40 555 01 20',
      website: 'www.beispielkunde.test',
    },
    tax: {
      vatId: 'DE123456789',
    },
    bank: {
      accountHolder: 'Beispielkunde GmbH',
      bankName: 'Musterbank',
      iban: 'DE12 3456 7890 1234 5678 90',
      bic: 'MUSTDEFFXXX',
    },
    deliveryAddresses: [
      createDeliveryAddress({
        label: 'Hauptlager',
        companyName: 'Beispielkunde GmbH',
        attention: 'Warenannahme',
        street: 'Lagerstraße',
        houseNumber: '4',
        postalCode: '22113',
        city: 'Hamburg',
        phone: '+49 40 555 01 40',
      }),
    ],
    notes: 'Beispieldatensatz zur Orientierung. Bitte vor einer späteren Verwendung durch eigene Angaben ersetzen.',
  });
}

export function duplicatePartner(partner) {
  return createPartner({
    ...partner,
    companyName: partner.companyName ? `${partner.companyName} Kopie` : '',
    mainAddress: { ...partner.mainAddress },
    contact: { ...partner.contact },
    tax: { ...partner.tax },
    bank: { ...partner.bank },
    deliveryAddresses: partner.deliveryAddresses.map((address) => createDeliveryAddress({
      ...address,
      label: address.label ? `${address.label} Kopie` : '',
    })),
  });
}

export function duplicateDeliveryAddress(address) {
  return createDeliveryAddress({
    ...address,
    label: address.label ? `${address.label} Kopie` : '',
  });
}

export function matchesPartnerSearch(partner, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase('de-DE');

  if (!normalizedQuery) {
    return true;
  }

  return [
    partner.companyName,
    partner.contactPerson,
    partner.department,
    partner.customerNumber,
    partner.supplierNumber,
    partner.mainAddress.city,
    partner.contact.email,
    partner.tax.vatId,
  ].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(normalizedQuery));
}

function updateAtPath(value, path, nextValue) {
  const [key, ...remainingPath] = path;

  if (!key) {
    return nextValue;
  }

  return {
    ...value,
    [key]: remainingPath.length ? updateAtPath(value[key], remainingPath, nextValue) : nextValue,
  };
}

function updatePartnerById(partners, partnerId, updater) {
  return partners.map((partner) => (partner.id === partnerId ? updater(partner) : partner));
}

export function createPartnerEditorState() {
  const examplePartner = createExamplePartner();
  return { partners: [examplePartner], activePartnerId: examplePartner.id };
}

export function partnerEditorReducer(state, action) {
  switch (action.type) {
    case 'replace-collection':
      return {
        partners: action.partners,
        activePartnerId: action.activePartnerId ?? action.partners[0]?.id ?? null,
      };
    case 'reset-collection': {
      const partner = createPartner();
      return { partners: [partner], activePartnerId: partner.id };
    }
    case 'select':
      return { ...state, activePartnerId: action.partnerId };
    case 'create': {
      const partner = createPartner();
      return { partners: [...state.partners, partner], activePartnerId: partner.id };
    }
    case 'update-field':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => updateAtPath(partner, action.path, action.value)),
      };
    case 'update-company-name':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => {
          const shouldUpdateMainAddress = !partner.mainAddress.companyName
            || partner.mainAddress.companyName === partner.companyName;
          return {
            ...partner,
            companyName: action.value,
            mainAddress: shouldUpdateMainAddress
              ? { ...partner.mainAddress, companyName: action.value }
              : partner.mainAddress,
          };
        }),
      };
    case 'duplicate': {
      const source = state.partners.find((partner) => partner.id === action.partnerId);
      if (!source) return state;
      const copy = duplicatePartner(source);
      return { partners: [...state.partners, copy], activePartnerId: copy.id };
    }
    case 'delete': {
      const remainingPartners = state.partners.filter((partner) => partner.id !== action.partnerId);
      if (!remainingPartners.length) {
        const partner = createPartner();
        return { partners: [partner], activePartnerId: partner.id };
      }
      return { partners: remainingPartners, activePartnerId: remainingPartners[0].id };
    }
    case 'add-delivery':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => ({
          ...partner,
          deliveryAddresses: [...partner.deliveryAddresses, createDeliveryAddress()],
        })),
      };
    case 'update-delivery':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => ({
          ...partner,
          deliveryAddresses: partner.deliveryAddresses.map((address) => (
            address.id === action.addressId ? { ...address, [action.field]: action.value } : address
          )),
        })),
      };
    case 'duplicate-delivery':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => {
          const index = partner.deliveryAddresses.findIndex((address) => address.id === action.addressId);
          if (index === -1) return partner;
          const copy = duplicateDeliveryAddress(partner.deliveryAddresses[index]);
          return {
            ...partner,
            deliveryAddresses: [
              ...partner.deliveryAddresses.slice(0, index + 1),
              copy,
              ...partner.deliveryAddresses.slice(index + 1),
            ],
          };
        }),
      };
    case 'delete-delivery':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => ({
          ...partner,
          deliveryAddresses: partner.deliveryAddresses.filter((address) => address.id !== action.addressId),
        })),
      };
    case 'move-delivery':
      return {
        ...state,
        partners: updatePartnerById(state.partners, action.partnerId, (partner) => {
          const fromIndex = partner.deliveryAddresses.findIndex((address) => address.id === action.addressId);
          const toIndex = fromIndex + action.direction;
          if (fromIndex === -1 || toIndex < 0 || toIndex >= partner.deliveryAddresses.length) return partner;
          const deliveryAddresses = [...partner.deliveryAddresses];
          [deliveryAddresses[fromIndex], deliveryAddresses[toIndex]] = [deliveryAddresses[toIndex], deliveryAddresses[fromIndex]];
          return { ...partner, deliveryAddresses };
        }),
      };
    default:
      return state;
  }
}
