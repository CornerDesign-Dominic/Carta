import { useEffect, useRef } from 'react';
import { resizeTextarea } from '../../utils/resizeTextarea.js';
import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

export default function PositionTable({
  autoResizeDescription = false,
  calculatePosition,
  dataCheckPositions = {},
  formatCurrency,
  isTextInvoice = false,
  labels,
  onLabelChange,
  onMovePosition,
  onPositionChange,
  onRemovePosition,
  positions,
  showTaxColumn = true,
  variant = 'offer',
}) {
  const descriptionLabel = isTextInvoice && labels.description === 'Beschreibung'
    ? 'Leistungsbeschreibung'
    : labels.description;
  const unitPriceLabel = isTextInvoice && labels.unitPrice === 'Einzelpreis'
    ? 'Betrag'
    : labels.unitPrice;
  const tableLabels = [
    ['position', 'Tabellenkopf Position'],
    ['description', 'Tabellenkopf Beschreibung', descriptionLabel],
    ['unitPrice', 'Tabellenkopf Betrag', unitPriceLabel],
    ...(!isTextInvoice
      ? [
          ['quantity', 'Tabellenkopf Anzahl'],
          ['unit', 'Tabellenkopf Einheit'],
        ]
      : []),
    ...(showTaxColumn ? [['tax', 'Tabellenkopf Umsatzsteuer']] : []),
    ['total', 'Tabellenkopf Gesamt'],
  ];
  const descriptionRefs = useRef({});

  useEffect(() => {
    if (!autoResizeDescription) {
      return;
    }

    positions.forEach((position) => {
      resizeTextarea(descriptionRefs.current[position.id]);
    });
  }, [autoResizeDescription, positions, showTaxColumn]);

  return (
    <table className={`offer-position-table invoice-position-table document-position-table-${variant}${showTaxColumn ? '' : ' is-without-tax-column'}${isTextInvoice ? ' is-text-invoice' : ''}`}>
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
              <td>
                {autoResizeDescription ? (
                  <textarea
                    ref={(element) => {
                      descriptionRefs.current[position.id] = element;
                      resizeTextarea(element);
                    }}
                    className={`invoice-position-description${dataCheckPositions[position.id]?.description ? ' document-data-check-marker' : ''}`}
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
                    className={dataCheckPositions[position.id]?.description ? 'document-data-check-marker' : undefined}
                    aria-label={`${isTextInvoice ? 'Leistungsbeschreibung' : 'Beschreibung'} Position ${index + 1}`}
                    value={position.description}
                    onChange={(event) => onPositionChange(position.id, 'description', event.target.value)}
                  />
                )}
              </td>
              {isTextInvoice && (
                <td>
                  <input
                    className={dataCheckPositions[position.id]?.unit ? 'document-data-check-marker' : undefined}
                    aria-label={`Mengen- oder Zeitangabe Position ${index + 1}`}
                    value={position.unit}
                    onChange={(event) => onPositionChange(position.id, 'unit', event.target.value)}
                  />
                </td>
              )}
              <td>
                <input
                  className={`${isTextInvoice ? 'invoice-position-amount-input' : ''}${dataCheckPositions[position.id]?.unitPrice ? ' document-data-check-marker' : ''}`.trim() || undefined}
                  aria-label={`${isTextInvoice ? 'Betrag' : 'Einzelpreis'} Position ${index + 1}`}
                  inputMode="decimal"
                  type="text"
                  value={position.unitPrice}
                  onChange={(event) => onPositionChange(position.id, 'unitPrice', event.target.value)}
                />
              </td>
              {!isTextInvoice && (
                <>
                  <td>
                    <input
                      className={dataCheckPositions[position.id]?.quantity ? 'document-data-check-marker' : undefined}
                      aria-label={`Anzahl Position ${index + 1}`}
                      inputMode="decimal"
                      type="text"
                      value={position.quantity}
                      onChange={(event) => onPositionChange(position.id, 'quantity', event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className={dataCheckPositions[position.id]?.unit ? 'document-data-check-marker' : undefined}
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
                      className={dataCheckPositions[position.id]?.taxRate ? 'document-data-check-marker' : undefined}
                      aria-label={`Umsatzsteuer Position ${index + 1}`}
                      inputMode="decimal"
                      type="text"
                      value={position.taxRate}
                      onChange={(event) => onPositionChange(position.id, 'taxRate', event.target.value)}
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
