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
  };

  return (
    <div className={`master-data-mini master-data-mini-${type}`} aria-hidden="true">
      <div className="master-data-mini-header">
        <strong>Belege24</strong>
        <span>Stammdaten</span>
      </div>
      <div className="master-data-mini-title">
        {type === 'document' ? 'Sammlung' : type === 'reuse' ? 'Dokument' : 'Übersicht'}
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
      title: 'Stammdaten anlegen',
      text: 'Erfasse wiederkehrende Angaben einmalig in einer übersichtlichen Stammdatensammlung. So müssen Unternehmens-, Partner- oder Leistungsdaten nicht für jedes Dokument erneut eingegeben werden.',
      visual: 'collect',
    },
    {
      title: 'Als lesbares Dokument speichern',
      text: 'Die Stammdaten werden später als übersichtliches PDF-Dokument ausgegeben. Dadurch bleibt die Sammlung auch ohne besondere technische Kenntnisse lesbar und nachvollziehbar.',
      visual: 'document',
    },
    {
      title: 'In Dokumenten wiederverwenden',
      text: 'Geladene Stammdaten können später ausgewählt und gezielt in Rechnungen, Angebote, Lieferscheine und weitere Dokumente übernommen werden.',
      visual: 'reuse',
    },
    {
      title: 'Lokal und ohne Anmeldung',
      text: 'Die Verarbeitung soll direkt im Browser erfolgen. Stammdatendateien werden nicht dauerhaft bei Belege24 gespeichert und können ohne Benutzerkonto verwendet werden.',
      visual: 'local',
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
      <h1 id="master-data-title">Verwalte deine Stammdaten</h1>
      <p className="intro master-data-intro">
        Erstelle übersichtliche Stammdatensammlungen für deine eigenen Unternehmensdaten,
        Geschäftspartner sowie wiederkehrende Leistungen und Artikel. Die Daten können später
        in Belege24-Dokumenten wiederverwendet werden.
      </p>

      <section className="master-data-usage-section" aria-label="Über Stammdaten">
        <div className="master-data-usage-grid">
          {usageSections.map((section) => (
            <section className="master-data-usage-row" key={section.title}>
              <div className="master-data-usage-copy">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
              <MasterDataMiniVisual type={section.visual} />
            </section>
          ))}
        </div>
      </section>

      <section className="master-data-selection" aria-labelledby="master-data-selection-title">
        <h2 id="master-data-selection-title">Welche Stammdaten möchtest du anlegen?</h2>
        <div className="master-data-card-grid">
          {masterDataItems.map((item) => (
            <a
              className="master-data-card"
              href={item.path}
              key={item.id}
              onClick={(event) => handleCardClick(event, item)}
            >
              <h3>{item.title}</h3>
              <p>{item.selectionDescription}</p>
              <span className="master-data-card-action">{item.actionLabel} <span aria-hidden="true">→</span></span>
            </a>
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
