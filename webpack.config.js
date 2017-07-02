const path = require('path');

module.exports = {
  entry: './webpack-entry',
  output: {
    filename: './public/generated/webpack-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
