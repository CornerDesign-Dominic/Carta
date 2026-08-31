import { defaultDisclaimer } from '../shared.js';

const swotAnalyse = {
  slug: 'swot-analyse',
  category: 'Unternehmensführung',
  title: 'SWOT-Analyse',
  description: 'SWOT-Analyse verständlich erstellen: interne Stärken und Schwächen von externen Chancen und Risiken unterscheiden und Strategien ableiten.',
  seo: {
    title: 'SWOT-Analyse einfach erklärt | Belege24',
    description: 'Erfahre, wie du Stärken, Schwächen, Chancen und Risiken unterscheidest und daraus SO-, ST-, WO- und WT-Strategien ableitest.',
    canonicalPath: '/wissen/swot-analyse',
  },
  article: {
    intro: 'Eine SWOT-Analyse ordnet die Ausgangslage eines Unternehmens in vier Felder: interne Stärken und Schwächen sowie externe Chancen und Risiken. Ihr Nutzen entsteht nicht durch eine möglichst lange Liste, sondern durch die Verbindung wichtiger Faktoren und die Ableitung konkreter strategischer Entscheidungen.',
    sections: [
      {
        heading: 'Was ist eine SWOT-Analyse?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'swot-analyse', text: 'SWOT-Analyse' },
            ' ist ein Werkzeug der strategischen Analyse. SWOT steht für Strengths, Weaknesses, Opportunities und Threats – auf Deutsch Stärken, Schwächen, Chancen und Risiken.',
          ],
          'Sie verbindet den Blick in das Unternehmen mit dem Blick auf sein Umfeld. So wird sichtbar, welche Möglichkeiten zur eigenen Ausgangslage passen, welche Schwächen die Nutzung einer Chance erschweren und wo Schutzmaßnahmen nötig sein können.',
        ],
        matrixCards: [{
          title: 'SWOT-Matrix',
          cells: [
            { code: 'S', title: 'Stärken (Strengths)', context: 'intern', text: 'Vorteilhafte Fähigkeiten, Ressourcen oder Eigenschaften, die das Unternehmen selbst beeinflussen kann.' },
            { code: 'W', title: 'Schwächen (Weaknesses)', context: 'intern', text: 'Interne Nachteile oder Lücken, die Leistung, Umsetzung oder Wettbewerbsfähigkeit begrenzen.' },
            { code: 'O', title: 'Chancen (Opportunities)', context: 'extern', text: 'Günstige Entwicklungen im Umfeld, die das Unternehmen nutzen könnte.' },
            { code: 'T', title: 'Risiken (Threats)', context: 'extern', text: 'Ungünstige Entwicklungen im Umfeld, die Ziele oder Geschäftsmodell gefährden könnten.' },
          ],
        }],
      },
      {
        heading: 'Interne Faktoren: Stärken und Schwächen',
        paragraphs: [
          [
            { type: 'glossary', id: 'interner-faktor', text: 'Interne Faktoren' },
            ' entstehen innerhalb des Unternehmens und können grundsätzlich durch eigene Entscheidungen beeinflusst werden. Dazu gehören Fähigkeiten, Personal, Prozesse, Ausstattung, Finanzen, Kundenbeziehungen oder die Unternehmenskultur.',
          ],
          'Stärken sind vorteilhafte interne Merkmale, etwa besondere Fachkenntnisse oder zuverlässige Abläufe. Schwächen sind interne Begrenzungen, beispielsweise fehlende Vertriebskenntnisse, hohe Fehlerquoten oder die Abhängigkeit von einer Schlüsselperson.',
          'Ein Merkmal ist nicht automatisch eine Stärke oder Schwäche. Entscheidend sind Ziel, Markt und Vergleichsmaßstab. Eine kleine Teamgröße kann schnelle Abstimmung ermöglichen, aber zugleich Kapazität und Vertretung begrenzen.',
        ],
      },
      {
        heading: 'Externe Faktoren: Chancen und Risiken',
        paragraphs: [
          [
            { type: 'glossary', id: 'externer-faktor', text: 'Externe Faktoren' },
            ' entstehen im Umfeld und können vom Unternehmen nicht unmittelbar gesteuert werden. Dazu zählen Veränderungen bei Kunden, Wettbewerbern, Technik, Konjunktur, Gesellschaft, Umwelt oder Regulierung.',
          ],
          'Chancen sind günstige externe Entwicklungen, Risiken sind ungünstige Entwicklungen. Eine neue Technologie kann je nach Ausgangslage eine Chance, ein Risiko oder beides sein.',
          'Eine fehlende eigene Fähigkeit ist keine externe Bedrohung, sondern eine Schwäche. Ein neuer Wettbewerber ist dagegen keine interne Schwäche, sondern ein externes Risiko. Diese Trennung verhindert, dass Ursachen und mögliche Reaktionen vermischt werden.',
        ],
      },
      {
        heading: 'So erstellst du eine SWOT-Analyse',
        paragraphs: ['Lege zuerst Fragestellung, betrachteten Bereich und Zeitraum fest. Eine Analyse für das gesamte Unternehmen kann andere Faktoren enthalten als eine Analyse für einen bestimmten Markteintritt. Sammle anschließend Informationen aus internen Daten, Gesprächen, Kundenfeedback und nachvollziehbaren Umfeldbeobachtungen.'],
        list: [
          'Fragestellung, Bereich und Zeitraum eindeutig festlegen',
          'relevante interne und externe Informationen zusammentragen',
          'Faktoren zunächst nach intern und extern trennen',
          'interne Faktoren als Stärke oder Schwäche und externe als Chance oder Risiko einordnen',
          'Aussagen konkret formulieren und möglichst mit Beobachtungen oder Daten belegen',
          'wenige besonders wichtige Faktoren priorisieren',
          'Faktoren verbinden und strategische Optionen ableiten',
          'Maßnahmen, Verantwortung, Termine und Prüfkriterien festlegen',
        ],
      },
      {
        heading: 'Warum bloßes Auflisten nicht reicht',
        paragraphs: [
          'Vier Listen beschreiben lediglich die Ausgangslage. Zur Entscheidungshilfe wird die SWOT-Analyse erst durch Fragen wie: Welche Stärke hilft, eine Chance zu nutzen? Welche Schwäche verstärkt ein Risiko? Welche Faktoren sind wirklich entscheidend?',
          'Priorisiere nach Bedeutung, Wahrscheinlichkeit und Einfluss auf die Fragestellung. „Guter Service“ oder „starker Wettbewerb“ sind zu unbestimmt. Aussagekräftiger sind beobachtbare Aussagen, etwa eine belegte Reaktionszeit oder der Markteintritt zweier günstigerer Anbieter.',
        ],
      },
      {
        heading: 'SO-, ST-, WO- und WT-Strategien ableiten',
        paragraphs: ['Die Kombination der Felder erzeugt strategische Optionen. Sie ersetzt keine Entscheidung: Jede Option muss zu Zielen, Ressourcen und möglichen Nebenwirkungen passen.'],
        subsections: [
          { heading: 'SO-Strategie: Stärken für Chancen nutzen', paragraphs: ['Eine vorhandene Stärke wird eingesetzt, um eine externe Chance zu nutzen. Besondere Fachkenntnisse können beispielsweise helfen, einen wachsenden Spezialmarkt früh zu bedienen.'] },
          { heading: 'ST-Strategie: Stärken gegen Risiken einsetzen', paragraphs: ['Eine Stärke soll die Wirkung eines externen Risikos begrenzen. Eine enge Kundenbindung kann etwa helfen, wenn neue Wettbewerber in den Markt eintreten.'] },
          { heading: 'WO-Strategie: Schwächen abbauen, um Chancen zu nutzen', paragraphs: ['Eine interne Schwäche wird gezielt verbessert, damit eine externe Chance nutzbar wird – beispielsweise durch Weiterbildung oder eine Kooperation.'] },
          { heading: 'WT-Strategie: Schwächen und Risiken begrenzen', paragraphs: ['Das Unternehmen reduziert eine Schwäche und vermeidet zugleich die Wirkung eines Risikos. Möglich sind Absicherung, Konzentration, Kooperation oder ein bewusster Rückzug.'] },
        ],
      },
      {
        heading: 'Praxisbeispiel: regionaler Möbelbauer',
        paragraphs: ['Ein kleiner Möbelbauer prüft, ob er individuelle Büromöbel für regionale Geschäftskunden anbieten soll. Er grenzt die Analyse auf dieses Vorhaben und die kommenden drei Jahre ein.'],
        exampleCards: [
          {
            title: 'SWOT-Ausgangslage',
            paragraphs: ['Stärke: Das Team kann Sondermaße schnell konstruieren und fertigen. Schwäche: Es gibt wenig Erfahrung im Geschäftskundenvertrieb. Chance: Regionale Unternehmen investieren stärker in flexible Arbeitsplätze. Risiko: Große Anbieter liefern Standardmöbel deutlich günstiger.'],
            effects: ['S: flexible Fertigung und Konstruktionswissen', 'W: wenig Erfahrung im B2B-Vertrieb', 'O: steigende Nachfrage nach flexiblen Arbeitsplätzen', 'T: Preisdruck durch große Standardanbieter'],
          },
          {
            title: 'Abgeleitete Strategie und Maßnahmen',
            paragraphs: ['SO: Der Betrieb positioniert sich für individuelle, raumgenaue Lösungen. WO: Er kooperiert zum Markteinstieg mit einem regionalen Büroplaner und schult eine Mitarbeiterin im Geschäftskundenvertrieb. ST: Beratung und Anpassungsfähigkeit grenzen ihn von Standardanbietern ab. WT: Preisempfindliche Großaufträge ohne Anpassungsbedarf verfolgt er nicht aktiv.'],
            effects: ['Strategie: Fokus auf individuelle regionale Lösungen', 'Maßnahmen: Kooperation, Vertriebsschulung und Pilotprojekte', 'Kontrolle: qualifizierte Anfragen, Abschlussquote und Deckungsbeitrag'],
          },
        ],
      },
      {
        heading: 'Von der Analyse zur Umsetzung',
        paragraphs: [
          [
            'Die ausgewählten Optionen fließen in die ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' ein und sollten zu den ',
            { type: 'link', href: '/wissen/unternehmensziele', text: 'Unternehmenszielen' },
            ' passen. Danach werden Maßnahmen mit Verantwortung, Termin, Budget und Prüfkriterien festgelegt.',
          ],
          'Da interne Fähigkeiten und externe Bedingungen sich verändern, ist die Matrix keine dauerhafte Wahrheit. Überprüfe wichtige Faktoren und Annahmen zu festen Terminen oder bei wesentlichen Veränderungen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Stärken und Schwächen sind interne Faktoren',
    'Chancen und Risiken sind externe Faktoren',
    'Fragestellung und Zeitraum müssen vor der Sammlung feststehen',
    'Konkrete, belegbare und priorisierte Faktoren sind hilfreicher als lange Schlagwortlisten',
    'SO-, ST-, WO- und WT-Kombinationen helfen, strategische Optionen abzuleiten',
    'Optionen müssen in Entscheidungen, Maßnahmen und Kontrolle übersetzt werden',
  ],
  commonMistakes: [
    'interne Schwächen als externe Risiken oder externe Chancen als eigene Stärken einordnen',
    'ohne klare Fragestellung Faktoren für das gesamte Unternehmen sammeln',
    'allgemeine Schlagworte statt konkreter Beobachtungen verwenden',
    'ungeprüfte Meinungen als Tatsachen übernehmen',
    'alle Faktoren gleich gewichten und nicht priorisieren',
    'bei vier Listen aufhören und keine strategischen Optionen ableiten',
    'Optionen ohne Prüfung von Zielen und Ressourcen sofort umsetzen',
    'die Analyse trotz veränderter Annahmen nicht aktualisieren',
  ],
  faqs: [
    { question: 'Was bedeutet SWOT?', answer: 'SWOT steht für Strengths, Weaknesses, Opportunities und Threats – auf Deutsch Stärken, Schwächen, Chancen und Risiken.' },
    { question: 'Was ist der wichtigste Unterschied in einer SWOT-Analyse?', answer: 'Stärken und Schwächen liegen innerhalb des Unternehmens. Chancen und Risiken entstehen im externen Umfeld und können nicht unmittelbar gesteuert werden.' },
    { question: 'Ist eine neue Technologie eine Chance oder eine Stärke?', answer: 'Die Entwicklung im Umfeld ist eine mögliche Chance oder ein Risiko. Eigene Kenntnisse für ihren Einsatz können dagegen eine interne Stärke sein.' },
    { question: 'Wie viele Faktoren gehören in eine SWOT-Analyse?', answer: 'Es gibt keine feste Zahl. Wenige konkrete und priorisierte Faktoren sind meist hilfreicher als lange, ungewichtete Listen.' },
    { question: 'Was passiert nach der SWOT-Analyse?', answer: 'Wichtige Faktoren werden kombiniert, daraus Optionen entwickelt und geeignete Optionen in konkrete Maßnahmen und Kontrollen übersetzt.' },
  ],
  related: ['unternehmensstrategie', 'marktanalyse', 'unternehmensziele', 'businessplan'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default swotAnalyse;
