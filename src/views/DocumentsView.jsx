import { useState } from 'react';
import DocumentSidebar from '../components/DocumentSidebar.jsx';
import InvoiceForm from '../components/InvoiceForm.jsx';
import OfferDocumentEditor from '../components/OfferDocumentEditor.jsx';
import ReminderDocumentEditor from '../components/ReminderDocumentEditor.jsx';
import { documentSections, findDocumentItem } from '../data/documents.js';

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
  const showDocumentDescription = !['write-invoice', 'write-offer'].includes(activeDocumentId)
    && activeDocument?.description;

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
