import { getKnowledgeBreadcrumbItems } from '../../data/knowledgeNavigation.js';

function isPlainLeftClick(event) {
  return !event.defaultPrevented
    && event.button === 0
    && !event.metaKey
    && !event.ctrlKey
    && !event.altKey
    && !event.shiftKey;
}

export default function KnowledgeBreadcrumb({ activeSlug, onSelect, onShowLanding }) {
  const items = getKnowledgeBreadcrumbItems(activeSlug);

  if (items.length === 0) {
    return null;
  }

  function handleNavigate(event, item) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();

    if (item.type === 'landing') {
      onShowLanding();
      return;
    }

    onSelect(item.href.slice('/wissen/'.length));
  }

  return (
    <nav className="knowledge-breadcrumb" aria-label="Navigationspfad">
      <ol>
        {items.map((item, index) => (
          <li key={item.type}>
            {index > 0 && <span className="knowledge-breadcrumb-separator" aria-hidden="true">›</span>}
            {item.href ? (
              <a href={item.href} onClick={(event) => handleNavigate(event, item)}>{item.label}</a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
