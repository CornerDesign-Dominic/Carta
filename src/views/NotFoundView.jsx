export default function NotFoundView({ onNavigate }) {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <article className="not-found-document">
        <header className="not-found-letterhead">
          <div>
            <strong>Belege24 Muster GmbH</strong>
          </div>
          <address>
            E-Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kontakt@belege24.com
            <br />
            Website&nbsp;&nbsp;&nbsp;www.belege24.com
            <br />
            belege24.com
            <br />
            Dokumente · Wissen · Werkzeuge
          </address>
        </header>

        <p className="not-found-sender-line">
          Belege24 Muster GmbH · Musterstraße 12 · 10115 Berlin
        </p>

        <section className="not-found-meta" aria-label="Dokumentangaben">
          <div className="not-found-recipient">
            <p>Besucher dieser Website</p>
            <p>Aktuell aufgerufene Adresse</p>
            <p>Nicht verfügbar</p>
          </div>
          <dl>
            <div>
              <dt>Hinweisnummer</dt>
              <dd>404-2026-001</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Seite nicht gefunden</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>belege24.com</dd>
            </div>
          </dl>
        </section>

        <section className="not-found-body">
          <h1 id="not-found-title">Error 404</h1>
          <p className="not-found-subject">Die Seite konnte nicht gefunden werden.</p>
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
            Belege24 Muster GmbH
            <br />
            Musterstraße 12
            <br />
            10115 Berlin
          </span>
          <span>
            USt-IdNr.: DE123456789
            <br />
            Steuernummer: 12/345/67890
            <br />
            Geschäftsführer: Belege24
          </span>
          <span>
            Website: belege24.com
            <br />
            E-Mail: kontakt@belege24.com
            <br />
            Dokumente · Wissen · Werkzeuge
          </span>
        </footer>
      </article>
    </main>
  );
}
