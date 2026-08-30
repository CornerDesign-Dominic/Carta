import { defaultDisclaimer } from '../shared.js';

const sourcingStrategien = {
  slug: 'sourcing-strategien',
  category: 'Supply Chain & Logistik',
  title: 'Sourcing-Strategien',
  description: 'Sourcing-Strategien einfach erklärt: Lieferantenzahl, geografische Ausrichtung und Beschaffungsumfang nach Kosten, Risiko und Versorgungssicherheit wählen.',
  seo: {
    title: 'Sourcing-Strategien einfach erklärt | Belege24',
    description: 'Verstehe Single, Dual, Multiple, Local, Global, Unit, Modular und System Sourcing im Vergleich – mit Chancen, Risiken und Einsatzsituationen.',
    canonicalPath: '/wissen/sourcing-strategien',
  },
  article: {
    intro: 'Sourcing-Strategien bestimmen, von wie vielen Lieferanten, aus welchen Regionen und in welchem Umfang ein Unternehmen Güter oder Leistungen bezieht. Sie beeinflussen Versorgungssicherheit, Kosten, Abhängigkeit und den Aufwand für die Zusammenarbeit.',
    sections: [
      {
        heading: 'Was sind Sourcing-Strategien?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'sourcing-strategie', text: 'Sourcing-Strategie' },
            ' gestaltet Bezugsquellen und Lieferbeziehungen grundsätzlich. Sie beantwortet zum Beispiel, ob ein Unternehmen ein wichtiges Teil von einem oder mehreren Lieferanten bezieht, ob es eher regional oder international einkauft und ob es Einzelteile oder ganze Baugruppen beschafft.',
          ],
          'Sourcing unterscheidet sich von Beschaffungsarten. Einzel-, Vorrats- oder Just-in-Time-Beschaffung regeln vor allem Zeitpunkt und Menge der Bestellung. Sourcing regelt dagegen die Struktur der Bezugsquellen und die Tiefe der Zusammenarbeit.',
          'Keine Strategie ist generell überlegen. Die passende Wahl hängt unter anderem von Produkt, Markt, Lieferfähigkeit, Wechselmöglichkeiten, Volumen, Risiko und eigener Steuerungskapazität ab.',
        ],
      },
      {
        heading: 'Anzahl der Lieferanten: Single, Dual und Multiple Sourcing',
        paragraphs: [
          'Single Sourcing bündelt den Bezug eines Guts oder einer Leistung im Wesentlichen bei einem Lieferanten. Das kann Abstimmung, Qualitätssicherung, Standardisierung und langfristige Zusammenarbeit vereinfachen. Gleichzeitig steigt die direkte Abhängigkeit, wenn der Lieferant oder seine Lieferkette ausfällt.',
          'Dual Sourcing verteilt die Beschaffung auf zwei Lieferanten. Die Strategie kann Alternativen schaffen und den Vergleich von Leistung und Konditionen erleichtern. Sie verlangt aber eine klare Mengenaufteilung, zusätzliche Freigaben und ausreichend Volumen, damit beide Lieferanten die Beziehung wirtschaftlich tragen können.',
          'Multiple Sourcing nutzt mehrere Lieferanten. Das kann Flexibilität und Risikostreuung erhöhen, führt aber meist zu mehr Aufwand bei Auswahl, Kommunikation, Qualitätsprüfung und Steuerung. Mehr Lieferanten bedeuten nicht automatisch unabhängige Lieferketten, wenn sie dieselben Vorlieferanten oder Regionen nutzen.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Lieferantenzahl im Überblick',
            formula: 'Single Sourcing: ein Lieferant\nDual Sourcing: zwei Lieferanten\nMultiple Sourcing: mehrere Lieferanten',
            description: 'Mit steigender Zahl der Bezugsquellen kann die direkte Abhängigkeit sinken, während Koordinations- und Prüfaufwand zunehmen.',
          },
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Standardteil mit hohem Ausfallrisiko',
            paragraphs: [
              'Ein Hersteller benötigt ein standardisiertes Teil in hoher Menge. Ein Lieferausfall würde die Produktion schnell stoppen, und mehrere Anbieter erfüllen grundsätzlich dieselben technischen Anforderungen.',
              'Dual oder Multiple Sourcing kann eine Option sein. Vorher prüft das Unternehmen Freigaben, Kapazitäten, Lieferwege und ob die Anbieter tatsächlich unabhängig voneinander beschaffen und produzieren.',
            ],
            effects: [
              'Chance: geringere direkte Abhängigkeit von einem einzelnen Lieferanten.',
              'Aufwand: mehr Abstimmung, Prüfung und laufende Steuerung.',
            ],
          },
        ],
      },
      {
        heading: 'Geografische Ausrichtung: Local und Global Sourcing',
        paragraphs: [
          'Local Sourcing bezieht Güter oder Leistungen von räumlich nahen beziehungsweise regionalen Lieferanten. Kürzere Wege können direkte Abstimmung, Reaktionszeiten und Transportplanung erleichtern. Ob die Lösung tatsächlich kostengünstiger oder sicherer ist, hängt aber auch von Preis, Kapazität, Qualität und regionaler Verfügbarkeit ab.',
          'Global Sourcing nutzt internationale Bezugsquellen. Es kann Zugang zu besonderen Technologien, Rohstoffen, Kapazitäten oder Konditionen eröffnen. Gleichzeitig können längere Lieferwege, Zoll, Währungsrisiken, Dokumentationsaufwand, geopolitische Veränderungen und komplexere Kommunikation die Planung erschweren.',
          'Die Wahl ist nicht zwingend entweder lokal oder global. Für unterschiedliche Güter können unterschiedliche Regionen sinnvoll sein. Entscheidend ist die gesamte Leistung einschließlich Transport, Beständen, Qualität, Termin und möglicher Störungen.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Local vs. Global Sourcing',
            formula: 'Local: räumliche Nähe und häufig kürzere Wege\nGlobal: internationale Auswahl und mögliche Spezialfähigkeiten',
            description: 'Nähe allein entscheidet nicht über Kosten oder Versorgungssicherheit. Beide Strategien müssen entlang der gesamten Lieferkette bewertet werden.',
          },
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Spezialmaterial aus dem Ausland',
            paragraphs: [
              'Ein Betrieb benötigt ein Material, das regional nicht in der geforderten Qualität verfügbar ist. Ein internationaler Anbieter verfügt über die passende Technologie und Kapazität.',
              'Neben dem Preis bewertet der Betrieb Lieferzeit, Transport, Einfuhrabwicklung, Mindestmengen, Bestandsbedarf und alternative Bezugsquellen. Global Sourcing kann passen, wenn diese Bedingungen langfristig steuerbar sind.',
            ],
            effects: [
              'Chance: Zugang zu einer benötigten Fähigkeit oder Technologie.',
              'Risiko: längere und störanfälligere Lieferwege können zusätzliche Absicherung erfordern.',
            ],
          },
        ],
      },
      {
        heading: 'Beschaffungsumfang: Unit, Modular und System Sourcing',
        paragraphs: [
          'Beim Unit Sourcing werden einzelne Teile, Materialien oder klar abgegrenzte Leistungen beschafft. Das Unternehmen übernimmt einen größeren Teil der Integration, Montage oder Koordination selbst. Diese Strategie kann Flexibilität bei der Kombination von Komponenten schaffen, erhöht aber interne Schnittstellen.',
          'Modular Sourcing bezieht eine zusammengehörende, oft vormontierte Baugruppe. Der Lieferant übernimmt mehr Verantwortung für das Modul, während beim Unternehmen Montage- und Koordinationsaufwand sinken können. Spezifikationen, Qualität und Änderungen an den Schnittstellen müssen trotzdem klar geregelt sein.',
          'System Sourcing geht grundsätzlich weiter: Ein Lieferant liefert ein umfassenderes System oder übernimmt einen größeren Entwicklungs- und Leistungsumfang. Das kann interne Komplexität reduzieren, macht den Abnehmer aber stärker von der Leistungsfähigkeit, dem Know-how und der Zuverlässigkeit dieses Partners abhängig.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Beschaffungsumfang im Überblick',
            formula: 'Unit: Einzelteil oder Einzelleistung\nModular: zusammengehörige Baugruppe\nSystem: umfassender Leistungs- oder Systemumfang',
            description: 'Mit wachsendem Umfang kann die interne Koordination sinken. Gleichzeitig steigen die Anforderungen an Lieferantenfähigkeit, Daten, Schnittstellen und klare Verantwortlichkeiten.',
          },
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Vormontierte technische Baugruppe',
            paragraphs: [
              'Ein Unternehmen benötigt eine komplexe Baugruppe mit vielen Einzelteilen. Bei Unit Sourcing würde es die Komponenten selbst beschaffen und montieren. Mit Modular Sourcing liefert ein Partner die geprüfte, vormontierte Baugruppe.',
              'Das kann die interne Montage vereinfachen. Dafür prüft das Unternehmen besonders genau Spezifikation, Änderungsprozesse, Qualitätsnachweise, Datenzugriff und mögliche Ausweichoptionen.',
            ],
            effects: [
              'Chance: weniger interne Schnittstellen und Montageaufwand.',
              'Risiko: höhere Abhängigkeit von den Fähigkeiten und Prozessen des Modullieferanten.',
            ],
          },
        ],
      },
      {
        heading: 'Strategien abwägen und weiterentwickeln',
        paragraphs: [
          [
            'Der ',
            { type: 'link', href: '/wissen/strategischer-einkauf', text: 'strategische Einkauf' },
            ' bewertet Beschaffungsmärkte, Lieferantenstruktur, Kosten und Risiken und schafft damit den Rahmen für die Auswahl einer Sourcing-Strategie.',
          ],
          [
            'Die zugrunde liegenden ',
            { type: 'link', href: '/wissen/beschaffungsprinzipien', text: 'Beschaffungsprinzipien' },
            ' helfen, die Struktur von Bezugsquellen von Beschaffungszeitpunkt und -menge zu unterscheiden. Wie bestehende Lieferbeziehungen kontinuierlich verbessert werden können, erklärt die ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            '.',
          ],
          'Lieferanten- und Supply-Chain-Risiken müssen bei jeder Strategie gesondert geprüft werden. Sie können sich aus Kapazitäten, Regionen, Vorlieferanten, Transportwegen, Qualität oder Wechselmöglichkeiten ergeben. Eine vermeintliche Streuung ist nur wirksam, wenn die Bezugsquellen tatsächlich nicht an denselben kritischen Stellen zusammenlaufen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Single Sourcing ist nicht automatisch schlecht und Multiple Sourcing nicht automatisch sicher. Entscheidend sind Kritikalität, Leistungsfähigkeit, Wechselkosten, tatsächliche Unabhängigkeit und die Fähigkeit, mehrere Beziehungen zu steuern.',
          'Global Sourcing darf nicht nur über den Einkaufspreis beurteilt werden. Transport, Zölle, Bestände, Kommunikation, Qualität und mögliche Störungen beeinflussen die Gesamtkosten und die Versorgung.',
          'Bei Modular oder System Sourcing sollten Verantwortlichkeiten, Schnittstellen, Daten, Qualitätsanforderungen und Änderungsprozesse nicht offenbleiben. Sonst kann geringere interne Komplexität in neue Abhängigkeiten und Abstimmungsprobleme übergehen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Sourcing-Strategien gestalten Lieferantenzahl, geografische Ausrichtung und Beschaffungsumfang.',
    'Single, Dual und Multiple Sourcing unterscheiden sich nach der Zahl der Lieferanten.',
    'Local und Global Sourcing unterscheiden sich nach der geografischen Ausrichtung der Bezugsquellen.',
    'Unit, Modular und System Sourcing unterscheiden sich nach dem Umfang der bezogenen Leistung.',
    'Kosten, Abhängigkeit, Versorgungssicherheit und Koordinationsaufwand müssen gemeinsam bewertet werden.',
    'Keine Sourcing-Strategie ist generell überlegen; Produkt, Markt, Risiko, Volumen und Versorgungslage entscheiden mit.',
  ],
  commonMistakes: [
    'Single Sourcing pauschal als schlecht oder Multiple Sourcing pauschal als sicher ansehen',
    'mehrere Lieferanten ohne Prüfung gemeinsamer Vorlieferanten, Regionen oder Transportwege als Risikostreuung bewerten',
    'bei Global Sourcing nur den Einkaufspreis statt Gesamtkosten, Bestände und Lieferkettenrisiken betrachten',
    'bei Modular oder System Sourcing Schnittstellen, Verantwortlichkeiten und Datenzugriff offenlassen',
    'eine Sourcing-Struktur trotz veränderter Märkte oder Lieferfähigkeit nicht überprüfen',
  ],
  faqs: [
    {
      question: 'Was sind Sourcing-Strategien?',
      answer: 'Sie bestimmen, von wie vielen Lieferanten, aus welchen Regionen und in welchem Umfang ein Unternehmen Güter oder Leistungen bezieht.',
    },
    {
      question: 'Was ist der Unterschied zwischen Single und Dual Sourcing?',
      answer: 'Bei Single Sourcing stammt ein Gut im Wesentlichen von einem Lieferanten. Dual Sourcing verteilt den Bezug auf zwei Lieferanten.',
    },
    {
      question: 'Ist Local Sourcing immer sicherer als Global Sourcing?',
      answer: 'Nein. Räumliche Nähe kann Wege und Abstimmung erleichtern. Leistungsfähigkeit, Kapazität, Qualität und tatsächliche Abhängigkeiten müssen trotzdem geprüft werden.',
    },
    {
      question: 'Was bedeutet Modular Sourcing?',
      answer: 'Dabei bezieht ein Unternehmen eine zusammengehörende, oft vormontierte Baugruppe statt einzelner Teile. Das kann interne Arbeit senken, erhöht aber die Anforderungen an den Lieferanten und die Schnittstellen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Sourcing und Beschaffungsart?',
      answer: 'Sourcing gestaltet Bezugsquellen und Lieferbeziehungen. Beschaffungsarten regeln vor allem, wann und in welcher Menge ein Unternehmen beschafft.',
    },
  ],
  related: [
    'strategischer-einkauf',
    'beschaffungsprinzipien',
    'lieferantenentwicklung',
    'lieferantenportfolio',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default sourcingStrategien;
