import { defaultDisclaimer } from '../shared.js';

const kleinunternehmerregelung = {
  slug: 'kleinunternehmerregelung',
  category: 'Steuern',
  title: 'Kleinunternehmerregelung',
  description: 'Kleinunternehmerregelung einfach erklärt: aktuelle Umsatzgrenzen, Rechnungen, Vorsteuerabzug, Neugründung und Wechsel zur Regelbesteuerung.',
  seo: {
    title: 'Kleinunternehmerregelung 2026 erklärt | Belege24',
    description: 'Erfahre, wann die Kleinunternehmerregelung gilt, welche Umsatzgrenzen seit 2025 gelten und was du bei Rechnung und Vorsteuer beachten musst.',
    canonicalPath: '/wissen/kleinunternehmerregelung',
  },
  article: {
    intro: 'Die Kleinunternehmerregelung ist eine Umsatzsteuerbefreiung für kleinere Unternehmen. Wenn die gesetzlichen Voraussetzungen erfüllt sind, berechnest du auf deine betroffenen Umsätze keine Umsatzsteuer – kannst im Gegenzug aber grundsätzlich keine Vorsteuer abziehen.',
    sections: [
      {
        heading: 'Was ist die Kleinunternehmerregelung?',
        paragraphs: [
          'Die Kleinunternehmerregelung nach § 19 UStG befreit bestimmte Umsätze von der Umsatzsteuer. Sie ist eine umsatzsteuerliche Regelung und sagt nichts über deine Rechtsform, deine Gewerbeanmeldung oder andere Steuerarten aus.',
          [
            'Als ',
            { type: 'glossary', id: 'kleinunternehmer', text: 'Kleinunternehmer' },
            ' führst du für die steuerfreien Umsätze keine Umsatzsteuer an das Finanzamt ab. Die Regelung kann für Selbstständige, Freiberufler und Gewerbetreibende grundsätzlich in Betracht kommen, wenn die Voraussetzungen erfüllt sind.',
          ],
        ],
      },
      {
        heading: 'Welche Umsatzgrenzen gelten aktuell?',
        paragraphs: [
          'Seit 2025 gilt die Kleinunternehmerregelung, wenn dein Gesamtumsatz im vorangegangenen Kalenderjahr höchstens 25.000 Euro betragen hat und im laufenden Kalenderjahr 100.000 Euro nicht übersteigt.',
          'Der Gesamtumsatz ist nicht dein Gewinn. Für die Regelung gelten die gesetzlichen Vorgaben zur Ermittlung; bestimmte steuerfreie Umsätze und Verkäufe von Anlagevermögen bleiben dabei außer Ansatz. Bei Besonderheiten sollte die Einordnung fachlich geprüft werden.',
        ],
      },
      {
        heading: 'Vorjahr und laufendes Jahr richtig unterscheiden',
        paragraphs: [
          'Für den Start in ein Kalenderjahr ist zuerst der tatsächliche Gesamtumsatz des Vorjahres entscheidend. Lag er über 25.000 Euro, ist die Kleinunternehmerregelung im laufenden Jahr nicht anwendbar – auch wenn der laufende Umsatz niedriger ausfällt.',
          'Lag der Vorjahresumsatz innerhalb der Grenze, bleiben deine Umsätze im laufenden Jahr steuerfrei, solange der Gesamtumsatz 100.000 Euro nicht überschreitet. Bereits der Umsatz, mit dem du diese Grenze überschreitest, ist nicht mehr steuerfrei und unterliegt der Regelbesteuerung.',
        ],
      },
      {
        heading: 'Was gilt bei einer Neugründung?',
        paragraphs: [
          'Nimmst du deine unternehmerische Tätigkeit erst im Laufe eines Kalenderjahres auf, gibt es noch keinen Vorjahresumsatz. Im Gründungsjahr sind die Umsätze bis 25.000 Euro steuerfrei.',
          'Bereits der Umsatz, mit dem du diese Grenze im Gründungsjahr überschreitest, unterliegt der Regelbesteuerung. Die 100.000-Euro-Grenze gilt für die Prüfung im ersten Tätigkeitsjahr daher nicht anstelle der 25.000-Euro-Grenze.',
        ],
      },
      {
        heading: 'Rechnung ohne Umsatzsteuer',
        paragraphs: [
          'Für Umsätze unter der Kleinunternehmerregelung weist du keine Umsatzsteuer gesondert aus und rechnest nicht mit einem Umsatzsteuersatz. Netto und Brutto sind auf der Rechnung daher gleich hoch.',
          'Die Rechnung braucht einen Hinweis auf die Steuerbefreiung. Eine klare Formulierung ist zum Beispiel: „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“ Das Gesetz schreibt keinen einzigen festen Wortlaut vor; der Hinweis muss die Steuerbefreiung nachvollziehbar machen.',
        ],
      },
      {
        heading: 'Kein Vorsteuerabzug',
        paragraphs: [
          [
            'Während du die Kleinunternehmerregelung anwendest, ist der ',
            { type: 'glossary', id: 'vorsteuerabzug', text: 'Vorsteuerabzug' },
            ' für die betreffenden Umsätze grundsätzlich ausgeschlossen. Die Umsatzsteuer aus betrieblichen Eingangsrechnungen kannst du dann nicht mit eigenen Umsatzsteuerbeträgen verrechnen.',
          ],
          'Das ist ein wichtiger Unterschied zur Regelbesteuerung. Vor allem bei größeren Anschaffungen kann es sinnvoll sein, die Auswirkungen vorher zu vergleichen; eine allgemeine Regel für die bessere Wahl gibt es nicht.',
        ],
      },
      {
        heading: 'Kleinunternehmer ist nicht Kleingewerbe',
        paragraphs: [
          '„Kleingewerbe“ ist keine umsatzsteuerliche Kategorie und keine Rechtsform. Der Begriff wird im Alltag oft für kleinere gewerbliche Tätigkeiten verwendet.',
          'Die Kleinunternehmerregelung betrifft dagegen nur die Umsatzsteuer. Ein Kleingewerbe kann regelbesteuert sein, und eine freiberufliche Tätigkeit kann die Kleinunternehmerregelung anwenden, wenn die Voraussetzungen erfüllt sind.',
        ],
      },
      {
        heading: 'Kannst du auf die Regelung verzichten?',
        paragraphs: [
          [
            'Du kannst gegenüber dem Finanzamt auf die Anwendung der Kleinunternehmerregelung verzichten und zur ',
            { type: 'glossary', id: 'regelbesteuerung', text: 'Regelbesteuerung' },
            ' wechseln. Der Verzicht wirkt ab Beginn des gewählten Besteuerungszeitraums und bindet dich mindestens fünf Kalenderjahre.',
          ],
          'Er sollte deshalb nicht vorschnell erklärt werden. Prüfe vorab, ob Umsatzsteuer auf deinen Rechnungen, zusätzlicher Verwaltungsaufwand und ein möglicher Vorsteuerabzug zu deinem Geschäftsmodell passen.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwende nicht die früheren Umsatzgrenzen von 22.000 Euro und 50.000 Euro. Prüfe außerdem bei jeder Rechnung, ob du Umsatzsteuer wirklich gesondert ausweisen darfst, und behalte die Umsatzgrenzen während des Jahres im Blick.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Kleinunternehmerregelung ist eine Umsatzsteuerbefreiung, keine Rechtsform',
    'Seit 2025 gelten 25.000 Euro Gesamtumsatz im Vorjahr und 100.000 Euro im laufenden Jahr',
    'Im Gründungsjahr sind Umsätze bis 25.000 Euro steuerfrei',
    'Bereits der grenzüberschreitende Umsatz ist nicht mehr steuerfrei',
    'Kleinunternehmer weisen auf den betroffenen Rechnungen keine Umsatzsteuer aus',
    'Die Rechnung braucht einen Hinweis auf die Steuerbefreiung nach § 19 UStG',
    'Für die betreffenden Umsätze ist ein Vorsteuerabzug grundsätzlich ausgeschlossen',
    'Ein Verzicht auf die Regelung bindet mindestens fünf Kalenderjahre',
  ],
  commonMistakes: [
    'veraltete Umsatzgrenzen von vor 2025 verwenden',
    'Umsatz und Gewinn miteinander verwechseln',
    'bei Überschreiten der Grenze erst den nächsten Umsatz als steuerpflichtig behandeln',
    'im Gründungsjahr die 100.000-Euro-Grenze statt der 25.000-Euro-Grenze anwenden',
    'Umsatzsteuer auf einer Kleinunternehmerrechnung ausweisen',
    'den Hinweis auf die Steuerbefreiung auf der Rechnung vergessen',
    'trotz Kleinunternehmerregelung Vorsteuer abziehen',
    'Kleinunternehmerregelung mit Kleingewerbe oder einer Rechtsform verwechseln',
  ],
  faqs: [
    { question: 'Was ist die Kleinunternehmerregelung?', answer: 'Sie ist eine Umsatzsteuerbefreiung für Unternehmer, deren Gesamtumsatz die gesetzlichen Grenzen nicht überschreitet. Für die betreffenden Umsätze wird keine Umsatzsteuer berechnet.' },
    { question: 'Welche Umsatzgrenzen gelten für Kleinunternehmer?', answer: 'Seit 2025 darf der Gesamtumsatz im Vorjahr höchstens 25.000 Euro und im laufenden Kalenderjahr höchstens 100.000 Euro betragen.' },
    { question: 'Was gilt für Kleinunternehmer im ersten Jahr?', answer: 'Bei einer Neugründung sind im Gründungsjahr Umsätze bis 25.000 Euro steuerfrei. Bereits der Umsatz, mit dem diese Grenze überschritten wird, unterliegt der Regelbesteuerung.' },
    { question: 'Dürfen Kleinunternehmer Umsatzsteuer auf Rechnungen ausweisen?', answer: 'Nein. Für Umsätze unter der Kleinunternehmerregelung darf keine Umsatzsteuer gesondert ausgewiesen werden. Die Rechnung braucht stattdessen einen Hinweis auf die Steuerbefreiung.' },
    { question: 'Können Kleinunternehmer Vorsteuer abziehen?', answer: 'Für die betreffenden Umsätze ist der Vorsteuerabzug grundsätzlich ausgeschlossen. Die Umsatzsteuer aus Eingangsrechnungen kann daher in der Regel nicht abgezogen werden.' },
    { question: 'Ist Kleinunternehmer dasselbe wie Kleingewerbe?', answer: 'Nein. Die Kleinunternehmerregelung betrifft nur die Umsatzsteuer. Kleingewerbe ist keine eigene umsatzsteuerliche Kategorie und keine Rechtsform.' },
    { question: 'Kann ich freiwillig zur Regelbesteuerung wechseln?', answer: 'Ja. Der Verzicht auf die Kleinunternehmerregelung ist gegenüber dem Finanzamt zu erklären und bindet mindestens fünf Kalenderjahre.' },
  ],
  related: ['steuern', 'umsatzsteuer', 'vorsteuer', 'rechnung'],
  sources: [
    { label: '§ 14 UStG – Ausstellung von Rechnungen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html' },
    { label: '§ 15 UStG – Vorsteuerabzug', url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html' },
    { label: '§ 19 UStG – Besteuerung der Kleinunternehmer', url: 'https://www.gesetze-im-internet.de/ustg_1980/__19.html' },
    { label: 'Bundesfinanzministerium – Neufassung der Kleinunternehmerregelung ab 2025', url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Umsatzsteuer/Umsatzsteuer-Anwendungserlass/2025-03-18-sonderregelung-kleinunternehmer.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kleinunternehmerregelung;
