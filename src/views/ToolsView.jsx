import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import A4Page from '../components/documentBlocks/A4Page.jsx';
import DocumentToolbar from '../components/documentBlocks/DocumentToolbar.jsx';
import RecipientBlock from '../components/documentBlocks/RecipientBlock.jsx';
import TextBlock from '../components/documentBlocks/TextBlock.jsx';
import { paginateMeasuredItems, takeMeasuredText } from '../components/documentExport/MeasuredPaginator.jsx';
import ToolsSidebar from '../components/tools/ToolsSidebar.jsx';
import { findToolItem, toolItems } from '../data/tools.js';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const percentFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 2,
});

const calculationModes = [
  { value: 'finalCapital', label: 'Endkapital' },
  { value: 'initialCapital', label: 'Anfangskapital' },
  { value: 'interestRate', label: 'Zinssatz' },
  { value: 'duration', label: 'Laufzeit' },
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

const toolsPrintLayout = {
  blockGap: 24,
  smallSafetyBuffer: 16,
};

function createInterestCalculation(id) {
  return {
    id,
    initialCapital: '',
    finalCapital: '',
    interestRate: '',
    durationYears: '',
    durationMonths: '',
  };
}

function clearInterestCalculation(calculation) {
  return {
    ...calculation,
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

function getCalculationTitle(index) {
  return `${index + 1}.`;
}

function getCalculationModeHint(calculationMode) {
  const hintByMode = {
    initialCapital: 'Die folgenden Berechnungen ermitteln das Anfangskapital.',
    interestRate: 'Die folgenden Berechnungen ermitteln den Zinssatz.',
    duration: 'Die folgenden Berechnungen ermitteln die Laufzeit.',
    finalCapital: 'Die folgenden Berechnungen ermitteln den Endbetrag.',
  };

  return hintByMode[calculationMode] ?? '';
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

function createInterestPrintItems({ blocks, hint, intro }) {
  return [
    { id: 'intro', text: intro, type: 'text' },
    { id: 'mode-hint', text: hint, type: 'text' },
    ...blocks.map((block) => ({ block, id: block.id, type: 'calculation' })),
  ].filter((item) => item.type !== 'text' || String(item.text || '').trim());
}

function createInterestPdfFileName() {
  return 'zinsberechnung.pdf';
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
            <button className="tools-remove-calculation" type="button" onClick={onRemove}>
              Vergleich entfernen
            </button>
          </div>
        )}
      </div>

      <div className="tools-calculator-layout">
        <section className="tools-calculator-panel" aria-label="Eingaben">
          <h2>Eingaben</h2>
          <div className={`tools-form-grid tools-form-grid-${calculationMode}`}>
            {calculationMode !== 'initialCapital' && (
              <label className="tools-field-initial-capital">
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
              <label className="tools-field-interest-rate">
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
              <div className="tools-duration-field tools-field-duration">
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
              <label className="tools-field-final-capital">
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
    </section>
  );
}

function InterestCalculator() {
  const sheetRef = useRef(null);
  const paginatorRef = useRef(null);
  const printPagesRef = useRef(null);
  const [calculationMode, setCalculationMode] = useState('finalCapital');
  const [nextCalculationId, setNextCalculationId] = useState(2);
  const [calculations, setCalculations] = useState([createInterestCalculation(1)]);
  const [isDocumentEditable, setIsDocumentEditable] = useState(false);
  const [isDataCheckActive, setIsDataCheckActive] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
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
        inputSummary: getCalculationInputSummary(calculationMode, result),
        result,
        resultValue: formatDocumentCalculatedValue(calculationMode, result),
        title: getCalculationTitle(index),
      };
    }),
    [calculationMode, calculations],
  );
  const documentCalculationHint = getCalculationModeHint(calculationMode);
  const printItems = useMemo(
    () => createInterestPrintItems({
      blocks: documentCalculationBlocks,
      hint: documentCalculationHint,
      intro: documentIntro,
    }),
    [documentCalculationBlocks, documentCalculationHint, documentIntro],
  );

  async function refreshPrintPages() {
    setIsExportRenderActive(true);
    await waitForNextFrame();

    const nextPages = paginatorRef.current?.measureNow();

    if (nextPages) {
      setPrintPages(nextPages);
      await waitForNextFrame();
    }
  }

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
      createInterestCalculation(nextCalculationId),
    ]);
    setNextCalculationId((currentId) => currentId + 1);
  }

  function removeCalculation(calculationId) {
    setCalculations((currentCalculations) => currentCalculations.filter(
      (calculation) => calculation.id !== calculationId,
    ));
  }

  function handleCalculationModeChange(nextCalculationMode) {
    setCalculationMode(nextCalculationMode);
    setCalculations((currentCalculations) => currentCalculations.map((calculation) => (
      clearInterestCalculation(calculation)
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

  async function handleCreatePdf() {
    setIsExporting(true);

    try {
      await refreshPrintPages();
      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'interestCalculation',
        filename: createInterestPdfFileName(),
      });
    } catch (error) {
      window.alert(
        `PDF konnte nicht erstellt werden. PrÃ¼fe bitte, ob die Vercel Function lokal oder auf Vercel verfÃ¼gbar ist.\n\n${error.message}`,
      );
    } finally {
      setIsExportRenderActive(false);
      setIsExporting(false);
    }
  }

  async function handlePrint() {
    await refreshPrintPages();
    document.body.classList.add('document-print-mode');
    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode');
      setIsExportRenderActive(false);
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
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
          isExporting={isExporting}
          onCreatePdf={handleCreatePdf}
          onPrint={handlePrint}
          onToggleDataCheck={() => setIsDataCheckActive((current) => !current)}
          onToggleEditable={() => setIsDocumentEditable((current) => !current)}
        />
        <div className="tools-document-preview">
          <A4Page
            ref={sheetRef}
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

            <p className="tools-letter-mode-hint">{documentCalculationHint}</p>

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

      {isExportRenderActive ? (
        <>
          <MeasuredInterestPaginator ref={paginatorRef} items={printItems} />
          <InterestPrintPages
            ref={printPagesRef}
            companyName={senderCompanyName}
            hiddenRecipientFields={recipientHiddenFields}
            pages={printPages}
            recipient={documentRecipient}
          />
        </>
      ) : null}
    </>
  );
}

const MeasuredInterestPaginator = forwardRef(function MeasuredInterestPaginator({ items }, ref) {
  const measureRootRef = useRef(null);

  function measureNow() {
    return measureInterestPages(measureRootRef.current, items);
  }

  useImperativeHandle(ref, () => ({ measureNow }), [items]);

  return (
    <div className="offer-measure-root" ref={measureRootRef} aria-hidden="true">
      <div className="invoice-print-page offer-print-page is-first-page">
        <div className="invoice-print-page-content" data-measure-first-content />
      </div>
      <div className="invoice-print-page offer-print-page is-follow-page">
        <div className="invoice-print-page-content" data-measure-follow-content />
      </div>
      <div className="offer-measure-content">
        <p className="invoice-print-flow-text" data-measure-text-probe />
        {items
          .filter((item) => item.type === 'calculation')
          .map((item) => (
            <InterestPrintCalculationBlock block={item.block} dataMeasureCalculation={String(item.id)} key={item.id} />
          ))}
      </div>
    </div>
  );
});

function measureInterestPages(measureRoot, items) {
  if (!measureRoot) {
    return null;
  }

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const calculationBlocks = new Map(
    [...measureRoot.querySelectorAll('[data-measure-calculation]')].map((block) => [
      block.dataset.measureCalculation,
      getOuterHeight(block),
    ]),
  );

  if (!firstContent || !followContent || !textProbe) {
    return null;
  }

  const firstPageCapacity = firstContent.getBoundingClientRect().height - toolsPrintLayout.smallSafetyBuffer;
  const followPageCapacity = followContent.getBoundingClientRect().height - toolsPrintLayout.smallSafetyBuffer;
  const blockGap =
    parseFloat(window.getComputedStyle(firstContent).getPropertyValue('gap')) || toolsPrintLayout.blockGap;

  function measureTextHeight(text) {
    textProbe.textContent = String(text || '').trim();
    return getOuterHeight(textProbe);
  }

  function getItemHeight(item) {
    if (item.type === 'text') {
      return measureTextHeight(item.text);
    }

    if (item.type === 'calculation') {
      return calculationBlocks.get(String(item.id)) || 0;
    }

    return 0;
  }

  function getItemGap(page) {
    return page.items.length > 0 ? blockGap : 0;
  }

  return paginateMeasuredItems({
    items,
    firstPageCapacity,
    followPageCapacity,
    getItemHeight,
    getItemGap,
    splitTextItem: (item, availableHeight) => takeMeasuredText(item.text, availableHeight, measureTextHeight),
  });
}

const InterestPrintPages = forwardRef(function InterestPrintPages(
  { companyName, hiddenRecipientFields, pages, recipient },
  ref,
) {
  const totalPages = pages.length;

  return (
    <div className="invoice-print-pages offer-print-pages tools-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`invoice-print-page offer-print-page tools-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <InterestPrintFirstPageHeader
              companyName={companyName}
              hiddenRecipientFields={hiddenRecipientFields}
              recipient={recipient}
            />
          ) : (
            <InterestPrintContinuationHeader companyName={companyName} />
          )}

          <div className="invoice-print-page-content">
            <InterestPrintPageItems items={page.items} />
          </div>

          <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <footer className="invoice-print-footer tools-print-footer" aria-hidden="true" />
        </article>
      ))}
    </div>
  );
});

