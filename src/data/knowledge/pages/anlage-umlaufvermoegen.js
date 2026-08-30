import { defaultDisclaimer } from '../shared.js';

const anlageUmlaufvermoegen = {
  slug: 'anlage-umlaufvermoegen',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Anlage- und Umlaufvermögen',
  description: 'Anlage- und Umlaufvermögen einfach erklärt: dauerhafte Nutzung, Vorräte, Forderungen, liquide Mittel und die richtige Einordnung in der Bilanz.',
  seo: {
    title: 'Anlage- und Umlaufvermögen erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen Anlage- und Umlaufvermögen anhand von Firmenfahrzeug, Maschine, Handelsware, Forderung und Bankguthaben.',
    canonicalPath: '/wissen/anlage-umlaufvermoegen',
  },
  article: {
    intro: 'Das Vermögen eines Unternehmens steht auf der Aktivseite der Bilanz. Entscheidend für die Einordnung ist, ob ein Gegenstand dem Betrieb dauerhaft dienen soll oder im normalen Geschäftsablauf verkauft, verbraucht oder in Geld umgewandelt wird.',
    sections: [
      {
        heading: 'Vermögen auf der Aktivseite der Bilanz',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' zeigt auf ihrer Aktivseite, wofür das Unternehmen Kapital eingesetzt hat. Dazu können Maschinen, Waren, offene Kundenforderungen, Bankguthaben oder Rechte wie Lizenzen gehören.',
          ],
          [
            'Das Handelsgesetzbuch verlangt, ',
            { type: 'glossary', id: 'anlagevermoegen', text: 'Anlagevermögen' },
            ' und ',
            { type: 'glossary', id: 'umlaufvermoegen', text: 'Umlaufvermögen' },
            ' in der Bilanz gesondert auszuweisen. Die Einteilung macht sichtbar, welche Werte langfristig im Betrieb gebunden sind und welche sich im laufenden Geschäft typischerweise verändern.',
          ],
        ],
      },
      {
        heading: 'Die entscheidende Abgrenzung: Zweck und dauerhafte Nutzung',
        paragraphs: [
          'Nicht allein die Art eines Gegenstands entscheidet über seine Einordnung, sondern sein Zweck im Betrieb. Zum Anlagevermögen gehören Gegenstände, die bestimmt sind, dauerhaft dem Geschäftsbetrieb zu dienen. Zum Umlaufvermögen gehören Werte, die nicht dafür bestimmt sind.',
          'Die Frage lautet daher: Nutzt das Unternehmen den Gegenstand langfristig als Arbeitsmittel oder soll er im normalen Ablauf verkauft, verarbeitet, verbraucht oder kurzfristig in Geld umgewandelt werden? Diese Zweckbestimmung ist wichtiger als der bloße Name des Gegenstands.',
        ],
        formulaCards: [
          {
            title: 'Anlagevermögen vs. Umlaufvermögen',
            formula: 'Anlagevermögen: dauerhaft dem Betrieb dienen\nUmlaufvermögen: verkaufen, verbrauchen oder in Geld umwandeln',
            description: 'Die Einordnung richtet sich nach dem vorgesehenen Einsatz im Unternehmen, nicht allein nach dem Gegenstand selbst.',
          },
        ],
      },
      {
        heading: 'Anlagevermögen: Werte für die dauerhafte Nutzung',
        paragraphs: [
          [
            'Zum Anlagevermögen zählen typischerweise drei Bereiche. Immaterielle Vermögensgegenstände sind nicht körperlich, zum Beispiel bestimmte entgeltlich erworbene Lizenzen oder Rechte. Sachanlagen sind körperliche Werte wie Grundstücke, technische Anlagen, Maschinen, Fahrzeuge und Büroausstattung.',
          ],
          'Finanzanlagen sind langfristig gehaltene finanzielle Beteiligungen, Ausleihungen oder Wertpapiere des Anlagevermögens. Sie dienen nicht unmittelbar der täglichen Produktion, können aber auf Dauer im Unternehmen gehalten werden.',
          [
            'Bei zeitlich begrenzt nutzbaren Gegenständen des Anlagevermögens ist die ',
            { type: 'glossary', id: 'abschreibung', text: 'Abschreibung' },
            ' wichtig. Wie Nutzungsdauer, Methoden und Wertminderungen behandelt werden, erklärt die verlinkte Detailseite.',
          ],
        ],
      },
      {
        heading: 'Umlaufvermögen: Werte im laufenden Geschäft',
        paragraphs: [
          'Zum Umlaufvermögen gehören insbesondere Vorräte, Forderungen, bestimmte Wertpapiere und liquide Mittel. Vorräte können zum Beispiel eingekaufte Handelswaren, Rohstoffe oder selbst hergestellte fertige und unfertige Erzeugnisse sein.',
          [
            'Eine ',
            { type: 'glossary', id: 'forderung', text: 'Forderung' },
            ' entsteht etwa, wenn ein Kunde auf Rechnung kauft. Sie wird typischerweise durch einen Zahlungseingang auf dem Bankkonto abgelöst. Bankguthaben und Kassenbestand sind liquide Mittel: Sie können unmittelbar für Zahlungen eingesetzt werden.',
          ],
          'Umlaufvermögen bedeutet nicht automatisch, dass sich ein Gegenstand besonders schnell bewegt. Entscheidend ist, dass er nicht zur dauerhaften Nutzung im Betrieb bestimmt ist.',
        ],
      },
      {
        heading: 'Beispiele: die richtige Einordnung im Unternehmensalltag',
        paragraphs: [
          'Die Beispiele zeigen die Grundlogik. Die konkrete Bilanzierung und Bewertung kann je nach Geschäftsmodell und Sachverhalt weitere Prüfung erfordern.',
        ],
        exampleCards: [
          {
            title: 'Firmenfahrzeug eines Handwerksbetriebs',
            paragraphs: [
              'Ein Handwerksbetrieb kauft einen Transporter, um damit über mehrere Jahre zu Kunden und Baustellen zu fahren.',
              'Der Transporter dient dauerhaft dem eigenen Geschäftsbetrieb. Er ist deshalb Anlagevermögen.',
              'Seine Anschaffung wird nicht allein deshalb zum Umlaufvermögen, weil das Fahrzeug bewegt wird oder regelmäßig Kosten verursacht.',
            ],
            effects: [
              'Einordnung: Sachanlage im Anlagevermögen.',
              'Weiterer Zusammenhang: Bei begrenzter Nutzungsdauer ist Abschreibung zu prüfen.',
            ],
          },
          {
            title: 'Handelsware im Elektronikgeschäft',
            paragraphs: [
              'Ein Elektronikgeschäft kauft Smartphones ein, um sie an Kunden weiterzuverkaufen.',
              'Die Smartphones dienen nicht dauerhaft dem eigenen Betrieb, sondern sind für den Verkauf bestimmt.',
              'Sie gehören daher als Vorräte zum Umlaufvermögen.',
            ],
            effects: [
              'Einordnung: Umlaufvermögen.',
              'Zweck: Verkauf im gewöhnlichen Geschäftsbetrieb.',
            ],
          },
          {
            title: 'Maschine in einer Produktionshalle',
            paragraphs: [
              'Ein Hersteller setzt eine Maschine über mehrere Jahre ein, um seine Produkte zu fertigen.',
              'Die Maschine bleibt im Betrieb und unterstützt dauerhaft die Produktion.',
              'Sie ist deshalb eine Sachanlage im Anlagevermögen, auch wenn sie mit den produzierten Waren zusammenhängt.',
            ],
            effects: [
              'Einordnung: Anlagevermögen.',
              'Abgrenzung: Die hergestellten Waren können dagegen Umlaufvermögen sein.',
            ],
          },
          {
            title: 'Bankguthaben',
            paragraphs: [
              'Auf dem Geschäftskonto liegen 18.000 Euro, die für laufende Rechnungen, Löhne oder Einkäufe verfügbar sind.',
              'Das Guthaben ist kein dauerhaft eingesetztes Arbeitsmittel, sondern ein liquider Wert im laufenden Geschäftsablauf.',
              'Es gehört daher zum Umlaufvermögen.',
            ],
            effects: [
              'Einordnung: Liquide Mittel im Umlaufvermögen.',
              'Bilanz: Der Betrag steht auf der Aktivseite.',
            ],
          },
          {
            title: 'Forderung gegenüber einem Kunden',
            paragraphs: [
              'Ein Unternehmen hat eine Rechnung an einen Kunden geschrieben; die Zahlung steht noch aus.',
              'Der Anspruch auf Zahlung ist eine Forderung. Er soll im normalen Ablauf durch Zahlung erfüllt werden.',
              'Die Forderung gehört deshalb zum Umlaufvermögen und wird beim Zahlungseingang regelmäßig zu Bankguthaben.',
            ],
            effects: [
              'Einordnung: Forderung im Umlaufvermögen.',
              'Umwandlung: Forderung wird bei Zahlung zu liquiden Mitteln.',
            ],
          },
          {
            title: 'Gleicher Gegenstand, anderer Zweck',
            paragraphs: [
              'Ein Autohaus hält ein Fahrzeug zum Weiterverkauf vor. Für das Autohaus ist es Handelsware und damit Umlaufvermögen.',
              'Kauft ein Beratungsunternehmen ein gleichartiges Fahrzeug für Fahrten zu Kunden, soll es dauerhaft genutzt werden.',
              'Für das Beratungsunternehmen ist das Fahrzeug daher Anlagevermögen. Die Einordnung folgt dem Zweck im jeweiligen Betrieb.',
            ],
            effects: [
              'Entscheidend: vorgesehene Nutzung im Unternehmen.',
              'Nicht entscheidend: Gegenstandsart oder bloßer Kaufpreis.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Bilanz und Abschreibung',
        paragraphs: [
          'Anlage- und Umlaufvermögen stehen auf der Aktivseite der Bilanz und werden dort nach den jeweiligen gesetzlichen Vorgaben gegliedert. Die Einordnung beeinflusst, welche Angaben und Bewertungsregeln im Jahresabschluss relevant sind.',
          'Eine dauerhafte Nutzung bedeutet nicht, dass ein Wert unverändert bleibt. Bei abnutzbarem Anlagevermögen wird der Wertverzehr planmäßig über die Nutzungsdauer abgebildet. Die Seite zur Abschreibung erläutert diese Logik mit Methoden und Beispielen, ohne dass sie hier wiederholt werden muss.',
        ],
      },
      {
        heading: 'Typische Fehlzuordnungen',
        paragraphs: [
          'Ein häufiger Fehler ist, alle körperlichen Gegenstände als Anlagevermögen anzusehen. Handelswaren, Rohstoffe und Produkte im Lager gehören trotz ihrer Körperlichkeit typischerweise zum Umlaufvermögen.',
          'Umgekehrt ist nicht jeder Wert, der sich im Betrieb verändert, Umlaufvermögen. Ein dauerhaft genutztes Fahrzeug oder eine Maschine bleibt Anlagevermögen, auch wenn es laufende Kosten verursacht oder abgeschrieben wird.',
          'Die Einordnung sollte nicht allein nach Liquidität, Kaufpreis oder der erwarteten Haltedauer erfolgen. Maßgeblich ist die Zweckbestimmung im Geschäftsbetrieb. Bei ungewöhnlichen oder gemischt genutzten Gegenständen ist fachliche Prüfung sinnvoll.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Vermögen steht auf der Aktivseite der Bilanz.',
    'Anlagevermögen dient dauerhaft dem Geschäftsbetrieb.',
    'Umlaufvermögen wird im normalen Ablauf verkauft, verbraucht oder in Geld umgewandelt.',
    'Zum Anlagevermögen gehören grundsätzlich immaterielle Vermögensgegenstände, Sachanlagen und Finanzanlagen.',
    'Vorräte, Forderungen und liquide Mittel sind typische Bestandteile des Umlaufvermögens.',
    'Der gleiche Gegenstand kann je nach Geschäftszweck unterschiedlich eingeordnet werden.',
  ],
  commonMistakes: [
    'alle körperlichen Gegenstände automatisch dem Anlagevermögen zuordnen',
    'Handelswaren und dauerhaft genutzte Arbeitsmittel gleich behandeln',
    'ein Fahrzeug nur wegen seiner Beweglichkeit als Umlaufvermögen ansehen',
    'Bankguthaben oder Forderungen nicht als Umlaufvermögen erkennen',
    'Abschreibung mit der Einordnung als Anlagevermögen verwechseln',
    'nur die Gegenstandsart statt den vorgesehenen betrieblichen Zweck betrachten',
  ],
  faqs: [
    { question: 'Was ist der Unterschied zwischen Anlage- und Umlaufvermögen?', answer: 'Anlagevermögen ist dauerhaft für den Geschäftsbetrieb bestimmt. Umlaufvermögen wird im normalen Ablauf verkauft, verbraucht oder in Geld umgewandelt.' },
    { question: 'Ist ein Firmenfahrzeug Anlagevermögen?', answer: 'In der Regel ja, wenn es dauerhaft im Betrieb genutzt wird. Ein Autohaus kann ein Fahrzeug zum Weiterverkauf dagegen als Umlaufvermögen halten.' },
    { question: 'Gehören Waren zum Umlaufvermögen?', answer: 'Ja, wenn sie zum Verkauf, Verbrauch oder zur Verarbeitung im normalen Geschäft bestimmt sind.' },
    { question: 'Sind Forderungen Umlaufvermögen?', answer: 'Typischerweise ja. Sie sollen im normalen Geschäftsablauf durch Zahlung erfüllt und damit in liquide Mittel umgewandelt werden.' },
    { question: 'Sind Bankguthaben Umlaufvermögen?', answer: 'Ja. Bankguthaben und Kassenbestand sind liquide Mittel und gehören typischerweise zum Umlaufvermögen.' },
    { question: 'Warum ist die Einordnung wichtig?', answer: 'Sie bestimmt die Gliederung der Bilanz und ist ein Ausgangspunkt für die passenden Rechnungslegungs- und Bewertungsregeln.' },
  ],
  related: [
    'bilanz',
    'abschreibung',
  ],
  sources: [
    { label: '§ 247 HGB – Anlage- und Umlaufvermögen', url: 'https://www.gesetze-im-internet.de/hgb/__247.html' },
    { label: '§ 253 HGB – Zugangs- und Folgebewertung', url: 'https://www.gesetze-im-internet.de/hgb/__253.html' },
    { label: '§ 266 HGB – Gliederung der Bilanz', url: 'https://www.gesetze-im-internet.de/hgb/__266.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default anlageUmlaufvermoegen;
