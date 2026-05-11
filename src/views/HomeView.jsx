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

const workflowSteps = [
  {
    title: 'Formular ausfüllen',
    text: 'Erfasse Absender, Empfänger, Dokumentdaten, Positionen und Fußdaten übersichtlich im Formular.',
  },
  {
    title: 'Dokument prüfen',
    text: 'Sieh das fertige A4-Dokument direkt darunter und passe Texte oder Angaben bei Bedarf im Dokument an.',
  },
  {
    title: 'PDF erstellen oder drucken',
    text: 'Speichere das Ergebnis als PDF oder öffne den Druckdialog für eine saubere Ausgabe.',
  },
  {
    title: 'Vorlage wiederverwenden',
    text: 'Speichere deine Daten als JSON-Vorlage und lade sie für ähnliche Dokumente erneut.',
  },
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

      <section className="workflow-section" aria-labelledby="workflow-title">
        <div>
          <p className="section-kicker">So funktioniert Belege24</p>
          <h2 id="workflow-title">Vom Formular zum fertigen Beleg.</h2>
        </div>
        <div className="workflow-grid">
          {workflowSteps.map((step, index) => (
            <article className="workflow-card" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="foundation-section" id="basis">
        <div>
          <p className="section-kicker">Klare Dokumente</p>
          <h2>Für klare Belege ohne unnötige Komplexität.</h2>
        </div>
        <p>
          Belege24 konzentriert sich auf sauber aufgebaute Geschäftsdokumente statt auf
          überladene Buchhaltungssoftware. Du füllst aus, prüfst und gibst deine Belege
          direkt weiter.
        </p>
      </section>
    </main>
  );
}
