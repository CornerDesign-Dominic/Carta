import { defaultDisclaimer } from '../shared.js';

const planIstVergleich = {
  slug: 'plan-ist-vergleich',
  category: 'Kostenrechnung & Controlling',
  title: 'Plan-Ist-Vergleich',
  description: 'Plan-Ist-Vergleich einfach erklärt: Planwerte und Istwerte vergleichen, Abweichungen berechnen, Ursachen analysieren und Maßnahmen ableiten.',
  seo: {
    title: 'Plan-Ist-Vergleich einfach erklärt | Belege24',
    description: 'Erfahre, wie du Plan- und Istwerte vergleichst, absolute und prozentuale Abweichungen berechnest und daraus passende Maßnahmen ableitest.',
    canonicalPath: '/wissen/plan-ist-vergleich',
  },
  article: {
    intro: 'Ein Plan-Ist-Vergleich zeigt, wie sich tatsächliche Werte gegenüber der Planung entwickelt haben. Er hilft dir, Abweichungen bei Umsatz, Kosten, Absatz oder Personal früh zu erkennen, Ursachen einzuordnen und gezielt zu reagieren.',
    sections: [
      {
        heading: 'Was ist ein Plan-Ist-Vergleich?',
        paragraphs: [
          'Beim Plan-Ist-Vergleich stellst du einen geplanten Wert dem tatsächlich erreichten Wert gegenüber. Der Vergleich kann sich auf einen Monat, ein Quartal, ein Projekt oder das gesamte Geschäftsjahr beziehen.',
          'Er ist ein einfaches Controlling-Werkzeug: Er bewertet nicht nur, ob ein Ziel erreicht wurde, sondern schafft die Grundlage, um Abweichungen zu verstehen. Entscheidend ist, dass Plan und Ist dieselbe Größe, denselben Zeitraum und dieselbe Abgrenzung betreffen.',
        ],
      },
      {
        heading: 'Planwert, Istwert und Sollwert unterscheiden',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'planwert', text: 'Planwert' },
            ' ist der erwartete oder festgelegte Wert zu Beginn der Planung. Der ',
            { type: 'glossary', id: 'istwert', text: 'Istwert' },
            ' zeigt, was tatsächlich eingetreten ist.',
          ],
          'Ein Sollwert ist nicht immer dasselbe wie ein Planwert. Er kann zum Beispiel einen für den aktuellen Zeitpunkt fortgeschriebenen, angepassten oder aus einer Regel abgeleiteten Zielwert bezeichnen. Verwende den Begriff deshalb nur, wenn seine Berechnung im Unternehmen eindeutig festgelegt ist.',
        ],
      },
      {
        heading: 'Abweichungen berechnen',
        paragraphs: [
          [
            'Die absolute ',
            { type: 'glossary', id: 'abweichung', text: 'Abweichung' },
            ' zeigt den Unterschied als Betrag. Die prozentuale Abweichung setzt diesen Betrag in Beziehung zum Planwert und erleichtert Vergleiche zwischen unterschiedlichen Größenordnungen.',
          ],
          'Wenn der Planwert null ist, lässt sich keine sinnvolle prozentuale Abweichung berechnen. Dann solltest du den absoluten Betrag erläutern und prüfen, warum für die Position kein Planwert vorhanden war.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Absolute Abweichung',
            formula: 'Abweichung = Ist − Plan',
            description: 'Ein positives Vorzeichen bedeutet zunächst nur, dass der Istwert über dem Planwert liegt. Ob das günstig oder ungünstig ist, hängt von der betrachteten Kennzahl ab.',
          },
          {
            label: 'Formel',
            title: 'Prozentuale Abweichung',
            formula: 'Prozentuale Abweichung = (Ist − Plan) ÷ Plan × 100',
            description: 'Die Formel ist nur sinnvoll, wenn der Planwert nicht null ist und Plan- und Istwert vergleichbar abgegrenzt sind.',
          },
        ],
      },
      {
        heading: 'Positive und negative Abweichungen richtig lesen',
        paragraphs: [
          'Ein positives Ergebnis der Formel ist nicht automatisch gut: Bei Umsatz oder Absatz kann ein höherer Istwert zunächst günstig sein. Bei Kosten kann derselbe positive Wert bedeuten, dass mehr ausgegeben wurde als geplant.',
          'Auch eine negative Abweichung ist nicht automatisch schlecht. Niedrigere Kosten können vorteilhaft sein, aber auch durch verschobene Rechnungen, geringere Qualität, fehlende Leistungen oder nicht besetzte Stellen entstehen. Eine Abweichung ist deshalb zuerst ein Signal für eine Analyse, keine fertige Bewertung.',
        ],
      },
      {
        heading: 'Beispiele aus dem Unternehmensalltag',
        paragraphs: [
          'Die Richtung einer Abweichung muss immer zur Kennzahl passen. Die folgenden vereinfachten Beispiele zeigen, wie sich derselbe Rechenweg bei Umsatz, Kosten und Personal unterschiedlich einordnen lässt.',
        ],
        exampleCards: [
          {
            title: 'Umsatz liegt über Plan',
            paragraphs: [
              'Geplant waren 50.000 Euro Umsatz, erreicht wurden 55.000 Euro. Die absolute Abweichung beträgt 5.000 Euro, die prozentuale Abweichung 10 Prozent.',
              'Das kann auf höhere Mengen, bessere Preise oder einen anderen Produktmix hindeuten. Prüfe zusätzlich, ob die zusätzlichen Umsätze auch zu passenden Margen, Zahlungszielen und Kapazitäten führen.',
            ],
          },
          {
            title: 'Materialkosten liegen über Plan',
            paragraphs: [
              'Geplant waren 12.000 Euro Materialkosten, tatsächlich fielen 14.000 Euro an. Die Abweichung beträgt 2.000 Euro beziehungsweise rund 16,7 Prozent.',
              'Mögliche Ursachen sind gestiegene Einkaufspreise, mehr Ausschuss, eine höhere Menge oder eine falsche Planung. Erst die Ursachenanalyse zeigt, ob eine Preis-, Mengen- oder Prozessmaßnahme sinnvoll ist.',
            ],
          },
          {
            title: 'Personaleinsatz weicht ab',
            paragraphs: [
              'Für ein Projekt waren 400 Arbeitsstunden geplant, tatsächlich wurden 360 Stunden erfasst. Die Abweichung beträgt minus 40 Stunden beziehungsweise minus 10 Prozent.',
              'Weniger Stunden können durch einen effizienteren Ablauf entstehen. Sie können aber auch bedeuten, dass Leistungen verschoben, anders dokumentiert oder mit geringerer Qualität erbracht wurden. Der reine Wert beantwortet diese Frage nicht.',
            ],
          },
        ],
      },
      {
        heading: 'Ursachen analysieren',
        paragraphs: [
          'Zerlege auffällige Abweichungen in nachvollziehbare Ursachen. Bei Umsatz können Menge, Preis, Produktmix oder Zeitpunkt eine Rolle spielen. Bei Kosten sind etwa Einkaufspreise, Verbrauch, Auslastung, Personalstunden oder einmalige Effekte relevante Ansatzpunkte.',
          'Prüfe zuerst die Datenqualität: Sind Werte vollständig erfasst? Wurden Plan und Ist nach derselben Struktur gebucht? Liegen Verschiebungen zwischen Monaten vor? Erst danach solltest du wirtschaftliche Schlussfolgerungen ziehen.',
        ],
      },
      {
        heading: 'Maßnahmen aus Abweichungen ableiten',
        paragraphs: [
          'Eine Maßnahme sollte zur Ursache passen. Steigende Materialpreise können etwa eine neue Beschaffung, angepasste Preise oder eine Überprüfung des Verbrauchs auslösen. Bei abweichendem Absatz kann die Ursachenanalyse auf Vertriebsmaßnahmen, Kapazitätsanpassungen oder eine Plananpassung hinweisen.',
          'Halte dabei fest, wer eine Maßnahme übernimmt, bis wann sie umgesetzt werden soll und woran du ihre Wirkung misst. Nicht jede Abweichung erfordert sofort eine Korrektur: Kleine oder einmalige Unterschiede können beobachtet werden, während wiederkehrende oder wesentliche Abweichungen genauer geprüft werden sollten.',
        ],
      },
      {
        heading: 'Regelmäßig im Controlling nutzen',
        paragraphs: [
          'Ein Plan-Ist-Vergleich ist besonders nützlich, wenn er regelmäßig in einem festen Rhythmus erfolgt, zum Beispiel monatlich. So werden Entwicklungen früh sichtbar, bevor sich einzelne Abweichungen über mehrere Perioden summieren.',
          'Er ergänzt Kennzahlen und eine Liquiditätsplanung, ersetzt sie aber nicht. Für die Zahlungsfähigkeit sind zusätzlich die Höhe und der Zeitpunkt tatsächlicher Ein- und Auszahlungen wichtig.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Vergleiche nicht unterschiedliche Zeiträume oder ungleiche Datenstände. Ein Monats-Istwert passt nicht zu einem Jahresplan ohne nachvollziehbare zeitanteilige Planung. Vermeide außerdem, Kosten- und Umsatzabweichungen allein anhand des Vorzeichens zu bewerten.',
          'Ein Plan ist keine unveränderliche Wahrheit. Wenn sich Markt, Auftragslage oder Rahmenbedingungen dauerhaft ändern, kann eine transparente Anpassung der Planung sinnvoll sein. Frühere Planwerte sollten dabei für die Nachvollziehbarkeit erhalten bleiben.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der Plan-Ist-Vergleich stellt geplante und tatsächlich erreichte Werte gegenüber',
    'Plan, Ist und Zeitraum müssen dieselbe Größe und Abgrenzung betreffen',
    'Absolute Abweichung = Ist minus Plan',
    'Prozentuale Abweichungen erleichtern Vergleiche, wenn der Planwert nicht null ist',
    'Ob eine Abweichung günstig oder ungünstig ist, hängt von der Kennzahl und ihrer Ursache ab',
    'Regelmäßige Analysen helfen, Maßnahmen frühzeitig und nachvollziehbar abzuleiten',
  ],
  commonMistakes: [
    'Plan- und Istwerte aus unterschiedlichen Zeiträumen vergleichen',
    'eine positive Abweichung bei Kosten automatisch als günstig bewerten',
    'die prozentuale Abweichung bei einem Planwert von null berechnen',
    'Datenfehler oder zeitliche Verschiebungen als wirtschaftliche Ursache deuten',
    'Einmaleffekte und wiederkehrende Abweichungen nicht unterscheiden',
    'Maßnahmen beschließen, ohne die Ursache der Abweichung zu prüfen',
  ],
  faqs: [
    {
      question: 'Was ist ein Plan-Ist-Vergleich einfach erklärt?',
      answer: 'Er vergleicht einen geplanten Wert mit dem tatsächlich erreichten Wert. Dadurch werden Abweichungen sichtbar, die anschließend nach Ursache und Bedeutung geprüft werden können.',
    },
    {
      question: 'Wie berechnet man die Abweichung?',
      answer: 'Die Grundformel lautet Ist minus Plan. Für die prozentuale Abweichung teilst du diesen Unterschied durch den Planwert und multiplizierst mit 100.',
    },
    {
      question: 'Ist eine positive Abweichung immer gut?',
      answer: 'Nein. Bei Umsatz kann sie günstig sein, bei Kosten kann sie auf eine Überschreitung hinweisen. Entscheidend sind Kennzahl, Ursache und Kontext.',
    },
    {
      question: 'Was ist der Unterschied zwischen Planwert und Sollwert?',
      answer: 'Der Planwert ist der ursprünglich festgelegte Erwartungswert. Ein Sollwert kann je nach Unternehmen ein fortgeschriebener, angepasster oder regelbasiert abgeleiteter Zielwert sein.',
    },
    {
      question: 'Wie oft sollte ein Plan-Ist-Vergleich erfolgen?',
      answer: 'Das hängt von Größe und Dynamik des Unternehmens ab. Für viele betriebliche Steuerungsgrößen ist ein monatlicher Rhythmus sinnvoll, wenn die Daten rechtzeitig verfügbar sind.',
    },
  ],
  related: [
    'kostenrechnung-controlling',
    'kennzahlen',
    'wirtschaftlichkeit-rentabilitaet',
    'kostenvergleichsrechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default planIstVergleich;
