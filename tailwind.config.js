const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    extend: {
      colors: {
        primary: "#7d1da1",
      },
      spacing: {
        '160': '40rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
