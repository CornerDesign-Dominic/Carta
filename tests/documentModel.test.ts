import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  BELEGE24_ATTACHMENT_FILE_NAME,
  BELEGE24_ATTACHMENT_MIME_TYPE,
  BELEGE24_DOCUMENT_FORMAT,
  BELEGE24_PDF_SUBJECT,
  BELEGE24_SCHEMA_VERSION,
  SUPPORTED_DOCUMENT_TYPES,
  embedBelege24DocumentInPdf,
  mapStandardInvoiceToDocument,
  readBelege24DocumentFromPdf,
  restoreFinalInvoiceState,
  restoreStandardInvoiceState,
  validateBelege24Document,
  type StandardInvoiceDocument,
  type StandardInvoiceGeneratorState,
} from '../src/documentModel/index.js';

const fixedUuid = '123e4567-e89b-42d3-a456-426614174000';
const fixedDate = '2026-07-23T12:00:00.000Z';

function createState(): StandardInvoiceGeneratorState {
  const address = (street: string, houseNumber: string, postalCode: string, city: string) => ({
    street,
    houseNumber,
    postalCode,
    city,
  });
  const config = (order: string[]) => ({ hidden: [], order });

  return {
    invoiceVariant: 'standard',
    labels: { title: 'Rechnung', invoiceNumber: 'Rechnungsnummer' },
    invoiceData: {
      sender: {
        companyName: 'Belege24 Muster GmbH',
        returnAddress: 'Unabhängige Absenderzeile',
        address: address('Musterstraße', '12', '10115', 'Berlin'),
        contact: {
          email: 'kontakt@belege24.com',
          phone: '+49 30 123456',
          fax: '',
          website: 'www.belege24.com',
        },
      },
      recipient: {
        companyName: 'Beispielkunde GmbH',
        attention: 'z. Hd. Frau Beispiel',
        name: 'Buchhaltung',
        address: address('Kundenstraße', '8', '20095', 'Hamburg'),
      },
      deliveryAddress: {
        companyName: '',
        attention: '',
        name: '',
        address: address('', '', '', ''),
      },
      details: {
        invoiceNumber: 'RE-2026-001',
        invoiceDate: '2026-05-07',
        serviceDate: '2026-05-07',
      },
      references: {
        internalNumber: '',
        externalNumber: 'EXT-4711',
        customerNumber: 'K-2048',
      },
      project: {
        progressPaymentNumber: '',
        projectName: '',
        orderNumber: '',
        billingSection: '',
        partialService: '',
        completionDate: '',
      },
      footer: {
        company: {
          companyName: 'Andere Footer GmbH',
          street: 'Fußweg',
          houseNumber: '1',
          postalCode: '10117',
          city: 'Berlin',
          extra: '',
        },
        tax: {
          vatIdLabel: 'USt-IdNr.:',
          vatId: 'DE123456789',
          taxNumberLabel: 'Steuernummer:',
          taxNumber: '',
          commercialRegister: '',
          representation: '',
        },
        bank: {
          bankName: 'Musterbank',
          ibanLabel: 'IBAN:',
          iban: 'DE00 0000 0000 0000 0000 00',
          bicLabel: 'BIC:',
          bic: '',
          bankExtra: '',
        },
      },
    },
    positions: [
      {
        id: '8bf150ca-6401-4d76-81bf-31b4ef697f1e',
        articleNumber: '',
        description: 'Beratung',
        unitPrice: '0,10',
        quantity: '3',
        unit: 'Stunde',
        taxRate: '19',
      },
    ],
    previousPayments: [
      {
        id: 'f369f75d-79cd-47f5-9414-305742c03083',
        label: '1. Abschlag',
        invoiceNumber: '',
        invoiceDate: '',
        netAmount: '0',
        taxAmount: '0',
        status: 'open',
      },
    ],
    textBlocks: [
      { id: 'intro', label: 'Vorlauftext', value: '', visible: false },
      { id: 'closing', label: 'Nachlauftext', value: 'Zahlbar sofort.', visible: true },
      { id: 'smallBusinessNotice', label: 'Hinweis', value: '', visible: true },
    ],
    isSmallBusinessInvoice: false,
    fieldConfig: {
      contact: config(['email', 'phone', 'fax', 'website']),
      details: config(['invoiceNumber', 'invoiceDate', 'serviceDate', 'internalNumber', 'externalNumber', 'customerNumber']),
      deliveryAddress: config(['attention', 'name']),
      recipient: config(['attention', 'name']),
      footerMiddle: config(['vatId', 'taxNumber', 'commercialRegister', 'managingDirector']),
    },
  };
}

