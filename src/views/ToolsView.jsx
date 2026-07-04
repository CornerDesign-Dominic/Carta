import { useEffect, useMemo, useState } from 'react';
import A4Page from '../components/documentBlocks/A4Page.jsx';
import DocumentToolbar from '../components/documentBlocks/DocumentToolbar.jsx';
import RecipientBlock from '../components/documentBlocks/RecipientBlock.jsx';
import TextBlock from '../components/documentBlocks/TextBlock.jsx';
import ToolsSidebar from '../components/tools/ToolsSidebar.jsx';
import { findToolItem, toolItems } from '../data/tools.js';

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
});

const calculationModes = [
  { value: 'initialCapital', label: 'Anfangskapital' },
  { value: 'interestRate', label: 'Zinssatz' },
  { value: 'duration', label: 'Laufzeit' },
  { value: 'finalCapital', label: 'Endkapital' },
];

const maxInterestCalculations = 10;

const interestExampleValues = {
  initialCapital: '1000',
  finalCapital: '1050',
  interestRate: '5',
  durationYears: '1',
  durationMonths: '0',
};

const defaultInterestDocumentRecipient = {
  company: 'Max Mustermann GmbH',
  attention: 'z. H. Max Mustermann',
  name: 'Buchhaltung',
  street: 'Musterstraße 12',
  cityLine: '12345 Musterstadt',
};

const defaultInterestSenderCompanyName = 'Belege24 Muster GmbH';

const defaultInterestDocumentSenderLine = 'Carta Muster GmbH - Musterweg 1 - 10115 Berlin';

const defaultInterestDocumentIntro =
  'Hiermit erhalten Sie eine Übersicht der berechneten Zinsen auf Grundlage der angegebenen Werte.';

function createInterestCalculation(id) {
  return {
    id,
    isCollapsed: false,
    initialCapital: '',
    finalCapital: '',
    interestRate: '',
    durationYears: '',
    durationMonths: '',
  };
}

