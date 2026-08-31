import { defaultDisclaimer } from '../shared.js';

const marketingMix = {
  slug: 'marketing-mix',
  category: 'Marketing & Vertrieb',
  title: 'Marketing-Mix und 4P',
  description: 'Der Marketing-Mix verbindet Produkt, Preis, Vertrieb und Kommunikation zu einem abgestimmten Marktauftritt.',
  seo: {
    title: 'Marketing-Mix und 4P einfach erklärt | Belege24',
    description: 'Product, Price, Place und Promotion verständlich einordnen und ihr Zusammenspiel an einem kompakten Praxisbeispiel nachvollziehen.',
    canonicalPath: '/wissen/marketing-mix',
  },
  article: {
    intro: 'Der Marketing-Mix bündelt die Entscheidungen, mit denen ein Unternehmen ein Angebot für einen Markt gestaltet und vermarktet. Das klassische 4P-Modell ordnet diese Entscheidungen den Bereichen Product, Price, Place und Promotion zu.',
    sections: [
      {
        heading: 'Was bedeutet Marketing-Mix?',
        paragraphs: [
          'Marketing umfasst mehr als Werbung. Ein überzeugendes Angebot braucht eine passende Leistung, einen nachvollziehbaren Preis, geeignete Absatzwege und eine Kommunikation, die die richtigen Personen erreicht. Der Marketing-Mix hilft, diese Entscheidungen zusammen zu betrachten.',
          [
            'Ausgangspunkt sind die Bedürfnisse der ',
            { type: 'glossary', id: 'zielgruppe', text: 'Zielgruppe' },
            ', die Marktbedingungen und die angestrebte Positionierung. Die vier Bereiche sollten deshalb nicht unabhängig voneinander geplant werden.',
          ],
        ],
      },
      {
        heading: 'Die vier P im Überblick',
        matrixCards: [
          {
            title: 'Product, Price, Place und Promotion',
            cells: [
              { code: 'Product', title: 'Produktpolitik', context: 'Was wird angeboten?', text: 'Leistung, Qualität, Funktionen, Gestaltung, Sortiment, Service und gegebenenfalls Verpackung.' },
              { code: 'Price', title: 'Preispolitik', context: 'Zu welchen Bedingungen?', text: 'Preisniveau, Preismodell, Rabatte, Zahlungsbedingungen und wahrgenommenes Preis-Leistungs-Verhältnis.' },
              { code: 'Place', title: 'Distributionspolitik', context: 'Wie gelangt das Angebot zum Kunden?', text: 'Vertriebskanäle, Standorte, Onlineshop, Handelspartner, Logistik und Verfügbarkeit.' },
              { code: 'Promotion', title: 'Kommunikationspolitik', context: 'Wie wird der Nutzen vermittelt?', text: 'Werbung, Verkaufsförderung, Öffentlichkeitsarbeit, persönlicher Verkauf und digitale Kommunikation.' },
            ],
          },
        ],
      },
      {
        heading: 'Product: das Angebot gestalten',
        paragraphs: [
          'Product umfasst das eigentliche Produkt oder die Dienstleistung und alle Merkmale, die den Kundennutzen prägen. Dazu gehören beispielsweise Qualität, Varianten, Bedienung, Zusatzleistungen, Garantie oder Service.',
          [
            'Entscheidungen sollten zur Zielgruppe und zur Lebensphase des Angebots passen. Der ',
            { type: 'link', href: '/wissen/produktlebenszyklus', text: 'Produktlebenszyklus' },
            ' kann helfen, typische Entwicklungen eines Angebots einzuordnen, liefert aber keine automatische Maßnahmenempfehlung.',
          ],
        ],
      },
      {
        heading: 'Price: Preis und Konditionen festlegen',
        paragraphs: [
          'Price betrifft nicht nur den Listenpreis. Auch Zahlungsbedingungen, Rabatte, Abonnements, Paketpreise oder unterschiedliche Leistungsstufen beeinflussen, wie Kunden das Angebot bewerten und welchen Erlös das Unternehmen erzielt.',
          'Der Preis muss zur Positionierung passen und zugleich Kosten, Nachfrage, Wettbewerb und Zahlungsbereitschaft berücksichtigen. Ein hochwertig positioniertes Angebot mit dauerhaftem Tiefpreis kann widersprüchliche Erwartungen auslösen.',
        ],
      },
      {
        heading: 'Place: den passenden Vertriebsweg wählen',
        paragraphs: [
          'Place beschreibt, wo und wie Kunden ein Angebot finden, kaufen und erhalten. Ein Unternehmen kann direkt über ein Ladengeschäft oder einen Onlineshop verkaufen, mit Handelspartnern arbeiten oder mehrere Kanäle verbinden.',
          'Der Kanal beeinflusst Reichweite, Kosten, Liefergeschwindigkeit, Beratung und Kontrolle über das Kundenerlebnis. Nicht jeder Kanal eignet sich für jedes Produkt oder jede Zielgruppe.',
        ],
      },
      {
        heading: 'Promotion: Nutzen verständlich kommunizieren',
        paragraphs: [
          'Promotion bündelt die Kommunikation rund um das Angebot. Entscheidend sind eine klare Botschaft, passende Kontaktpunkte und ein realistisches Versprechen. Kommunikation kann Aufmerksamkeit schaffen und erklären, sie kann ein unpassendes Produkt oder einen nicht nachvollziehbaren Preis aber nicht dauerhaft ausgleichen.',
          'Je nach Zielgruppe können persönliche Beratung, Empfehlungen, Suchmaschinen, Fachveranstaltungen, soziale Medien oder lokale Werbung unterschiedlich sinnvoll sein. Auswahl und Erfolgskriterien sollten vorab festgelegt werden.',
        ],
      },
      {
        heading: 'Praxisbeispiel: regionaler Fahrradservice',
        exampleCards: [
          {
            title: 'Vier abgestimmte Entscheidungen',
            paragraphs: ['Eine Werkstatt bietet einen mobilen Fahrradservice für kleine Unternehmen an. Sie wartet Beschäftigtenräder direkt am Standort und bündelt Termine je Betrieb. Der Preis wird als transparente Pauschale pro Rad angeboten. Gebucht wird über eine einfache Online-Terminseite; lokale Unternehmen werden persönlich und über regionale Unternehmensnetzwerke angesprochen.'],
            effects: ['Product: mobile Wartung mit klar definiertem Leistungsumfang', 'Price: planbare Pauschale statt unklarer Einzelpositionen', 'Place: Leistung am Unternehmensstandort, Buchung online', 'Promotion: direkte Ansprache der klar abgegrenzten Zielgruppe'],
          },
        ],
        paragraphs: ['Ändert sich ein Element, müssen die anderen geprüft werden. Eine umfangreichere Vor-Ort-Leistung beeinflusst beispielsweise Preis, Terminplanung und Kommunikationsversprechen.'],
      },
      {
        heading: 'Marketing-Mix praktisch abstimmen',
        paragraphs: [
          'Beginne mit Kundenproblem, Zielgruppe, Markt und angestrebter Positionierung. Lege dann für jedes P konkrete Entscheidungen fest und prüfe Widersprüche. Zum Abschluss werden Verantwortlichkeiten, Budget, Termine und messbare Ziele für die Umsetzung vereinbart.',
          [
            'Eine ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' gibt den längerfristigen Rahmen. Ein ',
            { type: 'link', href: '/wissen/businessplan', text: 'Businessplan' },
            ' kann die Markt-, Marketing- und Finanzannahmen für eine Gründung oder ein Vorhaben zusammenführen.',
          ],
        ],
        formulaCards: [
          {
            label: 'Abstimmung',
            title: 'Marktverständnis → 4P → Umsetzung → Kontrolle',
            formula: 'Zielgruppe und Markt klären → Product, Price, Place und Promotion abstimmen → Maßnahmen umsetzen → Wirkung prüfen',
            description: 'Die vier Bereiche bilden kein einmaliges Formular. Rückmeldungen, Verkaufsdaten und Marktveränderungen können Anpassungen erforderlich machen.',
          },
        ],
      },
      {
        heading: 'Grenzen des 4P-Modells',
        paragraphs: [
          'Das Modell ist eine übersichtliche Ordnungshilfe, bildet aber nicht jede Marketingfrage vollständig ab. Besonders bei Dienstleistungen werden häufig weitere Bereiche wie People, Process und Physical Evidence ergänzt. Andere Ansätze stellen Kundenperspektive, Beziehungen oder digitale Plattformen stärker in den Mittelpunkt.',
          'Erweiterungen sind nicht automatisch besser. Für viele grundlegende Entscheidungen reichen die 4P als Startpunkt, wenn Kundenbedürfnisse, Wettbewerb und Umsetzung nicht aus dem Blick geraten.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der Marketing-Mix verbindet Produkt, Preis, Vertrieb und Kommunikation',
    'Die vier P müssen zur Zielgruppe, zum Markt und zueinander passen',
    'Product umfasst Leistung und begleitenden Nutzen, nicht nur einen Gegenstand',
    'Price schließt Konditionen und Preismodelle ein',
    'Place bestimmt Zugang, Vertrieb und Verfügbarkeit',
    'Promotion vermittelt den Nutzen, ersetzt aber kein tragfähiges Angebot',
  ],
  commonMistakes: [
    'Marketing mit Werbung gleichsetzen',
    'die vier Bereiche unabhängig voneinander planen',
    'Kanäle nur nach Reichweite statt nach Zielgruppe und Wirtschaftlichkeit auswählen',
    'Rabatte festlegen, ohne Wirkung auf Positionierung und Ergebnis zu prüfen',
    'Kommunikationsversprechen machen, die Leistung oder Vertrieb nicht einhalten können',
  ],
  faqs: [
    { question: 'Wofür stehen die 4P?', answer: 'Die 4P stehen für Product, Price, Place und Promotion, also Produkt-, Preis-, Distributions- und Kommunikationspolitik.' },
    { question: 'Ist Werbung dasselbe wie Marketing?', answer: 'Nein. Werbung gehört zur Kommunikation. Marketing umfasst zusätzlich das Angebot, den Preis, den Vertrieb sowie die Ausrichtung auf Markt und Zielgruppe.' },
    { question: 'Gelten die 4P auch für Dienstleistungen?', answer: 'Ja, sie lassen sich auch auf Dienstleistungen anwenden. Je nach Fragestellung können ergänzende Bereiche wie Personal, Prozesse und sichtbare Leistungsnachweise hilfreich sein.' },
    { question: 'Müssen alle vier P gleichzeitig geändert werden?', answer: 'Nicht zwingend. Bei jeder größeren Änderung sollte aber geprüft werden, ob die übrigen Bereiche weiterhin zusammenpassen.' },
  ],
  related: ['zielgruppe', 'marktanalyse', 'usp', 'preisstrategie', 'marketing-vertrieb'],
  sources: [],
  updatedAt: '2026-08-31',
  reviewedAt: '2026-08-31',
  disclaimer: defaultDisclaimer,
};

export default marketingMix;
