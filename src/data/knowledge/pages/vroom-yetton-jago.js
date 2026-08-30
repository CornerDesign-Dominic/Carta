import { defaultDisclaimer } from '../shared.js';

const vroomYettonJago = {
  slug: 'vroom-yetton-jago',
  category: 'Unternehmensführung',
  title: 'Entscheidungsmodell nach Vroom-Yetton / Vroom-Jago',
  description: 'Das Entscheidungsmodell von Vroom, Yetton und Jago zur passenden Beteiligung von Mitarbeitenden praxisnah erklärt.',
  seo: {
    title: 'Vroom-Yetton-/Vroom-Jago-Modell | Belege24',
    description: 'Verstehe, wann Führungskräfte allein entscheiden, Informationen einholen, beraten oder gemeinsam mit dem Team entscheiden sollten.',
    canonicalPath: '/wissen/vroom-yetton-jago',
  },
  article: {
    intro: 'Das Entscheidungsmodell nach Vroom und Yetton sowie seine Weiterentwicklung durch Vroom und Jago hilft, den passenden Grad der Mitarbeiterbeteiligung für eine konkrete Entscheidung zu bestimmen. Im Mittelpunkt stehen nicht feste Führungstypen, sondern Anforderungen der jeweiligen Entscheidung.',
    sections: [
      {
        heading: 'Grundidee des Modells',
        paragraphs: [
          'Victor Vroom und Philip Yetton veröffentlichten 1973 ein normatives Modell für Führungsentscheidungen. Es soll Führungskräften helfen zu beurteilen, ob sie allein entscheiden, Informationen einholen, einzelne Mitarbeitende oder eine Gruppe beraten oder die Entscheidung gemeinsam treffen sollten.',
          '„Normativ“ bedeutet, dass das Modell eine Empfehlung für den Entscheidungsprozess geben will. Es beschreibt nicht nur, wie Führungskräfte tatsächlich handeln. Ausgangspunkt ist, dass der passende Beteiligungsgrad von Problem und Situation abhängt.',
        ],
      },
      {
        heading: 'Entscheidungsbeteiligung statt fester Führungsstil',
        paragraphs: [
          'Das Modell betrachtet einen konkreten Entscheidungsfall. Eine Führungskraft kann bei einer Sicherheitsstörung allein entscheiden und bei der Auswahl einer neuen Teamsoftware stark beteiligen. Das ist kein Widerspruch, wenn Anforderungen und Entscheidungsrahmen unterschiedlich sind.',
          [
            'Damit gehört der Ansatz zur ',
            { type: 'glossary', id: 'situative-fuehrung', text: 'situativen Führung' },
            '. Er konzentriert sich jedoch enger auf die Frage, wie Entscheidungsbefugnis und Beratung in einer bestimmten Lage gestaltet werden.',
          ],
        ],
      },
      {
        heading: 'Allein entscheiden, beraten oder gemeinsam entscheiden',
        paragraphs: ['Die Beteiligung steigt schrittweise. Dazwischen liegen unterschiedliche Formen der Informationsgewinnung und Beratung.'],
        formulaCards: [
          {
            label: 'Entscheidungsschema',
            title: 'Allein entscheiden → beraten → gemeinsam entscheiden',
            formula: 'Allein entscheiden\n→ Informationen bei Mitarbeitenden einholen\n→ einzelne Mitarbeitende beraten, Führungskraft entscheidet\n→ Gruppe beraten, Führungskraft entscheidet\n→ Problem und Entscheidung gemeinsam in der Gruppe bearbeiten',
            description: 'Mehr Beteiligung bedeutet mehr Einfluss auf Analyse oder Entscheidung. Sie ist nicht automatisch besser; Qualität, Akzeptanz, Informationen und verfügbarer Zeitrahmen bestimmen die passende Form.',
          },
        ],
      },
      {
        heading: 'Wann Führungskräfte allein entscheiden',
        paragraphs: [
          'Eine Einzelentscheidung kann sinnvoll sein, wenn die Führungskraft über die notwendigen Informationen verfügt, die Qualitätsanforderungen klar sind und die Umsetzung keine besondere Zustimmung des Teams erfordert. Auch unmittelbare Gefahr oder sehr hoher Zeitdruck können schnelles Handeln verlangen.',
          'Allein zu entscheiden bedeutet nicht, Gründe oder Folgen geheim zu halten. Nach der Entscheidung können Information, Begründung und Rückfragen wichtig sein. Zeitdruck darf außerdem nicht pauschal vorgeschoben werden, wenn relevantes Wissen nur im Team vorhanden ist.',
        ],
        exampleCards: [
          {
            title: 'Sicherheitsrelevanter Maschinenstopp',
            paragraphs: ['Nach einer Warnmeldung stoppt die Produktionsleitung die Anlage sofort nach dem festgelegten Notfallplan. Sie wartet nicht auf eine Gruppenberatung. Ursachenanalyse und Verbesserung des Ablaufs erfolgen nach der Absicherung gemeinsam mit Fachleuten.'],
            effects: ['hoher Zeit- und Risikodruck', 'Entscheidungsregel ist vorab festgelegt', 'Beteiligung folgt bei Analyse und Lernen'],
          },
        ],
      },
      {
        heading: 'Wann Informationen eingeholt werden',
        paragraphs: [
          'Fehlen der Führungskraft Sachinformationen, kann sie Daten, Einschätzungen oder Erfahrungen bei Mitarbeitenden einholen und anschließend selbst entscheiden. Die Befragten liefern dann Entscheidungsgrundlagen, beeinflussen aber nicht zwingend die Bewertung der Alternativen.',
          'Diese Form ist sinnvoll, wenn Fachwissen verteilt ist, die abschließende Zuständigkeit aber klar bei der Führungskraft liegt. Der Beteiligungsgrad sollte offen benannt werden: Information einzuholen ist noch keine gemeinsame Entscheidung.',
        ],
        exampleCards: [
          {
            title: 'Liefertermin für einen Großauftrag',
            paragraphs: ['Die Vertriebsleitung fragt Produktion, Einkauf und Logistik nach Kapazitäten und Lieferzeiten. Sie entscheidet anschließend selbst, welchen Termin sie dem Kunden verbindlich anbietet, weil sie zusätzlich Vertragsrisiko und Kundenbeziehung abwägen muss.'],
            effects: ['verteiltes Fachwissen wird eingeholt', 'abschließende Entscheidung bleibt eindeutig', 'Rolle der Befragten wird transparent gemacht'],
          },
        ],
      },
      {
        heading: 'Wann Beratung sinnvoll ist',
        paragraphs: [
          'Bei einer Beratung werden nicht nur Fakten gesammelt. Einzelne Mitarbeitende oder die Gruppe diskutieren Problem, Alternativen und Folgen. Die Führungskraft hört Vorschläge an und trifft danach die Entscheidung selbst.',
          'Beratung ist besonders hilfreich, wenn Entscheidungsqualität von unterschiedlichen Perspektiven profitiert oder die spätere Umsetzung Verständnis und Akzeptanz braucht. Scheinberatung entsteht, wenn eine unveränderliche Entscheidung als offen dargestellt wird.',
        ],
        exampleCards: [
          {
            title: 'Neue Schichtübergabe',
            paragraphs: ['Die Betriebsleitung stellt zwei Ablaufvarianten vor und berät mit den Schichten über Fehlerquellen, Belastung und Informationsbedarf. Sie trifft die abschließende Entscheidung nach einheitlichen Kriterien und erklärt, welche Vorschläge eingeflossen sind.'],
            effects: ['Erfahrungswissen verbessert die Alternativen', 'Mitarbeitende verstehen Auswirkungen früh', 'Entscheidungsrecht und Kriterien bleiben klar'],
          },
        ],
      },
      {
        heading: 'Wann eine Gruppenentscheidung sinnvoll ist',
        paragraphs: [
          'Eine Gruppenentscheidung kann sinnvoll sein, wenn mehrere Personen relevantes Wissen besitzen, die Qualität durch gemeinsame Bewertung steigt und die Umsetzung stark von ihrer Zustimmung abhängt. Die Gruppe braucht einen klaren Rahmen, ausreichende Informationen und eine vereinbarte Entscheidungsregel.',
          'Gemeinsam entscheiden heißt nicht, dass jede Person bei jeder Frage ein Vetorecht hat. Vorab sollte geklärt werden, ob Konsens, Mehrheitsregel oder ein anderes Verfahren gilt und welche rechtlichen, finanziellen oder strategischen Grenzen nicht zur Disposition stehen.',
        ],
        exampleCards: [
          {
            title: 'Auswahl eines Teamwerkzeugs',
            paragraphs: ['Ein Projektteam testet drei Werkzeuge innerhalb vorgegebener Datenschutz-, Budget- und Schnittstellenanforderungen. Es gewichtet gemeinsam die Kriterien und entscheidet nach der vereinbarten Bewertungsregel. Die Bereichsleitung greift nur ein, wenn der gesetzte Rahmen verletzt wird.'],
            effects: ['Nutzerwissen und Akzeptanz sind entscheidend', 'Grenzen und Entscheidungsverfahren sind vorab klar', 'echte Entscheidung statt bloßer Empfehlung'],
          },
        ],
      },
      {
        heading: 'Die fünf klassischen Entscheidungsstile in Kürze',
        paragraphs: [
          'Das ursprüngliche Vroom-Yetton-Modell bezeichnet die fünf Formen häufig mit AI, AII, CI, CII und GII. Die Buchstaben und römischen Zahlen sind für die Anwendung weniger wichtig als der tatsächliche Beteiligungsgrad.',
        ],
        list: [
          'AI: Führungskraft entscheidet mit den vorhandenen Informationen allein',
          'AII: Führungskraft holt Informationen ein und entscheidet allein',
          'CI: Führungskraft berät sich einzeln und entscheidet anschließend',
          'CII: Führungskraft berät sich mit der Gruppe und entscheidet anschließend',
          'GII: Führungskraft und Gruppe bearbeiten das Problem und treffen die Entscheidung gemeinsam',
        ],
      },
      {
        heading: 'Entscheidungsqualität, Akzeptanz und Zeitdruck',
        paragraphs: [
          'Entscheidungsqualität ist besonders wichtig, wenn unterschiedliche Alternativen deutlich verschiedene wirtschaftliche, technische oder sicherheitsbezogene Folgen haben. Dann muss geprüft werden, wer das notwendige Wissen besitzt und ob das Problem ausreichend strukturiert ist.',
          'Akzeptanz beschreibt, wie wichtig die Unterstützung der Mitarbeitenden für eine wirksame Umsetzung ist und wie wahrscheinlich sie eine allein getroffene Entscheidung mittragen. Beteiligung kann Akzeptanz fördern, garantiert sie aber nicht.',
          'Zeit ist eine weitere Bedingung. Eine breite Beratung beansprucht zunächst mehr Zeit, kann aber spätere Widerstände oder Nacharbeit reduzieren. Umgekehrt ist eine schnelle Einzelentscheidung nicht effizient, wenn zentrale Informationen fehlen oder die Umsetzung anschließend scheitert.',
        ],
      },
      {
        heading: 'Weitere Fragen im Entscheidungsbaum',
        paragraphs: [
          'Neben Qualität, Akzeptanz und Zeit betrachtet das Modell unter anderem: Verfügt die Führungskraft über ausreichende Informationen? Teilen Mitarbeitende die Unternehmensziele? Bestehen unterschiedliche Interessen oder Konflikte? Besitzt das Team genügend Fachwissen, um eine hochwertige Entscheidung zu treffen?',
          'Die Fragen sollen ungeeignete Beteiligungsformen ausschließen. Für den Alltag reicht oft eine verkürzte Prüfung, solange relevante Risiken und Zuständigkeiten nicht übergangen werden.',
        ],
      },
      {
        heading: 'Von Vroom-Yetton zu Vroom-Jago',
        paragraphs: [
          'Vroom und Arthur Jago veröffentlichten 1988 eine überarbeitete Fassung. Sie differenzierte Situationsmerkmale, Regeln und die Bewertung möglicher Entscheidungsprozesse weiter. Auch zeitgetriebene und entwicklungsorientierte Perspektiven wurden genauer betrachtet.',
          'Die Grundidee blieb erhalten: Beteiligung wird nicht nach persönlicher Vorliebe gewählt, sondern anhand der Anforderungen einer konkreten Entscheidung. Je nach Darstellung können Bezeichnungen und Zahl der Entscheidungsformen variieren.',
        ],
      },
      {
        heading: 'Praktische Anwendung',
        paragraphs: [
          'Vor einer wichtigen Entscheidung kannst du kurz festhalten: Was ist bereits verbindlich? Wie hoch ist das Qualitätsrisiko? Wer besitzt welche Informationen? Wessen Akzeptanz ist für die Umsetzung nötig? Wie viel Zeit steht tatsächlich zur Verfügung? Wer trägt die abschließende Verantwortung?',
          [
            'Das ',
            { type: 'link', href: '/wissen/fuehrungskontinuum', text: 'Führungskontinuum nach Tannenbaum & Schmidt' },
            ' zeigt Beteiligung als fließende Spannweite. Vroom-Yetton/Jago ergänzt stärker regelgeleitete Fragen zur Auswahl des Beteiligungsgrades.',
          ],
          [
            'Wenn eine Entscheidung vollständig innerhalb eines Rahmens übertragen wird, gelten zusätzlich die Voraussetzungen guter ',
            { type: 'link', href: '/wissen/delegation', text: 'Delegation' },
            '.',
          ],
        ],
      },
      {
        heading: 'Grenzen des Modells',
        paragraphs: [
          'Die vollständigen Entscheidungsbäume können komplex und im Alltag aufwendig sein. Einschätzungen zu Akzeptanz, Wissen oder Konflikten bleiben unsicher und können durch die Sicht der Führungskraft verzerrt werden.',
          'Das Modell konzentriert sich auf Beteiligung an Entscheidungen. Machtverhältnisse, Organisationskultur, psychologische Sicherheit, informelle Führung und ethische Fragen bildet es nur begrenzt ab. Eine formal gemeinsame Entscheidung ist nicht automatisch frei von Druck oder Gruppendenken.',
          [
            'Nutze den Ansatz als strukturierte Entscheidungshilfe, nicht als mechanische Formel. Weitere Modelle und ihre Grenzen ordnet die Seite ',
            { type: 'link', href: '/wissen/fuehrungsstile', text: 'Führungsstile' },
            ' ein.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Das Modell wählt den Beteiligungsgrad für eine konkrete Entscheidung',
    'Die Spannweite reicht von Einzelentscheidung bis Gruppenentscheidung',
    'Information einzuholen ist noch keine Beratung oder Mitentscheidung',
    'Entscheidungsqualität, Akzeptanz und Zeit beeinflussen die Auswahl',
    'Fachwissen, Zielübereinstimmung und mögliche Konflikte sind weitere Faktoren',
    'Vroom und Jago entwickelten das ursprüngliche Vroom-Yetton-Modell weiter',
    'Der Ansatz ist eine Entscheidungshilfe und keine mechanische Erfolgsformel',
  ],
  commonMistakes: [
    'jede Entscheidung aus persönlicher Gewohnheit gleich stark beteiligen',
    'das Einholen von Informationen als Mitentscheidung darstellen',
    'Beratung ankündigen, obwohl die Entscheidung unveränderlich feststeht',
    'Gruppenentscheidungen ohne Rahmen und Entscheidungsregel beginnen',
    'Zeitdruck behaupten, obwohl entscheidendes Fachwissen noch fehlt',
    'Akzeptanz mit Zustimmung zu jeder Einzelmeinung verwechseln',
    'formale Zuständigkeiten oder nicht delegierbare Verantwortung übersehen',
    'den vollständigen Entscheidungsbaum ohne Anpassung auf jede Kleinigkeit anwenden',
  ],
  faqs: [
    { question: 'Was ist das Vroom-Yetton-/Vroom-Jago-Modell?', answer: 'Es ist ein situatives Entscheidungsmodell, das den passenden Grad der Mitarbeiterbeteiligung für eine konkrete Führungsentscheidung bestimmen soll.' },
    { question: 'Wann sollte eine Führungskraft allein entscheiden?', answer: 'Das kann passen, wenn ausreichende Informationen vorhanden sind, die Umsetzung keine besondere Teamakzeptanz benötigt oder unmittelbarer Zeit- und Risikodruck besteht.' },
    { question: 'Wann ist Beratung sinnvoll?', answer: 'Wenn Wissen und Perspektiven der Mitarbeitenden die Entscheidungsqualität verbessern oder frühe Einbindung für Verständnis und Umsetzung wichtig ist.' },
    { question: 'Wann ist eine Gruppenentscheidung sinnvoll?', answer: 'Wenn relevantes Wissen verteilt ist, gemeinsame Bewertung einen Mehrwert bietet und die Umsetzung stark von der Beteiligung des Teams abhängt.' },
    { question: 'Was änderte sich bei Vroom-Jago?', answer: 'Die Weiterentwicklung differenzierte Situationsmerkmale, Entscheidungsregeln und Bewertungsmaßstäbe stärker, behielt aber die situationsabhängige Wahl des Beteiligungsgrades bei.' },
  ],
  related: ['fuehrungskontinuum', 'delegation', 'fuehrungsstile'],
  sources: [
    { label: 'Vroom & Yetton (1973): Leadership and Decision-Making', url: 'https://doi.org/10.2307/j.ctt6wrc8r' },
    { label: 'Vroom & Jago (1988): The New Leadership – bibliografischer Nachweis', url: 'https://search.worldcat.org/title/16901287' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default vroomYettonJago;
