import { useState } from 'react';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceForm from '../components/InvoiceForm.jsx';
import { documentSections, findDocumentItem } from '../data/documents.js';

export default function DocumentsView() {
  const [activeDocumentId, setActiveDocumentId] = useState('overview');
  const { item: activeDocument, parentId } = findDocumentItem(activeDocumentId);
  const isOverview = activeDocumentId === 'overview';

  return (
    <main className="documents-layout">
      <DocumentSidebar
        activeId={activeDocumentId}
        activeParentId={parentId}
        onSelect={setActiveDocumentId}
      />

      <section className="paper-page document-paper" aria-labelledby="document-title">
        {isOverview ? (
          <DocumentOverview onSelect={setActiveDocumentId} />
        ) : (
          <>
            <p className="eyebrow">DOKUMENTE</p>
            <h1 id="document-title">{activeDocument.title}</h1>
            {activeDocument.description && (
              <p className="intro document-intro">{activeDocument.description}</p>
            )}
          </>
        )}

        {!isOverview && activeDocument.contentSections && (
          <div className="document-content">
            {activeDocument.contentSections.map((section) => (
              <section className="document-text-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        )}

        {!isOverview && activeDocument.formType === 'invoice' && <InvoiceForm />}
      </section>
    </main>
  );
}

function DocumentOverview({ onSelect }) {
  return (
    <div className="document-overview">
      <p className="eyebrow">DOKUMENTE</p>
      <h1 id="document-title">Dokumente einfach im Browser erstellen</h1>
      <p className="intro document-intro">
        Carta bietet eine ruhige Grundlage, um digitale Geschäftsdokumente direkt im
        Browser vorzubereiten. Rechnungen und Angebote werden übersichtlich aufgebaut
        und können später um Vorlagen, Eingabemasken und Exportfunktionen erweitert
        werden.
      </p>

      <div className="document-overview-grid" aria-label="Dokumentübersicht">
        {documentSections.map((item) => (
          <button
            className="document-overview-card"
            type="button"
            onClick={() => onSelect(item.id)}
            key={item.id}
          >
            <span>{item.label}</span>
            <p>{item.description}</p>
          </button>
        ))}
      </div>

      <p className="document-note">
        Weitere Dokumenttypen wie Mahnungen, Lieferscheine oder Gutschriften können
        später ergänzt werden.
      </p>
    </div>
  );
}
