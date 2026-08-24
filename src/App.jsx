import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import WaitlistPage from './pages/WaitlistPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'features':
        return <FeaturesPage setCurrentView={setCurrentView} />;
      case 'about':
      case 'research':
        return <AboutPage setCurrentView={setCurrentView} />;
      case 'waitlist':
        return <WaitlistPage setCurrentView={setCurrentView} />;
      case 'faq':
        return <FAQPage setCurrentView={setCurrentView} />;
      case 'contact':
        return <ContactPage setCurrentView={setCurrentView} />;
      case 'privacy':
        return <PrivacyPage setCurrentView={setCurrentView} />;
      case 'home':
      default:
        return <HomePage setCurrentView={setCurrentView} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen w-full bg-white text-[#241629] flex flex-col">
        <Navbar currentView={currentView} setCurrentView={setCurrentView} />
        <main className="flex-1 w-full">
          {renderView()}
        </main>
        <Footer setCurrentView={setCurrentView} />
      </div>
    </LanguageProvider>
  );
}
