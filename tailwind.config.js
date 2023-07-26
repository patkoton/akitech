/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require('tailwindcss/plugin')

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyanImg': "url('/src/assets/images/cyan_img.png')",
      },
      gradientColorStopPositions: {
        70: '70%',
        81: '81.8%',
        85: '85%',
      },
      // custom user configuration
      bgGradientDeg: {
        75: '75deg',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'darkWhite': '#F5F3F4',
      'black': '#383838',
      'active': '#99002C',
      'lightCyan': '#E6EEF1',
      'lightPink': '#EDE0D8',
      'lightBlue': '#D9E2EB',
      'lightGreen': '#E6F1ED',
    }
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      345: '315deg',
                  }
              )
          }
       )
    })
  ],
})

