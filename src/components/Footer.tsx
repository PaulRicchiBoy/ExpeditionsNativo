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
  Mail,
  Heart
} from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-24 w-24 rounded-full flex items-center justify-center overflow-hidden logo-container">
  <img src="/images/logoNativo.png" alt="Logo" className="h-16 w-16 object-contain" />
</div>
<div></div>
                <span className="text-xl font-bold">Nativo</span>
              </div>
              <p className="text-gray-400 text-sm">
                Viaja unico viaja con Nativo
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, name }) => (
                  <motion.a
                    key={name}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: 'Inicio', id: 'home' },
                  { name: 'Productos', id: 'products' },
                  { name: 'Comunidades', id: 'tribes' },
                  { name: 'Galería', id: 'gallery' },
                  { name: 'Ubicación', id: 'location' },
                ].map(({ name, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Tercer Paradero, San Sebastián, Cusco</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-400">+51 984 123 456</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-400">info@Nativo.com</span>
                </li>
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">Horarios</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Lun - Vie:</span>
                  <span className="text-emerald-400">9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-emerald-400">9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-emerald-400">10:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © 2025 Nativo Expeditions. Hecho con 
              <Heart className="h-3 w-3 mx-1 text-emerald-500" /> 
              en el Cusco.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>

        {/* Sustainable Message */}
        <div className="bg-emerald-900/30 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-emerald-300">
            🌱 Cada aventura apoya directamente a las comunidades andinas y ayuda a preservar técnicas ancestrales.
          </p>
        </div>
      </div>
    </footer>
  );
};