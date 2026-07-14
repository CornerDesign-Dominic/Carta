# Belege24

Belege24 ist ein browserbasiertes Werkzeug zur Erstellung von Geschäftsdokumenten wie Rechnungen, Angeboten und Mahnungen.

## Leitfäden

Diese Markdown-Dateien sind der verbindliche Arbeitsstandard für die weitere Entwicklung:

- [Projektregeln](PROJECT_RULES.md)
- [Tools Guide](TOOLS_GUIDE.md)
- [Documents Guide](DOCUMENTS_GUIDE.md)
- [Knowledge Guide](KNOWLEDGE_GUIDE.md)

## Fokus

Der Schwerpunkt liegt auf visuell editierbaren A4-Dokumenten statt klassischen Formularen. Nutzer sollen Dokumente direkt im Browser so bearbeiten, wie sie später gedruckt oder als PDF exportiert werden.

## Ziel

Belege24 soll eine einfache, moderne und professionelle Dokumentenerstellung direkt im Browser ermöglichen.

## Entwicklungsprinzipien

- Dokumente sollen wie echte Druckdokumente wirken.
- DIN- und Brief-Layout müssen beachtet werden.
- Das Design bleibt ruhig, minimalistisch und professionell.
- Keine überladenen UI-Elemente.
- Das Dokument steht immer im Mittelpunkt.
- Mehrseitigkeit soll später sauber unterstützbar sein.
- PDF-Export soll technisch vorbereitbar bleiben.

## PDF-Export

Der finale PDF-Export ist als Vercel Function vorbereitet. Das Frontend sendet eine bereinigte A4-HTML-Version an `/api/generate-pdf`; die Function rendert daraus serverseitig per `puppeteer-core` und `@sparticuz/chromium` ein echtes A4-PDF mit Text und CSS.

`html2pdf.js` ist nicht der finale Exportweg und soll für neue PDF-Buttons nicht mehr verwendet werden.

Lokal kann für Puppeteer ein eigener Chromium-Pfad über `PUPPETEER_EXECUTABLE_PATH` gesetzt werden, falls kein serverless Chromium gestartet werden kann.

Direkter API-Test lokal mit laufendem `vercel dev`:

```powershell
$body = @{
  documentType = "invoice"
  filename = "test.pdf"
  html = "<!doctype html><html><body><h1>PDF-Test</h1></body></html>"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/generate-pdf" -Method POST -ContentType "application/json" -Body $body -OutFile "test.pdf"
```

## Technischer Hinweis

Der interne Projektname darf weiterhin `Carta` bleiben.
