import { useEffect, useMemo, useRef, useState } from 'react';
import { findKnowledgePage } from '../../data/knowledgePages.js';
import {
  getKnowledgeArticleSections,
  getKnowledgeHubSectionItems,
} from '../../data/knowledgeNavigation.js';

function isPlainLeftClick(event) {
  return !event.defaultPrevented
    && event.button === 0
    && !event.metaKey
    && !event.ctrlKey
    && !event.altKey
    && !event.shiftKey;
}

function useActiveKnowledgeSection(sectionItems, pendingSectionIdRef) {
  const [activeSectionId, setActiveSectionId] = useState('');

  useEffect(() => {
    if (sectionItems.length === 0 || typeof window === 'undefined') {
      setActiveSectionId('');
      return undefined;
    }

    let frame = 0;
    const sectionIds = sectionItems.map((item) => item.id);

    function updateActiveSection() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (pendingSectionIdRef.current) {
          setActiveSectionId(pendingSectionIdRef.current);
          return;
        }

        const headerOffset = Math.min(window.innerHeight * 0.4, 360);
        const currentSectionId = sectionIds.reduce((currentId, sectionId) => {
          const section = document.getElementById(sectionId);

          if (!section) {
            return currentId;
          }

          return section.getBoundingClientRect().top <= headerOffset ? sectionId : currentId;
        }, sectionIds[0]);

        setActiveSectionId(currentSectionId);
      });
    }

    function updateActiveSectionFromHash() {
      const hashId = decodeURIComponent(window.location.hash.replace(/^#/, ''));

      if (sectionIds.includes(hashId)) {
        setActiveSectionId(hashId);
      }
    }

    if (decodeURIComponent(window.location.hash.replace(/^#/, ''))) {
      updateActiveSectionFromHash();
    } else {
      updateActiveSection();
    }
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSectionFromHash);
    window.addEventListener('popstate', updateActiveSectionFromHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSectionFromHash);
      window.removeEventListener('popstate', updateActiveSectionFromHash);
    };
  }, [pendingSectionIdRef, sectionItems]);

  return [activeSectionId, setActiveSectionId];
}

export default function KnowledgeSidebar({ activeSlug }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pendingSectionTimerRef = useRef(0);
  const pendingSectionIdRef = useRef('');
  const activePage = activeSlug ? findKnowledgePage(activeSlug) : null;
  const isHubPage = Boolean(activeSlug && activePage?.type === 'category-landing');
  const isArticlePage = Boolean(activeSlug && activePage && activePage.type !== 'category-landing');
  const sectionItems = useMemo(() => (
    isHubPage ? getKnowledgeHubSectionItems(activeSlug) : getKnowledgeArticleSections(activePage)
  ), [activePage, activeSlug, isHubPage]);
  const [activeSectionId, setActiveSectionId] = useActiveKnowledgeSection(sectionItems, pendingSectionIdRef);
  const toggleLabel = isHubPage ? 'Auf dieser Seite' : 'In diesem Artikel';

  useEffect(() => {
    window.clearTimeout(pendingSectionTimerRef.current);
    pendingSectionIdRef.current = '';
    setIsMobileOpen(false);
  }, [activeSlug]);

  useEffect(() => () => {
    window.clearTimeout(pendingSectionTimerRef.current);
  }, []);

  function handleSectionClick(event, sectionId) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}#${sectionId}`);
    window.clearTimeout(pendingSectionTimerRef.current);
    pendingSectionIdRef.current = sectionId;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSectionId(sectionId);
    pendingSectionTimerRef.current = window.setTimeout(() => {
      pendingSectionIdRef.current = '';
    }, 900);
    setIsMobileOpen(false);
  }

  function renderSectionLinks() {
    if (sectionItems.length === 0) {
      return null;
    }

    return (
      <div className="knowledge-sidebar-section-links">
        {sectionItems.map((item) => (
          <a
            className={activeSectionId === item.id ? 'is-active' : undefined}
            href={`#${item.id}`}
            onClick={(event) => handleSectionClick(event, item.id)}
            key={item.id}
          >
            {item.navLabel ?? item.label}
          </a>
        ))}
      </div>
    );
  }

  if (!activeSlug || (!isHubPage && !isArticlePage)) {
    return null;
  }

  const sidebarMode = isHubPage ? 'hub' : 'article';

  return (
    <aside className={`document-sidebar knowledge-sidebar knowledge-sidebar--${sidebarMode}`} aria-label="Wissensnavigation">
      <button
        className="knowledge-sidebar-toggle"
        type="button"
        aria-expanded={isMobileOpen}
        aria-controls="knowledge-sidebar-body"
        onClick={() => setIsMobileOpen((current) => !current)}
      >
        <span>{toggleLabel}</span>
        <span className={isMobileOpen ? 'knowledge-chevron is-open' : 'knowledge-chevron'} aria-hidden="true" />
      </button>

      <h2 className="knowledge-sidebar-heading">{toggleLabel}</h2>

      <nav
        className={isMobileOpen ? 'knowledge-sidebar-body is-open' : 'knowledge-sidebar-body'}
        id="knowledge-sidebar-body"
        aria-label={toggleLabel}
      >
        {renderSectionLinks()}
      </nav>
    </aside>
  );
}
