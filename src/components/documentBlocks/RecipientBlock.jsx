import { FieldActions, HiddenFieldActions } from './FieldActions.jsx';

const recipientOptionalFields = [{ field: 'attention', label: 'Zusatz / zu Haenden' }];

export default function RecipientBlock({
  hiddenFields = [],
  onRecipientChange,
  onSenderLineChange,
  onToggleField,
  recipient,
  senderLine,
}) {
  const isAttentionHidden = hiddenFields.includes('attention');

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
      {!onToggleField && (
        <input
          aria-label="Empfaenger Zusatz oder z. Hd."
          value={recipient.attention}
          onChange={(event) => onRecipientChange('attention', event.target.value)}
        />
      )}
      {onToggleField && !isAttentionHidden && (
        <div className="invoice-config-row">
          <input
            aria-label="Empfaenger Zusatz oder z. Hd."
            value={recipient.attention}
            onChange={(event) => onRecipientChange('attention', event.target.value)}
          />
          <FieldActions label="Zusatz / zu Haenden" onToggle={() => onToggleField?.('attention')} />
        </div>
      )}
      {onToggleField && isAttentionHidden && (
        <HiddenFieldActions
          definitions={recipientOptionalFields}
          hiddenFields={hiddenFields}
          onToggle={onToggleField}
        />
      )}
      <input
        aria-label="Ansprechpartner oder Name"
        value={recipient.name}
        onChange={(event) => onRecipientChange('name', event.target.value)}
      />
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
