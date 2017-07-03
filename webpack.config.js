const path = require('path');
const aliasConfig = require('./webpackAlias.config.js');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'src/public/generated'),
    publicPath: "/src/public/",
    filename: 'bundle.js'
  },
  resolve: {
    alias: aliasConfig,
    extensions: ['.js', '.jsx']
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
