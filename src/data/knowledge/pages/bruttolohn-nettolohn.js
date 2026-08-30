import { defaultDisclaimer } from '../shared.js';

const bruttolohnNettolohn = {
  slug: 'bruttolohn-nettolohn',
  category: 'Personal & Lohn',
  title: 'Bruttolohn und Nettolohn',
  description: 'Bruttolohn und Nettolohn einfach erklärt: Abzüge, Lohnsteuer, Sozialversicherung und warum das Netto trotz gleichem Brutto unterschiedlich sein kann.',
  seo: {
    title: 'Bruttolohn und Nettolohn einfach erklärt | Belege24',
    description: 'Erfahre, was Brutto und Netto unterscheidet, welche Abzüge auf der Lohnabrechnung vorkommen und warum das Netto individuell verschieden sein kann.',
    canonicalPath: '/wissen/bruttolohn-nettolohn',
  },
  article: {
    intro: 'Bruttolohn ist die vereinbarte Vergütung vor den persönlichen Abzügen. Nettolohn ist der Betrag, der nach Abzügen und möglichen Hinzurechnungen ausgezahlt wird. Wie hoch das Netto ausfällt, hängt unter anderem von Steuermerkmalen, Sozialversicherung und der konkreten Abrechnung ab.',
    sections: [
      {
        heading: 'Was ist Bruttolohn?',
        paragraphs: [
          [
            'Der Bruttolohn ist das ',
            { type: 'glossary', id: 'bruttoentgelt', text: 'Bruttoentgelt' },
            ' vor den persönlichen Abzügen des Beschäftigten. Er kann sich aus dem festen Monatsgehalt oder Stundenlohn sowie weiteren Vergütungsbestandteilen wie Zuschlägen, Provisionen oder Einmalzahlungen zusammensetzen.',
          ],
          'Welche Bestandteile im einzelnen Abrechnungsmonat zum Brutto gehören, richtet sich vor allem nach Arbeitsvertrag, Abrechnungszeitraum und Anlass der Zahlung. Bruttolohn ist nicht mit den gesamten Kosten des Arbeitgebers gleichzusetzen.',
        ],
      },
      {
        heading: 'Was ist Nettolohn?',
        paragraphs: [
          [
            'Der Nettolohn ist das ',
            { type: 'glossary', id: 'nettoentgelt', text: 'Nettoentgelt' },
            ', das nach Abzügen und möglichen Hinzurechnungen zur Auszahlung kommt. Er wird auf der Lohnabrechnung für den jeweiligen Abrechnungszeitraum nachvollziehbar ausgewiesen.',
          ],
          'Netto ist nicht einfach „Brutto minus Steuern“. Je nach Beschäftigung können neben der Lohnsteuer auch Beiträge zur Sozialversicherung, Kirchensteuer, Solidaritätszuschlag oder weitere Abzüge berücksichtigt werden. Erstattungen oder Vorschüsse können den Auszahlungsbetrag ebenfalls verändern.',
        ],
      },
      {
        heading: 'Brutto, steuerpflichtiger Arbeitslohn und sozialversicherungspflichtiges Entgelt',
        paragraphs: [
          'Diese Begriffe beschreiben unterschiedliche Berechnungsgrößen. Bruttoentgelt ist die Vergütung vor persönlichen Abzügen. Für den Lohnsteuerabzug ist der steuerpflichtige Arbeitslohn maßgeblich. Für Sozialversicherungsbeiträge kommt es auf das sozialversicherungspflichtige Entgelt an.',
          [
            'Der ',
            { type: 'glossary', id: 'steuerpflichtiger-arbeitslohn', text: 'steuerpflichtige Arbeitslohn' },
            ' und das ',
            { type: 'glossary', id: 'sozialversicherungspflichtiges-entgelt', text: 'sozialversicherungspflichtige Entgelt' },
            ' können sich vom Bruttoentgelt und auch voneinander unterscheiden. Ob eine Zahlung steuerpflichtig oder beitragspflichtig ist, hängt von ihrer Art und den gesetzlichen Voraussetzungen ab.',
          ],
        ],
      },
      {
        heading: 'Welche Abzüge liegen typischerweise zwischen Brutto und Netto?',
        paragraphs: [
          'Bei Arbeitnehmern können vom Bruttoentgelt insbesondere Lohnsteuer sowie Arbeitnehmeranteile zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung abgezogen werden. Die Beiträge zur Sozialversicherung sind keine Steuern und folgen eigenen Regeln.',
          'Solidaritätszuschlag und Kirchensteuer können zusätzlich eine Rolle spielen. Ob sie anfallen und in welcher Höhe, hängt unter anderem von den Lohnsteuerabzugsmerkmalen, dem Einkommen und bei Kirchensteuer von der persönlichen Zugehörigkeit sowie den landesrechtlichen Regeln ab.',
          'Weitere Abzüge können sich zum Beispiel aus einem Vorschuss, einer Pfändung oder einer zulässigen vertraglichen Vereinbarung ergeben. Solche Positionen sind nicht bei jeder Abrechnung vorhanden und müssen jeweils nachvollziehbar sein.',
        ],
      },
      {
        heading: 'Warum kann das Netto bei gleichem Brutto unterschiedlich sein?',
        paragraphs: [
          'Ein gleiches vereinbartes Brutto führt nicht zwingend zum gleichen Nettolohn. Beim Lohnsteuerabzug können etwa Steuerklasse, Freibeträge und weitere elektronische Lohnsteuerabzugsmerkmale relevant sein.',
          'Auch die Sozialversicherung kann sich unterscheiden, etwa durch Beschäftigungsart, Versicherungsstatus, Krankenkasse, Pflegeversicherungsmerkmale oder Beitragsbemessungsgrenzen. Bei Einmalzahlungen und wechselnden Vergütungsbestandteilen kann sich das Netto zudem von Monat zu Monat ändern.',
        ],
      },
      {
        heading: 'Arbeitnehmer-Brutto und Arbeitgeber-Gesamtkosten',
        paragraphs: [
          'Das Arbeitnehmer-Brutto ist die Vergütung vor den persönlichen Abzügen. Zusätzlich können für den Arbeitgeber eigene Beiträge zur Sozialversicherung, Umlagen oder weitere Aufwendungen entstehen. Diese Arbeitgeberkosten erhöhen nicht den Bruttolohn und werden nicht vom Netto abgezogen.',
          'Für die Kostenplanung ist es deshalb sinnvoll, Arbeitnehmer-Brutto, Auszahlungsbetrag und Arbeitgeber-Gesamtkosten getrennt zu betrachten.',
        ],
      },
      {
        heading: 'Vereinfachtes Rechenbeispiel',
        paragraphs: [
          'Eine Beschäftigte vereinbart für einen Monat 3.000 Euro Bruttoentgelt. In der Abrechnung werden – soweit die Voraussetzungen vorliegen – Lohnsteuer und Arbeitnehmeranteile zur Sozialversicherung ermittelt und abgezogen. Der verbleibende Auszahlungsbetrag ist das Nettoentgelt.',
          'Die Höhe dieses Nettoentgelts lässt sich aus dem Brutto allein nicht zuverlässig ableiten. Für eine reale Abrechnung müssten unter anderem die aktuellen Lohnsteuerabzugsmerkmale, die konkrete Krankenkasse, die Beschäftigungsart und weitere Angaben berücksichtigt werden.',
        ],
      },
      {
        heading: 'Zusammenhang mit der Lohnabrechnung',
        paragraphs: [
          'Die Lohnabrechnung macht die einzelnen Rechenschritte sichtbar: Vergütungsbestandteile, steuerliche Berechnungsgrößen, Sozialversicherungsbeiträge, Abzüge und Auszahlungsbetrag. Sie hilft Beschäftigten, Änderungen gegenüber dem Vormonat einzuordnen.',
          'Fallen Abzüge oder Auszahlungsbetrag unerwartet aus, sollte zuerst geprüft werden, ob sich Entgeltbestandteile, Abrechnungszeitraum oder zugrunde liegende Merkmale geändert haben. Bei Unsicherheiten zu einer konkreten Abrechnung ist fachlicher Rat sinnvoll.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Bruttolohn ist weder der Auszahlungsbetrag noch der gesamte Aufwand des Arbeitgebers. Außerdem sind Lohnsteuer und Sozialversicherungsbeiträge unterschiedliche Abgaben mit eigenen Regeln.',
          'Ein Nettorechner kann nur dann sinnvoll schätzen, wenn die verwendeten Daten vollständig und aktuell sind. Er ersetzt keine Prüfung von Sonderzahlungen, besonderen Beschäftigungsformen oder individuellen Abrechnungsmerkmalen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bruttolohn ist die Vergütung vor persönlichen Abzügen',
    'Nettolohn ist der Auszahlungsbetrag nach Abzügen und möglichen Hinzurechnungen',
    'Bruttoentgelt, steuerpflichtiger Arbeitslohn und sozialversicherungspflichtiges Entgelt können voneinander abweichen',
    'Lohnsteuer und Sozialversicherungsbeiträge sind unterschiedliche Abgaben',
    'Das Netto hängt unter anderem von Steuermerkmalen, Sozialversicherung und Vergütungsbestandteilen ab',
    'Arbeitgeber-Gesamtkosten gehen über das Arbeitnehmer-Brutto hinaus',
  ],
  commonMistakes: [
    'Netto mit Brutto minus Lohnsteuer gleichsetzen',
    'Lohnsteuer und Sozialversicherungsbeiträge verwechseln',
    'annehmen, gleiches Brutto führe immer zum gleichen Netto',
    'Arbeitnehmer-Brutto mit den gesamten Arbeitgeberkosten gleichsetzen',
    'Einmalzahlungen oder Zuschläge ohne gesonderte Prüfung wie die Grundvergütung behandeln',
    'einen Nettorechner als verbindliche Lohnabrechnung verstehen',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Brutto und Netto?',
      answer: 'Brutto ist die Vergütung vor persönlichen Abzügen. Netto ist der Betrag, der nach Abzügen und möglichen Hinzurechnungen ausgezahlt wird.',
    },
    {
      question: 'Warum ist mein Netto niedriger als mein Brutto?',
      answer: 'Vom Brutto können unter anderem Lohnsteuer und Arbeitnehmeranteile zur Sozialversicherung abgezogen werden. Je nach Fall kommen weitere Abzüge oder Hinzurechnungen hinzu.',
    },
    {
      question: 'Ist der steuerpflichtige Arbeitslohn immer gleich dem Bruttolohn?',
      answer: 'Nein. Ob einzelne Vergütungsbestandteile steuerpflichtig sind, richtet sich nach den jeweiligen gesetzlichen Voraussetzungen. Der steuerpflichtige Arbeitslohn kann deshalb vom Bruttoentgelt abweichen.',
    },
    {
      question: 'Warum haben zwei Personen mit gleichem Brutto ein unterschiedliches Netto?',
      answer: 'Zum Beispiel können Lohnsteuerabzugsmerkmale, Krankenkasse, Pflegeversicherungsmerkmale, Beschäftigungsart oder weitere Abrechnungsdaten unterschiedlich sein.',
    },
    {
      question: 'Sind Arbeitgeberkosten Teil des Bruttolohns?',
      answer: 'Nein. Arbeitgeberbeiträge und weitere Arbeitgeberaufwendungen kommen zusätzlich zum Arbeitnehmer-Brutto hinzu.',
    },
    {
      question: 'Können Einmalzahlungen das Netto verändern?',
      answer: 'Ja. Boni, Urlaubs- oder Weihnachtsgeld können steuerlich und sozialversicherungsrechtlich eigene Berechnungsregeln auslösen und das Netto im Auszahlungsmonat verändern.',
    },
  ],
  related: [
    'personal-lohn',
    'lohnabrechnung',
    'lohnsteuer',
    'sozialversicherungsbeitraege',
  ],
  sources: [
    { label: '§ 38 EStG – Erhebung der Lohnsteuer', url: 'https://www.gesetze-im-internet.de/estg/__38.html' },
    { label: '§ 39e EStG – Elektronische Lohnsteuerabzugsmerkmale', url: 'https://www.gesetze-im-internet.de/estg/__39e.html' },
    { label: '§ 3 SolzG 1995 – Solidaritätszuschlag', url: 'https://www.gesetze-im-internet.de/solzg_1995/__3.html' },
    { label: '§ 14 SGB IV – Arbeitsentgelt', url: 'https://www.gesetze-im-internet.de/sgb_4/__14.html' },
    { label: '§ 28g SGB IV – Abzug des Beitragsanteils des Beschäftigten', url: 'https://www.gesetze-im-internet.de/sgb_4/__28g.html' },
    { label: '§ 223 SGB V – Beitragspflicht und Beitragsbemessungsgrenze', url: 'https://www.gesetze-im-internet.de/sgb_5/__223.html' },
    { label: '§ 55 SGB XI – Pflegeversicherung', url: 'https://www.gesetze-im-internet.de/sgb_11/__55.html' },
    { label: '§ 168 SGB VI – Beitragstragung in der Rentenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_6/__168.html' },
    { label: '§ 346 SGB III – Beitragstragung in der Arbeitslosenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_3/__346.html' },
    { label: '§ 108 GewO – Entgeltabrechnung', url: 'https://www.gesetze-im-internet.de/gewo/__108.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bruttolohnNettolohn;
