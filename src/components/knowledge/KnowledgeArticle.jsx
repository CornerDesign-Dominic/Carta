import { findKnowledgePage } from '../../data/knowledgePages.js';
import KnowledgeFaqCard from './KnowledgeFaqCard.jsx';
import GlossaryTerm from './GlossaryTerm.jsx';

function renderArticleText(content, enableGlossary, onSelectGlossaryTerm) {
  if (typeof content === 'string') {
    return content;
  }

  if (!Array.isArray(content)) {
    return null;
  }

  return content.map((part, index) => {
    if (typeof part === 'string') {
      return part;
    }

    if (part?.type === 'glossary') {
      if (!enableGlossary) {
        return part.text;
      }

      return (
        <GlossaryTerm id={part.id} key={`${part.id}-${index}`} onSelect={onSelectGlossaryTerm}>
          {part.text}
        </GlossaryTerm>
      );
    }

    if (part?.type === 'link' && part.href) {
      return (
        <a href={part.href} key={`${part.href}-${index}`}>
          {part.text}
        </a>
      );
    }

    return part?.text ?? null;
  });
}

function MissingArticle() {
  return (
    <>
      <h1 id="knowledge-title">Wissensseite nicht gefunden</h1>
      <p className="intro document-intro">
        Diese Seite ist aktuell nicht Teil des aktiven Wissensbereichs.
      </p>
    </>
  );
}

function formatGermanDate(dateValue) {
  if (!dateValue) {
    return null;
  }

  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export default function KnowledgeArticle({
  slug,
  onSelectRelated,
  onOpenTool,
  enableGlossary = true,
  onSelectGlossaryTerm,
}) {
  const article = findKnowledgePage(slug);

  if (!article) {
    return <MissingArticle />;
  }

  const articleIntro = article.article?.intro
    ?? article.hero?.intro
    ?? article.intro
    ?? article.description;
  const articleSections = article.article?.sections ?? article.sections ?? article.articleSections ?? [
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
      paragraphs: ['Diese Fehler kommen in der Praxis häufig vor und sollten vermieden werden.'],
      list: article.commonMistakes,
    },
  ].filter((section) => section.paragraphs?.length || section.list?.length || section.subsections?.length);
  const generator = article.generator ?? (
    article.toolLabel || article.toolLink || article.ctaText
      ? {
          label: article.toolLabel,
          href: article.toolLink,
          text: article.ctaText,
        }
      : null
  );
  const faqs = article.faqs ?? [];
  const sources = article.sources ?? [];
  const updatedAt = formatGermanDate(article.updatedAt);
  const isToolCta = generator?.href?.startsWith('/tools/');

  return (
    <>
      <h1 id="knowledge-title">{article.title}</h1>
      <p className="intro document-intro">{articleIntro}</p>

      <article className="knowledge-article-body">
        {articleSections.map((section) => (
          <section className="knowledge-article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={typeof paragraph === 'string' ? paragraph : JSON.stringify(paragraph)}>
                {renderArticleText(paragraph, enableGlossary, onSelectGlossaryTerm)}
              </p>
            ))}
            {section.subsections?.length > 0 && (
              <div className="knowledge-article-subsections">
                {section.subsections.map((subsection) => (
                  <div className="knowledge-article-subsection" key={subsection.heading}>
                    <h3>{subsection.heading}</h3>
                    {subsection.paragraphs?.map((paragraph) => (
                      <p key={typeof paragraph === 'string' ? paragraph : JSON.stringify(paragraph)}>
                        {renderArticleText(paragraph, enableGlossary, onSelectGlossaryTerm)}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {section.list?.length > 0 && (
              <ul>
                {section.list.map((item) => (
                  <li key={typeof item === 'string' ? item : JSON.stringify(item)}>
                    {renderArticleText(item, enableGlossary, onSelectGlossaryTerm)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {generator && (
        <section className="knowledge-cta-section" aria-label={isToolCta ? 'Passendes Werkzeug' : 'Passender Generator'}>
          <div className="knowledge-cta-content">
            <p className="knowledge-cta-kicker">Direkt umsetzen</p>
            <h2>{isToolCta ? 'Passendes Werkzeug nutzen' : 'Passenden Generator nutzen'}</h2>
            <p>
              {generator.text
                ?? 'Nutze den passenden Belege24-Generator, um dein Dokument schnell und übersichtlich zu erstellen.'}
            </p>
          </div>
          <button type="button" onClick={() => onOpenTool(generator.href)}>
            <span>{generator.label}</span>
            <span aria-hidden="true">→</span>
          </button>
        </section>
      )}

      <section className="knowledge-faq-section" aria-label="Häufige Fragen und Hinweise">
        {faqs.length > 0 && (
          <div className="knowledge-faq-list">
            {faqs.map((faq) => (
              <KnowledgeFaqCard faq={faq} key={faq.question} />
            ))}
          </div>
        )}

        {sources.length > 0 && (
          <section className="knowledge-sources" aria-label="Quellen">
            <h2>Quellen</h2>
            <ul>
              {sources.map((source) => (
                <li key={source.url ?? source.label}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {updatedAt && (
          <p className="knowledge-updated-at">Zuletzt aktualisiert: {updatedAt}</p>
        )}

        <p className="knowledge-disclaimer">
          {article.disclaimer
            ?? 'Diese Inhalte dienen der allgemeinen Orientierung und ersetzen keine rechtliche oder steuerliche Beratung.'}
        </p>
      </section>
    </>
  );
}
