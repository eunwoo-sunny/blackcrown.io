/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./views/**/*.{html,js,ejs}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }, 
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
    },
 
    }
  },
  plugins: [],
}
 