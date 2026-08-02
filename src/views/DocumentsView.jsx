import { useEffect, useState } from 'react';
import BusinessLetterDocumentEditor from '../components/BusinessLetterDocumentEditor.jsx';
import CreditNoteDocumentEditor from '../components/CreditNoteDocumentEditor.jsx';
import DeliveryNoteDocumentEditor from '../components/DeliveryNoteDocumentEditor.jsx';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceDocumentEditor from '../components/InvoiceDocumentEditor.jsx';
import MasterDataPanel from '../components/masterDataPanel/MasterDataPanel.jsx';
import OfferDocumentEditor from '../components/OfferDocumentEditor.jsx';
import ReceiptDocumentEditor from '../components/ReceiptDocumentEditor.jsx';
import ReminderDocumentEditor from '../components/ReminderDocumentEditor.jsx';
import SelfReceiptDocumentEditor from '../components/SelfReceiptDocumentEditor.jsx';
import { findDocumentItem } from '../data/documents.js';

function pathForInvoiceVariant(variant) {
  if (variant === 'text') {
    return '/dokumente/rechnung/text';
  }

  if (variant === 'goods') {
    return '/dokumente/rechnung/waren';
  }

  if (variant === 'progressInvoice') {
    return '/dokumente/rechnung/abschlag';
  }

  if (variant === 'partialInvoice') {
    return '/dokumente/rechnung/teilrechnung';
  }

  if (variant === 'finalInvoice') {
    return '/dokumente/rechnung/schlussrechnung';
  }

  return '/dokumente/rechnung/standard';
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
        Rechnung
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
      title: 'Hinweis zur Prüfung',
      text:
        'Beispieldaten können mit dem Daten-Prüfer erkannt und hervorgehoben werden. Vor dem Erstellen sollten diese Daten angepasst sowie Tippfehler und unvollständige Angaben geprüft werden.',
      visual: 'check',
    },
  ];

  return (
    <>
      <h1 id="document-title">Erstelle dein Dokument</h1>
      <p className="intro document-intro">
        Mit unseren interaktiven Online-Dokumenten erstellst du dein
        Geschäfts-Dokument einfach und schnell direkt im Browser. So
        funktioniert es:
      </p>

      <section className="document-usage-section" aria-label="Anleitung zur Nutzung der Generatoren">
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

export default function DocumentsView({
  initialDocumentId = 'overview',
  initialInvoiceSmallBusiness,
  initialInvoiceVariant = 'standard',
  onNavigate,
}) {
  const [activeDocumentId, setActiveDocumentId] = useState(initialDocumentId);
  const [activeInvoiceVariant, setActiveInvoiceVariant] = useState(initialInvoiceVariant);
  const [activeInvoiceSmallBusiness, setActiveInvoiceSmallBusiness] = useState(initialInvoiceSmallBusiness);
  const { item: activeDocument, parentId } = findDocumentItem(activeDocumentId);
  const isOverview = activeDocumentId === 'overview';
  const showMasterDataPanel = activeDocument?.formType === 'invoice';
  const showDocumentDescription = ![
    'write-invoice',
    'write-offer',
    'write-credit-note',
    'write-delivery-note',
    'write-business-letter',
    'write-reminder',
    'write-receipt',
    'write-self-receipt',
  ].includes(activeDocumentId)
    && activeDocument?.description;

  useEffect(() => {
    setActiveDocumentId(initialDocumentId);
  }, [initialDocumentId]);

  useEffect(() => {
    setActiveInvoiceVariant(initialInvoiceVariant);
  }, [initialInvoiceVariant]);

  useEffect(() => {
    setActiveInvoiceSmallBusiness(initialInvoiceSmallBusiness);
  }, [initialInvoiceSmallBusiness]);

  function handleSelectDocument(documentId) {
    setActiveDocumentId(documentId);
    if (documentId === 'write-invoice') {
      setActiveInvoiceVariant('standard');
    }

    onNavigate?.({ view: 'documents', documentId });
  }

  function handleInvoiceVariantChange(variant) {
    setActiveInvoiceVariant(variant);

    const nextPath = pathForInvoiceVariant(variant);
    onNavigate?.({
      view: 'documents',
      documentId: 'write-invoice',
      invoiceVariant: variant,
      isSmallBusiness: activeInvoiceSmallBusiness,
      path: nextPath,
    }, { preserveDocumentsView: true });
  }

  function handleInvoiceSmallBusinessChange(isSmallBusiness) {
    setActiveInvoiceSmallBusiness(isSmallBusiness);
    onNavigate?.({
      view: 'documents',
      documentId: 'write-invoice',
      invoiceVariant: activeInvoiceVariant,
      isSmallBusiness,
      path: pathForInvoiceVariant(activeInvoiceVariant),
    }, { preserveDocumentsView: true, replace: true });
  }

  return (
    <main className={`documents-layout${showMasterDataPanel ? ' has-master-data-panel' : ''}`}>
      <DocumentSidebar
        activeId={activeDocumentId}
        activeParentId={parentId}
        onSelect={handleSelectDocument}
      />

      <div className="documents-workspace">
      <section className="paper-page document-paper" aria-labelledby="document-title">
        {isOverview && <DocumentOverview />}

        {!isOverview && (
          <>
            <h1 id="document-title">{activeDocument.title}</h1>
            {showDocumentDescription && (
              <p className="intro document-intro">{activeDocument.description}</p>
            )}

            {activeDocument.formType === 'deliveryNote' && <DeliveryNoteDocumentEditor />}
            {activeDocument.formType === 'businessLetter' && <BusinessLetterDocumentEditor />}
            {activeDocument.formType === 'creditNote' && <CreditNoteDocumentEditor />}
            {activeDocument.formType === 'invoice' && (
              <InvoiceDocumentEditor
                initialSmallBusiness={activeInvoiceSmallBusiness}
                invoiceVariant={activeInvoiceVariant}
                onInvoiceVariantChange={handleInvoiceVariantChange}
                onSmallBusinessChange={handleInvoiceSmallBusinessChange}
              />
            )}
            {activeDocument.formType === 'offer' && <OfferDocumentEditor />}
            {activeDocument.formType === 'receipt' && <ReceiptDocumentEditor />}
            {activeDocument.formType === 'reminder' && <ReminderDocumentEditor />}
            {activeDocument.formType === 'selfReceipt' && <SelfReceiptDocumentEditor />}
          </>
        )}
      </section>
      {showMasterDataPanel && <MasterDataPanel />}
      </div>
    </main>
  );
}
