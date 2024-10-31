/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'grayish-purple': '#8B6890',
        'dark-purple': '#2E1432',
      },
      fontFamily: {
        'work': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

