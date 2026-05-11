import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

export default function PositionTable({
  calculatePosition,
  formatCurrency,
  labels,
  onLabelChange,
  onMovePosition,
  onPositionChange,
  onRemovePosition,
  positions,
  variant = 'offer',
}) {
  const tableLabels = [
    ['position', 'Tabellenkopf Position'],
    ['description', 'Tabellenkopf Beschreibung'],
    ['unitPrice', 'Tabellenkopf Einzelpreis'],
    ['quantity', 'Tabellenkopf Anzahl'],
    ['unit', 'Tabellenkopf Einheit'],
    ['tax', 'Tabellenkopf Umsatzsteuer'],
    ['total', 'Tabellenkopf Gesamt'],
  ];

  return (
    <table className={`offer-position-table invoice-position-table document-position-table-${variant}`}>
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
                <input
                  aria-label={`Beschreibung Position ${index + 1}`}
                  value={position.description}
                  onChange={(event) => onPositionChange(position.id, 'description', event.target.value)}
                />
              </td>
              <td>
                <input
                  aria-label={`Einzelpreis Position ${index + 1}`}
                  inputMode="decimal"
                  type="text"
                  value={position.unitPrice}
                  onChange={(event) => onPositionChange(position.id, 'unitPrice', event.target.value)}
                />
              </td>
              <td>
                <input
                  aria-label={`Anzahl Position ${index + 1}`}
                  inputMode="decimal"
                  type="text"
                  value={position.quantity}
                  onChange={(event) => onPositionChange(position.id, 'quantity', event.target.value)}
                />
              </td>
              <td>
                <input
                  aria-label={`Einheit Position ${index + 1}`}
                  value={position.unit}
                  onChange={(event) => onPositionChange(position.id, 'unit', event.target.value)}
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
              <td>{formatCurrency(calculated.net)}</td>
              <td />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
