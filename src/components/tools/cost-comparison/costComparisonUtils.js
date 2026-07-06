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

const costDefaults = [
  {
    acquisitionCost: '12000',
    label: 'Maschine A',
    monthlyCost: '450',
    residualValue: '2000',
    termMonths: '0',
    termYears: '3',
  },
  {
    acquisitionCost: '9000',
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
  const monthlyCost = parsePositiveNumber(variant.monthlyCost);
  const residualValue = parseOptionalPositiveNumber(variant.residualValue);
  const termYears = parseWholeNumber(variant.termYears);
  const termMonths = parseWholeNumber(variant.termMonths);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { id: variant.id, label: variant.label, message, status: 'invalid' };
  }

  if (
    acquisitionCost === null
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
  let totalCost = acquisitionCost + runningCost - residualValue;
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

function getDefaultVariant(index, mode) {
  const defaults = mode === 'costRevenue' ? costRevenueDefaults : costDefaults;

  return defaults[index] ?? {
    acquisitionCost: '',
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
