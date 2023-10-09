/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FFBA00',
        grey: '#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757557',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainyellow':
          'linear-gradient(81.66deg, #FDCC49 7.21%, #FFE900 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #6DD5ED 14.53%,  #24CBFF 69.36%, #2193B0 117.73%)',
      }),

      fontFamily: {
        playfair: ['Roboto', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        monoton: ['Monoton', 'cursive'],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
