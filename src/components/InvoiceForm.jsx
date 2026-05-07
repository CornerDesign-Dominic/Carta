import { useMemo, useState } from 'react';

const initialCompany = {
  companyName: '',
  street: '',
  postalCode: '',
  city: '',
  phone: '',
  fax: '',
  email: '',
  website: '',
};

const initialRecipient = {
  companyName: '',
  street: '',
  postalCode: '',
  city: '',
};

const initialBillingDetails = {
  vatId: '',
  taxNumber: '',
  owner: '',
  bankName: '',
  iban: '',
  bic: '',
};

const initialInvoice = {
  invoiceNumber: '',
  internalNumber: '',
  externalNumber: '',
  customerNumber: '',
  date: '',
  paymentTerm: '14 Tage',
};

const initialInvoiceTexts = {
  introText: '',
  closingText: '',
};

function createPosition() {
  return {
    id: crypto.randomUUID(),
    service: '',
    unitPrice: '',
    quantity: '1',
    unit: 'Stk.',
    note: '',
    taxRate: '19',
  };
}

function toNumber(value) {
  const normalized = String(value).replace(',', '.');
  const parsed = Number.parseFloat(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

function hasValue(value) {
  return String(value ?? '').trim().length > 0;
}

function joinValues(values, separator = ' ') {
  return values.filter(hasValue).join(separator);
}

function calculatePosition(position) {
  const net = toNumber(position.unitPrice) * toNumber(position.quantity);
  const taxRate = toNumber(position.taxRate);
  const tax = taxRate > 0 ? net * (taxRate / 100) : 0;

  return {
    net,
    tax,
    gross: net + tax,
    taxRate,
  };
}

export default function InvoiceForm() {
  const [company, setCompany] = useState(initialCompany);
  const [recipient, setRecipient] = useState(initialRecipient);
  const [billingDetails, setBillingDetails] = useState(initialBillingDetails);
  const [invoice, setInvoice] = useState(initialInvoice);
  const [invoiceTexts, setInvoiceTexts] = useState(initialInvoiceTexts);
  const [positions, setPositions] = useState([createPosition()]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const totals = useMemo(() => {
    return positions.reduce(
      (summary, position) => {
        const calculated = calculatePosition(position);

        summary.net += calculated.net;
        summary.tax += calculated.tax;
        summary.gross += calculated.gross;

        if (calculated.taxRate > 0) {
          summary.taxable += calculated.net;
        } else {
          summary.nonTaxable += calculated.net;
        }

        return summary;
      },
      {
        net: 0,
        taxable: 0,
        nonTaxable: 0,
        tax: 0,
        gross: 0,
      },
    );
  }, [positions]);

  function updateCompanyField(field, value) {
    setCompany((current) => ({ ...current, [field]: value }));
  }

  function updateRecipientField(field, value) {
    setRecipient((current) => ({ ...current, [field]: value }));
  }

  function updateBillingDetailsField(field, value) {
    setBillingDetails((current) => ({ ...current, [field]: value }));
  }

  function updateInvoiceField(field, value) {
    setInvoice((current) => ({ ...current, [field]: value }));
  }

  function updateInvoiceTextField(field, value) {
    setInvoiceTexts((current) => ({ ...current, [field]: value }));
  }

  function updatePosition(positionId, field, value) {
    setPositions((current) =>
      current.map((position) =>
        position.id === positionId ? { ...position, [field]: value } : position,
      ),
    );
  }

  function addPosition() {
    setPositions((current) => [...current, createPosition()]);
  }

  function removePosition(positionId) {
    setPositions((current) =>
      current.length === 1 ? current : current.filter((position) => position.id !== positionId),
    );
  }

  return (
    <form className="invoice-form">
      <FormSection
        title="Absender der Rechnung"
      >
        <div className="company-data-grid">
          <div className="company-data-column">
            <TextField
              label="Firmenname"
              value={company.companyName}
              onChange={(value) => updateCompanyField('companyName', value)}
            />
            <TextField
              label="Straße + Hausnummer"
              value={company.street}
              onChange={(value) => updateCompanyField('street', value)}
            />
            <div className="compact-address-row">
              <TextField
                label="PLZ"
                value={company.postalCode}
                onChange={(value) => updateCompanyField('postalCode', value)}
              />
              <TextField
                label="Stadt"
                value={company.city}
                onChange={(value) => updateCompanyField('city', value)}
              />
            </div>
          </div>

          <div className="company-data-column">
            <TextField
              label="E-Mail"
              type="email"
              value={company.email}
              onChange={(value) => updateCompanyField('email', value)}
            />
            <TextField
              label="Telefon"
              value={company.phone}
              onChange={(value) => updateCompanyField('phone', value)}
            />
            <TextField
              label="Fax"
              value={company.fax}
              onChange={(value) => updateCompanyField('fax', value)}
            />
            <TextField
              label="Website"
              value={company.website}
              onChange={(value) => updateCompanyField('website', value)}
            />
          </div>
        </div>
      </FormSection>

      <FormSection title="Steuer- und Bankdaten">
        <div className="company-data-grid">
          <div className="company-data-column">
            <TextField
              label="USt-IdNr."
              value={billingDetails.vatId}
              onChange={(value) => updateBillingDetailsField('vatId', value)}
            />
            <TextField
              label="Steuernummer"
              value={billingDetails.taxNumber}
              onChange={(value) => updateBillingDetailsField('taxNumber', value)}
            />
            <TextField
              label="Inhaber"
              value={billingDetails.owner}
              onChange={(value) => updateBillingDetailsField('owner', value)}
            />
          </div>

          <div className="company-data-column">
            <TextField
              label="Bankname"
              value={billingDetails.bankName}
              onChange={(value) => updateBillingDetailsField('bankName', value)}
            />
            <TextField
              label="IBAN"
              value={billingDetails.iban}
              onChange={(value) => updateBillingDetailsField('iban', value)}
            />
            <TextField
              label="BIC"
              value={billingDetails.bic}
              onChange={(value) => updateBillingDetailsField('bic', value)}
            />
          </div>
        </div>
      </FormSection>

      <FormSection title="Empfänger der Rechnung">
        <div className="company-data-grid">
          <div className="company-data-column">
            <TextField
              label="Firma"
              value={recipient.companyName}
              onChange={(value) => updateRecipientField('companyName', value)}
            />
            <TextField
              label="Straße + Hausnummer"
              value={recipient.street}
              onChange={(value) => updateRecipientField('street', value)}
            />
            <div className="compact-address-row">
              <TextField
                label="PLZ"
                value={recipient.postalCode}
                onChange={(value) => updateRecipientField('postalCode', value)}
              />
              <TextField
                label="Stadt"
                value={recipient.city}
                onChange={(value) => updateRecipientField('city', value)}
              />
            </div>
          </div>

          <div className="company-data-column" aria-hidden="true" />
        </div>
      </FormSection>

      <FormSection
        title="Rechnungsdaten"
      >
        <div className="company-data-grid">
          <div className="company-data-column">
            <TextField
              label="Rechnungsnummer"
              value={invoice.invoiceNumber}
              onChange={(value) => updateInvoiceField('invoiceNumber', value)}
            />
            <TextField
              label="Rechnungsdatum"
              type="date"
              value={invoice.date}
              onChange={(value) => updateInvoiceField('date', value)}
            />
            <TextField
              label="Zahlungsfrist"
              value={invoice.paymentTerm}
              onChange={(value) => updateInvoiceField('paymentTerm', value)}
            />
          </div>

          <div className="company-data-column">
            <TextField
              label="Interne Nummer"
              value={invoice.internalNumber}
              onChange={(value) => updateInvoiceField('internalNumber', value)}
            />
            <TextField
              label="Externe Nummer"
              value={invoice.externalNumber}
              onChange={(value) => updateInvoiceField('externalNumber', value)}
            />
            <TextField
              label="Kundennummer"
              value={invoice.customerNumber}
              onChange={(value) => updateInvoiceField('customerNumber', value)}
            />
          </div>
        </div>
      </FormSection>

      <FormSection title="Rechnungstexte">
        <div className="company-data-grid">
          <div className="company-data-column">
            <TextField
              label="Vorlauftext"
              value={invoiceTexts.introText}
              onChange={(value) => updateInvoiceTextField('introText', value)}
              multiline
            />
          </div>

          <div className="company-data-column">
            <TextField
              label="Nachlauftext"
              value={invoiceTexts.closingText}
              onChange={(value) => updateInvoiceTextField('closingText', value)}
              multiline
            />
          </div>
        </div>
      </FormSection>

      <FormSection title="Rechnungspositionen">
        <PositionTable
          onRemove={removePosition}
          onUpdate={updatePosition}
          positions={positions}
          removable={positions.length > 1}
        />

        <button className="secondary-action" type="button" onClick={addPosition}>
          + Position hinzufügen
        </button>

        <InvoiceSummary totals={totals} />

        <div className="preview-action-row">
          <button className="primary-action" type="button" onClick={() => setIsPreviewOpen(true)}>
            Vorschau öffnen
          </button>
        </div>
      </FormSection>

      {isPreviewOpen && (
        <PreviewModal
          billingDetails={billingDetails}
          company={company}
          invoice={invoice}
          invoiceTexts={invoiceTexts}
          onClose={() => setIsPreviewOpen(false)}
          positions={positions}
          recipient={recipient}
          totals={totals}
        />
      )}
    </form>
  );
}

function FormSection({ title, description, children }) {
  return (
    <section className="form-section">
      <div className="form-section-heading">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = 'text',
  multiline = false,
  inputId,
  className = '',
}) {
  const id = inputId ?? label.toLowerCase().replaceAll(' ', '-');

  return (
    <label className={className ? `field ${className}` : 'field'} htmlFor={id}>
      <span>{label}</span>
      {multiline ? (
        <textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}

function PositionTable({ positions, onUpdate, onRemove, removable }) {
  return (
    <div className="position-table-wrap">
      <table className="position-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Leistung/Beschreibung</th>
            <th>Einzelpreis</th>
            <th>Anzahl</th>
            <th>Einheit</th>
            <th>Gesamtpreis</th>
            <th>Steuersatz</th>
            <th>Freitext</th>
            <th aria-label="Aktion" />
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => {
            const calculated = calculatePosition(position);

            return (
              <tr key={position.id}>
                <td className="position-number" data-label="Pos.">
                  {index + 1}
                </td>
                <td data-label="Leistung/Beschreibung">
                  <input
                    aria-label={`Leistung Position ${index + 1}`}
                    value={position.service}
                    onChange={(event) => onUpdate(position.id, 'service', event.target.value)}
                  />
                </td>
                <td data-label="Einzelpreis">
                  <input
                    aria-label={`Einzelpreis Position ${index + 1}`}
                    inputMode="decimal"
                    type="number"
                    value={position.unitPrice}
                    onChange={(event) => onUpdate(position.id, 'unitPrice', event.target.value)}
                  />
                </td>
                <td data-label="Anzahl">
                  <input
                    aria-label={`Anzahl Position ${index + 1}`}
                    inputMode="decimal"
                    type="number"
                    value={position.quantity}
                    onChange={(event) => onUpdate(position.id, 'quantity', event.target.value)}
                  />
                </td>
                <td data-label="Einheit">
                  <input
                    aria-label={`Einheit Position ${index + 1}`}
                    value={position.unit}
                    onChange={(event) => onUpdate(position.id, 'unit', event.target.value)}
                  />
                </td>
                <td className="position-total" data-label="Gesamtpreis">
                  {formatCurrency(calculated.net)}
                </td>
                <td data-label="Steuersatz">
                  <select
                    aria-label={`Steuersatz Position ${index + 1}`}
                    value={position.taxRate}
                    onChange={(event) => onUpdate(position.id, 'taxRate', event.target.value)}
                  >
                    <option value="0">0 %</option>
                    <option value="7">7 %</option>
                    <option value="19">19 %</option>
                  </select>
                </td>
                <td data-label="Freitext">
                  <input
                    aria-label={`Freitext Position ${index + 1}`}
                    value={position.note}
                    onChange={(event) => onUpdate(position.id, 'note', event.target.value)}
                  />
                </td>
                <td data-label="Aktion">
                  {removable && (
                    <button
                      aria-label={`Position ${index + 1} entfernen`}
                      className="table-remove-action"
                      type="button"
                      onClick={() => onRemove(position.id)}
                    >
                      ×
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function InvoiceSummary({ totals }) {
  const rows = [
    ['Gesamt Nettobetrag', totals.net],
    ['Davon nicht steuerpflichtig', totals.nonTaxable],
    ['Davon steuerpflichtig', totals.taxable],
    ['Umsatzsteuerbetrag', totals.tax],
    ['Gesamt Bruttobetrag', totals.gross],
  ];

  return (
    <aside className="invoice-summary" aria-label="Rechnungssummen">
      {rows.map(([label, value], index) => (
        <div className={index === rows.length - 1 ? 'summary-row summary-total' : 'summary-row'} key={label}>
          <span>{label}</span>
          <strong>{formatCurrency(value)}</strong>
        </div>
      ))}
    </aside>
  );
}

function PreviewModal({
  billingDetails,
  company,
  invoice,
  invoiceTexts,
  onClose,
  positions,
  recipient,
  totals,
}) {
  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal-dialog preview-modal" role="dialog" aria-modal="true" aria-labelledby="preview-title">
        <div className="modal-header">
          <h2 id="preview-title">Rechnungsvorschau</h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Vorschau schließen">
            ×
          </button>
        </div>
        <InvoicePreview
          billingDetails={billingDetails}
          company={company}
          invoice={invoice}
          invoiceTexts={invoiceTexts}
          positions={positions}
          recipient={recipient}
          totals={totals}
        />
      </div>
    </div>
  );
}

function InvoicePreview({
  billingDetails,
  company,
  invoice,
  invoiceTexts,
  positions,
  recipient,
  totals,
}) {
  const companyAddress = joinValues([company.street, joinValues([company.postalCode, company.city])], ', ');
  const recipientAddress = joinValues(
    [recipient.street, joinValues([recipient.postalCode, recipient.city])],
    ', ',
  );

  const contactRows = [
    ['Telefon', company.phone],
    ['Fax', company.fax],
    ['E-Mail', company.email],
    ['Web', company.website],
  ].filter(([, value]) => hasValue(value));

  const referenceRows = [
    ['Rechnungsnummer', invoice.invoiceNumber],
    ['Rechnungsdatum', invoice.date],
    ['Zahlungsfrist', invoice.paymentTerm],
    ['Kundennummer', invoice.customerNumber],
    ['Interne Nummer', invoice.internalNumber],
    ['Externe Nummer', invoice.externalNumber],
  ].filter(([, value]) => hasValue(value));

  const footerRows = [
    ['USt-IdNr.', billingDetails.vatId],
    ['Steuernummer', billingDetails.taxNumber],
    ['Inhaber', billingDetails.owner],
    ['Bank', billingDetails.bankName],
    ['IBAN', billingDetails.iban],
    ['BIC', billingDetails.bic],
  ].filter(([, value]) => hasValue(value));

  return (
    <article className="invoice-preview-sheet" aria-label="Feste Rechnungsvorschau">
      <header className="invoice-preview-top">
        <div className="preview-sender-block">
          <p className="preview-company-name">{company.companyName || 'Firmenname'}</p>
          {companyAddress && <p>{companyAddress}</p>}
        </div>

        {contactRows.length > 0 && (
          <div className="preview-contact">
            {contactRows.map(([label, value]) => (
              <p key={label}>
                <span>{label}</span>
                {value}
              </p>
            ))}
          </div>
        )}
      </header>

      <section className="preview-address-window" aria-label="Empfängeradresse">
        <p className="preview-sender-line">
          {joinValues([company.companyName, companyAddress], ' · ') || 'Absender'}
        </p>
        <div className="preview-recipient">
          <p>{recipient.companyName || 'Empfängerfirma'}</p>
          {recipient.street && <p>{recipient.street}</p>}
          {joinValues([recipient.postalCode, recipient.city]) && (
            <p>{joinValues([recipient.postalCode, recipient.city])}</p>
          )}
        </div>
      </section>

      <section className="preview-title-row">
        <div>
          <p className="preview-document-label">Rechnung</p>
          <h1>Rechnung</h1>
        </div>
        {referenceRows.length > 0 && (
          <dl className="preview-reference-list">
            {referenceRows.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {hasValue(invoiceTexts.introText) && (
        <p className="preview-flow-text">{invoiceTexts.introText}</p>
      )}

      <section className="preview-positions-section" aria-label="Rechnungspositionen">
        <table className="preview-position-table">
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Leistung</th>
              <th>Einzelpreis</th>
              <th>Anzahl</th>
              <th>Einheit</th>
              <th>Gesamt</th>
              <th>USt.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => {
              const calculated = calculatePosition(position);

              return (
                <tr key={position.id}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>{position.service || 'Leistung'}</strong>
                    {hasValue(position.note) && <span>{position.note}</span>}
                  </td>
                  <td>{formatCurrency(toNumber(position.unitPrice))}</td>
                  <td>{toNumber(position.quantity)}</td>
                  <td>{position.unit}</td>
                  <td>{formatCurrency(calculated.net)}</td>
                  <td>{calculated.taxRate} %</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <aside className="preview-summary">
        <div>
          <span>Gesamt Nettobetrag</span>
          <strong>{formatCurrency(totals.net)}</strong>
        </div>
        <div>
          <span>Davon nicht steuerpflichtig</span>
          <strong>{formatCurrency(totals.nonTaxable)}</strong>
        </div>
        <div>
          <span>Davon steuerpflichtig</span>
          <strong>{formatCurrency(totals.taxable)}</strong>
        </div>
        <div>
          <span>Umsatzsteuerbetrag</span>
          <strong>{formatCurrency(totals.tax)}</strong>
        </div>
        <div className="preview-summary-total">
          <span>Gesamt Bruttobetrag</span>
          <strong>{formatCurrency(totals.gross)}</strong>
        </div>
      </aside>

      {hasValue(invoiceTexts.closingText) && (
        <p className="preview-flow-text">{invoiceTexts.closingText}</p>
      )}

      {footerRows.length > 0 && (
        <footer className="preview-footer">
          {footerRows.map(([label, value]) => (
            <p key={label}>
              <span>{label}</span>
              {value}
            </p>
          ))}
        </footer>
      )}
    </article>
  );
}
