export default function OpenItemsTable({
  dateInputRefs,
  items,
  labels,
  onAddItem,
  onDatePicker,
  onItemChange,
  onLabelChange,
  onRemoveItem,
}) {
  return (
    <>
      <table className="offer-position-table invoice-position-table reminder-invoice-table">
        <thead>
          <tr>
            {[
              ['invoiceNumber', 'Tabellenkopf Rechnungsnummer'],
              ['dueDate', 'Tabellenkopf Faelligkeitsdatum'],
              ['overdueDays', 'Tabellenkopf Faelligkeitstage'],
              ['invoiceTotal', 'Tabellenkopf Rechnungsbetrag brutto'],
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
              <td>
                <input
                  aria-label={`Rechnungsnummer ${index + 1}`}
                  value={item.invoiceNumber}
                  onChange={(event) => onItemChange(item.id, 'invoiceNumber', event.target.value)}
                />
              </td>
              <td>
                <span className="invoice-date-field">
                  <input
                    ref={(element) => {
                      dateInputRefs.current[`dueDate-${item.id}`] = element;
                    }}
                    className="invoice-date-input"
                    aria-label={`Faelligkeitsdatum ${index + 1}`}
                    type="date"
                    value={item.dueDate}
                    onChange={(event) => onItemChange(item.id, 'dueDate', event.target.value)}
                  />
                  <button
                    className="invoice-icon-action invoice-date-picker"
                    type="button"
                    aria-label={`Faelligkeitsdatum ${index + 1} auswaehlen`}
                    onClick={() => onDatePicker(`dueDate-${item.id}`)}
                  >
                    <span aria-hidden="true" />
                  </button>
                </span>
              </td>
              <td>
                <input
                  aria-label={`Faelligkeitstage ${index + 1}`}
                  inputMode="numeric"
                  type="text"
                  value={item.overdueDays}
                  onChange={(event) => onItemChange(item.id, 'overdueDays', event.target.value)}
                />
              </td>
              <td>
                <input
                  aria-label={`Rechnungsbetrag brutto ${index + 1}`}
                  inputMode="decimal"
                  type="text"
                  value={item.amount}
                  onChange={(event) => onItemChange(item.id, 'amount', event.target.value)}
                />
              </td>
              <td>
                <button
                  aria-label={`Offenen Posten ${index + 1} loeschen`}
                  className="offer-remove"
                  type="button"
                  disabled={items.length === 1}
                  onClick={() => onRemoveItem(item.id)}
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="offer-add-position" type="button" onClick={onAddItem}>
        + Rechnung hinzufuegen
      </button>
    </>
  );
}
