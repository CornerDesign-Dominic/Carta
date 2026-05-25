import { knowledgeCategories, knowledgePages } from '../../data/knowledgePages.js';

export default function KnowledgeLanding({ onSelect }) {
  const highlightedPages = ['rechnung', 'angebot', 'zahlungserinnerung', 'erste-mahnung'];

  return (
    <>
      <p className="eyebrow">WISSEN</p>
      <h1 id="knowledge-title">Geschäftliche Dokumente besser verstehen</h1>
      <p className="intro document-intro">
        Der Wissensbereich erklärt zentrale Belege und Mahntexte. Die Inhalte
        sind praktisch aufgebaut und führen bei Bedarf direkt zum passenden
        Generator oder Tool.
      </p>

      <div className="knowledge-highlight-grid" aria-label="Wichtige Wissensseiten">
        {highlightedPages.map((slug) => {
          const page = knowledgePages[slug];

          if (!page) {
            return null;
          }

          return (
            <button
              className="document-overview-card knowledge-overview-card"
              type="button"
              onClick={() => onSelect(slug)}
              key={slug}
            >
              <span>{page.title}</span>
              <p>{page.description}</p>
            </button>
          );
        })}
      </div>

      <section className="knowledge-category-section" aria-label="Kategorien im Wissensbereich">
        <h2>Kategorien</h2>
        <div className="knowledge-category-grid">
          {knowledgeCategories.map((category) => (
            <article className="document-usage-card knowledge-category-card" key={category.id}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="knowledge-topic-list">
                {category.pages.map((page) => (
                  <button type="button" onClick={() => onSelect(page.slug)} key={page.slug}>
                    {page.title}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="document-note">
        Die Wissensseiten sind datengetrieben aufgebaut. Neue aktive Themen können
        später gezielt über Kategorien, Slugs, FAQ-Fragen und verwandte Seiten
        ergänzt werden.
      </p>
    </>
  );
}
