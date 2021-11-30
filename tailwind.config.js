module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["PT Sans"],
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
    }
  },
  plugins: [],
}
