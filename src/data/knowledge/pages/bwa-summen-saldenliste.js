import { defaultDisclaimer } from '../shared.js';

const bwaSummenSaldenliste = {
  slug: 'bwa-summen-saldenliste',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'BWA & Summen- und Saldenliste',
  description: 'BWA und Summen- und Saldenliste einfach erklärt: Unterschiede, Inhalte, Nutzen und Zusammenhang mit der laufenden Buchhaltung.',
  seo: {
    title: 'BWA & Summen- und Saldenliste einfach erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen BWA und SuSa, welche Daten beide Auswertungen zeigen und warum eine saubere Buchhaltung dafür entscheidend ist.',
    canonicalPath: '/wissen/bwa-summen-saldenliste',
  },
  article: {
    intro: 'Eine BWA und eine Summen- und Saldenliste machen Daten aus der laufenden Buchhaltung nutzbar. Die BWA verdichtet sie zu einem Überblick über die wirtschaftliche Entwicklung, die SuSa zeigt die einzelnen Konten mit ihren Bewegungen.',
    sections: [
      {
        heading: 'Was ist eine BWA?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'bwa', text: 'betriebswirtschaftliche Auswertung (BWA)' },
            ' fasst Daten aus der laufenden Buchhaltung für einen bestimmten Zeitraum zusammen – häufig für einen Monat. Sie hilft dir, Umsätze, Kosten und ein vorläufiges Ergebnis schneller einzuordnen.',
          ],
          'Typische Bereiche einer BWA sind Umsatzerlöse, Material- oder Wareneinsatz, Personal- und sonstige Kosten sowie das daraus errechnete Ergebnis. Welche Zeilen genau erscheinen, hängt unter anderem vom Kontenplan und der verwendeten Auswertungsform ab.',
          'Eine BWA ist eine betriebswirtschaftliche Momentaufnahme. Sie kann Entscheidungen unterstützen, etwa bei der Frage, ob Kosten im Verhältnis zu den Umsätzen steigen. Sie ersetzt aber weder die Kontrolle einzelner Buchungen noch einen Jahresabschluss.',
        ],
      },
      {
        heading: 'Warum eine BWA kein Jahresabschluss ist',
        paragraphs: [
          'Die BWA baut auf dem Buchungsstand zum Auswertungszeitpunkt auf. Offene oder noch nicht erfasste Belege, fehlende Abgrenzungen, Inventurwerte, Abschreibungen oder Abschlussbuchungen können das Bild verändern.',
          'Auch ein positiver Monatswert ist deshalb nicht automatisch der endgültige Gewinn des Geschäftsjahrs und nicht gleichbedeutend mit dem Bankguthaben. Für den verbindlichen Abschluss eines bilanzierenden Unternehmens sind Bilanz und GuV maßgeblich.',
        ],
      },
      {
        heading: 'Was ist eine Summen- und Saldenliste?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'summen-und-saldenliste', text: 'Summen- und Saldenliste (SuSa)' },
            ' ist die detaillierte Kontenübersicht für einen Zeitraum. Sie führt die verwendeten Konten einzeln auf, statt sie wie die BWA zu größeren Ergebnispositionen zusammenzufassen.',
          ],
          [
            'Zu einem Konto zeigt sie üblicherweise den Anfangssaldo, die ',
            { type: 'glossary', id: 'soll', text: 'Soll-' },
            ' und Habenumsätze sowie den Endsaldo. Der ',
            { type: 'glossary', id: 'saldo', text: 'Saldo' },
            ' macht sichtbar, welcher Wert nach den erfassten Bewegungen auf dem Konto steht.',
          ],
          'Die SuSa ist besonders hilfreich, wenn ein Wert aus der BWA geprüft werden soll: Sie zeigt, auf welchen Konten die zugrunde liegenden Buchungen gelandet sind. Sie ist jedoch keine Ersatzdarstellung für jeden einzelnen Beleg oder Buchungssatz.',
        ],
        formulaCards: [
          {
            title: 'BWA vs. Summen- und Saldenliste',
            formula: 'BWA = verdichtete Ergebnissicht\nSuSa = detaillierte Kontenübersicht',
            description: 'Beide Auswertungen stammen aus derselben laufenden Buchhaltung. Die BWA fasst zusammen, die SuSa macht die Kontenbewegungen sichtbar.',
          },
        ],
      },
      {
        heading: 'Ein Buchhaltungsmonat in zwei Auswertungen',
        paragraphs: [
          'Das Beispiel ist stark vereinfacht und lässt Umsatzsteuer, offene Posten und weitere Konten außer Betracht. Es zeigt, wie beide Auswertungen dieselben Buchungsdaten unterschiedlich darstellen.',
        ],
        exampleCards: [
          {
            title: 'BWA: Überblick über den Monat',
            paragraphs: [
              'Im April stehen 20.000 Euro Umsatzerlösen 7.000 Euro Materialaufwand, 2.000 Euro Miete, 5.000 Euro Löhne und 2.500 Euro sonstige Aufwendungen gegenüber.',
              'Die BWA fasst diese Werte zusammen: 20.000 Euro Erträge minus 16.500 Euro Aufwendungen ergeben ein vorläufiges Ergebnis von 3.500 Euro.',
              'Du erkennst auf einen Blick, dass der Monat nach diesem Buchungsstand positiv war. Welche einzelnen Konten oder Belege zu den 2.500 Euro sonstigen Aufwendungen gehören, zeigt die BWA in der Regel nicht vollständig.',
            ],
            effects: [
              'Umsätze: 20.000 Euro.',
              'Aufwendungen: 16.500 Euro.',
              'Vorläufiges Ergebnis: 3.500 Euro.',
            ],
          },
          {
            title: 'SuSa: Blick in die Konten',
            paragraphs: [
              'Die SuSa weist zum Beispiel das Konto Umsatzerlöse mit 20.000 Euro Habenumsatz und das Konto Materialaufwand mit 7.000 Euro Sollumsatz aus. Miete, Löhne und sonstige Aufwendungen erscheinen ebenfalls als eigene Konten mit ihren jeweiligen Bewegungen.',
              'Beim Bankkonto können zusätzlich Anfangssaldo, alle Soll- und Habenumsätze sowie der Endsaldo stehen. So lässt sich nachvollziehen, aus welchen Konten die für die BWA zusammengefassten Werte stammen.',
              'Die SuSa liefert damit mehr Kontendetail. Ob eine Buchung sachlich richtig ist, prüfst du bei Bedarf weiter anhand des Buchungssatzes und des zugehörigen Belegs.',
            ],
            effects: [
              'Kontenebene: Jede Kontoart wird einzeln dargestellt.',
              'Prüfung: Auffällige Werte aus der BWA lassen sich bis zum betroffenen Konto zurückverfolgen.',
            ],
          },
        ],
      },
      {
        heading: 'Wofür BWA und SuSa genutzt werden',
        paragraphs: [
          'Unternehmerinnen und Unternehmer nutzen die BWA häufig, um die aktuelle Entwicklung zu beobachten und Gespräche über Preise, Kosten oder Liquidität vorzubereiten. Buchhaltung und Steuerberatung nutzen sie als Auswertungs- und Plausibilitätsgrundlage. Banken können je nach Anlass aktuelle betriebswirtschaftliche Unterlagen anfragen; welche Unterlagen in einem Einzelfall benötigt werden, entscheiden sie selbst.',
          'Die SuSa unterstützt vor allem die laufende Kontrolle. Sie kann helfen, ungewöhnliche Salden, fehlende Gegenbuchungen oder unerwartete Bewegungen auf einem Konto zu erkennen. Zusammen ergänzen sich beide Auswertungen: Die BWA beantwortet zuerst „Wie entwickelt sich der Betrieb?“, die SuSa eher „Auf welchen Konten stehen die Werte?“.',
        ],
      },
      {
        heading: 'Die Qualität hängt von der laufenden Buchhaltung ab',
        paragraphs: [
          'Eine BWA und eine SuSa sind nur so aussagekräftig wie die Daten, aus denen sie entstehen. Fehlen Eingangsrechnungen, sind Umsätze falsch zugeordnet oder werden Buchungen erst spät erfasst, können Kosten, Ergebnisse und Salden verzerrt erscheinen.',
          'Ordne Belege zeitnah zu, stimme wichtige Konten regelmäßig ab und kläre auffällige Werte, bevor daraus weitreichende Entscheidungen entstehen. Besonders bei Wachstum, größeren Investitionen oder auffälligen Ergebnissen ist es sinnvoll, die Auswertung gemeinsam mit der Buchhaltung oder Steuerberatung einzuordnen.',
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Eine BWA ist kein endgültiger Jahresabschluss. Ihr Ergebnis kann sich durch spätere Buchungen und Abschlussarbeiten noch verändern.',
          'Eine SuSa ist nicht dasselbe wie eine Liste aller Belege. Sie zeigt Summen und Salden je Konto; für einzelne Vorgänge brauchst du bei Bedarf die zugrunde liegenden Buchungen und Belege.',
          'Ein positiver Wert in der BWA bedeutet nicht automatisch, dass ausreichend Geld auf dem Bankkonto liegt. Forderungen, Verbindlichkeiten, Tilgungen oder Investitionen können Ergebnis und Liquidität auseinanderlaufen lassen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'die BWA verdichtet laufende Buchhaltungsdaten zu Umsätzen, Kosten und einem vorläufigen Ergebnis',
    'sie ist eine laufende Auswertung und kein Ersatz für den Jahresabschluss',
    'die SuSa zeigt Anfangssalden, Soll- und Habenumsätze sowie Endsalden je Konto',
    'BWA und SuSa beruhen auf denselben Buchhaltungsdaten, beantworten aber unterschiedliche Fragen',
    'fehlerhafte, fehlende oder verspätete Buchungen können beide Auswertungen verfälschen',
  ],
  commonMistakes: [
    'das vorläufige BWA-Ergebnis mit dem endgültigen Jahresgewinn gleichsetzen',
    'BWA und Bankguthaben verwechseln',
    'die SuSa als vollständige Belegliste verstehen',
    'ungewöhnliche Salden übernehmen, ohne die betroffenen Konten zu prüfen',
    'Auswertungen auf Basis unvollständiger oder verspätet erfasster Belege interpretieren',
  ],
  faqs: [
    {
      question: 'Was zeigt eine BWA?',
      answer: 'Eine BWA zeigt die Entwicklung von Umsätzen, Kosten und einem vorläufigen Ergebnis für einen Zeitraum, häufig für einen Monat.',
    },
    {
      question: 'Ist eine BWA ein Jahresabschluss?',
      answer: 'Nein. Sie ist eine laufende Auswertung auf Basis des aktuellen Buchungsstands. Abschlussbuchungen und weitere Arbeiten können das Jahresergebnis noch verändern.',
    },
    {
      question: 'Was steht in einer Summen- und Saldenliste?',
      answer: 'Sie zeigt je Konto in der Regel Anfangssaldo, Soll- und Habenumsätze sowie Endsaldo und macht damit die Kontenbewegungen eines Zeitraums sichtbar.',
    },
    {
      question: 'Warum brauche ich BWA und SuSa?',
      answer: 'Die BWA liefert einen kompakten Überblick über die wirtschaftliche Entwicklung. Die SuSa hilft, auffällige oder relevante Werte auf den einzelnen Konten nachzuvollziehen.',
    },
    {
      question: 'Warum kann die BWA vom späteren Jahresergebnis abweichen?',
      answer: 'Zum Beispiel weil Belege noch fehlen, Buchungen korrigiert werden oder zum Jahresende Abschlussarbeiten wie Abschreibungen und Abgrenzungen hinzukommen.',
    },
  ],
  related: [
    'guv',
    'konten',
    'jahresabschluss',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bwaSummenSaldenliste;
