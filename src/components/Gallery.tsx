import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    'https://media.istockphoto.com/id/2219381774/es/foto/boat-sailing-in-the-waters-of-the-nanay-river.webp?a=1&b=1&s=612x612&w=0&k=20&c=gw9Hm-sfrK_JirstAZPOKcsJnjIepUIu7oIKpSIJ8R8=',
    'https://media.istockphoto.com/id/1461467511/es/foto/joven-de-pie-en-balsa-de-madera-flotar-en-tropical-ex%C3%B3tica-selva-amaz%C3%B3nica-selva-agua-lago-r%C3%ADo.webp?a=1&b=1&s=612x612&w=0&k=20&c=HiyLAXlHVB99t-fQzK9184K4ULcSupuuJpxNezxqorA=',
    'https://media.istockphoto.com/id/2219381774/es/foto/boat-sailing-in-the-waters-of-the-nanay-river.webp?a=1&b=1&s=612x612&w=0&k=20&c=gw9Hm-sfrK_JirstAZPOKcsJnjIepUIu7oIKpSIJ8R8=',
    'https://images.unsplash.com/photo-1698374540649-bd0972848292?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHR1cmlzbW8lMjBwZXJ1JTIwc2VsdmF8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1733342570944-57261d1dff34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHR1cmlzbW8lMjBwZXJ1JTIwc2VsdmF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1574607815146-ba00a5f234ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHR1cmlzbW8lMjBwZXJ1JTIwc2VsdmF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1660966237650-be9c6e8af3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVyaXNtbyUyMHBlcnUlMjBzZWx2YXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1568402102889-8307563f757f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVyaXNtbyUyMHBlcnUlMjBzZWx2YXxlbnwwfHwwfHx8MA%3D%3D'
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('gallery_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Descubre nuestras instalaciones y la energía de nuestras clases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Gallery ${selectedImage + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};