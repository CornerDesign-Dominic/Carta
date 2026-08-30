import { defaultDisclaimer } from '../shared.js';

const prokura = {
  slug: 'prokura',
  category: 'Unternehmensführung',
  title: 'Prokura',
  description: 'Prokura nach HGB verständlich erklärt: Erteilung, Handelsregister, Umfang, Einzel-, Gesamt- und Filialprokura sowie wichtige Grenzen.',
  seo: {
    title: 'Prokura einfach erklärt | Belege24',
    description: 'Erfahre, wer Prokura erteilen darf, welchen gesetzlichen Umfang sie hat und wie Einzel-, Gesamt- und Filialprokura funktionieren.',
    canonicalPath: '/wissen/prokura',
  },
  article: {
    intro: 'Prokura ist eine gesetzlich besonders weit ausgestaltete handelsrechtliche Vertretungsmacht. Sie erlaubt einem Prokuristen, für das Unternehmen zahlreiche gerichtliche und außergerichtliche Geschäfte vorzunehmen. Erteilung, Ausgestaltung und Erlöschen müssen sorgfältig organisiert und zum Handelsregister angemeldet werden.',
    sections: [
      {
        heading: 'Was ist Prokura?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'prokura', text: 'Prokura' },
            ' ist eine im Handelsgesetzbuch geregelte ',
            { type: 'glossary', id: 'vertretungsmacht', text: 'Vertretungsmacht' },
            ' mit gesetzlich bestimmtem Umfang. Ein ',
            { type: 'glossary', id: 'prokurist', text: 'Prokurist' },
            ' kann das Unternehmen innerhalb dieses Rahmens gegenüber Geschäftspartnern, Gerichten und anderen Dritten vertreten.',
          ],
          'Prokura ist keine Organstellung und macht eine Person nicht zum Geschäftsführer oder Gesellschafter. Sie betrifft das rechtsgeschäftliche Handeln nach außen. Interne Aufgaben, Entscheidungsgrenzen und Berichtspflichten müssen zusätzlich geregelt werden.',
        ],
      },
      {
        heading: 'Wer kann Prokura erteilen?',
        paragraphs: [
          'Nach § 48 HGB kann Prokura nur der Inhaber des Handelsgeschäfts oder sein gesetzlicher Vertreter erteilen. Bei einer GmbH handeln dafür grundsätzlich die vertretungsberechtigten Geschäftsführer, bei einer AG der vertretungsberechtigte Vorstand. Bei Personenhandelsgesellschaften sind die jeweiligen Geschäftsführungs- und Vertretungsregeln sowie erforderliche Zustimmungen zu beachten.',
          [
            'Wer intern für die Erteilung zuständig ist, hängt somit von Rechtsform und Organisation ab. Die Seite ',
            { type: 'link', href: '/wissen/geschaeftsfuehrung', text: 'Geschäftsführung' },
            ' ordnet Geschäftsführung und Vertretung rechtsformabhängig ein.',
          ],
          'Ein Prokurist kann die eigene Prokura nicht auf eine andere Person übertragen. § 52 HGB erklärt die Prokura ausdrücklich für nicht übertragbar.',
        ],
      },
      {
        heading: 'Wie wird Prokura erteilt?',
        paragraphs: [
          'Die Erteilung muss nach § 48 HGB durch ausdrückliche Erklärung erfolgen. Eine Prokura entsteht daher nicht allein dadurch, dass eine Person längere Zeit Verträge unterschreibt, eine leitende Position trägt oder nach außen wie eine Führungskraft auftritt.',
          'Aus Nachweis- und Organisationsgründen sollte die Erteilung eindeutig dokumentieren, wer Prokura erhält, ob Einzel- oder Gesamtprokura vorliegt und ob eine wirksame Beschränkung auf eine Niederlassung oder eine besondere Grundstücksbefugnis vorgesehen ist.',
        ],
      },
      {
        heading: 'Eintragung ins Handelsregister',
        paragraphs: [
          'Der Inhaber des Handelsgeschäfts muss die Erteilung nach § 53 HGB zur Eintragung in das Handelsregister anmelden. Bei Gesamtprokura ist auch diese Ausgestaltung anzumelden. Das Erlöschen muss ebenfalls angemeldet werden.',
          'Die Prokura entsteht durch die ausdrückliche Erteilung, nicht erst durch die Registereintragung. Die Eintragung macht die Vertretungslage öffentlich nachvollziehbar und ist für den Rechtsverkehr dennoch wesentlich. Solange eine Änderung nicht ordnungsgemäß bekannt gemacht ist, können registerrechtliche Rechtsschein- und Vertrauensschutzfragen entstehen.',
          'Aktuelle Registerinformationen und Dokumente können über das gemeinsame Registerportal der Länder abgerufen werden. Für ein konkretes Geschäft sollten neben dem Registerauszug auch die Art der Prokura und mögliche besondere Befugnisse geprüft werden.',
        ],
      },
      {
        heading: 'Umfang der Vertretungsmacht',
        paragraphs: [
          'Nach § 49 Absatz 1 HGB ermächtigt die Prokura zu allen Arten gerichtlicher und außergerichtlicher Geschäfte und Rechtshandlungen, die der Betrieb eines Handelsgewerbes mit sich bringt. Der Umfang ist bewusst weit und nicht auf das gewöhnliche Tagesgeschäft eines bestimmten Unternehmens beschränkt.',
          'Typischerweise können darunter beispielsweise der Abschluss von Einkaufs-, Verkaufs-, Miet-, Dienstleistungs-, Finanzierungs- oder Arbeitsverträgen, das Führen von Prozessen sowie die Abgabe und Entgegennahme rechtsgeschäftlicher Erklärungen fallen. Ob ein konkretes Handeln wirksam umfasst ist, muss anhand des Geschäfts, der Prokuraart und besonderer gesetzlicher Grenzen geprüft werden.',
          'Der Prokurist zeichnet nach § 51 HGB zur Firma mit seinem Namen und einem die Prokura andeutenden Zusatz. In der Praxis wird häufig „ppa.“ verwendet. Der Zusatz schafft Klarheit, ist aber kein Ersatz für eine wirksam erteilte Vertretungsmacht.',
        ],
      },
      {
        heading: 'Einzel-, Gesamt- und Filialprokura',
        subsections: [
          {
            heading: 'Einzelprokura',
            paragraphs: ['Bei Einzelprokura kann der Prokurist im Rahmen seiner Vertretungsmacht grundsätzlich allein handeln. Interne Freigaberegeln können trotzdem vorsehen, dass bestimmte Entscheidungen vorher abgestimmt werden müssen.'],
          },
          {
            heading: 'Gesamtprokura',
            paragraphs: [
              [
                'Bei ',
                { type: 'glossary', id: 'gesamtprokura', text: 'Gesamtprokura' },
                ' wird die Vertretungsmacht mehreren Personen gemeinschaftlich erteilt. Ein einzelner Gesamtprokurist kann die Gesellschaft dann grundsätzlich nicht allein vertreten; maßgeblich ist die eingetragene Ausgestaltung.',
              ],
            ],
          },
          {
            heading: 'Filialprokura',
            paragraphs: ['Eine Beschränkung auf eine von mehreren Niederlassungen ist Dritten gegenüber nach § 50 Absatz 3 HGB nur wirksam, wenn die Niederlassungen unter verschiedenen Firmen betrieben werden. Dafür kann bei einer Zweigniederlassung ein entsprechender Firmenzusatz genügen. Eine bloße interne Zuordnung zu einem Standort beschränkt die Prokura nach außen nicht automatisch.'],
          },
        ],
      },
      {
        heading: 'Welche Geschäfte sind ausgeschlossen oder besonders eingeschränkt?',
        paragraphs: [
          'Die Prokura ist weit, aber nicht grenzenlos. Sie erfasst Geschäfte, die der Betrieb eines Handelsgewerbes mit sich bringt. Grundlegende Entscheidungen, die das Unternehmen als solches betreffen, bleiben grundsätzlich dem Inhaber oder den zuständigen Organen vorbehalten. Dazu können etwa die Erteilung weiterer Prokura, Änderungen der gesellschaftsrechtlichen Grundlagen oder die Veräußerung des Unternehmens als Ganzes gehören.',
          'Auch gesetzlich bestimmten Organen oder Personen zugewiesene Handlungen werden nicht allein durch Prokura übertragen. Beispiele können die Unterzeichnung des Jahresabschlusses durch die gesetzlichen Vertreter oder insolvenzrechtliche Antragspflichten sein. Welche Grenze im Einzelfall greift, sollte bei außergewöhnlichen Geschäften rechtlich geprüft werden.',
          'Die Prokura ist außerdem nicht übertragbar. Ein Prokurist kann jedoch im zulässigen Rahmen unter Umständen andere, weniger weitreichende Vollmachten erteilen, wenn dies vom Geschäftsbetrieb und den internen Befugnissen gedeckt ist. Das ist von der Erteilung einer weiteren Prokura zu unterscheiden.',
        ],
      },
      {
        heading: 'Grundstücksgeschäfte',
        paragraphs: [
          'Zur Veräußerung und Belastung von Grundstücken ist ein Prokurist nach § 49 Absatz 2 HGB nur befugt, wenn ihm diese Befugnis besonders erteilt wurde. Die allgemeine Prokura allein genügt dafür nicht.',
          'Andere grundstücksbezogene Geschäfte sind davon zu unterscheiden. Der Abschluss eines Mietvertrags oder der Erwerb eines Grundstücks wird nicht allein durch den Wortlaut des § 49 Absatz 2 ausgeschlossen. Dennoch können Formvorschriften, interne Zustimmungen und die konkrete Vertretungsregel entscheidend sein. Grundstücksgeschäfte sollten deshalb mit Registerlage, Urkunde und fachlicher Begleitung geprüft werden.',
        ],
      },
      {
        heading: 'Interne Beschränkung und Wirkung nach außen',
        paragraphs: [
          'Intern kann ein Unternehmen festlegen, dass ein Prokurist nur bis zu bestimmten Beträgen, für bestimmte Geschäftsbereiche oder nach vorheriger Zustimmung handeln darf. Solche Regeln sind für Organisation, Kontrolle und mögliche interne Verantwortung wichtig.',
          'Gegenüber Dritten ist eine Beschränkung des gesetzlichen Prokuraumfangs nach § 50 HGB grundsätzlich unwirksam. Ein Vertrag kann das Unternehmen daher trotz Verstoßes gegen eine interne Grenze binden, während intern arbeits-, dienst- oder haftungsrechtliche Folgen entstehen können. Besondere gesetzliche Grenzen, wirksame Gesamt- oder Filialprokura und Fälle eines Missbrauchs sind davon getrennt zu beurteilen.',
          [
            'Interne Entscheidungs- und Freigaberegeln sollten auf der Seite ',
            { type: 'link', href: '/wissen/verantwortlichkeiten-zustaendigkeiten', text: 'Verantwortlichkeiten & Zuständigkeiten' },
            ' nachvollziehbar dokumentiert werden.',
          ],
        ],
      },
      {
        heading: 'Wie erlischt Prokura?',
        paragraphs: [
          'Die Prokura ist nach § 52 HGB jederzeit widerruflich, unabhängig vom zugrunde liegenden Vertragsverhältnis. Vergütungs- oder sonstige Ansprüche aus diesem Verhältnis können daneben bestehen bleiben. Die Prokura kann außerdem beispielsweise mit Beendigung des Handelsgeschäfts oder aufgrund weiterer rechtlicher Veränderungen erlöschen.',
          'Sie endet nicht allein durch den Tod des Inhabers des Handelsgeschäfts und ist nicht übertragbar. Das Erlöschen muss nach § 53 HGB zum Handelsregister angemeldet werden. Zugänge, Zeichnungsregeln, Bankvollmachten, Geschäftspapiere und interne Berechtigungen sollten zeitgleich angepasst werden, damit kein widersprüchlicher Rechtsschein entsteht.',
        ],
      },
      {
        heading: 'Prokura vs. Handlungsvollmacht',
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Prokura vs. Handlungsvollmacht',
            formula: 'Prokura: ausdrücklich erteilt · gesetzlich besonders weit · Handelsregisteranmeldung\nHandlungsvollmacht: auch für bestimmte Geschäfte oder Geschäftsarten · Umfang nach § 54 HGB · keine Prokura',
            description: 'Die konkrete Vertretungsmacht ist immer anhand ihrer Erteilung und der gesetzlichen Regeln zu prüfen. Einzelheiten zur weniger weitreichenden Vollmachtsform erklärt die verlinkte Seite.',
          },
        ],
        paragraphs: [
          'Beide ermöglichen rechtsgeschäftliches Handeln für ein Unternehmen, unterscheiden sich aber besonders in gesetzlichem Umfang, Erteilung und Registerpublizität.',
          [
            'Die ',
            { type: 'link', href: '/wissen/handlungsvollmacht', text: 'Handlungsvollmacht' },
            ' kann auf den Betrieb eines Handelsgewerbes, eine bestimmte Art von Geschäften oder einzelne Geschäfte gerichtet sein. Sie besitzt nicht automatisch den weiten gesetzlichen Umfang der Prokura und wird nicht als Prokura in das Handelsregister eingetragen.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Prokura ist eine gesetzlich weit ausgestaltete handelsrechtliche Vertretungsmacht',
    'Sie kann nur ausdrücklich vom Inhaber des Handelsgeschäfts oder seinem gesetzlichen Vertreter erteilt werden',
    'Erteilung, Gesamtprokura und Erlöschen sind zum Handelsregister anzumelden',
    'Interne Beschränkungen des gesetzlichen Umfangs wirken gegenüber Dritten grundsätzlich nicht',
    'Für Veräußerung und Belastung von Grundstücken ist eine besondere Befugnis erforderlich',
    'Prokura ist jederzeit widerruflich und nicht übertragbar',
  ],
  commonMistakes: [
    'eine leitende Position oder häufige Unterschriften bereits für Prokura halten',
    'Registereintragung und ausdrückliche Erteilung als denselben Vorgang behandeln',
    'interne Betragsgrenzen für eine wirksame Beschränkung gegenüber Dritten halten',
    'bei Gesamtprokura allein unterschreiben',
    'eine Standortzuordnung automatisch als wirksame Filialprokura verstehen',
    'Grundstücke ohne besonders erteilte Befugnis veräußern oder belasten',
    'Prokura mit Geschäftsführung oder Organstellung gleichsetzen',
    'Prokura informell auf eine andere Person übertragen wollen',
    'das Erlöschen nicht unverzüglich zum Register anmelden und Berechtigungen nicht entziehen',
  ],
  faqs: [
    { question: 'Was ist Prokura einfach erklärt?', answer: 'Prokura ist eine gesetzlich besonders weitreichende handelsrechtliche Vertretungsmacht, mit der ein Prokurist zahlreiche Geschäfte für ein Unternehmen vornehmen kann.' },
    { question: 'Entsteht Prokura erst mit der Handelsregistereintragung?', answer: 'Nein. Sie wird durch ausdrückliche Erklärung erteilt. Die Erteilung muss anschließend zum Handelsregister angemeldet werden.' },
    { question: 'Darf ein Prokurist allein unterschreiben?', answer: 'Bei Einzelprokura grundsätzlich ja. Bei Gesamtprokura müssen die nach der konkreten Vertretungsregel erforderlichen Personen gemeinschaftlich handeln.' },
    { question: 'Darf ein Prokurist ein Grundstück verkaufen?', answer: 'Nur wenn ihm die Befugnis zur Veräußerung und Belastung von Grundstücken besonders erteilt wurde. Die allgemeine Prokura allein genügt dafür nicht.' },
    { question: 'Kann Prokura auf einen Höchstbetrag beschränkt werden?', answer: 'Intern kann eine Betragsgrenze gelten. Gegenüber Dritten ist eine solche Beschränkung des gesetzlichen Umfangs grundsätzlich unwirksam; besondere Missbrauchsfälle sind gesondert zu prüfen.' },
    { question: 'Kann ein Prokurist seine Prokura weitergeben?', answer: 'Nein. Nach § 52 HGB ist Prokura nicht übertragbar.' },
  ],
  related: ['handlungsvollmacht', 'geschaeftsfuehrung', 'verantwortlichkeiten-zustaendigkeiten', 'rechtsformen'],
  sources: [
    { label: 'HGB – §§ 48 bis 53 Prokura', url: 'https://www.gesetze-im-internet.de/hgb/' },
    { label: 'Gemeinsames Registerportal der Länder', url: 'https://www.handelsregister.de/' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default prokura;
