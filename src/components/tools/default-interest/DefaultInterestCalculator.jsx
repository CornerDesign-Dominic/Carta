import { forwardRef, useMemo, useRef, useState } from 'react';
import { requestPdfDownload } from '../../../utils/requestPdfDownload.js';
import ToolA4Page from '../document/ToolA4Page.jsx';
import ToolDocumentHeader, {
  createTodayDateValue,
  formatToolDocumentDate,
} from '../document/ToolDocumentHeader.jsx';
import ToolDocumentTitle from '../document/ToolDocumentTitle.jsx';
import ToolRecipientBlock from '../document/ToolRecipientBlock.jsx';
import ToolTextBlock from '../document/ToolTextBlock.jsx';
import ToolToolbar from '../document/ToolToolbar.jsx';
import {
  calculateDefaultInterest,
  createDefaultInterestCalculation,
  createDefaultInterestPdfFileName,
  defaultInterestRateOptions,
  formatCurrency,
  formatPercent,
} from './defaultInterestUtils.js';

const defaultDocumentRecipient = {
  company: 'Max Mustermann GmbH',
  attention: 'z. H. Max Mustermann',
  name: 'Buchhaltung',
  street: 'Musterstraße 12',
  cityLine: '12345 Musterstadt',
};

const defaultSenderCompanyName = 'Belege24 Muster GmbH';
const defaultDocumentSenderLine = 'Belege24 Muster GmbH - Musterweg 1 - 10115 Berlin';
const defaultDocumentTitle = 'Verzugszinsberechnung';
const defaultDocumentIntro =
  'Hiermit erhalten Sie eine Übersicht der berechneten Verzugszinsen auf Grundlage der angegebenen Werte.';
const defaultDocumentHint =
  'Die Berechnung berücksichtigt bei gesetzlichen Verzugszinsen die historischen Basiszinssätze je Zeitraum.';

const firstPagePeriodLimit = 12;
const followPagePeriodLimit = 24;

function resizeToolsTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export default function DefaultInterestCalculator() {
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const documentIntroRef = useRef(null);
  const documentHintRef = useRef(null);
  const [calculation, setCalculation] = useState(() => createDefaultInterestCalculation());
  const [isDocumentEditable, setIsDocumentEditable] = useState(false);
  const [isDataCheckActive, setIsDataCheckActive] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isPrintRenderActive, setIsPrintRenderActive] = useState(false);
  const [senderCompanyName, setSenderCompanyName] = useState(defaultSenderCompanyName);
  const [documentDate, setDocumentDate] = useState(createTodayDateValue);
  const [documentRecipient, setDocumentRecipient] = useState(defaultDocumentRecipient);
  const [recipientHiddenFields, setRecipientHiddenFields] = useState([]);
  const [documentSenderLine, setDocumentSenderLine] = useState(defaultDocumentSenderLine);
  const [documentIntro, setDocumentIntro] = useState(defaultDocumentIntro);
  const [documentHint, setDocumentHint] = useState(defaultDocumentHint);
  const [documentTitle, setDocumentTitle] = useState(defaultDocumentTitle);
  const result = useMemo(() => calculateDefaultInterest(calculation), [calculation]);
  const documentPages = useMemo(
    () => createDefaultInterestDocumentPages(result),
    [result],
  );

  function updateCalculation(field, value) {
    setCalculation((currentCalculation) => ({
      ...currentCalculation,
      [field]: value,
    }));
  }

  function clearCalculationFields() {
    setCalculation({
      amount: '',
      customRate: '',
      endDate: '',
      rateOption: '',
      startDate: '',
    });
  }

  function handlePositiveNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        updateCalculation(field, nextValue);
      }
    };
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
    setIsPrintRenderActive(true);
    await waitForNextFrame();

    try {
      await requestPdfDownload({
        sheet: sheetRef.current,
        exportRoot: printPagesRef.current,
        documentType: 'defaultInterest',
        filename: createDefaultInterestPdfFileName(),
      });
    } catch (error) {
      window.alert(
        `PDF konnte nicht erstellt werden. Prüfe bitte, ob die Vercel Function lokal oder auf Vercel verfügbar ist.\n\n${error.message}`,
      );
    } finally {
      setIsPrintRenderActive(false);
      setIsExporting(false);
    }
  }

  async function handlePrint() {
    setIsPrintRenderActive(true);
    await waitForNextFrame();
    document.body.classList.add('document-print-mode');
    window.print();

    const cleanup = () => {
      document.body.classList.remove('document-print-mode');
      setIsPrintRenderActive(false);
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  return (
    <>
      <h1 id="tools-title">Verzugszinsen berechnen</h1>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="default-interest-calculation">
          <div className="tools-calculation-header">
            <h2 id="default-interest-calculation">Verzugszinsen berechnen</h2>
          </div>

          <div className="tools-calculator-layout">
            <section className="tools-calculator-panel" aria-label="Eingaben">
              <div className="tools-panel-title-row">
                <h2>Eingaben</h2>
                <button className="tools-reset-variant" type="button" onClick={clearCalculationFields}>
                  Felder leeren
                </button>
              </div>
              <div className="tools-form-grid tools-form-grid-default-interest">
                <label className="tools-field-default-amount">
                  <span>Offener Betrag</span>
                  <input
                    inputMode="decimal"
                    min="0"
                    type="number"
                    value={calculation.amount}
                    onChange={handlePositiveNumberChange('amount')}
                  />
                </label>

                <label className="tools-field-default-rate-option">
                  <span>Zinssatz</span>
                  <select
                    value={calculation.rateOption}
                    onChange={(event) => updateCalculation('rateOption', event.target.value)}
                  >
                    {defaultInterestRateOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                {calculation.rateOption === 'custom' && (
                  <label className="tools-field-default-custom-rate">
                    <span>Zinssatz p.a. in %</span>
                    <input
                      inputMode="decimal"
                      min="0"
                      type="number"
                      value={calculation.customRate}
                      onChange={handlePositiveNumberChange('customRate')}
                    />
                  </label>
                )}

                <label className="tools-field-default-start-date">
                  <span>Verzugsbeginn</span>
                  <input
                    type="date"
                    value={calculation.startDate}
                    onChange={(event) => updateCalculation('startDate', event.target.value)}
                  />
                </label>

                <label className="tools-field-default-end-date">
                  <span>Zahlungs-/Berechnungsdatum</span>
                  <input
                    type="date"
                    value={calculation.endDate}
                    onChange={(event) => updateCalculation('endDate', event.target.value)}
                  />
                </label>
              </div>
            </section>

            <section className="tools-result-panel" aria-label="Ergebnis">
              <h2>Ergebnis</h2>
              {result.status === 'success' ? (
                <DefaultInterestResult calculation={calculation} result={result} />
              ) : (
                <p className="tools-result-empty">{result.message}</p>
              )}
            </section>
          </div>

          <p className="tools-external-note">
            Die Berechnung basiert auf der verwendeten Basiszinssatz-Tabelle.{' '}
            <a href="/basiszinssatz-tabelle" target="_blank" rel="noopener noreferrer">
              Zur verwendeten Basiszinssatz-Tabelle
            </a>
          </p>
        </section>
      </div>

      <section className="tools-document-preview-section" aria-label="Dokumentvorschau">
        <div className="tools-document-preview-divider" aria-hidden="true" />
        <ToolToolbar
          ariaLabel="Verzugszinsen Werkzeuge"
          isDataCheckActive={isDataCheckActive}
          isEditable={isDocumentEditable}
          isExporting={isExporting}
          onCreatePdf={handleCreatePdf}
          onPrint={handlePrint}
          onToggleDataCheck={() => setIsDataCheckActive((current) => !current)}
          onToggleEditable={() => setIsDocumentEditable((current) => !current)}
        />
        <div className="tools-document-preview">
          <ToolA4Page
            ref={sheetRef}
            ariaLabel="Dokumentvorschau Verzugszinsen"
            className={isDataCheckActive ? 'is-data-check-mode' : ''}
            editable={isDocumentEditable}
          >
            <ToolDocumentHeader
              dataCheckActive={isDataCheckActive}
              date={documentDate}
              senderCompanyName={senderCompanyName}
              onCompanyNameChange={setSenderCompanyName}
              onDateChange={setDocumentDate}
            />

            <div className="tool-document-address-row tools-letter-address-row">
              <div className="tools-letter-recipient-reserved">
                <ToolRecipientBlock
                  dataCheckFields={isDataCheckActive ? {
                    attention: true,
                    cityLine: true,
                    company: true,
                    name: true,
                    senderLine: true,
                    street: true,
                  } : {}}
                  hiddenFields={recipientHiddenFields}
                  recipient={documentRecipient}
                  senderLine={documentSenderLine}
                  onRecipientChange={updateDocumentRecipient}
                  onSenderLineChange={setDocumentSenderLine}
                  onToggleField={toggleRecipientField}
                />
              </div>
            </div>

            <ToolDocumentTitle value={documentTitle} onChange={setDocumentTitle} />

            <ToolTextBlock
              ref={documentIntroRef}
              ariaLabel="Vorlauftext Verzugszinsen"
              className="tools-letter-intro"
              value={documentIntro}
              onChange={(value, event) => {
                setDocumentIntro(value);
                resizeToolsTextarea(event.target);
              }}
            />

            <ToolTextBlock
              ref={documentHintRef}
              ariaLabel="Hinweistext Verzugszinsen"
              className="tools-letter-mode-hint"
              rows={1}
              value={documentHint}
              onChange={(value, event) => {
                setDocumentHint(value);
                resizeToolsTextarea(event.target);
              }}
            />

            <DefaultInterestDocumentContent calculation={calculation} result={result} />
          </ToolA4Page>
        </div>
      </section>

      {isPrintRenderActive ? (
        <DefaultInterestPrintPages
          ref={printPagesRef}
          calculation={calculation}
          companyName={senderCompanyName}
          documentDate={documentDate}
          documentHint={documentHint}
          documentIntro={documentIntro}
          documentPages={documentPages}
          documentTitle={documentTitle}
          hiddenRecipientFields={recipientHiddenFields}
          recipient={documentRecipient}
          result={result}
        />
      ) : null}
    </>
  );
}

function DefaultInterestResult({ result }) {
  return (
    <>
      <div className="tools-result-highlight">
        <span>Verzugszinsen</span>
        <strong>{formatCurrency(result.interestAmount)}</strong>
      </div>

      <dl>
        <div>
          <dt>Zinsart</dt>
          <dd>{result.modeLabel}</dd>
        </div>
        <div>
          <dt>Verzugstage</dt>
          <dd>{result.daysInDefault} Tage</dd>
        </div>
      </dl>
    </>
  );
}

function DefaultInterestDocumentContent({ calculation, result }) {
  return (
    <section className="tools-default-interest-document">
      {result.status === 'success' ? (
        <>
          <DefaultInterestInputSummary calculation={calculation} result={result} />
          <DefaultInterestPeriodTable periods={result.interestPeriods} />
          <DefaultInterestDocumentTotals result={result} />
        </>
      ) : (
        <p className="tools-default-interest-document-empty">{result.message}</p>
      )}
    </section>
  );
}

function DefaultInterestInputSummary({ calculation, result }) {
  return (
    <dl className="tools-default-interest-summary">
      <div>
        <dt>Offener Betrag</dt>
        <dd>{formatCurrency(result.amount)}</dd>
      </div>
      <div>
        <dt>Verzugsart</dt>
        <dd>{result.modeLabel}</dd>
      </div>
      <div>
        <dt>Verzugsbeginn</dt>
        <dd>{formatDate(calculation.startDate)}</dd>
      </div>
      <div>
        <dt>Berechnungsende</dt>
        <dd>{formatDate(calculation.endDate)}</dd>
      </div>
    </dl>
  );
}

function DefaultInterestPeriodTable({ periods }) {
  return (
    <div className="tools-default-interest-table-wrap">
      <table className="tools-default-interest-table">
        <thead>
          <tr>
            <th>Zeitraum</th>
            <th>Basiszins</th>
            <th>Aufschlag</th>
            <th>Zinssatz</th>
            <th>Tage</th>
            <th>Teilzins</th>
          </tr>
        </thead>
        <tbody>
          {periods.map((period, index) => (
            <tr key={`${period.validFrom}-${period.validTo}-${index}`}>
              <td>{formatDateRange(period)}</td>
              <td>{period.baseRate === null ? '–' : formatPercent(period.baseRate)}</td>
              <td>{period.baseRate === null ? '–' : formatPercent(period.interestRate - period.baseRate)}</td>
              <td>{formatPercent(period.interestRate)}</td>
              <td>{period.days}</td>
              <td>{formatCurrency(period.interestAmount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DefaultInterestDocumentTotals({ result }) {
  return (
    <dl className="tools-default-interest-totals">
      <div>
        <dt>Offener Betrag</dt>
        <dd>{formatCurrency(result.amount)}</dd>
      </div>
      <div>
        <dt>Summe Verzugszinsen</dt>
        <dd>{formatCurrency(result.interestAmount)}</dd>
      </div>
      <div>
        <dt>= Gesamtbetrag</dt>
        <dd>{formatCurrency(result.totalAmount)}</dd>
      </div>
    </dl>
  );
}

const DefaultInterestPrintPages = forwardRef(function DefaultInterestPrintPages(
  {
    calculation,
    companyName,
    documentDate,
    documentHint,
    documentIntro,
    documentPages,
    documentTitle,
    hiddenRecipientFields,
    recipient,
    result,
  },
  ref,
) {
  const totalPages = documentPages.length;

  return (
    <div className="tool-print-pages tools-print-pages" ref={ref} aria-hidden="true">
      {documentPages.map((page) => (
        <article
          className={`tool-print-page tools-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <DefaultInterestPrintFirstPageHeader
              companyName={companyName}
              documentDate={documentDate}
              documentTitle={documentTitle}
              hiddenRecipientFields={hiddenRecipientFields}
              recipient={recipient}
            />
          ) : (
            <DefaultInterestPrintContinuationHeader companyName={companyName} documentDate={documentDate} />
          )}

          <div className="tool-print-page-content">
            {page.includeIntro && (
              <>
                <p className="tool-print-flow-text">{documentIntro}</p>
                <p className="tool-print-flow-text">{documentHint}</p>
                {result.status === 'success' && <DefaultInterestInputSummary calculation={calculation} result={result} />}
              </>
            )}
            {result.status === 'success' ? (
              <>
                <DefaultInterestPeriodTable periods={page.periods} />
                {page.includeTotals && <DefaultInterestDocumentTotals result={result} />}
              </>
            ) : (
              <p className="tool-print-flow-text">{result.message}</p>
            )}
          </div>

          <p className={`tool-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>
            {totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}
          </p>

          <footer className="tool-print-footer tools-print-footer" aria-hidden="true" />
        </article>
      ))}
    </div>
  );
});

function DefaultInterestPrintFirstPageHeader({ companyName, documentDate, documentTitle, hiddenRecipientFields, recipient }) {
  const recipientLines = [
    hiddenRecipientFields.includes('company') ? '' : recipient.company,
    hiddenRecipientFields.includes('attention') ? '' : recipient.attention,
    hiddenRecipientFields.includes('name') ? '' : recipient.name,
    hiddenRecipientFields.includes('street') ? '' : recipient.street,
    hiddenRecipientFields.includes('cityLine') ? '' : recipient.cityLine,
  ];

  return (
    <div className="tool-print-first-page-header">
      <header className="tool-print-header tools-print-header">
        <div>
          <p className="tool-print-company-name">{companyName}</p>
        </div>
        <p className="tool-print-date">{formatToolDocumentDate(documentDate)}</p>
      </header>

      <section className="tool-print-address-row tools-print-address-row">
        <div className="tool-print-recipient">
          {recipientLines.filter(Boolean).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <h2 className="tool-print-title">{documentTitle}</h2>
    </div>
  );
}

function DefaultInterestPrintContinuationHeader({ companyName, documentDate }) {
  return (
    <header className="tool-print-header tool-print-continuation-header">
      <p className="tool-print-company-name">{companyName}</p>
      <p className="tool-print-date">{formatToolDocumentDate(documentDate)}</p>
    </header>
  );
}

function createDefaultInterestDocumentPages(result) {
  if (result.status !== 'success') {
    return [{ includeIntro: true, includeTotals: false, pageNumber: 1, periods: [] }];
  }

  const periods = result.interestPeriods;
  const pages = [];
  let cursor = 0;
  let pageNumber = 1;

  do {
    const limit = pageNumber === 1 ? firstPagePeriodLimit : followPagePeriodLimit;
    const nextPeriods = periods.slice(cursor, cursor + limit);
    cursor += nextPeriods.length;
    pages.push({
      includeIntro: pageNumber === 1,
      includeTotals: cursor >= periods.length,
      pageNumber,
      periods: nextPeriods,
    });
    pageNumber += 1;
  } while (cursor < periods.length);

  return pages;
}

function formatDate(value) {
  if (!value) {
    return '';
  }

  const [year, month, day] = String(value).split('-');

  if (!year || !month || !day) {
    return value;
  }

  return `${day}.${month}.${year}`;
}

function formatDateRange(period) {
  return `${formatDate(period.validFrom)} bis ${formatDate(period.validTo)}`;
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}
