export default function DocumentMetaBlock({
  dateInputRefs,
  details,
  emphasizedField,
  fields,
  labels,
  onDatePicker,
  onDetailChange,
  onLabelChange,
}) {
  return (
    <div className="invoice-details">
      {fields.map(({ ariaLabel, field, type = 'text' }) => (
        <label className={field === emphasizedField ? 'is-emphasized' : undefined} key={field}>
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
              type="text"
              value={details[field]}
              onChange={(event) => onDetailChange(field, event.target.value)}
            />
          )}
        </label>
      ))}
    </div>
  );
}
