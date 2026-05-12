import { useEffect, useRef } from 'react';
import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

function resizeTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export default function DeliveryNoteTable({
  dateInputRefs,
  labels,
  onDatePicker,
  onLabelChange,
  onMovePosition,
  onPositionChange,
  onRemovePosition,
  positions,
}) {
  const textareaRefs = useRef({});

  useEffect(() => {
    Object.values(textareaRefs.current).forEach((textarea) => resizeTextarea(textarea));
  }, [positions]);

  return (
    <table className="offer-position-table invoice-position-table delivery-note-table">
      <thead>
        <tr>
          {[
            ['position', 'Tabellenkopf Position'],
            ['quantity', 'Tabellenkopf Menge'],
            ['unit', 'Tabellenkopf Einheit'],
            ['description', 'Tabellenkopf Artikel oder Leistung'],
            ['deliveryDate', 'Tabellenkopf Lieferdatum'],
            ['note', 'Tabellenkopf Hinweis'],
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
        {positions.map((position, index) => (
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
                aria-label={`Menge Position ${index + 1}`}
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
              <textarea
                ref={(element) => {
                  textareaRefs.current[`description-${position.id}`] = element;
                }}
                className="invoice-position-description delivery-note-position-description"
                aria-label={`Artikel oder Leistung Position ${index + 1}`}
                rows={1}
                value={position.description}
                onChange={(event) => {
                  onPositionChange(position.id, 'description', event.target.value);
                  resizeTextarea(event.target);
                }}
              />
            </td>
            <td>
              <span className="invoice-date-field">
                <span className="invoice-date-display" aria-hidden="true">
                  {formatGermanDate(position.deliveryDate)}
                </span>
                <input
                  ref={(element) => {
                    dateInputRefs.current[`deliveryDate-${position.id}`] = element;
                  }}
                  className="invoice-date-input"
                  aria-label={`Lieferdatum Position ${index + 1}`}
                  type="date"
                  value={position.deliveryDate}
                  onChange={(event) => onPositionChange(position.id, 'deliveryDate', event.target.value)}
                />
                <button
                  className="invoice-icon-action invoice-date-picker"
                  type="button"
                  aria-label={`Lieferdatum Position ${index + 1} auswaehlen`}
                  onClick={() => onDatePicker(`deliveryDate-${position.id}`)}
                >
                  <span aria-hidden="true" />
                </button>
              </span>
            </td>
            <td>
              <textarea
                ref={(element) => {
                  textareaRefs.current[`note-${position.id}`] = element;
                }}
                className="invoice-position-description delivery-note-position-note"
                aria-label={`Hinweis Position ${index + 1}`}
                rows={1}
                value={position.note}
                onChange={(event) => {
                  onPositionChange(position.id, 'note', event.target.value);
                  resizeTextarea(event.target);
                }}
              />
            </td>
            <td />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
