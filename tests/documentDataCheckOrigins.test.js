import { describe, expect, it } from 'vitest';
import {
  clearMasterDataOriginAtPath,
  clearMasterDataOriginsForPaths,
  createMasterDataOrigin,
  getDataCheckClassName,
  hasNonExampleValuesAtPaths,
  markChangedViewOrigins,
  markPositionOrigins,
  mergeDataCheckStateWithOrigins,
} from '../src/utils/documentDataCheck.js';

describe('document data-check master-data origins', () => {
  it('treats empty and unchanged example values as replaceable defaults', () => {
    const defaultView = {
      sender: {
        company: 'Belege24 Muster GmbH',
        email: 'kontakt@belege24.de',
      },
    };
    const paths = [['sender', 'company'], ['sender', 'email']];

    expect(hasNonExampleValuesAtPaths({
      sender: { company: '', email: 'kontakt@belege24.de' },
    }, defaultView, paths)).toBe(false);
    expect(hasNonExampleValuesAtPaths({
      sender: { company: 'Belege24 Muster GmbH', email: 'eigene@firma.de' },
    }, defaultView, paths)).toBe(true);
  });

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

  it('keeps valid markers on a second import and clears only fields replaced with empty values', () => {
    const firstOrigin = createMasterDataOrigin({ id: 'own-1' }, 'ownData');
    const secondOrigin = createMasterDataOrigin({ id: 'own-2' }, 'ownData');
    const afterFirstImport = {
      sender: {
        company: firstOrigin,
        email: firstOrigin,
      },
    };

    const afterSecondImport = markChangedViewOrigins(
      afterFirstImport,
      { sender: { company: 'Abnahme GmbH', email: 'kontakt@example.test' } },
      { sender: { company: 'Abnahme GmbH', email: '' } },
      secondOrigin,
      [['sender', 'company'], ['sender', 'email']],
    );

    expect(afterSecondImport.sender.company).toEqual(firstOrigin);
    expect(afterSecondImport.sender.email).toBeUndefined();
  });

  it('removes all origins belonging to a removed table row without affecting other rows', () => {
    const firstOrigin = createMasterDataOrigin({ id: 'catalog-1' }, 'catalogItem');
    const secondOrigin = createMasterDataOrigin({ id: 'catalog-2' }, 'catalogItem');
    const origins = markPositionOrigins(
      markPositionOrigins(
        {},
        [{ id: 'position-1', description: 'Montage', quantity: '1' }],
        firstOrigin,
        ['description', 'quantity'],
      ),
      [{ id: 'position-2', description: 'Wartung', quantity: '2' }],
      secondOrigin,
      ['description', 'quantity'],
    );

    const cleared = clearMasterDataOriginsForPaths(origins, [['positions', 'position-1']]);

    expect(cleared.positions['position-1']).toBeUndefined();
    expect(cleared.positions['position-2']).toEqual({
      description: secondOrigin,
      quantity: secondOrigin,
    });
  });
});
