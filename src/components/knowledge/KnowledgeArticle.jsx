import { findKnowledgePage } from '../../data/knowledgePages.js';
import KnowledgeFaqCard from './KnowledgeFaqCard.jsx';

function MissingArticle() {
  return (
    <>
      <p className="eyebrow">WISSEN</p>
      <h1 id="knowledge-title">Wissensseite nicht gefunden</h1>
      <p className="intro document-intro">
        Diese Seite ist aktuell nicht Teil des aktiven Wissensbereichs.
      </p>
    </>
  );
}

export default function KnowledgeArticle({ slug, onSelectRelated, onOpenTool }) {
  const article = findKnowledgePage(slug);

  if (!article) {
    return <MissingArticle />;
  }

  const articleSections = article.sections ?? article.articleSections ?? [
    {
      heading: `Was ist ${article.title}?`,
      paragraphs: [article.intro],
    },
    {
      heading: 'Wichtige Punkte',
      paragraphs: ['Die folgenden Punkte helfen dabei, das Thema schnell einzuordnen.'],
      list: article.keyPoints,
    },
    {
      heading: 'Praxis',
      paragraphs: [article.typicalUse],
    },
    {
      heading: 'Worauf sollte man achten?',
      paragraphs: ['Diese Fehler kommen in der Praxis haeufig vor und sollten vermieden werden.'],
      list: article.commonMistakes,
    },
  ].filter((section) => section.paragraphs?.length || section.list?.length);

  return (
    <>
      <p className="eyebrow">WISSEN / {article.category}</p>
      <h1 id="knowledge-title">{article.hero?.headline ?? article.title}</h1>
      <p className="intro document-intro">{article.hero?.intro ?? article.description}</p>

      <article className="knowledge-article-body">
        {articleSections.map((section) => (
          <section className="knowledge-article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list?.length > 0 && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {article.toolLabel && (
        <section className="knowledge-cta-section" aria-label="Passender Generator">
          <div>
            <h2>Passenden Generator nutzen</h2>
            <p>
              {article.ctaText
                ?? 'Nutze den passenden Carta-Generator, um dein Dokument schnell und uebersichtlich zu erstellen.'}
            </p>
          </div>
          <button type="button" onClick={() => onOpenTool(article.toolLink)}>
            {article.toolLabel}
          </button>
        </section>
      )}

      <section className="knowledge-faq-section" aria-label="Haeufige Fragen">
        <div className="knowledge-faq-list">
          {article.faqs.map((faq) => (
            <KnowledgeFaqCard faq={faq} key={faq.question} />
          ))}
        </div>
        <p className="knowledge-disclaimer">
          {article.disclaimer
            ?? 'Diese Inhalte dienen der allgemeinen Orientierung und ersetzen keine rechtliche oder steuerliche Beratung.'}
        </p>
      </section>
    </>
  );
}
