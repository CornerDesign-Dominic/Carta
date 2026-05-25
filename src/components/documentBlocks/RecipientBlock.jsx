import { EyeIcon, FieldActions } from './FieldActions.jsx';

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
  const hiddenOptionalFields = [
    { field: 'attention', hidden: isAttentionHidden, label: 'Zusatz / zu Händen' },
    { field: 'name', hidden: isNameHidden, label: 'Name / Abteilung' },
  ].filter(({ hidden }) => hidden);

  return (
    <div className="invoice-recipient-fields">
      <input
        className="invoice-sender-line"
        aria-label="Absenderzeile über Empfängeradresse"
        value={senderLine}
        onChange={(event) => onSenderLineChange(event.target.value)}
      />
      <input
        aria-label="Empfänger Firma"
        value={recipient.company}
        onChange={(event) => onRecipientChange('company', event.target.value)}
      />
      {onToggleField && hiddenOptionalFields.length > 0 && (
        <span className="invoice-field-actions invoice-recipient-hidden-actions" aria-label="Ausgeblendete Empfängerfelder">
          {hiddenOptionalFields.map(({ field, label }) => (
            <button
              key={field}
              type="button"
              aria-label={`${label} einblenden`}
              title={`${label} einblenden`}
              onClick={() => onToggleField(field)}
            >
              <EyeIcon hidden />
            </button>
          ))}
        </span>
      )}
      {!onToggleField && (
        <input
          aria-label="Empfänger Zusatz oder z. Hd."
          value={recipient.attention}
          onChange={(event) => onRecipientChange('attention', event.target.value)}
        />
      )}
      {onToggleField && !isAttentionHidden && (
        <div className="invoice-config-row invoice-recipient-config-row">
          <input
            aria-label="Empfänger Zusatz oder z. Hd."
            value={recipient.attention}
            onChange={(event) => onRecipientChange('attention', event.target.value)}
          />
          <FieldActions label="Zusatz / zu Händen" onToggle={() => onToggleField('attention')} />
        </div>
      )}
      {!onToggleField && (
        <input
          aria-label="Ansprechpartner oder Name"
          value={recipient.name}
          onChange={(event) => onRecipientChange('name', event.target.value)}
        />
      )}
      {onToggleField && !isNameHidden && (
        <div className="invoice-config-row invoice-recipient-config-row">
          <input
            aria-label="Ansprechpartner oder Name"
            value={recipient.name}
            onChange={(event) => onRecipientChange('name', event.target.value)}
          />
          <FieldActions label="Name / Abteilung" onToggle={() => onToggleField('name')} />
        </div>
      )}
      <input
        aria-label="Empfänger Strasse und Hausnummer"
        value={recipient.street}
        onChange={(event) => onRecipientChange('street', event.target.value)}
      />
      <input
        aria-label="Empfänger PLZ und Stadt"
        value={recipient.cityLine}
        onChange={(event) => onRecipientChange('cityLine', event.target.value)}
      />
    </div>
  );
}
