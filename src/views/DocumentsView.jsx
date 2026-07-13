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

function DocumentUsageMiniVisual({ type }) {
  return (
    <div className={`document-usage-mini document-usage-mini-${type}`} aria-hidden="true">
      <div className="document-usage-mini-header">
        <strong>Belege24</strong>
        <span>Vorschau</span>
      </div>
      <div className="document-usage-mini-address">
        <span>Max Mustermann GmbH</span>
        <span>Musterstraße 12</span>
        <span>12345 Musterstadt</span>
      </div>
      <div className="document-usage-mini-title">
        {type === 'template' ? 'Vorlage' : 'Rechnung'}
      </div>

      {type === 'edit' && (
        <div className="document-usage-mini-fields">
          <span className="document-usage-mini-line is-highlighted">Rechnungsnummer</span>
          <span className="document-usage-mini-line is-highlighted">Datum</span>
          <span className="document-usage-mini-line">Leistung</span>
          <span className="document-usage-mini-line is-highlighted">Gesamtbetrag</span>
        </div>
      )}

      {type === 'optional' && (
        <div className="document-usage-mini-fields">
          <span className="document-usage-mini-line">Empfänger</span>
          <span className="document-usage-mini-line is-optional">
            <span className="document-usage-mini-eye" />
            z. H. Ansprechpartner
          </span>
          <span className="document-usage-mini-line is-muted">ausblendbare Zeile</span>
          <span className="document-usage-mini-line">Summe</span>
        </div>
      )}

      {type === 'output' && (
        <div className="document-usage-mini-fields">
          <span className="document-usage-mini-line">Vorschau geprüft</span>
          <span className="document-usage-mini-line">Layout bereit</span>
          <div className="document-usage-mini-actions">
            <span>PDF</span>
            <span>Drucken</span>
          </div>
        </div>
      )}

      {type === 'template' && (
        <div className="document-usage-mini-fields">
          <span className="document-usage-mini-line">Dokumentdaten</span>
          <span className="document-usage-mini-line is-code">beleg-vorlage.json</span>
          <span className="document-usage-mini-line">später laden</span>
        </div>
      )}

      {type === 'check' && (
        <div className="document-usage-mini-fields">
          <span className="document-usage-mini-line is-marked">Max Mustermann</span>
          <span className="document-usage-mini-line">Rechnungsposition</span>
          <span className="document-usage-mini-line is-marked">Musterstraße 12</span>
          <span className="document-usage-mini-line">Gesamtbetrag</span>
        </div>
      )}
    </div>
  );
}

function DocumentOverview() {
  const usageSections = [
    {
      title: 'Direkt im Dokument',
      text:
        'Einfach loslegen. Klicke auf „Bearbeiten“, um zu sehen, welche Angaben im Dokument angepasst werden können.',
      visual: 'edit',
    },
    {
      title: 'Optionale Felder',
      text:
        'Optionale Felder sind mit einem Augen-Symbol gekennzeichnet. Sie können ausgeblendet und bei Bedarf wieder eingeblendet werden.',
      visual: 'optional',
    },
    {
      title: 'Dokument erstellen',
      text:
        'Wenn die Vorschau passt, kannst du das Dokument über „PDF erstellen“ oder „Drucken“ ausgeben. Es wird so erstellt, wie es in der Vorschau zu sehen ist.',
      visual: 'output',
    },
    {
      title: 'Vorlagen',
      text:
        'Beim Erstellen können die Dokumentdaten als JSON-Datei gespeichert werden. Diese Datei lässt sich später wieder hochladen und als Vorlage nutzen.',
      visual: 'template',
    },
    {
      title: 'Hinweis zur Prüfung',
      text:
        'Beispieldaten können mit dem Daten-Prüfer erkannt und hervorgehoben werden. Vor dem Erstellen sollten diese Daten angepasst sowie Tippfehler und unvollständige Angaben geprüft werden.',
      visual: 'check',
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
        <h2>Erstelle dein Dokument</h2>
        <p className="document-usage-intro">
          Mit unseren interaktiven Online-Dokumenten erstellst du dein
          Geschäfts-Dokument einfach und schnell direkt im Browser. So
          funktioniert es:
        </p>
        <div className="document-usage-grid" aria-label="Hinweise zur Nutzung der Generatoren">
          {usageSections.map((section) => (
            <section className="document-usage-row" key={section.title}>
              <div className="document-usage-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <DocumentUsageMiniVisual type={section.visual} />
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
