export const breakEvenExampleValues = {
  fixedCosts: '5000',
  fixedCostPeriod: 'monthly',
  pricePerUnit: '150',
  variableCostPerUnit: '60',
  capacity: '',
  capacityPeriod: 'monthly',
};

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  minimumFractionDigits: 2,
  style: 'currency',
});

const integerFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 1,
  minimumFractionDigits: 1,
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 1,
  minimumFractionDigits: 1,
  style: 'percent',
});

export function createBreakEvenCalculation() {
  return { ...breakEvenExampleValues };
}

export function calculateBreakEven(calculation) {
  const fixedCosts = parsePositiveNumber(calculation.fixedCosts);
  const pricePerUnit = parsePositiveNumber(calculation.pricePerUnit);
  const variableCostPerUnit = parsePositiveNumber(calculation.variableCostPerUnit);
  const capacity = parseOptionalPositiveNumber(calculation.capacity);
  const fixedCostPeriod = normalizePeriod(calculation.fixedCostPeriod);
  const capacityPeriod = normalizePeriod(calculation.capacityPeriod);

  function invalid(message = 'Bitte fülle alle Pflichtfelder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  if (fixedCosts === null || pricePerUnit === null || variableCostPerUnit === null) {
    return invalid();
  }

  if (fixedCosts < 0) {
    return invalid('Fixkosten dürfen nicht negativ sein.');
  }

  if (pricePerUnit <= 0) {
    return invalid('Der Verkaufspreis pro Einheit muss größer als 0 sein.');
  }

  if (variableCostPerUnit < 0) {
    return invalid('Variable Kosten pro Einheit dürfen nicht negativ sein.');
  }

  if (capacity === 'invalid') {
    return invalid('Die Kapazität muss größer als 0 sein, wenn du sie angibst.');
  }

  const contributionMargin = pricePerUnit - variableCostPerUnit;

  if (contributionMargin <= 0) {
    return invalid('Es ist kein positiver Deckungsbeitrag vorhanden. Der Verkaufspreis muss höher sein als die variablen Kosten.');
  }

  const fixedCostsPerYear = fixedCostPeriod === 'monthly' ? fixedCosts * 12 : fixedCosts;
  const breakEvenUnits = Math.ceil(fixedCostsPerYear / contributionMargin);
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;
  const result = {
    breakEvenRevenue,
    breakEvenUnits,
    contributionMargin,
    fixedCostsPerYear,
    status: 'success',
  };

  if (capacity !== null) {
    const capacityPerYear = capacityPeriod === 'monthly' ? capacity * 12 : capacity;
    const capacityForSelectedPeriod = capacity;
    const selectedPeriodName = capacityPeriod === 'monthly' ? 'Monats' : 'Jahres';
    const selectedPeriodDuration = capacityPeriod === 'monthly' ? 'Monats' : 'Jahres';
    const yearsToBreakEven = breakEvenUnits / capacityPerYear;
    const monthsToBreakEven = yearsToBreakEven * 12;
    const periodUtilization = breakEvenUnits / capacityForSelectedPeriod;

    result.capacity = capacity;
    result.capacityPeriod = capacityPeriod;
    result.capacityPerYear = capacityPerYear;
    result.monthsToBreakEven = monthsToBreakEven;
    result.yearsToBreakEven = yearsToBreakEven;
    result.periodUtilization = periodUtilization;
    result.capacityPeriodWarning = breakEvenUnits > capacityForSelectedPeriod
      ? `Der Break-even ist innerhalb eines ${selectedPeriodDuration} mit dieser Kapazität nicht erreichbar.`
      : `Der Break-even liegt innerhalb der angegebenen ${selectedPeriodName}kapazität.`;
  }

  return result;
}

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export function formatUnits(value) {
  return `${integerFormatter.format(Math.ceil(value))} Einheiten`;
}

export function formatCapacityPeriod(period) {
  return period === 'monthly' ? 'monatlich' : 'jährlich';
}

export function formatTimeToBreakEven(result) {
  if (result.monthsToBreakEven < 24) {
    return `ca. ${decimalFormatter.format(result.monthsToBreakEven)} Monate`;
  }

  return `ca. ${decimalFormatter.format(result.yearsToBreakEven)} Jahre`;
}

export function formatUtilization(value) {
  return percentFormatter.format(value);
}

function normalizePeriod(value) {
  return value === 'yearly' ? 'yearly' : 'monthly';
}

function parsePositiveNumber(value) {
  if (String(value).trim() === '') {
    return null;
  }

  const parsed = Number.parseFloat(String(value).replace(/\./g, '').replace(',', '.'));

  if (!Number.isFinite(parsed)) {
    return null;
  }

  return parsed;
}

function parseOptionalPositiveNumber(value) {
  if (String(value).trim() === '') {
    return null;
  }

  const parsed = parsePositiveNumber(value);

  if (parsed === null || parsed <= 0) {
    return 'invalid';
  }

  return parsed;
}
