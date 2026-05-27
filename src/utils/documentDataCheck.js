export function getDocumentModeHint({ isDataCheckMode, isEditable }) {
  if (isDataCheckMode) {
    return 'Ansichtsmodus: Beispieldaten hervorheben & bearbeiten';
  }

  if (isEditable) {
    return 'Ansichtsmodus: Felder hervorheben & bearbeiten';
  }

  return 'Ansichtsmodus: Vorschau & Bearbeiten';
}

export function usesExampleValue(value, defaultValue) {
  const current = String(value ?? '').trim();
  const expected = String(defaultValue ?? '').trim();

  return expected !== '' && (current === '' || current === expected);
}

export function createEmptyDataCheckState() {
  return {
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
    details: detailChecks,
    footerLines: footerChecks,
    positions: positionChecks,
    recipient: recipientChecks,
    sender: senderChecks,
  };
}
