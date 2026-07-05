import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { requestPdfDownload } from '../../../utils/requestPdfDownload.js';
import ToolA4Page from '../document/ToolA4Page.jsx';
import ToolRecipientBlock from '../document/ToolRecipientBlock.jsx';
import ToolTextBlock from '../document/ToolTextBlock.jsx';
import ToolToolbar from '../document/ToolToolbar.jsx';
import { paginateMeasuredItems, takeMeasuredText } from '../document/toolPagination.js';
import CompoundInterestCalculationCard from './CompoundInterestCalculationCard.jsx';
import {
  calculateCompoundInterestResult,
  createCompoundInterestCalculation,
  createCompoundInterestPdfFileName,
  createCompoundInterestPrintItems,
  formatCurrency,
  getCompoundInterestInputSummary,
  getCompoundInterestTitle,
  maxCompoundInterestCalculations,
} from './compoundInterestUtils.js';

const defaultCompoundInterestDocumentRecipient = {
  company: 'Max Mustermann GmbH',
  attention: 'z. H. Max Mustermann',
  name: 'Buchhaltung',
  street: 'Musterstraße 12',
  cityLine: '12345 Musterstadt',
};

const defaultCompoundInterestSenderCompanyName = 'Belege24 Muster GmbH';

const defaultCompoundInterestDocumentSenderLine = 'Carta Muster GmbH - Musterweg 1 - 10115 Berlin';

const defaultCompoundInterestDocumentIntro =
  'Hiermit erhalten Sie eine Übersicht der berechneten Zinseszinsentwicklung auf Grundlage der angegebenen Werte.';

const compoundInterestDocumentHint = 'Die folgenden Berechnungen zeigen Endkapital, eingezahltes Kapital und Zinsertrag.';

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