function clearInterestCalculation(calculation, isCollapsed = calculation.isCollapsed) {
  return {
    ...calculation,
    isCollapsed,
    initialCapital: '',
    finalCapital: '',
    interestRate: '',
    durationYears: '',
    durationMonths: '',
  };
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

function parsePositiveNumberWithFallback(value, fallbackValue) {
  return parsePositiveNumber(String(value).trim() === '' ? fallbackValue : value);
}

function formatPercent(value) {
  return `${percentFormatter.format(value)} %`;
}

function formatDuration(durationInYears) {
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

function formatCompactDuration(durationInYears) {
  return formatDuration(durationInYears)?.replace(' und ', ', ');
}

function formatCalculatedValue(calculationMode, result) {
  if (result.status !== 'success') {
    return null;
  }

  if (calculationMode === 'initialCapital') {
    return euroFormatter.format(result.calculatedValue);
  }

  if (calculationMode === 'interestRate') {
    return formatPercent(result.calculatedValue);
  }

  if (calculationMode === 'duration') {
    return formatDuration(result.calculatedValue);
  }

  return euroFormatter.format(result.calculatedValue);
}

function formatDocumentCalculatedValue(calculationMode, result) {
  if (calculationMode === 'duration' && result.status === 'success') {
    return formatCompactDuration(result.calculatedValue);
  }

  return formatCalculatedValue(calculationMode, result);
}

function getCalculationTitle(calculationMode, index) {
  const titleByMode = {
    initialCapital: 'Anfangskapital',
    interestRate: 'Zinssatz',
    duration: 'Laufzeit',
    finalCapital: 'Endbetrag',
  };

  return `${titleByMode[calculationMode] ?? 'Ergebnis'} Berechnung ${index + 1}`;
}

function getCalculationFormula(calculationMode) {
  const formulaByMode = {
    initialCapital: 'Endkapital / (1 + Zinssatz x Laufzeit / 100)',
    interestRate: '((Endkapital / Anfangskapital - 1) / Laufzeit) x 100',
    duration: '((Endkapital / Anfangskapital - 1) / Zinssatz) x 100',
    finalCapital: 'Anfangskapital x (1 + Zinssatz x Laufzeit / 100)',
  };

  return formulaByMode[calculationMode] ?? '';
}

function getCalculationInputSummary(calculationMode, result) {
  if (result.status !== 'success') {
    return [];
  }

  const inputSummaryByMode = {
    initialCapital: [
      ['Endkapital', euroFormatter.format(result.finalCapital)],
      ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
      ['Laufzeit', formatCompactDuration(result.durationInYears)],
    ],
    interestRate: [
      ['Anfangskapital', euroFormatter.format(result.initialCapital)],
      ['Endkapital', euroFormatter.format(result.finalCapital)],
      ['Laufzeit', formatCompactDuration(result.durationInYears)],
    ],
    duration: [
      ['Anfangskapital', euroFormatter.format(result.initialCapital)],
      ['Endkapital', euroFormatter.format(result.finalCapital)],
      ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
    ],
    finalCapital: [
      ['Anfangskapital', euroFormatter.format(result.initialCapital)],
      ['Zinssatz', `${formatPercent(result.interestRate)} p.a.`],
      ['Laufzeit', formatCompactDuration(result.durationInYears)],
    ],
  };

  return inputSummaryByMode[calculationMode] ?? [];
}

function calculateInterestResult(calculation, calculationMode) {
  const parsedInitialCapital = parsePositiveNumberWithFallback(
    calculation.initialCapital,
    interestExampleValues.initialCapital,
  );
  const parsedFinalCapital = parsePositiveNumberWithFallback(
    calculation.finalCapital,
    interestExampleValues.finalCapital,
  );
  const parsedInterestRate = parsePositiveNumberWithFallback(
    calculation.interestRate,
    interestExampleValues.interestRate,
  );
  const parsedDurationYears = parsePositiveNumberWithFallback(
    calculation.durationYears,
    interestExampleValues.durationYears,
  );
  const parsedDurationMonths = parsePositiveNumberWithFallback(
    calculation.durationMonths,
    interestExampleValues.durationMonths,
  );
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

function ToolOverview({ onSelect }) {
  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Werkzeuge für schnelle Berechnungen</h1>
      <p className="intro document-intro">
        Hier findest du praktische Rechner und Hilfen für den geschäftlichen Alltag.
      </p>

      <section className="tools-overview-grid" aria-label="Verfügbare Werkzeuge">
        {toolItems.map((item) => (
          <button
            className="document-overview-card tools-overview-card"
            type="button"
            onClick={() => onSelect(item.id)}
            key={item.id}
          >
            <span>{item.title}</span>
            <p>{item.description}</p>
          </button>
        ))}
      </section>
    </>
  );
}

function InterestCalculationCard({
  calculation,
  calculationMode,
  index,
  canRemove,
  onChange,
  onRemove,
  onToggleCollapse,
}) {
  const result = useMemo(
    () => calculateInterestResult(calculation, calculationMode),
    [calculation, calculationMode],
  );

  function handleNumberChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        setValue(nextValue);
      }
    };
  }

  function handleIntegerChange(setValue) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || /^\d+$/.test(nextValue)) {
        setValue(nextValue);
      }
    };
  }

  function getResultLabel() {
    return calculationModes.find((mode) => mode.value === calculationMode)?.label ?? 'Ergebnis';
  }

  function formatMainResult() {
    return formatCalculatedValue(calculationMode, result);
  }

  return (
    <section className="tools-calculation-section" aria-labelledby={`interest-calculation-${calculation.id}`}>
      <div className="tools-calculation-header">
        <h2 id={`interest-calculation-${calculation.id}`}>Berechnung {index + 1}</h2>
        {canRemove && (
          <div className="tools-calculation-actions">
            <button className="tools-toggle-calculation" type="button" onClick={onToggleCollapse}>
              {calculation.isCollapsed ? 'Vergleich anzeigen' : 'Vergleich einklappen'}
            </button>
            <button className="tools-remove-calculation" type="button" onClick={onRemove}>
              Vergleich entfernen
            </button>
          </div>
        )}
      </div>

      {!calculation.isCollapsed && (
      <div className="tools-calculator-layout">
        <section className="tools-calculator-panel" aria-label="Eingaben">
          <h2>Eingaben</h2>
          <div className="tools-form-grid">
            {calculationMode !== 'initialCapital' && (
              <label>
                <span>Anfangskapital</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder="1.000"
                  value={calculation.initialCapital}
                  onChange={handleNumberChange((value) => onChange('initialCapital', value))}
                />
              </label>
            )}

            {calculationMode !== 'interestRate' && (
              <label>
                <span>Zinssatz pro Jahr in %</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder={interestExampleValues.interestRate}
                  value={calculation.interestRate}
                  onChange={handleNumberChange((value) => onChange('interestRate', value))}
                />
              </label>
            )}

            {calculationMode !== 'duration' && (
              <div className="tools-duration-field">
                <span>Laufzeit</span>
                <div className="tools-duration-inputs">
                  <label>
                    <span>Jahre</span>
                    <input
                      min="0"
                      step="1"
                      inputMode="numeric"
                      type="number"
                      placeholder={interestExampleValues.durationYears}
                      value={calculation.durationYears}
                      onChange={handleIntegerChange((value) => onChange('durationYears', value))}
                    />
                  </label>

                  <label>
                    <span>Monate</span>
                    <input
                      min="0"
                      step="1"
                      inputMode="numeric"
                      type="number"
                      placeholder={interestExampleValues.durationMonths}
                      value={calculation.durationMonths}
                      onChange={handleIntegerChange((value) => onChange('durationMonths', value))}
                    />
                  </label>
                </div>
              </div>
            )}

            {calculationMode !== 'finalCapital' && (
              <label>
                <span>Endkapital</span>
                <input
                  min="0"
                  inputMode="decimal"
                  type="number"
                  placeholder="1.050"
                  value={calculation.finalCapital}
                  onChange={handleNumberChange((value) => onChange('finalCapital', value))}
                />
              </label>
            )}
          </div>
        </section>

        <section className="tools-result-panel" aria-label="Ergebnis">
          <h2>Ergebnis</h2>
          {result.status === 'success' ? (
            <>
              <div className="tools-result-highlight">
                <span>{getResultLabel()}</span>
                <strong>{formatMainResult()}</strong>
              </div>

              <dl>
                {calculationMode !== 'duration' && (
                  <div>
                    <dt>Laufzeit</dt>
                    <dd>{formatDuration(result.durationInYears)}</dd>
                  </div>
                )}
                <div>
                  <dt>Berechnete Zinsen</dt>
                  <dd>{euroFormatter.format(result.interest)}</dd>
                </div>
              </dl>
            </>
          ) : (
            <p className="tools-result-empty">{result.message}</p>
          )}
        </section>
      </div>
      )}
    </section>
  );
}

