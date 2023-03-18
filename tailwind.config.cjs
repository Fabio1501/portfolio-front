/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#3BFE0B',
        'second-color' : '#62615F',
        'third-color' : '#2f4f4f',
      },
      boxShadow: {
        '3-xl' : '0 20px 25px -14px rgba(0, 0, 0, 0.5)'
      },
      brightness: {
        25: '.8'
      },
      borderRadius: {
        'def': '10px'
      },
      height: {
        'de': '2px'
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)', scale: '0.8' },
          '50%': { transform: 'rotate(360deg)', scale: '1.2' },
          '100%': { transform: 'rotate(720deg)', scale: '0.8' }
        },
        ball1: {
          '0%': { boxShadow: '30px 0 0 0 #3BFE0B' },
          '50%': { boxShadow: '0 0 0 0 #3BFE0B', marginBottom: '0', transform: 'translate(15px, 15px)' },
          '100%': { boxShadow: '30px 0 0 0 #3BFE0B', marginBottom: '10px' }
        },
        ball2: {
          '0%': { boxShadow: '30px 0 0 0 #ffffff' },
          '50%': { boxShadow: '0 0 0 0 #ffffff', marginTop: '-20px', transform: 'translate(15px, 15px)' },
          '100%': { boxShadow: '30px 0 0 0 #ffffff', marginTop: '0' }
        }
      },
      animation: {
        rotate: 'wiggle 1s ease-in-out infinite',
        ball1: 'ball1 1s infinite',
        ball2: 'ball2 1s infinite'
      },
      boxShadow: {
        '3xl': '30px 0 0 0 #3BFE0B',
        '2xl': '30px 0 0 0 #ffffff'
      }
    },
  },
  plugins: [],
}
