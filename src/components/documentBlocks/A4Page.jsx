import { forwardRef } from 'react';

const A4Page = forwardRef(function A4Page(
  { ariaLabel, children, className = '', editable = false, ...props },
  ref,
) {
  const classes = ['a4-page', className, editable ? 'is-highlight-mode' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article ref={ref} className={classes} aria-label={ariaLabel} {...props}>
      {children}
    </article>
  );
});

export default A4Page;
