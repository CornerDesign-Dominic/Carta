import { defaultDisclaimer } from '../shared.js';

const rechtsformen = {
  type: 'category-landing',
  slug: 'rechtsformen',
  category: 'Rechtsformen',
  title: 'Rechtsformen',
  description: 'Rechtsformen im Überblick: Haftung, Kapital, Besteuerung und Registereintragung von Einzelunternehmen, Personengesellschaften und Kapitalgesellschaften.',
  seo: {
    title: 'Rechtsformen einfach erklärt | Belege24',
    description: 'Überblick über wichtige Rechtsformen mit Haftung, Mindestkapital, Besteuerung und Registereintragung – verständlich und kompakt erklärt.',
    canonicalPath: '/wissen/rechtsformen',
  },
  article: {
    intro: 'Die Rechtsform legt wichtige Rahmenbedingungen eines Unternehmens fest, etwa Haftung, Besteuerung, Gründung und Organisation. Einzelunternehmen, Personengesellschaften und Kapitalgesellschaften unterscheiden sich dabei deutlich.',
    sections: [],
  },
  comparisonTable: {
    title: 'Rechtsformen im Vergleich',
    columns: ['Rechtsform', 'Haftung', 'Mindestkapital', 'Besteuerung', 'Register / Eintragung'],
    rows: [
      ['Einzelunternehmen', 'Inhaber persönlich und unbeschränkt', 'Keine gesetzliche Anforderung', 'Einkommensteuer; ggf. Gewerbesteuer', 'Kein Registerzwang'],
      ['e. K.', 'Inhaber persönlich und unbeschränkt', 'Keine gesetzliche Anforderung', 'Einkommensteuer und Gewerbesteuer', 'Handelsregister erforderlich'],
      ['GbR', 'Gesellschafter persönlich, grundsätzlich gesamtschuldnerisch', 'Keine gesetzliche Anforderung', 'Einkommensteuer bei Gesellschaftern; ggf. Gewerbesteuer', 'Gesellschaftsregister optional (eGbR)'],
      ['OHG', 'Gesellschafter persönlich und unbeschränkt', 'Keine gesetzliche Anforderung', 'Einkommensteuer bei Gesellschaftern und Gewerbesteuer', 'Handelsregister erforderlich'],
      ['KG', 'Komplementär persönlich und unbeschränkt; Kommanditist bis zur Haftsumme', 'Keine gesetzliche Anforderung', 'Einkommensteuer bei Gesellschaftern und Gewerbesteuer', 'Handelsregister erforderlich'],
      ['GmbH & Co. KG', 'GmbH als Komplementärin; Kommanditisten bis zur Haftsumme', 'GmbH: 25.000 €; KG selbst keine gesetzliche Anforderung', 'KG: Einkommensteuer bei Gesellschaftern und Gewerbesteuer; GmbH: Körperschaftsteuer', 'Handelsregister erforderlich'],
      ['GmbH', 'Grundsätzlich Gesellschaftsvermögen', '25.000 € Stammkapital', 'Körperschaftsteuer und Gewerbesteuer', 'Handelsregister erforderlich'],
      ['UG (haftungsbeschränkt)', 'Grundsätzlich Gesellschaftsvermögen', 'Ab 1 € Stammkapital, vollständig einzuzahlen', 'Körperschaftsteuer und Gewerbesteuer', 'Handelsregister erforderlich'],
      ['AG', 'Grundsätzlich Gesellschaftsvermögen', '50.000 € Grundkapital', 'Körperschaftsteuer und Gewerbesteuer', 'Handelsregister erforderlich'],
    ],
  },
  generator: null,
  keyPoints: [],
  commonMistakes: [],
  faqs: [],
  related: [],
  sources: [
    { label: '§ 707 BGB – Eintragung der GbR in das Gesellschaftsregister', url: 'https://www.gesetze-im-internet.de/bgb/__707.html' },
    { label: '§ 1 HGB – Kaufmann', url: 'https://www.gesetze-im-internet.de/hgb/__1.html' },
    { label: '§ 29 HGB – Handelsregisteranmeldung', url: 'https://www.gesetze-im-internet.de/hgb/__29.html' },
    { label: '§ 105 HGB – OHG', url: 'https://www.gesetze-im-internet.de/hgb/__105.html' },
    { label: '§ 128 HGB – Persönliche Haftung bei der OHG', url: 'https://www.gesetze-im-internet.de/hgb/__128.html' },
    { label: '§ 161 HGB – KG', url: 'https://www.gesetze-im-internet.de/hgb/__161.html' },
    { label: '§ 171 HGB – Haftung des Kommanditisten', url: 'https://www.gesetze-im-internet.de/hgb/__171.html' },
    { label: '§ 5 GmbHG – Stammkapital der GmbH', url: 'https://www.gesetze-im-internet.de/gmbhg/__5.html' },
    { label: '§ 5a GmbHG – Unternehmergesellschaft', url: 'https://www.gesetze-im-internet.de/gmbhg/__5a.html' },
    { label: '§ 13 GmbHG – Haftung der GmbH', url: 'https://www.gesetze-im-internet.de/gmbhg/__13.html' },
    { label: '§ 7 AktG – Mindestnennbetrag des Grundkapitals', url: 'https://www.gesetze-im-internet.de/aktg/__7.html' },
    { label: '§ 1 KStG – Steuerpflicht von Körperschaften', url: 'https://www.gesetze-im-internet.de/kstg_1977/__1.html' },
    { label: '§ 2 GewStG – Steuergegenstand der Gewerbesteuer', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default rechtsformen;
