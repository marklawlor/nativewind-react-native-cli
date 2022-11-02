const nativewind = require('nativewind/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['App.tsx'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  presets: [nativewind],
  plugins: [],
};
