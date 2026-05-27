import { FieldActions, HiddenFieldActions } from './FieldActions.jsx';

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

export default function DocumentMetaBlock({
  dataCheckFields = {},
  dateInputRefs,
  details,
  emphasizedField,
  fields,
  hiddenFields = [],
  labels,
  onDatePicker,
  onDetailChange,
  onLabelChange,
  onMoveField,
  onToggleField,
}) {
  const visibleFields = fields.filter(({ field }) => !hiddenFields.includes(field));

  return (
    <div className="invoice-details">
      {visibleFields.map(({ ariaLabel, autoComplete, field, name, type = 'text' }, index) => (
        <div className="invoice-config-row" key={field}>
          <label className={field === emphasizedField ? 'is-emphasized' : undefined}>
            <input
              className="document-label-input"
              aria-label={`Beschriftung ${ariaLabel}`}
              value={labels[field]}
              onChange={(event) => onLabelChange(field, event.target.value)}
            />
            {type === 'date' ? (
              <span className={`invoice-date-field${dataCheckFields[field] ? ' document-data-check-marker' : ''}`}>
                <span className="invoice-date-display" aria-hidden="true">
                  {formatGermanDate(details[field])}
                </span>
                <input
                  ref={(element) => {
                    dateInputRefs.current[field] = element;
                  }}
                  className="invoice-date-input"
                  aria-label={ariaLabel}
                  type="date"
                  value={details[field]}
                  onChange={(event) => onDetailChange(field, event.target.value)}
                />
                <button
                  className="invoice-icon-action invoice-date-picker"
                  type="button"
                  aria-label={`${ariaLabel} auswählen`}
                  onClick={() => onDatePicker(field)}
                >
                  <span aria-hidden="true" />
                </button>
              </span>
            ) : (
              <input
                className={dataCheckFields[field] ? 'document-data-check-marker' : undefined}
                aria-label={ariaLabel}
                autoComplete={autoComplete ?? 'off'}
                inputMode="text"
                name={name ?? `carta-${field}`}
                spellCheck={false}
                type="text"
                value={details[field]}
                onChange={(event) => onDetailChange(field, event.target.value)}
              />
            )}
          </label>
          <FieldActions
            canMove
            isFirst={index === 0}
            isLast={index === visibleFields.length - 1}
            label={ariaLabel}
            onMoveDown={() => onMoveField(field, 1)}
            onMoveUp={() => onMoveField(field, -1)}
            onToggle={() => onToggleField(field)}
          />
        </div>
      ))}
      <HiddenFieldActions definitions={fields} hiddenFields={hiddenFields} onToggle={onToggleField} />
    </div>
  );
}
