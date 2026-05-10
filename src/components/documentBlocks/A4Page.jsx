import { forwardRef } from 'react';

const A4Page = forwardRef(function A4Page(
  { ariaLabel, children, className = '', editable = false },
  ref,
) {
  const classes = ['offer-sheet', 'invoice-sheet', className, editable ? 'is-highlight-mode' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article ref={ref} className={classes} aria-label={ariaLabel}>
      {children}
    </article>
  );
});

export default A4Page;
