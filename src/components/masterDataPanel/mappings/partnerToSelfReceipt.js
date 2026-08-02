import {
  applyPartnerToCreditNote,
  hasCreditNoteRecipientData,
  mapPartnerToCreditNote,
  removePartnerFromCreditNote,
} from './partnerToCreditNote.js';

export const mapPartnerToSelfReceipt = mapPartnerToCreditNote;
export const applyPartnerToSelfReceipt = applyPartnerToCreditNote;
export const removePartnerFromSelfReceipt = removePartnerFromCreditNote;
export const hasSelfReceiptPaymentRecipientData = hasCreditNoteRecipientData;
