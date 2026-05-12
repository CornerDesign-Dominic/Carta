import { defaultDisclaimer } from '../shared.js';

const zahlungserinnerung = {
    slug: 'zahlungserinnerung',
    category: 'Mahnwesen',
    title: 'Zahlungserinnerung',
    description: 'Eine Zahlungserinnerung weist freundlich auf eine noch offene Rechnung hin.',
    intro:
      'Eine Zahlungserinnerung ist ein sachlicher Hinweis, dass eine Rechnung noch nicht bezahlt wurde. Sie ist meist freundlich formuliert und wird oft vor einer formellen Mahnung versendet.',
    keyPoints: [
      'Bezug zur offenen Rechnung',
      'Rechnungsnummer und Rechnungsdatum',
      'offener Betrag',
      'urspruengliches Zahlungsziel',
      'neue Bitte um Zahlung',
      'Bankverbindung oder Zahlungsweg',
    ],
    typicalUse:
      'Eine Zahlungserinnerung wird genutzt, wenn ein Zahlungsziel verstrichen ist oder kurz davor steht und der Kunde an die offene Zahlung erinnert werden soll.',
    commonMistakes: [
      'zu scharfer Ton beim ersten Hinweis',
      'fehlende Rechnungsdaten',
      'kein klarer offener Betrag',
      'fehlende Zahlungsinformationen',
    ],
    faqs: [
      {
        question: 'Wann schickt man eine Zahlungserinnerung?',
        answer:
          'Eine Zahlungserinnerung wird meist verschickt, wenn eine Rechnung faellig ist und noch keine Zahlung eingegangen ist.',
      },
      {
        question: 'Ist eine Zahlungserinnerung schon eine Mahnung?',
        answer:
          'Sie kann wie eine Mahnung wirken, ist aber oft bewusst freundlicher formuliert. In der Praxis dient sie haeufig als erster Schritt im Mahnwesen.',
      },
      {
        question: 'Was sollte in einer Zahlungserinnerung stehen?',
        answer:
          'Sie sollte die offene Rechnung, den Betrag, das Zahlungsziel und eine klare Bitte um Zahlung enthalten.',
      },
    ],
    related: ['rechnung', 'erste-mahnung', 'zweite-mahnung'],
    disclaimer: defaultDisclaimer,
  };

export default zahlungserinnerung;
