import { defaultDisclaimer } from '../shared.js';

const teilzeit = {
  slug: 'teilzeit',
  category: 'Personal & Lohn',
  title: 'Teilzeit',
  description: 'Teilzeit einfach erklärt: Arbeitszeitmodelle, Anspruch auf Verringerung, Brückenteilzeit, Vergütung, Urlaub, Feiertage, Mehrarbeit und Sozialversicherung.',
  seo: {
    title: 'Teilzeit: Anspruch, Urlaub und Vergütung | Belege24',
    description: 'Erfahre, was Teilzeit bedeutet, wann ein Anspruch auf Arbeitszeitverringerung bestehen kann und was bei Urlaub, Vergütung, Feiertagen und Mehrarbeit gilt.',
    canonicalPath: '/wissen/teilzeit',
  },
  article: {
    intro: 'Teilzeit bedeutet, dass die regelmäßige Wochenarbeitszeit unter der einer vergleichbaren Vollzeitkraft liegt. Die konkrete Verteilung der Arbeitstage und Stunden ist dabei genauso wichtig wie der Umfang der Arbeitszeit. Teilzeitkräfte haben grundsätzlich Anspruch auf gleichberechtigte Behandlung.',
    sections: [
      {
        heading: 'Was bedeutet Teilzeit?',
        paragraphs: [
          'Teilzeit liegt vor, wenn die regelmäßige Wochenarbeitszeit kürzer ist als die eines vergleichbaren vollzeitbeschäftigten Arbeitnehmers. Vergleichbar ist grundsätzlich eine Person im selben Betrieb mit gleicher oder ähnlicher Tätigkeit und demselben Arbeitsverhältnis.',
          'Teilzeit kann unterschiedlich organisiert sein: zum Beispiel mit kürzeren Arbeitstagen an fünf Tagen, mit festen freien Wochentagen, im Wechselmodell oder mit einer ungleichmäßigen Verteilung innerhalb eines vereinbarten Rahmens. Vollzeit und Teilzeit beschreiben daher nicht nur eine Stundenzahl, sondern auch die vertraglich vereinbarte Arbeitszeitverteilung.',
        ],
      },
      {
        heading: 'Anspruch auf Verringerung der Arbeitszeit',
        paragraphs: [
          'Das Teilzeit- und Befristungsgesetz gibt Beschäftigten unter gesetzlichen Voraussetzungen einen Anspruch auf zeitlich nicht begrenzte Verringerung der Arbeitszeit. Das Arbeitsverhältnis muss dafür länger als sechs Monate bestanden haben; außerdem muss der Arbeitgeber in der Regel mehr als 15 Arbeitnehmer beschäftigen. Auszubildende werden bei dieser Schwelle nicht mitgezählt.',
          'Der Wunsch nach Verringerung und der gewünschte Umfang müssen spätestens drei Monate vor dem gewünschten Beginn in Textform mitgeteilt werden. Der Arbeitgeber muss den Wunsch erörtern und grundsätzlich zustimmen, soweit betriebliche Gründe nicht entgegenstehen. Für die konkrete Verteilung der Arbeitszeit gelten weitere Regeln.',
        ],
      },
      {
        heading: 'Brückenteilzeit',
        paragraphs: [
          'Brückenteilzeit ist eine zeitlich begrenzte Verringerung der vertraglichen Arbeitszeit mit anschließendem Rückkehrrecht zur vorherigen Arbeitszeit. Der beantragte Zeitraum liegt grundsätzlich zwischen einem und fünf Jahren; ein besonderer Grund wie Kinderbetreuung oder Pflege ist nicht erforderlich.',
          'Der gesetzliche Anspruch setzt unter anderem voraus, dass das Arbeitsverhältnis länger als sechs Monate besteht und der Arbeitgeber in der Regel mehr als 45 Arbeitnehmer beschäftigt. In Betrieben mit mehr als 45 und höchstens 200 Arbeitnehmern kann eine gesetzliche Zumutbarkeitsgrenze relevant sein. Antrag, Umfang und gewünschte Verteilung sind grundsätzlich mindestens drei Monate vorher in Textform mitzuteilen.',
        ],
      },
      {
        heading: 'Vergütung und Gleichbehandlung',
        paragraphs: [
          'Teilzeitbeschäftigte dürfen wegen der Teilzeit nicht schlechter behandelt werden als vergleichbare Vollzeitbeschäftigte, sofern kein sachlicher Grund besteht. Teilbare geldwerte Leistungen sind mindestens im Verhältnis der Arbeitszeit zu gewähren.',
          'Die Vergütung richtet sich daher regelmäßig nach der vereinbarten Teilzeitarbeit. Dass der Monatslohn niedriger sein kann als bei Vollzeit, ist nicht automatisch eine Benachteiligung. Entscheidend ist, ob Vergütung, Zuschläge oder andere Leistungen im Verhältnis zur vereinbarten Arbeitszeit und den geltenden Regeln zutreffend behandelt werden.',
          [
            'Wie Brutto, Abzüge und Auszahlungsbetrag zusammenhängen, erklärt ',
            { type: 'link', href: '/wissen/bruttolohn-nettolohn', text: 'Bruttolohn und Nettolohn' },
            '.',
          ],
        ],
      },
      {
        heading: 'Urlaubsanspruch bei Teilzeit',
        paragraphs: [
          'Teilzeit führt nicht automatisch zu weniger Urlaubstagen. Entscheidend ist die Zahl der regelmäßigen Arbeitstage. Wer an fünf Tagen pro Woche jeweils weniger Stunden arbeitet, hat beim gesetzlichen Mindesturlaub grundsätzlich dieselbe Zahl an Urlaubstagen wie eine Vollzeitkraft mit Fünf-Tage-Woche.',
          'Arbeitet eine Person dagegen regelmäßig an weniger Tagen pro Woche, wird der Urlaub so umgerechnet, dass weiterhin dieselbe Zahl von Urlaubswochen frei bleibt. Bei einer Drei-Tage-Woche entsprechen vier Urlaubswochen zum Beispiel zwölf Urlaubstage. Ändert sich die Verteilung der Arbeitstage, sind die einzelnen Zeiträume getrennt zu betrachten.',
          [
            'Die Details hierzu findest du bei ',
            { type: 'link', href: '/wissen/urlaubsanspruch', text: 'Urlaubsanspruch' },
            '.',
          ],
        ],
      },
      {
        heading: 'Feiertage und Entgeltfortzahlung',
        paragraphs: [
          'Fällt die für einen Teilzeitbeschäftigten regelmäßige Arbeitszeit wegen eines gesetzlichen Feiertags aus, ist das Arbeitsentgelt grundsätzlich fortzuzahlen. Fällt der Feiertag auf einen ohnehin arbeitsfreien Tag, entsteht daraus kein zusätzlicher freier Tag oder Zahlungsanspruch.',
          'Bei Arbeitsunfähigkeit ist grundsätzlich das Arbeitsentgelt fortzuzahlen, das bei der maßgeblichen regelmäßigen Arbeitszeit angefallen wäre. Die vereinbarte Teilzeitverteilung ist daher auch für Feiertage und die Entgeltfortzahlung wichtig.',
          [
            'Mehr zur Fortzahlung bei Krankheit erklärt ',
            { type: 'link', href: '/wissen/entgeltfortzahlung', text: 'Entgeltfortzahlung' },
            '.',
          ],
        ],
      },
      {
        heading: 'Mehrarbeit und Überstunden bei Teilzeit',
        paragraphs: [
          'Bei Teilzeit ist zwischen Mehrarbeit und Überstunden zu unterscheiden. Mehrarbeit kann bereits vorliegen, wenn die individuell vereinbarte Teilzeit überschritten wird. Ob daraus zugleich Überstunden im üblichen Sinn entstehen, richtet sich nach Arbeitsvertrag, Tarifvertrag, Betriebsvereinbarung und der maßgeblichen Vollzeitgrenze.',
          'Ein Anspruch auf Vergütung oder Freizeitausgleich folgt nicht allein aus dem Wort „Überstunden“. Zusätzliche Arbeit sollte mit Anlass, Umfang und Ausgleich nachvollziehbar dokumentiert werden.',
          [
            'Die arbeitsrechtliche Grundordnung erläutert ',
            { type: 'link', href: '/wissen/ueberstunden', text: 'Überstunden' },
            '. Für die Erfassung von Arbeitsbeginn, Ende und Pausen kann der ',
            { type: 'link', href: '/tools/arbeitszeitrechner', text: 'Arbeitszeitrechner' },
            ' helfen.',
          ],
        ],
      },
      {
        heading: 'Sozialversicherung grundsätzlich',
        paragraphs: [
          'Teilzeit ist nicht automatisch ein Minijob und führt nicht automatisch zu einer bestimmten sozialversicherungsrechtlichen Behandlung. Ob Beiträge anfallen, hängt vor allem von Beschäftigungsform, regelmäßigem Arbeitsentgelt und weiteren Voraussetzungen ab.',
          'Bei geringfügig entlohnten Beschäftigungen oder anderen besonderen Formen gelten eigene Regeln. Die Einstufung sollte nicht allein anhand der vereinbarten Wochenstunden erfolgen.',
        ],
      },
    ],
  },
  generator: {
    label: 'Arbeitszeit berechnen',
    href: '/tools/arbeitszeitrechner',
    text: 'Berechne Arbeitszeit aus Beginn, Ende und Pausen, um vereinbarte Arbeitszeiten nachvollziehbar zu dokumentieren.',
  },
  keyPoints: [
    'Teilzeit liegt vor, wenn die regelmäßige Wochenarbeitszeit kürzer ist als bei einer vergleichbaren Vollzeitkraft',
    'Für einen gesetzlichen Anspruch auf dauerhafte Teilzeit gelten unter anderem Wartezeit, Betriebsgröße und Fristen',
    'Brückenteilzeit ermöglicht unter gesetzlichen Voraussetzungen eine zeitlich begrenzte Arbeitszeitverringerung mit Rückkehrrecht',
    'Teilzeitkräfte dürfen wegen der Teilzeit grundsätzlich nicht schlechter behandelt werden',
    'Der Urlaubsanspruch richtet sich nach den regelmäßigen Arbeitstagen, nicht nach den täglichen Stunden',
    'Feiertagsentgelt und Entgeltfortzahlung folgen der individuell vereinbarten regelmäßigen Arbeitszeit',
    'Mehrarbeit bei Teilzeit ist nicht automatisch gleichbedeutend mit vergütungspflichtigen Überstunden',
    'Teilzeit ist nicht automatisch ein Minijob oder sozialversicherungsfrei',
  ],
  commonMistakes: [
    'Teilzeit allein über eine feste Zahl von Wochenstunden definieren, ohne die Vergleichsvollzeit zu berücksichtigen',
    'einen Anspruch auf Teilzeit ohne Prüfung von Betriebsgröße, Wartezeit und Frist annehmen',
    'Brückenteilzeit und dauerhafte Teilzeit gleichsetzen',
    'Teilzeitkräfte bei teilbaren Leistungen ohne sachlichen Grund schlechter behandeln',
    'weniger tägliche Stunden automatisch als weniger Urlaubstage behandeln',
    'bei Feiertagen auf ohnehin freie Tage einen zusätzlichen Freizeitausgleich erwarten',
    'jede Überschreitung der Teilzeitgrenze automatisch als Überstunde behandeln',
    'Teilzeit mit Minijob oder fehlender Sozialversicherungspflicht gleichsetzen',
  ],
  faqs: [
    {
      question: 'Was gilt als Teilzeit?',
      answer: 'Teilzeit liegt vor, wenn die regelmäßige Wochenarbeitszeit kürzer ist als die einer vergleichbaren Vollzeitkraft.',
    },
    {
      question: 'Habe ich einen Anspruch auf Teilzeit?',
      answer: 'Unter den Voraussetzungen des TzBfG kann ein Anspruch bestehen. Dazu gehören unter anderem eine Beschäftigungsdauer von mehr als sechs Monaten, eine bestimmte Betriebsgröße und ein rechtzeitiger Antrag.',
    },
    {
      question: 'Was ist Brückenteilzeit?',
      answer: 'Das ist eine zeitlich begrenzte Verringerung der Arbeitszeit mit anschließendem Rückkehrrecht zur vorherigen Arbeitszeit. Sie setzt zusätzliche gesetzliche Voraussetzungen voraus.',
    },
    {
      question: 'Haben Teilzeitkräfte weniger Urlaub?',
      answer: 'Nicht automatisch. Entscheidend ist die Zahl der regelmäßigen Arbeitstage. Bei weniger Tagen pro Woche sinkt die Zahl der Urlaubstage so, dass die Urlaubszeit in Wochen gleich bleibt.',
    },
    {
      question: 'Wird ein Feiertag bei Teilzeit bezahlt?',
      answer: 'Wenn die regelmäßige Arbeitszeit an diesem Tag wegen des Feiertags ausfällt, ist das Entgelt grundsätzlich fortzuzahlen. An einem ohnehin freien Tag entsteht kein zusätzlicher Anspruch.',
    },
    {
      question: 'Ist Teilzeit sozialversicherungsfrei?',
      answer: 'Nein. Teilzeit allein entscheidet nicht über die Sozialversicherung. Maßgeblich sind insbesondere Beschäftigungsform, regelmäßiges Arbeitsentgelt und die gesetzlichen Voraussetzungen.',
    },
  ],
  related: [
    'personal-lohn',
    'urlaubsanspruch',
    'ueberstunden',
    'bruttolohn-nettolohn',
    'entgeltfortzahlung',
  ],
  sources: [
    { label: '§§ 2 und 4 TzBfG – Teilzeitbegriff und Gleichbehandlung', url: 'https://www.gesetze-im-internet.de/tzbfg/BJNR196610000.html' },
    { label: '§ 8 TzBfG – Zeitlich nicht begrenzte Verringerung der Arbeitszeit', url: 'https://www.gesetze-im-internet.de/tzbfg/__8.html' },
    { label: '§ 9a TzBfG – Brückenteilzeit', url: 'https://www.gesetze-im-internet.de/tzbfg/__9a.html' },
    { label: '§§ 1 und 3 BUrlG – Erholungsurlaub und Mindesturlaub', url: 'https://www.gesetze-im-internet.de/burlg/BJNR000020963.html' },
    { label: '§§ 2 bis 4 EntgFG – Feiertagsentgelt und Entgeltfortzahlung', url: 'https://www.gesetze-im-internet.de/entgfg/BJNR106500994.html' },
    { label: 'BMAS – Brückenteilzeit', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Teilzeit-flexible-Arbeitszeit/Teilzeit/brueckenteilzeit-artikel.html' },
    { label: 'BMAS – Fragen und Antworten zur Brückenteilzeit', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Teilzeit-flexible-Arbeitszeit/Teilzeit/Fragen-und-Antworten-Brueckenteilzeit/faq-brueckenteilzeit.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default teilzeit;
