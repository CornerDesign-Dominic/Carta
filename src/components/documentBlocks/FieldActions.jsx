export function FieldActions({
  canMove = false,
  isFirst = false,
  isHidden = false,
  isLast = false,
  label,
  onMoveDown,
  onMoveUp,
  onToggle,
}) {
  return (
    <span className="invoice-field-actions" aria-label={`${label} konfigurieren`}>
      <button
        type="button"
        aria-label={isHidden ? `${label} einblenden` : `${label} ausblenden`}
        title={isHidden ? `${label} einblenden` : `${label} ausblenden`}
        onClick={onToggle}
      >
        <span className={isHidden ? 'invoice-icon-eye-off' : 'invoice-icon-eye'} aria-hidden="true" />
      </button>
      {canMove && (
        <>
          <button type="button" aria-label={`${label} nach oben`} disabled={isFirst} onClick={onMoveUp}>
            &uarr;
          </button>
          <button type="button" aria-label={`${label} nach unten`} disabled={isLast} onClick={onMoveDown}>
            &darr;
          </button>
        </>
      )}
    </span>
  );
}

export function HiddenFieldActions({ className = '', definitions, hiddenFields, onToggle }) {
  if (hiddenFields.length === 0) {
    return null;
  }

  return (
    <div className={`invoice-hidden-field-row${className ? ` ${className}` : ''}`}>
      <span className="invoice-hidden-field-actions" aria-label="Ausgeblendete Felder">
        {hiddenFields.map((field) => {
          const definition = definitions.find((entry) => entry.field === field);
          const label = definition?.label ?? definition?.ariaLabel ?? field;

          return (
            <button
              key={field}
              type="button"
              aria-label={`${label} einblenden`}
              title={`${label} einblenden`}
              onClick={() => onToggle(field)}
            >
              <span className="invoice-icon-eye-off" aria-hidden="true" />
            </button>
          );
        })}
      </span>
    </div>
  );
}
