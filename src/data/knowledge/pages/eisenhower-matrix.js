import { defaultDisclaimer } from '../shared.js';

const eisenhowerMatrix = {
  slug: 'eisenhower-matrix',
  category: 'Unternehmensführung',
  title: 'Eisenhower-Matrix',
  description: 'Aufgaben mit der Eisenhower-Matrix nach Wichtigkeit und Dringlichkeit ordnen, sinnvoll priorisieren, planen oder delegieren.',
  seo: {
    title: 'Eisenhower-Matrix einfach erklärt | Belege24',
    description: 'Die vier Quadranten der Eisenhower-Matrix praxisnah verstehen – mit 2×2-Matrix, Arbeitsalltag-Beispielen und typischen Fehlern.',
    canonicalPath: '/wissen/eisenhower-matrix',
  },
  article: {
    intro: 'Die Eisenhower-Matrix ordnet Aufgaben anhand von zwei Fragen: Wie wichtig ist die Aufgabe und wie dringend ist sie? Aus der Kombination entstehen vier Quadranten, die beim sofortigen Erledigen, Planen, Delegieren oder Reduzieren helfen. Das Modell ist eine Orientierung und muss immer zu Verantwortung, Risiken und konkretem Arbeitskontext passen.',
    sections: [
      {
        heading: 'Was ist die Eisenhower-Matrix?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'eisenhower-matrix', text: 'Eisenhower-Matrix' },
            ' ist ein einfaches Werkzeug zur Priorisierung von Aufgaben. Wichtigkeit beschreibt den Beitrag einer Aufgabe zu Zielen, Pflichten oder wesentlichen Ergebnissen. Dringlichkeit beschreibt dagegen, wie schnell gehandelt werden muss, um eine Frist oder unmittelbare Folge zu berücksichtigen.',
          ],
          'Beide Merkmale werden getrennt bewertet. Eine laute Anfrage kann dringend wirken, ohne für die wichtigsten Ziele bedeutsam zu sein. Umgekehrt kann die Vorbereitung einer strategisch wichtigen Entscheidung noch keine enge Frist haben und trotzdem hohe Aufmerksamkeit verdienen.',
        ],
        matrixCards: [
          {
            title: 'Eisenhower-Matrix',
            cells: [
              { code: 'A', title: 'Wichtig & dringend', context: 'sofort erledigen', text: 'Zeitkritische Aufgaben mit wesentlichen Folgen selbst oder durch klar verantwortliche Personen unmittelbar bearbeiten.' },
              { code: 'B', title: 'Wichtig & nicht dringend', context: 'planen', text: 'Zeit und Termin bewusst reservieren, damit wichtige Vorhaben nicht erst durch Aufschub zu dringenden Problemen werden.' },
              { code: 'C', title: 'Nicht wichtig & dringend', context: 'delegieren', text: 'Prüfen, ob eine geeignete Person die Aufgabe mit klarer Zuständigkeit, Befugnis und Rückmeldung übernehmen kann.' },
              { code: 'D', title: 'Nicht wichtig & nicht dringend', context: 'reduzieren oder weglassen', text: 'Nutzen prüfen, vereinfachen, bündeln, automatisieren oder auf die Aufgabe verzichten, sofern keine Pflicht oder Abhängigkeit entgegensteht.' },
            ],
          },
        ],
      },
      {
        heading: 'Wichtig und dringend: sofort bearbeiten',
        paragraphs: [
          'In diesen Quadranten gehören Aufgaben mit engem Zeitfenster und erheblichen Folgen, beispielsweise ein kritischer Systemausfall, eine heute endende Frist oder eine akute Lieferstörung bei einem wichtigen Auftrag. „Sofort“ bedeutet, die Bearbeitung unverzüglich verantwortlich zu organisieren – nicht zwingend, dass die Führungskraft jeden Schritt selbst ausführt.',
          'Treten hier regelmäßig dieselben Aufgaben auf, lohnt eine Ursachenanalyse. Frühere Planung, Vertretungsregeln, Wartung oder klare Eskalationswege können verhindern, dass vermeidbare Themen ständig zu Krisen werden.',
        ],
        exampleCards: [
          {
            title: 'Ausfall vor einer Kundenlieferung',
            paragraphs: ['Am Vormittag fällt die Maschine aus, die für eine am selben Tag zugesagte Lieferung benötigt wird. Liefertermin und Kundenbeziehung sind betroffen. Die Betriebsleitung organisiert sofort technische Prüfung, eine mögliche Ersatzfertigung und eine verlässliche Kundeninformation.'],
            effects: ['wichtig: erhebliche Auswirkung auf Leistung und Kundenbeziehung', 'dringend: nur ein sehr kurzes Reaktionsfenster', 'Maßnahme: Bearbeitung und Verantwortlichkeiten sofort koordinieren'],
          },
        ],
      },
      {
        heading: 'Wichtig und nicht dringend: verbindlich planen',
        paragraphs: [
          'Hier liegen häufig Aufgaben mit langfristiger Wirkung: Weiterbildung, Prozessverbesserung, Strategiearbeit, Vorsorge oder der Aufbau einer Vertretung. Weil kein unmittelbarer Zeitdruck besteht, werden sie leicht von neuen Anfragen verdrängt.',
          'Eine typische Maßnahme ist, konkrete Termine, Zeitbudgets und Zwischenergebnisse festzulegen. Die Verbindung mit klaren Zielen erleichtert die Entscheidung, welche Vorhaben tatsächlich wichtig sind und wann ihr Fortschritt überprüft wird.',
        ],
        exampleCards: [
          {
            title: 'Vertretung für die Buchhaltung vorbereiten',
            paragraphs: ['Im Betrieb gibt es derzeit keinen akuten Ausfall. Dennoch soll vor der Urlaubszeit eine zweite Person die zentralen Abläufe kennen. Die Geschäftsführung plant Schulungstermine, dokumentiert Aufgaben und prüft den Ablauf in einem Testlauf.'],
            effects: ['wichtig: sichert einen kritischen Geschäftsprozess', 'nicht dringend: aktuell besteht keine Störung', 'Maßnahme: feste Termine und überprüfbare Schritte einplanen'],
          },
        ],
      },
      {
        heading: 'Nicht wichtig und dringend: Delegation prüfen',
        paragraphs: [
          [
            'Manche Aufgaben müssen zeitnah erledigt werden, tragen aber wenig zu den eigenen Kernaufgaben bei. Dann kann ',
            { type: 'glossary', id: 'delegation', text: 'Delegation' },
            ' sinnvoll sein. Sie setzt eine geeignete Person sowie klare Aufgaben, Befugnisse, Informationen, Termine und Rückmeldungen voraus.',
          ],
          '„Nicht wichtig“ heißt dabei nicht bedeutungslos. Die Bewertung bezieht sich auf die Rolle und die betrachteten Ziele. Eine Aufgabe kann für die Führungskraft delegierbar und für die zuständige Fachperson sehr wohl wichtig sein. Rechtliche oder organisatorische Verantwortung lässt sich außerdem nicht in jedem Fall vollständig übertragen.',
        ],
        exampleCards: [
          {
            title: 'Kurzfristige Terminbestätigung',
            paragraphs: ['Ein Lieferant bittet noch heute um Bestätigung eines bereits abgestimmten Termins. Für die Geschäftsführung ist die Aufgabe nicht strategisch wichtig, eine zuständige Einkaufsmitarbeiterin verfügt aber über alle Informationen und die nötige Befugnis.'],
            effects: ['dringend: der Lieferant benötigt heute eine Antwort', 'für die Rolle nicht wichtig: keine Leitungsentscheidung erforderlich', 'Maßnahme: mit klarer Zuständigkeit delegieren'],
          },
        ],
      },
      {
        heading: 'Nicht wichtig und nicht dringend: reduzieren oder weglassen',
        paragraphs: [
          'Aufgaben ohne erkennbaren Zielbeitrag und ohne zeitliche Notwendigkeit sollten hinterfragt werden. Möglich sind Weglassen, Vereinfachen, Bündeln oder Automatisieren. Das schafft Raum für wichtigere Arbeit.',
          'Vor dem Streichen ist zu prüfen, ob Pflichten, Qualitätsanforderungen oder Abhängigkeiten übersehen wurden. Eine seltene Kontrollaufgabe kann beispielsweise unscheinbar wirken und dennoch einen wichtigen Schutz erfüllen.',
        ],
      },
      {
        heading: 'So lässt sich die Matrix im Alltag nutzen',
        paragraphs: [
          'Sammle zunächst Aufgaben für einen überschaubaren Zeitraum und bewerte sie anhand derselben Ziele und Verantwortungsrolle. Kläre bei Wichtigkeit den erwarteten Beitrag oder möglichen Schaden und bei Dringlichkeit die reale Frist sowie die Folgen eines Aufschubs.',
          'Ordne die Aufgaben anschließend vorläufig ein und überprüfe Grenzfälle. Aus jedem Quadranten folgt eine passende nächste Handlung, aber keine starre Vorschrift. Neue Informationen, veränderte Fristen oder Abhängigkeiten können eine Neueinordnung erforderlich machen.',
        ],
        list: [
          'betrachtete Rolle, Ziele und Zeitraum festlegen',
          'Aufgaben vollständig genug sammeln und konkret formulieren',
          'Wichtigkeit und Dringlichkeit getrennt begründen',
          'Aufgaben einem Quadranten zuordnen',
          'erledigen, planen, delegieren oder reduzieren',
          'Termine, Verantwortung und Ergebnisse regelmäßig überprüfen',
        ],
      },
      {
        heading: 'Priorisierung und Delegation verbinden',
        paragraphs: [
          [
            'Die Matrix ergänzt andere Ansätze zur Priorisierung. Das ',
            { type: 'link', href: '/wissen/pareto-prinzip', text: 'Pareto-Prinzip' },
            ' fragt nach besonders wirkungsstarken Beiträgen; ein ',
            { type: 'link', href: '/wissen/zielsysteme-smart-ziele', text: 'Zielsystem' },
            ' schafft den Maßstab dafür, was als wichtig gelten soll. Die Eisenhower-Matrix ergänzt die zeitliche Dimension und übersetzt die Bewertung in nächste Handlungen.',
          ],
          'Delegation ist keine Ablage für unangenehme Aufgaben. Sie soll Arbeit passend zu Rolle und Fähigkeiten verteilen. Führung bleibt dafür verantwortlich, geeignete Rahmenbedingungen zu schaffen und vereinbarte Rückmeldungen zu verfolgen.',
        ],
      },
      {
        heading: 'Grenzen des Modells',
        paragraphs: [
          'Wichtigkeit und Dringlichkeit sind nicht immer eindeutig oder binär. Aufgaben können mehrere Ziele betreffen, voneinander abhängen oder bei Aufschub rasch dringender werden. Auch Teamkapazität, Fachwissen, Risiken und gesetzliche Vorgaben beeinflussen die Entscheidung.',
          'Die Matrix sollte deshalb als Gesprächs- und Planungshilfe verwendet werden. Sie ersetzt keine fachliche Risikobewertung, keine Kapazitätsplanung und keine Klärung von Verantwortung. Besonders bei Sicherheits-, Personal- oder Rechtsthemen ist der konkrete Kontext entscheidend.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Eisenhower-Matrix trennt Wichtigkeit und Dringlichkeit bewusst voneinander',
    'Die vier typischen Maßnahmen lauten erledigen, planen, delegieren und reduzieren',
    'Dringlichkeit allein macht eine Aufgabe nicht wichtig',
    'Delegation benötigt klare Zuständigkeit, Befugnisse, Informationen und Rückmeldung',
    'Kontext, Verantwortung, Risiken und Abhängigkeiten können die Einordnung verändern',
  ],
  commonMistakes: [
    'jede kurzfristige Anfrage automatisch als wichtig einstufen',
    'Wichtigkeit ohne Bezug zu Zielen, Pflichten oder möglichen Folgen bewerten',
    'wichtige, aber nicht dringende Aufgaben ohne festen Termin aufschieben',
    'delegieren, ohne Aufgabe, Befugnis, Termin und Rückmeldung zu klären',
    'nicht wichtige Aufgaben mit für andere Rollen unwichtigen Aufgaben gleichsetzen',
    'Pflichten oder seltene Risiken wegen geringer Dringlichkeit übersehen',
    'die erste Einordnung trotz neuer Informationen unverändert beibehalten',
  ],
  faqs: [
    {
      question: 'Welche vier Quadranten hat die Eisenhower-Matrix?',
      answer: 'Sie unterscheidet wichtig und dringend, wichtig und nicht dringend, nicht wichtig und dringend sowie nicht wichtig und nicht dringend.',
    },
    {
      question: 'Was ist der Unterschied zwischen wichtig und dringend?',
      answer: 'Wichtigkeit bezieht sich auf Ziele, Pflichten und Folgen. Dringlichkeit beschreibt das verfügbare Zeitfenster und die Folgen eines Aufschubs.',
    },
    {
      question: 'Muss jede dringende Aufgabe sofort selbst erledigt werden?',
      answer: 'Nein. Ist sie für die eigene Rolle nicht wichtig, kann eine fachlich und organisatorisch saubere Delegation sinnvoll sein.',
    },
    {
      question: 'Was gehört in den Planen-Quadranten?',
      answer: 'Dorthin gehören wichtige Aufgaben ohne akuten Zeitdruck, etwa Vorsorge, Weiterbildung, Strategie oder Prozessverbesserung.',
    },
    {
      question: 'Ist die Eisenhower-Matrix eine feste Regel?',
      answer: 'Nein. Sie ist eine Orientierungshilfe; Verantwortung, Risiken, Abhängigkeiten und neue Informationen müssen zusätzlich berücksichtigt werden.',
    },
  ],
  related: ['pareto-prinzip', 'delegation', 'zielsysteme-smart-ziele'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default eisenhowerMatrix;
