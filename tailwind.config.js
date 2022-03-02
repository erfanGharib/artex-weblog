module.exports = {
  purge: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
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
        headLine:'#222',
        secondary: '#b1b1b1',
        bg: '#f7f7f7'
      }

    },
  },
  plugins: [],
}
