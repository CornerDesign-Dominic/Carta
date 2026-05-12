# Knowledge Content Guidelines

Diese Regeln gelten fuer neue Wissensseiten im Carta-Wissensbereich.

## Grundprinzipien

- Jede Seite behandelt genau ein Hauptthema.
- Der erste Abschnitt definiert klar, worum es geht.
- Die Sprache bleibt sachlich, verstaendlich und praktisch.
- Keine Blog-Optik, keine werbliche Uebertreibung.
- Fachbegriffe werden nur verwendet, wenn sie noetig sind, und dann kurz erklaert.

## Struktur

Jede Wissensseite sollte diese Felder enthalten:

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

## Inhalt

- Beginne mit einer klaren Definition des Dokuments, Begriffs oder Werkzeugs.
- Nutze wichtige Suchbegriffe natuerlich im Text, ohne Keyword-Stuffing.
- Formuliere rechtliche, steuerliche und kaufmaennische Aussagen vorsichtig.
- Vermeide absolute Aussagen, wenn der Einzelfall entscheidend sein kann.
- Erklaere typische Nutzungssituationen aus Sicht von Selbststaendigen, kleinen Unternehmen, Vereinen und Lernenden.
- Nenne typische Fehler konkret und ohne Panikton.

## SEO

- `seo.title` soll kurz, eindeutig und suchnah sein.
- `seo.description` fasst den konkreten Nutzen der Seite zusammen.
- `seo.canonicalPath` entspricht dem finalen Pfad, zum Beispiel `/wissen/rechnung`.
- `article.intro` ist der Einleitungstext direkt unter dem Seitentitel.
- Interne Links sollen ueber `related` gepflegt werden.

## FAQs

- FAQs sollen realistische Nutzerfragen abbilden.
- Jede FAQ beantwortet genau eine Frage.
- Antworten bleiben kurz, klar und praktisch.
- FAQ-Fragen sollten auch fuer Generator-Hilfen wiederverwendbar sein.

## Quellen und Pflege

- Quellen werden im Feld `sources` gepflegt.
- Quellen sollten nur aufgenommen werden, wenn sie fuer die Aussage wirklich relevant sind.
- `updatedAt` wird angepasst, wenn Inhalte geaendert werden.
- `reviewedAt` wird angepasst, wenn Inhalte fachlich geprueft wurden.
- Bei rechtlichen oder steuerlichen Themen bleibt der Disclaimer gesetzt:

```text
Diese Inhalte dienen der allgemeinen Orientierung und ersetzen keine rechtliche oder steuerliche Beratung.
```

## Interne Links

- Setze passende interne Links zu verwandten Wissensseiten ueber `related`.
- Verlinke nur Seiten, die aktiv sichtbar und inhaltlich gepflegt sind.
- Verweise auf Generatoren oder Tools nur, wenn ein passendes Werkzeug existiert.
