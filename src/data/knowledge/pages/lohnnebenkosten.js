import { defaultDisclaimer } from '../shared.js';

const lohnnebenkosten = {
  slug: 'lohnnebenkosten',
  category: 'Personal & Lohn',
  title: 'Lohnnebenkosten',
  description: 'Lohnnebenkosten einfach erklärt: Arbeitgeberanteile zur Sozialversicherung, Umlagen, Unfallversicherung und Unterschied zu Bruttolohn und Arbeitnehmerabzügen.',
  seo: {
    title: 'Lohnnebenkosten: Arbeitgeberkosten erklärt | Belege24',
    description: 'Erfahre, was zu Lohnnebenkosten gehört, warum Arbeitgeberkosten über dem Bruttolohn liegen und welche Rolle Sozialversicherung, Umlagen und Unfallversicherung spielen.',
    canonicalPath: '/wissen/lohnnebenkosten',
  },
  article: {
    intro: 'Lohnnebenkosten sind Aufwendungen, die ein Arbeitgeber zusätzlich zur vereinbarten Bruttovergütung tragen kann. Dazu zählen vor allem eigene Sozialversicherungsbeiträge, Umlagen und die gesetzliche Unfallversicherung. Ihre Höhe ist nicht bei allen Beschäftigten oder Arbeitgebern gleich.',
    sections: [
      {
        heading: 'Was sind Lohnnebenkosten?',
        paragraphs: [
          'Der Begriff Lohnnebenkosten ist ein Sammelbegriff aus der Praxis. Gemeint sind vor allem gesetzliche oder vertragliche Kosten, die zusätzlich zum Arbeitsentgelt eines Beschäftigten entstehen. Sie sind von den persönlichen Abzügen des Beschäftigten zu unterscheiden.',
          'Welche Positionen dazugehören, hängt von Beschäftigungsform, Versicherungsstatus, Entgelt, Krankenkasse, Branche und Arbeitgeber ab. Deshalb gibt es keine allgemeingültige Arbeitgeberquote, die für jeden Betrieb und jeden Mitarbeiter passt.',
        ],
      },
      {
        heading: 'Bruttolohn und Arbeitgeber-Gesamtkosten unterscheiden',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'bruttoentgelt', text: 'Bruttoentgelt' },
            ' ist die vereinbarte Vergütung vor den persönlichen Abzügen des Beschäftigten. Der Arbeitgeber zahlt es an den Beschäftigten aus beziehungsweise führt daraus einbehaltene Abgaben ab.',
          ],
          'Die Arbeitgeber-Gesamtkosten gehen darüber hinaus. Sie können eigene Beiträge zur Sozialversicherung, Umlagen, Beiträge zur gesetzlichen Unfallversicherung und weitere personalbezogene Aufwendungen umfassen. Arbeitnehmeranteile zur Sozialversicherung oder Lohnsteuer sind dagegen keine zusätzlichen Kosten neben dem Bruttolohn, sondern werden aus dem Bruttoentgelt einbehalten.',
        ],
      },
      {
        heading: 'Arbeitgeberanteile zur Sozialversicherung',
        paragraphs: [
          'Bei einer versicherungspflichtigen Beschäftigung trägt der Arbeitgeber grundsätzlich einen eigenen Anteil zu Kranken-, Pflege-, Renten- und Arbeitslosenversicherung. Der Arbeitnehmeranteil wird dagegen aus dem Arbeitsentgelt einbehalten. Die genaue Verteilung ist je Versicherungszweig gesetzlich geregelt und kann von einer hälftigen Teilung abweichen.',
          'In der Krankenversicherung sind unter anderem der allgemeine Beitrag und der kassenindividuelle Zusatzbeitrag relevant. In der Pflegeversicherung können persönliche Merkmale und der Beschäftigungsort die Tragung beeinflussen. Die Beiträge zur Renten- und Arbeitslosenversicherung folgen ebenfalls eigenen Regeln. Aktuelle Sätze und Grenzen müssen stets für den jeweiligen Abrechnungszeitraum geprüft werden.',
          [
            'Die Grundlagen erläutern ',
            { type: 'link', href: '/wissen/sozialversicherungsbeitraege', text: 'Sozialversicherungsbeiträge' },
            ' und ',
            { type: 'link', href: '/wissen/arbeitgeber-arbeitnehmeranteile', text: 'Arbeitgeber- und Arbeitnehmeranteile' },
            '.',
          ],
        ],
      },
      {
        heading: 'Umlagen U1 und U2',
        paragraphs: [
          'Über die Umlage U1 können teilnehmende Arbeitgeber bei Aufwendungen für Entgeltfortzahlung im Krankheitsfall erstattet werden. Die U2 betrifft Aufwendungen bei Mutterschaft. Die Umlagesätze und Erstattungssätze werden von der zuständigen Krankenkasse festgelegt und können sich unterscheiden.',
          'Ob ein Arbeitgeber am U1-Verfahren teilnimmt, richtet sich nach den gesetzlichen Voraussetzungen. Das U2-Verfahren folgt eigenen Regeln. Umlagen sind Arbeitgeberaufwendungen; sie werden nicht als Arbeitnehmeranteil vom Nettoentgelt abgezogen.',
        ],
      },
      {
        heading: 'Insolvenzgeldumlage',
        paragraphs: [
          'Die Insolvenzgeldumlage finanziert das Insolvenzgeld. Sie wird grundsätzlich monatlich von Arbeitgebern erhoben und richtet sich nach einem Prozentsatz des maßgeblichen Arbeitsentgelts. Für bestimmte Arbeitgeber, etwa private Haushalte, gelten gesetzliche Ausnahmen.',
          'Der Umlagesatz kann sich ändern. Für die konkrete Lohnabrechnung ist deshalb der für das jeweilige Kalenderjahr geltende Satz maßgeblich.',
        ],
      },
      {
        heading: 'Gesetzliche Unfallversicherung und Berufsgenossenschaft',
        paragraphs: [
          'Die gesetzliche Unfallversicherung wird grundsätzlich vom Unternehmer finanziert. Ihre Beiträge werden typischerweise von der zuständigen Berufsgenossenschaft oder Unfallkasse festgesetzt und nicht vom Arbeitsentgelt des Beschäftigten abgezogen.',
          'Die Beitragshöhe hängt unter anderem vom Arbeitsentgelt, der Gefahrklasse, dem Finanzbedarf des Unfallversicherungsträgers und den Regeln der zuständigen Berufsgenossenschaft ab. Deshalb können sich Kosten je nach Branche und Tätigkeit deutlich unterscheiden.',
        ],
      },
      {
        heading: 'Weitere personalbezogene Kosten',
        paragraphs: [
          'Neben gesetzlichen Abgaben können je nach Betrieb weitere Kosten entstehen, etwa für Arbeitsmittel, Fortbildung, betriebliche Altersversorgung, freiwillige Zusatzleistungen oder Personalverwaltung. Diese Kosten werden im betrieblichen Sprachgebrauch teils ebenfalls zu den Lohnnebenkosten gezählt, folgen aber nicht immer denselben gesetzlichen Regeln.',
          'Halte gesetzliche Abgaben, vertraglich geschuldete Leistungen und freiwillige Kosten getrennt fest. Das erleichtert die Kostenplanung und verhindert, dass Arbeitnehmerabzüge fälschlich als zusätzliche Arbeitgeberbelastung gerechnet werden.',
        ],
      },
      {
        heading: 'Besondere Beschäftigungsformen',
        paragraphs: [
          'Bei Minijobs, kurzfristigen Beschäftigungen, Midijobs oder Werkstudententätigkeiten können Versicherungspflicht und Arbeitgeberaufwendungen von einer regulären Beschäftigung abweichen. Die Bezeichnung der Beschäftigung reicht für die Beurteilung nicht aus; entscheidend sind die gesetzlichen Voraussetzungen und die konkreten Daten.',
          [
            'Für geringfügig entlohnte Beschäftigungen findest du die Grundregeln bei ',
            { type: 'link', href: '/wissen/minijob', text: 'Minijob' },
            '. Zur Abrechnung und zum Verhältnis von Brutto- und Nettoentgelt passen ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            ' sowie ',
            { type: 'link', href: '/wissen/bruttolohn-nettolohn', text: 'Bruttolohn und Nettolohn' },
            '.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lohnnebenkosten sind Arbeitgeberaufwendungen zusätzlich zum Bruttoentgelt',
    'Arbeitnehmerabzüge und Lohnsteuer sind nicht automatisch zusätzliche Arbeitgeberkosten',
    'Eigene Arbeitgeberanteile können für Kranken-, Pflege-, Renten- und Arbeitslosenversicherung entstehen',
    'U1, U2 und Insolvenzgeldumlage sind eigenständige Umlagen mit unterschiedlichen Regeln',
    'Beiträge zur gesetzlichen Unfallversicherung trägt grundsätzlich der Unternehmer',
    'Krankenkasse, Beschäftigungsform, Branche und Versicherungsstatus beeinflussen die tatsächlichen Kosten',
    'Eine pauschale Arbeitgeberquote passt nicht für jeden Beschäftigungsfall',
  ],
  commonMistakes: [
    'Lohnnebenkosten mit den Arbeitnehmerabzügen auf der Abrechnung verwechseln',
    'Bruttolohn mit den gesamten Arbeitgeberkosten gleichsetzen',
    'für alle Beschäftigten dieselbe prozentuale Arbeitgeberbelastung annehmen',
    'U1, U2 und Insolvenzgeldumlage als einen einheitlichen Beitrag behandeln',
    'Beiträge zur Berufsgenossenschaft als Arbeitnehmerabzug verbuchen',
    'bei Minijob oder kurzfristiger Beschäftigung die Regeln einer regulären Beschäftigung übernehmen',
    'freiwillige Leistungen und gesetzliche Arbeitgeberaufwendungen nicht getrennt planen',
  ],
  faqs: [
    {
      question: 'Was gehört zu Lohnnebenkosten?',
      answer: 'Typisch sind Arbeitgeberanteile zur Sozialversicherung, Umlagen wie U1 und U2, die Insolvenzgeldumlage und Beiträge zur gesetzlichen Unfallversicherung. Je nach Betrieb können weitere personalbezogene Kosten hinzukommen.',
    },
    {
      question: 'Sind Lohnnebenkosten Arbeitnehmerabzüge?',
      answer: 'Nein. Arbeitnehmerabzüge werden aus dem Bruttoentgelt einbehalten. Lohnnebenkosten sind grundsätzlich zusätzliche Arbeitgeberaufwendungen.',
    },
    {
      question: 'Warum sind die Arbeitgeberkosten höher als der Bruttolohn?',
      answer: 'Zusätzlich zum Bruttolohn können eigene Sozialversicherungsbeiträge, Umlagen und Beiträge zur gesetzlichen Unfallversicherung anfallen.',
    },
    {
      question: 'Zahlt der Arbeitgeber die gesetzliche Unfallversicherung?',
      answer: 'Grundsätzlich ja. Beitragspflichtig sind die Unternehmer; die Höhe hängt unter anderem von Branche, Gefahrklasse und Arbeitsentgelten ab.',
    },
    {
      question: 'Sind Lohnnebenkosten bei jedem Mitarbeiter gleich?',
      answer: 'Nein. Sie können sich zum Beispiel durch Versicherungsstatus, Krankenkasse, Beschäftigungsform, Entgelt und Branche unterscheiden.',
    },
    {
      question: 'Gelten bei Minijobs dieselben Lohnnebenkosten?',
      answer: 'Nicht vollständig. Für geringfügige Beschäftigungen gelten besondere Regeln zu Pauschalbeiträgen, Umlagen und Steuern. Der Einzelfall muss anhand der Beschäftigungsdaten beurteilt werden.',
    },
  ],
  related: [
    'personal-lohn',
    'sozialversicherungsbeitraege',
    'arbeitgeber-arbeitnehmeranteile',
    'bruttolohn-nettolohn',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§ 249 SGB V – Tragung der Beiträge zur Krankenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_5/__249.html' },
    { label: '§ 58 SGB XI – Tragung der Beiträge zur Pflegeversicherung', url: 'https://www.gesetze-im-internet.de/sgb_11/__58.html' },
    { label: '§ 168 SGB VI – Beitragstragung in der Rentenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_6/__168.html' },
    { label: '§ 346 SGB III – Beitragstragung in der Arbeitslosenversicherung', url: 'https://www.gesetze-im-internet.de/sgb_3/__346.html' },
    { label: '§§ 1 und 7 AAG – Erstattung und Umlagen U1/U2', url: 'https://www.gesetze-im-internet.de/aufag/BJNR368610005.html' },
    { label: '§ 358 SGB III – Insolvenzgeldumlage', url: 'https://www.gesetze-im-internet.de/sgb_3/__358.html' },
    { label: '§§ 150 und 153 SGB VII – Unfallversicherung und Beitragsberechnung', url: 'https://www.gesetze-im-internet.de/sgb_7/BJNR125410996.html' },
    { label: 'Minijob-Zentrale – Abgaben und Steuern im Minijob', url: 'https://www.minijob-zentrale.de/DE/fuer-gewerbetreibende/abgaben-und-steuern/abgaben-und-steuern_node.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lohnnebenkosten;
