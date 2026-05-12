import { defaultDisclaimer } from '../shared.js';

const ersteMahnung = {
    slug: 'erste-mahnung',
    category: 'Mahnwesen',
    title: '1. Mahnung',
    description: 'Die erste Mahnung erinnert sachlich an eine faellige offene Forderung.',
    intro:
      'Die 1. Mahnung ist ein formellerer Schritt nach einer offenen oder ueberfaelligen Rechnung. Sie benennt die Forderung klar und setzt meist eine neue Zahlungsfrist.',
    keyPoints: [
      'klare Bezugnahme auf Rechnung und Faelligkeit',
      'offener Rechnungsbetrag',
      'neue Zahlungsfrist',
      'sachlicher und bestimmter Ton',
      'Zahlungsinformationen',
      'Hinweis auf moegliche weitere Schritte',
    ],
    typicalUse:
      'Die erste Mahnung wird verwendet, wenn eine Rechnung trotz Faelligkeit nicht bezahlt wurde und eine freundliche Erinnerung nicht ausgereicht hat oder uebersprungen werden soll.',
    commonMistakes: [
      'fehlende neue Frist',
      'unvollstaendige Rechnungsdaten',
      'zu aggressiver Ton',
      'unklare Forderungshoehe',
    ],
    toolLink: '/dokumente',
    toolLabel: 'Mahnung erstellen',
    faqs: [
      {
        question: 'Wann ist eine erste Mahnung sinnvoll?',
        answer:
          'Sie ist sinnvoll, wenn eine Rechnung faellig ist und der Kunde trotz Zahlungsziel noch nicht bezahlt hat.',
      },
      {
        question: 'Welche Frist setzt man in einer ersten Mahnung?',
        answer:
          'Hauefig wird eine kurze, klare Zahlungsfrist gesetzt. Die passende Frist haengt vom Einzelfall und der bisherigen Kommunikation ab.',
      },
      {
        question: 'Wie sollte eine erste Mahnung klingen?',
        answer:
          'Sie sollte sachlich, bestimmt und nachvollziehbar sein. Ein ruhiger Ton hilft, die Geschaeftsbeziehung nicht unnoetig zu belasten.',
      },
    ],
    related: ['zahlungserinnerung', 'zweite-mahnung', 'letzte-mahnung', 'rechnung'],
    disclaimer: defaultDisclaimer,
  };

export default ersteMahnung;
