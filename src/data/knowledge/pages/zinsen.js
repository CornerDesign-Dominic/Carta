import { defaultDisclaimer } from '../shared.js';

const zinsen = {
  slug: 'zinsen',
  category: 'Finanzierung & Investition',
  title: 'Zinsen',
  description: 'Zinsen einfach erklärt: Kapital, Zinssatz, Laufzeit, einfache Zinsrechnung und der Unterschied zu Zinseszins.',
  seo: {
    title: 'Zinsen einfach berechnen und verstehen | Belege24',
    description: 'Was Zinsen bedeuten, wie die einfache Zinsrechnung funktioniert und worin der Unterschied zwischen Zinsen und Zinseszins liegt.',
    canonicalPath: '/wissen/zinsen',
  },
  article: {
    intro: 'Zinsen sind das Entgelt dafür, dass Geld für eine bestimmte Zeit angelegt, geliehen oder zur Verfügung gestellt wird. Die einfache Zinsrechnung zeigt, wie sich Kapital, Zinssatz und Laufzeit auf den Zinsbetrag auswirken.',
    sections: [
      {
        heading: 'Was sind Zinsen?',
        paragraphs: [
          'Zinsen können entstehen, wenn du Geld anlegst oder wenn du Geld leihst. Bei einer Geldanlage erhältst du Guthabenzinsen. Bei einem Kredit zahlst du Kreditzinsen an den Kreditgeber.',
          'Wie hoch der Zinsbetrag ist, hängt vor allem vom Kapital, dem Zinssatz und der Laufzeit ab. Die einfache Zinsrechnung betrachtet dabei nur das ursprüngliche Kapital.',
        ],
      },
      {
        heading: 'Kapital, Zinssatz und Laufzeit',
        paragraphs: [
          'Das Kapital ist der Betrag, der verzinst wird. Der Zinssatz beschreibt in Prozent, wie viel Zinsen für einen bestimmten Zeitraum anfallen. Die Laufzeit ist der Zeitraum, für den das Kapital angelegt oder geliehen wird.',
          [
            'Ein ',
            { type: 'glossary', id: 'zinssatz', text: 'Zinssatz' },
            ' von 5 % pro Jahr bedeutet: Für 100 Euro Kapital entstehen bei einfacher Verzinsung nach einem Jahr 5 Euro Zinsen. Der Zins ist also der Eurobetrag, der Zinssatz die Prozentangabe.',
          ],
        ],
      },
      {
        heading: 'Einfache Zinsen berechnen',
        paragraphs: [
          'Für ein volles Jahr lautet die einfache Grundformel: Zinsen = Kapital × Zinssatz ÷ 100. Bei 2.000 Euro Kapital und 3 % Zinssatz entstehen 60 Euro Zinsen für ein Jahr.',
          'Allgemein kannst du die Laufzeit als Anteil eines Jahres berücksichtigen: Zinsen = Kapital × Zinssatz ÷ 100 × Zeit in Jahren. Bei sechs Monaten wird für eine einfache Rechnung häufig mit 6 ÷ 12 Jahren gerechnet.',
        ],
        list: [
          'Kapital: 2.000 Euro',
          'Zinssatz: 3 % p. a.',
          'Laufzeit: 1 Jahr',
          'Zinsen: 2.000 × 3 ÷ 100 = 60 Euro',
        ],
      },
      {
        heading: 'Was bedeutet p. a.?',
        paragraphs: [
          'Die Abkürzung p. a. steht für „pro Jahr“. Ein Zinssatz von 3 % p. a. bezieht sich auf ein Jahr. Für mehrere Monate oder Tage wird der Jahreszins anteilig berechnet.',
          'Bei unterjährigen Laufzeiten kann die konkrete Zinsmethode abweichen. Verträge, Banken oder Rechnungen können zum Beispiel unterschiedliche Tageszählungen oder Jahresgrundlagen verwenden. Prüfe deshalb bei einer verbindlichen Berechnung die vereinbarte Methode.',
        ],
      },
      {
        heading: 'Guthabenzinsen und Kreditzinsen',
        paragraphs: [
          'Guthabenzinsen erhältst du für angelegtes Kapital, zum Beispiel auf einem verzinsten Konto oder einer Geldanlage. Kreditzinsen zahlst du für geliehenes Geld, etwa bei einem Darlehen.',
          'Die Grundformel für einfache Zinsen bleibt gleich. Der Unterschied liegt darin, wer die Zinsen erhält und ob sie einen Ertrag oder eine Kostenposition darstellen.',
        ],
      },
      {
        heading: 'Nominalzins und effektiver Jahreszins',
        paragraphs: [
          'Der Nominalzins beziehungsweise Sollzinssatz beschreibt den vereinbarten Zins auf den Darlehensbetrag. Der effektive Jahreszins berücksichtigt bei Verbraucherdarlehen zusätzlich die für den Verbraucher bekannten Gesamtkosten, soweit sie nach den gesetzlichen Regeln einzubeziehen sind.',
          'Für einen ersten Vergleich von Krediten ist der effektive Jahreszins deshalb oft aussagekräftiger. Die einfache Zinsrechnung auf dieser Seite ersetzt jedoch keine vollständige Kreditkostenberechnung.',
        ],
      },
      {
        heading: 'Zinsen und Zinseszins: der Unterschied',
        paragraphs: [
          'Bei einfachen Zinsen wird der Zinsbetrag immer nur aus dem ursprünglichen Kapital berechnet. Zinsen von früheren Zeiträumen werden nicht erneut verzinst.',
          [
            'Beim Zinseszins werden bereits entstandene Zinsen dem Kapital zugerechnet und künftig mitverzinst. Mehr dazu findest du in der Wissensseite ',
            { type: 'link', href: '/wissen/zinseszins', text: 'Zinseszins' },
            '. Für praktische Berechnungen mit regelmäßigem Zinseszins nutze den ',
            { type: 'link', href: '/tools/zinseszins', text: 'Zinseszinsrechner' },
            '.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle nicht den Zinssatz in Prozent mit dem Zinsbetrag in Euro. Berücksichtige bei unterjährigen Laufzeiten den richtigen Zeitanteil und prüfe die vereinbarte Zinsmethode. Rechne Zinseszins nicht mit einer Formel für einfache Zinsen und vergleiche bei Krediten nicht nur den Nominalzins.',
        ],
      },
    ],
  },
  generator: {
    label: 'Zinsen berechnen',
    href: '/tools/zinsrechner',
    text: 'Berechne einfache Zinsen aus Kapital, Zinssatz und Laufzeit direkt im Zinsrechner.',
  },
  keyPoints: [
    'Zinsen sind das Entgelt für bereitgestelltes Kapital',
    'Kapital, Zinssatz und Laufzeit bestimmen den Zinsbetrag',
    'der Zins ist ein Betrag in Euro, der Zinssatz eine Prozentangabe',
    'p. a. bedeutet pro Jahr',
    'einfache Zinsen werden nur aus dem ursprünglichen Kapital berechnet',
    'Guthabenzinsen sind Erträge, Kreditzinsen Kosten',
    'bei Verbraucherdarlehen berücksichtigt der effektive Jahreszins weitere relevante Kosten',
  ],
  commonMistakes: [
    'Zinssatz und Zinsbetrag verwechseln',
    'Prozent nicht durch 100 teilen',
    'Monate oder Tage wie volle Jahre behandeln',
    'eine vereinbarte Zinsmethode nicht beachten',
    'einfache Zinsen und Zinseszins verwechseln',
    'bei Krediten nur den Nominalzins vergleichen',
  ],
  faqs: [
    {
      question: 'Wie berechnet man einfache Zinsen?',
      answer: 'Für ein Jahr rechnest du: Kapital × Zinssatz ÷ 100. Für einen kürzeren Zeitraum multiplizierst du zusätzlich mit dem Anteil des Jahres.',
    },
    {
      question: 'Was bedeutet 5 % Zinsen?',
      answer: 'Bei einfacher Verzinsung entstehen für 100 Euro Kapital nach einem Jahr 5 Euro Zinsen. Bei 1.000 Euro wären es 50 Euro.',
    },
    {
      question: 'Was bedeutet p. a.?',
      answer: 'p. a. bedeutet pro Jahr. Ein Zinssatz von 3 % p. a. bezieht sich auf zwölf Monate.',
    },
    {
      question: 'Was ist der Unterschied zwischen Zinsen und Zinssatz?',
      answer: 'Der Zinssatz ist die Prozentangabe, zum Beispiel 3 %. Die Zinsen sind der daraus berechnete Geldbetrag, zum Beispiel 60 Euro.',
    },
    {
      question: 'Was ist der Unterschied zwischen einfachen Zinsen und Zinseszins?',
      answer: 'Bei einfachen Zinsen bleibt das ursprüngliche Kapital die Berechnungsgrundlage. Beim Zinseszins werden frühere Zinsen dem Kapital zugerechnet und künftig mitverzinst.',
    },
    {
      question: 'Wie berechnet man Zinsen für mehrere Monate?',
      answer: 'Bei einer einfachen Monatsbetrachtung rechnest du den Jahreszins anteilig, zum Beispiel mit Monate ÷ 12. Die vertraglich vereinbarte Zinsmethode kann davon abweichen.',
    },
    {
      question: 'Was sind Guthabenzinsen und Kreditzinsen?',
      answer: 'Guthabenzinsen erhältst du für angelegtes Geld. Kreditzinsen zahlst du für geliehenes Geld.',
    },
  ],
  related: [
    'zinseszins',
    'verzugszinsen',
    'faelligkeit',
  ],
  sources: [
    {
      label: '§ 16 PAngV – Verbraucherdarlehen und effektiver Jahreszins',
      url: 'https://www.gesetze-im-internet.de/pangv_2022/__16.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default zinsen;
