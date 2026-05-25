const homeDocumentTypes = [
  {
    title: 'Rechnungen',
    text: 'Erstelle Rechnungen mit Positionen, Steuerangaben, Summen, Fußdaten und druckfertigem A4-Layout.',
  },
  {
    title: 'Angebote',
    text: 'Formuliere Angebote mit Leistungen, Preisen, Gültigkeit und klarer Struktur für die Kundenfreigabe.',
  },
  {
    title: 'Mahnungen',
    text: 'Erstelle sachliche Mahnungen mit offenen Posten, Zahlungsfrist, Gebühren und eindeutiger Gesamtsumme.',
  },
];

const foundationFacts = [
  'Kostenlos nutzbar',
  'Keine Anmeldung erforderlich',
  'Keine Werbung',
  'Keine Speicherung der eingegebenen Daten',
  'Direkt im Browser ausfüllen',
  'Als PDF speichern oder drucken',
];

export default function HomeView({ onNavigate }) {
  return (
    <main className="paper-page home-page">
      <section className="hero-section">
        <p className="eyebrow">DIGITALES BÜRO</p>
        <h1>Geschäftsdokumente einfach im Browser erstellen.</h1>
        <p className="intro">
          Belege24 unterstützt dich beim Erstellen von Rechnungen, Angeboten und Mahnungen:
          übersichtlich, druckbereit und ohne Anmeldung.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
            Dokumente erstellen
          </button>
        </div>
      </section>

      <section className="feature-grid" id="dokumente" aria-label="Dokumentarten">
        {homeDocumentTypes.map((type) => (
          <article className="feature-card" key={type.title}>
            <span className="card-marker" aria-hidden="true" />
            <h2>{type.title}</h2>
            <p>{type.text}</p>
          </article>
        ))}
      </section>

      <section className="foundation-section" id="basis">
        <div>
          <p className="section-kicker">Klare Dokumente</p>
          <h2>Einfach Dokumente erstellen.</h2>
        </div>
        <div className="foundation-content">
          <p>
            Belege24 kann kostenlos genutzt werden. Es ist keine Anmeldung erforderlich
            und es werden keine eingegebenen Daten gespeichert. Die Dokumente werden
            direkt im Browser erstellt und können anschließend als PDF gespeichert oder
            gedruckt werden.
          </p>
          <ul className="foundation-facts" aria-label="Eigenschaften von Belege24">
            {foundationFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
