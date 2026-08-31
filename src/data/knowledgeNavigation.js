import { findKnowledgePage, knowledgeCategories } from './knowledgePages.js';
import { findToolItemByPath } from './tools.js';

function normalizeIdPart(value) {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase('de-DE')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createUniqueId(seed, usedIds) {
  const baseId = normalizeIdPart(seed) || 'abschnitt';
  let id = baseId;
  let index = 2;

  while (usedIds.has(id)) {
    id = `${baseId}-${index}`;
    index += 1;
  }

  usedIds.add(id);
  return id;
}

function hasTopicTarget(topic) {
  return Boolean(
    (topic.slug && findKnowledgePage(topic.slug))
    || (topic.path && findToolItemByPath(topic.path)),
  );
}

function normalizeTopicGroups(topicGroups = []) {
  return topicGroups
    .map((group) => ({
      ...group,
      topics: group.topics?.filter(hasTopicTarget) ?? [],
    }))
    .filter((group) => group.topics.length > 0);
}

export function getKnowledgeHubs() {
  return knowledgeCategories
    .filter((category) => category.landingSlug)
    .flatMap((category) => [
      {
        ...category,
        parentHub: null,
        topicGroups: normalizeTopicGroups(category.topicGroups),
      },
      ...(category.subHubs ?? []).map((subHub) => ({
        ...subHub,
        description: subHub.description ?? category.description,
        parentHub: {
          id: category.id,
          landingSlug: category.landingSlug,
          title: category.title,
        },
        pages: subHub.pages ?? [{ slug: subHub.landingSlug, title: subHub.title }],
        topicGroups: normalizeTopicGroups(subHub.topicGroups),
      })),
    ]);
}

function hubContainsSlug(hub, slug) {
  return Boolean(
    hub.pages?.some((page) => page.slug === slug)
    || hub.topicGroups?.some((group) => group.topics?.some((topic) => topic.slug === slug)),
  );
}

export function findKnowledgeHubForSlug(slug) {
  if (!slug) {
    return null;
  }

  const hubs = getKnowledgeHubs();
  return hubs.find((hub) => hub.landingSlug === slug)
    ?? hubs.find((hub) => hub.pages?.some((page) => page.slug === slug))
    ?? hubs.find((hub) => hubContainsSlug(hub, slug))
    ?? null;
}

export function getKnowledgeHubSectionItems(slug) {
  const hub = findKnowledgeHubForSlug(slug);

  if (!hub?.topicGroups?.length) {
    return [];
  }

  return hub.topicGroups.map((group) => ({
    id: `knowledge-category-${group.id}`,
    label: group.title,
  }));
}

function getStructuredArticleSections(article) {
  return article?.article?.sections ?? article?.sections ?? article?.articleSections ?? [
    {
      heading: `Was ist ${article?.title}?`,
      paragraphs: [article?.intro],
    },
    {
      heading: 'Wichtige Punkte',
      paragraphs: ['Die folgenden Punkte helfen dabei, das Thema schnell einzuordnen.'],
      list: article?.keyPoints,
    },
    {
      heading: 'Praxis',
      paragraphs: [article?.typicalUse],
    },
    {
      heading: 'Worauf sollte man achten?',
      paragraphs: ['Diese Fehler kommen in der Praxis häufig vor und sollten vermieden werden.'],
      list: article?.commonMistakes,
    },
  ];
}

function hasSectionContent(section) {
  return Boolean(
    section?.paragraphs?.length
    || section?.list?.length
    || section?.subsections?.length
    || section?.formulaCards?.length
    || section?.matrixCards?.length
    || section?.exampleCards?.length,
  );
}

export function getKnowledgeArticleSections(slugOrArticle) {
  const article = typeof slugOrArticle === 'string'
    ? findKnowledgePage(slugOrArticle)
    : slugOrArticle;

  if (!article) {
    return [];
  }

  const usedIds = new Set();
  const sections = getStructuredArticleSections(article)
    .filter(hasSectionContent)
    .map((section) => ({
      ...section,
      id: createUniqueId(section.heading, usedIds),
      navLabel: section.navLabel ?? section.heading,
    }));

  if (article.faqs?.length > 0) {
    sections.push({
      id: createUniqueId('haeufige-fragen', usedIds),
      navLabel: 'Häufige Fragen',
      type: 'faq',
    });
  }

  if (article.sources?.length > 0) {
    sections.push({
      id: createUniqueId('quellen', usedIds),
      navLabel: 'Quellen',
      type: 'sources',
    });
  }

  return sections;
}
