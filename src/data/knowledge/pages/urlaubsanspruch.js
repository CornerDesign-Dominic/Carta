import { defaultDisclaimer } from '../shared.js';

const urlaubsanspruch = {
  slug: 'urlaubsanspruch',
  category: 'Personal & Lohn',
  title: 'Urlaubsanspruch',
  description: 'Urlaubsanspruch einfach erklärt: gesetzlicher Mindesturlaub, Teilzeit, Wartezeit, Eintritt, Austritt, Resturlaub, Krankheit und Urlaubsabgeltung.',
  seo: {
    title: 'Urlaubsanspruch: Gesetzlicher Urlaub erklärt | Belege24',
    description: 'Erfahre, wie der gesetzliche Urlaubsanspruch bei Vollzeit und Teilzeit berechnet wird und was bei Wartezeit, Resturlaub, Krankheit und Beendigung gilt.',
    canonicalPath: '/wissen/urlaubsanspruch',
  },
  article: {
    intro: 'Der gesetzliche Urlaubsanspruch soll echte Erholung ermöglichen. Das Bundesurlaubsgesetz regelt unter anderem Mindestdauer, Wartezeit, Teilurlaub, Übertragung und Abgeltung. Arbeits- oder Tarifvertrag können darüber hinaus zusätzlichen Urlaub vorsehen.',
    sections: [
      {
        heading: 'Was ist der gesetzliche Urlaubsanspruch?',
        paragraphs: [
          'Arbeitnehmer haben Anspruch auf bezahlten Erholungsurlaub. Der gesetzliche Mindesturlaub beträgt vier Wochen im Kalenderjahr. Das Bundesurlaubsgesetz rechnet dabei mit Werktagen und einer Sechs-Tage-Woche.',
          'Bei einer regelmäßigen Sechs-Tage-Woche sind das mindestens 24 Werktage. Bei einer Fünf-Tage-Woche entsprechen vier Wochen 20 Arbeitstagen. Arbeits- oder Tarifvertrag können einen höheren Urlaubsanspruch vorsehen, den sogenannten Zusatzurlaub.',
        ],
      },
      {
        heading: 'Urlaub bei Teilzeit richtig berechnen',
        paragraphs: [
          'Für die Zahl der Urlaubstage ist nicht entscheidend, wie viele Stunden am einzelnen Arbeitstag gearbeitet werden. Entscheidend ist die Verteilung der regelmäßigen Arbeitstage pro Woche. Wer an fünf Tagen mit weniger Stunden arbeitet, hat deshalb beim gesetzlichen Mindesturlaub grundsätzlich ebenso 20 Urlaubstage wie eine Vollzeitkraft mit Fünf-Tage-Woche.',
          'Wer dagegen beispielsweise regelmäßig nur an drei Tagen pro Woche arbeitet, hat bei vier Urlaubswochen grundsätzlich zwölf Urlaubstage. Diese Tage befreien ebenfalls für vier Wochen von der Arbeitspflicht. Ändert sich die Verteilung der Arbeitstage, muss der Urlaubsanspruch für die betroffenen Zeiträume gesondert berechnet werden.',
        ],
      },
      {
        heading: 'Wartezeit und anteiliger Urlaub',
        paragraphs: [
          'Der volle gesetzliche Urlaubsanspruch entsteht erstmals nach sechsmonatigem Bestehen des Arbeitsverhältnisses. Vor Ablauf dieser Wartezeit kann ein Teilurlaub entstehen. Das Gesetz sieht dafür grundsätzlich ein Zwölftel des Jahresurlaubs für jeden vollen Monat des Bestehens des Arbeitsverhältnisses vor.',
          'Die genaue Berechnung hängt vor allem vom Eintrittsdatum, dem Ende der Wartezeit und der Verteilung der regelmäßigen Arbeitstage ab. Vertragliche Regelungen können für zusätzlichen Urlaub andere Berechnungsregeln enthalten.',
        ],
      },
      {
        heading: 'Eintritt und Austritt im laufenden Jahr',
        paragraphs: [
          'Bei Eintritt während des Jahres ist häufig zunächst Teilurlaub relevant. Nach erfüllter Wartezeit entsteht der volle gesetzliche Jahresurlaub. Ein bereits bei einem früheren Arbeitgeber gewährter oder abgegoltener Urlaub im selben Kalenderjahr wird berücksichtigt, damit keine Doppelansprüche entstehen.',
          'Bei Austritt ist für den gesetzlichen Mindesturlaub unter anderem wichtig, ob das Arbeitsverhältnis in der ersten oder zweiten Jahreshälfte endet und ob die Wartezeit bereits erfüllt ist. Endet es nach erfüllter Wartezeit in der zweiten Jahreshälfte, kann grundsätzlich der volle gesetzliche Jahresurlaub entstehen. Für den übergesetzlichen Zusatzurlaub können abweichende vertragliche Regeln gelten.',
        ],
      },
      {
        heading: 'Wann muss Urlaub genommen werden?',
        paragraphs: [
          'Bei der zeitlichen Festlegung sind die Urlaubswünsche des Beschäftigten grundsätzlich zu berücksichtigen. Dringende betriebliche Belange oder sozial vorrangige Urlaubswünsche anderer Beschäftigter können entgegenstehen. Urlaub soll im laufenden Kalenderjahr genommen werden.',
          'Eine Übertragung ins nächste Kalenderjahr ist nach dem Gesetz nur bei dringenden betrieblichen oder in der Person des Beschäftigten liegenden Gründen vorgesehen. Im Übertragungsfall ist der Urlaub grundsätzlich in den ersten drei Monaten des Folgejahres zu nehmen. Für gesetzlichen Urlaub gelten daneben die Mitwirkungspflichten des Arbeitgebers.',
        ],
      },
      {
        heading: 'Resturlaub, Verfall und Mitwirkung des Arbeitgebers',
        paragraphs: [
          'Gesetzlicher Urlaub verfällt nicht allein deshalb, weil das Kalenderjahr endet. Nach der Rechtsprechung des Bundesarbeitsgerichts muss der Arbeitgeber den Beschäftigten konkret auffordern, den Urlaub zu nehmen, und klar sowie rechtzeitig auf einen möglichen Verfall hinweisen. Erst wenn Beschäftigte dadurch tatsächlich in die Lage versetzt wurden, den Urlaub zu nehmen, können die gesetzlichen Fristen eingreifen.',
          'Diese Mitwirkungspflichten sind auch für die Verjährung des gesetzlichen Mindesturlaubs bedeutsam. Ob Resturlaub tatsächlich fortbesteht oder verfallen ist, hängt deshalb vom konkreten Urlaubsanspruch, den Hinweisen des Arbeitgebers und den Umständen des Einzelfalls ab.',
        ],
      },
      {
        heading: 'Urlaub bei Krankheit und Elternzeit',
        paragraphs: [
          'Erkrankt ein Beschäftigter während bereits genehmigten Urlaubs, werden durch ärztliches Zeugnis nachgewiesene Tage der Arbeitsunfähigkeit nicht auf den Jahresurlaub angerechnet. Die Urlaubstage können nicht einfach einseitig an den Urlaub angehängt werden; sie müssen erneut vereinbart oder beantragt werden.',
          'Während Elternzeit kann der Arbeitgeber den Erholungsurlaub für jeden vollen Kalendermonat grundsätzlich um ein Zwölftel kürzen. Das gilt nicht, wenn während der Elternzeit beim selben Arbeitgeber Teilzeit gearbeitet wird. Nicht genommener Urlaub vor der Elternzeit ist nach deren Ende im laufenden oder nächsten Urlaubsjahr zu gewähren.',
          [
            'Die Fortzahlung bei Krankheit erläutert ',
            { type: 'link', href: '/wissen/entgeltfortzahlung', text: 'Entgeltfortzahlung' },
            '. Wie die Vergütung während des Urlaubs und mögliches Urlaubsgeld einzuordnen sind, erklärt ',
            { type: 'link', href: '/wissen/urlaubsentgelt-urlaubsgeld', text: 'Urlaubsentgelt und Urlaubsgeld' },
            '.',
          ],
        ],
      },
      {
        heading: 'Urlaubsabgeltung bei Beendigung',
        paragraphs: [
          'Urlaub soll grundsätzlich in Freizeit genommen werden. Eine Auszahlung anstelle von Urlaub ist während eines laufenden Arbeitsverhältnisses nicht der Regelfall. Kann der Urlaub wegen Beendigung des Arbeitsverhältnisses ganz oder teilweise nicht mehr genommen werden, ist er abzugelten.',
          'Die Höhe und der Umfang einer Urlaubsabgeltung hängen vom noch bestehenden Anspruch und der Berechnung des Urlaubsentgelts ab. Gesetzlicher Urlaub und vertraglicher Zusatzurlaub sollten dabei getrennt geprüft werden, wenn der Vertrag unterschiedliche Regeln vorsieht.',
        ],
      },
      {
        heading: 'Gesetzlicher Urlaub und Zusatzurlaub',
        paragraphs: [
          'Der gesetzliche Mindesturlaub darf grundsätzlich nicht zu Ungunsten des Beschäftigten unterschritten werden. Zusätzlich vereinbarter Urlaub kann eigenen vertraglichen oder tariflichen Regeln unterliegen, etwa zu Übertragung, Verfall oder Berechnung.',
          'Für eine klare Abrechnung und Planung sollte der Vertrag erkennbar zwischen Mindesturlaub und Zusatzurlaub unterscheiden. Fehlt eine eindeutige Trennung, können für beide Ansprüche vergleichbare gesetzliche Grundsätze gelten.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der gesetzliche Mindesturlaub beträgt vier Wochen pro Kalenderjahr',
    'Bei einer Sechs-Tage-Woche sind das 24 Werktage, bei einer Fünf-Tage-Woche 20 Arbeitstage',
    'Bei Teilzeit richtet sich die Zahl der Urlaubstage nach der Zahl der regelmäßigen Arbeitstage, nicht nach den täglichen Stunden',
    'Der volle gesetzliche Urlaubsanspruch entsteht erstmals nach sechs Monaten',
    'Bei Eintritt oder Austritt kann Teilurlaub relevant sein; nach erfüllter Wartezeit in der zweiten Jahreshälfte grundsätzlich der volle gesetzliche Urlaub',
    'Gesetzlicher Urlaub verfällt nicht ohne rechtzeitige Aufforderung und Hinweis des Arbeitgebers',
    'Nachgewiesene Arbeitsunfähigkeit während des Urlaubs wird nicht auf den Urlaub angerechnet',
    'Urlaubsabgeltung kommt grundsätzlich erst bei Beendigung des Arbeitsverhältnisses in Betracht',
  ],
  commonMistakes: [
    'Teilzeit wegen weniger täglicher Stunden pauschal mit weniger Urlaubstagen gleichsetzen',
    '24 Werktage Mindesturlaub mit 24 Arbeitstagen bei einer Fünf-Tage-Woche verwechseln',
    'den vollen Jahresurlaub vor Ablauf der Wartezeit ohne Prüfung annehmen',
    'Urlaub bei Austritt immer nur anteilig berechnen',
    'Resturlaub allein wegen des Jahreswechsels als verfallen behandeln',
    'Urlaubstage bei nachgewiesener Krankheit während des Urlaubs als verbraucht behandeln',
    'Urlaub während eines laufenden Arbeitsverhältnisses auszahlen statt gewähren',
    'gesetzlichen Mindesturlaub und vertraglichen Zusatzurlaub nicht getrennt betrachten',
  ],
  faqs: [
    {
      question: 'Wie viele Urlaubstage stehen mir gesetzlich zu?',
      answer: 'Der gesetzliche Mindesturlaub beträgt vier Wochen. Bei einer Fünf-Tage-Woche sind das 20 Arbeitstage, bei einer Sechs-Tage-Woche 24 Werktage.',
    },
    {
      question: 'Haben Teilzeitkräfte weniger Urlaub?',
      answer: 'Nicht allein wegen kürzerer täglicher Arbeitszeit. Maßgeblich ist, an wie vielen Tagen pro Woche regelmäßig gearbeitet wird. So bleibt die Urlaubszeit in Wochen gleich.',
    },
    {
      question: 'Wann entsteht der volle Urlaubsanspruch?',
      answer: 'Erstmals nach sechsmonatigem Bestehen des Arbeitsverhältnisses. Vorher kann ein gesetzlicher Teilurlaub entstehen.',
    },
    {
      question: 'Kann Resturlaub einfach zum Jahresende verfallen?',
      answer: 'Nicht automatisch. Für den gesetzlichen Mindesturlaub muss der Arbeitgeber Beschäftigte grundsätzlich rechtzeitig zur Urlaubnahme auffordern und auf einen möglichen Verfall hinweisen.',
    },
    {
      question: 'Verbrauche ich Urlaubstage, wenn ich im Urlaub krank bin?',
      answer: 'Durch ärztliches Zeugnis nachgewiesene Tage der Arbeitsunfähigkeit während des Urlaubs werden nicht auf den Jahresurlaub angerechnet.',
    },
    {
      question: 'Kann Urlaub ausbezahlt werden?',
      answer: 'Grundsätzlich erst bei Beendigung des Arbeitsverhältnisses, wenn der Urlaub ganz oder teilweise nicht mehr genommen werden kann.',
    },
  ],
  related: [
    'personal-lohn',
    'urlaubsentgelt-urlaubsgeld',
    'entgeltfortzahlung',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§§ 1, 3 bis 5 BUrlG – Anspruch, Dauer, Wartezeit und Teilurlaub', url: 'https://www.gesetze-im-internet.de/burlg/BJNR000020963.html' },
    { label: '§ 7 BUrlG – Zeitpunkt, Übertragung und Abgeltung des Urlaubs', url: 'https://www.gesetze-im-internet.de/burlg/__7.html' },
    { label: '§ 9 BUrlG – Erkrankung während des Urlaubs', url: 'https://www.gesetze-im-internet.de/burlg/__9.html' },
    { label: '§ 17 BEEG – Urlaub während Elternzeit', url: 'https://www.gesetze-im-internet.de/beeg/__17.html' },
    { label: 'BMAS – Fragen und Antworten zur Brückenteilzeit', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Teilzeit-flexible-Arbeitszeit/Teilzeit/Fragen-und-Antworten-Brueckenteilzeit/faq-brueckenteilzeit.html' },
    { label: 'BAG, Urteil vom 19.02.2019 – 9 AZR 541/15 – Mitwirkungsobliegenheiten beim Urlaubsverfall', url: 'https://www.bundesarbeitsgericht.de/entscheidung/9-azr-541-15/' },
    { label: 'BAG, Urteil vom 20.12.2022 – 9 AZR 266/20 – Verjährung des Mindesturlaubs', url: 'https://www.bundesarbeitsgericht.de/entscheidung/9-azr-266-20/' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default urlaubsanspruch;
