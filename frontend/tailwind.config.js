// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'], // Se define la fuente con alias 'merriweather'
        plus: ['Plus Jakarta Sans', 'serif'], // Se define la fuente con alias 'merriweather'
      },
      colors: {
        brown1: "#6d3329",  // Nombre personalizado para el color
      },
    },
  },
  plugins: [],
};
