import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            ¿Listo para comenzar tu transformación? Contáctanos para reservar tu clase gratuita
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};