import { defaultDisclaimer } from '../shared.js';

const deckungsbeitragsquote = {
  slug: 'deckungsbeitragsquote',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Deckungsbeitragsquote',
  description: 'Deckungsbeitragsquote einfach erklärt: Deckungsbeitrag und Umsatz ins Verhältnis setzen und Preis- sowie Kostenwirkungen einordnen.',
  seo: {
    title: 'Deckungsbeitragsquote berechnen | Belege24',
    description: 'Erfahre, was die Deckungsbeitragsquote aussagt, wie du sie berechnest und wie Preise, variable Kosten und Produktmix den Wert beeinflussen.',
    canonicalPath: '/wissen/deckungsbeitragsquote',
  },
  article: {
    intro: 'Die Deckungsbeitragsquote zeigt, welcher Anteil des Umsatzes nach Abzug der variablen Kosten als Deckungsbeitrag verbleibt. Sie erleichtert Vergleiche zwischen Produkten, Perioden oder Bereichen, sagt allein aber noch nichts über die vollständige Deckung der Fixkosten oder den Gewinn aus.',
    sections: [
      {
        heading: 'Was sagt die Deckungsbeitragsquote aus?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'deckungsbeitragsquote', text: 'Deckungsbeitragsquote' },
            ' setzt den ',
            { type: 'glossary', id: 'deckungsbeitrag', text: 'Deckungsbeitrag' },
            ' ins Verhältnis zum ',
            { type: 'glossary', id: 'umsatz', text: 'Umsatz' },
            '. Sie wird in Prozent angegeben.',
          ],
          'Eine Quote von 40 Prozent bedeutet rechnerisch, dass von einem Euro Umsatz 40 Cent Deckungsbeitrag verbleiben. Dieser Betrag steht zunächst zur Deckung von Fixkosten zur Verfügung; erst darüber hinaus kann ein Gewinn entstehen.',
        ],
      },
      {
        heading: 'Deckungsbeitragsquote berechnen',
        paragraphs: [
          'Deckungsbeitrag und Umsatz müssen sich auf dasselbe Produkt, denselben Bereich oder denselben Zeitraum beziehen. Auch die Kostenabgrenzung muss einheitlich sein, damit der Wert vergleichbar bleibt.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Deckungsbeitragsquote',
            formula: 'Deckungsbeitragsquote = Deckungsbeitrag / Umsatz × 100',
            description: 'Der Deckungsbeitrag ergibt sich aus Umsatz minus den zugehörigen variablen Kosten. Unterschiedliche Abgrenzungen führen zu unterschiedlichen Quoten.',
          },
        ],
        exampleCards: [
          {
            title: 'Quote eines Produkts',
            paragraphs: [
              'Ein Produkt erzielt in einem Zeitraum 100.000 Euro Umsatz. Die zugehörigen variablen Kosten betragen 60.000 Euro. Der Deckungsbeitrag liegt damit bei 40.000 Euro.',
              'Deckungsbeitragsquote = 40.000 Euro / 100.000 Euro × 100 = 40 Prozent.',
              'Von jedem Euro Umsatz verbleiben rechnerisch 40 Cent zur Deckung der Fixkosten und anschließend gegebenenfalls für Gewinn. Ob die Quote für das Produkt angemessen ist, hängt von Fixkosten, Absatzmenge, Kapazität, Markt und weiteren Zielen ab.',
            ],
            effects: [
              'Umsatz: 100.000 Euro',
              'Variable Kosten: 60.000 Euro',
              'Deckungsbeitrag: 100.000 Euro − 60.000 Euro = 40.000 Euro',
              'Vollständige Rechnung: 40.000 Euro / 100.000 Euro × 100 = 40 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit variablen Kosten',
        paragraphs: [
          [
            { type: 'glossary', id: 'variable-kosten', text: 'Variable Kosten' },
            ' verändern sich mit Menge oder Leistung und werden für den Deckungsbeitrag vom Umsatz abgezogen. Je größer ihr Anteil am Umsatz ist, desto kleiner ist bei sonst gleichen Bedingungen die Deckungsbeitragsquote.',
          ],
          'Entscheidend ist die sachgerechte Trennung von variablen und fixen Kosten. Werden fixe Kosten irrtümlich als variabel behandelt oder variable Kosten ausgelassen, ist die Quote verzerrt.',
        ],
      },
      {
        heading: 'Unterschied zum absoluten Deckungsbeitrag',
        paragraphs: [
          'Der absolute Deckungsbeitrag ist ein Geldbetrag. Er zeigt, wie viele Euro insgesamt zur Deckung der Fixkosten beitragen. Die Deckungsbeitragsquote ist dagegen ein relativer Prozentwert je Euro Umsatz.',
          'Ein Produkt kann eine hohe Quote, aber wegen geringer Absatzmenge nur einen kleinen absoluten Deckungsbeitrag liefern. Umgekehrt kann eine niedrigere Quote bei sehr hohem Umsatz zu einem großen Gesamtdeckungsbeitrag führen. Für Entscheidungen sind häufig beide Größen nötig.',
        ],
      },
      {
        heading: 'Einfluss von Preis und variablen Kosten',
        paragraphs: [
          'Steigt der Verkaufspreis bei unveränderten variablen Stückkosten, erhöht sich grundsätzlich die Deckungsbeitragsquote. Ob das wirtschaftlich vorteilhaft ist, hängt auch davon ab, wie Absatzmenge und Kundenverhalten auf den Preis reagieren.',
          'Steigen variable Kosten, während der Preis unverändert bleibt, sinken Deckungsbeitrag und Quote. Einkaufskonditionen, Materialeinsatz, Verpackung, Versand oder variable Provisionen können den Wert beeinflussen.',
          'Bei Rabatten, unterschiedlichen Verkaufspreisen und wechselndem Produktmix reichen pauschale Listenpreise nicht aus. Verwende die tatsächlich zur Betrachtung gehörenden Umsätze und variablen Kosten.',
        ],
      },
      {
        heading: 'Produkte, Perioden und Bereiche vergleichen',
        paragraphs: [
          'Die Quote kann Produkte mit unterschiedlichen Preisen oder Umsätzen relativ vergleichbar machen. Der absolute Deckungsbeitrag, Kapazitätsbedarf und Absatz bleiben dennoch wichtig. Eine hohe Quote pro Einheit hilft wenig, wenn kaum Einheiten verkauft werden oder knappe Ressourcen falsch eingesetzt werden.',
          'Im Zeitvergleich zeigt sich, ob Preis-, Kosten- oder Mixveränderungen den Anteil am Umsatz verschoben haben. Bereiche können nur verglichen werden, wenn Erlöse und variable Kosten nach denselben Regeln zugeordnet werden.',
          'Branche, Geschäftsmodell und Wertschöpfungstiefe beeinflussen typische Kostenstrukturen. Allgemeingültige Idealwerte lassen sich daher nicht festlegen.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Die Deckungsbeitragsquote berücksichtigt die Höhe der Fixkosten nicht. Eine positive oder hohe Quote garantiert deshalb weder Gewinn noch ausreichende Liquidität. Auch Investitionen, Kapitalbindung, Risiken und qualitative Ziele werden nicht vollständig abgebildet.',
          'Durchschnittswerte können Unterschiede zwischen Kunden, Aufträgen oder Varianten verdecken. Bei Engpässen kann außerdem der Deckungsbeitrag je knapper Einheit aussagekräftiger sein als die Quote am Umsatz.',
          'Die Kennzahl sollte zusammen mit absolutem Deckungsbeitrag, Fixkosten, Break-even, Kapazität und Nachfrage betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Deckungsbeitragsquote setzt Deckungsbeitrag ins Verhältnis zum Umsatz',
    'Sie zeigt den Deckungsbeitrag je Euro Umsatz in Prozent',
    'Variable Kosten beeinflussen die Quote unmittelbar',
    'Absolute und relative Deckungsbeiträge beantworten unterschiedliche Fragen',
    'Preis, Kosten, Menge und Produktmix sollten gemeinsam betrachtet werden',
    'Die Quote berücksichtigt Fixkosten und Liquidität nicht vollständig',
  ],
  commonMistakes: [
    'Deckungsbeitrag und Umsatz aus unterschiedlichen Zeiträumen verwenden',
    'fixe und variable Kosten falsch abgrenzen',
    'Deckungsbeitragsquote mit absolutem Deckungsbeitrag verwechseln',
    'eine hohe Quote automatisch mit hohem Gesamtgewinn gleichsetzen',
    'Absatzmenge, Kapazitätsbedarf und Produktmix ignorieren',
    'Listenpreise statt tatsächlich erzielter Umsätze verwenden',
    'Quoten mit unterschiedlichen Kostenabgrenzungen direkt vergleichen',
    'pauschale Idealwerte auf unterschiedliche Branchen übertragen',
  ],
  faqs: [
    { question: 'Was sagt die Deckungsbeitragsquote aus?', answer: 'Sie zeigt, welcher Anteil des Umsatzes nach Abzug der variablen Kosten als Deckungsbeitrag verbleibt.' },
    { question: 'Wie wird die Deckungsbeitragsquote berechnet?', answer: 'Der Deckungsbeitrag wird durch den Umsatz derselben Betrachtung geteilt und mit 100 multipliziert.' },
    { question: 'Was ist der Unterschied zum Deckungsbeitrag?', answer: 'Der Deckungsbeitrag ist ein Geldbetrag. Die Deckungsbeitragsquote zeigt diesen Betrag relativ zum Umsatz in Prozent.' },
    { question: 'Ist eine hohe Deckungsbeitragsquote immer gut?', answer: 'Nein. Fixkosten, Absatzmenge, Kapazität, Nachfrage und Risiken müssen zusätzlich betrachtet werden.' },
    { question: 'Wie wirken steigende variable Kosten?', answer: 'Bei unverändertem Preis sinken Deckungsbeitrag und Deckungsbeitragsquote grundsätzlich.' },
  ],
  related: ['deckungsbeitrag', 'break-even-point', 'fixkostenquote'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default deckungsbeitragsquote;
