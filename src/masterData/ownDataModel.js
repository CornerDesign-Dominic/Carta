function createStableId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getOwnDataDisplayName(record) {
  return record?.address?.companyName?.trim() || record?.companyName?.trim() || 'Unbenanntes Unternehmen';
}

export function createOwnDataRecord(overrides = {}) {
  const source = { ...overrides };
  delete source.id;
  const {
    address: addressOverrides = {},
    contact: contactOverrides = {},
    taxAndRegister: taxAndRegisterOverrides = {},
    bank: bankOverrides = {},
    settings: settingsOverrides = {},
    ...recordOverrides
  } = source;

  return {
    id: createStableId('own-data'),
    companyName: '',
    legalForm: '',
    ownerOrManagingDirector: '',
    documentHeaderName: '',
    contactPerson: '',
    department: '',
    address: {
      companyName: '', extra: '', street: '', houseNumber: '', postalCode: '', city: '', country: 'Deutschland',
      ...addressOverrides,
    },
    contact: { email: '', phone: '', mobile: '', fax: '', website: '', ...contactOverrides },
    taxAndRegister: {
      taxNumber: '', vatId: '', commercialRegister: '', registerNumber: '', registerCourt: '', ...taxAndRegisterOverrides,
    },
    bank: { accountHolder: '', bankName: '', iban: '', bic: '', ...bankOverrides },
    settings: { isSmallBusiness: false, defaultPaymentTermDays: '', ...settingsOverrides },
    isActive: true,
    ...recordOverrides,
  };
}

function updateAtPath(value, path, nextValue) {
  const [key, ...remainingPath] = path;
  if (!key) return nextValue;
  return { ...value, [key]: remainingPath.length ? updateAtPath(value[key], remainingPath, nextValue) : nextValue };
}

function updateRecordById(records, recordId, updater) {
  return records.map((record) => (record.id === recordId ? updater(record) : record));
}

export function createOwnDataEditorState() {
  return { records: [], activeRecordId: null };
}

export function ownDataEditorReducer(state, action) {
  switch (action.type) {
    case 'replace-collection':
      return { records: action.records.slice(0, 1), activeRecordId: action.activeRecordId === undefined ? action.records[0]?.id ?? null : action.activeRecordId };
    case 'reset-collection':
      return { records: [], activeRecordId: null };
    case 'upsert': {
      return { records: [action.record], activeRecordId: action.record.id };
    }
    case 'select':
      return { ...state, activeRecordId: action.recordId };
    case 'update-field':
      return { ...state, records: updateRecordById(state.records, action.recordId, (record) => updateAtPath(record, action.path, action.value)) };
    case 'update-company-name':
      return {
        ...state,
        records: updateRecordById(state.records, action.recordId, (record) => {
          const shouldUpdateAddressName = !record.address.companyName || record.address.companyName === record.companyName;
          return {
            ...record,
            companyName: action.value,
            address: shouldUpdateAddressName ? { ...record.address, companyName: action.value } : record.address,
          };
        }),
      };
    default:
      return state;
  }
}
