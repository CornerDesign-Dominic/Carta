import { useEffect, useMemo, useRef } from 'react';
import A5LandscapePage from './documentBlocks/A5LandscapePage.jsx';
import { FieldActions, HiddenFieldActions } from './documentBlocks/FieldActions.jsx';

const signatureFields = [{ field: 'signature', label: '(Stempel/) Unterschrift' }];

function parseAmount(value) {
  const normalized = String(value ?? '').trim().replace(/\s/g, '').replace(/\./g, '').replace(',', '.');
  const parsed = Number.parseFloat(normalized);
  return normalized && Number.isFinite(parsed) ? parsed : null;
}

function formatAmount(value) {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function calculateAmounts(amount) {
  const source = parseAmount(amount.sourceAmount);
  const taxRate = parseAmount(amount.taxRate);

  if (source === null || taxRate === null) {
    return {
      netAmount: amount.calculationSource === 'netAmount' ? amount.sourceAmount : '',
      taxAmount: '',
      grossAmount: amount.calculationSource === 'grossAmount' ? amount.sourceAmount : '',
    };
  }

  if (amount.calculationSource === 'grossAmount') {
    const netAmount = source / (1 + Math.max(0, taxRate) / 100);
    return {
      netAmount: formatAmount(netAmount),
      taxAmount: formatAmount(source - netAmount),
      grossAmount: amount.sourceAmount,
    };
  }

  const taxAmount = source * (Math.max(0, taxRate) / 100);
  return {
    netAmount: amount.sourceAmount,
    taxAmount: formatAmount(taxAmount),
    grossAmount: formatAmount(source + taxAmount),
  };
}

function resizeTextarea(textarea) {
  if (!textarea) return;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export default function ShortSelfReceiptDocument({ data, editable, isDataCheckMode, onChange, onToggleSignature, pageRef }) {
  const textareaRefs = useRef({});
  const amounts = useMemo(() => calculateAmounts(data.amount), [data.amount]);
  const signatureHidden = data.fieldConfig.signature.hidden.includes('signature');

  useEffect(() => {
    Object.values(textareaRefs.current).forEach(resizeTextarea);
  }, [data.recipientAddress, data.purpose, data.reason, data.receiptNumber, data.title]);

  function update(field, value) {
    onChange({ ...data, [field]: value });
  }

  function updateAmount(field, value) {
    const calculationSource = field === 'grossAmount' ? 'grossAmount' : data.amount.calculationSource;
    onChange({
      ...data,
      amount: {
        ...data.amount,
        calculationSource,
        sourceAmount: field === 'grossAmount' || field === 'netAmount' ? value : data.amount.sourceAmount,
        taxRate: field === 'taxRate' ? value : data.amount.taxRate,
      },
    });
  }

  function formatEditedAmount(field) {
    const value = field === 'grossAmount' ? amounts.grossAmount : amounts.netAmount;
    const parsed = parseAmount(value);
    if (parsed === null) return;
    updateAmount(field, formatAmount(parsed));
  }

  return (
    <A5LandscapePage
      ref={pageRef}
      ariaLabel="Editierbarer Kurz-Eigenbeleg"
      className={`receipt-sheet short-self-receipt-sheet${isDataCheckMode ? ' is-data-check-mode' : ''}`}
      editable={editable}
    >
      <header className="receipt-header short-self-receipt-header">
        <div className="short-self-receipt-heading">
          <h2 className="invoice-document-title receipt-document-title">
            <textarea
              ref={(element) => { textareaRefs.current.title = element; }}
              className="document-label-input document-title-label"
              aria-label="Dokumenttitel"
              rows={1}
              wrap="soft"
              value={data.title}
              onChange={(event) => {
                update('title', event.target.value);
                resizeTextarea(event.target);
              }}
            />
          </h2>
          <textarea
            ref={(element) => { textareaRefs.current.receiptNumber = element; }}
            className="short-self-receipt-number"
            aria-label="Belegnummer"
            rows={1}
            wrap="soft"
            value={data.receiptNumber}
            onChange={(event) => {
              update('receiptNumber', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </div>

        <section className="receipt-amount-box short-self-receipt-amount-box" aria-label="Betragsdarstellung">
          <label>
            <span className="receipt-fixed-amount-label">Ausgaben netto:</span>
            <input
              aria-label="Ausgaben netto"
              value={amounts.netAmount}
              onChange={(event) => updateAmount('netAmount', event.target.value)}
              onBlur={() => formatEditedAmount('netAmount')}
            />
            <span className="receipt-amount-unit" aria-hidden="true">€</span>
          </label>
          <label className="short-self-receipt-tax-line">
            <span className="receipt-fixed-amount-label">
              zzgl.
              <input
                aria-label="Umsatzsteuersatz"
                value={data.amount.taxRate}
                onChange={(event) => updateAmount('taxRate', event.target.value)}
              />
              % MwSt:
            </span>
            <input className="receipt-readonly-amount" aria-label="Umsatzsteuerbetrag" value={amounts.taxAmount} readOnly />
            <span className="receipt-amount-unit" aria-hidden="true">€</span>
          </label>
          <label className="is-emphasized">
            <span className="receipt-fixed-amount-label">Ausgaben brutto:</span>
            <input
              aria-label="Ausgaben brutto"
              value={amounts.grossAmount}
              onChange={(event) => updateAmount('grossAmount', event.target.value)}
              onBlur={() => formatEditedAmount('grossAmount')}
            />
            <span className="receipt-amount-unit" aria-hidden="true">€</span>
          </label>
        </section>
      </header>

      <section className="receipt-lines" aria-label="Angaben zur Ausgabe">
        <label className="receipt-line-field short-self-receipt-recipient">
          <span className="receipt-line-label">Empfänger:</span>
          <textarea
            ref={(element) => { textareaRefs.current.recipientAddress = element; }}
            className="receipt-line-value"
            aria-label="Empfänger der Ausgabe"
            rows={1}
            wrap="soft"
            value={data.recipientAddress}
            onChange={(event) => {
              update('recipientAddress', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </label>
        <label className="receipt-line-field">
          <span className="receipt-line-label">Aufwand:</span>
          <textarea
            ref={(element) => { textareaRefs.current.purpose = element; }}
            className="receipt-line-value"
            aria-label="Aufwendung für"
            rows={1}
            wrap="soft"
            value={data.purpose}
            onChange={(event) => {
              update('purpose', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </label>
        <label className="receipt-line-field">
          <span className="receipt-line-label">Grund:</span>
          <textarea
            ref={(element) => { textareaRefs.current.reason = element; }}
            className="receipt-line-value"
            aria-label="Grund für Eigenbeleg"
            rows={1}
            wrap="soft"
            value={data.reason}
            onChange={(event) => {
              update('reason', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </label>
      </section>

      <section className={`receipt-bottom-row short-self-receipt-bottom${signatureHidden ? ' is-signature-hidden' : ''}`} aria-label="Datum und Unterschrift">
        <label className="short-self-receipt-line-field">
          <input aria-label="Datum" type="date" value={data.date} onChange={(event) => update('date', event.target.value)} />
          <span>Datum</span>
        </label>
        {!signatureHidden && (
          <div className="invoice-flow-config-row short-self-receipt-signature">
            <FieldActions label="(Stempel/) Unterschrift" onToggle={onToggleSignature} />
            <div className="short-self-receipt-line-field" aria-label="(Stempel/) Unterschrift">
              <div aria-hidden="true" />
              <span>(Stempel/) Unterschrift</span>
            </div>
          </div>
        )}
        <HiddenFieldActions
          className="short-self-receipt-hidden-signature"
          definitions={signatureFields}
          hiddenFields={signatureHidden ? ['signature'] : []}
          onToggle={onToggleSignature}
        />
      </section>
    </A5LandscapePage>
  );
}
