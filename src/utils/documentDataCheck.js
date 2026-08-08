export function getDocumentModeHint({ isDataCheckMode, isEditable }) {
  if (isDataCheckMode) {
    return 'Ansichtsmodus: Beispieldaten hervorheben & bearbeiten. Grün: Aus Stammdaten übernommen – bitte bei Bedarf prüfen.';
  }

  if (isEditable) {
    return 'Ansichtsmodus: Felder hervorheben & bearbeiten';
  }

  return 'Ansichtsmodus: Vorschau & Bearbeiten';
}

export function getDataCheckClassName(value, baseClassName = '') {
  const markerClassName = value === 'masterData'
    ? 'document-master-data-origin-marker'
    : value
      ? 'document-data-check-marker'
      : '';

  return [baseClassName, markerClassName].filter(Boolean).join(' ') || undefined;
}

export function createMasterDataOrigin(record, masterDataType) {
  return {
    source: 'masterData',
    masterDataId: String(record?.id ?? ''),
    masterDataType,
  };
}

function isOrigin(value) {
  return value?.source === 'masterData';
}

function mergeCheckValue(exampleValue, originValue) {
  if (exampleValue) return 'example';
  if (isOrigin(originValue)) return 'masterData';
  return false;
}

function mergeCheckBranch(exampleBranch = {}, originBranch = {}) {
  const result = {};
  const keys = new Set([...Object.keys(exampleBranch ?? {}), ...Object.keys(originBranch ?? {})]);

  keys.forEach((key) => {
    const exampleValue = exampleBranch?.[key];
    const originValue = originBranch?.[key];

    if (
      exampleValue
      && typeof exampleValue === 'object'
      && !Array.isArray(exampleValue)
      && !isOrigin(exampleValue)
    ) {
      result[key] = mergeCheckBranch(exampleValue, originValue);
      return;
    }

    if (
      originValue
      && typeof originValue === 'object'
      && !Array.isArray(originValue)
      && !isOrigin(originValue)
      && typeof exampleValue !== 'boolean'
    ) {
      result[key] = mergeCheckBranch(exampleValue, originValue);
      return;
    }

    result[key] = mergeCheckValue(exampleValue, originValue);
  });

  return result;
}

export function mergeDataCheckStateWithOrigins(dataCheckState, masterDataFieldOrigins, isActive) {
  if (!isActive) return dataCheckState;

  return mergeCheckBranch(dataCheckState, masterDataFieldOrigins);
}

function cloneOrigins(origins = {}) {
  return structuredClone(origins ?? {});
}

export function setMasterDataOriginAtPath(origins, path, origin) {
  if (!Array.isArray(path) || path.length === 0) return origins;

  const next = cloneOrigins(origins);
  let current = next;

  path.slice(0, -1).forEach((part) => {
    current[part] = current[part] && typeof current[part] === 'object' ? current[part] : {};
    current = current[part];
  });

  current[path[path.length - 1]] = origin;
  return next;
}

export function clearMasterDataOriginAtPath(origins, path) {
  if (!Array.isArray(path) || path.length === 0) return origins;

  const next = cloneOrigins(origins);
  const stack = [];
  let current = next;

  for (const part of path.slice(0, -1)) {
    if (!current?.[part] || typeof current[part] !== 'object') return next;
    stack.push([current, part]);
    current = current[part];
  }

  delete current[path[path.length - 1]];

  for (let index = stack.length - 1; index >= 0; index -= 1) {
    const [parent, part] = stack[index];
    if (parent[part] && Object.keys(parent[part]).length === 0) {
      delete parent[part];
    }
  }

  return next;
}

export function clearMasterDataOriginsForPaths(origins, paths) {
  return paths.reduce((current, path) => clearMasterDataOriginAtPath(current, path), origins);
}

function isMeaningfulValue(value) {
  return String(value ?? '').trim() !== '';
}

export function markChangedViewOrigins(origins, beforeView, afterView, origin, fieldPaths) {
  let next = origins;

  fieldPaths.forEach((path) => {
    const beforeValue = path.reduce((current, part) => current?.[part], beforeView);
    const afterValue = path.reduce((current, part) => current?.[part], afterView);

    if (String(beforeValue ?? '') !== String(afterValue ?? '')) {
      next = isMeaningfulValue(afterValue)
        ? setMasterDataOriginAtPath(next, path, origin)
        : clearMasterDataOriginAtPath(next, path);
    }
  });

  return next;
}

export function markPositionOrigins(origins, positions, origin, fields, branch = 'positions') {
  let next = origins;

  positions.forEach((position) => {
    fields.forEach((field) => {
      if (isMeaningfulValue(position[field])) {
        next = setMasterDataOriginAtPath(next, [branch, position.id, field], origin);
      }
    });
  });

  return next;
}

