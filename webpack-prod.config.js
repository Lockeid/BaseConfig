const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index',
  ],

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  externals: [
    {
      'react': 'React',
    },
  ],

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
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
