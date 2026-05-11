import { FieldActions, HiddenFieldActions } from './FieldActions.jsx';

export default function DocumentMetaBlock({
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
      {visibleFields.map(({ ariaLabel, field, name, type = 'text' }, index) => (
        <div className="invoice-config-row" key={field}>
          <label className={field === emphasizedField ? 'is-emphasized' : undefined}>
            <input
              className="document-label-input"
              aria-label={`Beschriftung ${ariaLabel}`}
              value={labels[field]}
              onChange={(event) => onLabelChange(field, event.target.value)}
            />
            {type === 'date' ? (
              <span className="invoice-date-field">
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
                aria-label={ariaLabel}
                autoComplete="off"
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
