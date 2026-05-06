import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const navigationItems = [
  { label: 'Startseite', href: '/' },
  { label: 'Dokumente', href: '#dokumente' },
  { label: 'Funktionen', href: '#basis' },
  { label: 'Rechtliches', href: '#rechtliches' },
];

const documentTypes = [
  {
    title: 'Angebote',
    text: 'Klar strukturierte Angebotsentwürfe mit sauberem Aufbau für Produkte, Leistungen und Konditionen.',
  },
  {
    title: 'Rechnungen',
    text: 'Übersichtliche Rechnungsgrundlagen, die sich später um Nummernkreise, Positionen und Steuern erweitern lassen.',
  },
  {
    title: 'Mahnungen',
    text: 'Ruhig formulierte Erinnerungen mit dem passenden Rahmen für Fristen, Beträge und offene Belege.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Hauptnavigation">
        <a className="brand" href="/" aria-label="Carta Startseite">
          Carta
        </a>
        <nav className="nav-links">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

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
          {documentTypes.map((type) => (
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
            Carta startet mit einer reduzierten, schnellen Oberfläche und einer
            klaren Struktur. So bleibt die Anwendung angenehm schlank und kann
            später Schritt für Schritt um Vorlagen, Bearbeitung und Exportfunktionen
            erweitert werden.
          </p>
        </section>
      </main>

      <footer className="site-footer" id="rechtliches">
        <a href="/">Impressum</a>
        <a href="/">Datenschutz</a>
        <a href="/">AGB</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
