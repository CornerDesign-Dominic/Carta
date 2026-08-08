import { useCallback, useEffect, useState } from 'react';
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

function pathForSelfReceiptVariant(variant) {
  return variant === 'standard' ? '/dokumente/eigenbeleg/a4' : '/dokumente/eigenbeleg';
}

export function getDocumentSessionResetKey(documentId) {
  return documentId;
}

function DocumentWorkflowVisual() {
  return (
    <div className="document-usage-mini document-workflow-visual" aria-hidden="true">
      <div className="document-usage-mini-header">
        <strong>Belege24</strong>
        <span>Vorschau</span>
      </div>
      <div className="document-usage-mini-address">
        <span className="document-workflow-visual-editable">Empfänger</span>
        <span className="document-workflow-visual-marked">Musterkunde GmbH</span>
        <span>Musterstraße 12 · 12345 Musterstadt</span>
      </div>
      <div className="document-usage-mini-title">
        Rechnung
      </div>
      <div className="document-usage-mini-fields">
        <span className="document-usage-mini-line is-highlighted">Rechnungsnummer · RE-2026-014</span>
        <span className="document-usage-mini-line document-workflow-visual-marked">Datum · bitte prüfen</span>
        <span className="document-usage-mini-line is-highlighted">Position · Beratungsleistung</span>
        <span className="document-usage-mini-line">Gesamtbetrag · 1.856,40 €</span>
      </div>
      <div className="document-workflow-visual-actions">
        <span>Stammdaten</span>
        <span>PDF laden</span>
        <span>PDF erstellen</span>
        <span>Drucken</span>
      </div>
    </div>
  );
}

function DocumentOverview() {
  const usageSections = [
    {
      title: 'Bearbeiten',
      text:
        'Im Bearbeiten-Modus werden veränderbare Bereiche sichtbar. Optionale Inhalte kannst du bei Bedarf ein- oder ausblenden.',
    },
    {
      title: 'Stammdaten verwenden',
      text:
        'Übernimm eigene Daten, Partner sowie Leistungen und Artikel. Alle übernommenen Angaben bleiben im Dokument anpassbar.',
    },
    {
      title: 'Prüfen',
      text:
        'Der Daten-Prüfer hebt Beispieldaten und noch zu kontrollierende Angaben hervor. Prüfe das Dokument vor der Ausgabe trotzdem vollständig.',
    },
    {
      title: 'Wiederverwenden',
      text:
        'Lade bereits erstellte Belege24-Dokumente erneut, um sie weiterzubearbeiten oder als Grundlage für ein neues Dokument zu verwenden.',
    },
    {
      title: 'Ausgeben',
      text:
        'Nach der Kontrolle kannst du das Dokument als PDF erstellen oder direkt drucken. Die Ausgabe orientiert sich an der Vorschau.',
    },
  ];

  return (
    <>
      <h1 id="document-title">Erstelle dein Dokument</h1>
      <p className="intro document-intro">
        Erstelle Geschäftsdokumente direkt im Browser und nutze Funktionen, die dich beim
        Bearbeiten, Prüfen und Wiederverwenden unterstützen.
      </p>

      <section className="document-usage-section" aria-label="Anleitung zur Nutzung der Generatoren">
        <div className="document-workflow-layout">
          <ol className="document-workflow-list" aria-label="Funktionen der Dokumentgeneratoren">
            {usageSections.map((section, index) => (
              <li className="document-workflow-step" key={section.title}>
                <span className="document-workflow-marker" aria-hidden="true">{index + 1}</span>
                <div className="document-usage-copy">
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <DocumentWorkflowVisual />
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
  initialSelfReceiptVariant = 'short',
  onNavigate,
}) {
  const [activeDocumentId, setActiveDocumentId] = useState(initialDocumentId);
  const [activeInvoiceVariant, setActiveInvoiceVariant] = useState(initialInvoiceVariant);
  const [activeSelfReceiptVariant, setActiveSelfReceiptVariant] = useState(initialSelfReceiptVariant);
  const [activeInvoiceSmallBusiness, setActiveInvoiceSmallBusiness] = useState(initialInvoiceSmallBusiness);
  const [masterDataAdapter, setMasterDataAdapter] = useState(null);
  const { item: activeDocument, parentId } = findDocumentItem(activeDocumentId);
  const isOverview = activeDocumentId === 'overview';
  const showMasterDataPanel = ['invoice', 'offer', 'deliveryNote', 'creditNote', 'reminder', 'businessLetter', 'receipt', 'selfReceipt'].includes(activeDocument?.formType);
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
    setActiveSelfReceiptVariant(initialSelfReceiptVariant);
  }, [initialSelfReceiptVariant]);

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

  function handleSelfReceiptVariantChange(variant) {
    const nextVariant = variant === 'short' ? 'short' : 'standard';
    setActiveSelfReceiptVariant(nextVariant);
    onNavigate?.({
      view: 'documents',
      documentId: 'write-self-receipt',
      selfReceiptVariant: nextVariant,
      path: pathForSelfReceiptVariant(nextVariant),
    }, { preserveDocumentsView: true });
  }

  const handleMasterDataAdapterChange = useCallback((adapter) => {
    setMasterDataAdapter((current) => current === adapter ? current : adapter);
  }, []);

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

              {activeDocument.formType === 'deliveryNote' && <DeliveryNoteDocumentEditor onMasterDataAdapterChange={handleMasterDataAdapterChange} />}
              {activeDocument.formType === 'businessLetter' && <BusinessLetterDocumentEditor onMasterDataAdapterChange={handleMasterDataAdapterChange} />}
              {activeDocument.formType === 'creditNote' && <CreditNoteDocumentEditor onMasterDataAdapterChange={handleMasterDataAdapterChange} />}
              {activeDocument.formType === 'invoice' && (
                <InvoiceDocumentEditor
                  initialSmallBusiness={activeInvoiceSmallBusiness}
                  invoiceVariant={activeInvoiceVariant}
                  onInvoiceVariantChange={handleInvoiceVariantChange}
                  onMasterDataAdapterChange={handleMasterDataAdapterChange}
                  onSmallBusinessChange={handleInvoiceSmallBusinessChange}
                />
              )}
              {activeDocument.formType === 'offer' && <OfferDocumentEditor onMasterDataAdapterChange={handleMasterDataAdapterChange} />}
              {activeDocument.formType === 'receipt' && <ReceiptDocumentEditor onMasterDataAdapterChange={handleMasterDataAdapterChange} />}
              {activeDocument.formType === 'reminder' && <ReminderDocumentEditor onMasterDataAdapterChange={handleMasterDataAdapterChange} />}
              {activeDocument.formType === 'selfReceipt' && (
                <SelfReceiptDocumentEditor
                  initialSelfReceiptVariant={activeSelfReceiptVariant}
                  onMasterDataAdapterChange={handleMasterDataAdapterChange}
                  onSelfReceiptVariantChange={handleSelfReceiptVariantChange}
                />
              )}
            </>
          )}
        </section>
      </div>
      {showMasterDataPanel && <MasterDataPanel key={getDocumentSessionResetKey(activeDocumentId)} documentAdapter={masterDataAdapter} documentType={activeDocument.formType} documentVariant={activeDocument.formType === 'invoice' ? activeInvoiceVariant : undefined} />}
    </main>
  );
}
