import { knowledgeCategories } from '../../data/knowledgePages.js';

const visibleKnowledgeSlugs = ['rechnung', 'gutschrift', 'quittung', 'erste-mahnung'];

export default function KnowledgeSidebar({ activeSlug, onSelect, onShowLanding }) {
  const visiblePages = knowledgeCategories
    .flatMap((category) => category.pages)
    .filter((page) => visibleKnowledgeSlugs.includes(page.slug));

  return (
    <aside className="document-sidebar knowledge-sidebar" aria-label="Wissensnavigation">
      <button
        className={!activeSlug ? 'sidebar-title is-active' : 'sidebar-title'}
        type="button"
        onClick={onShowLanding}
      >
        Wissen
      </button>

      <nav className="sidebar-nav knowledge-sidebar-nav">
        {visiblePages.map((page) => (
          <button
            className={activeSlug === page.slug ? 'is-active' : undefined}
            type="button"
            onClick={() => onSelect(page.slug)}
            key={page.slug}
          >
            {page.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}
