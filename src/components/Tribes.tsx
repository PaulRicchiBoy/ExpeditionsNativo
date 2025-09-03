import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, MapPin, Languages, Award } from 'lucide-react';

export const Tribes: React.FC = () => {
  const { t } = useTranslation();

  const tribes = [
    {
      id: 'matsigenka',
      name: 'Matsigenka',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9uJTIwdHJpYmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      location: 'Madre de Dios, Perú',
      language: 'Matsigenka',
      specialty: 'Cultura Amazónica',
      description: 'Guardianes ancestrales de la biodiversidad amazónica'
    },
    {
      id: 'marakaeri',
      name: 'Marakaeri',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWdlbm91cyUyMHRyaWJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      location: 'Cusco, Perú',
      language: 'Harakmbut',
      specialty: 'Tradiciones Andinas',
      description: 'Pueblo originario de la región del Manu'
    },
    {
      id: 'qeros',
      name: 'Q\'eros',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kZXMlMjB0cmliZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      location: 'Paucartambo, Cusco',
      language: 'Quechua',
      specialty: 'Sabiduría Inca',
      description: 'Últimos descendientes directos de los Incas'
    },
    {
      id: 'wachipaeri',
      name: 'Wachipaeri',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWdlbm91cyUyMHRyaWJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      location: 'Madre de Dios, Perú',
      language: 'Wachipaeri',
      specialty: 'Medicina Tradicional',
      description: 'Expertos en plantas medicinales amazónicas'
    },
    {
      id: 'ashaninka',
      name: 'Ashaninka',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kZXMlMjB0cmliZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      location: 'Junín y Cusco, Perú',
      language: 'Ashaninka',
      specialty: 'Artesanía Textil',
      description: 'Maestros tejedores de la Amazonía peruana'
    },
    {
      id: 'guia_local',
      name: 'Guías Locales',
      image: 'https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd1aWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      location: 'Varias comunidades',
      language: 'Quechua y Español',
      specialty: 'Conectores Culturales',
      description: 'Comunicación entre culturas y experiencias auténticas'
    }
  ];

  return (
    <section id="tribes" className="py-20 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {t('tribes.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto">
            {t('tribes.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tribes.map((tribe, index) => (
            <motion.div
              key={tribe.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#222222] rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 border border-green-100 dark:border-green-900/50 hover:border-green-300 dark:hover:border-green-700"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-green-200 dark:border-green-800 group-hover:border-green-400 dark:group-hover:border-green-600 transition-colors duration-300">
                  <img
                    src={tribe.image}
                    alt={tribe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full shadow-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                {tribe.name}
              </h3>
              
              <p className="text-green-600 dark:text-green-400 font-medium mb-4">
                {tribe.specialty}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-center text-sm text-black dark:text-gray-300">
                  <MapPin className="h-4 w-4 text-green-500 mr-2" />
                  <span>{tribe.location}</span>
                </div>
                
                <div className="flex items-center justify-center text-sm text-black dark:text-gray-300">
                  <Languages className="h-4 w-4 text-green-500 mr-2" />
                  <span>{tribe.language}</span>
                </div>
              </div>

              <p className="text-black dark:text-gray-300 text-sm mb-4 italic">
                {tribe.description}
              </p>

              <div className="flex items-center justify-center mt-4">
                <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-green-700 dark:text-green-300 flex items-center">
                    <Award className="h-3 w-3 mr-1" />
                    Colaboradores
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información adicional sobre la colaboración */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              {t('tribes.collaboration.title')}
            </h3>
            <p className="text-black dark:text-gray-300 mb-6">
              {t('tribes.collaboration.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black dark:text-white">{t('tribes.collaboration.development')}</h4>
                <p className="text-sm text-black dark:text-gray-400 mt-1">{t('tribes.collaboration.development_desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black dark:text-white">{t('tribes.collaboration.sustainable')}</h4>
                <p className="text-sm text-black dark:text-gray-400 mt-1">{t('tribes.collaboration.sustainable_desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black dark:text-white">{t('tribes.collaboration.exchange')}</h4>
                <p className="text-sm text-black dark:text-gray-400 mt-1">{t('tribes.collaboration.exchange_desc')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};