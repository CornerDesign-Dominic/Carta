import { defaultDisclaimer } from '../shared.js';

const milkRun = {
  slug: 'milk-run',
  category: 'Supply Chain & Logistik',
  title: 'Milk-Run-Konzept',
  description: 'Milk Run einfach erklärt: feste Transportrouten, gebündelte Mengen und wiederkehrende Touren zwischen Lieferanten, Depot und Werk.',
  seo: {
    title: 'Milk-Run-Konzept einfach erklärt | Belege24',
    description: 'Erfahre, wie Milk Runs Lieferungen und Abholungen auf festen Routen bündeln, welche Vorteile sie haben und wann Direktverkehre besser passen.',
    canonicalPath: '/wissen/milk-run',
  },
  article: {
    intro: 'Ein Milk Run bündelt mehrere Abholungen oder Zustellungen auf einer festen, wiederkehrenden Transportroute. Statt viele Einzeltransporte zu organisieren, fährt ein Fahrzeug planmäßig mehrere Lieferanten oder Empfänger innerhalb einer Tour an.',
    sections: [
      {
        heading: 'Was ist ein Milk Run?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'milk-run', text: 'Milk Run' },
            ' ist eine wiederkehrende Tour mit festgelegten Haltepunkten, Mengen und Zeitfenstern. Das Fahrzeug sammelt beispielsweise Material bei mehreren Lieferanten ein und bringt die gebündelten Mengen zu einem Werk, Lager oder Depot.',
          ],
          'Das Konzept funktioniert auch in umgekehrter Richtung: Ein Depot oder Werk beliefert mehrere Empfänger auf einer Route. Entscheidend sind die planmäßige Bündelung und die verlässliche Wiederholung der Tour, nicht allein die Richtung des Transports.',
        ],
      },
      {
        heading: 'Route, Tourenrhythmus und Konsolidierung',
        paragraphs: [
          'Die Route legt fest, welche Stationen in welcher Reihenfolge angefahren werden. Der Tourenrhythmus bestimmt, ob die Tour etwa täglich, mehrmals pro Woche oder mehrmals am Tag stattfindet. Er muss zum Bedarf, zu Lieferzeiten, Umschlagpunkten und verfügbaren Fahrzeugen passen.',
          'Konsolidierung bedeutet, dass kleinere Mengen aus mehreren Quellen oder für mehrere Empfänger zusammengeführt werden. Dadurch kann die Fahrzeugauslastung steigen und die Zahl einzelner Fahrten sinken.',
          'Eine Milk-Run-Tour braucht klare Mengen- und Zeitfenster. Werden Abholungen oder Zustellungen nicht rechtzeitig bereitgestellt, kann sich die Verspätung auf nachfolgende Stationen der gesamten Tour auswirken.',
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Beispiel einer Abholtour',
            formula: 'Depot/Werk → Lieferant A → B → C → Werk',
            description: 'Die Tour kann Material bei mehreren Lieferanten aufnehmen und anschließend gebündelt zum Werk bringen. Route, Reihenfolge und Zeitfenster werden passend zum Prozess festgelegt.',
          },
        ],
      },
      {
        heading: 'Auswirkungen auf Kosten, Auslastung und Bestand',
        paragraphs: [
          'Gebündelte Touren können gegenüber vielen Einzeltransporten Fahrzeugkapazität besser nutzen und Transportaufwand bündeln. Ob die Transportkosten tatsächlich sinken, hängt von Strecke, Auslastung, Wartezeiten, Umschlag, Tourenfrequenz und Organisation ab.',
          'Ein verlässlicher, häufiger Tourenrhythmus kann kleinere Liefermengen ermöglichen und Bestände am Werk senken. Gleichzeitig braucht der Prozess ausreichend Puffer für Schwankungen und Verzögerungen, weil der Nachschub an den Tourenplan gebunden ist.',
          'Milk Runs verschieben Aufwand nicht nur auf den Transport. Bereitstellung, Verpackung, Kennzeichnung, Buchung und Übergabe an jeder Station müssen so organisiert sein, dass die Tour nicht unnötig wartet.',
        ],
      },
      {
        heading: 'Vorteile gegenüber Einzeltransporten',
        paragraphs: [
          'Wiederkehrende Routen schaffen Transparenz: Beteiligte wissen, wann das Fahrzeug erwartet wird und welche Mengen über die Tour laufen. Das kann Abstimmung und Planung erleichtern.',
          'Wenn mehrere Mengen zeitlich und geografisch gut zusammenpassen, kann die Bündelung Leerfahrten und viele kleine Einzeltransporte verringern. Regelmäßige Touren machen Abweichungen außerdem schneller sichtbar, etwa wenn eine Abholung wiederholt nicht bereitsteht.',
          'Diese Vorteile sind nicht garantiert. Bei ungünstiger Route, zu geringen Mengen oder hohen Wartezeiten kann eine Tour zusätzliche Kosten verursachen statt sie zu senken.',
        ],
      },
      {
        heading: 'Voraussetzungen und Risiken',
        paragraphs: [
          'Geeignet sind wiederkehrende Mengen, räumlich sinnvoll gelegene Stationen, planbare Zeitfenster und klar geregelte Übergaben. Lieferanten und Empfänger müssen bereit sein, Mengen rechtzeitig bereitzustellen oder anzunehmen.',
          'Verspätungen an einer frühen Station können sich auf die gesamte Tour übertragen. Fehlende Ware, lange Wartezeiten, Staus, falsche Ladeeinheiten oder unklare Ansprechpartner können dazu führen, dass spätere Abholungen, Anlieferungen oder Produktionsfenster nicht eingehalten werden.',
          'Ein Tourenplan braucht daher Kommunikation, eine nachvollziehbare Abweichungsbehandlung und gegebenenfalls Alternativen für kritische Mengen. Direktverkehre können sinnvoller sein, wenn Mengen groß, Termine besonders eng oder Wege ohne weitere Stopps deutlich effizienter sind.',
        ],
      },
      {
        heading: 'Praxisbeispiel: Drei Lieferanten auf einer täglichen Abholtour',
        paragraphs: [
          'Ein Werk benötigt täglich kleinere Mengen von drei nahe beieinander liegenden Lieferanten. Statt drei einzelne Transporte zu beauftragen, fährt ein Fahrzeug jeden Vormittag dieselbe Route und nimmt die bereitgestellten Behälter auf.',
        ],
        exampleCards: [
          {
            title: 'Tägliche Konsolidierung zum Werk',
            paragraphs: [
              'Lieferant A stellt seine Behälter bis 8:00 Uhr bereit, B bis 8:30 Uhr und C bis 9:00 Uhr. Nach der dritten Abholung fährt das Fahrzeug zum Werk. Mengen, Behälter und Übergabepunkte sind für jede Station festgelegt.',
              'Verspätet sich Lieferant A, kann sich die gesamte Tour verschieben. Das Werk prüft deshalb, welche Behälter für den laufenden Tag kritisch sind, wie Abweichungen gemeldet werden und wann ein Direkttransport als Ausnahme nötig wäre.',
            ],
            effects: [
              'Chance: drei kleine Abholungen werden in einer planbaren Fahrt gebündelt.',
              'Risiko: Eine Verspätung kann mehrere Stationen und die Anlieferung im Werk beeinflussen.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit JIT und JIS',
        paragraphs: [
          [
            'Ein Milk Run kann ',
            { type: 'link', href: '/wissen/just-in-time-sequence', text: 'Just-in-Time & Just-in-Sequence' },
            ' unterstützen, wenn feste Touren kleinere Mengen zuverlässig in passenden Zeitfenstern bereitstellen. Er ist aber nicht automatisch ein JIT- oder JIS-System: Die gesamte Liefer- und Produktionsplanung muss dazu passen.',
          ],
          'Beschaffungslogistik und Lieferperformance sind weiterführende Themen. Sie betrachten unter anderem die Gestaltung von Beschaffungswegen und die tatsächliche Qualität von Terminen und Lieferungen innerhalb solcher Prozesse.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, eine Route nur nach Kartenentfernung zu planen. Bereitstellungszeiten, Ladeaufwand, Zeitfenster, Umschlag und Rückfahrt können die tatsächliche Dauer stärker bestimmen.',
          'Auch eine hohe Tourenfrequenz ist nicht automatisch effizient. Wenn Mengen, Auslastung und Bedarf nicht passen, entstehen viele Fahrten mit unnötigem Aufwand.',
          'Milk Runs sollten nicht ohne klare Zuständigkeiten für Verspätungen und fehlende Mengen eingeführt werden. Eine Tour ist nur so stabil wie ihre schwächste Übergabe.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Milk Run bündelt mehrere Abholungen oder Zustellungen auf einer festen, wiederkehrenden Tour.',
    'Die Route kann Lieferanten anfahren und zum Werk führen oder mehrere Empfänger versorgen.',
    'Konsolidierung kann Fahrzeugauslastung verbessern und Einzeltransporte verringern.',
    'Tourenrhythmus, Mengen, Zeitfenster und Übergaben müssen klar abgestimmt sein.',
    'Häufige, verlässliche Touren können Bestände senken, erhöhen aber die Abhängigkeit vom funktionierenden Transportprozess.',
    'Bei großen Direktmengen, besonders engen Terminen oder ungünstigen Routen können Direktverkehre sinnvoller sein.',
  ],
  commonMistakes: [
    'Routen nur nach Entfernung statt auch nach Zeitfenstern, Ladeaufwand und Umschlag planen',
    'Tourenfrequenz erhöhen, ohne Mengen, Auslastung und Bedarf zu prüfen',
    'Bereitstellungs- und Übergabeverantwortung an den Stationen offenlassen',
    'Verspätungen einzelner Stopps nicht als Risiko für die gesamte Tour einplanen',
    'Milk Runs einsetzen, obwohl ein direkter Transport wegen Menge oder Termin effizienter wäre',
  ],
  faqs: [
    {
      question: 'Was ist ein Milk Run?',
      answer: 'Ein Milk Run ist eine feste, wiederkehrende Transportroute, die mehrere Abholungen oder Zustellungen innerhalb einer Tour bündelt.',
    },
    {
      question: 'Was bedeutet Konsolidierung?',
      answer: 'Konsolidierung führt kleinere Mengen aus mehreren Quellen oder für mehrere Empfänger zusammen, damit sie gemeinsam transportiert werden können.',
    },
    {
      question: 'Kann ein Milk Run Bestände senken?',
      answer: 'Bei häufigen und zuverlässigen Touren können kleinere Liefermengen möglich sein. Die nötigen Puffer hängen aber weiterhin von Bedarf, Lieferfähigkeit und Störungsrisiko ab.',
    },
    {
      question: 'Wann ist ein Direkttransport sinnvoller?',
      answer: 'Zum Beispiel bei großen Mengen, sehr engen Terminen, kritischen Einzelteilen oder wenn zusätzliche Stopps die Tour unzuverlässig oder unwirtschaftlich machen.',
    },
    {
      question: 'Was passiert bei einer Verspätung im Milk Run?',
      answer: 'Sie kann nachfolgende Stopps und die Anlieferung im Werk verschieben. Deshalb braucht die Tour klare Kommunikation und Regeln für Abweichungen.',
    },
  ],
  related: [
    'just-in-time-sequence',
    'lieferantenrisiko',
    'sourcing-strategien',
    'kanban-steuerung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default milkRun;
