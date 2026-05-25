import { defaultDisclaimer } from '../shared.js';

const rechnung = {
  slug: "rechnung",
  category: "Belege",
  title: "Rechnung",
  description: "Eine Rechnung dokumentiert eine Lieferung oder Leistung und fordert den Empfänger zur Zahlung auf.",
  seo: {
    title: "Rechnung einfach erklärt | Carta",
    description: "Eine Rechnung dokumentiert eine Lieferung oder Leistung und fordert den Empfänger zur Zahlung auf.",
    canonicalPath: "/wissen/rechnung",
  },
  article: {
    intro: "Eine Rechnung ist ein geschäftliches Dokument, mit dem eine erbrachte Leistung oder Lieferung abgerechnet wird. Sie enthält die wichtigsten Angaben zu Anbieter, Kunde, Leistung, Betrag, Umsatzsteuer und Zahlungsziel.",
    sections: [
      {
        heading: "Was ist eine Rechnung?",
        paragraphs: [
          "Eine Rechnung dokumentiert, dass eine Ware geliefert oder eine Leistung erbracht wurde. Gleichzeitig fordert sie den Empfänger dazu auf, den ausgewiesenen Betrag zu bezahlen.",
          "Im geschäftlichen Alltag ist die Rechnung mehr als eine einfache Zahlungsaufforderung. Sie dient auch als Beleg für die Buchhaltung und hilft beiden Seiten, Leistung, Betrag und Zahlungsfrist nachvollziehbar festzuhalten.",
        ],
      },
      {
        heading: "Pflichtangaben einer Rechnung",
        paragraphs: [
          "Damit eine Rechnung eindeutig zugeordnet und verarbeitet werden kann, sollten die wichtigsten Angaben vollständig und klar enthalten sein. Besonders wichtig sind Angaben zu den beteiligten Personen oder Unternehmen, zur Leistung, zum Betrag und zur Zahlung.",
        ],
        list: [
          "vollständiger Name und Anschrift von Anbieter und Kunde",
          "Rechnungsdatum",
          "fortlaufende Rechnungsnummer",
          "Leistungsdatum oder Leistungszeitraum",
          "Beschreibung der Leistung oder Lieferung",
          "Netto-Betrag, Umsatzsteuer und Brutto-Betrag",
          "Steuernummer oder USt-ID",
          "Zahlungsziel und Bankverbindung",
        ],
      },
      {
        heading: "Wann wird eine Rechnung genutzt?",
        paragraphs: [
          "Eine Rechnung wird meist erstellt, nachdem eine Leistung erbracht oder eine Ware geliefert wurde. Sie zeigt dem Kunden, welcher Betrag für welche Leistung offen ist und bis wann gezahlt werden soll.",
          "Für Selbstständige, kleine Unternehmen und Vereine ist eine klare Rechnung wichtig, damit Zahlungen nachvollziehbar bleiben und Unterlagen später sauber abgelegt werden können.",
        ],
      },
      {
        heading: "Typische Fehler bei Rechnungen",
        paragraphs: [
          "Viele Probleme entstehen nicht durch den Aufbau der Rechnung, sondern durch fehlende oder unklare Angaben. Eine doppelte Rechnungsnummer, ein fehlendes Leistungsdatum oder eine ungenaue Leistungsbeschreibung können Rückfragen auslösen und die Bearbeitung verzögern.",
          "Auch Steuerangaben sollten sorgfältig geprüft werden. Wer die Kleinunternehmerregelung nutzt, sollte keine Umsatzsteuer ausweisen und stattdessen einen passenden Hinweis aufnehmen.",
        ],
      },
    ],
  },
  generator: {
    label: "Rechnung erstellen",
    href: "/dokumente/rechnung",
    text: "Nutze unseren kostenlosen, werbefreien und unbegrenzten interaktiven Generator, um deine individuelle Rechnung schnell und einfach zu erstellen.",
  },
  keyPoints: [
    "vollständiger Name und Anschrift von Anbieter und Kunde",
    "Rechnungsdatum",
    "fortlaufende Rechnungsnummer",
    "Leistungsdatum oder Leistungszeitraum",
    "Beschreibung der Leistung oder Lieferung",
    "Netto-Betrag, Umsatzsteuer und Brutto-Betrag",
    "Steuernummer oder USt-ID",
    "Zahlungsziel und Bankverbindung",
  ],
  commonMistakes: [
    "fehlende oder doppelte Rechnungsnummer",
    "fehlendes Leistungsdatum",
    "unklare Leistungsbeschreibung",
    "falscher Umsatzsteuersatz",
    "fehlende Angaben zur Kleinunternehmerregelung",
    "keine klare Zahlungsfrist",
  ],
  faqs: [
    {
      question: "Was muss in eine Rechnung?",
      answer: "Eine Rechnung sollte alle wichtigen Angaben enthalten, damit sie eindeutig, nachvollziehbar und buchhalterisch nutzbar ist. Dazu gehören unter anderem Name und Anschrift von Anbieter und Kunde, Rechnungsdatum, Rechnungsnummer, Leistungsdatum, Beschreibung der Leistung, Betrag, Umsatzsteuer und Zahlungsinformationen.",
    },
    {
      question: "Wann muss ich eine Rechnung schreiben?",
      answer: "Eine Rechnung wird in der Regel erstellt, wenn eine Lieferung oder Leistung gegenüber einem Kunden abgerechnet werden soll. Besonders im geschäftlichen Bereich ist sie wichtig für Zahlung, Buchhaltung und Nachweis.",
    },
    {
      question: "Was ist eine Rechnungsnummer?",
      answer: "Die Rechnungsnummer ist eine eindeutige Nummer, mit der eine Rechnung identifiziert werden kann. Sie sollte fortlaufend und nachvollziehbar vergeben werden.",
    },
    {
      question: "Was ist das Leistungsdatum?",
      answer: "Das Leistungsdatum gibt an, wann eine Leistung erbracht oder eine Ware geliefert wurde. Es kann vom Rechnungsdatum abweichen.",
    },
    {
      question: "Was ist ein Zahlungsziel?",
      answer: "Das Zahlungsziel gibt an, bis wann die Rechnung bezahlt werden soll. Häufige Formulierungen sind zum Beispiel \"zahlbar innerhalb von 14 Tagen\" oder ein konkretes Fälligkeitsdatum.",
    },
    {
      question: "Was ist eine Kleinunternehmerrechnung?",
      answer: "Bei einer Kleinunternehmerrechnung wird keine Umsatzsteuer ausgewiesen. Stattdessen enthält die Rechnung einen Hinweis auf die Anwendung der Kleinunternehmerregelung.",
    },
    {
      question: "Was ist das Reverse-Charge-Verfahren?",
      answer: "Beim Reverse-Charge-Verfahren schuldet nicht der leistende Unternehmer die Umsatzsteuer, sondern der Leistungsempfänger. Das betrifft vor allem bestimmte grenzüberschreitende oder besondere geschäftliche Leistungen.",
    },
    {
      question: "Was passiert, wenn eine Rechnung nicht bezahlt wird?",
      answer: "Wird eine Rechnung nicht bezahlt, kann zunächst eine Zahlungserinnerung oder Mahnung versendet werden. Danach können weitere Schritte wie Verzugszinsen, Inkasso oder ein gerichtliches Mahnverfahren folgen.",
    },
  ],
  related: [
    "angebot",
    "lieferschein",
    "gutschrift",
    "zahlungserinnerung",
    "erste-mahnung",
  ],
  sources: [],
  updatedAt: "2026-05-12",
  reviewedAt: "2026-05-12",
  disclaimer: defaultDisclaimer,
};

export default rechnung;
