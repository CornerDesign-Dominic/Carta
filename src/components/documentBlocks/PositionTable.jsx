import { useEffect, useRef, useState } from 'react';
import { resizeTextarea } from '../../utils/resizeTextarea.js';
import { getDataCheckClassName } from '../../utils/documentDataCheck.js';
import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

export function normalizeTaxRateInput(value, fallback = '19') {
  const numericValue = Number.parseFloat(
    String(value)
      .replace(/[^\d,.-]/g, '')
      .replace(/\.(?=\d{3}(?:\D|$))/g, '')
      .replace(',', '.'),
  );

  if (!Number.isFinite(numericValue) || numericValue < 0 || numericValue > 100) {
    return fallback;
  }

  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
  }).format(numericValue);
}

export function formatTaxRateInputValue(value) {
  return String(value ?? '').replace(/%/g, '').trim();
}

function getInvoiceColumnWidths({ isGoodsInvoice, showTaxColumn }) {
  if (isGoodsInvoice) {
    return showTaxColumn
      ? ['5%', '17.4378%', '37.8%', '11.2%', '5.2%', '8.5622%', '4.8%', '10%', '0']
      : ['5%', '17.4378%', '42.6%', '11.2%', '5.2%', '8.5622%', '10%', '0'];
  }

  return showTaxColumn
    ? ['5.5%', '42.7378%', '13.5%', '8.5%', '9.2622%', '6.5%', '14%', '0']
    : ['5.5%', '49.7378%', '13.5%', '8.5%', '9.2622%', '14%', '0'];
}

