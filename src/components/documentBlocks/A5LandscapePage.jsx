import { forwardRef } from 'react';

const A5LandscapePage = forwardRef(function A5LandscapePage(
  { ariaLabel, children, className = '', editable = false, ...props },
  ref,
) {
  const classes = ['a5-landscape-page', className, editable ? 'is-highlight-mode' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article ref={ref} className={classes} aria-label={ariaLabel} {...props}>
      {children}
    </article>
  );
});

export default A5LandscapePage;
