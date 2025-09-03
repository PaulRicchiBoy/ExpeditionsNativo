import { useEffect } from 'react';
import './i18n';
import { Home } from './pages/Home';

function App() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Nativo Expeditions';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Academia de artes marciales en Pisac, Cusco. Clases de Boxeo, Kickboxing, Muay Thai, BJJ, MMA, Gimnasio y Yoga. Transforma tu cuerpo y mente.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'artes marciales, boxeo, kickboxing, muay thai, bjj, mma, gimnasio, yoga, pisac, cusco, entrenamiento');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Nativo Expeditions');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Transforma tu cuerpo y mente en nuestra academia de artes marciales en Pisac, Cusco.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }
  }, []);

  return <Home />;
}

export default App;