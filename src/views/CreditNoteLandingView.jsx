import { Link, useNavigate } from 'react-router-dom';
import DocumentSidebar from '../components/DocumentSidebar.jsx';

const creditNoteVariantGroups = [
  {
    id: 'standard',
    title: 'Gutschriften',
    variants: [
      { title: 'Standardgutschrift', path: '/dokumente/gutschrift/standard' },
    ],
  },
  {
    id: 'corrections',
    title: 'Korrekturen bestehender Rechnungen',
    variants: [
      { title: 'Stornorechnung', path: '/dokumente/gutschrift/stornorechnung' },
      { title: 'Rechnungskorrektur', path: '/dokumente/gutschrift/rechnungskorrektur' },
    ],
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
          <p className="intro invoice-landing-intro">
            Wähle die passende Gutschriftsart, fülle sie direkt im Browser aus und speichere oder drucke sie anschließend als PDF.
          </p>

          <section aria-labelledby="credit-note-variants-title">
            <h2 id="credit-note-variants-title" className="invoice-landing-section-title">Gutschriftsvariante auswählen</h2>
            <div className="invoice-variant-groups">
              {creditNoteVariantGroups.map((group) => (
                <section className="invoice-variant-group" aria-labelledby={`credit-note-group-${group.id}`} key={group.id}>
                  <h3 id={`credit-note-group-${group.id}`}>{group.title}</h3>
                  <ul>
                    {group.variants.map((variant) => (
                      <li key={variant.path}>
                        <Link to={variant.path}>{variant.title}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="invoice-landing-info" aria-labelledby="credit-note-info-title">
            <h2 id="credit-note-info-title">Welche Variante passt?</h2>
            <p>
              Nutze die Standardgutschrift für eine Rückvergütung. Mit der Stornorechnung hebst du eine Rechnung vollständig auf, während die Rechnungskorrektur einzelne Angaben oder Beträge berichtigt.
            </p>
            <p>
              Weitere Grundlagen findest du im Wissensbereich unter <Link to="/wissen/gutschrift">Gutschrift einfach erklärt</Link>.
            </p>
          </section>

          <section className="invoice-master-data-note" aria-labelledby="credit-note-master-data-title">
            <h2 id="credit-note-master-data-title">Gutschriften häufiger erstellen?</h2>
            <p>
              Wenn du regelmäßig Gutschriften erstellst, kannst du eigene Daten, Empfänger und Leistungen vorbereiten und bei Bedarf wiederverwenden.
            </p>
            <Link to="/stammdaten">Zu den Stammdaten</Link>
          </section>
        </section>
      </div>
    </main>
  );
}
