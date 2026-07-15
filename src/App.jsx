import { useEffect, useState } from 'react';
import CookieConsentBanner from './components/CookieConsentBanner.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { syncAnalyticsConsent } from './utils/analytics.js';
import {
  createDefaultConsent,
  normalizeConsent,
  readStoredConsent,
  writeStoredConsent,
} from './utils/consent.js';
import DocumentsView from './views/DocumentsView.jsx';
import BaseInterestRateTableView from './views/BaseInterestRateTableView.jsx';
import HomeView from './views/HomeView.jsx';
import KnowledgeView from './views/KnowledgeView.jsx';
import LegalPage from './views/LegalPage.jsx';
import NotFoundView from './views/NotFoundView.jsx';
import ToolsView from './views/ToolsView.jsx';
import { documentSections } from './data/documents.js';
import { findToolItemByPath } from './data/tools.js';

const isKnowledgeEnabled = import.meta.env.VITE_ENABLE_KNOWLEDGE !== 'false';
const generatorPathById = new Map(
  documentSections.flatMap((section) =>
    (section.children ?? [])
      .filter((child) => child.path)
      .map((child) => [child.id, child.path]),
  ),
);
const generatorIdByPath = new Map(
  [...generatorPathById.entries()].map(([documentId, path]) => [path, documentId]),
);

