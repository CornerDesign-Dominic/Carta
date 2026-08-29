import { Link, useNavigate } from 'react-router-dom';
import DocumentSidebar from '../components/DocumentSidebar.jsx';

const invoiceVariantGroups = [
  {
    title: 'Klassische Rechnungen',
    variants: [
      { title: 'Standardrechnung', path: '/dokumente/rechnung/standard' },
      { title: 'Textrechnung', path: '/dokumente/rechnung/text' },
      { title: 'Warenrechnung', path: '/dokumente/rechnung/waren' },
    ],
  },
  {
    title: 'Rechnungen im Projekt-/Abschlagsverlauf',
    variants: [
      { title: 'Abschlagsrechnung', path: '/dokumente/rechnung/abschlag' },
      { title: 'Teilrechnung', path: '/dokumente/rechnung/teilrechnung' },
      { title: 'Schlussrechnung', path: '/dokumente/rechnung/schlussrechnung' },
    ],
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
            Wähle die passende Rechnungsart, fülle sie direkt im Browser aus und speichere oder drucke sie anschließend als PDF.
          </p>

          <section aria-labelledby="invoice-variants-title">
            <h2 id="invoice-variants-title" className="invoice-landing-section-title">Rechnungsvariante auswählen</h2>
            <div className="invoice-variant-groups">
              {invoiceVariantGroups.map((group) => (
                <section className="invoice-variant-group" aria-labelledby={`invoice-group-${group.variants[0].title}`} key={group.title}>
                  <h3 id={`invoice-group-${group.variants[0].title}`}>{group.title}</h3>
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

          <section className="invoice-landing-info" aria-labelledby="invoice-info-title">
            <h2 id="invoice-info-title">Welche Rechnung passt?</h2>
            <p>
              Nutze die Standardrechnung für die meisten üblichen Leistungen und Lieferungen. Eine Textrechnung eignet sich für frei formulierte Leistungsbeschreibungen, eine Warenrechnung für Artikel mit Mengen und Einzelpreisen.
            </p>
            <p>
              Bei längeren Aufträgen kannst du mit einer Abschlagsrechnung einen Teilbetrag anfordern, mit einer Teilrechnung eine bereits erbrachte Teilleistung abrechnen und mit der Schlussrechnung den gesamten Auftrag abschließen.
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
