import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMeta } from '../data/seo.js';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

function updateRobotsMeta(content) {
  const elements = [...document.head.querySelectorAll('meta[name="robots"]')];

  if (!content) {
    elements.forEach((element) => element.remove());
    return;
  }

  const [element = document.createElement('meta'), ...duplicates] = elements;
  element.setAttribute('name', 'robots');
  element.setAttribute('content', content);

  if (!element.parentNode) {
    document.head.appendChild(element);
  }

  duplicates.forEach((duplicate) => duplicate.remove());
}

export default function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getSeoMeta(pathname);

    document.title = meta.title;
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    });
    upsertCanonical(meta.canonicalUrl);
    updateRobotsMeta(meta.robots);
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.openGraph.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.openGraph.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: meta.openGraph.url,
    });
  }, [pathname]);

  return null;
}
