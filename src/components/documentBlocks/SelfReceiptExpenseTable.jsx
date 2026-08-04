import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

export default function SelfReceiptExpenseTable({
  calculatePosition,
  dataCheckPositions = {},
  formatCurrency,
  labels,
  onLabelChange,
  onMovePosition,
  onPositionChange,
  onRemovePosition,
  onResizeTextarea,
  positions,
  textareaRefs,
}) {
  const tableLabels = [
    ['position', 'Tabellenkopf Position'],
    ['description', 'Tabellenkopf Beschreibung'],
    ['netAmount', 'Tabellenkopf Netto'],
    ['tax', 'Tabellenkopf Umsatzsteuer'],
    ['grossAmount', 'Tabellenkopf Brutto'],
  ];

  return (
    <table className="offer-position-table invoice-position-table self-receipt-expense-table">
      <thead>
        <tr>
          {tableLabels.map(([field, ariaLabel]) => (
            <th key={field}>
              <input
                className="document-label-input"
                aria-label={ariaLabel}
                value={labels[field]}
                onChange={(event) => onLabelChange(field, event.target.value)}
              />
            </th>
          ))}
        </tr>
      </thead>
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
                {index + 1}
              </td>
              <td>
                <textarea
                  ref={(element) => {
                    textareaRefs.current[position.id] = element;
                  }}
                  aria-label={`Beschreibung Position ${index + 1}`}
                  className={dataCheckPositions[position.id]?.description ? 'document-data-check-marker' : undefined}
                  value={position.description}
                  onChange={(event) => {
                    onPositionChange(position.id, 'description', event.target.value);
                    onResizeTextarea(event.target);
                  }}
                />
              </td>
              <td>
                <input
                  aria-label={`Nettobetrag Position ${index + 1}`}
                  className={dataCheckPositions[position.id]?.netAmount ? 'document-data-check-marker' : undefined}
                  inputMode="decimal"
                  type="text"
                  value={position.netAmount}
                  onChange={(event) => onPositionChange(position.id, 'netAmount', event.target.value)}
                />
              </td>
              <td>
                <span className="invoice-tax-rate-cell">
                  <input
                    aria-label={`Umsatzsteuer Position ${index + 1}`}
                    className={dataCheckPositions[position.id]?.taxRate ? 'document-data-check-marker' : undefined}
                    inputMode="decimal"
                    type="text"
                    value={position.taxRate}
                    onChange={(event) => onPositionChange(position.id, 'taxRate', event.target.value)}
                  />
                  <span>%</span>
                </span>
              </td>
              <td className="self-receipt-expense-total-cell">{formatCurrency(calculated.gross)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
