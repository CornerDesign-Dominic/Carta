# Knowledge Guide

Wissensseiten erklären Themen praktisch und verständlich.

## Grundrichtung

- Jede Seite behandelt genau ein Hauptthema.
- Der erste Abschnitt erklärt klar, worum es geht.
- Nicht zu oberflächlich, aber keine Fachlektüre.
- Kurze Abschnitte, klare Sprache, keine Dopplungen.
- Ton: Du-Ansprache, professionell und kollegial.
- Keine Blog-Optik, keine werbliche Übertreibung.
- Fachbegriffe nur nutzen, wenn sie nötig sind, und dann kurz erklären.

## Inhalt

- Beginne mit einer klaren Definition des Begriffs, Dokuments oder Werkzeugs.
- Nutzer sollen schnell verstehen, was sie brauchen, wann es wichtig ist und worauf sie achten sollten.
- Wichtige Suchbegriffe natürlich verwenden, kein Keyword-Stuffing.
- Typische Nutzungssituationen aus Sicht von Selbstständigen, kleinen Unternehmen, Vereinen und Lernenden erklären.
- Typische Fehler konkret nennen, ohne Panikton.
- Keine aufgeblähten Artikel.

## Datenstruktur

Jede Wissensseite soll diese Felder sauber pflegen:

- `slug`
- `category`
- `title`
- `description`
- `seo.title`
- `seo.description`
- `seo.canonicalPath`
- `article.intro`
- `article.sections`
- `generator`
- `keyPoints`
- `commonMistakes`
- `faqs`
- `related`
- `sources`
- `updatedAt`
- `reviewedAt`
- `disclaimer`

## Struktur

- Intro
- Hauptabschnitte
- Praxisbezug
- wichtige Punkte
- häufige Fehler
- FAQ
- Quellen oder Hinweis

## SEO

- `seo.title` kurz, eindeutig und suchnah formulieren.
- `seo.description` fasst den konkreten Nutzen der Seite zusammen.
- `seo.canonicalPath` entspricht dem finalen Pfad, zum Beispiel `/wissen/rechnung`.
- `article.intro` ist der Einleitungstext direkt unter dem Seitentitel.
- Interne Links über `related` pflegen.

## FAQs

- FAQs bilden realistische Nutzerfragen ab.
- Jede FAQ beantwortet genau eine Frage.
- Antworten bleiben kurz, klar und praktisch.
- FAQ-Fragen können auch für Generator- oder Tool-Hilfen wiederverwendbar sein.

## Quellen und Pflege

- Quellen im Feld `sources` pflegen.
- Quellen nur aufnehmen, wenn sie für die Aussage wirklich relevant sind.
- Bei rechtlich oder fachlich sensiblen Inhalten Quellen verwenden.
- `updatedAt` anpassen, wenn Inhalte geändert werden.
- `reviewedAt` anpassen, wenn Inhalte fachlich geprüft wurden.

## Rechtliche und steuerliche Themen

- Rechtliche, steuerliche und kaufmännische Aussagen vorsichtig formulieren.
- Keine Rechts- oder Steuerberatung behaupten.
- Absolute Aussagen vermeiden, wenn der Einzelfall entscheidend sein kann.
- Bei rechtlichen oder steuerlichen Themen bleibt ein Disclaimer gesetzt:

```text
Diese Inhalte dienen der allgemeinen Orientierung und ersetzen keine rechtliche oder steuerliche Beratung.
```

## Verknüpfung

- Passende Tools oder Belege verlinken, wenn es sinnvoll hilft.
- Verwandte Wissensseiten über `related` verlinken.
- Nur Seiten verlinken, die aktiv sichtbar und inhaltlich gepflegt sind.
- Wissen bleibt strukturell getrennt von Belegen und Tools.
