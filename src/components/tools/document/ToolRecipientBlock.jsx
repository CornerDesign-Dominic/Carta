function ToolEyeIcon({ hidden = false }) {
  return <span className={hidden ? 'tool-document-eye-off' : 'tool-document-eye'} aria-hidden="true" />;
}

function ToolFieldActions({ label, onToggle }) {
  return (
    <span className="tool-document-field-actions">
      <button type="button" aria-label={`${label} ausblenden`} title={`${label} ausblenden`} onClick={onToggle}>
        <ToolEyeIcon />
      </button>
    </span>
  );
}

export default function ToolRecipientBlock({
  dataCheckFields = {},
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
    <div className="tool-document-recipient-fields">
      <input
        className={`tool-document-sender-line${dataCheckFields.senderLine ? ' tool-document-data-check-marker' : ''}`}
        aria-label="Absenderzeile über Empfängeradresse"
        value={senderLine}
        onChange={(event) => onSenderLineChange(event.target.value)}
      />
      <input
        aria-label="Empfänger Firma"
        className={dataCheckFields.company ? 'tool-document-data-check-marker' : undefined}
        value={recipient.company}
        onChange={(event) => onRecipientChange('company', event.target.value)}
      />
      {onToggleField && hiddenOptionalFields.length > 0 && (
        <span className="tool-document-hidden-field-actions tool-document-recipient-hidden-actions" aria-label="Ausgeblendete Empfängerfelder">
          {hiddenOptionalFields.map(({ field, label }) => (
            <button
              key={field}
              type="button"
              aria-label={`${label} einblenden`}
              title={`${label} einblenden`}
              onClick={() => onToggleField(field)}
            >
              <ToolEyeIcon hidden />
            </button>
          ))}
        </span>
      )}
      {onToggleField && !isAttentionHidden && (
        <div className="tool-document-config-row tool-document-recipient-config-row">
          <input
            aria-label="Empfänger Zusatz oder z. Hd."
            className={dataCheckFields.attention ? 'tool-document-data-check-marker' : undefined}
            value={recipient.attention}
            onChange={(event) => onRecipientChange('attention', event.target.value)}
          />
          <ToolFieldActions label="Zusatz / zu Händen" onToggle={() => onToggleField('attention')} />
        </div>
      )}
      {onToggleField && !isNameHidden && (
        <div className="tool-document-config-row tool-document-recipient-config-row">
          <input
            aria-label="Ansprechpartner oder Name"
            className={dataCheckFields.name ? 'tool-document-data-check-marker' : undefined}
            value={recipient.name}
            onChange={(event) => onRecipientChange('name', event.target.value)}
          />
          <ToolFieldActions label="Name / Abteilung" onToggle={() => onToggleField('name')} />
        </div>
      )}
      <input
        aria-label="Empfänger Straße und Hausnummer"
        className={dataCheckFields.street ? 'tool-document-data-check-marker' : undefined}
        value={recipient.street}
        onChange={(event) => onRecipientChange('street', event.target.value)}
      />
      <input
        aria-label="Empfänger PLZ und Stadt"
        className={dataCheckFields.cityLine ? 'tool-document-data-check-marker' : undefined}
        value={recipient.cityLine}
        onChange={(event) => onRecipientChange('cityLine', event.target.value)}
      />
    </div>
  );
}
