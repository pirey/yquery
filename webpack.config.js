var path = require('path');

module.exports = {
  entry: {
    basic: './examples/basic/basic.js'
  },
  output: {
    filename: './dist/bundle-[name].js',
  }
};

