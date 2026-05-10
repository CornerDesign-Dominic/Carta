import {
  findKnowledgePage,
  getKnowledgeTitle,
} from '../../data/knowledgePages.js';
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

  return (
    <>
      <p className="eyebrow">WISSEN / {article.category}</p>
      <h1 id="knowledge-title">{article.title}</h1>
      <p className="intro document-intro">{article.description}</p>
      <p className="knowledge-intro">{article.intro}</p>

      <div className="knowledge-article-grid">
        <section className="knowledge-panel">
          <h2>Wichtigste Punkte</h2>
          <ul className="knowledge-check-list">
            {article.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="knowledge-panel">
          <h2>Typische Nutzung</h2>
          <p>{article.typicalUse}</p>
        </section>

        <section className="knowledge-panel">
          <h2>Typische Fehler</h2>
          <ul className="knowledge-mistake-list">
            {article.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </section>

        {article.toolLabel && (
          <section className="knowledge-tool-card">
            <div>
              <h2>Passendes Werkzeug</h2>
              <p>Erstelle das passende Dokument direkt mit dem Carta-Generator.</p>
            </div>
            <button type="button" onClick={() => onOpenTool(article.toolLink)}>
              {article.toolLabel}
            </button>
          </section>
        )}
      </div>

      <section className="knowledge-faq-section" aria-label="Haeufige Fragen">
        <h2>Haeufige Fragen</h2>
        <div className="knowledge-faq-list">
          {article.faqs.map((faq) => (
            <KnowledgeFaqCard faq={faq} key={faq.question} />
          ))}
        </div>
      </section>

      {article.related?.length > 0 && (
        <section className="knowledge-related-section" aria-label="Aehnliche Themen">
          <h2>Aehnliche Themen</h2>
          <div className="knowledge-related-list">
            {article.related.map((relatedSlug) => (
              <button type="button" onClick={() => onSelectRelated(relatedSlug)} key={relatedSlug}>
                {getKnowledgeTitle(relatedSlug)}
              </button>
            ))}
          </div>
        </section>
      )}

      {article.disclaimer && <p className="knowledge-disclaimer">{article.disclaimer}</p>}
    </>
  );
}
