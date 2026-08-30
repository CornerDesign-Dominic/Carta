import { defaultDisclaimer } from '../shared.js';

const zahlungsverzug = {
  slug: 'zahlungsverzug',
  category: 'Mahnwesen',
  title: 'Zahlungsverzug',
  description: 'Zahlungsverzug entsteht nicht automatisch mit einer überfälligen Rechnung. Erfahre, welche Voraussetzungen und möglichen Folgen wichtig sind.',
  seo: {
    title: 'Zahlungsverzug einfach erklärt | Belege24',
    description: 'Wann Zahlungsverzug eintritt, welche Rolle Mahnung und 30-Tage-Regel spielen und welche Folgen wie Verzugszinsen entstehen können.',
    canonicalPath: '/wissen/zahlungsverzug',
  },
  article: {
    intro: 'Zahlungsverzug bedeutet, dass eine fällige Zahlung nicht rechtzeitig geleistet wurde und die gesetzlichen Voraussetzungen für Verzug erfüllt sind. Eine überfällige Rechnung führt dabei nicht automatisch in jedem Fall sofort zu Zahlungsverzug.',
    sections: [
      {
        heading: 'Was ist Zahlungsverzug?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'zahlungsverzug', text: 'Zahlungsverzug' },
            ' leistet der Schuldner nicht, obwohl eine Zahlung fällig ist und die weiteren gesetzlichen Voraussetzungen vorliegen. Für den Gläubiger kann das Grundlage für Verzugszinsen oder einen Ersatz bestimmter Verzugsschäden sein.',
          ],
          'Ob Verzug tatsächlich eingetreten ist, hängt von Vertrag, Fälligkeit, Kommunikation und den Umständen des Einzelfalls ab. Prüfe diese Punkte, bevor du zusätzliche Kosten verlangst oder weitere Schritte einleitest.',
        ],
      },
      {
        heading: 'Fälligkeit und Verzug sind nicht dasselbe',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'faelligkeit', text: 'Fälligkeit' },
            ' bestimmt, ab wann eine Zahlung verlangt werden kann. Sie ist eine wichtige Voraussetzung für Verzug, reicht für sich allein aber häufig nicht aus.',
          ],
          'Ein vereinbartes Zahlungsziel oder ein konkreter Zahlungstermin hilft, die Fälligkeit eindeutig zu bestimmen. Erst danach stellt sich die Frage, ob zusätzlich eine Mahnung nötig ist oder eine gesetzliche Ausnahme greift.',
        ],
      },
      {
        heading: 'Wann tritt Verzug grundsätzlich ein?',
        paragraphs: [
          'Häufig tritt Verzug ein, wenn der Gläubiger nach Eintritt der Fälligkeit zur Zahlung mahnt und der Schuldner nicht leistet. Eine Mahnung ist eine eindeutige Aufforderung, die fällige Zahlung zu erbringen.',
          'Für die rechtliche Wirkung kommt es nicht allein auf die Überschrift an. Auch eine als Zahlungserinnerung bezeichnete Nachricht kann unter den gesetzlichen Voraussetzungen als Mahnung wirken, wenn sie die Zahlung klar verlangt.',
        ],
      },
      {
        heading: 'Wann kann Verzug ohne Mahnung eintreten?',
        paragraphs: [
          'Eine Mahnung kann unter anderem entbehrlich sein, wenn für die Leistung ein Zeitpunkt nach dem Kalender bestimmt ist. Das gilt auch, wenn sich der Zeitpunkt aus einem Ereignis berechnen lässt und die Leistung angemessen vorher angekündigt wurde.',
          'Weitere gesetzliche Fälle sind zum Beispiel eine ernsthafte und endgültige Leistungsverweigerung oder besondere Umstände, bei denen eine sofortige Verzugsfolge gerechtfertigt sein kann. Welche Ausnahme greift, hängt vom konkreten Fall ab.',
        ],
      },
      {
        heading: 'Was bedeutet die 30-Tage-Regel?',
        paragraphs: [
          'Bei Entgeltforderungen kann Verzug spätestens 30 Tage nach Fälligkeit und Zugang einer Rechnung oder gleichwertigen Zahlungsaufstellung eintreten. Ist der Zeitpunkt des Zugangs unklar, gelten dafür gesetzliche Ersatzregeln.',
          'Gegenüber Verbrauchern gilt diese Folge nur, wenn die Rechnung oder Zahlungsaufstellung besonders auf diese Rechtsfolge hinweist. Gegenüber Unternehmen ist ein solcher Hinweis für die 30-Tage-Regel nicht erforderlich. Vertragliche oder sonstige gesetzliche Regelungen können trotzdem früher zum Verzug führen.',
        ],
      },
      {
        heading: 'Verbraucher und Unternehmen',
        paragraphs: [
          'Bei Verbrauchern ist der Hinweis auf die 30-Tage-Regel besonders wichtig. Ohne diesen Hinweis führt allein der Ablauf von 30 Tagen grundsätzlich nicht zu dieser Verzugsfolge.',
          'Bei Unternehmen gilt ebenfalls: Eine fällige Forderung reicht nicht in jedem Fall aus. Durch klar vereinbarte Zahlungsziele, nachvollziehbare Rechnungszugänge und dokumentierte Kommunikation lassen sich spätere Fragen besser einordnen.',
        ],
      },
      {
        heading: 'Welche Folgen kann Zahlungsverzug haben?',
        paragraphs: [
          'Bei Verzug können gesetzliche Verzugszinsen entstehen. Ihre Höhe richtet sich nach den gesetzlichen Vorgaben und danach, ob ein Verbraucher am Rechtsgeschäft beteiligt ist. Für die konkrete Berechnung ist der maßgebliche Zeitraum entscheidend.',
          [
            'Daneben können angemessene ',
            { type: 'glossary', id: 'mahnkosten', text: 'Mahnkosten' },
            ' und weitere Schäden durch den Verzug in Betracht kommen. Diese Kosten sind nicht automatisch in voller Höhe erstattungsfähig; Voraussetzung, Erforderlichkeit und Einzelfall müssen geprüft werden.',
          ],
        ],
      },
      {
        heading: 'Schadensersatz bei Verzug',
        paragraphs: [
          'Ein Verzug kann einen Anspruch auf Ersatz des daraus entstehenden Schadens begründen. Dazu können je nach Fall neben Zinsen auch notwendige Aufwendungen gehören, die gerade wegen der verspäteten Zahlung entstanden sind.',
          'Ob ein bestimmter Schaden ersetzt werden kann, hängt von den gesetzlichen Voraussetzungen und der konkreten Forderung ab. Pauschale Kostenansätze oder unklare Zuschläge solltest du deshalb nicht ungeprüft verlangen.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Setze eine überfällige Rechnung nicht automatisch mit Verzug gleich. Prüfe Fälligkeit, Zahlungsziel, Zugang der Rechnung, Mahnung und mögliche Ausnahmen. Dokumentiere außerdem Zahlungen und Rückmeldungen, bevor du Verzugszinsen, Mahnkosten, Inkasso oder gerichtliche Schritte prüfst.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Fälligkeit ist eine wichtige Voraussetzung, aber nicht automatisch Zahlungsverzug',
    'Häufig beginnt Verzug erst nach einer Mahnung nach Eintritt der Fälligkeit',
    'Der Inhalt einer Zahlungsaufforderung ist wichtiger als ihre Überschrift',
    'In bestimmten gesetzlichen Fällen kann Verzug ohne Mahnung eintreten',
    'Die 30-Tage-Regel setzt Fälligkeit und Zugang von Rechnung oder Zahlungsaufstellung voraus',
    'Bei Verbrauchern ist für die 30-Tage-Regel ein besonderer Hinweis erforderlich',
    'Verzug kann Verzugszinsen, angemessene Kosten und weitere Schäden zur Folge haben',
    'Die Voraussetzungen und Kosten müssen im Einzelfall geprüft werden',
  ],
  commonMistakes: [
    'eine überfällige Rechnung automatisch mit Zahlungsverzug gleichsetzen',
    'Fälligkeit oder Zugang der Rechnung nicht nachvollziehbar dokumentieren',
    'bei Verbrauchern den Hinweis auf die 30-Tage-Regel vergessen',
    'eine Zahlungserinnerung allein wegen ihrer Überschrift nicht als mögliche Mahnung einordnen',
    'Verzugszinsen oder Mahnkosten ohne Prüfung der Voraussetzungen fordern',
    'gesetzliche Ausnahmen vom Mahnerfordernis zu weit auslegen',
  ],
  faqs: [
    { question: 'Ist eine überfällige Rechnung automatisch im Verzug?', answer: 'Nein. Die Zahlung muss zwar fällig sein, aber für Verzug müssen zusätzlich die gesetzlichen Voraussetzungen erfüllt sein.' },
    { question: 'Brauche ich immer eine Mahnung?', answer: 'Häufig ist eine Mahnung nötig. Bei einem kalendermäßig bestimmten Termin und weiteren gesetzlichen Ausnahmen kann Verzug auch ohne Mahnung eintreten.' },
    { question: 'Was bedeutet die 30-Tage-Regel?', answer: 'Bei Entgeltforderungen kann Verzug spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung eintreten. Bei Verbrauchern setzt das einen besonderen Hinweis voraus.' },
    { question: 'Kann eine Zahlungserinnerung schon eine Mahnung sein?', answer: 'Ja, wenn sie die Zahlung einer fälligen Forderung eindeutig verlangt und die weiteren Voraussetzungen vorliegen. Die Überschrift allein ist nicht entscheidend.' },
    { question: 'Welche Folgen kann Zahlungsverzug haben?', answer: 'Je nach Fall können Verzugszinsen, angemessene Mahnkosten und weitere Verzugsschäden in Betracht kommen.' },
    { question: 'Gilt für Unternehmen etwas anderes als für Verbraucher?', answer: 'Bei Verbrauchern braucht es für die 30-Tage-Regel einen besonderen Hinweis auf der Rechnung oder Zahlungsaufstellung. Im Übrigen sind Vertrag, Fälligkeit und die gesetzlichen Voraussetzungen maßgeblich.' },
  ],
  related: ['mahnwesen', 'faelligkeit', 'zahlungserinnerung', 'mahnverfahren', 'verzugszinsen', 'verjaehrung-von-forderungen'],
  sources: [
    { label: '§ 280 BGB – Schadensersatz wegen Pflichtverletzung', url: 'https://www.gesetze-im-internet.de/bgb/__280.html' },
    { label: '§ 286 BGB – Verzug des Schuldners', url: 'https://www.gesetze-im-internet.de/bgb/__286.html' },
    { label: '§ 288 BGB – Verzugszinsen und sonstiger Verzugsschaden', url: 'https://www.gesetze-im-internet.de/bgb/__288.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default zahlungsverzug;
