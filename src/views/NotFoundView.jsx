export default function NotFoundView({ onNavigate }) {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <article className="not-found-document">
        <header className="not-found-letterhead">
          <div>
            <strong>Belege24</strong>
            <span>Digitale Dokumentgeneratoren</span>
          </div>
          <address>
            belege24.com
            <br />
            Dokumente · Wissen · Werkzeuge
          </address>
        </header>

        <p className="not-found-sender-line">
          Belege24 · belege24.com · Dokumentgeneratoren im Browser
        </p>

        <section className="not-found-meta" aria-label="Dokumentangaben">
          <div className="not-found-recipient">
            <p>Besucher dieser Website</p>
            <p>Aktuell aufgerufene Adresse</p>
            <p>Nicht verfügbar</p>
          </div>
          <dl>
            <div>
              <dt>Dokumenttyp</dt>
              <dd>Hinweis</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Error 404</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>belege24.com</dd>
            </div>
          </dl>
        </section>

        <section className="not-found-body">
          <p className="eyebrow">HINWEIS</p>
          <h1 id="not-found-title">Error 404</h1>
          <p className="not-found-subject">Betreff: Die Seite konnte nicht gefunden werden.</p>
          <p>
            Die eingegebene Adresse ist eventuell falsch, die Seite wurde
            verschoben oder sie existiert nicht mehr. Bitte prüfen Sie die
            Adresse oder nutzen Sie eine der folgenden Möglichkeiten, um zu den
            verfügbaren Bereichen von Belege24 zurückzukehren.
          </p>
        </section>

        <div className="not-found-actions" aria-label="Weiterführende Aktionen">
          <button type="button" onClick={() => onNavigate({ view: 'home' })}>
            Zur Startseite
          </button>
          <button type="button" onClick={() => onNavigate({ view: 'documents' })}>
            Dokumente erstellen
          </button>
        </div>

        <footer className="not-found-footer">
          <span>
            Belege24
            <br />
            belege24.com
          </span>
          <span>
            Dokumentgeneratoren
            <br />
            Rechnungen · Angebote · Mahnungen
          </span>
          <span>
            Wissen · Werkzeuge
            <br />
            Kaufmännische Praxis im Browser
          </span>
        </footer>
      </article>
    </main>
  );
}
