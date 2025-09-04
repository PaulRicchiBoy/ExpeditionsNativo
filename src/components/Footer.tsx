import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="images/logoNativo.png"
                  alt={t('brand')}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-xl font-bold">{t('brand')}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('tagline')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, name }) => (
                  <motion.a
                    key={name}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { key: 'tours_title', id: 'tours' },
                  { key: 'coaches_title', id: 'coaches' },
                  { key: 'schedule_title', id: 'schedule' },
                  { key: 'pricing_title', id: 'pricing' },
                ].map(({ key, id }) => (
                  <li key={key}>
                    <button
                      onClick={() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {t(key)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                  <span className="text-gray-400">{t('contact.address')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-400">{t('contact.phone')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-400">{t('contact.email')}</span>
                </li>
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Horarios</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Lun - Vie:</span>
                  <span>6:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>10:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 {t('brand')}. {t('footer.rights')}.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                {t('footer.privacy')}
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                {t('footer.terms')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};