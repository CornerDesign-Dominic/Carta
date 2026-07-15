import { forwardRef } from 'react';

const ToolA4Page = forwardRef(function ToolA4Page(
  { ariaLabel, children, className = '', editable = false, ...props },
  ref,
) {
  const classes = ['tool-document-a4', className, editable ? 'is-highlight-mode' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article ref={ref} className={classes} aria-label={ariaLabel} {...props}>
      {children}
    </article>
  );
});

export default ToolA4Page;
