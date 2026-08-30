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
          <h2
            className={category.id === 'belege' ? 'knowledge-category-topics-title' : undefined}
            id="knowledge-category-topics"
          >
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

      <p className="knowledge-disclaimer">{landingPage.disclaimer}</p>
    </>
  );
}
