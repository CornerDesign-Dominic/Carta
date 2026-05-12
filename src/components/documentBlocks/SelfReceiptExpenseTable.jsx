import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

export default function SelfReceiptExpenseTable({
  calculatePosition,
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
    ['expensePositionDate', 'Tabellenkopf Datum'],
    ['category', 'Tabellenkopf Kategorie'],
    ['description', 'Tabellenkopf Beschreibung'],
    ['netAmount', 'Tabellenkopf Betrag netto'],
    ['tax', 'Tabellenkopf Umsatzsteuer'],
    ['grossAmount', 'Tabellenkopf Betrag brutto'],
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
          <th />
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
                    aria-label={`Position ${index + 1} loeschen`}
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
                <input
                  aria-label={`Datum Position ${index + 1}`}
                  type="date"
                  value={position.expenseDate}
                  onChange={(event) => onPositionChange(position.id, 'expenseDate', event.target.value)}
                />
              </td>
              <td>
                <input
                  aria-label={`Kategorie Position ${index + 1}`}
                  value={position.category}
                  onChange={(event) => onPositionChange(position.id, 'category', event.target.value)}
                />
              </td>
              <td>
                <textarea
                  ref={(element) => {
                    textareaRefs.current[position.id] = element;
                  }}
                  aria-label={`Beschreibung Position ${index + 1}`}
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
