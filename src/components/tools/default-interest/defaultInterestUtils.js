export const baseInterestRate = 1.52;

export const defaultInterestRateOptions = [
  { value: 'custom', label: 'Eigener Zinssatz' },
  { value: 'consumer', label: 'Gesetzlicher Verzugszins Verbraucher' },
  { value: 'business', label: 'Gesetzlicher Verzugszins Unternehmen' },
];

export const defaultInterestExampleValues = {
  amount: '1000',
  customRate: '8',
  endDate: '2026-08-05',
  rateOption: 'consumer',
  startDate: '2026-07-06',
};

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  style: 'currency',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export function createDefaultInterestCalculation() {
  return {
    amount: defaultInterestExampleValues.amount,
    customRate: defaultInterestExampleValues.customRate,
    endDate: defaultInterestExampleValues.endDate,
    rateOption: defaultInterestExampleValues.rateOption,
    startDate: defaultInterestExampleValues.startDate,
  };
}

export function calculateDefaultInterest(calculation) {
  const amount = parsePositiveNumber(calculation.amount);
  const interestRate = getInterestRate(calculation);
  const startDate = parseDate(calculation.startDate);
  const endDate = parseDate(calculation.endDate);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  if (amount === null || interestRate === null || !startDate || !endDate) {
    return invalid();
  }

  const daysInDefault = getDateDifferenceInDays(startDate, endDate);

  if (daysInDefault < 0) {
    return invalid('Das Zahlungs- oder Berechnungsdatum darf nicht vor dem Verzugsbeginn liegen.');
  }

  const interestAmount = amount * interestRate * daysInDefault / 365 / 100;
  const totalAmount = amount + interestAmount;

  if (!Number.isFinite(interestAmount) || !Number.isFinite(totalAmount)) {
    return invalid();
  }

  return {
    amount,
    daysInDefault,
    interestAmount,
    interestRate,
    status: 'success',
    totalAmount,
  };
}

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

function getInterestRate(calculation) {
  if (calculation.rateOption === 'consumer') {
    return baseInterestRate + 5;
  }

  if (calculation.rateOption === 'business') {
    return baseInterestRate + 9;
  }

  return parsePositiveNumber(calculation.customRate);
}

function getDateDifferenceInDays(startDate, endDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);
}

function parseDate(value) {
  if (!value) {
    return null;
  }

  const [year, month, day] = String(value).split('-').map((part) => Number.parseInt(part, 10));

  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return null;
  }

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year
    || date.getMonth() !== month - 1
    || date.getDate() !== day
  ) {
    return null;
  }

  date.setHours(0, 0, 0, 0);
  return date;
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
