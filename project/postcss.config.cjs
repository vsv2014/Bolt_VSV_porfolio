module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: require('./tailwind.config.js'),
    autoprefixer: {},
  },
}
