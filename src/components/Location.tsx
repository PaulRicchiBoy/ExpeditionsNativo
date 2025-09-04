import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink, Clock, Heart } from 'lucide-react';

export const Location = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/1VVFi1prTqQ51jEL8', '_blank');
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Visítanos en <span className="text-emerald-600">San Sebastián</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Encuéntranos en el Tercer Paradero de San Sebastián, a solo minutos del centro de Cusco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Dirección
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tercer Paradero de San Sebastián
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Cusco, Perú
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  A 15 minutos del centro histórico
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Teléfono
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +51 984 123 456
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  +51 984 567 890
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  info@Nativo.com
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  ventas@Nativo.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Horario de atención
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lunes a Sábado: 9:00 AM - 7:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Domingo: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <motion.button
              onClick={openGoogleMaps}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Cómo llegar
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-emerald-100 dark:border-emerald-900/30">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2156789012345!2d-71.95462318571615!3d-13.530747990465192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMxJzUwLjciUyA3McKwNTcnMDkuNyJX!5e0!3m2!1ses!2spe!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lulus Fashion Store - San Sebastián, Cusco"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-md px-3 py-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  📍 Tercer Paradero, San Sebastián
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800">
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Indicaciones
              </h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                Desde la Plaza de Armas de Cusco, tomar transporte hacia San Sebastián (15 min).
                Bajarse en el Tercer Paradero. Estamos ubicados en la avenida principal.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-800/30"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              ¿Por qué visitarnos en San Sebastián?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Fácil acceso</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">A solo 15 minutos del centro de Cusco con transporte frecuente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Artesanía local</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Trabajamos directamente con artesanos de San Sebastián y comunidades aledañas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Precios directos</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Al estar cerca de las comunidades, ofrecemos precios más accesibles sin intermediarios.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Autenticidad garantizada</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Todos nuestros productos son elaborados por artesanos locales usando técnicas tradicionales.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transporte Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Cómo llegar a nuestro local
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Desde el Centro</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tomar combi con cartel "San Sebastián" (15 minutos)</p>
            </div>
            
            <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Taxi</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">10 minutos desde Plaza de Armas (aproximadamente S/ 8-10)</p>
            </div>
            
            <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Referencia</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Frente al mercado de San Sebastián, Tercer Paradero</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};