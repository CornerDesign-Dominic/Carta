function createStableId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getOwnDataDisplayName(record) {
  return record?.companyName?.trim() || 'Unbenanntes Unternehmen';
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

export function duplicateOwnDataRecord(record) {
  return createOwnDataRecord({
    ...record,
    companyName: record.companyName ? `${record.companyName} Kopie` : '',
    address: { ...record.address },
    contact: { ...record.contact },
    taxAndRegister: { ...record.taxAndRegister },
    bank: { ...record.bank },
    settings: { ...record.settings },
  });
}

export function matchesOwnDataSearch(record, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase('de-DE');
  if (!normalizedQuery) return true;
  return [
    record.companyName, record.legalForm, record.ownerOrManagingDirector, record.contactPerson,
    record.department, record.address.city, record.contact.email, record.taxAndRegister.vatId,
    record.taxAndRegister.taxNumber, record.bank.iban,
  ].some((value) => String(value ?? '').toLocaleLowerCase('de-DE').includes(normalizedQuery));
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
  const record = createOwnDataRecord();
  return { records: [record], activeRecordId: record.id };
}

export function ownDataEditorReducer(state, action) {
  switch (action.type) {
    case 'replace-collection':
      return { records: action.records, activeRecordId: action.activeRecordId ?? action.records[0]?.id ?? null };
    case 'reset-collection': {
      const record = createOwnDataRecord();
      return { records: [record], activeRecordId: record.id };
    }
    case 'select':
      return { ...state, activeRecordId: action.recordId };
    case 'create': {
      const record = createOwnDataRecord();
      return { records: [...state.records, record], activeRecordId: record.id };
    }
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
    case 'duplicate': {
      const source = state.records.find((record) => record.id === action.recordId);
      if (!source) return state;
      const copy = duplicateOwnDataRecord(source);
      return { records: [...state.records, copy], activeRecordId: copy.id };
    }
    case 'delete': {
      const remainingRecords = state.records.filter((record) => record.id !== action.recordId);
      if (!remainingRecords.length) {
        const record = createOwnDataRecord();
        return { records: [record], activeRecordId: record.id };
      }
      return { records: remainingRecords, activeRecordId: remainingRecords[0].id };
    }
    default:
      return state;
  }
}
