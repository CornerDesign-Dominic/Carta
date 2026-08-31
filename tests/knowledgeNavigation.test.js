import { describe, expect, it } from 'vitest';
import {
  findKnowledgeHubForSlug,
  getKnowledgeArticleSections,
  getKnowledgeHubSectionItems,
  getKnowledgeHubs,
} from '../src/data/knowledgeNavigation.js';

describe('knowledge navigation', () => {
  it('derives the complete hub list from the central knowledge categories', () => {
    const hubs = getKnowledgeHubs();
    const slugs = hubs.map((hub) => hub.landingSlug);

    expect(slugs).toContain('belege');
    expect(slugs).toContain('einkauf-verkauf');
    expect(slugs).toContain('statische-investitionsrechnung');
    expect(slugs).toContain('dynamische-investitionsrechnung');
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('finds the most suitable hub for landing pages and articles', () => {
    expect(findKnowledgeHubForSlug('kostenrechnung-controlling')?.title).toBe('Kostenrechnung & Controlling');
    expect(findKnowledgeHubForSlug('kapitalwertmethode')?.title).toBe('Dynamische Investitionsrechnung');
    expect(findKnowledgeHubForSlug('kostenvergleichsrechnung')?.title).toBe('Kostenrechnung & Controlling');
  });

  it('uses hub topic groups as stable jump targets', () => {
    expect(getKnowledgeHubSectionItems('kostenrechnung-controlling')).toEqual([
      { id: 'knowledge-category-kostenstruktur', label: 'Kosten erfassen und zuordnen' },
      { id: 'knowledge-category-kalkulation', label: 'Kalkulation und Entscheidungen' },
      { id: 'knowledge-category-steuerung', label: 'Steuerung und Kennzahlen' },
    ]);
  });

  it('creates article jump targets from structured sections and optional endings', () => {
    const invoiceSections = getKnowledgeArticleSections('rechnung').map((section) => ({
      id: section.id,
      label: section.navLabel,
      type: section.type,
    }));
    const goalSections = getKnowledgeArticleSections('unternehmensziele').map((section) => ({
      id: section.id,
      label: section.navLabel,
      type: section.type,
    }));

    expect(invoiceSections).toContainEqual({
      id: 'pflichtangaben-einer-rechnung',
      label: 'Pflichtangaben einer Rechnung',
      type: undefined,
    });
    expect(invoiceSections).toContainEqual({
      id: 'haeufige-fragen',
      label: 'Häufige Fragen',
      type: 'faq',
    });
    expect(invoiceSections).toContainEqual({
      id: 'quellen',
      label: 'Quellen',
      type: 'sources',
    });
    expect(goalSections).toContainEqual({
      id: 'was-sind-unternehmensziele',
      label: 'Was sind Unternehmensziele?',
      type: undefined,
    });
    expect(goalSections).not.toContainEqual({
      id: 'quellen',
      label: 'Quellen',
      type: 'sources',
    });
  });
});
