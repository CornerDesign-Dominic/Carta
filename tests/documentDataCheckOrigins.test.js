import { describe, expect, it } from 'vitest';
import {
  clearMasterDataOriginAtPath,
  createMasterDataOrigin,
  getDataCheckClassName,
  markChangedViewOrigins,
  mergeDataCheckStateWithOrigins,
} from '../src/utils/documentDataCheck.js';

describe('document data-check master-data origins', () => {
  it('marks only changed non-empty fields as master-data origins', () => {
    const origin = createMasterDataOrigin({ id: 'own-1' }, 'ownData');
    const next = markChangedViewOrigins(
      {},
      { sender: { company: 'Identisch', email: '', phone: 'Alt' } },
      { sender: { company: 'Identisch', email: 'kontakt@example.test', phone: '' } },
      origin,
      [['sender', 'company'], ['sender', 'email'], ['sender', 'phone']],
    );

    expect(next.sender.company).toBeUndefined();
    expect(next.sender.email).toEqual({ source: 'masterData', masterDataId: 'own-1', masterDataType: 'ownData' });
    expect(next.sender.phone).toBeUndefined();
  });

  it('keeps example warnings separate and lets warnings win over origin markers', () => {
    const origin = createMasterDataOrigin({ id: 'partner-1' }, 'partner');
    const merged = mergeDataCheckStateWithOrigins(
      { recipient: { company: true, street: false } },
      { recipient: { company: origin, street: origin } },
      true,
    );

    expect(merged.recipient.company).toBe('example');
    expect(merged.recipient.street).toBe('masterData');
    expect(getDataCheckClassName(merged.recipient.company)).toBe('document-data-check-marker');
    expect(getDataCheckClassName(merged.recipient.street)).toBe('document-master-data-origin-marker');
  });

  it('removes field origins on manual clearing and ignores origins while data-check is inactive', () => {
    const origin = createMasterDataOrigin({ id: 'catalog-1' }, 'catalogItem');
    const origins = { positions: { 'pos-1': { description: origin } } };
    const cleared = clearMasterDataOriginAtPath(origins, ['positions', 'pos-1', 'description']);

    expect(cleared).toEqual({});
    expect(mergeDataCheckStateWithOrigins({ positions: {} }, origins, false)).toEqual({ positions: {} });
  });
});
