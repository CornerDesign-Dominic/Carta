import { useEffect, useState } from 'react';
import KnowledgeArticle from '../components/knowledge/KnowledgeArticle.jsx';
import KnowledgeCategoryLanding from '../components/knowledge/KnowledgeCategoryLanding.jsx';
import KnowledgeGlossaryPanel from '../components/knowledge/KnowledgeGlossaryPanel.jsx';
import KnowledgeLanding from '../components/knowledge/KnowledgeLanding.jsx';
import KnowledgeSidebar from '../components/knowledge/KnowledgeSidebar.jsx';
import { findKnowledgePage } from '../data/knowledgePages.js';

// Das Glossar ist technisch vorbereitet, wird aber erst mit einem späteren Release veröffentlicht.
const isKnowledgeGlossaryEnabled = false;

export default function KnowledgeView({ activeSlug, onNavigate, onSelectSlug }) {
  const [activeGlossaryId, setActiveGlossaryId] = useState(null);
  const activePage = activeSlug ? findKnowledgePage(activeSlug) : null;
  const documentIdByToolLink = {
    '/dokumente/rechnung/standard': 'write-invoice',
    '/dokumente/rechnung': 'write-invoice',
    '/dokumente/angebot': 'write-offer',
    '/dokumente/lieferschein': 'write-delivery-note',
    '/dokumente/gutschrift': 'write-credit-note',
    '/dokumente/mahnung': 'write-reminder',
    '/dokumente/geschaeftsbrief': 'write-business-letter',
    '/dokumente/quittung': 'write-receipt',
    '/dokumente/eigenbeleg': 'write-self-receipt',
  };

  function handleSelectSlug(slug) {
    onSelectSlug(slug);
  }

  function handleSelectTopic(topic) {
    if (typeof topic === 'string') {
      onSelectSlug(topic);
      return;
    }

    if (topic.path?.startsWith('/tools/')) {
      onNavigate({ view: 'tools', toolPath: topic.path });
      return;
    }

    onSelectSlug(topic.slug);
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

    if (toolLink?.startsWith('/tools/')) {
      onNavigate({ view: 'tools', toolPath: toolLink });
      return;
    }

    onNavigate({ view: 'documents' });
  }

  useEffect(() => {
    setActiveGlossaryId(null);
  }, [activeSlug]);

  return (
    <main className="documents-layout knowledge-layout">
      <KnowledgeSidebar
        activeSlug={activeSlug}
        onSelect={handleSelectSlug}
        onShowLanding={handleShowLanding}
      />

      <section className="paper-page document-paper knowledge-paper" aria-labelledby="knowledge-title">
        {!activeSlug && <KnowledgeLanding onSelect={handleSelectSlug} />}
        {activePage?.type === 'category-landing' && (
          <KnowledgeCategoryLanding slug={activeSlug} onSelectTopic={handleSelectTopic} />
        )}
        {activeSlug && activePage?.type !== 'category-landing' && (
          <KnowledgeArticle
            slug={activeSlug}
            onSelectRelated={handleSelectSlug}
            onOpenTool={handleOpenTool}
            enableGlossary={isKnowledgeGlossaryEnabled}
            onSelectGlossaryTerm={setActiveGlossaryId}
          />
        )}
      </section>

      {isKnowledgeGlossaryEnabled && activeSlug && (
        <KnowledgeGlossaryPanel activeGlossaryId={activeGlossaryId} />
      )}
    </main>
  );
}
