import { knowledgeCategories } from '../../data/knowledgePages.js';
import SidebarHomeIcon from '../SidebarHomeIcon.jsx';

const visibleKnowledgeSlugs = ['rechnung', 'angebot', 'lieferschein', 'gutschrift', 'quittung', 'eigenbeleg', 'mahnverfahren', 'umsatzsteuer'];

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
        className={!activeSlug ? 'sidebar-title sidebar-home-link is-active' : 'sidebar-title sidebar-home-link'}
        href="/wissen"
        aria-label="Zur Wissensübersicht"
        title="Zur Wissensübersicht"
        onClick={(event) => handleInternalLinkClick(event, onShowLanding)}
      >
        <SidebarHomeIcon />
        <span>Wissen</span>
      </a>
      <div className="sidebar-title-divider" aria-hidden="true" />

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
