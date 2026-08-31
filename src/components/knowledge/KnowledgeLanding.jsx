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
        Verständlich aufbereitetes Wissen zu kaufmännischen, wirtschaftlichen und
        unternehmerischen Themen – von Grundlagen bis zur praktischen Anwendung.
      </p>

      <section className="knowledge-hub-overview" aria-labelledby="knowledge-hub-overview-title">
        <h2 id="knowledge-hub-overview-title">Wissensbereiche</h2>
        <div className="knowledge-directory-grid">
          {hubs.map((hub) => (
            <a
              className="knowledge-directory-item"
              href={`/wissen/${hub.landingSlug}`}
              onClick={(event) => handleInternalLinkClick(event, () => onSelect(hub.landingSlug))}
              key={hub.id}
            >
              <div className="knowledge-directory-copy">
                {hub.parentHub && (
                  <span className="knowledge-directory-parent">{hub.parentHub.title}</span>
                )}
                <h3>{hub.title}</h3>
                {hub.description && (
                  <p>{hub.description}</p>
                )}
              </div>
              <span className="knowledge-directory-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="knowledge-landing-guidance" aria-labelledby="knowledge-landing-guidance-title">
        <h2 id="knowledge-landing-guidance-title">Wissen, das weiterhilft</h2>
        <p>
          Unsere Wissensartikel erklären nicht nur Begriffe, sondern ordnen Zusammenhänge
          verständlich ein, zeigen Beispiele und führen – wenn sinnvoll – direkt zu passenden
          Werkzeugen oder Dokumenten.
        </p>
      </section>
    </>
  );
}
