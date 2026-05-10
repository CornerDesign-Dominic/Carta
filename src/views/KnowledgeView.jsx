import KnowledgeArticle from '../components/knowledge/KnowledgeArticle.jsx';
import KnowledgeLanding from '../components/knowledge/KnowledgeLanding.jsx';
import KnowledgeSidebar from '../components/knowledge/KnowledgeSidebar.jsx';

export default function KnowledgeView({ activeSlug, onNavigate, onSelectSlug }) {
  function handleSelectSlug(slug) {
    onSelectSlug(slug);
  }

  function handleShowLanding() {
    onSelectSlug(null);
  }

  function handleOpenTool(toolLink) {
    if (toolLink === '/dokumente/rechnung') {
      onNavigate({ view: 'documents', documentId: 'write-invoice', path: toolLink });
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
