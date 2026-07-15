import { forwardRef } from 'react';

const ToolTextBlock = forwardRef(function ToolTextBlock({ ariaLabel, className = '', onChange, rows, value }, ref) {
  return (
    <textarea
      ref={ref}
      className={`tool-document-text${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
      rows={rows}
      value={value}
      onChange={(event) => onChange(event.target.value, event)}
    />
  );
});

export default ToolTextBlock;
