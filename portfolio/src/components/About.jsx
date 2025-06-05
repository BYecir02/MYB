import React from 'react';
import { FaCode, FaDownload, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    const handleDownloadCV = () => {
        // Lien vers votre CV (à placer dans le dossier public)
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
          {/* Avatar */}
          <div className="relative mx-auto w-40 h-40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-lg text-white/80"
            >
              <span className="text-2xl">👋</span>
              <span className="font-medium">Hello, je suis</span>
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
              <span>Développeur</span>
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Créateur</span>
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span>Innovateur</span>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
              >
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                Développeur Fullstack
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Télécharger mon CV
              </motion.button>
            </div>
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
              <FaHeart className="mr-3 text-red-400" /> À propos
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/90 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Étudiant passionné en informatique à l'<span className="text-blue-400 font-semibold">ISEN Lille</span>, 
                  je maîtrise plusieurs langages de programmation et recherche activement une alternance.
                </p>
                <p>
                  <span className="text-blue-400 font-semibold">Rythme :</span> 3 semaines entreprise / 1 semaine école
                </p>
              </div>
              <div>
                <p>
                  Mon objectif est de contribuer à des projets innovants tout en continuant à apprendre 
                  et évoluer dans le développement web et mobile. Je suis toujours en quête de nouveaux 
                  défis techniques qui me permettront de grandir professionnellement.
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
                <FaCode className="mr-2 text-blue-400" /> Mes qualités
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaRocket,
                title: "Dynamique",
                description: "Adaptation rapide aux nouvelles technologies et méthodes de travail.",
                gradient: "from-red-500 to-orange-500"
              },
              {
                icon: FaLightbulb,
                title: "Curieux",
                description: "Toujours en quête d'apprentissage et de découverte de nouvelles solutions.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: FaCode,
                title: "Rigoureux",
                description: "Respect des standards de développement et attention aux détails.",
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
          <h2 className="text-2xl font-bold text-white mb-6">Mes valeurs professionnelles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Collaboration</h3>
              <p className="text-white/80 mb-4">
                Je crois en la force du travail d'équipe et de l'intelligence collective. 
                Partager les connaissances et collaborer efficacement sont pour moi des éléments clés 
                pour mener à bien des projets complexes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Apprentissage continu</h3>
              <p className="text-white/80 mb-4">
                Dans un domaine en constante évolution, j'accorde une grande importance à la formation continue. 
                Je consacre régulièrement du temps à explorer de nouvelles technologies et à approfondir mes connaissances.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Qualité et excellence</h3>
              <p className="text-white/80 mb-4">
                Je m'engage à fournir un travail de qualité, avec un code propre, bien documenté et testé. 
                L'excellence technique et la satisfaction utilisateur sont au cœur de ma démarche.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Innovation</h3>
              <p className="text-white/80">
                Je suis constamment à la recherche de solutions innovantes pour résoudre les problèmes. 
                J'aime explorer de nouvelles approches et technologies pour créer des applications plus performantes et intuitives.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;