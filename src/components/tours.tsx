import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe,
  MapPin,
  Mountain,
  Leaf,
  Users,
  Star,
  Calendar,
  Clock,
  Award,
  Wallet,
  Navigation,
  Camera,
  Heart,
  Compass,
  Map,
  X,
  CreditCard,
  Smartphone,
  DollarSign,
  Sun
} from 'lucide-react';

const tourImages = {
  fantastico: 'https://images.unsplash.com/photo-1557802906-69fe888cad6c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  magico: 'https://peruadventuretrek.com/wp-content/uploads/2022/09/peru-magico-10-dias-9-noches-www.peruadventuretrek-2023_edited.jpg',
  cusco: 'https://media.istockphoto.com/id/2211066389/photo/woman-walking-in-small-town-in-urubamba-valley-during-trip-to-peru.jpg?s=612x612&w=0&k=20&c=xNukggoNvmaxrDa_ffszvmwHIn-T68nLjRy5T9AnrVY=',
  manu: 'https://media.istockphoto.com/id/1081227250/photo/amazon-river-sunset.jpg?s=1024x1024&w=is&k=20&c=WWfS5cTPic-phPzQr1pDGW1Z0EixlwuOK5hu8AODMvg=',
  kintu: 'https://www.huillcaexpedition.com/images/blog/el-kintu-de-la-coca-1652097854.jpg',
  ayahuasca: 'https://media.istockphoto.com/id/1195715002/es/foto/ayahuasca-%C3%A1rbol-manos.jpg?b=1&s=612x612&w=0&k=20&c=XgamzjndFsB8dEWT2vPk2UNLZMq0S5hP8Yen2I4nOgc=',
  qeros: 'https://www.viajesmachupicchutours.com/blog/wp-content/uploads/los-queros.webp',
  machu_picchu_comunidades: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaHUlMjBwaWNjaHU8ZW58MHx8MHx8fDA%3D',
  colpa_de_loros: 'https://www.amazontripperu.com/wp-content/uploads/2018/11/Collpa-chuncho-tambopata-tours-Per%C3%BA.jpg',
  hongos_ninos_santos: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/X2FURDGP25COFNMPGVVNBZAK7M.jpg',
  kcosnipata: 'https://www.conservamospornaturaleza.org/img/2013/09/IMG_6640.jpg',
  wayquecha: 'https://www.conservamospornatura.org/img/2016/11/Wayquecha-3.gif',
  dos_loritos: 'https://media-cdn.tripadvisor.com/media/photo-s/18/28/7e/46/mono-arana-lolo-jugando.jpg',
  matsigenka: 'https://cdn.prod.website-files.com/66b7984f4f5fa77f3974834f/66b7984f4f5fa77f397488e7_IMG_2928.jpg',
  // Nuevos tours para Full Days
  machu_picchu_full_day: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaHUlMjBwaWNjaHU8ZW58MHx8MHx8fDA%3D',
  valle_sagrado_full_day: 'https://images.unsplash.com/photo-1577850668192-6e673a61650c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FjcmVkJTIwdmFsbGV5fGVufDB8fDB8fHww',
  montana_7_colores: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmluY2ljdW5jYSUyMHJhaW5ib3clMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D',
  humantay_lake: 'https://images.unsplash.com/photo-1598894597207-2c6c2f6f1c6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW50YXklMjBsYWtlfGVufDB8fDB8fHww',
  // Nuevos tours para Trekking
  inca_trail: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5jYSUyMHRyYWlsfGVufDB8fDB8fHww',
  salkantay_trek: 'https://images.unsplash.com/photo-1577850668192-6e673a61650c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsa2FudGF5fGVufDB8fDB8fHww',
  ausangate_trek: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzYW5nYXRlfGVufDB8fDB8fHww',
  choquequirao_trek: 'https://images.unsplash.com/photo-1598894597207-2c6c2f6f1c6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvcXVlcXVpcmFvfGVufDB8fDB8fHww'
};

const tourIcons = {
  fantastico: Mountain,
  magico: Mountain,
  cusco: Globe,
  manu: Leaf,
  kintu: Leaf,
  ayahuasca: Heart,
  qeros: Users,
  machu_picchu_comunidades: Mountain,
  colpa_de_loros: Award,
  hongos_ninos_santos: Leaf,
  kcosnipata: Camera,
  wayquecha: Navigation,
  dos_loritos: Award,
  matsigenka: Users,
  // Iconos para Full Days
  machu_picchu_full_day: Sun,
  valle_sagrado_full_day: Sun,
  montana_7_colores: Sun,
  humantay_lake: Sun,
  // Iconos para Trekking
  inca_trail: Mountain,
  salkantay_trek: Mountain,
  ausangate_trek: Mountain,
  choquequirao_trek: Mountain
};

