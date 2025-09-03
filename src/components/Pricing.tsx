import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'monthly',
      price: t('pricing.price_monthly'),
      popular: false,
    },
    {
      key: 'quarterly',
      price: t('pricing.price_quarterly'),
      popular: true,
    },
    {
      key: 'yearly',
      price: t('pricing.price_yearly'),
      popular: false,
    },
  ];

  const features = [
    'unlimited',
    'equipment',
    'nutrition',
    'personal',
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('pricing.pricing_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/10 scale-[1.02]'
                  : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1a1a]'
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-semibold">
                    <Star className="h-4 w-4 mr-1" />
                    {t('pricing.recommended')}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t(`pricing.${plan.key}`)}
                </h3>
                <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check className="h-5 w-5 mr-3 text-orange-500 dark:text-orange-400" />
                    <span>{t(`pricing.features.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
              >
                {t('cta_primary')}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};