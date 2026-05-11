import { EyeIcon } from './FieldActions.jsx';

export default function RecipientBlock({
  hiddenFields = [],
  onRecipientChange,
  onSenderLineChange,
  onToggleField,
  recipient,
  senderLine,
}) {
  const isAttentionHidden = hiddenFields.includes('attention');
  const isNameHidden = hiddenFields.includes('name');

  return (
    <div className="invoice-recipient-fields">
      <input
        className="invoice-sender-line"
        aria-label="Absenderzeile ueber Empfaengeradresse"
        value={senderLine}
        onChange={(event) => onSenderLineChange(event.target.value)}
      />
      <input
        aria-label="Empfaenger Firma"
        value={recipient.company}
        onChange={(event) => onRecipientChange('company', event.target.value)}
      />
      {onToggleField && (
        <span className="invoice-field-actions invoice-recipient-actions" aria-label="Empfaengerfelder konfigurieren">
          {[
            { field: 'attention', hidden: isAttentionHidden, label: 'Zusatz / zu Haenden' },
            { field: 'name', hidden: isNameHidden, label: 'Name / Abteilung' },
          ].map(({ field, hidden, label }) => (
            <button
              key={field}
              type="button"
              aria-label={hidden ? `${label} einblenden` : `${label} ausblenden`}
              title={hidden ? `${label} einblenden` : `${label} ausblenden`}
              onClick={() => onToggleField(field)}
            >
              <EyeIcon hidden={hidden} />
            </button>
          ))}
        </span>
      )}
      {!onToggleField && (
        <input
          aria-label="Empfaenger Zusatz oder z. Hd."
          value={recipient.attention}
          onChange={(event) => onRecipientChange('attention', event.target.value)}
        />
      )}
      {onToggleField && !isAttentionHidden && (
        <input
          aria-label="Empfaenger Zusatz oder z. Hd."
          value={recipient.attention}
          onChange={(event) => onRecipientChange('attention', event.target.value)}
        />
      )}
      {!onToggleField && (
        <input
          aria-label="Ansprechpartner oder Name"
          value={recipient.name}
          onChange={(event) => onRecipientChange('name', event.target.value)}
        />
      )}
      {onToggleField && !isNameHidden && (
        <input
          aria-label="Ansprechpartner oder Name"
          value={recipient.name}
          onChange={(event) => onRecipientChange('name', event.target.value)}
        />
      )}
      <input
        aria-label="Empfaenger Strasse und Hausnummer"
        value={recipient.street}
        onChange={(event) => onRecipientChange('street', event.target.value)}
      />
      <input
        aria-label="Empfaenger PLZ und Stadt"
        value={recipient.cityLine}
        onChange={(event) => onRecipientChange('cityLine', event.target.value)}
      />
    </div>
  );
}
