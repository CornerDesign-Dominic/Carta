import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function FieldHelpTooltip({ label, children }) {
  const buttonRef = useRef(null);
  const tooltipId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen) return undefined;
    const updatePosition = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      const tooltipWidth = Math.min(280, window.innerWidth - 24);
      const left = Math.min(Math.max(12, rect.left + (rect.width / 2) - (tooltipWidth / 2)), window.innerWidth - tooltipWidth - 12);
      const estimatedHeight = 86;
      const top = rect.bottom + estimatedHeight + 8 > window.innerHeight
        ? Math.max(12, rect.top - estimatedHeight - 8)
        : rect.bottom + 8;
      setPosition({ top, left });
    };
    const closeOnOutsidePointer = (event) => {
      if (!buttonRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => { if (event.key === 'Escape') setIsOpen(false); };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return <>
    <button
      ref={buttonRef}
      className="field-help-tooltip-trigger"
      type="button"
      aria-label={`Hilfe zu ${label}`}
      aria-describedby={isOpen ? tooltipId : undefined}
      aria-expanded={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onClick={(event) => { event.preventDefault(); event.stopPropagation(); setIsOpen((current) => !current); }}
    >
      ?
    </button>
    {isOpen && createPortal(<span id={tooltipId} className="field-help-tooltip" role="tooltip" style={position}>{children}</span>, document.body)}
  </>;
}
