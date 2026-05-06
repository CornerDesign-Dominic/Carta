import { useState } from 'react';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import { documentSections } from '../data/documents.js';

export default function DocumentsView() {
  const [activeDocumentId, setActiveDocumentId] = useState(documentSections[0].id);
  const activeDocument = documentSections.find((item) => item.id === activeDocumentId);

  return (
    <main className="documents-layout">
      <DocumentSidebar activeId={activeDocumentId} onSelect={setActiveDocumentId} />

      <section className="paper-page document-paper" aria-labelledby="document-title">
        <p className="eyebrow">DOKUMENTE</p>
        <h1 id="document-title">{activeDocument.title}</h1>
        <p className="intro document-intro">{activeDocument.description}</p>
      </section>
    </main>
  );
}
