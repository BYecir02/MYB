import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import About from './About';
import Parcours from './Parcours';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Layout = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('about');

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-2 sm:p-4 lg:p-10">
        <div className="h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[90vh] w-full max-w-7xl mx-auto bg-blue-500/60 backdrop-blur-sm rounded-lg flex overflow-hidden shadow-2xl mb-16 lg:mb-0">
          <Sidebar onNavigate={setActiveComponent} activeComponent={activeComponent} />
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