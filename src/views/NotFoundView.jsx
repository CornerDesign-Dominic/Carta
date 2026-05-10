export default function NotFoundView({ onNavigate }) {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <article className="not-found-document">
        <header className="not-found-header">
          <p className="eyebrow">HINWEIS</p>
          <h1 id="not-found-title">Error 404</h1>
          <p className="not-found-subject">Die Seite konnte nicht gefunden werden.</p>
        </header>

        <p className="not-found-text">
          Die eingegebene Adresse ist eventuell falsch, die Seite wurde
          verschoben oder sie existiert nicht mehr. Über die Startseite oder den
          Dokumentbereich finden Sie zurück zu den verfügbaren Inhalten.
        </p>

        <div className="not-found-actions" aria-label="Weiterführende Aktionen">
          <button type="button" onClick={() => onNavigate({ view: 'home' })}>
            Zur Startseite
          </button>
          <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
            Dokumente erstellen
          </button>
        </div>

        <footer className="not-found-footer">
          <span>Belege24</span>
          <span>belege24.com</span>
          <span>Dokumentgeneratoren · Wissen · Werkzeuge</span>
        </footer>
      </article>
    </main>
  );
}
