import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

export default function OpenItemsTable({
  dateInputRefs,
  items,
  labels,
  onAddItem,
  onDatePicker,
  onItemChange,
  onLabelChange,
  onMoveItem,
  onRemoveItem,
}) {
  return (
    <>
      <table className="offer-position-table invoice-position-table reminder-invoice-table">
        <thead>
          <tr>
            {[
              ['invoiceNumber', 'Tabellenkopf Rechnungsnummer'],
              ['dueDate', 'Tabellenkopf Fälligkeitsdatum'],
              ['overdueDays', 'Tabellenkopf Verzugstage'],
              ['invoiceTotal', 'Tabellenkopf Rechnungsbetrag'],
            ].map(([field, ariaLabel]) => (
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
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="reminder-open-item-number-cell">
                <span className="invoice-position-actions">
                  <button
                    aria-label={`Offenen Posten ${index + 1} loeschen`}
                    className="invoice-position-action invoice-position-delete"
                    type="button"
                    disabled={items.length === 1}
                    onClick={() => onRemoveItem(item.id)}
                  >
                    &times;
                  </button>
                  {onMoveItem && (
                    <>
                      <button
                        aria-label={`Offenen Posten ${index + 1} nach oben verschieben`}
                        className="invoice-position-action"
                        type="button"
                        disabled={index === 0}
                        onClick={() => onMoveItem(item.id, -1)}
                      >
                        <MoveUpIcon />
                      </button>
                      <button
                        aria-label={`Offenen Posten ${index + 1} nach unten verschieben`}
                        className="invoice-position-action"
                        type="button"
                        disabled={index === items.length - 1}
                        onClick={() => onMoveItem(item.id, 1)}
                      >
                        <MoveDownIcon />
                      </button>
                    </>
                  )}
                </span>
                <input
                  aria-label={`Rechnungsnummer ${index + 1}`}
                  value={item.invoiceNumber}
                  onChange={(event) => onItemChange(item.id, 'invoiceNumber', event.target.value)}
                />
              </td>
              <td>
                <span className="invoice-date-field">
                  <span className="invoice-date-display" aria-hidden="true">
                    {formatGermanDate(item.dueDate)}
                  </span>
                  <input
                    ref={(element) => {
                      dateInputRefs.current[`dueDate-${item.id}`] = element;
                    }}
                    className="invoice-date-input"
                    aria-label={`Fälligkeitsdatum ${index + 1}`}
                    type="date"
                    value={item.dueDate}
                    onChange={(event) => onItemChange(item.id, 'dueDate', event.target.value)}
                  />
                  <button
                    className="invoice-icon-action invoice-date-picker"
                    type="button"
                    aria-label={`Fälligkeitsdatum ${index + 1} auswählen`}
                    onClick={() => onDatePicker(`dueDate-${item.id}`)}
                  >
                    <span aria-hidden="true" />
                  </button>
                </span>
              </td>
              <td>
                <input
                  aria-label={`Verzugstage ${index + 1}`}
                  inputMode="numeric"
                  type="text"
                  value={item.overdueDays}
                  onChange={(event) => onItemChange(item.id, 'overdueDays', event.target.value)}
                />
              </td>
              <td>
                <input
                  aria-label={`Rechnungsbetrag ${index + 1}`}
                  inputMode="decimal"
                  type="text"
                  value={item.amount}
                  onChange={(event) => onItemChange(item.id, 'amount', event.target.value)}
                />
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>

      <button className="offer-add-position" type="button" onClick={onAddItem}>
        + Rechnung hinzufügen
      </button>
    </>
  );
}
