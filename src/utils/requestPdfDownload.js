function getDocumentStyles() {
  return Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join('\n');
      } catch (error) {
        return '';
      }
    })
    .filter(Boolean)
    .join('\n');
}

function syncFormValues(root) {
  root.querySelectorAll('input').forEach((input) => {
    if (input.type === 'checkbox' || input.type === 'radio') {
      if (input.checked) {
        input.setAttribute('checked', '');
      } else {
        input.removeAttribute('checked');
      }
      return;
    }

    input.setAttribute('value', input.value);
  });

  root.querySelectorAll('textarea').forEach((textarea) => {
    textarea.textContent = textarea.value;
  });

  root.querySelectorAll('select').forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (option.selected) {
        option.setAttribute('selected', '');
      } else {
        option.removeAttribute('selected');
      }
    });
  });
}

function buildExportHtml(sheet, exportRoot = sheet) {
  const clonedSheet = exportRoot.cloneNode(true);
  clonedSheet.classList.remove('is-highlight-mode');
  clonedSheet.classList.add('is-export-mode');
  clonedSheet.querySelectorAll('.offer-sheet, .invoice-print-page, .receipt-sheet, .tool-document-a4, .tool-print-page').forEach((page) => {
    page.classList.remove('is-highlight-mode');
    page.classList.add('is-export-mode');
  });
  syncFormValues(clonedSheet);

  const styles = getDocumentStyles();
  const isReceipt = sheet.classList.contains('receipt-sheet');

  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${styles}

    @page {
      size: ${isReceipt ? 'A5 landscape' : 'A4 portrait'};
      margin: 0;
    }

    html,
    body {
      width: 210mm;
      min-height: ${isReceipt ? '148mm' : '297mm'};
      margin: 0;
      background: #ffffff;
    }

    body {
      display: block;
      color: #232320;
    }

    .offer-sheet,
    .invoice-print-page,
    .tool-document-a4,
    .tool-print-page {
      width: 210mm !important;
      min-width: 210mm !important;
      height: 297mm !important;
      min-height: 297mm !important;
      margin: 0 !important;
      box-shadow: none !important;
      border: 0 !important;
      background: #ffffff !important;
    }

    .receipt-sheet {
      width: 210mm !important;
      min-width: 210mm !important;
      max-width: 210mm !important;
      height: 148mm !important;
      min-height: 148mm !important;
      max-height: 148mm !important;
      margin: 0 !important;
      box-shadow: none !important;
      border: 0 !important;
      background: #ffffff !important;
      overflow: hidden !important;
    }

    .offer-sheet,
    .invoice-print-page:not(:last-child),
    .tool-print-page:not(:last-child) {
      break-after: page;
    }

    .invoice-print-page:last-child,
    .tool-print-page:last-child {
      break-after: auto;
    }

    .visual-toolbar,
    .tool-document-toolbar,
    .invoice-icon-action,
    .invoice-field-actions,
    .invoice-hidden-field-actions,
    .tool-document-field-actions,
    .tool-document-hidden-field-actions,
    .offer-remove,
    .offer-add-position {
      display: none !important;
    }

    .receipt-sheet .invoice-icon-action,
    .receipt-sheet .invoice-field-actions,
    .receipt-sheet .invoice-hidden-field-actions {
      display: none !important;
    }

    .offer-sheet input,
    .offer-sheet textarea,
    .offer-sheet select,
    .offer-sheet.is-highlight-mode input,
    .offer-sheet.is-highlight-mode textarea,
    .offer-sheet.is-highlight-mode select,
    .offer-sheet.is-export-mode input,
    .offer-sheet.is-export-mode textarea,
    .offer-sheet.is-export-mode select,
    .tool-document-a4 input,
    .tool-document-a4 textarea,
    .tool-document-a4 select,
    .tool-document-a4.is-highlight-mode input,
    .tool-document-a4.is-highlight-mode textarea,
    .tool-document-a4.is-highlight-mode select,
    .tool-document-a4.is-export-mode input,
    .tool-document-a4.is-export-mode textarea,
    .tool-document-a4.is-export-mode select {
      border-color: transparent !important;
      background: transparent !important;
      box-shadow: none !important;
      outline: none !important;
    }

    .receipt-sheet input,
    .receipt-sheet textarea,
    .receipt-sheet select,
    .receipt-sheet.is-highlight-mode input,
    .receipt-sheet.is-highlight-mode textarea,
    .receipt-sheet.is-highlight-mode select,
    .receipt-sheet.is-export-mode input,
    .receipt-sheet.is-export-mode textarea,
    .receipt-sheet.is-export-mode select {
      border-color: transparent !important;
      background: transparent !important;
      box-shadow: none !important;
      outline: none !important;
    }
  </style>
</head>
<body>
  ${clonedSheet.outerHTML}
</body>
</html>`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function isPdfArrayBuffer(arrayBuffer) {
  const header = new Uint8Array(arrayBuffer.slice(0, 5));
  return (
    header[0] === 0x25 &&
    header[1] === 0x50 &&
    header[2] === 0x44 &&
    header[3] === 0x46 &&
    header[4] === 0x2d
  );
}

export async function requestPdfDownload({ sheet, exportRoot, documentType, filename }) {
  if (!sheet) {
    throw new Error('Kein Dokument zum Exportieren gefunden.');
  }

  const response = await fetch('/api/generate-pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      documentType,
      filename,
      html: buildExportHtml(sheet, exportRoot),
    }),
  });

  if (!response.ok) {
    let message = 'PDF konnte nicht erstellt werden.';

    try {
      const errorBody = await response.json();
      message = errorBody.details || errorBody.error || message;
    } catch (error) {
      message = await response.text();
    }

    throw new Error(message);
  }

  const arrayBuffer = await response.arrayBuffer();

  if (!isPdfArrayBuffer(arrayBuffer)) {
    const preview = new TextDecoder().decode(arrayBuffer.slice(0, 240));
    throw new Error(
      `Die API hat keine gültige PDF-Datei zurückgegeben. Antwort beginnt mit: ${preview || '(leer)'}`,
    );
  }

  const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
  downloadBlob(pdfBlob, filename);
}
