import MasterDataSidebar from '../components/masterData/MasterDataSidebar.jsx';
import PartnerMasterDataEditor from '../components/masterData/PartnerMasterDataEditor.jsx';
import OwnDataMasterDataEditor from '../components/masterData/OwnDataMasterDataEditor.jsx';
import CatalogItemMasterDataEditor from '../components/masterData/CatalogItemMasterDataEditor.jsx';
import { findMasterDataItem, masterDataItems } from '../data/masterData.js';

function isPlainLeftClick(event) {
  return (
    !event.defaultPrevented
    && event.button === 0
    && !event.metaKey
    && !event.ctrlKey
    && !event.altKey
    && !event.shiftKey
  );
}

function MasterDataMiniVisual({ type }) {
  const labelsByType = {
    collect: ['Unternehmen', 'Kontakt', 'Bankverbindung'],
    document: ['Stammdaten', 'übersichtlich', 'PDF'],
    reuse: ['Partner wählen', 'Daten übernehmen', 'Dokument bereit'],
    local: ['Direkt im Browser', 'Keine Anmeldung', 'Lokal verarbeiten'],
    ownData: ['Absenderdaten', 'Kontaktdaten', 'Fußzeile'],
    partners: ['Partner', 'Rechnungsadresse', 'Lieferadresse'],
    catalogItems: ['Leistung oder Artikel', 'Einheit und Menge', 'Preis und Umsatzsteuer'],
  };

  const titlesByType = {
    document: 'Sammlung',
    reuse: 'Dokument',
    ownData: 'Eigene Daten',
    partners: 'Partnerdaten',
    catalogItems: 'Leistungen & Artikel',
  };

  return (
    <div className={`master-data-mini master-data-mini-${type}`} aria-hidden="true">
      <div className="master-data-mini-header">
        <strong>Belege24</strong>
        <span>Stammdaten</span>
      </div>
      <div className="master-data-mini-title">
        {titlesByType[type] ?? 'Übersicht'}
      </div>
      <div className="master-data-mini-fields">
        {labelsByType[type].map((label, index) => (
          <span
            className={index === 0 || (type === 'reuse' && index === 1) ? 'master-data-mini-line is-highlighted' : 'master-data-mini-line'}
            key={label}
          >
            {label}
          </span>
        ))}
      </div>
      {type === 'reuse' && <span className="master-data-mini-arrow">→</span>}
      {type === 'local' && <span className="master-data-mini-browser-dot" />}
    </div>
  );
}

function MasterDataOverview({ onSelectItem }) {
  const usageSections = [
    {
      title: 'Deine Daten bleiben bei dir.',
      text: 'Wir haben uns für diese Art der Stammdatenverwaltung entschieden, um garantieren zu können, dass deine Daten nur von dir verarbeitet werden.',
    },
    {
      title: 'Wie funktionieren die Stammdaten?',
      text: 'Wir bieten dir für unsere Belege drei Arten von Stammdaten an: ein Stammdatenblatt für deine eigenen Daten, ein Stammdatenblatt für deine Partner und Lieferadressen sowie eine Sammlung für Leistungen und Artikel. Für jede der drei Kategorien wird ein PDF-Dokument generiert. Die darin enthaltenen Daten sind als JSON-Datei in die PDF eingebettet. So werden sie später direkt aus der PDF in die Belege24-Dokumente übertragen. Die Stammdatenblätter können jederzeit hochgeladen und angepasst werden.',
    },
  ];
  const selectionSections = [
    {
      item: masterDataItems.find((item) => item.id === 'own-data'),
      title: 'Deine eigenen Daten',
      text: 'Deine eigenen Daten werden später in den Dokumenten für Absenderdaten, Kontaktdaten und die Fußzeile verwendet. Achte besonders darauf, Unternehmens-, Steuer- und Bankdaten vollständig und aktuell zu halten.',
      visual: 'ownData',
    },
    {
      item: masterDataItems.find((item) => item.id === 'partners'),
      title: 'Partner und Lieferadressen',
      text: 'Partner- und Lieferadressdaten werden später für Empfänger, Ansprechpartner, Rechnungsadressen und abweichende Lieferadressen verwendet. Prüfe deshalb Namen, Anschriften und zugehörige Kunden- oder Lieferantennummern sorgfältig.',
      visual: 'partners',
    },
    {
      item: masterDataItems.find((item) => item.id === 'services'),
      title: 'Deine Leistungen und Artikel',
      text: 'Leistungen und Artikel kannst du später als Positionen in passenden Dokumenten verwenden. Achte darauf, Bezeichnung, Einheit, Preis und Umsatzsteuersatz korrekt und eindeutig zu hinterlegen.',
      visual: 'catalogItems',
    },
  ];

  function handleCardClick(event, item) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    onSelectItem(item.id);
  }

  return (
    <>
      <h1 id="master-data-title">Verwende Stammdatenblätter</h1>
      <p className="intro master-data-intro">
        Erstelle, verwalte und nutze Stammdatenblätter für deine Dokumente. Spare damit Zeit und
        vermeide Fehler durch das Vergessen von Daten oder durch einfache Tippfehler.
      </p>

      <section className="master-data-usage-section" aria-label="Über Stammdaten">
        <div className="master-data-usage-grid">
          {usageSections.map((section) => (
            <section className="master-data-usage-row" key={section.title}>
              <div className="master-data-usage-copy">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </section>
          ))}
        </div>
        <section className="document-status-note" aria-label="Hinweis zum Schutz deiner Stammdaten">
          <p>
            Bitte achte auf deine Stammdatenblätter, denn sie enthalten deine Daten. Achte darauf,
            sie nicht an Dritte weiterzugeben.
          </p>
        </section>
      </section>

      <section className="master-data-selection" aria-label="Stammdatenblätter">
        <div className="master-data-selection-grid">
          {selectionSections.map((section) => (
            <section className="master-data-selection-row" key={section.item.id}>
              <div className="master-data-selection-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
                <a
                  className="partner-button is-primary master-data-selection-button"
                  href={section.item.path}
                  onClick={(event) => handleCardClick(event, section.item)}
                >
                  {section.item.actionLabel} <span aria-hidden="true">→</span>
                </a>
              </div>
              <MasterDataMiniVisual type={section.visual} />
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

function MasterDataPlaceholder({ item }) {
  return (
    <>
      <h1 id="master-data-title">{item.title}</h1>
      <p className="intro master-data-intro">{item.description}</p>
      <section className="master-data-status-note" aria-label="Hinweis zum Entwicklungsstand">
        <p>Dieser Stammdatenbereich befindet sich derzeit in Vorbereitung.</p>
      </section>
    </>
  );
}

export default function MasterDataView({ activeItemId, onSelectItem }) {
  const activeItem = activeItemId ? findMasterDataItem(activeItemId) : null;

  function handleShowOverview() {
    onSelectItem(null);
  }

  return (
    <main className="master-data-layout">
      <MasterDataSidebar
        activeItemId={activeItem?.id ?? null}
        onSelectItem={onSelectItem}
        onShowOverview={handleShowOverview}
      />

      <section className="master-data-paper" aria-labelledby="master-data-title">
        {activeItem ? (
          activeItem.id === 'partners'
            ? <PartnerMasterDataEditor />
            : activeItem.id === 'own-data'
              ? <OwnDataMasterDataEditor />
              : activeItem.id === 'services'
                ? <CatalogItemMasterDataEditor />
                : <MasterDataPlaceholder item={activeItem} />
        ) : (
          <MasterDataOverview onSelectItem={onSelectItem} />
        )}
      </section>
    </main>
  );
}
