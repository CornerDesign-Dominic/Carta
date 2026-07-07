export const costComparisonModes = [
  { value: 'cost', label: 'Kostenvergleich' },
  { value: 'costRevenue', label: 'Kosten-Ertrag' },
];

export const maxCostComparisonVariants = 5;
export const minCostComparisonVariants = 2;

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  style: 'currency',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const costDefaults = [
  {
    acquisitionCost: '12000',
    imputedInterestRate: '5',
    label: 'Maschine A',
    monthlyCost: '450',
    residualValue: '2000',
    termMonths: '0',
    termYears: '3',
  },
  {
    acquisitionCost: '9000',
    imputedInterestRate: '5',
    label: 'Maschine B',
    monthlyCost: '520',
    residualValue: '1500',
    termMonths: '0',
    termYears: '3',
  },
];

const costRevenueDefaults = [
  {
    acquisitionCost: '12000',
    imputedInterestRate: '5',
    label: 'Maschine A',
    monthlyCost: '450',
    payrollCost: '1800',
    quantity: '18000',
    residualValue: '2000',
    revenuePerUnit: '2.90',
    specialCost: '1500',
    termMonths: '0',
    termYears: '3',
  },
  {
    acquisitionCost: '9000',
    imputedInterestRate: '5',
    label: 'Maschine B',
    monthlyCost: '520',
    payrollCost: '1600',
    quantity: '16500',
    residualValue: '1500',
    revenuePerUnit: '2.80',
    specialCost: '1200',
    termMonths: '0',
    termYears: '3',
  },
];

export function createCostComparisonVariant(id, index = 0, mode = 'cost') {
  const defaults = getDefaultVariant(index, mode);

  return {
    id,
    ...defaults,
  };
}

export function createCostComparisonVariants(mode = 'cost') {
  return [
    createCostComparisonVariant(1, 0, mode),
    createCostComparisonVariant(2, 1, mode),
  ];
}

export function calculateCostComparison(variants, mode = 'cost') {
  const results = variants.map((variant) => calculateVariantCosts(variant, mode));
  const validResults = results.filter((result) => result.status === 'success');

  if (validResults.length === 0) {
    return results.map((result) => ({ ...result, isBest: false }));
  }

  const bestValue = mode === 'costRevenue'
    ? Math.max(...validResults.map((result) => result.profit))
    : Math.min(...validResults.map((result) => result.totalCost));

  return results.map((result) => ({
    ...result,
    isBest: result.status === 'success' && (
      mode === 'costRevenue' ? result.profit === bestValue : result.totalCost === bestValue
    ),
  }));
}

export function calculateVariantCosts(variant, mode = 'cost') {
  const acquisitionCost = parsePositiveNumber(variant.acquisitionCost);
  const imputedInterestRate = parsePositiveNumber(variant.imputedInterestRate);
  const monthlyCost = parsePositiveNumber(variant.monthlyCost);
  const residualValue = parseOptionalPositiveNumber(variant.residualValue);
  const termYears = parseWholeNumber(variant.termYears);
  const termMonths = parseWholeNumber(variant.termMonths);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { id: variant.id, label: variant.label, message, status: 'invalid' };
  }

  if (
    acquisitionCost === null
    || imputedInterestRate === null
    || monthlyCost === null
    || residualValue === null
    || termYears === null
    || termMonths === null
  ) {
    return invalid();
  }

  const totalMonths = termYears * 12 + termMonths;

  if (totalMonths <= 0) {
    return invalid('Die Nutzungsdauer muss größer als 0 Monate sein.');
  }

  const runningCost = monthlyCost * totalMonths;
  const durationYears = totalMonths / 12;
  const averageTiedCapital = (acquisitionCost + residualValue) / 2;
  const imputedInterestPerYear = averageTiedCapital * imputedInterestRate / 100;
  const imputedInterestTotal = imputedInterestPerYear * durationYears;
  let totalCost = acquisitionCost + runningCost + imputedInterestTotal - residualValue;
  let totalRevenue = null;
  let profit = null;
  let costPerUnit = null;
  let revenuePerUnit = null;

  if (mode === 'costRevenue') {
    const payrollCost = parsePositiveNumber(variant.payrollCost);
    const specialCost = parsePositiveNumber(variant.specialCost);
    const quantity = parseWholeNumber(variant.quantity);
    revenuePerUnit = parsePositiveNumber(variant.revenuePerUnit);

    if (
      payrollCost === null
      || specialCost === null
      || quantity === null
      || revenuePerUnit === null
    ) {
      return invalid();
    }

    if (quantity <= 0) {
      return invalid('Die Stückzahl muss größer als 0 sein.');
    }

    totalCost += payrollCost * totalMonths + specialCost;
    totalRevenue = quantity * revenuePerUnit;
    profit = totalRevenue - totalCost;
    costPerUnit = totalCost / quantity;
  }

  const monthlyAverageCost = totalCost / totalMonths;
  const yearlyAverageCost = monthlyAverageCost * 12;

  if (
    !Number.isFinite(totalCost)
    || !Number.isFinite(monthlyAverageCost)
    || !Number.isFinite(yearlyAverageCost)
    || (mode === 'costRevenue' && (
      !Number.isFinite(totalRevenue)
      || !Number.isFinite(profit)
      || !Number.isFinite(costPerUnit)
      || !Number.isFinite(revenuePerUnit)
    ))
  ) {
    return invalid();
  }

  return {
    costPerUnit,
    imputedInterestPerYear,
    imputedInterestRate,
    imputedInterestTotal,
    id: variant.id,
    label: variant.label || `Variante ${variant.id}`,
    monthlyAverageCost,
    profit,
    revenuePerUnit,
    status: 'success',
    totalCost,
    totalMonths,
    totalRevenue,
    yearlyAverageCost,
  };
}

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

