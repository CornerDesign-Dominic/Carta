import { useEffect, useRef } from 'react';
import { normalizeCatalogAmountValue, normalizeCatalogTaxRate } from '../../masterData/catalogItemModel.js';
import { resizeTextarea } from '../../utils/resizeTextarea.js';

function Field({ label, className = '', inputRef, ...props }) {
  return <label className={`partner-field ${className}`.trim()}><span>{label}</span><input {...props} ref={inputRef} /></label>;
}

function Textarea({ label, hideLabel = false, ...props }) {
  const ref = useRef(null);
  useEffect(() => { resizeTextarea(ref.current); }, [props.value]);
  const input = <textarea {...props} ref={ref} aria-label={hideLabel ? label : undefined} rows="2" onInput={(event) => { resizeTextarea(event.currentTarget); props.onInput?.(event); }} />;
  return hideLabel
    ? <div className="partner-field partner-field-wide">{input}</div>
    : <label className="partner-field partner-field-wide"><span>{label}</span>{input}</label>;
}

function FormSection({ id, title, children }) {
  return <section className="catalog-item-form-section" aria-labelledby={`${id}-title`}>
    <h4 id={`${id}-title`}>{title}</h4>
    <div className="catalog-item-form-section-content">{children}</div>
  </section>;
}

function FormArea({ id, title, hint, className = '', children }) {
  return <section className={`catalog-item-form-area ${className}`.trim()} aria-labelledby={`${id}-title`}>
    <div className="catalog-item-form-area-heading"><h3 id={`${id}-title`}>{title}</h3><p>{hint}</p></div>
    {children}
  </section>;
}

export default function CatalogItemForm({ item, titleInputRef, onUpdateField, actions }) {
  const field = (path, label, className = '', type = 'text', props = {}) => <Field id={`catalog-${item.id}-${path.join('-')}`} label={label} className={className} type={type} value={path.reduce((current, key) => current[key], item)} onChange={(event) => onUpdateField(path, event.target.value)} {...props} />;
  const textarea = (path, label, options = {}) => <Textarea id={`catalog-${item.id}-${path.join('-')}`} label={label} value={path.reduce((current, key) => current[key], item)} onChange={(event) => onUpdateField(path, event.target.value)} {...options} />;
  const isTextService = item.type === 'textService';
  const isDeliveryItem = item.type === 'deliveryItem';
  const isGoods = item.type === 'goods';
  const descriptionPath = isTextService ? ['descriptions', 'textInvoice'] : isDeliveryItem ? ['descriptions', 'deliveryNote'] : ['descriptions', 'standard'];
  const descriptionTitle = isTextService ? 'Ausführliche Leistungsbeschreibung' : isDeliveryItem ? 'Lieferbeschreibung' : isGoods ? 'Beschreibungen' : 'Beschreibung';

  return <form className="partner-form catalog-item-form" onSubmit={(event) => event.preventDefault()}>
    <FormArea id="catalog-document-fields" title="Wird in Dokumente übernommen" hint="Diese Angaben können später in Rechnungen, Angebote oder Lieferscheine übernommen werden.">
      {isGoods && <FormSection id="catalog-basics" title="Grunddaten"><div className="partner-form-grid partner-form-grid-two-columns">{field(['number'], 'Artikelnummer')}</div></FormSection>}
      <FormSection id="catalog-description" title={descriptionTitle}>
        {textarea(descriptionPath, isTextService ? 'Ausführliche Leistungsbeschreibung' : isDeliveryItem ? 'Lieferbeschreibung' : isGoods ? 'Beschreibung für Rechnung' : 'Beschreibung', { hideLabel: !isGoods })}
        {isGoods && textarea(['descriptions', 'deliveryNote'], 'Beschreibung für Lieferschein')}
      </FormSection>
      {!isTextService && <div className="catalog-item-form-inline-fields partner-form-grid partner-form-grid-two-columns">{field(['quantity', 'defaultValue'], 'Anzahl', 'catalog-item-form-emphasized-label', 'text', { inputMode: 'decimal' })}{field(['quantity', 'unit'], 'Einheit', 'catalog-item-form-emphasized-label')}</div>}
      {isTextService && <FormSection id="catalog-text-quantity" title="Mengen- oder Zeitangabe"><div className="partner-form-grid">{field(['quantity', 'textLabel'], 'Mengen- oder Zeitangabe')}</div></FormSection>}
      {!isDeliveryItem && <div className="catalog-item-form-inline-fields partner-form-grid partner-form-grid-two-columns">
        {field(isTextService ? ['pricing', 'netTotalAmount'] : ['pricing', 'netUnitPrice'], isTextService ? 'Netto-Positionsbetrag' : 'Einzelpreis netto', 'catalog-item-form-emphasized-label', 'text', { inputMode: 'decimal', onBlur: (event) => { const normalized = normalizeCatalogAmountValue(event.target.value); if (normalized !== null) onUpdateField(isTextService ? ['pricing', 'netTotalAmount'] : ['pricing', 'netUnitPrice'], normalized); } })}
        {field(['pricing', 'taxRate'], 'Umsatzsteuer', 'catalog-item-form-emphasized-label', 'text', { inputMode: 'decimal', onBlur: (event) => { const normalized = normalizeCatalogTaxRate(event.target.value); if (normalized !== null) onUpdateField(['pricing', 'taxRate'], normalized); } })}
      </div>}
      {(isGoods || isDeliveryItem) && <FormSection id="catalog-delivery" title="Lieferscheindaten">{textarea(['delivery', 'defaultNote'], 'Standard-Lieferhinweis')}</FormSection>}
    </FormArea>
    <FormArea id="catalog-internal-fields" title="Nur für deine Stammdaten" hint="Diese Angaben dienen nur der Verwaltung und werden nicht automatisch in Dokumente übernommen." className="is-internal">
      <div className="partner-form-grid partner-form-grid-two-columns">
        <Field inputRef={titleInputRef} id={`catalog-${item.id}-title`} label="Suchwort" value={item.title} onChange={(event) => onUpdateField(['title'], event.target.value)} />
        <label className="partner-checkbox-field"><input type="checkbox" checked={item.isActive} onChange={(event) => onUpdateField(['isActive'], event.target.checked)} /> Aktiv</label>
      </div>
      <FormSection id="catalog-internal" title="Interne Notiz">{textarea(['internalNote'], 'Interne Notiz', { hideLabel: true })}</FormSection>
    </FormArea>
    {actions && <div className="catalog-item-form-actions">{actions}</div>}
  </form>;
}
