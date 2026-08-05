import { forwardRef } from 'react';

const TextBlock = forwardRef(function TextBlock({ ariaLabel, className = '', onChange, rows, value }, ref) {
  return (
    <textarea
      ref={ref}
      className={`offer-flow-text invoice-flow-text${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
      rows={rows}
      value={value}
      onChange={(event) => onChange(event.target.value, event)}
    />
  );
});

export default TextBlock;
