import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image optimizada y responsive */}
      <div className="absolute inset-0">
        <picture>
          <img
            src="/images/portadaVerde.png"
            alt="Nativo Expeditions - Tours y Aventuras"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
        
        {/* Overlay con tonos rojos para armonizar */}
        <div className="absolute inset-0 "></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
            {t('brand')}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-red-100 max-w-2xl mx-auto drop-shadow">
            {t('tagline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-600 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
            >
              {t('cta_primary')}
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black border-2 border-white text-white hover:bg-black-600 font-semibold rounded-lg transition-all duration-200"
            >
              {t('cta_secondary')}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-80"
      >
        <div className="text-red-200 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};