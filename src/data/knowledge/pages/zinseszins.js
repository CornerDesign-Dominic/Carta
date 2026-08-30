import { defaultDisclaimer } from '../shared.js';

const zinseszins = {
  slug: 'zinseszins',
  category: 'BWL & Rechnungswesen',
  title: 'Zinseszins',
  description: 'Zinseszins einfach erklärt: So wachsen Kapital und bereits gutgeschriebene Zinsen über mehrere Zeiträume.',
  seo: {
    title: 'Zinseszins berechnen und verstehen | Belege24',
    description: 'Erfahre, was Zinseszins bedeutet, wie die Formel funktioniert und warum Laufzeit und Verzinsung für das Endkapital wichtig sind.',
    canonicalPath: '/wissen/zinseszins',
  },
  article: {
    intro: 'Zinseszins entsteht, wenn gutgeschriebene Zinsen zum Kapital hinzukommen und in späteren Zeiträumen selbst wieder verzinst werden. Dadurch wächst die Berechnungsgrundlage mit jeder Verzinsung.',
    sections: [
      {
        heading: 'Was ist Zinseszins?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'zinseszins', text: 'Zinseszins' },
            ' werden nicht nur das ursprüngliche Kapital, sondern auch bereits gutgeschriebene Zinsen verzinst. Voraussetzung ist, dass die Zinsen dem Kapital zugerechnet werden und nicht ausgezahlt werden.',
          ],
          'Das spielt zum Beispiel bei verzinsten Guthaben oder bei Rechenmodellen für langfristige Sparziele eine Rolle. Ob und in welcher Höhe tatsächlich Zinsen gutgeschrieben werden, richtet sich immer nach dem jeweiligen Vertrag oder Produkt.',
        ],
      },
      {
        heading: 'So entsteht der Zinseszinseffekt',
        paragraphs: [
          'Im ersten Zeitraum wird das Anfangskapital verzinst. Danach erhöht sich das Kapital um die gutgeschriebenen Zinsen. Im nächsten Zeitraum wird der Zinssatz auf diesen höheren Betrag angewendet.',
          'Der Effekt wird mit längerer Laufzeit deutlicher. Er wächst nicht gleichmäßig um denselben Eurobetrag, weil die Zinsen in jedem Zeitraum auf eine größere Grundlage treffen.',
        ],
      },
      {
        heading: 'Die Grundformel für Zinseszins',
        paragraphs: [
          'Bei einer Verzinsung einmal pro Jahr kannst du das Endkapital grundsätzlich so berechnen: Endkapital = Anfangskapital × (1 + Zinssatz ÷ 100)^Laufzeit.',
          [
            'Der ',
            { type: 'glossary', id: 'zinssatz', text: 'Zinssatz' },
            ' wird dabei als Prozentwert eingesetzt. Aus 5 % wird in der Formel 5 ÷ 100, also 0,05. Die Laufzeit steht für die Anzahl der Verzinsungszeiträume.',
          ],
        ],
        list: [
          'Anfangskapital: Betrag zu Beginn der Berechnung',
          'Zinssatz: Zinsen pro Verzinsungszeitraum in Prozent',
          'Laufzeit: Anzahl der Verzinsungszeiträume',
          'Endkapital: Anfangskapital zuzüglich aller gutgeschriebenen Zinsen',
        ],
      },
      {
        heading: 'Beispiel: 10.000 Euro mit 5 % pro Jahr',
        paragraphs: [
          'Bei 10.000 Euro Anfangskapital und 5 % Zinsen pro Jahr ergeben sich bei jährlicher Verzinsung nach drei Jahren 11.576,25 Euro Endkapital.',
          'Nach dem ersten Jahr sind es 10.500 Euro. Im zweiten Jahr werden 5 % auf 10.500 Euro berechnet, im dritten Jahr auf 11.025 Euro. Die Zinsen wachsen also von 500 Euro im ersten auf 551,25 Euro im dritten Jahr.',
        ],
        list: [
          'Jahr 1: 10.000 Euro × 1,05 = 10.500 Euro',
          'Jahr 2: 10.500 Euro × 1,05 = 11.025 Euro',
          'Jahr 3: 11.025 Euro × 1,05 = 11.576,25 Euro',
        ],
      },
      {
        heading: 'Unterschied zwischen einfachen Zinsen und Zinseszins',
        paragraphs: [
          'Bei einfachen Zinsen bleibt das Anfangskapital die Grundlage für jede Zinsberechnung. Bei 10.000 Euro und 5 % entstehen deshalb jedes Jahr 500 Euro Zinsen.',
          [
            'Beim Zinseszins steigt die Grundlage nach jeder Gutschrift. Die Grundlagen zur einfachen Zinsrechnung findest du auf der Wissensseite ',
            { type: 'link', href: '/wissen/zinsen', text: 'Zinsen' },
            '.',
          ],
        ],
      },
      {
        heading: 'Regelmäßige Einzahlungen und unterschiedliche Zinssätze',
        paragraphs: [
          'Bei regelmäßigen Einzahlungen wird nicht jeder Betrag gleich lange verzinst. Eine Einzahlung am Anfang der Laufzeit kann länger Zinsen tragen als eine spätere Einzahlung. Deshalb reicht die einfache Grundformel dann meist nicht aus.',
          'Ändert sich der Zinssatz, musst du die einzelnen Zeiträume getrennt berechnen. Auch die Häufigkeit der Verzinsung ist wichtig: Bei monatlicher oder vierteljährlicher Gutschrift muss der Zinssatz und die Anzahl der Zeiträume passend umgerechnet werden.',
        ],
      },
      {
        heading: 'Zinseszins bei Schulden',
        paragraphs: [
          'Bei Schulden können Zinsen nach den Regeln des jeweiligen Vertrags oder Produkts anfallen. Zinseszinsen sind dabei nicht automatisch zulässig: Für im Voraus vereinbarte Zinsen auf fällige Zinsen und für Verzugszinsen enthält das BGB besondere Regeln.',
          'Prüfe bei Krediten, offenen Forderungen oder streitigen Beträgen immer die Vertragsunterlagen und hole bei Bedarf fachliche Beratung ein. Diese Seite erklärt nur die mathematische Berechnung.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle nicht den Zinssatz in Prozent mit der Dezimalzahl in der Formel. Berücksichtige außerdem, wie oft die Zinsen gutgeschrieben werden, und setze bei Sparraten jede Einzahlung mit ihrer eigenen Laufzeit an. Rechne bei wechselnden Zinssätzen nicht mit einem unveränderten Wert weiter.',
        ],
      },
    ],
  },
  generator: {
    label: 'Zinseszins berechnen',
    href: '/tools/zinseszins',
    text: 'Berechne Zinseszins mit Anfangskapital, Zinssatz, Laufzeit und regelmäßigen Einzahlungen direkt im Rechner.',
  },
  keyPoints: [
    'Zinseszins verzinst auch bereits gutgeschriebene Zinsen',
    'Anfangskapital, Zinssatz, Laufzeit und Verzinsungsintervall bestimmen das Ergebnis',
    'bei jährlicher Verzinsung lautet die Grundformel: Anfangskapital × (1 + Zinssatz ÷ 100)^Laufzeit',
    'regelmäßige Einzahlungen haben unterschiedliche Verzinsungszeiträume',
    'wechselnde Zinssätze und Verzinsungsintervalle müssen getrennt berücksichtigt werden',
    'der Zinseszinseffekt beschreibt eine Rechenmethode, keine zugesagte Rendite',
  ],
  commonMistakes: [
    'den Zinssatz in Prozent nicht durch 100 teilen',
    'einfache Zinsen und Zinseszins verwechseln',
    'monatliche oder vierteljährliche Verzinsung wie eine jährliche behandeln',
    'bei Sparraten für jede Einzahlung dieselbe Laufzeit annehmen',
    'bei wechselnden Zinssätzen mit einem unveränderten Zinssatz rechnen',
    'eine Rechenannahme mit einer garantierten Rendite verwechseln',
  ],
  faqs: [
    {
      question: 'Was ist Zinseszins einfach erklärt?',
      answer: 'Zinseszins bedeutet, dass gutgeschriebene Zinsen zum Kapital hinzukommen und in späteren Zeiträumen selbst wieder verzinst werden.',
    },
    {
      question: 'Wie lautet die Zinseszinsformel?',
      answer: 'Bei jährlicher Verzinsung lautet sie: Endkapital = Anfangskapital × (1 + Zinssatz ÷ 100)^Laufzeit.',
    },
    {
      question: 'Was ist der Unterschied zwischen Zinsen und Zinseszins?',
      answer: 'Bei einfachen Zinsen wird nur das Anfangskapital verzinst. Beim Zinseszins werden zusätzlich bereits gutgeschriebene Zinsen mitverzinst.',
    },
    {
      question: 'Wie wirkt sich die Laufzeit auf Zinseszins aus?',
      answer: 'Mit jedem weiteren Verzinsungszeitraum wächst die Berechnungsgrundlage. Deshalb wird der Unterschied zu einfachen Zinsen bei längeren Laufzeiten meist deutlicher.',
    },
    {
      question: 'Wie berechnet man Zinseszins mit regelmäßigen Einzahlungen?',
      answer: 'Jede Einzahlung wird nur ab ihrem Einzahlungszeitpunkt verzinst. Der Zinseszinsrechner berücksichtigt deshalb Anfangskapital, Laufzeit und regelmäßige Einzahlungen getrennt.',
    },
    {
      question: 'Was passiert bei unterschiedlichen Zinssätzen?',
      answer: 'Du berechnest jeden Zeitraum mit dem Zinssatz, der in diesem Zeitraum gilt. Ein einziger unveränderter Zinssatz passt dann nicht für die gesamte Laufzeit.',
    },
    {
      question: 'Gibt es Zinseszins auch bei Schulden?',
      answer: 'Zinsen können bei Schulden vertraglich oder gesetzlich geregelt sein. Zinseszinsen sind nicht automatisch zulässig; dafür gelten je nach Fall besondere Regeln.',
    },
  ],
  related: [
    'zinsen',
  ],
  sources: [
    {
      label: '§ 248 BGB – Zinseszinsen',
      url: 'https://www.gesetze-im-internet.de/bgb/__248.html',
    },
    {
      label: '§ 289 BGB – Verzinsung von Zinsen',
      url: 'https://www.gesetze-im-internet.de/bgb/__289.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default zinseszins;