const tourColors = {
  fantastico: 'from-orange-500 via-red-500 to-pink-600',
  magico: 'from-purple-500 via-fuchsia-600 to-pink-700',
  cusco: 'from-green-500 via-emerald-600 to-green-700',
  manu: 'from-green-500 via-emerald-600 to-green-700',
  kintu: 'from-green-500 via-emerald-600 to-green-700',
  ayahuasca: 'from-green-500 via-emerald-600 to-green-700',
  qeros: 'from-green-500 via-emerald-600 to-green-700',
  machu_picchu_comunidades: 'from-green-500 via-emerald-600 to-green-700',
  colpa_de_loros: 'from-green-500 via-emerald-600 to-green-700',
  hongos_ninos_santos: 'from-green-500 via-emerald-600 to-green-700',
  kcosnipata: 'from-green-500 via-emerald-600 to-green-700',
  wayquecha: 'from-green-500 via-emerald-600 to-green-700',
  dos_loritos: 'from-green-500 via-emerald-600 to-green-700',
  matsigenka: 'from-green-500 via-emerald-600 to-green-700',
  // Colores para Full Days
  machu_picchu_full_day: 'from-blue-500 via-indigo-600 to-purple-700',
  valle_sagrado_full_day: 'from-blue-500 via-indigo-600 to-purple-700',
  montana_7_colores: 'from-blue-500 via-indigo-600 to-purple-700',
  humantay_lake: 'from-blue-500 via-indigo-600 to-purple-700',
  // Colores para Trekking
  inca_trail: 'from-amber-500 via-orange-600 to-red-700',
  salkantay_trek: 'from-amber-500 via-orange-600 to-red-700',
  ausangate_trek: 'from-amber-500 via-orange-600 to-red-700',
  choquequirao_trek: 'from-amber-500 via-orange-600 to-red-700'
};

