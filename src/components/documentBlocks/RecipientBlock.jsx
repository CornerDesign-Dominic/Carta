import { EyeIcon, FieldActions } from './FieldActions.jsx';
import { getDataCheckClassName } from '../../utils/documentDataCheck.js';

export default function RecipientBlock({
  ariaPrefix = 'Empfänger',
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
          className={getDataCheckClassName(dataCheckFields.senderLine, 'invoice-sender-line')}
          aria-label="Absenderzeile über Empfängeradresse"
          value={senderLine}
          onChange={(event) => onSenderLineChange(event.target.value)}
        />
      )}
      <input
        aria-label={`${ariaPrefix} Firma`}
        className={getDataCheckClassName(dataCheckFields.company)}
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
          className={getDataCheckClassName(dataCheckFields.attention)}
          value={recipient.attention}
          onChange={(event) => onRecipientChange('attention', event.target.value)}
        />
      )}
      {onToggleField && !isAttentionHidden && (
        <div className="invoice-config-row invoice-recipient-config-row">
          <input
            aria-label={`${ariaPrefix} Zusatz oder z. Hd.`}
            className={getDataCheckClassName(dataCheckFields.attention)}
            value={recipient.attention}
            onChange={(event) => onRecipientChange('attention', event.target.value)}
          />
          <FieldActions label={attentionToggleLabel} onToggle={() => onToggleField('attention')} />
        </div>
      )}
      {!onToggleField && (
        <input
          aria-label={`${ariaPrefix} Ansprechpartner oder Abteilung`}
          className={getDataCheckClassName(dataCheckFields.name)}
          value={recipient.name}
          onChange={(event) => onRecipientChange('name', event.target.value)}
        />
      )}
      {onToggleField && !isNameHidden && (
        <div className="invoice-config-row invoice-recipient-config-row">
          <input
            aria-label={`${ariaPrefix} Ansprechpartner oder Abteilung`}
            className={getDataCheckClassName(dataCheckFields.name)}
            value={recipient.name}
            onChange={(event) => onRecipientChange('name', event.target.value)}
          />
          <FieldActions label={nameToggleLabel} onToggle={() => onToggleField('name')} />
        </div>
      )}
      <input
        aria-label={`${ariaPrefix} Straße und Hausnummer`}
        className={getDataCheckClassName(dataCheckFields.street)}
        value={recipient.street}
        onChange={(event) => onRecipientChange('street', event.target.value)}
      />
      <input
        aria-label={`${ariaPrefix} PLZ und Stadt`}
        className={getDataCheckClassName(dataCheckFields.cityLine)}
        value={recipient.cityLine}
        onChange={(event) => onRecipientChange('cityLine', event.target.value)}
      />
    </div>
  );
}