function routeFromLocation() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/') {
    return { view: 'home', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path === '/wissen') {
    if (!isKnowledgeEnabled) {
      return { view: 'not-found', knowledgeSlug: null, documentId: 'overview' };
    }

    return { view: 'knowledge', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path.startsWith('/wissen/')) {
    if (!isKnowledgeEnabled) {
      return { view: 'not-found', knowledgeSlug: null, documentId: 'overview' };
    }

    return {
      view: 'knowledge',
      knowledgeSlug: decodeURIComponent(path.replace('/wissen/', '')),
      documentId: 'overview',
    };
  }

  if (path === '/tools') {
    return { view: 'tools', knowledgeSlug: null, documentId: 'overview', toolId: null };
  }

  if (path === '/basiszinssatz-tabelle') {
    return { view: 'base-interest-rate-table', knowledgeSlug: null, documentId: 'overview', toolId: null };
  }

  if (path.startsWith('/tools/')) {
    const toolItem = findToolItemByPath(path);

    if (toolItem) {
      return { view: 'tools', knowledgeSlug: null, documentId: 'overview', toolId: toolItem.id };
    }

    return { view: 'not-found', knowledgeSlug: null, documentId: 'overview', toolId: null };
  }

  const generatorDocumentId = generatorIdByPath.get(path);
  if (generatorDocumentId) {
    return { view: 'documents', knowledgeSlug: null, documentId: generatorDocumentId };
  }

  if (path === '/dokumente/eigenbeleg') {
    return { view: 'documents', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path === '/dokumente') {
    return { view: 'documents', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path === '/impressum') {
    return { view: 'legal:impressum', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path === '/datenschutz') {
    return { view: 'legal:datenschutz', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path === '/agb') {
    return { view: 'legal:agb', knowledgeSlug: null, documentId: 'overview' };
  }

  return { view: 'not-found', knowledgeSlug: null, documentId: 'overview' };
}

function pathForNavigation(item) {
  if (item.path) {
    return item.path;
  }

  if (item.view === 'knowledge') {
    return item.slug ? `/wissen/${item.slug}` : '/wissen';
  }

  if (item.view === 'tools') {
    return item.toolPath ?? (item.toolId ? `/tools/${item.toolId}` : '/tools');
  }

  if (item.view === 'documents') {
    return generatorPathById.get(item.documentId) ?? '/dokumente';
  }

  if (item.view === 'home') {
    return '/';
  }

  if (item.view === 'legal:impressum') {
    return '/impressum';
  }

  if (item.view === 'legal:datenschutz') {
    return '/datenschutz';
  }

  if (item.view === 'legal:agb') {
    return '/agb';
  }

  return window.location.pathname;
}

export default function App() {
  const initialRoute = routeFromLocation();
  const initialConsent = readStoredConsent();
  const [currentView, setCurrentView] = useState(initialRoute.view);
  const [currentKnowledgeSlug, setCurrentKnowledgeSlug] = useState(initialRoute.knowledgeSlug);
  const [currentDocumentId, setCurrentDocumentId] = useState(initialRoute.documentId);
  const [currentToolId, setCurrentToolId] = useState(initialRoute.toolId ?? null);
  const [documentsViewKey, setDocumentsViewKey] = useState(0);
  const [consent, setConsent] = useState(initialConsent ?? createDefaultConsent());
  const [hasResolvedConsent, setHasResolvedConsent] = useState(initialConsent !== null);
  const [isConsentSettingsOpen, setIsConsentSettingsOpen] = useState(false);

  function applyRoute(route) {
    setCurrentView(route.view);
    setCurrentKnowledgeSlug(route.knowledgeSlug);
    setCurrentDocumentId(route.documentId);
    setCurrentToolId(route.toolId ?? null);
  }

  useEffect(() => {
    function handlePopState() {
      applyRoute(routeFromLocation());
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    syncAnalyticsConsent(consent.analytics === true);
  }, [consent.analytics]);

  function handleNavigate(item, options = {}) {
    if (item.view === 'knowledge' && !isKnowledgeEnabled) {
      return;
    }

    if (item.view === 'documents') {
      setDocumentsViewKey((key) => key + 1);
    }

    setCurrentView(item.view);
    setCurrentKnowledgeSlug(item.slug ?? null);
    setCurrentDocumentId(item.documentId ?? 'overview');
    setCurrentToolId(item.toolId ?? null);

    const nextPath = pathForNavigation(item);
    if (!options.replace && window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    window.scrollTo({ top: 0, behavior: options.instant ? 'auto' : 'smooth' });
  }

  function handleKnowledgeSlugChange(slug) {
    if (!isKnowledgeEnabled) {
      return;
    }

    handleNavigate({ view: 'knowledge', slug });
  }

  function handleToolChange(toolId) {
    const toolPath = toolId ? `/tools/${toolId}` : '/tools';

    handleNavigate({ view: 'tools', toolId, toolPath });
  }

  function saveConsent(nextConsent) {
    const normalized = normalizeConsent({
      ...nextConsent,
      necessary: true,
      decidedAt: new Date().toISOString(),
    });
    setConsent(normalized);
    setHasResolvedConsent(true);
    setIsConsentSettingsOpen(false);
    writeStoredConsent(normalized);
  }

  function handleAcceptAll() {
    saveConsent({ analytics: true });
  }

  function handleAcceptNecessary() {
    saveConsent({ analytics: false });
  }

  function handleSaveConsentSettings(analyticsEnabled) {
    saveConsent({ analytics: analyticsEnabled });
  }

  return (
    <div className="site-shell">
      <Header
        currentView={currentView}
        enableKnowledge={isKnowledgeEnabled}
        onNavigate={handleNavigate}
      />
      <div className="site-main">
        {currentView === 'documents' && (
          <DocumentsView
            key={documentsViewKey}
            initialDocumentId={currentDocumentId}
            onNavigate={handleNavigate}
          />
        )}
        {currentView === 'knowledge' && isKnowledgeEnabled && (
          <KnowledgeView
            activeSlug={currentKnowledgeSlug}
            onNavigate={handleNavigate}
            onSelectSlug={handleKnowledgeSlugChange}
          />
        )}
        {currentView === 'tools' && (
          <ToolsView
            activeToolId={currentToolId}
            onSelectTool={handleToolChange}
          />
        )}
        {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentView === 'base-interest-rate-table' && <BaseInterestRateTableView />}
        {currentView.startsWith('legal:') && (
          <LegalPage pageId={currentView.replace('legal:', '')} />
        )}
        {currentView === 'not-found' && <NotFoundView onNavigate={handleNavigate} />}
      </div>
      <Footer
        onNavigate={handleNavigate}
        onOpenCookieSettings={() => setIsConsentSettingsOpen(true)}
      />
      <CookieConsentBanner
        initialConsent={consent}
        isVisible={!hasResolvedConsent}
        isSettingsOpen={isConsentSettingsOpen}
        onAcceptAll={handleAcceptAll}
        onAcceptNecessary={handleAcceptNecessary}
        onSaveSettings={handleSaveConsentSettings}
        onOpenSettings={() => setIsConsentSettingsOpen(true)}
        onCloseSettings={() => setIsConsentSettingsOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
