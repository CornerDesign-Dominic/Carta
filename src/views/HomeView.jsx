const documentItems = [
  { title: 'Rechnungen', text: 'Saubere Rechnungen mit Positionen, Summen und PDF-Ausgabe.', documentId: 'write-invoice' },
  { title: 'Angebote', text: 'Professionelle Angebote für Kunden und Projekte erstellen.', documentId: 'write-offer' },
  { title: 'Mahnungen', text: 'Mahnungen und Zahlungserinnerungen strukturiert vorbereiten.', documentId: 'write-reminder' },
  { title: 'Gutschriften', text: 'Korrekturen und Rückerstattungen nachvollziehbar dokumentieren.', documentId: 'write-credit-note' },
  { title: 'Quittungen', text: 'Zahlungen schnell bestätigen und als Beleg speichern.', documentId: 'write-receipt' },
];

const toolItems = [
  { title: 'Zinsrechner', text: 'Einfache Zinsen und Laufzeiten berechnen.', toolId: 'zinsrechner' },
  { title: 'Umsatzsteuer', text: 'Netto, Steuerbetrag und Brutto sauber ermitteln.', toolId: 'umsatzsteuerrechner' },
  { title: 'Verzugszinsen', text: 'Verzugstage und gesetzliche Verzugszinsen prüfen.', toolId: 'verzugszinsenrechner' },
  { title: 'Arbeitszeit', text: 'Arbeitszeiten inklusive Pausen berechnen.', toolId: 'arbeitszeitrechner' },
  { title: 'Kostenvergleich', text: 'Varianten nach Kosten und Wirtschaftlichkeit vergleichen.', toolId: 'kostenvergleichsrechner' },
];

const knowledgeItems = [
  { title: 'Rechnung', slug: 'rechnung' },
  { title: 'Angebot', slug: 'angebot' },
  { title: 'Mahnverfahren', slug: 'mahnverfahren' },
];

export default function HomeView({ onNavigate }) {
  return (
    <main className="paper-page home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="eyebrow">Belege24</p>
          <h1 id="home-title">Geschäftsdokumente einfach erstellen</h1>
          <p className="intro home-intro">
            Erstelle Rechnungen, Angebote, Mahnungen und weitere Belege direkt im Browser –
            übersichtlich, schnell und professionell.
          </p>
          <div className="home-hero-actions">
            <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
              Dokument erstellen
            </button>
            <button type="button" onClick={() => onNavigate({ view: 'tools' })}>
              Werkzeuge ansehen
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

      <section className="home-section" aria-labelledby="home-documents-title">
        <div className="home-section-heading">
          <h2 id="home-documents-title">Dokumente</h2>
          <p>Generatoren für typische Belege im geschäftlichen Alltag.</p>
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
          <p>Rechner für Zinsen, Steuern, Fristen, Arbeitszeit und Kosten.</p>
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

      <section className="home-knowledge-section" aria-labelledby="home-knowledge-title">
        <div>
          <h2 id="home-knowledge-title">Wissen</h2>
          <p>
            Verständliche Artikel zu Geschäftsdokumenten, Pflichtangaben und typischen Abläufen.
          </p>
        </div>
        <div className="home-knowledge-links">
          {knowledgeItems.map((item) => (
            <button
              type="button"
              onClick={() => onNavigate({ view: 'knowledge', slug: item.slug })}
              key={item.slug}
            >
              {item.title}
            </button>
          ))}
          <button type="button" onClick={() => onNavigate({ view: 'knowledge' })}>
            Alle Wissensartikel
          </button>
        </div>
      </section>
    </main>
  );
}
