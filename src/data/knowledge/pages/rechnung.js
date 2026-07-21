import { defaultDisclaimer } from '../shared.js';

const rechnung = {
  slug: "rechnung",
  category: "Belege",
  title: "Rechnung",
  description: "Eine Rechnung dokumentiert eine Lieferung oder Leistung und fordert den Empfänger zur Zahlung auf.",
  seo: {
    title: "Rechnung einfach erklärt | Belege24",
    description: "Eine Rechnung dokumentiert eine Lieferung oder Leistung und fordert den Empfänger zur Zahlung auf.",
    canonicalPath: "/wissen/rechnung",
  },
  article: {
    intro: "Eine Rechnung ist ein Dokument, das zur Zahlung für eine erbrachte Leistung oder Lieferung auffordert. Gleichzeitig dient sie als Nachweis für Käufer und Unternehmen.",
    sections: [
      
      {
        heading: "Pflichtangaben einer Rechnung",
        paragraphs: [
          "Damit eine Rechnung rechtlich gültig ist, muss diese bestimmte Pflichtangaben nach UStG §14 (Ausstellung von Rechnungen) enthalten.",
        ],
        list: [
          "Name und Anschrift des Rechnungsausstellers",
          "Name und Anschrift des Rechnungsempfängers",
          "Steuernummer oder Umsatzsteuer-ID des Rechnungsausstellers",
          "Rechnungsdatum",
          "Rechnungsnummer",
          "Menge und Art der gelieferten Ware oder Art und Umfang der Leistung",
          "Leistungsdatum oder Zeitraum",           
          "Rechnungsbetrag aufgeschlüsselt nach Netto-Betrag, Umsatzsteuer und Brutto-Betrag",     
        ],
      },
      {
        heading: "Unterschiede zur Kleinunternehmerrechnung",
        paragraphs: [          
          "Bei einer Rechnung mit Kleinunternehmerregelung wird keine Umsatzsteuer ausgewiesen. Stattdessen muss ein entsprechender Hinweis auf die Steuerbefreiung enthalten sein.",
        ],        
      },
      {
        heading: "Allgemeines über Rechnungen",
        paragraphs: [
          "Eine Rechnung dokumentiert, dass eine Ware geliefert oder eine Leistung erbracht wurde. Gleichzeitig fordert sie den Empfänger dazu auf, den ausgewiesenen Betrag zu bezahlen.",
          "Im geschäftlichen Alltag ist die Rechnung mehr als nur eine einfache Zahlungsaufforderung. Sie dient auch als Beleg für die Buchhaltung und hilft beiden Seiten, Leistung, Betrag und Zahlungsfrist nachvollziehbar festzuhalten.",
          "Eine Rechnung ist außerdem wichtig für die Buchführung, die Steuererklärung und den möglichen Vorsteuerabzug. Sie zeigt nachvollziehbar, welche Einnahmen oder Ausgaben entstanden sind und wie diese steuerlich einzuordnen sind.",
          "Rechnungen müssen daher immer vollständig, eindeutig und gut lesbar erstellt werden. Fehlende oder unklare Angaben können zu Rückfragen, Zahlungsverzögerungen oder Problemen bei der Buchhaltung führen.",
        ],
      },
      {
        heading: "Dauer der Aufbewahrungspflicht für Rechnungen",
        paragraphs: [
          "Rechnungsempfänger:",
          "Unternehmen und Selbstständige sind verpflichtet, empfangene Rechnungen aufzubewahren, wenn diese für Buchhaltung, Steuererklärung oder steuerliche Nachweise relevant sind. Für Eingangs- und Ausgangsrechnungen gilt in der Regel eine gesetzliche Aufbewahrungsfrist von 8 Jahren.",
          "Privatpersonen müssen Rechnungen vor allem dann aufbewahren, wenn sie Leistungen im Zusammenhang mit einem Grundstück betreffen, zum Beispiel Handwerks-, Bau- oder Renovierungsarbeiten. In diesem Fall besteht eine gesetzliche Aufbewahrungspflicht von 2 Jahren.",
          "Empfehlung: Auch wenn keine gesetzliche Pflicht besteht, sollten wichtige Rechnungen freiwillig länger aufbewahrt werden, zum Beispiel bei Garantie, Gewährleistung, Versicherungen oder größeren Anschaffungen.",

          "Rechnungsaussteller:",
          "Wer eine Rechnung ausstellt, muss ein Doppel oder eine Kopie der Rechnung aufbewahren. Für Unternehmen und Selbstständige gilt dabei in der Regel eine gesetzliche Aufbewahrungsfrist von 8 Jahren.",
          "Pflicht: Abgelegte Rechnungen müssen geordnet, vollständig und jederzeit auffindbar aufbewahrt werden. Elektronische Rechnungen müssen während der gesamten Aufbewahrungsfrist lesbar bleiben und dürfen nicht nachträglich  verändert werden können.",   
        ],
      },
      {
        heading: "Die E-Rechnung",
        paragraphs: [
          "Eine E-Rechnung ist keine einfache elektronische Rechnung, sondern ein für Maschinen lesbares elektronisches Format. Dadurch kann sie elektronisch empfangen, verarbeitet und archiviert werden. Bekannte Formate sind zum Beispiel XRechnung und ZUGFeRD.",
          "Seit 2025 müssen Unternehmen in Deutschland grundsätzlich in der Lage sein, E-Rechnungen im Geschäftsverkehr zwischen Unternehmen (B2B) zu empfangen. Für die Ausstellung von E-Rechnungen gelten Übergangsregelungen. Inhaltlich müssen E-Rechnungen dieselben Pflichtangaben enthalten wie andere Rechnungen.",
          "Wichtig ist: Auch E-Rechnungen müssen während der Aufbewahrungsfrist lesbar, vollständig und unverändert verfügbar bleiben."
        ],
      },      
    ],
  },
  generator: {
    label: "Rechnung erstellen",
    href: "/dokumente/rechnung/standard",
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
      question: "Wann schreibe ich eine Rechnung?",
      answer: "Eine Rechnung wird in der Regel erstellt, wenn eine Lieferung oder Leistung abgeschlossen ist und man zur Zahlung auffordert.",
    },
    {
      question: "Wie muss die Rechnungsnummer aufgebaut sein",
      answer: "Jede Rechnungsnummer muss einmalige sein. Sie solte fortlaufend und nachvollziehbar vergeben werden. Sie darf Zahlen und Buchstaben enthalten. Häufig wird die Rechnungsnummer mit dem Datum kombiniert, zum Beispiel: 05-2026-1234.",       
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
      answer: "Bei einer Kleinunternehmerrechnung wird keine Umsatzsteuer ausgewiesen. Stattdessen enthält die Rechnung einen Hinweis auf die Anwendung der Kleinunternehmerregelung. Diese werden erstellt von Kleinunternehmern, welche unter das UStG §19 fallen und ein Jährlichen Gesamtumsatz von 25.000 Euro und im laufenden Kalenderjahr 100.000 Euro nicht überschreiten.",
    },
    {
      question: "Was ist das Reverse-Charge-Verfahren?",
      answer: "Das Reverse-Charge-Verfahren betrifft vor allem grenzüberschreitende Lieferungen und Leistungen. Hier schuldet nicht der leistende Unternehmer die Umsatzsteuer, sondern der Empfänger.",
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
    "mahnverfahren",
  ],
  sources: [],
  updatedAt: "2026-06-03",
  reviewedAt: "2026-06-03",
  disclaimer: defaultDisclaimer,
};

export default rechnung;
