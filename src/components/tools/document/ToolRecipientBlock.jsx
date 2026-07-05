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

const recipientFieldDefinitions = [
  { ariaLabel: 'Empfänger Firma oder Name', dataCheckField: 'company', field: 'company', label: 'Firma / Name' },
  { ariaLabel: 'Empfänger Zusatz oder z. H.', dataCheckField: 'attention', field: 'attention', label: 'z. H.' },
  { ariaLabel: 'Empfänger Abteilung', dataCheckField: 'name', field: 'name', label: 'Abteilung' },
  { ariaLabel: 'Empfänger Straße und Hausnummer', dataCheckField: 'street', field: 'street', label: 'Straße' },
  { ariaLabel: 'Empfänger PLZ und Ort', dataCheckField: 'cityLine', field: 'cityLine', label: 'PLZ / Ort' },
];

export default function ToolRecipientBlock({
  dataCheckFields = {},
  hiddenFields = [],
  onRecipientChange,
  onSenderLineChange,
  onToggleField,
  recipient,
  senderLine,
}) {
  const hiddenRecipientFields = recipientFieldDefinitions.filter(({ field }) => hiddenFields.includes(field));

  return (
    <div className="tool-document-recipient-fields">
      <input
        className={`tool-document-sender-line${dataCheckFields.senderLine ? ' tool-document-data-check-marker' : ''}`}
        aria-label="Absenderzeile über Empfängeradresse"
        value={senderLine}
        onChange={(event) => onSenderLineChange(event.target.value)}
      />

      {onToggleField && hiddenRecipientFields.length > 0 && (
        <span className="tool-document-hidden-field-actions tool-document-recipient-hidden-actions" aria-label="Ausgeblendete Empfängerfelder">
          {hiddenRecipientFields.map(({ field, label }) => (
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

      {recipientFieldDefinitions.map(({ ariaLabel, dataCheckField, field, label }) => (
        hiddenFields.includes(field) ? null : (
          <div className="tool-document-config-row tool-document-recipient-config-row" key={field}>
            <input
              aria-label={ariaLabel}
              className={dataCheckFields[dataCheckField] ? 'tool-document-data-check-marker' : undefined}
              value={recipient[field]}
              onChange={(event) => onRecipientChange(field, event.target.value)}
            />
            {onToggleField && <ToolFieldActions label={label} onToggle={() => onToggleField(field)} />}
          </div>
        )
      ))}
    </div>
  );
}
