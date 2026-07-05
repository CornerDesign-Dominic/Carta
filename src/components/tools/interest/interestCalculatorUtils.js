export const calculationModes = [
  { value: 'finalCapital', label: 'Endkapital' },
  { value: 'initialCapital', label: 'Anfangskapital' },
  { value: 'interestRate', label: 'Zinssatz' },
  { value: 'duration', label: 'Laufzeit' },
];

export const maxInterestCalculations = 10;

export const interestExampleValues = {
  initialCapital: '1000',
  finalCapital: '1050',
  interestRate: '5',
  durationYears: '1',
  durationMonths: '0',
};

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
});

export function createInterestCalculation(id) {
  return {
    id,
    initialCapital: interestExampleValues.initialCapital,
    finalCapital: interestExampleValues.finalCapital,
    interestRate: interestExampleValues.interestRate,
    durationYears: interestExampleValues.durationYears,
    durationMonths: interestExampleValues.durationMonths,
  };
}

export function resetInterestCalculationToExamples(calculation) {
  return {
    ...calculation,
    initialCapital: interestExampleValues.initialCapital,
    finalCapital: interestExampleValues.finalCapital,
    interestRate: interestExampleValues.interestRate,
    durationYears: interestExampleValues.durationYears,
    durationMonths: interestExampleValues.durationMonths,
  };
}

export function formatCurrency(value) {
  return euroFormatter.format(value);
}

export function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

