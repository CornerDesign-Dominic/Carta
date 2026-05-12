import { defaultDisclaimer } from '../shared.js';

const lieferschein = {
    slug: 'lieferschein',
    category: 'Belege',
    title: 'Lieferschein',
    description: 'Ein Lieferschein dokumentiert, welche Waren geliefert wurden.',
    intro:
      'Ein Lieferschein begleitet eine Warenlieferung und zeigt, welche Artikel, Mengen oder Leistungen geliefert wurden. Er dient vor allem der Kontrolle beim Versand und beim Empfaenger.',
    keyPoints: [
      'Absender und Empfaenger',
      'Lieferdatum',
      'Lieferscheinnummer',
      'Beschreibung der gelieferten Waren',
      'Mengenangaben',
      'Bezug zu Angebot, Auftrag oder Rechnung',
      'Hinweise zu Teillieferungen oder Rueckstaenden',
    ],
    typicalUse:
      'Ein Lieferschein wird verwendet, wenn Waren verschickt oder persoenlich uebergeben werden. Der Empfaenger kann damit pruefen, ob die Lieferung vollstaendig angekommen ist.',
    commonMistakes: [
      'fehlende Mengenangaben',
      'kein Bezug zu Auftrag oder Rechnung',
      'unklare Artikelbeschreibung',
      'nicht vermerkte Teillieferungen',
    ],
    faqs: [
      {
        question: 'Wofuer brauche ich einen Lieferschein?',
        answer:
          'Ein Lieferschein hilft dabei, eine Lieferung nachvollziehbar zu dokumentieren und beim Empfaenger mit der tatsaechlich gelieferten Ware abzugleichen.',
      },
      {
        question: 'Muss ein Lieferschein Preise enthalten?',
        answer:
          'Ein Lieferschein enthaelt meist keine Preise. Preise stehen normalerweise im Angebot oder in der Rechnung.',
      },
      {
        question: 'Was ist der Unterschied zwischen Lieferschein und Rechnung?',
        answer:
          'Der Lieferschein dokumentiert die Lieferung. Die Rechnung rechnet die Lieferung oder Leistung ab und fordert zur Zahlung auf.',
      },
    ],
    related: ['rechnung', 'angebot', 'gutschrift'],
    disclaimer: defaultDisclaimer,
  };

export default lieferschein;
