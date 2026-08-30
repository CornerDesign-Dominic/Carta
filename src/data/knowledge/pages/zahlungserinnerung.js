import { defaultDisclaimer } from '../shared.js';

const zahlungserinnerung = {
  slug: 'zahlungserinnerung',
  category: 'Mahnwesen',
  title: 'Zahlungserinnerung',
  description: 'Eine Zahlungserinnerung weist freundlich auf eine offene Forderung hin. Erfahre, wann sie sinnvoll ist und wie sie sich von einer Mahnung unterscheidet.',
  seo: {
    title: 'Zahlungserinnerung einfach erklärt | Belege24',
    description: 'Was eine Zahlungserinnerung ist, welche Angaben sie enthalten sollte und wann anschließend eine Mahnung sinnvoll sein kann.',
    canonicalPath: '/wissen/zahlungserinnerung',
  },
  article: {
    intro: 'Eine Zahlungserinnerung ist ein freundlicher Hinweis auf eine noch offene Zahlung. Sie hilft dir, eine Rechnung frühzeitig und sachlich anzusprechen, bevor du gegebenenfalls eine deutlichere Mahnung versendest.',
    sections: [
      {
        heading: 'Was ist eine Zahlungserinnerung?',
        paragraphs: [
          'Mit einer Zahlungserinnerung machst du einen Kunden darauf aufmerksam, dass eine Rechnung noch nicht bezahlt wurde. In der Praxis ist sie oft der erste, bewusst freundliche Schritt im Umgang mit einer offenen Forderung.',
          'Sie kann Missverständnisse klären, etwa wenn eine Rechnung übersehen wurde, nicht angekommen ist oder es Rückfragen gibt. Eine Zahlungserinnerung ist daher häufig sinnvoll, bevor die Kommunikation verbindlicher wird.',
        ],
      },
      {
        heading: 'Wann wird sie verwendet?',
        paragraphs: [
          [
            'Du kannst eine Zahlungserinnerung versenden, wenn eine Rechnung offen ist – häufig nach Erreichen der ',
            { type: 'glossary', id: 'faelligkeit', text: 'Fälligkeit' },
            ', aber auch als kulanter Hinweis kurz danach. Ein vorheriger Zahlungsverzug ist dafür nicht erforderlich.',
          ],
          'Ob eine Zahlung tatsächlich fällig ist, richtet sich vor allem nach dem vereinbarten Zahlungstermin oder Zahlungsziel. Fehlt eine Vereinbarung, kann die Zahlung grundsätzlich sofort verlangt werden.',
        ],
      },
      {
        heading: 'Unterschied zwischen Zahlungserinnerung und Mahnung',
        paragraphs: [
          'Kaufmännisch ist die Zahlungserinnerung meist freundlicher formuliert und soll zuerst an eine offene Rechnung erinnern. Eine Mahnung fordert die Zahlung in der Regel deutlicher und setzt häufig eine neue, klare Frist.',
          'Rechtlich sind die Begriffe jedoch nicht immer strikt getrennt. Entscheidend ist nicht allein die Überschrift, sondern der Inhalt und die Umstände. Auch eine als Zahlungserinnerung bezeichnete Nachricht kann eine Mahnung im rechtlichen Sinn sein, wenn sie die Zahlung einer fälligen Forderung eindeutig verlangt.',
        ],
      },
      {
        heading: 'Muss vorher Zahlungsverzug vorliegen?',
        paragraphs: [
          [
            'Nein. Du kannst eine Zahlungserinnerung unabhängig davon versenden, ob bereits ',
            { type: 'glossary', id: 'zahlungsverzug', text: 'Zahlungsverzug' },
            ' eingetreten ist. Umgekehrt löst eine Zahlungserinnerung nicht automatisch Verzug aus.',
          ],
          'Eine Aufforderung zur Zahlung kann unter den gesetzlichen Voraussetzungen den Verzug begründen. Dafür müssen unter anderem eine fällige Forderung und die weiteren Voraussetzungen des Einzelfalls vorliegen. Der Name des Schreibens ist dabei nicht entscheidend.',
        ],
      },
      {
        heading: 'Welche Angaben sollte sie enthalten?',
        paragraphs: [
          'Nenne die Rechnungsnummer, das Rechnungsdatum, den offenen Betrag und möglichst die ursprüngliche Fälligkeit. Eine kurze Leistungsbezeichnung hilft dem Empfänger, die Forderung schnell zuzuordnen.',
          'Ergänze eine klare Bitte zur Zahlung sowie die benötigten Zahlungsdaten. Wenn du eine neue Frist nennst, sollte sie eindeutig erkennbar sein.',
        ],
      },
      {
        heading: 'Welche Zahlungsfrist ist sinnvoll?',
        paragraphs: [
          'Eine gesetzlich festgelegte Standardfrist für Zahlungserinnerungen gibt es nicht. Wähle eine klare und angemessene Frist, die zum Betrag, zur bisherigen Kommunikation und zur Art der Forderung passt.',
          'In der Praxis wird häufig eine kurze Frist gesetzt. Wichtig ist vor allem, dass der Empfänger eindeutig erkennt, bis wann die Zahlung erwartet wird und wie er Rückfragen klären kann.',
        ],
      },
      {
        heading: 'Wie sollte sie formuliert sein?',
        paragraphs: [
          'Formuliere sachlich und freundlich. Weise darauf hin, dass die Rechnung möglicherweise übersehen wurde, nenne die Zahlungsdaten und bitte um eine kurze Rückmeldung, falls es ein Problem oder eine Rückfrage gibt.',
          'Vermeide unbelegte Vorwürfe, Druck oder unklare Drohungen. Eine nachvollziehbare, ruhige Formulierung erhält die Geschäftsbeziehung und schafft eine gute Grundlage für die nächsten Schritte.',
        ],
      },
      {
        heading: 'Wann sollte anschließend gemahnt werden?',
        paragraphs: [
          'Bleibt die Zahlung trotz Erinnerung aus und gibt es keine nachvollziehbare Rückmeldung, kannst du eine Mahnung prüfen. Sie sollte Forderung, Frist und mögliche nächste Schritte deutlich benennen.',
          'Ob sofort eine Mahnung sinnvoll ist oder zunächst noch eine Rückfrage, hängt vom Zahlungsziel, der bisherigen Kommunikation und den Umständen der Forderung ab.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle eine offene Rechnung nicht automatisch mit Zahlungsverzug. Prüfe Fälligkeit, Betrag und Empfängeradresse, halte die Formulierung klar und dokumentiere Versand sowie Rückmeldungen. Wenn es um Verzug, Kosten oder weitere rechtliche Schritte geht, prüfe die Voraussetzungen besonders sorgfältig.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine Zahlungserinnerung ist meist der erste freundliche Hinweis auf eine offene Rechnung',
    'Sie kann auch ohne vorherigen Zahlungsverzug versendet werden',
    'Zahlungserinnerung und Mahnung sind rechtlich nicht allein durch ihre Überschrift zu unterscheiden',
    'Eine eindeutige Zahlungsaufforderung kann unter gesetzlichen Voraussetzungen rechtlich als Mahnung wirken',
    'Nenne Rechnung, Betrag, Fälligkeit und Zahlungsdaten nachvollziehbar',
    'Eine neue Zahlungsfrist sollte klar und angemessen sein',
    'Bleibt die Zahlung aus, kann eine Mahnung der nächste Schritt sein',
  ],
  commonMistakes: [
    'Fälligkeit und Zahlungsverzug gleichsetzen',
    'Rechnung oder offenen Betrag nicht eindeutig benennen',
    'eine unklare neue Zahlungsfrist setzen',
    'davon ausgehen, dass die Überschrift allein über die rechtliche Wirkung entscheidet',
    'eine unnötig scharfe oder vorwurfsvolle Formulierung wählen',
    'Versand und Rückmeldungen nicht dokumentieren',
  ],
  faqs: [
    { question: 'Was ist eine Zahlungserinnerung?', answer: 'Sie ist ein freundlicher Hinweis darauf, dass eine Rechnung noch offen ist. Sie wird oft vor einer deutlicheren Mahnung verwendet.' },
    { question: 'Muss die Rechnung vorher fällig sein?', answer: 'Eine Erinnerung kann grundsätzlich auch als kulanter Hinweis versendet werden. Ob die Zahlung verlangt werden kann, richtet sich aber nach Fälligkeit und Vereinbarung.' },
    { question: 'Ist eine Zahlungserinnerung rechtlich eine Mahnung?', answer: 'Das hängt nicht allein von der Überschrift ab. Eine klare Aufforderung zur Zahlung einer fälligen Forderung kann unter den gesetzlichen Voraussetzungen als Mahnung wirken.' },
    { question: 'Welche Frist sollte ich setzen?', answer: 'Es gibt keine feste gesetzliche Standardfrist. Die Frist sollte klar und angemessen sein und zur Forderung sowie zur bisherigen Kommunikation passen.' },
    { question: 'Wann sollte ich eine Mahnung schicken?', answer: 'Wenn die Zahlung trotz Erinnerung ausbleibt und keine nachvollziehbare Rückmeldung vorliegt, kannst du eine Mahnung prüfen.' },
    { question: 'Löst eine Zahlungserinnerung automatisch Zahlungsverzug aus?', answer: 'Nein. Verzug setzt weitere gesetzliche Voraussetzungen voraus. Entscheidend sind Fälligkeit, Inhalt des Schreibens und die Umstände des Einzelfalls.' },
  ],
  related: ['mahnwesen', 'mahnverfahren', 'faelligkeit'],
  sources: [
    { label: '§ 271 BGB – Leistungszeit', url: 'https://www.gesetze-im-internet.de/bgb/__271.html' },
    { label: '§ 286 BGB – Verzug des Schuldners', url: 'https://www.gesetze-im-internet.de/bgb/__286.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default zahlungserinnerung;
