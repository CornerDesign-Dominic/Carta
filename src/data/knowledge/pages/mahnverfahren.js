import { defaultDisclaimer } from '../shared.js';

const mahnverfahren = {
  slug: "mahnverfahren",
  category: "Mahnwesen",
  title: "Mahnung",
  description: "Eine Mahnung fordert zur Zahlung einer offenen Forderung auf und hilft, die nächsten Schritte bei ausbleibender Zahlung einzuordnen.",
  seo: {
    title: "Mahnung einfach erklärt | Belege24",
    description: "Erfahre, wann eine Mahnung sinnvoll ist, welche Angaben sie enthält und welche Schritte bei ausbleibender Zahlung folgen können.",
    canonicalPath: "/wissen/mahnverfahren",
  },
  article: {
  intro: "Eine Mahnung fordert zur Zahlung eines offenen oder fälligen Betrags auf. Sie nennt die Forderung, setzt eine klare Frist und macht deutlich, welche Schritte folgen können, wenn die Zahlung weiter ausbleibt.",
  sections: [
    {
      heading: "Was ist eine Mahnung?",
      paragraphs: [
        "Eine Mahnung ist die klare Aufforderung, eine offene Rechnung zu bezahlen. Sie sollte nachvollziehbar zeigen, um welche Rechnung es geht, welcher Betrag offen ist und bis wann gezahlt werden soll.",
        [
          'Sie hilft dabei, den ',
          { type: 'glossary', id: 'zahlungsverzug', text: 'Zahlungsverzug' },
          ' zu dokumentieren und die nächsten Schritte vorzubereiten. Gleichzeitig sollte sie sachlich bleiben, damit eine spätere Klärung nicht unnötig erschwert wird.',
        ],
      ],
    },

     {
  heading: "Möglicher Ablauf im Mahnprozess",
  paragraphs: [
    "Ein Mahnprozess beginnt oft freundlich und wird mit jeder Stufe verbindlicher. Ziel ist es, die offene Rechnung zu klären, eine Zahlung zu erreichen und bei Bedarf weitere Schritte sauber vorzubereiten.",
  ],
  subsections: [
    {
      heading: "Zahlungserinnerung",
      paragraphs: [
        "Die Zahlungserinnerung ist meist der erste freundliche Hinweis auf eine offene Rechnung. Sie klärt, ob die Zahlung nur verspätet ist, die Rechnung übersehen wurde oder beim Empfänger nicht angekommen ist.",
      ],
    },
    {
      heading: "1. Mahnung",
      paragraphs: [
        [
          'Die erste Mahnung fordert den offenen Betrag erstmals ausdrücklich ein. Sie nennt Rechnung, Betrag und ',
          { type: 'glossary', id: 'faelligkeit', text: 'Fälligkeit' },
          ' und setzt eine neue klare Zahlungsfrist.',
        ],
      ],
    },
    {
      heading: "2. Mahnung",
      paragraphs: [
        "Die zweite Mahnung wird deutlicher, wenn auf die erste Mahnung keine Zahlung folgt. Sie erinnert an die bereits gesetzte Frist und weist darauf hin, dass weitere Kosten oder Schritte entstehen können.",
      ],
    },
    {
      heading: "3. Mahnung",
      paragraphs: [
        "Die dritte Mahnung ist meist die letzte reguläre Mahnstufe. Sie macht klar, dass bei weiterem Zahlungsverzug rechtliche oder externe Maßnahmen folgen können.",
      ],
    },
    {
      heading: "Letztes Aufforderungsschreiben",
      paragraphs: [
        "Das letzte Aufforderungsschreiben setzt eine abschließende Frist vor weiteren Maßnahmen. Es sollte sachlich bleiben und klar benennen, was passiert, wenn die Zahlung weiter ausbleibt.",
      ],
    },
  ],
},

      {
  heading: "Möglichkeiten nach einer Mahnung",
  paragraphs: [
    "Bleibt die Zahlung trotz Mahnungen aus, können weitere Schritte nötig werden. Welche Lösung passt, hängt von Forderung, Kunde, Nachweisen und Kostenrisiko ab.",
  ],
  subsections: [
     {
      heading: "Einigung oder Ratenzahlung",
      paragraphs: [
        "Manchmal lässt sich die Forderung noch ohne externe Hilfe klären. Eine schriftliche Ratenzahlung oder Zahlungsvereinbarung kann sinnvoll sein, wenn der Kunde zahlen will, aber mehr Zeit braucht.",
      ],
    },
    {
      heading: "Inkasso",
      paragraphs: [
        "Ein Inkassodienstleister übernimmt die weitere Zahlungsaufforderung und Kommunikation mit dem Schuldner. Das kann entlasten, verursacht aber zusätzliche Kosten und sollte gut dokumentiert werden.",
      ],
    },
    {
      heading: "Gerichtliches Mahnverfahren",
      paragraphs: [
        "Das gerichtliche Mahnverfahren ist ein formeller Weg, um eine offene Forderung geltend zu machen. Es eignet sich vor allem, wenn die Forderung klar beziffert ist und keine umfangreiche inhaltliche Prüfung erwartet wird.",
      ],
    },
    {
      heading: "Gerichtsprozess",
      paragraphs: [
        "Ein Gerichtsprozess kommt infrage, wenn die Forderung bestritten wird oder eine Klärung vor Gericht nötig ist. Dabei sollten Aufwand, Kosten und Erfolgsaussichten vorher sorgfältig abgewogen werden.",
      ],
    },
    {
      heading: "Forderung abschreiben / ausbuchen",
      paragraphs: [
        "Im Falle, das die Forderung weder durch das Inkasso oder einen Prozess eintreibbar ist oder wird, besteht die Möglichkeit die Forderung als Verlust abzuschreiben bzw. auszubuchen",
      ],
    },
  ],
},

      
      {
  heading: "Häufiger Ablauf in der Praxis",
  paragraphs: [
    "In der Praxis startet der Prozess oft direkt mit der ersten Mahnung, ohne vorherige Zahlungserinnerung. Auch ein letztes Aufforderungsschreiben gibt es nicht immer: Häufig folgt nach der dritten Mahnung direkt der nächste Schritt, etwa Inkasso, eine anwaltliche Zahlungsaufforderung oder das gerichtliche Mahnverfahren.",
  ],
},

      {
  heading: "Das gerichtliche Mahnverfahren",
  paragraphs: [
    [
      'Das ',
      { type: 'glossary', id: 'gerichtliches-mahnverfahren', text: 'gerichtliche Mahnverfahren' },
      ' ist ein formeller Weg, um eine offene Geldforderung geltend zu machen. Der Gläubiger beantragt dafür beim zuständigen Mahngericht den Erlass eines ',
      { type: 'glossary', id: 'mahnbescheid', text: 'Mahnbescheids' },
      '. Der Antrag kann in vielen Fällen online über das zentrale Mahnportal der Justiz gestellt werden.',
    ],
    "Nach dem Antrag prüft das Gericht nicht, ob die Forderung inhaltlich berechtigt ist. Es prüft vor allem die formalen Angaben. Wird der Mahnbescheid erlassen, stellt das Gericht ihn dem Schuldner offiziell zu.",
    "Ab der Zustellung hat der Schuldner in der Regel zwei Wochen Zeit. Er kann die Forderung bezahlen, vollständig widersprechen oder nur einem Teil der Forderung widersprechen. Eine Begründung muss er für den Widerspruch nicht angeben.",
    "Legt der Schuldner Widerspruch ein, wird das Mahnverfahren zunächst gestoppt. Auf Antrag kann die Sache dann in ein normales gerichtliches Verfahren übergehen. Dort wird geprüft, ob die Forderung tatsächlich besteht.",
    [
      'Reagiert der Schuldner nicht und zahlt auch nicht, kann der Gläubiger nach Ablauf der Frist den ',
      { type: 'glossary', id: 'vollstreckungsbescheid', text: 'Vollstreckungsbescheid' },
      ' beantragen. Auch dagegen kann der Schuldner innerhalb von zwei Wochen Einspruch einlegen.',
    ],
    "Bleibt auch gegen den Vollstreckungsbescheid kein Einspruch, erhält der Gläubiger einen vollstreckbaren Titel. Damit können weitere Schritte wie die Zwangsvollstreckung eingeleitet werden.",
  ],
},

    ],
  },
  generator: {
    label: "Mahnung erstellen",
    href: "/dokumente",
    text: "Nutze den passenden Belege24-Generator, um dein Dokument schnell und übersichtlich zu erstellen.",
  },
  keyPoints: [
    "klare Bezugnahme auf Rechnung und Fälligkeit",
    "offener Rechnungsbetrag",
    "neue Zahlungsfrist",
    "sachlicher und bestimmter Ton",
    "Zahlungsinformationen",
    "Hinweis auf mögliche weitere Schritte",
  ],
  commonMistakes: [
    "fehlende neue Frist",
    "unvollständige Rechnungsdaten",
    "zu aggressiver Ton",
    "unklare Forderungshöhe",
  ],
  faqs: [
  {
    question: "Wann ist eine Mahnung sinnvoll?",
    answer: "Eine Mahnung ist sinnvoll, wenn eine Rechnung fällig ist und der offene Betrag trotz Zahlungsziel nicht bezahlt wurde.",
  },
  {
    question: "Muss vor der ersten Mahnung eine Zahlungserinnerung geschickt werden?",
    answer: "Nein, das ist nicht zwingend nötig. In der Praxis wird oft direkt mit der ersten Mahnung gestartet. Eine Zahlungserinnerung kann aber sinnvoll sein, wenn man den Kunden zunächst freundlich erinnern möchte.",
  },
  {
    question: "Welche Frist setzt man in einer Mahnung?",
    answer: "Häufig wird eine kurze und klare Zahlungsfrist gesetzt. Wichtig ist, dass der Empfänger eindeutig erkennt, bis wann der offene Betrag bezahlt werden soll.",
  },
  {
    question: "Wie sollte eine Mahnung formuliert sein?",
    answer: "Eine Mahnung sollte sachlich, bestimmt und nachvollziehbar sein. Sie sollte Rechnung, Betrag, Fälligkeit, neue Zahlungsfrist und mögliche weitere Schritte klar nennen.",
  },
  {
    question: "Wie viele Mahnungen sollte man schicken?",
    answer: "Eine feste Anzahl gibt es nicht. Häufig werden bis zu drei Mahnungen verschickt. Je nach Fall kann aber auch früher ein nächster Schritt folgen.",
  },
  {
    question: "Muss ich noch mahnen, wenn ich weiß, dass der Rechnungsempfänger nicht zahlen wird?",
    answer: "Eine Mahnung kann trotzdem sinnvoll sein, um die Forderung und den weiteren Ablauf zu dokumentieren. Sie schafft eine nachvollziehbare Grundlage für spätere Schritte wie Inkasso oder ein gerichtliches Mahnverfahren.",
  },
  {
    question: "Was passiert nach der letzten Mahnung?",
    answer: "Bleibt die Zahlung weiter aus, können weitere Schritte folgen. Dazu gehören zum Beispiel Inkasso, eine anwaltliche Zahlungsaufforderung, das gerichtliche Mahnverfahren oder ein Gerichtsprozess.",
  },
  {
    question: "Was ist der Unterschied zwischen Mahnung und gerichtlichem Mahnverfahren?",
    answer: "Eine Mahnung ist eine direkte Zahlungsaufforderung des Gläubigers. Das gerichtliche Mahnverfahren läuft über das zuständige Mahngericht und kann zu einem Vollstreckungstitel führen.",
  },
],

  related: [
    "mahnwesen",
    "rechnung",
    "zahlungserinnerung",
    "gerichtliches-mahnverfahren",
    "mahnbescheid",
  ],
  sources: [
    {
      label: '§ 271 BGB – Leistungszeit',
      url: 'https://www.gesetze-im-internet.de/bgb/__271.html',
    },
    {
      label: '§ 286 BGB – Verzug des Schuldners',
      url: 'https://www.gesetze-im-internet.de/bgb/__286.html',
    },
    {
      label: '§ 288 BGB – Verzugszinsen und sonstiger Verzugsschaden',
      url: 'https://www.gesetze-im-internet.de/bgb/__288.html',
    },
    {
      label: 'Mahngerichte.de – Der Mahnbescheid',
      url: 'https://www.mahngerichte.de/verfahrensueberblick/verfahrensablauf/mahnbescheid',
    },
  ],
  updatedAt: "2026-08-30",
  reviewedAt: "2026-08-30",
  disclaimer: defaultDisclaimer,
};

export default mahnverfahren;
