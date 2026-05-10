export const knowledgeCategories = [
  {
    id: 'belege',
    title: 'Belege',
    description: 'Grundlagen zu Rechnungen, Angeboten, Lieferscheinen und weiteren kaufmaennischen Belegen.',
    pages: [
      { slug: 'rechnung', title: 'Rechnung' },
      { slug: 'angebot', title: 'Angebot' },
      { slug: 'lieferschein', title: 'Lieferschein' },
      { slug: 'gutschrift', title: 'Gutschrift' },
    ],
  },
  {
    id: 'mahnwesen',
    title: 'Mahnwesen',
    description: 'Wissen zu Zahlungserinnerungen, Mahnstufen, Verzug und offenen Forderungen.',
    pages: [
      { slug: 'zahlungserinnerung', title: 'Zahlungserinnerung' },
      { slug: 'erste-mahnung', title: '1. Mahnung' },
      { slug: 'zweite-mahnung', title: '2. Mahnung' },
      { slug: 'letzte-mahnung', title: 'Letzte Mahnung' },
    ],
  },
];

const defaultDisclaimer =
  'Diese Inhalte dienen der allgemeinen Orientierung und ersetzen keine rechtliche oder steuerliche Beratung.';

export const knowledgePages = {
  rechnung: {
    slug: 'rechnung',
    category: 'Belege',
    title: 'Rechnung',
    description: 'Eine Rechnung dokumentiert eine Lieferung oder Leistung und fordert den Empfaenger zur Zahlung auf.',
    intro:
      'Eine Rechnung ist ein geschaeftliches Dokument, mit dem eine erbrachte Leistung oder Lieferung abgerechnet wird. Sie enthaelt die wichtigsten Angaben zu Anbieter, Kunde, Leistung, Betrag, Umsatzsteuer und Zahlungsziel.',
    articleSections: [
      {
        heading: 'Was ist eine Rechnung?',
        paragraphs: [
          'Eine Rechnung dokumentiert, dass eine Ware geliefert oder eine Leistung erbracht wurde. Gleichzeitig fordert sie den Empfaenger dazu auf, den ausgewiesenen Betrag zu bezahlen.',
          'Im geschaeftlichen Alltag ist die Rechnung mehr als eine einfache Zahlungsaufforderung. Sie dient auch als Beleg fuer die Buchhaltung und hilft beiden Seiten, Leistung, Betrag und Zahlungsfrist nachvollziehbar festzuhalten.',
        ],
      },
      {
        heading: 'Pflichtangaben einer Rechnung',
        paragraphs: [
          'Damit eine Rechnung eindeutig zugeordnet und verarbeitet werden kann, sollten die wichtigsten Angaben vollstaendig und klar enthalten sein. Besonders wichtig sind Angaben zu den beteiligten Personen oder Unternehmen, zur Leistung, zum Betrag und zur Zahlung.',
        ],
        list: [
          'vollstaendiger Name und Anschrift von Anbieter und Kunde',
          'Rechnungsdatum',
          'fortlaufende Rechnungsnummer',
          'Leistungsdatum oder Leistungszeitraum',
          'Beschreibung der Leistung oder Lieferung',
          'Netto-Betrag, Umsatzsteuer und Brutto-Betrag',
          'Steuernummer oder USt-ID',
          'Zahlungsziel und Bankverbindung',
        ],
      },
      {
        heading: 'Wann wird eine Rechnung genutzt?',
        paragraphs: [
          'Eine Rechnung wird meist erstellt, nachdem eine Leistung erbracht oder eine Ware geliefert wurde. Sie zeigt dem Kunden, welcher Betrag fuer welche Leistung offen ist und bis wann gezahlt werden soll.',
          'Fuer Selbststaendige, kleine Unternehmen und Vereine ist eine klare Rechnung wichtig, damit Zahlungen nachvollziehbar bleiben und Unterlagen spaeter sauber abgelegt werden koennen.',
        ],
      },
      {
        heading: 'Typische Fehler bei Rechnungen',
        paragraphs: [
          'Viele Probleme entstehen nicht durch den Aufbau der Rechnung, sondern durch fehlende oder unklare Angaben. Eine doppelte Rechnungsnummer, ein fehlendes Leistungsdatum oder eine ungenaue Leistungsbeschreibung koennen Rueckfragen ausloesen und die Bearbeitung verzoegern.',
          'Auch Steuerangaben sollten sorgfaeltig geprueft werden. Wer die Kleinunternehmerregelung nutzt, sollte keine Umsatzsteuer ausweisen und stattdessen einen passenden Hinweis aufnehmen.',
        ],
      },
    ],
    keyPoints: [
      'vollstaendiger Name und Anschrift von Anbieter und Kunde',
      'Rechnungsdatum',
      'fortlaufende Rechnungsnummer',
      'Leistungsdatum oder Leistungszeitraum',
      'Beschreibung der Leistung oder Lieferung',
      'Netto-Betrag, Umsatzsteuer und Brutto-Betrag',
      'Steuernummer oder USt-ID',
      'Zahlungsziel und Bankverbindung',
    ],
    typicalUse:
      'Eine Rechnung wird meist erstellt, nachdem eine Leistung erbracht oder eine Ware geliefert wurde. Sie dient als Zahlungsaufforderung und als Beleg fuer die Buchhaltung.',
    commonMistakes: [
      'fehlende oder doppelte Rechnungsnummer',
      'fehlendes Leistungsdatum',
      'unklare Leistungsbeschreibung',
      'falscher Umsatzsteuersatz',
      'fehlende Angaben zur Kleinunternehmerregelung',
      'keine klare Zahlungsfrist',
    ],
    toolLink: '/dokumente/rechnung',
    toolLabel: 'Rechnung erstellen',
    ctaText:
      'Nutze unseren kostenlosen, werbefreien und unbegrenzten interaktiven Generator, um deine individuelle Rechnung schnell und einfach zu erstellen.',
    faqs: [
      {
        question: 'Was muss in eine Rechnung?',
        answer:
          'Eine Rechnung sollte alle wichtigen Angaben enthalten, damit sie eindeutig, nachvollziehbar und buchhalterisch nutzbar ist. Dazu gehoeren unter anderem Name und Anschrift von Anbieter und Kunde, Rechnungsdatum, Rechnungsnummer, Leistungsdatum, Beschreibung der Leistung, Betrag, Umsatzsteuer und Zahlungsinformationen.',
      },
      {
        question: 'Wann muss ich eine Rechnung schreiben?',
        answer:
          'Eine Rechnung wird in der Regel erstellt, wenn eine Lieferung oder Leistung gegenueber einem Kunden abgerechnet werden soll. Besonders im geschaeftlichen Bereich ist sie wichtig fuer Zahlung, Buchhaltung und Nachweis.',
      },
      {
        question: 'Was ist eine Rechnungsnummer?',
        answer:
          'Die Rechnungsnummer ist eine eindeutige Nummer, mit der eine Rechnung identifiziert werden kann. Sie sollte fortlaufend und nachvollziehbar vergeben werden.',
      },
      {
        question: 'Was ist das Leistungsdatum?',
        answer:
          'Das Leistungsdatum gibt an, wann eine Leistung erbracht oder eine Ware geliefert wurde. Es kann vom Rechnungsdatum abweichen.',
      },
      {
        question: 'Was ist ein Zahlungsziel?',
        answer:
          'Das Zahlungsziel gibt an, bis wann die Rechnung bezahlt werden soll. Haeufige Formulierungen sind zum Beispiel "zahlbar innerhalb von 14 Tagen" oder ein konkretes Faelligkeitsdatum.',
      },
      {
        question: 'Was ist eine Kleinunternehmerrechnung?',
        answer:
          'Bei einer Kleinunternehmerrechnung wird keine Umsatzsteuer ausgewiesen. Stattdessen enthaelt die Rechnung einen Hinweis auf die Anwendung der Kleinunternehmerregelung.',
      },
      {
        question: 'Was ist das Reverse-Charge-Verfahren?',
        answer:
          'Beim Reverse-Charge-Verfahren schuldet nicht der leistende Unternehmer die Umsatzsteuer, sondern der Leistungsempfaenger. Das betrifft vor allem bestimmte grenzueberschreitende oder besondere geschaeftliche Leistungen.',
      },
      {
        question: 'Was passiert, wenn eine Rechnung nicht bezahlt wird?',
        answer:
          'Wird eine Rechnung nicht bezahlt, kann zunaechst eine Zahlungserinnerung oder Mahnung versendet werden. Danach koennen weitere Schritte wie Verzugszinsen, Inkasso oder ein gerichtliches Mahnverfahren folgen.',
      },
    ],
    related: ['angebot', 'lieferschein', 'gutschrift', 'zahlungserinnerung', 'erste-mahnung'],
    disclaimer: defaultDisclaimer,
  },
  angebot: {
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
  },
  lieferschein: {
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
  },
  gutschrift: {
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
  },
  zahlungserinnerung: {
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
  },
  'erste-mahnung': {
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
  },
  'zweite-mahnung': {
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
  },
  'letzte-mahnung': {
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
  },
};

export function findKnowledgePage(slug) {
  return knowledgePages[slug] ?? null;
}

export function findKnowledgeNavigationItem(slug) {
  for (const category of knowledgeCategories) {
    const page = category.pages.find((item) => item.slug === slug);

    if (page) {
      return { category, page };
    }
  }

  return { category: null, page: null };
}

export function getKnowledgeTitle(slug) {
  return knowledgePages[slug]?.title ?? findKnowledgeNavigationItem(slug).page?.title ?? 'Wissensseite';
}
