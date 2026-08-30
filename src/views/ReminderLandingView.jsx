import { Link, useNavigate } from 'react-router-dom';
import DocumentSidebar from '../components/DocumentSidebar.jsx';

const reminderVariants = [
  { title: 'Zahlungserinnerung', path: '/dokumente/mahnung/zahlungserinnerung' },
  { title: '1. Mahnung', path: '/dokumente/mahnung/erste-mahnung' },
  { title: '2. Mahnung', path: '/dokumente/mahnung/zweite-mahnung' },
  { title: 'Letzte Mahnung', path: '/dokumente/mahnung/letzte-mahnung' },
];

export default function ReminderLandingView({ onNavigate }) {
  const navigate = useNavigate();

  function handleSelectDocument(documentId) {
    if (documentId === 'overview') {
      navigate('/dokumente');
      return;
    }

    if (documentId === 'reminder-overview') {
      return;
    }

    onNavigate({ view: 'documents', documentId });
  }

  return (
    <main className="documents-layout reminder-landing-layout">
      <DocumentSidebar
        activeId="reminder-overview"
        activeParentId="reminders"
        onSelect={handleSelectDocument}
      />

      <div className="documents-workspace">
        <section className="paper-page document-paper reminder-landing" aria-labelledby="reminder-landing-title">
          <h1 id="reminder-landing-title">Mahnung erstellen</h1>
          <p className="intro invoice-landing-intro">
            Wähle die passende Mahnungsart, fülle sie direkt im Browser aus und speichere oder drucke sie anschließend als PDF.
          </p>

          <section aria-labelledby="reminder-variants-title">
            <h2 id="reminder-variants-title" className="invoice-landing-section-title">Mahnungsart auswählen</h2>
            <div className="invoice-variant-groups">
              <div className="invoice-variant-group">
                <ul>
                  {reminderVariants.map((variant) => (
                    <li key={variant.path}>
                      <Link to={variant.path}>{variant.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="invoice-landing-info" aria-labelledby="reminder-info-title">
            <h2 id="reminder-info-title">Welche Mahnung passt?</h2>
            <p>
              Eine Zahlungserinnerung eignet sich für einen ersten freundlichen Hinweis. Bleibt die Forderung offen, kannst du mit der ersten und zweiten Mahnung deutlicher werden und anschließend eine letzte Zahlungsfrist setzen.
            </p>
            <p>
              Weitere Grundlagen findest du im Wissensbereich unter <Link to="/wissen/mahnverfahren">Mahnung einfach erklärt</Link>.
            </p>
          </section>

          <section className="invoice-master-data-note" aria-labelledby="reminder-master-data-title">
            <h2 id="reminder-master-data-title">Mahnungen häufiger erstellen?</h2>
            <p>
              Wenn du regelmäßig Mahnungen erstellst, kannst du eigene Unternehmensdaten und Empfänger vorbereiten und bei Bedarf wiederverwenden.
            </p>
            <Link to="/stammdaten">Zu den Stammdaten</Link>
          </section>
        </section>
      </div>
    </main>
  );
}
