import { useEffect, useMemo, useRef } from 'react';
import A5LandscapePage from './documentBlocks/A5LandscapePage.jsx';
import { FieldActions, HiddenFieldActions } from './documentBlocks/FieldActions.jsx';
import { getDataCheckClassName } from '../utils/documentDataCheck.js';

const addressFields = [
  { field: 'company', label: 'Firma' },
  { field: 'streetLine', label: 'Straße und Hausnummer' },
  { field: 'cityLine', label: 'PLZ und Stadt' },
];

const defaultLineLabels = {
  receiptNumber: 'Belegnummer',
  reason: 'Grund für den Eigenbeleg',
  expenseDate: 'Tag der Ausgabe',
  purpose: 'Ausgabe für',
  location: 'Zahlungsempfänger\n(Name & Adresse)',
};

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

export default function ShortSelfReceiptDocument({
  data,
  editable,
  ownAddressDataCheckFields = {},
  isDataCheckMode,
  onChange,
  onOwnAddressChange,
  onToggleAddressField,
  onToggleNote,
  onToggleSignature,
  ownAddress,
  pageRef,
}) {
  const textareaRefs = useRef({});
  const expenseDateInputRef = useRef(null);
  const amounts = useMemo(() => calculateAmounts(data.amount), [data.amount]);
  const signatureHidden = data.fieldConfig.signature.hidden.includes('signature');
  const noteHidden = data.fieldConfig.note?.hidden.includes('note') ?? false;
  const hiddenAddressFields = data.fieldConfig.header?.hidden ?? [];
  const noteLabel = data.dateLabel ?? 'Vermerk';
  const signatureLabel = data.signatureLabel ?? 'Stempel / Unterschrift';
  const lineLabels = { ...defaultLineLabels, ...data.lineLabels };

  useEffect(() => {
    Object.values(textareaRefs.current).forEach(resizeTextarea);
  }, [data.date, data.lineLabels, data.location, data.recipientAddress, data.purpose, data.reason, data.receiptNumber, data.title]);

  function update(field, value) {
    onChange({ ...data, [field]: value });
  }

  function updateLineLabel(field, value) {
    onChange({
      ...data,
      lineLabels: { ...lineLabels, [field]: value },
    });
  }

  function openExpenseDatePicker() {
    expenseDateInputRef.current?.showPicker?.();
    expenseDateInputRef.current?.focus();
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
      <header className="receipt-header">
        <div className="receipt-header-address">
          {!hiddenAddressFields.includes('company') && (
            <div className="receipt-header-row editable-group">
              <input
                className={getDataCheckClassName(ownAddressDataCheckFields.company)}
                aria-label="Eigene Firma"
                value={ownAddress.company}
                onChange={(event) => onOwnAddressChange('company', event.target.value)}
              />
              <FieldActions label="Firma" onToggle={() => onToggleAddressField('company')} />
            </div>
          )}
          {!hiddenAddressFields.includes('streetLine') && (
            <div className="receipt-header-row">
              <input
                className={getDataCheckClassName(ownAddressDataCheckFields.street)}
                aria-label="Eigene Straße und Hausnummer"
                value={ownAddress.street}
                onChange={(event) => onOwnAddressChange('street', event.target.value)}
              />
              <FieldActions label="Straße und Hausnummer" onToggle={() => onToggleAddressField('streetLine')} />
            </div>
          )}
          {!hiddenAddressFields.includes('cityLine') && (
            <div className="receipt-header-row">
              <input
                className={getDataCheckClassName(ownAddressDataCheckFields.cityLine)}
                aria-label="Eigene PLZ und Stadt"
                value={ownAddress.cityLine}
                onChange={(event) => onOwnAddressChange('cityLine', event.target.value)}
              />
              <FieldActions label="PLZ und Stadt" onToggle={() => onToggleAddressField('cityLine')} />
            </div>
          )}
          <HiddenFieldActions
            className="receipt-header-hidden-fields"
            definitions={addressFields}
            hiddenFields={hiddenAddressFields}
            onToggle={onToggleAddressField}
          />
        </div>

        <div className="receipt-header-summary">
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
          <section className="receipt-amount-box short-self-receipt-amount-box" aria-label="Betragsdarstellung">
            <label>
              <span className="document-label-input receipt-fixed-amount-label">Netto Betrag</span>
              <input
                aria-label="Netto Betrag"
                value={amounts.netAmount}
                onChange={(event) => updateAmount('netAmount', event.target.value)}
                onBlur={() => formatEditedAmount('netAmount')}
              />
              <span className="receipt-amount-unit" aria-hidden="true">€</span>
            </label>
            <label className="receipt-tax-line">
              <span className="document-label-input receipt-fixed-amount-label">USt.-Satz:</span>
              <input
                aria-label="Umsatzsteuersatz"
                value={data.amount.taxRate}
                onChange={(event) => updateAmount('taxRate', event.target.value)}
              />
              <span className="receipt-amount-unit" aria-hidden="true">%</span>
            </label>
            <label>
              <span className="document-label-input receipt-fixed-amount-label">USt.-Betrag:</span>
              <input className="receipt-readonly-amount" aria-label="Umsatzsteuerbetrag" value={amounts.taxAmount} readOnly />
              <span className="receipt-amount-unit" aria-hidden="true">€</span>
            </label>
            <label className="is-emphasized">
              <span className="document-label-input receipt-fixed-amount-label">Brutto Gesamtbetrag</span>
              <input
                aria-label="Brutto Gesamtbetrag"
                value={amounts.grossAmount}
                onChange={(event) => updateAmount('grossAmount', event.target.value)}
                onBlur={() => formatEditedAmount('grossAmount')}
              />
              <span className="receipt-amount-unit" aria-hidden="true">€</span>
            </label>
          </section>
        </div>
      </header>

      <section className="receipt-lines" aria-label="Angaben zur Ausgabe">
        <label className="receipt-line-field">
          <textarea
            ref={(element) => { textareaRefs.current.receiptNumberLabel = element; }}
            className="document-label-input receipt-line-label"
            aria-label="Beschriftung Belegnummer"
            rows={1}
            value={lineLabels.receiptNumber}
            onChange={(event) => {
              updateLineLabel('receiptNumber', event.target.value);
              resizeTextarea(event.target);
            }}
          />
          <textarea
            ref={(element) => { textareaRefs.current.receiptNumber = element; }}
            className="receipt-line-value short-self-receipt-number"
            aria-label="Belegnummer"
            rows={1}
            wrap="soft"
            value={data.receiptNumber}
            onChange={(event) => {
              update('receiptNumber', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </label>
        <label className="receipt-line-field">
          <textarea
            ref={(element) => { textareaRefs.current.reasonLabel = element; }}
            className="document-label-input receipt-line-label"
            aria-label="Beschriftung Grund für den Eigenbeleg"
            rows={1}
            value={lineLabels.reason}
            onChange={(event) => {
              updateLineLabel('reason', event.target.value);
              resizeTextarea(event.target);
            }}
          />
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
        <label className="receipt-line-field">
          <textarea
            ref={(element) => { textareaRefs.current.expenseDateLabel = element; }}
            className="document-label-input receipt-line-label"
            aria-label="Beschriftung Tag der Ausgabe"
            rows={1}
            value={lineLabels.expenseDate}
            onChange={(event) => {
              updateLineLabel('expenseDate', event.target.value);
              resizeTextarea(event.target);
            }}
          />
          <span className="short-self-receipt-expense-date-field">
            <input
              ref={expenseDateInputRef}
              className="receipt-line-value short-self-receipt-expense-date"
              aria-label="Tag der Ausgabe"
              type="date"
              value={data.expenseDate}
              onChange={(event) => update('expenseDate', event.target.value)}
            />
            <button
              className="invoice-icon-action invoice-date-picker"
              type="button"
              aria-label="Datum auswählen"
              onClick={openExpenseDatePicker}
            >
              <span aria-hidden="true" />
            </button>
          </span>
        </label>
        <label className="receipt-line-field">
          <textarea
            ref={(element) => { textareaRefs.current.purposeLabel = element; }}
            className="document-label-input receipt-line-label"
            aria-label="Beschriftung Ausgabe für"
            rows={1}
            value={lineLabels.purpose}
            onChange={(event) => {
              updateLineLabel('purpose', event.target.value);
              resizeTextarea(event.target);
            }}
          />
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
        <label className="receipt-line-field short-self-receipt-recipient-field">
          <textarea
            ref={(element) => { textareaRefs.current.locationLabel = element; }}
            className="document-label-input receipt-line-label"
            aria-label="Beschriftung Zahlungsempfänger"
            rows={2}
            value={lineLabels.location}
            onChange={(event) => {
              updateLineLabel('location', event.target.value);
              resizeTextarea(event.target);
            }}
          />
          <textarea
            ref={(element) => { textareaRefs.current.location = element; }}
            className="receipt-line-value"
            aria-label="Zahlungsempfänger mit Name und Adresse"
            rows={1}
            wrap="soft"
            value={data.location}
            onChange={(event) => {
              update('location', event.target.value);
              resizeTextarea(event.target);
            }}
          />
        </label>
      </section>

      <section className={`receipt-bottom-row short-self-receipt-bottom${noteHidden ? ' is-note-hidden' : ''}${signatureHidden ? ' is-signature-hidden' : ''}`} aria-label="Vermerk und Unterschrift">
        {!noteHidden && (
          <div className="invoice-flow-config-row receipt-bottom-field short-self-receipt-date-field">
            <FieldActions label={noteLabel || 'Vermerk'} onToggle={onToggleNote} />
            <input
              className="document-label-input"
              aria-label="Beschriftung Vermerk"
              value={noteLabel}
              onChange={(event) => update('dateLabel', event.target.value)}
            />
            <textarea
              ref={(element) => { textareaRefs.current.note = element; }}
              className="short-self-receipt-note-input"
              aria-label={noteLabel || 'Vermerk'}
              rows={1}
              wrap="soft"
              value={data.date}
              onChange={(event) => {
                update('date', event.target.value);
                resizeTextarea(event.target);
              }}
            />
          </div>
        )}
        {!signatureHidden && (
          <div className="invoice-flow-config-row receipt-bottom-field short-self-receipt-signature">
            <FieldActions label={signatureLabel || 'Unterschrift'} onToggle={onToggleSignature} />
            <input
              className="document-label-input"
              aria-label="Beschriftung Unterschrift"
              value={signatureLabel}
              onChange={(event) => update('signatureLabel', event.target.value)}
            />
            <textarea
              className="short-self-receipt-signature-input"
              aria-label={signatureLabel || 'Unterschrift'}
              value={data.signatureValue ?? ''}
              onChange={(event) => update('signatureValue', event.target.value)}
            />
          </div>
        )}
        <HiddenFieldActions
          className="short-self-receipt-hidden-bottom-fields"
          definitions={[
            { field: 'note', label: noteLabel || 'Vermerk' },
            { field: 'signature', label: signatureLabel || 'Unterschrift' },
          ]}
          hiddenFields={[
            ...(noteHidden ? ['note'] : []),
            ...(signatureHidden ? ['signature'] : []),
          ]}
          onToggle={(field) => (field === 'note' ? onToggleNote() : onToggleSignature())}
        />
      </section>
    </A5LandscapePage>
  );
}