const tourStats = {
  fantastico: { 
    duration: '10 days / 9 nights', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '5.0',
    location: 'Lima, Paracas, Cusco, Puno',
    price: 1200,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  magico: { 
    duration: '8 days / 7 nights', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.9',
    location: 'Lima, Paracas, Cusco',
    price: 950,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  cusco: { 
    duration: '3 days', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.9',
    location: 'Cusco, Sacred Valley',
    price: 350,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  manu: { 
    duration: '3 days', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.variable',
    rating: '4.8',
    location: 'Cusco / Madre de Dios',
    price: 420,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  kintu: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.low',
    rating: '4.7',
    location: 'Cusco',
    price: 75,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  ayahuasca: { 
    duration: '1 night', 
    level: 'tours.stats.levels.advanced', 
    intensity: 'tours.stats.intensities.variable',
    rating: '4.9',
    location: 'Cusco / Madre de Dios',
    price: 200,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  qeros: { 
    duration: '2 days', 
    level: 'tours.stats.levels.intermediate', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.6',
    location: 'Cusco Highlands',
    price: 280,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  machu_picchu_comunidades: { 
    duration: '2 days', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.high',
    rating: '4.8',
    location: 'Cusco - Sacred Valley',
    price: 320,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  colpa_de_loros: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.low',
    rating: '4.5',
    location: 'Cusco - Jungle',
    price: 90,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  hongos_ninos_santos: { 
    duration: '1/2 day', 
    level: 'tours.stats.levels.intermediate', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.7',
    location: 'Cusco - Highlands',
    price: 60,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  kcosnipata: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.6',
    location: 'Cusco - Madre de Dios',
    price: 110,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  wayquecha: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.5',
    location: 'Cusco - Highlands',
    price: 85,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  dos_loritos: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.variable',
    rating: '4.7',
    location: 'Cusco - Madre de Dios',
    price: 95,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  matsigenka: { 
    duration: '2 days', 
    level: 'tours.stats.levels.intermediate', 
    intensity: 'tours.stats.intensities.variable',
    rating: '4.8',
    location: 'Madre de Dios - Jungle',
    price: 250,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  // Estadísticas para Full Days
  machu_picchu_full_day: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.9',
    location: 'Cusco - Machu Picchu',
    price: 180,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  valle_sagrado_full_day: { 
    duration: '1 day', 
    level: 'tours.stats.levels.all', 
    intensity: 'tours.stats.intensities.medium',
    rating: '4.8',
    location: 'Cusco - Sacred Valley',
    price: 120,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  montana_7_colores: { 
    duration: '1 day', 
    level: 'tours.stats.levels.intermediate', 
    intensity: 'tours.stats.intensities.high',
    rating: '4.7',
    location: 'Cusco - Vinicunca',
    price: 90,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  humantay_lake: { 
    duration: '1 day', 
    level: 'tours.stats.levels.intermediate', 
    intensity: 'tours.stats.intensities.high',
    rating: '4.8',
    location: 'Cusco - Humantay',
    price: 85,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  // Estadísticas para Trekking
  inca_trail: { 
    duration: '4 days / 3 nights', 
    level: 'tours.stats.levels.advanced', 
    intensity: 'tours.stats.intensities.high',
    rating: '5.0',
    location: 'Cusco - Inca Trail',
    price: 650,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  salkantay_trek: { 
    duration: '5 days / 4 nights', 
    level: 'tours.stats.levels.advanced', 
    intensity: 'tours.stats.intensities.high',
    rating: '4.9',
    location: 'Cusco - Salkantay',
    price: 550,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  ausangate_trek: { 
    duration: '6 days / 5 nights', 
    level: 'tours.stats.levels.advanced', 
    intensity: 'tours.stats.intensities.high',
    rating: '4.8',
    location: 'Cusco - Ausangate',
    price: 750,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  },
  choquequirao_trek: { 
    duration: '4 days / 3 nights', 
    level: 'tours.stats.levels.advanced', 
    intensity: 'tours.stats.intensities.high',
    rating: '4.7',
    location: 'Cusco - Choquequirao',
    price: 500,
    paymentLink: 'https://www.mercadopago.com.pe/checkout/v1/payment/redirect/9c52f06b-0057-4199-8625-82df85d5612a/payment-option-form/?source=link&preference-id=2682496834-9b12c13f-4fad-4c29-b8eb-c40a21f78d5c&router-request-id=42615827-90fd-4d99-9a78-6be3b116f93c&p=3181fd1b6b5971c239a39fc93ae07246'
  }
};

// Agrupamos los tours por categorías
const tourCategories = {
  featured: ['fantastico', 'magico', 'cusco', 'manu'],
  fullDays: ['machu_picchu_full_day', 'valle_sagrado_full_day', 'montana_7_colores', 'humantay_lake'],
  trekking: ['inca_trail', 'salkantay_trek', 'ausangate_trek', 'choquequirao_trek'],
  cultural: ['kintu', 'ayahuasca', 'qeros', 'machu_picchu_comunidades'],
  nature: ['colpa_de_loros', 'hongos_ninos_santos', 'kcosnipata', 'wayquecha', 'dos_loritos', 'matsigenka']
};

export const Tours: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [activeCategory, setActiveCategory] = useState('featured');

  const handleCloseModal = () => {
    setSelectedTour(null);
    setShowPaymentOptions(false);
  };

  const handlePayment = (tourKey: string | null) => {
    if (!tourKey) return;
    
    const paymentLink = tourStats[tourKey as keyof typeof tourStats].paymentLink;
    window.open(paymentLink, '_blank');
  };

  // Función para renderizar una categoría de tours
  const renderTourCategory = (categoryKey: string, categoryTours: string[]) => (
    <div className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        {t(`tours.categories.${categoryKey}`)}
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categoryTours.map((tour, index) => {
          const Icon = tourIcons[tour as keyof typeof tourIcons];
          const colorClass = tourColors[tour as keyof typeof tourColors];
          const image = tourImages[tour as keyof typeof tourImages];
          const stats = tourStats[tour as keyof typeof tourStats];
          
          return (
            <motion.div
              key={tour}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-[#222222] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={t(`tours.${tour}.title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Badge de Rating */}
                <div className="absolute top-4 left-4 flex items-center bg-black/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-white">{stats.rating}</span>
                </div>

                {/* Badge de Precio */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-semibold rounded-full text-gray-800 dark:text-white backdrop-blur-sm">
                    ${stats.price}
                  </span>
                </div>

                {/* Ubicación */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium truncate">{stats.location}</span>
                  </div>
                </div>

                {/* Icon Overlay */}
                <div className={`absolute top-12 right-4 w-12 h-12 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {t(`tours.${tour}.title`)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(`tours.${tour}.description`)}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-xs font-medium">{t('tours.stats.duration')}</span>
                    </div>
                    <p className="text-sm font-semibold mt-1">{stats.duration}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-xs font-medium">{t('tours.stats.level')}</span>
                    </div>
                    <p className="text-sm font-semibold mt-1">{t(stats.level)}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Compass className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-medium">{t('tours.stats.intensity')}</span>
                    </div>
                    <p className="text-sm font-semibold mt-1">{t(stats.intensity)}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Map className="h-4 w-4 text-purple-500" />
                      <span className="text-xs font-medium">Location</span>
                    </div>
                    <p className="text-sm font-semibold mt-1 truncate">{stats.location}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setSelectedTour(tour)}
                  className={`w-full py-3 px-4 bg-gradient-to-r ${colorClass} hover:shadow-lg text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>{t('tours.details.learn_more')}</span>
                  <Navigation className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#111111] dark:to-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern con temática de aventura */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('tours.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('tours.subtitle')}
          </p>
        </motion.div>

        {/* Filtros de categorías */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Object.keys(tourCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {t(`tours.categories.${category}`)}
            </button>
          ))}
        </motion.div>

        {/* Renderizar la categoría activa */}
        {renderTourCategory(activeCategory, tourCategories[activeCategory as keyof typeof tourCategories])}
      </div>

      {/* Modal de detalles del tour (se mantiene igual) */}
      <AnimatePresence>
        {selectedTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del Modal con imagen */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tourImages[selectedTour as keyof typeof tourImages]} 
                  alt={t(`tours.${selectedTour}.title`)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white">
                    {t(`tours.${selectedTour}.title`)}
                  </h2>
                  <div className="flex items-center mt-2 space-x-3">
                    <div className="flex items-center bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold text-white">
                        {tourStats[selectedTour as keyof typeof tourStats].rating}
                      </span>
                    </div>
                    <div className="flex items-center text-white text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{tourStats[selectedTour as keyof typeof tourStats].location}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contenido del Modal */}
              <div className="p-6 md:p-8">
                {/* Descripción del tour */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('tours.details.about')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t(`tours.${selectedTour}.description`)}
                  </p>
                </div>

                {/* Horarios y Equipamiento */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                      {t('tours.details.schedule')}
                    </h3>
                    <div className="space-y-2">
                      {Object.values(t(`tours.${selectedTour}.schedule`, { returnObjects: true }) as string[]).map((time: string, index: number) => (
                        <div key={index} className="bg-gray-50 dark:bg-[#222222] rounded-lg p-3 text-gray-700 dark:text-gray-300">
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="h-5 w-5 text-purple-500 mr-2" />
                      {t('tours.details.equipment')}
                    </h3>
                    <ul className="space-y-2">
                      {Object.values(t(`tours.${selectedTour}.equipment`, { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Estadísticas */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('tours.stats.duration')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {tourStats[selectedTour as keyof typeof tourStats].duration}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('tours.stats.level')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t(tourStats[selectedTour as keyof typeof tourStats].level)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <Compass className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('tours.stats.intensity')}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t(tourStats[selectedTour as keyof typeof tourStats].intensity)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Precio</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ${tourStats[selectedTour as keyof typeof tourStats].price}
                    </p>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {/* Botón de Reservar/Pagar - Ahora abre opciones de pago */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    onClick={() => setShowPaymentOptions(true)}
                  >
                    <span>Pagar Ahora</span>
                    <Wallet className="h-5 w-5" />
                  </motion.button>
                  
                  {/* Botón de WhatsApp */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 px-6 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
                    onClick={() => {
                      const phone = "51987654321"; // Reemplaza con tu número de WhatsApp
                      const message = `¡Hola! Estoy interesado en el tour: ${t(`tours.${selectedTour}.title`)}. ¿Podrían proporcionarme más información?`;
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
                    }}
                  >
                    <span>Reservar por Whatsapp</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.150-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.520.074-.792.372-.272.297-1.040 1.016-1.040 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.200 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.360.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.510-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Opciones de Pago (se mantiene igual) */}
      <AnimatePresence>
        {showPaymentOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Opciones de Pago
                </h3>
                <button 
                  onClick={() => setShowPaymentOptions(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Selecciona tu método de pago preferido para el tour:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {selectedTour ? t(`tours.${selectedTour}.title`) : ''}
                  </span>
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Precio total:</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${selectedTour ? tourStats[selectedTour as keyof typeof tourStats].price : '0'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => handlePayment(selectedTour)}
                  >
                    <CreditCard className="h-8 w-8 text-blue-500" />
                    <span className="text-sm font-medium">Tarjeta de Crédito</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => handlePayment(selectedTour)}
                  >
                    <Smartphone className="h-8 w-8 text-purple-500" />
                    <span className="text-sm font-medium">Yape/Plin</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => handlePayment(selectedTour)}
                  >
                    <DollarSign className="h-8 w-8 text-green-500" />
                    <span className="text-sm font-medium">Efectivo</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => handlePayment(selectedTour)}
                  >
                    <Wallet className="h-8 w-8 text-orange-500" />
                    <span className="text-sm font-medium">Otros métodos</span>
                  </motion.button>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                <p>Serás redirigido a MercadoPago para completar tu pago de forma segura</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};