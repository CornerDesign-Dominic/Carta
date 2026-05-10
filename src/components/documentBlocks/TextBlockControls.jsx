export default function TextBlockControls({
  isFirst,
  isLast,
  label,
  onMoveDown,
  onMoveUp,
  onToggle,
  visible,
}) {
  return (
    <span className="invoice-field-actions" aria-label={`${label} konfigurieren`}>
      <button
        type="button"
        aria-label={visible ? `${label} ausblenden` : `${label} einblenden`}
        title={visible ? `${label} ausblenden` : `${label} einblenden`}
        onClick={onToggle}
      >
        <span className={visible ? 'invoice-icon-eye' : 'invoice-icon-eye-off'} aria-hidden="true" />
      </button>
      <button type="button" aria-label={`${label} nach oben`} disabled={isFirst} onClick={onMoveUp}>
        &uarr;
      </button>
      <button type="button" aria-label={`${label} nach unten`} disabled={isLast} onClick={onMoveDown}>
        &darr;
      </button>
    </span>
  );
}
