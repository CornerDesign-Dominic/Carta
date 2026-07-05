export const workingTimeExampleValues = {
  breakHours: '0',
  breakMinutes: '30',
  endTime: '17:00',
  startTime: '09:00',
};

const decimalFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export function createWorkingTimeCalculation() {
  return {
    breakHours: workingTimeExampleValues.breakHours,
    breakMinutes: workingTimeExampleValues.breakMinutes,
    endTime: workingTimeExampleValues.endTime,
    startTime: workingTimeExampleValues.startTime,
  };
}

export function calculateWorkingTime(calculation) {
  const startMinutes = parseTimeToMinutes(calculation.startTime);
  const endMinutes = parseTimeToMinutes(calculation.endTime);
  const breakMinutes = parseBreakMinutes(calculation.breakHours, calculation.breakMinutes);

  function invalid(message = 'Bitte fülle alle benötigten Felder mit gültigen Werten aus.') {
    return { status: 'invalid', message };
  }

  if (startMinutes === null || endMinutes === null || breakMinutes === null) {
    return invalid();
  }

  let totalMinutes = endMinutes - startMinutes;

  if (totalMinutes < 0) {
    totalMinutes += 24 * 60;
  }

  const workingMinutes = totalMinutes - breakMinutes;

  if (workingMinutes < 0) {
    return invalid('Die Pause darf nicht länger sein als die gesamte Arbeitszeit.');
  }

  return {
    breakMinutes,
    decimalHours: workingMinutes / 60,
    grossMinutes: totalMinutes,
    status: 'success',
    workingMinutes,
  };
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

export function formatDecimalHours(value) {
  return `${decimalFormatter.format(value)} Stunden`;
}

function parseBreakMinutes(hoursValue, minutesValue) {
  const hours = parseWholeNumber(hoursValue);
  const minutes = parseWholeNumber(minutesValue);

  if (hours === null || minutes === null) {
    return null;
  }

  return hours * 60 + minutes;
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

function parseTimeToMinutes(value) {
  if (!value) {
    return null;
  }

  const [hours, minutes] = String(value).split(':').map((part) => Number.parseInt(part, 10));

  if (
    !Number.isInteger(hours)
    || !Number.isInteger(minutes)
    || hours < 0
    || hours > 23
    || minutes < 0
    || minutes > 59
  ) {
    return null;
  }

  return hours * 60 + minutes;
}
