import { defaultDisclaimer } from '../shared.js';

const sozialversicherungsbeitraege = {
  slug: 'sozialversicherungsbeitraege',
  category: 'Personal & Lohn',
  title: 'Sozialversicherungsbeiträge',
  description: 'Sozialversicherungsbeiträge einfach erklärt: Versicherungszweige, Arbeitgeber- und Arbeitnehmeranteile, Zusatzbeitrag und Beitragsbemessungsgrenze 2026.',
  seo: {
    title: 'Sozialversicherungsbeiträge einfach erklärt | Belege24',
    description: 'Erfahre, wie Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung grundsätzlich berechnet und von Arbeitgebern und Arbeitnehmern getragen werden.',
    canonicalPath: '/wissen/sozialversicherungsbeitraege',
  },
  article: {
    intro: 'Sozialversicherungsbeiträge finanzieren die gesetzliche Kranken-, Pflege-, Renten- und Arbeitslosenversicherung. Ob und in welcher Höhe sie bei einer Beschäftigung anfallen, hängt von der Beschäftigungsart, dem beitragspflichtigen Entgelt und den jeweils geltenden Regeln ab.',
    sections: [
      {
        heading: 'Was sind Sozialversicherungsbeiträge?',
        paragraphs: [
          'Sozialversicherungsbeiträge sind keine Steuern. Sie finanzieren Leistungen der gesetzlichen Sozialversicherung und werden bei versicherungspflichtigen Beschäftigungen grundsätzlich aus dem Arbeitsentgelt berechnet.',
          'Nicht jede beschäftigte Person ist in allen Versicherungszweigen gleich versicherungspflichtig. Zum Beispiel können Minijob, Midijob, Werkstudententätigkeit oder kurzfristige Beschäftigung eigene Regeln auslösen. Diese Sonderfälle werden hier nur eingeordnet und brauchen eine Prüfung im konkreten Fall.',
        ],
      },
      {
        heading: 'Welche Versicherungszweige sind in der Lohnabrechnung relevant?',
        paragraphs: [
          'In der Lohnabrechnung sind regelmäßig Beiträge zur gesetzlichen Krankenversicherung, sozialen Pflegeversicherung, gesetzlichen Rentenversicherung und Arbeitslosenversicherung relevant. Für jeden Zweig gelten eigene Beitragssätze, Bemessungsregeln und Voraussetzungen.',
          'Die gesetzliche Unfallversicherung ist ebenfalls Teil der Sozialversicherung, wird aber grundsätzlich allein vom Arbeitgeber finanziert. Sie erscheint daher in der Regel nicht als Arbeitnehmerabzug auf der Lohnabrechnung.',
        ],
        subsections: [
          {
            heading: 'Krankenversicherung',
            paragraphs: [
              'Die gesetzliche Krankenversicherung trägt unter anderem Leistungen bei Krankheit. Beiträge richten sich nach beitragspflichtigen Einnahmen bis zur Beitragsbemessungsgrenze. Neben dem allgemeinen Beitragssatz kann ein kassenindividueller Zusatzbeitrag relevant sein.',
            ],
          },
          {
            heading: 'Pflegeversicherung',
            paragraphs: [
              'Die soziale Pflegeversicherung sichert das Risiko der Pflegebedürftigkeit ab. Für die Beitragsberechnung gilt dieselbe Beitragsbemessungsgrenze wie in der gesetzlichen Krankenversicherung.',
              'Die konkrete Beitragslast kann unter anderem vom Alter, der Elterneigenschaft, der Zahl berücksichtigungsfähiger Kinder und dem Beschäftigungsort abhängen. Deshalb ist eine pauschale Verteilung zwischen Arbeitgeber und Arbeitnehmer nicht in jedem Fall zutreffend.',
            ],
          },
          {
            heading: 'Rentenversicherung',
            paragraphs: [
              'Die gesetzliche Rentenversicherung finanziert vor allem Rentenleistungen und weitere gesetzliche Leistungen. Bei versicherungspflichtiger Beschäftigung werden die Beiträge grundsätzlich aus dem beitragspflichtigen Arbeitsentgelt bis zur maßgeblichen Beitragsbemessungsgrenze berechnet.',
            ],
          },
          {
            heading: 'Arbeitslosenversicherung',
            paragraphs: [
              'Die Arbeitslosenversicherung finanziert unter anderem Leistungen bei Arbeitslosigkeit und Maßnahmen der Arbeitsförderung. Für versicherungspflichtige Beschäftigungen gilt bei der Beitragsberechnung grundsätzlich dieselbe Beitragsbemessungsgrenze wie in der allgemeinen Rentenversicherung.',
            ],
          },
        ],
      },
      {
        heading: 'Wer trägt die Beiträge?',
        paragraphs: [
          'In vielen Standardfällen tragen Arbeitgeber und Arbeitnehmer die Beiträge zu Kranken-, Renten- und Arbeitslosenversicherung grundsätzlich jeweils anteilig. Der Arbeitgeber behält den Arbeitnehmeranteil vom Arbeitsentgelt ein und führt die Beiträge zusammen mit seinem eigenen Anteil ab.',
          'Die tatsächliche Verteilung kann je nach Versicherungszweig und persönlicher Situation abweichen. Besonders in der Pflegeversicherung sowie bei besonderen Beschäftigungsformen gelten zusätzliche Regeln. Arbeitgeberanteile und Umlagen sind eigene Arbeitgeberkosten und nicht Teil des Arbeitnehmer-Bruttoentgelts.',
        ],
      },
      {
        heading: 'Beitragspflichtiges Entgelt und Bruttoentgelt',
        paragraphs: [
          [
            'Ausgangspunkt ist das ',
            { type: 'glossary', id: 'sozialversicherungspflichtiges-entgelt', text: 'sozialversicherungspflichtige Entgelt' },
            '. Es kann von der Vergütung auf der Abrechnung ausgehen, ist aber nicht automatisch mit jedem Bestandteil des Bruttoentgelts oder mit dem steuerpflichtigen Arbeitslohn identisch.',
          ],
          'Ob zum Beispiel Einmalzahlungen, Sachbezüge, Zuschläge oder Erstattungen beitragspflichtig sind, richtet sich nach den jeweiligen gesetzlichen Voraussetzungen. Deshalb kann eine Zahlung steuerlich und sozialversicherungsrechtlich unterschiedlich behandelt werden.',
        ],
      },
      {
        heading: 'Wie werden Beiträge grundsätzlich berechnet?',
        paragraphs: [
          'Vereinfacht gilt: Beitragspflichtiges Entgelt wird bis zur jeweiligen Beitragsbemessungsgrenze mit dem maßgeblichen Beitragssatz multipliziert. Anschließend werden Arbeitnehmer- und Arbeitgeberanteil nach den Regeln des jeweiligen Versicherungszweigs zugeordnet.',
          [
            'Der ',
            { type: 'glossary', id: 'zusatzbeitrag', text: 'Zusatzbeitrag' },
            ' gehört zur gesetzlichen Krankenversicherung und wird von der einzelnen Krankenkasse festgelegt. Er ist vom allgemeinen Beitragssatz zu unterscheiden und kann sich ändern. Für die konkrete Abrechnung ist daher die für den Zeitraum geltende Kasse maßgeblich.',
          ],
        ],
      },
      {
        heading: 'Beitragsbemessungsgrenze: Was sie begrenzt',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'beitragsbemessungsgrenze', text: 'Beitragsbemessungsgrenze' },
            ' begrenzt das Einkommen, das für die Berechnung eines Sozialversicherungsbeitrags berücksichtigt wird. Einkommen oberhalb dieser Grenze erhöht den Beitrag in diesem Versicherungszweig grundsätzlich nicht weiter.',
          ],
          'Sie begrenzt also die Beitragsberechnung, nicht das tatsächlich verdiente Arbeitsentgelt. Ein Beschäftigter kann mehr verdienen als die Beitragsbemessungsgrenze, ohne dass das darüberliegende Einkommen in diesem Zweig vollständig zusätzlich verbeitragt wird.',
        ],
      },
      {
        heading: 'Beitragsbemessungsgrenzen 2026',
        paragraphs: [
          'Stand 1. Januar 2026 beträgt die Beitragsbemessungsgrenze in der gesetzlichen Kranken- und sozialen Pflegeversicherung 69.750 Euro im Jahr beziehungsweise 5.812,50 Euro im Monat. Für die allgemeine Renten- und Arbeitslosenversicherung liegt sie bei 101.400 Euro im Jahr beziehungsweise 8.450 Euro im Monat.',
          'Die Werte für Kranken- und Pflegeversicherung unterscheiden sich damit von den Werten für Renten- und Arbeitslosenversicherung. Für die allgemeine Rentenversicherung gilt 2026 ein einheitlicher bundesweiter Wert; eine getrennte Ost-/West-Grenze gibt es dort nicht mehr. Für die knappschaftliche Rentenversicherung gelten eigene Werte, die für die meisten Beschäftigungen nicht relevant sind.',
          'Bei Einmalzahlungen kann die im Kalenderjahr bereits ausgeschöpfte Beitragsbemessungsgrenze für die Berechnung eine Rolle spielen. Die Behandlung ist deshalb nicht allein aus dem Zahlungsbetrag abzuleiten.',
        ],
      },
      {
        heading: 'Beitragsbemessungsgrenze und Versicherungspflichtgrenze',
        paragraphs: [
          [
            'Die Beitragsbemessungsgrenze ist nicht dasselbe wie die ',
            { type: 'glossary', id: 'versicherungspflichtgrenze', text: 'Versicherungspflichtgrenze' },
            ', die im Krankenversicherungsrecht meist Jahresarbeitsentgeltgrenze genannt wird. Die Beitragsbemessungsgrenze begrenzt die Höhe der Beiträge. Die Versicherungspflichtgrenze kann dagegen für Arbeitnehmer bei der Frage wichtig sein, ob in der gesetzlichen Krankenversicherung Versicherungspflicht besteht.',
          ],
          'Für 2026 beträgt die allgemeine Jahresarbeitsentgeltgrenze 77.400 Euro im Jahr beziehungsweise 6.450 Euro im Monat. Das Überschreiten dieser Grenze führt nicht ohne weitere Prüfung automatisch zu einem bestimmten Versicherungsstatus; gesetzliche Voraussetzungen und der konkrete Verlauf des Arbeitsentgelts bleiben maßgeblich.',
        ],
      },
      {
        heading: 'Einmalzahlungen und besondere Beschäftigungsformen',
        paragraphs: [
          'Einmalzahlungen wie Boni, Urlaubs- oder Weihnachtsgeld können für die Sozialversicherung besondere Berechnungsregeln auslösen. Unter anderem können Abrechnungszeitpunkt, Anspruch und bereits berücksichtigtes Entgelt im Kalenderjahr relevant sein.',
          'Bei Minijobs, Midijobs, Werkstudententätigkeiten oder kurzfristigen Beschäftigungen gelten teils besondere Regeln zu Versicherungspflicht und Beiträgen. Daraus folgt nicht, dass diese Beschäftigungen pauschal in allen Versicherungszweigen gleich behandelt werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Sozialversicherungsbeiträge sind nicht Teil der Lohnsteuer. Außerdem ist Bruttoentgelt nicht automatisch in voller Höhe beitragspflichtig, und der Arbeitnehmeranteil ist nicht gleich den gesamten Arbeitgeberkosten.',
          'Verwechsle die Beitragsbemessungsgrenze nicht mit der Jahresarbeitsentgeltgrenze. Die erste begrenzt die Beitragsberechnung, die zweite ist eine Regelung zur Krankenversicherungspflicht. Individuelle Merkmale und Beschäftigungsformen können die Abrechnung zusätzlich verändern.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Sozialversicherungsbeiträge sind von Lohnsteuer zu unterscheiden',
    'In der Lohnabrechnung sind vor allem Kranken-, Pflege-, Renten- und Arbeitslosenversicherung relevant',
    'Versicherungspflicht und Beitragslast hängen von Beschäftigung und Versicherungszweig ab',
    'Arbeitgeber- und Arbeitnehmeranteile sind getrennte Bestandteile der Abrechnung und Kostenrechnung',
    'Die Beitragsbemessungsgrenze begrenzt das für Beiträge berücksichtigte Entgelt',
    '2026 gelten unterschiedliche Beitragsbemessungsgrenzen für Kranken/Pflege sowie Renten/Arbeitslosenversicherung',
    'Die Versicherungspflichtgrenze ist von der Beitragsbemessungsgrenze zu unterscheiden',
  ],
  commonMistakes: [
    'Lohnsteuer und Sozialversicherungsbeiträge gleichsetzen',
    'annehmen, jeder Arbeitnehmer sei in allen Versicherungszweigen gleich versicherungspflichtig',
    'Arbeitnehmeranteile mit den gesamten Arbeitgeberkosten verwechseln',
    'Bruttoentgelt ohne Prüfung vollständig als beitragspflichtig behandeln',
    'Beitragsbemessungsgrenze und Versicherungspflichtgrenze verwechseln',
    'Einmalzahlungen oder besondere Beschäftigungsformen ohne gesonderte Prüfung abrechnen',
  ],
  faqs: [
    {
      question: 'Was sind Sozialversicherungsbeiträge?',
      answer: 'Sie finanzieren die gesetzliche Kranken-, Pflege-, Renten- und Arbeitslosenversicherung. Ob und in welcher Höhe sie anfallen, hängt von Beschäftigung, Entgelt und den jeweiligen Regeln ab.',
    },
    {
      question: 'Wer zahlt Sozialversicherungsbeiträge?',
      answer: 'In vielen Standardfällen tragen Arbeitgeber und Arbeitnehmer die Beiträge anteilig. Die genaue Verteilung kann nach Versicherungszweig und persönlicher Situation abweichen.',
    },
    {
      question: 'Was ist die Beitragsbemessungsgrenze?',
      answer: 'Sie begrenzt das Einkommen, das in einem Versicherungszweig für die Beitragsberechnung berücksichtigt wird. Einkommen darüber erhöht den Beitrag dort grundsätzlich nicht weiter.',
    },
    {
      question: 'Wie hoch ist die Beitragsbemessungsgrenze 2026?',
      answer: 'In Kranken- und Pflegeversicherung liegt sie 2026 bei 69.750 Euro jährlich beziehungsweise 5.812,50 Euro monatlich. In allgemeiner Renten- und Arbeitslosenversicherung liegt sie bei 101.400 Euro jährlich beziehungsweise 8.450 Euro monatlich.',
    },
    {
      question: 'Was ist der Unterschied zur Versicherungspflichtgrenze?',
      answer: 'Die Beitragsbemessungsgrenze begrenzt die Beitragshöhe. Die Versicherungspflichtgrenze ist im Krankenversicherungsrecht für die Beurteilung der Versicherungspflicht von Arbeitnehmern relevant.',
    },
    {
      question: 'Was ist ein Zusatzbeitrag?',
      answer: 'Der Zusatzbeitrag ist ein von der Krankenkasse festgelegter Bestandteil des Krankenversicherungsbeitrags. Seine Höhe kann je nach Krankenkasse und Zeitraum unterschiedlich sein.',
    },
    {
      question: 'Gilt die Beitragsbemessungsgrenze für alle Sozialversicherungen gleich?',
      answer: 'Nein. Kranken- und Pflegeversicherung haben eine andere Grenze als allgemeine Renten- und Arbeitslosenversicherung. Für einzelne Sonderzweige können weitere Werte gelten.',
    },
  ],
  related: [
    'personal-lohn',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§ 14 SGB IV – Arbeitsentgelt', url: 'https://www.gesetze-im-internet.de/sgb_4/__14.html' },
    { label: '§ 28g SGB IV – Abzug des Beitragsanteils des Beschäftigten', url: 'https://www.gesetze-im-internet.de/sgb_4/__28g.html' },
    { label: '§ 223 SGB V – Beitragspflicht und Beitragsbemessungsgrenze', url: 'https://www.gesetze-im-internet.de/sgb_5/__223.html' },
    { label: '§ 242 SGB V – Zusatzbeitrag', url: 'https://www.gesetze-im-internet.de/sgb_5/__242.html' },
    { label: '§ 6 SGB V – Versicherungspflichtgrenze in der Krankenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_5/__6.html' },
    { label: '§ 55 SGB XI – Pflegeversicherung und Beitragsbemessungsgrenze', url: 'https://www.gesetze-im-internet.de/sgb_11/__55.html' },
    { label: '§ 58 SGB XI – Tragung der Beiträge zur Pflegeversicherung', url: 'https://www.gesetze-im-internet.de/sgb_11/__58.html' },
    { label: '§ 159 SGB VI – Beitragsbemessungsgrenze in der Rentenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_6/__159.html' },
    { label: '§ 168 SGB VI – Tragung der Beiträge zur Rentenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_6/__168.html' },
    { label: '§ 341 SGB III – Beitragsbemessungsgrenze in der Arbeitslosenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_3/__341.html' },
    { label: '§ 346 SGB III – Tragung der Beiträge zur Arbeitslosenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_3/__346.html' },
    { label: '§ 150 SGB VII – Finanzierung der Unfallversicherung durch Unternehmer', url: 'https://www.gesetze-im-internet.de/sgb_7/__150.html' },
    { label: '§ 2 SVBezGrV 2026 – Jahresarbeitsentgeltgrenzen', url: 'https://www.gesetze-im-internet.de/svbezgrv_2026/__2.html' },
    { label: '§ 4 SVBezGrV 2026 – Beitragsbemessungsgrenzen in der Rentenversicherung', url: 'https://www.gesetze-im-internet.de/svbezgrv_2026/__4.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default sozialversicherungsbeitraege;