export function createCostComparisonPdfFileName() {
  return 'kostenvergleich.pdf';
}

export function getCostComparisonDocumentHint(mode) {
  if (mode === 'costRevenue') {
    return 'Die folgende Übersicht vergleicht Kosten, Erträge und Gewinn oder Verlust der Varianten.';
  }

  return 'Die folgende Übersicht vergleicht die Gesamtkosten und durchschnittlichen Kosten der Varianten.';
}

export function getCostComparisonDocumentTitle(mode) {
  return mode === 'costRevenue' ? 'Kosten-Ertrag-Vergleich' : 'Kostenvergleich';
}

export function getCostComparisonTableRows(mode, variants, results) {
  if (mode === 'costRevenue') {
    return [
      ['Anschaffungskosten', (variant) => formatCurrencyValue(variant.acquisitionCost)],
      ['Kalkulatorischer Zinssatz', (variant) => formatPercentValue(variant.imputedInterestRate)],
      ['Kalkulatorische Zinsen', (_variant, result) => formatResultCurrency(result, 'imputedInterestTotal')],
      ['Restwert', (variant) => formatOptionalCurrencyValue(variant.residualValue)],
      ['Laufzeit', (_variant, result) => (result.status === 'success' ? formatMonths(result.totalMonths) : '')],
      ['Laufende Fixkosten', (variant) => formatCurrencyValue(variant.monthlyCost)],
      ['Mtl. Lohnkosten', (variant) => formatCurrencyValue(variant.payrollCost)],
      ['Stückzahl', (variant) => variant.quantity],
      ['Variable Kosten pro Stück', (variant) => formatCurrencyValue(variant.specialCost)],
      ['Verkaufsertrag pro Stück', (variant) => formatCurrencyValue(variant.revenuePerUnit)],
      ['Gesamtkosten', (_variant, result) => formatResultCurrency(result, 'totalCost')],
      ['Gesamtertrag', (_variant, result) => formatResultCurrency(result, 'totalRevenue')],
      ['Gewinn/Verlust', (_variant, result) => formatResultCurrency(result, 'profit')],
      ['Kosten pro Stück', (_variant, result) => formatResultCurrency(result, 'costPerUnit')],
      ['Ertrag pro Stück', (_variant, result) => formatResultCurrency(result, 'revenuePerUnit')],
    ].map(([label, getValue]) => ({
      label,
      values: variants.map((variant, index) => getValue(variant, results[index])),
    }));
  }

  return [
    ['Anschaffungskosten', (variant) => formatCurrencyValue(variant.acquisitionCost)],
    ['Kalkulatorischer Zinssatz', (variant) => formatPercentValue(variant.imputedInterestRate)],
    ['Kalkulatorische Zinsen', (_variant, result) => formatResultCurrency(result, 'imputedInterestTotal')],
    ['Laufende Kosten', (variant) => formatCurrencyValue(variant.monthlyCost)],
    ['Laufzeit', (_variant, result) => (result.status === 'success' ? formatMonths(result.totalMonths) : '')],
    ['Restwert', (variant) => formatOptionalCurrencyValue(variant.residualValue)],
    ['Gesamtkosten', (_variant, result) => formatResultCurrency(result, 'totalCost')],
    ['Kosten pro Monat', (_variant, result) => formatResultCurrency(result, 'monthlyAverageCost')],
    ['Kosten pro Jahr', (_variant, result) => formatResultCurrency(result, 'yearlyAverageCost')],
  ].map(([label, getValue]) => ({
    label,
    values: variants.map((variant, index) => getValue(variant, results[index])),
  }));
}

export function formatMonths(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearLabel = years === 1 ? 'Jahr' : 'Jahre';
  const monthLabel = months === 1 ? 'Monat' : 'Monate';

  if (years === 0) {
    return `${months} ${monthLabel}`;
  }

  if (months === 0) {
    return `${years} ${yearLabel}`;
  }

  return `${years} ${yearLabel} ${months} ${monthLabel}`;
}

function formatCurrencyValue(value) {
  const parsed = parsePositiveNumber(value);
  return parsed === null ? '' : formatCurrency(parsed);
}

function formatPercentValue(value) {
  const parsed = parsePositiveNumber(value);
  return parsed === null ? '' : `${percentFormatter.format(parsed)} %`;
}

function formatOptionalCurrencyValue(value) {
  const parsed = parseOptionalPositiveNumber(value);
  return parsed === null ? '' : formatCurrency(parsed);
}

function formatResultCurrency(result, field) {
  return result?.status === 'success' && Number.isFinite(result[field]) ? formatCurrency(result[field]) : '';
}

function getDefaultVariant(index, mode) {
  const defaults = mode === 'costRevenue' ? costRevenueDefaults : costDefaults;

  return defaults[index] ?? {
    acquisitionCost: '',
    imputedInterestRate: '',
    label: `Variante ${index + 1}`,
    monthlyCost: '',
    payrollCost: '',
    quantity: '',
    residualValue: '',
    revenuePerUnit: '',
    specialCost: '',
    termMonths: '',
    termYears: '',
  };
}

function parseOptionalPositiveNumber(value) {
  if (String(value).trim() === '') {
    return 0;
  }

  return parsePositiveNumber(value);
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

function parseWholeNumber(value) {
  if (String(value).trim() === '') {
    return null;
  }

  const parsed = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed) || parsed < 0 || String(parsed) !== String(value).trim()) {
    return null;
  }

  return parsed;
}
