import { useEffect, useState } from 'react';
import CreditNoteDocumentEditor from '../components/CreditNoteDocumentEditor.jsx';
import DeliveryNoteDocumentEditor from '../components/DeliveryNoteDocumentEditor.jsx';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceDocumentEditor from '../components/InvoiceDocumentEditor.jsx';
import OfferDocumentEditor from '../components/OfferDocumentEditor.jsx';
import ReceiptDocumentEditor from '../components/ReceiptDocumentEditor.jsx';
import ReminderDocumentEditor from '../components/ReminderDocumentEditor.jsx';
import SelfReceiptDocumentEditor from '../components/SelfReceiptDocumentEditor.jsx';
import { findDocumentItem } from '../data/documents.js';

function pathForDocumentId(documentId) {
  const { item } = findDocumentItem(documentId);
  return item?.path ?? '/dokumente';
}

function DocumentOverview() {
  const usageSections = [
    {
      title: 'Direkt im Dokument',
      text:
        'Einfach auf „Bearbeiten“ klicken und Sie sehen, was alles bearbeitet werden kann. Egal ob in der Vorschau oder im Bearbeitungsmodus: Sie können nahezu alles individuell anpassen.',
    },
    {
      title: 'Im Formular',
      text: 'Hier können Sie schnell gespeicherte Daten per Autofill ausfüllen.',
    },
    {
      title: 'Optionale Felder',
      text:
        'Optionale Felder sind mit einem Augen-Symbol gekennzeichnet. Diese Felder können ausgeblendet und wieder eingeblendet werden.',
    },
    {
      title: 'Dokument erstellen',
      text:
        'Wenn Sie in der Vorschau zufrieden sind, drücken Sie einfach auf „PDF erstellen“ oder „Drucken“. So wie das Dokument in der Vorschau zu sehen ist, wird es generiert.',
    },
    {
      title: 'Vorlagen',
      text:
        'Wenn Sie die Grunddaten speichern wollen, können Sie eine Datei erstellen, welche die eingegebenen Daten beinhaltet. Diese können Sie beim nächsten Mal durch Hochladen direkt wieder verwenden.',
    },
    {
      title: 'Hinweis zur Prüfung',
      text:
        'Vor dem Erstellen eines Dokumentes sollten alle Angaben sorgfältig geprüft werden. So vermeidet man Beispieldaten, Tippfehler oder unvollständige Angaben.',
    },
  ];

  return (
    <>
      <p className="eyebrow">DOKUMENTE</p>
      <h1 id="document-title">Dokumente einfach im Browser erstellen</h1>
      <p className="intro document-intro">
        Mit den online Belegen von Belege24 erstellen Sie Dokumente direkt im
        Browser. Kostenlos, ohne Werbung, keine Anmeldung und ohne Limit.
      </p>

      <section className="document-usage-section" aria-label="Anleitung zur Nutzung der Generatoren">
        <h2>So geht es:</h2>
        <div className="document-usage-grid" aria-label="Hinweise zur Nutzung der Generatoren">
          {usageSections.map((section) => (
            <section className="document-usage-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </section>

      <div className="document-overview-divider" aria-hidden="true" />

      <section className="document-status-note" aria-label="Hinweis zum Entwicklungsstand">
        <p>
          <strong>Hinweis:</strong> Die Generatoren befinden sich aktuell noch
          in Ausarbeitung. Einzelne Funktionen, Texte und Dokumentarten können
          sich daher noch ändern.
        </p>
      </section>
    </>
  );
}

export default function DocumentsView({ initialDocumentId = 'overview' }) {
  const [activeDocumentId, setActiveDocumentId] = useState(initialDocumentId);
  const { item: activeDocument, parentId } = findDocumentItem(activeDocumentId);
  const isOverview = activeDocumentId === 'overview';
  const showDocumentDescription = ![
    'write-invoice',
    'write-offer',
    'write-credit-note',
    'write-delivery-note',
    'write-reminder',
    'write-receipt',
    'write-self-receipt',
  ].includes(activeDocumentId)
    && activeDocument?.description;

  useEffect(() => {
    setActiveDocumentId(initialDocumentId);
  }, [initialDocumentId]);

  function handleSelectDocument(documentId) {
    setActiveDocumentId(documentId);

    const nextPath = pathForDocumentId(documentId);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
  }

  return (
    <main className="documents-layout">
      <DocumentSidebar
        activeId={activeDocumentId}
        activeParentId={parentId}
        onSelect={handleSelectDocument}
      />

      <section className="paper-page document-paper" aria-labelledby="document-title">
        {isOverview && <DocumentOverview />}

        {!isOverview && (
          <>
            <p className="eyebrow">DOKUMENTE</p>
            <h1 id="document-title">{activeDocument.title}</h1>
            {showDocumentDescription && (
              <p className="intro document-intro">{activeDocument.description}</p>
            )}

            {activeDocument.formType === 'deliveryNote' && <DeliveryNoteDocumentEditor />}
            {activeDocument.formType === 'creditNote' && <CreditNoteDocumentEditor />}
            {activeDocument.formType === 'invoice' && <InvoiceDocumentEditor />}
            {activeDocument.formType === 'offer' && <OfferDocumentEditor />}
            {activeDocument.formType === 'receipt' && <ReceiptDocumentEditor />}
            {activeDocument.formType === 'reminder' && <ReminderDocumentEditor />}
            {activeDocument.formType === 'selfReceipt' && <SelfReceiptDocumentEditor />}
          </>
        )}
      </section>
    </main>
  );
}
