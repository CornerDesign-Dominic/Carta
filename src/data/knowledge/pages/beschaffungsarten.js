import { defaultDisclaimer } from '../shared.js';

const beschaffungsarten = {
  slug: 'beschaffungsarten',
  category: 'Supply Chain & Logistik',
  title: 'Beschaffungsarten',
  description: 'Beschaffungsarten einfach erklärt: Einzel-, Vorrats-, fertigungssynchrone und auftragsbezogene Beschaffung mit Vor- und Nachteilen im Vergleich.',
  seo: {
    title: 'Beschaffungsarten einfach erklärt | Belege24',
    description: 'Vergleiche Einzelbeschaffung, Vorratsbeschaffung, Just-in-Time und auftragsbezogene Beschaffung nach Beständen, Kosten, Versorgungssicherheit und Einsatz.',
    canonicalPath: '/wissen/beschaffungsarten',
  },
  article: {
    intro: 'Beschaffungsarten legen fest, wann und in welchem Umfang ein Unternehmen Güter im Verhältnis zum Bedarf einkauft. Die passende Wahl beeinflusst Kapitalbindung, Lagerkosten, Lieferfähigkeit und das Risiko von Engpässen.',
    sections: [
      {
        heading: 'Was sind Beschaffungsarten?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'beschaffungsart', text: 'Beschaffungsart' },
            ' beschreibt die zeitliche und mengenmäßige Gestaltung der Bedarfsdeckung. Sie beantwortet zum Beispiel die Frage, ob erst bei einem konkreten Bedarf bestellt, vorsorglich auf Lager gelegt oder möglichst genau zur Verwendung geliefert wird.',
          ],
          'Welche Art sinnvoll ist, hängt unter anderem von Verbrauch, Lieferzeit, Wert, Verderblichkeit, Platz, Planbarkeit und der Bedeutung des Guts ab. Eine allgemeingültig beste Beschaffungsart gibt es nicht.',
        ],
      },
      {
        heading: 'Die wichtigsten Beschaffungsarten im Vergleich',
        paragraphs: [
          'Die Begriffe beschreiben die Grundlogik der Bedarfsdeckung. In der Praxis können Unternehmen sie je nach Warengruppe kombinieren.',
        ],
        formulaCards: [
          {
            title: 'Beschaffungsarten im Überblick',
            formula: 'Einzelbeschaffung: erst bei konkretem Bedarf\nVorratsbeschaffung: vor dem Bedarf auf Lager\nJust-in-Time: möglichst zeitnah zur Verwendung\nAuftragsbezogen: für einen konkreten Kundenauftrag',
            description: 'Die Wahl beeinflusst vor allem Bestand, Kapitalbindung, Lagerkosten, Reaktionsfähigkeit und Abhängigkeit von pünktlichen Lieferungen.',
          },
        ],
      },
      {
        heading: 'Einzelbeschaffung im Bedarfsfall',
        paragraphs: [
          'Bei der Einzelbeschaffung wird bestellt, wenn ein konkreter Bedarf entsteht. Dadurch bleiben Lagerbestand und Kapitalbindung niedrig. Sie eignet sich zum Beispiel für selten benötigte Ersatzteile, teure Einzelgüter oder Leistungen, die nicht regelmäßig gebraucht werden.',
          'Der Nachteil: Die Verfügbarkeit hängt stark von Lieferzeit und Zuverlässigkeit ab. Tritt der Bedarf kurzfristig auf oder verzögert sich die Lieferung, kann es zu Wartezeiten, Eilkosten oder Unterbrechungen kommen.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: selten benötigtes Ersatzteil',
            paragraphs: [
              'Ein Betrieb benötigt ein spezielles Ersatzteil nur bei einem Defekt und hält es nicht dauerhaft auf Lager.',
              'Vorteil: Kein Kapital wird für ein möglicherweise jahrelang ungenutztes Teil gebunden.',
              'Risiko: Fällt die Maschine aus, bestimmt die Lieferzeit des Ersatzteils, wie lange sie stillsteht.',
            ],
            effects: [
              'Bestand und Lagerkosten: niedrig.',
              'Lieferabhängigkeit: hoch, wenn kein kurzfristiger Ersatz verfügbar ist.',
            ],
          },
        ],
      },
      {
        heading: 'Vorratsbeschaffung',
        paragraphs: [
          'Bei der Vorratsbeschaffung werden Güter vor dem unmittelbaren Verbrauch beschafft und gelagert. Sie kann sinnvoll sein, wenn der Bedarf regelmäßig ist, Lieferzeiten lang sind, Preise schwanken oder ein Ausfall besonders kritisch wäre.',
          'Der Vorrat erhöht die Versorgungssicherheit und kann Mengen- oder Transportvorteile ermöglichen. Gleichzeitig bindet er Kapital, verursacht Lagerkosten und kann bei Verderb, technischen Änderungen oder sinkender Nachfrage an Wert verlieren.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: häufig benötigtes Verpackungsmaterial',
            paragraphs: [
              'Ein Onlinehändler verwendet täglich Standardkartons und hält dafür einen Sicherheitsbestand bereit.',
              'Vorteil: Aufträge können auch dann verpackt werden, wenn sich eine Nachlieferung verspätet.',
              'Nachteil: Zu große Mengen benötigen Platz und binden Geld, obwohl sie noch nicht eingesetzt sind.',
            ],
            effects: [
              'Versorgungssicherheit: höher durch verfügbaren Vorrat.',
              'Kapitalbindung und Lagerkosten: höher als bei einer Bestellung erst im Bedarfsfall.',
            ],
          },
        ],
      },
      {
        heading: 'Fertigungssynchrone oder Just-in-Time-Beschaffung',
        paragraphs: [
          'Bei fertigungssynchroner Beschaffung sollen Materialien möglichst dann eintreffen, wenn sie in Produktion oder Leistungserstellung benötigt werden. Häufig wird dafür der Begriff Just-in-Time verwendet.',
          'Geringere Lagerbestände können Kapitalbindung, Platzbedarf und Lagerkosten senken. Dafür müssen Bedarfsplanung, Informationsfluss, Transport und Lieferfähigkeit sehr zuverlässig zusammenspielen. Störungen bei einem kritischen Teil können die gesamte Fertigung beeinträchtigen.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Bauteile zur geplanten Montage',
            paragraphs: [
              'Ein Hersteller lässt bestimmte Bauteile nach einem abgestimmten Produktionsplan kurz vor dem Einbau anliefern.',
              'Vorteil: Die Bauteile liegen nicht lange im Lager und sind nahe am tatsächlichen Verbrauch verfügbar.',
              'Risiko: Eine Verkehrs-, Kapazitäts- oder Informationsstörung kann unmittelbar zu einem Produktionsstillstand führen.',
            ],
            effects: [
              'Lagerbestand: niedrig.',
              'Anforderung: sehr zuverlässige Planung, Kommunikation und Lieferung.',
            ],
          },
        ],
      },
      {
        heading: 'Auftragsbezogene Beschaffung',
        paragraphs: [
          'Bei auftragsbezogener Beschaffung wird ein Gut gezielt für einen konkreten Kundenauftrag oder ein Projekt beschafft. Das ist häufig bei individuellen Produkten, Sondermaterialien oder projektspezifischen Leistungen sinnvoll.',
          'Sie senkt das Risiko, auf nicht benötigten Sonderteilen sitzen zu bleiben. Gleichzeitig wird der Kundenauftrag stärker von Lieferzeiten, Freigaben und Änderungen auf der Beschaffungsseite abhängig.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Sondermaterial für ein Kundenprojekt',
            paragraphs: [
              'Ein Metallbaubetrieb bestellt eine besondere Oberfläche erst nach verbindlicher Freigabe eines Kundenauftrags.',
              'Vorteil: Das Material wird nicht ohne gesicherten Bedarf gelagert.',
              'Risiko: Verschiebt sich die Lieferung, kann sich auch der Termin des Kundenprojekts verschieben.',
            ],
            effects: [
              'Bestandsrisiko: gering für kundenspezifisches Material.',
              'Terminrisiko: hängt unmittelbar an der Lieferfähigkeit des Beschaffungsprozesses.',
            ],
          },
        ],
      },
      {
        heading: 'Welche Beschaffungsart passt?',
        paragraphs: [
          'Für häufig verwendete, günstige Standardmaterialien kann ein Vorrat sinnvoll sein. Für wertintensive oder selten benötigte Güter spricht eher die Einzelbeschaffung. Planbare, stabile Abläufe können fertigungssynchrone Lieferungen unterstützen; kundenspezifische Güter werden oft auftragsbezogen beschafft.',
          'Die Entscheidung sollte regelmäßig überprüft werden. Ändern sich Nachfrage, Lieferzeit, Preise, Risiko oder Lagerkapazität, kann eine bisher passende Beschaffungsart unvorteilhaft werden.',
        ],
      },
      {
        heading: 'Abgrenzung zu Beschaffungsquellen und Sourcing',
        paragraphs: [
          'Beschaffungsarten beschreiben, wann und in welcher Menge beschafft wird. Sie beantworten nicht die Frage, von wie vielen oder aus welchen Regionen Lieferanten bezogen wird.',
          'Single Sourcing, Multiple Sourcing oder Global Sourcing gehören zu Beschaffungsprinzipien und Lieferantenstrategie. Sie werden hier bewusst nicht vertieft, weil sie andere Entscheidungen zu Bezugsquellen, Abhängigkeiten und Risikostreuung betreffen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, für alle Güter dieselbe Beschaffungsart zu verwenden. Standardkartons, verderbliche Ware, seltene Ersatzteile und kundenspezifische Materialien haben sehr unterschiedliche Anforderungen.',
          'Auch geringe Lagerbestände sind nicht automatisch besser. Ohne verlässliche Planung und Lieferfähigkeit kann Just-in-Time die Versorgungssicherheit verringern.',
          'Umgekehrt führt Vorratsbeschaffung nicht automatisch zu Sicherheit: Überbestände können Kapital, Fläche und Aufmerksamkeit binden und bei Änderungen oder Schwund zum Risiko werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Beschaffungsarten bestimmen, wann und in welchem Umfang Güter im Verhältnis zum Bedarf beschafft werden.',
    'Einzelbeschaffung senkt Bestände, erhöht aber die Abhängigkeit von der aktuellen Lieferzeit.',
    'Vorratsbeschaffung stärkt die Verfügbarkeit, bindet jedoch Kapital und verursacht Lagerkosten.',
    'Just-in-Time senkt Bestände und benötigt besonders zuverlässige Planung, Kommunikation und Lieferung.',
    'Auftragsbezogene Beschaffung passt häufig zu individuellen Kundenaufträgen und Sondermaterialien.',
    'Beschaffungsarten sind von Beschaffungsquellen und Sourcing-Strategien zu unterscheiden.',
  ],
  commonMistakes: [
    'für alle Güter dieselbe Beschaffungsart verwenden',
    'niedrige Lagerbestände automatisch mit hoher Effizienz gleichsetzen',
    'Kapitalbindung, Lagerkosten, Schwund oder Wertverluste bei Vorräten übersehen',
    'Lieferzeit und Versorgungsrisiko bei Einzelbeschaffung unterschätzen',
    'Beschaffungsart mit Beschaffungsquelle oder Sourcing-Strategie verwechseln',
  ],
  faqs: [
    {
      question: 'Was sind Beschaffungsarten?',
      answer: 'Sie beschreiben, wann und in welchem Umfang ein Unternehmen Güter im Verhältnis zum Bedarf beschafft, etwa im Bedarfsfall, auf Vorrat oder zeitnah zur Verwendung.',
    },
    {
      question: 'Was ist Vorratsbeschaffung?',
      answer: 'Güter werden vor dem unmittelbaren Bedarf beschafft und gelagert. Das kann die Versorgung absichern, erhöht aber Kapitalbindung und Lagerkosten.',
    },
    {
      question: 'Was bedeutet Just-in-Time-Beschaffung?',
      answer: 'Materialien werden möglichst zeitnah zu ihrer Verwendung geliefert. Dadurch sinken Bestände, während Planung und Lieferfähigkeit besonders zuverlässig sein müssen.',
    },
    {
      question: 'Wann ist auftragsbezogene Beschaffung sinnvoll?',
      answer: 'Sie passt häufig zu kundenspezifischen Gütern oder Projekten, wenn Material erst nach einem konkreten Auftrag benötigt wird.',
    },
    {
      question: 'Ist die niedrigste Lagerhaltung immer die beste Lösung?',
      answer: 'Nein. Ob geringe Bestände sinnvoll sind, hängt von Lieferzeit, Risiko, Planbarkeit und den Folgen einer Fehlmenge ab.',
    },
  ],
  related: [
    'beschaffung',
    'operativer-einkauf',
    'strategischer-einkauf',
    'einkauf-verkauf',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default beschaffungsarten;
