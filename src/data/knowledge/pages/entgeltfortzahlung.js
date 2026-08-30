import { defaultDisclaimer } from '../shared.js';

const entgeltfortzahlung = {
  slug: 'entgeltfortzahlung',
  category: 'Personal & Lohn',
  title: 'Entgeltfortzahlung',
  description: 'Entgeltfortzahlung einfach erklärt: Krankheit, Wartezeit, Dauer, gleiche Erkrankung, eAU, Feiertage, Krankengeld und Umlage U1.',
  seo: {
    title: 'Entgeltfortzahlung bei Krankheit einfach erklärt | Belege24',
    description: 'Erfahre, wann bei Krankheit Entgelt fortgezahlt wird, wie lange der Anspruch besteht und was bei eAU, Feiertagen, Krankengeld und Umlage U1 wichtig ist.',
    canonicalPath: '/wissen/entgeltfortzahlung',
  },
  article: {
    intro: 'Entgeltfortzahlung bedeutet, dass der Arbeitgeber das regelmäßige Arbeitsentgelt bei Arbeitsunfähigkeit infolge Krankheit für einen begrenzten Zeitraum weiterzahlt. Sie ist von Krankengeld zu unterscheiden und setzt die jeweiligen gesetzlichen Voraussetzungen voraus.',
    sections: [
      {
        heading: 'Was ist Entgeltfortzahlung?',
        paragraphs: [
          'Bei Entgeltfortzahlung im Krankheitsfall erhält ein Arbeitnehmer trotz krankheitsbedingter Arbeitsunfähigkeit weiterhin sein Arbeitsentgelt. Die Grundlage ist vor allem das Entgeltfortzahlungsgesetz.',
          [
            'Voraussetzung ist, dass der Beschäftigte durch ',
            { type: 'glossary', id: 'arbeitsunfaehigkeit', text: 'Arbeitsunfähigkeit' },
            ' infolge Krankheit an der Arbeit gehindert ist und ihn daran kein Verschulden trifft. Das Gesetz gilt grundsätzlich für Arbeitnehmer und zur Berufsbildung Beschäftigte; bei besonderen Beschäftigungsformen oder vertraglichen Konstellationen kann eine gesonderte Prüfung nötig sein.',
          ],
        ],
      },
      {
        heading: 'Wartezeit und Dauer des Anspruchs',
        paragraphs: [
          'Der gesetzliche Anspruch entsteht nach vierwöchiger ununterbrochener Dauer des Arbeitsverhältnisses. Die Wartezeit betrifft den Anspruch gegenüber dem Arbeitgeber; für die soziale Absicherung können je nach Krankenversicherung andere Regelungen relevant sein.',
          'Ist die Wartezeit erfüllt, besteht bei Arbeitsunfähigkeit infolge Krankheit grundsätzlich ein Anspruch auf Entgeltfortzahlung für bis zu sechs Wochen. Maßgeblich ist der Einzelfall, insbesondere die Krankheit, bisherige Arbeitsunfähigkeitszeiten und die gesetzlichen Voraussetzungen.',
        ],
      },
      {
        heading: 'Erneute Arbeitsunfähigkeit wegen derselben Krankheit',
        paragraphs: [
          'Eine erneute Arbeitsunfähigkeit wegen derselben Krankheit löst nicht automatisch einen neuen Sechs-Wochen-Zeitraum aus. Das Gesetz verhindert damit, dass derselbe Krankheitsfall ohne Begrenzung erneut zur Entgeltfortzahlung führt.',
          'Ein neuer Anspruch von bis zu sechs Wochen entsteht bei derselben Krankheit grundsätzlich, wenn der Arbeitnehmer davor mindestens sechs Monate nicht wegen dieser Krankheit arbeitsunfähig war oder seit Beginn der ersten Arbeitsunfähigkeit wegen dieser Krankheit zwölf Monate vergangen sind. Bei mehreren Erkrankungen oder überlappenden Zeiten ist die Einordnung häufig komplex und sollte anhand der konkreten Daten geprüft werden.',
        ],
      },
      {
        heading: 'Krankmeldung und Nachweis der Arbeitsunfähigkeit',
        paragraphs: [
          'Beschäftigte müssen dem Arbeitgeber die Arbeitsunfähigkeit und ihre voraussichtliche Dauer unverzüglich mitteilen. Diese Anzeigepflicht besteht unabhängig davon, ob eine Arbeitsunfähigkeitsbescheinigung elektronisch abgerufen werden kann.',
          'Dauert die Arbeitsunfähigkeit länger als drei Kalendertage, ist sie grundsätzlich ärztlich festzustellen. Der Arbeitgeber kann die Feststellung auch früher verlangen. Dauert die Krankheit länger als zunächst festgestellt, muss die weitere Arbeitsunfähigkeit ebenfalls rechtzeitig festgestellt werden.',
        ],
      },
      {
        heading: 'Elektronische AU: Was gilt grundsätzlich?',
        paragraphs: [
          'Bei gesetzlich krankenversicherten Beschäftigten wird die Arbeitsunfähigkeit in vielen Fällen elektronisch an die Krankenkasse übermittelt. Der Arbeitgeber ruft die erforderlichen Daten im eAU-Verfahren bei der Krankenkasse ab.',
          'Die eAU ersetzt nicht die Krankmeldung durch den Beschäftigten. Außerdem gibt es Ausnahmen, zum Beispiel bei Privatversicherten, bei einer Feststellung durch nicht an der vertragsärztlichen Versorgung teilnehmende Ärzte oder in weiteren Sonderfällen. Ob ein Papiernachweis erforderlich ist, richtet sich nach dem jeweiligen Verfahren.',
        ],
      },
      {
        heading: 'Entgeltfortzahlung an Feiertagen',
        paragraphs: [
          'Fällt die regelmäßige Arbeitszeit wegen eines gesetzlichen Feiertags aus, ist das Arbeitsentgelt grundsätzlich so zu zahlen, als hätte der Arbeitsausfall nicht stattgefunden. Das ist ein eigener Anspruch auf Feiertagsentgelt nach dem Entgeltfortzahlungsgesetz.',
          'Fällt ein Feiertag in eine Zeit der krankheitsbedingten Arbeitsunfähigkeit, richtet sich die Höhe des fortzuzahlenden Entgelts für diesen Tag nach den Feiertagsregeln. Feiertagsentgelt und Entgeltfortzahlung im Krankheitsfall sollten deshalb nicht miteinander verwechselt werden.',
        ],
      },
      {
        heading: 'Wie hoch ist die Entgeltfortzahlung?',
        paragraphs: [
          'Fortzuzahlen ist grundsätzlich das Arbeitsentgelt, das bei der maßgebenden regelmäßigen Arbeitszeit angefallen wäre. Das bedeutet nicht automatisch, dass jeder Vergütungsbestandteil in voller Höhe einzubeziehen ist.',
          'Zusätzlich für Überstunden gezahltes Entgelt gehört gesetzlich nicht zum fortzuzahlenden Arbeitsentgelt. Bei leistungsabhängiger Vergütung ist grundsätzlich der in der regelmäßigen Arbeitszeit erzielbare Durchschnittsverdienst maßgeblich. Tarifverträge können für die Bemessung besondere Regeln vorsehen.',
        ],
      },
      {
        heading: 'Nach sechs Wochen: Krankengeld nur kurz erklärt',
        paragraphs: [
          'Endet der Anspruch auf Entgeltfortzahlung, kann bei gesetzlich Krankenversicherten unter den Voraussetzungen des SGB V Krankengeld relevant werden. Das Krankengeld wird von der Krankenkasse gezahlt und ist nicht dasselbe wie die fortgesetzte Lohnzahlung durch den Arbeitgeber.',
          'Ob ein Anspruch besteht, wann er beginnt und wie hoch er ausfällt, hängt unter anderem von Versicherungsstatus, Arbeitsverhältnis und der festgestellten Arbeitsunfähigkeit ab. Für privat Versicherte oder andere Personengruppen können andere Absicherungen gelten.',
        ],
      },
      {
        heading: 'Umlage U1: Erstattung für Arbeitgeber grundsätzlich',
        paragraphs: [
          'Das U1-Verfahren kann kleinere Arbeitgeber bei Aufwendungen für die Entgeltfortzahlung entlasten. Krankenkassen erstatten Arbeitgebern, die regelmäßig nicht mehr als 30 Arbeitnehmer beschäftigen – Auszubildende nicht mitgerechnet –, nach den gesetzlichen Vorgaben einen Teil der fortgezahlten Entgelte und bestimmter Arbeitgeberanteile.',
          'Ob die Voraussetzungen erfüllt sind und wie das Verfahren technisch abgewickelt wird, richtet sich nach dem Aufwendungsausgleichsgesetz und der zuständigen Krankenkasse. Die U1-Erstattung betrifft den Arbeitgeber; sie ändert nicht den Entgeltfortzahlungsanspruch des Beschäftigten.',
        ],
      },
      {
        heading: 'Entgeltfortzahlung richtig abrechnen',
        paragraphs: [
          'Dokumentiere Krankmeldung, festgestellte Arbeitsunfähigkeit, Abrechnungszeitraum und die Berechnungsgrundlage nachvollziehbar. Prüfe bei wiederholter Krankheit besonders sorgfältig, ob es sich um dieselbe Krankheit im Sinne des Entgeltfortzahlungsgesetzes handelt.',
          [
            'Die Zahlung muss in der ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            ' nachvollziehbar erscheinen. Wie regelmäßiges Arbeitsentgelt, Abzüge und Auszahlungsbetrag zusammenhängen, erklärt ',
            { type: 'link', href: '/wissen/bruttolohn-nettolohn', text: 'Bruttolohn und Nettolohn' },
            '.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Entgeltfortzahlung ist die zeitlich begrenzte Weiterzahlung des Arbeitsentgelts bei krankheitsbedingter Arbeitsunfähigkeit',
    'Der gesetzliche Anspruch gegenüber dem Arbeitgeber entsteht nach vierwöchiger ununterbrochener Beschäftigung',
    'Bei erfüllten Voraussetzungen besteht der Anspruch grundsätzlich bis zu sechs Wochen',
    'Bei derselben Krankheit entsteht ein neuer Anspruch nur unter den gesetzlichen Sechs- oder Zwölf-Monats-Voraussetzungen',
    'Die Krankmeldung ist auch bei elektronischer AU unverzüglich erforderlich',
    'Feiertagsentgelt und Entgeltfortzahlung im Krankheitsfall sind unterschiedliche Ansprüche',
    'Nach Ende der Entgeltfortzahlung kann bei gesetzlich Krankenversicherten Krankengeld relevant werden',
    'Das U1-Verfahren kann kleinere Arbeitgeber bei Aufwendungen entlasten',
  ],
  commonMistakes: [
    'den Anspruch vor Ablauf der vierwöchigen Wartezeit voraussetzen',
    'bei derselben Krankheit automatisch einen neuen Sechs-Wochen-Zeitraum annehmen',
    'die unverzügliche Krankmeldung wegen der eAU unterlassen',
    'Feiertagsentgelt und krankheitsbedingte Entgeltfortzahlung gleichsetzen',
    'zusätzlich für Überstunden gezahltes Entgelt pauschal in die Fortzahlung einbeziehen',
    'Krankengeld als Fortzahlung durch den Arbeitgeber verstehen',
    'U1-Erstattung mit dem Anspruch des Beschäftigten verwechseln',
  ],
  faqs: [
    {
      question: 'Wie lange zahlt der Arbeitgeber bei Krankheit weiter?',
      answer: 'Bei erfüllten Voraussetzungen grundsätzlich bis zu sechs Wochen. Bei derselben Krankheit gelten besondere Regeln für einen neuen Anspruch.',
    },
    {
      question: 'Gilt die Entgeltfortzahlung ab dem ersten Arbeitstag?',
      answer: 'Der gesetzliche Anspruch gegenüber dem Arbeitgeber entsteht nach vierwöchiger ununterbrochener Dauer des Arbeitsverhältnisses.',
    },
    {
      question: 'Beginnen bei derselben Krankheit wieder sechs Wochen?',
      answer: 'Nicht automatisch. Ein neuer Anspruch entsteht grundsätzlich erst, wenn vor der erneuten Arbeitsunfähigkeit mindestens sechs Monate keine Arbeitsunfähigkeit wegen derselben Krankheit bestand oder seit deren Beginn zwölf Monate vergangen sind.',
    },
    {
      question: 'Muss ich mich trotz eAU krankmelden?',
      answer: 'Ja. Die unverzügliche Mitteilung der Arbeitsunfähigkeit und ihrer voraussichtlichen Dauer an den Arbeitgeber bleibt erforderlich.',
    },
    {
      question: 'Wird an Feiertagen bei Krankheit weitergezahlt?',
      answer: 'Fällt die regelmäßige Arbeitszeit wegen eines gesetzlichen Feiertags aus, besteht grundsätzlich ein Anspruch auf Feiertagsentgelt. Bei gleichzeitiger Krankheit gelten für die Höhe die Feiertagsregeln.',
    },
    {
      question: 'Was passiert nach sechs Wochen Krankheit?',
      answer: 'Bei gesetzlich Krankenversicherten kann unter den Voraussetzungen des SGB V Krankengeld relevant werden. Ob ein Anspruch besteht, hängt vom jeweiligen Versicherungs- und Beschäftigungsfall ab.',
    },
  ],
  related: [
    'personal-lohn',
    'lohnabrechnung',
    'bruttolohn-nettolohn',
    'sozialversicherungsbeitraege',
  ],
  sources: [
    { label: '§ 2 EntgFG – Entgeltzahlung an Feiertagen', url: 'https://www.gesetze-im-internet.de/entgfg/__2.html' },
    { label: '§ 3 EntgFG – Anspruch auf Entgeltfortzahlung im Krankheitsfall', url: 'https://www.gesetze-im-internet.de/entgfg/__3.html' },
    { label: '§ 4 EntgFG – Höhe des fortzuzahlenden Arbeitsentgelts', url: 'https://www.gesetze-im-internet.de/entgfg/__4.html' },
    { label: '§ 5 EntgFG – Anzeige- und Nachweispflichten', url: 'https://www.gesetze-im-internet.de/entgfg/__5.html' },
    { label: '§ 44 SGB V – Krankengeld', url: 'https://www.gesetze-im-internet.de/sgb_5/__44.html' },
    { label: '§ 46 SGB V – Entstehen des Krankengeldanspruchs', url: 'https://www.gesetze-im-internet.de/sgb_5/__46.html' },
    { label: '§ 1 AAG – Erstattungsanspruch im U1-Verfahren', url: 'https://www.gesetze-im-internet.de/aufag/__1.html' },
    { label: 'GKV-Spitzenverband – Elektronische Arbeitsunfähigkeitsbescheinigung', url: 'https://www.gkv-spitzenverband.de/krankenversicherung/digitalisierung/eau_1/s_eau.jsp' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default entgeltfortzahlung;
