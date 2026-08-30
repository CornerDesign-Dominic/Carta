import { defaultDisclaimer } from '../shared.js';

const sollUndHaben = {
  slug: 'soll-und-haben',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Soll und Haben',
  description: 'Soll und Haben einfach erklärt: Kontoseiten, Buchungssätze sowie Regeln für Aktiv-, Passiv-, Aufwands- und Ertragskonten.',
  seo: {
    title: 'Soll und Haben einfach erklärt | Belege24',
    description: 'Verstehe Soll und Haben, Buchungssätze und die Regeln für Aktiv-, Passiv-, Aufwands- und Ertragskonten mit einfachen Beispielen.',
    canonicalPath: '/wissen/soll-und-haben',
  },
  article: {
    intro: 'Soll und Haben sind die beiden Seiten eines Kontos. Sie helfen dabei, Geschäftsvorfälle nachvollziehbar auf Konten zu verteilen. Ob ein Betrag im Soll oder im Haben steht, richtet sich nach der Kontoart – nicht danach, ob etwas gut oder schlecht ist.',
    sections: [
      {
        heading: 'Was bedeuten Soll und Haben?',
        paragraphs: [
          [
            'In der doppelten Buchführung ist ',
            { type: 'glossary', id: 'soll', text: 'Soll' },
            ' die linke und ',
            { type: 'glossary', id: 'haben', text: 'Haben' },
            ' die rechte Seite eines Kontos. Die Begriffe sind reine Buchungsseiten. Sie bedeuten nicht „schlecht“ und „gut“, auch nicht Auszahlung und Einzahlung.',
          ],
          [
            'Welche Seite verwendet wird, hängt davon ab, welche Art von ',
            { type: 'glossary', id: 'konto', text: 'Konto' },
            ' betroffen ist und ob sein Bestand steigt oder sinkt. Deshalb kann ein Zugang je nach Konto im Soll oder im Haben stehen.',
          ],
          'Die Regel wirkt anfangs abstrakt. Mit den vier Kontoarten und wenigen Beispielen lässt sie sich aber zuverlässig anwenden.',
        ],
      },
      {
        heading: 'Das Grundschema der doppelten Buchführung',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'geschaeftsvorfall', text: 'Geschäftsvorfall' },
            ' hat in der doppelten Buchführung mindestens zwei Seiten. Deshalb betrifft jede Buchung mindestens zwei Konten: Was auf einem Konto im Soll steht, wird auf einem oder mehreren anderen Konten im Haben erfasst.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'buchungssatz', text: 'Buchungssatz' },
            ' nennt zuerst das Sollkonto und danach das Habenkonto. Das Wort „an“ trennt die beiden Seiten.',
          ],
        ],
        formulaCards: [
          {
            title: 'Grundform eines Buchungssatzes',
            formula: 'Soll an Haben',
            description: 'Das Konto vor „an“ wird im Soll gebucht. Das Konto nach „an“ wird im Haben gebucht.',
          },
          {
            title: 'Aktivkonto',
            formula: 'Zugang im Soll · Abgang im Haben',
            description: 'Aktivkonten erfassen Vermögen, zum Beispiel Bank, Kasse, Maschinen oder Forderungen.',
          },
          {
            title: 'Passivkonto',
            formula: 'Zugang im Haben · Abgang im Soll',
            description: 'Passivkonten erfassen Eigenkapital und Schulden, zum Beispiel Darlehen oder Verbindlichkeiten.',
          },
          {
            title: 'Erfolgskonten',
            formula: 'Aufwand im Soll · Ertrag im Haben',
            description: 'Aufwendungen mindern, Erträge erhöhen den Erfolg eines Unternehmens.',
          },
        ],
      },
      {
        heading: 'Die vier Kontoarten verstehen',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'aktivkonto', text: 'Aktivkonto' },
            ' zeigt Vermögenswerte. Sein Anfangsbestand und seine Zugänge stehen im Soll, Abgänge im Haben. Bank, Kasse, Maschine und Forderungen sind typische Aktivkonten.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'passivkonto', text: 'Passivkonto' },
            ' zeigt Eigenkapital oder Schulden. Sein Anfangsbestand und seine Zugänge stehen im Haben, Abgänge im Soll. Darlehen und Verbindlichkeiten sind typische Passivkonten.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'aufwandskonto', text: 'Aufwandskonto' },
            ' sammelt Aufwendungen wie Miete oder Materialverbrauch im Soll. Ein ',
            { type: 'glossary', id: 'ertragskonto', text: 'Ertragskonto' },
            ' sammelt Erträge wie Umsatzerlöse im Haben.',
          ],
          [
            'Aktiv- und Passivkonten werden über die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' abgeschlossen. Aufwands- und Ertragskonten fließen in die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' ein.',
          ],
        ],
      },
      {
        heading: 'Beispiele Schritt für Schritt',
        paragraphs: [
          'Bei jedem Beispiel wird zuerst geprüft, welche Konten betroffen sind. Danach wird die Zu- oder Abnahme nach der passenden Kontoregel im Soll oder Haben eingetragen.',
        ],
        exampleCards: [
          {
            title: 'Bank an Forderungen',
            paragraphs: [
              'Ein Kunde bezahlt eine zuvor geschriebene Rechnung per Überweisung.',
              'Schritt 1: Das Bankguthaben steigt. Bank ist ein Aktivkonto; sein Zugang steht im Soll.',
              'Schritt 2: Die offene Forderung gegen den Kunden sinkt. Forderungen sind Aktivkonten; ihr Abgang steht im Haben.',
              'Schritt 3: Der Buchungssatz lautet deshalb: Bank an Forderungen.',
            ],
            effects: [
              'Vermögen: Bank steigt, Forderungen sinken in gleicher Höhe.',
              'Erfolg: Die Zahlung ist erfolgsneutral, weil der Ertrag bereits beim Verkauf entstanden ist.',
            ],
          },
          {
            title: 'Maschine an Bank',
            paragraphs: [
              'Das Unternehmen kauft eine Maschine und bezahlt sofort per Überweisung.',
              'Schritt 1: Die Maschine nimmt zu. Sie ist ein Aktivkonto; der Zugang steht im Soll.',
              'Schritt 2: Das Bankguthaben nimmt ab. Bank ist ebenfalls ein Aktivkonto; der Abgang steht im Haben.',
              'Schritt 3: Der Buchungssatz lautet deshalb: Maschine an Bank.',
            ],
            effects: [
              'Vermögen: Maschine steigt, Bank sinkt in gleicher Höhe.',
              'Erfolg: Der Kauf ist zunächst erfolgsneutral. Aufwand kann später durch Abschreibung entstehen.',
            ],
          },
          {
            title: 'Miete an Bank',
            paragraphs: [
              'Das Unternehmen überweist die Miete für seine Geschäftsräume.',
              'Schritt 1: Miete ist ein Aufwandskonto. Aufwendungen nehmen im Soll zu.',
              'Schritt 2: Das Bankguthaben nimmt ab. Bank ist ein Aktivkonto; der Abgang steht im Haben.',
              'Schritt 3: Der Buchungssatz lautet deshalb: Miete an Bank.',
            ],
            effects: [
              'Vermögen: Bank sinkt.',
              'Erfolg: Der Mietaufwand mindert den Gewinn.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Denkfehler vermeiden',
        paragraphs: [
          'Soll und Haben sind keine Wertung. Ein Zugang auf dem Bankkonto steht im Soll, eine Darlehensaufnahme dagegen als Zugang auf einem Passivkonto im Haben.',
          'Verwechsle außerdem nicht Kontoart und Kontoname: Bank und Forderungen sind beide Aktivkonten, obwohl sie unterschiedliche wirtschaftliche Sachverhalte darstellen. Entscheidend ist zuerst die Kontoart, dann die Richtung der Veränderung.',
          'Ein Buchungssatz enthält nicht nur zwei Wörter. Er beschreibt die vollständige Zuordnung eines Geschäftsvorfalls zu Soll- und Haben-Seite. Bei komplexeren Vorgängen können auf einer Seite auch mehrere Konten stehen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Soll ist die linke, Haben die rechte Seite eines Kontos',
    'Soll und Haben sind Buchungsseiten und keine Wertung',
    'Aktivkonten: Zugang im Soll, Abgang im Haben',
    'Passivkonten: Zugang im Haben, Abgang im Soll',
    'Aufwand wird im Soll, Ertrag im Haben gebucht',
    'jeder Buchungssatz verbindet mindestens zwei Konten nach dem Schema Soll an Haben',
  ],
  commonMistakes: [
    'Soll mit „schlecht“ und Haben mit „gut“ gleichsetzen',
    'Soll und Haben pauschal als Plus und Minus verstehen',
    'bei einer Buchung nur das betroffene Bank- oder Kassenkonto betrachten',
    'Aktiv- und Passivkonten mit Aufwands- und Ertragskonten verwechseln',
    'eine Zahlung automatisch als Aufwand oder Ertrag behandeln',
    'Buchungssätze nennen, ohne die Kontoveränderungen zu prüfen',
  ],
  faqs: [
    {
      question: 'Was bedeutet Soll an Haben?',
      answer: 'Die Formulierung zeigt die zwei Seiten eines Buchungssatzes: Das Konto vor „an“ wird im Soll gebucht, das Konto danach im Haben.',
    },
    {
      question: 'Warum steht ein Bankzugang im Soll?',
      answer: 'Bank ist ein Aktivkonto. Bei Aktivkonten werden Zugänge im Soll und Abgänge im Haben gebucht.',
    },
    {
      question: 'Warum steht ein Darlehen im Haben?',
      answer: 'Ein Darlehen ist eine Schuld und wird auf einem Passivkonto erfasst. Zugänge auf Passivkonten stehen im Haben.',
    },
    {
      question: 'Ist Soll immer Plus und Haben immer Minus?',
      answer: 'Nein. Bei Aktivkonten bedeutet Soll Zugang und Haben Abgang. Bei Passivkonten ist es genau umgekehrt.',
    },
    {
      question: 'Warum sind bei einer Buchung mindestens zwei Konten beteiligt?',
      answer: 'Ein Geschäftsvorfall verändert mindestens zwei Seiten, etwa Bank und Forderung. Die doppelte Buchführung hält beide Seiten im selben Buchungssatz fest.',
    },
    {
      question: 'Was ist der Unterschied zwischen Aktivkonto und Aufwandskonto?',
      answer: 'Ein Aktivkonto zeigt einen Vermögensbestand wie Bank oder Maschine. Ein Aufwandskonto erfasst Werteverzehr eines Zeitraums, etwa Miete oder Materialverbrauch.',
    },
  ],
  related: [
    'geschaeftsvorfaelle',
    'buchhaltung-rechnungswesen',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default sollUndHaben;
