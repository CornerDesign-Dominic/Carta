import { FieldActions, HiddenFieldActions } from './FieldActions.jsx';
import { getDataCheckClassName } from '../../utils/documentDataCheck.js';

export default function FooterBlock({
  configurableColumnIndex = 1,
  dataCheckFields = {},
  footerLines,
  formatFooterLine = (_field, value) => value,
  hiddenFields = [],
  columns,
  onFooterLineChange,
  parseFooterLine = (_field, value) => value,
  onMoveField,
  onToggleField,
}) {
  return (
    <footer className="invoice-footer-data" aria-label="Fußbereich">
      {columns.map((column, columnIndex) => {
        const isConfigurable = columnIndex === configurableColumnIndex;
        const visibleColumn = isConfigurable
          ? column.filter(({ field }) => !hiddenFields.includes(field))
          : column;

        return (
          <section key={column.map(({ field }) => field).join('-')}>
            {visibleColumn.map(({ field, label }, index) => (
              <div className={isConfigurable ? 'invoice-config-row' : undefined} key={field}>
                <input
                  className={getDataCheckClassName(dataCheckFields[field])}
                  aria-label={label}
                  value={formatFooterLine(field, footerLines[field] ?? '')}
                  onChange={(event) => onFooterLineChange(field, parseFooterLine(field, event.target.value))}
                />
                {isConfigurable && (
                  <FieldActions
                    canMove
                    isFirst={index === 0}
                    isLast={index === visibleColumn.length - 1}
                    label={label}
                    onMoveDown={() => onMoveField(field, 1)}
                    onMoveUp={() => onMoveField(field, -1)}
                    onToggle={() => onToggleField(field)}
                  />
                )}
              </div>
            ))}
            {isConfigurable && (
              <HiddenFieldActions definitions={column} hiddenFields={hiddenFields} onToggle={onToggleField} />
            )}
          </section>
        );
      })}
    </footer>
  );
}
