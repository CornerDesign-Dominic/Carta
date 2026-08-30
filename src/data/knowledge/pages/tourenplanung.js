import { defaultDisclaimer } from '../shared.js';

const tourenplanung = {
  slug: 'tourenplanung',
  category: 'Supply Chain & Logistik',
  title: 'Tourenplanung',
  description: 'Tourenplanung einfach erklärt: Aufträge, Fahrzeuge, Stopps, Zeitfenster und Kapazitäten so koordinieren, dass Kosten, Zeit und Service zusammenpassen.',
  seo: {
    title: 'Tourenplanung einfach erklärt | Belege24',
    description: 'Erfahre, wie Tourenplanung Stopps, Fahrzeuge, Zeitfenster, Kapazitäten, Reihenfolge und Auslastung für zuverlässige Lieferungen koordiniert.',
    canonicalPath: '/wissen/tourenplanung',
  },
  article: {
    intro: 'Tourenplanung ordnet mehrere Transportaufträge, Fahrzeuge und Stopps zu sinnvollen Fahrten. Ziel ist, Lieferungen zuverlässig zu erfüllen und dabei Fahrzeit, Kapazität, Auslastung, Kosten und vereinbarte Zeitfenster gemeinsam zu berücksichtigen.',
    sections: [
      {
        heading: 'Was ist Tourenplanung?',
        paragraphs: [
          [
            { type: 'glossary', id: 'tourenplanung', text: 'Tourenplanung' },
            ' entscheidet, welches Fahrzeug welche Aufträge in welcher Reihenfolge anfährt. Eine Tour kann Abholungen, Zustellungen oder beides enthalten. Sie verbindet Auftragsdaten mit Fahrzeugen, Fahrern, Entfernungen und zeitlichen Vorgaben.',
          ],
          'Bei wenigen Stopps kann eine Tour einfach manuell geplant werden. Mit vielen Kunden, Fahrzeugen, unterschiedlichen Waren oder engen Lieferfenstern steigt die Zahl der Abhängigkeiten schnell. Dann helfen klare Planungsregeln und gegebenenfalls Software, die aktuelle Daten zu Aufträgen, Kapazitäten und Fahrzeiten verarbeitet.',
          [
            'Tourenplanung ist ein Teil der ',
            { type: 'link', href: '/wissen/transportlogistik', text: 'Transportlogistik' },
            '. Ob eine geplante Tour ihre Zusagen einhält, lässt sich unter anderem mit Kennzahlen zur ',
            { type: 'link', href: '/wissen/liefertermintreue-servicegrad', text: 'Liefertermintreue & Servicegrad' },
            ' beurteilen.',
          ],
        ],
      },
      {
        heading: 'Wichtige Planungsdaten',
        paragraphs: [
          'Für jeden Auftrag sind unter anderem Abhol- oder Lieferort, Menge, Gewicht, Volumen, Ladehilfsmittel, benötigte Fahrzeugart und vereinbarter Termin wichtig. Entfernungen und erwartete Fahrzeiten bilden die Grundlage für eine realistische Reihenfolge. Verkehr, Baustellen, Wartezeiten und Zugangsbeschränkungen können sie verändern.',
          [
            'Ein ',
            { type: 'glossary', id: 'zeitfenster-logistik', text: 'Zeitfenster' },
            ' kann festlegen, wann eine Abholung oder Anlieferung erfolgen soll. Es schränkt die Reihenfolge der Stopps ein: Eine kurze Strecke ist nicht sinnvoll, wenn das Fahrzeug dort zu früh oder zu spät ankommt.',
          ],
          'Auch Fahrzeugkapazität und Lade- beziehungsweise Entladereihenfolge müssen passen. Ware für den ersten Stopp sollte erreichbar sein, ohne andere Sendungen unnötig umzusetzen. Bei temperaturgeführten, gefährlichen oder besonders empfindlichen Gütern kommen weitere Anforderungen hinzu.',
        ],
      },
      {
        heading: 'Fahrzeugauslastung und Leerfahrten',
        paragraphs: [
          'Eine gute Auslastung kann die Kosten je transportierter Einheit senken und unnötige Fahrten vermeiden. Sie ist aber nur eines von mehreren Zielen. Ein voll ausgelastetes Fahrzeug kann unpassend sein, wenn es dadurch ein Lieferfenster verfehlt, die maximale Ladezeit überschreitet oder zu viele Umwege fährt.',
          [
            'Eine ',
            { type: 'glossary', id: 'leerfahrt', text: 'Leerfahrt' },
            ' liegt vor, wenn ein Fahrzeug ganz oder teilweise ohne Ladung fährt. Sie lässt sich zum Beispiel durch Rückladungen, abgestimmte Abholungen oder passende Gebietsplanung verringern. Vollständig vermeiden lässt sie sich nicht in jedem Netz und darf nicht zu unwirtschaftlichen Umwegen führen.',
          ],
        ],
      },
      {
        heading: 'Feste und dynamische Touren',
        paragraphs: [
          'Feste Touren wiederholen sich nach einem stabilen Muster, etwa an bestimmten Wochentagen für dieselben Gebiete. Sie erleichtern Abstimmung und Planung, reagieren aber weniger flexibel auf neue Aufträge, Schwankungen oder Störungen.',
          'Dynamische Touren werden anhand der aktuellen Aufträge, Kapazitäten und Bedingungen geplant oder angepasst. Das kann Wege und Auslastung verbessern, braucht aber verlässliche Stammdaten, laufende Rückmeldungen und klare Regeln, wann eine bereits kommunizierte Tour noch geändert werden darf.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Tourenplanung in der Praxis',
            formula: 'Aufträge erfassen → Bedingungen prüfen → Fahrzeuge zuordnen → Stoppreihenfolge planen → Tour kommunizieren → Abweichungen nachsteuern',
            description: 'Bei jedem Schritt müssen Zeitfenster, Kapazität, Ladefolge, Fahrzeit, Fahrer- und Fahrzeugverfügbarkeit sowie mögliche Störungen berücksichtigt werden.',
          },
        ],
      },
      {
        heading: 'Lenk- und Ruhezeiten nur grundsätzlich',
        paragraphs: [
          'Bei Straßentransporten müssen anwendbare Vorgaben zu Lenkzeiten, Fahrtunterbrechungen und Ruhezeiten in die Tour eingeplant werden. Sie können beeinflussen, wann ein Fahrer einen Stopp erreichen kann und ob für eine Route ein Fahrerwechsel, eine Übernachtung oder ein anderer Ablauf nötig ist.',
          'Welche Vorschriften im konkreten Fall gelten, hängt unter anderem von Fahrzeug, Einsatz und Transportart ab. Die Tourenplanung sollte daher mit aktuellen Fahrer- und Einsatzdaten arbeiten und rechtliche Anforderungen nicht durch unrealistische Zeitvorgaben unterlaufen.',
        ],
      },
      {
        heading: 'Milk Run und Softwareunterstützung',
        paragraphs: [
          [
            'Ein ',
            { type: 'link', href: '/wissen/milk-run', text: 'Milk Run' },
            ' ist ein spezielles Tourenkonzept mit einer festen oder wiederkehrenden Route, auf der mehrere Lieferanten oder Empfänger angefahren werden. Er ist keine allgemeine Ersatzlösung für jede Tour, kann aber bei regelmäßigen Mengen und abgestimmten Zeitfenstern die Bündelung unterstützen.',
          ],
          'Tourenplanungssoftware kann Entfernungen, voraussichtliche Fahrzeiten, Kapazitäten, Zeitfenster und Statusmeldungen zusammenführen. Sie liefert Vorschläge, ersetzt aber keine fachliche Prüfung: unvollständige Auftragsdaten, falsche Fahrzeugstammdaten oder nicht abgebildete Zufahrtsbedingungen können auch in einer automatisch geplanten Tour zu schlechten Ergebnissen führen.',
        ],
      },
      {
        heading: 'Beispiel: Drei Zustellungen mit Randbedingungen',
        paragraphs: [
          'Ein Fahrzeug startet morgens im Depot und soll drei Kunden beliefern. Kunde A liegt nah am Depot, kann aber erst ab 10 Uhr annehmen. Kunde B hat ein enges Zeitfenster von 9 bis 10 Uhr. Kunde C liegt auf dem Rückweg und benötigt nur eine kleine Menge. Die Ware für B ist schwer und soll deshalb zuerst geladen werden.',
        ],
        exampleCards: [
          {
            title: 'Tour: Depot → B → A → C → Depot',
            paragraphs: [
              'Die Tour fährt zunächst zu B, damit dessen Zeitfenster eingehalten wird. Danach ist A erreichbar, ohne dass dort unnötig gewartet werden muss. C wird auf dem Rückweg bedient. Die Ladefolge stellt sicher, dass die schwere Ware für B zuerst entladen werden kann.',
              'Eine scheinbar kürzere Reihenfolge Depot → A → B → C wäre trotz kurzer Strecke ungeeignet: Das Fahrzeug käme bei A vor Öffnung an oder würde so lange warten, dass B sein Zeitfenster verpasst. Die beste Tour ist deshalb nicht immer die mit den wenigsten Kilometern.',
            ],
            effects: [
              'Zeitfenster und Ladefolge bestimmen die Reihenfolge der Stopps mit.',
              'Die Auslastung bleibt wichtig, darf aber Termin- und Sicherheitsanforderungen nicht überstimmen.',
              'Bei Verzögerungen muss geprüft werden, welche Kunden informiert oder welche Stopps angepasst werden können.',
            ],
          },
        ],
      },
      {
        heading: 'Zielkonflikte und typische Fehler',
        paragraphs: [
          'Tourenplanung balanciert Kosten, Zeit und Service. Mehr Stopps können die Auslastung verbessern, verlängern aber Tour und Abwicklung. Kürzere Wege können gegenüber festen Kundenterminen oder einer sinnvollen Ladefolge nachrangig sein. Hohe Serviceanforderungen können zusätzliche Kapazität oder Reservefahrzeuge erfordern.',
          'Häufige Fehler sind zu knappe Fahrzeiten, fehlende Puffer für Laden und Entladen, unpassende Ladefolgen und die Annahme, dass eine Route nach der Abfahrt nicht mehr kontrolliert werden muss. Rückmeldungen aus der Fahrt helfen, Abweichungen früh zu erkennen und Folgetouren besser zu planen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Tourenplanung ordnet mehrere Aufträge, Stopps und Fahrzeuge zu realistischen Fahrten.',
    'Entfernung, Fahrzeit, Zeitfenster, Kapazität und Ladefolge beeinflussen die passende Stoppreihenfolge.',
    'Hohe Auslastung ist sinnvoll, darf aber Termin-, Sicherheits- und Prozessanforderungen nicht verdrängen.',
    'Feste Touren erleichtern wiederkehrende Abläufe; dynamische Touren reagieren besser auf aktuelle Änderungen.',
    'Lenk-, Unterbrechungs- und Ruhezeiten müssen bei betroffenen Straßentransporten berücksichtigt werden.',
    'Software kann Vorschläge liefern, braucht aber korrekte Auftrags- und Stammdaten.',
  ],
  commonMistakes: [
    'Stoppreihenfolge nur nach Entfernung statt auch nach Zeitfenstern, Ladefolge und Kapazität planen',
    'Lade-, Entlade-, Warte- und Pufferzeiten aus der Tourdauer ausblenden',
    'Fahrzeugauslastung priorisieren, obwohl Termine oder Warenanforderungen dagegen sprechen',
    'anwendbare Lenk- und Ruhezeiten erst nach der Tourenplanung prüfen',
    'automatisch erzeugte Touren ohne Prüfung von Stammdaten, Zufahrten und realen Bedingungen übernehmen',
  ],
  faqs: [
    { question: 'Was ist Tourenplanung?', answer: 'Tourenplanung legt fest, welches Fahrzeug welche Aufträge in welcher Reihenfolge anfährt. Sie koordiniert Stopps, Zeitfenster, Kapazitäten und Fahrzeiten.' },
    { question: 'Warum ist die kürzeste Strecke nicht immer die beste Tour?', answer: 'Zeitfenster, Ladefolge, Fahrzeugkapazität, Fahr- und Wartezeiten können eine andere Reihenfolge sinnvoll oder notwendig machen.' },
    { question: 'Was ist der Unterschied zwischen festen und dynamischen Touren?', answer: 'Feste Touren folgen einem wiederkehrenden Muster. Dynamische Touren werden anhand aktueller Aufträge und Bedingungen geplant oder angepasst.' },
    { question: 'Was bringt Tourenplanungssoftware?', answer: 'Sie kann Daten bündeln und passende Tourvorschläge erstellen. Die Vorschläge sind nur so gut wie die Auftragsdaten, Stammdaten und hinterlegten Regeln.' },
    { question: 'Was ist ein Milk Run?', answer: 'Ein Milk Run ist eine wiederkehrende Tour, die mehrere Lieferanten oder Empfänger bündelt. Er eignet sich vor allem bei abgestimmten, regelmäßigen Mengen und Zeitfenstern.' },
  ],
  related: ['milk-run', 'transportlogistik', 'liefertermintreue-servicegrad', 'verkehrstraeger'],
  sources: [
    { label: 'Verordnung (EG) Nr. 561/2006 – Lenkzeiten, Fahrtunterbrechungen und Ruhezeiten', url: 'https://eur-lex.europa.eu/legal-content/DE/LSU/?uri=CELEX%3A32006R0561' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default tourenplanung;