describe('belege24-document constants and validation', () => {
  it('uses the fixed format, version and current generator document types', () => {
    expect(BELEGE24_DOCUMENT_FORMAT).toBe('belege24-document');
    expect(BELEGE24_SCHEMA_VERSION).toBe('1.0.0');
    expect(SUPPORTED_DOCUMENT_TYPES).toEqual([
      'invoice',
      'offer',
      'deliveryNote',
      'creditNote',
      'reminder',
      'receipt',
      'selfReceipt',
    ]);
  });

  it('accepts the complete example document', () => {
    const examplePath = fileURLToPath(
      new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url),
    );
    const example = JSON.parse(readFileSync(examplePath, 'utf8'));

    expect(validateBelege24Document(example)).toEqual({ valid: true, errors: [] });
  });

  it('rejects invalid metadata and incomplete footer columns', () => {
    const mapped = mapStandardInvoiceToDocument(createState(), {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });
    const invalid = structuredClone(mapped) as any;
    invalid.document.documentId = 'not-a-uuid';
    invalid.sharedData.sender.companyFooter.columns[0].fields.pop();

    const result = validateBelege24Document(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('document.documentId must be a UUID');
    expect(result.errors).toContain(
      'sharedData.sender.companyFooter.columns[0].fields must contain exactly four fields',
    );
  });
});

describe('standard invoice mapping', () => {
  it('preserves independent shared fields, empty inputs, ordering and calculated amounts', () => {
    const document = mapStandardInvoiceToDocument(createState(), {
      documentId: fixedUuid,
      createdAt: fixedDate,
      generatorVersion: 'test-version',
    });

    expect(document.document).toEqual({
      documentType: 'invoice',
      documentId: fixedUuid,
      createdAt: fixedDate,
      generatorVersion: 'test-version',
    });
    expect(document.sharedData.sender.brandName).toBe('Belege24 Muster GmbH');
    expect(document.sharedData.sender.senderLine).toBe('Unabhängige Absenderzeile');
    expect(document.sharedData.sender.companyFooter.columns).toHaveLength(3);
    expect(document.sharedData.sender.address).toEqual(createState().invoiceData.sender.address);
    expect(document.sharedData.recipient.address).toEqual(createState().invoiceData.recipient.address);
    expect(document.sharedData.sender.companyFooter.columns.every((column) => column.fields.length === 4)).toBe(true);
    expect(document.sharedData.sender.companyFooter.columns[0].fields[0].value).toBe('Andere Footer GmbH');
    expect(document.documentData.senderContact.fax).toBe('');
    expect(document.documentData.deliveryAddress.street).toBe('');
    expect(document.documentData.textBlocks[0]).toMatchObject({ value: '', visible: false });
    expect(document.documentData.fieldConfiguration.details.order.at(-1)).toBe('customerNumber');
    expect(document.documentData.positions[0]).toMatchObject({
      unitPrice: '0.10',
      quantity: '3',
      calculated: {
        netAmount: '0.30',
        taxAmount: '0.06',
        grossAmount: '0.36',
      },
    });
    expect(document.documentData.calculated.invoiceTotals).toMatchObject({
      netAmount: '0.30',
      taxAmount: '0.06',
      grossAmount: '0.36',
    });
    expect(validateBelege24Document(document).valid).toBe(true);
  });

  it('uses direct tax amounts for final-invoice deductions without assigning mixed rates incorrectly', () => {
    const base = createState();
    const state: StandardInvoiceGeneratorState = {
      ...base,
      invoiceVariant: 'finalInvoice',
      positions: [
        { ...base.positions[0], unitPrice: '100', quantity: '1', taxRate: '19' },
        {
          ...base.positions[0],
          id: 'f8b0d9ba-dda1-4ed5-a3b8-e38e89ec98ae',
          unitPrice: '100',
          quantity: '1',
          taxRate: '7',
        },
      ],
      previousPayments: [{
        ...base.previousPayments[0],
        netAmount: '150',
        taxAmount: '20',
        status: 'paid',
      }],
    };

    const document = mapStandardInvoiceToDocument(state, {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });

    expect(document.documentData.previousPayments[0]).toMatchObject({
      netAmount: '150.00',
      taxAmount: '20.00',
      generatorInput: { netAmount: '150', taxAmount: '20' },
      calculated: { grossAmount: '170.00' },
    });
    expect(document.documentData.calculated.deductedPayments).toMatchObject({
      netAmount: '150.00',
      taxAmount: '20.00',
      grossAmount: '170.00',
      taxGroups: [],
    });
    expect(document.documentData.calculated.remainingTotals).toMatchObject({
      netAmount: '50.00',
      taxAmount: '6.00',
      grossAmount: '56.00',
      taxGroups: [],
    });

    const restored = restoreFinalInvoiceState(document);
    if (restored.status !== 'valid') throw new Error(JSON.stringify(restored));
    expect(restored).toMatchObject({
      status: 'valid',
      state: { previousPayments: [{ netAmount: '150', taxAmount: '20' }] },
    });
  });
});

