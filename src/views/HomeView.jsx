const popularDocuments = [
  { title: 'Rechnung', documentId: 'write-invoice' },
  { title: 'Angebot', documentId: 'write-offer' },
  { title: 'Quittung', documentId: 'write-receipt' },
  { title: 'Mahnung', documentId: 'write-reminder' },
];

export default function HomeView({ onNavigate }) {
  return (
    <main className="paper-page home-page">
      <section className="hero-section home-hero">
        <p className="eyebrow">Belege24</p>
        <h1>Geschäftsdokumente einfach erstellen und verstehen.</h1>
        <p className="intro home-intro">
          Belege24 hilft dir bei Rechnungen, Angeboten, Quittungen, Mahnungen und weiteren
          Geschäftsbelegen – mit praktischen Generatoren und verständlichem Wissen.
        </p>
        <div className="hero-actions home-hero-actions">
          <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
            Dokument erstellen
          </button>
          <button type="button" onClick={() => onNavigate({ view: 'knowledge' })}>
            Wissen ansehen
          </button>
        </div>
      </section>

      <section className="home-action-grid" aria-label="Belege24 Bereiche">
        <article className="home-action-card">
          <h2>Dokumente erstellen</h2>
          <p>
            Erstelle wichtige Geschäftsbelege direkt im Browser – ohne Anmeldung und ohne
            komplizierte Software.
          </p>
          <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
            Zu den Dokumenten
          </button>
        </article>

        <article className="home-action-card">
          <h2>Wissen nachschlagen</h2>
          <p>
            Verständliche Hinweise zu Pflichtangaben, Belegarten und typischen Fragen rund um
            Geschäftsdokumente.
          </p>
          <button type="button" onClick={() => onNavigate({ view: 'knowledge' })}>
            Zum Wissen
          </button>
        </article>
      </section>

      <section className="home-popular-section" aria-labelledby="popular-documents-title">
        <h2 id="popular-documents-title">Beliebte Dokumente</h2>
        <div className="home-document-grid">
          {popularDocuments.map((document) => (
            <button
              className="home-document-card"
              type="button"
              onClick={() => onNavigate({ view: 'documents', documentId: document.documentId })}
              key={document.title}
            >
              {document.title}
            </button>
          ))}
        </div>
      </section>

      <p className="home-trust-line">Kostenlos nutzbar · Keine Anmeldung · Direkt als PDF oder Ausdruck</p>
    </main>
  );
}
