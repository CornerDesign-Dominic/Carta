import { useEffect, useState } from 'react';

function ConsentToggle({ checked, disabled, label, description, onChange }) {
  return (
    <label className="cookie-consent-toggle">
      <span className="cookie-consent-toggle-copy">
        <strong>{label}</strong>
        <span>{description}</span>
      </span>
      <span className="cookie-consent-switch">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span aria-hidden="true" className="cookie-consent-slider" />
      </span>
    </label>
  );
}

export default function CookieConsentBanner({
  initialConsent,
  isVisible,
  isSettingsOpen,
  onAcceptAll,
  onAcceptNecessary,
  onSaveSettings,
  onOpenSettings,
  onCloseSettings,
  onNavigate,
}) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(initialConsent.analytics === true);

  useEffect(() => {
    setAnalyticsEnabled(initialConsent.analytics === true);
  }, [initialConsent.analytics, isSettingsOpen]);

  if (!isVisible && !isSettingsOpen) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <div className="cookie-consent-banner" role="region" aria-label="Cookie-Einwilligung">
          <div className="cookie-consent-copy">
            <strong>Datenschutz-Einstellungen</strong>
            <p>
              Wir verwenden notwendige lokale Speicherfunktionen, damit Belege24
              zuverlässig funktioniert. Mit Ihrer Zustimmung nutzen wir außerdem
              Google Analytics, um zu verstehen, welche Bereiche genutzt werden und wie
              Besucher auf unsere Website gelangen. Sie können selbst entscheiden, ob
              Sie Analyse zulassen.
            </p>
            <button
              type="button"
              className="cookie-consent-link"
              onClick={() => onNavigate({ view: 'legal:datenschutz' })}
            >
              Zur Datenschutzerklärung
            </button>
          </div>
          <div className="cookie-consent-actions">
            <button type="button" className="cookie-button ghost" onClick={onAcceptNecessary}>
              Nur notwendige
            </button>
            <button type="button" className="cookie-button subtle" onClick={onOpenSettings}>
              Einstellungen
            </button>
            <button type="button" className="cookie-button primary" onClick={onAcceptAll}>
              Alle akzeptieren
            </button>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="cookie-consent-modal-backdrop" role="presentation" onClick={onCloseSettings}>
          <section
            className="cookie-consent-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cookie-consent-modal-header">
              <div>
                <p className="eyebrow">DATENSCHUTZ</p>
                <h2 id="cookie-consent-title">Cookie-Einstellungen</h2>
              </div>
              <button
                type="button"
                className="cookie-consent-close"
                onClick={onCloseSettings}
                aria-label="Einstellungen schließen"
              >
                ×
              </button>
            </div>
            <p className="cookie-consent-modal-intro">
              Sie können selbst festlegen, ob wir Analyse zur Verbesserung von
              Belege24 verwenden dürfen. Notwendige lokale Speicherfunktionen bleiben
              immer aktiv.
            </p>
            <div className="cookie-consent-settings">
              <ConsentToggle
                checked
                disabled
                label="Notwendig"
                description="Erforderlich für grundlegende Funktionen wie die Speicherung Ihrer Auswahl."
                onChange={() => {}}
              />
              <ConsentToggle
                checked={analyticsEnabled}
                disabled={false}
                label="Analyse"
                description="Google Analytics hilft uns zu verstehen, wie Belege24 genutzt wird."
                onChange={setAnalyticsEnabled}
              />
            </div>
            <div className="cookie-consent-modal-actions">
              <button type="button" className="cookie-button ghost" onClick={onAcceptNecessary}>
                Nur notwendige
              </button>
              <button
                type="button"
                className="cookie-button primary"
                onClick={() => onSaveSettings(analyticsEnabled)}
              >
                Auswahl speichern
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
