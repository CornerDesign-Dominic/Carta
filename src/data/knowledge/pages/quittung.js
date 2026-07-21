import { defaultDisclaimer } from '../shared.js';

const quittung = {
  slug: 'quittung',
  category: 'Belege',
  title: 'Quittung',
  description: 'Eine Quittung bestaetigt, dass ein Betrag oder eine Leistung empfangen wurde.',
  seo: {
    title: 'Quittung einfach erklaert | Belege24',
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
          'Damit eine Quittung gültig ist, muss sie folgende Mindestangaben enthalten.',
        ],
        list: [
          'Quittung oder Empfangsbestätigung als Titel',
          'Name und Anschrift des Ausstellers',
          'Name des Zahlenden oder Empfaengers',          
          'Betrag in Zahl und Wort',
          'Steuersatz (z.B. 19% oder 7%) und den Steuerbetrag (0% bei Kleinunternehmern)',
          'Beschreibung der Art und Menge der gelieferten Ware oder Leistung',
          'Datum und Ort der Ausstellung',
          'Empfangsbestätigung und Unterschrift des Zahlungsempfängers',
          'optional: Quittungsnummer oder Bezug zu Rechnung und Auftrag',
        ],
      },
      {
        heading: 'Wann wird eine Quittung verwendet?',
        paragraphs: [
          'Quittungen werden häufig bei Barzahlungen, privaten Verkäufen, kleineren Geschaeftsvorgaengen oder bei der persoenlichen Uebergabe von Waren und Leistungen genutzt.',
          'Sie helfen dabei, später nachzuweisen, dass ein Betrag tatsaechlich bezahlt wurde. Gerade wenn keine Kartenzahlung oder Bankbuchung vorhanden ist, schafft eine Quittung zusaetzliche Sicherheit.',
        ],
      },
      {
        heading: 'Worauf sollte man achten?',
        paragraphs: [
          'Eine Quittung sollte lesbar, konkret und ohne widerspruechliche Angaben erstellt werden. Unklare Formulierungen oder fehlende Betraege fuehren schnell zu Rueckfragen.',
          'Wird Umsatzsteuer ausgewiesen, muessen die Angaben zur Steuer logisch zum Vorgang passen.',
        ],
      },
      {
        heading: 'Unterschied zwischen einer klassischen Quittung und einer E-Quittung',
        paragraphs: [
          'Die klassische Quittung ist ein physisches Papierdokument mit handschriftlicher Unterschrift. Die E-Quittung ist ein rein digitales Dokument (z. B. PDF), das elektronisch übermittelt und digital signiert oder zertifiziert wird.',
        ],
      },
    ],
  },
  generator: {
    label: 'Quittung erstellen',
    href: '/dokumente/quittung',
    text: 'Nutze unseren Generator, um eine Quittung schnell und sauber im Browser zu erstellen. Kein Login oder Abo nötig.',
  },
  keyPoints: [
    'bestaetigt den Empfang eines Betrags oder einer Leistung',
    'wird oft bei Barzahlungen genutzt',
    'enthaelt Betrag, Datum und Verwendungszweck',
    'sollte vom Geldempfaenger unterschrieben werden',
    'kann als Nachweis fuer Buchhaltung und Alltag dienen',
  ],
  commonMistakes: [
    'fehlender Betrag oder unklare Währung',
    'kein klarer Verwendungszweck',
    'fehlendes Datum',
    'fehlende Unterschrift',
    'Verwechslung von Quittung und Rechnung',
  ],
  faqs: [
    {
      question: 'Ist eine Quittung dasselbe wie eine Rechnung?',
      answer: 'Nein. Eine Rechnung fordert zur Zahlung auf. Eine Quittung bestätigt, dass die Zahlung bereits erfolgt ist.',
    },
    {
      question: 'Wann brauche ich eine Quittung?',
      answer: 'Immer wenn mit Bargeld bezahlt wurde, um einen rechtlichen und steuerlichen Nachweis zu haben.',
    },
    {
      question: 'Muss eine Quittung unterschrieben sein?',
      answer: 'Ja, eine rechtssichere Quittung muss vom Zahlungsempfänger unterschrieben sein. Erst durch die Unterschrift erhält das Dokument seine volle Beweiskraft als Quittung.',
    },    
  ],
  related: [
    'rechnung',
    'gutschrift',
    'lieferschein',
    'angebot',
  ],
  sources: [],
  updatedAt: '2026-06-22',
  reviewedAt: '2026-06-22',
  disclaimer: defaultDisclaimer,
};

export default quittung;
