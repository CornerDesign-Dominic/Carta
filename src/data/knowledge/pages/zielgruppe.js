import { defaultDisclaimer } from '../shared.js';

const zielgruppe = {
  slug: 'zielgruppe',
  category: 'Marketing & Vertrieb',
  title: 'Zielgruppe',
  description: 'Eine Zielgruppe anhand relevanter Merkmale abgrenzen und als Grundlage für Angebot, Preis, Vertrieb und Kommunikation nutzen.',
  seo: {
    title: 'Zielgruppe definieren – einfach erklärt | Belege24',
    description: 'Erfahre, was eine Zielgruppe ist, welche Merkmale zur Segmentierung helfen und wie sie sich von einer Persona unterscheidet.',
    canonicalPath: '/wissen/zielgruppe',
  },
  article: {
    intro: 'Eine Zielgruppe umfasst Personen oder Organisationen mit ähnlichen Bedürfnissen und relevanten Merkmalen, für die ein Angebot besonders geeignet sein soll. Eine klare Abgrenzung hilft, Leistungen, Preise, Vertriebswege und Kommunikation gezielter zu planen.',
    sections: [
      {
        heading: 'Was ist eine Zielgruppe?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'zielgruppe', text: 'Zielgruppe' },
            ' ist ein ausgewählter Teil eines größeren Marktes. Die Personen oder Unternehmen innerhalb dieser Gruppe teilen Merkmale, Bedürfnisse oder Kaufbedingungen, die für das konkrete Angebot bedeutsam sind.',
          ],
          '„Alle, die unser Produkt brauchen könnten“ ist meist keine brauchbare Definition. Ein kleines Unternehmen kann selten jede mögliche Kundengruppe gleich gut bedienen. Die Auswahl bedeutet deshalb auch, bestimmte Gruppen zunächst nicht in den Mittelpunkt zu stellen.',
        ],
      },
      {
        heading: 'Warum eine klare Zielgruppe wichtig ist',
        paragraphs: [
          'Eine Abgrenzung verbessert Entscheidungen: Welche Probleme soll das Angebot lösen? Welche Eigenschaften sind wichtig? Welcher Preis ist nachvollziehbar? Wo sucht die Gruppe nach Lösungen und welche Informationen benötigt sie vor dem Kauf?',
          [
            'Diese Antworten fließen in den ',
            { type: 'link', href: '/wissen/marketing-mix', text: 'Marketing-Mix' },
            ' ein. Eine Zielgruppendefinition ist jedoch keine Garantie für Nachfrage. Annahmen müssen durch Gespräche, Beobachtungen, Verkaufsdaten oder andere Marktdaten geprüft werden.',
          ],
        ],
      },
      {
        heading: 'Merkmale zur Segmentierung',
        paragraphs: [
          [
            'Bei der ',
            { type: 'glossary', id: 'marktsegmentierung', text: 'Marktsegmentierung' },
            ' wird ein Markt anhand relevanter Gemeinsamkeiten in Gruppen aufgeteilt. Welche Merkmale sinnvoll sind, hängt vom Angebot und der Kaufentscheidung ab.',
          ],
        ],
        matrixCards: [
          {
            title: 'Typische Merkmalsgruppen',
            cells: [
              { code: 'Demografisch', title: 'Personenbezogene Grundmerkmale', context: 'z. B. Alter, Lebensphase, Beruf', text: 'Nur verwenden, wenn das Merkmal einen nachvollziehbaren Einfluss auf Bedarf oder Kaufentscheidung hat.' },
              { code: 'Geografisch', title: 'Ort und Einzugsgebiet', context: 'z. B. Region, Stadt, Liefergebiet', text: 'Besonders relevant für lokale Leistungen, Erreichbarkeit, Sprache oder Logistik.' },
              { code: 'Verhalten', title: 'Nutzung und Kauf', context: 'z. B. Nutzungshäufigkeit, Kanal, Kaufanlass', text: 'Zeigt, wann, wie und mit welcher Erfahrung eine Lösung gesucht oder genutzt wird.' },
              { code: 'Bedarf', title: 'Problem und Nutzen', context: 'z. B. Zeitersparnis, Sicherheit, Qualität', text: 'Häufig besonders aussagekräftig, weil das Angebot auf einen konkreten gewünschten Nutzen ausgerichtet wird.' },
              { code: 'B2B', title: 'Unternehmensmerkmale', context: 'z. B. Branche, Größe, Prozess, Rolle', text: 'Im Geschäftskundenmarkt zählen auch Beschaffungsprozess, Entscheidungsrollen, Standorte und technische Anforderungen.' },
            ],
          },
        ],
      },
      {
        heading: 'Zielgruppe und Persona unterscheiden',
        paragraphs: [
          [
            'Die Zielgruppe beschreibt eine Gruppe. Eine ',
            { type: 'glossary', id: 'persona', text: 'Persona' },
            ' ist dagegen ein verdichtetes, beispielhaftes Profil, das typische Bedürfnisse, Aufgaben, Einwände und Verhaltensweisen anschaulich macht.',
          ],
          'Eine Persona ersetzt keine Marktdaten. Frei erfundene Namen, Hobbys oder Fotos helfen nicht, wenn sie für die Kaufentscheidung ohne Bedeutung sind. Gute Personas beruhen auf nachvollziehbaren Erkenntnissen und bleiben als Arbeitsmodell erkennbar.',
        ],
        formulaCards: [
          {
            label: 'Abgrenzung',
            title: 'Zielgruppe vs. Persona',
            formula: 'Zielgruppe = abgegrenzte Gruppe mit gemeinsamen relevanten Merkmalen\nPersona = anschauliches Beispielprofil innerhalb dieser Gruppe',
            description: 'Die Zielgruppe strukturiert den Markt. Eine Persona kann Teams helfen, typische Situationen konkret zu besprechen, darf die Vielfalt der Gruppe aber nicht verdecken.',
          },
        ],
      },
      {
        heading: 'Zielgruppe Schritt für Schritt definieren',
        paragraphs: [
          'Beginne mit dem Problem, das gelöst werden soll. Sammle dann mögliche Kundengruppen und prüfe Bedarf, Erreichbarkeit, Zahlungsbereitschaft, Wettbewerb und die eigenen Fähigkeiten. Wähle die attraktivste und passendste Gruppe aus und beschreibe nur entscheidungsrelevante Merkmale.',
          'Formuliere anschließend eine überprüfbare Arbeitshypothese: Wer hat welches Problem in welcher Situation, nach welchen Kriterien wird entschieden und wie lässt sich die Gruppe erreichen? Diese Annahmen werden im Markt getestet und bei neuen Erkenntnissen angepasst.',
        ],
        formulaCards: [
          {
            label: 'Vorgehen',
            title: 'Vom Markt zur Zielgruppe',
            formula: 'Problem klären → mögliche Segmente bilden → Attraktivität und Passung prüfen → Zielgruppe auswählen → Annahmen testen',
            description: 'Eine Zielgruppe wird nicht nur beschrieben, sondern bewusst ausgewählt und anhand echter Rückmeldungen überprüft.',
          },
        ],
      },
      {
        heading: 'Praxisbeispiel für ein kleines Unternehmen',
        exampleCards: [
          {
            title: 'IT-Service für kleine Kanzleien',
            paragraphs: ['Ein IT-Dienstleister bietet nicht allgemein „IT für Unternehmen“ an. Er konzentriert sich zunächst auf Steuer- und Rechtsanwaltskanzleien mit 5 bis 25 Arbeitsplätzen in einem regionalen Einzugsgebiet. Typische Anforderungen sind verlässliche Erreichbarkeit, dokumentierte Datensicherung und Unterstützung ohne eigene IT-Abteilung.'],
            effects: ['Branche und Unternehmensgröße grenzen den Markt ein', 'fehlende interne IT und Sicherheitsbedarf beschreiben die Situation', 'regionales Einzugsgebiet berücksichtigt Vor-Ort-Service', 'Annahmen lassen sich in Kundengesprächen und Pilotaufträgen prüfen'],
          },
        ],
      },
      {
        heading: 'Zielgruppen im B2B-Geschäft',
        paragraphs: [
          'Bei Geschäftskunden muss zwischen Zielunternehmen und beteiligten Personen unterschieden werden. Nutzer, Fachverantwortliche, Einkauf und Geschäftsleitung können unterschiedliche Anforderungen und Entscheidungsmacht haben.',
          'Eine Zielgruppendefinition kann deshalb mehrere Ebenen enthalten: Welche Unternehmen passen, welche Rollen sind beteiligt und welches Problem hat jede Rolle? Das verhindert, dass Kommunikation nur eine Person anspricht, die den Kauf nicht allein entscheiden kann.',
        ],
      },
      {
        heading: 'Zielgruppe überprüfen und weiterentwickeln',
        paragraphs: [
          'Geeignete Hinweise liefern Anfragen, Kaufabschlüsse, Absagegründe, Nutzung, Reklamationen und Gespräche. Entscheidend ist nicht nur Reichweite, sondern ob die ausgewählte Gruppe tatsächlich Bedarf erkennt, erreicht werden kann und wirtschaftlich bedient werden kann.',
          [
            'Für eine Gründung oder ein neues Vorhaben gehört die Zielgruppe zusammen mit Markt und Wettbewerb in den ',
            { type: 'link', href: '/wissen/businessplan', text: 'Businessplan' },
            '. Die strategische Auswahl von Märkten und Leistungen ordnet die Seite ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' ein.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine Zielgruppe ist ein bewusst ausgewählter Teil eines Marktes',
    'Merkmale sind nur sinnvoll, wenn sie Bedarf, Kauf oder Erreichbarkeit erklären',
    'Im B2B sind Zielunternehmen und beteiligte Entscheidungsrollen zu unterscheiden',
    'Eine Persona veranschaulicht eine Zielgruppe, ersetzt aber keine Marktdaten',
    'Zielgruppendefinitionen sind überprüfbare Arbeitshypothesen',
  ],
  commonMistakes: [
    'den möglichen Markt vollständig zur Zielgruppe erklären',
    'viele Merkmale sammeln, ohne ihren Einfluss auf die Kaufentscheidung zu prüfen',
    'eine Persona frei erfinden und wie einen Marktnachweis behandeln',
    'im B2B nur das Unternehmen und nicht die beteiligten Rollen betrachten',
    'eine einmal gewählte Zielgruppe trotz neuer Erkenntnisse unverändert lassen',
  ],
  faqs: [
    { question: 'Wie genau sollte eine Zielgruppe beschrieben sein?', answer: 'So genau, dass Bedarf, Kaufkriterien, Erreichbarkeit und passende Angebotsentscheidungen erkennbar werden. Merkmale ohne praktischen Einfluss sind nicht nötig.' },
    { question: 'Kann ein Unternehmen mehrere Zielgruppen haben?', answer: 'Ja. Die Gruppen sollten getrennt bewertet und bei Bedarf mit unterschiedlichen Angeboten oder Maßnahmen angesprochen werden, statt alle in einer unscharfen Beschreibung zu vermischen.' },
    { question: 'Was ist der Unterschied zwischen Zielgruppe und Persona?', answer: 'Die Zielgruppe beschreibt eine Gruppe mit gemeinsamen relevanten Merkmalen. Eine Persona stellt typische Situationen dieser Gruppe als beispielhaftes Profil anschaulich dar.' },
    { question: 'Wie lässt sich eine Zielgruppe testen?', answer: 'Geeignet sind beispielsweise strukturierte Kundengespräche, Pilotangebote, Verkaufs- und Nutzungsdaten sowie die Auswertung von Kauf- und Absagegründen.' },
  ],
  related: ['marktanalyse', 'usp', 'marketing-mix', 'businessplan', 'unternehmensstrategie'],
  sources: [],
  updatedAt: '2026-08-31',
  reviewedAt: '2026-08-31',
  disclaimer: defaultDisclaimer,
};

export default zielgruppe;
