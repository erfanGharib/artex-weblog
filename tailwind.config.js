module.exports = {
  purge: [
    './static/**/*.{html,js}',
    './templates/**/*.{html,js}',
  ],
  content: [],
  theme: {
    extend: {
      width: {
        '12/13':'95%'
      },
      minHeight: {
        64:'256px'
      },
      colors: {
        orange: '#FFC134',
        'dark-gray': '#212121',
        'light-gray': '#f8f8f8',
        headLine: '#222',
        secondary: '#b1b1b1',
        light: '#f7f7f7',
      }

    },
  },
  plugins: [],
}
