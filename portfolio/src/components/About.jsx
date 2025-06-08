import React from 'react';
import { FaCode, FaDownload, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from '../utils/translations';

const About = ({ language = 'fr' }) => {
  const t = useTranslation(language);

  const handleDownloadCV = () => {
    // Lien vers le CV (dans le dossier public)
    const link = document.createElement('a');
    link.href = '/cv/CV_BADIROU_Mohamed_Yecir_Alternance.pdf';
    link.download = 'CV_BADIROU_Mohamed_Yecir_Alternance.pdf';
    link.click();
  };

  return (
    <div className="h-full overflow-y-auto hide-scrollbar p-4 sm:p-6 lg:p-8 text-white pb-20 lg:pb-8">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Name & Title */}
          <div className="space-y-4 m-14">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-lg text-white/80"
            >
              <span className="text-2xl">👋</span>
              <span className="font-medium">{t('hello')}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
            >
              Mohamed Yecir Badirou
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-white/70"
            >
              <span>{t('developer')}</span>
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>{t('creator')}</span>
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span>{t('innovator')}</span>
            </motion.div>

            {/* Badge Développeur Fullstack */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-8 mb-4"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl border border-blue-400/30">
                <div className="w-4 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                {t('fullstackDev')}
              </div>
            </motion.div>

            {/* Bouton CV à la ligne suivante */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white/80 hover:text-white text-sm font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <FaDownload className="mr-2 text-xs" />
                {t('downloadCV')}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* About Section - PLEINE LARGEUR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaHeart className="mr-3 text-red-400" /> {t('aboutTitle')}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/90 leading-relaxed">
              <div className="space-y-4">
                <p>{t('aboutText1')}</p>
              </div>
              <div>
                <p>{t('aboutText2')}</p>
                <p>
                  <span className="text-blue-400 font-semibold">{t('rhythm')}</span> {t('rhythmText')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Qualities Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FaCode className="mr-2 text-blue-400" /> {t('qualitiesTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaRocket,
                title: t('dynamic'),
                description: t('dynamicDesc'),
                gradient: "from-red-500 to-orange-500"
              },
              {
                icon: FaLightbulb,
                title: t('curious'),
                description: t('curiousDesc'),
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: FaCode,
                title: t('rigorous'),
                description: t('rigorousDesc'),
                gradient: "from-blue-500 to-purple-500"
              }
            ].map((quality, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${quality.gradient} rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}>
                    <quality.icon className="text-white text-3xl" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-4">{quality.title}</h4>
                  <p className="text-white/70 leading-relaxed">{quality.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valeurs professionnelles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold text-white mb-6">{t('professionalValues')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('collaboration')}</h3>
              <p className="text-white/80 mb-4">{t('collaborationText')}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('continuousLearning')}</h3>
              <p className="text-white/80 mb-4">{t('continuousLearningText')}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('qualityExcellence')}</h3>
              <p className="text-white/80 mb-4">{t('qualityExcellenceText')}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('innovation')}</h3>
              <p className="text-white/80">{t('innovationText')}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;