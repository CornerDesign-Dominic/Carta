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
    annualMaintenanceCost: '2200',
    annualOtherCost: '1800',
    annualPayrollCost: '21600',
    forecastQuantity: '16000',
    imputedInterestRate: '5',
    label: 'Maschine A',
    maxQuantity: '18000',
    residualValue: '2000',
    sellingPricePerUnit: '2.90',
    termMonths: '0',
    termYears: '3',
    variableCostPerUnit: '0.35',
  },
  {
    acquisitionCost: '9000',
    annualMaintenanceCost: '2600',
    annualOtherCost: '1400',
    annualPayrollCost: '19200',
    forecastQuantity: '15000',
    imputedInterestRate: '5',
    label: 'Maschine B',
    maxQuantity: '16500',
    residualValue: '1500',
    sellingPricePerUnit: '2.80',
    termMonths: '0',
    termYears: '3',
    variableCostPerUnit: '0.40',
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
  const monthlyCost = mode === 'cost' ? parsePositiveNumber(variant.monthlyCost) : 0;
  const residualValue = parseOptionalPositiveNumber(variant.residualValue);
  const termYears = parseWholeNumber(variant.termYears);
  const termMonths = parseWholeNumber(variant.termMonths);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { id: variant.id, label: variant.label, message, status: 'invalid' };
  }

  if (
    acquisitionCost === null
    || imputedInterestRate === null
    || (mode === 'cost' && monthlyCost === null)
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
  let sellingPricePerUnit = null;
  let forecastQuantity = null;
  let maxQuantity = null;
  let variableCostPerUnit = null;
  let capacityWarning = '';

  if (mode === 'costRevenue') {
    const annualMaintenanceCost = parsePositiveNumber(variant.annualMaintenanceCost);
    const annualOtherCost = parsePositiveNumber(variant.annualOtherCost);
    const annualPayrollCost = parsePositiveNumber(variant.annualPayrollCost);
    forecastQuantity = parseWholeNumber(variant.forecastQuantity);
    maxQuantity = parseWholeNumber(variant.maxQuantity);
    variableCostPerUnit = parsePositiveNumber(variant.variableCostPerUnit);
    sellingPricePerUnit = parsePositiveNumber(variant.sellingPricePerUnit);

    if (
      annualMaintenanceCost === null
      || annualOtherCost === null
      || annualPayrollCost === null
      || forecastQuantity === null
      || maxQuantity === null
      || variableCostPerUnit === null
      || sellingPricePerUnit === null
    ) {
      return invalid();
    }

    if (forecastQuantity <= 0) {
      return invalid('Die Prognose Stückzahl muss größer als 0 sein.');
    }

    if (maxQuantity <= 0) {
      return invalid('Die maximale Stückzahl muss größer als 0 sein.');
    }

    if (forecastQuantity > maxQuantity) {
      capacityWarning = 'Die Prognose Stückzahl liegt über der maximalen Stückzahl.';
    }

    const annualFixedCosts = annualPayrollCost + annualMaintenanceCost + annualOtherCost;
    const variableCosts = variableCostPerUnit * forecastQuantity;

    totalCost += annualFixedCosts * durationYears + variableCosts;
    totalRevenue = forecastQuantity * sellingPricePerUnit;
    profit = totalRevenue - totalCost;
    costPerUnit = totalCost / forecastQuantity;
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
      || !Number.isFinite(sellingPricePerUnit)
    ))
  ) {
    return invalid();
  }

  return {
    capacityWarning,
    costPerUnit,
    forecastQuantity,
    imputedInterestPerYear,
    imputedInterestRate,
    imputedInterestTotal,
    id: variant.id,
    label: variant.label || `Variante ${variant.id}`,
    maxQuantity,
    monthlyAverageCost,
    profit,
    sellingPricePerUnit,
    status: 'success',
    totalCost,
    totalMonths,
    totalRevenue,
    variableCostPerUnit,
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
      ['general', 'duration', 'Laufzeit', (_variant, result) => (result.status === 'success' ? formatMonths(result.totalMonths) : '')],
      ['general', 'imputedInterestRate', 'Kalkulatorischer Zinssatz', (variant) => formatPercentValue(variant.imputedInterestRate)],
      ['general', 'maxQuantity', 'Max. Stückzahl', (variant) => variant.maxQuantity],
      ['general', 'forecastQuantity', 'Prognose Stückzahl', (variant) => variant.forecastQuantity],
      ['cost', 'acquisitionCost', 'Anschaffungskosten', (variant) => formatCurrencyValue(variant.acquisitionCost)],
      ['cost', 'residualValue', 'Restwert', (variant) => formatOptionalCurrencyValue(variant.residualValue)],
      ['cost', 'annualPayrollCost', 'Jährliche Lohnkosten', (variant) => formatCurrencyValue(variant.annualPayrollCost)],
      ['cost', 'annualMaintenanceCost', 'Jährliche Wartungskosten', (variant) => formatCurrencyValue(variant.annualMaintenanceCost)],
      ['cost', 'annualOtherCost', 'Jährliche sonstige Kosten', (variant) => formatCurrencyValue(variant.annualOtherCost)],
      ['cost', 'variableCostPerUnit', 'Variable Kosten pro Stück', (variant) => formatCurrencyValue(variant.variableCostPerUnit)],
      ['cost', 'imputedInterestTotal', 'Kalkulatorische Zinsen', (_variant, result) => formatResultCurrency(result, 'imputedInterestTotal')],
      ['result', 'sellingPricePerUnit', 'Verkaufspreis pro Stück', (variant) => formatCurrencyValue(variant.sellingPricePerUnit)],
      ['result', 'totalCost', 'Gesamtkosten', (_variant, result) => formatResultCurrency(result, 'totalCost')],
      ['result', 'totalRevenue', 'Gesamtertrag', (_variant, result) => formatResultCurrency(result, 'totalRevenue')],
      ['result', 'profit', 'Gewinn/Verlust', (_variant, result) => formatResultCurrency(result, 'profit')],
      ['result', 'costPerUnit', 'Kosten pro Stück', (_variant, result) => formatResultCurrency(result, 'costPerUnit')],
    ].map(([section, id, label, getValue]) => ({
      id,
      label,
      section,
      values: variants.map((variant, index) => getValue(variant, results[index])),
    }));
  }

  return [
    ['general', 'duration', 'Laufzeit', (_variant, result) => (result.status === 'success' ? formatMonths(result.totalMonths) : '')],
    ['general', 'imputedInterestRate', 'Kalkulatorischer Zinssatz', (variant) => formatPercentValue(variant.imputedInterestRate)],
    ['cost', 'acquisitionCost', 'Anschaffungskosten', (variant) => formatCurrencyValue(variant.acquisitionCost)],
    ['cost', 'monthlyCost', 'Laufende Kosten', (variant) => formatCurrencyValue(variant.monthlyCost)],
    ['cost', 'residualValue', 'Restwert', (variant) => formatOptionalCurrencyValue(variant.residualValue)],
    ['cost', 'imputedInterestTotal', 'Kalkulatorische Zinsen', (_variant, result) => formatResultCurrency(result, 'imputedInterestTotal')],
    ['result', 'totalCost', 'Gesamtkosten', (_variant, result) => formatResultCurrency(result, 'totalCost')],
    ['result', 'monthlyAverageCost', 'Kosten pro Monat', (_variant, result) => formatResultCurrency(result, 'monthlyAverageCost')],
    ['result', 'yearlyAverageCost', 'Kosten pro Jahr', (_variant, result) => formatResultCurrency(result, 'yearlyAverageCost')],
  ].map(([section, id, label, getValue]) => ({
    id,
    label,
    section,
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
    annualMaintenanceCost: '',
    annualOtherCost: '',
    annualPayrollCost: '',
    forecastQuantity: '',
    imputedInterestRate: '',
    label: `Variante ${index + 1}`,
    maxQuantity: '',
    monthlyCost: '',
    residualValue: '',
    sellingPricePerUnit: '',
    termMonths: '',
    termYears: '',
    variableCostPerUnit: '',
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