export function formatDuration(durationInYears) {
  if (!Number.isFinite(durationInYears) || durationInYears < 0) {
    return null;
  }

  const totalMonths = Math.round(durationInYears * 12);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'Jahr' : 'Jahre'}`);
  }

  if (months > 0 || parts.length === 0) {
    parts.push(`${months} ${months === 1 ? 'Monat' : 'Monate'}`);
  }

  return parts.join(' und ');
}

export function formatCompactDuration(durationInYears) {
  return formatDuration(durationInYears)?.replace(' und ', ', ');
}

export function formatCalculatedValue(calculationMode, result) {
  if (result.status !== 'success') {
    return null;
  }

  if (calculationMode === 'initialCapital') {
    return formatCurrency(result.calculatedValue);
  }

  if (calculationMode === 'interestRate') {
    return formatPercent(result.calculatedValue);
  }

  if (calculationMode === 'duration') {
    return formatDuration(result.calculatedValue);
  }

  return formatCurrency(result.calculatedValue);
}

export function formatDocumentCalculatedValue(calculationMode, result) {
  if (calculationMode === 'duration' && result.status === 'success') {
    return formatCompactDuration(result.calculatedValue);
  }

  return formatCalculatedValue(calculationMode, result);
}

export function getCalculationTitle(index) {
  return `${index + 1}.`;
}

export function getCalculationModeHint(calculationMode) {
  const hintByMode = {
    initialCapital: 'Die folgenden Berechnungen ermitteln das Anfangskapital.',
    interestRate: 'Die folgenden Berechnungen ermitteln den Zinssatz.',
    duration: 'Die folgenden Berechnungen ermitteln die Laufzeit.',
    finalCapital: 'Die folgenden Berechnungen ermitteln den Endbetrag.',
  };

  return hintByMode[calculationMode] ?? '';
}

export function getCalculationInputSummary(calculationMode, result) {
  if (result.status !== 'success') {
    return [];
  }

  const inputSummaryByMode = {
    initialCapital: [
      ['Endkapital', formatCurrency(result.finalCapital)],
      ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
      ['Laufzeit', formatCompactDuration(result.durationInYears)],
    ],
    interestRate: [
      ['Anfangskapital', formatCurrency(result.initialCapital)],
      ['Endkapital', formatCurrency(result.finalCapital)],
      ['Laufzeit', formatCompactDuration(result.durationInYears)],
    ],
    duration: [
      ['Anfangskapital', formatCurrency(result.initialCapital)],
      ['Endkapital', formatCurrency(result.finalCapital)],
      ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
    ],
    finalCapital: [
      ['Anfangskapital', formatCurrency(result.initialCapital)],
      ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
      ['Laufzeit', formatCompactDuration(result.durationInYears)],
    ],
  };

  return inputSummaryByMode[calculationMode] ?? [];
}

export function createInterestPrintItems({ blocks, hint, intro }) {
  return [
    { id: 'intro', text: intro, type: 'text' },
    { id: 'mode-hint', text: hint, type: 'text' },
    ...blocks.map((block) => ({ block, id: block.id, type: 'calculation' })),
  ].filter((item) => item.type !== 'text' || String(item.text || '').trim());
}

export function createInterestPdfFileName() {
  return 'zinsberechnung.pdf';
}

export function calculateInterestResult(calculation, calculationMode) {
  const parsedInitialCapital = parsePositiveNumber(calculation.initialCapital);
  const parsedFinalCapital = parsePositiveNumber(calculation.finalCapital);
  const parsedInterestRate = parsePositiveNumber(calculation.interestRate);
  const parsedDurationYears = parsePositiveNumber(calculation.durationYears);
  const parsedDurationMonths = parsePositiveNumber(calculation.durationMonths);
  const durationInYears =
    parsedDurationYears !== null && parsedDurationMonths !== null
      ? parsedDurationYears + parsedDurationMonths / 12
      : null;

  function invalid(message = 'Bitte fülle alle benötigten Felder aus.') {
    return { status: 'invalid', message };
  }

  function success(values) {
    if (
      !Number.isFinite(values.initialCapital)
      || !Number.isFinite(values.finalCapital)
      || !Number.isFinite(values.interestRate)
      || !Number.isFinite(values.durationInYears)
      || !Number.isFinite(values.interest)
    ) {
      return invalid();
    }

    return { status: 'success', ...values };
  }

  if (calculationMode === 'finalCapital') {
    if (parsedInitialCapital === null || parsedInterestRate === null || durationInYears === null) {
      return invalid();
    }

    const interest = (parsedInitialCapital * parsedInterestRate * durationInYears) / 100;
    const computedFinalCapital = parsedInitialCapital + interest;

    return success({
      calculatedValue: computedFinalCapital,
      initialCapital: parsedInitialCapital,
      finalCapital: computedFinalCapital,
      interestRate: parsedInterestRate,
      durationInYears,
      interest,
    });
  }

  if (calculationMode === 'initialCapital') {
    if (parsedFinalCapital === null || parsedInterestRate === null || durationInYears === null) {
      return invalid();
    }

    const factor = 1 + (parsedInterestRate * durationInYears) / 100;
    if (factor <= 0) {
      return invalid();
    }

    const computedInitialCapital = parsedFinalCapital / factor;
    const interest = parsedFinalCapital - computedInitialCapital;

    return success({
      calculatedValue: computedInitialCapital,
      initialCapital: computedInitialCapital,
      finalCapital: parsedFinalCapital,
      interestRate: parsedInterestRate,
      durationInYears,
      interest,
    });
  }

  if (calculationMode === 'interestRate') {
    if (parsedInitialCapital === null || parsedFinalCapital === null || durationInYears === null) {
      return invalid();
    }

    if (parsedInitialCapital <= 0 || durationInYears <= 0) {
      return invalid();
    }

    if (parsedFinalCapital <= parsedInitialCapital) {
      return invalid('Für die Zinssatzberechnung muss das Endkapital größer als das Anfangskapital sein.');
    }

    const computedInterestRate = ((parsedFinalCapital / parsedInitialCapital - 1) / durationInYears) * 100;
    const interest = parsedFinalCapital - parsedInitialCapital;

    return success({
      calculatedValue: computedInterestRate,
      initialCapital: parsedInitialCapital,
      finalCapital: parsedFinalCapital,
      interestRate: computedInterestRate,
      durationInYears,
      interest,
    });
  }

  if (calculationMode === 'duration') {
    if (parsedInitialCapital === null || parsedFinalCapital === null || parsedInterestRate === null) {
      return invalid();
    }

    if (parsedInitialCapital <= 0 || parsedInterestRate <= 0) {
      return invalid();
    }

    if (parsedFinalCapital <= parsedInitialCapital) {
      return invalid('Für die Laufzeitberechnung muss das Endkapital größer als das Anfangskapital sein.');
    }

    const computedDuration = ((parsedFinalCapital / parsedInitialCapital - 1) / parsedInterestRate) * 100;
    const interest = parsedFinalCapital - parsedInitialCapital;

    return success({
      calculatedValue: computedDuration,
      initialCapital: parsedInitialCapital,
      finalCapital: parsedFinalCapital,
      interestRate: parsedInterestRate,
      durationInYears: computedDuration,
      interest,
    });
  }

  return invalid();
}

function parsePositiveNumber(value) {
  if (String(value).trim() === '') {
    return null;
  }

  const normalized = String(value).replace(',', '.');
  const parsed = Number.parseFloat(normalized);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }

  return parsed;
}