async function createPlainPdf(): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.addPage([595, 842]);
  return pdf.save();
}

describe('Belege24 PDF attachment roundtrip', () => {
  it('embeds and reads the stable JSON attachment with metadata and unchanged decimal strings', async () => {
    const sourceDocument = mapStandardInvoiceToDocument(createState(), {
      documentId: fixedUuid,
      createdAt: fixedDate,
      generatorVersion: 'test-version',
    });
    const pdfBytes = await embedBelege24DocumentInPdf(await createPlainPdf(), sourceDocument);
    const result = await readBelege24DocumentFromPdf(pdfBytes);
    const pdf = await PDFDocument.load(pdfBytes);

    expect(result.status).toBe('valid');
    if (result.status !== 'valid' || result.document.document.documentType !== 'invoice') {
      throw new Error(`Unexpected result: ${result.status}`);
    }
    const invoiceDocument = result.document as StandardInvoiceDocument;

    expect(result.fileName).toBe(BELEGE24_ATTACHMENT_FILE_NAME);
    expect(result.mimeType).toBe(BELEGE24_ATTACHMENT_MIME_TYPE);
    expect(result.document.format).toBe(BELEGE24_DOCUMENT_FORMAT);
    expect(result.document.schemaVersion).toBe(BELEGE24_SCHEMA_VERSION);
    expect(result.document.sharedData.recipient.company).toBe('Beispielkunde GmbH');
    expect(invoiceDocument.documentData.invoice.invoiceNumber).toBe('RE-2026-001');
    expect(invoiceDocument.documentData.textBlocks[1].value).toBe('Zahlbar sofort.');
    expect(invoiceDocument.documentData.positions[0]).toMatchObject({
      description: 'Beratung',
      unitPrice: '0.10',
      quantity: '3',
      calculated: {
        netAmount: '0.30',
        taxAmount: '0.06',
        grossAmount: '0.36',
      },
    });
    expect(invoiceDocument.documentData.calculated.invoiceTotals.grossAmount).toBe('0.36');
    expect(pdf.getCreator()).toBe('Belege24 test-version');
    expect(pdf.getSubject()).toBe(BELEGE24_PDF_SUBJECT);
    expect(pdf.getKeywords()).toContain(BELEGE24_DOCUMENT_FORMAT);
    expect(pdf.getKeywords()).toContain(`schema-version:${BELEGE24_SCHEMA_VERSION}`);
    expect(pdf.getPageCount()).toBe(1);
  });

  it('rejects a normal PDF without Belege24 data', async () => {
    await expect(readBelege24DocumentFromPdf(await createPlainPdf())).resolves.toEqual({
      status: 'not-found',
    });
  });

  it('distinguishes invalid JSON, unsupported schema and invalid embedded documents', async () => {
    const invalidJsonPdf = await PDFDocument.load(await createPlainPdf());
    await invalidJsonPdf.attach(new TextEncoder().encode('{broken'), BELEGE24_ATTACHMENT_FILE_NAME, {
      mimeType: BELEGE24_ATTACHMENT_MIME_TYPE,
    });
    expect((await readBelege24DocumentFromPdf(await invalidJsonPdf.save())).status).toBe('invalid-json');

    const unsupportedPdf = await PDFDocument.load(await createPlainPdf());
    await unsupportedPdf.attach(
      new TextEncoder().encode(JSON.stringify({
        format: BELEGE24_DOCUMENT_FORMAT,
        schemaVersion: '2.0.0',
      })),
      BELEGE24_ATTACHMENT_FILE_NAME,
      { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE },
    );
    expect(await readBelege24DocumentFromPdf(await unsupportedPdf.save())).toMatchObject({
      status: 'unsupported',
      format: BELEGE24_DOCUMENT_FORMAT,
      schemaVersion: '2.0.0',
    });

    const invalidDocumentPdf = await PDFDocument.load(await createPlainPdf());
    await invalidDocumentPdf.attach(
      new TextEncoder().encode(JSON.stringify({
        format: BELEGE24_DOCUMENT_FORMAT,
        schemaVersion: BELEGE24_SCHEMA_VERSION,
        document: {},
        sharedData: {},
        documentData: {},
      })),
      BELEGE24_ATTACHMENT_FILE_NAME,
      { mimeType: BELEGE24_ATTACHMENT_MIME_TYPE },
    );
    expect((await readBelege24DocumentFromPdf(await invalidDocumentPdf.save())).status).toBe('invalid-document');
  });

  it('distinguishes a damaged PDF', async () => {
    expect((await readBelege24DocumentFromPdf(new TextEncoder().encode('not a pdf'))).status).toBe(
      'unreadable-pdf',
    );
  });
});

