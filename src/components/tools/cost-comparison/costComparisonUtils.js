export const maxCostComparisonVariants = 5;
export const minCostComparisonVariants = 2;

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  style: 'currency',
});

const defaultVariants = [
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

export function createCostComparisonVariant(id, index = 0) {
  const defaults = defaultVariants[index] ?? {
    acquisitionCost: '',
    label: `Variante ${index + 1}`,
    monthlyCost: '',
    residualValue: '',
    termMonths: '',
    termYears: '',
  };

  return {
    id,
    ...defaults,
  };
}

export function createCostComparisonVariants() {
  return [
    createCostComparisonVariant(1, 0),
    createCostComparisonVariant(2, 1),
  ];
}

export function calculateCostComparison(variants) {
  const results = variants.map((variant) => calculateVariantCosts(variant));
  const validResults = results.filter((result) => result.status === 'success');
  const lowestTotalCost = validResults.length > 0
    ? Math.min(...validResults.map((result) => result.totalCost))
    : null;

  return results.map((result) => ({
    ...result,
    isCheapest: result.status === 'success' && result.totalCost === lowestTotalCost,
  }));
}

export function calculateVariantCosts(variant) {
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

  const totalCost = acquisitionCost + monthlyCost * totalMonths - residualValue;
  const monthlyAverageCost = totalCost / totalMonths;
  const yearlyAverageCost = monthlyAverageCost * 12;

  if (
    !Number.isFinite(totalCost)
    || !Number.isFinite(monthlyAverageCost)
    || !Number.isFinite(yearlyAverageCost)
  ) {
    return invalid();
  }

  return {
    id: variant.id,
    label: variant.label || `Variante ${variant.id}`,
    monthlyAverageCost,
    status: 'success',
    totalCost,
    totalMonths,
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
