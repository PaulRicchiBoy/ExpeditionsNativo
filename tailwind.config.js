/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Correcto - usa clases para el modo oscuro
  theme: {
    extend: {
      colors: {
        // Paleta naranja (se mantiene igual)
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // PALETA NEGRA PURA - REEMPLAZANDO LOS GRISES AZULADOS
        dark: {
          50: '#fafafa',  // Gris muy claro
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',  // Gris muy oscuro
          900: '#171717',  // Casi negro
          pure: '#000000', // Negro absoluto
          // Nuevos colores para componentes
          bg: '#000000',      // Fondo principal
          card: '#0a0a0a',    // Cards
          border: '#1a1a1a',  // Bordes
          text: '#ffffff'     // Texto
        }
      },
      // Configuración extendida para modo oscuro
      backgroundColor: {
        dark: {
          base: 'var(--color-dark-bg)',
          card: 'var(--color-dark-card)'
        }
      },
      textColor: {
        dark: {
          base: 'var(--color-dark-text)'
        }
      },
      borderColor: {
        dark: {
          base: 'var(--color-dark-border)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};