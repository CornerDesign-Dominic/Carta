import { defaultDisclaimer } from '../shared.js';

const periodenabgrenzung = {
  slug: 'periodenabgrenzung',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Periodenabgrenzung',
  description: 'Periodenabgrenzung einfach erklärt: wirtschaftliche Zugehörigkeit von Aufwand und Ertrag, Abgrenzung zu RAPs, Forderungen, Verbindlichkeiten und EÜR.',
  seo: {
    title: 'Periodenabgrenzung einfach erklärt | Belege24',
    description: 'Verstehe, warum Zahlungszeitpunkt und Aufwand oder Ertrag auseinanderfallen können und wie Bilanz, GuV, RAPs, Rückstellungen und EÜR zusammenhängen.',
    canonicalPath: '/wissen/periodenabgrenzung',
  },
  article: {
    intro: 'Periodenabgrenzung sorgt dafür, dass der Erfolg eines Geschäftsjahrs dort erscheint, wo er wirtschaftlich hingehört. Bei bilanzierenden Unternehmen ist deshalb nicht allein entscheidend, wann Geld gezahlt oder erhalten wurde.',
    sections: [
      {
        heading: 'Was bedeutet periodengerechte Erfolgsermittlung?',
        paragraphs: [
          [
            'Bei der ',
            { type: 'glossary', id: 'periodenabgrenzung', text: 'Periodenabgrenzung' },
            ' werden ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwendungen' },
            ' und ',
            { type: 'glossary', id: 'ertrag', text: 'Erträge' },
            ' dem Zeitraum zugeordnet, in dem sie wirtschaftlich verursacht sind. Ein Geschäftsjahr soll so den Erfolg dieses Jahres zeigen – nicht nur die Zahlungsbewegungen auf dem Bankkonto.',
          ],
          'Das Handelsrecht verlangt für den Jahresabschluss, Aufwendungen und Erträge des Geschäftsjahrs unabhängig von den Zeitpunkten der entsprechenden Zahlungen zu berücksichtigen. Das ist das Grundprinzip der periodengerechten Erfolgsermittlung.',
        ],
      },
      {
        heading: 'Zahlungszeitpunkt und wirtschaftliche Zugehörigkeit',
        paragraphs: [
          'Eine Zahlung, eine Rechnung und die wirtschaftliche Leistung können in verschiedene Zeiträume fallen. Ein Unternehmen kann zum Beispiel eine Versicherung im Voraus bezahlen, eine Leistung bereits erbracht haben und die Kundenzahlung erst später erhalten oder eine Verpflichtung zum Jahresende kennen, obwohl Höhe oder Fälligkeit noch nicht endgültig feststehen.',
          'Für die Bilanzierung wird deshalb gefragt: In welchem Zeitraum wurde die Leistung genutzt oder erbracht? Wann ist der Aufwand entstanden oder der Ertrag erwirtschaftet? Erst danach wird geprüft, welches Instrument den Sachverhalt im Abschluss abbildet.',
        ],
        formulaCards: [
          {
            title: 'Wann gehört der Aufwand oder Ertrag wirtschaftlich in welche Periode?',
            formula: 'Nicht nur auf die Zahlung schauen\nLeistungs- oder Nutzungszeitraum bestimmen\nAufwand oder Ertrag der passenden Periode zuordnen',
            description: 'Der Zahlungszeitpunkt kann ein Hinweis sein, bestimmt bei bilanzierenden Unternehmen aber nicht allein, in welchem Geschäftsjahr der Erfolg erscheint.',
          },
        ],
      },
      {
        heading: 'Welche Abgrenzungsinstrumente gibt es?',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/rechnungsabgrenzung', text: 'Rechnungsabgrenzung' },
            ' ist ein Instrument für Fälle, in denen Geld bereits vor dem Bilanzstichtag geflossen ist, Aufwand oder Ertrag aber eine bestimmte Zeit danach betrifft. Aktive und passive Rechnungsabgrenzungsposten (ARAP und PRAP) behandeln genau diese Vorauszahlungen und Vorauszahlungen von Kunden; die Detailseite erklärt sie ausführlich.',
          ],
          [
            'Eine ',
            { type: 'glossary', id: 'forderung', text: 'Forderung' },
            ' entsteht typischerweise, wenn das Unternehmen seine Leistung bereits erbracht hat und der Kunde noch zahlen muss. Eine ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeit' },
            ' liegt typischerweise vor, wenn eine Lieferung oder Leistung bezogen wurde und die Zahlung noch aussteht. In beiden Fällen ist die Zahlung also noch nicht erfolgt.',
          ],
          [
            'Eine ',
            { type: 'glossary', id: 'rueckstellung', text: 'Rückstellung' },
            ' kommt grundsätzlich in Betracht, wenn eine Verpflichtung wirtschaftlich im abgelaufenen Geschäftsjahr verursacht ist, ihr Bestehen, ihre Höhe oder ihr Zeitpunkt aber noch ungewiss ist. Sie ist keine Vorauszahlung und kein Ersatz für eine bekannte Verbindlichkeit.',
          ],
        ],
      },
      {
        heading: 'Beispiel: Versicherung über den Jahreswechsel',
        paragraphs: [
          'Das Beispiel ist vereinfacht und zeigt nur die periodengerechte Zuordnung. Umsatzsteuer und weitere Abschlussfragen bleiben außer Betracht.',
        ],
        exampleCards: [
          {
            title: 'Versicherung im Dezember bezahlt',
            paragraphs: [
              'Am 1. Dezember zahlt ein Unternehmen 1.200 Euro für eine zwölfmonatige Versicherung. Der Versicherungsschutz läuft vom 1. Dezember bis zum 30. November des Folgejahrs.',
              'Schritt 1: Die Zahlung von 1.200 Euro erfolgt vollständig im Dezember. Sie zeigt aber noch nicht, welcher Betrag den Erfolg des laufenden Jahres mindert.',
              'Schritt 2: Nur ein Monat Versicherungsschutz, also 100 Euro, gehört wirtschaftlich in das laufende Jahr. Die restlichen 1.100 Euro betreffen die Monate des Folgejahrs.',
              'Schritt 3: Der Anteil für das Folgejahr wird zum Bilanzstichtag grundsätzlich über einen aktiven Rechnungsabgrenzungsposten abgegrenzt und im Folgejahr als Aufwand aufgelöst.',
            ],
            effects: [
              'GuV des laufenden Jahres: Versicherungsaufwand von 100 Euro.',
              'Bilanz zum Stichtag: 1.100 Euro betreffen das Folgejahr und werden nicht als Aufwand des laufenden Jahres behandelt.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Bilanz, GuV und Jahresabschluss',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' zeigt den Aufwand und Ertrag der richtigen Periode. Die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' nimmt zugleich die zugehörigen Bestände auf, etwa Rechnungsabgrenzungsposten, Forderungen, Verbindlichkeiten oder Rückstellungen.',
          ],
          [
            'Damit gehört Periodenabgrenzung zu den zentralen Abschlussarbeiten eines ',
            { type: 'glossary', id: 'jahresabschluss', text: 'Jahresabschlusses' },
            '. Sie stellt nicht selbst einen zusätzlichen Erfolg dar, sondern ordnet vorhandene wirtschaftliche Vorgänge dem passenden Zeitraum zu.',
          ],
        ],
      },
      {
        heading: 'Unterschied zur EÜR',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/euer', text: 'Einnahmenüberschussrechnung (EÜR)' },
            ' folgt grundsätzlich dem ',
            { type: 'glossary', id: 'zuflussprinzip', text: 'Zuflussprinzip' },
            ' für Einnahmen und dem ',
            { type: 'glossary', id: 'abflussprinzip', text: 'Abflussprinzip' },
            ' für Ausgaben. Dort ist also meist der tatsächliche Geldeingang oder die tatsächliche Zahlung maßgeblich.',
          ],
          'Das bedeutet nicht, dass bei der EÜR jeder Fall vollkommen ohne zeitliche Abgrenzung bleibt: Das Steuerrecht kennt einzelne gesetzliche Ausnahmen, etwa für regelmäßig wiederkehrende Zahlungen am Jahreswechsel. Die periodengerechte Zuordnung über Bilanzposten ist aber das typische Prinzip der Bilanzierung, nicht die Grundlogik der EÜR.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Eine Auszahlung ist nicht automatisch Aufwand der aktuellen Periode und eine Einzahlung nicht automatisch Ertrag der aktuellen Periode. Entscheidend ist der wirtschaftliche Zeitraum des Vorgangs.',
          'Rechnungsabgrenzungsposten, Forderungen, Verbindlichkeiten und Rückstellungen sind nicht austauschbar. Sie setzen unterschiedliche Sachverhalte voraus.',
          'Periodenabgrenzung bedeutet nicht, Werte frei zwischen Jahren zu verschieben. Sie soll die tatsächliche wirtschaftliche Zugehörigkeit nachvollziehbar abbilden.',
          'Die EÜR und Bilanzierung folgen unterschiedlichen Grundprinzipien. Übertrage die Abgrenzungslogik eines Jahresabschlusses nicht ohne Prüfung auf eine EÜR.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Periodenabgrenzung ordnet Aufwand und Ertrag dem wirtschaftlich passenden Zeitraum zu.',
    'Bei bilanzierenden Unternehmen ist der Zahlungszeitpunkt nicht allein entscheidend.',
    'RAPs erfassen Vorauszahlungen oder Vorauszahlungen von Kunden für spätere Zeiträume.',
    'Forderungen und Verbindlichkeiten betreffen Leistungen, bei denen die Zahlung noch aussteht.',
    'Rückstellungen bilden bestimmte ungewisse Verpflichtungen oder drohende Verluste ab.',
    'Die EÜR folgt grundsätzlich dem Zufluss- und Abflussprinzip und unterscheidet sich damit von der Bilanzierung.',
  ],
  commonMistakes: [
    'Zahlung und wirtschaftliche Zugehörigkeit gleichsetzen',
    'Rechnungsabgrenzungsposten mit Forderungen oder Verbindlichkeiten verwechseln',
    'Rückstellungen für bereits bekannte, eindeutig bezifferte Verbindlichkeiten verwenden',
    'den abgegrenzten Betrag im Folgejahr nicht der richtigen Periode zuordnen',
    'die Logik der Bilanzierung ohne Prüfung auf die EÜR übertragen',
  ],
  faqs: [
    {
      question: 'Was bedeutet Periodenabgrenzung einfach erklärt?',
      answer: 'Sie sorgt dafür, dass Aufwand und Ertrag in dem Zeitraum erscheinen, in dem sie wirtschaftlich entstehen oder verursacht werden – unabhängig davon, wann Geld fließt.',
    },
    {
      question: 'Ist Rechnungsabgrenzung dasselbe wie Periodenabgrenzung?',
      answer: 'Nein. Rechnungsabgrenzung ist ein wichtiges Instrument der übergeordneten Periodenabgrenzung, wenn Geld bereits geflossen ist, Aufwand oder Ertrag aber einen späteren Zeitraum betrifft.',
    },
    {
      question: 'Wann entsteht statt eines RAP eine Forderung oder Verbindlichkeit?',
      answer: 'Typischerweise dann, wenn die Leistung wirtschaftlich bereits erbracht oder bezogen wurde, die Zahlung aber noch aussteht. Bei einem RAP ist Geld dagegen bereits geflossen.',
    },
    {
      question: 'Warum sind Rückstellungen ein Abgrenzungsfall?',
      answer: 'Sie berücksichtigen unter gesetzlichen Voraussetzungen Verpflichtungen oder drohende Verluste, deren Höhe oder Zeitpunkt noch ungewiss ist, aber wirtschaftlich dem abgelaufenen Jahr zugeordnet werden können.',
    },
    {
      question: 'Gilt Periodenabgrenzung auch bei der EÜR?',
      answer: 'Die EÜR folgt grundsätzlich dem Zufluss- und Abflussprinzip. Es gibt gesetzliche Ausnahmen, ihre Grundlogik unterscheidet sich aber von der periodengerechten Bilanzierung.',
    },
  ],
  related: [
    'rechnungsabgrenzung',
    'bilanz',
    'guv',
    'jahresabschluss',
    'euer',
  ],
  sources: [
    { label: '§ 252 HGB – Periodengerechte Berücksichtigung von Aufwand und Ertrag', url: 'https://www.gesetze-im-internet.de/hgb/__252.html' },
    { label: '§ 250 HGB – Rechnungsabgrenzungsposten', url: 'https://www.gesetze-im-internet.de/hgb/__250.html' },
    { label: '§ 249 HGB – Rückstellungen', url: 'https://www.gesetze-im-internet.de/hgb/__249.html' },
    { label: '§ 5 EStG – Steuerliche Bilanzierung und Rechnungsabgrenzung', url: 'https://www.gesetze-im-internet.de/estg/__5.html' },
    { label: '§ 11 EStG – Zufluss und Abfluss', url: 'https://www.gesetze-im-internet.de/estg/__11.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default periodenabgrenzung;
