import { forwardRef } from 'react';

const TextBlock = forwardRef(function TextBlock({ ariaLabel, className = '', onChange, value }, ref) {
  return (
    <textarea
      ref={ref}
      className={`offer-flow-text invoice-flow-text${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
      value={value}
      onChange={(event) => onChange(event.target.value, event)}
    />
  );
});

export default TextBlock;
