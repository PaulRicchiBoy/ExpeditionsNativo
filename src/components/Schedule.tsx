import React, { useEffect, useState } from 'react';
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

  // Datos de videos de TikTok
  const tiktokVideos = [
    {
      id: 1,
      title: "Aventura en la Selva",
      description: "Explorando la biodiversidad amazónica #nativo #aventura #selva",
      videoId: "7542135717682580754",
      likes: "2.4K",
      comments: "128",
      shares: "56",
    },
    {
      id: 2,
      title: "Cultura Matsigenka",
      description: "Conociendo tradiciones del pueblo Matsigenka #cultura #peru",
      videoId: "7542135717682580754",
      likes: "3.1K",
      comments: "214",
      shares: "87",
    },
    {
      id: 3,
      title: "Rituales Ancestrales",
      description: "Participando en ceremonias tradicionales #ritual #ancestral",
      videoId: "7542135717682580754",
      likes: "4.7K",
      comments: "342",
      shares: "121",
    },
    {
      id: 4,
      title: "Gastronomía Local",
      description: "Degustando platos típicos de la región #comida #peru",
      videoId: "7542135717682580754",
      likes: "5.2K",
      comments: "431",
      shares: "198",
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
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  // Forzar rerender cuando el script se carga
  useEffect(() => {
    if (isScriptLoaded && window.tiktokEmbed) {
      window.tiktokEmbed.lib.init();
    }
  }, [isScriptLoaded]);

  return (
    <section id="tiktok-gallery" className="py-16 bg-gray-50 dark:bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {t('tiktok_gallery_title') || "Galería de TikTok"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
            {t('tiktok_gallery_subtitle') || "Descubre nuestras aventuras en TikTok"}
          </p>
          
          <div className="flex justify-center space-x-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              <Instagram className="h-4 w-4 mr-1.5" />
              Instagram
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@nativo.expedition"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors"
            >
              <Music className="h-4 w-4 mr-1.5" />
              Seguir en TikTok
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tiktokVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-800"
            >
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-base line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Contenedor ajustado específicamente para TikTok */}
                <div className="relative" style={{ height: '740px' }}>
                  <blockquote 
                    className="tiktok-embed absolute top-0 left-0 w-full h-full" 
                    cite={`https://www.tiktok.com/@nativo.expedition/video/${video.videoId}`}
                    data-video-id={video.videoId}
                    style={{ 
                      border: 'none',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <section>
                      <a 
                        href={`https://www.tiktok.com/@nativo.expedition/video/${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blue-500 hover:text-blue-600 absolute bottom-1.5 left-1.5 z-10 bg-white/90 dark:bg-gray-900/90 px-1.5 py-0.5 rounded"
                        style={{ textDecoration: 'none' }}
                      >
                        <ExternalLink className="h-2.5 w-2.5 mr-0.5" />
                        Ver en TikTok
                      </a>
                    </section>
                  </blockquote>
                </div>

                <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-500">
                  <span className="flex items-center">
                    <span className="mr-0.5">❤️</span> {video.likes}
                  </span>
                  <span className="flex items-center">
                    <span className="mr-0.5">💬</span> {video.comments}
                  </span>
                  <span className="flex items-center">
                    <span className="mr-0.5">↗️</span> {video.shares}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isScriptLoaded && (
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">Cargando videos de TikTok...</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            ¿Quieres ver más contenido?
          </p>
          <motion.a
            href="https://www.tiktok.com/@nativo.expedition"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium rounded-md transition-colors text-sm"
          >
            <Music className="h-4 w-4 mr-1.5" />
            Seguir en TikTok
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Asegurar que el iframe de TikTok ocupe todo el espacio */
        .tiktok-embed iframe {
          width: 100% !important;
          height: 100% !important;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};