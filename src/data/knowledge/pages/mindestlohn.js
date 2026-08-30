import { defaultDisclaimer } from '../shared.js';

const mindestlohn = {
  slug: 'mindestlohn',
  category: 'Personal & Lohn',
  title: 'Mindestlohn',
  description: 'Gesetzlicher Mindestlohn 2026 einfach erklärt: 13,90 Euro je Stunde, Anspruch, Ausnahmen, Minijob, Arbeitszeit, Dokumentation und Fälligkeit.',
  seo: {
    title: 'Mindestlohn 2026: Höhe und wichtige Regeln | Belege24',
    description: 'Erfahre, wie hoch der gesetzliche Mindestlohn 2026 ist, wer Anspruch hat und was bei Arbeitszeit, Minijob, Dokumentation und Fälligkeit gilt.',
    canonicalPath: '/wissen/mindestlohn',
  },
  article: {
    intro: 'Der gesetzliche Mindestlohn legt eine verbindliche untere Grenze für das Arbeitsentgelt je Arbeitsstunde fest. Für Arbeitgeber und Beschäftigte sind dabei nicht nur der vereinbarte Stunden- oder Monatslohn wichtig, sondern auch die tatsächlich geleistete Arbeitszeit, mögliche Ausnahmen und die fristgerechte Zahlung.',
    sections: [
      {
        heading: 'Was ist der gesetzliche Mindestlohn?',
        paragraphs: [
          'Der gesetzliche Mindestlohn ist der Mindestbetrag, den Arbeitnehmer grundsätzlich für jede tatsächlich geleistete Arbeitsstunde erhalten müssen. Er gilt bundesweit und unabhängig davon, ob die Beschäftigung in Vollzeit, Teilzeit oder als Minijob ausgeübt wird.',
          'Die Höhe wird auf Vorschlag der Mindestlohnkommission durch Rechtsverordnung angepasst. Neben dem allgemeinen gesetzlichen Mindestlohn können für einzelne Branchen besondere Mindestentgelte gelten. Soweit diese höher sind, gehen sie dem allgemeinen Mindestlohn vor.',
        ],
      },
      {
        heading: 'Wie hoch ist der Mindestlohn 2026?',
        paragraphs: [
          'Stand 30. August 2026 beträgt der gesetzliche Mindestlohn seit dem 1. Januar 2026 13,90 Euro brutto je Zeitstunde. Zum 1. Januar 2027 ist nach der Fünften Mindestlohnanpassungsverordnung eine Erhöhung auf 14,60 Euro vorgesehen.',
          'Der Mindestlohn ist ein Bruttobetrag. Lohnsteuer und Sozialversicherungsbeiträge können bei der Abrechnung weiterhin anfallen. Für die Prüfung zählt deshalb nicht der Auszahlungsbetrag, sondern das Arbeitsentgelt je maßgeblicher Arbeitsstunde.',
        ],
      },
      {
        heading: 'Wer hat grundsätzlich Anspruch?',
        paragraphs: [
          'Anspruch haben grundsätzlich Arbeitnehmerinnen und Arbeitnehmer, die in Deutschland arbeiten. Das gilt auch für Teilzeitkräfte, geringfügig Beschäftigte und viele Praktikantinnen und Praktikanten. Nationalität oder Sitz des Arbeitgebers ändern daran grundsätzlich nichts.',
          'Das Mindestlohngesetz enthält jedoch Ausnahmen. Dazu gehören unter anderem Personen unter 18 Jahren ohne abgeschlossene Berufsausbildung, Auszubildende, ehrenamtlich Tätige und bestimmte Praktika. Für Personen, die unmittelbar vor der Beschäftigung langzeitarbeitslos waren, gilt der gesetzliche Mindestlohn in den ersten sechs Monaten des Arbeitsverhältnisses nicht. Ob eine Ausnahme greift, hängt von der tatsächlichen Ausgestaltung der Beschäftigung ab.',
        ],
      },
      {
        heading: 'Mindestlohn und Arbeitszeit',
        paragraphs: [
          'Entscheidend ist, wie viele Arbeitsstunden tatsächlich geleistet wurden. Ein scheinbar ausreichender Monatsbetrag kann den Mindestlohn verfehlen, wenn die dafür erbrachte Arbeitszeit zu hoch angesetzt wird. Arbeitszeiten sollten deshalb vollständig und nachvollziehbar erfasst werden.',
          'Bei einem Monatsgehalt muss für den jeweiligen Abrechnungszeitraum geprüft werden, ob das gezahlte Arbeitsentgelt den Mindestlohn für die geleisteten Stunden erreicht. Bei wechselnder Arbeitszeit, Überstunden oder einem Arbeitszeitkonto reicht eine pauschale Betrachtung des Monatsgehalts oft nicht aus.',
          [
            'Für die Erfassung von Beginn, Ende und Pausen kann der ',
            { type: 'link', href: '/tools/arbeitszeitrechner', text: 'Arbeitszeitrechner' },
            ' helfen. Die arbeitsrechtliche Einordnung zusätzlicher Stunden erläutert ',
            { type: 'link', href: '/wissen/ueberstunden', text: 'Überstunden' },
            '.',
          ],
        ],
      },
      {
        heading: 'Minijob und Mindestlohn',
        paragraphs: [
          'Auch im Minijob gilt der gesetzliche Mindestlohn. Die Verdienstgrenze für geringfügig entlohnte Beschäftigungen ist an ihn gekoppelt und beträgt seit dem 1. Januar 2026 603 Euro im Monat. Sie orientiert sich gesetzlich an zehn Wochenstunden zum jeweils geltenden Mindestlohn.',
          'Bei 13,90 Euro je Stunde entsprechen 603 Euro rechnerisch durchschnittlich rund 43,38 Stunden im Monat. Wird ein höherer Stundenlohn vereinbart oder fallen weitere anrechenbare Entgeltbestandteile an, sind innerhalb der Verdienstgrenze entsprechend weniger Stunden möglich. Maßgeblich bleibt die Prognose des regelmäßigen Arbeitsentgelts.',
          [
            'Weitere Regeln zu Verdienstgrenze, Sozialversicherung und mehreren Beschäftigungen findest du bei ',
            { type: 'link', href: '/wissen/minijob', text: 'Minijob' },
            '.',
          ],
        ],
      },
      {
        heading: 'Dokumentationspflichten',
        paragraphs: [
          'Für Minijobber außerhalb von Privathaushalten und für Beschäftigte in den gesetzlich genannten, besonders kontrollierten Wirtschaftsbereichen bestehen besondere Aufzeichnungspflichten nach dem Mindestlohngesetz. Beginn, Ende und Dauer der täglichen Arbeitszeit sind spätestens bis zum Ablauf des siebten Kalendertags nach der Arbeitsleistung aufzuzeichnen und mindestens zwei Jahre aufzubewahren.',
          'Die Pflicht gilt nicht pauschal für jede Beschäftigung in gleicher Form. Unabhängig davon ist eine nachvollziehbare Arbeitszeiterfassung wichtig, um die Einhaltung des Mindestlohns belegen und die Lohnabrechnung korrekt erstellen zu können.',
        ],
      },
      {
        heading: 'Wann muss der Mindestlohn gezahlt werden?',
        paragraphs: [
          'Der Mindestlohn ist zum vereinbarten Fälligkeitstermin zu zahlen, spätestens jedoch am letzten Bankarbeitstag des Monats, der auf den Monat der Arbeitsleistung folgt. Gibt es keine Vereinbarung zur Fälligkeit, bleibt die allgemeine Regel des Bürgerlichen Gesetzbuchs maßgeblich.',
          'Für Arbeitszeitkonten enthält das Mindestlohngesetz besondere Grenzen und Ausgleichsfristen. Sie ersetzen keine sorgfältige Prüfung, ob die Vergütung für die geleisteten Stunden den Mindestlohn erfüllt.',
        ],
      },
      {
        heading: 'Zuschläge und Sonderzahlungen richtig einordnen',
        paragraphs: [
          'Zuschläge und Sonderzahlungen können die Lohnabrechnung beeinflussen, ersetzen den Mindestlohn aber nicht automatisch. Ob und in welchem Umfang eine Zahlung bei der Mindestlohnberechnung berücksichtigt werden kann, richtet sich insbesondere nach ihrem Zweck, der Fälligkeit und ihrer tatsächlichen Ausgestaltung.',
          [
            'Arbeitsrechtlicher Anspruch, Mindestlohn, Steuer und Sozialversicherung sind getrennt zu prüfen. Dazu passen die Seiten ',
            { type: 'link', href: '/wissen/zuschlaege', text: 'Zuschläge' },
            ', ',
            { type: 'link', href: '/wissen/einmalzahlungen', text: 'Einmalzahlungen' },
            ' und ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            '.',
          ],
        ],
      },
      {
        heading: 'Branchenmindestlöhne nur kurz erklärt',
        paragraphs: [
          'Für einzelne Branchen können aufgrund anderer gesetzlicher Grundlagen oder tariflicher Regelungen höhere Mindestentgelte gelten. Diese Branchenmindestlöhne sind nicht mit dem allgemeinen Mindestlohn gleichzusetzen.',
          'Prüfe bei einer Beschäftigung in einer solchen Branche, ob eine besondere Regelung anwendbar ist und welcher Zeitraum, Tätigkeitsbereich oder Tarifvertrag erfasst wird. Eine allgemeine Mindestlohnprüfung ersetzt diese Einordnung nicht.',
        ],
      },
    ],
  },
  generator: {
    label: 'Stundenlohn berechnen',
    href: '/tools/stundenlohnrechner',
    text: 'Prüfe das Verhältnis von Arbeitsentgelt und Arbeitszeit als erste Orientierung für den Stundenlohn.',
  },
  keyPoints: [
    'Seit 1. Januar 2026 beträgt der gesetzliche Mindestlohn 13,90 Euro brutto je Zeitstunde',
    'Er gilt grundsätzlich auch für Teilzeitkräfte und Minijobber',
    'Das Mindestlohngesetz enthält Ausnahmen, etwa für bestimmte Praktika und Auszubildende',
    'Bei Monatsgehalt, wechselnder Arbeitszeit und Überstunden muss der Mindestlohn anhand der tatsächlichen Arbeitsstunden geprüft werden',
    'Die Minijob-Verdienstgrenze beträgt 2026 wegen der Kopplung an den Mindestlohn 603 Euro monatlich',
    'Für bestimmte Beschäftigte und Branchen gelten besondere Arbeitszeitaufzeichnungspflichten',
    'Der Mindestlohn ist spätestens am letzten Bankarbeitstag des Folgemonats zu zahlen, sofern nicht früher vereinbart',
    'Höhere Branchenmindestlöhne können dem allgemeinen Mindestlohn vorgehen',
  ],
  commonMistakes: [
    'den Nettoauszahlungsbetrag statt den Bruttostundenlohn mit dem Mindestlohn vergleichen',
    'bei einem Monatsgehalt die tatsächlich geleisteten Arbeitsstunden nicht mitprüfen',
    'Minijobber vom Mindestlohn ausnehmen oder die Verdienstgrenze ohne Arbeitszeit betrachten',
    'jede Praktikums- oder Ausbildungsvereinbarung ohne Prüfung als mindestlohnpflichtig oder -frei einordnen',
    'Arbeitszeitaufzeichnungen bei Minijobbern oder in betroffenen Branchen zu spät oder unvollständig führen',
    'Zuschläge oder Sonderzahlungen ohne Prüfung auf den Mindestlohn anrechnen',
    'allgemeinen Mindestlohn und mögliche Branchenmindestlöhne verwechseln',
  ],
  faqs: [
    {
      question: 'Wie hoch ist der Mindestlohn 2026?',
      answer: 'Seit dem 1. Januar 2026 beträgt der gesetzliche Mindestlohn 13,90 Euro brutto je Zeitstunde.',
    },
    {
      question: 'Gilt der Mindestlohn auch im Minijob?',
      answer: 'Ja. Auch Minijobber haben grundsätzlich Anspruch auf den gesetzlichen Mindestlohn. Die Verdienstgrenze ist an seine Höhe gekoppelt und beträgt 2026 monatlich 603 Euro.',
    },
    {
      question: 'Gilt der Mindestlohn für Auszubildende?',
      answer: 'Die Vergütung von zu ihrer Berufsausbildung Beschäftigten wird nicht durch das Mindestlohngesetz geregelt. Für sie gelten eigene Regelungen, etwa zur Mindestausbildungsvergütung.',
    },
    {
      question: 'Reicht ein Monatsgehalt für die Einhaltung des Mindestlohns aus?',
      answer: 'Nicht automatisch. Das gezahlte Arbeitsentgelt muss im Verhältnis zu den tatsächlich geleisteten Arbeitsstunden den Mindestlohn erreichen.',
    },
    {
      question: 'Bis wann muss der Mindestlohn gezahlt werden?',
      answer: 'Zum vereinbarten Fälligkeitstermin, spätestens am letzten Bankarbeitstag des Folgemonats. Ohne Fälligkeitsvereinbarung gelten zusätzlich die allgemeinen Regeln des BGB.',
    },
    {
      question: 'Muss jede Arbeitszeit für den Mindestlohn dokumentiert werden?',
      answer: 'Besondere Aufzeichnungspflichten gelten unter anderem für Minijobber außerhalb von Privathaushalten und für Beschäftigte in bestimmten Wirtschaftsbereichen. Eine nachvollziehbare Zeiterfassung ist auch darüber hinaus wichtig.',
    },
  ],
  related: [
    'personal-lohn',
    'minijob',
    'lohnabrechnung',
    'ueberstunden',
    'zuschlaege',
  ],
  sources: [
    { label: '§ 1 MiLoG – Anspruch auf Mindestlohn', url: 'https://www.gesetze-im-internet.de/milog/__1.html' },
    { label: '§ 2 MiLoG – Fälligkeit des Mindestlohns', url: 'https://www.gesetze-im-internet.de/milog/__2.html' },
    { label: '§ 17 MiLoG – Dokumentationspflichten', url: 'https://www.gesetze-im-internet.de/milog/__17.html' },
    { label: '§ 22 MiLoG – Persönlicher Anwendungsbereich und Ausnahmen', url: 'https://www.gesetze-im-internet.de/milog/__22.html' },
    { label: '§ 1 MiLoV5 – Mindestlohnhöhe ab 2026', url: 'https://www.gesetze-im-internet.de/milov5/__1.html' },
    { label: 'BMAS – Der gesetzliche Mindestlohn: Überblick', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/Informationen-zum-Mindestlohn/informationen-zum-mindestlohn-deutsch.html' },
    { label: 'Minijob-Zentrale – Mindestlohn im Minijob', url: 'https://www.minijob-zentrale.de/DE/die-minijobs/arbeitsrechte-im-minijob/mindestlohn/mindestlohn_node.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default mindestlohn;
