import { describe, expect, it } from 'vitest';
import {
  createInitialMasterDataFiles,
  createLastUsedReference,
  isLastUsedRecord,
  reconcileLastUsedReference,
  replaceMasterDataFile,
} from '../src/components/masterDataPanel/MasterDataSessionProvider.jsx';
import { getDocumentSessionResetKey } from '../src/views/DocumentsView.jsx';

const ownRecord = { id: 'own-1', sourceFileId: 'own-file-1' };
const partnerRecord = { id: 'partner-1', sourceFileId: 'partner-file-1' };
const catalogRecord = { id: 'catalog-1', sourceFileId: 'catalog-file-1' };

describe('master-data session', () => {
  it('keeps loaded files for other master-data types when one type is replaced', () => {
    const initialFiles = {
      ...createInitialMasterDataFiles(),
      ownData: [{ id: 'own-file-1', records: [ownRecord] }],
      partners: [{ id: 'partner-file-1', records: [partnerRecord] }],
      catalogItems: [{ id: 'catalog-file-1', records: [catalogRecord] }],
    };
    const nextOwnFile = { id: 'own-file-2', records: [{ id: 'own-2', sourceFileId: 'own-file-2' }] };

    const nextFiles = replaceMasterDataFile(initialFiles, 'ownData', nextOwnFile);

    expect(nextFiles.ownData).toEqual([nextOwnFile]);
    expect(nextFiles.partners).toEqual(initialFiles.partners);
    expect(nextFiles.catalogItems).toEqual(initialFiles.catalogItems);
  });

  it('retains a last-used reference only when a replacement file contains that record exactly once', () => {
    const reference = createLastUsedReference(ownRecord);
    const retained = reconcileLastUsedReference(reference, [{ id: 'own-file-2', records: [{ id: 'own-1', sourceFileId: 'own-file-2' }] }]);

    expect(retained).toEqual({ recordId: 'own-1', sourceFileId: 'own-file-2' });
    expect(reconcileLastUsedReference(reference, [{ id: 'own-file-2', records: [] }])).toBeNull();
    expect(reconcileLastUsedReference(reference, [{ id: 'own-file-2', records: [{ id: 'own-1', sourceFileId: 'own-file-2' }, { id: 'own-1', sourceFileId: 'own-file-2' }] }])).toBeNull();
  });

  it('marks last-used own data and partners without treating them as selected', () => {
    const ownReference = createLastUsedReference(ownRecord);
    const partnerReference = createLastUsedReference(partnerRecord);

    expect(isLastUsedRecord(ownRecord, ownReference)).toBe(true);
    expect(isLastUsedRecord(partnerRecord, partnerReference)).toBe(true);
    expect(isLastUsedRecord(catalogRecord, ownReference)).toBe(false);
  });

  it('uses a document-id reset key so invoice variants keep their shared editor instance', () => {
    expect(getDocumentSessionResetKey('write-invoice')).toBe('write-invoice');
    expect(getDocumentSessionResetKey('write-credit-note')).toBe('write-credit-note');
    expect(getDocumentSessionResetKey('write-invoice')).not.toBe(getDocumentSessionResetKey('write-credit-note'));
  });
});
