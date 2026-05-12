import { defaultDisclaimer } from '../shared.js';

const zweiteMahnung = {
    slug: 'zweite-mahnung',
    category: 'Mahnwesen',
    title: '2. Mahnung',
    description: 'Die zweite Mahnung erhoeht den Nachdruck bei weiterhin offener Zahlung.',
    intro:
      'Die 2. Mahnung wird versendet, wenn nach einer vorherigen Erinnerung oder Mahnung weiterhin keine Zahlung eingegangen ist. Sie ist deutlicher formuliert und verweist meist auf moegliche Folgen.',
    keyPoints: [
      'Bezug auf vorherige Mahnung',
      'offener Betrag und Rechnungsdaten',
      'erneute Zahlungsfrist',
      'deutlichere Zahlungsaufforderung',
      'Hinweis auf weitere Schritte bei Nichtzahlung',
    ],
    typicalUse:
      'Die zweite Mahnung wird genutzt, wenn eine erste Mahnung erfolglos geblieben ist und der Kunde erneut zur Zahlung aufgefordert werden soll.',
    commonMistakes: [
      'kein Bezug zur vorherigen Mahnung',
      'unprofessioneller oder emotionaler Ton',
      'unklare Konsequenzen',
      'fehlende Zahlungsfrist',
    ],
    toolLink: '/dokumente',
    toolLabel: 'Mahnung erstellen',
    faqs: [
      {
        question: 'Wann verschickt man eine zweite Mahnung?',
        answer:
          'Eine zweite Mahnung wird meist verschickt, wenn die erste Mahnung ohne Zahlung geblieben ist und die gesetzte Frist abgelaufen ist.',
      },
      {
        question: 'Darf eine zweite Mahnung deutlicher sein?',
        answer:
          'Ja, sie kann bestimmter formuliert sein. Trotzdem sollte sie sachlich bleiben und alle Angaben nachvollziehbar darstellen.',
      },
      {
        question: 'Welche Folgen kann man ankündigen?',
        answer:
          'Je nach Fall koennen weitere Mahnschritte, Verzugszinsen oder ein gerichtliches Mahnverfahren angekuendigt werden.',
      },
    ],
    related: ['erste-mahnung', 'letzte-mahnung', 'zahlungserinnerung'],
    disclaimer: defaultDisclaimer,
  };

export default zweiteMahnung;
