import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from '../utils/translations';

const Parcours = ({ language = 'fr' }) => {
  const t = useTranslation(language);

  // Données pour le parcours académique
  const educationData = [
    {
      id: 1,
      title: t('cycleEngineer'),
      institution: t('isen'),
      period: t('since2023'),
      location: t('lille'),
      description: t('isenDesc'),
      icon: <FaGraduationCap className="text-white" />
    },
    {
      id: 2,
      title: t('preparatoryCycle'),
      institution: t('cpms'),
      period: t('period2021_2023'),
      location: t('cotonou'),
      description: t('cpmsDesc'),
      icon: <FaGraduationCap className="text-white" />
    },
    {
      id: 3,
      title: t('baccalaureate'),
      institution: t('leRocher'),
      period: t('year2021'),
      location: t('cotonou'),
      description: t('baccDesc'),
      icon: <FaGraduationCap className="text-white" />
    }
  ];

  // Données pour le parcours professionnel
  const experienceData = [
    {
      id: 1,
      title: t('commercialEmployee'),
      company: t('superU'),
      period: t('july2024'),
      location: t('laMadeleine'),
      description: t('superUDesc'),
      icon: <FaBriefcase className="text-white" />
    },
    {
      id: 2,
      title: t('commercialEmployee'),
      company: t('kesed'),
      period: t('oct2021_june2023'),
      location: t('cotonou'),
      description: t('kesedDesc'),
      icon: <FaBriefcase className="text-white" />
    },
    {
      id: 3,
      title: t('academicInternship'),
      company: t('safarTravels'),
      period: t('july2022'),
      location: t('cotonou'),
      description: t('safarDesc'),
      icon: <FaBriefcase className="text-white" />
    }
  ];

  // Variantes d'animation
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-left">
            {t('myJourney')}
          </h1>
        </motion.div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Colonne Éducation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('education')}</h2>
            </div>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-600/20 rounded-full text-xs flex items-center">
                            <FaCalendarAlt className="mr-2" /> {item.period}
                          </span>
                          <span className="px-3 py-1 bg-blue-600/20 rounded-full text-xs flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> {item.location}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-blue-300 font-medium mb-3 text-sm">{item.institution}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Colonne Expérience */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('experience')}</h2>
            </div>
            
            <div className="space-y-6">
              {experienceData.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-indigo-600/20 rounded-full text-xs flex items-center">
                            <FaCalendarAlt className="mr-2" /> {item.period}
                          </span>
                          <span className="px-3 py-1 bg-indigo-600/20 rounded-full text-xs flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> {item.location}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-indigo-300 font-medium mb-3 text-sm">{item.company}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Parcours;