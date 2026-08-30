import { defaultDisclaimer } from '../shared.js';

const einmalzahlungen = {
  slug: 'einmalzahlungen',
  category: 'Personal & Lohn',
  title: 'Einmalzahlungen',
  description: 'Einmalzahlungen einfach erklärt: Bonus, Weihnachtsgeld, Urlaubsgeld und Prämien sowie ihre Behandlung bei Lohnsteuer und Sozialversicherung.',
  seo: {
    title: 'Einmalzahlungen: Steuer und Sozialversicherung | Belege24',
    description: 'Erfahre, was Einmalzahlungen und sonstige Bezüge sind, wie sie sich von laufendem Arbeitsentgelt unterscheiden und warum der Auszahlungszeitpunkt wichtig ist.',
    canonicalPath: '/wissen/einmalzahlungen',
  },
  article: {
    intro: 'Einmalzahlungen sind zusätzliche Vergütungen, die nicht regelmäßig in jedem Abrechnungszeitraum anfallen. Dazu gehören häufig Bonus, Weihnachtsgeld, Urlaubsgeld oder eine Prämie. Ob ein Anspruch besteht und wie die Zahlung abgerechnet wird, richtet sich jeweils nach unterschiedlichen arbeits-, steuer- und sozialversicherungsrechtlichen Regeln.',
    sections: [
      {
        heading: 'Was sind Einmalzahlungen und sonstige Bezüge?',
        paragraphs: [
          [
            'Einmalzahlungen sind Zahlungen, die zusätzlich zur laufenden Vergütung und nicht für die Arbeit in einem einzelnen Entgeltabrechnungszeitraum geleistet werden. In der Sozialversicherung spricht das Gesetz von einmalig gezahltem Arbeitsentgelt. Im Lohnsteuerrecht werden viele dieser Zahlungen als sonstige Bezüge behandelt.',
          ],
          'Die Begriffe sind nicht vollständig austauschbar. Ob eine Zahlung als laufender Arbeitslohn, sonstiger Bezug oder einmalig gezahltes Arbeitsentgelt einzuordnen ist, hängt von ihrer tatsächlichen Ausgestaltung, ihrem Zweck und dem Abrechnungszeitraum ab.',
        ],
      },
      {
        heading: 'Typische Beispiele',
        paragraphs: [
          [
            'Typische ',
            { type: 'glossary', id: 'sonderzahlung', text: 'Sonderzahlungen' },
            ' sind Weihnachtsgeld, Urlaubsgeld, eine einmalige Prämie, ein Jahresbonus, eine Gratifikation oder eine Tantieme. Auch eine Nachzahlung kann je nach Zeitraum und Anlass anders als der laufende Monatslohn behandelt werden.',
          ],
          'Die Bezeichnung auf der Abrechnung reicht nicht aus. Ein „Bonus“ kann zum Beispiel an Ziele, Unternehmenserfolg, Anwesenheit oder einen einzelnen Leistungszeitraum anknüpfen. Für die Abrechnung ist der konkrete Anspruch und nicht nur der Name entscheidend.',
        ],
      },
      {
        heading: 'Unterschied zu laufendem Arbeitsentgelt',
        paragraphs: [
          'Laufendes Arbeitsentgelt wird regelmäßig für den jeweiligen Lohnzahlungszeitraum gezahlt, etwa Monatsgehalt, Wochenlohn oder laufende Zuschläge. Eine Einmalzahlung bezieht sich dagegen typischerweise nicht nur auf einen einzelnen Abrechnungsmonat.',
          'Eine Zahlung wird nicht allein dadurch zur Einmalzahlung, dass sie nur einmal überwiesen wird. Eine Vergütung für konkret geleistete Mehrarbeit oder eine Nachzahlung für einen laufenden Zeitraum kann nach den Regeln des Lohnsteuer- oder Sozialversicherungsrechts anders einzuordnen sein.',
        ],
      },
      {
        heading: 'Besteht automatisch ein Anspruch auf Weihnachts- oder Urlaubsgeld?',
        paragraphs: [
          'Nein. Ein automatischer gesetzlicher Anspruch auf Weihnachts- oder Urlaubsgeld besteht nicht. Ein Anspruch kann sich aber aus Arbeitsvertrag, Tarifvertrag, Betriebsvereinbarung oder einer sonst verbindlichen Regelung ergeben.',
          'Ob eine als freiwillig bezeichnete Zahlung tatsächlich ohne Anspruch geleistet wird, lässt sich nicht allein am Wort „freiwillig“ erkennen. Für die Beurteilung sind die konkrete Vereinbarung, bisherige Zahlungen und die Kommunikation im Einzelfall maßgeblich.',
        ],
      },
      {
        heading: 'Lohnsteuer: sonstige Bezüge grundsätzlich',
        paragraphs: [
          'Für sonstige Bezüge sieht § 39b EStG eine eigene Berechnung des Lohnsteuerabzugs vor. Vereinfacht wird die Jahreslohnsteuer mit und ohne den sonstigen Bezug ermittelt; der Unterschied bildet die einzubehaltende Lohnsteuer auf die Zahlung.',
          'Deshalb kann der Steuerabzug bei einem Bonus oder Weihnachtsgeld anders wirken als bei einer gleich hohen Erhöhung des laufenden Monatslohns. Das bedeutet nicht, dass die Zahlung einer pauschalen Sondersteuer unterliegt. Sie wird im Lohnsteuerabzug anhand der gesetzlichen Jahresberechnung berücksichtigt.',
        ],
      },
      {
        heading: 'Sozialversicherung: einmalig gezahltes Arbeitsentgelt',
        paragraphs: [
          'Für die Sozialversicherung ist entscheidend, ob die Zahlung Arbeitsentgelt ist und nicht für die Arbeit in einem einzelnen Entgeltabrechnungszeitraum gezahlt wird. Dann kann sie als einmalig gezahltes Arbeitsentgelt nach § 23a SGB IV behandelt werden.',
          'Grundsätzlich wird eine Einmalzahlung dem Entgeltabrechnungszeitraum zugeordnet, in dem sie ausgezahlt wird. Ob und in welcher Höhe Beiträge entstehen, hängt zusätzlich von Beschäftigung, Versicherungszweig und den bereits im Kalenderjahr berücksichtigten Entgelten ab.',
        ],
      },
      {
        heading: 'Beitragsbemessungsgrenze und Zuordnung',
        paragraphs: [
          [
            'Bei Einmalzahlungen wird nicht nur die monatliche, sondern die anteilige ',
            { type: 'glossary', id: 'beitragsbemessungsgrenze', text: 'Beitragsbemessungsgrenze' },
            ' betrachtet. Die Zahlung ist grundsätzlich nur beitragspflichtig, soweit das bis zum Zuordnungsmonat berücksichtigte beitragspflichtige Entgelt die maßgebliche anteilige Grenze noch nicht erreicht.',
          ],
          'Das ist keine Kürzung der Auszahlung. Die Grenze begrenzt nur, in welcher Höhe Beiträge in einem Versicherungszweig berechnet werden. Weil die Berechnung die bisherige Beschäftigungsdauer und das bisherige Entgelt einbezieht, lässt sie sich nicht zuverlässig allein aus dem Betrag der Sonderzahlung ableiten.',
        ],
      },
      {
        heading: 'Eintritt, Austritt und Zahlungen zu Jahresbeginn',
        paragraphs: [
          'Bei Eintritt oder Austritt können der Anspruch, der Zahlungszeitpunkt und die beitragsrechtliche Zuordnung auseinanderfallen. Wird eine Einmalzahlung nach Ende oder bei Ruhen des Beschäftigungsverhältnisses gezahlt, enthält § 23a SGB IV dafür eine besondere Zuordnungsregel.',
          'Für Zahlungen zwischen Januar und März kann außerdem die sogenannte Märzklausel relevant sein. Sie kann unter gesetzlichen Voraussetzungen eine Zuordnung zum letzten Abrechnungszeitraum des Vorjahres auslösen. Diese Fälle sollten anhand der konkreten Beschäftigungs- und Abrechnungsdaten geprüft werden.',
        ],
      },
      {
        heading: 'Einmalzahlungen richtig abrechnen',
        paragraphs: [
          'Halte Anlass, Anspruchsgrundlage, Berechnungsformel, Zahlungszeitpunkt und betroffene Beschäftigungszeit nachvollziehbar fest. Prüfe anschließend Lohnsteuer und Sozialversicherung getrennt. Auch eine steuerlich behandelte Zahlung ist nicht automatisch in gleicher Weise beitragspflichtig oder beitragsfrei.',
          [
            'Die einzelnen Bestandteile sollten in der ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            ' klar ausgewiesen werden. Wie sie Brutto und Netto beeinflussen, erklärt ',
            { type: 'link', href: '/wissen/bruttolohn-nettolohn', text: 'Bruttolohn und Nettolohn' },
            '; die Grundlagen der Beiträge findest du bei ',
            { type: 'link', href: '/wissen/sozialversicherungsbeitraege', text: 'Sozialversicherungsbeiträge' },
            '.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Einmalzahlungen fallen zusätzlich zur laufenden Vergütung an und sind nicht allein wegen ihrer Bezeichnung einzuordnen',
    'Bonus, Weihnachtsgeld, Urlaubsgeld und Prämien können typische Einmalzahlungen sein',
    'Ein automatischer gesetzlicher Anspruch auf Weihnachts- oder Urlaubsgeld besteht nicht',
    'Für sonstige Bezüge gilt beim Lohnsteuerabzug eine eigene Jahresberechnung',
    'In der Sozialversicherung zählt bei Einmalzahlungen insbesondere die Zuordnung nach § 23a SGB IV',
    'Die anteilige Beitragsbemessungsgrenze kann die Beitragshöhe begrenzen',
    'Eintritt, Austritt und Zahlungen zu Jahresbeginn können Sonderregeln auslösen',
  ],
  commonMistakes: [
    'jede einmalige Zahlung ohne Prüfung als sonstigen Bezug oder Einmalzahlung behandeln',
    'aus einer freiwilligen Zahlung automatisch auf einen fehlenden oder bestehenden Anspruch schließen',
    'Lohnsteuer und Sozialversicherung mit derselben Berechnungslogik abrechnen',
    'die Beitragsbemessungsgrenze nur monatlich statt mit Blick auf die anteilige Jahresgrenze prüfen',
    'Zahlungen nach Eintritt, Austritt oder im ersten Quartal ohne besondere Prüfung zuordnen',
    'Bonus, Prämie und laufende Mehrarbeitsvergütung allein wegen der Bezeichnung gleich behandeln',
    'Anlass, Anspruchsgrundlage und Zahlungszeitpunkt nicht dokumentieren',
  ],
  faqs: [
    {
      question: 'Was zählt zu Einmalzahlungen?',
      answer: 'Zum Beispiel Weihnachtsgeld, Urlaubsgeld, Jahresbonus, Prämie oder Gratifikation. Entscheidend ist jedoch die konkrete Ausgestaltung der Zahlung.',
    },
    {
      question: 'Ist Weihnachtsgeld immer ein sonstiger Bezug?',
      answer: 'Weihnachtszuwendungen, die nicht fortlaufend gezahlt werden, zählen im Lohnsteuerrecht regelmäßig zu den sonstigen Bezügen. Die konkrete Abrechnung richtet sich dennoch nach Anlass und Ausgestaltung.',
    },
    {
      question: 'Gibt es einen gesetzlichen Anspruch auf Urlaubsgeld?',
      answer: 'Nein. Ein Anspruch kann sich aber aus Arbeitsvertrag, Tarifvertrag, Betriebsvereinbarung oder einer sonst verbindlichen Regelung ergeben.',
    },
    {
      question: 'Warum ist die Lohnsteuer bei einer Einmalzahlung anders?',
      answer: 'Sonstige Bezüge werden beim Lohnsteuerabzug über eine Jahresberechnung berücksichtigt. Deshalb kann der Abzug anders aussehen als bei laufendem Monatslohn.',
    },
    {
      question: 'Sind Einmalzahlungen sozialversicherungspflichtig?',
      answer: 'Das kann der Fall sein. Bei einmalig gezahltem Arbeitsentgelt wird unter anderem geprüft, in welcher Höhe die anteilige Beitragsbemessungsgrenze noch nicht ausgeschöpft ist.',
    },
    {
      question: 'Was ist die Märzklausel?',
      answer: 'Für bestimmte Einmalzahlungen zwischen Januar und März kann § 23a SGB IV eine Zuordnung zum letzten Abrechnungszeitraum des Vorjahres vorsehen. Ob das gilt, hängt von den gesetzlichen Voraussetzungen und den konkreten Abrechnungsdaten ab.',
    },
  ],
  related: [
    'personal-lohn',
    'lohnabrechnung',
    'bruttolohn-nettolohn',
    'sozialversicherungsbeitraege',
    'verguetungsarten',
  ],
  sources: [
    { label: '§ 39b EStG – Einbehaltung der Lohnsteuer bei sonstigen Bezügen', url: 'https://www.gesetze-im-internet.de/estg/__39b.html' },
    { label: 'BMF – Lohnsteuer-Hinweise 2026 zu laufendem Arbeitslohn und sonstigen Bezügen', url: 'https://esth.bundesfinanzministerium.de/lsth/2026/A-Einkommensteuergesetz/VI-Steuererhebung-36-47/2-Steuerabzug-vom-Arbeitslohn-Lohnsteuer-38-42g/Paragraf-39b/paragraf-39b.html' },
    { label: '§ 23a SGB IV – Einmalig gezahltes Arbeitsentgelt', url: 'https://www.gesetze-im-internet.de/sgb_4/__23a.html' },
    { label: '§ 611a BGB – Arbeitsvertrag und Vergütung', url: 'https://www.gesetze-im-internet.de/bgb/__611a.html' },
    { label: 'Deutsche Rentenversicherung – Einmalzahlung', url: 'https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Arbeitgeber-und-Steuerberater/summa-summarum/Lexikon/E/einmalzahlung?nn=6a097da6ca84ce5471c1751a' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default einmalzahlungen;
