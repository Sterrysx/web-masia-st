// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Claves → clases Tailwind: font-playfair, font-merriweather, font-jakarta
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        lavish:       ['Lavishly Yours', 'cursive'],
        sans:         ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // Paleta personalizada
        'dark-green':        '#1D2D25',
        'rust-red':          '#91524B',
        'muted-terracotta':  '#BA7D66',
        'soft-rose':         '#C09E94',
        'light-gray':        '#CCD2D2',

        'nav':        '#91524B',
        'footer':        '#91524B',
        'secund':        '#BA7D66',
        'fondo':        '#C09E94',
      },
    },
  },
  plugins: [],
}
