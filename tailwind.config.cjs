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
        'third-color' : '#F9F9F9',
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
      }
    },
  },
  plugins: [],
}
