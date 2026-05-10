import { useEffect, useMemo, useState } from 'react';
import { knowledgeCategories } from '../../data/knowledgePages.js';

export default function KnowledgeSidebar({ activeSlug, onSelect, onShowLanding }) {
  const activeCategoryId = useMemo(() => {
    return knowledgeCategories.find((category) =>
      category.pages.some((page) => page.slug === activeSlug),
    )?.id;
  }, [activeSlug]);

  const [openCategoryIds, setOpenCategoryIds] = useState(() =>
    knowledgeCategories.map((category) => category.id),
  );

  useEffect(() => {
    if (!activeCategoryId) {
      return;
    }

    setOpenCategoryIds((ids) => (
      ids.includes(activeCategoryId) ? ids : [...ids, activeCategoryId]
    ));
  }, [activeCategoryId]);

  function toggleCategory(categoryId) {
    setOpenCategoryIds((ids) => (
      ids.includes(categoryId)
        ? ids.filter((id) => id !== categoryId)
        : [...ids, categoryId]
    ));
  }

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
        {knowledgeCategories.map((category) => {
          const isOpen = openCategoryIds.includes(category.id);
          const isActiveCategory = activeCategoryId === category.id;

          return (
            <div className="sidebar-group knowledge-sidebar-group" key={category.id}>
              <button
                className={isActiveCategory ? 'knowledge-category-toggle is-active' : 'knowledge-category-toggle'}
                type="button"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isOpen}
              >
                <span>{category.title}</span>
                <span
                  className={isOpen ? 'knowledge-chevron is-open' : 'knowledge-chevron'}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div className="sidebar-subnav knowledge-sidebar-subnav">
                  {category.pages.map((page) => (
                    <button
                      className={activeSlug === page.slug ? 'is-active' : undefined}
                      type="button"
                      onClick={() => onSelect(page.slug)}
                      key={page.slug}
                    >
                      {page.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
