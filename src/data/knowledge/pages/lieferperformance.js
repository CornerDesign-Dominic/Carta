import { defaultDisclaimer } from '../shared.js';

const lieferperformance = {
  slug: 'liefertermintreue-servicegrad',
  category: 'Supply Chain & Logistik',
  title: 'Liefertermintreue & Servicegrad',
  description: 'Liefertermintreue, Lieferbereitschaft, Servicegrad und OTIF einfach erklärt: Termine, Vollständigkeit und Fehlmengen mit klaren Kennzahlen messen und einordnen.',
  seo: {
    title: 'Liefertermintreue & Servicegrad | Belege24',
    description: 'Erfahre, wie Liefertermintreue, Lieferbereitschaft, Servicegrad und OTIF gemessen werden und warum eindeutige Definitionen entscheidend sind.',
    canonicalPath: '/wissen/liefertermintreue-servicegrad',
  },
  article: {
    intro: 'Liefertermintreue und Servicegrad zeigen aus unterschiedlichen Perspektiven, wie zuverlässig Bedarf versorgt wird. Liefertermintreue prüft den zugesagten Termin. Servicegrad beziehungsweise Lieferbereitschaft betrachtet, ob Bedarf ohne Fehlmenge erfüllt werden kann. OTIF verbindet Termin und Vollständigkeit.',
    sections: [
      {
        heading: 'Liefertermintreue, Lieferbereitschaft und Servicegrad',
        paragraphs: [
          [
            'Liefertermintreue misst, ob eine Lieferung am zugesagten Termin oder innerhalb eines vereinbarten Zeitfensters eintrifft. Der tatsächlich erreichte Zeitpunkt wird also mit einer konkreten Zusage verglichen. Eine kurze Lieferzeit ist davon zu unterscheiden: Sie beschreibt eine Dauer, nicht die Einhaltung eines Versprechens.',
          ],
          [
            'Lieferbereitschaft oder ',
            { type: 'glossary', id: 'servicegrad', text: 'Servicegrad' },
            ' beschreibt, mit welcher Wahrscheinlichkeit oder in welchem Umfang Bedarf ohne Fehlmenge bedient werden kann. Die Begriffe werden in Unternehmen nicht immer identisch verwendet. Für jede Kennzahl muss daher klar feststehen, ob Aufträge, Positionen, Mengen oder Kundenfälle gezählt werden.',
          ],
          'Eine einzelne Kennzahl zeigt nur einen Ausschnitt. Eine Lieferung kann pünktlich eintreffen, aber unvollständig sein. Sie kann vollständig sein, aber zu spät eintreffen oder Qualitätsprobleme aufweisen. Deshalb werden Termin, Vollständigkeit, Qualität und Verfügbarkeit meist gemeinsam betrachtet und nach dem jeweiligen Prozess eingeordnet.',
        ],
      },
      {
        heading: 'Vollständigkeit, Fehlmengen und Lieferzeit',
        paragraphs: [
          'Mengentreue und Vollständigkeit prüfen, ob die bestätigte Menge und alle vereinbarten Positionen geliefert wurden. Fehlmengen können einen Auftrag unvollständig machen, auch wenn ein Teil der Ware pünktlich eingetroffen ist. Qualität ergänzt diese Sicht: Fehlerhafte Ware erfüllt den Bedarf nicht vollständig, selbst wenn Termin und Menge stimmen.',
          'Durchlaufzeit und Wiederbeschaffungszeit helfen, Ursachen einzuordnen. Lange oder schwankende Zeiten können Terminrisiken, Pufferbedarf und die Planung von Beständen erhöhen. Sie sind aber keine direkte Aussage darüber, ob eine konkrete Lieferung vereinbarungsgemäß erfüllt wurde.',
        ],
      },
      {
        heading: 'Servicegrad klar definieren',
        paragraphs: [
          'Für diese Seite wird der Servicegrad als positionsbezogener Lieferbereitschaftsgrad dargestellt: Er misst, welcher Anteil der angeforderten Auftragspositionen ohne Fehlmenge bedient wird. Diese Definition bewertet Verfügbarkeit und Vollständigkeit, nicht den Liefertermin. Andere Unternehmen können stattdessen Mengen, Aufträge oder die Wahrscheinlichkeit eines Lagerfehlbestands verwenden.',
          'Ein hoher Servicegrad kann durch verlässliche Beschaffung, passende Planung, ausreichende Kapazität oder Bestände erreicht werden. Ein höherer Sicherheitsbestand kann Fehlmengen abfedern, bindet aber Kapital und verursacht Lager- sowie Handhabungskosten. Ein hoher Zielwert ist daher immer gegen Risiko, Bestands- und Logistikkosten abzuwägen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Servicegrad – verwendete Definition auf dieser Seite',
            formula: 'Servicegrad = ohne Fehlmenge bediente Auftragspositionen / angeforderte Auftragspositionen × 100',
            description: 'Diese positionsbezogene Definition misst Lieferbereitschaft beziehungsweise Verfügbarkeit. Sie misst nicht, ob die Position termingerecht angekommen ist; dafür dient die Liefertermintreue.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Servicegrad eines Monats',
            paragraphs: [
              'In einem Monat werden 200 Auftragspositionen angefordert. 190 Positionen können ohne Fehlmenge bedient werden; bei zehn Positionen fehlt die gewünschte Menge ganz oder teilweise.',
              'Nach der auf dieser Seite verwendeten Definition lautet die Rechnung: 190 / 200 × 100 = 95 Prozent. Der Wert sagt nichts darüber aus, ob diese 190 Positionen auch im zugesagten Zeitfenster eingetroffen sind.',
            ],
            effects: [
              'Servicegrad: 95 Prozent nach positionsbezogener Definition.',
              'Für die Beurteilung der Terminleistung wird zusätzlich die Liefertermintreue gemessen.',
            ],
          },
        ],
      },
      {
        heading: 'Liefertermintreue messen',
        paragraphs: [
          'Eine einfache Betrachtung zählt Lieferungen als termingerecht, wenn sie am zugesagten Tag oder innerhalb des vereinbarten Zeitfensters ankommen. Vor der Messung muss festgelegt sein, ob ein früherer Termin als termingerecht gilt, welcher Zeitpunkt zählt und wie Teillieferungen behandelt werden.',
          'Die Kennzahl wird über einen definierten Zeitraum berechnet, etwa je Woche, Monat oder Quartal. Für Zeitvergleiche müssen Datenbasis und Regeln gleich bleiben. Sonst können Veränderungen der Kennzahl aus einer anderen Zählweise statt aus einer tatsächlichen Leistungsänderung entstehen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Liefertermintreue',
            formula: 'Liefertermintreue = termingerechte Lieferungen / Gesamtlieferungen × 100',
            description: '„Termingerecht“ und „Lieferung“ müssen vorher eindeutig definiert sein. Je nach Prozess kann auf Auftrags-, Liefer-, Positions- oder Mengenebene gemessen werden.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Liefertermintreue eines Monats',
            paragraphs: [
              'Im Monat treffen 48 von 60 bewerteten Lieferungen im vereinbarten Zeitfenster ein. Als Lieferung zählt in diesem Beispiel jeweils ein Lieferauftrag; Teillieferungen werden nach einer festgelegten Regel zusammengefasst.',
              'Die Rechnung lautet: 48 / 60 × 100 = 80 Prozent. Der Wert zeigt die Termintreue für diese definierte Datenbasis. Ob er ausreichend ist, hängt von Produkt, vereinbartem Service-Level und Folgen eines Verzugs ab.',
            ],
            effects: [
              'Ergebnis: 80 Prozent der nach dieser Regel bewerteten Lieferungen waren termingerecht.',
              'Einordnung: Ohne Vergleich mit früheren Zeiträumen, Ursachen und kritischen Aufträgen ist der Wert noch keine vollständige Leistungsbeurteilung.',
            ],
          },
        ],
      },
      {
        heading: 'OTIF: On Time In Full',
        paragraphs: [
          [
            { type: 'glossary', id: 'otif', text: 'OTIF' },
            ' steht für „On Time In Full“ und verbindet Termin- und Vollständigkeitssicht. Ein Auftrag oder eine Lieferung zählt nur dann als erfüllt, wenn sie sowohl termingerecht als auch in der vereinbarten Menge und Positionsvollständigkeit ankommt.',
          ],
          'Die konkrete OTIF-Definition unterscheidet sich in der Praxis. Beispielsweise kann sich „in full“ auf die Gesamtmenge, alle Positionen oder die erste Lieferung eines Auftrags beziehen. Auch Toleranzen, Teillieferungen, Nachlieferungen und die Behandlung von Qualitätsmängeln müssen festgelegt werden. Qualität ist nicht automatisch Teil jeder OTIF-Definition.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'OTIF-Quote',
            formula: 'OTIF = termingerechte und vollständige Lieferungen / Gesamtlieferungen × 100',
            description: 'Eine Lieferung zählt im Zähler nur, wenn beide Kriterien nach derselben vorab festgelegten Regel erfüllt sind. Die Kennzahl darf nicht mit abweichenden Regeln zwischen Zeiträumen oder Partnern verglichen werden.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: OTIF unterscheidet sich von Termintreue',
            paragraphs: [
              'Von 50 Lieferaufträgen sind 45 termingerecht. Vier dieser 45 Lieferungen enthalten jedoch Fehlmengen. Nach der hier vereinbarten Regel gelten deshalb nur 41 Lieferaufträge als gleichzeitig termingerecht und vollständig.',
              'Die OTIF-Quote beträgt 41 / 50 × 100 = 82 Prozent. Die reine Termintreue läge bei 45 / 50 × 100 = 90 Prozent. Der Unterschied macht sichtbar, dass ein pünktlicher Termin allein die vollständige Versorgung nicht garantiert.',
            ],
            effects: [
              'Liefertermintreue: 90 Prozent.',
              'OTIF: 82 Prozent, weil Fehlmengen als nicht vollständig zählen.',
            ],
          },
        ],
      },
      {
        heading: 'Lieferanten- und eigene Lieferperformance',
        paragraphs: [
          [
            'Bei der Lieferantenperformance bewertet ein Unternehmen, ob ein Lieferant bestätigte Anforderungen erfüllt. Sie ist ein mögliches Kriterium der ',
            { type: 'link', href: '/wissen/lieferantenbewertung', text: 'Lieferantenbewertung' },
            ', sollte aber nicht als einzige Kennzahl verwendet werden. Qualität, Kommunikation, Flexibilität und Risiko können ebenso entscheidend sein.',
          ],
          'Die eigene Lieferperformance betrachtet, ob das Unternehmen seine Kunden in Termin, Menge, Vollständigkeit und Qualität versorgt. Ursachen können in Vertrieb, Planung, Bestand, Produktion, Lager oder Transport liegen. Eine schwache eigene Kennzahl ist daher nicht automatisch ein Fehler eines einzelnen Bereichs oder Lieferanten.',
          'Auch Beschaffung und Transport beeinflussen die Werte: verspätete Vorlieferungen, schwankende Wiederbeschaffungszeiten, Engpässe oder Transportstörungen können Fehlmengen und Terminabweichungen auslösen. Für Ursachenanalyse sollten deshalb Lieferant, Lager, Produktion und Transport gemeinsam betrachtet werden.',
          'Vergleiche zwischen Lieferanten und eigener Leistung brauchen eine gleichartige Definition nicht zwingend, aber jeweils eine klare, dokumentierte Regel. Ein Lieferant kann zum Beispiel gegen einen bestätigten Wareneingangstermin gemessen werden, während die eigene Leistung gegen ein Kundenzeitfenster gemessen wird.',
        ],
      },
      {
        heading: 'Service-Level, Zielwerte und Messung über Zeit',
        paragraphs: [
          'Ein Service-Level beschreibt die vereinbarte oder angestrebte Leistungsqualität, etwa ein Terminfenster, eine Verfügbarkeit oder eine OTIF-Regel. Zielwerte sollten aus Kundenanforderungen, Produktkritikalität, Kosten, Kapazität und Risiko abgeleitet werden. Einen universellen Idealwert gibt es nicht.',
          'Aussagekräftig wird Lieferperformance vor allem als Zeitreihe. Schwankungen nach Produktgruppe, Region, Kunde, Lieferant oder Ursache können Hinweise geben, wo sich ein Prozess verändert hat. Einzelwerte sollten durch Mengen, kritische Fälle, saisonale Effekte und bekannte Störungen ergänzt werden.',
          [
            'Ein ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand' },
            ' kann Fehlmengen für einen begrenzten Zeitraum abfedern. Er verbessert jedoch nicht automatisch die Termin- oder Mengenleistung eines Lieferanten und sollte nicht die Analyse wiederkehrender Ursachen ersetzen.',
          ],
        ],
      },
      {
        heading: 'Zusammenhang mit abgestimmten Lieferprozessen',
        paragraphs: [
          [
            'Bei ',
            { type: 'link', href: '/wissen/just-in-time-sequence', text: 'Just-in-Time & Just-in-Sequence' },
            ' sind Liefertermine, Mengen und teilweise auch Reihenfolgen besonders sensibel. Kleine Abweichungen können dort schneller zu Störungen führen, weil die Bestands- und Zeitpuffer gering sind.',
          ],
          [
            'Weitere Grundregeln zur Auswahl, Berechnung und Einordnung betrieblicher Kennzahlen bündelt der Hub ',
            { type: 'link', href: '/wissen/kennzahlen', text: 'Kennzahlen & Unternehmensanalyse' },
            '. Lieferperformance ergänzt diese Struktur um die besondere Sicht auf Lieferprozesse.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, die Datenbasis nicht festzulegen. Ohne Regel für Termin, Teillieferung, Toleranz, Zählobjekt und Qualitätsbehandlung sind Kennzahlen nicht verlässlich vergleichbar.',
          'Auch eine gute Durchschnittsquote kann kritische Ausfälle verdecken. Bei wenigen, aber sehr wichtigen Aufträgen sollten Abweichungen zusätzlich einzeln betrachtet werden.',
          'Kennzahlen sollten nicht als Selbstzweck genutzt werden. Sie helfen, Ursachen zu erkennen und Maßnahmen zu prüfen; sie ersetzen weder die Kommunikation mit Partnern noch eine Analyse von Kapazität, Bestand und Prozessablauf.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Liefertermintreue misst die Einhaltung eines zugesagten Termins oder Zeitfensters.',
    'Servicegrad und Lieferbereitschaft messen Verfügbarkeit oder Bedarfsdeckung; die verwendete Berechnungsart muss klar benannt sein.',
    'Liefertermintreue und Lieferzeit sind unterschiedliche Kennzahlen: Die eine misst die Einhaltung eines Zusagetermins, die andere eine Zeitdauer.',
    'OTIF misst, ob Lieferungen gleichzeitig termingerecht und vollständig erfolgen; die genaue Regel muss festgelegt werden.',
    'Lieferanten- und eigene Lieferperformance können unterschiedliche Ursachen und Maßstäbe haben.',
    'Zielwerte und Service-Level müssen zu Produkt, Kundenanforderung, Kosten und Risiko passen; es gibt keinen universellen Idealwert.',
    'Vergleiche über Zeit und zwischen Partnern funktionieren nur mit konsistenten Definitionen und einer nachvollziehbaren Datenbasis.',
  ],
  commonMistakes: [
    'Liefertermintreue, Lieferzeit, Servicegrad, Vollständigkeit und Qualität als dieselbe Kennzahl behandeln',
    'OTIF ohne klare Regeln zu Zeitfenster, Teillieferungen, Mengen, Positionen und Toleranzen berechnen',
    'Kennzahlen mit unterschiedlichen Zählobjekten oder Datenregeln direkt vergleichen',
    'Durchschnittswerte nutzen, obwohl einzelne kritische Fehlmengen oder Verzüge entscheidend sind',
    'universelle Zielwerte annehmen, statt Anforderungen, Kosten, Risiko und Prozess zu berücksichtigen',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Liefertermintreue und Servicegrad?',
      answer: 'Liefertermintreue misst die Einhaltung eines zugesagten Termins. Servicegrad beziehungsweise Lieferbereitschaft misst Verfügbarkeit oder Bedarfsdeckung nach einer vorher festgelegten Berechnungsart.',
    },
    {
      question: 'Was ist Liefertermintreue?',
      answer: 'Sie zeigt, welcher Anteil der nach einer festgelegten Regel bewerteten Lieferungen zum vereinbarten Termin oder im vereinbarten Zeitfenster eintrifft.',
    },
    {
      question: 'Was bedeutet OTIF?',
      answer: 'OTIF steht für On Time In Full. Die Kennzahl misst, welcher Anteil der Lieferungen gleichzeitig termingerecht und vollständig erfolgt.',
    },
    {
      question: 'Ist Lieferzeit dasselbe wie Liefertermintreue?',
      answer: 'Nein. Lieferzeit ist eine Dauer, etwa von Bestellung bis Ankunft. Liefertermintreue misst die Einhaltung eines vereinbarten Termins oder Zeitfensters.',
    },
    {
      question: 'Gibt es einen idealen OTIF- oder Termintreuewert?',
      answer: 'Nein. Ein sinnvoller Zielwert hängt unter anderem von Produkt, Kundenanforderung, Kosten, Kapazität, Risiko und dem vereinbarten Service-Level ab.',
    },
  ],
  related: [
    'lieferantenbewertung',
    'sicherheitsbestand-meldebestand-servicegrad',
    'just-in-time-sequence',
    'kennzahlen',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferperformance;
