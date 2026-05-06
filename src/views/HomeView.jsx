import { featureDocuments } from '../data/documents.js';

export default function HomeView() {
  return (
    <main className="paper-page">
      <section className="hero-section">
        <p className="eyebrow">DIGITALES BÜRO</p>
        <h1>Geschäftsdokumente einfach im Browser erstellen.</h1>
        <p className="intro">
          Carta hilft dir dabei, Angebote, Rechnungen und weitere Belege schnell,
          übersichtlich und ohne Anmeldung vorzubereiten.
        </p>
      </section>

      <section className="feature-grid" id="dokumente" aria-label="Dokumentarten">
        {featureDocuments.map((type) => (
          <article className="feature-card" key={type.title}>
            <span className="card-marker" aria-hidden="true" />
            <h2>{type.title}</h2>
            <p>{type.text}</p>
          </article>
        ))}
      </section>

      <section className="foundation-section" id="basis">
        <div>
          <p className="section-kicker">Saubere Basis</p>
          <h2>Bereit für ein leichtes Dokumenten-Tool.</h2>
        </div>
        <p>
          Carta startet mit einer reduzierten, schnellen Oberfläche und einer klaren
          Struktur. So bleibt die Anwendung angenehm schlank und kann später Schritt
          für Schritt um Vorlagen, Bearbeitung und Exportfunktionen erweitert werden.
        </p>
      </section>
    </main>
  );
}
