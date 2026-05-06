import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import DocumentsView from './views/DocumentsView.jsx';
import HomeView from './views/HomeView.jsx';
import LegalPage from './views/LegalPage.jsx';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  function handleNavigate(item) {
    setCurrentView(item.view);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="site-shell">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <div className="site-main">
        {currentView === 'documents' && <DocumentsView />}
        {currentView === 'home' && <HomeView />}
        {currentView.startsWith('legal:') && (
          <LegalPage pageId={currentView.replace('legal:', '')} />
        )}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
