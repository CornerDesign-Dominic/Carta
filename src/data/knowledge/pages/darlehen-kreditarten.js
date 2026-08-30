import { defaultDisclaimer } from '../shared.js';

const darlehenKreditarten = {
  slug: 'darlehen-kreditarten',
  category: 'Finanzierung & Investition',
  title: 'Darlehen & Kreditarten',
  description: 'Darlehen und Kreditarten einfach erklärt: Zinssatz, Tilgung, Laufzeit, Restschuld sowie Annuitäten-, Tilgungs- und endfälliges Darlehen.',
  seo: {
    title: 'Darlehen & Kreditarten einfach erklärt | Belege24',
    description: 'Verstehe Darlehen, Zinsen, Tilgung und Restschuld. Vergleiche Annuitäten-, Tilgungs- und endfällige Darlehen verständlich.',
    canonicalPath: '/wissen/darlehen-kreditarten',
  },
  article: {
    intro: 'Ein Darlehen stellt Kapital für einen vereinbarten Zeitraum bereit. Für die Planung zählen nicht nur der Darlehensbetrag und der Zinssatz, sondern auch Tilgung, Laufzeit, Restschuld und die tatsächlich fälligen Zahlungen.',
    sections: [
      {
        heading: 'Kredit und Darlehen: der Unterschied',
        paragraphs: [
          'Kredit ist ein Oberbegriff für die zeitweise Überlassung von Geld oder anderen Leistungen. Ein Darlehen ist eine typische Kreditform, bei der ein Betrag bereitgestellt und nach den vereinbarten Bedingungen zurückgezahlt wird.',
          [
            'Im Unternehmensalltag wird oft beides ähnlich verwendet. Bei einem ',
            { type: 'glossary', id: 'darlehen', text: 'Darlehen' },
            ' regeln Vertrag und Tilgungsplan insbesondere Betrag, Zinsen, Laufzeit, Raten und mögliche Sicherheiten.',
          ],
        ],
      },
      {
        heading: 'Die wichtigsten Bestandteile eines Darlehens',
        paragraphs: [
          'Der Darlehensbetrag ist das bereitgestellte Kapital. Der Zinssatz bestimmt, wie hoch die Zinskosten auf die jeweils offene Schuld ausfallen. Die Laufzeit beschreibt, in welchem Zeitraum das Darlehen vereinbarungsgemäß zurückgeführt werden soll.',
          [
            'Mit jeder ',
            { type: 'glossary', id: 'tilgung', text: 'Tilgung' },
            ' sinkt die offene Schuld. Diese verbleibende Schuld heißt ',
            { type: 'glossary', id: 'restschuld', text: 'Restschuld' },
            '. Weil Zinsen häufig auf die Restschuld berechnet werden, verändern sich Zins- und Tilgungsanteile im Zeitverlauf.',
          ],
        ],
      },
      {
        heading: 'Annuitätendarlehen: gleichbleibende Rate',
        paragraphs: [
          [
            'Bei einem Annuitätendarlehen bleibt die regelmäßige ',
            { type: 'glossary', id: 'annuitaet', text: 'Annuität' },
            ' während einer vereinbarten Zinsbindung grundsätzlich gleich. Sie setzt sich aus Zins und Tilgung zusammen.',
          ],
          'Zu Beginn ist der Zinsanteil meist höher, weil die Restschuld höher ist. Mit fortschreitender Tilgung sinkt der Zinsanteil und der Tilgungsanteil innerhalb der gleichbleibenden Rate steigt. Die Restschuld wird dadurch schrittweise kleiner.',
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Aufbau einer Annuität',
            formula: 'Annuität = Zinsanteil + Tilgungsanteil',
            description: 'Bei gleicher Rate verschiebt sich die Zusammensetzung: Mit sinkender Restschuld sinkt bei gleichem Zinssatz meist der Zinsanteil.',
          },
        ],
      },
      {
        heading: 'Tilgungsdarlehen: gleichbleibende Tilgung',
        paragraphs: [
          'Bei einem Tilgungsdarlehen bleibt der Tilgungsbetrag je Rate oder Jahr gleich. Die Zinsen werden auf die jeweils sinkende Restschuld berechnet.',
          'Dadurch sind die Zahlungen am Anfang häufig höher und werden mit der Zeit niedriger. Das kann zu einer schnelleren Entschuldung führen, verlangt aber zu Beginn eine höhere Liquiditätsreserve als eine vergleichbare gleichbleibende Rate.',
        ],
      },
      {
        heading: 'Endfälliges Darlehen: Tilgung am Laufzeitende',
        paragraphs: [
          'Bei einem endfälligen Darlehen werden während der Laufzeit grundsätzlich nur Zinsen gezahlt. Der Darlehensbetrag bleibt bis zum Ende als Restschuld bestehen und wird dann in einer Summe fällig.',
          'Das kann die laufende Zahlung zunächst niedrig halten. Gleichzeitig muss frühzeitig geklärt sein, wie die hohe Schlusszahlung finanziert oder aus vorhandenen Mitteln geleistet wird. Ohne nachvollziehbaren Plan erhöht sich das Risiko einer Anschlussfinanzierung.',
        ],
      },
      {
        heading: 'Die Darlehensarten im Vergleich',
        paragraphs: [
          'Keine Darlehensform ist pauschal die beste. Entscheidend sind Zweck, erwartete Einzahlungen, verfügbare Liquidität, Risiko, Zinsvereinbarung und die Fähigkeit, die Restschuld zum richtigen Zeitpunkt zu bedienen.',
        ],
        exampleCards: [
          {
            title: 'Annuitäten-, Tilgungs- und endfälliges Darlehen',
            paragraphs: [
              'Annuitätendarlehen: Die Rate bleibt während der Zinsbindung grundsätzlich gleich. Das erleichtert die Planbarkeit; Zins- und Tilgungsanteil verändern sich.',
              'Tilgungsdarlehen: Die Tilgung bleibt gleich, die Gesamtzahlung sinkt mit den Zinsen. Die Anfangsbelastung ist oft höher, die Restschuld nimmt aber vergleichsweise zügig ab.',
              'Endfälliges Darlehen: Während der Laufzeit fallen grundsätzlich Zinsen an, die Tilgung erfolgt am Ende. Das erfordert eine belastbare Planung für die Schlusszahlung.',
            ],
          },
        ],
      },
      {
        heading: 'Restschuld und Liquidität planen',
        paragraphs: [
          'Ein Tilgungsplan zeigt, welche Zahlungen wann fällig werden und wie sich die Restschuld entwickelt. Er hilft, Zinsen, Tilgungen und gegebenenfalls eine Schlussrate in die laufende Planung einzuordnen.',
          [
            'Prüfe die Entwicklung zusammen mit deiner ',
            { type: 'link', href: '/wissen/liquiditaet-controlling', text: 'Liquiditätsplanung' },
            '. Zins- und Tilgungszahlungen sind Auszahlungen, auch wenn eine Investition noch nicht sofort die erwarteten Einzahlungen erzeugt.',
          ],
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Restschuldentwicklung',
            formula: 'Restschuld nach einer Rate = Restschuld vor der Rate − Tilgung',
            description: 'Die Zinszahlung senkt die Restschuld nicht. Sie ist die Vergütung für das geliehene Kapital.',
          },
        ],
      },
      {
        heading: 'Zinsen, Laufzeit und Sicherheiten',
        paragraphs: [
          'Eine längere Laufzeit kann die einzelne Rate senken, führt aber häufig zu längeren Zinszahlungen. Der Zinssatz, die Zinsbindung, Gebühren und mögliche Sondertilgungen beeinflussen die tatsächlichen Finanzierungskosten zusätzlich.',
          'Sicherheiten können bei einem Darlehen eine Rolle spielen. Ob und welche Sicherheiten verlangt werden, hängt unter anderem von Darlehenszweck, Bonität und Vertrag ab. Sie sollten ebenso sorgfältig geprüft werden wie die Zahlungsstruktur.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Vergleiche nicht nur die Monatsrate. Berücksichtige den gesamten Zahlungsplan, Zinsen, Gebühren, Restschuld, Laufzeit und mögliche Bedingungen für Sondertilgungen oder Anschlussfinanzierungen.',
          [
            'Mehr Grundlagen zu Zinskosten findest du unter ',
            { type: 'link', href: '/wissen/zinsen', text: 'Zinsen' },
            '. Ordne Darlehen außerdem in deine gesamte ',
            { type: 'link', href: '/wissen/fremdfinanzierung', text: 'Fremdfinanzierung' },
            ' und Kapitalstruktur ein; hohe oder kurzfristig fällige Verpflichtungen können das Finanzierungsrisiko erhöhen.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Darlehen stellt Kapital bereit, das nach den vereinbarten Bedingungen zurückgezahlt wird.',
    'Zinsen, Tilgung, Laufzeit und Restschuld bestimmen den Zahlungsplan.',
    'Beim Annuitätendarlehen bleibt die Rate grundsätzlich gleich, ihre Zusammensetzung verändert sich.',
    'Beim Tilgungsdarlehen sinken die Gesamtzahlungen häufig mit der Restschuld.',
    'Beim endfälligen Darlehen muss die Schlusszahlung von Anfang an realistisch geplant werden.',
    'Vergleiche Darlehen immer anhand der gesamten Zahlungen und ihrer Auswirkung auf die Liquidität.',
  ],
  commonMistakes: [
    'nur die Höhe einer Rate statt Zinsen, Tilgung, Restschuld und Gesamtlaufzeit vergleichen.',
    'Zinszahlung und Tilgung verwechseln.',
    'die Schlussrate eines endfälligen Darlehens nicht in die Planung aufnehmen.',
    'eine niedrigere Rate automatisch mit niedrigeren Gesamtkosten gleichsetzen.',
    'Sondertilgungen, Gebühren oder Bedingungen einer Anschlussfinanzierung nicht prüfen.',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Kredit und Darlehen?',
      answer: 'Kredit ist der Oberbegriff für die zeitweise Überlassung von Kapital. Ein Darlehen ist eine typische Form, bei der ein bestimmter Betrag nach vereinbarten Bedingungen bereitgestellt und zurückgezahlt wird.',
    },
    {
      question: 'Was ist ein Annuitätendarlehen?',
      answer: 'Bei einem Annuitätendarlehen bleibt die regelmäßige Rate während der vereinbarten Zinsbindung grundsätzlich gleich. Sie besteht aus Zins und Tilgung.',
    },
    {
      question: 'Was ist ein Tilgungsdarlehen?',
      answer: 'Beim Tilgungsdarlehen bleibt der Tilgungsbetrag gleich. Weil die Restschuld sinkt, sinkt bei gleichem Zinssatz meist auch die Zinszahlung und damit die Gesamtbelastung.',
    },
    {
      question: 'Was bedeutet Restschuld?',
      answer: 'Die Restschuld ist der noch nicht getilgte Darlehensbetrag. Auf sie werden Zinsen nach den vertraglichen Regeln berechnet.',
    },
    {
      question: 'Ist eine niedrige Rate immer besser?',
      answer: 'Nein. Eine niedrige Rate kann mit längerer Laufzeit, höherer Restschuld oder einer hohen Schlusszahlung verbunden sein. Entscheidend ist der gesamte Zahlungsplan.',
    },
  ],
  related: [
    'finanzierung-investition',
    'zinsen',
    'fremdfinanzierung',
    'liquiditaet-controlling',
    'verschuldungsgrad',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default darlehenKreditarten;
