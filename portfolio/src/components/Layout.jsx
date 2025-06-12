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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('fr'); // 'fr' ou 'en'

  const renderComponent = () => {
    const componentProps = { language }; // Passer la langue à tous les composants
    
    switch(activeComponent) {
      case 'about':
        return <About {...componentProps} />;
      case 'parcours':
        return <Parcours {...componentProps} />;
      case 'competences':
        return <Skills {...componentProps} />;
      case 'projects':
        return <Projects {...componentProps} />;
      case 'contact':
        return <Contact {...componentProps} />;
      default:
        return <About {...componentProps} />;
    }
  };

  return (
    <>
      <div className={`min-h-screen p-2 sm:p-4 lg:p-10 transition-all duration-500 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900'
      }`}>
        
        {/* Background animé - Style Matrix/Tech */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Grille Matrix animée */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(12)].map((_, i) => (
              <div
                key={`grid-v-${i}`}
                className={`absolute w-px h-full ${
                  isDarkMode ? 'bg-cyan-400' : 'bg-blue-300'
                } animate-pulse`}
                style={{
                  left: `${(i + 1) * 8.33}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + (i % 3)}s`
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`grid-h-${i}`}
                className={`absolute h-px w-full ${
                  isDarkMode ? 'bg-cyan-400' : 'bg-blue-300'
                } animate-pulse`}
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + (i % 2)}s`
                }}
              />
            ))}
          </div>

          {/* Vagues fluides animées */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={`fill-current ${
                  isDarkMode ? 'text-blue-500' : 'text-cyan-400'
                }`}
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  values="0 0;50 0;0 0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* Particules hexagonales tech */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`hex-${i}`}
              className={`absolute opacity-10 ${
                isDarkMode ? 'text-cyan-400' : 'text-blue-300'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              <div className="animate-spin" style={{ animationDuration: `${8 + Math.random() * 4}s` }}>
                ⬢
              </div>
            </div>
          ))}

          {/* Cercles tech flottants */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-blue-400/30 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-2/3 left-2/3 w-48 h-48 border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '8s', animationDelay: '2s' }} />

          {/* Lignes de connexion animées */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`connection-${i}`}
              className={`absolute h-0.5 opacity-20 ${
                isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-transparent' : 'bg-gradient-to-r from-blue-400 to-transparent'
              }`}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 70}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}

          {/* Points lumineux flottants */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`glow-${i}`}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-cyan-400' : 'bg-blue-300'
              } opacity-40 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: `0 0 10px ${isDarkMode ? '#22d3ee' : '#3b82f6'}`
              }}
            />
          ))}

          {/* Effet scanner */}
          <div 
            className={`absolute w-full h-1 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
            } opacity-30`}
            style={{
              animation: 'scan 8s ease-in-out infinite',
              top: '0%'
            }}
          />
        </div>

        {/* CSS Animation pour le scanner */}
        <style jsx>{`
          @keyframes scan {
            0% { top: 0%; opacity: 0.3; }
            50% { top: 100%; opacity: 0.6; }
            100% { top: 0%; opacity: 0.3; }
          }
        `}</style>

        <div className="h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[90vh] w-full max-w-7xl mx-auto bg-black/20 backdrop-blur-2xl rounded-xl flex overflow-hidden shadow-2xl mb-16 lg:mb-0 relative z-10 border border-cyan-500/20">
          
          {/* Language Toggle - Desktop à droite, Mobile à gauche */}
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="absolute top-4 left-4 lg:left-auto lg:right-4 z-50 bg-black/40 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg hover:bg-black/60 transition-all duration-200 border border-cyan-500/30 font-bold text-sm"
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle Button - Mobile seulement à droite */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="lg:hidden absolute top-4 right-4 z-50 bg-black/40 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-black/60 transition-all duration-200 border border-cyan-500/30"
            title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
          >
            <span className="text-lg">
              {isDarkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-cyan-300" />}
            </span>
          </button>

          <Sidebar 
            onNavigate={setActiveComponent} 
            activeComponent={activeComponent}
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            language={language}
            onToggleLanguage={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          />
          <main className="flex-1 h-full overflow-hidden">
            {renderComponent()}
            {children}
          </main>
        </div>
      </div>
      
      {/* Bottom Navigation pour mobile */}
      <Navbar 
        onNavigate={setActiveComponent} 
        activeComponent={activeComponent}
        language={language}
      />
    </>
  );
};

export default Layout;