const documentItems = [
  { title: 'Rechnungen', text: 'Saubere Rechnungen mit Positionen, Summen und PDF-Ausgabe.', documentId: 'write-invoice' },
  { title: 'Angebote', text: 'Professionelle Angebote für Kunden und Projekte erstellen.', documentId: 'write-offer' },
  { title: 'Mahnungen', text: 'Mahnungen und Zahlungserinnerungen strukturiert vorbereiten.', documentId: 'write-reminder' },
  { title: 'Gutschriften', text: 'Korrekturen und Rückerstattungen nachvollziehbar dokumentieren.', documentId: 'write-credit-note' },
  { title: 'Geschäftsbriefe', text: 'Professionelle Schreiben direkt im Browser vorbereiten.', documentId: 'write-business-letter' },
  { title: 'Quittungen', text: 'Zahlungen schnell bestätigen und als Beleg speichern.', documentId: 'write-receipt' },
];

const toolItems = [
  { title: 'Zinsrechner', text: 'Einfache Zinsen und Laufzeiten berechnen.', toolId: 'zinsrechner' },
  { title: 'Umsatzsteuer', text: 'Netto, Steuerbetrag und Brutto sauber ermitteln.', toolId: 'umsatzsteuerrechner' },
  { title: 'Verzugszinsen', text: 'Verzugstage und gesetzliche Verzugszinsen prüfen.', toolId: 'verzugszinsenrechner' },
  { title: 'Arbeitszeit', text: 'Arbeitszeiten inklusive Pausen berechnen.', toolId: 'arbeitszeitrechner' },
  { title: 'Kostenvergleich', text: 'Varianten nach Kosten und Wirtschaftlichkeit vergleichen.', toolId: 'kostenvergleichsrechner' },
];

export default function HomeView({ onNavigate }) {
  return (
    <main className="paper-page home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <h1 id="home-title">Deine Belege</h1>
          <ul className="home-benefit-list">
            <li>Direkt online erstellen</li>
            <li>Als PDF speichern oder drucken</li>
            <li>Professionell aufgebaut</li>
            <li>Kostenlos und ohne Anmeldung</li>
            <li>Keine Datenspeicherung</li>
          </ul>
          <p className="intro home-intro">Erstelle dein erstes Dokument und probiere Belege24 direkt aus.</p>
          <div className="home-hero-actions">
            <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
              Dokument erstellen
            </button>
          </div>
        </div>

        <div className="home-document-preview" aria-hidden="true">
          <div className="home-document-sheet">
            <div className="home-document-header">
              <strong>Belege24 Muster GmbH</strong>
              <span>Rechnung</span>
            </div>
            <div className="home-document-address">
              <span>Max Mustermann GmbH</span>
              <span>Musterstraße 12</span>
              <span>12345 Musterstadt</span>
            </div>
            <div className="home-document-title-row">
              <strong>Rechnung 2026-014</strong>
              <span>13.07.2026</span>
            </div>
            <div className="home-document-table">
              <span>Leistung</span>
              <span>Betrag</span>
              <span>Beratung</span>
              <span>1.200,00 €</span>
              <span>Dokumentation</span>
              <span>360,00 €</span>
            </div>
            <div className="home-document-total">
              <span>Gesamtbetrag</span>
              <strong>1.856,40 €</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="home-trust-strip" aria-label="Schnell startklar">
        <strong>Schnell startklar</strong>
        <p>
          Ohne Konto, ohne Einrichtung und ohne versteckte Pflichtangaben. Wähle ein Dokument,
          fülle die Felder aus und nutze es direkt als PDF oder Druckvorlage.
        </p>
      </section>

      <section className="home-section" aria-labelledby="home-documents-title">
        <div className="home-section-heading">
          <h2 id="home-documents-title">Dokumente</h2>
          <p>Die meistgenutzten Dokumente für deinen geschäftlichen Alltag.</p>
        </div>
        <div className="home-card-grid">
          {documentItems.map((item) => (
            <button
              className="home-card"
              type="button"
              onClick={() => onNavigate({ view: 'documents', documentId: item.documentId })}
              key={item.title}
            >
              <span>{item.title}</span>
              <p>{item.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-tools-title">
        <div className="home-section-heading">
          <h2 id="home-tools-title">Werkzeuge</h2>
          <p>Beliebte Rechner und Werkzeuge für Zahlen, Fristen und Entscheidungen.</p>
        </div>
        <div className="home-card-grid">
          {toolItems.map((item) => (
            <button
              className="home-card"
              type="button"
              onClick={() => onNavigate({ view: 'tools', toolId: item.toolId, toolPath: `/tools/${item.toolId}` })}
              key={item.title}
            >
              <span>{item.title}</span>
              <p>{item.text}</p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
