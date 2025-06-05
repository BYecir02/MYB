import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // État pour réduire/étendre

  const navItems = [
    { name: 'À propos', href: '#about', icon: <FaUser /> },
    { name: 'Mon parcours', href: '#parcours', icon: <FaGraduationCap /> },
    { name: 'Mes projets', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-primary text-white p-3 rounded-lg shadow-lg"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full ${isCollapsed ? 'w-16' : 'w-64'} bg-white shadow-xl z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Toggle Button (Desktop only) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:block absolute -right-3 top-6 bg-primary text-white p-1.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          {isCollapsed ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">MYB</span>
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <h2 className="font-bold text-gray-800 whitespace-nowrap">Mohamed Yecir</h2>
                <p className="text-sm text-gray-600 whitespace-nowrap">Développeur</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 group ${
                    isCollapsed ? 'justify-center' : 'space-x-3'
                  }`}
                  title={isCollapsed ? item.name : ''}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="font-medium whitespace-nowrap overflow-hidden">{item.name}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center">
              <p className="text-xs text-gray-500">© 2025 Mohamed Yecir Badirou</p>
            </div>
          </div>
        )}
      </aside>

      {/* Main content wrapper */}
      <div className={`${isCollapsed ? 'md:ml-16' : 'md:ml-64'} min-h-screen bg-gray-50 transition-all duration-300`}>
        {/* Your main content will go here */}
      </div>
    </>
  );
};

export default Sidebar;