function createExtendedRoundtripState(): StandardInvoiceGeneratorState {
  const state = createState();
  state.invoiceData.sender.companyName = 'Müller & Söhne GmbH';
  state.invoiceData.sender.returnAddress = 'Müller & Söhne GmbH - Äußere Straße 12a - 10115 Berlin';
  state.invoiceData.sender.address = {
    street: 'Äußere Straße',
    houseNumber: '12a',
    postalCode: '10115',
    city: 'Berlin',
  };
  state.invoiceData.recipient.companyName = 'Käufer & Co. KG';
  state.invoiceData.recipient.address = {
    street: 'Große Allee',
    houseNumber: '7b',
    postalCode: '20095',
    city: 'Hamburg',
  };
  state.invoiceData.footer.company.extra = '';
  state.invoiceData.footer.tax.representation = 'Geschäftsführerin: Jördis Weiß';
  state.invoiceData.footer.bank.bankExtra = 'Nur SEPA – Betrag in €';
  state.positions[0].unitPrice = '0.10';
  state.positions.push({
    id: 'f8b0d9ba-dda1-4ed5-a3b8-e38e89ec98ae',
    articleNumber: 'Ä-02',
    description: 'Prüfung für Öl & Öfen',
    unitPrice: '1234.56',
    quantity: '2.5',
    unit: 'Stück',
    taxRate: '7.5',
  });
  state.previousPayments.push({
    id: '419d939d-27f0-4e49-967f-78789b2d92ff',
    label: '2. Abschlag',
    invoiceNumber: 'AR-2026-002',
    invoiceDate: '2026-06-01',
    netAmount: '100.25',
    taxAmount: '7.52',
    status: 'paid',
  });
  state.textBlocks[0] = {
    id: 'intro',
    label: 'Vorlauftext',
    value: 'Für Öl, Öfen & Zubehör – vielen Dank!',
    visible: true,
  };
  state.fieldConfig.contact.hidden = ['fax'];
  state.fieldConfig.details.order = [
    'invoiceDate',
    'invoiceNumber',
    'serviceDate',
    'internalNumber',
    'externalNumber',
    'customerNumber',
  ];
  return state;
}

