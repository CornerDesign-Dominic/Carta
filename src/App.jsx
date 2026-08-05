import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import PatchnotesView from './views/PatchnotesView.jsx';
import ToolsView from './views/ToolsView.jsx';
import MasterDataView from './views/MasterDataView.jsx';
import { MasterDataSessionProvider } from './components/masterDataPanel/MasterDataSessionProvider.jsx';
import { isPatchnotesEnabled } from './config/development.js';
import { documentSections } from './data/documents.js';
import { findMasterDataItem, findMasterDataItemByPath } from './data/masterData.js';
import { findToolItem, findToolItemByPath } from './data/tools.js';
import { findKnowledgePage } from './data/knowledgePages.js';

const isKnowledgeEnabled = import.meta.env.VITE_ENABLE_KNOWLEDGE !== 'false';
const THEME_STORAGE_KEY = 'belege24-theme-v1';
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
const invoicePaths = new Set([
  '/dokumente/rechnung',
  '/dokumente/rechnung/standard',
  '/dokumente/rechnung/kleinunternehmer',
  '/dokumente/rechnung/text',
  '/dokumente/rechnung/waren',
  '/dokumente/rechnung/abschlag',
  '/dokumente/rechnung/teilrechnung',
  '/dokumente/rechnung/schlussrechnung',
]);
const selfReceiptPaths = new Set([
  '/dokumente/eigenbeleg',
  '/dokumente/eigenbeleg/a5',
]);

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

  if (item.view === 'master-data') {
    return item.masterDataPath
      ?? findMasterDataItem(item.masterDataId)?.path
      ?? '/stammdaten';
  }

  if (item.view === 'documents') {
    if (item.documentId === 'write-invoice') {
      if (item.invoiceVariant === 'text') {
        return '/dokumente/rechnung/text';
      }

      if (item.invoiceVariant === 'goods') {
        return '/dokumente/rechnung/waren';
      }

      if (item.invoiceVariant === 'progressInvoice') {
        return '/dokumente/rechnung/abschlag';
      }

      if (item.invoiceVariant === 'partialInvoice') {
        return '/dokumente/rechnung/teilrechnung';
      }

      if (item.invoiceVariant === 'finalInvoice') {
        return '/dokumente/rechnung/schlussrechnung';
      }

      return '/dokumente/rechnung/standard';
    }

    if (item.documentId === 'write-self-receipt' && item.selfReceiptVariant === 'short') {
      return '/dokumente/eigenbeleg/a5';
    }

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

  return '/';
}

function viewFromPath(pathname) {
  if (pathname === '/') {
    return 'home';
  }

  if (pathname === '/impressum' || pathname === '/datenschutz' || pathname === '/agb') {
    return `legal:${pathname.slice(1)}`;
  }

  if (pathname === '/basiszinssatz-tabelle') {
    return 'base-interest-rate-table';
  }

  if (
    pathname === '/dokumente'
    || selfReceiptPaths.has(pathname)
    || invoicePaths.has(pathname)
    || generatorIdByPath.has(pathname)
  ) {
    return 'documents';
  }

  if (pathname === '/tools' || findToolItemByPath(pathname)) {
    return 'tools';
  }

  if (pathname === '/stammdaten' || findMasterDataItemByPath(pathname)) {
    return 'master-data';
  }

  if (pathname === '/wissen' || pathname.startsWith('/wissen/')) {
    return isKnowledgeEnabled ? 'knowledge' : 'not-found';
  }

  return 'not-found';
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredTheme() {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null;
}

function DocumentsRoute({ documentId = 'overview', invoiceVariant = 'standard', selfReceiptVariant = 'standard' }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavigate(item, options = {}) {
    navigate(pathForNavigation(item), {
      replace: options.replace === true,
      state: item.state ?? (item.isSmallBusiness ? { isSmallBusiness: true } : undefined),
    });
  }

  return (
    <DocumentsView
      initialDocumentId={documentId}
      initialInvoiceSmallBusiness={location.state?.isSmallBusiness}
      initialInvoiceVariant={invoiceVariant}
      initialSelfReceiptVariant={selfReceiptVariant}
      onNavigate={handleNavigate}
    />
  );
}

function DocumentPathRoute() {
  const { '*': documentPath = '' } = useParams();
  const path = `/dokumente/${documentPath}`;
  const documentId = generatorIdByPath.get(path);

  if (!documentId) {
    return <NotFoundRoute />;
  }

  return <DocumentsRoute documentId={documentId} />;
}

function ToolsRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTool = findToolItemByPath(location.pathname);

  if (location.pathname !== '/tools' && !activeTool) {
    return <NotFoundRoute />;
  }

  function handleSelectTool(toolId) {
    navigate(toolId ? `/tools/${toolId}` : '/tools');
  }

  return <ToolsView activeToolId={activeTool?.id ?? null} onSelectTool={handleSelectTool} />;
}

function LegacyToolRoute() {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const activeTool = findToolItem(toolId);

  if (!activeTool) {
    return <NotFoundRoute />;
  }

  function handleSelectTool(nextToolId) {
    navigate(nextToolId ? `/tools/${nextToolId}` : '/tools');
  }

  return <ToolsView activeToolId={activeTool.id} onSelectTool={handleSelectTool} />;
}

function MasterDataRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeItem = findMasterDataItemByPath(location.pathname);

  if (location.pathname !== '/stammdaten' && !activeItem) {
    return <NotFoundRoute />;
  }

  function handleSelectMasterDataItem(itemId) {
    navigate(findMasterDataItem(itemId)?.path ?? '/stammdaten');
  }

  return (
    <MasterDataView
      activeItemId={activeItem?.id ?? null}
      onSelectItem={handleSelectMasterDataItem}
    />
  );
}

