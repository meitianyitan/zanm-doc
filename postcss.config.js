module.exports = {
  plugins: {
    'postcss-import': {},
    'precss': {},
    'autoprefixer': {
      browsers: [
        '> 1%',
        'last 2 versions',
        'not ie <= 10'
      ]
    }
  }
};
