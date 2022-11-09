const nativewind = require('nativewind/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['App.tsx'],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '2rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  presets: [nativewind],
  plugins: [],
};
