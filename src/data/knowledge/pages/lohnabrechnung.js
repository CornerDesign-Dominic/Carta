import { defaultDisclaimer } from '../shared.js';

const lohnabrechnung = {
  slug: 'lohnabrechnung',
  category: 'Personal & Lohn',
  title: 'Lohnabrechnung',
  description: 'Lohnabrechnung einfach erklärt: Bestandteile, Brutto und Netto, Lohnsteuer, Sozialversicherung, Abzüge, Arbeitgeberanteile und Korrekturen.',
  seo: {
    title: 'Lohnabrechnung einfach erklärt | Belege24',
    description: 'Erfahre, welche Angaben eine Lohnabrechnung enthält und wie Bruttoentgelt, Lohnsteuer, Sozialversicherung, Nettoentgelt und Arbeitgeberanteile zusammenhängen.',
    canonicalPath: '/wissen/lohnabrechnung',
  },
  article: {
    intro: 'Eine Lohnabrechnung zeigt, wie sich das Arbeitsentgelt eines Beschäftigten für einen Abrechnungszeitraum zusammensetzt. Sie trennt Bruttoentgelt, steuerliche Abzüge, Sozialversicherungsbeiträge und Auszahlungsbetrag – und macht die Berechnung nachvollziehbar.',
    sections: [
      {
        heading: 'Was ist eine Lohnabrechnung?',
        paragraphs: [
          'Eine Lohnabrechnung, rechtlich meist Entgeltabrechnung genannt, ist die Aufstellung zum Arbeitsentgelt für einen Abrechnungszeitraum. Sie erklärt, welche Vergütungsbestandteile abgerechnet wurden, welche Abzüge entstanden sind und welcher Betrag ausgezahlt wird.',
          'Sie ist nicht mit dem Arbeitsvertrag gleichzusetzen. Der Arbeitsvertrag regelt die vereinbarte Vergütung; die Lohnabrechnung dokumentiert, wie diese Vergütung im konkreten Zeitraum abgerechnet wurde.',
        ],
      },
      {
        heading: 'Wer erstellt und erhält die Abrechnung?',
        paragraphs: [
          'Der Arbeitgeber erstellt die Abrechnung und stellt sie dem Arbeitnehmer grundsätzlich bei der Zahlung des Arbeitsentgelts in Textform zur Verfügung. Das gilt vorbehaltlich gesetzlicher Ausnahmen und Erleichterungen, zum Beispiel wenn sich gegenüber der letzten ordnungsgemäßen Abrechnung keine Angaben geändert haben.',
          'Die Abrechnung kann intern, durch eine Lohnbuchhaltung oder durch einen Dienstleister erstellt werden. Für die korrekte Abrechnung, Meldung und Aufbewahrung bleibt der Arbeitgeber jedoch verantwortlich.',
        ],
      },
      {
        heading: 'Lohn und Gehalt: der kurze Unterschied',
        paragraphs: [
          'Im Alltag wird Lohn häufig für eine Vergütung verwendet, die sich an geleisteten Stunden oder Einheiten orientiert. Gehalt bezeichnet oft einen festen monatlichen Betrag. Für die Abrechnung ist vor allem entscheidend, was arbeitsvertraglich vereinbart und im jeweiligen Zeitraum tatsächlich geschuldet ist.',
          'Beide Formen können zusätzliche Bestandteile wie Zuschläge, Prämien, Einmalzahlungen oder Sachleistungen enthalten. Ihre steuerliche und sozialversicherungsrechtliche Behandlung kann je nach Art der Zahlung unterschiedlich sein.',
        ],
      },
      {
        heading: 'Typische Bestandteile einer Lohnabrechnung',
        paragraphs: [
          'Eine Abrechnung enthält typischerweise den Abrechnungszeitraum, persönliche Beschäftigungsdaten und die einzelnen Vergütungsbestandteile. Dazu können Grundvergütung, Stunden, Zuschläge, Zulagen, Prämien, Einmalzahlungen, Sachbezüge oder Erstattungen gehören.',
          'Daneben werden die Abzüge ausgewiesen, etwa Lohnsteuer und Arbeitnehmeranteile zur Sozialversicherung. Die Abrechnung sollte außerdem den Auszahlungsbetrag und die für die Abrechnung verwendeten Merkmale nachvollziehbar machen.',
        ],
      },
      {
        heading: 'Bruttoentgelt, steuerpflichtiger Arbeitslohn und Nettoentgelt',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'bruttoentgelt', text: 'Bruttoentgelt' },
            ' ist die Vergütung vor den persönlichen Abzügen. Für die Lohnsteuer ist nicht immer das gesamte Bruttoentgelt maßgeblich: Entscheidend ist, welcher Teil als ',
            { type: 'glossary', id: 'steuerpflichtiger-arbeitslohn', text: 'steuerpflichtiger Arbeitslohn' },
            ' behandelt wird.',
          ],
          [
            'Das ',
            { type: 'glossary', id: 'nettoentgelt', text: 'Nettoentgelt' },
            ' ist der Betrag, der nach Abzügen und möglichen Hinzurechnungen zur Auszahlung kommt. Erstattungen oder Vorschüsse können den tatsächlich überwiesenen Betrag zusätzlich beeinflussen. Deshalb ist Netto nicht bei jedem Beschäftigten allein anhand eines einheitlichen Prozentsatzes aus dem Brutto zu berechnen.',
          ],
        ],
      },
      {
        heading: 'Lohnsteuer, Solidaritätszuschlag und Kirchensteuer',
        paragraphs: [
          'Lohnsteuer ist die Erhebungsform der Einkommensteuer bei Arbeitslohn. Der Arbeitgeber berechnet den laufenden Abzug, behält ihn vom Arbeitslohn ein und führt ihn an die Finanzverwaltung ab. Dafür sind insbesondere die elektronischen Lohnsteuerabzugsmerkmale maßgeblich.',
          'Solidaritätszuschlag und Kirchensteuer sind von der Lohnsteuer zu unterscheiden. Sie können im Zusammenhang mit der Lohnabrechnung zusätzlich einbehalten werden, wenn die jeweiligen gesetzlichen Voraussetzungen erfüllt sind. Ob und in welcher Höhe sie anfallen, lässt sich nicht pauschal aus dem Bruttoentgelt ableiten.',
        ],
      },
      {
        heading: 'Sozialversicherungsbeiträge und Anteile',
        paragraphs: [
          [
            'Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung sind keine Steuern. Ob und in welchem Umfang Beiträge anfallen, hängt unter anderem von Beschäftigungsart, Versicherungspflicht und einzelnen Merkmalen ab. Grundlage ist das jeweils ',
            { type: 'glossary', id: 'sozialversicherungspflichtiges-entgelt', text: 'sozialversicherungspflichtige Entgelt' },
            ', das nicht in jedem Fall mit dem steuerpflichtigen Arbeitslohn identisch ist.',
          ],
          'Arbeitnehmeranteile werden grundsätzlich vom Arbeitsentgelt einbehalten. Arbeitgeber tragen daneben eigene Beiträge und Umlagen, soweit sie gesetzlich oder nach der konkreten Beschäftigung anfallen. Diese Arbeitgeberkosten gehören nicht zum Arbeitnehmer-Brutto und sind auf einer Abrechnung nicht mit dem Auszahlungsbetrag zu verwechseln.',
        ],
      },
      {
        heading: 'Sonstige Bezüge, Einmalzahlungen und Zusatzleistungen',
        paragraphs: [
          'Urlaubs- oder Weihnachtsgeld, Prämien, Boni und andere Einmalzahlungen können als sonstige Bezüge oder nach anderen Abrechnungsregeln behandelt werden. Ihre Einordnung kann Einfluss auf Lohnsteuer, Sozialversicherung und die Abrechnung haben.',
          'Auch Sachbezüge und geldwerte Vorteile können Arbeitsentgelt oder steuerpflichtiger Arbeitslohn sein. Ob eine Leistung steuer- oder beitragspflichtig ist, richtet sich nach ihrer konkreten Ausgestaltung und den jeweils geltenden Voraussetzungen.',
        ],
      },
      {
        heading: 'Abzüge, Zuschläge und Erstattungen richtig lesen',
        paragraphs: [
          'Abzüge mindern den Auszahlungsbetrag, zum Beispiel Lohnsteuer, Arbeitnehmeranteile oder zulässige weitere Abzüge. Zuschläge und Zulagen erhöhen zunächst das abgerechnete Entgelt; ihre Behandlung hängt jedoch davon ab, warum und wie sie gezahlt werden.',
          'Erstattungen sind von Arbeitslohn zu unterscheiden. Ersetzt der Arbeitgeber zum Beispiel Aufwendungen des Beschäftigten, hängt die Abrechnung davon ab, ob die Voraussetzungen für eine steuer- oder beitragsfreie Erstattung erfüllt sind. Prüfe deshalb immer die Bezeichnung und den Abrechnungszeitraum der einzelnen Positionen.',
        ],
      },
      {
        heading: 'Welche Angaben muss eine Entgeltabrechnung enthalten?',
        paragraphs: [
          'Die Entgeltabrechnung muss mindestens Angaben zum Abrechnungszeitraum und zur Zusammensetzung des Arbeitsentgelts enthalten. Dazu gehören insbesondere Art und Höhe von Zuschlägen, Zulagen, sonstigen Vergütungen, Abzügen, Abschlagszahlungen und Vorschüssen, soweit sie im jeweiligen Zeitraum relevant sind.',
          'Je nach Beschäftigung und Abrechnung kommen weitere Angaben hinzu, etwa zu Steuermerkmalen, Versicherungszweigen oder Meldedaten. Eine übersichtliche Abrechnung hilft Beschäftigten und Arbeitgebern, Änderungen und Fehler früh zu erkennen.',
        ],
      },
      {
        heading: 'Korrekturen, Aufbewahrung und Nachvollziehbarkeit',
        paragraphs: [
          'Eine korrigierte Abrechnung kann nötig sein, wenn Entgeltbestandteile, Abzüge oder zugrunde liegende Daten falsch erfasst wurden oder sich rückwirkend ändern. Je nach Fehler können zusätzlich Zahlungen, Lohnsteueranmeldungen oder Sozialversicherungsmeldungen berichtigt werden müssen.',
          'Arbeitgeber müssen Lohnkonten sowie steuer- und sozialversicherungsrechtliche Unterlagen nachvollziehbar führen und aufbewahren. Die Anforderungen und Fristen folgen unterschiedlichen Vorschriften. Beschäftigte sollten ihre Abrechnungen ebenfalls aufbewahren, um Zahlungen, Abzüge und spätere Nachweise prüfen zu können.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Lohnsteuer und Sozialversicherungsbeiträge sind unterschiedliche Abgaben. Auch das Arbeitnehmer-Brutto ist nicht gleich den gesamten Arbeitgeberkosten, weil Arbeitgeber je nach Fall eigene Beiträge und Umlagen tragen.',
          'Eine Lohnabrechnung ist außerdem kein endgültiger Bescheid über Steuer oder Versicherungspflicht. Beschäftigungsart, persönliche Merkmale und konkrete Vergütungsbestandteile können die Abrechnung beeinflussen. Bei Unklarheiten sollten die zugrunde liegenden Daten fachlich geprüft werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Lohnabrechnung erklärt die Zusammensetzung des Arbeitsentgelts für einen Abrechnungszeitraum',
    'Bruttoentgelt, steuerpflichtiger Arbeitslohn und Nettoentgelt sind unterschiedliche Größen',
    'Lohnsteuer und Sozialversicherungsbeiträge folgen unterschiedlichen gesetzlichen Regeln',
    'Arbeitnehmeranteile werden vom Arbeitsentgelt einbehalten; Arbeitgeberanteile sind eigene Arbeitgeberkosten',
    'Einmalzahlungen, Sachbezüge und Erstattungen können abweichend behandelt werden',
    'Bei Fehlern oder rückwirkenden Änderungen kann eine Korrektur der Abrechnung nötig werden',
    'Lohnunterlagen müssen nachvollziehbar geführt und nach den jeweiligen Vorschriften aufbewahrt werden',
  ],
  commonMistakes: [
    'Lohnsteuer und Sozialversicherungsbeiträge gleichsetzen',
    'Arbeitnehmer-Brutto mit den gesamten Arbeitgeberkosten verwechseln',
    'steuerpflichtigen Arbeitslohn automatisch mit jedem Vergütungsbestandteil gleichsetzen',
    'Sonderzahlungen, Sachbezüge oder Erstattungen ohne gesonderte Prüfung abrechnen',
    'Abrechnungszeitraum oder rückwirkende Änderungen übersehen',
    'Korrekturen von Abrechnung, Zahlung und Meldung nicht gemeinsam prüfen',
  ],
  faqs: [
    {
      question: 'Was ist eine Lohnabrechnung?',
      answer: 'Eine Lohnabrechnung zeigt, wie sich das Arbeitsentgelt eines Beschäftigten zusammensetzt, welche Abzüge anfallen und welcher Betrag ausgezahlt wird.',
    },
    {
      question: 'Wer muss eine Lohnabrechnung erstellen?',
      answer: 'Grundsätzlich stellt der Arbeitgeber bei Zahlung des Arbeitsentgelts eine Entgeltabrechnung in Textform bereit. Gesetzliche Ausnahmen und Erleichterungen können je nach Fall gelten.',
    },
    {
      question: 'Was ist der Unterschied zwischen Brutto und Netto?',
      answer: 'Brutto ist die Vergütung vor persönlichen Abzügen. Netto ist der Auszahlungsbetrag nach Abzügen und möglichen Hinzurechnungen wie Erstattungen.',
    },
    {
      question: 'Gehören Sozialversicherungsbeiträge zur Lohnsteuer?',
      answer: 'Nein. Lohnsteuer ist eine Steuer. Beiträge zur Sozialversicherung sind eigenständige Abgaben und hängen unter anderem von Beschäftigungsart und Versicherungspflicht ab.',
    },
    {
      question: 'Sind Arbeitgeberkosten auf der Lohnabrechnung enthalten?',
      answer: 'Die Abrechnung zeigt vor allem das Arbeitsentgelt und die auf den Beschäftigten bezogenen Abzüge. Eigene Arbeitgeberbeiträge und Umlagen sind nicht mit dem Arbeitnehmer-Brutto oder dem Nettoentgelt gleichzusetzen.',
    },
    {
      question: 'Wann braucht es eine korrigierte Lohnabrechnung?',
      answer: 'Eine Korrektur kann nötig sein, wenn Entgelt, Abzüge oder zugrunde liegende Daten falsch waren oder sich rückwirkend ändern. Je nach Fall sind auch Meldungen oder Zahlungen zu prüfen.',
    },
    {
      question: 'Sollte ich meine Lohnabrechnungen aufbewahren?',
      answer: 'Ja. Sie helfen, Zahlungen, Abzüge und Beschäftigungszeiten später nachzuvollziehen. Arbeitgeber müssen zusätzlich gesetzliche Aufzeichnungs- und Aufbewahrungspflichten beachten.',
    },
  ],
  related: [
    'personal-lohn',
    'lohnsteuer',
  ],
  sources: [
    { label: '§ 108 GewO – Entgeltabrechnung', url: 'https://www.gesetze-im-internet.de/gewo/__108.html' },
    { label: '§ 38 EStG – Erhebung der Lohnsteuer', url: 'https://www.gesetze-im-internet.de/estg/__38.html' },
    { label: '§ 39e EStG – Elektronische Lohnsteuerabzugsmerkmale', url: 'https://www.gesetze-im-internet.de/estg/__39e.html' },
    { label: '§ 41 EStG – Lohnkonto und Aufbewahrung', url: 'https://www.gesetze-im-internet.de/estg/__41.html' },
    { label: '§ 2 SGB IV – Arbeitsentgelt', url: 'https://www.gesetze-im-internet.de/sgb_4/__2.html' },
    { label: '§ 28f SGB IV – Aufzeichnungspflichten des Arbeitgebers', url: 'https://www.gesetze-im-internet.de/sgb_4/__28f.html' },
    { label: '§ 28g SGB IV – Abzug des Beitragsanteils des Beschäftigten', url: 'https://www.gesetze-im-internet.de/sgb_4/__28g.html' },
    { label: '§ 249 SGB V – Tragung der Beiträge zur Krankenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_5/__249.html' },
    { label: '§ 168 SGB VI – Tragung der Beiträge zur Rentenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_6/__168.html' },
    { label: '§ 346 SGB III – Tragung der Beiträge zur Arbeitslosenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_3/__346.html' },
    { label: '§ 3 SolzG 1995 – Solidaritätszuschlag', url: 'https://www.gesetze-im-internet.de/solzg_1995/__3.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lohnabrechnung;
