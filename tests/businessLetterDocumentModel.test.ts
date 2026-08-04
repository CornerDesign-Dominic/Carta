import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  embedBelege24DocumentInPdf,
  importBusinessLetterPdf,
  mapBusinessLetterToDocument,
  restoreBusinessLetterState,
  validateBelege24Document,
  validateBusinessLetterDocument,
  type BusinessLetterGeneratorState,
} from '../src/documentModel/index.js';

function createState(): BusinessLetterGeneratorState {
  const config = (order: string[]) => ({ hidden: [], order });
  return {
    labels: {
      title: 'Geschäftsbrief', yourReference: 'Ihr Zeichen', ourReference: 'Unser Zeichen', contactPerson: 'Ansprechpartner', place: 'Ort', letterDate: 'Datum',
      subject: 'Betreff', salutation: 'Anrede', body: 'Brieftext', closing: 'Grußformel', signerName: 'Name', signerRole: 'Funktion', attachments: 'Anlagen',
      contactEmail: 'E-Mail', contactPhone: 'Telefon', contactFax: 'Fax', contactWebsite: 'Website',
    },
    letterData: {
      sender: { companyName: 'Sender GmbH', returnAddress: 'freie Absenderzeile', address: { street: 'Weg', houseNumber: '1', postalCode: '10115', city: 'Berlin' }, contact: { email: 'mail@example.test', phone: '', fax: '', website: '' } },
      recipient: { companyName: 'Empfänger GmbH', attention: '', name: '', address: { street: 'Straße', houseNumber: '2', postalCode: '20095', city: 'Hamburg' } },
      details: { yourReference: 'A-1', ourReference: 'B-2', contactPerson: 'Alex Beispiel', place: 'Berlin', letterDate: '2026-07-31' },
      references: {},
      footer: { company: { companyName: 'Sender GmbH', street: 'Weg', houseNumber: '1', postalCode: '10115', city: 'Berlin', extra: '' }, tax: { vatIdLabel: 'USt-IdNr.:', vatId: 'DE1', taxNumberLabel: 'Steuernummer:', taxNumber: '1', commercialRegister: '', representation: '' }, bank: { bankName: '', ibanLabel: 'IBAN:', iban: '', bicLabel: 'BIC:', bic: '', bankExtra: '' } },
    },
    content: { subject: 'Betreff des Schreibens', salutation: 'Sehr geehrte Damen und Herren,', body: 'Absatz eins.\n\nAbsatz zwei.', closing: 'Mit freundlichen Grüßen', signerName: 'Dominic Franz', signerRole: 'Geschäftsführer', attachments: 'Angebot Nr. 2026-001' },
    fieldConfig: {
      contact: config(['email', 'phone', 'fax', 'website']),
      details: config(['yourReference', 'ourReference', 'contactPerson', 'place', 'letterDate']),
      recipient: config(['attention', 'name']),
      footerMiddle: config(['vatId', 'taxNumber', 'commercialRegister', 'managingDirector']),
      letterContent: { hidden: [], order: ['signerRole', 'attachments'] },
    },
  };
}

describe('business letter document model', () => {
  it('maps and restores all contents and optional field states', () => {
    const state = createState();
    const document = mapBusinessLetterToDocument(state);

    expect(document.document.documentType).toBe('businessLetter');
    expect(document.documentData.state.content).toEqual(state.content);
    expect(document.documentData.state.content).not.toHaveProperty('distribution');
    expect(document.documentData.state.fieldConfig.letterContent.hidden).toEqual([]);
    expect(restoreBusinessLetterState(document)).toEqual({ status: 'valid', state });
  });

  it('validates through the central dispatcher and rejects incomplete content', () => {
    const document = mapBusinessLetterToDocument(createState());
    const invalid = {
      ...document,
      documentData: { state: { ...document.documentData.state, content: { ...document.documentData.state.content, body: 42 } } },
    };

    expect(validateBusinessLetterDocument(document)).toEqual({ valid: true, errors: [] });
    expect(validateBelege24Document(document)).toEqual({ valid: true, errors: [] });
    expect(validateBusinessLetterDocument(invalid)).toEqual({ valid: false, errors: ['business letter document is invalid'] });
  });

  it('roundtrips the complete letter through a Belege24 PDF attachment', async () => {
    const state = createState();
    const source = await PDFDocument.create();
    source.addPage([595, 842]);

    await expect(importBusinessLetterPdf(await embedBelege24DocumentInPdf(
      await source.save(),
      mapBusinessLetterToDocument(state),
    ))).resolves.toEqual({ status: 'valid', state, message: 'PDF erfolgreich geladen.' });
  });
});
