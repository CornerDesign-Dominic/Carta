import { defaultDisclaimer } from '../shared.js';

const faelligkeit = {
  slug: 'faelligkeit',
  category: 'Mahnwesen',
  title: 'Fälligkeit',
  description: 'Fälligkeit einfach erklärt: Zahlungsziel, Fristberechnung, Mahnung und der Unterschied zum Zahlungsverzug.',
  seo: {
    title: 'Fälligkeit einer Rechnung einfach erklärt | Belege24',
    description: 'Wann eine Rechnung fällig wird, wie Zahlungsziele und Fristen berechnet werden und warum Fälligkeit nicht automatisch Zahlungsverzug bedeutet.',
    canonicalPath: '/wissen/faelligkeit',
  },
  article: {
    intro: 'Die Fälligkeit ist der Zeitpunkt, ab dem eine Zahlung verlangt werden kann. Für Rechnungen ist sie wichtig, weil sie Zahlungsziel, Mahnung und mögliche weitere Schritte zeitlich einordnet. Fälligkeit und Zahlungsverzug sind dabei nicht dasselbe.',
    sections: [
      {
        heading: 'Was bedeutet Fälligkeit?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'faelligkeit', text: 'Fälligkeit' },
            ' legt fest, ab wann der Gläubiger die Zahlung verlangen kann und der Schuldner zahlen muss. Sie kann sich aus einem Vertrag, einer Rechnung, einer Vereinbarung oder den Umständen des Geschäfts ergeben.',
          ],
          'Ist kein Zeitpunkt vereinbart und lässt sich auch sonst keiner bestimmen, kann die Leistung grundsätzlich sofort verlangt werden. Bei Verträgen können jedoch abweichende Regelungen gelten.',
        ],
      },
      {
        heading: 'Wann wird eine Rechnung fällig?',
        paragraphs: [
          'Maßgeblich ist zuerst, was zwischen den Parteien vereinbart wurde. Ein konkretes Fälligkeitsdatum oder ein klar vereinbartes Zahlungsziel gibt vor, bis wann gezahlt werden soll.',
          'Steht auf einer Rechnung „zahlbar sofort“, ist damit in der Regel kein gesondertes Zahlungsziel eingeräumt. Die Forderung kann grundsätzlich sofort fällig sein. Ob im Einzelfall noch weitere Absprachen oder Umstände zu berücksichtigen sind, hängt vom Vertrag ab.',
        ],
      },
      {
        heading: 'Rechnungsdatum, Zahlungsziel und Fälligkeitsdatum',
        paragraphs: [
          'Das Rechnungsdatum zeigt, wann die Rechnung erstellt wurde. Das Zahlungsziel beschreibt den eingeräumten Zeitraum oder nennt einen Zahlungstermin. Das Fälligkeitsdatum ist der Tag, an dem die Zahlung spätestens geschuldet ist.',
          'Beispiel: Rechnungsdatum ist der 3. April, vereinbart sind 14 Tage Zahlungsziel. Je nachdem, woran die Frist nach der Vereinbarung anknüpft, kann der 17. April das Fälligkeitsdatum sein. Entscheidend sind die genaue Formulierung und der vereinbarte Fristbeginn.',
        ],
      },
      {
        heading: 'Was bedeutet „14 Tage netto“?',
        paragraphs: [
          '„14 Tage netto“ bedeutet in der kaufmännischen Praxis regelmäßig, dass der vollständige Rechnungsbetrag ohne Skonto innerhalb von 14 Tagen zu zahlen ist. Es sind damit normalerweise Kalendertage gemeint, nicht Arbeitstage.',
          'Die Formulierung allein legt aber nicht immer eindeutig fest, ob die Frist ab Rechnungsdatum, Zugang der Rechnung oder einem anderen Ereignis läuft. Formuliere deshalb auf Rechnungen besser zusätzlich einen klaren Startpunkt oder ein konkretes Datum.',
        ],
      },
      {
        heading: 'Fristen praktisch berechnen',
        paragraphs: [
          'Bei einer Frist, die durch ein Ereignis wie den Zugang einer Rechnung beginnt, wird der Ereignistag bei der gesetzlichen Fristberechnung grundsätzlich nicht mitgezählt. Eine nach Tagen bestimmte Frist endet mit Ablauf des letzten Tages.',
          'Fällt der letzte Tag auf einen Samstag, Sonntag oder einen am Leistungsort staatlich anerkannten allgemeinen Feiertag, tritt bei einer zu bewirkenden Leistung grundsätzlich der nächste Werktag an seine Stelle. Vertragsregelungen und der konkrete Einzelfall können die Beurteilung beeinflussen.',
        ],
      },
      {
        heading: 'Fälligkeit ist nicht automatisch Zahlungsverzug',
        paragraphs: [
          'Wenn das Fälligkeitsdatum erreicht ist, ist die Forderung zunächst fällig und kann verlangt werden. Ein ',
          [
            'Zahlungsverzug liegt erst vor, wenn zusätzlich die Voraussetzungen des Verzugs erfüllt sind. Häufig tritt er nach einer Mahnung ein, die erst nach Fälligkeit erfolgt. In bestimmten Fällen ist keine Mahnung erforderlich, etwa bei einem nach dem Kalender bestimmten Zahlungstermin.',
          ],
          [
            'Bei Entgeltforderungen kann Verzug spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung eintreten. Gegenüber Verbrauchern gilt diese Folge nur, wenn die Rechnung oder Zahlungsaufstellung besonders darauf hinweist. Auch dann bleiben die Umstände des Einzelfalls relevant.',
          ],
        ],
      },
      {
        heading: 'Was gilt bei Verbrauchern und Unternehmen?',
        paragraphs: [
          'Für Verbraucher ist der Hinweis auf die 30-Tage-Folge besonders wichtig. Ohne diesen Hinweis führt die 30-Tage-Regel allein nicht automatisch zum Verzug. Eine Mahnung kann den Verzug dennoch auslösen, wenn die übrigen Voraussetzungen vorliegen.',
          'Bei Unternehmen gelten ebenfalls Vertrag, Fälligkeit und die gesetzlichen Verzugsregeln. Klare Zahlungsziele und nachweisbare Rechnungszugänge helfen beiden Seiten, den Ablauf nachvollziehbar zu halten.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Nenne ein eindeutiges Zahlungsziel und halte fest, woran die Frist beginnt. Verwechsle das Rechnungsdatum nicht mit der Fälligkeit und behandle eine verspätete Zahlung nicht automatisch als Verzug. Prüfe vor Mahnkosten oder Verzugszinsen immer die Voraussetzungen im konkreten Fall.',
        ],
      },
    ],
  },
  generator: {
    label: 'Fälligkeit berechnen',
    href: '/tools/faelligkeitsrechner',
    text: 'Berechne das Fälligkeitsdatum aus Rechnungsdatum und Zahlungsziel direkt im Fälligkeitsrechner.',
  },
  keyPoints: [
    'Fälligkeit bestimmt, ab wann eine Zahlung verlangt werden kann',
    'ein vereinbartes Zahlungsziel oder Datum geht der allgemeinen Regel vor',
    '„zahlbar sofort“ lässt regelmäßig kein zusätzliches Zahlungsziel offen',
    '„14 Tage netto“ meint üblicherweise 14 Kalendertage ohne Skonto',
    'Rechnungsdatum, Zahlungsziel und Fälligkeitsdatum sind unterschiedliche Angaben',
    'eine fällige Rechnung führt nicht automatisch in jedem Fall zu Zahlungsverzug',
    'bei Verbrauchern setzt die 30-Tage-Regel einen besonderen Hinweis voraus',
  ],
  commonMistakes: [
    'Rechnungsdatum und Fälligkeitsdatum gleichsetzen',
    'keinen klaren Fristbeginn oder Zahlungstermin nennen',
    'Arbeitstage statt Kalendertage annehmen',
    'Wochenenden oder gesetzliche Feiertage bei der Frist nicht prüfen',
    'Fälligkeit automatisch mit Zahlungsverzug verwechseln',
    'bei Verbrauchern den Hinweis auf die 30-Tage-Folge vergessen',
  ],
  faqs: [
    {
      question: 'Wann ist eine Rechnung fällig?',
      answer: 'Maßgeblich ist zuerst der vereinbarte Zahlungstermin oder das Zahlungsziel. Fehlt eine Bestimmung, kann die Zahlung grundsätzlich sofort verlangt werden.',
    },
    {
      question: 'Was bedeutet „zahlbar sofort“?',
      answer: 'Die Formulierung bedeutet meist, dass kein zusätzliches Zahlungsziel eingeräumt wird. Die Forderung kann dann grundsätzlich sofort fällig sein; Absprachen im Vertrag können etwas anderes ergeben.',
    },
    {
      question: 'Was bedeutet „14 Tage netto“?',
      answer: 'Der volle Betrag ist in der Regel innerhalb von 14 Kalendertagen ohne Skonto zu zahlen. Für die genaue Berechnung sollte klar sein, ab welchem Ereignis die Frist läuft.',
    },
    {
      question: 'Ist eine fällige Rechnung automatisch im Verzug?',
      answer: 'Nein. Fälligkeit ist eine Voraussetzung, aber Verzug tritt erst unter weiteren gesetzlichen Voraussetzungen ein. Häufig ist dafür eine Mahnung erforderlich; es gibt jedoch Ausnahmen.',
    },
    {
      question: 'Zählt bei einer 14-Tage-Frist der Rechnungstag mit?',
      answer: 'Beginnt die Frist mit einem Ereignis oder Zeitpunkt im Tagesverlauf, wird dieser Tag bei der gesetzlichen Berechnung grundsätzlich nicht mitgezählt. Die konkrete Vereinbarung kann aber einen anderen Fristbeginn bestimmen.',
    },
    {
      question: 'Was passiert, wenn die Frist an einem Wochenende endet?',
      answer: 'Fällt der letzte Tag auf Samstag, Sonntag oder einen am Leistungsort staatlich anerkannten allgemeinen Feiertag, tritt bei einer zu bewirkenden Leistung grundsätzlich der nächste Werktag an seine Stelle.',
    },
  ],
  related: [
    'rechnung',
    'mahnverfahren',
  ],
  sources: [
    {
      label: '§ 271 BGB – Leistungszeit',
      url: 'https://www.gesetze-im-internet.de/bgb/__271.html',
    },
    {
      label: '§ 286 BGB – Verzug des Schuldners',
      url: 'https://www.gesetze-im-internet.de/bgb/__286.html',
    },
    {
      label: '§ 187 BGB – Fristbeginn',
      url: 'https://www.gesetze-im-internet.de/bgb/__187.html',
    },
    {
      label: '§ 188 BGB – Fristende',
      url: 'https://www.gesetze-im-internet.de/bgb/__188.html',
    },
    {
      label: '§ 193 BGB – Sonn- und Feiertag; Sonnabend',
      url: 'https://www.gesetze-im-internet.de/bgb/__193.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default faelligkeit;
