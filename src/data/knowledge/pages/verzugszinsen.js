import { defaultDisclaimer } from '../shared.js';

const verzugszinsen = {
  slug: 'verzugszinsen',
  category: 'Mahnwesen',
  title: 'Verzugszinsen',
  description: 'Verzugszinsen einfach erklärt: Voraussetzungen, gesetzliche Zinssätze, Basiszinssatz und praktische Berechnung.',
  seo: {
    title: 'Verzugszinsen berechnen und verstehen | Belege24',
    description: 'Wann Verzugszinsen entstehen, welche gesetzlichen Zinssätze gelten und wie du Verzugstage und Teilzahlungen praktisch berechnest.',
    canonicalPath: '/wissen/verzugszinsen',
  },
  article: {
    intro: 'Verzugszinsen können entstehen, wenn eine Geldforderung fällig ist und der Schuldner in Zahlungsverzug gerät. Sie sollen den Nachteil ausgleichen, der durch die verspätete Zahlung entsteht. Ob sie verlangt werden können und in welcher Höhe, hängt vom konkreten Fall ab.',
    sections: [
      {
        heading: 'Was sind Verzugszinsen?',
        paragraphs: [
          'Verzugszinsen sind Zinsen auf einen offenen Geldbetrag während des Zahlungsverzugs. Sie werden nicht für die gesamte Vertragslaufzeit berechnet, sondern erst für den Zeitraum, in dem die Zahlung verspätet und der Schuldner im Verzug ist.',
          'Sie sind von vertraglich vereinbarten normalen Zinsen zu unterscheiden. Solche Vertragszinsen können schon unabhängig vom Verzug geschuldet sein.',
        ],
      },
      {
        heading: 'Zahlungsverzug ist die Voraussetzung',
        paragraphs: [
          [
            'Eine fällige Rechnung führt nicht automatisch zu Verzugszinsen. Voraussetzung ist zusätzlich der ',
            { type: 'glossary', id: 'zahlungsverzug', text: 'Zahlungsverzug' },
            '. Häufig tritt er ein, wenn nach Fälligkeit gemahnt wird. Bei einem kalendermäßig bestimmten Zahlungstermin oder in weiteren gesetzlich geregelten Fällen kann eine Mahnung entbehrlich sein.',
          ],
          [
            'Die ',
            { type: 'glossary', id: 'faelligkeit', text: 'Fälligkeit' },
            ' bestimmt also, ab wann gezahlt werden muss. Verzug setzt darauf auf, verlangt aber weitere Voraussetzungen. Prüfe den Verzugsbeginn deshalb vor jeder Berechnung sorgfältig.',
          ],
        ],
      },
      {
        heading: 'Wie hoch sind gesetzliche Verzugszinsen?',
        paragraphs: [
          'Ist ein Verbraucher am Rechtsgeschäft beteiligt, beträgt der gesetzliche Verzugszinssatz grundsätzlich fünf Prozentpunkte über dem Basiszinssatz pro Jahr.',
          'Bei Entgeltforderungen aus Rechtsgeschäften, an denen kein Verbraucher beteiligt ist, beträgt er grundsätzlich neun Prozentpunkte über dem Basiszinssatz pro Jahr. Die Unterscheidung richtet sich nach dem konkreten Rechtsgeschäft, nicht allein nach der Bezeichnung einer Partei.',
        ],
      },
      {
        heading: 'Was ist der Basiszinssatz?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'basiszinssatz', text: 'Basiszinssatz' },
            ' ist die variable Grundlage für den gesetzlichen Verzugszinssatz. Er wird zum 1. Januar und zum 1. Juli eines Jahres angepasst. Deshalb kann sich der anzuwendende Verzugszinssatz innerhalb eines längeren Verzugszeitraums ändern.',
          ],
          [
            'Nutze für den jeweiligen Zeitraum die ',
            { type: 'link', href: '/basiszinssatz-tabelle', text: 'Basiszinssatz-Tabelle von Belege24' },
            '. Sie zeigt die verwendeten historischen Werte und die daraus abgeleiteten gesetzlichen Verzugszinssätze. Die Deutsche Bundesbank veröffentlicht den aktuellen Basiszinssatz offiziell.',
          ],
        ],
      },
      {
        heading: 'Wie werden Verzugszinsen berechnet?',
        paragraphs: [
          'Für eine überschlägige Berechnung wird der offene Betrag mit dem jährlichen Verzugszinssatz und den Verzugstagen verrechnet. Üblich ist diese Formel: offener Betrag × Zinssatz × Tage ÷ 365.',
          'Beginnt oder endet der Verzug in einem Zeitraum mit geändertem Basiszinssatz, solltest du die Berechnung in einzelne Zeitabschnitte aufteilen. Der Verzugszinsenrechner berücksichtigt die hinterlegte Basiszinssatz-Tabelle bei der gesetzlichen Berechnung.',
        ],
      },
      {
        heading: 'Verzugstage und Teilzahlungen',
        paragraphs: [
          'Entscheidend ist der Tag, an dem der Verzug tatsächlich beginnt, nicht nur das Rechnungs- oder Fälligkeitsdatum. Ob der erste oder letzte Tag in die Berechnung einfließt, kann von der gewählten Berechnungsmethode und dem Einzelfall abhängen. Halte deinen Ansatz nachvollziehbar fest.',
          'Teilzahlungen verringern den offenen Betrag ab dem Zeitpunkt ihrer Berücksichtigung. Teile den Zeitraum deshalb auf: Bis zur Teilzahlung berechnest du Zinsen auf den ursprünglichen Restbetrag, danach nur noch auf den verbleibenden Betrag.',
        ],
      },
      {
        heading: 'Mahnkosten und vertragliche Zinsen',
        paragraphs: [
          'Neben Verzugszinsen können unter den gesetzlichen Voraussetzungen weitere Verzugsschäden entstehen. Dazu können angemessene Mahnkosten gehören. Bei Entgeltforderungen zwischen Unternehmen sieht das Gesetz außerdem unter bestimmten Voraussetzungen eine Pauschale von 40 Euro vor.',
          'Ein Vertrag kann einen anderen Zinssatz vorsehen. Ob eine solche Vereinbarung wirksam ist und welcher Zinssatz im Einzelfall gilt, hängt unter anderem von Vertrag, AGB und beteiligten Parteien ab. Ohne individuelle Prüfung solltest du dich nicht allein auf einen vereinbarten Satz verlassen.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Setze Verzugszinsen nicht schon ab dem Rechnungsdatum an und verwende keine veralteten Basiszinssätze. Prüfe den Verzugsbeginn, den zutreffenden Aufschlag für Verbraucher oder B2B und jede Teilzahlung. Bei streitigen oder komplexen Forderungen ist fachliche Beratung sinnvoll.',
        ],
      },
    ],
  },
  generator: {
    label: 'Verzugszinsen berechnen',
    href: '/tools/verzugszinsenrechner',
    text: 'Berechne Verzugstage und gesetzliche Verzugszinsen für einen offenen Betrag direkt im Rechner.',
  },
  keyPoints: [
    'Verzugszinsen setzen eine Geldschuld im Zahlungsverzug voraus',
    'Fälligkeit allein genügt nicht automatisch für Verzug',
    'bei Verbraucherbeteiligung gelten grundsätzlich 5 Prozentpunkte über dem Basiszinssatz',
    'bei Entgeltforderungen ohne Verbraucherbeteiligung gelten grundsätzlich 9 Prozentpunkte über dem Basiszinssatz',
    'der Basiszinssatz wird jeweils zum 1. Januar und 1. Juli angepasst',
    'bei Teilzahlungen und Zinsänderungen sind Zeiträume getrennt zu berechnen',
    'Mahnkosten können neben Zinsen nur unter weiteren Voraussetzungen in Betracht kommen',
  ],
  commonMistakes: [
    'Fälligkeit mit Zahlungsverzug verwechseln',
    'den Verzugsbeginn ohne Prüfung ansetzen',
    'Verbraucher- und B2B-Zinssatz verwechseln',
    'einen veralteten Basiszinssatz verwenden',
    'Teilzahlungen nicht zeitlich berücksichtigen',
    'Mahnkosten oder die 40-Euro-Pauschale ohne Prüfung addieren',
    'vertraglich vereinbarte Zinsen ungeprüft übernehmen',
  ],
  faqs: [
    {
      question: 'Ab wann darf ich Verzugszinsen berechnen?',
      answer: 'Erst ab dem tatsächlichen Eintritt des Zahlungsverzugs. Die Fälligkeit ist dafür nötig, reicht allein aber nicht immer aus.',
    },
    {
      question: 'Wie hoch sind Verzugszinsen bei Verbrauchern?',
      answer: 'Bei Beteiligung eines Verbrauchers beträgt der gesetzliche Satz grundsätzlich fünf Prozentpunkte über dem jeweils geltenden Basiszinssatz pro Jahr.',
    },
    {
      question: 'Wie hoch sind Verzugszinsen zwischen Unternehmen?',
      answer: 'Bei Entgeltforderungen aus Rechtsgeschäften ohne Verbraucherbeteiligung beträgt der gesetzliche Satz grundsätzlich neun Prozentpunkte über dem jeweils geltenden Basiszinssatz pro Jahr.',
    },
    {
      question: 'Warum ändert sich der Verzugszinssatz?',
      answer: 'Der gesetzliche Satz enthält einen festen Aufschlag auf den Basiszinssatz. Da sich dieser zum 1. Januar und 1. Juli ändern kann, kann sich auch der Verzugszinssatz ändern.',
    },
    {
      question: 'Wie behandle ich eine Teilzahlung?',
      answer: 'Berechne die Zinsen bis zur Teilzahlung auf den bisherigen offenen Betrag und danach nur noch auf den verbleibenden Restbetrag. Halte Zahlungsdatum und Restbetrag fest.',
    },
    {
      question: 'Kann ich zusätzlich Mahnkosten verlangen?',
      answer: 'Das kann unter den gesetzlichen Voraussetzungen möglich sein. Die Kosten müssen zum Verzug passen und nachvollziehbar sein; bei B2B-Entgeltforderungen gibt es zudem eine gesetzliche 40-Euro-Pauschale unter den dafür geltenden Voraussetzungen.',
    },
  ],
  related: [
    'mahnwesen',
    'mahnverfahren',
    'faelligkeit',
    'rechnung',
  ],
  sources: [
    {
      label: '§ 247 BGB – Basiszinssatz',
      url: 'https://www.gesetze-im-internet.de/bgb/__247.html',
    },
    {
      label: '§ 280 BGB – Schadensersatz wegen Pflichtverletzung',
      url: 'https://www.gesetze-im-internet.de/bgb/__280.html',
    },
    {
      label: '§ 286 BGB – Verzug des Schuldners',
      url: 'https://www.gesetze-im-internet.de/bgb/__286.html',
    },
    {
      label: '§ 288 BGB – Verzugszinsen und sonstiger Verzugsschaden',
      url: 'https://www.gesetze-im-internet.de/bgb/__288.html',
    },
    {
      label: 'Deutsche Bundesbank – Basiszinssatz nach § 247 BGB',
      url: 'https://www.bundesbank.de/de/bundesbank/organisation/agb-und-regelungen/basiszinssatz-607820',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default verzugszinsen;
