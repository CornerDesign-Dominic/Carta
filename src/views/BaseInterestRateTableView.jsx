import { baseInterestRates, baseInterestRateSourceUrl } from '../components/tools/lateInterest/baseInterestRates.js';
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
          Diese Tabelle zeigt die Basiszinssätze, die der Verzugszinsenrechner für gesetzliche
          Verzugszinsen verwendet.
        </p>

        {lastUpdated && (
          <p className="tools-info-meta">Zuletzt aktualisiert: {formatDate(lastUpdated)}</p>
        )}

        <div className="tools-info-table-wrap">
          <table className="tools-info-table">
            <thead>
              <tr>
                <th>Gültig ab</th>
                <th>Basiszinssatz</th>
              </tr>
            </thead>
            <tbody>
              {sortedRates.map((entry) => (
                <tr key={entry.validFrom}>
                  <td>{formatDate(entry.validFrom)}</td>
                  <td>{formatPercent(entry.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="tools-info-source">
          Quelle:{' '}
          <a href={baseInterestRateSourceUrl} target="_blank" rel="noopener noreferrer">
            Deutsche Bundesbank
          </a>
        </p>
      </article>
    </main>
  );
}
