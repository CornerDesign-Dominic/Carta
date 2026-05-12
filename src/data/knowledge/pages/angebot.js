import { defaultDisclaimer } from '../shared.js';

const angebot = {
    slug: 'angebot',
    category: 'Belege',
    title: 'Angebot',
    description: 'Ein Angebot beschreibt Leistungen, Preise und Bedingungen, bevor ein Auftrag erteilt wird.',
    intro:
      'Ein Angebot ist ein geschaeftliches Dokument, mit dem ein Anbieter einem Kunden konkrete Leistungen, Produkte, Preise und Rahmenbedingungen vorschlaegt. Es hilft beiden Seiten, Umfang, Kosten und Bedingungen vor einem Auftrag klar zu verstehen.',
    keyPoints: [
      'Name und Anschrift von Anbieter und Kunde',
      'Angebotsdatum und Angebotsnummer',
      'Beschreibung der Leistung oder Lieferung',
      'Preise, Mengen und Gesamtsumme',
      'Umsatzsteuer oder Hinweis zur Kleinunternehmerregelung',
      'Gueltigkeitsdauer des Angebots',
      'Zahlungs- und Lieferbedingungen',
    ],
    typicalUse:
      'Ein Angebot wird genutzt, bevor ein Kunde eine Leistung beauftragt oder eine Ware bestellt. Es dient als Entscheidungsgrundlage und kann spaeter zur Auftragsbestaetigung oder Rechnung fuehren.',
    commonMistakes: [
      'unklare Leistungsbeschreibung',
      'fehlende Gueltigkeitsdauer',
      'nicht erkennbare Zusatzkosten',
      'fehlende Zahlungs- oder Lieferbedingungen',
      'Abweichungen zwischen Angebot und spaeterer Rechnung',
    ],
    toolLink: '/dokumente',
    toolLabel: 'Angebot erstellen',
    faqs: [
      {
        question: 'Was gehoert in ein Angebot?',
        answer:
          'Ein Angebot sollte klar zeigen, wer anbietet, wer der Kunde ist, welche Leistung oder Ware angeboten wird, welche Preise gelten und wie lange das Angebot gueltig ist.',
      },
      {
        question: 'Ist ein Angebot verbindlich?',
        answer:
          'Ein Angebot kann verbindlich sein, wenn es klar formuliert ist und keine Einschraenkungen enthaelt. Deshalb sollten Gueltigkeit, Bedingungen und Leistungsumfang eindeutig beschrieben werden.',
      },
      {
        question: 'Was ist der Unterschied zwischen Angebot und Rechnung?',
        answer:
          'Ein Angebot steht vor einem Auftrag und beschreibt moegliche Leistungen und Preise. Eine Rechnung wird nach einer Lieferung oder Leistung erstellt und fordert zur Zahlung auf.',
      },
    ],
    related: ['rechnung', 'lieferschein', 'gutschrift'],
    disclaimer: defaultDisclaimer,
  };

export default angebot;
