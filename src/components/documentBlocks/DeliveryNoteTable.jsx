import { useEffect, useRef } from 'react';
import { MoveDownIcon, MoveUpIcon } from './FieldActions.jsx';

function resizeTextarea(textarea) {
  if (!textarea) {
    return;
  }

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

export default function DeliveryNoteTable({
  labels,
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
            ['description', 'Tabellenkopf Beschreibung'],
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
                aria-label={`Beschreibung Position ${index + 1}`}
                rows={1}
                value={position.description}
                onChange={(event) => {
                  onPositionChange(position.id, 'description', event.target.value);
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
