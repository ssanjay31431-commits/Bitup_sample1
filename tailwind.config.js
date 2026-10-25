/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E50914',
          'red-bright': '#FF1F2F',
          'red-dark': '#B30710',
          'red-glow': '#FF334B',
          black: '#0A0A0A',
          dark: '#121214',
          card: '#161619',
          cardHover: '#1E1E23',
          border: '#27272E',
          muted: '#8E8E93',
          gold: '#F59E0B',
          yellow: '#FFC107'
        }
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(229, 9, 20, 0.5)',
        'red-glow-lg': '0 0 45px -5px rgba(229, 9, 20, 0.6)',
        'red-sm': '0 0 15px -3px rgba(229, 9, 20, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
