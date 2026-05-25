import { useEffect, useState } from 'react';
import CreditNoteDocumentEditor from '../components/CreditNoteDocumentEditor.jsx';
import DeliveryNoteDocumentEditor from '../components/DeliveryNoteDocumentEditor.jsx';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceDocumentEditor from '../components/InvoiceDocumentEditor.jsx';
import OfferDocumentEditor from '../components/OfferDocumentEditor.jsx';
import ReceiptDocumentEditor from '../components/ReceiptDocumentEditor.jsx';
import ReminderDocumentEditor from '../components/ReminderDocumentEditor.jsx';
import SelfReceiptDocumentEditor from '../components/SelfReceiptDocumentEditor.jsx';
import { documentSections, findDocumentItem } from '../data/documents.js';

function isPlainLeftClick(event) {
  return (
    event.button === 0
    && !event.metaKey
    && !event.ctrlKey
    && !event.shiftKey
    && !event.altKey
    && !event.defaultPrevented
  );
}

function pathForDocumentId(documentId) {
  const { item } = findDocumentItem(documentId);
  return item?.path ?? '/dokumente';
}

function DocumentOverview({ onSelect }) {
  const usageSections = [
    {
      title: 'Das Formular nutzen',
      text:
        'Im Formular erfassen Sie Absender, Empfänger, Dokumentdaten, Positionen, Texte und Fußdaten. Die Angaben werden automatisch in das Dokument übernommen. Getrennte Felder wie Straße, Hausnummer, PLZ und Ort helfen bei einer sauberen Eingabe und besseren Übersicht.',
    },
    {
      title: 'Direkt im Dokument arbeiten',
      text:
        'Das Dokument zeigt die spätere Druckansicht. Viele Texte und Bezeichnungen können direkt im Dokument angepasst werden. So lässt sich prüfen, ob Inhalt, Aufbau und Darstellung zusammenpassen.',
    },
    {
      title: 'Bearbeiten, Drucken und PDF erstellen',
      text:
        '„Bearbeiten“ blendet bearbeitbare Bereiche ein oder macht sie deutlicher sichtbar. „Drucken“ öffnet den normalen Druckdialog des Browsers. „PDF erstellen“ erzeugt eine saubere PDF-Datei zum Speichern, Versenden oder Archivieren.',
    },
    {
      title: 'Hinweis zur Prüfung',
      text:
        'Vor dem Versand sollten Angaben wie Empfänger, Nummern, Beträge, Steuerdaten und Bankverbindung geprüft werden. Die Generatoren helfen beim Aufbau, ersetzen aber keine fachliche Prüfung im Einzelfall.',
    },
  ];
  const actionSections = [
    {
      title: 'Bearbeiten',
      text: 'Bearbeitbare Felder im Dokument anzeigen',
    },
    {
      title: 'Vorlage laden',
      text: 'Gespeicherte JSON Vorlage laden',
    },
    {
      title: 'Vorlage erstellen',
      text: 'Aktuelle Daten als JSON Vorlage speichern',
    },
    {
      title: 'Drucken',
      text: 'Druckdialog öffnen',
    },
    {
      title: 'PDF',
      text: 'PDF-Datei erstellen',
    },
  ];

  return (
    <>
      <p className="eyebrow">DOKUMENTE</p>
      <h1 id="document-title">Dokumente einfach im Browser erstellen</h1>
      <p className="intro document-intro">
        Mit den Belege24-Generatoren erstellen Sie kaufmännische Dokumente
        direkt im Browser. Sie füllen zunächst die wichtigsten Angaben im
        Formular aus und sehen darunter sofort das fertige Dokument im
        A4-Format. So können Sie Inhalte prüfen, anpassen und anschließend als
        PDF speichern oder drucken.
      </p>

      <div className="document-usage-grid" aria-label="Hinweise zur Nutzung der Generatoren">
        {usageSections.map((section) => (
          <section className="document-usage-card" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>

      <section className="document-actions-help" aria-label="Kurze Erklärung der Aktionen">
        <h2>Aktionen im Generator</h2>
        <div className="document-actions-list">
          {actionSections.map((action) => (
            <p key={action.title}>
              <strong>{action.title}:</strong> {action.text}
            </p>
          ))}
        </div>
      </section>

      <div className="document-overview-grid" aria-label="Dokumentgeneratoren">
        {documentSections.map((section) => {
          const target = section.children?.[0] ?? section;
          const targetId = target.id;
          const targetPath = target.path ?? '/dokumente';

          return (
            <a
              className="document-overview-card"
              key={section.id}
              href={targetPath}
              onClick={(event) => {
                if (!isPlainLeftClick(event)) {
                  return;
                }

                event.preventDefault();
                onSelect(targetId);
              }}
            >
              <span>{section.label}</span>
              <p>{section.description}</p>
            </a>
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
        {isOverview && <DocumentOverview onSelect={handleSelectDocument} />}

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
