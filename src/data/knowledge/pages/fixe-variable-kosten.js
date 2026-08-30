import { defaultDisclaimer } from '../shared.js';

const fixeVariableKosten = {
  slug: 'fixe-variable-kosten',
  category: 'Kostenrechnung & Controlling',
  title: 'Fixe und variable Kosten',
  description: 'Fixe und variable Kosten einfach erklärt: Kostenverhalten, Kosten je Stück, Gesamtkosten, Mischkosten, sprungfixe Kosten sowie der Bezug zu Break-even und Deckungsbeitrag.',
  seo: {
    title: 'Fixe und variable Kosten einfach erklärt | Belege24',
    description: 'Verstehe, wie sich fixe und variable Kosten bei unterschiedlichen Mengen verhalten und warum Bezugsgröße und Zeitraum für die Einordnung entscheidend sind.',
    canonicalPath: '/wissen/fixe-variable-kosten',
  },
  article: {
    intro: 'Fixe und variable Kosten beschreiben, wie sich Kosten verändern, wenn sich Beschäftigung, Absatz oder Produktionsmenge ändern. Die Einordnung ist immer von der gewählten Bezugsgröße und dem betrachteten Zeitraum abhängig.',
    sections: [
      {
        heading: 'Was sind fixe und variable Kosten?',
        paragraphs: [
          [
            { type: 'glossary', id: 'fixkosten', text: 'Fixkosten' },
            ' bleiben innerhalb eines bestimmten Zeitraums bei einer veränderten Menge zunächst gleich. Typische Beispiele können Miete, Versicherungen oder feste Grundgehälter sein.',
          ],
          [
            { type: 'glossary', id: 'variable-kosten', text: 'Variable Kosten' },
            ' verändern sich dagegen mit der Menge oder Auslastung. Dazu gehören häufig Material, Verpackung, Versand oder eine Provision pro Verkauf.',
          ],
          'Keine Kostenart ist in jeder Situation dauerhaft fix oder variabel. Die Einordnung richtet sich danach, welche Menge du betrachtest und über welchen Zeitraum. Miete kann zum Beispiel kurzfristig fix sein, bei einem Umzug oder einer Erweiterung aber veränderbar werden.',
        ],
      },
      {
        heading: 'Fixkosten: insgesamt gleich, je Stück veränderlich',
        paragraphs: [
          'Bei gleichbleibender Kapazität bleiben die gesamten Fixkosten zunächst gleich. Produzierst oder verkaufst du mehr Einheiten, verteilen sie sich jedoch auf mehr Stück. Dadurch sinken die Fixkosten je Stück.',
          'Das bedeutet nicht, dass die Gesamtkosten sinken. Es verändert sich nur die rechnerische Verteilung der gleichen Fixkosten auf eine größere Menge. Bei ausgelasteten Kapazitäten können Fixkosten später sprunghaft ansteigen, etwa durch zusätzliche Räume oder eine weitere Maschine.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Fixkosten je Stück',
            formula: 'Fixkosten je Stück = gesamte Fixkosten ÷ Menge',
            description: 'Je höher die Menge bei gleichbleibenden Fixkosten ist, desto geringer sind die Fixkosten je Stück.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Miete auf mehr Produkte verteilen',
            paragraphs: [
              'Ein Betrieb zahlt monatlich 2.000 Euro Miete und stellt 1.000 Produkte her. Die Fixkosten je Stück betragen 2 Euro.',
              'Bei 2.000 Produkten bleiben die gesamten Mietkosten im Beispiel bei 2.000 Euro. Die Fixkosten je Stück sinken damit auf 1 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Variable Kosten: abhängig von der Menge',
        paragraphs: [
          'Bei proportionalen variablen Kosten bleibt der Betrag je Einheit gleich, während die gesamten variablen Kosten mit der Menge steigen oder fallen. Das ist eine häufige Vereinfachung für Planungen und Berechnungen.',
          'In der Praxis können variable Stückkosten auch schwanken, zum Beispiel durch Mengenrabatte, Ausschuss, Staffelpreise oder eine andere Auslastung. Deshalb sollten Annahmen regelmäßig überprüft werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Proportionale variable Kosten',
            formula: 'Variable Gesamtkosten = variable Stückkosten × Menge',
            description: 'Die Formel setzt voraus, dass die variablen Kosten pro Einheit über den betrachteten Mengenbereich gleich bleiben.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Verpackung pro Versand',
            paragraphs: [
              'Für jede Bestellung fallen 1,50 Euro Verpackungskosten an. Bei 100 Bestellungen betragen die variablen Gesamtkosten 150 Euro.',
              'Bei 300 Bestellungen ergeben sich 450 Euro. Die Kosten je Bestellung bleiben im vereinfachten Beispiel bei 1,50 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Gesamtkosten verstehen',
        paragraphs: [
          'Die Gesamtkosten setzen sich aus den Fixkosten und den variablen Kosten zusammen. Für Planung und Kalkulation musst du beide Bestandteile auf denselben Zeitraum und dieselbe Bezugsgröße beziehen.',
          'Wenn die Menge steigt, erhöhen sich bei proportionalen variablen Kosten die Gesamtkosten. Gleichzeitig können die Fixkosten je Stück sinken. Wie sich die Kosten insgesamt entwickeln, hängt von beiden Effekten ab.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gesamtkosten',
            formula: 'Gesamtkosten = Fixkosten + variable Kosten',
            description: 'Bei proportionalen variablen Kosten kannst du die variablen Kosten vorher aus Stückkosten × Menge bestimmen.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Kosten bei 500 Einheiten',
            paragraphs: [
              'Ein Betrieb hat monatliche Fixkosten von 3.000 Euro. Die variablen Kosten liegen bei 8 Euro je Einheit.',
              'Bei 500 Einheiten betragen die variablen Kosten 4.000 Euro. Die Gesamtkosten liegen damit bei 7.000 Euro: 3.000 Euro + 4.000 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Mischkosten und sprungfixe Kosten',
        paragraphs: [
          [
            { type: 'glossary', id: 'mischkosten', text: 'Mischkosten' },
            ' enthalten einen fixen und einen variablen Anteil. Ein Telefon- oder Stromvertrag kann zum Beispiel eine Grundgebühr und einen verbrauchsabhängigen Teil enthalten.',
          ],
          [
            { type: 'glossary', id: 'sprungfixe-kosten', text: 'Sprungfixe Kosten' },
            ' bleiben innerhalb einer Kapazitätsstufe gleich und steigen dann auf ein neues Niveau. Das kann passieren, wenn wegen höherer Nachfrage zusätzliches Personal, eine zweite Schicht oder eine weitere Maschine nötig wird.',
          ],
          'Diese Kostenarten zeigen, warum eine einfache Trennung nicht jeden Geschäftsfall vollständig abbildet. Für eine erste Planung kann sie trotzdem sehr nützlich sein, wenn die Grenzen der Annahme klar sind.',
        ],
      },
      {
        heading: 'Bezug zu Deckungsbeitrag und Break-even',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'deckungsbeitrag', text: 'Deckungsbeitrag' },
            ' je Einheit ist der Verkaufspreis abzüglich der variablen Kosten je Einheit. Er zeigt, welcher Betrag nach den variablen Kosten zur Deckung der Fixkosten bleibt.',
          ],
          [
            'Der ',
            { type: 'link', href: '/wissen/break-even-point', text: 'Break-even-Point' },
            ' zeigt, ab welcher Menge oder welchem Umsatz die Summe der Deckungsbeiträge die Fixkosten deckt. Steigen Fixkosten oder variable Stückkosten, verschiebt sich die Gewinnschwelle bei sonst gleichen Annahmen nach oben.',
          ],
          'Auch bei einer Kostenvergleichsrechnung hilft die Trennung: Unterschiedliche fixe und variable Kosten können dazu führen, dass bei geringer Menge eine andere Alternative günstiger ist als bei hoher Auslastung.',
        ],
      },
      {
        heading: 'Typische Denkfehler vermeiden',
        paragraphs: [
          'Fixkosten sind nicht gleichbedeutend mit unvermeidbaren Kosten und variable Kosten nicht automatisch mit Einzelkosten. Die Einteilung nach Kostenverhalten beantwortet eine andere Frage als die direkte oder indirekte Zuordnung zu einem Auftrag.',
          'Rechne nicht mit alten Stückkosten weiter, wenn sich Preise, Produktionsabläufe oder Kapazitäten ändern. Lege außerdem immer fest, ob du Stückzahl, Arbeitsstunden, Umsatz oder einen anderen Maßstab als Bezugsgröße verwendest.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Fixe und variable Kosten hängen von Bezugsgröße und Zeitraum ab',
    'Gesamte Fixkosten bleiben innerhalb einer Kapazitätsstufe zunächst gleich, Fixkosten je Stück sinken bei steigender Menge',
    'Bei proportionalen variablen Kosten bleibt der Betrag je Einheit gleich, während die Gesamtkosten mit der Menge steigen',
    'Gesamtkosten setzen sich aus Fixkosten und variablen Kosten zusammen',
    'Mischkosten enthalten fixe und variable Bestandteile; sprungfixe Kosten steigen bei einem Kapazitätssprung',
    'Deckungsbeitrag und Break-even bauen auf der Trennung von fixen und variablen Kosten auf',
  ],
  commonMistakes: [
    'Kosten ohne Bezugsgröße und Zeitraum pauschal als fix oder variabel einordnen',
    'gesamte Fixkosten mit Fixkosten je Stück verwechseln',
    'variable Stückkosten als über jede Menge hinweg unveränderlich annehmen',
    'Mischkosten vollständig als fix oder vollständig als variabel behandeln',
    'Kapazitätssprünge bei Personal, Räumen oder Maschinen ignorieren',
    'fixe und variable Kosten mit Einzel- und Gemeinkosten gleichsetzen',
  ],
  faqs: [
    {
      question: 'Was sind Fixkosten?',
      answer: 'Fixkosten bleiben bei einer veränderten Menge innerhalb des betrachteten Zeitraums zunächst gleich. Beispiele können Miete, Versicherungen oder feste Grundgehälter sein.',
    },
    {
      question: 'Was sind variable Kosten?',
      answer: 'Variable Kosten verändern sich mit der Menge oder Auslastung. Typische Beispiele sind Material, Verpackung, Versand oder Provisionen pro Verkauf.',
    },
    {
      question: 'Warum sinken Fixkosten je Stück?',
      answer: 'Weil sich die gleichen gesamten Fixkosten auf mehr Einheiten verteilen. Die gesamten Fixkosten müssen deshalb nicht sinken.',
    },
    {
      question: 'Was sind Mischkosten?',
      answer: 'Mischkosten enthalten einen fixen und einen variablen Anteil. Ein Vertrag mit Grundgebühr und verbrauchsabhängiger Abrechnung ist ein typisches Beispiel.',
    },
    {
      question: 'Wie hängen fixe Kosten mit dem Break-even zusammen?',
      answer: 'Fixkosten müssen durch Deckungsbeiträge gedeckt werden. Höhere Fixkosten erhöhen bei gleichbleibendem Stückdeckungsbeitrag grundsätzlich die notwendige Break-even-Menge.',
    },
  ],
  related: [
    'kostenrechnung-controlling',
    'kostenarten-kostenstellen-kostentraeger',
    'break-even-point',
    'kostenvergleichsrechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default fixeVariableKosten;
