import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-black dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium uppercase">
        {i18n.language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};