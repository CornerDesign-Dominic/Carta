import { defaultDisclaimer } from '../shared.js';

const grundlagenLogistik = {
  slug: 'grundlagen-logistik',
  category: 'Supply Chain & Logistik',
  title: 'Grundlagen der Logistik',
  description: 'Grundlagen der Logistik einfach erklärt: Waren, Materialien und Informationen so steuern, dass Bedarf, Zeit, Kosten und Service zusammenpassen.',
  seo: {
    title: 'Grundlagen der Logistik einfach erklärt | Belege24',
    description: 'Erfahre, was Logistik umfasst, wie Material-, Waren- und Informationsfluss zusammenhängen und welche Logistikbereiche Unternehmen verbinden.',
    canonicalPath: '/wissen/grundlagen-logistik',
  },
  article: {
    intro: 'Logistik plant, steuert und bewegt Materialien, Waren und zugehörige Informationen. Ihr Ziel ist, die benötigte Ware in passender Menge, Qualität, Zeit und am richtigen Ort bereitzustellen — mit einem Aufwand, der zum erwarteten Service passt.',
    sections: [
      {
        heading: 'Was ist Logistik?',
        paragraphs: [
          [
            { type: 'glossary', id: 'logistik', text: 'Logistik' },
            ' verbindet viele praktische Aufgaben: Bedarf erkennen, beschaffen, lagern, transportieren, bereitstellen und Informationen dazu austauschen. Sie beginnt nicht erst beim Transport. Auch Planung, Bestände, Übergaben und Rückläufe können dazugehören.',
          ],
          'Häufig wird die Logistik mit den Fragen beschrieben: Ist die richtige Ware in der richtigen Menge, am richtigen Ort, zur richtigen Zeit, in der richtigen Qualität und zu angemessenen Kosten verfügbar? Diese Ziele müssen zusammen betrachtet werden; nicht jede Anforderung lässt sich gleichzeitig maximal erfüllen.',
        ],
      },
      {
        heading: 'Material-, Waren- und Informationsfluss',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'materialfluss', text: 'Materialfluss' },
            ' beschreibt die Bewegung und Umformung von Materialien, etwa vom Wareneingang in die Produktion. Der ',
            { type: 'glossary', id: 'warenfluss', text: 'Warenfluss' },
            ' betrachtet Waren auf ihrem Weg durch Lager, Umschlag und Auslieferung. Die Begriffe werden im Alltag teils überlappend verwendet; wichtig ist, den betrachteten Prozess klar zu benennen.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'informationsfluss', text: 'Informationsfluss' },
            ' liefert die Grundlage für die Steuerung: Bestellungen, Bestände, Liefertermine, Aufträge und Rückmeldungen zeigen, was wann benötigt oder bewegt wird. Ohne verlässliche Informationen können Waren zwar vorhanden sein, aber zu spät, in falscher Menge oder am falschen Ort bereitstehen.',
          ],
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Logistikprozess im Überblick',
            formula: 'Lieferant → Beschaffung → Produktion/Lager → Distribution → Kunde',
            description: 'Informationen zu Bedarf, Bestand, Terminen und Qualität begleiten diesen Prozess. Je nach Geschäftsmodell entfallen einzelne Schritte oder werden anders angeordnet.',
          },
        ],
      },
      {
        heading: 'Wichtige Bereiche der Logistik',
        paragraphs: [
          [
            'Die Beschaffungslogistik sorgt dafür, dass Materialien, Waren oder Leistungen vom Lieferanten bis zum eigenen Unternehmen verfügbar werden. Die Grundlagen der ',
            { type: 'link', href: '/wissen/beschaffung', text: 'Beschaffung' },
            ' ordnen den Weg vom Bedarf bis zum Wareneingang ein.',
          ],
          'Produktionslogistik versorgt die Fertigung mit Material und führt Zwischenprodukte durch die einzelnen Schritte. Lagerlogistik organisiert Einlagerung, Bestandsführung, Kommissionierung und Bereitstellung. Beide Bereiche sollen Material verfügbar halten, ohne unnötige Wege oder überhöhte Bestände zu erzeugen.',
          'Distributionslogistik bringt fertige Waren zum Kunden oder in ein Vertriebsnetz. Transportlogistik plant und steuert die Beförderung zwischen Standorten, Lieferanten, Lagern und Empfängern. Wiederkehrende Touren und Umschlagkonzepte können dabei Prozesse bündeln oder beschleunigen.',
          'Entsorgungslogistik organisiert Rückläufe, Verpackungen, Reststoffe oder Produkte am Ende ihres Nutzungswegs. Welche Aufgaben dazugehören, richtet sich nach Produkt, Branche und Prozess.',
        ],
      },
      {
        heading: 'Logistik und Supply Chain Management',
        paragraphs: [
          [
            'Logistik richtet den Blick vor allem auf die Planung und Bewegung von Gütern sowie Informationen. ',
            { type: 'glossary', id: 'supply-chain-management', text: 'Supply Chain Management' },
            ' betrachtet zusätzlich die Abstimmung über mehrere Unternehmen und Stufen hinweg, etwa Lieferanten, Hersteller, Handel und Kunden.',
          ],
          'Die Grenzen sind in der Praxis nicht immer scharf. Entscheidend ist, ob ein Prozess nur innerhalb eines Unternehmens oder entlang einer ganzen Lieferkette verbessert werden soll. Gemeinsame Daten, abgestimmte Termine und klare Übergaben können beide Perspektiven verbinden.',
        ],
      },
      {
        heading: 'Kosten, Bestand und Service abwägen',
        paragraphs: [
          'Niedrige Bestände und gebündelte Transporte können Kosten und Kapitalbindung senken. Gleichzeitig kann eine sehr schlanke Struktur die Lieferbereitschaft verringern, wenn Nachfrage steigt oder Lieferungen verspätet eintreffen.',
          'Hohe Bestände und kurze Reaktionszeiten können den Service stabilisieren, verursachen aber Lagerfläche, Kapitalbindung und gegebenenfalls Veralterungsrisiken. Die passende Lösung hängt von Produkt, Lieferzeit, Nachfrage, Kundenerwartung und den Folgen einer Fehlmenge ab.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Ersatzteile zwischen Kosten und Verfügbarkeit',
            paragraphs: [
              'Ein Betrieb lagert ein häufig benötigtes Ersatzteil selbst. Ein höherer Vorrat erhöht die Chance, Kunden sofort bedienen zu können, bindet aber Kapital und Lagerfläche. Eine Bestellung erst bei Bedarf spart Bestand, kann bei einer langen Lieferzeit jedoch zu Wartezeiten führen.',
              'Die Logistikentscheidung betrachtet deshalb nicht nur den Einkaufspreis. Sie verbindet Lieferzeit, erwarteten Verbrauch, mögliche Folgen einer Fehlmenge und die Kosten des Bestands.',
            ],
            effects: [
              'Mehr Bestand: höhere Verfügbarkeit, aber höhere Kapitalbindung und Lageraufwand.',
              'Weniger Bestand: geringere Lagerkosten, aber höheres Risiko von Wartezeit oder Fehlmenge.',
            ],
          },
        ],
      },
      {
        heading: 'Kennzahlen nur im Zusammenhang lesen',
        paragraphs: [
          'Kennzahlen können helfen, Abläufe sichtbar zu machen. Beispiele sind Liefertermintreue, Durchlaufzeit, Lagerumschlag, Lagerreichweite oder Fehlmengen. Sie zeigen jeweils nur einen Teil des Prozesses und benötigen klare, gleichbleibende Definitionen.',
          [
            'Die ',
            { type: 'link', href: '/wissen/liefertermintreue-servicegrad', text: 'Liefertermintreue & Servicegrad' },
            ' erklärt Termine, Vollständigkeit und Servicelevel für Lieferprozesse. Der Hub ',
            { type: 'link', href: '/wissen/kennzahlen', text: 'Kennzahlen & Unternehmensanalyse' },
            ' ordnet Kennzahlen allgemein ein.',
          ],
        ],
      },
      {
        heading: 'Weiterführende Logistikthemen',
        paragraphs: [
          [
            'Die Seite ordnet die Grundlagen ein, ohne einzelne Konzepte vorwegzunehmen. ',
            { type: 'link', href: '/wissen/cross-docking', text: 'Cross-Docking' },
            ' beschreibt zum Beispiel einen Umschlag mit sehr kurzer Einlagerung. Das ',
            { type: 'link', href: '/wissen/milk-run', text: 'Milk-Run-Konzept' },
            ' erklärt wiederkehrende gebündelte Transportrouten.',
          ],
          'Weitere Bereiche wie Beschaffungs-, Produktions-, Lager-, Distributions-, Transport- und Entsorgungslogistik werden jeweils erst dann vertieft, wenn dafür eigene Wissensseiten vorhanden sind.',
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Logistik ist nicht nur Transport. Planung, Bestand, Lager, Information und Übergaben entscheiden ebenso über Lieferfähigkeit und Kosten.',
          'Auch niedrige Kosten sind nicht automatisch ein gutes Ergebnis, wenn Termine, Qualität oder Verfügbarkeit darunter leiden. Umgekehrt sind hohe Bestände kein pauschales Qualitätsmerkmal, sondern eine bewusste Abwägung mit Kapitalbindung und Risiko.',
          'Einzelne Kennzahlen ersetzen keine Prozessanalyse. Erst der Blick auf Ursache, Zeitverlauf und Zusammenhänge zeigt, welche Maßnahme tatsächlich helfen kann.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Logistik plant und steuert die Bereitstellung von Materialien, Waren und Informationen.',
    'Ziele sind passende Ware, Menge, Ort, Zeit, Qualität und Kosten; sie stehen oft in einem Zielkonflikt.',
    'Material-, Waren- und Informationsfluss müssen zusammenpassen, damit Prozesse verlässlich funktionieren.',
    'Beschaffungs-, Produktions-, Lager-, Distributions-, Transport- und Entsorgungslogistik betrachten unterschiedliche Abschnitte des Gesamtprozesses.',
    'Supply Chain Management erweitert den Blick über das eigene Unternehmen auf die Abstimmung mit weiteren Stufen der Lieferkette.',
    'Kennzahlen helfen bei der Steuerung, müssen aber klar definiert und im Prozesszusammenhang gelesen werden.',
  ],
  commonMistakes: [
    'Logistik nur mit Transport gleichsetzen und Bestand, Information oder Übergaben ausblenden',
    'Kosten senken, ohne die Folgen für Lieferbereitschaft, Qualität oder Durchlaufzeit zu prüfen',
    'hohe Bestände als pauschale Lösung für unzuverlässige Daten oder Prozesse verwenden',
    'Kennzahlen ohne einheitliche Definition oder ohne Blick auf ihre Ursachen vergleichen',
    'Logistikmaßnahmen nur innerhalb eines Bereichs planen, obwohl Lieferanten, Lager und Kunden betroffen sind',
  ],
  faqs: [
    {
      question: 'Was ist Logistik?',
      answer: 'Logistik plant und steuert, wie Materialien, Waren und Informationen beschafft, gelagert, bewegt und bereitgestellt werden.',
    },
    {
      question: 'Was sind Ziele der Logistik?',
      answer: 'Die benötigte Ware soll in passender Menge, Qualität, Zeit und am richtigen Ort verfügbar sein — mit einem Aufwand, der zum erwarteten Service passt.',
    },
    {
      question: 'Was ist der Unterschied zwischen Logistik und Supply Chain Management?',
      answer: 'Logistik betrachtet vor allem Güter- und Informationsbewegungen. Supply Chain Management bezieht zusätzlich die Abstimmung über mehrere Unternehmen und Stufen der Lieferkette ein.',
    },
    {
      question: 'Warum sind Bestände ein logistischer Zielkonflikt?',
      answer: 'Sie können die Verfügbarkeit erhöhen, binden aber Kapital, Fläche und verursachen Lageraufwand. Die passende Höhe hängt von Bedarf, Lieferzeit und Fehlmengenfolgen ab.',
    },
    {
      question: 'Welche Kennzahlen sind in der Logistik wichtig?',
      answer: 'Je nach Prozess sind beispielsweise Liefertermintreue, Durchlaufzeit, Lagerumschlag, Lagerreichweite und Fehlmengen relevant. Die Kennzahlen müssen einheitlich definiert sein.',
    },
  ],
  related: [
    'beschaffung',
    'cross-docking',
    'milk-run',
    'liefertermintreue-servicegrad',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default grundlagenLogistik;
