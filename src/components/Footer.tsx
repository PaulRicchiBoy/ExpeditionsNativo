import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail,
  Heart,
  MessageCircle,
  X,
  Send,
  Minimize2,
  CreditCard
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { text: '¡Hola! 👋 ¿En qué puedo ayudarte hoy?', sender: 'bot', time: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  const paymentMethods = [
    { name: 'Visa', image: '/images/visa.png', url: 'https://tu-pasarela-de-pago.com/visa' },
    { name: 'Mastercard', image: '/images/mastercard.png', url: 'https://tu-pasarela-de-pago.com/mastercard' },
    { name: 'American Express', image: '/images/american.png', url: 'https://tu-pasarela-de-pago.com/amex' },
    { name: 'PayPal', image: '/images/paypal.png', url: 'https://tu-pasarela-de-pago.com/paypal' },
  ];

  // Efecto para obtener el ancho de la ventana
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para hacer scroll al final de los mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Función para manejar errores de carga de imágenes
  const handleImageError = (methodName: string) => {
    setImageErrors(prev => ({ ...prev, [methodName]: true }));
  };

  // Función para enviar mensaje
  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = { text: inputMessage, sender: 'user', time: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simular respuesta automática
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Gracias por tu mensaje. Te responderemos pronto por WhatsApp.', 
        sender: 'bot', 
        time: new Date() 
      }]);
    }, 1000);

    // Redirigir a WhatsApp después de enviar mensaje
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/51902675869?text=${encodeURIComponent(
        `Hola, soy ${userInfo.name || 'Cliente Nativo'}. ${inputMessage}`
      )}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  // Función para manejar la tecla Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Función para abrir/cerrar el chat
  const toggleChat = () => {
    if (isChatOpen && isMinimized) {
      setIsMinimized(false);
    } else {
      setIsChatOpen(!isChatOpen);
      setIsMinimized(false);
    }
  };

  // Función para minimizar el chat
  const minimizeChat = () => {
    setIsMinimized(true);
  };

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle size={28} />
        {!isChatOpen && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center"
          >
            1
          </motion.span>
        )}
      </motion.button>

      {/* Chat flotante - Posicionamiento corregido */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`fixed z-50 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col ${
              windowWidth < 640 
                ? 'bottom-24 inset-x-4 mx-auto max-w-md' // Mobile: centrado y ancho completo con márgenes
                : 'bottom-24 right-6 w-80' // Desktop: al lado del botón
            }`}
          >
            {/* Header del chat */}
            <div className="bg-green-500 text-white p-3 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">Soporte Nativo</h3>
                  <p className="text-xs opacity-80">En línea</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button onClick={minimizeChat} className="text-white opacity-80 hover:opacity-100">
                  <Minimize2 size={16} />
                </button>
                <button onClick={toggleChat} className="text-white opacity-80 hover:opacity-100">
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Área de mensajes */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50 max-h-60">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-green-100 text-gray-800 rounded-br-none'
                            : 'bg-gray-200 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs opacity-50 mt-1 text-right">
                          {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

               
                

                {/* Input de mensaje */}
                <div className="p-3 border-t border-gray-200 flex items-center">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 p-2 text-sm border border-gray-300 rounded-l focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resto del footer... */}
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
                  <span className="text-xl font-bold">Nativo</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Viaja único viaja con Nativo
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
                          const element = document.getElementById(id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
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
                    <a 
                      href="https://wa.me/51902675869" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      +51 902 675 869
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-400">info@Nativo.com</span>
                  </li>
                </ul>
              </div>

              {/* Horarios y Métodos de Pago */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Horarios</h3>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
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

                <h3 className="text-lg font-semibold mb-3 text-emerald-400">Métodos de Pago</h3>
                <div className="grid grid-cols-2 gap-2">
  {paymentMethods.map((method) => (
    <motion.a
      key={method.name}
      href={method.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="bg-black p-2 rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
    >
      <img 
        src={method.image} 
        alt={method.name}
        className="w-full h-8 object-contain" 
      />
    </motion.a>
                  ))}
                </div>
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
                <a 
                  href="https://tu-pasarela-de-pago.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Realizar Pago
                </a>
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
    </>
  );
};