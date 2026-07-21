import { defaultDisclaimer } from '../shared.js';

const gutschrift = {
  slug: "gutschrift",
  category: "Belege",
  title: "Gutschrift",
  description: "Eine Gutschrift korrigiert oder verrechnet Betraege zugunsten eines Kunden oder Geschaeftspartners.",
  seo: {
    title: "Gutschrift einfach erklaert | Belege24",
    description: "Eine Gutschrift korrigiert oder verrechnet Betraege zugunsten eines Kunden oder Geschaeftspartners.",
    canonicalPath: "/wissen/gutschrift",
  },
  article: {
    intro: "Eine Gutschrift wird genutzt, wenn ein Betrag gutgeschrieben, korrigiert oder verrechnet werden soll.",
    sections: [
      {
        heading: "Wann eine Gutschrift erstellt wird",
        paragraphs: [
          "Eine Gutschrift wird genutzt, wenn ein Betrag gutgeschrieben, korrigiert oder verrechnet werden soll. Sie kann zum Beispiel bei Ruecksendungen, Preisnachlaessen oder Rechnungskorrekturen eingesetzt werden.",
        ],
      },
      {
        heading: "Form einer Gutschrift",
        paragraphs: [
          "Eine Gutschrift ist im Grunde eine umgekehrte Rechnung. Bei der Erstellung schreibt der Gutschriftsausstellende dem Empfaenger einen Betrag gut.",
          "Je nach Anliegen wird grundsaetzlich zwischen zwei Hauptformen unterschieden.",
        ],
        subsections: [
          {
            heading: "Kaufmaennische Gutschrift",
            paragraphs: [
              "Diese Form wird vom Leistungsbringer erstellt und dient dazu, eine Rechnung zu korrigieren oder zu stornieren. Der Betrag wird dabei vollstaendig oder teilweise reduziert.",
            ],
          },
          {
            heading: "Umsatzsteuerliche Gutschrift",
            paragraphs: [
              "Diese Form wird vom Leistungsempfaenger ausgestellt und kann eine Rechnung ersetzen. Sie muss dieselben Anforderungen wie eine Rechnung erfuellen, ausdruecklich als Gutschrift bezeichnet sein und von beiden Parteien vereinbart werden.",
            ],
          },
        ],
      },
    ],
  },
  generator: {
    label: "Gutschrift erstellen",
    href: "/dokumente/gutschrift",
    text: "Nutze unseren kostenlosen, werbefreien und unbegrenzten interaktiven Generator, um deine individuelle Gutschrift schnell und einfach zu erstellen.",
  },
  keyPoints: [
    "Name und Anschrift der beteiligten Parteien",
    "Gutschriftsdatum",
    "Gutschriftsnummer",
    "Bezug zur urspruenglichen Rechnung oder Lieferung",
    "Grund der Gutschrift",
    "Betrag, Steuer und Gesamtsumme",
    "klare Verrechnung oder Auszahlung",
  ],
  commonMistakes: [
    "kein Bezug zur urspruenglichen Rechnung",
    "unklarer Grund der Gutschrift",
    "falsche Steuerangaben",
    "Verwechslung von Gutschrift und Stornorechnung",
  ],
  faqs: [
    {
      question: "Wann wird eine Gutschrift erstellt?",
      answer: "Eine Gutschrift wird erstellt, wenn einem Kunden ein Betrag gutgeschrieben wird, zum Beispiel wegen einer Rückgabe, einer Korrektur oder eines nachträglichen Preisnachlasses. Außerdem kann eine Gutschrift im Gutschriftsverfahren eingesetzt werden: Dabei erstellt der Leistungsempfänger die Abrechnung für eine erhaltene Leistung. Dieses Verfahren muss jedoch vorher zwischen beiden Parteien vereinbart werden.",
    },
    {
      question: "Was muss in einer Gutschrift im Gutschriftsverfahren stehen?",
      answer: "Eine Gutschrift im Gutschriftsverfahren ersetzt die Rechnung des Leistungserbringers. Deshalb muss sie grundsätzlich dieselben Angaben enthalten wie eine Rechnung, zum Beispiel die beteiligten Parteien, Datum, fortlaufende Nummer, Leistungsbeschreibung, Betrag, Steuerangaben und Gesamtsumme. Außerdem muss der Beleg ausdrücklich als „Gutschrift“ bezeichnet werden.",
    },
    {
      question: "Ist eine Gutschrift dasselbe wie eine Rechnung?",
      answer: "Nicht immer. Eine kaufmännische Gutschrift dient meist dazu, einen Betrag zu reduzieren, zu korrigieren oder gutzuschreiben. Eine Gutschrift im Gutschriftsverfahren kann dagegen eine Rechnung ersetzen, weil der Leistungsempfänger die Abrechnung für eine erhaltene Leistung erstellt. Deshalb kommt es darauf an, welche Art von Gutschrift gemeint ist.",
    },
    {
      question: "Kann ich dem Gutschriftsverfahren widersprechen?",
      answer: "Ja. Dem Gutschriftsverfahren kann widersprochen werden. Da dieses Verfahren grundsätzlich zwischen beiden Parteien vereinbart sein muss, sollte ein Widerspruch klar und nachvollziehbar erklärt werden. Wird der Gutschrift widersprochen, kann sie ihre Wirkung als Abrechnung verlieren und der Leistungserbringer muss die Abrechnung gegebenenfalls selbst durch eine Rechnung vornehmen.",
    },
    {
      question: "Was tun, wenn eine Gutschrift nicht bezahlt wird?",
      answer: "Wenn eine Gutschrift nicht ausgezahlt oder verrechnet wird, sollte der Vorgang zuerst geprüft und schriftlich geklärt werden. Wichtig ist, ob die Gutschrift eine Rückzahlung auslöst oder nur mit offenen Beträgen verrechnet werden soll. Bleibt die Zahlung aus, kann der gutgeschriebene Betrag angemahnt und eine klare Frist zur Auszahlung oder Verrechnung gesetzt werden.",
    },
    {
      question: "Warum wird das Gutschriftsverfahren angewendet?",
      answer: "Das Gutschriftsverfahren wird angewendet, wenn nicht der Leistungserbringer, sondern der Leistungsempfänger die Abrechnung erstellt. Das kann zum Beispiel sinnvoll sein, wenn der Leistungsempfänger die erbrachte Leistung, Mengen, Provisionen oder Abrechnungsdaten besser erfassen kann. Wichtig ist, dass beide Parteien dem Verfahren zustimmen und die Gutschrift die Anforderungen an eine Rechnung erfüllt.",
    },
    {
      question: "Ist eine Stornorechnung eine Gutschrift?",
      answer: "Ja, eine Stornorechnung ist eine Form der Gutschrift. Sie reduziert den in Rechnung gestellten Betrag vollständig und schreibt diesen entsprechend gut. Wurde die ursprüngliche Rechnung bereits beglichen, kann durch die Stornorechnung eine Rückabwicklung eingeleitet werden.",
    },
    {
      question: "Was ist der Unterschied zwischen Rechnungskorrektur und Gutschrift?",
      answer: "Eine Rechnungskorrektur bezieht sich immer auf eine bereits gestellte Rechnung des Leistungsbringers. Eine Gutschrift bezieht sich ebenfalls auf eine Leistung oder einen Betrag, muss aber nicht zwingend eine bereits ausgestellte Rechnung zur Grundlage haben. Damit kann eine Rechnungskorrektur eine Form der Gutschrift sein. Eine Gutschrift ist jedoch nicht automatisch eine Rechnungskorrektur, weil sie zwar einen Betrag gutschreibt, aber nicht immer eine bestehende Rechnung reduziert.",
    },
  ],
  related: [
    "rechnung",
    "angebot",
    "lieferschein",
  ],
  sources: [],
  updatedAt: "2026-05-12",
  reviewedAt: "2026-05-12",
  disclaimer: defaultDisclaimer,
};

export default gutschrift;