export function usesExampleValue(value, defaultValue) {
  const current = String(value ?? '').trim();
  const expected = String(defaultValue ?? '').trim();

  return expected !== '' && (current === '' || current === expected);
}

export function createEmptyDataCheckState() {
  return {
    deliveryAddress: {},
    details: {},
    footerLines: {},
    positions: {},
    recipient: {},
    sender: {},
  };
}

export function createDocumentDataCheckState({
  defaultPosition = {},
  defaultViewData,
  deliveryAddress,
  deliveryAddressHiddenFields = [],
  details,
  footerLines,
  isActive,
  positions = [],
  positionFields = ['description', 'unitPrice', 'quantity', 'unit', 'taxRate'],
  recipient,
  recipientHiddenFields = [],
  sender,
  visibleContactFields = [],
  visibleDetailFields = [],
  visibleFooterMiddleFields = [],
}) {
  if (!isActive) {
    return createEmptyDataCheckState();
  }

  const senderChecks = {
    company: usesExampleValue(sender.company, defaultViewData.sender.company),
    senderLine: usesExampleValue(sender.senderLine, defaultViewData.sender.senderLine),
  };

  visibleContactFields.forEach(({ field }) => {
    senderChecks[field] = usesExampleValue(sender[field], defaultViewData.sender[field]);
  });

  const recipientChecks = {
    company: usesExampleValue(recipient.company, defaultViewData.recipient.company),
    street: usesExampleValue(recipient.street, defaultViewData.recipient.street),
    cityLine: usesExampleValue(recipient.cityLine, defaultViewData.recipient.cityLine),
  };

  if (!recipientHiddenFields.includes('attention')) {
    recipientChecks.attention = usesExampleValue(recipient.attention, defaultViewData.recipient.attention);
  }

  if (!recipientHiddenFields.includes('name')) {
    recipientChecks.name = usesExampleValue(recipient.name, defaultViewData.recipient.name);
  }

  const deliveryAddressChecks = deliveryAddress
    ? {
        company: usesExampleValue(deliveryAddress.company, defaultViewData.deliveryAddress.company),
        street: usesExampleValue(deliveryAddress.street, defaultViewData.deliveryAddress.street),
        cityLine: usesExampleValue(deliveryAddress.cityLine, defaultViewData.deliveryAddress.cityLine),
      }
    : {};

  if (deliveryAddress && !deliveryAddressHiddenFields.includes('attention')) {
    deliveryAddressChecks.attention = usesExampleValue(
      deliveryAddress.attention,
      defaultViewData.deliveryAddress.attention,
    );
  }

  if (deliveryAddress && !deliveryAddressHiddenFields.includes('name')) {
    deliveryAddressChecks.name = usesExampleValue(deliveryAddress.name, defaultViewData.deliveryAddress.name);
  }

  const detailChecks = {};
  visibleDetailFields.forEach(({ field }) => {
    detailChecks[field] = usesExampleValue(details[field], defaultViewData.details[field]);
  });

  const positionChecks = Object.fromEntries(
    positions.map((position) => [
      position.id,
      Object.fromEntries(
        positionFields.map((field) => [field, usesExampleValue(position[field], defaultPosition[field])]),
      ),
    ]),
  );

  const footerChecks = {
    companyName: usesExampleValue(footerLines.companyName, defaultViewData.footerLines.companyName),
    companyStreet: usesExampleValue(footerLines.companyStreet, defaultViewData.footerLines.companyStreet),
    companyCity: usesExampleValue(footerLines.companyCity, defaultViewData.footerLines.companyCity),
    companyExtra: usesExampleValue(footerLines.companyExtra, defaultViewData.footerLines.companyExtra),
    bankName: usesExampleValue(footerLines.bankName, defaultViewData.footerLines.bankName),
    iban: usesExampleValue(footerLines.iban, defaultViewData.footerLines.iban),
    bic: usesExampleValue(footerLines.bic, defaultViewData.footerLines.bic),
    bankExtra: usesExampleValue(footerLines.bankExtra, defaultViewData.footerLines.bankExtra),
  };

  visibleFooterMiddleFields.forEach(({ field }) => {
    footerChecks[field] = usesExampleValue(footerLines[field], defaultViewData.footerLines[field]);
  });

  return {
    deliveryAddress: deliveryAddressChecks,
    details: detailChecks,
    footerLines: footerChecks,
    positions: positionChecks,
    recipient: recipientChecks,
    sender: senderChecks,
  };
}
