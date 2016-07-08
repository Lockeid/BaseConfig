const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, 'src'),
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /.png|gif$/,
        loader: 'file-loader',
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};
