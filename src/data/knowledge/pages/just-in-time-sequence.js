import { defaultDisclaimer } from '../shared.js';

const justInTimeSequence = {
  slug: 'just-in-time-sequence',
  category: 'Supply Chain & Logistik',
  title: 'Just-in-Time & Just-in-Sequence',
  description: 'Just-in-Time und Just-in-Sequence einfach erklärt: bedarfs- und reihenfolgensynchrone Lieferung, Vorteile, Risiken und passende Einsatzbedingungen.',
  seo: {
    title: 'Just-in-Time & Just-in-Sequence einfach erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen JIT und JIS, ihre Wirkung auf Bestand und Produktion sowie Voraussetzungen und Risiken stabiler Lieferketten.',
    canonicalPath: '/wissen/just-in-time-sequence',
  },
  article: {
    intro: 'Just-in-Time und Just-in-Sequence richten Lieferung und Produktion eng am tatsächlichen Bedarf aus. Sie können Lagerbestände reduzieren, erhöhen aber die Anforderungen an Planung, Informationsaustausch und zuverlässige Lieferketten.',
    sections: [
      {
        heading: 'Was bedeutet Just-in-Time?',
        paragraphs: [
          [
            'Just-in-Time (',
            { type: 'glossary', id: 'just-in-time', text: 'JIT' },
            ') bedeutet, dass Materialien oder Komponenten bedarfssynchron geliefert werden: in der benötigten Menge und möglichst genau zu dem Zeitpunkt, an dem sie in Produktion oder Montage gebraucht werden.',
          ],
          'Ziel sind geringe Lagerbestände und kurze Liegezeiten. Das setzt voraus, dass Bedarf, Termine, Lieferfrequenz und Übergaben zwischen Lieferant und Abnehmer gut abgestimmt sind. JIT ist kein Synonym für „ohne Lager“ – ein angemessener Puffer kann weiterhin sinnvoll sein.',
        ],
      },
      {
        heading: 'Was bedeutet Just-in-Sequence?',
        paragraphs: [
          [
            'Just-in-Sequence (',
            { type: 'glossary', id: 'just-in-sequence', text: 'JIS' },
            ') geht einen Schritt weiter. Die Teile treffen nicht nur zum passenden Zeitpunkt ein, sondern zusätzlich in genau der Reihenfolge, in der sie an der Montagelinie benötigt werden.',
          ],
          'JIS wird vor allem bei Variantenvielfalt und getakteter Montage relevant. Wenn etwa Bauteile für unterschiedliche Produktvarianten nacheinander verbaut werden, muss die Anlieferung diese Reihenfolge zuverlässig abbilden. Fehler in der Reihenfolge können ebenso problematisch sein wie verspätete Mengen.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'JIT vs. JIS',
            formula: 'JIT: richtige Menge → zum richtigen Zeitpunkt\nJIS: richtige Menge → zum richtigen Zeitpunkt → in der richtigen Reihenfolge',
            description: 'JIS enthält die Zeitlogik von JIT und ergänzt sie um eine abgestimmte Reihenfolge. Dadurch sinken Puffer und Sortieraufwand, während die Anforderungen an Planung und Ausführung steigen.',
          },
        ],
      },
      {
        heading: 'Wie bedarfssynchrone Lieferung funktioniert',
        paragraphs: [
          'JIT und JIS arbeiten häufig mit kleinen Liefermengen, hoher Lieferfrequenz und engen Zeitfenstern. Lieferant, Transport und Wareneingang müssen wissen, welche Menge wann an welchem Ort benötigt wird.',
          'Dafür braucht es einen verlässlichen Informationsaustausch über Produktionspläne, Auftragsänderungen, tatsächlichen Verbrauch, Bestände und Abweichungen. Je enger die Lieferfenster und je kleiner die Puffer, desto schneller müssen Änderungen erkannt und abgestimmt werden.',
          'Die Lieferbeziehung ist damit mehr als eine einzelne Bestellung. Planung, Verpackung, Kennzeichnung, Transport, Wareneingang und die Bereitstellung an der Linie müssen als zusammenhängender Prozess funktionieren.',
        ],
      },
      {
        heading: 'Vorteile: Bestände, Lagerkosten und Kapitalbindung',
        paragraphs: [
          'Bei stabilen Abläufen können JIT und JIS den durchschnittlichen Lagerbestand und damit Lagerfläche, Kapitalbindung sowie Teile des internen Handlings verringern. Kürzere Liegezeiten können auch das Risiko reduzieren, dass Teile veralten oder falsch zugeordnet werden.',
          'JIS kann zusätzlich Sortier-, Such- oder Bereitstellungsaufwand an der Montage verringern, weil Komponenten bereits in der vorgesehenen Reihenfolge ankommen. Ob diese Vorteile tatsächlich eintreten, hängt von Prozess, Variantenvielfalt, Transport und vorhandener Organisation ab.',
        ],
      },
      {
        heading: 'Risiken und Abhängigkeiten',
        paragraphs: [
          'Geringe Bestände lassen weniger Zeit, Störungen auszugleichen. Lieferverzug, Verkehrsprobleme, IT-Ausfälle, fehlerhafte Informationen, Qualitätsprobleme oder falsche Reihenfolgen können bei knappen Zeitfenstern schnell zu einem Produktionsstillstand führen.',
          [
            'Die Abhängigkeit von zuverlässigen Lieferanten und Wegen muss deshalb bewusst bewertet werden. Die Seite ',
            { type: 'link', href: '/wissen/lieferantenrisiko', text: 'Lieferantenrisiko' },
            ' erklärt typische Risiken und mögliche Gegenmaßnahmen; ',
            { type: 'link', href: '/wissen/sourcing-strategien', text: 'Sourcing-Strategien' },
            ' ordnet die Struktur von Bezugsquellen ein.',
          ],
          'Ein JIT- oder JIS-Konzept braucht nicht zwingend nur einen Lieferanten. Entscheidend ist, ob alternative Bezugsquellen, Transportwege, Kommunikationswege und Reaktionspläne im Störfall tatsächlich funktionieren.',
        ],
      },
      {
        heading: 'Geeignete Einsatzbedingungen',
        paragraphs: [
          'JIT eignet sich eher für planbare, regelmäßig benötigte Teile mit ausreichender Lieferfähigkeit und gut steuerbaren Prozessen. JIS verlangt zusätzlich eine stabile Montagefolge, klare Kennzeichnung und hohe Prozessdisziplin bei Lieferant und Abnehmer.',
          'Geeignete Bedingungen können kurze und verlässliche Lieferwege, transparente Bedarfsdaten, belastbare Qualitätsprozesse, abgestimmte Verpackung sowie klare Eskalationswege sein. Bei stark schwankendem Bedarf, unsicheren Lieferwegen oder schwer ersetzbaren Komponenten kann ein größerer Puffer oder ein anderes Konzept angemessener sein.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Variantenreiche Montagelinie',
            paragraphs: [
              'Eine Montagelinie fertigt unterschiedliche Produktvarianten nacheinander. Ein Zulieferer bringt die benötigten Komponenten mehrmals täglich in kleinen Mengen an. Bei JIT treffen sie passend zum geplanten Verbrauch ein.',
              'Bei JIS sind die Behälter zusätzlich nach der Montagereihenfolge gekennzeichnet und sortiert. Ändert sich der Produktionsplan kurzfristig, müssen Lieferant und Abnehmer die neue Reihenfolge rechtzeitig abstimmen, damit kein falsches Teil an der Linie steht.',
            ],
            effects: [
              'Chance: wenig Linienbestand und weniger interne Sortierung.',
              'Risiko: Eine Verspätung oder falsche Reihenfolge kann die Montage unmittelbar stören.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, JIT allein als Sparmaßnahme für Lagerbestand zu sehen. Ohne stabile Qualität, Informationen, Transport und Reaktionswege kann ein kleiner Bestand die Störanfälligkeit deutlich erhöhen.',
          'Auch JIS sollte nicht eingeführt werden, wenn Reihenfolge, Kennzeichnung und Änderungsprozesse unklar sind. Eine präzise Anlieferung nützt wenig, wenn die erforderliche Sequenz nicht verlässlich übermittelt wird.',
          [
            { type: 'link', href: '/wissen/kanban-steuerung', text: 'Kanban' },
            ', Lieferperformance und Supply-Chain-Risiken sind eng verwandte Vertiefungsthemen. Sie können den Prozess unterstützen oder bewerten, ersetzen aber nicht die Prüfung, ob JIT oder JIS zur eigenen Liefer- und Produktionssituation passt.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'JIT liefert die benötigte Menge möglichst genau zum Bedarfszeitpunkt.',
    'JIS ergänzt JIT um die Lieferung in der benötigten Montagereihenfolge.',
    'Geringe Bestände können Lagerkosten und Kapitalbindung senken, lassen aber weniger Puffer für Störungen.',
    'Hohe Lieferfrequenz, kurze Zeitfenster und verlässlicher Informationsaustausch sind zentrale Voraussetzungen.',
    'Lieferverzug, Qualitätsprobleme, falsche Informationen oder Sequenzfehler können Produktionsstillstände verursachen.',
    'JIT und JIS sind nur bei passenden Produkten, Prozessen und stabilen Lieferketten sinnvoll.',
  ],
  commonMistakes: [
    'JIT als pauschal überlegenes Konzept zur Bestandsreduzierung behandeln',
    'geringe Bestände ohne Prüfung von Lieferfähigkeit, Qualität und Reaktionsplänen einführen',
    'JIS anwenden, obwohl Reihenfolge, Kennzeichnung oder Änderungsprozesse nicht verlässlich sind',
    'mehrere Lieferungen mit tatsächlich unabhängigen Bezugsquellen verwechseln',
    'Lieferfrequenz und enge Zeitfenster planen, ohne Transport- und Wareneingangsprozess einzubeziehen',
  ],
  faqs: [
    {
      question: 'Was ist Just-in-Time?',
      answer: 'Just-in-Time liefert Materialien oder Komponenten bedarfssynchron in der benötigten Menge und möglichst genau zum Einsatzzeitpunkt.',
    },
    {
      question: 'Was ist der Unterschied zwischen JIT und JIS?',
      answer: 'JIS ergänzt die zeitgerechte Lieferung von JIT um die Lieferung in der exakten Reihenfolge, in der Teile an der Montage benötigt werden.',
    },
    {
      question: 'Senkt JIT immer die Kosten?',
      answer: 'Nicht automatisch. Niedrigere Bestände können Lagerkosten senken, gleichzeitig steigen Anforderungen an Transport, Planung, Informationsaustausch und Störungsmanagement.',
    },
    {
      question: 'Warum kann JIT zu Produktionsstillstand führen?',
      answer: 'Bei kleinen Puffern bleibt wenig Zeit, Lieferverzug, Qualitätsprobleme, falsche Daten oder Transportstörungen auszugleichen.',
    },
    {
      question: 'Wann ist JIS sinnvoll?',
      answer: 'Vor allem bei getakteter, variantenreicher Montage, wenn Reihenfolge, Kennzeichnung, Informationsaustausch und Lieferleistung zuverlässig gesteuert werden können.',
    },
  ],
  related: [
    'beschaffungsarten',
    'lieferantenrisiko',
    'sourcing-strategien',
    'bestellverfahren',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default justInTimeSequence;
