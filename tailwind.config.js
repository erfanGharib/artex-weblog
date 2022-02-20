module.exports = {
  purge: [
    './template/blog/*.html',
    './src/components/*.html',
    './public/*.html'
  ],
  content: [],
  theme: {
    extend: {
      width: {
        '12/13':'95%'
      }
    },
  },
  plugins: [],
}
