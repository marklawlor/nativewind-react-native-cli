const nativewind = require('nativewind/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['App.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'custom-sm': '0.8rem',
        'custom-base': '2rem',
        'custom-xl': '1.25rem',
        'custom-2xl': '1.563rem',
        'custom-3xl': '1.953rem',
        'custom-4xl': '2.441rem',
        'custom-5xl': '3.052rem',
      },
    },
  },
  presets: [nativewind],
  plugins: [],
};
