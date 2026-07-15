export default function TotalsBox({
  ariaLabel,
  formatCurrency,
  formatPercent,
  labels,
  onLabelChange,
  showNetTotal = true,
  showTaxDetails = true,
  totals,
}) {
  return (
    <aside className="offer-summary invoice-document-summary" aria-label={ariaLabel}>
      {showNetTotal && (
        <div>
          <input
            className="document-label-input"
            aria-label="Beschriftung Nettobetrag"
            value={labels.net}
            onChange={(event) => onLabelChange('net', event.target.value)}
          />
          <strong>{formatCurrency(totals.net)}</strong>
        </div>
      )}
      {showTaxDetails && totals.taxGroups.map((group) => (
        <div key={group.taxRate}>
          <span className="document-summary-label">
            <input
              className="document-label-input"
              aria-label="Beschriftung Umsatzsteuer"
              value={labels.taxAmount}
              onChange={(event) => onLabelChange('taxAmount', event.target.value)}
            />
            <span>{formatPercent(group.taxRate)}%</span>
          </span>
          <strong>{formatCurrency(group.tax)}</strong>
        </div>
      ))}
      <div>
        <input
          className="document-label-input"
          aria-label="Beschriftung Gesamtbetrag"
          value={labels.grandTotal}
          onChange={(event) => onLabelChange('grandTotal', event.target.value)}
        />
        <strong>{formatCurrency(totals.gross)}</strong>
      </div>
    </aside>
  );
}
