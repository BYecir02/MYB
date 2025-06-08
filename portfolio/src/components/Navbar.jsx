import React from 'react';
import { FaUser, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaCogs } from 'react-icons/fa';
import { useTranslation } from '../utils/translations';

const Navbar = ({ onNavigate, activeComponent, language = 'fr' }) => {
  const t = useTranslation(language);

  const navItems = [
    { name: t('about'), href: 'about', icon: <FaUser />, shortName: t('profileShort') },
    { name: t('journey'), href: 'parcours', icon: <FaGraduationCap />, shortName: t('studiesShort') },
    { name: t('skills'), href: 'competences', icon: <FaCogs />, shortName: t('skillsShort') },
    { name: t('projects'), href: 'projects', icon: <FaProjectDiagram />, shortName: t('projectsShort') },
    { name: t('contact'), href: 'contact', icon: <FaEnvelope />, shortName: t('contactShort') }
  ];

  const handleNavClick = (href) => {
    onNavigate(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-xl border-t border-white/30 shadow-2xl z-50 lg:hidden rounded-t-3xl">
      <div className="flex justify-around items-center py-3 px-2 max-w-lg mx-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.href)}
            className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition-all duration-200 min-w-0 flex-1 ${
              activeComponent === item.href
                ? 'text-blue-600 bg-white/40 backdrop-blur-sm'
                : 'text-white-700 hover:text-blue-600 hover:bg-white/20'
            }`}
          >
            <span className={`text-base mb-1 transition-transform ${
              activeComponent === item.href ? 'scale-110' : ''
            }`}>
              {item.icon}
            </span>
            <span className="text-xs font-medium text-center leading-tight">
              {item.shortName}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;