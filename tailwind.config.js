/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: '#0B0F1A',
        surface: '#0f162a',
        glass: 'rgba(255,255,255,0.04)',
        accent: {
          blue: '#4cc9ff',
          purple: '#9b8cff',
          pink: '#ff6fb1',
          cyan: '#4de5b0',
        },
      },
      boxShadow: {
        glow: '0 10px 50px rgba(76, 201, 255, 0.25)',
        soft: '0 20px 60px rgba(0,0,0,0.35)',
        neon: '0 0 25px rgba(34,211,238,0.5)',
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.8, filter: 'drop-shadow(0 0 12px rgba(76,201,255,0.35))' },
          '50%': { opacity: 1, filter: 'drop-shadow(0 0 22px rgba(155,140,255,0.55))' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.9 },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}

