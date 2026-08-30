import { defaultDisclaimer } from '../shared.js';

const supplyChainRisikenResilienz = {
  slug: 'supply-chain-risiken-resilienz',
  category: 'Supply Chain & Logistik',
  title: 'Supply-Chain-Risiken & Resilienz',
  description: 'Supply-Chain-Risiken und Resilienz einfach erklärt: Störungen erkennen, Auswirkungen bewerten und Lieferketten gezielt widerstandsfähiger gestalten.',
  seo: {
    title: 'Supply-Chain-Risiken & Resilienz | Belege24',
    description: 'Erfahre, welche Risiken Lieferketten treffen können, was Resilienz bedeutet und wie Unternehmen Versorgung, Transparenz und Handlungsfähigkeit stärken.',
    canonicalPath: '/wissen/supply-chain-risiken-resilienz',
  },
  article: {
    intro: 'Supply-Chain-Risiken können den Waren-, Informations- und Leistungsfluss zwischen Lieferanten, Unternehmen und Kunden stören. Resilienz beschreibt die Fähigkeit einer Lieferkette, Störungen möglichst früh zu erkennen, ihre Auswirkungen zu begrenzen und sich danach wieder zu stabilisieren.',
    sections: [
      {
        heading: 'Was sind Supply-Chain-Risiken?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'supply-chain-risiko', text: 'Supply-Chain-Risiko' },
            ' liegt vor, wenn ein Ereignis oder eine Abhängigkeit Versorgung, Qualität, Zeit, Kosten oder Informationen in der Lieferkette beeinträchtigen kann. Es betrifft nicht nur den direkten Lieferanten: Auch Vorlieferanten, Transportwege, Lager, IT-Systeme und Nachfrageschwankungen können eine Rolle spielen.',
          ],
          [
            'Eine resiliente Lieferkette ist nicht störungsfrei. ',
            { type: 'glossary', id: 'supply-chain-resilienz', text: 'Resilienz' },
            ' bedeutet vielmehr, dass Beteiligte mit Störungen vorbereitet umgehen, Alternativen nutzen und nach einer Unterbrechung wieder zuverlässig liefern oder produzieren können.',
          ],
          'Ziel ist nicht, jedes Risiko zu eliminieren. Unternehmen sollten erkennen, welche Güter, Wege und Informationen besonders kritisch sind, die mögliche Auswirkung einschätzen und angemessene Maßnahmen wählen.',
        ],
      },
      {
        heading: 'Typische Risiken in der Lieferkette',
        paragraphs: [
          'Ein Lieferantenausfall oder Kapazitätsengpass kann fehlende Materialien, verschobene Termine oder ungeplante Mehrkosten verursachen. Qualitätsprobleme können zusätzlich Nacharbeit, Sperrbestände, Reklamationen oder Produktionsunterbrechungen auslösen.',
          'Transportstörungen entstehen zum Beispiel durch Ausfälle von Verkehrsträgern, überlastete Umschlagpunkte, Streckenunterbrechungen oder fehlende Transportkapazität. Politische oder geografische Risiken, Naturereignisse und regulatorische Änderungen können einzelne Regionen, Häfen oder Beschaffungsquellen vorübergehend oder länger beeinträchtigen.',
          'IT- und Informationsausfälle gefährden Planung und Steuerung, auch wenn Waren physisch verfügbar wären. Fehlende Bestandsdaten, nicht übermittelte Änderungen oder unklare Liefertermine können zu falschen Bestell- und Priorisierungsentscheidungen führen.',
          'Lange oder schwankende Lieferzeiten erhöhen die Unsicherheit. Je länger die Wiederbeschaffungszeit, desto mehr kann sich Bedarf, Bestand oder Kapazität zwischen Bestellung und Ankunft verändern. Engpässe werden besonders kritisch, wenn keine freigegebene Alternative oder kein zeitlicher Puffer vorhanden ist.',
          [
            'Risiken einzelner Bezugsquellen vertieft die Seite ',
            { type: 'link', href: '/wissen/lieferantenrisiko', text: 'Lieferantenrisiko' },
            '. Diese Überblicksseite betrachtet zusätzlich die Verbindungen zwischen Lieferanten, Transport, Information, Bestand und Nachfrage.',
          ],
        ],
      },
      {
        heading: 'Abhängigkeiten und Nachfrageschwankungen',
        paragraphs: [
          'Eine Single-Source-Abhängigkeit besteht, wenn ein wichtiges Gut im Wesentlichen nur aus einer Bezugsquelle verfügbar ist. Sie kann sinnvoll sein, etwa bei hochspezialisierten Komponenten oder enger Zusammenarbeit. Das Risiko steigt jedoch, wenn ein Wechsel lange dauert, kein Ersatz verfügbar ist oder die Quelle selbst von denselben Vorlieferanten und Wegen abhängig ist.',
          [
            'Nachfrageschwankungen können Kapazität und Bestände ebenfalls belasten. Der ',
            { type: 'link', href: '/wissen/bullwhip-effekt', text: 'Bullwhip-Effekt' },
            ' zeigt, wie kleine Änderungen der Kundennachfrage entlang mehrerer Stufen zu größeren Bestell- und Produktionsschwankungen werden können. Transparente Absatz-, Bestands- und Termindaten helfen, Bestellungen nicht vorschnell als dauerhafte Nachfrageänderung zu deuten.',
          ],
        ],
      },
      {
        heading: 'Risiken erkennen und bewerten',
        paragraphs: [
          'Am Anfang steht eine Übersicht der kritischen Materialien, Leistungen, Lieferanten, Standorte, Transportwege und Informationssysteme. Nicht nur hohes Einkaufsvolumen zählt: Ein kleines, schwer ersetzbares Teil kann einen gesamten Prozess blockieren.',
          'Für relevante Risiken werden üblicherweise Eintrittswahrscheinlichkeit und mögliche Auswirkung betrachtet. Hilfreich sind Daten zu Liefertermintreue, Reklamationen, Beständen, Lieferzeiten, Kapazitätsmeldungen und bekannten Abhängigkeiten. Die Bewertung sollte aktualisiert werden, weil Märkte, Nachfrage und Verfügbarkeiten sich verändern.',
        ],
        formulaCards: [
          {
            label: 'Risiko',
            title: 'Von der Störung zur passenden Reaktion',
            formula: 'Risiko → mögliche Auswirkung → mögliche Gegenmaßnahme',
            description: 'Die passende Maßnahme hängt von Kritikalität, Wiederbeschaffungszeit, verfügbaren Alternativen und Kosten ab. Eine Lösung passt nicht für jede Ware oder Lieferbeziehung.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Engpass bei einem kritischen Bauteil',
            paragraphs: [
              'Ein Bauteil wird nur von einem zugelassenen Lieferanten hergestellt. Dessen Produktionskapazität ist ausgelastet, während sich die Lieferzeit von vier auf acht Wochen verlängert. Das Teil hat einen geringen Einkaufswert, wird aber für jedes Endprodukt benötigt.',
              'Das Unternehmen bewertet die Auswirkung als hoch: Ohne das Bauteil kann es nicht ausliefern. Es prüft deshalb verfügbare Bestände, eine zweite technisch freizugebende Quelle, die Möglichkeit einer regionalen Alternative und einen abgestimmten Notfallplan mit Vertrieb und Produktion.',
            ],
            effects: [
              'Auswirkung: Lieferfähigkeit und Produktion können trotz geringem Einzelwert gefährdet sein.',
              'Mögliche Reaktion: Bestandsreichweite sichern, Alternativen qualifizieren und Termine transparent priorisieren.',
            ],
          },
        ],
      },
      {
        heading: 'Maßnahmen für mehr Resilienz',
        paragraphs: [
          [
            'Alternativlieferanten, regionale Diversifizierung oder ',
            { type: 'link', href: '/wissen/sourcing-strategien', text: 'Dual- und Multiple-Sourcing-Strategien' },
            ' können direkte Abhängigkeiten senken. Eine Alternative ist allerdings nur wirksam, wenn sie technisch freigegeben, vertraglich eingebunden und im Störfall tatsächlich lieferfähig ist.',
          ],
          [
            'Ein passend bemessener ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand' },
            ' kann kurze Störungen überbrücken. Er bindet jedoch Kapital und ist kein Ersatz für fehlende Alternativen oder dauerhaft unzuverlässige Prozesse.',
          ],
          'Notfallpläne legen Verantwortlichkeiten, Eskalationswege und Prioritäten für eine Störung fest. Flexible Transport- oder Beschaffungsoptionen können helfen, wenn Routen oder Quellen ausfallen. Sie sollten vor einer Krise geprüft sein, statt erst im Engpass gesucht zu werden.',
          'Transparente Bestands-, Bedarfs-, Kapazitäts- und Termindaten ermöglichen schnellere Entscheidungen. Regelmäßiger Austausch mit Lieferanten, Logistikpartnern und internen Bereichen hilft, Risiken früher sichtbar zu machen und Maßnahmen aufeinander abzustimmen.',
        ],
      },
      {
        heading: 'Kostenoptimierung und Resilienz abwägen',
        paragraphs: [
          'Sehr schlanke Bestände, wenige Lieferanten und stark gebündelte Transporte können Kosten und Komplexität senken. Gleichzeitig können sie die Folgen einer Störung vergrößern, wenn keine Puffer oder Alternativen vorhanden sind.',
          'Mehr Resilienz verursacht ebenfalls Aufwand, etwa durch zusätzliche Qualifizierung, Sicherheitsbestände, Verträge oder Datenpflege. Sie ist deshalb keine pauschale Maximalforderung. Entscheidend ist, welche Vorsorge bei kritischen Gütern und Prozessen in einem vertretbaren Verhältnis zum möglichen Schaden steht.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Ein häufiger Fehler ist, nur den direkten Lieferanten zu betrachten. Gemeinsame Vorlieferanten, Regionen, Verkehrsknoten oder IT-Systeme können dazu führen, dass mehrere scheinbar unabhängige Quellen gleichzeitig betroffen sind.',
          'Auch hohe Bestände machen eine Lieferkette nicht automatisch resilient. Sie können Kapital binden, veralten oder nur ein einzelnes Risiko abfedern. Umgekehrt ist eine kosteneffiziente Struktur nicht zwangsläufig zu riskant; sie muss zu Kritikalität, Lieferzeit und verfügbaren Alternativen passen.',
          'Resilienz entsteht nicht allein durch einen Notfallplan. Ohne aktuelle Daten, klare Verantwortlichkeiten und regelmäßig geprüfte Optionen bleiben Pläne im Störfall oft zu abstrakt.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Supply-Chain-Risiken können Lieferfähigkeit, Qualität, Kosten, Termine und Informationen entlang mehrerer Stufen beeinträchtigen.',
    'Resilienz bedeutet, Störungen früh zu erkennen, ihre Folgen zu begrenzen und die Lieferkette wieder zu stabilisieren.',
    'Risiken betreffen unter anderem Lieferanten, Transport, Kapazität, Qualität, Lieferzeiten, Regionen, IT und Nachfrage.',
    'Single Source, gemeinsame Vorlieferanten oder gleiche Transportwege können Abhängigkeiten schaffen.',
    'Alternativquellen, geeignete Sicherheitsbestände, Diversifizierung, Notfallpläne und Transparenz können die Widerstandsfähigkeit stärken.',
    'Kostenoptimierung und Resilienz sind ein Zielkonflikt, der je nach Kritikalität bewusst abgewogen werden muss.',
  ],
  commonMistakes: [
    'nur direkte Lieferanten und nicht Vorlieferanten, Transportwege oder Informationssysteme betrachten',
    'kleine, aber unverzichtbare Materialien wegen ihres geringen Einkaufswerts als unkritisch einstufen',
    'Alternativlieferanten ohne Freigabe, Kapazitätsprüfung oder vertragliche Vorbereitung als sofort verfügbar bewerten',
    'Sicherheitsbestände pauschal erhöhen, ohne Wiederbeschaffungszeit, Kosten und Ursache der Störung zu prüfen',
    'Notfallpläne ohne aktuelle Daten, Zuständigkeiten und regelmäßige Überprüfung als ausreichende Vorsorge ansehen',
  ],
  faqs: [
    {
      question: 'Was sind Supply-Chain-Risiken?',
      answer: 'Das sind mögliche Störungen oder Abhängigkeiten, die Versorgung, Qualität, Kosten, Termine oder Informationen entlang einer Lieferkette beeinträchtigen können.',
    },
    {
      question: 'Was bedeutet Resilienz in der Lieferkette?',
      answer: 'Resilienz ist die Fähigkeit, Störungen zu erkennen, ihre Auswirkungen zu begrenzen und danach wieder zuverlässig zu liefern oder zu produzieren.',
    },
    {
      question: 'Warum sind lange Lieferzeiten riskant?',
      answer: 'Sie verlängern den Zeitraum zwischen Bestellung und Ankunft. In dieser Zeit können sich Bedarf, Bestand oder Kapazität ändern; bei einer Störung ist zudem weniger schnell Ersatz verfügbar.',
    },
    {
      question: 'Machen mehrere Lieferanten eine Lieferkette automatisch resilient?',
      answer: 'Nein. Mehrere Quellen helfen nur, wenn sie wirklich unabhängig, technisch freigegeben und im Störfall lieferfähig sind.',
    },
    {
      question: 'Ist ein hoher Sicherheitsbestand immer die beste Vorsorge?',
      answer: 'Nein. Er kann kurze Unterbrechungen überbrücken, bindet aber Kapital und ersetzt weder Alternativen noch zuverlässige Informationen und Prozesse.',
    },
  ],
  related: [
    'lieferantenrisiko',
    'sourcing-strategien',
    'bullwhip-effekt',
    'sicherheitsbestand-meldebestand-servicegrad',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default supplyChainRisikenResilienz;
