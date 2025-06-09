import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaRoute,
  FaDatabase
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiVuedotjs, SiFigma, SiMongodb, SiTypescript } from 'react-icons/si';
import { useTranslation } from '../utils/translations';

const Projects = ({ language = 'fr' }) => {
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
    'Figma': <SiFigma className="text-purple-400" />,
    'React Native': <FaReact className="text-cyan-400" />,
    'Expo Router': <FaRoute className="text-purple-500" />,
    'AsyncStorage': <FaDatabase className="text-gray-400" />
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
      title: t('benPay'),
      description: t('benPayDesc'),
      longDescription: t('benPayLongDesc'),
      image: "/BenPay.jpg", // Ajoutez l'image dans le dossier public
      technologies: ["React Native", "TypeScript", "Expo Router", "AsyncStorage"],
      githubUrl: "https://github.com/BYecir02/benpay", // Remplacez par votre vraie URL
      liveUrl: null, // Application mobile donc pas de démo web
      features: [
        t('dashboardStats'),
        t('salesSystem3Steps'),
        t('qrCodeGeneration'),
        t('transactionManagement'),
        t('fluidAnimations'),
        t('stockManagement')
      ]
    },    
    {
      id: 2,
      title: t('portfolio'),
      description: t('portfolioDesc'),
      longDescription: t('portfolioLongDesc'),
      image: "/portfolio.png",
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.parentNode.innerHTML = `
      <div class="w-full h-64 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center rounded-xl">
        <div class="text-white text-center p-4">
          <span class="text-4xl mb-2">📷</span>
          <p class="text-sm">${t('imageNotAvailable')}</p>
        </div>
      </div>
    `;
  };

  return (
    <div className="h-full overflow-y-auto hide-scrollbar p-4 sm:p-6 lg:p-8 text-white pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('myProjects')}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
           {/* {t('projectsSubtitle')} */}
          </p>
        </motion.div>

        {/* Projets en format détaillé */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={handleImageError}
                />
              </div>

              {/* Contenu complet */}
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white">{project.title}</h2>
                <p className="text-white/80 text-sm leading-relaxed">{project.longDescription}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full text-xs">
                      <span>{techIcons[tech]}</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/90">{t('features')}:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-white/70 text-xs">
                        <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex gap-3 pt-2">

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;