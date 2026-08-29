import { Link, useNavigate } from 'react-router-dom';
import DocumentSidebar from '../components/DocumentSidebar.jsx';

const creditNoteVariants = [
  {
    title: 'Standardgutschrift',
    description: 'Für eine Rückvergütung oder Gutschrift zu einer bereits erbrachten Leistung oder Lieferung.',
    path: '/dokumente/gutschrift/standard',
  },
  {
    title: 'Stornorechnung',
    description: 'Wenn eine ursprüngliche Rechnung vollständig aufgehoben und nachvollziehbar storniert werden soll.',
    path: '/dokumente/gutschrift/stornorechnung',
  },
  {
    title: 'Rechnungskorrektur',
    description: 'Für die gezielte Korrektur einer bereits ausgestellten Rechnung und ihrer Angaben oder Beträge.',
    path: '/dokumente/gutschrift/rechnungskorrektur',
  },
];

export default function CreditNoteLandingView({ onNavigate }) {
  const navigate = useNavigate();

  function handleSelectDocument(documentId) {
    if (documentId === 'overview') {
      navigate('/dokumente');
      return;
    }

    if (documentId === 'credit-note-overview') {
      return;
    }

    onNavigate({ view: 'documents', documentId });
  }

  return (
    <main className="documents-layout credit-note-landing-layout">
      <DocumentSidebar
        activeId="credit-note-overview"
        activeParentId="credit-notes"
        onSelect={handleSelectDocument}
      />

      <div className="documents-workspace">
        <section className="paper-page document-paper credit-note-landing" aria-labelledby="credit-note-landing-title">
          <h1 id="credit-note-landing-title">Gutschrift erstellen</h1>
          <p className="intro credit-note-landing-intro">
            Wähle die passende Gutschriftsart, fülle sie direkt im Browser aus und speichere oder drucke sie anschließend als PDF.
          </p>

          <section aria-labelledby="credit-note-variants-title">
            <h2 id="credit-note-variants-title" className="credit-note-landing-section-title">Gutschriftsvariante auswählen</h2>
            <div className="credit-note-variant-grid">
              {creditNoteVariants.map((variant) => (
                <article className="credit-note-variant-card" key={variant.path}>
                  <h3>{variant.title}</h3>
                  <p>{variant.description}</p>
                  <Link to={variant.path}>Zum Generator</Link>
                </article>
              ))}
            </div>
          </section>

          <section className="credit-note-landing-info" aria-labelledby="credit-note-info-title">
            <h2 id="credit-note-info-title">Welche Variante passt?</h2>
            <p>
              Nutze die Standardgutschrift für eine Rückvergütung. Mit der Stornorechnung hebst du eine Rechnung vollständig auf, während die Rechnungskorrektur einzelne Angaben oder Beträge berichtigt.
            </p>
            <p>
              Weitere Grundlagen findest du im Wissensbereich unter <Link to="/wissen/gutschrift">Gutschrift einfach erklärt</Link>.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
