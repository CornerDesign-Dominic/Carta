import { defaultDisclaimer } from '../shared.js';

const guv = {
  slug: 'guv',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Gewinn- und Verlustrechnung (GuV)',
  description: 'Gewinn- und Verlustrechnung einfach erklärt: Aufwendungen, Erträge, Gewinn, Verlust, Erfolgskonten und die Verbindung zur Bilanz.',
  seo: {
    title: 'Gewinn- und Verlustrechnung (GuV) erklärt | Belege24',
    description: 'Verstehe die GuV: Aufwendungen und Erträge, Gewinn oder Verlust, Erfolgskonten sowie Gesamt- und Umsatzkostenverfahren einfach erklärt.',
    canonicalPath: '/wissen/guv',
  },
  article: {
    intro: 'Die Gewinn- und Verlustrechnung, kurz GuV, zeigt den Erfolg eines Unternehmens innerhalb eines Geschäftsjahrs. Sie stellt Erträge und Aufwendungen gegenüber und macht sichtbar, ob ein Jahresüberschuss oder ein Jahresfehlbetrag entstanden ist.',
    sections: [
      {
        heading: 'Was ist die GuV?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' ist die Gegenüberstellung von ',
            { type: 'glossary', id: 'ertrag', text: 'Erträgen' },
            ' und ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwendungen' },
            ' eines Zeitraums. Sie zeigt damit, ob das Unternehmen im Geschäftsjahr wirtschaftlich erfolgreich war oder einen Verlust erzielt hat.',
          ],
          'Für bilanzierende Kaufleute ist sie grundsätzlich Teil des Jahresabschlusses. § 242 HGB verlangt zum Schluss eines jeden Geschäftsjahrs eine Gegenüberstellung der Aufwendungen und Erträge; zusammen mit der Bilanz bildet sie den Jahresabschluss.',
        ],
        formulaCards: [
          {
            title: 'Bei positivem Ergebnis',
            formula: 'Gewinn = Erträge − Aufwendungen',
            description: 'Übersteigen die Erträge die Aufwendungen, entsteht ein Jahresüberschuss.',
          },
          {
            title: 'Bei negativem Ergebnis',
            formula: 'Verlust = Aufwendungen − Erträge',
            description: 'Übersteigen die Aufwendungen die Erträge, entsteht ein Jahresfehlbetrag.',
          },
        ],
      },
      {
        heading: 'GuV und Bilanz: zwei unterschiedliche Perspektiven',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' zeigt Vermögen, Eigenkapital und Schulden zu einem Stichtag. Die GuV betrachtet dagegen die Veränderungen des Erfolgs innerhalb eines Zeitraums. Sie beantwortet nicht, wie viel Geld gerade auf dem Konto liegt, sondern wodurch Gewinn oder Verlust entstanden ist.',
          ],
          'Beide Auswertungen gehören zusammen: Ein Jahresüberschuss kann das Eigenkapital erhöhen, ein Jahresfehlbetrag kann es mindern. Die konkrete Darstellung und Ergebnisverwendung richten sich nach Rechtsform und den geltenden Rechnungslegungsvorschriften.',
        ],
      },
      {
        heading: 'Aufwendungen und Erträge',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwand' },
            ' ist ein Werteverzehr innerhalb des Geschäftsjahrs, der den Erfolg mindert. Typische Beispiele sind Materialverbrauch, Miete, Löhne, Abschreibungen oder Zinsen.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'ertrag', text: 'Ertrag' },
            ' ist ein Wertzuwachs innerhalb des Geschäftsjahrs, der den Erfolg erhöht. Typische Beispiele sind Umsatzerlöse aus Warenverkäufen oder Dienstleistungen sowie Zinserträge.',
          ],
          'Die GuV ordnet Aufwendungen und Erträge dem wirtschaftlich passenden Zeitraum zu. Deshalb ist sie nicht mit einer bloßen Aufstellung von Zahlungen gleichzusetzen.',
        ],
      },
      {
        heading: 'Aufwand ist nicht immer Ausgabe – Ertrag nicht immer Einnahme',
        paragraphs: [
          'Eine Ausgabe liegt vor, wenn Geld oder andere Zahlungsmittel abfließen. Aufwand kann dagegen auch ohne unmittelbare Zahlung entstehen, zum Beispiel durch die Abschreibung einer bereits gekauften Maschine.',
          'Eine Einnahme liegt vor, wenn Geld oder andere Zahlungsmittel zufließen. Ertrag kann dagegen bereits beim Verkauf auf Rechnung entstehen, obwohl der Kunde erst später bezahlt. Dann entsteht zunächst eine Forderung in der Bilanz und ein Ertrag in der GuV.',
          'Umgekehrt sind Darlehensauszahlungen zwar Einzahlungen, aber kein Ertrag. Die Rückzahlung eines Darlehens ist eine Auszahlung, aber grundsätzlich kein Aufwand. Diese Unterscheidung verhindert typische Fehlinterpretationen des Ergebnisses.',
        ],
      },
      {
        heading: 'Erfolgskonten und Abschluss über die GuV',
        paragraphs: [
          [
            'Aufwendungen und Erträge werden während des Jahres auf ',
            { type: 'glossary', id: 'erfolgskonto', text: 'Erfolgskonten' },
            ' erfasst. Aufwandskonten sammeln Werteverzehr, Ertragskonten sammeln Wertzuwächse. Sie haben im Unterschied zu Bestandskonten keinen Anfangsbestand aus der Bilanz.',
          ],
          'Zum Jahresende werden die Salden der Erfolgskonten über die GuV abgeschlossen. Die Gegenüberstellung ergibt den Erfolg des Geschäftsjahrs: Bei einem positiven Ergebnis entsteht ein Jahresüberschuss, bei einem negativen ein Jahresfehlbetrag.',
          'Der Abschluss verbindet die laufende Buchführung mit dem Jahresabschluss. Die Auswirkungen des Ergebnisses werden anschließend im Eigenkapital der Bilanz sichtbar; die genaue Buchungstechnik hängt vom Kontenplan und der Rechtsform ab.',
        ],
      },
      {
        heading: 'Gesamtkostenverfahren und Umsatzkostenverfahren',
        paragraphs: [
          '§ 275 HGB unterscheidet zwei Grundformen der GuV. Beide führen bei gleicher Bewertung zum selben Jahresergebnis, ordnen Aufwendungen aber unterschiedlich.',
          'Beim Gesamtkostenverfahren werden Aufwendungen nach ihrer Art gegliedert, zum Beispiel Materialaufwand, Personalaufwand und Abschreibungen. Bestandsveränderungen bei fertigen und unfertigen Erzeugnissen werden berücksichtigt.',
          'Beim Umsatzkostenverfahren werden die Aufwendungen den Umsätzen funktional zugeordnet, etwa als Herstellungskosten der verkauften Leistungen, Vertriebskosten oder Verwaltungskosten. Für den Einstieg ist vor allem wichtig: Die beiden Verfahren verändern nicht den Gewinn, sondern die Art der Darstellung.',
        ],
      },
      {
        heading: 'Beispiele: Die GuV Schritt für Schritt lesen',
        paragraphs: [
          'Die Beispiele vereinfachen bewusst und lassen Steuern, Umsatzsteuer sowie weitere Abschlusspositionen außer Betracht. Sie zeigen die Grundlogik von Ertrag, Aufwand und Ergebnis.',
        ],
        exampleCards: [
          {
            title: 'Einfaches Jahresergebnis',
            paragraphs: [
              'Ein Dienstleistungsunternehmen erzielt im Geschäftsjahr Umsatzerlöse von 60.000 Euro und Zinserträge von 500 Euro.',
              'Im selben Zeitraum fallen 18.000 Euro Personalaufwand, 9.000 Euro Mietaufwand, 6.000 Euro Materialaufwand und 2.500 Euro Abschreibungen an.',
              'Schritt 1: Die Erträge betragen insgesamt 60.500 Euro.',
              'Schritt 2: Die Aufwendungen betragen insgesamt 35.500 Euro.',
              'Schritt 3: 60.500 Euro minus 35.500 Euro ergeben einen Jahresüberschuss von 25.000 Euro.',
            ],
            effects: [
              'Ergebnis: Jahresüberschuss von 25.000 Euro vor weiteren Steuern und Abschlusspositionen.',
              'Bilanzbezug: Der Überschuss kann das Eigenkapital erhöhen.',
            ],
          },
          {
            title: 'Verkauf auf Rechnung',
            paragraphs: [
              'Ein Unternehmen verkauft eine Leistung für 1.200 Euro auf Rechnung. Der Kunde zahlt erst im folgenden Monat.',
              'Schritt 1: Mit der Leistung und Rechnungsstellung entsteht ein Ertrag von 1.200 Euro in der GuV.',
              [
                'Schritt 2: In der Bilanz entsteht zugleich eine ',
                { type: 'glossary', id: 'forderung', text: 'Forderung' },
                ' von 1.200 Euro.',
              ],
              'Schritt 3: Der spätere Zahlungseingang tauscht die Forderung gegen Bankguthaben. Er erhöht den Ertrag nicht ein zweites Mal.',
            ],
            effects: [
              'GuV: Ertrag entsteht beim Verkauf, nicht erst mit dem Zahlungseingang.',
              'Bilanz: Forderung wird bei Zahlung zu Bankguthaben.',
            ],
          },
          {
            title: 'Abschreibung ohne erneute Zahlung',
            paragraphs: [
              'Eine Maschine wurde bereits in einem früheren Jahr bezahlt und steht im Anlagevermögen.',
              'Im laufenden Jahr wird eine planmäßige Abschreibung von 2.000 Euro erfasst.',
              'Schritt 1: Die Abschreibung ist Aufwand und mindert das Ergebnis der GuV.',
              'Schritt 2: Im Zeitpunkt der Abschreibung fließt kein Geld ab. Der Aufwand ist daher keine neue Ausgabe.',
            ],
            effects: [
              'GuV: Aufwand von 2.000 Euro mindert Gewinn oder erhöht Verlust.',
              'Bilanz: Der Buchwert der Maschine sinkt.',
            ],
          },
        ],
      },
      {
        heading: 'Jahresüberschuss und Jahresfehlbetrag',
        paragraphs: [
          [
            'Übersteigen die Erträge die Aufwendungen, weist die GuV einen ',
            { type: 'glossary', id: 'jahresueberschuss', text: 'Jahresüberschuss' },
            ' aus. Übersteigen die Aufwendungen die Erträge, entsteht ein ',
            { type: 'glossary', id: 'jahresfehlbetrag', text: 'Jahresfehlbetrag' },
            '. § 275 HGB sieht beide als Ergebnisposition der GuV vor.',
          ],
          'Der Jahresüberschuss ist nicht automatisch frei verfügbares Geld. Er kann beispielsweise Forderungen, Abschreibungen oder andere nicht zahlungswirksame Positionen enthalten. Umgekehrt bedeutet ein Jahresfehlbetrag nicht automatisch, dass kein Geld mehr auf dem Bankkonto ist.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Verwechsle Gewinn nicht mit Liquidität. Die GuV erklärt den Erfolg eines Zeitraums, der Bankbestand zeigt nur einen Teil der finanziellen Lage zu einem Zeitpunkt.',
          'Behandle nicht jede Ausgabe als Aufwand und nicht jede Einnahme als Ertrag. Darlehen, Tilgungen, Investitionen und Abschreibungen zeigen, warum diese Begriffe getrennt betrachtet werden müssen.',
          'Verrechne Aufwendungen und Erträge nicht willkürlich miteinander. Der Jahresabschluss muss die vorgesehenen Positionen vollständig und nachvollziehbar darstellen.',
          'Die EÜR und die GuV erfüllen unterschiedliche Funktionen: Die EÜR folgt grundsätzlich Zahlungszeitpunkten, während die GuV Teil der Bilanzierung und periodengerechten Erfolgsermittlung ist.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'die GuV zeigt Aufwendungen und Erträge eines Geschäftsjahrs',
    'Erträge minus Aufwendungen ergeben Gewinn; bei umgekehrtem Verhältnis entsteht Verlust',
    'Erfolgskonten werden zum Jahresende über die GuV abgeschlossen',
    'Bilanz und GuV betrachten unterschiedliche Seiten des Unternehmens, gehören aber zusammen',
    'Gesamt- und Umsatzkostenverfahren unterscheiden sich in der Darstellung, nicht im Ergebnis',
    'Gewinn ist nicht dasselbe wie Kontostand oder Liquidität',
  ],
  commonMistakes: [
    'Gewinn mit dem Kontostand gleichsetzen',
    'Aufwand und Ausgabe verwechseln',
    'Ertrag und Einnahme verwechseln',
    'Darlehensaufnahme als Ertrag oder Tilgung als Aufwand erfassen',
    'Zahlungseingang als zweiten Ertrag behandeln, obwohl die Forderung bereits gebucht wurde',
    'Gesamt- und Umsatzkostenverfahren für unterschiedliche Gewinnermittlungen halten',
  ],
  faqs: [
    {
      question: 'Was zeigt die GuV?',
      answer: 'Die GuV stellt Erträge und Aufwendungen eines Geschäftsjahrs gegenüber und zeigt damit Gewinn oder Verlust.',
    },
    {
      question: 'Was ist der Unterschied zwischen Bilanz und GuV?',
      answer: 'Die Bilanz zeigt Vermögen, Eigenkapital und Schulden zu einem Stichtag. Die GuV zeigt den Erfolg innerhalb eines Zeitraums.',
    },
    {
      question: 'Ist eine Ausgabe immer Aufwand?',
      answer: 'Nein. Die Tilgung eines Darlehens ist zum Beispiel eine Auszahlung, aber grundsätzlich kein Aufwand. Umgekehrt kann eine Abschreibung Aufwand ohne neue Auszahlung sein.',
    },
    {
      question: 'Wann entsteht ein Jahresüberschuss?',
      answer: 'Ein Jahresüberschuss entsteht, wenn die Erträge eines Geschäftsjahrs höher sind als die Aufwendungen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Gesamt- und Umsatzkostenverfahren?',
      answer: 'Das Gesamtkostenverfahren gliedert Aufwendungen nach ihrer Art, das Umsatzkostenverfahren nach ihrer Funktion. Bei gleicher Bewertung führen beide zum selben Jahresergebnis.',
    },
    {
      question: 'Ist Gewinn gleich Liquidität?',
      answer: 'Nein. Gewinn ist ein Erfolgsergebnis, Liquidität beschreibt verfügbare Zahlungsmittel. Forderungen, Darlehen, Investitionen und Abschreibungen können beide Größen auseinanderfallen lassen.',
    },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'bilanz',
    'konten',
    'euer',
  ],
  sources: [
    { label: '§ 242 HGB – Pflicht zur Aufstellung von Bilanz und GuV', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 246 HGB – Vollständigkeit und Verrechnungsverbot', url: 'https://www.gesetze-im-internet.de/hgb/__246.html' },
    { label: '§ 275 HGB – Gliederung der Gewinn- und Verlustrechnung', url: 'https://www.gesetze-im-internet.de/hgb/__275.html' },
    { label: '§ 5 EStG – Gewinn bei Kaufleuten und bestimmten Gewerbetreibenden', url: 'https://www.gesetze-im-internet.de/estg/__5.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default guv;
