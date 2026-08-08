import { FieldActions, HiddenFieldActions } from './FieldActions.jsx';
import { getDataCheckClassName } from '../../utils/documentDataCheck.js';

export default function SenderBlock({
  contactFields,
  dataCheckFields = {},
  hiddenFields = [],
  labels,
  onLabelChange,
  onMoveField,
  onSenderChange,
  onToggleField,
  sender,
}) {
  const visibleFields = contactFields.filter(({ field }) => !hiddenFields.includes(field));

  return (
    <header className="invoice-document-header">
      <div className="editable-group">
        <input
          className={getDataCheckClassName(dataCheckFields.company)}
          aria-label="Absender Firmenname"
          value={sender.company}
          onChange={(event) => onSenderChange('company', event.target.value)}
        />
      </div>

      <div className="invoice-sender-side">
        {visibleFields.map(({ field, label, labelField }, index) => (
          <div className="invoice-config-row" key={field}>
            <label>
              <input
                className="document-label-input"
                aria-label={`Beschriftung ${label}`}
                value={labels[labelField]}
                onChange={(event) => onLabelChange(labelField, event.target.value)}
              />
              <input
                className={getDataCheckClassName(dataCheckFields[field])}
                aria-label={label}
                value={sender[field]}
                onChange={(event) => onSenderChange(field, event.target.value)}
              />
            </label>
            <FieldActions
              canMove
              isFirst={index === 0}
              isLast={index === visibleFields.length - 1}
              label={label}
              onMoveDown={() => onMoveField(field, 1)}
              onMoveUp={() => onMoveField(field, -1)}
              onToggle={() => onToggleField(field)}
            />
          </div>
        ))}
        <HiddenFieldActions definitions={contactFields} hiddenFields={hiddenFields} onToggle={onToggleField} />
      </div>
    </header>
  );
}
