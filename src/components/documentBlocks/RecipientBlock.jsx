import { EyeIcon, FieldActions } from './FieldActions.jsx';

export default function RecipientBlock({
  ariaPrefix = 'Empfaenger',
  attentionToggleLabel = 'Zusatz / zu Haenden',
  dataCheckFields = {},
  hiddenFields = [],
  nameToggleLabel = 'Name / Abteilung',
  onRecipientChange,
  onSenderLineChange,
  onToggleField,
  recipient,
  senderLine,
  showSenderLine = true,
}) {
  const isAttentionHidden = hiddenFields.includes('attention');
  const isNameHidden = hiddenFields.includes('name');
  const hiddenOptionalFields = [
    { field: 'attention', hidden: isAttentionHidden, label: attentionToggleLabel },
    { field: 'name', hidden: isNameHidden, label: nameToggleLabel },
  ].filter(({ hidden }) => hidden);

  return (
    <div className="invoice-recipient-fields">
      {showSenderLine && (
        <input
          className={`invoice-sender-line${dataCheckFields.senderLine ? ' document-data-check-marker' : ''}`}
          aria-label="Absenderzeile ueber Empfaengeradresse"
          value={senderLine}
          onChange={(event) => onSenderLineChange(event.target.value)}
        />
      )}
      <input
        aria-label={`${ariaPrefix} Firma`}
        className={dataCheckFields.company ? 'document-data-check-marker' : undefined}
        value={recipient.company}
        onChange={(event) => onRecipientChange('company', event.target.value)}
      />
      {onToggleField && hiddenOptionalFields.length > 0 && (
        <span className="invoice-field-actions invoice-recipient-hidden-actions" aria-label={`Ausgeblendete ${ariaPrefix}-Felder`}>
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
          aria-label={`${ariaPrefix} Zusatz oder z. Hd.`}
          className={dataCheckFields.attention ? 'document-data-check-marker' : undefined}
          value={recipient.attention}
          onChange={(event) => onRecipientChange('attention', event.target.value)}
        />
      )}
      {onToggleField && !isAttentionHidden && (
        <div className="invoice-config-row invoice-recipient-config-row">
          <input
            aria-label={`${ariaPrefix} Zusatz oder z. Hd.`}
            className={dataCheckFields.attention ? 'document-data-check-marker' : undefined}
            value={recipient.attention}
            onChange={(event) => onRecipientChange('attention', event.target.value)}
          />
          <FieldActions label={attentionToggleLabel} onToggle={() => onToggleField('attention')} />
        </div>
      )}
      {!onToggleField && (
        <input
          aria-label={`${ariaPrefix} Ansprechpartner oder Abteilung`}
          className={dataCheckFields.name ? 'document-data-check-marker' : undefined}
          value={recipient.name}
          onChange={(event) => onRecipientChange('name', event.target.value)}
        />
      )}
      {onToggleField && !isNameHidden && (
        <div className="invoice-config-row invoice-recipient-config-row">
          <input
            aria-label={`${ariaPrefix} Ansprechpartner oder Abteilung`}
            className={dataCheckFields.name ? 'document-data-check-marker' : undefined}
            value={recipient.name}
            onChange={(event) => onRecipientChange('name', event.target.value)}
          />
          <FieldActions label={nameToggleLabel} onToggle={() => onToggleField('name')} />
        </div>
      )}
      <input
        aria-label={`${ariaPrefix} Strasse und Hausnummer`}
        className={dataCheckFields.street ? 'document-data-check-marker' : undefined}
        value={recipient.street}
        onChange={(event) => onRecipientChange('street', event.target.value)}
      />
      <input
        aria-label={`${ariaPrefix} PLZ und Stadt`}
        className={dataCheckFields.cityLine ? 'document-data-check-marker' : undefined}
        value={recipient.cityLine}
        onChange={(event) => onRecipientChange('cityLine', event.target.value)}
      />
    </div>
  );
}
