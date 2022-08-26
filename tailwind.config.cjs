/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        'midnight-green': '#014E56',
        'jungle-green': '#004047',
        'state-green': '#012F34',
        'darkest-green': '#002529',
        'rapture-blue': '#79C8C7',
        'police-blue': '#2C6269',
        coral: '#F67E7E',
      },
    },
  },
  plugins: [],
};
