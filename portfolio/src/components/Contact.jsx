import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Remplacez ces valeurs par vos vraies clés EmailJS
      await emailjs.send(
        'service_ykzbw9b',     // 👈 Remplacez par votre Service ID
        'template_6pjvz86',    // 👈 Remplacez par votre Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'Badirouyecir@gmail.com'
        },
        'J9HWPS7NIxAZ6mJRF'      // 👈 Remplacez par votre Public Key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          
          {/* Informations de contact */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Mes Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a 
                      href="mailto:Badirouyecir@gmail.com"
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      Badirouyecir@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Téléphone</p>
                    <a 
                      href="tel:+33783842794"
                      className="text-white font-medium hover:text-green-400 transition-colors"
                    >
                      07 83 84 27 94
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Localisation</p>
                    <p className="text-white font-medium">Villeneuve d'Ascq, France</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-white font-semibold mb-4">Suivez-moi</h3>
                <div className="flex space-x-4">
                  <button 
                    type="button"
                    onClick={() => window.open('https://www.linkedin.com/in/mohamed-yecir-badirou-4b46a2299/', '_blank')}
                    className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-400" />
                  </button>
                  <button 
                    type="button"
                    onClick={() => window.open('https://github.com/BYecir02', '_blank')}
                    className="w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center hover:bg-gray-600/40 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <FaUser className="inline mr-2" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="votre.email@example.com"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="Objet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <FaComment className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Bouton d'envoi */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>

                {/* Messages de confirmation/erreur */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-600/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                  >
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                  >
                    ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;