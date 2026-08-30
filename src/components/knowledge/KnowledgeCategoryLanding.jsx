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

  return (
    <>
      <h1 id="knowledge-title">{landingPage.title}</h1>
      <p className="intro document-intro">{landingPage.article.intro}</p>

      {activeTopicGroups?.length > 0 && (
        <section className="knowledge-category-section" aria-labelledby="knowledge-category-topics">
          <h2 id="knowledge-category-topics">Steuerarten</h2>
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

      <p className="knowledge-disclaimer">{landingPage.disclaimer}</p>
    </>
  );
}