function InterestCalculator() {
  const [calculationMode, setCalculationMode] = useState('finalCapital');
  const [nextCalculationId, setNextCalculationId] = useState(2);
  const [calculations, setCalculations] = useState([createInterestCalculation(1)]);
  const [isDocumentEditable, setIsDocumentEditable] = useState(false);
  const [isDataCheckActive, setIsDataCheckActive] = useState(false);
  const [senderCompanyName, setSenderCompanyName] = useState(defaultInterestSenderCompanyName);
  const [documentRecipient, setDocumentRecipient] = useState(defaultInterestDocumentRecipient);
  const [recipientHiddenFields, setRecipientHiddenFields] = useState([]);
  const [documentSenderLine, setDocumentSenderLine] = useState(defaultInterestDocumentSenderLine);
  const [documentIntro, setDocumentIntro] = useState(defaultInterestDocumentIntro);
  const canAddCalculation = calculations.length < maxInterestCalculations;
  const documentCalculationBlocks = useMemo(
    () => calculations.map((calculation, index) => {
      const result = calculateInterestResult(calculation, calculationMode);

      return {
        id: calculation.id,
        formula: getCalculationFormula(calculationMode),
        inputSummary: getCalculationInputSummary(calculationMode, result),
        result,
        resultValue: formatDocumentCalculatedValue(calculationMode, result),
        title: getCalculationTitle(calculationMode, index),
      };
    }),
    [calculationMode, calculations],
  );

  function updateCalculation(calculationId, field, value) {
    setCalculations((currentCalculations) => currentCalculations.map((calculation) => (
      calculation.id === calculationId
        ? { ...calculation, [field]: value }
        : calculation
    )));
  }

  function addCalculation() {
    if (!canAddCalculation) {
      return;
    }

    setCalculations((currentCalculations) => [
      ...currentCalculations,
      { ...createInterestCalculation(nextCalculationId), isCollapsed: false },
    ]);
    setNextCalculationId((currentId) => currentId + 1);
  }

  function removeCalculation(calculationId) {
    setCalculations((currentCalculations) => currentCalculations.filter(
      (calculation) => calculation.id !== calculationId,
    ));
  }

  function toggleCalculation(calculationId) {
    setCalculations((currentCalculations) => currentCalculations.map((calculation) => (
      calculation.id === calculationId
        ? { ...calculation, isCollapsed: !calculation.isCollapsed }
        : calculation
    )));
  }

  function handleCalculationModeChange(nextCalculationMode) {
    setCalculationMode(nextCalculationMode);
    setCalculations((currentCalculations) => currentCalculations.map((calculation, index) => (
      clearInterestCalculation(calculation, index > 0)
    )));
  }

  function updateDocumentRecipient(field, value) {
    setDocumentRecipient((currentRecipient) => ({
      ...currentRecipient,
      [field]: value,
    }));
  }

  function toggleRecipientField(field) {
    setRecipientHiddenFields((currentHiddenFields) => (
      currentHiddenFields.includes(field)
        ? currentHiddenFields.filter((hiddenField) => hiddenField !== field)
        : [...currentHiddenFields, field]
    ));
  }

  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Zinsrechner</h1>

      <div className="tools-mode-selector" aria-label="Berechnungsart auswählen">
        {calculationModes.map((mode) => (
          <button
            className={calculationMode === mode.value ? 'is-active' : undefined}
            type="button"
            aria-pressed={calculationMode === mode.value}
            onClick={() => handleCalculationModeChange(mode.value)}
            key={mode.value}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="tools-calculation-list">
        {calculations.map((calculation, index) => (
          <InterestCalculationCard
            calculation={calculation}
            calculationMode={calculationMode}
            index={index}
            canRemove={index > 0}
            onChange={(field, value) => updateCalculation(calculation.id, field, value)}
            onRemove={() => removeCalculation(calculation.id)}
            onToggleCollapse={() => toggleCalculation(calculation.id)}
            key={calculation.id}
          />
        ))}
      </div>

      <div className="tools-add-calculation">
        {canAddCalculation ? (
          <button type="button" onClick={addCalculation}>
            Weitere Vergleichsberechnung hinzufügen
          </button>
        ) : (
          <p>Maximal 10 Vergleichsberechnungen möglich.</p>
        )}
      </div>

      <section className="tools-document-preview-section" aria-label="Dokumentvorschau">
        <div className="tools-document-preview-divider" aria-hidden="true" />
        <DocumentToolbar
          ariaLabel="Zinsberechnung Werkzeuge"
          isDataCheckActive={isDataCheckActive}
          isEditable={isDocumentEditable}
          isExporting={false}
          onToggleDataCheck={() => setIsDataCheckActive((current) => !current)}
          onToggleEditable={() => setIsDocumentEditable((current) => !current)}
        />
        <div className="tools-document-preview">
          <A4Page
            ariaLabel="Dokumentvorschau Zinsberechnung"
            className={`offer-sheet invoice-sheet tools-empty-a4-page${isDataCheckActive ? ' is-data-check-mode' : ''}`}
            editable={isDocumentEditable}
          >
            <header className="invoice-document-header tools-letter-header">
              <div className="editable-group tools-letter-company-field">
                <input
                  className={isDataCheckActive ? 'document-data-check-marker' : undefined}
                  aria-label="Eigener Firmenname"
                  value={senderCompanyName}
                  onChange={(event) => setSenderCompanyName(event.target.value)}
                />
              </div>
              <div aria-hidden="true" />
            </header>

            <div className="invoice-address-row tools-letter-address-row">
              <div className="tools-letter-recipient-reserved">
                <RecipientBlock
                  dataCheckFields={isDataCheckActive ? {
                    attention: true,
                    company: true,
                    name: true,
                    senderLine: true,
                    street: true,
                    cityLine: true,
                  } : {}}
                  hiddenFields={recipientHiddenFields}
                  recipient={documentRecipient}
                  senderLine={documentSenderLine}
                  onRecipientChange={updateDocumentRecipient}
                  onSenderLineChange={setDocumentSenderLine}
                  onToggleField={toggleRecipientField}
                />
              </div>
              <div aria-hidden="true" />
            </div>

            <h2 className="invoice-document-title tools-letter-subject">Zinsberechnung</h2>

            <TextBlock
              ariaLabel="Vorlauftext Zinsberechnung"
              className="tools-letter-intro"
              value={documentIntro}
              onChange={setDocumentIntro}
            />

            <section className="tools-letter-result-summary" aria-label="Zinsberechnung Ergebnis">
              {documentCalculationBlocks.map((block) => (
                <article className="tools-letter-calculation-block" key={block.id}>
                  <h3>{block.title}</h3>
                  {block.result.status === 'success' ? (
                    <div className="tools-letter-calculation-grid">
                      <dl className="tools-letter-calculation-inputs">
                        {block.inputSummary.map(([label, value]) => (
                          <div key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="tools-letter-calculation-formula">{block.formula}</p>
                      <div className="tools-letter-calculation-result">
                        <span>Ergebnis</span>
                        <strong>{block.resultValue}</strong>
                      </div>
                    </div>
                  ) : (
                    <p>{block.result.message}</p>
                  )}
                </article>
              ))}
            </section>
          </A4Page>
        </div>
      </section>
    </>
  );
}

export default function ToolsView({ activeToolId, onSelectTool }) {
  const activeTool = findToolItem(activeToolId);

  useEffect(() => {
    if (activeToolId && !activeTool) {
      onSelectTool(null);
    }
  }, [activeTool, activeToolId, onSelectTool]);

  function handleSelectTool(toolId) {
    onSelectTool(toolId);
  }

  function handleShowOverview() {
    onSelectTool(null);
  }

  function renderTool() {
    if (!activeToolId) {
      return <ToolOverview onSelect={handleSelectTool} />;
    }

    if (activeToolId === 'zinsrechner') {
      return <InterestCalculator />;
    }

    return <ToolOverview onSelect={handleSelectTool} />;
  }

  return (
    <main className="documents-layout tools-layout">
      <ToolsSidebar
        activeToolId={activeTool?.id ?? null}
        onSelect={handleSelectTool}
        onShowOverview={handleShowOverview}
      />

      <section className="paper-page document-paper tools-paper" aria-labelledby="tools-title">
        {renderTool()}
      </section>
    </main>
  );
}
