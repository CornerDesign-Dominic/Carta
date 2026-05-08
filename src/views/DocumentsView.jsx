import { useState } from 'react';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceForm from '../components/InvoiceForm.jsx';
import OfferDocumentEditor from '../components/OfferDocumentEditor.jsx';
import ReminderDocumentEditor from '../components/ReminderDocumentEditor.jsx';
import { documentSections, findDocumentItem } from '../data/documents.js';

function DocumentOverview({ onSelect }) {
  return (
    <>
      <p className="eyebrow">DOKUMENTE</p>
      <h1 id="document-title">Dokumente einfach im Browser erstellen</h1>
      <p className="intro document-intro">
        Belege24 hilft dabei, kaufmännische Dokumente direkt im Browser als
        drucknahe A4-Dokumente vorzubereiten. Wähle einen Dokumenttyp aus und
        bearbeite die Inhalte anschließend visuell im Generator.
      </p>

      <div className="document-overview-grid" aria-label="Dokumentgeneratoren">
        {documentSections.map((section) => {
          const targetId = section.children?.[0]?.id ?? section.id;

          return (
            <button
              className="document-overview-card"
              key={section.id}
              type="button"
              onClick={() => onSelect(targetId)}
            >
              <span>{section.label}</span>
              <p>{section.description}</p>
            </button>
          );
        })}
      </div>

      <p className="document-note">
        Die Generatoren sind als feste Dokumentarbeitsflächen aufgebaut. So
        bleiben Aufbau, Abstände und A4-Struktur im Mittelpunkt, während weitere
        Belegarten später ergänzt werden können.
      </p>
    </>
  );
}

export default function DocumentsView() {
  const [activeDocumentId, setActiveDocumentId] = useState('overview');
  const { item: activeDocument, parentId } = findDocumentItem(activeDocumentId);
  const isOverview = activeDocumentId === 'overview';
  const showDocumentDescription = activeDocumentId !== 'write-invoice' && activeDocument?.description;

  return (
    <main className="documents-layout">
      <DocumentSidebar
        activeId={activeDocumentId}
        activeParentId={parentId}
        onSelect={setActiveDocumentId}
      />

      <section className="paper-page document-paper" aria-labelledby="document-title">
        {isOverview && <DocumentOverview onSelect={setActiveDocumentId} />}

        {!isOverview && (
          <>
            <p className="eyebrow">DOKUMENTE</p>
            <h1 id="document-title">{activeDocument.title}</h1>
            {showDocumentDescription && (
              <p className="intro document-intro">{activeDocument.description}</p>
            )}

            {activeDocument.formType === 'invoice' && <InvoiceForm />}
            {activeDocument.formType === 'offer' && <OfferDocumentEditor />}
            {activeDocument.formType === 'reminder' && <ReminderDocumentEditor />}
          </>
        )}
      </section>
    </main>
  );
}
