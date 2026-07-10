import {
  baseInterestRates,
  baseInterestRateOverviewUrl,
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
        <p className="eyebrow">WERKZEUGE</p>
        <h1>Basiszinssatz-Tabelle</h1>
        <p className="intro tools-info-intro">
          Diese Tabelle zeigt die Basiszinssätze und die daraus abgeleiteten Verzugszinssätze,
          die der Verzugszinsenrechner verwendet.
        </p>

        {lastUpdated && (
          <p className="tools-info-meta">Zuletzt aktualisiert: {formatDate(lastUpdated)}</p>
        )}

        <div className="tools-info-disclaimer">
          <p>
            Die Tabelle dient nur der unverbindlichen Information und Berechnungshilfe. Trotz
            sorgfältiger Pflege kann keine Gewähr für Vollständigkeit, Aktualität und Richtigkeit
            übernommen werden. Bitte prüfen Sie die jeweils aktuellen Werte bei der Deutschen
            Bundesbank oder holen Sie bei rechtlichen Fragen fachkundigen Rat ein.
          </p>
          <p>Diese Seite stellt keine Rechtsberatung dar.</p>
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

        <p className="tools-info-source">
          Quellen:{' '}
          <a href={baseInterestRateSourceUrl} target="_blank" rel="noopener noreferrer">
            Deutsche Bundesbank
          </a>
          {' '}und{' '}
          <a href={baseInterestRateOverviewUrl} target="_blank" rel="noopener noreferrer">
            basiszinssatz.de
          </a>
        </p>
      </article>
    </main>
  );
}