function KnowledgeRoute() {
  const { slug } = useParams();
  const navigate = useNavigate();

  if (!isKnowledgeEnabled) {
    return <NotFoundRoute />;
  }

  function handleNavigate(item, options = {}) {
    navigate(pathForNavigation(item), {
      replace: options.replace === true,
      state: item.state ?? (item.isSmallBusiness ? { isSmallBusiness: true } : undefined),
    });
  }

  function handleSelectSlug(nextSlug) {
    navigate(nextSlug ? `/wissen/${nextSlug}` : '/wissen');
  }

  if (slug && !findKnowledgePage(slug)) {
    return (
      <KnowledgeView
        activeSlug={slug}
        onNavigate={handleNavigate}
        onSelectSlug={handleSelectSlug}
      />
    );
  }

  return (
    <KnowledgeView
      activeSlug={slug ?? null}
      onNavigate={handleNavigate}
      onSelectSlug={handleSelectSlug}
    />
  );
}

function LegalRoute({ pageId }) {
  return <LegalPage pageId={pageId} />;
}

function NotFoundRoute() {
  const navigate = useNavigate();

  function handleNavigate(item, options = {}) {
    navigate(pathForNavigation(item), { replace: options.replace === true, state: item.state });
  }

  return <NotFoundView onNavigate={handleNavigate} />;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialConsent = readStoredConsent();
  const [consent, setConsent] = useState(initialConsent ?? createDefaultConsent());
  const [hasResolvedConsent, setHasResolvedConsent] = useState(initialConsent !== null);
  const [isConsentSettingsOpen, setIsConsentSettingsOpen] = useState(false);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const [themePreference, setThemePreference] = useState(readStoredTheme);
  const theme = themePreference ?? systemTheme;
  const currentView = viewFromPath(location.pathname);

  useEffect(() => {
    syncAnalyticsConsent(consent.analytics === true);
  }, [consent.analytics]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (!window.matchMedia) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  useEffect(() => {
    if (themePreference) {
      window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    } else {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    }
  }, [themePreference]);

  function handleNavigate(item, options = {}) {
    if (item.view === 'knowledge' && !isKnowledgeEnabled) {
      return;
    }

    const nextPath = pathForNavigation(item);
    navigate(nextPath, {
      replace: options.replace === true,
      state: item.state ?? (item.isSmallBusiness ? { isSmallBusiness: true } : undefined),
    });
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
      <ScrollToTop />
      <Header
        currentView={currentView}
        enableKnowledge={isKnowledgeEnabled}
        theme={theme}
        onToggleTheme={() => setThemePreference(theme === 'dark' ? 'light' : 'dark')}
        onNavigate={handleNavigate}
      />
      <div className="site-main">
        <MasterDataSessionProvider>
          <Routes>
            <Route path="/" element={<HomeView onNavigate={handleNavigate} />} />
            <Route path="/dokumente" element={<DocumentsRoute />} />
            <Route path="/dokumente/rechnung" element={<Navigate to="/dokumente/rechnung/standard" replace />} />
            <Route path="/dokumente/rechnung/standard" element={<DocumentsRoute documentId="write-invoice" />} />
            <Route
              path="/dokumente/rechnung/kleinunternehmer"
              element={<Navigate to="/dokumente/rechnung/standard" replace state={{ isSmallBusiness: true }} />}
            />
            <Route
              path="/dokumente/rechnung/text"
              element={<DocumentsRoute documentId="write-invoice" invoiceVariant="text" />}
            />
            <Route
              path="/dokumente/rechnung/waren"
              element={<DocumentsRoute documentId="write-invoice" invoiceVariant="goods" />}
            />
            <Route
              path="/dokumente/rechnung/abschlag"
              element={<DocumentsRoute documentId="write-invoice" invoiceVariant="progressInvoice" />}
            />
            <Route
              path="/dokumente/rechnung/teilrechnung"
              element={<DocumentsRoute documentId="write-invoice" invoiceVariant="partialInvoice" />}
            />
            <Route
              path="/dokumente/rechnung/schlussrechnung"
              element={<DocumentsRoute documentId="write-invoice" invoiceVariant="finalInvoice" />}
            />
            <Route path="/dokumente/eigenbeleg" element={<DocumentsRoute documentId="write-self-receipt" />} />
            <Route path="/dokumente/eigenbeleg/a5" element={<DocumentsRoute documentId="write-self-receipt" selfReceiptVariant="short" />} />
            <Route path="/dokumente/*" element={<DocumentPathRoute />} />
            <Route path="/tools" element={<ToolsRoute />} />
            <Route path="/tools/:toolId" element={<LegacyToolRoute />} />
            <Route path="/stammdaten/*" element={<MasterDataRoute />} />
            <Route path="/basiszinssatz-tabelle" element={<BaseInterestRateTableView />} />
            <Route path="/wissen" element={<KnowledgeRoute />} />
            <Route path="/wissen/:slug" element={<KnowledgeRoute />} />
            <Route path="/impressum" element={<LegalRoute pageId="impressum" />} />
            <Route path="/datenschutz" element={<LegalRoute pageId="datenschutz" />} />
            <Route path="/agb" element={<LegalRoute pageId="agb" />} />
            {isPatchnotesEnabled && <Route path="/patchnotes" element={<PatchnotesView />} />}
            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
        </MasterDataSessionProvider>
      </div>
      <Footer
        onNavigate={handleNavigate}
        onOpenCookieSettings={() => setIsConsentSettingsOpen(true)}
        showPatchnotes={isPatchnotesEnabled}
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
