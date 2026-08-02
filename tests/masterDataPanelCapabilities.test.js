import { describe, expect, it } from 'vitest';
import { getSupportedMasterDataTabs } from '../src/components/masterDataPanel/MasterDataPanel.jsx';

const tabIds = (adapter) => getSupportedMasterDataTabs(adapter).map((tab) => tab.id);

describe('master-data panel capabilities', () => {
  it('keeps every tab available until a document adapter is connected', () => {
    expect(tabIds(null)).toEqual(['ownData', 'partners', 'catalogItems']);
  });

  it('shows all supported tabs for documents with sender, partner and catalog positions', () => {
    const adapter = { applyOwnData() {}, applyPartner() {}, addCatalogItems() {} };

    expect(tabIds(adapter)).toEqual(['ownData', 'partners', 'catalogItems']);
  });

  it('shows only own data and partners for reminder, business letter and self receipt', () => {
    const adapter = { applyOwnData() {}, applyPartner() {} };

    expect(tabIds(adapter)).toEqual(['ownData', 'partners']);
  });

  it('shows only own data for receipts without an unambiguous partner role', () => {
    expect(tabIds({ applyOwnData() {} })).toEqual(['ownData']);
  });
});
