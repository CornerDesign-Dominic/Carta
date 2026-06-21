const trustItems = [
  'Kostenlos nutzbar',
  'Keine Anmeldung',
  'Keine Speicherung eingegebener Daten',
  'PDF & Druck',
];

const platformCards = [
  {
    title: 'Dokumente erstellen',
    text: 'Praktische Generatoren helfen dabei, Rechnungen, Angebote, Quittungen und Mahnungen sauber vorzubereiten.',
  },
  {
    title: 'Wissen nachschlagen',
    text: 'Verständliche Inhalte erklären Aufbau, typische Angaben und sinnvolle Verwendung wichtiger Geschäftsbelege.',
  },
  {
    title: 'Für kleine Unternehmen',
    text: 'Belege24 richtet sich an Selbstständige, Gründer und kleine Teams, die klare Dokumente ohne schwere Software brauchen.',
  },
];

const popularDocuments = [
  {
    title: 'Rechnung',
    text: 'Leistungen, Beträge, Steuern und Zahlungsinformationen übersichtlich zusammenführen.',
    documentId: 'write-invoice',
  },
  {
    title: 'Angebot',
    text: 'Leistungen und Konditionen nachvollziehbar für Kundenentscheidungen darstellen.',
    documentId: 'write-offer',
  },
  {
    title: 'Quittung',
    text: 'Zahlungen kompakt bestätigen und als druckfähigen Beleg vorbereiten.',
    documentId: 'write-receipt',
  },
  {
    title: 'Mahnung',
    text: 'Offene Forderungen sachlich, strukturiert und mit klarer Zahlungsfrist ansprechen.',
    documentId: 'write-reminder',
  },
];

export default function HomeView({ onNavigate }) {
  return (
    <main className="paper-page home-page">
      <section className="hero-section home-hero">
        <p className="eyebrow">Belege24</p>
        <h1>Geschäftsdokumente verstehen, erstellen und sicher verwenden.</h1>
        <p className="intro home-intro">
          Belege24 verbindet praktische Dokument-Generatoren mit verständlichem Wissen zu
          Rechnungen, Angeboten, Quittungen, Mahnungen und weiteren Geschäftsbelegen.
        </p>
        <div className="hero-actions home-hero-actions">
          <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
            Dokument erstellen
          </button>
          <button type="button" onClick={() => onNavigate({ view: 'knowledge' })}>
            Wissen entdecken
          </button>
        </div>
      </section>

      <section className="home-trust-row" aria-label="Vorteile von Belege24">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="home-section home-about-section" aria-labelledby="home-about-title">
        <p className="section-kicker">Was ist Belege24?</p>
        <h2 id="home-about-title">Eine Wissens- und Werkzeugplattform für Geschäftsdokumente.</h2>
        <p>
          Belege24 bündelt verständliche Informationen und einfache Browser-Werkzeuge rund um
          geschäftliche Belege. Die Plattform hilft dabei, wichtige Dokumentarten einzuordnen,
          Inhalte sicherer zu strukturieren und passende Dokumente direkt vorzubereiten.
        </p>
      </section>

      <section className="feature-grid home-platform-grid" aria-label="Belege24 Schwerpunkte">
        {platformCards.map((card) => (
          <article className="feature-card home-platform-card" key={card.title}>
            <span className="card-marker" aria-hidden="true" />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="home-section home-documents-section" aria-labelledby="popular-documents-title">
        <div className="home-section-heading">
          <p className="section-kicker">Beliebte Dokumente</p>
          <h2 id="popular-documents-title">Schnell zum passenden Geschäftsbeleg.</h2>
        </div>
        <div className="home-document-grid">
          {popularDocuments.map((document) => (
            <button
              className="home-document-card"
              type="button"
              onClick={() => onNavigate({ view: 'documents', documentId: document.documentId })}
              key={document.title}
            >
              <span>{document.title}</span>
              <p>{document.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="foundation-section home-final-cta" aria-labelledby="home-cta-title">
        <div>
          <p className="section-kicker">Direkt loslegen</p>
          <h2 id="home-cta-title">Starte mit deinem nächsten Geschäftsdokument.</h2>
        </div>
        <div className="foundation-content">
          <p>
            Wähle einen Generator oder lies nach, welche Angaben für dein Dokument sinnvoll sind.
            Alles läuft direkt im Browser und bleibt bewusst einfach gehalten.
          </p>
          <div className="home-cta-actions">
            <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
              Dokument erstellen
            </button>
            <button type="button" onClick={() => onNavigate({ view: 'knowledge' })}>
              Wissen entdecken
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
