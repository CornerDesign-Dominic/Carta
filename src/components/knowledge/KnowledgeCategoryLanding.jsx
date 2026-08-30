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

function TopicCard({ topic, onSelectTopic }) {
  const page = topic.slug ? findKnowledgePage(topic.slug) : null;

  if (page) {
    return (
      <a
        className="tools-overview-card knowledge-category-topic-card"
        href={`/wissen/${topic.slug}`}
        onClick={(event) => handleInternalLinkClick(event, () => onSelectTopic(topic.slug))}
      >
        <span>{topic.title}</span>
        <p>{topic.description}</p>
      </a>
    );
  }

  return (
    <article className="tools-overview-card knowledge-category-topic-card is-unavailable">
      <span>{topic.title}</span>
      <p>{topic.description}</p>
      <p className="knowledge-category-topic-status">Noch nicht verfügbar</p>
    </article>
  );
}

export default function KnowledgeCategoryLanding({ slug, onSelectTopic }) {
  const landingPage = findKnowledgePage(slug);
  const category = knowledgeCategories.find((item) => item.landingSlug === slug);

  if (!landingPage || !category) {
    return null;
  }

  return (
    <>
      <h1 id="knowledge-title">{landingPage.title}</h1>
      <p className="intro document-intro">{landingPage.article.intro}</p>

      {category.topicGroups?.map((group) => (
        <section className="knowledge-category-section" aria-labelledby={`knowledge-category-${group.id}`} key={group.id}>
          <h2 id={`knowledge-category-${group.id}`}>{group.title}</h2>
          {group.description && <p className="knowledge-category-description">{group.description}</p>}
          {group.topics?.length > 0 && (
            <div className="knowledge-category-grid">
              {group.topics.map((topic) => (
                <TopicCard key={topic.slug ?? topic.title} topic={topic} onSelectTopic={onSelectTopic} />
              ))}
            </div>
          )}
        </section>
      ))}

      <p className="knowledge-disclaimer">{landingPage.disclaimer}</p>
    </>
  );
}
