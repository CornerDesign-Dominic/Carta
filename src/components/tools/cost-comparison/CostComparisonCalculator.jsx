import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
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
import { paginateMeasuredItems, takeMeasuredText } from '../document/toolPagination.js';
import {
  calculateCostComparison,
  costComparisonModes,
  createCostComparisonPdfFileName,
  createCostComparisonVariant,
  createCostComparisonVariants,
  formatCurrency,
  formatMonths,
  getCostComparisonDocumentHint,
  getCostComparisonDocumentTitle,
  getCostComparisonTableRows,
  maxCostComparisonVariants,
  minCostComparisonVariants,
} from './costComparisonUtils.js';

const defaultCostDocumentRecipient = {
  company: 'Max Mustermann GmbH',
  attention: 'z. H. Max Mustermann',
  name: 'Buchhaltung',
  street: 'Musterstraße 12',
  cityLine: '12345 Musterstadt',
};

const defaultCostSenderCompanyName = 'Belege24 Muster GmbH';
const defaultCostDocumentSenderLine = 'Carta Muster GmbH - Musterweg 1 - 10115 Berlin';
const defaultCostDocumentIntro =
  'Hiermit erhalten Sie eine Übersicht der verglichenen Varianten auf Grundlage der angegebenen Werte.';

const toolsPrintLayout = {
  blockGap: 10,
  smallSafetyBuffer: 16,
};

function resizeToolsTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export default function CostComparisonCalculator() {
  const sheetRef = useRef(null);
  const documentIntroRef = useRef(null);
  const documentHintRef = useRef(null);
  const paginatorRef = useRef(null);
  const printPagesRef = useRef(null);
  const [comparisonMode, setComparisonMode] = useState('cost');
  const [nextVariantId, setNextVariantId] = useState(3);
  const [variants, setVariants] = useState(() => createCostComparisonVariants('cost'));
  const [isDocumentEditable, setIsDocumentEditable] = useState(false);
  const [isDataCheckActive, setIsDataCheckActive] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [senderCompanyName, setSenderCompanyName] = useState(defaultCostSenderCompanyName);
  const [documentDate, setDocumentDate] = useState(createTodayDateValue);
  const [documentRecipient, setDocumentRecipient] = useState(defaultCostDocumentRecipient);
  const [recipientHiddenFields, setRecipientHiddenFields] = useState([]);
  const [documentSenderLine, setDocumentSenderLine] = useState(defaultCostDocumentSenderLine);
  const [documentIntro, setDocumentIntro] = useState(defaultCostDocumentIntro);
  const [documentHint, setDocumentHint] = useState(() => getCostComparisonDocumentHint('cost'));
  const [documentTitle, setDocumentTitle] = useState(() => getCostComparisonDocumentTitle('cost'));
  const results = useMemo(
    () => calculateCostComparison(variants, comparisonMode),
    [comparisonMode, variants],
  );
  const tableRows = useMemo(
    () => getCostComparisonTableRows(comparisonMode, variants, results),
    [comparisonMode, results, variants],
  );
  const printItems = useMemo(
    () => [
      { id: 'intro', text: documentIntro, type: 'text' },
      { id: 'hint', text: documentHint, type: 'text' },
      { id: 'table', type: 'table' },
    ].filter((item) => item.type !== 'text' || String(item.text || '').trim()),
    [documentHint, documentIntro],
  );
  const canAddVariant = variants.length < maxCostComparisonVariants;

  useEffect(() => {
    resizeToolsTextarea(documentIntroRef.current);
  }, [documentIntro]);

  useEffect(() => {
    setDocumentHint(getCostComparisonDocumentHint(comparisonMode));
    setDocumentTitle(getCostComparisonDocumentTitle(comparisonMode));
  }, [comparisonMode]);

  useEffect(() => {
    resizeToolsTextarea(documentHintRef.current);
  }, [documentHint]);

  async function refreshPrintPages() {
    setIsExportRenderActive(true);
    await waitForNextFrame();

    const nextPages = paginatorRef.current?.measureNow();

    if (nextPages) {
      setPrintPages(nextPages);
      await waitForNextFrame();
    }
  }

  function updateVariant(variantId, field, value) {
    setVariants((currentVariants) => currentVariants.map((variant) => (
      variant.id === variantId ? { ...variant, [field]: value } : variant
    )));
  }

  function addVariant() {
    if (!canAddVariant) {
      return;
    }

    setVariants((currentVariants) => [
      ...currentVariants,
      createCostComparisonVariant(nextVariantId, currentVariants.length, comparisonMode),
    ]);
    setNextVariantId((currentId) => currentId + 1);
  }

  function removeVariant(variantId) {
    setVariants((currentVariants) => {
      if (currentVariants.length <= minCostComparisonVariants) {
        return currentVariants;
      }

      return currentVariants.filter((variant) => variant.id !== variantId);
    });
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
        documentType: 'costComparison',
        filename: createCostComparisonPdfFileName(),
      });
    } catch (error) {
      window.alert(
        `PDF konnte nicht erstellt werden. Prüfe bitte, ob die Vercel Function lokal oder auf Vercel verfügbar ist.\n\n${error.message}`,
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

  function handleModeChange(nextMode) {
    if (nextMode === comparisonMode) {
      return;
    }

    setComparisonMode(nextMode);
    setVariants((currentVariants) => currentVariants.map((variant, index) => (
      createCostComparisonVariant(variant.id, index, nextMode)
    )));
  }

  return (
    <>
      <h1 id="tools-title">Kostenvergleich</h1>

      <div className="tools-mode-selector" aria-label="Vergleichsart auswählen">
        {costComparisonModes.map((mode) => (
          <button
            className={comparisonMode === mode.value ? 'is-active' : undefined}
            type="button"
            aria-pressed={comparisonMode === mode.value}
            onClick={() => handleModeChange(mode.value)}
            key={mode.value}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="tools-calculation-list tools-calculation-list-compact">
        <section className="tools-calculation-section" aria-labelledby="cost-comparison-calculation">
          <div className="tools-calculation-header">
            <h2 id="cost-comparison-calculation">Varianten vergleichen</h2>
          </div>

          <div className="tools-cost-variant-list">
            {variants.map((variant, index) => (
              <CostVariantCard
                canRemove={variants.length > minCostComparisonVariants}
                comparisonMode={comparisonMode}
                index={index}
                key={variant.id}
                onChange={(field, value) => updateVariant(variant.id, field, value)}
                onRemove={() => removeVariant(variant.id)}
                result={results[index]}
                variant={variant}
              />
            ))}
          </div>

          <div className="tools-add-calculation">
            {canAddVariant ? (
              <button type="button" onClick={addVariant}>
                Variante hinzufügen
              </button>
            ) : (
              <p>Maximal 5 Varianten möglich.</p>
            )}
          </div>
        </section>
      </div>

      <section className="tools-document-preview-section" aria-label="Dokumentvorschau">
        <div className="tools-document-preview-divider" aria-hidden="true" />
        <ToolToolbar
          ariaLabel="Kostenvergleich Werkzeuge"
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
            ariaLabel="Dokumentvorschau Kostenvergleich"
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
            </div>

            <ToolDocumentTitle value={documentTitle} onChange={setDocumentTitle} />

            <ToolTextBlock
              ref={documentIntroRef}
              ariaLabel="Vorlauftext Kostenvergleich"
              className="tools-letter-intro"
              value={documentIntro}
              onChange={(value, event) => {
                setDocumentIntro(value);
                resizeToolsTextarea(event.target);
              }}
            />

            <ToolTextBlock
              ref={documentHintRef}
              ariaLabel="Hinweistext Kostenvergleich"
              className="tools-letter-mode-hint"
              rows={1}
              value={documentHint}
              onChange={(value, event) => {
                setDocumentHint(value);
                resizeToolsTextarea(event.target);
              }}
            />

            <CostComparisonDocumentTable rows={tableRows} variants={variants} />
          </ToolA4Page>
        </div>
      </section>

      {isExportRenderActive ? (
        <>
          <MeasuredCostComparisonPaginator
            ref={paginatorRef}
            items={printItems}
            rows={tableRows}
            variants={variants}
          />
          <CostComparisonPrintPages
            ref={printPagesRef}
            companyName={senderCompanyName}
            documentDate={documentDate}
            documentTitle={documentTitle}
            hiddenRecipientFields={recipientHiddenFields}
            pages={printPages}
            recipient={documentRecipient}
            rows={tableRows}
            variants={variants}
          />
        </>
      ) : null}
    </>
  );
}

function CostVariantCard({ canRemove, comparisonMode, index, onChange, onRemove, result, variant }) {
  const isCostRevenueMode = comparisonMode === 'costRevenue';

  function handlePositiveNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (nextValue === '' || Number(nextValue) >= 0) {
        onChange(field, nextValue);
      }
    };
  }

  function handleWholeNumberChange(field) {
    return (event) => {
      const nextValue = event.target.value;

      if (/^\d*$/.test(nextValue)) {
        onChange(field, nextValue);
      }
    };
  }

  return (
    <section
      className={`tools-cost-variant${result?.isBest ? ' is-cheapest' : ''}`}
      aria-labelledby={`cost-variant-${variant.id}`}
    >
      <div className="tools-calculation-header">
        <h3 id={`cost-variant-${variant.id}`}>Variante {index + 1}</h3>
        {canRemove && (
          <div className="tools-calculation-actions">
            <button className="tools-remove-calculation" type="button" onClick={onRemove}>
              Variante entfernen
            </button>
          </div>
        )}
      </div>

      <div className="tools-calculator-layout tools-cost-variant-layout">
        <section className="tools-calculator-panel" aria-label={`Eingaben Variante ${index + 1}`}>
          <h2>Eingaben</h2>
          {isCostRevenueMode ? (
            <div className="tools-cost-group-list">
              <InputGroup title="Variante">
                <TextField
                  label="Bezeichnung"
                  value={variant.label}
                  onChange={(value) => onChange('label', value)}
                />
              </InputGroup>

              <InputGroup title="Maschine / Investition">
                <MoneyField
                  label="Anschaffungskosten"
                  value={variant.acquisitionCost}
                  onChange={handlePositiveNumberChange('acquisitionCost')}
                />
                <MoneyField
                  label="Restwert"
                  value={variant.residualValue}
                  onChange={handlePositiveNumberChange('residualValue')}
                />
                <DurationField
                  onMonthsChange={handleWholeNumberChange('termMonths')}
                  onYearsChange={handleWholeNumberChange('termYears')}
                  months={variant.termMonths}
                  years={variant.termYears}
                />
              </InputGroup>

              <InputGroup title="Laufende Fixkosten">
                <MoneyField
                  label="Laufende Kosten pro Monat"
                  value={variant.monthlyCost}
                  onChange={handlePositiveNumberChange('monthlyCost')}
                />
                <MoneyField
                  label="Mtl. Lohnkosten"
                  value={variant.payrollCost}
                  onChange={handlePositiveNumberChange('payrollCost')}
                />
              </InputGroup>

              <InputGroup title="Stück / Ertrag">
                <WholeNumberField
                  label="Stückzahl"
                  value={variant.quantity}
                  onChange={handleWholeNumberChange('quantity')}
                />
                <MoneyField
                  label="Einzelsonderkosten pro Stück"
                  value={variant.specialCost}
                  onChange={handlePositiveNumberChange('specialCost')}
                />
                <MoneyField
                  label="Verkaufsertrag pro Stück"
                  value={variant.revenuePerUnit}
                  onChange={handlePositiveNumberChange('revenuePerUnit')}
                />
              </InputGroup>
            </div>
          ) : (
            <div className="tools-form-grid tools-form-grid-cost-comparison">
              <TextField
                className="tools-field-cost-label"
                label="Bezeichnung"
                value={variant.label}
                onChange={(value) => onChange('label', value)}
              />
              <MoneyField
                className="tools-field-cost-acquisition"
                label="Anschaffungskosten"
                value={variant.acquisitionCost}
                onChange={handlePositiveNumberChange('acquisitionCost')}
              />
              <MoneyField
                className="tools-field-cost-monthly"
                label="Laufende Kosten pro Monat"
                value={variant.monthlyCost}
                onChange={handlePositiveNumberChange('monthlyCost')}
              />
              <DurationField
                className="tools-field-cost-duration"
                onMonthsChange={handleWholeNumberChange('termMonths')}
                onYearsChange={handleWholeNumberChange('termYears')}
                months={variant.termMonths}
                years={variant.termYears}
              />
              <MoneyField
                className="tools-field-cost-residual"
                label="Restwert"
                value={variant.residualValue}
                onChange={handlePositiveNumberChange('residualValue')}
              />
            </div>
          )}
        </section>

        <section className="tools-result-panel" aria-label={`Ergebnis Variante ${index + 1}`}>
          <h2>Ergebnis</h2>
          {result.status === 'success' ? (
            isCostRevenueMode ? (
              <CostRevenueResult result={result} />
            ) : (
              <CostResult result={result} />
            )
          ) : (
            <p className="tools-result-empty">{result.message}</p>
          )}
        </section>
      </div>
    </section>
  );
}

function InputGroup({ children, title }) {
  return (
    <fieldset className="tools-input-group">
      <legend>{title}</legend>
      <div className="tools-form-grid tools-form-grid-cost-comparison">
        {children}
      </div>
    </fieldset>
  );
}

function TextField({ className = '', label, onChange, value }) {
  return (
    <label className={className}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function MoneyField({ className = '', label, onChange, value }) {
  return (
    <label className={className}>
      <span>{label}</span>
      <input
        inputMode="decimal"
        min="0"
        type="number"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function WholeNumberField({ className = '', label, onChange, value }) {
  return (
    <label className={className}>
      <span>{label}</span>
      <input
        inputMode="numeric"
        min="0"
        type="number"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function DurationField({ className = '', months, onMonthsChange, onYearsChange, years }) {
  return (
    <div className={`tools-duration-field${className ? ` ${className}` : ''}`}>
      <span>Nutzungsdauer</span>
      <div className="tools-duration-inputs">
        <label>
          <span>Jahre</span>
          <input
            inputMode="numeric"
            min="0"
            type="number"
            value={years}
            onChange={onYearsChange}
          />
        </label>
        <label>
          <span>Monate</span>
          <input
            inputMode="numeric"
            min="0"
            type="number"
            value={months}
            onChange={onMonthsChange}
          />
        </label>
      </div>
    </div>
  );
}

function CostResult({ result }) {
  return (
    <>
      <div className="tools-result-highlight">
        <span>{result.isBest ? 'Günstigste Variante' : 'Gesamtkosten'}</span>
        <strong>{formatCurrency(result.totalCost)}</strong>
      </div>

      <dl>
        <div>
          <dt>Kosten pro Monat</dt>
          <dd>{formatCurrency(result.monthlyAverageCost)}</dd>
        </div>
        <div>
          <dt>Kosten pro Jahr</dt>
          <dd>{formatCurrency(result.yearlyAverageCost)}</dd>
        </div>
        <div>
          <dt>Laufzeit</dt>
          <dd>{formatMonths(result.totalMonths)}</dd>
        </div>
      </dl>
    </>
  );
}

function CostRevenueResult({ result }) {
  return (
    <>
      <div className="tools-result-highlight">
        <span>{result.isBest ? 'Wirtschaftlichste Variante' : 'Gewinn/Verlust'}</span>
        <strong>{formatCurrency(result.profit)}</strong>
      </div>

      <dl>
        <div>
          <dt>Gesamtkosten</dt>
          <dd>{formatCurrency(result.totalCost)}</dd>
        </div>
        <div>
          <dt>Gesamtertrag</dt>
          <dd>{formatCurrency(result.totalRevenue)}</dd>
        </div>
        <div>
          <dt>Kosten pro Stück</dt>
          <dd>{formatCurrency(result.costPerUnit)}</dd>
        </div>
        <div>
          <dt>Ertrag pro Stück</dt>
          <dd>{formatCurrency(result.revenuePerUnit)}</dd>
        </div>
      </dl>
    </>
  );
}

function CostComparisonDocumentTable({ rows, variants }) {
  return (
    <section className="tools-cost-document-table-wrap" aria-label="Kostenvergleich Tabelle">
      <table className="tools-cost-document-table">
        <thead>
          <tr>
            <th>Beschreibung</th>
            {variants.map((variant, index) => (
              <th key={variant.id}>{variant.label || `Variante ${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th>{row.label}</th>
              {row.values.map((value, index) => (
                <td key={`${row.label}-${variants[index]?.id ?? index}`}>{value || '–'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const MeasuredCostComparisonPaginator = forwardRef(function MeasuredCostComparisonPaginator(
  { items, rows, variants },
  ref,
) {
  const measureRootRef = useRef(null);

  function measureNow() {
    return measureCostComparisonPages(measureRootRef.current, items);
  }

  useImperativeHandle(ref, () => ({ measureNow }), [items]);

  return (
    <div className="tool-document-measure-root" ref={measureRootRef} aria-hidden="true">
      <div className="tool-print-page is-first-page">
        <div className="tool-print-page-content" data-measure-first-content />
      </div>
      <div className="tool-print-page is-follow-page">
        <div className="tool-print-page-content" data-measure-follow-content />
      </div>
      <div className="tool-document-measure-content">
        <p className="tool-print-flow-text" data-measure-text-probe />
        <CostComparisonPrintTable rows={rows} variants={variants} dataMeasureTable="table" />
      </div>
    </div>
  );
});

function measureCostComparisonPages(measureRoot, items) {
  if (!measureRoot) {
    return null;
  }

  const firstContent = measureRoot.querySelector('[data-measure-first-content]');
  const followContent = measureRoot.querySelector('[data-measure-follow-content]');
  const textProbe = measureRoot.querySelector('[data-measure-text-probe]');
  const tableProbe = measureRoot.querySelector('[data-measure-table]');

  if (!firstContent || !followContent || !textProbe || !tableProbe) {
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

    if (item.type === 'table') {
      return getOuterHeight(tableProbe);
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

const CostComparisonPrintPages = forwardRef(function CostComparisonPrintPages(
  { companyName, documentDate, documentTitle, hiddenRecipientFields, pages, recipient, rows, variants },
  ref,
) {
  const totalPages = pages.length;

  return (
    <div className="tool-print-pages tools-print-pages" ref={ref} aria-hidden="true">
      {pages.map((page) => (
        <article
          className={`tool-print-page tools-print-page${
            page.pageNumber === 1 ? ' is-first-page' : ' is-follow-page'
          }`}
          key={page.pageNumber}
        >
          {page.pageNumber === 1 ? (
            <CostComparisonPrintFirstPageHeader
              companyName={companyName}
              documentDate={documentDate}
              documentTitle={documentTitle}
              hiddenRecipientFields={hiddenRecipientFields}
              recipient={recipient}
            />
          ) : (
            <CostComparisonPrintContinuationHeader companyName={companyName} documentDate={documentDate} />
          )}

          <div className="tool-print-page-content">
            <CostComparisonPrintPageItems items={page.items} rows={rows} variants={variants} />
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

function CostComparisonPrintFirstPageHeader({ companyName, documentDate, documentTitle, hiddenRecipientFields, recipient }) {
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

function CostComparisonPrintContinuationHeader({ companyName, documentDate }) {
  return (
    <header className="tool-print-header tool-print-continuation-header">
      <p className="tool-print-company-name">{companyName}</p>
      <p className="tool-print-date">{formatToolDocumentDate(documentDate)}</p>
    </header>
  );
}

function CostComparisonPrintPageItems({ items, rows, variants }) {
  return items.map((item, index) => {
    if (item.type === 'text') {
      return (
        <p className="tool-print-flow-text" key={`${item.id}-${index}`}>
          {item.text}
        </p>
      );
    }

    if (item.type === 'table') {
      return <CostComparisonPrintTable rows={rows} variants={variants} key={item.id} />;
    }

    return null;
  });
}

function CostComparisonPrintTable({ dataMeasureTable, rows, variants }) {
  const measureProps = dataMeasureTable ? { 'data-measure-table': dataMeasureTable } : {};

  return (
    <section className="tools-print-cost-table-wrap" {...measureProps}>
      <table className="tools-print-cost-table">
        <thead>
          <tr>
            <th>Beschreibung</th>
            {variants.map((variant, index) => (
              <th key={variant.id}>{variant.label || `Variante ${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th>{row.label}</th>
              {row.values.map((value, index) => (
                <td key={`${row.label}-${variants[index]?.id ?? index}`}>{value || '–'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
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
