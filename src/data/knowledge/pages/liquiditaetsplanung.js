import { defaultDisclaimer } from '../shared.js';

const liquiditaetsplanung = {
  slug: 'liquiditaetsplanung',
  category: 'Finanzierung & Investition',
  title: 'Liquiditätsplanung',
  description: 'Liquiditätsplanung praktisch erklärt: Einzahlungen, Auszahlungen, Endbestand, Zahlungsziele, Reserven, Szenarien und der Umgang mit Liquiditätslücken.',
  seo: {
    title: 'Liquiditätsplanung praktisch erklärt | Belege24',
    description: 'Plane Einzahlungen, Auszahlungen und Liquiditätsreserven nach Wochen oder Monaten. Erfahre, wie du Engpässe, Zahlungsziele und Szenarien praxisnah einordnest.',
    canonicalPath: '/wissen/liquiditaetsplanung',
  },
  article: {
    intro: 'Eine Liquiditätsplanung zeigt, ob zu den jeweiligen Zahlungsterminen genug Geld verfügbar ist. Sie übersetzt erwartete Ein- und Auszahlungen in eine Wochen- oder Monatsvorschau und macht Engpässe früh sichtbar.',
    sections: [
      {
        heading: 'Was ist Liquiditätsplanung?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'liquiditaetsplanung', text: 'Liquiditätsplanung' },
            ' stellt den Anfangsbestand an verfügbaren Mitteln den erwarteten Ein- und Auszahlungen eines Zeitraums gegenüber. Daraus ergibt sich der geplante Endbestand.',
          ],
          'Sie ist ein praktisches Arbeitsinstrument: Werte und Termine werden regelmäßig aktualisiert, sobald sich Rechnungen, Zahlungsziele, Aufträge oder Kosten ändern. Für den Überblick über die Steuerungslogik hilft ergänzend die Seite Liquidität im Controlling.',
        ],
      },
      {
        heading: 'Gewinn und Liquidität getrennt betrachten',
        paragraphs: [
          'Gewinn entsteht aus Erträgen und Aufwendungen eines Zeitraums. Liquidität betrifft dagegen den Zeitpunkt, zu dem Geld tatsächlich eingeht oder ausgezahlt wird. Deshalb kann ein profitables Unternehmen vorübergehend zu wenig Geld für fällige Zahlungen haben.',
          [
            'Ein Verkauf auf Rechnung erhöht zum Beispiel nicht sofort den Kontostand. Mehr zur Abgrenzung findest du unter ',
            { type: 'link', href: '/wissen/liquiditaet-controlling', text: 'Liquidität im Controlling' },
            '. Für die Planung zählt hier vor allem: Wann wird die Rechnung voraussichtlich bezahlt?',
          ],
        ],
      },
      {
        heading: 'So ist eine praktische Planung aufgebaut',
        paragraphs: [
          'Am Anfang steht der verfügbare Bestand auf Bankkonten und in der Kasse. Anschließend werden erwartete Einzahlungen und alle absehbaren Auszahlungen dem richtigen Zeitraum zugeordnet.',
          'Zu Einzahlungen zählen vor allem Kundenforderungen, laufende Umsätze mit sofortiger Zahlung, Steuererstattungen oder zugesagte Finanzierungszuflüsse. Auszahlungen umfassen etwa Lieferantenrechnungen, Miete, Fixkosten, Gehälter, Steuern, Sozialabgaben, Investitionen, Zinsen und Darlehensraten.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Endbestand einer Planperiode',
            formula: 'Anfangsbestand + Einzahlungen − Auszahlungen = Endbestand',
            description: 'Der Endbestand einer Woche oder eines Monats wird zum Anfangsbestand der nächsten Planperiode. Entscheidend sind realistische Zahlungstermine, nicht nur Rechnungs- oder Leistungsdaten.',
          },
        ],
      },
      {
        heading: 'Wochen- oder Monatsplanung?',
        paragraphs: [
          'Eine Monatsplanung eignet sich für einen mittelfristigen Überblick. Sie kann saisonale Muster, wiederkehrende Kosten und größere Zahlungstermine sichtbar machen.',
          'Eine Wochenplanung ist sinnvoll, wenn die Reserven knapp sind oder sich fällige Beträge innerhalb eines Monats stark bündeln. Sie zeigt genauer, ob in einer bestimmten Woche eine Lücke entsteht, obwohl der Monatsendbestand positiv aussieht.',
        ],
      },
      {
        heading: 'Zahlungsziele und Forderungseingänge realistisch planen',
        paragraphs: [
          'Plane Kundenzahlungen nicht nur nach dem Rechnungsdatum, sondern nach dem vereinbarten Zahlungsziel und der bisherigen Zahlungserfahrung. Bei unsicheren oder überfälligen Forderungen ist ein vorsichtiger Ansatz sinnvoll.',
          'Auch eigene Zahlungsziele verändern die Planung. Lieferantenrechnungen, Steuertermine oder Gehaltsläufe können sich zeitlich überlagern. Erfasse sie mit Betrag und Fälligkeit, statt nur eine grobe Monatssumme zu schätzen.',
        ],
      },
      {
        heading: 'Monatsbeispiel: geplanten Endbestand berechnen',
        paragraphs: [
          'Ein Unternehmen startet im April mit 18.000 Euro auf Bank und Kasse. Für den Monat werden Kundenzahlungen von 32.000 Euro erwartet. Geplant sind 14.000 Euro für Lieferanten, 19.000 Euro für Gehälter und Abgaben, 6.000 Euro für Miete und sonstige Fixkosten sowie 4.000 Euro für Steuern und Darlehensraten.',
        ],
        exampleCards: [
          {
            title: 'April in der Liquiditätsplanung',
            paragraphs: [
              'Einzahlungen: 32.000 Euro. Auszahlungen: 14.000 Euro + 19.000 Euro + 6.000 Euro + 4.000 Euro = 43.000 Euro.',
              'Endbestand: 18.000 Euro + 32.000 Euro − 43.000 Euro = 7.000 Euro.',
              'Der Monat endet nach Plan mit einem positiven Bestand. Die Planung sollte trotzdem prüfen, ob die Kundenzahlungen vor den Gehalts- und Steuerterminen eingehen und ob 7.000 Euro als Reserve ausreichen.',
            ],
            effects: [
              'Anfangsbestand: 18.000 Euro',
              'Geplante Einzahlungen: 32.000 Euro',
              'Geplante Auszahlungen: 43.000 Euro',
              'Geplanter Endbestand: 7.000 Euro',
            ],
          },
        ],
      },
      {
        heading: 'Saisonale Schwankungen und Liquiditätsreserve',
        paragraphs: [
          'Saisonalität kann dazu führen, dass Ausgaben vor den zugehörigen Einnahmen anfallen. Das betrifft zum Beispiel Wareneinkäufe vor einer Hochsaison, Urlaubszeiten, Jahresbeiträge oder wiederkehrende Steuern.',
          'Eine Liquiditätsreserve federt unvorhergesehene Verzögerungen und Ausgaben ab. Ihre passende Höhe ist nicht allgemein festlegbar: Sie hängt von der Planbarkeit der Einzahlungen, festen Zahlungsverpflichtungen, Finanzierungsmöglichkeiten und dem Geschäftsmodell ab.',
        ],
      },
      {
        heading: 'Plan-Ist-Abgleich und Szenarioplanung',
        paragraphs: [
          'Vergleiche regelmäßig die geplanten und tatsächlichen Ein- und Auszahlungen. Abweichungen zeigen, ob Termine, Beträge oder Annahmen für die nächste Vorschau angepasst werden müssen.',
          'Ergänze den Grundplan durch Szenarien: Was passiert, wenn eine große Kundenrechnung zwei Wochen später eingeht, eine Steuerzahlung höher ausfällt oder ein Auftrag verschoben wird? Solche Varianten machen die Empfindlichkeit der Planung sichtbar.',
        ],
      },
      {
        heading: 'Liquiditätslücken früh erkennen',
        paragraphs: [
          'Eine Liquiditätslücke liegt vor, wenn der geplante Bestand zu einem Fälligkeitstermin nicht ausreicht. Sie sollte nicht erst am Kontoauszug auffallen, sondern rechtzeitig in der Planung sichtbar werden.',
          [
            'Mögliche Maßnahmen hängen von Ursache und Vertrag ab: Forderungen konsequent nachverfolgen, Auszahlungen zeitlich prüfen, Reserven nutzen oder rechtzeitig Finanzierungsoptionen klären. Ein ',
            { type: 'link', href: '/wissen/kontokorrentkredit', text: 'Kontokorrentkredit' },
            ' kann kurzfristige Lücken überbrücken, ersetzt aber keine dauerhaft tragfähige Planung. Risiken von Zinsen, Laufzeiten und Abhängigkeiten beschreibt die Seite ',
            { type: 'link', href: '/wissen/finanzierungsrisiken', text: 'Finanzierungsrisiken' },
            '.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle nicht Umsatz, Gewinn und Zahlungseingang. Setze erwartete Kundenzahlungen nicht zu optimistisch an und vergiss keine wiederkehrenden Termine wie Gehälter, Steuern, Versicherungen, Zinsen oder Tilgungen.',
          [
            'Plane außerdem nicht nur den Monatsendbestand. Bei knappen Reserven lohnt sich ein Blick auf die Wochenfolge. Der ',
            { type: 'link', href: '/wissen/cashflow', text: 'Cashflow' },
            ' ergänzt die Planung, ersetzt aber nicht die Übersicht konkreter Fälligkeiten.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Liquiditätsplanung ordnet erwartete Ein- und Auszahlungen ihren tatsächlichen Zeiträumen zu.',
    'Gewinn und Liquidität können deutlich voneinander abweichen.',
    'Der Endbestand einer Planperiode wird aus Anfangsbestand, Einzahlungen und Auszahlungen berechnet.',
    'Bei knappen Reserven ist eine Wochenplanung oft hilfreicher als nur eine Monatsübersicht.',
    'Plan-Ist-Abgleiche und Szenarien machen Abweichungen und mögliche Engpässe früh sichtbar.',
  ],
  commonMistakes: [
    'Umsatz, Gewinn und tatsächlichen Zahlungseingang gleichsetzen.',
    'Zahlungsziele, überfällige Forderungen oder gebündelte Fälligkeiten nicht berücksichtigen.',
    'Gehälter, Steuern, Zinsen oder Tilgungen in der Auszahlungsplanung vergessen.',
    'nur auf den Monatsendbestand schauen, obwohl innerhalb des Monats eine Lücke entsteht.',
    'Planwerte nach neuen Informationen nicht aktualisieren.',
  ],
  faqs: [
    {
      question: 'Was ist eine Liquiditätsplanung?',
      answer: 'Sie stellt geplante Einzahlungen und Auszahlungen einem verfügbaren Anfangsbestand gegenüber. So zeigt sie, ob zu den jeweiligen Terminen ausreichend Zahlungsmittel vorhanden sein können.',
    },
    {
      question: 'Wie oft sollte man die Liquiditätsplanung aktualisieren?',
      answer: 'Das hängt von der Situation ab. Bei stabilen Zahlungsströmen kann ein monatliches Update genügen. Bei knappen Reserven oder stark schwankenden Einzahlungen ist eine wöchentliche Aktualisierung sinnvoll.',
    },
    {
      question: 'Was ist eine Liquiditätslücke?',
      answer: 'Eine Liquiditätslücke entsteht, wenn die erwarteten Mittel zu einem Fälligkeitstermin nicht ausreichen, um geplante Zahlungen rechtzeitig zu leisten.',
    },
    {
      question: 'Warum reicht ein positiver Monatsendbestand nicht immer aus?',
      answer: 'Weil Ein- und Auszahlungen innerhalb des Monats zu unterschiedlichen Terminen anfallen. Eine Auszahlungswelle vor einem späteren Kundeneingang kann trotz positivem Monatsendwert eine vorübergehende Lücke erzeugen.',
    },
    {
      question: 'Was gehört in eine Liquiditätsplanung?',
      answer: 'Mindestens der verfügbare Anfangsbestand sowie erwartete Einzahlungen und alle absehbaren Auszahlungen mit realistischen Terminen. Dazu gehören oft Forderungen, Lieferanten, Gehälter, Steuern, Zinsen und Tilgungen.',
    },
  ],
  related: [
    'finanzierung-investition',
    'liquiditaet-controlling',
    'cashflow',
    'kontokorrentkredit',
    'finanzierungsrisiken',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default liquiditaetsplanung;
