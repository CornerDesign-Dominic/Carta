import { masterDataItems } from '../../data/masterData.js';
import SidebarHomeIcon from '../SidebarHomeIcon.jsx';

function isPlainLeftClick(event) {
  return (
    !event.defaultPrevented
    && event.button === 0
    && !event.metaKey
    && !event.ctrlKey
    && !event.altKey
    && !event.shiftKey
  );
}

export default function MasterDataSidebar({ activeItemId, onSelectItem, onShowOverview }) {
  function handleInternalLinkClick(event, callback) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    callback();
  }

  return (
    <aside className="master-data-sidebar" aria-label="Stammdatennavigation">
      <a
        className={!activeItemId ? 'master-data-sidebar-title sidebar-home-link is-active' : 'master-data-sidebar-title sidebar-home-link'}
        href="/stammdaten"
        aria-label="Zur Stammdatenübersicht"
        title="Zur Stammdatenübersicht"
        onClick={(event) => handleInternalLinkClick(event, onShowOverview)}
      >
        <SidebarHomeIcon />
        <span>Stammdaten</span>
      </a>
      <div className="sidebar-title-divider" aria-hidden="true" />

      <nav className="master-data-sidebar-nav" aria-label="Stammdatenbereiche">
        {masterDataItems.map((item) => (
          <a
            className={activeItemId === item.id ? 'master-data-sidebar-link is-active' : 'master-data-sidebar-link'}
            href={item.path}
            key={item.id}
            onClick={(event) => handleInternalLinkClick(event, () => onSelectItem(item.id))}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
