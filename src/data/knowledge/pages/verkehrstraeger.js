import { defaultDisclaimer } from '../shared.js';

const verkehrstraeger = {
  slug: 'verkehrstraeger',
  category: 'Supply Chain & Logistik',
  title: 'Verkehrsträger im Güterverkehr',
  description: 'Verkehrsträger im Güterverkehr einfach erklärt: Straße, Schiene, Schiff, Luftfracht und intermodalen Verkehr passend zu Sendung, Strecke und Anforderungen vergleichen.',
  seo: {
    title: 'Verkehrsträger im Güterverkehr | Belege24',
    description: 'Vergleiche Straße, Schiene, Seeschifffahrt, Binnenschifffahrt, Luftfracht und intermodalen Verkehr nach Zeit, Kapazität, Flexibilität und Rahmenbedingungen.',
    canonicalPath: '/wissen/verkehrstraeger',
  },
  article: {
    intro: 'Verkehrsträger sind die Wege, auf denen Güter transportiert werden: etwa per Straße, Schiene, Schiff oder Flugzeug. Welche Lösung passt, hängt nicht nur von den Frachtkosten ab, sondern auch von Strecke, Menge, Zeitbedarf, Infrastruktur, Ware und den Anforderungen des konkreten Auftrags.',
    sections: [
      {
        heading: 'Was sind Verkehrsträger?',
        paragraphs: [
          [
            { type: 'glossary', id: 'verkehrstraeger', text: 'Verkehrsträger' },
            ' unterscheiden sich darin, auf welcher Infrastruktur Güter bewegt werden: Straßen, Schienen, Seewege, Binnenwasserstraßen oder in der Luft. Jeder Verkehrsträger hat eigene Stärken und Grenzen bei Kapazität, Laufzeit, Erreichbarkeit und Planbarkeit.',
          ],
          [
            'Die Wahl ist Teil der ',
            { type: 'link', href: '/wissen/transportlogistik', text: 'Transportlogistik' },
            '. Sie sollte den gesamten Weg einbeziehen: Abholung, mögliche Umschläge, Hauptlauf und Zustellung. Eine schnelle Hauptstrecke bringt wenig, wenn Vor- oder Nachlauf lange dauern oder die passende Infrastruktur am Start oder Ziel fehlt.',
          ],
        ],
      },
      {
        heading: 'Straße und Schiene',
        paragraphs: [
          'Der Straßengüterverkehr ist meist räumlich flexibel, weil er viele Abhol- und Zielorte direkt erreichen kann. Er eignet sich oft für regionale und nationale Verkehre, unterschiedliche Sendungsgrößen sowie zeitlich flexible Abholungen und Zustellungen. Seine Kapazität ist je Fahrzeug begrenzt; Verkehrsaufkommen, Fahrverbote, Fahrpersonal und Straßeninfrastruktur können die Planung beeinflussen.',
          'Die Schiene kann große Mengen über längere Strecken bündeln. Sie ist an Gleise, Terminals, Fahrpläne und freie Kapazitäten gebunden. Für viele Start- und Zielorte sind deshalb zusätzliche Vor- und Nachläufe nötig. Das kann sinnvoll sein, wenn Mengen, Relationen und Zeitfenster zu einem planbaren Bahntransport passen; bei sehr kleinen oder kurzfristigen Sendungen kann der Koordinationsaufwand höher sein.',
        ],
      },
      {
        heading: 'See- und Binnenschifffahrt',
        paragraphs: [
          'Die Seeschifffahrt verbindet vor allem internationale Hafenstandorte und kann große Mengen, Container oder Massengüter über weite Distanzen transportieren. Typisch sind hohe Kapazitäten pro Schiff und längere Laufzeiten. Häfen, Fahrpläne, Umschläge, Wetter, verfügbare Schiffsräume und der anschließende Landtransport beeinflussen den Ablauf.',
          'Die Binnenschifffahrt nutzt Flüsse und Kanäle. Sie kann sich für große, nicht besonders zeitkritische Mengen eignen, wenn Wasserstraßen und Häfen passend angebunden sind. Wasserstände, Schleusen, saisonale Bedingungen und die begrenzte Erreichbarkeit bestimmen ihre Einsatzmöglichkeiten. Wie bei der Seeschifffahrt ist oft ein Vor- oder Nachlauf per Straße oder Schiene erforderlich.',
        ],
      },
      {
        heading: 'Luftfracht',
        paragraphs: [
          'Luftfracht wird häufig genutzt, wenn Güter über große Entfernungen besonders schnell verfügbar sein müssen, zum Beispiel bei zeitkritischen Ersatzteilen oder hochwertigen, leichten Waren. Die Beförderung in der Luft ist schnell, der gesamte Transport enthält aber zusätzlich Abholung, Sicherheits- und Abfertigungsprozesse sowie Vor- und Nachlauf.',
          'Kapazität, zulässige Güter, Gewicht, Volumen, Abflugmöglichkeiten und Flughafenzugang begrenzen den Einsatz. Die Kostenstruktur ist im Verhältnis zur beförderten Menge oft anders als bei land- oder seegestützten Transporten. Daher ist Luftfracht keine Standardlösung für jede dringende Sendung, sondern muss zum Wert, Termin und Risiko der Ware passen.',
        ],
      },
      {
        heading: 'Kombinierter und intermodaler Verkehr',
        paragraphs: [
          [
            'Im ',
            { type: 'glossary', id: 'intermodaler-verkehr', text: 'intermodalen Verkehr' },
            ' wird eine Transporteinheit oder Sendung auf mehreren Verkehrsträgern bewegt, etwa Lkw – Bahn – Lkw. Kombinierter Verkehr ist eine gängige Form davon: Der Hauptlauf erfolgt häufig per Bahn oder Schiff, während die Straße den Vor- und Nachlauf übernimmt.',
          ],
          'Die Kombination kann Reichweite, Kapazität und Flexibilität sinnvoll verbinden. Sie braucht jedoch passende Terminals, abgestimmte Zeitfenster, zuverlässige Umschläge und gute Informationen. Jeder Wechsel kann zusätzliche Zeit, Kosten und das Risiko von Verzögerungen oder Schäden mit sich bringen.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Verkehrsträger passend zum Auftrag einordnen',
            formula: 'Straße: hohe Ortsflexibilität, begrenzte Fahrzeugkapazität\nSchiene: große Mengen, terminal- und fahrplangebunden\nSchiff: hohe Kapazität, wasserweg- und hafenabhängig\nLuftfracht: kurze Beförderungszeit, flughafen- und güterabhängig\nIntermodal: Verkehrsträger kombinieren, Umschläge koordinieren',
            description: 'Geschwindigkeit, Kosten, Reichweite und Auswirkungen eines Transports hängen immer von Strecke, Menge, Auslastung, Infrastruktur, Umschlägen, Zeitfenster und Ware ab. Kein Verkehrsträger ist für jeden Auftrag generell günstiger oder nachhaltiger.',
          },
        ],
      },
      {
        heading: 'Praxis: Transport nicht nur nach einem Kriterium auswählen',
        paragraphs: [
          'Für die Auswahl werden Zeitbedarf, Sendungsgröße, Gewicht, Volumen, Entfernung, Empfindlichkeit der Ware, verfügbare Infrastruktur, Lieferversprechen und mögliche Störungen gemeinsam betrachtet. Auch die Frachtkosten sollten den gesamten Ablauf abbilden: Neben dem Haupttransport können Abholung, Umschlag, Verpackung, Wartezeiten und Nachlauf relevant sein.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Maschinenbauteil von Norddeutschland nach Süddeutschland',
            paragraphs: [
              'Ein schweres Ersatzteil soll innerhalb von zwei Tagen beim Kunden sein. Die Straße kann eine direkte Abholung und Zustellung ermöglichen. Ein Bahntransport könnte für größere, planbare Mengen sinnvoll sein, benötigt für dieses einzelne Teil aber passende Terminals sowie Vor- und Nachlauf.',
              'Luftfracht wäre nur dann naheliegend, wenn Größe, Gewicht und die Folgen eines Verzugs die zusätzlichen Abläufe rechtfertigen. Die Entscheidung entsteht deshalb aus zugesagtem Termin, Ware, vorhandenen Verbindungen und Gesamtkosten – nicht allein aus der Geschwindigkeit eines Verkehrsträgers.',
            ],
            effects: [
              'Direkte Straßenbeförderung: wenige Übergaben und hohe Ortsflexibilität möglich.',
              'Bahn- oder Kombiverkehr: bei passenden Mengen und Relationen Bündelung möglich, aber mit Umschlag- und Terminalplanung.',
              'Luftfracht: kurze Beförderungszeit, aber nur bei passender Ware, Verbindung und Gesamtprozess sinnvoll.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, nur die Strecke auf einer Karte zu betrachten. Entscheidend sind auch Abhol- und Zustellmöglichkeiten, Umschlagpunkte, Ladezeiten und verlässliche Kapazitäten.',
          'Ebenso irreführend ist es, einen Verkehrsträger pauschal als günstig, schnell oder nachhaltig zu bezeichnen. Solche Eigenschaften verändern sich mit Menge, Auslastung, Strecke, Infrastruktur und konkretem Ablauf.',
          'Beim intermodalen Verkehr werden zudem Übergaben manchmal zu knapp geplant. Ohne realistische Zeitfenster und klare Zuständigkeiten kann der Vorteil eines guten Hauptlaufs durch Wartezeit oder Verzögerungen verloren gehen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Verkehrsträger sind Straße, Schiene, Seeschifffahrt, Binnenschifffahrt, Luftfracht und ihre Kombinationen.',
    'Die passende Lösung richtet sich nach Strecke, Menge, Zeitbedarf, Ware, Infrastruktur, Umschlag und verfügbarem Transportnetz.',
    'Straße bietet häufig direkte Ortsflexibilität; Schiene und Schiff können große Mengen bündeln, benötigen aber passende Infrastruktur.',
    'Luftfracht verkürzt die Beförderungszeit, muss aber einschließlich Abfertigung sowie Vor- und Nachlauf beurteilt werden.',
    'Intermodaler Verkehr verbindet Verkehrsträger, erhöht aber die Anforderungen an Umschlag und Planung.',
    'Kosten und Auswirkungen sind auftragsspezifisch – kein Verkehrsträger ist pauschal die beste Lösung.',
  ],
  commonMistakes: [
    'nur die reine Fahr- oder Flugzeit statt des gesamten Transportablaufs vergleichen',
    'Abholung, Nachlauf, Terminalzugang und Umschlag bei der Auswahl ausblenden',
    'Verkehrsträger unabhängig von Menge, Strecke und Infrastruktur pauschal bewerten',
    'intermodalen Verkehr ohne ausreichende Zeitfenster und Zuständigkeiten planen',
    'Frachtkosten mit allen Kosten und Folgen des Gesamtprozesses gleichsetzen',
  ],
  faqs: [
    { question: 'Welche Verkehrsträger gibt es im Güterverkehr?', answer: 'Typisch sind Straße, Schiene, Seeschifffahrt, Binnenschifffahrt und Luftfracht. Im intermodalen Verkehr werden mehrere davon kombiniert.' },
    { question: 'Welcher Verkehrsträger ist am günstigsten?', answer: 'Das lässt sich nicht pauschal sagen. Strecke, Menge, Auslastung, Umschlag, Zeitfenster, Infrastruktur und Ware beeinflussen die Kostenstruktur.' },
    { question: 'Was bedeutet intermodaler Verkehr?', answer: 'Dabei wird eine Sendung oder Transporteinheit mit mehreren Verkehrsträgern bewegt, zum Beispiel per Lkw zum Terminal, per Bahn im Hauptlauf und wieder per Lkw zum Ziel.' },
    { question: 'Wann ist Luftfracht sinnvoll?', answer: 'Sie kann bei zeitkritischen, passenden Gütern über große Entfernungen sinnvoll sein. Entscheidend sind auch Abfertigung, Vor- und Nachlauf, Kapazität sowie Kosten des Gesamtprozesses.' },
    { question: 'Warum braucht Bahn- oder Schiffstransport oft einen Lkw?', answer: 'Start- und Zielorte liegen häufig nicht direkt an Terminal, Hafen oder Gleisanschluss. Der Lkw kann deshalb Abholung oder Zustellung im Vor- und Nachlauf übernehmen.' },
  ],
  related: ['transportlogistik', 'spedition-frachtfuehrer', 'beschaffungslogistik', 'distributionslogistik'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default verkehrstraeger;
