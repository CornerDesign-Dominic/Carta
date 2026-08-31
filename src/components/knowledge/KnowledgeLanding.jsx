import { getKnowledgeHubs } from '../../data/knowledgeNavigation.js';

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

export default function KnowledgeLanding({ onSelect }) {
  const hubs = getKnowledgeHubs();

  return (
    <>
      <h1 id="knowledge-title">Wissen für dein Geschäft</h1>
      <p className="intro document-intro">
        Hier findest du Wissenswertes rund um Belege, Unternehmen, Strategien
        und weitere Themen, die im geschäftlichen Alltag wichtig sind.
      </p>

      <section className="knowledge-hub-overview" aria-labelledby="knowledge-hub-overview-title">
        <h2 id="knowledge-hub-overview-title">Wissensbereiche</h2>
        <div className="knowledge-category-grid">
          {hubs.map((hub) => (
            <a
              className="knowledge-overview-card"
              href={`/wissen/${hub.landingSlug}`}
              onClick={(event) => handleInternalLinkClick(event, () => onSelect(hub.landingSlug))}
              key={hub.id}
            >
              {hub.parentHub && <span>{hub.parentHub.title}</span>}
              <h3>{hub.title}</h3>
              {hub.description && <p>{hub.description}</p>}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
