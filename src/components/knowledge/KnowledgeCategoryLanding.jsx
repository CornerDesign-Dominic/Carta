import { findKnowledgePage, knowledgeCategories } from '../../data/knowledgePages.js';
import { findToolItemByPath } from '../../data/tools.js';

function handleInternalLinkClick(event, callback) {
  if (
    event.defaultPrevented
    || event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.altKey
    || event.shiftKey
  ) {
    return;
  }

  event.preventDefault();
  callback();
}

const supplyChainStations = [
  { label: 'Lieferant', icon: 'supplier' },
  { label: 'Beschaffung', icon: 'procurement' },
  { label: 'Produktion', icon: 'production' },
  { label: 'Lager & Logistik', icon: 'logistics' },
  { label: 'Handel / Kunde', icon: 'customer' },
  { label: 'Endverbraucher', icon: 'consumer' },
];

function SupplyChainIcon({ name }) {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.8',
  };

  const icons = {
    supplier: (
      <>
        <path {...commonProps} d="M3.5 20.5V8.5L10 5v15.5M10 10.5h10.5v10M6.5 12h.01M6.5 16h.01M13.5 14h.01M17 14h.01M13.5 17.5h.01M17 17.5h.01" />
        <path {...commonProps} d="M13 20.5v-3h2.5v3" />
      </>
    ),
    procurement: (
      <>
        <path {...commonProps} d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
        <path {...commonProps} d="m4.5 7.75 7.5 4.5 7.5-4.5M12 12.5V21" />
      </>
    ),
    production: (
      <>
        <path {...commonProps} d="M3 20.5V9.5l5 3v-3l5 3V5.5l8 4v11" />
        <path {...commonProps} d="M7 20.5v-3h3v3M8 14h.01M16 13h.01M16 17h.01" />
        <path {...commonProps} d="M15.5 5.5V3.25M18 6.5V4.25" />
      </>
    ),
    logistics: (
      <>
        <path {...commonProps} d="M3 6.5h11v10H3zM14 10h3.75L21 13.5v3H14z" />
        <path {...commonProps} d="M6.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    customer: (
      <>
        <path {...commonProps} d="M4 9.5h16v11H4zM3 9.5l2-5h14l2 5M8 20.5v-5h4v5M8 12.5h.01M16 12.5h.01" />
      </>
    ),
    consumer: (
      <>
        <circle {...commonProps} cx="12" cy="7.25" r="3.25" />
        <path {...commonProps} d="M5.5 20.5c.75-3.75 3-5.75 6.5-5.75s5.75 2 6.5 5.75" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      {icons[name]}
    </svg>
  );
}

function SupplyChainOverview() {
  return (
    <section className="supply-chain-overview" aria-labelledby="supply-chain-overview-title">
      <h2 id="supply-chain-overview-title">Die Supply Chain im Überblick</h2>
      <p>Material, Waren und Informationen bewegen sich entlang der gesamten Wertschöpfungskette.</p>

      <div className="supply-chain-diagram" aria-label="Waren- und Informationsfluss entlang einer typischen Supply Chain">
        <div className="supply-chain-flow-guide supply-chain-flow-guide-forward" aria-label="Waren- und Leistungsfluss nach rechts">
          <span className="supply-chain-flow-guide-line" aria-hidden="true" />
          <span className="supply-chain-flow-guide-label">Waren- &amp; Leistungsfluss</span>
        </div>

        <div className="supply-chain-flow">
          {supplyChainStations.map((station) => (
            <div className="supply-chain-station" key={station.label}>
              <span className="supply-chain-station-icon">
                <SupplyChainIcon name={station.icon} />
              </span>
              <span>{station.label}</span>
            </div>
          ))}
        </div>

        <div className="supply-chain-flow-guide supply-chain-flow-guide-reverse" aria-label="Informationsfluss zurück zum Lieferanten">
          <span className="supply-chain-flow-guide-line" aria-hidden="true" />
          <span className="supply-chain-flow-guide-label">Informationsfluss</span>
        </div>
      </div>
    </section>
  );
}

export default function KnowledgeCategoryLanding({ slug, onSelectTopic }) {
  const landingPage = findKnowledgePage(slug);
  const category = knowledgeCategories
    .flatMap((item) => [item, ...(item.subHubs ?? [])])
    .find((item) => item.landingSlug === slug);

  if (!landingPage || !category) {
    return null;
  }

  const activeTopicGroups = category.topicGroups
    ?.map((group) => ({
      ...group,
      topics: group.topics?.filter((topic) => (
        (topic.slug && findKnowledgePage(topic.slug))
        || (topic.path && findToolItemByPath(topic.path))
      )) ?? [],
    }))
    .filter((group) => group.topics.length > 0);
  const comparisonTable = landingPage.comparisonTable;

  return (
    <>
      <h1 id="knowledge-title">{landingPage.title}</h1>
      <p className="intro document-intro">{landingPage.article.intro}</p>

      {activeTopicGroups?.length > 0 && (
        <section className="knowledge-category-section" aria-labelledby="knowledge-category-topics">
          <h2 id="knowledge-category-topics">
            {category.topicsTitle ?? 'Themen'}
          </h2>
          <div className="invoice-variant-groups">
            {activeTopicGroups.map((group) => (
              <section className="invoice-variant-group" aria-labelledby={`knowledge-category-${group.id}`} key={group.id}>
                <h3 id={`knowledge-category-${group.id}`}>{group.title}</h3>
                <ul>
                  {group.topics.map((topic) => (
                    <li key={topic.slug}>
                      <a
                        href={topic.path ?? `/wissen/${topic.slug}`}
                        onClick={(event) => handleInternalLinkClick(event, () => onSelectTopic(topic))}
                      >
                        {topic.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      )}

      {comparisonTable && (
        <section className="knowledge-comparison-section" aria-labelledby="knowledge-comparison-title">
          <h2 id="knowledge-comparison-title">{comparisonTable.title}</h2>
          <div className="tools-info-table-wrap">
            <table className="tools-info-table knowledge-comparison-table">
              <thead>
                <tr>
                  {comparisonTable.columns.map((column) => <th key={column}>{column}</th>)}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row) => {
                  const cells = row.cells ?? row;
                  const rowTitle = row.title ?? cells[0];
                  const detailPage = row.slug ? findKnowledgePage(row.slug) : null;

                  return (
                    <tr key={row.slug ?? rowTitle}>
                      {cells.map((cell, index) => {
                        if (index === 0) {
                          return (
                            <th key={`${rowTitle}-${comparisonTable.columns[index]}`} scope="row">
                              {detailPage ? (
                                <a
                                  href={`/wissen/${row.slug}`}
                                  onClick={(event) => handleInternalLinkClick(event, () => onSelectTopic(row.slug))}
                                >
                                  {cell}
                                </a>
                              ) : cell}
                            </th>
                          );
                        }

                        return <td key={`${rowTitle}-${comparisonTable.columns[index]}`}>{cell}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {slug === 'einkauf-verkauf' && <SupplyChainOverview />}

      <p className="knowledge-disclaimer">{landingPage.disclaimer}</p>
    </>
  );
}
