/** @type {import('tailwindcss').Config} */
const FluidType = require('tailwindcss-fluid-type');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    fluidType: {
      settings: {
        fontSizeMin: 0.75 // 1.125rem === 18px
      }
    },
    extend: {
      screens: {
        sm: '320px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        brandPrimaryColor: 'rgba(13, 13, 43, 1)',
        brandSecondaryColor: 'rgba(43, 7, 110, 1)',
        brandAcent: 'rgba(54, 113, 233, 1)',
        lightBrandPrimaryColor: 'rgba(255, 255, 255, 0.1)',
        white: '#FFFFFF',
        dark: '#0D0D2B',
        textLight: '#E0E0E0',
        textDark: '##828282 rgba(130, 130, 130, 1)',
        naturalGrey: 'rgba(130, 130, 130, 1)',
        'naturalGrey-4': '#BDBDBD',
      },
      fontFamily: {
        rubik: 'Rubik, sans-serif'
      }
    }
  },
  plugins: [FluidType]
};
