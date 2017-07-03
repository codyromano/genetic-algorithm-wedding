const path = require('path');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'src/public/generated'),
    publicPath: "/src/public/",
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'test': path.resolve(__dirname, 'test'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'validation': path.resolve(__dirname, 'src/utils/validation'),
      'components': path.resolve(__dirname, 'src/components'),
      'experiment': path.resolve(__dirname, 'src/experiment'),
      'genetic-operators': path.resolve(__dirname, 'src/experiment/genetic-operators'),
      'public': path.resolve(__dirname, 'src/public')
    },
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
