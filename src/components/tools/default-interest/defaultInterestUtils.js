import { baseInterestRates, currentBaseInterestRate } from '../lateInterest/baseInterestRates.js';

export const baseInterestRate = currentBaseInterestRate;

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
  const customInterestRate = calculation.rateOption === 'custom'
    ? parsePositiveNumber(calculation.customRate)
    : null;
  const startDate = parseDate(calculation.startDate);
  const endDate = parseDate(calculation.endDate);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  if (amount === null || (calculation.rateOption === 'custom' && customInterestRate === null) || !startDate || !endDate) {
    return invalid();
  }

  const daysInDefault = getDateDifferenceInDays(startDate, endDate);

  if (daysInDefault < 0) {
    return invalid('Das Zahlungs- oder Berechnungsdatum darf nicht vor dem Verzugsbeginn liegen.');
  }

  const interestPeriods = calculation.rateOption === 'custom'
    ? createCustomInterestPeriods({ amount, endDate, interestRate: customInterestRate, startDate })
    : createStatutoryInterestPeriods({ amount, endDate, rateOption: calculation.rateOption, startDate });

  if (!interestPeriods) {
    return invalid('Historische Basiszinssätze sind erst ab dem 01.07.2002 hinterlegt.');
  }

  const interestAmount = interestPeriods.reduce((sum, period) => sum + period.interestAmount, 0);
  const totalAmount = amount + interestAmount;

  if (!Number.isFinite(interestAmount) || !Number.isFinite(totalAmount)) {
    return invalid();
  }

  return {
    amount,
    daysInDefault,
    interestAmount,
    interestPeriods,
    interestRate: calculation.rateOption === 'custom' ? customInterestRate : null,
    modeLabel: getDefaultInterestModeLabel(calculation.rateOption),
    periodCount: interestPeriods.filter((period) => period.days > 0).length,
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

export function createDefaultInterestPdfFileName() {
  return 'verzugszinsen.pdf';
}

function createCustomInterestPeriods({ amount, endDate, interestRate, startDate }) {
  const days = getDateDifferenceInDays(startDate, endDate);

  return [{
    baseRate: null,
    days,
    interestAmount: amount * interestRate * days / 365 / 100,
    interestRate,
    validFrom: formatDateValue(startDate),
    validTo: formatDateValue(endDate),
  }];
}

function createStatutoryInterestPeriods({ amount, endDate, rateOption, startDate }) {
  const surcharge = rateOption === 'business' ? 9 : 5;
  const periods = [];
  let cursor = new Date(startDate);

  while (cursor.getTime() < endDate.getTime()) {
    const baseRateEntry = getBaseRateEntryForDate(cursor);

    if (!baseRateEntry) {
      return null;
    }

    const nextRateStart = getNextBaseRateStartDate(cursor);
    const periodEnd = nextRateStart && nextRateStart.getTime() < endDate.getTime()
      ? nextRateStart
      : endDate;
    const days = getDateDifferenceInDays(cursor, periodEnd);
    const interestRate = baseRateEntry.rate + surcharge;

    periods.push({
      baseRate: baseRateEntry.rate,
      days,
      interestAmount: amount * interestRate * days / 365 / 100,
      interestRate,
      validFrom: formatDateValue(cursor),
      validTo: formatDateValue(periodEnd),
    });

    cursor = new Date(periodEnd);
  }

  if (periods.length === 0) {
    const baseRateEntry = getBaseRateEntryForDate(startDate);

    if (!baseRateEntry) {
      return null;
    }

    periods.push({
      baseRate: baseRateEntry.rate,
      days: 0,
      interestAmount: 0,
      interestRate: baseRateEntry.rate + surcharge,
      validFrom: formatDateValue(startDate),
      validTo: formatDateValue(endDate),
    });
  }

  return periods;
}

function getBaseRateEntryForDate(date) {
  const value = formatDateValue(date);

  for (let index = baseInterestRates.length - 1; index >= 0; index -= 1) {
    if (baseInterestRates[index].validFrom <= value) {
      return baseInterestRates[index];
    }
  }

  return null;
}

function getNextBaseRateStartDate(date) {
  const value = formatDateValue(date);
  const nextRate = baseInterestRates.find((rateEntry) => rateEntry.validFrom > value);
  return nextRate ? parseDate(nextRate.validFrom) : null;
}

function getDefaultInterestModeLabel(rateOption) {
  return defaultInterestRateOptions.find((option) => option.value === rateOption)?.label ?? 'Zinssatz';
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

function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
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
