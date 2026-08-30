import { defaultDisclaimer } from '../shared.js';

const verjaehrungVonForderungen = {
  slug: 'verjaehrung-von-forderungen',
  category: 'Mahnwesen',
  title: 'Verjährung von Forderungen',
  description: 'Forderungen verjähren nicht automatisch ab Rechnungsdatum. Erfahre, wie Fristbeginn, Hemmung und Neubeginn grundsätzlich funktionieren.',
  seo: {
    title: 'Verjährung von Forderungen erklärt | Belege24',
    description: 'Wie lange Forderungen grundsätzlich gelten, wann die Verjährung beginnt und welche Wirkung Mahnbescheid, Klage, Hemmung und Neubeginn haben können.',
    canonicalPath: '/wissen/verjaehrung-von-forderungen',
  },
  article: {
    intro: 'Verjährung begrenzt, wie lange ein Anspruch rechtlich durchgesetzt werden kann. Für offene Forderungen sind Fristbeginn, Jahresende und mögliche Hemmungs- oder Neubeginnsgründe besonders wichtig.',
    sections: [
      {
        heading: 'Was bedeutet Verjährung?',
        paragraphs: [
          'Ist eine Forderung verjährt, erlischt sie nicht automatisch. Der Schuldner darf aber die Leistung verweigern, wenn er sich auf die Verjährung beruft.',
          'Verjährung wird daher vor allem dann wichtig, wenn eine Forderung lange offen ist oder erst spät geltend gemacht werden soll. Ob sie im Einzelfall eingetreten ist, hängt von Anspruch, Fristbeginn und möglichen Unterbrechungen des Ablaufs ab.',
        ],
      },
      {
        heading: 'Wie lang ist die regelmäßige Verjährungsfrist?',
        paragraphs: [
          'Für viele Forderungen gilt die regelmäßige Verjährungsfrist von drei Jahren. Es gibt jedoch besondere Fristen für bestimmte Ansprüche. Diese Sonderfälle solltest du nur dann zugrunde legen, wenn sie wirklich zu deiner Forderung passen.',
          'Für die praktische Prüfung einer offenen Rechnung ist deshalb zunächst die regelmäßige Frist ein guter Ausgangspunkt. Entscheidend ist anschließend, wann sie genau beginnt und ob ihr Ablauf beeinflusst wurde.',
        ],
      },
      {
        heading: 'Wann beginnt die Frist?',
        paragraphs: [
          'Die regelmäßige Verjährung beginnt grundsätzlich mit dem Schluss des Jahres, in dem der Anspruch entstanden ist und der Gläubiger von den maßgeblichen Umständen sowie von der Person des Schuldners Kenntnis hatte oder ohne grobe Fahrlässigkeit hätte haben müssen.',
          'Deshalb ist nicht automatisch das Rechnungsdatum entscheidend. Je nach Fall können zum Beispiel der Zeitpunkt der Leistung, der Anspruchsentstehung, die Fälligkeit oder die Kenntnis des Gläubigers maßgeblich sein.',
        ],
      },
      {
        heading: 'Warum spielen Jahresende und Kenntnis eine Rolle?',
        paragraphs: [
          'Bei der regelmäßigen Frist wird nicht vom einzelnen Rechnungsdatum an gerechnet, sondern grundsätzlich ab dem Ende des maßgeblichen Kalenderjahres. Das kann dazu führen, dass eine Rechnung aus dem Laufe eines Jahres erst zum Jahresende in die regelmäßige Verjährungsfrist eintritt.',
          'Daneben kommt es auf die Kenntnis des Gläubigers an. Fehlt sie ohne grobe Fahrlässigkeit, kann der Fristbeginn später liegen. Diese Prüfung ist bei unklaren Beteiligten oder verdeckten Umständen besonders einzelfallabhängig.',
        ],
      },
      {
        heading: 'Was bedeutet Hemmung der Verjährung?',
        paragraphs: [
          [
            'Bei einer ',
            { type: 'glossary', id: 'hemmung-der-verjaehrung', text: 'Hemmung der Verjährung' },
            ' läuft die Frist für eine bestimmte Zeit nicht weiter. Nach dem Ende der Hemmung wird die noch verbleibende Frist grundsätzlich weitergerechnet.',
          ],
          'Eine Hemmung kann zum Beispiel bei ernsthaften Verhandlungen über den Anspruch eintreten. Auch bestimmte Schritte der Rechtsverfolgung, etwa eine Klage oder die Zustellung eines Mahnbescheids, können unter den gesetzlichen Voraussetzungen hemmen.',
        ],
      },
      {
        heading: 'Was kann einen Neubeginn auslösen?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'neubeginn-der-verjaehrung', text: 'Neubeginn der Verjährung' },
            ' beginnt die Verjährungsfrist erneut. Das ist etwas anderes als eine Hemmung, bei der die bisherige Restfrist nach dem Ende weiterläuft.',
          ],
          'Ein Neubeginn kann zum Beispiel durch ein Anerkenntnis des Schuldners ausgelöst werden, etwa durch Abschlagszahlung, Zinszahlung, Sicherheitsleistung oder eine andere Anerkennung. Auch bestimmte gerichtliche oder behördliche Vollstreckungshandlungen können einen Neubeginn bewirken.',
        ],
      },
      {
        heading: 'Mahnbescheid, Klage und normale Mahnung',
        paragraphs: [
          'Die Erhebung einer Klage und die Zustellung eines Mahnbescheids gehören zu den gesetzlich geregelten Maßnahmen, die die Verjährung unter Voraussetzungen hemmen können. Bei einer Zustellung kurz vor Fristablauf kann es darauf ankommen, dass sie demnächst erfolgt.',
          'Eine normale außergerichtliche Mahnung hemmt die Verjährung grundsätzlich nicht allein. Sie kann zwar sinnvoll sein, um eine Zahlung einzufordern oder den Vorgang zu dokumentieren, ersetzt aber keine rechtzeitige Prüfung möglicher Hemmungsgründe.',
        ],
      },
      {
        heading: 'Titulierte Forderungen',
        paragraphs: [
          'Rechtskräftig festgestellte Ansprüche, etwa nach einem rechtskräftigen Vollstreckungsbescheid, verjähren grundsätzlich in 30 Jahren. Für künftig fällig werdende regelmäßig wiederkehrende Leistungen gelten jedoch Ausnahmen.',
          'Ein Titel ersetzt nicht die Prüfung, welche konkreten Forderungsbestandteile noch offen sind. Behalte daher Hauptforderung, Zinsen, Kosten, Zahlungen und mögliche Besonderheiten getrennt im Blick.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verlasse dich nicht allein auf das Rechnungsdatum oder eine versendete Mahnung. Prüfe Fristbeginn, Jahresende, Kenntnis, Verhandlungen, gerichtliche Schritte und Zahlungen. Bei einer kurz bevorstehenden Verjährung oder einem unklaren Anspruch ist fachliche Beratung besonders wichtig.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine verjährte Forderung erlischt nicht automatisch, kann aber bei Einrede nicht mehr durchgesetzt werden',
    'Für viele Forderungen gilt grundsätzlich eine regelmäßige Verjährungsfrist von drei Jahren',
    'Die regelmäßige Frist beginnt grundsätzlich mit dem Schluss des maßgeblichen Jahres',
    'Rechnungsdatum, Anspruchsentstehung und Fristbeginn sind nicht immer identisch',
    'Hemmung hält den Ablauf an, Neubeginn lässt die Frist erneut beginnen',
    'Klage und Mahnbescheid können die Verjährung unter gesetzlichen Voraussetzungen hemmen',
    'Eine normale Mahnung hemmt die Verjährung grundsätzlich nicht allein',
    'Rechtskräftig festgestellte Ansprüche verjähren grundsätzlich in 30 Jahren',
  ],
  commonMistakes: [
    'das Rechnungsdatum automatisch als Fristbeginn behandeln',
    'den Fristbeginn zum Jahresende nicht berücksichtigen',
    'Hemmung und Neubeginn gleichsetzen',
    'eine normale Mahnung als ausreichenden Stopp der Verjährung ansehen',
    'einen Mahnbescheid oder eine Klage zu spät einleiten',
    'Teilzahlungen oder Anerkenntnisse nicht auf ihre Wirkung prüfen',
    'bei titulierten Forderungen alle Bestandteile pauschal gleich behandeln',
  ],
  faqs: [
    { question: 'Was passiert nach Eintritt der Verjährung?', answer: 'Die Forderung erlischt nicht automatisch. Der Schuldner kann die Leistung aber verweigern, wenn er sich auf die Verjährung beruft.' },
    { question: 'Wie lang ist die regelmäßige Verjährungsfrist?', answer: 'Für viele Ansprüche beträgt sie grundsätzlich drei Jahre. Es gibt aber besondere Fristen für einzelne Anspruchsarten.' },
    { question: 'Beginnt die Verjährung mit dem Rechnungsdatum?', answer: 'Nicht automatisch. Bei der regelmäßigen Verjährung sind vor allem Anspruchsentstehung, Kenntnis und der Schluss des maßgeblichen Jahres wichtig.' },
    { question: 'Hemmt eine Mahnung die Verjährung?', answer: 'Eine normale außergerichtliche Mahnung hemmt die Verjährung grundsätzlich nicht allein. Entscheidend sind gesetzlich geregelte Hemmungsgründe.' },
    { question: 'Was ist der Unterschied zwischen Hemmung und Neubeginn?', answer: 'Bei einer Hemmung läuft die Restfrist vorübergehend nicht weiter. Beim Neubeginn beginnt die Verjährungsfrist erneut.' },
    { question: 'Wie lange gelten titulierte Forderungen?', answer: 'Rechtskräftig festgestellte Ansprüche verjähren grundsätzlich in 30 Jahren. Für einzelne Bestandteile und wiederkehrende Leistungen können Ausnahmen gelten.' },
  ],
  related: ['mahnwesen', 'zahlungsverzug', 'gerichtliches-mahnverfahren', 'mahnbescheid', 'vollstreckungsbescheid'],
  sources: [
    { label: '§ 194 BGB – Gegenstand der Verjährung', url: 'https://www.gesetze-im-internet.de/bgb/__194.html' },
    { label: '§ 195 BGB – Regelmäßige Verjährungsfrist', url: 'https://www.gesetze-im-internet.de/bgb/__195.html' },
    { label: '§ 197 BGB – Dreißigjährige Verjährungsfrist', url: 'https://www.gesetze-im-internet.de/bgb/__197.html' },
    { label: '§ 199 BGB – Beginn der regelmäßigen Verjährungsfrist', url: 'https://www.gesetze-im-internet.de/bgb/__199.html' },
    { label: '§ 203 BGB – Hemmung der Verjährung bei Verhandlungen', url: 'https://www.gesetze-im-internet.de/bgb/__203.html' },
    { label: '§ 204 BGB – Hemmung der Verjährung durch Rechtsverfolgung', url: 'https://www.gesetze-im-internet.de/bgb/__204.html' },
    { label: '§ 209 BGB – Wirkung der Hemmung', url: 'https://www.gesetze-im-internet.de/bgb/__209.html' },
    { label: '§ 212 BGB – Neubeginn der Verjährung', url: 'https://www.gesetze-im-internet.de/bgb/__212.html' },
    { label: '§ 214 BGB – Wirkung der Verjährung', url: 'https://www.gesetze-im-internet.de/bgb/__214.html' },
    { label: '§ 167 ZPO – Rückwirkung der Zustellung', url: 'https://www.gesetze-im-internet.de/zpo/__167.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default verjaehrungVonForderungen;
