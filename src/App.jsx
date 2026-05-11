import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import DocumentsView from './views/DocumentsView.jsx';
import HomeView from './views/HomeView.jsx';
import KnowledgeView from './views/KnowledgeView.jsx';
import LegalPage from './views/LegalPage.jsx';
import NotFoundView from './views/NotFoundView.jsx';

function routeFromLocation() {
  const path = window.location.pathname;

  if (path === '/') {
    return { view: 'home', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path === '/wissen') {
    return { view: 'knowledge', knowledgeSlug: null, documentId: 'overview' };
  }

  if (path.startsWith('/wissen/')) {
    return {
      view: 'knowledge',
      knowledgeSlug: decodeURIComponent(path.replace('/wissen/', '')),
      documentId: 'overview',
    };
  }

  if (path === '/dokumente/rechnung') {
    return { view: 'documents', knowledgeSlug: null, documentId: 'write-invoice' };
  }

  if (path.startsWith('/dokumente')) {
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

  if (item.view === 'documents') {
    return item.documentId === 'write-invoice' ? '/dokumente/rechnung' : '/dokumente';
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
  const [currentView, setCurrentView] = useState(initialRoute.view);
  const [currentKnowledgeSlug, setCurrentKnowledgeSlug] = useState(initialRoute.knowledgeSlug);
  const [currentDocumentId, setCurrentDocumentId] = useState(initialRoute.documentId);
  const [documentsViewKey, setDocumentsViewKey] = useState(0);

  function applyRoute(route) {
    setCurrentView(route.view);
    setCurrentKnowledgeSlug(route.knowledgeSlug);
    setCurrentDocumentId(route.documentId);
  }

  useEffect(() => {
    function handlePopState() {
      applyRoute(routeFromLocation());
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function handleNavigate(item, options = {}) {
    if (item.view === 'documents') {
      setDocumentsViewKey((key) => key + 1);
    }

    setCurrentView(item.view);
    setCurrentKnowledgeSlug(item.slug ?? null);
    setCurrentDocumentId(item.documentId ?? 'overview');

    const nextPath = pathForNavigation(item);
    if (!options.replace && window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    window.scrollTo({ top: 0, behavior: options.instant ? 'auto' : 'smooth' });
  }

  function handleKnowledgeSlugChange(slug) {
    handleNavigate({ view: 'knowledge', slug });
  }

  return (
    <div className="site-shell">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <div className="site-main">
        {currentView === 'documents' && (
          <DocumentsView key={documentsViewKey} initialDocumentId={currentDocumentId} />
        )}
        {currentView === 'knowledge' && (
          <KnowledgeView
            activeSlug={currentKnowledgeSlug}
            onNavigate={handleNavigate}
            onSelectSlug={handleKnowledgeSlugChange}
          />
        )}
        {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentView.startsWith('legal:') && (
          <LegalPage pageId={currentView.replace('legal:', '')} />
        )}
        {currentView === 'not-found' && <NotFoundView onNavigate={handleNavigate} />}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
