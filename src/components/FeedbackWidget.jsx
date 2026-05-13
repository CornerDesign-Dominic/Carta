import { useState } from 'react';

const feedbackCategories = [
  'Fehler gefunden',
  'Funktion fehlt',
  'Bedienung unklar',
  'Dokument / Export',
  'Lob / Sonstiges',
];

export default function FeedbackWidget({ documentType = 'document' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canSubmit = category || message.trim();

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
          category,
          message: message.trim(),
          documentType,
          page: window.location.pathname,
          createdAt: new Date().toISOString(),
        }),
      });
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
      setCategory('');
      setMessage('');
    }
  }

  return (
    <aside className={`feedback-widget${isOpen ? ' is-open' : ''}`} aria-label="Feedback">
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

              <div className="feedback-widget-options" aria-label="Feedback-Kategorie">
                {feedbackCategories.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={category === option ? 'is-active' : ''}
                    onClick={() => setCategory((current) => (current === option ? '' : option))}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <label className="feedback-widget-field">
                <span>Nachricht</span>
                <textarea
                  placeholder="Was ist dir aufgefallen?"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
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
