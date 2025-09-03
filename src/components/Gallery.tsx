import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    'https://lh3.googleusercontent.com/p/AF1QipO3Ug63TJL1rdgCNVlrv2yxaYaOgxGE5GputJsS=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/p/AF1QipP4qtabGOt3TDYt-R7ZxnpESqfSsykMHsSZfIEI=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nra5r2e_sb6xGzRxQm-pJ-I9kTjhbX82_DvdzbzKdidxfrF23heU4_GTcIudJhfGh4vMtWG-5tq93OpY79tAvQw81OcoXk0v1qgBGAqwDmLDozh1V-JCcL4Y2XJ9hZvIxEEaEom=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/p/AF1QipPjPc_ZQHMz_xxKwPdiTrR4UGcbLtp8igmRk-st=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrXPS5IZRQ0_qY7lEuRUjNDZ7K50X8cVCN5kdLoKhxsWxKydlacFGODotLAGerS4EGxu6xFVpgJ6Nf5ImyKb7BYm6kscULpcLcpj_7jIcb2Bmv6QQCsVjaCxHyOH-18BWYZIcxl5w=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/p/AF1QipNMHEBa_ZAB_867cEPhbWV2-0VrTqgE5V1mKfXD=s680-w680-h510-rw',
    'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrXPS5IZRQ0_qY7lEuRUjNDZ7K50X8cVCN5kdLoKhxsWxKydlacFGODotLAGerS4EGxu6xFVpgJ6Nf5ImyKb7BYm6kscULpcLcpj_7jIcb2Bmv6QQCsVjaCxHyOH-18BWYZIcxl5w=s680-w680-h510-rw'
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