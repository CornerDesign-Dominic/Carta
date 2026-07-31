export const BELEGE24_DOCUMENT_FORMAT = 'belege24-document' as const;
export const BELEGE24_SCHEMA_VERSION = '1.0.0' as const;
export const BELEGE24_GENERATOR_VERSION = '0.1.0' as const;

export const SUPPORTED_DOCUMENT_TYPES = [
  'invoice',
  'offer',
  'deliveryNote',
  'creditNote',
  'reminder',
  'receipt',
  'selfReceipt',
  'businessLetter',
] as const;

export type SupportedDocumentType = (typeof SUPPORTED_DOCUMENT_TYPES)[number];

