import {
  baseInterestRates,
  baseInterestRateSourceUrl,
} from '../components/tools/lateInterest/baseInterestRates.js';
import { formatPercent } from '../components/tools/default-interest/defaultInterestUtils.js';

function formatDate(value) {
  const [year, month, day] = String(value).split('-');
  return `${day}.${month}.${year}`;
}

export default function BaseInterestRateTableView() {
  const sortedRates = [...baseInterestRates].reverse();
  const lastUpdated = sortedRates[0]?.validFrom;

  return (
    <main className="tools-info-page">
      <article className="tools-info-paper">
        <h1>Basiszinssatz und Verzugszinssätze</h1>
        <p className="intro tools-info-intro">
          Diese Übersicht zeigt die Basiszinssätze nach § 247 BGB und die daraus abgeleiteten
          gesetzlichen Verzugszinssätze nach § 288 BGB. Die Werte dienen als Grundlage für den
          Verzugszinsenrechner.
        </p>

        {lastUpdated && (
          <p className="tools-info-meta">Zuletzt aktualisiert: {formatDate(lastUpdated)}</p>
        )}

        <div className="tools-info-disclaimer">
          <p>
            Hinweis: Die Tabelle dient als unverbindliche Berechnungshilfe für gesetzliche
            Verzugszinsen. Der Verzugszinssatz beträgt bei Verbrauchern 5 Prozentpunkte und bei
            Entgeltforderungen zwischen Unternehmen 9 Prozentpunkte über dem Basiszinssatz.
          </p>
          <p>
            Der tatsächliche Verzugsbeginn hängt vom Einzelfall ab und richtet sich nicht allein
            nach dieser Tabelle. Diese Seite stellt keine Rechtsberatung dar.
          </p>
          <p>
            Quelle:{' '}
            <a href={baseInterestRateSourceUrl} target="_blank" rel="noopener noreferrer">
              Deutsche Bundesbank – Basiszinssatz
            </a>
          </p>
          <p className="tools-info-legal-basis">Rechtsgrundlagen: § 247 BGB, § 288 BGB, § 286 BGB</p>
        </div>

        <div className="tools-info-table-wrap">
          <table className="tools-info-table">
            <thead>
              <tr>
                <th>Geltungszeitraum</th>
                <th>Basiszinssatz</th>
                <th>Verzugszinssatz Verbraucher</th>
                <th>Verzugszinssatz Unternehmen</th>
              </tr>
            </thead>
            <tbody>
              {sortedRates.map((entry) => (
                <tr key={entry.validFrom}>
                  <td>{formatDate(entry.validFrom)} bis {formatDate(entry.validTo)}</td>
                  <td>{formatPercent(entry.baseRate)}</td>
                  <td>{formatPercent(entry.consumerDefaultRate)}</td>
                  <td>{formatPercent(entry.businessDefaultRate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </main>
  );
}
