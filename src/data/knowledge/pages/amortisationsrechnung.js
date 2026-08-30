import { defaultDisclaimer } from '../shared.js';

const amortisationsrechnung = {
  slug: 'amortisationsrechnung',
  category: 'Finanzierung & Investition',
  title: 'Amortisationsrechnung',
  description: 'Amortisationsrechnung einfach erklärt: Amortisationsdauer und Rückfluss einer Investition berechnen, vergleichen und richtig einordnen.',
  seo: {
    title: 'Amortisationsrechnung einfach erklärt | Belege24',
    description: 'Erfahre, wie du die Amortisationsdauer einer Investition mit dem jährlichen Rückfluss berechnest und welche Grenzen die statische Methode hat.',
    canonicalPath: '/wissen/amortisationsrechnung',
  },
  article: {
    intro: 'Die Amortisationsrechnung zeigt, nach welcher Zeit sich eine Investition rechnerisch durch ihre Rückflüsse bezahlt gemacht hat. Sie hilft dir einzuschätzen, wie lange Kapital gebunden ist, ersetzt aber keine vollständige Investitionsentscheidung.',
    sections: [
      {
        heading: 'Was bedeutet Amortisation?',
        paragraphs: [
          [
            'Von ',
            { type: 'glossary', id: 'amortisation', text: 'Amortisation' },
            ' spricht man, wenn die anfängliche Anschaffungsauszahlung einer Investition durch die daraus erwarteten Rückflüsse wieder erreicht wird. Die Zeit bis dahin heißt Amortisationsdauer oder Payback Period.',
          ],
          'Die Frage lautet also nicht zuerst, wie hoch der Gewinn insgesamt ist, sondern wann die eingesetzten Mittel rechnerisch zurückfließen. Das ist besonders für die Kapitalbindung und eine erste Risikoeinschätzung hilfreich.',
        ],
      },
      {
        heading: 'Rückfluss einer Investition verstehen',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'rueckfluss', text: 'Rückfluss' },
            ' beschreibt den Betrag, der einer Investition pro Periode zugerechnet wird und die Anschaffungsauszahlung zurückführt. In der klassischen statischen Betrachtung wird er häufig aus durchschnittlichem Gewinn und ',
            { type: 'glossary', id: 'abschreibung', text: 'Abschreibung' },
            ' gebildet.',
          ],
          'Die Abschreibung wird dabei ergänzt, weil sie zwar den Gewinn mindert, in diesem vereinfachten Modell aber keine Auszahlung der jeweiligen Periode darstellt. Diese Definition passt nur, wenn Gewinn und Abschreibung für dieselbe Investition, Periode und Abgrenzung ermittelt wurden.',
        ],
        formulaCards: [
          {
            label: 'Grundlage',
            title: 'Klassischer statischer Rückfluss',
            formula: 'Jährlicher Rückfluss = durchschnittlicher Gewinn + Abschreibung',
            description: 'Diese verbreitete Vereinfachung wird genutzt, wenn der jährliche Rückfluss annähernd konstant ist. Andere Rückflussdefinitionen müssen klar benannt werden.',
          },
        ],
      },
      {
        heading: 'Amortisationsdauer berechnen',
        paragraphs: [
          'Bei einem annähernd gleich hohen Rückfluss pro Jahr teilst du die Anschaffungsauszahlung durch den jährlichen Rückfluss. Das Ergebnis zeigt die Anzahl der Jahre bis zur rechnerischen Amortisation.',
          'Fallen Rückflüsse von Jahr zu Jahr unterschiedlich aus, reicht diese Kurzform nicht aus. Dann werden die jährlichen Rückflüsse nacheinander aufaddiert, bis die Anschaffungsauszahlung erreicht ist.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Amortisationsdauer bei konstantem Rückfluss',
            formula: 'Amortisationsdauer = Anschaffungsauszahlung ÷ jährlicher Rückfluss',
            description: 'Der Rückfluss muss zur gleichen Investition gehören und sich auf eine durchschnittliche Jahresperiode beziehen. Das Ergebnis ist eine vereinfachte Payback-Dauer.',
          },
        ],
      },
      {
        heading: 'Beispiel: zwei Investitionen vergleichen',
        paragraphs: [
          'Zwei Maschinen unterscheiden sich bei Anschaffungsauszahlung, Gewinn und Abschreibung. Beide Werte werden als durchschnittliche Jahreswerte angenommen.',
        ],
        exampleCards: [
          {
            title: 'Maschine A oder Maschine B?',
            paragraphs: [
              'Maschine A benötigt eine Anschaffungsauszahlung von 120.000 Euro. Sie erwartet durchschnittlich 18.000 Euro Gewinn und 12.000 Euro Abschreibung pro Jahr. Der jährliche Rückfluss beträgt damit 30.000 Euro.',
              'Amortisationsdauer A = 120.000 Euro ÷ 30.000 Euro = 4 Jahre.',
              'Maschine B benötigt 150.000 Euro. Ihr durchschnittlicher Gewinn beträgt 24.000 Euro, die jährliche Abschreibung 12.000 Euro. Der jährliche Rückfluss beträgt damit 36.000 Euro.',
              'Amortisationsdauer B = 150.000 Euro ÷ 36.000 Euro = 4,17 Jahre, also rund 4 Jahre und 2 Monate.',
              'Maschine A amortisiert sich nach dieser Rechnung schneller. Maschine B kann dennoch interessant sein, etwa wenn ihr höherer Gewinn nach der Amortisation, ihre Kapazität oder ihre Qualität den längeren Rückzahlungszeitraum rechtfertigen.',
            ],
            effects: [
              'Rückfluss Maschine A: 30.000 Euro pro Jahr',
              'Amortisationsdauer Maschine A: 4 Jahre',
              'Rückfluss Maschine B: 36.000 Euro pro Jahr',
              'Amortisationsdauer Maschine B: rund 4 Jahre und 2 Monate',
            ],
          },
        ],
      },
      {
        heading: 'Kurze und lange Amortisationszeiten einordnen',
        paragraphs: [
          'Eine kürzere Amortisationsdauer bedeutet grundsätzlich, dass das eingesetzte Kapital rechnerisch früher zurückfließt. Das kann das Risiko und den Zeitraum der Kapitalbindung verringern.',
          'Eine lange Amortisationsdauer ist nicht automatisch ein Ausschlusskriterium. Investitionen mit längerer Nutzungsdauer, strategischem Nutzen oder hohen Rückflüssen nach der Amortisation können trotzdem sinnvoll sein. Eine pauschale Ziel- oder Höchstdauer gibt es nicht.',
        ],
      },
      {
        heading: 'Unterschied zur Rentabilität',
        paragraphs: [
          'Die Amortisationsrechnung fragt, wann sich eine Investition rechnerisch zurückzahlt. Die Rentabilitätsvergleichsrechnung setzt dagegen Gewinn und Kapital ins Verhältnis und bewertet damit eine andere Frage.',
          'Es ist möglich, dass eine Investition sich schnell amortisiert, aber eine geringere Rentabilität aufweist als eine andere Alternative. Für eine tragfähige Entscheidung solltest du beide Blickwinkel und weitere Faktoren zusammen betrachten.',
        ],
      },
      {
        heading: 'Was die statische Methode nicht zeigt',
        paragraphs: [
          'Die statische Amortisationsrechnung berücksichtigt Rückflüsse nach dem Amortisationszeitpunkt nicht. Sie kann daher Vorteile einer langlebigen Investition mit hohen späteren Überschüssen unterschätzen.',
          [
            'Außerdem behandelt sie Rückflüsse verschiedener Jahre gleich. Den Zeitwert des Geldes sowie die tatsächlichen Zahlungszeitpunkte berücksichtigt sie nicht. Die ',
            { type: 'link', href: '/wissen/dynamische-amortisationsrechnung', text: 'dynamische Amortisationsrechnung' },
            ' bezieht diese Unterschiede über abgezinste Rückflüsse ein.',
          ],
        ],
      },
      {
        heading: 'Grenzen und typische Fehler',
        paragraphs: [
          'Die Methode arbeitet oft mit durchschnittlichen und konstanten Jahreswerten. Bei stark schwankenden Rückflüssen, langen Laufzeiten oder hohen Risiken kann das Ergebnis deshalb nur eine grobe Orientierung sein.',
          'Vermeide es, Gewinn und Rückfluss gleichzusetzen oder Abschreibungen doppelt zu berücksichtigen. Prüfe außerdem, ob Anschaffungsauszahlung, Rückfluss und Zeitraum wirklich zur selben Investition gehören.',
          'Eine kurze Amortisationsdauer allein macht eine Investition nicht automatisch vorteilhaft. Rentabilität, Liquidität, Finanzierung, Qualität und strategische Ziele können zu einer anderen Gesamtentscheidung führen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Amortisationsrechnung zeigt, wann sich eine Investition rechnerisch durch Rückflüsse bezahlt gemacht hat.',
    'Bei konstantem Rückfluss wird die Anschaffungsauszahlung durch den jährlichen Rückfluss geteilt.',
    'Der klassische statische Rückfluss besteht häufig aus durchschnittlichem Gewinn und Abschreibung.',
    'Eine kürzere Amortisationsdauer verringert grundsätzlich die Dauer der Kapitalbindung.',
    'Rückflüsse nach dem Amortisationszeitpunkt bleiben bei der Methode unberücksichtigt.',
    'Zeitwert des Geldes, Zahlungszeitpunkte und Risiko werden nicht ausreichend abgebildet.',
  ],
  commonMistakes: [
    'Gewinn und Rückfluss gleichsetzen, obwohl die Abschreibung berücksichtigt werden muss.',
    'Anschaffungsauszahlung und Rückflüsse aus unterschiedlichen Perioden oder Annahmen kombinieren.',
    'bei schwankenden Rückflüssen mit einer konstanten Durchschnittsformel rechnen.',
    'Rückflüsse nach der Amortisation für die Entscheidung vollständig ausblenden.',
    'eine kurze Amortisationsdauer mit hoher Rentabilität oder Liquidität gleichsetzen.',
    'Zeitwert des Geldes, Risiko und unterschiedliche Nutzungsdauern nicht zusätzlich prüfen.',
  ],
  faqs: [
    {
      question: 'Was ist eine Amortisationsrechnung einfach erklärt?',
      answer: 'Sie zeigt, nach welcher Zeit eine Investition ihre Anschaffungsauszahlung durch erwartete Rückflüsse rechnerisch wieder erreicht.',
    },
    {
      question: 'Wie berechnet man die Amortisationsdauer?',
      answer: 'Bei gleichbleibendem jährlichen Rückfluss teilst du die Anschaffungsauszahlung durch den jährlichen Rückfluss.',
    },
    {
      question: 'Was gehört zum Rückfluss?',
      answer: 'In der klassischen statischen Betrachtung werden häufig durchschnittlicher Gewinn und Abschreibung addiert. Die verwendete Abgrenzung sollte immer klar sein.',
    },
    {
      question: 'Ist eine kurze Amortisationsdauer immer besser?',
      answer: 'Nein. Sie zeigt einen schnelleren Kapitalrückfluss, aber berücksichtigt weder spätere Rückflüsse noch Rentabilität, Risiko oder strategische Ziele vollständig.',
    },
    {
      question: 'Was ist der Unterschied zwischen statischer und dynamischer Amortisation?',
      answer: 'Die statische Methode arbeitet meist mit Durchschnittswerten. Eine dynamische Betrachtung berücksichtigt zusätzlich Zahlungszeitpunkte und den Zeitwert des Geldes.',
    },
  ],
  related: [
    'statische-investitionsrechnung',
    'rentabilitaetsvergleichsrechnung',
    'gewinnvergleichsrechnung',
    'dynamische-investitionsrechnung',
    'dynamische-amortisationsrechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default amortisationsrechnung;
