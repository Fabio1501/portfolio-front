/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.postimg.cc/1RdvhmsT/portfolio-imagen-cerros.jpg')",
      }
    },
  },
  plugins: [],
}
