import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import About from './About';
import Parcours from './Parcours';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { FaMoon, FaSun } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true); // État du thème

  const renderComponent = () => {
    switch(activeComponent) {
      case 'about':
        return <About />;
      case 'parcours':
        return <Parcours />;
      case 'competences':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className={`min-h-screen p-2 sm:p-4 lg:p-10 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      }`}>
        <div className="h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[90vh] w-full max-w-7xl mx-auto bg-blue-500/60 backdrop-blur-sm rounded-lg flex overflow-hidden shadow-2xl mb-16 lg:mb-0 relative">
          
          {/* Theme Toggle Button pour mobile - En haut à droite */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="lg:hidden absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-all duration-200 border border-white/20"
            title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
          >
            <span className="text-lg">
              {isDarkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-blue-200" />}
            </span>
          </button>

          <Sidebar 
            onNavigate={setActiveComponent} 
            activeComponent={activeComponent}
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
          />
          <main className="flex-1 h-full overflow-hidden">
            {renderComponent()}
            {children}
          </main>
        </div>
      </div>
      
      {/* Bottom Navigation pour mobile */}
      <Navbar onNavigate={setActiveComponent} activeComponent={activeComponent} />
    </>
  );
};

export default Layout;