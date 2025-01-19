/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-1400': {
          max: '1400px',
        },
        'max-1350': {
          max: '1350px',
        },
        'max-1300': {
          max: '1300px',
        },
        'max-1250': {
          max: '1250px',
        },
        'max-1200': {
          max: '1200px',
        },
        'max-1150': {
          max: '1150px',
        },
        'max-1100': {
          max: '1100px',
        },
        'max-1050': {
          max: '1050px',
        },
        'max-1000': {
          max: '1000px',
        },
        'max-950': {
          max: '950px',
        },
        'max-900': {
          max: '900px',
        },
        'max-850': {
          max: '850px',
        },
        'max-800': {
          max: '800px',
        },
        'max-750': {
          max: '750px',
        },
        'max-700': {
          max: '700px',
        },
        'max-650': {
          max: '650px',
        },
        'max-600': {
          max: '600px',
        },
        'max-550': {
          max: '550px',
        },
        'max-500': {
          max: '500px',
        },
        'max-450': {
          max: '450px',
        },
        'max-400': {
          max: '400px',
        },
      },
      colors: {
        purple: '#AD1FEA',
        blue: '#4661E6',
        darkBlue: '#373F68',
        mediumBlue: '#3A4374',
        mediumGrey: '#F2F4FF',
        lightGrey: '#F7F8FD',
        grey: '#647196',
        orange: '#F49F85',
        cyan: '#62BCFA',
        red: '#D73737',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
