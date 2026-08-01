import { useEffect, useRef, useState } from 'react';
import { normalizeCatalogAmountValue, normalizeCatalogTaxRate } from '../../masterData/catalogItemModel.js';
import { resizeTextarea } from '../../utils/resizeTextarea.js';
import FieldHelpTooltip from './FieldHelpTooltip.jsx';

function Field({ label, helpText, className = '', inputRef, ...props }) {
  return <label className={`partner-field ${className}`.trim()}><span>{label}{helpText && <FieldHelpTooltip label={label}>{helpText}</FieldHelpTooltip>}</span><input {...props} ref={inputRef} /></label>;
}

function sanitizeNumericInput(value) {
  const numericValue = String(value ?? '').replace(/[^\d,.]/g, '');
  const separatorIndex = numericValue.search(/[,.]/);
  if (separatorIndex === -1) return numericValue;
  return `${numericValue.slice(0, separatorIndex + 1)}${numericValue.slice(separatorIndex + 1).replace(/[,.]/g, '')}`;
}

function normalizeCatalogQuantityValue(value) {
  if (value === undefined || value === null || String(value).trim() === '') return '';
  const parsed = Number.parseFloat(sanitizeNumericInput(value).replace(',', '.'));
  if (!Number.isFinite(parsed) || parsed < 0) return null;
  return new Intl.NumberFormat('de-DE', { useGrouping: false, maximumFractionDigits: 12 }).format(parsed);
}

function isWithinMaximum(value, maximum) {
  if (maximum === undefined || value === '') return true;
  const parsed = Number.parseFloat(value.replace(',', '.'));
  return !Number.isFinite(parsed) || parsed <= maximum;
}

function FormattedNumberField({ id, label, helpText, className = '', value, onChange, normalize, suffix = '', fallbackValue = '', maximum }) {
  const [isFocused, setIsFocused] = useState(false);
  const lastValidValue = useRef(normalize(value) ?? fallbackValue);
  const normalizedValue = normalize(value);

  useEffect(() => {
    if (normalizedValue !== null) lastValidValue.current = normalizedValue;
  }, [normalizedValue]);

  const displayValue = isFocused || !normalizedValue ? sanitizeNumericInput(value) : suffix ? `${normalizedValue} ${suffix}` : normalizedValue;
  return <Field
    id={id}
    label={label}
    helpText={helpText}
    className={className}
    type="text"
    inputMode="decimal"
    value={displayValue}
    onChange={(event) => {
      const nextValue = sanitizeNumericInput(event.target.value);
      if (!isWithinMaximum(nextValue, maximum)) {
        event.currentTarget.value = sanitizeNumericInput(value);
        return;
      }
      if (event.currentTarget.value !== nextValue) event.currentTarget.value = nextValue;
      onChange(nextValue);
    }}
    onFocus={(event) => {
      setIsFocused(true);
      const input = event.currentTarget;
      window.requestAnimationFrame(() => input.select());
    }}
    onBlur={(event) => {
      const nextValue = normalize(sanitizeNumericInput(event.target.value));
      const restoredValue = nextValue === null ? lastValidValue.current || fallbackValue : nextValue;
      lastValidValue.current = restoredValue;
      onChange(restoredValue);
      setIsFocused(false);
    }}
  />;
}

function Textarea({ label, helpText, hideLabel = false, ...props }) {
  const ref = useRef(null);
  useEffect(() => { resizeTextarea(ref.current); }, [props.value]);
  const input = <textarea {...props} ref={ref} aria-label={hideLabel ? label : undefined} rows="2" onInput={(event) => { resizeTextarea(event.currentTarget); props.onInput?.(event); }} />;
  return hideLabel
    ? <div className="partner-field partner-field-wide">{input}</div>
    : <label className="partner-field partner-field-wide"><span>{label}{helpText && <FieldHelpTooltip label={label}>{helpText}</FieldHelpTooltip>}</span>{input}</label>;
}

function FormSection({ id, title, helpText, children }) {
  return <section className="catalog-item-form-section" aria-labelledby={`${id}-title`}>
    <h4 id={`${id}-title`}>{title}{helpText && <FieldHelpTooltip label={title}>{helpText}</FieldHelpTooltip>}</h4>
    <div className="catalog-item-form-section-content">{children}</div>
  </section>;
}

function FormArea({ id, title, hint, className = '', children }) {
  return <section className={`catalog-item-form-area ${className}`.trim()} aria-labelledby={`${id}-title`}>
    <div className="catalog-item-form-area-heading"><h3 id={`${id}-title`}>{title}</h3><p>{hint}</p></div>
    {children}
  </section>;
}

