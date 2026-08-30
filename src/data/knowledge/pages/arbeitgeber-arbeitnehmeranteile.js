import { defaultDisclaimer } from '../shared.js';

const arbeitgeberArbeitnehmeranteile = {
  slug: 'arbeitgeber-arbeitnehmeranteile',
  category: 'Personal & Lohn',
  title: 'Arbeitgeber- und Arbeitnehmeranteile',
  description: 'Arbeitgeber- und Arbeitnehmeranteile einfach erklärt: Wie Sozialversicherungsbeiträge grundsätzlich verteilt werden und warum Arbeitgeberkosten über dem Bruttogehalt liegen.',
  seo: {
    title: 'Arbeitgeber- und Arbeitnehmeranteile erklärt | Belege24',
    description: 'Erfahre, wie Beiträge zur Sozialversicherung grundsätzlich zwischen Arbeitgeber und Arbeitnehmer verteilt werden und welche Ausnahmen es gibt.',
    canonicalPath: '/wissen/arbeitgeber-arbeitnehmeranteile',
  },
  article: {
    intro: 'Bei einer sozialversicherungspflichtigen Beschäftigung tragen Arbeitgeber und Arbeitnehmer Beiträge zur gesetzlichen Sozialversicherung häufig gemeinsam. Der Arbeitnehmeranteil wird in der Lohnabrechnung vom Arbeitsentgelt abgezogen. Der Arbeitgeberanteil kommt zusätzlich zum Bruttolohn als Arbeitgeberaufwand hinzu.',
    sections: [
      {
        heading: 'Was sind Arbeitgeber- und Arbeitnehmeranteile?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'arbeitnehmeranteil', text: 'Arbeitnehmeranteil' },
            ' ist der Teil eines Sozialversicherungsbeitrags, den ein Beschäftigter trägt. Der Arbeitgeber zieht ihn im Regelfall vom Arbeitsentgelt ab und führt ihn mit seinem eigenen Anteil an die zuständige Einzugsstelle ab.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'arbeitgeberanteil', text: 'Arbeitgeberanteil' },
            ' ist der Teil, den der Arbeitgeber zusätzlich trägt. Er ist nicht Bestandteil des Arbeitnehmer-Bruttoentgelts und wird nicht vom Nettoentgelt abgezogen.',
          ],
        ],
      },
      {
        heading: 'Welche Versicherungszweige werden grundsätzlich gemeinsam finanziert?',
        paragraphs: [
          'Bei versicherungspflichtigen Beschäftigungen sind vor allem gesetzliche Krankenversicherung, soziale Pflegeversicherung, gesetzliche Rentenversicherung und Arbeitslosenversicherung relevant. Für jeden Zweig gelten eigene Regeln zur Versicherungspflicht, Beitragsberechnung und Beitragstragung.',
          'In vielen Standardfällen werden die Beiträge aus Arbeitsentgelt zwischen Arbeitgeber und Arbeitnehmer grundsätzlich hälftig verteilt. Das ist jedoch keine Regel, die ohne Ausnahme für jede Beschäftigung und jeden Versicherungszweig gilt.',
        ],
      },
      {
        heading: 'Krankenversicherung und Zusatzbeitrag',
        paragraphs: [
          'In einer versicherungspflichtigen Beschäftigung tragen Arbeitgeber und Arbeitnehmer die aus dem Arbeitsentgelt bemessenen Beiträge zur gesetzlichen Krankenversicherung grundsätzlich jeweils zur Hälfte. Das gilt im Grundsatz auch für den kassenindividuellen Zusatzbeitrag.',
          [
            'Der ',
            { type: 'glossary', id: 'zusatzbeitrag', text: 'Zusatzbeitrag' },
            ' wird von der jeweiligen gesetzlichen Krankenkasse festgelegt und kann sich ändern. Für die konkrete Abrechnung ist deshalb der Satz der zuständigen Krankenkasse im jeweiligen Zeitraum maßgeblich.',
          ],
        ],
      },
      {
        heading: 'Pflegeversicherung: hälftig ist nicht immer gleich',
        paragraphs: [
          'Auch bei der sozialen Pflegeversicherung gilt für viele versicherungspflichtige Beschäftigte grundsätzlich eine hälftige Tragung. Es bestehen aber wichtige Abweichungen: Den Beitragszuschlag für Kinderlose tragen Beschäftigte selbst, und die Beitragslast kann durch Elterneigenschaft oder berücksichtigungsfähige Kinder beeinflusst werden.',
          'Für Beschäftigungsorte in Sachsen gelten zudem besondere Regeln zur Verteilung. Deshalb sollte die Pflegeversicherung nicht pauschal als exakt 50/50 geteilt dargestellt werden.',
        ],
      },
      {
        heading: 'Renten- und Arbeitslosenversicherung',
        paragraphs: [
          'In der allgemeinen Rentenversicherung tragen Arbeitgeber und Beschäftigte die Beiträge bei einer Beschäftigung gegen Arbeitsentgelt grundsätzlich je zur Hälfte. Für die Arbeitslosenversicherung gilt in der Regel ebenfalls eine hälftige Tragung.',
          'Abweichungen können zum Beispiel bei Midijobs, geringfügigen Beschäftigungen, Kurzarbeit oder besonderen Versicherungsstatus entstehen. Die Art der Beschäftigung muss deshalb vor der Abrechnung zutreffend beurteilt werden.',
        ],
      },
      {
        heading: 'Was bedeutet die Beitragsbemessungsgrenze für die Anteile?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'beitragsbemessungsgrenze', text: 'Beitragsbemessungsgrenze' },
            ' begrenzt, bis zu welchem Einkommen Beiträge in einem Versicherungszweig berechnet werden. Sie gilt bei der Berechnung sowohl für Arbeitgeber- als auch für Arbeitnehmeranteile.',
          ],
          'Oberhalb der maßgeblichen Grenze erhöht ein höheres Arbeitsentgelt den Beitrag in diesem Versicherungszweig grundsätzlich nicht weiter. Die Grenzen unterscheiden sich je nach Versicherungszweig und werden regelmäßig angepasst.',
        ],
      },
      {
        heading: 'Warum sind Arbeitgeberkosten höher als das Bruttogehalt?',
        paragraphs: [
          'Das Bruttogehalt beschreibt die Vergütung des Beschäftigten vor dessen persönlichen Abzügen. Zusätzlich können für den Arbeitgeber eigene Sozialversicherungsbeiträge und weitere gesetzliche Arbeitgeberaufwendungen anfallen. Deshalb ist das Arbeitnehmer-Brutto nicht gleich den gesamten Personalkosten.',
          [
            'Zu den weiteren Aufwendungen können je nach Arbeitgeber und Beschäftigung ',
            { type: 'glossary', id: 'umlage', text: 'Umlagen' },
            ' und Beiträge zur gesetzlichen Unfallversicherung gehören. Diese Positionen werden grundsätzlich vom Arbeitgeber getragen und sind keine Arbeitnehmerabzüge.',
          ],
        ],
      },
      {
        heading: 'Besondere Beschäftigungsformen nur einzeln beurteilen',
        paragraphs: [
          'Bei Minijobs, Midijobs, Werkstudententätigkeiten oder kurzfristigen Beschäftigungen können die Versicherungspflicht und die Verteilung der Beiträge abweichen. Aus der Bezeichnung der Beschäftigungsform allein lässt sich die konkrete Beitragslast nicht vollständig ableiten.',
          'Auch Einmalzahlungen oder Änderungen während des Jahres können die Abrechnung beeinflussen. Für eine korrekte Lohnabrechnung müssen Beschäftigungsdaten, Entgeltbestandteile und der jeweilige Abrechnungszeitraum zusammen betrachtet werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Arbeitgeberanteile sind nicht Teil des Arbeitnehmer-Nettoentgelts. Umgekehrt ist der Arbeitnehmeranteil nicht mit den gesamten Arbeitgeberkosten gleichzusetzen. Lohnsteuer und Sozialversicherungsbeiträge sind außerdem unterschiedliche Abgaben.',
          'Eine hälftige Teilung ist ein wichtiger Grundsatz, aber keine pauschale Antwort für Pflegeversicherung, besondere Beschäftigungsformen oder Sonderkonstellationen. Aktuelle Sätze und individuelle Voraussetzungen müssen bei einer konkreten Abrechnung geprüft werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Arbeitnehmeranteile werden in der Regel vom Arbeitsentgelt einbehalten',
    'Arbeitgeberanteile kommen zusätzlich zum Arbeitnehmer-Brutto hinzu',
    'Kranken-, Renten- und Arbeitslosenversicherung werden in Standardfällen grundsätzlich hälftig getragen',
    'Bei der Pflegeversicherung und besonderen Beschäftigungsformen können Abweichungen gelten',
    'Der Zusatzbeitrag ist Teil der gesetzlichen Krankenversicherung und hängt von der Krankenkasse ab',
    'Die Beitragsbemessungsgrenze begrenzt die Berechnung beider Anteile',
    'Umlagen und gesetzliche Unfallversicherung können zusätzliche Arbeitgeberaufwendungen sein',
  ],
  commonMistakes: [
    'alle Sozialversicherungsbeiträge pauschal als exakt 50/50 geteilt behandeln',
    'Arbeitgeberanteile mit dem Arbeitnehmer-Brutto oder dem Nettoentgelt verwechseln',
    'Lohnsteuer und Sozialversicherungsbeiträge gleichsetzen',
    'den Zusatzbeitrag der Krankenkasse nicht berücksichtigen',
    'Pflegeversicherungsmerkmale oder Beschäftigungsort übersehen',
    'bei Minijob, Midijob oder Werkstudententätigkeit die Standardverteilung übernehmen',
  ],
  faqs: [
    {
      question: 'Was ist ein Arbeitgeberanteil?',
      answer: 'Das ist der Teil eines Sozialversicherungsbeitrags, den der Arbeitgeber zusätzlich zum Arbeitnehmer-Brutto trägt.',
    },
    {
      question: 'Was ist ein Arbeitnehmeranteil?',
      answer: 'Das ist der Teil eines Sozialversicherungsbeitrags, den der Beschäftigte trägt. Er wird in der Regel vom Arbeitsentgelt einbehalten.',
    },
    {
      question: 'Werden Sozialversicherungsbeiträge immer hälftig geteilt?',
      answer: 'Nein. Die hälftige Tragung ist in vielen Standardfällen der Grundsatz, aber etwa bei Pflegeversicherung oder besonderen Beschäftigungsformen können Abweichungen gelten.',
    },
    {
      question: 'Teilen Arbeitgeber und Arbeitnehmer den Zusatzbeitrag?',
      answer: 'Bei versicherungspflichtiger Beschäftigung wird der aus Arbeitsentgelt bemessene Krankenversicherungsbeitrag grundsätzlich hälftig getragen. Das schließt den kassenindividuellen Zusatzbeitrag im Grundsatz ein.',
    },
    {
      question: 'Warum kostet ein Arbeitnehmer mehr als sein Bruttogehalt?',
      answer: 'Zusätzlich zum Bruttogehalt können Arbeitgeberanteile zur Sozialversicherung, Umlagen und weitere Arbeitgeberaufwendungen entstehen.',
    },
    {
      question: 'Trägt der Arbeitgeber die Unfallversicherung?',
      answer: 'Die Beiträge zur gesetzlichen Unfallversicherung sind grundsätzlich vom Unternehmer zu tragen und werden normalerweise nicht als Arbeitnehmeranteil vom Lohn abgezogen.',
    },
  ],
  related: [
    'personal-lohn',
    'sozialversicherungsbeitraege',
    'bruttolohn-nettolohn',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§ 28g SGB IV – Abzug des Beitragsanteils des Beschäftigten', url: 'https://www.gesetze-im-internet.de/sgb_4/__28g.html' },
    { label: '§ 249 SGB V – Tragung der Beiträge zur Krankenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_5/__249.html' },
    { label: '§ 242 SGB V – Zusatzbeitrag', url: 'https://www.gesetze-im-internet.de/sgb_5/__242.html' },
    { label: '§ 55 SGB XI – Pflegeversicherung', url: 'https://www.gesetze-im-internet.de/sgb_11/__55.html' },
    { label: '§ 58 SGB XI – Tragung der Beiträge zur Pflegeversicherung', url: 'https://www.gesetze-im-internet.de/sgb_11/__58.html' },
    { label: '§ 168 SGB VI – Beitragstragung in der Rentenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_6/__168.html' },
    { label: '§ 346 SGB III – Beitragstragung in der Arbeitslosenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_3/__346.html' },
    { label: '§ 150 SGB VII – Beitragspflicht in der Unfallversicherung', url: 'https://www.gesetze-im-internet.de/sgb_7/__150.html' },
    { label: '§ 1 AAG – Erstattungsanspruch im Umlageverfahren', url: 'https://www.gesetze-im-internet.de/aufag/__1.html' },
    { label: '§ 358 SGB III – Insolvenzgeldumlage', url: 'https://www.gesetze-im-internet.de/sgb_3/__358.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default arbeitgeberArbeitnehmeranteile;
