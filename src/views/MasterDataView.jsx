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
      text: 'Belege24 nutzt diese Form der Stammdatenverwaltung, damit deine Daten bei dir bleiben und nur von dir verarbeitet werden.',
    },
    {
      title: 'Einmal anlegen. Immer wieder verwenden.',
      text: 'Bereite eigene Daten, Partnerdaten sowie Leistungen und Artikel einmal vor. Übernimm sie anschließend in passende Belege24-Dokumente – für weniger wiederholte Eingaben, schnelleres Arbeiten und weniger Tippfehler.',
    },
    {
      title: 'Wie funktionieren die Stammdaten?',
      text: 'Für eigene Daten, Partner und Lieferadressen sowie Leistungen und Artikel gibt es jeweils ein Stammdatenblatt als PDF. Die benötigten Daten sind technisch in der PDF hinterlegt und können später in Belege24 geladen, übernommen und angepasst werden.',
    },
  ];
  const selectionSections = [
    {
      item: masterDataItems.find((item) => item.id === 'own-data'),
      title: 'Deine eigenen Daten',
      text: 'Deine eigenen Daten werden später in den Dokumenten für Absenderdaten, Kontaktdaten und die Fußzeile verwendet. Achte besonders darauf, Unternehmens-, Steuer- und Bankdaten vollständig und aktuell zu halten.',
      actionLabel: 'Eigene Daten verwalten',
      visual: 'ownData',
    },
    {
      item: masterDataItems.find((item) => item.id === 'partners'),
      title: 'Partner und Lieferadressen',
      text: 'Partner- und Lieferadressdaten werden später für Empfänger, Ansprechpartner, Rechnungsadressen und abweichende Lieferadressen verwendet. Prüfe deshalb Namen, Anschriften und zugehörige Kunden- oder Lieferantennummern sorgfältig.',
      actionLabel: 'Partnerdaten verwalten',
      visual: 'partners',
    },
    {
      item: masterDataItems.find((item) => item.id === 'services'),
      title: 'Deine Leistungen und Artikel',
      text: 'Leistungen und Artikel kannst du später als Positionen in passenden Dokumenten verwenden. Achte darauf, Bezeichnung, Einheit, Preis und Umsatzsteuersatz korrekt und eindeutig zu hinterlegen.',
      actionLabel: 'Leistungen & Artikel verwalten',
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
        Erstelle und verwalte Stammdatenblätter, nutze sie in deinen Dokumenten und spare Zeit bei
        wiederkehrenden Eingaben. So vermeidest du unnötige Tippfehler.
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
          <p>Stammdatenblätter enthalten deine Daten. Gib sie daher nicht an Dritte weiter.</p>
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
                  {section.actionLabel}
                </a>
              </div>
              <MasterDataMiniVisual type={section.visual} />
            </section>
          ))}
        </div>
      </section>

      <section className="master-data-info-content" aria-labelledby="master-data-info-title">
        <h2 id="master-data-info-title">Stammdaten für Rechnungen und Geschäftsdokumente</h2>
        <p>
          Viele Angaben werden in Rechnungen, Angeboten und anderen Geschäftsdokumenten immer wieder
          benötigt. Dazu gehören zum Beispiel Unternehmensdaten, Kundendaten, Anschriften,
          Ansprechpartner sowie wiederkehrende Leistungen oder Artikel.
        </p>
        <p>
          Mit den Stammdatenblättern von Belege24 kannst du diese Angaben vorbereiten und später in
          passenden Dokumenten erneut verwenden. So müssen häufig benötigte Informationen nicht bei
          jedem neuen Beleg vollständig neu eingegeben werden.
        </p>
        <p>
          Die Stammdaten eignen sich sowohl für eigene Unternehmensdaten als auch für Kunden,
          Lieferanten und andere Geschäftspartner sowie für regelmäßig verwendete Leistungen und
          Artikel.
        </p>
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