export default function PositionTable({
  autoResizeDescription = false,
  calculatePosition,
  dataCheckPositions = {},
  formatCurrency,
  normalizeTaxRateOnBlur = false,
  isGoodsInvoice = false,
  isTextInvoice = false,
  formatUnitPriceOnBlur = false,
  labels,
  onLabelChange,
  onMovePosition,
  onPositionChange,
  onRemovePosition,
  positions,
  showTaxColumn = true,
  useInvoiceColumnWidths = false,
  variant = 'offer',
}) {
  const [focusedAmountPositionId, setFocusedAmountPositionId] = useState(null);
  const descriptionLabel = isTextInvoice && labels.description === 'Beschreibung'
    ? 'Leistungsbeschreibung'
    : labels.description;
  const unitPriceLabel = isTextInvoice && labels.unitPrice === 'Einzelpreis'
    ? 'Betrag'
    : labels.unitPrice;
  const tableLabels = [
    ['position', 'Tabellenkopf Position'],
    ...(isGoodsInvoice ? [['articleNumber', 'Tabellenkopf Artikelnummer', 'Artikel-Nr.']] : []),
    ['description', 'Tabellenkopf Beschreibung', descriptionLabel],
    ['unitPrice', 'Tabellenkopf Betrag', unitPriceLabel],
    ...(!isTextInvoice
      ? [
          ['quantity', 'Tabellenkopf Anzahl', isGoodsInvoice ? 'Anz.' : undefined],
          ['unit', 'Tabellenkopf Einheit'],
        ]
      : []),
    ...(showTaxColumn ? [['tax', 'Tabellenkopf Umsatzsteuer']] : []),
    ['total', 'Tabellenkopf Gesamt'],
  ];
  const descriptionRefs = useRef({});
  const invoiceColumnWidths = useInvoiceColumnWidths && !isTextInvoice
    ? getInvoiceColumnWidths({ isGoodsInvoice, showTaxColumn })
    : [];

  function normalizeAmountInput(value, fallback = '0,00') {
    const numericValue = Number.parseFloat(
      String(value)
        .replace(/[^\d,.-]/g, '')
        .replace(/\.(?=\d{3}(?:\D|$))/g, '')
        .replace(',', '.'),
    );

    if (!Number.isFinite(numericValue)) {
      return fallback;
    }

    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);
  }

  function handleTextInvoiceTaxChange(positionId, value) {
    if (/^\s*\d*(?:[,.]\d*)?\s*%?\s*$/.test(value)) {
      onPositionChange(positionId, 'taxRate', value);
    }
  }

  function handleTableFocusCapture(event) {
    const target = event.target;
    const isAmountInput = target instanceof HTMLInputElement
      && (
        target.getAttribute('aria-label')?.startsWith('Einzelpreis Position')
        || target.getAttribute('aria-label')?.startsWith('Betrag Position')
      );

    if (isAmountInput) {
      return;
    }

    if (isTextInvoice || formatUnitPriceOnBlur) {
      positions.forEach((position) => {
        const normalizedUnitPrice = normalizeAmountInput(position.unitPrice);

        if (normalizedUnitPrice !== position.unitPrice) {
          onPositionChange(position.id, 'unitPrice', normalizedUnitPrice);
        }
      });
    }

    setFocusedAmountPositionId(null);
  }

  useEffect(() => {
    if (!autoResizeDescription) {
      return;
    }

    positions.forEach((position) => {
      resizeTextarea(descriptionRefs.current[position.id]);
    });
  }, [autoResizeDescription, positions, showTaxColumn]);

  return (
    <table
      className={`offer-position-table invoice-position-table document-position-table-${variant}${showTaxColumn ? '' : ' is-without-tax-column'}${isTextInvoice ? ' is-text-invoice' : ''}${isGoodsInvoice ? ' is-goods-invoice' : ''}`}
      onFocusCapture={handleTableFocusCapture}
    >
      {invoiceColumnWidths.length > 0 && (
        <colgroup>
          {invoiceColumnWidths.map((width, index) => (
            <col key={`${width}-${index}`} style={{ width }} />
          ))}
        </colgroup>
      )}
      {!isTextInvoice && (
        <thead>
          <tr>
            {tableLabels.map(([field, ariaLabel, labelOverride]) => (
              <th key={field}>
                <input
                  className="document-label-input"
                  aria-label={ariaLabel}
                  value={labelOverride ?? labels[field]}
                  onChange={(event) => onLabelChange(field, event.target.value)}
                />
              </th>
            ))}
            <th />
          </tr>
        </thead>
      )}
      <tbody>
        {positions.map((position, index) => {
          const calculated = calculatePosition(position);
          const shouldFormatUnitPrice = isTextInvoice || formatUnitPriceOnBlur;
          const displayedUnitPrice = isTextInvoice
            ? formatCurrency(calculated.net)
            : formatCurrency(Number.parseFloat(
                String(position.unitPrice)
                  .replace(/[^\d,.-]/g, '')
                  .replace(/\.(?=\d{3}(?:\D|$))/g, '')
                  .replace(',', '.'),
              ) || 0);

          return (
            <tr key={position.id}>
              <td className="invoice-position-index-cell">
                <span className="invoice-position-actions">
                  <button
                    aria-label={`Position ${index + 1} löschen`}
                    className="invoice-position-action invoice-position-delete"
                    type="button"
                    disabled={positions.length === 1}
                    onClick={() => onRemovePosition(position.id)}
                  >
                    &times;
                  </button>
                  <button
                    aria-label={`Position ${index + 1} nach oben verschieben`}
                    className="invoice-position-action"
                    type="button"
                    disabled={index === 0}
                    onClick={() => onMovePosition(position.id, -1)}
                  >
                    <MoveUpIcon />
                  </button>
                  <button
                    aria-label={`Position ${index + 1} nach unten verschieben`}
                    className="invoice-position-action"
                    type="button"
                    disabled={index === positions.length - 1}
                    onClick={() => onMovePosition(position.id, 1)}
                  >
                    <MoveDownIcon />
                  </button>
                </span>
                {isTextInvoice ? '' : index + 1}
              </td>
              {isGoodsInvoice && (
                <td>
                  <input
                    className={getDataCheckClassName(dataCheckPositions[position.id]?.articleNumber)}
                    aria-label={`Artikelnummer Position ${index + 1}`}
                    value={position.articleNumber}
                    onChange={(event) => onPositionChange(position.id, 'articleNumber', event.target.value)}
                  />
                </td>
              )}
              <td>
                {autoResizeDescription ? (
                  <textarea
                    ref={(element) => {
                      descriptionRefs.current[position.id] = element;
                      resizeTextarea(element);
                    }}
                    className={getDataCheckClassName(dataCheckPositions[position.id]?.description, 'invoice-position-description')}
                    aria-label={`${isTextInvoice ? 'Leistungsbeschreibung' : 'Beschreibung'} Position ${index + 1}`}
                    rows={1}
                    value={position.description}
                    onChange={(event) => {
                      onPositionChange(position.id, 'description', event.target.value);
                      resizeTextarea(event.target);
                    }}
                  />
                ) : (
                  <input
                    className={getDataCheckClassName(dataCheckPositions[position.id]?.description)}
                    aria-label={`${isTextInvoice ? 'Leistungsbeschreibung' : 'Beschreibung'} Position ${index + 1}`}
                    value={position.description}
                    onChange={(event) => onPositionChange(position.id, 'description', event.target.value)}
                  />
                )}
              </td>
              {isTextInvoice && (
                <td>
                  <input
                    className={getDataCheckClassName(dataCheckPositions[position.id]?.unit)}
                    aria-label={`Mengen- oder Zeitangabe Position ${index + 1}`}
                    value={position.unit}
                    onChange={(event) => onPositionChange(position.id, 'unit', event.target.value)}
                  />
                </td>
              )}
              {showTaxColumn && isTextInvoice && (
                <td>
                  <input
                    className={getDataCheckClassName(dataCheckPositions[position.id]?.taxRate, 'invoice-position-tax-input')}
                    aria-label={`Umsatzsteuer Position ${index + 1}`}
                    inputMode="decimal"
                    type="text"
                    value={position.taxRate ?? '19 %'}
                    onChange={(event) => handleTextInvoiceTaxChange(position.id, event.target.value)}
                    onBlur={(event) => onPositionChange(position.id, 'taxRate', `${normalizeTaxRateInput(event.target.value)} %`)}
                  />
                </td>
              )}
              <td>
                <input
                  className={getDataCheckClassName(dataCheckPositions[position.id]?.unitPrice, isTextInvoice ? 'invoice-position-amount-input' : '')}
                  aria-label={`${isTextInvoice ? 'Betrag' : 'Einzelpreis'} Position ${index + 1}`}
                  inputMode="decimal"
                  type="text"
                  value={shouldFormatUnitPrice && focusedAmountPositionId !== position.id
                    ? displayedUnitPrice
                    : position.unitPrice}
                  onChange={(event) => onPositionChange(position.id, 'unitPrice', event.target.value)}
                  onBlur={(event) => {
                    if (shouldFormatUnitPrice) {
                      onPositionChange(position.id, 'unitPrice', normalizeAmountInput(event.target.value));
                      setFocusedAmountPositionId(null);
                    }
                  }}
                  onFocus={(event) => {
                    if (shouldFormatUnitPrice) {
                      setFocusedAmountPositionId(position.id);
                      event.target.select();
                    }
                  }}
                  onClick={(event) => {
                    if (shouldFormatUnitPrice) {
                      setFocusedAmountPositionId(position.id);
                      event.target.select();
                    }
                  }}
                />
              </td>
              {!isTextInvoice && (
                <>
                  <td>
                    <input
                      className={getDataCheckClassName(dataCheckPositions[position.id]?.quantity)}
                      aria-label={`Anzahl Position ${index + 1}`}
                      inputMode="decimal"
                      type="text"
                      value={position.quantity}
                      onChange={(event) => onPositionChange(position.id, 'quantity', event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className={getDataCheckClassName(dataCheckPositions[position.id]?.unit)}
                      aria-label={`Einheit Position ${index + 1}`}
                      value={position.unit}
                      onChange={(event) => onPositionChange(position.id, 'unit', event.target.value)}
                    />
                  </td>
                </>
              )}
              {showTaxColumn && !isTextInvoice && (
                <td>
                  <span className="invoice-tax-rate-cell">
                    <input
                      className={getDataCheckClassName(dataCheckPositions[position.id]?.taxRate)}
                      aria-label={`Umsatzsteuer Position ${index + 1}`}
                      inputMode="decimal"
                      type="text"
                      value={normalizeTaxRateOnBlur ? formatTaxRateInputValue(position.taxRate) : position.taxRate}
                      onChange={(event) => onPositionChange(position.id, 'taxRate', event.target.value)}
                      onBlur={(event) => {
                        if (normalizeTaxRateOnBlur) {
                          onPositionChange(position.id, 'taxRate', normalizeTaxRateInput(event.target.value));
                        }
                      }}
                    />
                    <span>%</span>
                  </span>
                </td>
              )}
              {!isTextInvoice && <td>{formatCurrency(calculated.net)}</td>}
              <td />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
