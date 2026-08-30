# Belege24 – Artikel-Queue

Diese Datei ist die zentrale Arbeitsliste für neue Wissensartikel. Codex arbeitet neue Artikel nach `docs/knowledge/ARTICLE_GUIDE.md` und prüft sie anschließend anhand von `docs/knowledge/ARTICLE_REVIEW.md`.

## Verwendung

Für jeden neuen Artikel reicht grundsätzlich ein Eintrag mit Titel. Zusätzliche Schwerpunkte nur ergänzen, wenn sie für das Thema wichtig sind.

Empfohlenes Format:

```md
### Titel des Artikels
Status: offen
Kategorie: <Kategorie>
Schwerpunkt:
- optionaler Punkt
- optionaler Punkt
Review-Grund: -
```

Mögliche Statuswerte:

- `offen`
- `in Arbeit`
- `Review`
- `fertig`

## Arbeitsregeln für Codex

1. Nur Einträge mit Status `offen` oder ausdrücklich ausgewählte Einträge bearbeiten.
2. Vor dem Schreiben bestehende Seiten, Glossarbegriffe und interne Verlinkungsmöglichkeiten prüfen.
3. Artikel vollständig technisch integrieren.
4. Review-Checkliste abarbeiten.
5. Status erst auf `fertig` setzen, wenn Inhalt, Verlinkungen und technische Prüfungen abgeschlossen sind.
6. Kann eine fachliche, quellenbezogene oder technische Unsicherheit nicht zuverlässig geklärt werden, den Status auf `Review` setzen und unter `Review-Grund` konkret dokumentieren, was geprüft werden muss.
7. Unsichere Inhalte nicht erfinden oder als gesichert darstellen.
8. Keine weiteren offenen Artikel eigenständig mitbearbeiten, wenn der Auftrag nur einen bestimmten Artikel nennt.

## Offene Artikel

<!-- Neue Artikel hier eintragen. -->

## Beispiel

<!--
### Optimale Bestellmenge
Status: offen
Kategorie: Beschaffung & Materialwirtschaft
Schwerpunkt:
- klassische Andler-Formel erklären
- Berechnung mit praxisnahem Beispiel
- Zusammenhang zwischen Bestellkosten und Lagerkosten zeigen
- Voraussetzungen und Grenzen der Formel nennen
Review-Grund: -
-->

## Review-Beispiel

<!--
### Beispielthema
Status: Review
Kategorie: Beispiel
Schwerpunkt:
- ...
Review-Grund: Aktueller fachlicher Stand konnte nicht eindeutig über eine geeignete Primärquelle bestätigt werden.
-->

## Erledigt

<!-- Fertige Einträge können hierhin verschoben oder in der Arbeitsliste auf `fertig` gesetzt werden. -->
