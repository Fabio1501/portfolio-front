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
      },
      boxShadow: {
        '3-xl' : '0 20px 25px -14px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
