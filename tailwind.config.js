const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
      beon: ["Beon"],
    },
    extend: {
      backgroundImage: {
        'main-bg':  "url('../../mock/backgroundSubdued.jpg')",
      },
      colors: {
        'd-green': "#39FF14",
        'd-purple': '#8026FF',
      }
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
    },
  },
  plugins: [
    plugin(function ({addBase}) { 
      addBase({
        '@font-face': {
          fontFamily: 'Beon',
          src: 'url("../../public/fonts/BeonMedium-6d51.otf")'
        }
      })
    })
  ],
};
