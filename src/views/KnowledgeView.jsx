import KnowledgeArticle from '../components/knowledge/KnowledgeArticle.jsx';
import KnowledgeLanding from '../components/knowledge/KnowledgeLanding.jsx';
import KnowledgeSidebar from '../components/knowledge/KnowledgeSidebar.jsx';

export default function KnowledgeView({ activeSlug, onNavigate, onSelectSlug }) {
  const documentIdByToolLink = {
    '/dokumente/rechnung': 'write-invoice',
    '/dokumente/angebot': 'write-offer',
    '/dokumente/lieferschein': 'write-delivery-note',
    '/dokumente/gutschrift': 'write-credit-note',
    '/dokumente/mahnung': 'write-reminder',
    '/dokumente/quittung': 'write-receipt',
    '/dokumente/eigenbeleg': 'write-self-receipt',
  };

  function handleSelectSlug(slug) {
    onSelectSlug(slug);
  }

  function handleShowLanding() {
    onSelectSlug(null);
  }

  function handleOpenTool(toolLink) {
    const documentId = documentIdByToolLink[toolLink];

    if (documentId) {
      onNavigate({ view: 'documents', documentId, path: toolLink });
      return;
    }

    onNavigate({ view: 'documents' });
  }

  return (
    <main className="documents-layout knowledge-layout">
      <KnowledgeSidebar
        activeSlug={activeSlug}
        onSelect={handleSelectSlug}
        onShowLanding={handleShowLanding}
      />

      <section className="paper-page document-paper knowledge-paper" aria-labelledby="knowledge-title">
        {!activeSlug && <KnowledgeLanding onSelect={handleSelectSlug} />}
        {activeSlug && (
          <KnowledgeArticle
            slug={activeSlug}
            onSelectRelated={handleSelectSlug}
            onOpenTool={handleOpenTool}
          />
        )}
      </section>
    </main>
  );
}
