/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '72px',
      },
    },
    colors: {
      black: '#000',
      write: '#FFF',

      gray: {
        1: '#161618',
        2: '#1c1c1f',
        3: '#232326',
        4: '#28282c',
        5: '#2e2e32',
        6: '#34343a',
        7: '#3e3e44',
        8: '#504f57',
        9: '#706f78',
        10: '#7e7d86',
        11: '#a09fa6',
        12: '#ededef',
      },

      primary: {
        1: '#1d1418',
        2: '#27141c',
        3: '#3c1827',
        4: '#481a2d',
        5: '#541b33',
        6: '#641d3b',
        7: '#801d45',
        8: '#ae1955',
        9: '#e93d82',
        10: '#f04f88',
        11: '#f76190',
        12: '#feecf4',
      },

      secondary: {
        1: '#131620',
        2: '#15192d',
        3: '#192140',
        4: '#1c274f',
        5: '#1f2c5c',
        6: '#22346e',
        7: '#273e89',
        8: '#2f4eb2',
        9: '#3e63dd',
        10: '#5373e7',
        11: '#849dff',
        12: '#eef1fd',
      },
    },
    fontFamily: {
      sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
    },
    container: {
      center: 'true',
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [],
};
