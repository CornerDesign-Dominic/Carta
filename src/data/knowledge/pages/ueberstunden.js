import { defaultDisclaimer } from '../shared.js';

const ueberstunden = {
  slug: 'ueberstunden',
  category: 'Personal & Lohn',
  title: 'Überstunden',
  description: 'Überstunden einfach erklärt: Anordnung, Vergütung, Freizeitausgleich, Zuschläge, Arbeitszeitgesetz und Dokumentation der Arbeitszeit.',
  seo: {
    title: 'Überstunden: Regelung, Vergütung und Ausgleich | Belege24',
    description: 'Erfahre, wann Überstunden anfallen können, wie Vergütung oder Freizeitausgleich geregelt werden und welche Arbeitszeitgrenzen gelten.',
    canonicalPath: '/wissen/ueberstunden',
  },
  article: {
    intro: 'Überstunden sind Arbeitsstunden, die über die individuell vereinbarte regelmäßige Arbeitszeit hinausgehen. Ob sie angeordnet werden können und wie sie ausgeglichen oder vergütet werden, ergibt sich vor allem aus dem Arbeitsvertrag, einem Tarifvertrag oder einer Betriebsvereinbarung.',
    sections: [
      {
        heading: 'Was sind Überstunden?',
        paragraphs: [
          [
            'Als ',
            { type: 'glossary', id: 'ueberstunden', text: 'Überstunden' },
            ' werden im Arbeitsalltag meist Stunden bezeichnet, die über die individuell vereinbarte regelmäßige Arbeitszeit hinausgehen. Bei einer Teilzeitkraft kann das daher schon vor der für Vollzeit vereinbarten Stundenzahl der Fall sein.',
          ],
          'Der Begriff „Mehrarbeit“ wird nicht überall gleich verwendet. Er kann ebenfalls zusätzliche Arbeitszeit meinen, wird aber teils für Arbeitszeit über besonderen gesetzlichen oder tariflichen Grenzen genutzt. Entscheidend ist deshalb immer, welche Regelung im konkreten Arbeitsverhältnis den Begriff verwendet.',
        ],
      },
      {
        heading: 'Wann können Überstunden angeordnet oder erwartet werden?',
        paragraphs: [
          'Eine allgemeine Pflicht, jederzeit Überstunden zu leisten, folgt nicht allein aus dem Arbeitsvertrag. Ob der Arbeitgeber zusätzliche Arbeit anordnen kann, richtet sich insbesondere nach der vereinbarten Arbeitszeit und einer wirksamen Regelung im Arbeitsvertrag, Tarifvertrag oder einer Betriebsvereinbarung.',
          'Auch wenn zusätzliche Arbeit erwartet wird, sollte sie nachvollziehbar angeordnet, genehmigt oder jedenfalls betrieblich veranlasst sein. Eine eigenmächtig länger geleistete Arbeitszeit begründet nicht ohne Weiteres einen Vergütungs- oder Freizeitausgleichsanspruch.',
        ],
      },
      {
        heading: 'Arbeitsvertrag, Tarifvertrag und Betriebsvereinbarung',
        paragraphs: [
          'Diese Regelwerke können festlegen, in welchem Umfang Überstunden möglich sind, wer sie anordnet, wie sie dokumentiert werden und ob ein Ausgleich in Geld oder Freizeit vorgesehen ist. Tarifverträge und Betriebsvereinbarungen können dabei detailliertere Regelungen enthalten als ein einzelner Arbeitsvertrag.',
          'Prüfe deshalb nicht nur die Überschrift einer Klausel. Relevant sind auch die vereinbarte regelmäßige Arbeitszeit, Ausgleichszeiträume, Genehmigungsvorbehalte und gegebenenfalls geltende tarifliche Regeln.',
        ],
      },
      {
        heading: 'Vergütung oder Freizeitausgleich',
        paragraphs: [
          'Überstunden können vergütet oder durch Freizeit ausgeglichen werden. Welche Form gilt, sollte sich aus der anwendbaren Vereinbarung ergeben. Ohne klare Regelung kann ein Vergütungsanspruch nur unter den jeweiligen Umständen entstehen; § 612 BGB knüpft daran an, ob eine Vergütung für die Leistung zu erwarten ist.',
          'Freizeitausgleich sollte zeitlich und im Umfang nachvollziehbar festgehalten werden. Sonst lässt sich später schwer prüfen, welche zusätzlichen Stunden bereits ausgeglichen wurden und welche noch offen sind.',
        ],
      },
      {
        heading: 'Sind Überstunden mit dem Gehalt abgegolten?',
        paragraphs: [
          'Eine Vereinbarung kann vorsehen, dass ein bestimmter Umfang zusätzlicher Arbeitszeit mit dem Gehalt abgegolten ist. Ob und in welchem Umfang eine solche Klausel wirksam ist, hängt jedoch von ihrer konkreten Formulierung und dem Arbeitsverhältnis ab.',
          'Pauschale Formulierungen ohne erkennbaren Umfang sind für die Praxis riskant. Arbeitgeber und Beschäftigte sollten klar festhalten, welche Stunden erfasst werden, welche gegebenenfalls vom Gehalt umfasst sind und wie darüber hinausgehende Arbeit behandelt wird.',
        ],
      },
      {
        heading: 'Überstundenzuschläge sind nicht automatisch geschuldet',
        paragraphs: [
          'Für Überstunden an sich gibt es keinen allgemeinen gesetzlichen Zuschlag. Ein Zuschlag kann sich aber aus Tarifvertrag, Betriebsvereinbarung, Arbeitsvertrag oder besonderen gesetzlichen Regeln ergeben.',
          [
            'Davon zu unterscheiden sind Zuschläge für bestimmte Arbeitszeiten, etwa Nacht-, Sonn- oder Feiertagsarbeit. Sie folgen eigenen Voraussetzungen. Mehr dazu erklärt die Seite ',
            { type: 'link', href: '/wissen/verguetungsarten', text: 'Vergütungsarten' },
            '.',
          ],
        ],
      },
      {
        heading: 'Arbeitszeitgesetz: Höchstarbeitszeit, Pausen und Ruhezeit',
        paragraphs: [
          'Das Arbeitszeitgesetz begrenzt die tägliche Arbeitszeit grundsätzlich auf acht Stunden an Werktagen. Sie darf auf bis zu zehn Stunden verlängert werden, wenn innerhalb von sechs Kalendermonaten oder 24 Wochen im Durchschnitt acht Stunden werktäglich nicht überschritten werden. Tarifliche oder gesetzliche Sonderregeln können abweichen.',
          'Zusätzliche Arbeitsstunden müssen außerdem mit den Regeln zu Ruhepausen und täglicher Ruhezeit vereinbar sein. Eine Vereinbarung über Überstunden hebt diese Schutzvorgaben nicht auf.',
        ],
      },
      {
        heading: 'Arbeitszeit dokumentieren',
        paragraphs: [
          'Der Arbeitgeber muss die gesamte Arbeitszeit erfassen; das Bundesarbeitsministerium verweist hierzu auf die Rechtsprechung des Bundesarbeitsgerichts. Nach dem Arbeitszeitgesetz sind mindestens die über acht Stunden werktäglich hinausgehenden Arbeitszeiten aufzuzeichnen und die Nachweise mindestens zwei Jahre aufzubewahren.',
          [
            'Für eine nachvollziehbare Prüfung helfen Beginn, Ende, Pausen und die Zuordnung zu angeordneten oder genehmigten Überstunden. Der ',
            { type: 'link', href: '/tools/arbeitszeitrechner', text: 'Arbeitszeitrechner' },
            ' unterstützt dich dabei, Arbeitszeiten übersichtlich zu berechnen.',
          ],
        ],
      },
      {
        heading: 'Teilzeit: zusätzliche Stunden richtig einordnen',
        paragraphs: [
          'Bei Teilzeitbeschäftigten können zusätzliche Stunden bereits oberhalb der individuell vereinbarten Teilzeit anfallen. Ob sie als Überstunden oder Mehrarbeit bezeichnet werden und welche Vergütung oder welcher Ausgleich folgt, richtet sich nach der jeweiligen Regelung.',
          'Teilzeitbeschäftigte dürfen wegen der Teilzeit grundsätzlich nicht schlechter behandelt werden, sofern kein sachlicher Grund vorliegt. Für die konkrete Einordnung sind vor allem Vertrag, Arbeitszeitmodell und anwendbare tarifliche oder betriebliche Vorschriften wichtig.',
        ],
      },
      {
        heading: 'Überstunden praktisch prüfen',
        paragraphs: [
          'Halte die vereinbarte Arbeitszeit, die tatsächlich geleisteten Stunden und den Anlass für zusätzliche Arbeit getrennt fest. Prüfe anschließend, ob eine Anordnung oder Genehmigung vorliegt und welche Regel zum Ausgleich gilt.',
          [
            'Wenn die Vergütung nach Stunden berechnet wird, hilft der ',
            { type: 'link', href: '/tools/stundenlohnrechner', text: 'Stundenlohnrechner' },
            ' bei einer ersten Einordnung. Für konkrete Ansprüche oder strittige Klauseln ist eine individuelle arbeitsrechtliche Prüfung sinnvoll.',
          ],
        ],
      },
    ],
  },
  generator: {
    label: 'Arbeitszeit berechnen',
    href: '/tools/arbeitszeitrechner',
    text: 'Berechne Arbeitszeit aus Beginn, Ende und Pausen, damit zusätzliche Stunden nachvollziehbar eingeordnet werden können.',
  },
  keyPoints: [
    'Überstunden liegen im Arbeitsalltag meist über der individuell vereinbarten regelmäßigen Arbeitszeit',
    'Ob sie angeordnet, vergütet oder durch Freizeit ausgeglichen werden, richtet sich vor allem nach den anwendbaren Vereinbarungen',
    'Eine eigenmächtig verlängerte Arbeitszeit führt nicht automatisch zu einem Anspruch',
    'Ein allgemeiner gesetzlicher Überstundenzuschlag besteht nicht',
    'Arbeitszeitgrenzen, Pausen und Ruhezeiten bleiben auch bei zusätzlicher Arbeit einzuhalten',
    'Die gesamte Arbeitszeit sollte nachvollziehbar erfasst werden',
    'Bei Teilzeit kann zusätzliche Arbeitszeit bereits oberhalb der individuell vereinbarten Stunden entstehen',
  ],
  commonMistakes: [
    'jede zusätzlich geleistete Stunde automatisch als vergütungspflichtige Überstunde behandeln',
    'Arbeitsvertrag, Tarifvertrag oder Betriebsvereinbarung nicht auf Ausgleichsregeln prüfen',
    'pauschale Abgeltungsklauseln ohne klaren Umfang verwenden oder akzeptieren',
    'annehmen, für Überstunden sei immer ein gesetzlicher Zuschlag geschuldet',
    'Höchstarbeitszeit, Pausen oder Ruhezeiten wegen Arbeitsdrucks übergehen',
    'Überstunden ohne nachvollziehbare Erfassung, Anordnung oder Genehmigung leisten',
    'Teilzeit und Vollzeit ohne Blick auf die individuell vereinbarte Arbeitszeit gleich behandeln',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Überstunden und Mehrarbeit?',
      answer: 'Überstunden meinen meist Arbeit über die individuell vereinbarte Arbeitszeit. „Mehrarbeit“ wird nicht einheitlich verwendet und kann je nach Vertrag, Tarifvertrag oder Schutzvorschrift etwas anderes meinen.',
    },
    {
      question: 'Muss ich Überstunden leisten?',
      answer: 'Das hängt vor allem von Arbeitsvertrag, Tarifvertrag oder Betriebsvereinbarung ab. Eine allgemeine Pflicht zu unbegrenzten Überstunden besteht nicht.',
    },
    {
      question: 'Müssen Überstunden bezahlt werden?',
      answer: 'Nicht automatisch. Maßgeblich ist, ob eine Vergütung oder Freizeitausgleich vereinbart ist und unter welchen Umständen die zusätzlichen Stunden geleistet wurden.',
    },
    {
      question: 'Gibt es immer einen Überstundenzuschlag?',
      answer: 'Nein. Ein allgemeiner gesetzlicher Zuschlag für Überstunden besteht nicht. Ansprüche können sich aber aus Vertrag, Tarifvertrag, Betriebsvereinbarung oder besonderen Regeln für bestimmte Arbeitszeiten ergeben.',
    },
    {
      question: 'Wie viele Stunden darf ich am Tag arbeiten?',
      answer: 'Grundsätzlich gelten acht Stunden an Werktagen. Eine Verlängerung auf bis zu zehn Stunden ist nur unter den gesetzlichen Ausgleichsvoraussetzungen möglich; zusätzlich sind Pausen und Ruhezeiten zu beachten.',
    },
    {
      question: 'Müssen Überstunden dokumentiert werden?',
      answer: 'Die gesamte Arbeitszeit ist zu erfassen. Nach dem Arbeitszeitgesetz müssen mindestens Zeiten über acht Stunden werktäglich aufgezeichnet und die Nachweise zwei Jahre aufbewahrt werden.',
    },
  ],
  related: [
    'personal-lohn',
    'verguetungsarten',
    'lohnabrechnung',
    'bruttolohn-nettolohn',
  ],
  sources: [
    { label: '§ 3 ArbZG – Arbeitszeit der Arbeitnehmer', url: 'https://www.gesetze-im-internet.de/arbzg/__3.html' },
    { label: '§ 4 ArbZG – Ruhepausen', url: 'https://www.gesetze-im-internet.de/arbzg/__4.html' },
    { label: '§ 5 ArbZG – Ruhezeit', url: 'https://www.gesetze-im-internet.de/arbzg/__5.html' },
    { label: '§ 16 ArbZG – Arbeitszeitnachweise', url: 'https://www.gesetze-im-internet.de/arbzg/__16.html' },
    { label: '§ 612 BGB – Vergütung', url: 'https://www.gesetze-im-internet.de/bgb/__612.html' },
    { label: '§ 4 TzBfG – Verbot der Diskriminierung von Teilzeitbeschäftigten', url: 'https://www.gesetze-im-internet.de/tzbfg/__4.html' },
    { label: 'BMAS – Fragen und Antworten zur Arbeitszeiterfassung', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Arbeitnehmerrechte/Regelungen-zur-Arbeitszeit/Fragen-und-Antworten/faq-arbeitszeiterfassung.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default ueberstunden;
