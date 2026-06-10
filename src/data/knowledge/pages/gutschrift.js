import { defaultDisclaimer } from '../shared.js';

const gutschrift = {
  slug: "gutschrift",
  category: "Belege",
  title: "Gutschrift",
  description: "Eine Gutschrift korrigiert oder verrechnet Beträge zugunsten eines Kunden oder Geschäftspartners.",
  seo: {
    title: "Gutschrift einfach erklärt | Carta",
    description: "Eine Gutschrift korrigiert oder verrechnet Beträge zugunsten eines Kunden oder Geschäftspartners.",
    canonicalPath: "/wissen/gutschrift",
  },
  article: {
    intro: "Eine Gutschrift wird genutzt, wenn ein Betrag gutgeschrieben, korrigiert oder verrechnet werden soll.",
    sections: [      

     {
      heading: "Wann eine Gutschrift erstellt wird",
        paragraphs: [
          "Eine Gutschrift wird genutzt, wenn ein Betrag gutgeschrieben, korrigiert oder verrechnet werden soll. Sie kann zum Beispiel bei Rücksendungen, Preisnachlässen oder Rechnungskorrekturen eingesetzt werden.",
        ],
      },

      {
        heading: "Wichtige Punkte",
        paragraphs: [
          "Die folgenden Punkte helfen dabei, das Thema schnell einzuordnen.",
        ],
        list: [
          "Name und Anschrift der beteiligten Parteien",
          "Gutschriftsdatum",
          "Gutschriftsnummer",
          "Bezug zur ursprünglichen Rechnung oder Lieferung",
          "Grund der Gutschrift",
          "Betrag, Steuer und Gesamtsumme",
          "klare Verrechnung oder Auszahlung",
        ],
      },

      {
        heading: "Form einer Gutschrift",
        paragraphs: [
          "Eine Gutschrift ist im Grunde eine umgekehrte Rechnung. Bei der Erstellung belastet der Gutschriftsausstellende den Betrag an sich selbst.",
          "Je nach Anliegen wird grundsätzlich zwischen zwei Hauptformen unterschieden.",
        ], 
          list: [
            "Kaufmännische Gutschrift (Rechnungskorrektur & Stornorechnung)"
          ],
          paragraphs:[
            "Diese Belege werden vom Leistungsbringer erstellt und korrigieren eine Rechnung. Der Betrag wird vollständig oder teilweise reduziert."
          ],
          list: [
            "Umsatzsteuerliche Gutschrift (Gutschriftsverfahren)"
          ],
          paragraphs:[
            "Dieser Beleg wird vom Leistungsempfänger ausgestellt und ersetzt eine Rechnung. Diese Gutschrift muss die selben Anforderungen wie eine Rechnungen erfüllen. Der Beleg muss zwingend den Dokumentnamen Gutschrift haben. Des Weiteren muss dem Gutschriftsverfahren von beiden Parteien zugestimmt werden."
          ],
      },

      {
        heading: "Allgemeines",
        paragraphs: [
          ".",
        ],
      },
      
    ],
  },
  generator: null,
  keyPoints: [
    "Name und Anschrift der beteiligten Parteien",
    "Gutschriftsdatum",
    "Gutschriftsnummer",
    "Bezug zur ursprünglichen Rechnung oder Lieferung",
    "Grund der Gutschrift",
    "Betrag, Steuer und Gesamtsumme",
    "klare Verrechnung oder Auszahlung",
  ],
  commonMistakes: [
    "kein Bezug zur ursprünglichen Rechnung",
    "unklarer Grund der Gutschrift",
    "falsche Steuerangaben",
    "Verwechslung von Gutschrift und Stornorechnung",
  ],
  faqs: [
    {
      question: "Wann wird eine Gutschrift erstellt?",
      answer: "Eine Gutschrift wird erstellt, wenn ein Kunde oder Geschäftspartner einen Betrag gutgeschrieben bekommt, etwa wegen Rückgabe, Korrektur oder Preisnachlass.",
    },
    {
      question: "Was muss in einer Gutschrift stehen?",
      answer: "Wichtig sind die beteiligten Parteien, Datum, Nummer, Bezug zur ursprünglichen Rechnung, Grund der Gutschrift und der gutgeschriebene Betrag.",
    },
    {
      question: "Ist eine Gutschrift dasselbe wie eine Rechnung?",
      answer: "Nein. Eine Rechnung fordert eine Zahlung an. Eine Gutschrift reduziert, korrigiert oder verrechnet einen Betrag.",
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
