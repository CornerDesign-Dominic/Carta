export function EyeIcon({ hidden = false }) {
  return hidden ? (
    <svg className="invoice-control-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M3.5 12s3.1-5.5 8.5-5.5S20.5 12 20.5 12s-3.1 5.5-8.5 5.5S3.5 12 3.5 12Z" />
      <path d="M9.9 9.9a3 3 0 0 1 4.2 4.2" />
      <path d="M4.5 4.5 19.5 19.5" />
    </svg>
  ) : (
    <svg className="invoice-control-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M3.5 12s3.1-5.5 8.5-5.5S20.5 12 20.5 12s-3.1 5.5-8.5 5.5S3.5 12 3.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function MoveUpIcon() {
  return (
    <svg className="invoice-control-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 19V5" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
    </svg>
  );
}

export function MoveDownIcon() {
  return (
    <svg className="invoice-control-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 5v14" />
      <path d="m17.5 13.5-5.5 5.5-5.5-5.5" />
    </svg>
  );
}

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
        <EyeIcon hidden={isHidden} />
      </button>
      {canMove && (
        <>
          <button type="button" aria-label={`${label} nach oben`} disabled={isFirst} onClick={onMoveUp}>
            <MoveUpIcon />
          </button>
          <button type="button" aria-label={`${label} nach unten`} disabled={isLast} onClick={onMoveDown}>
            <MoveDownIcon />
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
              <EyeIcon hidden />
            </button>
          );
        })}
      </span>
    </div>
  );
}
