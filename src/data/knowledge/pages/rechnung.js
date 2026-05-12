import { defaultDisclaimer } from '../shared.js';

const rechnung = {
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
  };

export default rechnung;
