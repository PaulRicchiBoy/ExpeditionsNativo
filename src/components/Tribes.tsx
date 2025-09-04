import  { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Heart, ChevronRight, ChevronLeft } from 'lucide-react';

export const Tribes = () => {
  const [activeTribe, setActiveTribe] = useState(0);

  const tribes = [
    {
      id: 'matsigenka',
      name: 'Matsigenka',
      image: 'https://amazonica.pe/archivos/2018/12/2640c85c-4213-4cae-8e89-42d3602c0b08.jpg',
      location: 'Madre de Dios, Perú',
      specialty: 'Textiles Amazónicos',
      description: 'Guardianes ancestrales de la biodiversidad amazónica y expertos en técnicas textiles tradicionales con tintes naturales.',
      collaboration: '15 años trabajando juntos',
      products: 'Telares naturales, tintes orgánicos, patrones ancestrales'
    },
    {
      id: 'marakaeri',
      name: 'Marakaeri',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprigbANCWwHD5NTXlbNQspFdDFbFP0NDmdA&s',
      location: 'Cusco, Perú',
      specialty: 'Joyería Artesanal',
      description: 'Pueblo originario de la región del Manu con una rica herencia en joyería artesanal y técnicas de metalurgia tradicional.',
      collaboration: '12 años de asociación',
      products: 'Joyas en plata, piedras semipreciosas, símbolos culturales'
    },
    {
      id: 'qeros',
      name: 'Q\'eros',
      image: "https://www.paucartambo.info/images/turismo/qeros/qeros.jpg",
      location: 'Paucartambo, Cusco',
      specialty: 'Textiles Sagrados',
      description: 'Últimos descendientes directos de los Incas, maestros en técnicas textiles milenarias y patrones con significado espiritual.',
      collaboration: '18 años de colaboración',
      products: 'Prendas ceremoniales, símbolos sagrados, tejidos de alta energía'
    },
    {
      id: 'ashaninka',
      name: 'Ashaninka',
      image: "https://elorejiverde.com/images/foto-semanal/Wilberto.jpg",
      specialty: 'Artesanía Textil',
      description: 'Maestros tejedores de la Amazonía peruana que preservan técnicas ancestrales en cada pieza que crean con dedicación y respeto.',
      collaboration: '10 años de alianza',
      products: 'Bordados tradicionales, tejidos con historias, prendas únicas'
    },
    {
      id: 'guia_local',
      name: 'Guías Locales',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghseqL5xYJty7dEJIf9QmQnkBnpVBvPgZKA&s',
      location: 'Varias comunidades',
      specialty: 'Conectores Culturales',
      description: 'Comunicación entre culturas y experiencias auténticas que enriquecen cada encuentro con nuestras comunidades asociadas.',
      collaboration: '8 años de colaboración',
      products: 'Tours culturales, experiencias auténticas, conexiones genuinas'
    }
  ];

  const nextTribe = () => {
    setActiveTribe((prev) => (prev + 1) % tribes.length);
  };

  const prevTribe = () => {
    setActiveTribe((prev) => (prev - 1 + tribes.length) % tribes.length);
  };

  return (
    <section id="tribes" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Comunidades <span className="text-emerald-600">Andinas</span> con las que colaboramos
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            En Lulus Fashion Store trabajamos directamente con comunidades indígenas del Perú, 
            preservando sus técnicas ancestrales y apoyando su desarrollo sostenible.
          </p>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {tribes.map((tribe, index) => (
              <button
                key={tribe.id}
                onClick={() => setActiveTribe(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === activeTribe
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
                }`}
              >
                {tribe.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <motion.div
              key={activeTribe}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#222222] p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={tribes[activeTribe].image}
                      alt={tribes[activeTribe].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        {tribes[activeTribe].collaboration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                      {tribes[activeTribe].name}
                    </h3>
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="font-medium">{tribes[activeTribe].location}</span>
                    </div>
                    <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                      <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                        {tribes[activeTribe].specialty}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {tribes[activeTribe].description}
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                      <Award className="h-5 w-5 text-emerald-600 mr-2" />
                      Productos destacados
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {tribes[activeTribe].products}
                    </p>
                  </div>

                  <button className="group flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300">
                    Ver colección completa
                    <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTribe}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </button>
          <button
            onClick={nextTribe}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </button>
        </div>

        {/* Indicadores de progreso */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {tribes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTribe(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTribe
                    ? 'bg-emerald-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nuestro impacto en las comunidades
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-emerald-100">Artesanos apoyados</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <p className="text-emerald-100">Años de colaboración</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-emerald-100">Comercio justo</p>
              </div>
            </div>

            <div className="mt-10 bg-white/10 rounded-xl p-6">
              <p className="text-lg italic text-center">
                "Cada viaje con Nativo ayuda a preservar técnicas ancestrales 
                y apoya el desarrollo sostenible de comunidades andinas."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};