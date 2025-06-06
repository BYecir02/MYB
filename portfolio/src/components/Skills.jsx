import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt, 
  FaDatabase,
  FaPalette,
  FaTasks,
  FaUsers,
  FaTrello
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiVuedotjs, SiFigma, SiCanva, SiNotion } from 'react-icons/si';
import { useTranslation } from '../utils/translations';

const Skills = ({ language = 'fr' }) => {
  const t = useTranslation(language);

  const skillCategories = [
    {
      title: t('frontend'),
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 80, icon: <FaHtml5 className="text-orange-400" /> },
        { name: "CSS3", level: 80, icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400" /> },
        { name: "React", level: 60, icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", level: 65, icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vue.js", level: 50, icon: <SiVuedotjs className="text-green-400" /> }
      ]
    },
    {
      title: t('backend'),
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: t('databases'), level: 75, icon: <FaDatabase className="text-gray-400" /> },
        { name: "Python", level: 60, icon: <FaPython className="text-blue-400" /> },
        { name: "Node.js", level: 55, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Django", level: 50, icon: <SiDjango className="text-green-600" /> }
      ]
    },
    {
      title: t('designTools'),
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Figma", level: 70, icon: <SiFigma className="text-purple-400" /> },
        { name: "Canva", level: 75, icon: <SiCanva className="text-blue-400" /> },
        { name: "Git & GitHub", level: 65, icon: <FaGitAlt className="text-orange-500" /> },
        { name: t('uiuxDesign'), level: 60, icon: <FaPalette className="text-pink-400" /> }
      ]
    },
    {
      title: t('projectManagement'),
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Trello", level: 80, icon: <FaTrello className="text-blue-500" /> },
        { name: "Notion", level: 75, icon: <SiNotion className="text-gray-300" /> },
        { name: t('planning'), level: 70, icon: <FaTasks className="text-orange-400" /> },
        { name: t('teamwork'), level: 75, icon: <FaUsers className="text-blue-400" /> }
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" }
    })
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
            {t('mySkills')}
          </h1>
        </motion.div>

        {/* Grille des compétences */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Titre de la catégorie */}
              <div className="mb-6">
                <h2 className={`text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </h2>
              </div>

              {/* Liste des compétences */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    {/* Nom et icône */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-base">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium text-xs sm:text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-white/70 text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Barre de progression */}
                    <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section apprentissage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10"
        >
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t('continuousLearningSection')}
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {t('learningText')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["TypeScript", "Docker", "Next.js", "MongoDB", "Agile/Scrum", "Jira"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-600/20 rounded-full text-sm text-white/90 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;