import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
  FaDatabase,
  FaMobile
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiVuedotjs, SiFigma, SiMongodb, SiTypescript } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedProject, setSelectedProject] = useState(null);

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
      title: "Application E-commerce",
      category: "fullstack",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      longDescription: "Application e-commerce moderne développée avec React et Node.js. Fonctionnalités incluant la gestion des produits, panier d'achat, système de paiement sécurisé, et tableau de bord administrateur.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/username/ecommerce-app",
      liveUrl: "https://ecommerce-demo.com",
      features: ["Authentification utilisateur", "Panier d'achat", "Paiement sécurisé", "Panel admin"]
    },
    {
      id: 2,
      title: "Portfolio Interactif",
      category: "frontend",
      description: "Portfolio personnel avec animations avancées et design responsive",
      longDescription: "Portfolio moderne avec des animations fluides, design responsive et interface utilisateur intuitive. Développé avec React et Framer Motion pour des transitions élégantes.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com",
      features: ["Animations fluides", "Design responsive", "Mode sombre", "Optimisé SEO"]
    },
    {
      id: 3,
      title: "API de Gestion de Tâches",
      category: "backend",
      description: "API REST pour la gestion de projets et tâches avec authentification",
      longDescription: "API robuste développée avec Django et Python pour la gestion de projets et tâches. Inclut l'authentification JWT, la gestion des permissions et une documentation complète.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Django", "MongoDB"],
      githubUrl: "https://github.com/username/task-api",
      liveUrl: null,
      features: ["Authentification JWT", "CRUD complet", "Documentation API", "Tests unitaires"]
    },
    {
      id: 4,
      title: "Application Mobile de Fitness",
      category: "mobile",
      description: "App mobile pour le suivi d'entraînements et de nutrition",
      longDescription: "Application mobile hybride pour le suivi de fitness avec planification d'entraînements, suivi nutritionnel et statistiques personnalisées.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Node.js"],
      githubUrl: "https://github.com/username/fitness-app",
      liveUrl: "https://fitness-demo.com",
      features: ["Suivi d'entraînements", "Planification nutritionnelle", "Statistiques", "Synchronisation cloud"]
    }
  ];

  const filters = [
    { key: 'tous', label: 'Tous les projets' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  return (
    <div className="h-full overflow-y-auto hide-scrollbar p-4 sm:p-6 lg:p-8 text-white pb-20 lg:pb-8">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Mes Projets
          </h1>
          <p className="text-left text-white/80 text-sm sm:text-base max-w-3xl">
            Découvrez une sélection de mes projets récents, allant du développement web au mobile.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grille des projets */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image du projet */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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

                  {/* Liens */}
                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-white" />
                      <span className="text-white text-sm">Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-white" />
                        <span className="text-white text-sm">Démo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de détail du projet */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-sm rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/70 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full rounded-2xl"
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                        <p className="text-white/80 leading-relaxed">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Fonctionnalités</h3>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 text-white/80">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.technologies.map((tech, index) => (
                            <div 
                              key={index}
                              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full"
                            >
                              <span className="text-base">{techIcons[tech]}</span>
                              <span className="text-white/90">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                          <FaGithub className="text-white" />
                          <span className="text-white">Voir le code</span>
                        </a>
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                          >
                            <FaExternalLinkAlt className="text-white" />
                            <span className="text-white">Voir la démo</span>
                          </a>
                        )}
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