describe('standard invoice restoration', () => {
  it('migrates legacy previous-payment tax rates to direct tax amounts', () => {
    const examplePath = fileURLToPath(
      new URL('../docs/examples/standard-invoice-1.0.0.json', import.meta.url),
    );
    const legacyDocument = JSON.parse(readFileSync(examplePath, 'utf8'));

    const restored = restoreStandardInvoiceState(legacyDocument);
    if (restored.status !== 'valid') throw new Error(`Unexpected result: ${restored.status}`);

    expect(restored).toMatchObject({
      status: 'valid',
      state: {
        previousPayments: [{
          invoiceNumber: 'AR-2026-001',
          netAmount: '0',
          taxAmount: '0.00',
        }],
      },
    });
    expect(restored.state.previousPayments[0]).not.toHaveProperty('taxRate');
  });

  it('migrates a legacy embedded PDF with a non-zero tax rate without changing its amounts', async () => {
    const state = createState();
    state.previousPayments[0] = {
      ...state.previousPayments[0],
      netAmount: '100',
      taxAmount: '19',
      status: 'paid',
    };
    const legacyDocument = structuredClone(mapStandardInvoiceToDocument(state, {
      documentId: fixedUuid,
      createdAt: fixedDate,
    })) as any;
    const payment = legacyDocument.documentData.previousPayments[0];
    delete payment.taxAmount;
    payment.taxRate = '19';
    payment.generatorInput = { netAmount: '100', taxRate: '19' };
    payment.calculated = { taxAmount: '19.00', grossAmount: '119.00' };

    const pdfBytes = await embedBelege24DocumentInPdf(await createPlainPdf(), legacyDocument);
    const read = await readBelege24DocumentFromPdf(pdfBytes);

    expect(read.status).toBe('valid');
    if (read.status !== 'valid') throw new Error(`Unexpected result: ${read.status}`);
    expect(restoreStandardInvoiceState(read.document)).toMatchObject({
      status: 'valid',
      state: { previousPayments: [{ netAmount: '100', taxAmount: '19.00' }] },
    });
  });

  it('roundtrips generator state through PDF, validation and reverse mapping', async () => {
    const sourceState = createExtendedRoundtripState();
    const mapped = mapStandardInvoiceToDocument(sourceState, {
      documentId: fixedUuid,
      createdAt: fixedDate,
      generatorVersion: 'test-version',
    });
    const originalDocumentSnapshot = JSON.stringify(mapped);
    const pdfBytes = await embedBelege24DocumentInPdf(await createPlainPdf(), mapped);
    const readResult = await readBelege24DocumentFromPdf(pdfBytes);
    expect(readResult.status).toBe('valid');
    if (readResult.status !== 'valid') throw new Error(`Unexpected result: ${readResult.status}`);

    const restored = restoreStandardInvoiceState(readResult.document);
    expect(restored.status).toBe('valid');
    if (restored.status !== 'valid') throw new Error(`Unexpected result: ${restored.status}`);

    expect(JSON.stringify(mapped)).toBe(originalDocumentSnapshot);
    expect(restored.state.invoiceData.sender.companyName).toBe('Müller & Söhne GmbH');
    expect(restored.state.invoiceData.sender.returnAddress).toBe(
      'Müller & Söhne GmbH - Äußere Straße 12a - 10115 Berlin',
    );
    expect(restored.state.invoiceData.recipient).toMatchObject(sourceState.invoiceData.recipient);
    expect(restored.state.invoiceData.references.customerNumber).toBe('K-2048');
    expect(restored.state.invoiceData.details).toEqual(sourceState.invoiceData.details);
    expect(restored.state.invoiceData.references).toEqual(sourceState.invoiceData.references);
    expect(restored.state.invoiceData.deliveryAddress).toEqual(sourceState.invoiceData.deliveryAddress);
    expect(restored.state.invoiceData.project).toEqual(sourceState.invoiceData.project);
    expect(restored.state.labels).toEqual(sourceState.labels);
    expect(restored.state.positions).toHaveLength(2);
    expect(restored.state.positions[1]).toMatchObject({
      articleNumber: 'Ä-02',
      description: 'Prüfung für Öl & Öfen',
      unitPrice: '1234.56',
      quantity: '2.5',
      unit: 'Stück',
      taxRate: '7.5',
    });
    expect(restored.state.previousPayments).toHaveLength(2);
    expect(restored.state.previousPayments[1].netAmount).toBe('100.25');
    expect(restored.state.textBlocks[0].value).toBe('Für Öl, Öfen & Zubehör – vielen Dank!');
    expect(restored.state.fieldConfig).toEqual(sourceState.fieldConfig);
    expect(restored.state).toEqual(sourceState);

    const remapped = mapStandardInvoiceToDocument(restored.state, {
      documentId: fixedUuid,
      createdAt: fixedDate,
      generatorVersion: 'test-version',
    });
    expect(remapped.sharedData.sender.companyFooter.columns).toEqual(
      mapped.sharedData.sender.companyFooter.columns,
    );
    expect(remapped.documentData.positions).toEqual(mapped.documentData.positions);
    expect(remapped.documentData.previousPayments).toEqual(mapped.documentData.previousPayments);
    expect(remapped.documentData.calculated).toEqual(mapped.documentData.calculated);
  });

  it.each([
    ['deutsche Anschrift', 'Musterstraße', '12', '10115', 'Berlin'],
    ['internationale Anschrift', '12 King Street, Apartment 4B', '', '75008', 'Paris, France'],
    ['Postfachanschrift', 'Postfach 1234', '', 'CH-8001', 'Zürich'],
    ['ohne Hausnummer', 'Am Stadtpark', '', 'D – 01067', 'Dresden'],
    ['Hausnummer mit Zusatz', 'Große Allee', '7 b / Hinterhaus', 'SW1A 1AA', 'London'],
    ['ungewöhnliches Ortsformat', 'Rue de l’Église', '½', 'H3Z 2Y7', 'Montréal / Québec'],
    ['leere Felder', '', '', '', ''],
    ['zusätzliche Leerzeichen', '  Freie  Straße  ', ' 12 A ', ' DE – 10115 ', ' Berlin  '],
  ])('restores %s without interpreting address components', (_label, street, houseNumber, postalCode, city) => {
    const sourceState = createExtendedRoundtripState();
    const address = { street, houseNumber, postalCode, city };
    sourceState.invoiceData.sender.address = { ...address };
    sourceState.invoiceData.recipient.address = { ...address };
    sourceState.invoiceData.footer.company = {
      ...sourceState.invoiceData.footer.company,
      ...address,
    };
    sourceState.invoiceData.sender.returnAddress =
      '  Frei – Postfach 1234 – CH-8001 Zürich / 12 King Street, Apartment 4B  ';

    const mapped = mapStandardInvoiceToDocument(sourceState, {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });
    const restored = restoreStandardInvoiceState(mapped);
    expect(restored.status).toBe('valid');
    if (restored.status !== 'valid') throw new Error(`Unexpected result: ${restored.status}`);

    expect(restored.state.invoiceData.sender.address).toEqual(address);
    expect(restored.state.invoiceData.sender.returnAddress).toBe(sourceState.invoiceData.sender.returnAddress);
    expect(restored.state.invoiceData.recipient.address).toEqual(address);
    expect(restored.state.invoiceData.footer.company).toEqual(sourceState.invoiceData.footer.company);
  });

  it('preserves empty and custom footer fields, keys, column assignment and ordering', () => {
    const mapped = mapStandardInvoiceToDocument(createExtendedRoundtripState(), {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });
    const restored = restoreStandardInvoiceState(mapped);
    expect(restored.status).toBe('valid');
    if (restored.status !== 'valid') throw new Error(`Unexpected result: ${restored.status}`);

    expect(restored.state.invoiceData.footer.company.extra).toBe('');
    expect(restored.state.invoiceData.footer.tax.representation).toBe('Geschäftsführerin: Jördis Weiß');
    expect(restored.state.invoiceData.footer.bank.bankExtra).toBe('Nur SEPA – Betrag in €');

    const remapped = mapStandardInvoiceToDocument(restored.state, {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });
    expect(remapped.sharedData.sender.companyFooter.columns).toEqual(
      mapped.sharedData.sender.companyFooter.columns,
    );
    expect(remapped.sharedData.sender.companyFooter.columns.map((column) =>
      column.fields.map((field) => field.key))).toEqual([
      ['companyName', 'streetAndNumber', 'postalCodeAndCity', 'custom'],
      ['vatId', 'taxNumber', 'commercialRegister', 'custom'],
      ['bankName', 'iban', 'bic', 'custom'],
    ]);
  });

  it('preserves input tax rates for small-business invoices while recalculating tax as zero', () => {
    const sourceState = createExtendedRoundtripState();
    sourceState.isSmallBusinessInvoice = true;
    const mapped = mapStandardInvoiceToDocument(sourceState, {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });
    mapped.documentData.calculated.invoiceTotals.grossAmount = '999999.99';

    const restored = restoreStandardInvoiceState(mapped);
    expect(restored.status).toBe('valid');
    if (restored.status !== 'valid') throw new Error(`Unexpected result: ${restored.status}`);

    expect(restored.state.isSmallBusinessInvoice).toBe(true);
    expect(restored.state.positions.map((position) => position.taxRate)).toEqual(['19', '7.5']);
    const remapped = mapStandardInvoiceToDocument(restored.state, {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });
    expect(remapped.documentData.calculated.invoiceTotals.taxAmount).toBe('0.00');
    expect(remapped.documentData.calculated.invoiceTotals.grossAmount).not.toBe('999999.99');
  });

  it('distinguishes wrong type, unsupported schema, incomplete data and invalid values', () => {
    const mapped = mapStandardInvoiceToDocument(createState(), {
      documentId: fixedUuid,
      createdAt: fixedDate,
    });

    const wrongType = structuredClone(mapped) as any;
    wrongType.document.documentType = 'offer';
    expect(restoreStandardInvoiceState(wrongType)).toEqual({
      status: 'wrong-document-type',
      documentType: 'offer',
    });

    const unsupported = structuredClone(mapped) as any;
    unsupported.schemaVersion = '2.0.0';
    expect(restoreStandardInvoiceState(unsupported)).toMatchObject({
      status: 'unsupported',
      schemaVersion: '2.0.0',
    });

    const incomplete = structuredClone(mapped) as any;
    delete incomplete.documentData.invoice;
    expect(restoreStandardInvoiceState(incomplete).status).toBe('incomplete-data');

    const invalid = structuredClone(mapped) as any;
    invalid.documentData.positions[0].unitPrice = '12,34 EUR';
    expect(restoreStandardInvoiceState(invalid).status).toBe('invalid-field-values');

    const wrongFooterKey = structuredClone(mapped) as any;
    wrongFooterKey.sharedData.sender.companyFooter.columns[0].fields[0].key = 'custom';
    expect(restoreStandardInvoiceState(wrongFooterKey).status).toBe('invalid-field-values');
  });
});
