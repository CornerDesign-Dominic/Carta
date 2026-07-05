export const maxVatCalculations = 10;

export const vatCalculationModes = [
  { value: 'gross', label: 'Bruttobetrag' },
  { value: 'net', label: 'Nettobetrag' },
  { value: 'tax', label: 'Umsatzsteuerbetrag' },
];

export const vatRateOptions = [
  { value: '19', label: '19 %' },
  { value: '7', label: '7 %' },
  { value: '0', label: '0 %' },
  { value: 'custom', label: 'Eigener Satz' },
];

export const vatExampleValues = {
  amount: '1000',
  grossAmount: '1190',
  customRate: '19',
  rateOption: '19',
};

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
});

export function createVatCalculation(id, calculationMode = 'gross') {
  return {
    id,
    amount: calculationMode === 'net' ? vatExampleValues.grossAmount : vatExampleValues.amount,
    customRate: vatExampleValues.customRate,
    rateOption: vatExampleValues.rateOption,
  };
}

export function formatCurrency(value) {
  return euroFormatter.format(value);
}

export function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

export function getVatAmountLabel(calculationMode) {
  if (calculationMode === 'net') {
    return 'Bruttobetrag';
  }

  return 'Nettobetrag';
}

export function getVatResultTitle(calculationMode) {
  const titleByMode = {
    gross: 'Bruttobetrag',
    net: 'Nettobetrag',
    tax: 'Umsatzsteuerbetrag',
  };

  return titleByMode[calculationMode] ?? 'Ergebnis';
}

export function getVatCalculationTitle(index) {
  return `${index + 1}.`;
}

export function getVatDocumentHint(calculationMode) {
  const hintByMode = {
    gross: 'Die folgenden Berechnungen ermitteln den Bruttobetrag.',
    net: 'Die folgenden Berechnungen ermitteln den Nettobetrag.',
    tax: 'Die folgenden Berechnungen ermitteln den Umsatzsteuerbetrag.',
  };

  return hintByMode[calculationMode] ?? '';
}

export function getVatInputSummary(calculationMode, result) {
  if (result.status !== 'success') {
    return [];
  }

  if (calculationMode === 'net') {
    return [
      ['Bruttobetrag', formatCurrency(result.grossAmount)],
      ['USt.-Satz', formatPercent(result.vatRate)],
    ];
  }

  return [
    ['Nettobetrag', formatCurrency(result.netAmount)],
    ['USt.-Satz', formatPercent(result.vatRate)],
  ];
}

export function formatVatCalculatedValue(calculationMode, result) {
  if (result.status !== 'success') {
    return null;
  }

  if (calculationMode === 'net') {
    return formatCurrency(result.netAmount);
  }

  if (calculationMode === 'tax') {
    return formatCurrency(result.vatAmount);
  }

  return formatCurrency(result.grossAmount);
}

export function createVatPrintItems({ blocks, hint, intro }) {
  return [
    { id: 'intro', text: intro, type: 'text' },
    { id: 'mode-hint', text: hint, type: 'text' },
    ...blocks.map((block) => ({ block, id: block.id, type: 'calculation' })),
  ].filter((item) => item.type !== 'text' || String(item.text || '').trim());
}

export function createVatPdfFileName() {
  return 'umsatzsteuerberechnung.pdf';
}

export function calculateVatResult(calculation, calculationMode) {
  const amount = parsePositiveNumber(calculation.amount);
  const vatRate = getVatRate(calculation);

  function invalid(message = 'Bitte fülle alle benötigten Felder aus.') {
    return { status: 'invalid', message };
  }

  if (amount === null || vatRate === null) {
    return invalid();
  }

  const factor = 1 + vatRate / 100;
  let netAmount;
  let vatAmount;
  let grossAmount;

  if (calculationMode === 'net') {
    if (factor <= 0) {
      return invalid();
    }

    grossAmount = amount;
    netAmount = grossAmount / factor;
    vatAmount = grossAmount - netAmount;
  } else {
    netAmount = amount;
    vatAmount = netAmount * (vatRate / 100);
    grossAmount = netAmount + vatAmount;
  }

  if (!Number.isFinite(netAmount) || !Number.isFinite(vatAmount) || !Number.isFinite(grossAmount)) {
    return invalid();
  }

  return {
    status: 'success',
    netAmount,
    vatAmount,
    grossAmount,
    vatRate,
  };
}

function getVatRate(calculation) {
  if (calculation.rateOption === 'custom') {
    return parsePositiveNumber(calculation.customRate);
  }

  return parsePositiveNumber(calculation.rateOption);
}

function parsePositiveNumber(value) {
  if (String(value).trim() === '') {
    return null;
  }

  const parsed = Number.parseFloat(String(value).replace(',', '.'));

  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }

  return parsed;
}
