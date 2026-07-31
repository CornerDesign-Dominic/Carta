import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import A4Page from './documentBlocks/A4Page.jsx';
import DocumentMetaBlock from './documentBlocks/DocumentMetaBlock.jsx';
import DocumentToolbar from './documentBlocks/DocumentToolbar.jsx';
import FooterBlock from './documentBlocks/FooterBlock.jsx';
import RecipientBlock from './documentBlocks/RecipientBlock.jsx';
import SenderBlock from './documentBlocks/SenderBlock.jsx';
import { FieldActions, HiddenFieldActions } from './documentBlocks/FieldActions.jsx';
import { paginateMeasuredItems, takeMeasuredText } from './documentExport/MeasuredPaginator.jsx';
import { requestPdfDownload } from '../utils/requestPdfDownload.js';
import { mapBusinessLetterToDocument } from '../documentModel/additionalDocumentModel.js';

const initialLabels = {
  title: 'Geschäftsbrief',
  yourReference: 'Ihr Zeichen',
  ourReference: 'Unser Zeichen',
  contactPerson: 'Ansprechpartner',
  place: 'Ort',
  letterDate: 'Datum',
  subject: 'Betreff',
  salutation: 'Anrede',
  body: 'Brieftext',
  closing: 'Grußformel',
  signerName: 'Name',
  signerRole: 'Funktion',
  attachments: 'Anlagen',
  distribution: 'Verteiler',
  contactEmail: 'E-Mail',
  contactPhone: 'Telefon',
  contactFax: 'Fax',
  contactWebsite: 'Website',
};

const contactFields = [
  { field: 'email', labelField: 'contactEmail', label: 'E-Mail' },
  { field: 'phone', labelField: 'contactPhone', label: 'Telefon' },
  { field: 'fax', labelField: 'contactFax', label: 'Fax' },
  { field: 'website', labelField: 'contactWebsite', label: 'Website' },
];

const detailFields = [
  { field: 'yourReference', ariaLabel: 'Ihr Zeichen', type: 'text' },
  { field: 'ourReference', ariaLabel: 'Unser Zeichen', type: 'text' },
  { field: 'contactPerson', ariaLabel: 'Ansprechpartner', type: 'text' },
  { field: 'place', ariaLabel: 'Ort', type: 'text' },
  { field: 'letterDate', ariaLabel: 'Datum', type: 'date' },
];

const recipientOptionalFields = [
  { field: 'attention', label: 'Zusatz / zu Händen' },
  { field: 'name', label: 'Name / Abteilung' },
];

const footerColumns = [
  [
    { field: 'companyName', label: 'Firma' },
    { field: 'companyStreet', label: 'Straße und Hausnummer' },
    { field: 'companyCity', label: 'PLZ und Stadt' },
    { field: 'companyExtra', label: 'Zusatzzeile Firma' },
  ],
  [
    { field: 'vatId', label: 'USt-IdNr.' },
    { field: 'taxNumber', label: 'Steuernummer' },
    { field: 'commercialRegister', label: 'Handelsregister' },
    { field: 'managingDirector', label: 'Geschäftsführer' },
  ],
  [
    { field: 'bankName', label: 'Bankname' },
    { field: 'iban', label: 'IBAN' },
    { field: 'bic', label: 'BIC' },
    { field: 'bankExtra', label: 'Zusatzzeile Bank' },
  ],
];

const letterContentOptionalFields = [
  { field: 'signerRole', label: 'Funktion' },
  { field: 'attachments', label: 'Anlagen' },
  { field: 'distribution', label: 'Verteiler' },
];

