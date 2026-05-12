import { defaultDisclaimer } from '../shared.js';

const letzteMahnung = {
    slug: 'letzte-mahnung',
    category: 'Mahnwesen',
    title: 'Letzte Mahnung',
    description: 'Die letzte Mahnung ist die abschliessende Zahlungsaufforderung vor weiteren Schritten.',
    intro:
      'Die letzte Mahnung wird genutzt, wenn vorherige Zahlungsaufforderungen erfolglos geblieben sind. Sie setzt meist eine letzte Frist und kuendigt weitere Schritte an.',
    keyPoints: [
      'klare Bezeichnung als letzte Mahnung',
      'vollstaendige Rechnungs- und Forderungsdaten',
      'letzte Zahlungsfrist',
      'deutlicher Hinweis auf weitere Schritte',
      'sachlicher Ton trotz Nachdruck',
      'Zahlungsinformationen',
    ],
    typicalUse:
      'Eine letzte Mahnung wird eingesetzt, bevor weitere Massnahmen wie Inkasso, Verzugszinsen oder ein gerichtliches Mahnverfahren geprueft werden.',
    commonMistakes: [
      'keine eindeutige letzte Frist',
      'uebertriebene Drohungen',
      'fehlende Forderungsaufstellung',
      'unvollstaendige Zahlungsdaten',
    ],
    toolLink: '/dokumente',
    toolLabel: 'Mahnung erstellen',
    faqs: [
      {
        question: 'Was bedeutet letzte Mahnung?',
        answer:
          'Sie ist die abschliessende Aufforderung zur Zahlung, bevor weitere Schritte eingeleitet oder geprueft werden.',
      },
      {
        question: 'Was sollte in einer letzten Mahnung stehen?',
        answer:
          'Wichtig sind Rechnungsbezug, offener Betrag, letzte Zahlungsfrist, Zahlungsinformationen und ein sachlicher Hinweis auf moegliche weitere Schritte.',
      },
      {
        question: 'Muss man vor weiteren Schritten immer mehrfach mahnen?',
        answer:
          'Das haengt vom Einzelfall ab. Deshalb ist bei unsicheren oder strittigen Forderungen fachliche Beratung sinnvoll.',
      },
    ],
    related: ['zweite-mahnung', 'erste-mahnung', 'zahlungserinnerung', 'rechnung'],
    disclaimer: defaultDisclaimer,
  };

export default letzteMahnung;
