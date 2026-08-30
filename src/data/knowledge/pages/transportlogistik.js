import { defaultDisclaimer } from '../shared.js';

const transportlogistik = {
  slug: 'transportlogistik',
  category: 'Supply Chain & Logistik',
  title: 'Transportlogistik',
  description: 'Transportlogistik einfach erklärt: Güter zwischen Standorten passend zu Zeit, Kosten, Menge, Entfernung, Qualität und Flexibilität bewegen.',
  seo: {
    title: 'Transportlogistik einfach erklärt | Belege24',
    description: 'Erfahre, wie Transportlogistik Verkehr, Umschlag, Laufzeit, Auslastung und Terminplanung für passende Transportlösungen verbindet.',
    canonicalPath: '/wissen/transportlogistik',
  },
  article: {
    intro: 'Transportlogistik plant und steuert die Bewegung von Gütern zwischen Standorten. Sie wählt und koordiniert Transportwege, Kapazitäten, Umschläge und Termine so, dass Waren passend zu Bedarf, Kosten und Qualitätsanforderung ankommen.',
    sections: [
      {
        heading: 'Was ist Transportlogistik?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'transportlogistik', text: 'Transportlogistik' },
            ' befasst sich mit dem Transport von Waren zwischen Lieferanten, Werken, Lagern, Umschlagpunkten und Kunden. Sie umfasst nicht nur die Fahrt, sondern auch Planung, Abholung, Übergaben, Dokumente, Umschlag und Rückmeldungen zu Termin und Zustand.',
          ],
          'Je nach Lieferkette kann ein Transport als einzelne Direktfahrt erfolgen oder mehrere Stationen und Dienstleister verbinden. Entscheidend ist nicht nur, ob eine Ware ankommt, sondern ob sie in der vereinbarten Menge, Qualität und Zeit tatsächlich verfügbar ist.',
        ],
      },
      {
        heading: 'Vor-, Haupt- und Nachlauf',
        paragraphs: [
          'Der Vorlauf bringt Güter von einem Ausgangspunkt zu einem Haupttransport, etwa vom Lieferanten zum Terminal. Der Hauptlauf deckt den längeren oder zentralen Abschnitt ab. Der Nachlauf führt die Sendung vom letzten Umschlagpunkt zum Empfänger. Nicht jeder Transport hat alle drei Abschnitte; bei einer Direktfahrt können sie zusammenfallen.',
          'Die einzelnen Abschnitte müssen zeitlich und informationstechnisch abgestimmt sein. Eine schnelle Hauptstrecke hilft wenig, wenn Abholung, Umschlag oder Zustellung nicht passend geplant sind.',
        ],
      },
      {
        heading: 'Direktverkehr und gebrochener Verkehr',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'direktverkehr', text: 'Direktverkehr' },
            ' wird eine Sendung ohne planmäßigen Umschlag zwischen Start und Ziel befördert. Das kann Übergaben und Laufzeit verringern, ist aber bei kleinen Mengen oder vielen Zielen nicht immer wirtschaftlich.',
          ],
          [
            'Beim ',
            { type: 'glossary', id: 'gebrochener-verkehr', text: 'gebrochenen Verkehr' },
            ' wechselt eine Sendung an einem oder mehreren Umschlagpunkten Fahrzeug, Verkehrsträger oder Tour. Das ermöglicht Bündelung und größere Netze, erhöht aber Koordination, Umschlagaufwand und mögliche Verzögerungsrisiken.',
          ],
        ],
      },
      {
        heading: 'Kriterien für die passende Transportlösung',
        paragraphs: [
          'Die Auswahl hängt unter anderem von Verkehrsträger, Entfernung, Sendungsgröße, Gewicht, Volumen, Laufzeit, Liefertermin, Empfindlichkeit der Ware, Verfügbarkeit und Kosten ab. Auch Rücklaufmöglichkeiten, Nachhaltigkeitsziele, Sicherheitsanforderungen und Grenzabwicklung können wichtig sein.',
          'Eine Lösung mit niedrigen Frachtkosten kann längere Laufzeiten oder zusätzliche Umschläge verursachen. Eine schnellere, flexiblere Lösung kann höhere Kosten oder geringere Auslastung bedeuten. Die Kriterien müssen deshalb für den konkreten Auftrag gewichtet werden.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Transportlösung nach mehreren Kriterien wählen',
            formula: 'Zeit – Kosten – Menge – Entfernung – Flexibilität',
            description: 'Zusätzlich können Qualität, Umschlagrisiko, Verfügbarkeit, Sicherheit und Terminanforderungen entscheidend sein. Kein Kriterium ist für jede Sendung automatisch wichtiger als die anderen.',
          },
        ],
      },
      {
        heading: 'Auslastung, Umschlag und Transportqualität',
        paragraphs: [
          'Eine gute Auslastung kann Kosten je Einheit senken und unnötige Leerfahrten reduzieren. Sie darf aber nicht dazu führen, dass Waren zu lange warten, Termine verpasst werden oder empfindliche Güter ungeeignet zusammen transportiert werden.',
          'Umschlag ermöglicht, Sendungen zu bündeln, zu sortieren oder auf andere Verkehrsträger zu verteilen. Jede zusätzliche Übergabe kann jedoch Zeit, Kosten und Risiko für Beschädigung oder Informationsverlust erhöhen. Transportqualität umfasst daher auch korrekte Kennzeichnung, sichere Handhabung, Temperatur- oder Zustandsanforderungen und nachvollziehbare Übergaben.',
        ],
      },
      {
        heading: 'Terminplanung und Zusammenarbeit',
        paragraphs: [
          'Terminplanung verbindet Abholzeit, Kapazität, Tour, Umschlagfenster und Zustellung. Änderungen müssen früh sichtbar werden, damit Lager, Produktion oder Kunden auf eine Verzögerung reagieren können.',
          [
            'Wiederkehrende gebündelte Fahrten beschreibt das ',
            { type: 'link', href: '/wissen/milk-run', text: 'Milk-Run-Konzept' },
            '. Transportlogistik ist außerdem eine wichtige Schnittstelle der ',
            { type: 'link', href: '/wissen/beschaffungslogistik', text: 'Beschaffungslogistik' },
            ' und der ',
            { type: 'link', href: '/wissen/distributionslogistik', text: 'Distributionslogistik' },
            '.',
          ],
        ],
        exampleCards: [
          {
            title: 'Beispiel: Direkte Eilsendung oder gebündelte Tour',
            paragraphs: [
              'Ein Ersatzteil wird kurzfristig für einen Kunden benötigt. Eine direkte Fahrt erreicht den Kunden schnell, kostet aber mehr und nutzt die Fahrzeugkapazität nur teilweise. Eine gebündelte Tour wäre günstiger, erreicht den Kunden jedoch erst am Folgetag.',
              'Die Entscheidung richtet sich nach der zugesagten Lieferzeit und den Folgen eines Verzugs. Ist ein Produktionsstillstand beim Kunden möglich, kann die schnelle Lösung trotz höherer Kosten angemessen sein. Bei nicht zeitkritischer Ware kann die Bündelung wirtschaftlicher sein.',
            ],
            effects: [
              'Direktverkehr: kurze Laufzeit und hohe Flexibilität, häufig höhere Kosten je Sendung.',
              'Gebündelte Tour: bessere Auslastung möglich, aber mehr Abstimmung und gegebenenfalls längere Laufzeit.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, nur den günstigsten Frachtpreis zu vergleichen. Laufzeit, Umschlag, Terminrisiko, Qualität und Folgekosten einer Verzögerung gehören ebenfalls zur Entscheidung.',
          'Auch eine hohe Auslastung ist nicht automatisch gut, wenn sie Wartezeiten, ungeeignete Ladungskombinationen oder verpasste Zeitfenster erzeugt.',
          'Unklare Übergaben und fehlende Rückmeldungen können dazu führen, dass Lager, Produktion oder Kunden mit falschen Terminen planen. Transportdaten und Verantwortlichkeiten sollten deshalb eindeutig sein.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Transportlogistik plant und steuert den Gütertransport zwischen Standorten.',
    'Vor-, Haupt- und Nachlauf bilden mögliche Abschnitte eines Transports; bei Direktfahrten können sie zusammenfallen.',
    'Direktverkehr reduziert Übergaben, gebrochener Verkehr ermöglicht Bündelung und größere Netze.',
    'Zeit, Kosten, Menge, Entfernung und Flexibilität sind zentrale Auswahlkriterien.',
    'Auslastung und Umschlag beeinflussen Kosten, Laufzeit, Qualität und Risiko.',
    'Terminplanung braucht aktuelle Informationen und klare Übergaben zwischen allen Beteiligten.',
  ],
  commonMistakes: [
    'Transportlösungen nur nach Frachtpreis statt auch nach Laufzeit, Umschlag, Terminrisiko und Qualität auswählen',
    'Abholung, Umschlag oder Zustellung bei der Laufzeitplanung ausblenden',
    'hohe Auslastung trotz Wartezeit, ungeeigneter Ladung oder verpasster Zeitfenster priorisieren',
    'gebrochenen Verkehr ohne klare Übergaben und aktuelle Statusinformationen planen',
    'Verspätungen nicht rechtzeitig an Lager, Produktion oder Kunden kommunizieren',
  ],
  faqs: [
    {
      question: 'Was ist Transportlogistik?',
      answer: 'Sie plant und steuert die Bewegung von Gütern zwischen Standorten, einschließlich Abholung, Transport, Umschlag, Zustellung und Terminrückmeldungen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Direktverkehr und gebrochenem Verkehr?',
      answer: 'Direktverkehr befördert eine Sendung ohne planmäßigen Umschlag vom Start zum Ziel. Gebrochener Verkehr nutzt einen oder mehrere Umschlagpunkte und kann Verkehrsträger oder Touren wechseln.',
    },
    {
      question: 'Was bedeutet Hauptlauf?',
      answer: 'Der Hauptlauf ist der zentrale oder längere Transportabschnitt zwischen Vorlauf und Nachlauf. Nicht jeder Transport ist in diese Abschnitte aufgeteilt.',
    },
    {
      question: 'Welche Kriterien sind bei der Transportwahl wichtig?',
      answer: 'Typisch sind Zeit, Kosten, Menge, Entfernung, Flexibilität, Qualität, Umschlagrisiko, Verfügbarkeit und die zugesagte Lieferzeit.',
    },
    {
      question: 'Warum ist Umschlag ein Risiko?',
      answer: 'Jede zusätzliche Übergabe kann Zeit, Kosten sowie das Risiko von Beschädigung, Verzögerung oder Informationsverlust erhöhen.',
    },
  ],
  related: [
    'milk-run',
    'beschaffungslogistik',
    'distributionslogistik',
    'grundlagen-logistik',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default transportlogistik;
