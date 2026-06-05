import { defaultDisclaimer } from '../shared.js';

const quittung = {
  slug: 'quittung',
  category: 'Belege',
  title: 'Quittung',
  description: 'Eine Quittung bestaetigt, dass ein Betrag oder eine Leistung empfangen wurde.',
  seo: {
    title: 'Quittung einfach erklaert | Carta',
    description: 'Eine Quittung bestaetigt, dass ein Betrag oder eine Leistung empfangen wurde.',
    canonicalPath: '/wissen/quittung',
  },
  article: {
    intro: 'Eine Quittung ist ein Beleg ueber den Empfang von Geld oder einer bestimmten Leistung. Sie dient als einfacher Nachweis dafuer, dass eine Zahlung erfolgt ist oder etwas uebergeben wurde.',
    sections: [
      {
        heading: 'Was ist eine Quittung?',
        paragraphs: [
          'Eine Quittung bestaetigt, dass eine Person oder ein Unternehmen einen Betrag erhalten hat. Besonders bei Barzahlungen ist sie ein wichtiger Nachweis fuer beide Seiten.',
          'Im Unterschied zur Rechnung fordert eine Quittung keine Zahlung an. Sie dokumentiert vielmehr, dass die Zahlung bereits geleistet wurde.',
        ],
      },
      {
        heading: 'Welche Angaben sollte eine Quittung enthalten?',
        paragraphs: [
          'Damit eine Quittung im Alltag nachvollziehbar bleibt, sollte sie klar und vollstaendig ausgefuellt werden.',
        ],
        list: [
          'Name und Anschrift des Ausstellers',
          'Name des Zahlenden oder Empfaengers',
          'Datum der Ausstellung',
          'erhaltener Betrag',
          'Verwendungszweck oder Beschreibung der Leistung',
          'Ort und Unterschrift des Empfaengers des Geldes',
          'optional: Quittungsnummer oder Bezug zu Rechnung und Auftrag',
        ],
      },
      {
        heading: 'Wann wird eine Quittung verwendet?',
        paragraphs: [
          'Quittungen werden haeufig bei Barzahlungen, privaten Verkaeufen, kleineren Geschaeftsvorgaengen oder bei der persoenlichen Uebergabe von Waren und Leistungen genutzt.',
          'Sie helfen dabei, spaeter nachzuweisen, dass ein Betrag tatsaechlich bezahlt wurde. Gerade wenn keine Kartenzahlung oder Bankbuchung vorhanden ist, schafft eine Quittung zusaetzliche Sicherheit.',
        ],
      },
      {
        heading: 'Worauf sollte man achten?',
        paragraphs: [
          'Eine Quittung sollte lesbar, konkret und ohne widerspruechliche Angaben erstellt werden. Unklare Formulierungen oder fehlende Betraege fuehren schnell zu Rueckfragen.',
          'Wird Umsatzsteuer ausgewiesen, muessen die Angaben zur Steuer logisch zum Vorgang passen. Fuer die steuerliche Verwendbarkeit kann im Einzelfall zusaetzlicher Rat sinnvoll sein.',
        ],
      },
    ],
  },
  generator: {
    label: 'Quittung erstellen',
    href: '/dokumente/quittung',
    text: 'Nutze den Carta-Generator, um eine Quittung schnell, sauber und direkt im Browser zu erstellen.',
  },
  keyPoints: [
    'bestaetigt den Empfang eines Betrags oder einer Leistung',
    'wird oft bei Barzahlungen genutzt',
    'enthaelt Betrag, Datum und Verwendungszweck',
    'sollte vom Geldempfaenger unterschrieben werden',
    'kann als Nachweis fuer Buchhaltung und Alltag dienen',
  ],
  commonMistakes: [
    'fehlender Betrag oder unklare Waehrung',
    'kein klarer Verwendungszweck',
    'fehlendes Datum',
    'fehlende Unterschrift',
    'Verwechslung von Quittung und Rechnung',
  ],
  faqs: [
    {
      question: 'Ist eine Quittung dasselbe wie eine Rechnung?',
      answer: 'Nein. Eine Rechnung fordert zur Zahlung auf. Eine Quittung bestaetigt, dass die Zahlung bereits erfolgt ist.',
    },
    {
      question: 'Wann brauche ich eine Quittung?',
      answer: 'Vor allem bei Barzahlungen ist eine Quittung sinnvoll, weil sie spaeter als Nachweis fuer die Zahlung dienen kann.',
    },
    {
      question: 'Muss eine Quittung unterschrieben sein?',
      answer: 'In der Praxis ist die Unterschrift des Geldempfaengers sehr wichtig, weil sie den Erhalt des Betrags bestaetigt.',
    },
    {
      question: 'Kann eine Quittung digital erstellt werden?',
      answer: 'Ja. Entscheidend ist, dass die Angaben vollstaendig, nachvollziehbar und fuer den jeweiligen Zweck geeignet sind.',
    },
  ],
  related: [
    'rechnung',
    'gutschrift',
    'lieferschein',
    'angebot',
  ],
  sources: [],
  updatedAt: '2026-06-06',
  reviewedAt: '2026-06-06',
  disclaimer: defaultDisclaimer,
};

export default quittung;
