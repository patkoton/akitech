/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradImage': "url('/src/assets/images/cyan_img.png')",
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'darkWhite': '#F5F3F4',
      'black': '#383838',
      'active': '#99002C',
      'lightCyan': '#E6EEF1',
    }
  },
  plugins: [],
}

