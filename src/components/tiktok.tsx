import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Music, ExternalLink } from 'lucide-react';

// Extender la interfaz Window para incluir tiktokEmbed
declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        init: () => void;
      };
    };
  }
}

export const TiktokGallery: React.FC = () => {
  const { t } = useTranslation();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [initAttempts, setInitAttempts] = useState(0);
  const initializedRef = useRef(false);

  // Datos de videos de TikTok actualizados con tus videos
  const tiktokVideos = [
    {
      id: 1,
      title: "Aventura en la Selva",
      description: "Explorando la biodiversidad amazónica #nativo #aventura #selva",
      videoId: "7542135717682580754",
    },
    {
      id: 2,
      title: "Cultura Matsigenka",
      description: "Conociendo tradiciones del pueblo Matsigenka #cultura #peru",
      videoId: "7540754830428622098",
    },
    {
      id: 3,
      title: "Rituales Ancestrales",
      description: "Participando en ceremonias tradicionales #ritual #ancestral",
      videoId: "7539636709718379784",
    },
    {
      id: 4,
      title: "Gastronomía Local",
      description: "Degustando platos típicos de la región #comida #peru",
      videoId: "7537910426751782149",
    },
  ];

  // Cargar el script de TikTok embeds
  useEffect(() => {
    if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => {
      console.log("TikTok script loaded successfully");
      setIsScriptLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load TikTok script");
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Inicializar los embeds de TikTok de forma segura
  useEffect(() => {
    if (!isScriptLoaded || initializedRef.current) return;

    const initTikTokEmbeds = () => {
      if (window.tiktokEmbed && typeof window.tiktokEmbed.lib.init === 'function') {
        try {
          window.tiktokEmbed.lib.init();
          initializedRef.current = true;
          console.log("TikTok embeds initialized successfully");
        } catch (error) {
          console.error("Error initializing TikTok embeds:", error);
        }
      } else {
        if (initAttempts < 5) {
          console.log(`Retrying TikTok initialization (attempt ${initAttempts + 1})`);
          setTimeout(() => {
            setInitAttempts(prev => prev + 1);
          }, 1000 * (initAttempts + 1));
        } else {
          console.error("Failed to initialize TikTok embeds after multiple attempts");
        }
      }
    };

    const timer = setTimeout(initTikTokEmbeds, 500);
    return () => clearTimeout(timer);
  }, [isScriptLoaded, initAttempts]);

  return (
    <section id="tiktok-gallery" className="py-16 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-900 dark:to-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-rose-100 dark:bg-rose-900/30 rounded-full mb-4">
            <Music className="h-6 w-6 text-rose-600 dark:text-rose-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t('tiktok.gallery.title') || "Nuestras Aventuras en TikTok"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6 text-lg">
            {t('tiktok.gallery.subtitle') || "Descubre la magia de la selva a través de nuestros videos"}
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-purple-500/20"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@nativo.expedition"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-5 py-2.5 bg-gray-900 hover:bg-black text-white font-medium rounded-lg transition-all shadow-lg shadow-gray-900/30"
            >
              <Music className="h-5 w-5 mr-2" />
              Seguir en TikTok
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiktokVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
            >
              <div className="p-4">
                <div className="flex items-start mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg truncate">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 aspect-[9/16]">
                  <blockquote 
                    className="tiktok-embed absolute inset-0 w-full h-full" 
                    cite={`https://www.tiktok.com/@nativo.expedition/video/${video.videoId}`}
                    data-video-id={video.videoId}
                    style={{ border: 'none' }}
                  >
                    <section className="w-full h-full flex items-center justify-center bg-gray-900">
                      <div className="text-white text-center p-4">
                        <div className="animate-pulse flex flex-col items-center">
                          <Music className="h-10 w-10 mb-2 text-rose-500" />
                          <p className="text-sm">Cargando video de TikTok...</p>
                          <p className="text-xs mt-2 text-gray-400">@nativo.expedition</p>
                        </div>
                      </div>
                    </section>
                  </blockquote>
                </div>

                <div className="flex justify-end items-center mt-3">
                  <a 
                    href={`https://www.tiktok.com/@nativo.expedition/video/${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 font-medium text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Ver en TikTok
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isScriptLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl"
          >
            <div className="animate-pulse flex flex-col items-center">
              <Music className="h-8 w-8 text-rose-500 mb-2" />
              <p className="text-rose-700 dark:text-rose-300 font-medium">Cargando videos de TikTok...</p>
              <p className="text-rose-600 dark:text-rose-400 text-sm mt-1">Esto puede tomar unos segundos</p>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            ¿Te gustó nuestro contenido? ¡Síguenos para más aventuras!
          </p>
          <motion.a
            href="https://www.tiktok.com/@nativo.expedition"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-rose-500/30 text-lg"
          >
            <Music className="h-5 w-5 mr-2" />
            Seguir en TikTok
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};