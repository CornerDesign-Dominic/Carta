import { defaultDisclaimer } from '../shared.js';

const kg = {
  slug: 'kg',
  category: 'Rechtsformen',
  title: 'KG – Kommanditgesellschaft',
  description: 'KG einfach erklärt: Komplementär, Kommanditist, Haftsumme, Einlagen, Handelsregister, Steuern und Unterschiede zu OHG und GmbH & Co. KG.',
  seo: {
    title: 'KG einfach erklärt | Belege24',
    description: 'Erfahre, wie eine KG funktioniert, wie sich Komplementär und Kommanditist unterscheiden und was bei Haftung, Einlagen, Buchführung und Steuern wichtig ist.',
    canonicalPath: '/wissen/kg',
  },
  article: {
    intro: 'Eine KG ist eine Personengesellschaft mit unterschiedlichen Rollen: Mindestens ein Komplementär haftet persönlich und unbeschränkt, während die Haftung eines Kommanditisten nach den gesetzlichen Regeln auf seine Haftsumme begrenzt sein kann.',
    sections: [
      {
        heading: 'Was ist eine KG?',
        paragraphs: [
          'Die Kommanditgesellschaft (KG) ist eine Personengesellschaft des Handelsrechts. Sie ist darauf angelegt, ein Handelsgewerbe unter gemeinschaftlicher Firma zu betreiben.',
          'Kennzeichnend ist die Aufteilung der Gesellschafterrollen. Dadurch können aktive Unternehmensführung und Kapitalbeteiligung voneinander getrennt werden, ohne dass die Gesellschaft eine Kapitalgesellschaft sein muss.',
        ],
      },
      {
        heading: 'Gründung, Voraussetzungen und Mindestkapital',
        paragraphs: [
          'Eine KG braucht mindestens einen persönlich haftenden Gesellschafter und mindestens einen Kommanditisten. Das können natürliche Personen oder Gesellschaften sein. Ein gesetzliches Mindestkapital ist nicht vorgeschrieben.',
          'Der Gesellschaftsvertrag kann grundsätzlich formfrei geschlossen werden. Ein schriftlicher Vertrag ist dennoch besonders wichtig, weil Rollen, Einlagen, Gewinnverteilung, Vertretung und der Umgang mit Ausscheiden oder Konflikten klar geregelt werden sollten.',
        ],
      },
      {
        heading: 'Komplementär und Kommanditist',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'komplementaer', text: 'Komplementär' },
            ' ist persönlich haftender Gesellschafter. Der ',
            { type: 'glossary', id: 'kommanditist', text: 'Kommanditist' },
            ' beteiligt sich als beschränkt haftender Gesellschafter. Beide Rollen und ihre Rechte sollten im Vertrag eindeutig beschrieben sein.',
          ],
          'Eine Person kann nicht gleichzeitig als Komplementär und Kommanditist dieselbe Rolle erfüllen. In der Praxis kann der persönlich haftende Gesellschafter auch eine GmbH sein; dann spricht man von einer GmbH & Co. KG.',
        ],
      },
      {
        heading: 'Haftung: Haftsumme und Einlage richtig unterscheiden',
        paragraphs: [
          'Der Komplementär haftet für Verbindlichkeiten der KG grundsätzlich persönlich und unbeschränkt. Der Kommanditist haftet Gläubigern grundsätzlich bis zur im Handelsregister eingetragenen Haftsumme unmittelbar.',
          [
            'Die ',
            { type: 'glossary', id: 'haftsumme', text: 'Haftsumme' },
            ' ist nicht automatisch dasselbe wie die vereinbarte Einlage. Die Haftung des Kommanditisten ist grundsätzlich ausgeschlossen, soweit seine vereinbarte Einlage tatsächlich geleistet ist. Wird die Einlage zurückgezahlt, kann die Haftung gegenüber Gläubigern wieder aufleben.',
          ],
          'Für Verträge, Ausschüttungen und Entnahmen sollte deshalb immer geprüft werden, ob dadurch die Haftungsposition eines Kommanditisten betroffen sein kann. Eine bloße interne Vereinbarung schützt gegenüber Dritten nicht automatisch.',
        ],
      },
      {
        heading: 'Geschäftsführung und Vertretung',
        paragraphs: [
          'Grundsätzlich führen die Komplementäre die Geschäfte der KG und vertreten sie nach außen. Der Gesellschaftsvertrag kann Zuständigkeiten und Vertretungsregeln näher ausgestalten.',
          'Kommanditisten sind grundsätzlich von der Geschäftsführung ausgeschlossen und vertreten die KG als solche nicht. Sie können jedoch bei Handlungen außerhalb des gewöhnlichen Geschäftsbetriebs ein Widerspruchsrecht haben.',
        ],
      },
      {
        heading: 'Handelsregister, HRA und Gewerbeanmeldung',
        paragraphs: [
          [
            'Die KG ist beim Handelsregister anzumelden und wird in Abteilung A geführt. Die Eintragung enthält auch die Kommanditisten und ihre jeweilige ',
            { type: 'glossary', id: 'haftsumme', text: 'Haftsumme' },
            '. Die Gesellschaft erhält eine ',
            { type: 'glossary', id: 'hra', text: 'HRA-Nummer' },
            '.',
          ],
          'Die Handelsregistereintragung ersetzt nicht die Gewerbeanmeldung. Betreibt die KG ein Gewerbe, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Steuerliche Erfassung, Rechnungswesen und gegebenenfalls besondere Erlaubnisse müssen zusätzlich organisiert werden.',
        ],
      },
      {
        heading: 'Buchführung und Jahresabschluss',
        paragraphs: [
          'Eine KG unterliegt den handelsrechtlichen Pflichten eines Kaufmanns. Sie führt laufende Bücher und erstellt einen Jahresabschluss mit Bilanz und Gewinn- und Verlustrechnung.',
          'Die Buchführung bildet die Grundlage für Gewinn- und Verlustanteile, Einlagen und Entnahmen. Sie ist deshalb für die Vereinbarungen zwischen Komplementären und Kommanditisten besonders wichtig.',
        ],
      },
      {
        heading: 'Steuern: Einkommensteuer, Gewerbesteuer und Umsatzsteuer',
        paragraphs: [
          'Der Gewinn der KG wird steuerlich grundsätzlich den Gesellschaftern zugerechnet. Bei natürlichen Personen unterliegt der Gewinnanteil regelmäßig der Einkommensteuer. Welche steuerlichen Folgen bei anderen Gesellschaftern entstehen, hängt von deren eigener Rechtsform und Situation ab.',
          'Bei einem Gewerbebetrieb kann Gewerbesteuer anfallen. Umsatzsteuerlich kann die KG selbst Unternehmerin sein; Umsatzsteuer richtet sich nach ihren Umsätzen und den jeweils geltenden Regeln.',
        ],
      },
      {
        heading: 'Gewinnverteilung, Entnahmen und Einlagen',
        paragraphs: [
          'Die Gewinn- und Verlustverteilung sollte im Gesellschaftsvertrag geregelt werden. Fehlt eine Vereinbarung, gelten die gesetzlichen Vorschriften. Die Beteiligung am Gewinn muss nicht mit der Höhe der Einlage oder Haftsumme übereinstimmen.',
          'Entnahmen sind keine Betriebsausgaben. Bei Kommanditisten ist besonders wichtig, dass Auszahlungen und Rückzahlungen von Einlagen die gesetzliche Haftungsposition beeinflussen können. Plane Entnahmen deshalb immer zusammen mit Liquidität, Steuern und dem Gesellschaftsvertrag.',
        ],
      },
      {
        heading: 'Unterschied zur OHG und zur GmbH & Co. KG',
        paragraphs: [
          'In der OHG haften grundsätzlich alle Gesellschafter persönlich und unbeschränkt. In der KG übernimmt diese Rolle mindestens ein Komplementär, während Kommanditisten nach den gesetzlichen Regeln beschränkt haften können.',
          'Bei der GmbH & Co. KG ist typischerweise eine GmbH der Komplementär. Dadurch liegt die persönliche Haftung auf Ebene der GmbH, während die KG eine Personengesellschaft bleibt. Das erhöht aber den Gründungs- und Verwaltungsaufwand.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Eine KG kann passend sein, wenn sich aktive Unternehmensführung und reine Kapitalbeteiligung trennen sollen. Sie braucht kein gesetzliches Mindestkapital und erlaubt eine flexible Gestaltung von Einlagen, Gewinnanteilen und Mitwirkungsrechten.',
          'Dem stehen die persönliche Haftung der Komplementäre, kaufmännische Buchführung und ein höherer Abstimmungsaufwand gegenüber. Sie ist weniger passend, wenn niemand die Rolle des persönlich haftenden Gesellschafters übernehmen möchte.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Die Haftung des Kommanditisten ist nicht pauschal auf jede Zahlung an die KG beschränkt. Haftsumme, vereinbarte Einlage, tatsächliche Leistung und mögliche Rückzahlungen müssen auseinandergehalten werden.',
          'Eine KG ist außerdem nicht automatisch eine GmbH & Co. KG. Erst wenn eine GmbH die Rolle des Komplementärs übernimmt, liegt diese besondere Struktur vor.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine KG hat mindestens einen Komplementär und einen Kommanditisten',
    'Ein gesetzliches Mindestkapital ist nicht vorgeschrieben',
    'Komplementäre haften grundsätzlich persönlich und unbeschränkt',
    'Kommanditisten haften gegenüber Gläubigern grundsätzlich bis zur eingetragenen Haftsumme',
    'Haftsumme und vereinbarte Einlage sind unterschiedliche Begriffe',
    'Komplementäre führen und vertreten die KG grundsätzlich; Kommanditisten nicht',
    'Die KG wird im Handelsregister Abteilung A eingetragen und ist buchführungspflichtig',
  ],
  commonMistakes: [
    'Haftsumme und vereinbarte Einlage gleichsetzen',
    'eine geleistete Einlage und eine haftungsneutrale Auszahlung gleich behandeln',
    'Kommanditisten automatisch zur Geschäftsführung oder Vertretung berechtigt ansehen',
    'KG und GmbH & Co. KG gleichsetzen',
    'Handelsregister, Gewerbeanmeldung und steuerliche Erfassung als denselben Schritt behandeln',
    'Entnahmen ohne Blick auf Vertrag, Liquidität und Haftungsfolgen planen',
  ],
  faqs: [
    {
      question: 'Was ist eine KG einfach erklärt?',
      answer: 'Eine KG ist eine Personengesellschaft mit mindestens einem persönlich haftenden Komplementär und mindestens einem beschränkt haftenden Kommanditisten.',
    },
    {
      question: 'Wie haften Komplementär und Kommanditist?',
      answer: 'Der Komplementär haftet grundsätzlich persönlich und unbeschränkt. Der Kommanditist haftet Gläubigern grundsätzlich bis zur eingetragenen Haftsumme; die geleistete Einlage beeinflusst den Umfang dieser Haftung.',
    },
    {
      question: 'Was ist die Haftsumme?',
      answer: 'Die Haftsumme ist der im Handelsregister eingetragene Betrag, bis zu dem ein Kommanditist gegenüber Gläubigern grundsätzlich haftet. Sie ist nicht automatisch identisch mit der vereinbarten Einlage.',
    },
    {
      question: 'Führt ein Kommanditist die Geschäfte der KG?',
      answer: 'Grundsätzlich nicht. Kommanditisten sind von der Geschäftsführung ausgeschlossen und vertreten die KG als solche nicht.',
    },
    {
      question: 'Braucht eine KG Mindestkapital?',
      answer: 'Nein. Für eine KG ist kein gesetzliches Mindestkapital vorgeschrieben. Die Beteiligten sollten ihre Einlagen und die Finanzierung im Gesellschaftsvertrag klar planen.',
    },
    {
      question: 'Was ist der Unterschied zwischen KG und OHG?',
      answer: 'In der OHG haften grundsätzlich alle Gesellschafter persönlich. In der KG gibt es zusätzlich Kommanditisten, deren Haftung nach den gesetzlichen Regeln begrenzt sein kann.',
    },
    {
      question: 'Was ist eine GmbH & Co. KG?',
      answer: 'Bei einer GmbH & Co. KG ist typischerweise eine GmbH der persönlich haftende Komplementär. Die KG bleibt eine Personengesellschaft, die Haftungsstruktur verändert sich aber.',
    },
  ],
  related: [
    'rechtsformen',
    'ohg',
    'einkommensteuer',
    'gewerbesteuer',
    'umsatzsteuer',
  ],
  sources: [
    { label: '§ 161 HGB – Begriff der KG', url: 'https://www.gesetze-im-internet.de/hgb/__161.html' },
    { label: '§ 162 HGB – Anmeldung der KG zum Handelsregister', url: 'https://www.gesetze-im-internet.de/hgb/__162.html' },
    { label: '§ 164 HGB – Geschäftsführungsbefugnis des Kommanditisten', url: 'https://www.gesetze-im-internet.de/hgb/__164.html' },
    { label: '§ 170 HGB – Vertretung der KG', url: 'https://www.gesetze-im-internet.de/hgb/__170.html' },
    { label: '§ 171 HGB – Haftung des Kommanditisten', url: 'https://www.gesetze-im-internet.de/hgb/__171.html' },
    { label: '§ 172 HGB – Haftsumme und Einlage', url: 'https://www.gesetze-im-internet.de/hgb/__172.html' },
    { label: '§ 3 HRV – Handelsregister Abteilung A', url: 'https://www.gesetze-im-internet.de/hdlregvfg/__3.html' },
    { label: '§ 120 HGB – Ermittlung von Gewinn- und Verlustanteilen', url: 'https://www.gesetze-im-internet.de/hgb/__120.html' },
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 242 HGB – Pflicht zur Aufstellung von Jahresabschluss und Bilanz', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 14 GewO – Anzeige eines Gewerbes', url: 'https://www.gesetze-im-internet.de/gewo/__14.html' },
    { label: '§ 4 EStG – Gewinnermittlung und Betriebsausgaben', url: 'https://www.gesetze-im-internet.de/estg/__4.html' },
    { label: '§ 15 EStG – Einkünfte aus Gewerbebetrieb', url: 'https://www.gesetze-im-internet.de/estg/__15.html' },
    { label: '§ 2 GewStG – Steuergegenstand der Gewerbesteuer', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
    { label: '§ 2 UStG – Unternehmer und Unternehmen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__2.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kg;
