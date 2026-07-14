export const hourlyWageExampleValues = {
  amount: '3000',
  hours: '160',
  minutes: '0',
};

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  style: 'currency',
});

export function createHourlyWageCalculation() {
  return {
    amount: hourlyWageExampleValues.amount,
    hours: hourlyWageExampleValues.hours,
    minutes: hourlyWageExampleValues.minutes,
  };
}

export function calculateHourlyWage(calculation) {
  const amount = parsePositiveNumber(calculation.amount);
  const hours = parseWholeNumber(calculation.hours);
  const minutes = parseWholeNumber(calculation.minutes);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  if (amount === null || hours === null || minutes === null) {
    return invalid();
  }

  const totalMinutes = hours * 60 + minutes;

  if (totalMinutes <= 0) {
    return invalid('Die Arbeitszeit muss größer als 0 Minuten sein.');
  }

  const decimalHours = totalMinutes / 60;
  const hourlyWage = amount / decimalHours;
  const minuteWage = amount / totalMinutes;

  if (!Number.isFinite(hourlyWage) || !Number.isFinite(minuteWage)) {
    return invalid();
  }

  return {
    amount,
    decimalHours,
    hourlyWage,
    minuteWage,
    status: 'success',
    totalMinutes,
  };
}

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export function formatDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hourLabel = hours === 1 ? 'Stunde' : 'Stunden';
  const minuteLabel = minutes === 1 ? 'Minute' : 'Minuten';

  if (hours === 0) {
    return `${minutes} ${minuteLabel}`;
  }

  if (minutes === 0) {
    return `${hours} ${hourLabel}`;
  }

  return `${hours} ${hourLabel} ${minutes} ${minuteLabel}`;
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
