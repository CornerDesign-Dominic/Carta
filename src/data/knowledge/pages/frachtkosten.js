import { defaultDisclaimer } from '../shared.js';

const frachtkosten = {
  slug: 'frachtkosten',
  category: 'Supply Chain & Logistik',
  title: 'Frachtkosten',
  description: 'Frachtkosten einfach erklärt: Einflussgrößen wie Strecke, Gewicht, Volumen, Sendungsart, Laufzeit, Zuschläge und Zusatzleistungen nachvollziehbar einordnen.',
  seo: {
    title: 'Frachtkosten einfach erklärt | Belege24',
    description: 'Erfahre, welche Faktoren Frachtkosten beeinflussen und warum Gewicht, Volumen, Sendungsart, Strecke und Zusatzleistungen gemeinsam betrachtet werden müssen.',
    canonicalPath: '/wissen/frachtkosten',
  },
  article: {
    intro: 'Frachtkosten sind die Kosten für die Beförderung von Gütern. Sie entstehen nicht allein durch die Entfernung: Gewicht, Volumen, benötigter Laderaum, Sendungsart, Laufzeit, Verkehrsträger und zusätzliche Leistungen bestimmen mit, wie ein Angebot kalkuliert wird.',
    sections: [
      {
        heading: 'Was gehört zu Frachtkosten?',
        paragraphs: [
          [
            { type: 'glossary', id: 'frachtkosten', text: 'Frachtkosten' },
            ' können den eigentlichen Haupttransport sowie vereinbarte Nebenleistungen umfassen. Dazu zählen je nach Auftrag beispielsweise Abholung, Zustellung, Umschlag, Wartezeit, besondere Fahrzeuganforderungen, Terminoptionen oder zusätzliche Dokumentation.',
          ],
          [
            'Sie sind ein wichtiger Baustein der ',
            { type: 'link', href: '/wissen/bezugskalkulation', text: 'Bezugskalkulation' },
            ': Transportkosten können dort als Bezugskosten den Bezugspreis erhöhen. Für die Transportentscheidung betrachtet die ',
            { type: 'link', href: '/wissen/transportlogistik', text: 'Transportlogistik' },
            ' zusätzlich Laufzeit, Umschlag, Zuverlässigkeit und Anforderungen der Ware.',
          ],
        ],
      },
      {
        heading: 'Wovon hängen Frachtkosten ab?',
        paragraphs: [
          'Die Entfernung und die gewählte Relation beeinflussen Fahrzeit, Energiebedarf, Maut und Fahrzeugbindung. Gewicht, Volumen und benötigte Stellplätze zeigen, wie viel Kapazität eine Sendung tatsächlich beansprucht. Ein leichtes, aber sperriges Gut kann viel Laderaum belegen; ein kompaktes, schweres Gut kann dagegen Gewichtsgrenzen erreichen.',
          [
            'Auch der ',
            { type: 'link', href: '/wissen/verkehrstraeger', text: 'Verkehrsträger' },
            ' und die Sendungsart sind relevant. Eine Direktfahrt, eine Teilladung oder ein Stückgutnetz haben unterschiedliche Abläufe bei Bündelung, Umschlag und Auslastung. Die bestehenden ',
            { type: 'link', href: '/wissen/stueckgut-teilladung-komplettladung', text: 'Sendungsarten Stückgut, LTL und FTL' },
            ' ordnen diese Unterschiede ein.',
          ],
        ],
        formulaCards: [
          {
            label: 'Einflussfaktoren',
            title: 'Was kann den Frachtpreis beeinflussen?',
            formula: 'Entfernung + Gewicht/Volumen + Laderaum + Sendungsart + Laufzeit + Verkehrsträger + Zuschläge + Zusatzleistungen',
            description: 'Die Gewichtung und Abrechnung unterscheiden sich je nach Angebot, Relation, Dienstleister, Fahrzeug und Vertrag. Die Aufzählung ist kein allgemeingültiges Preisformular.',
          },
        ],
      },
      {
        heading: 'Frachtgewicht und Volumengewicht',
        paragraphs: [
          [
            'Als ',
            { type: 'glossary', id: 'frachtpflichtiges-gewicht', text: 'frachtpflichtiges Gewicht' },
            ' wird grundsätzlich die Größe verstanden, die ein Dienstleister für die Preisermittlung zugrunde legt. Sie kann sich am tatsächlichen Gewicht, am Volumen, an Stellplätzen oder an vereinbarten Umrechnungen orientieren.',
          ],
          [
            'Das ',
            { type: 'glossary', id: 'volumengewicht', text: 'Volumengewicht' },
            ' ist eine Möglichkeit, sehr voluminöse, aber leichte Sendungen bei der Preisermittlung angemessen zu berücksichtigen. Das Volumen wird dazu mit einem vom jeweiligen Dienstleister oder Verkehrsträger festgelegten Faktor in eine Vergleichsgröße umgerechnet. Welcher Faktor gilt und ob überhaupt damit gerechnet wird, steht im jeweiligen Angebot oder Vertrag.',
          ],
        ],
      },
      {
        heading: 'Fixe und variable Bestandteile',
        paragraphs: [
          'Einige Kosten fallen je Auftrag oder je Abholung unabhängig von der genauen Strecke an, etwa Disposition, Abfertigung oder eine Mindestgebühr. In vereinfachten Modellen werden sie als fixe Bestandteile betrachtet. Andere Kosten verändern sich stärker mit Strecke, Fahrzeit, Menge, Gewicht, Laderaum oder zusätzlichen Stopps und werden als variable Bestandteile eingeordnet.',
          'In der Realität sind die Grenzen nicht immer scharf. Ein Preis kann zugleich einen Grundpreis, mengenbezogene Positionen, Distanzstaffeln und Zuschläge enthalten. Angebote sollten deshalb nach ihrer konkreten Leistungsbeschreibung verglichen werden, nicht nur nach einer einzelnen Endsumme.',
        ],
      },
      {
        heading: 'Nebenkosten und Zuschläge',
        paragraphs: [
          'Je nach Transport können Maut, Energie- oder Dieselzuschläge, Abholung und Zustellung in Randgebieten, Wartezeiten, Hebebühne, Avisierung, Terminlieferung, Gefahrgut- oder Temperaturanforderungen sowie Versicherungs- oder Zollleistungen eine Rolle spielen. Ob sie enthalten sind oder zusätzlich abgerechnet werden, ergibt sich aus Angebot, Tarif oder Vereinbarung.',
          'Ein günstiger Grundpreis ist deshalb nicht automatisch das günstigere Gesamtangebot. Wer Angebote vergleicht, sollte Leistungsumfang, Zuschläge, mögliche Voraussetzungen und die Folgen von Abweichungen gleichermaßen prüfen.',
        ],
      },
      {
        heading: 'Direktfahrt und Stückgut vergleichen',
        paragraphs: [
          'Bei einer Direktfahrt steht ein Fahrzeug oder ein relevanter Teil seiner Kapazität für eine konkrete Verbindung bereit. Das kann Übergaben reduzieren und eine engere Terminsteuerung erlauben. Wenn die Sendung klein ist, bleibt jedoch eventuell viel Kapazität ungenutzt.',
          'Im Stückgutnetz wird eine kleinere Sendung mit anderen Sendungen gebündelt. Das kann die Kapazität besser verteilen, erfordert aber meist Abholung, Umschlag und Zustellung im Netzwerk. Welche Variante wirtschaftlich und zuverlässig passt, hängt neben Kosten auch von Termin, Ware, Relation und Serviceanforderung ab.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Eine Palette mit geringem Gewicht, aber großem Volumen',
            paragraphs: [
              'Ein Unternehmen versendet eine sehr leichte, aber großvolumige Palette. Das tatsächliche Gewicht ist gering, die Palette belegt jedoch einen großen Teil der Ladefläche. Der Dienstleister kann deshalb neben dem Gewicht auch Volumen oder benötigten Laderaum in die Preisermittlung einbeziehen.',
              'Beim Angebotsvergleich sollte das Unternehmen nicht nur die Kilogrammzahl nennen, sondern Maße, Verpackung, Stapelbarkeit und gegebenenfalls benötigte Stellplätze eindeutig angeben. Sonst sind Nachberechnungen oder unpassende Fahrzeuge möglich.',
            ],
            effects: [
              'Das tatsächliche Gewicht allein beschreibt die benötigte Fahrzeugkapazität nicht vollständig.',
              'Vollständige Sendungsdaten verbessern Vergleichbarkeit und Planbarkeit.',
            ],
          },
          {
            title: 'Beispiel: Zwei Paletten oder direkte Sonderfahrt?',
            paragraphs: [
              'Zwei Paletten sollen regulär an einen Kunden in einer anderen Region geliefert werden. Im Stückgutnetz können sie mit weiteren Sendungen gebündelt werden. Eine direkte Sonderfahrt würde Umschläge vermeiden, bindet aber ein Fahrzeug speziell für diese kleine Menge.',
              'Ist die Lieferung nicht besonders zeitkritisch, kann die Bündelung passen. Bei einem drohenden Produktionsstillstand beim Kunden kann eine direkte Fahrt trotz anderer Kostenstruktur angemessen sein. Entscheidend ist der Gesamtprozess, nicht eine vermeintliche Standardrate.',
            ],
            effects: [
              'Stückgut: Bündelung und mehrere Prozessschritte möglich.',
              'Direktfahrt: weniger Übergaben möglich, aber Auslastung und Fahrzeugbindung prüfen.',
            ],
          },
          {
            title: 'Beispiel: Angebot mit Grundpreis und Zuschlägen',
            paragraphs: [
              'Ein Angebot enthält einen Grundpreis für den Hauptlauf, einen Mautanteil und einen Energiezuschlag. Zusätzlich wird eine Terminlieferung berechnet. Ein zweites Angebot hat einen höheren Grundpreis, enthält aber die Terminlieferung bereits.',
              'Verglichen werden müssen deshalb die Gesamtkosten bei gleicher Leistung sowie die jeweiligen Bedingungen. Nur den Grundpreis gegenüberzustellen würde den tatsächlichen Transportaufwand nicht abbilden.',
            ],
            effects: [
              'Leistungsumfang und Zuschläge gehören in denselben Angebotsvergleich.',
              'Die preislich passende Lösung kann je nach Termin und Zusatzleistung unterschiedlich sein.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Häufig fehlen bei der Anfrage Maße, Gewicht, Anzahl der Paletten, Abhol- und Lieferbedingungen oder ein realistisches Zeitfenster. Dann können Angebote nicht sauber verglichen werden oder die tatsächlich benötigte Leistung wird erst später sichtbar.',
          'Ein weiterer Fehler ist, Maut, Energiezuschläge und Zusatzleistungen als unerwartete Nebensache zu behandeln. Sie sollten schon vor der Beauftragung im Leistungsumfang geprüft werden.',
          'Auch eine niedrige Fracht kann unpassend sein, wenn Laufzeit, Umschlagrisiko oder Liefertermin nicht zu den Anforderungen passen. Frachtkosten sind daher ein wichtiges, aber nicht das einzige Auswahlkriterium.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Frachtkosten umfassen die Beförderung und je nach Vereinbarung weitere Transportleistungen.',
    'Entfernung, Gewicht, Volumen, Laderaum, Sendungsart, Laufzeit und Verkehrsträger beeinflussen die Kostenstruktur.',
    'Das frachtpflichtige Gewicht kann sich je nach Angebot aus Gewicht, Volumen, Stellplätzen oder Umrechnungen ergeben.',
    'Volumengewicht ordnet sehr leichte, aber sperrige Sendungen in eine Preisermittlung ein; Faktoren sind dienstleisterabhängig.',
    'Grundpreise, Zuschläge und Zusatzleistungen müssen für einen fairen Angebotsvergleich zusammen betrachtet werden.',
    'Die günstigste Fracht ist nicht automatisch die passende Lösung für Termin, Ware und Serviceanforderung.',
  ],
  commonMistakes: [
    'Frachtangebote ohne vollständige Angaben zu Gewicht, Maßen, Verpackung und Zeitfenster vergleichen',
    'nur den Grundpreis statt Zuschläge und Leistungsumfang zu betrachten',
    'tatsächliches Gewicht mit der allein relevanten Preisgröße gleichsetzen',
    'eine Direktfahrt unabhängig von Auslastung, Termin und Gesamtprozess bevorzugen',
    'Frachtkosten als einziges Kriterium statt zusammen mit Laufzeit, Umschlag und Zuverlässigkeit bewerten',
  ],
  faqs: [
    { question: 'Was sind Frachtkosten?', answer: 'Frachtkosten sind Kosten für die Beförderung von Gütern. Je nach Auftrag können auch Abholung, Zustellung, Umschlag, Zuschläge und weitere Zusatzleistungen dazugehören.' },
    { question: 'Wovon hängen Frachtkosten ab?', answer: 'Typisch sind Entfernung, Gewicht, Volumen, Laderaum, Sendungsart, Laufzeit, Verkehrsträger, Zuschläge und vereinbarte Zusatzleistungen.' },
    { question: 'Was ist frachtpflichtiges Gewicht?', answer: 'Es ist die Größe, die ein Dienstleister für die Preisermittlung heranzieht. Sie kann auf tatsächlichem Gewicht, Volumen, Stellplätzen oder vereinbarten Umrechnungen beruhen.' },
    { question: 'Warum kann Volumen den Preis erhöhen?', answer: 'Leichte, sperrige Ware kann viel Fahrzeugkapazität belegen. Deshalb kann ein Dienstleister Volumen oder ein daraus abgeleitetes Volumengewicht berücksichtigen.' },
    { question: 'Sind Stückguttransporte immer günstiger als Direktfahrten?', answer: 'Nein. Stückgut kann kleinere Mengen bündeln, eine Direktfahrt kann bei kritischen Terminen oder besonderen Anforderungen passen. Entscheidend sind Sendung, Strecke, Leistung und Gesamtprozess.' },
  ],
  related: ['transportlogistik', 'verkehrstraeger', 'bezugskalkulation', 'stueckgut-teilladung-komplettladung'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default frachtkosten;
