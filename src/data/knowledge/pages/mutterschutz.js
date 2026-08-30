import { defaultDisclaimer } from '../shared.js';

const mutterschutz = {
  slug: 'mutterschutz',
  category: 'Personal & Lohn',
  title: 'Mutterschutz',
  description: 'Mutterschutz einfach erklärt: Schutzfristen, Beschäftigungsverbote, Mutterschutzlohn, Mutterschaftsgeld, Arbeitgeberzuschuss, Kündigungsschutz und Urlaub.',
  seo: {
    title: 'Mutterschutz: Fristen, Leistungen und Rechte | Belege24',
    description: 'Erfahre, welche Schutzfristen im Mutterschutz gelten, wie Beschäftigungsverbote und Leistungen zusammenhängen und was bei Kündigungsschutz, Urlaub und Lohnabrechnung wichtig ist.',
    canonicalPath: '/wissen/mutterschutz',
  },
  article: {
    intro: 'Mutterschutz schützt die Gesundheit der schwangeren oder stillenden Person und ihres Kindes im Arbeitsleben. Er umfasst Schutzfristen, Vorgaben für die Beschäftigung, finanzielle Leistungen und einen besonderen Kündigungsschutz.',
    sections: [
      {
        heading: 'Was ist Mutterschutz?',
        paragraphs: [
          'Das Mutterschutzgesetz regelt den Schutz während Schwangerschaft, nach der Entbindung und in der Stillzeit. Es gilt grundsätzlich für Frauen in einem Beschäftigungsverhältnis; für einzelne Gruppen wie Auszubildende, Praktikantinnen oder Studentinnen können ebenfalls Regelungen gelten.',
          'Mutterschutz ist nicht mit Elternzeit gleichzusetzen. Er beginnt nicht erst mit der Geburt, sondern kann schon während der Schwangerschaft Auswirkungen auf Arbeitsbedingungen, Arbeitszeit und Entgelt haben.',
        ],
      },
      {
        heading: 'Schutzfristen vor und nach der Entbindung',
        paragraphs: [
          'Vor der Entbindung gilt grundsätzlich eine Schutzfrist von sechs Wochen. In dieser Zeit darf die schwangere Person nur beschäftigt werden, wenn sie sich ausdrücklich dazu bereit erklärt; diese Erklärung kann jederzeit widerrufen werden.',
          'Nach der Entbindung besteht grundsätzlich eine Schutzfrist von acht Wochen. Sie verlängert sich auf zwölf Wochen bei Früh- und Mehrlingsgeburten sowie in bestimmten Fällen bei der Geburt eines Kindes mit Behinderung. Kommt das Kind vor dem errechneten Termin zur Welt, verlängert sich die Schutzfrist nach der Geburt um die nicht in Anspruch genommene Zeit vor der Entbindung.',
        ],
      },
      {
        heading: 'Arbeitsbedingungen, Gefährdungsbeurteilung und Beschäftigungsverbote',
        paragraphs: [
          'Der Arbeitgeber muss für Arbeitsplätze die mutterschutzrechtlichen Gefährdungen beurteilen. Sobald er von der Schwangerschaft oder Stillzeit weiß, muss er prüfen, ob Schutzmaßnahmen erforderlich sind.',
          'Dabei gilt grundsätzlich eine Reihenfolge: Der Arbeitsplatz soll zunächst angepasst werden. Ist das nicht möglich, kann eine andere geeignete Tätigkeit angeboten werden. Erst wenn auch das nicht möglich ist, kommt ein betriebliches Beschäftigungsverbot in Betracht.',
          'Daneben kann ein ärztliches Beschäftigungsverbot bestehen, wenn die Gesundheit von Frau oder Kind durch eine weitere Beschäftigung gefährdet wäre. Ob dies vorliegt, hängt von der individuellen gesundheitlichen und beruflichen Situation ab.',
        ],
      },
      {
        heading: 'Arbeitszeit und zulässige Beschäftigung',
        paragraphs: [
          'Für schwangere und stillende Personen gelten besondere Grenzen bei Arbeitszeit, Nachtarbeit sowie Beschäftigung an Sonn- und Feiertagen. Das Gesetz sieht dafür teilweise Ausnahmen und zusätzliche Voraussetzungen vor.',
          'Entscheidend sind die konkrete Tätigkeit, die persönliche Zustimmung, Schutzmaßnahmen und gegebenenfalls behördliche Verfahren. Ein Einsatz außerhalb der üblichen Zeiten ist daher nicht allein deshalb zulässig, weil die betroffene Person einverstanden ist.',
        ],
      },
      {
        heading: 'Mutterschutzlohn, Mutterschaftsgeld und Arbeitgeberzuschuss',
        paragraphs: [
          'Mutterschutzlohn erhält eine schwangere Person bei einem Beschäftigungsverbot außerhalb der gesetzlichen Schutzfristen. Er wird vom Arbeitgeber gezahlt und orientiert sich grundsätzlich am durchschnittlichen Arbeitsentgelt vor Beginn der Schwangerschaft. Er ist nicht dasselbe wie eine Entgeltfortzahlung im Krankheitsfall.',
          'Mutterschaftsgeld kann während der Schutzfristen von der gesetzlichen Krankenkasse gezahlt werden, wenn die gesetzlichen Voraussetzungen erfüllt sind. Bei privat Krankenversicherten oder familienversicherten Personen können abweichende Regelungen gelten.',
          'Reicht das Mutterschaftsgeld der gesetzlichen Krankenkasse nicht an das durchschnittliche kalendertägliche Nettoarbeitsentgelt heran, kann ein Arbeitgeberzuschuss hinzukommen. Ob und in welcher Höhe dieser zu zahlen ist, richtet sich nach dem konkreten Beschäftigungs- und Versicherungsfall.',
        ],
      },
      {
        heading: 'Kündigungsschutz während der Schwangerschaft',
        paragraphs: [
          'Während der Schwangerschaft und bis zum Ablauf von vier Monaten nach der Entbindung ist eine Kündigung grundsätzlich unzulässig. Voraussetzung ist in der Regel, dass der Arbeitgeber von der Schwangerschaft weiß oder innerhalb der gesetzlichen Frist informiert wird.',
          'Das Gesetz kennt eng begrenzte Ausnahmen, für die vorab eine zuständige Behörde zustimmen muss. Bei einer beabsichtigten Kündigung sollte der Einzelfall deshalb frühzeitig fachlich geprüft werden.',
        ],
      },
      {
        heading: 'Urlaub, Lohnabrechnung und Elternzeit',
        paragraphs: [
          [
            'Fehlzeiten wegen mutterschutzrechtlicher Beschäftigungsverbote und Schutzfristen dürfen den Erholungsurlaub grundsätzlich nicht mindern. Die allgemeinen Regeln zum Urlaub erklärt ',
            { type: 'link', href: '/wissen/urlaubsanspruch', text: 'Urlaubsanspruch' },
            '.',
          ],
          [
            'In der ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            ' müssen Mutterschutzlohn, Mutterschaftsgeld und ein möglicher Arbeitgeberzuschuss nachvollziehbar voneinander abgegrenzt werden. Wie diese Leistungen konkret abzurechnen sind, hängt auch von der Versicherungs- und Beschäftigungssituation ab.',
          ],
          'Elternzeit schließt häufig an die Mutterschutzfrist nach der Geburt an, ist aber ein eigener rechtlicher Zeitraum mit eigenen Voraussetzungen. Sie ersetzt den Mutterschutz nicht.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle ein Beschäftigungsverbot nicht mit einer krankheitsbedingten Arbeitsunfähigkeit. Mutterschutzlohn, Mutterschaftsgeld und der Arbeitgeberzuschuss haben unterschiedliche Voraussetzungen und werden nicht von derselben Stelle gezahlt.',
          'Plane Arbeitszeiten und Tätigkeiten nicht erst kurz vor Beginn der Schutzfrist. Die Gefährdungsbeurteilung und die erforderlichen Schutzmaßnahmen müssen rechtzeitig erfolgen; individuelle Verbote sind immer anhand der konkreten Situation zu bewerten.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Mutterschutz umfasst Schutzfristen, sichere Arbeitsbedingungen, finanzielle Leistungen und Kündigungsschutz',
    'Vor der Entbindung gelten grundsätzlich sechs, nach der Entbindung acht Wochen Schutzfrist',
    'Bei Früh- und Mehrlingsgeburten sowie bestimmten Behinderungsfällen gilt nach der Geburt grundsätzlich eine zwölfwöchige Schutzfrist',
    'Der Arbeitgeber muss Gefährdungen beurteilen und Schutzmaßnahmen vorrangig vor einem Beschäftigungsverbot prüfen',
    'Mutterschutzlohn, Mutterschaftsgeld und Arbeitgeberzuschuss sind unterschiedliche Leistungen',
    'Mutterschutzfristen und Beschäftigungsverbote dürfen den gesetzlichen Urlaubsanspruch grundsätzlich nicht kürzen',
  ],
  commonMistakes: [
    'Mutterschutz mit Elternzeit gleichsetzen',
    'Mutterschutzlohn, Mutterschaftsgeld und Arbeitgeberzuschuss verwechseln',
    'ein individuelles Beschäftigungsverbot ohne konkrete medizinische oder betriebliche Grundlage annehmen',
    'die Schutzfrist vor der Geburt als absolutes Beschäftigungsverbot verstehen',
    'Kündigungsschutz ohne Prüfung der Kenntnis oder rechtzeitigen Mitteilung beurteilen',
    'Urlaub wegen Mutterschutzfristen oder Beschäftigungsverboten pauschal kürzen',
  ],
  faqs: [
    {
      question: 'Wie lange dauert der Mutterschutz?',
      answer: 'Grundsätzlich sechs Wochen vor und acht Wochen nach der Entbindung. Nach der Geburt gelten bei Früh- und Mehrlingsgeburten sowie in bestimmten Behinderungsfällen zwölf Wochen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Mutterschutzlohn und Mutterschaftsgeld?',
      answer: 'Mutterschutzlohn zahlt der Arbeitgeber bei einem Beschäftigungsverbot außerhalb der Schutzfristen. Mutterschaftsgeld kann während der Schutzfristen von der gesetzlichen Krankenkasse gezahlt werden.',
    },
    {
      question: 'Darf ich während der sechs Wochen vor der Geburt arbeiten?',
      answer: 'Grundsätzlich nur, wenn du dich ausdrücklich zur Arbeitsleistung bereit erklärst. Diese Erklärung kannst du jederzeit widerrufen.',
    },
    {
      question: 'Darf mir während des Mutterschutzes gekündigt werden?',
      answer: 'Während der Schwangerschaft und bis vier Monate nach der Entbindung ist eine Kündigung grundsätzlich unzulässig. Es gelten jedoch Voraussetzungen und eng begrenzte Ausnahmen.',
    },
    {
      question: 'Verliere ich Urlaub durch Mutterschutz?',
      answer: 'Nein. Fehlzeiten durch Mutterschutzfristen oder ein Beschäftigungsverbot dürfen den Erholungsurlaub grundsätzlich nicht mindern.',
    },
  ],
  related: [
    'personal-lohn',
    'entgeltfortzahlung',
    'urlaubsanspruch',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§ 1 MuSchG – Anwendungsbereich', url: 'https://www.gesetze-im-internet.de/muschg_2018/__1.html' },
    { label: '§ 3 MuSchG – Schutzfristen vor und nach der Entbindung', url: 'https://www.gesetze-im-internet.de/muschg_2018/__3.html' },
    { label: '§§ 10 und 13 MuSchG – Gefährdungsbeurteilung und Schutzmaßnahmen', url: 'https://www.gesetze-im-internet.de/muschg_2018/__10.html' },
    { label: '§ 16 MuSchG – Ärztliches Beschäftigungsverbot', url: 'https://www.gesetze-im-internet.de/muschg_2018/__16.html' },
    { label: '§ 17 MuSchG – Kündigungsschutz', url: 'https://www.gesetze-im-internet.de/muschg_2018/__17.html' },
    { label: '§ 18 MuSchG – Mutterschutzlohn', url: 'https://www.gesetze-im-internet.de/muschg_2018/__18.html' },
    { label: '§ 19 MuSchG – Mutterschaftsgeld', url: 'https://www.gesetze-im-internet.de/muschg_2018/__19.html' },
    { label: '§ 20 MuSchG – Arbeitgeberzuschuss zum Mutterschaftsgeld', url: 'https://www.gesetze-im-internet.de/muschg_2018/__20.html' },
    { label: '§ 24 MuSchG – Urlaub bei mutterschutzrechtlichen Fehlzeiten', url: 'https://www.gesetze-im-internet.de/muschg_2018/__24.html' },
    { label: '§ 24i SGB V – Mutterschaftsgeld', url: 'https://www.gesetze-im-internet.de/sgb_5/__24i.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default mutterschutz;
