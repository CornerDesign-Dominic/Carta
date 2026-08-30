import { findKnowledgePage, knowledgeCategories } from '../../data/knowledgePages.js';

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
  const category = knowledgeCategories.find((item) => item.landingSlug === slug);

  if (!landingPage || !category) {
    return null;
  }

  const activeTopicGroups = category.topicGroups
    ?.map((group) => ({
      ...group,
      topics: group.topics?.filter((topic) => topic.slug && findKnowledgePage(topic.slug)) ?? [],
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
                        href={`/wissen/${topic.slug}`}
                        onClick={(event) => handleInternalLinkClick(event, () => onSelectTopic(topic.slug))}
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
                {comparisonTable.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => <td key={`${row[0]}-${comparisonTable.columns[index]}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <p className="knowledge-disclaimer">{landingPage.disclaimer}</p>
    </>
  );
}
