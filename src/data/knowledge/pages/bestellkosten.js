import { defaultDisclaimer } from '../shared.js';

const bestellkosten = {
  slug: 'bestellkosten',
  category: 'Supply Chain & Logistik',
  title: 'Bestellkosten',
  description: 'Bestellkosten einfach erklärt: Kosten je Beschaffungsvorgang, Zusammenhang mit Bestellhäufigkeit sowie Abgrenzung zu Bezugs- und Lagerkosten.',
  seo: {
    title: 'Bestellkosten einfach erklärt | Belege24',
    description: 'Erfahre, welche Kosten eine Bestellung verursacht, wie die Bestellhäufigkeit wirkt und wie sich Bestellkosten von Bezugs- und Lagerkosten unterscheiden.',
    canonicalPath: '/wissen/bestellkosten',
  },
  article: {
    intro: 'Bestellkosten entstehen durch die Abwicklung eines Beschaffungsvorgangs. Sie fallen nicht nur beim Absenden einer Bestellung an, sondern können von der Bedarfsmeldung bis zur Rechnungsprüfung mehrere Arbeits- und Prozessschritte umfassen.',
    sections: [
      {
        heading: 'Was sind Bestellkosten?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bestellkosten', text: 'Bestellkosten' },
            ' sind die Kosten, die je Bestellung oder Beschaffungsvorgang entstehen. Sie können sich aus Zeitaufwand, Systemnutzung, Prüfung, Kommunikation und weiteren administrativen Tätigkeiten zusammensetzen.',
          ],
          'Sie hängen nicht direkt von der Stückzahl einer Bestellung ab. Auch eine kleine Bestellung kann ähnliche Bearbeitungsschritte auslösen wie eine größere. Deshalb werden Bestellkosten in vereinfachten Betrachtungen häufig als fixer Betrag je Bestellung angesetzt.',
        ],
      },
      {
        heading: 'Welche Kosten können durch eine Bestellung entstehen?',
        paragraphs: [
          'Mögliche Schritte sind Bedarfsermittlung, Abstimmung mit Fachbereichen, Anfrage, Angebotsvergleich, Freigabe, Bestellung, Kommunikation mit dem Lieferanten und Terminüberwachung. Je nach Unternehmen kommen Systemkosten, Dokumentation oder interne Prüfungen hinzu.',
          'Auch Wareneingang, Mengen- und Qualitätskontrolle, Klärung von Abweichungen sowie Rechnungsprüfung können zum Aufwand eines Beschaffungsvorgangs gehören. Welche Positionen tatsächlich angesetzt werden, hängt von Prozess, Automatisierung und Datenlage ab.',
          'Nicht jeder Arbeitsaufwand wird durch eine zusätzliche oder wegfallende Bestellung sofort als Zahlung sichtbar. Für Entscheidungen ist daher wichtig, ob Kapazität, externe Kosten oder Ressourcen durch eine Änderung der Bestellhäufigkeit tatsächlich beeinflusst werden.',
        ],
      },
      {
        heading: 'Vereinfachtes Modell: Bestellkosten je Bestellung',
        paragraphs: [
          'Für eine erste Planung kann ein Unternehmen den durchschnittlichen Aufwand einer Bestellung schätzen und als Bestellkosten je Bestellung verwenden. Das macht Unterschiede zwischen vielen kleinen und wenigen größeren Bestellungen sichtbar.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gesamte Bestellkosten',
            formula: 'Gesamte Bestellkosten = Anzahl Bestellungen × Bestellkosten je Bestellung',
            description: 'Das ist ein vereinfachtes Modell. Es setzt voraus, dass der angenommene Betrag je Bestellung für den betrachteten Prozess und Zeitraum plausibel ist.',
          },
        ],
      },
      {
        heading: 'Beispiel: Bestellhäufigkeit vergleichen',
        paragraphs: [
          'Ein Betrieb schätzt seine Bestellkosten auf 45 Euro je Bestellung. Im Jahr werden für ein Material 24 Bestellungen ausgelöst.',
        ],
        exampleCards: [
          {
            title: '24 Bestellungen im Jahr',
            paragraphs: [
              'Schritt 1: Anzahl der Bestellungen beträgt 24, die Bestellkosten je Bestellung 45 Euro.',
              'Schritt 2: 24 × 45 Euro ergeben 1.080 Euro gesamte Bestellkosten im Jahr.',
              'Schritt 3: Würde der Betrieb die gleiche Jahresmenge in weniger, größeren Bestellungen beschaffen, könnten diese Kosten sinken. Gleichzeitig würden Durchschnittsbestand, Kapitalbindung und Lagerkosten meist steigen.',
            ],
            effects: [
              'Bestellkosten: 1.080 Euro pro Jahr nach dem vereinfachten Modell.',
              'Abwägung: Weniger Bestellungen senken nicht automatisch die gesamten Beschaffungskosten.',
            ],
          },
        ],
      },
      {
        heading: 'Bestellhäufigkeit und Bestellkosten',
        paragraphs: [
          'Viele kleine Bestellungen erhöhen bei gleichbleibenden Kosten je Vorgang die gesamten Bestellkosten. Weniger, größere Bestellungen können Bearbeitungsaufwand bündeln, erhöhen aber häufig den Bestand im Lager.',
          'Die passende Bestellhäufigkeit ist daher ein Ausgleich zwischen Bestellkosten und Lagerkosten. Die optimale Bestellmenge betrachtet diesen Zielkonflikt systematisch; die Detailseite kann später auf dieser Grundlage anknüpfen.',
          'Automatisierte Freigaben, klare Stammdaten, Rahmenvereinbarungen oder gebündelte Bedarfe können Bestellprozesse vereinfachen. Ob sie tatsächlich Kosten senken, hängt davon ab, welche Schritte und Ressourcen dadurch entfallen oder anders genutzt werden können.',
        ],
      },
      {
        heading: 'Unterschied zu Bezugskosten und Lagerkosten',
        paragraphs: [
          [
            'Bestellkosten betreffen die Abwicklung der Bestellung. ',
            { type: 'link', href: '/wissen/bezugskalkulation', text: 'Bezugskosten' },
            ' entstehen dagegen direkt durch den Bezug eines konkreten Guts, etwa durch Fracht, Transportversicherung oder Verpackung, und fließen in den Bezugspreis ein.',
          ],
          'Lagerkosten entstehen, weil Güter auf Lager liegen, zum Beispiel durch Fläche, Versicherung, Schwund, Kapitalbindung oder Verwaltung. Sie steigen häufig mit dem Bestand, nicht mit der Zahl der Bestellungen selbst.',
          'Für eine wirtschaftliche Bestellentscheidung sollten diese Kostenarten getrennt betrachtet werden. Sonst kann ein Prozess kostengünstig wirken, obwohl er an anderer Stelle höhere Bestände oder Bezugskosten verursacht.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Bestellkosten nur als Porto oder Versand zu verstehen. Viele Kosten entstehen intern durch Bearbeitung, Abstimmung, Prüfung und Klärung von Abweichungen.',
          'Auch ein pauschaler Betrag je Bestellung sollte nicht blind übernommen werden. Stark unterschiedliche Bestellarten, etwa Standardnachbestellung und komplexe Sonderbeschaffung, verursachen oft sehr verschiedenen Aufwand.',
          'Bestellkosten dürfen nicht mit Bezugskosten oder Lagerkosten vermischt werden. Nur eine getrennte Betrachtung zeigt, welche Folgen eine Änderung der Bestellmenge oder -häufigkeit wirklich hat.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bestellkosten entstehen durch die Abwicklung eines Beschaffungsvorgangs.',
    'Sie können Bedarfsermittlung, Anfrage, Bearbeitung, Wareneingang und Rechnungsprüfung umfassen.',
    'Vereinfachte Modelle setzen Bestellkosten häufig als fixen Betrag je Bestellung an.',
    'Viele kleine Bestellungen erhöhen bei sonst gleichen Annahmen die gesamten Bestellkosten.',
    'Weniger Bestellungen können zugleich Bestände und Lagerkosten erhöhen.',
    'Bestellkosten, Bezugskosten und Lagerkosten sollten getrennt betrachtet werden.',
  ],
  commonMistakes: [
    'Bestellkosten auf Porto oder Versand reduzieren',
    'den gleichen Bestellkostensatz für einfache und komplexe Vorgänge unkritisch verwenden',
    'bei weniger Bestellungen die höheren Bestände und Lagerkosten nicht berücksichtigen',
    'Bestellkosten mit Bezugskosten oder Lagerkosten vermischen',
    'Arbeitsaufwand ohne Prüfung als sofort vermeidbare Kosten behandeln',
  ],
  faqs: [
    {
      question: 'Was sind Bestellkosten?',
      answer: 'Bestellkosten sind die Kosten der Abwicklung eines Beschaffungsvorgangs, etwa für Bedarfsklärung, Bestellung, Wareneingang und Rechnungsprüfung.',
    },
    {
      question: 'Warum werden Bestellkosten oft als fix angenommen?',
      answer: 'In einfachen Modellen wird unterstellt, dass viele Bearbeitungsschritte unabhängig von der bestellten Menge ähnlich sind. In der Praxis kann der Aufwand aber unterschiedlich sein.',
    },
    {
      question: 'Wie hängen Bestellhäufigkeit und Bestellkosten zusammen?',
      answer: 'Bei gleichbleibenden Kosten je Vorgang steigen die gesamten Bestellkosten mit der Zahl der ausgelösten Bestellungen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Bestell- und Bezugskosten?',
      answer: 'Bestellkosten betreffen die Prozessabwicklung. Bezugskosten entstehen direkt durch den Bezug eines konkreten Guts, etwa durch Fracht oder Verpackung.',
    },
    {
      question: 'Sind weniger Bestellungen immer besser?',
      answer: 'Nein. Weniger Bestellungen können Bestellkosten senken, aber häufig Lagerbestand, Kapitalbindung und Lagerkosten erhöhen.',
    },
  ],
  related: [
    'bezugskalkulation',
    'bedarfsermittlung',
    'operativer-einkauf',
    'einkauf-verkauf',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bestellkosten;
