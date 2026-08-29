import { Link, useNavigate } from 'react-router-dom';
import DocumentSidebar from '../components/DocumentSidebar.jsx';

const invoiceVariants = [
  {
    title: 'Standardrechnung',
    description: 'Die klassische Rechnung für Leistungen oder Waren mit Positionen, Steuern und Zahlungsangaben.',
    path: '/dokumente/rechnung/standard',
  },
  {
    title: 'Textrechnung',
    description: 'Für Rechnungen mit einer freien, ausführlichen Leistungsbeschreibung statt einzelner Positionen.',
    path: '/dokumente/rechnung/text',
  },
  {
    title: 'Warenrechnung',
    description: 'Für Warenlieferungen mit Mengen, Einzelpreisen und übersichtlich aufgeführten Artikeln.',
    path: '/dokumente/rechnung/waren',
  },
  {
    title: 'Abschlagsrechnung',
    description: 'Fordere einen Teilbetrag für ein laufendes Projekt oder einen noch nicht abgeschlossenen Auftrag an.',
    path: '/dokumente/rechnung/abschlag',
  },
  {
    title: 'Teilrechnung',
    description: 'Rechne einen klar abgegrenzten, bereits erbrachten Teil einer Gesamtleistung ab.',
    path: '/dokumente/rechnung/teilrechnung',
  },
  {
    title: 'Schlussrechnung',
    description: 'Schließe einen Auftrag ab und berücksichtige bereits gestellte Abschlags- oder Teilrechnungen.',
    path: '/dokumente/rechnung/schlussrechnung',
  },
];

export default function InvoiceLandingView({ onNavigate }) {
  const navigate = useNavigate();

  function handleSelectDocument(documentId) {
    if (documentId === 'overview') {
      navigate('/dokumente');
      return;
    }

    if (documentId === 'invoice-overview') {
      return;
    }

    onNavigate({ view: 'documents', documentId });
  }

  return (
    <main className="documents-layout invoice-landing-layout">
      <DocumentSidebar
        activeId="invoice-overview"
        activeParentId="invoices"
        onSelect={handleSelectDocument}
      />

      <div className="documents-workspace">
        <section className="paper-page document-paper invoice-landing" aria-labelledby="invoice-landing-title">
          <h1 id="invoice-landing-title">Rechnung erstellen</h1>
          <p className="intro invoice-landing-intro">
            Wähle die Rechnungsart, die zu deinem Auftrag passt. Alle Varianten kannst du direkt im Browser ausfüllen und anschließend als PDF speichern oder drucken.
          </p>

          <section aria-labelledby="invoice-variants-title">
            <h2 id="invoice-variants-title" className="invoice-landing-section-title">Rechnungsvariante auswählen</h2>
            <div className="invoice-variant-grid">
              {invoiceVariants.map((variant) => (
                <article className="invoice-variant-card" key={variant.path}>
                  <h3>{variant.title}</h3>
                  <p>{variant.description}</p>
                  <Link to={variant.path}>Zum Generator</Link>
                </article>
              ))}
            </div>
          </section>

          <section className="invoice-landing-info" aria-labelledby="invoice-info-title">
            <h2 id="invoice-info-title">Welche Rechnung passt?</h2>
            <p>
              Für die meisten Fälle ist die Standardrechnung die passende Wahl. Spezielle Varianten helfen dir, Warenlieferungen, freie Leistungsbeschreibungen oder aufeinander aufbauende Zahlungen übersichtlich abzubilden.
            </p>
            <p>
              Hinweise zu Pflichtangaben, Rechnungsnummern und Aufbewahrung findest du im Wissensbereich unter <Link to="/wissen/rechnung">Rechnung einfach erklärt</Link>.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
