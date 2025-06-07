import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiVuedotjs, SiFigma, SiMongodb, SiTypescript } from 'react-icons/si';
import { useTranslation } from '../utils/translations';

const Projects = ({ language = 'fr' }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const t = useTranslation(language);

  const techIcons = {
    'React': <FaReact className="text-cyan-400" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    'Python': <FaPython className="text-blue-400" />,
    'JavaScript': <FaJs className="text-yellow-400" />,
    'HTML5': <FaHtml5 className="text-orange-400" />,
    'CSS3': <FaCss3Alt className="text-blue-400" />,
    'Tailwind CSS': <SiTailwindcss className="text-teal-400" />,
    'Django': <SiDjango className="text-green-600" />,
    'Vue.js': <SiVuedotjs className="text-green-400" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'TypeScript': <SiTypescript className="text-blue-500" />,
    'Figma': <SiFigma className="text-purple-400" />
  };

  const projects = [
    {
      id: 1,
      title: t('studiaLink'),
      description: t('studiaDesc'),
      longDescription: t('studiaLongDesc'),
      image: "/Studialink.png",
      technologies: ["React", "Node.js", "MySQL", "JWT"],
      githubUrl: "https://github.com/username/studialink",
      liveUrl: null,
      features: [
        t('studySessions'),
        t('realTimeMessaging'),
        t('fileSharing'),
        t('responsiveInterface'),
        t('jwtAuth'),
        t('restApi')
      ]
    },
    {
      id: 2,
      title: t('portfolio'),
      description: t('portfolioDesc'),
      longDescription: t('portfolioLongDesc'),
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com",
      features: [
        t('fluidAnimations'),
        t('responsiveDesign'),
        t('darkMode'),
        t('seoOptimized')
      ]
    },
    {
      id: 3,
      title: t('windowsSimulator'),
      description: t('windowsDesc'),
      longDescription: t('windowsLongDesc'),
      image: "/virtual_desk.png",
      technologies: ["React", "Framer Motion"],
      githubUrl: "https://github.com/username/task-api",
      liveUrl: null,
      features: [
        t('notepad'),
        t('calculator'),
        t('explorer'),
        t('videoPlayer'),
        t('gallery')
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Correction : Ajout d'un gestionnaire pour les images manquantes
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.parentNode.innerHTML = `
      <div class="w-full h-48 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center">
        <div class="text-white text-center p-4">
          <span class="text-4xl mb-2">📷</span>
          <p class="text-sm">${t('imageNotAvailable')}</p>
        </div>
      </div>
    `;
  };

  return (
    <div className="h-full overflow-y-auto hide-scrollbar p-4 sm:p-6 lg:p-8 text-white pb-20 lg:pb-8 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className=" text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('myProjects')}
          </h1>
        </motion.div>

        {/* Grille des projets */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image du projet avec gestion des erreurs */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full text-xs"
                    >
                      <span className="text-sm">{techIcons[tech]}</span>
                      <span className="text-white/90">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de détail du projet - CENTRÉ DANS LE LAYOUT */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-r from-blue-900/95 to-indigo-900/95 backdrop-blur-sm rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/20 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/70 hover:text-white text-2xl w-8 h-8 flex items-center justify-center transition-colors duration-200 hover:bg-white/10 rounded-full"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Image plus petite */}
                    <div className="relative">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full rounded-xl max-h-48 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          const placeholder = document.createElement('div');
                          placeholder.className = "w-full h-48 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl flex flex-col items-center justify-center text-white p-4";
                          placeholder.innerHTML = `
                            <span class="text-3xl mb-2">📷</span>
                            <p class="text-sm">${t('imageNotAvailable')}</p>
                          `;
                          e.target.replaceWith(placeholder);
                        }}
                      />
                    </div>

                    {/* Description compacte */}
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{t('description')}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Technologies compactes */}
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{t('technologies')}</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full text-xs"
                          >
                            <span className="text-sm">{techIcons[tech]}</span>
                            <span className="text-white/90">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fonctionnalités en liste compacte */}
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{t('features')}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-white/80 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;