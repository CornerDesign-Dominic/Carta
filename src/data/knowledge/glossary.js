/**
 * Zentrale Glossarbegriffe für den Wissensbereich.
 *
 * Die Einträge sind bewusst nicht an einzelne Wissensseiten gebunden, damit
 * derselbe Begriff überall dieselbe, kompakte Erklärung erhält.
 */
export const glossaryEntries = [
  {
    id: 'fremdbeleg',
    term: 'Fremdbeleg',
    definition: 'Ein Fremdbeleg wird von einer anderen Person oder einem anderen Unternehmen für einen Geschäftsvorfall ausgestellt.',
    explanation: 'Typische Fremdbelege sind Rechnungen, Quittungen, Kassenbons oder Gebührenbescheide. Sie stammen im Unterschied zum Eigenbeleg nicht aus dem eigenen Unternehmen.',
  },
  {
    id: 'betriebsausgabe',
    term: 'Betriebsausgabe',
    definition: 'Eine Betriebsausgabe ist eine Aufwendung, die durch den Betrieb veranlasst ist.',
    explanation: 'Der betriebliche Zusammenhang muss nachvollziehbar sein. Private Ausgaben werden nicht allein durch ihre Erfassung in der Buchhaltung zu Betriebsausgaben.',
  },
  {
    id: 'vorsteuerabzug',
    term: 'Vorsteuerabzug',
    definition: 'Beim Vorsteuerabzug kann ein Unternehmer die ihm berechnete Umsatzsteuer unter den gesetzlichen Voraussetzungen von seiner eigenen Umsatzsteuerschuld abziehen.',
    explanation: 'Für Lieferungen und Leistungen eines anderen Unternehmers ist dafür grundsätzlich eine ordnungsgemäße Rechnung erforderlich.',
    important: 'Ein selbst erstellter Eigenbeleg ersetzt die erforderliche Rechnung regelmäßig nicht.',
  },
  {
    id: 'vorsteuer',
    term: 'Vorsteuer',
    definition: 'Vorsteuer ist die Umsatzsteuer, die ein Unternehmen für betriebliche Einkäufe bezahlt.',
    explanation: 'Unter den gesetzlichen Voraussetzungen kann sie mit der eigenen Umsatzsteuer verrechnet werden. Dafür ist regelmäßig eine ordnungsgemäße Rechnung erforderlich.',
    important: 'Vorsteuer darf nicht allein deshalb abgezogen werden, weil auf einem Beleg ein Steuerbetrag steht.',
  },
  {
    id: 'umsatzsteuer-zahllast',
    term: 'Umsatzsteuer-Zahllast',
    definition: 'Die Umsatzsteuer-Zahllast ist vereinfacht der Betrag, der nach Verrechnung von Umsatzsteuer und abziehbarer Vorsteuer an das Finanzamt zu zahlen ist.',
    explanation: 'Ist die abziehbare Vorsteuer höher als die Umsatzsteuer aus Verkäufen, kann sich stattdessen ein Vorsteuerüberschuss ergeben.',
  },
  {
    id: 'teillieferung',
    term: 'Teillieferung',
    definition: 'Bei einer Teillieferung wird nur ein Teil der bestellten Waren zu einem Zeitpunkt geliefert.',
    explanation: 'Die restlichen Positionen folgen später. Eine eindeutige Zuordnung zur Bestellung hilft dabei, gelieferte und noch offene Mengen im Blick zu behalten.',
  },
  {
    id: 'bindefrist',
    term: 'Bindefrist',
    definition: 'Die Bindefrist ist der Zeitraum, in dem ein Angebot angenommen werden kann.',
    explanation: 'Sie kann ausdrücklich im Angebot festgelegt sein. Nach ihrem Ablauf sollte vor einer Annahme geklärt werden, ob die angebotenen Bedingungen weiterhin gelten.',
    important: 'Ob und wie lange ein Angebot rechtlich bindend ist, hängt auch von seinem Inhalt, der Formulierung und den Umständen ab.',
  },
  {
    id: 'leistungsdatum',
    term: 'Leistungsdatum',
    definition: 'Das Leistungsdatum zeigt, wann eine Leistung erbracht oder eine Ware geliefert wurde.',
    explanation: 'Es kann mit dem Rechnungsdatum identisch sein, darf aber auch davon abweichen.',
    example: 'Wurde eine Beratung am 12. Juni durchgeführt, ist der 12. Juni das Leistungsdatum – auch wenn die Rechnung erst am 18. Juni erstellt wird.',
    important: 'Bei Rechnungen muss das Leistungsdatum oder der Leistungszeitraum eindeutig erkennbar sein.',
  },
  {
    id: 'faelligkeit',
    term: 'Fälligkeit',
    definition: 'Die Fälligkeit ist der Zeitpunkt, ab dem eine Zahlung geleistet werden muss.',
    explanation: 'Ist eine Rechnung fällig, kann der Gläubiger grundsätzlich verlangen, dass der offene Betrag bezahlt wird.',
    example: 'Eine Rechnung ist bis zum 20. August zu bezahlen. Ab diesem Tag ist die Forderung fällig.',
  },
  {
    id: 'zahlungsverzug',
    term: 'Zahlungsverzug',
    definition: 'Zahlungsverzug bedeutet, dass eine fällige Zahlung nicht rechtzeitig geleistet wurde und der Schuldner sich im Verzug befindet.',
    explanation: 'Ein Zahlungsverzug kann dazu führen, dass zusätzliche Kosten oder Verzugszinsen verlangt werden können.',
    important: 'Nicht jede verspätete Zahlung führt automatisch sofort zu Zahlungsverzug. Entscheidend sind die gesetzlichen Voraussetzungen und die konkrete Fälligkeit.',
  },
  {
    id: 'basiszinssatz',
    term: 'Basiszinssatz',
    definition: 'Der Basiszinssatz ist ein gesetzlich festgelegter Referenzzinssatz, der unter anderem für die Berechnung gesetzlicher Verzugszinsen verwendet wird.',
    explanation: 'Er wird zum 1. Januar und zum 1. Juli angepasst. Der gesetzliche Verzugszinssatz ergibt sich aus dem Basiszinssatz zuzüglich eines festen Aufschlags.',
    important: 'Für eine Berechnung ist immer der Basiszinssatz des jeweiligen Zeitraums maßgeblich.',
  },
  {
    id: 'zinssatz',
    term: 'Zinssatz',
    definition: 'Der Zinssatz gibt in Prozent an, wie hoch die Zinsen für einen bestimmten Zeitraum sind.',
    explanation: 'Er bezieht sich häufig auf ein Jahr und wird dann mit „p. a.“ angegeben. Der tatsächliche Zinsbetrag hängt zusätzlich von Kapital und Laufzeit ab.',
    example: 'Bei 1.000 Euro Kapital und 4 % p. a. entstehen bei einfacher Verzinsung nach einem Jahr 40 Euro Zinsen.',
  },
  {
    id: 'mahnkosten',
    term: 'Mahnkosten',
    definition: 'Mahnkosten sind zusätzliche Kosten, die durch eine Mahnung wegen einer verspäteten Zahlung entstehen können.',
    explanation: 'Dazu können zum Beispiel angemessene Kosten für die Erstellung und den Versand einer Mahnung gehören.',
    important: 'Mahnkosten dürfen nicht beliebig hoch angesetzt werden. Sie müssen grundsätzlich nachvollziehbar und angemessen sein.',
  },
  {
    id: 'gerichtliches-mahnverfahren',
    term: 'Gerichtliches Mahnverfahren',
    definition: 'Das gerichtliche Mahnverfahren ist ein vereinfachtes gerichtliches Verfahren zur Durchsetzung einer Geldforderung.',
    explanation: 'Der Gläubiger kann dabei über das Gericht einen Mahnbescheid beantragen, ohne direkt eine normale Klage einzureichen.',
    important: 'Das Gericht prüft dabei zunächst nicht, ob die Forderung tatsächlich berechtigt ist. Widerspricht der Schuldner, kann sich anschließend ein normales Gerichtsverfahren anschließen.',
  },
  {
    id: 'mahnbescheid',
    term: 'Mahnbescheid',
    definition: 'Ein Mahnbescheid ist ein gerichtliches Schreiben, mit dem eine Geldforderung gegenüber dem Schuldner geltend gemacht wird.',
    explanation: 'Der Mahnbescheid ist ein Schritt innerhalb des gerichtlichen Mahnverfahrens. Der Schuldner kann die Forderung bezahlen oder innerhalb der vorgesehenen Frist widersprechen.',
    important: 'Ein Mahnbescheid ist keine normale Mahnung des Unternehmens, sondern wird im Rahmen des gerichtlichen Mahnverfahrens zugestellt.',
  },
  {
    id: 'vollstreckungsbescheid',
    term: 'Vollstreckungsbescheid',
    definition: 'Ein Vollstreckungsbescheid kann nach einem Mahnbescheid beantragt werden, wenn der Schuldner nicht rechtzeitig widerspricht.',
    explanation: 'Er kann die Grundlage dafür bilden, eine Forderung zwangsweise durchzusetzen, zum Beispiel durch eine Zwangsvollstreckung.',
    important: 'Der Vollstreckungsbescheid ist bereits ein vollstreckbarer Titel. Gegen ihn bestehen jedoch weiterhin gesetzlich vorgesehene Rechtsbehelfe.',
  },
];

const glossaryEntriesById = new Map(glossaryEntries.map((entry) => [entry.id, entry]));

export function findGlossaryEntry(id) {
  return glossaryEntriesById.get(id) ?? null;
}
