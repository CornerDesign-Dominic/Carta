import { useEffect, useRef, useState } from 'react';

const feedbackCategories = [
  'Fehler gefunden',
  'Funktion fehlt',
  'Bedienung unklar',
  'Dokument / Export',
  'Lob / Sonstiges',
];

const maxFeedbackLength = 600;

export default function FeedbackWidget({ documentType = 'document', onNavigate }) {
  const widgetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [footerOffset, setFooterOffset] = useState(-1);
  const canSubmit = categories.length > 0 || message.trim();

  useEffect(() => {
    let animationFrame = 0;

    function updateFooterOffset() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const footer = document.querySelector('.site-footer');

        if (!footer || !widgetRef.current) {
          setFooterOffset(-1);
          return;
        }

        const footerTop = footer.getBoundingClientRect().top;
        const visibleFooterHeight = Math.max(0, window.innerHeight - footerTop);
        const tabVisualOffset = isOpen ? 0 : 14;
        const nextOffset = visibleFooterHeight > 0 ? visibleFooterHeight + tabVisualOffset : -1;

        setFooterOffset((current) => (Math.abs(current - nextOffset) < 1 ? current : nextOffset));
      });
    }

    updateFooterOffset();
    window.addEventListener('scroll', updateFooterOffset, { passive: true });
    window.addEventListener('resize', updateFooterOffset);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateFooterOffset);
      window.removeEventListener('resize', updateFooterOffset);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isSubmitted) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [isSubmitted]);

  function toggleCategory(category) {
    setCategories((current) =>
      current.includes(category)
        ? current.filter((entry) => entry !== category)
        : [...current, category],
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit || isSending) {
      return;
    }

    setIsSending(true);

    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categories,
          message: message.trim(),
          documentType,
          page: window.location.pathname,
          createdAt: new Date().toISOString(),
        }),
      });
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
      setCategories([]);
      setMessage('');
    }
  }

  return (
    <aside
      className={`feedback-widget${isOpen ? ' is-open' : ''}`}
      ref={widgetRef}
      style={{ bottom: `${footerOffset}px` }}
      aria-label="Feedback"
    >
      {!isOpen ? (
        <button className="feedback-widget-tab" type="button" onClick={() => setIsOpen(true)}>
          Feedback geben
        </button>
      ) : (
        <form className="feedback-widget-card" onSubmit={handleSubmit}>
          <div className="feedback-widget-header">
            <h2>Feedback geben</h2>
            <button
              type="button"
              className="feedback-widget-close"
              aria-label="Feedback schließen"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          {isSubmitted ? (
            <p className="feedback-widget-thanks">
              Vielen Dank! Dein Feedback wurde anonym übermittelt.
            </p>
          ) : (
            <>
              <p className="feedback-widget-intro">
                Dein Feedback hilft uns, Belege24 besser zu machen. Die Rückmeldung ist
                anonym. Bitte gib keine personenbezogenen Daten ein.
              </p>

              <p className="feedback-widget-privacy">
                Hinweise zur Verarbeitung findest du in der{' '}
                <button
                  type="button"
                  onClick={() => onNavigate?.({ view: 'legal:datenschutz' })}
                >
                  Datenschutzerklärung
                </button>
                .
              </p>

              <div className="feedback-widget-options" aria-label="Feedback-Kategorie">
                {feedbackCategories.map((option) => (
                  <label className="feedback-widget-option" key={option}>
                    <input
                      type="checkbox"
                      checked={categories.includes(option)}
                      onChange={() => toggleCategory(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <label className="feedback-widget-field">
                <span>Nachricht</span>
                <textarea
                  maxLength={maxFeedbackLength}
                  placeholder="Was ist dir aufgefallen?"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <small>{message.length} / {maxFeedbackLength}</small>
              </label>

              <button className="feedback-widget-submit" type="submit" disabled={!canSubmit || isSending}>
                {isSending ? 'Wird gesendet...' : 'Senden'}
              </button>
            </>
          )}
        </form>
      )}
    </aside>
  );
}
