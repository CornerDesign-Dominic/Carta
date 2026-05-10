export default function SenderBlock({ contactFields, labels, onLabelChange, onSenderChange, sender }) {
  return (
    <header className="invoice-document-header">
      <div className="editable-group">
        <input
          aria-label="Absender Firmenname"
          value={sender.company}
          onChange={(event) => onSenderChange('company', event.target.value)}
        />
      </div>

      <div className="invoice-sender-side">
        {contactFields.map(({ field, label, labelField }) => (
          <label key={field}>
            <input
              className="document-label-input"
              aria-label={`Beschriftung ${label}`}
              value={labels[labelField]}
              onChange={(event) => onLabelChange(labelField, event.target.value)}
            />
            <input
              aria-label={label}
              value={sender[field]}
              onChange={(event) => onSenderChange(field, event.target.value)}
            />
          </label>
        ))}
      </div>
    </header>
  );
}