export default function CompoundInterestCalculator() {
  const sheetRef = useRef(null);
  const documentIntroRef = useRef(null);
  const paginatorRef = useRef(null);
  const printPagesRef = useRef(null);
  const [nextCalculationId, setNextCalculationId] = useState(2);
  const [calculations, setCalculations] = useState([createCompoundInterestCalculation(1)]);
  const [isDocumentEditable, setIsDocumentEditable] = useState(false);
  const [isDataCheckActive, setIsDataCheckActive] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [senderCompanyName, setSenderCompanyName] = useState(defaultCompoundInterestSenderCompanyName);
  const [documentRecipient, setDocumentRecipient] = useState(defaultCompoundInterestDocumentRecipient);
  const [recipientHiddenFields, setRecipientHiddenFields] = useState([]);
  const [documentSenderLine, setDocumentSenderLine] = useState(defaultCompoundInterestDocumentSenderLine);
  const [documentIntro, setDocumentIntro] = useState(defaultCompoundInterestDocumentIntro);
  const canAddCalculation = calculations.length < maxCompoundInterestCalculations;
  const documentCalculationBlocks = useMemo(
    () => calculations.map((calculation, index) => {
      const result = calculateCompoundInterestResult(calculation);

      return {
        id: calculation.id,
        inputSummary: getCompoundInterestInputSummary(result),
        result,
        resultValue: result.status === 'success' ? formatCurrency(result.finalCapital) : null,
        title: getCompoundInterestTitle(index),
      };
    }),
    [calculations],
  );
  const printItems = useMemo(
    () => createCompoundInterestPrintItems({
      blocks: documentCalculationBlocks,
      hint: compoundInterestDocumentHint,
      intro: documentIntro,
    }),
    [documentCalculationBlocks, documentIntro],
  );

  useEffect(() => {
    resizeToolsTextarea(documentIntroRef.current);
  }, [documentIntro]);

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
      createCompoundInterestCalculation(nextCalculationId),
    ]);
    setNextCalculationId((currentId) => currentId + 1);
  }

  function removeCalculation(calculationId) {
    setCalculations((currentCalculations) => {
      if (currentCalculations.length <= 1) {
        return currentCalculations;
      }

      return currentCalculations.filter((calculation) => calculation.id !== calculationId);
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
        documentType: 'compoundInterestCalculation',
        filename: createCompoundInterestPdfFileName(),
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

  return (
    <>
      <p className="eyebrow">WERKZEUGE</p>
      <h1 id="tools-title">Zinseszins</h1>

      <div className="tools-calculation-list">
        {calculations.map((calculation, index) => (
          <CompoundInterestCalculationCard
            calculation={calculation}
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
          <p>Maximal 5 Vergleichsberechnungen möglich.</p>
        )}
      </div>

      <section className="tools-document-preview-section" aria-label="Dokumentvorschau">
        <div className="tools-document-preview-divider" aria-hidden="true" />
        <ToolToolbar
          ariaLabel="Zinseszinsberechnung Werkzeuge"
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
            ariaLabel="Dokumentvorschau Zinseszinsberechnung"
            className={isDataCheckActive ? 'is-data-check-mode' : ''}
            editable={isDocumentEditable}
          >
            <header className="tool-document-header tools-letter-header">
              <div className="tool-document-editable-group tools-letter-company-field">
                <input
                  className={isDataCheckActive ? 'tool-document-data-check-marker' : undefined}
                  aria-label="Eigener Firmenname"
                  value={senderCompanyName}
                  onChange={(event) => setSenderCompanyName(event.target.value)}
                />
              </div>
            </header>

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

            <h2 className="tool-document-title tools-letter-subject">Zinseszinsberechnung</h2>

            <ToolTextBlock
              ref={documentIntroRef}
              ariaLabel="Vorlauftext Zinseszinsberechnung"
              className="tools-letter-intro"
              value={documentIntro}
              onChange={(value, event) => {
                setDocumentIntro(value);
                resizeToolsTextarea(event.target);
              }}
            />

            <p className="tools-letter-mode-hint">{compoundInterestDocumentHint}</p>

            <section className="tools-letter-result-summary" aria-label="Zinseszinsberechnung Ergebnis">
              {documentCalculationBlocks.map((block) => (
                <CompoundInterestDocumentCalculationBlock block={block} key={block.id} />
              ))}
            </section>
          </ToolA4Page>
        </div>
      </section>

      {isExportRenderActive ? (
        <>
          <MeasuredCompoundInterestPaginator ref={paginatorRef} items={printItems} />
          <CompoundInterestPrintPages
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

function CompoundInterestDocumentCalculationBlock({ block }) {
  return (
    <article className="tools-letter-calculation-block">
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
            <span>Endkapital</span>
            <strong>{block.resultValue}</strong>
          </div>
        </div>
      ) : (
        <p>{block.result.message}</p>
      )}
    </article>
  );
}

const MeasuredCompoundInterestPaginator = forwardRef(function MeasuredCompoundInterestPaginator({ items }, ref) {
  const measureRootRef = useRef(null);

  function measureNow() {
    return measureCompoundInterestPages(measureRootRef.current, items);
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
        {items
          .filter((item) => item.type === 'calculation')
          .map((item) => (
            <CompoundInterestPrintCalculationBlock
              block={item.block}
              dataMeasureCalculation={String(item.id)}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
});

function measureCompoundInterestPages(measureRoot, items) {
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

const CompoundInterestPrintPages = forwardRef(function CompoundInterestPrintPages(
  { companyName, hiddenRecipientFields, pages, recipient },
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
            <CompoundInterestPrintFirstPageHeader
              companyName={companyName}
              hiddenRecipientFields={hiddenRecipientFields}
              recipient={recipient}
            />
          ) : (
            <CompoundInterestPrintContinuationHeader companyName={companyName} />
          )}

          <div className="tool-print-page-content">
            <CompoundInterestPrintPageItems items={page.items} />
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

function CompoundInterestPrintFirstPageHeader({ companyName, hiddenRecipientFields, recipient }) {
  const recipientLines = [
    recipient.company,
    hiddenRecipientFields.includes('attention') ? '' : recipient.attention,
    hiddenRecipientFields.includes('name') ? '' : recipient.name,
    recipient.street,
    recipient.cityLine,
  ];

  return (
    <div className="tool-print-first-page-header">
      <header className="tool-print-header tools-print-header">
        <div>
          <p className="tool-print-company-name">{companyName}</p>
        </div>
      </header>

      <section className="tool-print-address-row tools-print-address-row">
        <div className="tool-print-recipient">
          {recipientLines.filter(Boolean).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <h2 className="tool-print-title">Zinseszinsberechnung</h2>
    </div>
  );
}

function CompoundInterestPrintContinuationHeader({ companyName }) {
  return (
    <header className="tool-print-header tool-print-continuation-header">
      <p className="tool-print-company-name">{companyName}</p>
    </header>
  );
}

function CompoundInterestPrintPageItems({ items }) {
  return items.map((item, index) => {
    if (item.type === 'text') {
      return (
        <p className="tool-print-flow-text" key={`${item.id}-${index}`}>
          {item.text}
        </p>
      );
    }

    if (item.type === 'calculation') {
      return <CompoundInterestPrintCalculationBlock block={item.block} key={item.id} />;
    }

    return null;
  });
}

function CompoundInterestPrintCalculationBlock({ block, dataMeasureCalculation }) {
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
            <span>Endkapital</span>
            <strong>{block.resultValue}</strong>
          </div>
        </div>
      ) : (
        <p className="tool-print-flow-text">{block.result.message}</p>
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
