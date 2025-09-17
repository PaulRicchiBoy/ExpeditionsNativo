import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
//toogle de idioma
export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'tours_title', id: 'tours' },
    { key: 'tribu_title', id: 'tribes' },
    { key: 'gallery_title', id: 'galleryTiktok' },
    { key: 'pricing_title', id: 'pricing' },
    { key: 'contact_title', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         <a 
  href="/" 
  className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200"
>
  <img
    src="/images/logoNativo.png"
    alt={t('brand')}
    className="h-10 w-10 rounded-full object-cover border-2 border-black shadow-sm"
  />
  <span className="text-xl font-bold text-white drop-shadow-md">{t('brand')}</span>
</a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-black transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Controles (Idioma/Tema) */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle /> {/* Opcional: Si no lo necesitas, elimínalo */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle /> {/* Opcional */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-gray-800"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                  >
                    {t(item.key)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};