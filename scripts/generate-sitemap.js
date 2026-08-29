import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { knowledgePages } from '../src/data/knowledgePages.js';
import { coveredSeoRoutes, getSeoMeta } from '../src/data/seo.js';
import { toolItems } from '../src/data/tools.js';

const SITE_URL = 'https://belege24.com';
const SITEMAP_PATH = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url));

const staticPaths = [
  '/',
  '/dokumente',
  '/tools',
  '/wissen',
  '/basiszinssatz-tabelle',
];

function absoluteUrl(pathname) {
  return `${SITE_URL}${pathname}`;
}

function isCanonicalPath(pathname) {
  return getSeoMeta(pathname).canonicalUrl === absoluteUrl(pathname);
}

function createSitemap(paths) {
  const entries = paths
    .map((pathname) => `  <url><loc>${absoluteUrl(pathname)}</loc></url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

const documentPaths = coveredSeoRoutes.filter(
  (pathname) => pathname.startsWith('/dokumente/') && isCanonicalPath(pathname),
);
const paths = [...new Set([
  ...staticPaths,
  ...documentPaths,
  ...toolItems.map((tool) => tool.path),
  ...Object.keys(knowledgePages).map((slug) => `/wissen/${slug}`),
])].filter(isCanonicalPath);

await writeFile(SITEMAP_PATH, createSitemap(paths), 'utf8');

console.log(`Generated sitemap with ${paths.length} URLs.`);