function InterestPrintFirstPageHeader({ companyName, hiddenRecipientFields, recipient }) {
  const recipientLines = [
    recipient.company,
    hiddenRecipientFields.includes('attention') ? '' : recipient.attention,
    hiddenRecipientFields.includes('name') ? '' : recipient.name,
    recipient.street,
    recipient.cityLine,
  ];

  return (
    <div className="offer-print-first-page-header">
      <header className="invoice-print-header tools-print-header">
        <div>
          <p className="invoice-print-company-name">{companyName}</p>
        </div>
        <div aria-hidden="true" />
      </header>

      <section className="invoice-print-address-row tools-print-address-row">
        <div className="invoice-print-recipient">
          {recipientLines.filter(Boolean).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div aria-hidden="true" />
      </section>

      <h2 className="invoice-print-title">Zinsberechnung</h2>
    </div>
  );
}

function InterestPrintContinuationHeader({ companyName }) {
  return (
    <header className="invoice-print-header invoice-print-continuation-header">
      <p className="invoice-print-company-name">{companyName}</p>
    </header>
  );
}

function InterestPrintPageItems({ items }) {
  return items.map((item, index) => {
    if (item.type === 'text') {
      return (
        <p className="invoice-print-flow-text" key={`${item.id}-${index}`}>
          {item.text}
        </p>
      );
    }

    if (item.type === 'calculation') {
      return <InterestPrintCalculationBlock block={item.block} key={item.id} />;
    }

    return null;
  });
}

function InterestPrintCalculationBlock({ block, dataMeasureCalculation }) {
  const measureProps = dataMeasureCalculation ? { 'data-measure-calculation': dataMeasureCalculation } : {};

  return (
    <article className="tools-print-calculation-block" {...measureProps}>
      <h3>{block.title}</h3>
      {block.result.status === 'success' ? (
        <div className="tools-print-calculation-grid">
          <dl className="tools-print-calculation-inputs">
            {block.inputSummary.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="tools-print-calculation-result">
            <span>Ergebnis</span>
            <strong>{block.resultValue}</strong>
          </div>
        </div>
      ) : (
        <p className="invoice-print-flow-text">{block.result.message}</p>
      )}
    </article>
  );
}

function getOuterHeight(element) {
  if (!element) {
    return 0;
  }

  const styles = window.getComputedStyle(element);
  const marginTop = parseFloat(styles.marginTop) || 0;
  const marginBottom = parseFloat(styles.marginBottom) || 0;

  return element.getBoundingClientRect().height + marginTop + marginBottom;
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
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
