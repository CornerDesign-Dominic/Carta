import { defaultDisclaimer } from '../shared.js';

const gutschrift = {
    slug: 'gutschrift',
    category: 'Belege',
    title: 'Gutschrift',
    description: 'Eine Gutschrift korrigiert oder verrechnet Betraege zugunsten eines Kunden oder Geschaeftspartners.',
    intro:
      'Eine Gutschrift wird genutzt, wenn ein Betrag gutgeschrieben, korrigiert oder verrechnet werden soll. Sie kann zum Beispiel bei Ruecksendungen, Preisnachlaessen oder Rechnungskorrekturen eingesetzt werden.',
    keyPoints: [
      'Name und Anschrift der beteiligten Parteien',
      'Gutschriftsdatum',
      'Gutschriftsnummer',
      'Bezug zur urspruenglichen Rechnung oder Lieferung',
      'Grund der Gutschrift',
      'Betrag, Steuer und Gesamtsumme',
      'klare Verrechnung oder Auszahlung',
    ],
    typicalUse:
      'Eine Gutschrift wird haeufig erstellt, wenn eine Rechnung teilweise oder vollstaendig korrigiert werden muss, Ware zurueckgegeben wurde oder ein Preisnachlass nachtraeglich gewaehrt wird.',
    commonMistakes: [
      'kein Bezug zur urspruenglichen Rechnung',
      'unklarer Grund der Gutschrift',
      'falsche Steuerangaben',
      'Verwechslung von Gutschrift und Stornorechnung',
    ],
    faqs: [
      {
        question: 'Wann wird eine Gutschrift erstellt?',
        answer:
          'Eine Gutschrift wird erstellt, wenn ein Kunde oder Geschaeftspartner einen Betrag gutgeschrieben bekommt, etwa wegen Rueckgabe, Korrektur oder Preisnachlass.',
      },
      {
        question: 'Was muss in einer Gutschrift stehen?',
        answer:
          'Wichtig sind die beteiligten Parteien, Datum, Nummer, Bezug zur urspruenglichen Rechnung, Grund der Gutschrift und der gutgeschriebene Betrag.',
      },
      {
        question: 'Ist eine Gutschrift dasselbe wie eine Rechnung?',
        answer:
          'Nein. Eine Rechnung fordert eine Zahlung an. Eine Gutschrift reduziert, korrigiert oder verrechnet einen Betrag.',
      },
    ],
    related: ['rechnung', 'angebot', 'lieferschein'],
    disclaimer: defaultDisclaimer,
  };

export default gutschrift;
