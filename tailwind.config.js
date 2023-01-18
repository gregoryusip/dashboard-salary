/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#204454',
        'dark-text': '#1F1F1F',
        secondary: '#DFC256',
        third: '#C6D444',
        'dark-gray': '#808080',
      },
      fontSize: {
        20: ['20px', '30px'],
        28: ['28px', '34.13px'],
        32: ['32px', '39.01px'],
        36: ['36px', '43.88px'],
        40: ['40px', '48.76px'],
        52: ['52px', '63.39px'],
        56: ['56px', '64px'],
      },
    },
  },
  plugins: [],
}
