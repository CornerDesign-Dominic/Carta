import { defaultDisclaimer } from '../shared.js';

const lieferZahlungsbedingungen = {
  slug: 'liefer-zahlungsbedingungen',
  category: 'Supply Chain & Logistik',
  title: 'Liefer- & Zahlungsbedingungen',
  description: 'Liefer- und Zahlungsbedingungen einfach erklärt: Lieferort, Lieferzeit, Kosten, Zahlungsziel, Skonto, Fälligkeit und Eigentumsvorbehalt verständlich einordnen.',
  seo: {
    title: 'Liefer- & Zahlungsbedingungen | Belege24',
    description: 'Erfahre, was Liefer- und Zahlungsbedingungen regeln, wie Lieferzeit, Zahlungsziel, Skonto und Eigentumsvorbehalt zusammenhängen und worauf Verträge achten sollten.',
    canonicalPath: '/wissen/liefer-zahlungsbedingungen',
  },
  article: {
    intro: 'Liefer- und Zahlungsbedingungen beschreiben wichtige Punkte eines Waren- oder Leistungsbezugs: Wann und wohin geliefert wird, wer Transportkosten trägt, wann gezahlt werden soll und was bis zur Zahlung mit der Ware gilt. Sie sollten zum konkreten Geschäft passen und klar vereinbart werden.',
    sections: [
      {
        heading: 'Was Lieferbedingungen festlegen',
        paragraphs: [
          [
            { type: 'glossary', id: 'lieferbedingungen', text: 'Lieferbedingungen' },
            ' können den Lieferort, eine Lieferzeit oder Lieferfrist, Versandart, mögliche Teillieferungen, Transportkosten, Verpackung sowie Übergaben regeln. Sie geben beiden Seiten einen gemeinsamen Rahmen dafür, wie die Ware den Käufer erreicht.',
          ],
          'Ein Liefertermin benennt typischerweise einen bestimmten Zeitpunkt oder Tag. Eine Lieferfrist beschreibt dagegen einen Zeitraum oder ein Zeitfenster, etwa „innerhalb von zehn Werktagen“. Ob eine Formulierung verbindlich ist und welche Folgen eine Abweichung hat, hängt von Vertragsinhalt und Umständen ab.',
          [
            'Kosten- und Risikofragen sollten ausdrücklich eingeordnet werden. Die Seite ',
            { type: 'link', href: '/wissen/incoterms-gefahruebergang', text: 'Incoterms & Gefahrübergang' },
            ' erklärt, wie vereinbarte Incoterms® bei Warenkaufverträgen Aufgaben, Kosten und Risiko zuordnen. Lieferbedingungen sind aber nicht mit Incoterms® gleichzusetzen: Sie können weitere oder andere Punkte regeln.',
          ],
        ],
      },
      {
        heading: 'Lieferort, Versand und Gefahrübergang',
        paragraphs: [
          'Der Lieferort sollte so genau beschrieben sein, dass Abholung oder Zustellung praktisch umsetzbar sind, etwa Lageradresse, Rampe oder benannter Terminal. Die Versandart kann eine Abholung, einen Paketdienst, Stückgut, eine Spedition oder einen anderen vereinbarten Weg festlegen. Bei Teillieferungen ist es hilfreich zu bestimmen, ob sie zulässig sind und wie sie abgerechnet werden.',
          'Transportkosten können im Preis enthalten, gesondert ausgewiesen oder ab einem bestimmten Bestellwert übernommen werden. Auch wenn solche Regeln praktisch wirken, sollten Leistungen und Zuschläge eindeutig sein. Die Seite zu ',
          [
            { type: 'link', href: '/wissen/frachtkosten', text: 'Frachtkosten' },
            ' ordnet typische Einflussgrößen und Zusatzleistungen ein.',
          ],
          'Der Gefahrübergang beantwortet vereinfacht, ab wann der Käufer das Risiko eines zufälligen Untergangs oder einer zufälligen Beschädigung trägt. Er ist nicht automatisch identisch mit Versandkosten, Lieferort oder Eigentumsübergang. Für Kaufverträge enthält das BGB Grundregeln zur Übergabe und zum Versendungskauf; abweichende oder ergänzende Vereinbarungen müssen rechtlich wirksam sein.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Liefertermin und Lieferfrist',
            formula: 'Liefertermin: „Lieferung am 15. Oktober“\nLieferfrist: „Lieferung innerhalb von zehn Werktagen nach Bestellung“',
            description: 'Die Beispiele zeigen die sprachliche Unterscheidung. Ob ein Termin verbindlich vereinbart ist und welche Folgen eine Verzögerung hat, richtet sich nach Vertrag und Einzelfall.',
          },
        ],
      },
      {
        heading: 'Zahlungsbedingungen und Fälligkeit',
        paragraphs: [
          [
            { type: 'glossary', id: 'zahlungsbedingungen', text: 'Zahlungsbedingungen' },
            ' legen fest, wann, wie und unter welchen Voraussetzungen gezahlt wird. Typische Varianten sind Vorkasse, Zahlung auf Rechnung mit Zahlungsziel, Teilzahlungen, Lastschrift oder die Zahlung mit Skonto innerhalb einer vereinbarten Frist.',
          ],
          [
            'Ein Zahlungsziel legt einen vereinbarten Zeitpunkt oder Zeitraum für die Zahlung fest. Die ',
            { type: 'glossary', id: 'faelligkeit', text: 'Fälligkeit' },
            ' ist die Frage, ab wann eine Leistung verlangt werden kann. Ohne besondere Vereinbarung ist die Einordnung nicht automatisch dieselbe wie bei einem auf der Rechnung genannten Zahlungsziel. Die Details erklärt die Seite zur ',
            { type: 'link', href: '/wissen/faelligkeit', text: 'Fälligkeit' },
            '.',
          ],
          'Vorkasse bedeutet, dass der Käufer vor Lieferung zahlt. Bei Rechnung zahlt er nach Lieferung oder Leistung entsprechend der vereinbarten Bedingungen. Teilzahlungen können Beträge, Termine und Voraussetzungen aufteilen. Bei Lastschrift sollten Mandat, Einzugstermin und Rückabwicklung klar sein. Skonto ist ein Preisnachlass für fristgerechte Zahlung, wenn er vereinbart wurde; die Berechnung und Frist müssen eindeutig sein.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Typische Zahlungsmodelle',
            formula: 'Vorkasse: Zahlung vor Lieferung\nRechnung mit Zahlungsziel: Zahlung nach Lieferung oder Leistung innerhalb der vereinbarten Frist\nTeilzahlung: Zahlung in mehreren vereinbarten Beträgen\nSkonto: vereinbarter Preisnachlass bei Zahlung innerhalb einer Frist',
            description: 'Diese Begriffe ersetzen keine Vertragsprüfung. Entscheidend sind jeweils Betrag, Zeitpunkt, Voraussetzungen, Zahlungsweg und die klare Vereinbarung zwischen den Parteien.',
          },
        ],
      },
      {
        heading: 'Eigentumsvorbehalt: Eigentum und Besitz unterscheiden',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'eigentumsvorbehalt', text: 'Eigentumsvorbehalt' },
            ' kann vereinbart werden, damit der Verkäufer bis zur vollständigen Zahlung Eigentümer der Ware bleibt. Der Käufer kann die Ware dennoch bereits besitzen und nutzen. Besitz bedeutet die tatsächliche Sachherrschaft; Eigentum beschreibt die rechtliche Zuordnung der Sache.',
          ],
          'Der einfache Eigentumsvorbehalt bezieht sich grundsätzlich auf die konkrete Ware bis zur Zahlung des Kaufpreises. Beim erweiterten Eigentumsvorbehalt sollen darüber hinaus weitere Forderungen gesichert werden. Beim verlängerten Eigentumsvorbehalt werden typischerweise Regelungen für den Weiterverkauf und die daraus entstehenden Forderungen vereinbart. Diese Begriffe und ihre Wirkungen sind rechtlich komplex und müssen wirksam vereinbart sein.',
          'Wenn der Käufer die Ware weiterverkauft, verarbeitet oder mit anderen Sachen verbindet, können die Folgen stark vom Vertragsinhalt, der Art der Ware und dem anwendbaren Recht abhängen. Eine allgemeine Lieferbedingung ersetzt deshalb keine rechtliche Prüfung eines konkreten Geschäftsmodells.',
        ],
      },
      {
        heading: 'Beispiele für klare Absprachen',
        paragraphs: [
          'Die folgenden Beispiele zeigen, welche Informationen eine verständliche Vereinbarung enthalten kann. Sie sind keine rechtssicheren Musterklauseln und müssen für den konkreten Vertrag fachlich geprüft werden.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Lieferung mit Lieferfrist und Kostenregel',
            paragraphs: [
              'In einfacher Sprache kann vereinbart werden: „Die Ware wird innerhalb von zehn Werktagen an die benannte Lieferadresse geliefert. Die Transportkosten sind im Angebot gesondert ausgewiesen. Teillieferungen erfolgen nur nach vorheriger Abstimmung.“',
              'Die Formulierung macht Lieferfrist, Ort, Kostenbezug und Umgang mit Teillieferungen sichtbar. Ob sie für einen bestimmten Vertrag rechtlich passend und wirksam ist, hängt von weiteren Umständen ab.',
            ],
            effects: [
              'Käufer und Verkäufer wissen, welcher Zeitraum und welcher Ort gemeint sind.',
              'Transportkosten und Teillieferungen werden nicht nur stillschweigend vorausgesetzt.',
            ],
          },
          {
            title: 'Beispiel: Rechnung mit Zahlungsziel und Skonto',
            paragraphs: [
              'Ein Angebot nennt: „Zahlbar innerhalb von 14 Tagen nach Rechnungsdatum; 2 Prozent Skonto bei Zahlung innerhalb von sieben Tagen.“ Damit sind Zahlungsweg, Frist und möglicher Preisnachlass erkennbar.',
              'Für die praktische Anwendung müssen auch Rechnungszugang, Leistungszeitpunkt, Skontobasis und die konkrete Vereinbarung passen. Ein bloßer Hinweis auf einer Rechnung ersetzt nicht in jedem Fall die Prüfung der zugrunde liegenden Abrede.',
            ],
            effects: [
              'Zahlungsziel: Orientierung für die vereinbarte Zahlung.',
              'Skonto: nur bei Einhaltung der vereinbarten Voraussetzungen.',
            ],
          },
          {
            title: 'Beispiel: Eigentumsvorbehalt nicht mit Besitz verwechseln',
            paragraphs: [
              'Ein Händler liefert eine Maschine auf Rechnung und vereinbart einen einfachen Eigentumsvorbehalt bis zur vollständigen Zahlung. Der Käufer hat die Maschine bereits im Betrieb und kann sie tatsächlich nutzen.',
              'Der Besitz an der Maschine kann damit beim Käufer liegen, während das Eigentum nach der Vereinbarung noch beim Verkäufer verbleibt. Welche Rechte daraus im konkreten Konfliktfall folgen, hängt von der wirksamen Vereinbarung und den Umständen ab.',
            ],
            effects: [
              'Besitz: tatsächliche Nutzung oder Sachherrschaft beim Käufer möglich.',
              'Eigentum: kann bis zur vollständigen Zahlung beim Verkäufer verbleiben.',
            ],
          },
        ],
      },
      {
        heading: 'Lieferverzug und AGB nur als Abgrenzung',
        paragraphs: [
          'Lieferverzug kann eine Rolle spielen, wenn eine fällige Leistung nicht rechtzeitig erbracht wird. Welche Voraussetzungen und Folgen gelten, hängt unter anderem von Vertrag, Fristen, Verantwortlichkeit und anwendbarem Recht ab. Diese Seite ordnet das Thema nicht abschließend ein.',
          'Allgemeine Geschäftsbedingungen können Liefer- und Zahlungsbedingungen enthalten. Ob sie wirksam in einen Vertrag einbezogen wurden und ob einzelne Klauseln wirksam sind, ist ein eigenes Thema. Bei wiederkehrenden oder rechtlich wichtigen Vertragsbedingungen ist eine fachliche Prüfung sinnvoll.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Unklare Angaben wie „schnellstmögliche Lieferung“ oder „Zahlung zeitnah“ lassen offen, was erwartet wird. Lieferort, Termin oder Frist, Kosten und Zahlungsweg sollten so konkret wie möglich sein.',
          'Ein häufiger Denkfehler ist, Lieferbedingungen mit Incoterms® gleichzusetzen oder Eigentum, Besitz und Gefahrübergang gleichzusetzen. Es handelt sich um verschiedene Fragen, die getrennt geregelt und geprüft werden müssen.',
          'Bei Eigentumsvorbehalt oder bei standardisierten Bedingungen für viele Kunden sind formale Anforderungen und rechtliche Wirkungen besonders wichtig. Eigene Textbausteine sollten nicht als automatisch rechtssicher behandelt werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lieferbedingungen können Ort, Zeit, Versand, Teillieferungen, Kosten und Übergaben ordnen.',
    'Liefertermin und Lieferfrist sind unterschiedliche Arten, einen Lieferzeitpunkt zu beschreiben.',
    'Zahlungsbedingungen legen unter anderem Zahlungsziel, Zahlungsweg, Teilzahlungen und Skonto fest.',
    'Fälligkeit, Zahlungsziel, Gefahrübergang, Besitz und Eigentum sind unterschiedliche rechtliche Fragen.',
    'Ein einfacher Eigentumsvorbehalt kann Eigentum bis zur vollständigen Zahlung vorbehalten; Käufer können die Ware dennoch besitzen.',
    'Liefer- und Zahlungsbedingungen sind keine vollständigen Verträge und keine automatisch rechtssicheren Muster.',
  ],
  commonMistakes: [
    'Lieferort, Liefertermin oder Lieferfrist ungenau formulieren',
    'Transportkosten, Zuschläge oder Teillieferungen nicht ausdrücklich ansprechen',
    'Zahlungsziel und gesetzliche Fälligkeit ohne Prüfung gleichsetzen',
    'Eigentumsübergang, Besitz und Gefahrübergang verwechseln',
    'eine Incoterms®-Klausel oder Standardbedingungen als vollständigen Vertrag behandeln',
  ],
  faqs: [
    { question: 'Was regeln Lieferbedingungen?', answer: 'Sie können zum Beispiel Lieferort, Lieferzeit oder Lieferfrist, Versandart, Teillieferungen, Transportkosten und Übergaben beschreiben.' },
    { question: 'Was ist der Unterschied zwischen Liefertermin und Lieferfrist?', answer: 'Ein Liefertermin nennt typischerweise einen bestimmten Zeitpunkt. Eine Lieferfrist beschreibt einen Zeitraum, innerhalb dessen geliefert werden soll.' },
    { question: 'Was sind Zahlungsbedingungen?', answer: 'Sie legen fest, wann und wie gezahlt wird, etwa Vorkasse, Rechnung mit Zahlungsziel, Teilzahlung, Lastschrift oder Skonto bei fristgerechter Zahlung.' },
    { question: 'Was bedeutet einfacher Eigentumsvorbehalt?', answer: 'Er kann vereinbaren, dass der Verkäufer bis zur vollständigen Zahlung Eigentümer der konkreten Ware bleibt, obwohl der Käufer sie bereits besitzt oder nutzt.' },
    { question: 'Sind Lieferbedingungen und Incoterms® dasselbe?', answer: 'Nein. Incoterms® sind vereinbarte ICC-Klauseln zur Zuordnung bestimmter Liefer-, Kosten-, Risiko- und Formalitätspflichten. Lieferbedingungen können weitere oder andere Vertragsinhalte regeln.' },
  ],
  related: ['faelligkeit', 'incoterms-gefahruebergang', 'frachtkosten', 'spedition-frachtfuehrer'],
  sources: [
    { label: '§ 271 BGB – Leistungszeit', url: 'https://www.gesetze-im-internet.de/bgb/__271.html' },
    { label: '§ 286 BGB – Verzug des Schuldners', url: 'https://www.gesetze-im-internet.de/bgb/__286.html' },
    { label: '§ 446 BGB – Gefahr- und Lastenübergang', url: 'https://www.gesetze-im-internet.de/bgb/__446.html' },
    { label: '§ 447 BGB – Gefahrübergang beim Versendungskauf', url: 'https://www.gesetze-im-internet.de/bgb/__447.html' },
    { label: '§ 449 BGB – Eigentumsvorbehalt', url: 'https://www.gesetze-im-internet.de/bgb/__449.html' },
    { label: '§ 854 BGB – Erwerb des Besitzes', url: 'https://www.gesetze-im-internet.de/bgb/__854.html' },
    { label: '§ 929 BGB – Einigung und Übergabe', url: 'https://www.gesetze-im-internet.de/bgb/__929.html' },
  ],
  updatedAt: '2026-08-31',
  reviewedAt: '2026-08-31',
  disclaimer: defaultDisclaimer,
};

export default lieferZahlungsbedingungen;
