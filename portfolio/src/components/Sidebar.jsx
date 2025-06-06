import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaChevronLeft, FaChevronRight, FaCogs, FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from '../utils/translations';

const Sidebar = ({ onNavigate, activeComponent, isDarkMode, onToggleTheme, language }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const t = useTranslation(language);

  const navItems = [
    { name: t('about'), href: 'about', icon: <FaUser /> },
    { name: t('journey'), href: 'parcours', icon: <FaGraduationCap /> },
    { name: t('skills'), href: 'competences', icon: <FaCogs /> },
    { name: t('projects'), href: 'projects', icon: <FaProjectDiagram /> },
    { name: t('contact'), href: 'contact', icon: <FaEnvelope /> }
  ];

  const handleNavClick = (href) => {
    onNavigate(href);
  };

  return (
    <aside
      className={`
        hidden lg:flex flex-col
        ${isCollapsed ? 'w-20' : 'w-64'} 
        bg-white/95 backdrop-blur-sm shadow-xl 
        transition-all duration-300 ease-in-out 
        flex-shrink-0 rounded-l-lg relative
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-blue-600 text-white p-1.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
      >
        {isCollapsed ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
      </button>

      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {!isCollapsed ? (
            <div className="overflow-hidden">
              <h2 className="font-bold text-gray-800 text-xl whitespace-nowrap">MYB</h2>
              <p className="text-sm text-gray-600 whitespace-nowrap">{t('portfolio')}</p>
            </div>
          ) : (
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-base">M</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${isCollapsed ? 'p-3' : 'p-6'} flex-1`}>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`
                  w-full flex items-center rounded-lg 
                  transition-all duration-200 group
                  ${isCollapsed ? 'justify-center p-3' : 'space-x-3 p-4'}
                  ${activeComponent === item.href 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }
                `}
                title={isCollapsed ? item.name : ''}
              >
                <span className={`${isCollapsed ? 'text-xl' : 'text-lg'} transition-transform flex-shrink-0 ${
                  activeComponent === item.href ? '' : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="font-medium whitespace-nowrap overflow-hidden">
                    {item.name}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className={`${isCollapsed ? 'p-3' : 'p-6'} border-t border-gray-200`}>
        <button
          onClick={onToggleTheme}
          className={`
            w-full flex items-center rounded-lg 
            transition-all duration-200 group
            ${isCollapsed ? 'justify-center p-3' : 'space-x-3 p-4'}
            text-gray-700 hover:bg-blue-50 hover:text-blue-600
          `}
          title={isCollapsed ? (isDarkMode ? t('lightMode') : t('darkMode')) : ''}
        >
          <span className={`${isCollapsed ? 'text-xl' : 'text-lg'} transition-transform flex-shrink-0 group-hover:scale-110`}>
            {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-600" />}
          </span>
          {!isCollapsed && (
            <span className="font-medium whitespace-nowrap overflow-hidden">
              {isDarkMode ? t('lightMode') : t('darkMode')}
            </span>
          )}
        </button>
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">© 2025 Mohamed Yecir</p>
            <p className="text-xs text-gray-400">{t('fullstackDeveloper')}</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;