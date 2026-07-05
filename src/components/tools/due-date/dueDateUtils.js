export const dueDateExampleValues = {
  invoiceDate: '2026-07-06',
  paymentTermDays: '14',
  shiftWeekends: true,
};

const dateFormatter = new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const weekdayFormatter = new Intl.DateTimeFormat('de-DE', {
  weekday: 'long',
});

export function createDueDateCalculation() {
  return {
    invoiceDate: dueDateExampleValues.invoiceDate,
    paymentTermDays: dueDateExampleValues.paymentTermDays,
    shiftWeekends: dueDateExampleValues.shiftWeekends,
  };
}

export function calculateDueDate(calculation) {
  const invoiceDate = parseDate(calculation.invoiceDate);
  const paymentTermDays = parseWholeNumber(calculation.paymentTermDays);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  if (!invoiceDate || paymentTermDays === null) {
    return invalid();
  }

  const originalDueDate = addDays(invoiceDate, paymentTermDays);
  const dueDate = calculation.shiftWeekends ? shiftWeekendToMonday(originalDueDate) : originalDueDate;
  const shifted = dueDate.getTime() !== originalDueDate.getTime();

  return {
    dueDate,
    originalDueDate,
    paymentTermDays,
    shifted,
    status: 'success',
    weekday: weekdayFormatter.format(dueDate),
  };
}

export function formatDate(date) {
  return dateFormatter.format(date);
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
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

  return date;
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

function shiftWeekendToMonday(date) {
  const day = date.getDay();

  if (day === 6) {
    return addDays(date, 2);
  }

  if (day === 0) {
    return addDays(date, 1);
  }

  return date;
}
