import { embedBelege24DocumentInPdf, embedJsonAttachmentInPdf } from '../src/documentModel/pdfAttachment.js';

export const config = {
  maxDuration: 60,
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

function normalizeBody(body: any) {
  if (!body) {
    return {};
  }

  if (typeof body === 'string') {
    return JSON.parse(body);
  }

  return body;
}

async function readRequestBody(request: any) {
  if (request.body) {
    return normalizeBody(request.body);
  }

  const chunks = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  return normalizeBody(Buffer.concat(chunks).toString('utf8'));
}

function sanitizeFilename(filename: unknown, documentType: unknown) {
  const fallback = `${documentType || 'dokument'}-${new Date().toISOString().slice(0, 10)}.pdf`;
  const candidate = String(filename || fallback)
    .trim()
    .replace(/[\\/:*?"<>|]+/g, '-')
    .replace(/\s+/g, '-');

  return candidate.toLowerCase().endsWith('.pdf') ? candidate : `${candidate}.pdf`;
}

function isPdfBuffer(buffer: Buffer) {
  return Buffer.isBuffer(buffer) && buffer.subarray(0, 5).toString('ascii') === '%PDF-';
}

async function getExecutablePath(chromium: { executablePath(): Promise<string> }) {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  return chromium.executablePath();
}

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Only POST is supported.' });
    return;
  }

  let browser: any;

  try {
    const { documentType, html, filename, belege24Document, jsonAttachment } = await readRequestBody(request);

    if (!html || typeof html !== 'string') {
      response.status(400).json({ error: 'Missing html payload.' });
      return;
    }

    if (
      ![
        'invoice',
        'offer',
        'reminder',
        'creditNote',
        'deliveryNote',
        'selfReceipt',
        'receipt',
        'interestCalculation',
        'compoundInterestCalculation',
        'vatCalculation',
        'costComparison',
        'defaultInterest',
        'masterDataPartners',
      ].includes(documentType)
    ) {
      response.status(400).json({ error: 'Invalid documentType.' });
      return;
    }

    const [{ default: chromiumModule }, { default: puppeteer }] = await Promise.all([
      import('@sparticuz/chromium'),
      import('puppeteer-core'),
    ]);
    const chromium: any = chromiumModule;

    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await getExecutablePath(chromium),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts?.ready);
    await page.emulateMediaType('print');

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
      preferCSSPageSize: true,
    });
    const normalizedJsonAttachment = jsonAttachment && typeof jsonAttachment === 'object'
      ? {
          ...jsonAttachment,
          creationDate: jsonAttachment.creationDate ? new Date(jsonAttachment.creationDate) : undefined,
          modificationDate: jsonAttachment.modificationDate ? new Date(jsonAttachment.modificationDate) : undefined,
        }
      : undefined;
    const pdfBuffer = belege24Document
      ? Buffer.from(await embedBelege24DocumentInPdf(pdf, belege24Document))
      : normalizedJsonAttachment
        ? Buffer.from(await embedJsonAttachmentInPdf(pdf, normalizedJsonAttachment))
        : Buffer.from(pdf);

    if (!isPdfBuffer(pdfBuffer)) {
      throw new Error('Puppeteer did not return a valid PDF buffer.');
    }

    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Length', String(pdfBuffer.length));
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader(
      'Content-Disposition',
      `attachment; filename="${sanitizeFilename(filename, documentType)}"`,
    );
    response.statusCode = 200;
    response.end(pdfBuffer);
  } catch (error) {
    response.status(500).json({
      error: 'PDF generation failed.',
      details: error instanceof Error ? error.message : String(error),
    });
  } finally {
    if (browser) {
      await browser.close().catch(() => {});
    }
  }
}
