import { defaultDisclaimer } from '../shared.js';

const beschaffung = {
  slug: 'beschaffung',
  category: 'Supply Chain & Logistik',
  title: 'Beschaffung',
  description: 'Beschaffung einfach erklärt: Ziele, Prozess und Zusammenhang mit Einkauf, Lieferanten, Lager und Supply Chain.',
  seo: {
    title: 'Beschaffung einfach erklärt | Belege24',
    description: 'Verstehe, was Beschaffung umfasst, welche Ziele sie verfolgt und wie der Weg vom Bedarf bis zur Lieferung und Kontrolle abläuft.',
    canonicalPath: '/wissen/beschaffung',
  },
  article: {
    intro: 'Beschaffung stellt sicher, dass ein Unternehmen die benötigten Güter und Leistungen in passender Menge, Qualität und Zeit zur Verfügung hat. Sie beginnt beim Bedarf und reicht über die Auswahl und Bestellung bis zur Lieferung und Kontrolle.',
    sections: [
      {
        heading: 'Was bedeutet Beschaffung?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'beschaffung', text: 'Beschaffung' },
            ' umfasst alle Aktivitäten, mit denen ein Unternehmen seinen Bedarf deckt. Dazu gehören Planung, Markt- und Lieferantensuche, Auswahl, Bestellung, Lieferung, Wareneingang und die Prüfung, ob die Leistung wie vereinbart angekommen ist.',
          ],
          'Sie betrifft nicht nur den Einkauf von Waren. Auch Materialien für die Produktion, externe Dienstleistungen, Software, Werkzeuge, Maschinen, Büroausstattung oder Transportleistungen können beschafft werden.',
        ],
      },
      {
        heading: 'Welche Güter und Leistungen werden beschafft?',
        paragraphs: [
          'Materialien und Rohstoffe werden benötigt, um eigene Produkte herzustellen. Handelswaren werden eingekauft, um sie weiterzuverkaufen. Dienstleistungen wie Wartung, Reinigung, Beratung oder Transport unterstützen den Betrieb, ohne als körperliche Ware zu lagern.',
          'Betriebsmittel wie Maschinen, Fahrzeuge, Werkzeuge, Hardware oder Software dienen dem Unternehmen über längere Zeit. Ihre Beschaffung braucht oft andere Prüfungen als der regelmäßige Einkauf von Verbrauchsmaterial oder Waren: Zum Beispiel können Nutzungsdauer, Folgekosten, Kapazität und Wartung wichtiger sein.',
        ],
      },
      {
        heading: 'Ziele der Beschaffung',
        paragraphs: [
          'Versorgungssicherheit bedeutet, dass benötigte Güter und Leistungen verfügbar sind, wenn sie gebraucht werden. Fehlende Teile können Produktion, Aufträge oder Dienstleistungen verzögern. Gleichzeitig soll die Beschaffung keine unnötig hohen Bestände aufbauen.',
          'Qualität umfasst nicht nur das Produkt selbst, sondern auch Spezifikationen, Verpackung, Dokumentation und Zuverlässigkeit. Kosten betreffen neben dem Preis zum Beispiel Transport, Prüfung, Lagerung, Nacharbeit und Ausfallfolgen.',
          'Zeit und Flexibilität werden wichtig, wenn Bedarfe schwanken oder Liefertermine eng sind. Gute Beschaffung wägt diese Ziele gegeneinander ab: Der niedrigste Preis ist nicht automatisch die beste Lösung, wenn Qualität, Termin oder Lieferfähigkeit nicht passen.',
        ],
      },
      {
        heading: 'Vom Bedarf bis zum Wareneingang',
        paragraphs: [
          'Der konkrete Ablauf hängt von Unternehmen, Güterart und Wert ab. Die Grundlogik bleibt jedoch ähnlich: Zuerst wird der tatsächliche Bedarf geklärt, anschließend werden geeignete Bezugsquellen und Konditionen geprüft. Nach Auswahl und Bestellung folgen Lieferung, Wareneingang und Kontrolle.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Beschaffungsprozess im Überblick',
            formula: 'Bedarf → Beschaffungsmarkt → Lieferant → Bestellung → Lieferung → Kontrolle',
            description: 'Jeder Schritt baut auf den Informationen des vorherigen auf. Anforderungen, Mengen, Termine und Verantwortlichkeiten sollten dabei nachvollziehbar bleiben.',
          },
        ],
      },
      {
        heading: 'Strategische und operative Beschaffung',
        paragraphs: [
          'Die operative Beschaffung kümmert sich vor allem um den laufenden Bedarf: Bestellungen auslösen, Termine verfolgen, Mengen abstimmen und Abweichungen klären. Sie stellt die tägliche Versorgung sicher.',
          'Die strategische Beschaffung betrachtet langfristigere Fragen: Welche Lieferanten, Bezugsquellen, Vertragsmodelle und Risiken passen zum Unternehmen? Dazu können auch die Bündelung von Mengen, die Entwicklung wichtiger Lieferanten oder die Entscheidung zwischen Eigenfertigung und Fremdbezug gehören.',
          'In kleinen Unternehmen liegen beide Aufgaben oft bei derselben Person. Trotzdem hilft die Unterscheidung: Eine dringende Bestellung löst nicht automatisch die langfristige Frage, wie abhängig oder widerstandsfähig die Versorgung ist.',
        ],
      },
      {
        heading: 'Zusammenhang mit Einkauf, Lager und Supply Chain',
        paragraphs: [
          'Der Einkauf setzt einen Teil der Beschaffung praktisch um, etwa durch Angebotsvergleich, Bestellung und Kommunikation mit Lieferanten. Lager und Bestandsplanung liefern wichtige Informationen dazu, wann und wie viel benötigt wird. Zu hohe Bestände binden Kapital, zu niedrige Bestände können zu Fehlmengen führen.',
          [
            'In der ',
            { type: 'link', href: '/wissen/einkauf-verkauf', text: 'Supply Chain & Logistik' },
            ' verbindet Beschaffung den vorgelagerten Markt mit dem eigenen Waren- und Informationsfluss. Die Lieferbeziehung endet nicht mit der Bestellung: Der ',
            { type: 'link', href: '/wissen/lieferschein', text: 'Lieferschein' },
            ' und die Wareneingangskontrolle helfen, Lieferung, Menge und Zustand mit der Bestellung abzugleichen.',
          ],
          [
            'Wie bestehende Lieferbeziehungen gezielt verbessert werden können, erklärt die Seite ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            '. Bedarfsermittlung, Lieferantenauswahl und Beschaffungsarten sind eigene Vertiefungsthemen und werden hier bewusst nicht im Detail behandelt.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Bestellungen allein aus Bauchgefühl oder wegen eines scheinbar niedrigen Preises auszulösen. Bedarf, Qualität, Lieferzeit, Folgekosten und Risiken sollten zusammen betrachtet werden.',
          'Unklare Spezifikationen, Mengen oder Termine führen leicht zu Missverständnissen. Anforderungen sollten vor der Bestellung so konkret sein, dass Lieferant und Wareneingang wissen, was erwartet wird.',
          'Auch die Beschaffung nur als Bestellvorgang zu verstehen greift zu kurz. Ohne Rückmeldung aus Lager, Produktion, Wareneingang oder Kundenaufträgen bleiben wiederkehrende Engpässe und Qualitätsprobleme oft unbemerkt.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Beschaffung deckt den Bedarf an Materialien, Waren, Dienstleistungen und Betriebsmitteln.',
    'Wichtige Ziele sind Versorgungssicherheit, Qualität, Kosten, Zeit und Flexibilität.',
    'Der Prozess reicht vom Bedarf über Markt und Lieferant bis zu Bestellung, Lieferung und Kontrolle.',
    'Operative Beschaffung steuert den laufenden Bedarf; strategische Beschaffung gestaltet langfristige Bezugsquellen und Risiken.',
    'Einkauf, Lager und Supply Chain liefern einander wichtige Informationen für die Beschaffung.',
    'Preis, Qualität, Termin, Gesamtkosten und Risiko sollten gemeinsam beurteilt werden.',
  ],
  commonMistakes: [
    'Beschaffung auf das Auslösen einer Bestellung reduzieren',
    'nur den Einkaufspreis statt Gesamtkosten, Qualität und Termin betrachten',
    'Bedarf, Spezifikation, Menge oder Liefertermin nicht eindeutig festlegen',
    'Rückmeldungen aus Wareneingang, Lager oder Produktion nicht auswerten',
    'laufende Bestellungen und langfristige Lieferanten- oder Risikofragen vermischen',
  ],
  faqs: [
    {
      question: 'Was gehört zur Beschaffung?',
      answer: 'Beschaffung reicht vom Klären des Bedarfs über Markt- und Lieferantenauswahl sowie Bestellung bis zu Lieferung, Wareneingang und Kontrolle.',
    },
    {
      question: 'Welche Ziele verfolgt die Beschaffung?',
      answer: 'Sie soll unter anderem Versorgungssicherheit, passende Qualität, angemessene Gesamtkosten, Termine und Flexibilität sicherstellen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Beschaffung und Einkauf?',
      answer: 'Einkauf ist ein wichtiger Teil der Beschaffung und setzt viele Schritte praktisch um. Beschaffung betrachtet zusätzlich Bedarf, Markt, Lieferanten, Lager und langfristige Versorgung.',
    },
    {
      question: 'Was ist operative Beschaffung?',
      answer: 'Sie steuert den laufenden Bedarf, zum Beispiel Bestellungen, Termine, Mengen und die Klärung von Abweichungen.',
    },
    {
      question: 'Warum reicht der niedrigste Preis nicht aus?',
      answer: 'Transport, Qualität, Ausfallfolgen, Lagerung, Nacharbeit und Lieferfähigkeit können die Gesamtkosten und das Risiko stärker beeinflussen als der Stückpreis.',
    },
  ],
  related: [
    'einkauf-verkauf',
    'lieferantenentwicklung',
    'lieferschein',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default beschaffung;
