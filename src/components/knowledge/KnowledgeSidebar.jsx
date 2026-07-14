import { knowledgeCategories } from '../../data/knowledgePages.js';

const visibleKnowledgeSlugs = ['rechnung', 'gutschrift', 'quittung', 'mahnverfahren', 'businessplan'];

export default function KnowledgeSidebar({ activeSlug, onSelect, onShowLanding }) {
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

  const visiblePages = knowledgeCategories
    .flatMap((category) => category.pages)
    .filter((page) => visibleKnowledgeSlugs.includes(page.slug));

  return (
    <aside className="document-sidebar knowledge-sidebar" aria-label="Wissensnavigation">
      <a
        className={!activeSlug ? 'sidebar-title is-active' : 'sidebar-title'}
        href="/wissen"
        onClick={(event) => handleInternalLinkClick(event, onShowLanding)}
      >
        Wissen
      </a>

      <nav className="sidebar-nav knowledge-sidebar-nav">
        {visiblePages.map((page) => (
          <a
            className={activeSlug === page.slug ? 'is-active' : undefined}
            href={`/wissen/${page.slug}`}
            onClick={(event) => handleInternalLinkClick(event, () => onSelect(page.slug))}
            key={page.slug}
          >
            {page.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
