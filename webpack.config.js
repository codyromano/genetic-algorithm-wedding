const path = require('path');
const aliasConfig = require('./webpackAlias.config.js');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'src/public/generated'),
    publicPath: '/src/public/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: aliasConfig,
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'genetic_[local]_[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.js|\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2017']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
