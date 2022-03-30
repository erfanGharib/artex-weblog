module.exports = {
  purge: [
    './static/**/*.{html,js}',
    './templates/**/*.{html,js}',
  ],
  content: [],
  theme: {
    extend: {
      width: {
        '12/13':'95%',
        30:'29%'
      },
      minHeight: {
        64: '256px',
        60: '15rem',
        105: '35rem',
        24: '6rem'
      },
      colors: {
        orange: '#FFC134',
        'dark-gray': '#212121',
        'light-gray': '#f8f8f8',
        headLine: '#222',
        secondary: '#b1b1b1',
        light: '#f7f7f7',
      },
      boxShadow: {
        cs: '0 15px 25px #22222260'
      }
    },
  },
  plugins: [],
}