export default function CatalogItemForm({ item, entryStatus, titleInputRef, onUpdateField, actions }) {
  const field = (path, label, className = '', type = 'text', props = {}) => <Field id={`catalog-${item.id}-${path.join('-')}`} label={label} className={className} type={type} value={path.reduce((current, key) => current[key], item)} onChange={(event) => onUpdateField(path, event.target.value)} {...props} />;
  const formattedNumberField = (path, label, className, normalize, suffix, fallbackValue, maximum, helpText) => <FormattedNumberField id={`catalog-${item.id}-${path.join('-')}`} label={label} helpText={helpText} className={className} value={path.reduce((current, key) => current[key], item)} onChange={(value) => onUpdateField(path, value)} normalize={normalize} suffix={suffix} fallbackValue={fallbackValue} maximum={maximum} />;
  const textarea = (path, label, options = {}) => <Textarea id={`catalog-${item.id}-${path.join('-')}`} label={label} value={path.reduce((current, key) => current[key], item)} onChange={(event) => onUpdateField(path, event.target.value)} {...options} />;
  const isTextService = item.type === 'textService';
  const isDeliveryItem = item.type === 'deliveryItem';
  const isGoods = item.type === 'goods';
  const descriptionPath = isTextService ? ['descriptions', 'textInvoice'] : isDeliveryItem ? ['descriptions', 'deliveryNote'] : ['descriptions', 'standard'];
  const descriptionTitle = isTextService ? 'Ausführliche Leistungsbeschreibung' : isDeliveryItem ? 'Lieferbeschreibung' : isGoods ? 'Beschreibungen' : 'Beschreibung';
  const entryName = item.title.trim() || ({ service: 'Unbenannte Leistung', goods: 'Unbenannter Artikel', textService: 'Unbenannte Textleistung', deliveryItem: 'Unbenannte Lieferscheinposition' }[item.type] ?? 'Unbenannter Eintrag');
  const entryStatusLabel = { new: 'Neu', saved: 'Im Datenblatt', edited: 'Bearbeitet' }[entryStatus] ?? 'Neu';

  return <form className="partner-form catalog-item-form" onSubmit={(event) => event.preventDefault()}>
    <div className={`catalog-item-form-status-card is-${entryStatus}`}>
      <span className="catalog-item-form-status-name" title={entryName}>{entryName}</span>
      <span className={`catalog-item-form-status-label is-${entryStatus}`}>{entryStatusLabel}</span>
    </div>
    <FormArea id="catalog-document-fields" title="Angaben für die Schnellauswahl in Belege24-Dokumenten" hint="Diese Angaben können später schnell in z. B. Rechnungen, Angebote oder Lieferscheine übernommen werden.">
      {isGoods && <FormSection id="catalog-basics" title="Grunddaten"><div className="partner-form-grid partner-form-grid-two-columns">{field(['number'], 'Artikelnummer', '', 'text', { helpText: 'Wird bei Artikel- und Warenpositionen in das Artikelnummernfeld geeigneter Dokumente übernommen.' })}</div></FormSection>}
      <FormSection id="catalog-description" title={descriptionTitle} helpText="Wird als Positionsbeschreibung in das Dokument übernommen.">
        {textarea(descriptionPath, isTextService ? 'Ausführliche Leistungsbeschreibung' : isDeliveryItem ? 'Lieferbeschreibung' : isGoods ? 'Beschreibung für Rechnung' : 'Beschreibung', { hideLabel: !isGoods, helpText: 'Wird als Positionsbeschreibung in das Dokument übernommen.' })}
        {isGoods && textarea(['descriptions', 'deliveryNote'], 'Beschreibung für Lieferschein')}
      </FormSection>
      {!isTextService && <div className="catalog-item-form-inline-fields partner-form-grid partner-form-grid-two-columns">{formattedNumberField(['quantity', 'defaultValue'], 'Anzahl', 'catalog-item-form-emphasized-label', normalizeCatalogQuantityValue)}{field(['quantity', 'unit'], 'Einheit', 'catalog-item-form-emphasized-label')}</div>}
      {isTextService && <FormSection id="catalog-text-quantity" title="Mengen- oder Zeitangabe" helpText="Wird bei Textleistungen als Mengen- oder Zeittext in die Position übernommen."><div className="partner-form-grid">{field(['quantity', 'textLabel'], 'Mengen- oder Zeitangabe', '', 'text', { helpText: 'Wird bei Textleistungen als Mengen- oder Zeittext in die Position übernommen.' })}</div></FormSection>}
      {!isDeliveryItem && <div className="catalog-item-form-inline-fields partner-form-grid partner-form-grid-two-columns">
        {formattedNumberField(isTextService ? ['pricing', 'netTotalAmount'] : ['pricing', 'netUnitPrice'], isTextService ? 'Netto-Positionsbetrag' : 'Einzelpreis netto', 'catalog-item-form-emphasized-label', normalizeCatalogAmountValue, '€')}
        {formattedNumberField(['pricing', 'taxRate'], 'Umsatzsteuer-Satz', 'catalog-item-form-emphasized-label', normalizeCatalogTaxRate, '%', '19', 100)}
      </div>}
      {(isGoods || isDeliveryItem) && <FormSection id="catalog-delivery" title="Lieferscheindaten">{textarea(['delivery', 'defaultNote'], 'Standard-Lieferhinweis', { helpText: 'Wird bei der späteren Übernahme in einen Lieferschein als Hinweis der Position verwendet.' })}</FormSection>}
    </FormArea>
    <FormArea id="catalog-internal-fields" title="Angaben für die Stammdatenverwaltung" hint="Diese Angaben dienen ausschließlich der Verwaltung und werden in kein Dokument übernommen." className="is-internal">
      <div className="partner-form-grid partner-form-grid-two-columns">
        <Field inputRef={titleInputRef} id={`catalog-${item.id}-title`} label="Suchwort" helpText="Dient der Suche und Auswahl innerhalb der Stammdaten. Es wird nicht in Dokumente übernommen." className="catalog-item-form-emphasized-label" value={item.title} onChange={(event) => onUpdateField(['title'], event.target.value)} />
        <label className="partner-checkbox-field"><input type="checkbox" checked={item.isActive} onChange={(event) => onUpdateField(['isActive'], event.target.checked)} /> Aktiv</label>
      </div>
      <FormSection id="catalog-internal" title="Interne Notiz" helpText="Bleibt ausschließlich in der Stammdatenverwaltung und wird nicht in Dokumente übernommen.">{textarea(['internalNote'], 'Interne Notiz', { hideLabel: true })}</FormSection>
    </FormArea>
    {actions && <div className="catalog-item-form-actions">{actions}</div>}
  </form>;
}