const defaultLetterData = {
  sender: {
    companyName: 'Belege24 Muster GmbH',
    returnAddress: 'Belege24 Muster GmbH - Musterstraße 12 - 10115 Berlin',
    address: { street: 'Musterstraße', houseNumber: '12', postalCode: '10115', city: 'Berlin' },
    contact: { email: 'kontakt@belege24.com', phone: '+49 30 123456', fax: '+49 30 123457', website: 'www.belege24.com' },
  },
  recipient: {
    companyName: 'Empfängerunternehmen',
    attention: '',
    name: '',
    address: { street: 'Empfängerstraße', houseNumber: '1', postalCode: '12345', city: 'Musterstadt' },
  },
  details: { yourReference: '', ourReference: '', contactPerson: '', place: 'Berlin', letterDate: new Date().toISOString().slice(0, 10) },
  references: {},
  footer: {
    company: { companyName: 'Belege24 Muster GmbH', street: 'Musterstraße', houseNumber: '12', postalCode: '10115', city: 'Berlin', extra: '' },
    tax: { vatIdLabel: 'USt-IdNr.:', vatId: 'DE123456789', taxNumberLabel: 'Steuernummer:', taxNumber: '12/345/67890', commercialRegister: 'HRB 123456', representation: 'Geschäftsführer: Max Mustermann' },
    bank: { bankName: 'Musterbank', ibanLabel: 'IBAN:', iban: 'DE00 0000 0000 0000 0000 00', bicLabel: 'BIC:', bic: 'COBADEFFXXX', bankExtra: '' },
  },
};

const defaultContent = {
  subject: 'Betreff des Schreibens',
  salutation: 'Sehr geehrte Damen und Herren,',
  body: 'hiermit erhalten Sie dieses Schreiben zur weiteren Bearbeitung. Bitte prüfen Sie die Angaben und melden Sie sich bei Rückfragen gerne bei uns.',
  closing: 'Mit freundlichen Grüßen',
  signerName: '',
  signerRole: '',
  attachments: '',
  distribution: '',
};

function createFieldConfig(definitions) {
  return { hidden: [], order: definitions.map(({ field }) => field) };
}

function joinLine(...parts) {
  return parts.map((part) => String(part ?? '').trim()).filter(Boolean).join(' ');
}

function createReturnAddress(sender) {
  return [
    sender.companyName,
    joinLine(sender.address.street, sender.address.houseNumber),
    joinLine(sender.address.postalCode, sender.address.city),
  ].filter(Boolean).join(' - ');
}

function createViewData(letterData) {
  const { sender, recipient, details, footer } = letterData;
  return {
    sender: { company: sender.companyName, senderLine: sender.returnAddress, ...sender.contact },
    recipient: {
      company: recipient.companyName,
      attention: recipient.attention,
      name: recipient.name,
      street: joinLine(recipient.address.street, recipient.address.houseNumber),
      cityLine: joinLine(recipient.address.postalCode, recipient.address.city),
    },
    details,
    footerLines: {
      companyName: footer.company.companyName,
      companyStreet: joinLine(footer.company.street, footer.company.houseNumber),
      companyCity: joinLine(footer.company.postalCode, footer.company.city),
      companyExtra: footer.company.extra,
      vatId: [footer.tax.vatIdLabel, footer.tax.vatId].filter(Boolean).join(' '),
      taxNumber: [footer.tax.taxNumberLabel, footer.tax.taxNumber].filter(Boolean).join(' '),
      commercialRegister: footer.tax.commercialRegister,
      managingDirector: footer.tax.representation,
      bankName: footer.bank.bankName,
      iban: [footer.bank.ibanLabel, footer.bank.iban].filter(Boolean).join(' '),
      bic: [footer.bank.bicLabel, footer.bank.bic].filter(Boolean).join(' '),
      bankExtra: footer.bank.bankExtra,
    },
  };
}

function splitStreetLine(value = '') {
  const trimmed = String(value).trim();
  const match = trimmed.match(/^(.*?)(?:\s+(\d+\s*[a-zA-Z]?))$/);
  return { street: match ? match[1].trim() : trimmed, houseNumber: match ? match[2].trim() : '' };
}

function splitCityLine(value = '') {
  const trimmed = String(value).trim();
  const match = trimmed.match(/^(\d{4,5})\s+(.+)$/);
  return { postalCode: match ? match[1].trim() : '', city: match ? match[2].trim() : trimmed };
}

function splitLabeledValue(value = '', fallbackLabel = '') {
  const match = String(value).trim().match(/^(.+?:)\s*(.*)$/);
  return match ? { label: match[1], value: match[2] } : { label: fallbackLabel, value: String(value).trim() };
}

