export const maxCompoundInterestCalculations = 5;

export const compoundInterestIntervals = [
  { value: 'monthly', label: 'monatlich' },
  { value: 'yearly', label: 'jährlich' },
];

export const compoundInterestExampleValues = {
  initialCapital: '10000',
  monthlyRate: '200',
  interestRate: '5',
  durationYears: '10',
  durationMonths: '0',
  interestInterval: 'monthly',
};

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
});

export function createCompoundInterestCalculation(id) {
  return {
    id,
    initialCapital: compoundInterestExampleValues.initialCapital,
    monthlyRate: compoundInterestExampleValues.monthlyRate,
    interestRate: compoundInterestExampleValues.interestRate,
    durationYears: compoundInterestExampleValues.durationYears,
    durationMonths: compoundInterestExampleValues.durationMonths,
    interestInterval: compoundInterestExampleValues.interestInterval,
  };
}

export function formatCurrency(value) {
  return euroFormatter.format(value);
}

export function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

export function formatDuration(durationInMonths) {
  if (!Number.isFinite(durationInMonths) || durationInMonths < 0) {
    return null;
  }

  const totalMonths = Math.round(durationInMonths);
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

export function formatCompactDuration(durationInMonths) {
  return formatDuration(durationInMonths)?.replace(' und ', ', ');
}

export function getCompoundInterestTitle(index) {
  return `${index + 1}.`;
}

export function getCompoundInterestInputSummary(result) {
  if (result.status !== 'success') {
    return [];
  }

  return [
    ['Anfangskapital', formatCurrency(result.initialCapital)],
    ['Monatsrate', formatCurrency(result.monthlyRate)],
    ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
    ['Laufzeit', formatCompactDuration(result.durationInMonths)],
    ['Intervall', getIntervalLabel(result.interestInterval)],
  ];
}

export function createCompoundInterestPrintItems({ blocks, hint, intro }) {
  return [
    { id: 'intro', text: intro, type: 'text' },
    { id: 'mode-hint', text: hint, type: 'text' },
    ...blocks.map((block) => ({ block, id: block.id, type: 'calculation' })),
  ].filter((item) => item.type !== 'text' || String(item.text || '').trim());
}

export function createCompoundInterestPdfFileName() {
  return 'zinseszinsberechnung.pdf';
}

export function calculateCompoundInterestResult(calculation) {
  const initialCapital = parsePositiveNumber(calculation.initialCapital);
  const monthlyRate = parsePositiveNumber(calculation.monthlyRate);
  const interestRate = parsePositiveNumber(calculation.interestRate);
  const durationYears = parsePositiveInteger(calculation.durationYears);
  const durationMonths = parsePositiveInteger(calculation.durationMonths);
  const interestInterval = calculation.interestInterval === 'yearly' ? 'yearly' : 'monthly';

  function invalid(message = 'Bitte fülle alle benötigten Felder aus.') {
    return { status: 'invalid', message };
  }

  if (
    initialCapital === null
    || monthlyRate === null
    || interestRate === null
    || durationYears === null
    || durationMonths === null
  ) {
    return invalid();
  }

  const totalMonths = durationYears * 12 + durationMonths;

  if (totalMonths <= 0) {
    return invalid('Bitte gib eine Laufzeit von mindestens einem Monat ein.');
  }

  const finalCapital = interestInterval === 'monthly'
    ? calculateMonthlyCompounding({ initialCapital, interestRate, monthlyRate, totalMonths })
    : calculateYearlyCompounding({ initialCapital, interestRate, monthlyRate, totalMonths });
  const paidInCapital = initialCapital + monthlyRate * totalMonths;
  const interestReturn = finalCapital - paidInCapital;

  if (
    !Number.isFinite(finalCapital)
    || !Number.isFinite(paidInCapital)
    || !Number.isFinite(interestReturn)
  ) {
    return invalid();
  }

  return {
    status: 'success',
    initialCapital,
    monthlyRate,
    interestRate,
    durationInMonths: totalMonths,
    interestInterval,
    finalCapital,
    paidInCapital,
    interestReturn,
  };
}

function calculateMonthlyCompounding({ initialCapital, interestRate, monthlyRate, totalMonths }) {
  const monthlyInterestRate = interestRate / 100 / 12;
  let capital = initialCapital;

  for (let month = 0; month < totalMonths; month += 1) {
    capital += monthlyRate;
    capital *= 1 + monthlyInterestRate;
  }

  return capital;
}

function calculateYearlyCompounding({ initialCapital, interestRate, monthlyRate, totalMonths }) {
  const yearlyInterestRate = interestRate / 100;
  let capital = initialCapital;
  let monthsSinceInterest = 0;

  for (let month = 0; month < totalMonths; month += 1) {
    capital += monthlyRate;
    monthsSinceInterest += 1;

    if (monthsSinceInterest === 12) {
      capital *= 1 + yearlyInterestRate;
      monthsSinceInterest = 0;
    }
  }

  if (monthsSinceInterest > 0) {
    capital *= 1 + yearlyInterestRate * (monthsSinceInterest / 12);
  }

  return capital;
}

function getIntervalLabel(interval) {
  return compoundInterestIntervals.find((entry) => entry.value === interval)?.label ?? interval;
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

function parsePositiveInteger(value) {
  if (String(value).trim() === '') {
    return null;
  }

  if (!/^\d+$/.test(String(value))) {
    return null;
  }

  return Number.parseInt(value, 10);
}
