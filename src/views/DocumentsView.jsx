import { useState } from 'react';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceForm from '../components/InvoiceForm.jsx';
import OfferDocumentEditor from '../components/OfferDocumentEditor.jsx';
import ReminderDocumentEditor from '../components/ReminderDocumentEditor.jsx';
import { findDocumentItem } from '../data/documents.js';

export default function DocumentsView() {
  const [activeDocumentId, setActiveDocumentId] = useState('write-invoice');
  const { item: activeDocument, parentId } = findDocumentItem(activeDocumentId);

  return (
    <main className="documents-layout">
      <DocumentSidebar
        activeId={activeDocumentId}
        activeParentId={parentId}
        onSelect={setActiveDocumentId}
      />

      <section className="paper-page document-paper" aria-labelledby="document-title">
        <p className="eyebrow">DOKUMENTE</p>
        <h1 id="document-title">{activeDocument.title}</h1>
        {activeDocument.description && (
          <p className="intro document-intro">{activeDocument.description}</p>
        )}

        {activeDocument.formType === 'invoice' && <InvoiceForm />}
        {activeDocument.formType === 'offer' && <OfferDocumentEditor />}
        {activeDocument.formType === 'reminder' && <ReminderDocumentEditor />}
      </section>
    </main>
  );
}