function resizeTextarea(element) {
  if (!element) return;
  element.style.height = 'auto';
  element.style.height = `${element.scrollHeight}px`;
}

function formatGermanDate(value) {
  const match = String(value ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}.${match[2]}.${match[1]}` : value;
}

function createPdfFileName(subject) {
  const slug = String(subject || 'geschaeftsbrief').trim().toLowerCase().replace(/[^a-z0-9äöüß]+/gi, '-').replace(/^-+|-+$/g, '');
  return `${slug || 'geschaeftsbrief'}.pdf`;
}

function buildLetterText(content, labels, hiddenFields) {
  const optional = (field) => !hiddenFields.includes(field) && content[field]
    ? `${labels[field]}: ${content[field]}`
    : '';
  return [
    content.salutation,
    content.body,
    content.closing,
    content.signerName,
    optional('signerRole'),
    optional('attachments'),
    optional('distribution'),
  ].filter(Boolean).join('\n\n');
}

export default function BusinessLetterDocumentEditor() {
  const [highlightFields, setHighlightFields] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [labels, setLabels] = useState(initialLabels);
  const [letterData, setLetterData] = useState(defaultLetterData);
  const [content, setContent] = useState(defaultContent);
  const [fieldConfig, setFieldConfig] = useState({
    contact: createFieldConfig(contactFields),
    details: createFieldConfig(detailFields),
    recipient: createFieldConfig(recipientOptionalFields),
    footerMiddle: createFieldConfig(footerColumns[1]),
    letterContent: createFieldConfig(letterContentOptionalFields),
  });
  const [printPages, setPrintPages] = useState([{ items: [], pageNumber: 1, used: 0 }]);
  const [isExportRenderActive, setIsExportRenderActive] = useState(false);
  const sheetRef = useRef(null);
  const printPagesRef = useRef(null);
  const paginatorRef = useRef(null);
  const dateInputRefs = useRef({});
  const textRefs = useRef({});
  const initialStateRef = useRef(null);
  const currentState = { labels, letterData, content, fieldConfig };
  if (!initialStateRef.current) initialStateRef.current = structuredClone(currentState);
  const { sender, recipient, details, footerLines } = useMemo(() => createViewData(letterData), [letterData]);
  const letterContentHidden = fieldConfig.letterContent.hidden;
  const printItems = useMemo(() => [
    { type: 'text', id: 'subject', role: 'subject', text: content.subject },
    { type: 'text', id: 'letter', role: 'letter', text: buildLetterText(content, labels, letterContentHidden) },
  ], [content, labels, letterContentHidden]);

  useEffect(() => {
    Object.values(textRefs.current).forEach(resizeTextarea);
  }, [content]);

  function getOrderedDefinitions(block, definitions) {
    return fieldConfig[block].order.map((field) => definitions.find((definition) => definition.field === field)).filter(Boolean);
  }

  function getHiddenFields(block, definitions) {
    const knownFields = new Set(definitions.map(({ field }) => field));
    return fieldConfig[block].hidden.filter((field) => knownFields.has(field));
  }

  function updateLabel(field, value) { setLabels((current) => ({ ...current, [field]: value })); }
  function updateContent(field, value) { setContent((current) => ({ ...current, [field]: value })); }
  function toggleEditableMode() { setHighlightFields((current) => !current); }

  function toggleConfiguredField(block, field) {
    setFieldConfig((current) => ({
      ...current,
      [block]: {
        ...current[block],
        hidden: current[block].hidden.includes(field)
          ? current[block].hidden.filter((entry) => entry !== field)
          : [...current[block].hidden, field],
      },
    }));
  }

  function moveConfiguredField(block, field, direction) {
    setFieldConfig((current) => {
      const order = [...current[block].order];
      const index = order.indexOf(field);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= order.length) return current;
      [order[index], order[target]] = [order[target], order[index]];
      return { ...current, [block]: { ...current[block], order } };
    });
  }

  function updateSender(field, value) {
    setLetterData((current) => {
      if (field === 'company') {
        const sender = { ...current.sender, companyName: value };
        return { ...current, sender: { ...sender, returnAddress: createReturnAddress(sender) } };
      }
      if (field === 'senderLine') return { ...current, sender: { ...current.sender, returnAddress: value } };
      if (field === 'address') {
        const sender = { ...current.sender, address: { ...current.sender.address, ...value } };
        return { ...current, sender: { ...sender, returnAddress: createReturnAddress(sender) } };
      }
      return { ...current, sender: { ...current.sender, contact: { ...current.sender.contact, [field]: value } } };
    });
  }

  function updateRecipient(field, value) {
    setLetterData((current) => {
      if (field === 'company') return { ...current, recipient: { ...current.recipient, companyName: value } };
      if (field === 'street') return { ...current, recipient: { ...current.recipient, address: { ...current.recipient.address, ...splitStreetLine(value) } } };
      if (field === 'cityLine') return { ...current, recipient: { ...current.recipient, address: { ...current.recipient.address, ...splitCityLine(value) } } };
      return { ...current, recipient: { ...current.recipient, [field]: value } };
    });
  }

  function updateDetail(field, value) {
    setLetterData((current) => ({ ...current, details: { ...current.details, [field]: value } }));
  }

  function updateFooterLine(field, value) {
    setLetterData((current) => {
      const footer = structuredClone(current.footer);
      const normalized = String(value ?? '').trim();
      if (field === 'companyName') footer.company.companyName = normalized;
      if (field === 'companyStreet') Object.assign(footer.company, splitStreetLine(normalized));
      if (field === 'companyCity') Object.assign(footer.company, splitCityLine(normalized));
      if (field === 'companyExtra') footer.company.extra = normalized;
      if (field === 'vatId') Object.assign(footer.tax, (() => { const parts = splitLabeledValue(normalized, footer.tax.vatIdLabel); return { vatIdLabel: parts.label, vatId: parts.value }; })());
      if (field === 'taxNumber') Object.assign(footer.tax, (() => { const parts = splitLabeledValue(normalized, footer.tax.taxNumberLabel); return { taxNumberLabel: parts.label, taxNumber: parts.value }; })());
      if (field === 'commercialRegister') footer.tax.commercialRegister = normalized;
      if (field === 'managingDirector') footer.tax.representation = normalized;
      if (field === 'bankName') footer.bank.bankName = normalized;
      if (field === 'iban') Object.assign(footer.bank, (() => { const parts = splitLabeledValue(normalized, footer.bank.ibanLabel); return { ibanLabel: parts.label, iban: parts.value }; })());
      if (field === 'bic') Object.assign(footer.bank, (() => { const parts = splitLabeledValue(normalized, footer.bank.bicLabel); return { bicLabel: parts.label, bic: parts.value }; })());
      if (field === 'bankExtra') footer.bank.bankExtra = normalized;
      return { ...current, footer };
    });
  }

  function openDatePicker(field) {
    const input = dateInputRefs.current[field];
    input?.focus();
    if (typeof input?.showPicker === 'function') input.showPicker();
  }

  async function refreshPrintPages() {
    setIsExportRenderActive(true);
    await waitForNextFrame();
    const nextPages = paginatorRef.current?.measureNow();
    if (nextPages) {
      setPrintPages(nextPages);
      await waitForNextFrame();
    }
  }

  function handleNewDocument() {
    setLabels(initialLabels);
    setLetterData({ ...defaultLetterData, details: { ...defaultLetterData.details, letterDate: new Date().toISOString().slice(0, 10) } });
    setContent(defaultContent);
    setFieldConfig({ contact: createFieldConfig(contactFields), details: createFieldConfig(detailFields), recipient: createFieldConfig(recipientOptionalFields), footerMiddle: createFieldConfig(footerColumns[1]), letterContent: createFieldConfig(letterContentOptionalFields) });
    setHighlightFields(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialStateRef.current = null;
  }

  async function handleCreatePdf() {
    setIsExporting(true);
    try {
      await refreshPrintPages();
      await requestPdfDownload({ sheet: sheetRef.current, exportRoot: printPagesRef.current, documentType: 'businessLetter', filename: createPdfFileName(content.subject), belege24Document: mapBusinessLetterToDocument(currentState) });
    } catch (error) {
      window.alert(`PDF konnte nicht erstellt werden.\n\n${error.message}`);
    } finally {
      setIsExportRenderActive(false);
      setIsExporting(false);
    }
  }

  async function handleLoadPdf(file) {
    if (!(file instanceof File) || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))) {
      window.alert('Bitte wähle eine PDF-Datei aus.');
      return;
    }
    const { importBusinessLetterPdf, confirmBusinessLetterOverwrite } = await import('../documentModel/additionalDocumentModel.js');
    let result;
    try { result = await importBusinessLetterPdf(await file.arrayBuffer()); } catch { window.alert('Die PDF konnte nicht gelesen werden.'); return; }
    if (result.status !== 'valid') { window.alert(result.message); return; }
    if (!confirmBusinessLetterOverwrite(currentState, initialStateRef.current, () => window.confirm('Der aktuelle Geschäftsbrief enthält Änderungen. Möchtest du ihn vollständig durch die Daten aus der PDF ersetzen?'))) return;
    const restored = result.state;
    setLabels(restored.labels);
    setLetterData(restored.letterData);
    setContent(restored.content);
    setFieldConfig(restored.fieldConfig);
    setHighlightFields(false);
    setPrintPages([{ items: [], pageNumber: 1, used: 0 }]);
    initialStateRef.current = structuredClone(restored);
    window.alert(result.message);
  }

  async function handlePrint() {
    await refreshPrintPages();
    document.body.classList.add('document-print-mode');
    window.print();
    const cleanup = () => { document.body.classList.remove('document-print-mode'); setIsExportRenderActive(false); window.removeEventListener('afterprint', cleanup); };
    window.addEventListener('afterprint', cleanup);
    window.setTimeout(cleanup, 1200);
  }

  const renderTextArea = (field, className = '') => (
    <textarea
      ref={(element) => { textRefs.current[field] = element; }}
      className={className}
      aria-label={labels[field]}
      value={content[field]}
      onChange={(event) => { updateContent(field, event.target.value); resizeTextarea(event.target); }}
    />
  );

  return (
    <div className="visual-editor invoice-visual-editor business-letter-visual-editor">
      <DocumentToolbar ariaLabel="Geschäftsbrief Werkzeuge" isEditable={highlightFields} isExporting={isExporting} onCreatePdf={handleCreatePdf} onLoadPdf={handleLoadPdf} onNewDocument={handleNewDocument} onPrint={handlePrint} onToggleEditable={toggleEditableMode} />
      <p className="document-mode-hint">{highlightFields ? 'Bearbeitungsmodus: alle Eingabefelder sind hervorgehoben.' : 'Vorschau: Der Brief wird wie in der Ausgabe dargestellt.'}</p>

      <A4Page ref={sheetRef} ariaLabel="Editierbarer Geschäftsbrief" className="offer-sheet invoice-sheet business-letter-sheet" editable={highlightFields}>
        <SenderBlock contactFields={getOrderedDefinitions('contact', contactFields)} hiddenFields={getHiddenFields('contact', contactFields)} labels={labels} sender={sender} onLabelChange={updateLabel} onMoveField={(field, direction) => moveConfiguredField('contact', field, direction)} onSenderChange={updateSender} onToggleField={(field) => toggleConfiguredField('contact', field)} />
        <section className="invoice-address-row business-letter-address-row">
          <RecipientBlock hiddenFields={getHiddenFields('recipient', recipientOptionalFields)} recipient={recipient} senderLine={sender.senderLine} onRecipientChange={updateRecipient} onSenderLineChange={(value) => updateSender('senderLine', value)} onToggleField={(field) => toggleConfiguredField('recipient', field)} />
          <DocumentMetaBlock dateInputRefs={dateInputRefs} details={details} fields={getOrderedDefinitions('details', detailFields)} hiddenFields={getHiddenFields('details', detailFields)} labels={labels} onDatePicker={openDatePicker} onDetailChange={updateDetail} onLabelChange={updateLabel} onMoveField={(field, direction) => moveConfiguredField('details', field, direction)} onToggleField={(field) => toggleConfiguredField('details', field)} />
        </section>
        <section className="business-letter-content">
          <label className="business-letter-subject">
            <input className="document-label-input" aria-label="Beschriftung Betreff" value={labels.subject} onChange={(event) => updateLabel('subject', event.target.value)} />
            {renderTextArea('subject')}
          </label>
          {renderTextArea('salutation', 'business-letter-salutation')}
          {renderTextArea('body', 'business-letter-body')}
          {renderTextArea('closing', 'business-letter-closing')}
          <label className="business-letter-signer">
            <input className="document-label-input" aria-label="Beschriftung Name" value={labels.signerName} onChange={(event) => updateLabel('signerName', event.target.value)} />
            {renderTextArea('signerName')}
          </label>
          <OptionalLetterFields content={content} fields={letterContentOptionalFields} hiddenFields={letterContentHidden} labels={labels} onContentChange={updateContent} onLabelChange={updateLabel} onToggle={(field) => toggleConfiguredField('letterContent', field)} resizeTextarea={resizeTextarea} textRefs={textRefs} />
        </section>
        <FooterBlock columns={[footerColumns[0], getOrderedDefinitions('footerMiddle', footerColumns[1]), footerColumns[2]]} footerLines={footerLines} hiddenFields={getHiddenFields('footerMiddle', footerColumns[1])} onFooterLineChange={updateFooterLine} onMoveField={(field, direction) => moveConfiguredField('footerMiddle', field, direction)} onToggleField={(field) => toggleConfiguredField('footerMiddle', field)} />
      </A4Page>

      {isExportRenderActive && <>
        <MeasuredBusinessLetterPaginator ref={paginatorRef} items={printItems} />
        <BusinessLetterPrintPages ref={printPagesRef} content={content} details={details} footerLines={footerLines} hiddenContentFields={letterContentHidden} labels={labels} pages={printPages} recipient={recipient} sender={sender} visibleContactFields={getOrderedDefinitions('contact', contactFields).filter(({ field }) => !fieldConfig.contact.hidden.includes(field))} visibleDetailFields={getOrderedDefinitions('details', detailFields).filter(({ field }) => !fieldConfig.details.hidden.includes(field))} visibleRecipientFields={recipientOptionalFields.filter(({ field }) => !fieldConfig.recipient.hidden.includes(field))} visibleFooterFields={getOrderedDefinitions('footerMiddle', footerColumns[1]).filter(({ field }) => !fieldConfig.footerMiddle.hidden.includes(field))} />
      </>}
    </div>
  );
}

function OptionalLetterFields({ content, fields, hiddenFields, labels, onContentChange, onLabelChange, onToggle, resizeTextarea: resize, textRefs }) {
  return (
    <div className="business-letter-optional-fields">
      {fields.filter(({ field }) => !hiddenFields.includes(field)).map(({ field }) => (
        <div className="business-letter-optional-field invoice-config-row" key={field}>
          <label>
            <input className="document-label-input" aria-label={`Beschriftung ${labels[field]}`} value={labels[field]} onChange={(event) => onLabelChange(field, event.target.value)} />
            <textarea ref={(element) => { textRefs.current[field] = element; }} aria-label={labels[field]} value={content[field]} onChange={(event) => { onContentChange(field, event.target.value); resize(event.target); }} />
          </label>
          <FieldActions label={labels[field]} onToggle={() => onToggle(field)} />
        </div>
      ))}
      <HiddenFieldActions definitions={fields} hiddenFields={hiddenFields} onToggle={onToggle} />
    </div>
  );
}

const MeasuredBusinessLetterPaginator = forwardRef(function MeasuredBusinessLetterPaginator({ items }, ref) {
  const rootRef = useRef(null);
  useImperativeHandle(ref, () => ({ measureNow: () => measureBusinessLetterPages(rootRef.current, items) }), [items]);
  return <div className="offer-measure-root" ref={rootRef} aria-hidden="true"><div className="invoice-print-page business-letter-print-page is-first-page"><div className="invoice-print-page-content" data-first /></div><div className="invoice-print-page business-letter-print-page is-follow-page"><div className="invoice-print-page-content" data-follow /></div><div className="business-letter-measure-content"><p className="invoice-print-flow-text" data-probe /><h2 className="invoice-print-title business-letter-print-subject" data-subject-probe /></div></div>;
});

function measureBusinessLetterPages(root, items) {
  if (!root) return null;
  const first = root.querySelector('[data-first]');
  const follow = root.querySelector('[data-follow]');
  const probe = root.querySelector('[data-probe]');
  const subjectProbe = root.querySelector('[data-subject-probe]');
  if (!first || !follow || !probe || !subjectProbe) return null;
  const measure = (text, role) => { const target = role === 'subject' ? subjectProbe : probe; target.textContent = String(text || '').trim(); return getOuterHeight(target); };
  const firstCapacity = first.getBoundingClientRect().height - 8;
  const followCapacity = follow.getBoundingClientRect().height - 8;
  return paginateMeasuredItems({ items, firstPageCapacity: firstCapacity, followPageCapacity: followCapacity, getItemHeight: (item) => measure(item.text, item.role), splitTextItem: (item, available) => takeMeasuredText(item.text, available, (text) => measure(text, item.role)) });
}

const BusinessLetterPrintPages = forwardRef(function BusinessLetterPrintPages({ content, details, footerLines, hiddenContentFields, labels, pages, recipient, sender, visibleContactFields, visibleDetailFields, visibleRecipientFields, visibleFooterFields }, ref) {
  const totalPages = pages.length;
  const recipientLines = [recipient.company, visibleRecipientFields.some(({ field }) => field === 'attention') ? recipient.attention : '', visibleRecipientFields.some(({ field }) => field === 'name') ? recipient.name : '', recipient.street, recipient.cityLine].filter(Boolean);
  return <div className="invoice-print-pages business-letter-print-pages" ref={ref} aria-hidden="true">
    {pages.map((page) => <article className={`invoice-print-page business-letter-print-page ${page.pageNumber === 1 ? 'is-first-page' : 'is-follow-page'}`} key={page.pageNumber}>
      {page.pageNumber === 1 ? <div className="business-letter-print-first-header"><header className="invoice-print-header"><div><p className="invoice-print-company-name">{sender.company}</p></div><div className="invoice-print-contact">{visibleContactFields.map(({ field, labelField }) => <p key={field}><span>{labels[labelField]}</span>{sender[field]}</p>)}</div></header><section className="invoice-print-address-row"><div className="invoice-print-recipient"><p className="invoice-print-sender-line">{sender.senderLine}</p>{recipientLines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><div className="invoice-print-details">{visibleDetailFields.map(({ field, type }) => <p key={field}><span>{labels[field]}</span><strong>{type === 'date' ? formatGermanDate(details[field]) : details[field]}</strong></p>)}</div></section></div> : <header className="invoice-print-header invoice-print-continuation-header"><p className="invoice-print-company-name">{sender.company}</p></header>}
      <div className="invoice-print-page-content">{page.items.map((item, index) => item.role === 'subject' ? <h2 className="invoice-print-title business-letter-print-subject" key={`${item.id}-${index}`}>{item.text}</h2> : <p className="invoice-print-flow-text" key={`${item.id}-${index}`}>{item.text}</p>)}</div>
      <p className={`invoice-print-page-number${totalPages > 1 ? '' : ' is-empty'}`}>{totalPages > 1 ? `${page.pageNumber}/${totalPages}` : ''}</p>
      <BusinessLetterPrintFooter footerLines={footerLines} visibleFooterFields={visibleFooterFields} />
    </article>)}
  </div>;
});

function BusinessLetterPrintFooter({ footerLines, visibleFooterFields }) {
  return <footer className="invoice-print-footer"><section>{['companyName', 'companyStreet', 'companyCity', 'companyExtra'].map((field) => footerLines[field]).filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</section><section>{visibleFooterFields.map(({ field }) => footerLines[field]).filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</section><section>{['bankName', 'iban', 'bic', 'bankExtra'].map((field) => footerLines[field]).filter(Boolean).map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</section></footer>;
}

function getOuterHeight(element) {
  const styles = window.getComputedStyle(element);
  return element.getBoundingClientRect().height + (parseFloat(styles.marginTop) || 0) + (parseFloat(styles.marginBottom) || 0);
}

function waitForNextFrame() {
  return new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
}
