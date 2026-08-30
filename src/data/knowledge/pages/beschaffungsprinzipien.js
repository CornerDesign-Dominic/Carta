import { defaultDisclaimer } from '../shared.js';

const beschaffungsprinzipien = {
  slug: 'beschaffungsprinzipien',
  category: 'Supply Chain & Logistik',
  title: 'Beschaffungsprinzipien & Sourcing-Strategien',
  description: 'Sourcing-Strategien einfach erklärt: Single, Dual und Multiple Sourcing sowie Local, Global, Unit, Modular und System Sourcing im Vergleich.',
  seo: {
    title: 'Beschaffungsprinzipien & Sourcing-Strategien | Belege24',
    description: 'Verstehe, wie Unternehmen Lieferantenzahl, geografische Bezugsquellen und Beschaffungsumfang nach Kosten, Risiko und Versorgungssicherheit gestalten.',
    canonicalPath: '/wissen/beschaffungsprinzipien',
  },
  article: {
    intro: 'Beschaffungsprinzipien und Sourcing-Strategien legen fest, von wem, aus welcher Region und in welchem Umfang ein Unternehmen Leistungen bezieht. Sie beeinflussen Kosten, Zusammenarbeit, Abhängigkeit und Versorgungssicherheit.',
    sections: [
      {
        heading: 'Was sind Beschaffungsprinzipien?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'beschaffungsprinzip', text: 'Beschaffungsprinzip' },
            ' beschreibt die grundlegende Gestaltung von Bezugsquellen und Lieferbeziehungen. Es kann sich auf die Zahl der Lieferanten, ihre geografische Lage oder den Umfang der bezogenen Leistung beziehen.',
          ],
          'Diese Entscheidungen gehören typischerweise in den strategischen Einkauf. Sie sind von Beschaffungsarten zu unterscheiden: Einzel-, Vorrats- oder Just-in-Time-Beschaffung beschreiben, wann und in welcher Menge beschafft wird; Sourcing beschreibt dagegen die Struktur der Bezugsquellen.',
        ],
      },
      {
        heading: 'Anzahl der Lieferanten: Single, Dual und Multiple Sourcing',
        paragraphs: [
          'Single Sourcing bedeutet, dass ein Gut oder eine Leistung im Wesentlichen von einem Lieferanten bezogen wird. Das kann Abstimmung, Standardisierung und Zusammenarbeit vereinfachen. Gleichzeitig steigt die Abhängigkeit, wenn keine kurzfristige Alternative verfügbar ist.',
          'Dual Sourcing verteilt das Volumen auf zwei Lieferanten. Es kann Versorgungssicherheit und Vergleichbarkeit erhöhen, verlangt aber eine klare Aufteilung, mehr Abstimmung und ausreichend Mengen für beide Partner.',
          'Multiple Sourcing nutzt mehrere Lieferanten. Das kann Risiken streuen und Flexibilität schaffen, erhöht aber den Aufwand für Auswahl, Qualitätssicherung, Kommunikation und Steuerung.',
        ],
        formulaCards: [
          {
            title: 'Lieferantenzahl im Vergleich',
            formula: 'Single Sourcing: ein Lieferant\nDual Sourcing: zwei Lieferanten\nMultiple Sourcing: mehrere Lieferanten',
            description: 'Mehr Lieferanten können Abhängigkeiten verringern, führen aber nicht automatisch zu höherer Versorgungssicherheit oder niedrigeren Kosten.',
          },
        ],
      },
      {
        heading: 'Geografische Ausrichtung: Local und Global Sourcing',
        paragraphs: [
          'Local Sourcing beschafft bei räumlich nahen oder regionalen Lieferanten. Kürzere Wege können Abstimmung, Transportplanung und Reaktionszeit erleichtern. Ob dadurch tatsächlich Kosten oder Risiken sinken, hängt unter anderem von Preis, Kapazität, Qualität und regionaler Verfügbarkeit ab.',
          'Global Sourcing nutzt Lieferanten über Ländergrenzen hinweg. Es kann Zugang zu besonderen Fähigkeiten, Kapazitäten oder Konditionen eröffnen. Gleichzeitig können längere Lieferwege, Zoll, Währungsrisiken, Kommunikationsaufwand und geopolitische oder regulatorische Veränderungen die Planung erschweren.',
        ],
        formulaCards: [
          {
            title: 'Local vs. Global Sourcing',
            formula: 'Local: Nähe, kürzere Wege und direkte Abstimmung\nGlobal: größere Auswahl und internationale Bezugsquellen',
            description: 'Die geografische Nähe allein entscheidet nicht über Kosten oder Risiko. Entscheidend ist die gesamte Lieferkette mit ihren Abhängigkeiten und Fähigkeiten.',
          },
        ],
      },
      {
        heading: 'Beschaffungsumfang: Unit, Modular und System Sourcing',
        paragraphs: [
          'Beim Unit Sourcing werden einzelne Teile, Materialien oder klar abgegrenzte Leistungen bezogen. Das Unternehmen übernimmt selbst einen größeren Teil der Integration, Koordination oder Montage.',
          'Modular Sourcing bedeutet, dass ein Lieferant ein zusammengehörendes Modul liefert, etwa eine vormontierte Baugruppe. Dadurch kann die interne Montage vereinfacht werden; die Abstimmung über Schnittstellen und Spezifikationen bleibt wichtig.',
          'System Sourcing geht weiter: Ein Lieferant übernimmt grundsätzlich ein umfassenderes System oder einen größeren Entwicklungs- und Leistungsumfang. Das kann Komplexität beim Abnehmer senken, erhöht aber die Bedeutung der Lieferantenfähigkeit und der klaren Verantwortungsgrenzen.',
        ],
        formulaCards: [
          {
            title: 'Beschaffungsumfang im Vergleich',
            formula: 'Unit: Einzelteil oder Einzelleistung\nModular: zusammengehörige Baugruppe\nSystem: umfassender Leistungs- oder Systemumfang',
            description: 'Mit wachsendem Umfang kann die Koordination beim Abnehmer sinken, während Abhängigkeit und Anforderungen an Schnittstellen zunehmen können.',
          },
        ],
      },
      {
        heading: 'Chancen, Risiken und geeignete Einsatzsituationen',
        paragraphs: [
          'Ein enger, langfristiger Lieferant kann bei komplexen oder erklärungsbedürftigen Gütern sinnvoll sein, wenn Qualität, Know-how und Zusammenarbeit besonders wichtig sind. Mehrere Quellen können dagegen bei standardisierten, kritischen oder stark schwankenden Gütern helfen, Risiken zu streuen.',
          'Lokale Quellen können bei kurzen Reaktionszeiten oder hoher Abstimmung nützlich sein. Globale Quellen können sinnvoll sein, wenn besondere Fähigkeiten, Materialien oder Kapazitäten anders nicht verfügbar sind. Die Wahl sollte stets zur Bedeutung des Guts, den möglichen Folgen eines Ausfalls und den eigenen Steuerungsfähigkeiten passen.',
          'Keine Strategie beseitigt Risiken vollständig. Mehrere Lieferanten können beispielsweise dieselbe Region, denselben Vorlieferanten oder dieselbe Transportverbindung nutzen. Eine scheinbare Risikostreuung sollte daher geprüft werden.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: kritisches Standardbauteil',
            paragraphs: [
              'Ein Hersteller benötigt ein standardisiertes Bauteil in großer Menge. Ein Ausfall würde die Produktion schnell stoppen, und grundsätzlich stehen mehrere geeignete Anbieter zur Verfügung.',
              'Dual oder Multiple Sourcing kann hier eine Option sein, um nicht von einer einzigen Bezugsquelle abhängig zu sein. Vorher müssen jedoch Qualität, Freigaben, Kapazitäten und die tatsächliche Unabhängigkeit der Lieferketten geprüft werden.',
            ],
            effects: [
              'Chance: geringere direkte Abhängigkeit von einem Lieferanten.',
              'Aufwand: mehr Abstimmung, Freigaben und laufende Steuerung.',
            ],
          },
          {
            title: 'Praxisbeispiel: komplexe vormontierte Baugruppe',
            paragraphs: [
              'Ein Unternehmen bezieht eine technische Baugruppe, deren Einzelteile und Montage sehr spezialisiertes Wissen erfordern.',
              'Modular oder System Sourcing kann die interne Komplexität senken. Dann werden Spezifikation, Qualität, Änderungen, Datenzugriff und Notfalloptionen besonders wichtig, weil der Lieferant eine größere Rolle übernimmt.',
            ],
            effects: [
              'Chance: weniger interne Montage- und Koordinationsaufgaben.',
              'Risiko: höhere Abhängigkeit von Fähigkeiten und Leistungsfähigkeit des Lieferanten.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit strategischem Einkauf und Lieferantenmanagement',
        paragraphs: [
          [
            'Der ',
            { type: 'link', href: '/wissen/strategischer-einkauf', text: 'strategische Einkauf' },
            ' bewertet Beschaffungsmärkte, Lieferantenstruktur, Kosten und Risiken und schafft damit den Rahmen für Sourcing-Strategien.',
          ],
          [
            'Die konkrete Zusammenarbeit mit bestehenden Lieferanten wird auf der Seite ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            ' eingeordnet. Lieferantenmanagement und Supply-Chain-Risiken sind weiterführende Themen, die über die Wahl eines einzelnen Sourcing-Prinzips hinausgehen.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Single Sourcing pauschal als riskant oder Multiple Sourcing pauschal als sicher zu bewerten. Entscheidend sind Kritikalität, Kapazität, tatsächliche Unabhängigkeit, Wechselmöglichkeiten und Steuerungsaufwand.',
          'Auch Global Sourcing ist nicht automatisch günstiger. Neben Preis müssen Transport, Abgaben, Bestände, Qualität, Kommunikationsaufwand und Risiken entlang der Lieferkette betrachtet werden.',
          'Beschaffungsprinzipien sollten regelmäßig überprüft werden. Markt, Nachfrage, Technologie und Lieferfähigkeit können sich ändern und eine bisher passende Struktur unvorteilhaft machen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Beschaffungsprinzipien gestalten Bezugsquellen und Lieferbeziehungen; sie unterscheiden sich von Beschaffungsarten.',
    'Single, Dual und Multiple Sourcing unterscheiden sich nach der Zahl der Lieferanten.',
    'Local und Global Sourcing unterscheiden sich nach der geografischen Ausrichtung.',
    'Unit, Modular und System Sourcing unterscheiden sich nach dem Umfang der bezogenen Leistung.',
    'Kosten, Abhängigkeit, Versorgungssicherheit und Steuerungsaufwand müssen gemeinsam bewertet werden.',
    'Sourcing-Strategien gehören zum strategischen Einkauf und brauchen regelmäßige Überprüfung.',
  ],
  commonMistakes: [
    'Beschaffungsprinzipien mit Beschaffungsarten verwechseln',
    'mehrere Lieferanten ohne Prüfung ihrer tatsächlichen Unabhängigkeit als sichere Risikostreuung ansehen',
    'nur den Einkaufspreis statt Gesamtkosten und Lieferkettenrisiken betrachten',
    'bei Modular oder System Sourcing Schnittstellen, Daten und Verantwortlichkeiten offenlassen',
    'eine einmal gewählte Sourcing-Struktur ohne Markt- und Risikoprüfung fortführen',
  ],
  faqs: [
    {
      question: 'Was sind Beschaffungsprinzipien?',
      answer: 'Sie beschreiben, wie Bezugsquellen und Lieferbeziehungen grundsätzlich gestaltet werden, etwa nach Lieferantenzahl, Region oder Leistungsumfang.',
    },
    {
      question: 'Was ist der Unterschied zwischen Single und Dual Sourcing?',
      answer: 'Bei Single Sourcing kommt ein Gut im Wesentlichen von einem Lieferanten. Dual Sourcing verteilt die Beschaffung auf zwei Lieferanten.',
    },
    {
      question: 'Ist Multiple Sourcing immer sicherer?',
      answer: 'Nicht automatisch. Mehrere Lieferanten können gemeinsame Vorlieferanten, Regionen oder Transportwege haben und verursachen zusätzlichen Steuerungsaufwand.',
    },
    {
      question: 'Was ist der Unterschied zwischen Local und Global Sourcing?',
      answer: 'Local Sourcing nutzt nahe oder regionale Bezugsquellen. Global Sourcing bezieht international und kann Auswahl oder Fähigkeiten erweitern, bringt aber zusätzliche Komplexität mit sich.',
    },
    {
      question: 'Was bedeutet Modular Sourcing?',
      answer: 'Dabei liefert ein Partner eine zusammengehörende, oft vormontierte Baugruppe statt einzelner Teile. Das kann interne Arbeit verringern, erhöht aber die Anforderungen an Schnittstellen und Lieferantenfähigkeit.',
    },
  ],
  related: [
    'strategischer-einkauf',
    'lieferantenentwicklung',
    'beschaffungsarten',
    'einkauf-verkauf',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default beschaffungsprinzipien;
