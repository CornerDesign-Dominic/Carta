import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { createOwnDataRecord } from '../src/masterData/ownDataModel.js';
import { createPartner } from '../src/masterData/partnerModel.js';
import { OwnDataPanel, PartnerDataPanel } from '../src/components/masterDataPanel/MasterDataPanel.jsx';

const noop = () => {};

function count(text, fragment) {
  return text.split(fragment).length - 1;
}

describe('master-data panel presentation', () => {
  it('renders an applied own-data record exactly once inside the normal selection list', () => {
    const ownData = createOwnDataRecord({
      id: 'own-1',
      address: { companyName: 'Corner Design', postalCode: '42103', city: 'Wuppertal' },
      taxAndRegister: { vatId: 'DE123456789' },
      sourceFileId: 'own-file',
    });
    const markup = renderToStaticMarkup(<OwnDataPanel
      appliedOwnData={{ recordId: ownData.id, sourceFileId: ownData.sourceFileId }}
      documentAdapter={{}}
      lastUsedOwnData={{ recordId: ownData.id, sourceFileId: ownData.sourceFileId }}
      records={[ownData]}
      selectedId={ownData.id}
      onApply={noop}
      onRemove={noop}
      onSelect={noop}
    />);

    expect(count(markup, 'Corner Design')).toBe(1);
    expect(count(markup, 'Im Dokument verwendet')).toBe(1);
    expect(count(markup, 'Zuletzt verwendet')).toBe(1);
    expect(count(markup, 'Auswahl übernehmen')).toBe(1);
    expect(count(markup, 'Aus Dokument entfernen')).toBe(1);
  });

  it('marks the applied partner in its existing list card and keeps other partners selectable', () => {
    const usedPartner = createPartner({ id: 'partner-1', companyName: 'Corner Design', mainAddress: { city: 'Wuppertal' }, sourceFileId: 'partner-file' });
    const otherPartner = createPartner({ id: 'partner-2', companyName: 'Musterkunde', mainAddress: { city: 'Köln' }, sourceFileId: 'partner-file' });
    const markup = renderToStaticMarkup(<PartnerDataPanel
      appliedDeliveryAddress={null}
      appliedPartnerData={{ recordId: usedPartner.id, sourceFileId: usedPartner.sourceFileId, partnerRecord: usedPartner }}
      documentAdapter={{ canManageDeliveryAddresses: false }}
      lastUsedPartner={null}
      partnerRoleLabel="Empfänger"
      records={[usedPartner, otherPartner]}
      selectedId={usedPartner.id}
      onApply={noop}
      onApplyDeliveryAddress={noop}
      onRemove={noop}
      onRemoveDeliveryAddress={noop}
      onSelect={noop}
    />);

    expect(count(markup, 'Corner Design')).toBe(1);
    expect(count(markup, 'Im Dokument verwendet')).toBe(1);
    expect(count(markup, 'Musterkunde')).toBe(1);
    expect(count(markup, 'Auswahl übernehmen')).toBe(1);
    expect(count(markup, 'Aus Dokument entfernen')).toBe(1);
  });
});
