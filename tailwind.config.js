const plugins = require('tailwindcss/plugin')

module.exports = {
  plugins: [

  ],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      keyframes: {

      },
      backgroundImage: {
        'arrow': "url('/static/img/arrow.png')"
      }
    },
  },
  plugins: [],
}