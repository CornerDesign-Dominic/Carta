import { useEffect, useRef, useState } from 'react';
import { catalogItemTypes, getCatalogItemTypeLabel, normalizeCatalogAmountValue, normalizeCatalogTaxRate } from '../../masterData/catalogItemModel.js';
import { resizeTextarea } from '../../utils/resizeTextarea.js';

function Field({ label, className = '', inputRef, ...props }) { return <label className={`partner-field ${className}`.trim()}><span>{label}</span><input {...props} ref={inputRef} /></label>; }
function Textarea({ label, ...props }) {
  const ref = useRef(null);
  useEffect(() => { resizeTextarea(ref.current); }, [props.value]);
  return <label className="partner-field partner-field-wide"><span>{label}</span><textarea {...props} ref={ref} rows="3" onInput={(event) => { resizeTextarea(event.currentTarget); props.onInput?.(event); }} /></label>;
}
function Card({ id, title, detail, isOpen, onToggle, children }) { return <section className="partner-form-card" aria-labelledby={`${id}-title`}><button className="partner-form-card-toggle" type="button" aria-expanded={isOpen} aria-controls={`${id}-content`} onClick={onToggle}><span><span id={`${id}-title`} className="partner-form-card-title">{title}</span>{detail && <span className="partner-form-card-detail"> · {detail}</span>}</span><span className="partner-form-card-indicator" aria-hidden="true">{isOpen ? '−' : '+'}</span></button><div className="partner-form-card-content" id={`${id}-content`} hidden={!isOpen}>{children}</div></section>; }
function hasValues(values) { return Object.values(values).some(Boolean); }

export default function CatalogItemForm({ item, titleInputRef, onUpdateField, onRequestTypeChange }) {
  const [openSections, setOpenSections] = useState({ basics: true, description: true, quantity: false, pricing: false, delivery: false, internal: false });
  const toggle = (section) => setOpenSections((state) => ({ ...state, [section]: !state[section] }));
  const field = (path, label, className = '', type = 'text', props = {}) => <Field id={`catalog-${item.id}-${path.join('-')}`} label={label} className={className} type={type} value={path.reduce((current, key) => current[key], item)} onChange={(event) => onUpdateField(path, event.target.value)} {...props} />;
  const textarea = (path, label) => <Textarea id={`catalog-${item.id}-${path.join('-')}`} label={label} value={path.reduce((current, key) => current[key], item)} onChange={(event) => onUpdateField(path, event.target.value)} />;
  const isTextService = item.type === 'textService';
  const isDeliveryItem = item.type === 'deliveryItem';
  const isGoods = item.type === 'goods';
  const descriptionPath = isTextService ? ['descriptions', 'textInvoice'] : isDeliveryItem ? ['descriptions', 'deliveryNote'] : ['descriptions', 'standard'];
  const descriptionTitle = isTextService ? 'Ausführliche Leistungsbeschreibung' : isDeliveryItem ? 'Lieferbeschreibung' : isGoods ? 'Beschreibungen' : 'Beschreibung';
  return <form className="partner-form" onSubmit={(event) => event.preventDefault()}>
    <Card id="catalog-basics" title="Grunddaten" detail={item.category} isOpen={openSections.basics} onToggle={() => toggle('basics')}>
      <div className="partner-form-grid partner-form-grid-contact">
        <label className="partner-field"><span>Eintragstyp</span><select value={item.type} onChange={(event) => onRequestTypeChange(event.target.value)}>{catalogItemTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}</select></label>
        {field(['number'], isGoods ? 'Artikelnummer' : isDeliveryItem ? 'Artikel-/Positionsnummer' : 'Leistungsnummer')}
        <Field inputRef={titleInputRef} id={`catalog-${item.id}-title`} label="Bezeichnung" value={item.title} onChange={(event) => onUpdateField(['title'], event.target.value)} />
        {field(['category'], 'Kategorie')}
        <label className="partner-checkbox-field"><input type="checkbox" checked={item.isActive} onChange={(event) => onUpdateField(['isActive'], event.target.checked)} /> Aktiv</label>
      </div>
    </Card>
    <Card id="catalog-description" title={descriptionTitle} detail={hasValues(item.descriptions) ? 'Angaben vorhanden' : ''} isOpen={openSections.description} onToggle={() => toggle('description')}>
      {textarea(descriptionPath, isTextService ? 'Ausführliche Leistungsbeschreibung' : isDeliveryItem ? 'Lieferbeschreibung' : isGoods ? 'Beschreibung für Rechnung' : 'Beschreibung')}
      {isGoods && textarea(['descriptions', 'deliveryNote'], 'Beschreibung für Lieferschein')}
    </Card>
    {!isTextService && <Card id="catalog-quantity" title="Menge und Einheit" detail={item.quantity.defaultValue || item.quantity.unit ? 'Angaben vorhanden' : ''} isOpen={openSections.quantity} onToggle={() => toggle('quantity')}><div className="partner-form-grid partner-form-grid-two-columns">{field(['quantity', 'defaultValue'], 'Standardmenge', '', 'text', { inputMode: 'decimal' })}{field(['quantity', 'unit'], 'Einheit')}</div></Card>}
    {isTextService && <Card id="catalog-text-quantity" title="Mengen- oder Zeitangabe" detail={item.quantity.textLabel} isOpen={openSections.quantity} onToggle={() => toggle('quantity')}><div className="partner-form-grid">{field(['quantity', 'textLabel'], 'Mengen- oder Zeitangabe')}</div></Card>}
    {!isDeliveryItem && <Card id="catalog-pricing" title={isTextService ? 'Betrag und Steuer' : 'Preis und Steuer'} detail={item.pricing.netUnitPrice || item.pricing.netTotalAmount ? 'Angaben vorhanden' : ''} isOpen={openSections.pricing} onToggle={() => toggle('pricing')}><div className="partner-form-grid partner-form-grid-two-columns">
      {field(isTextService ? ['pricing', 'netTotalAmount'] : ['pricing', 'netUnitPrice'], isTextService ? 'Netto-Positionsbetrag' : 'Netto-Einzelpreis', '', 'text', { inputMode: 'decimal', onBlur: (event) => { const normalized = normalizeCatalogAmountValue(event.target.value); if (normalized !== null) onUpdateField(isTextService ? ['pricing', 'netTotalAmount'] : ['pricing', 'netUnitPrice'], normalized); } })}
      {field(['pricing', 'taxRate'], 'Umsatzsteuersatz', '', 'text', { inputMode: 'decimal', onBlur: (event) => { const normalized = normalizeCatalogTaxRate(event.target.value); if (normalized !== null) onUpdateField(['pricing', 'taxRate'], normalized); } })}
    </div></Card>}
    {(isGoods || isDeliveryItem) && <Card id="catalog-delivery" title="Lieferscheindaten" detail={item.delivery.defaultNote ? 'Angaben vorhanden' : ''} isOpen={openSections.delivery} onToggle={() => toggle('delivery')}>{textarea(['delivery', 'defaultNote'], 'Standard-Lieferhinweis')}</Card>}
    <Card id="catalog-internal" title="Interne Angaben" detail={item.internalNote ? 'Notiz vorhanden' : ''} isOpen={openSections.internal} onToggle={() => toggle('internal')}>{textarea(['internalNote'], 'Interne Notiz')}<p className="partner-form-help">Interne Notizen werden später nicht automatisch in Dokumente übernommen.</p></Card>
  </form>;
}
