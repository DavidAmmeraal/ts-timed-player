const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const IgnoreNotFoundExportPlugin = require('./util/ignore-not-found-export-plugin.js');

const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1;

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  entry: ['react-hot-loader/patch', path.join(__dirname, '/src/index.tsx')],
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        use: 'prettier-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@services': path.resolve(src, 'services'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/build'),
  },
  mode: dev ? 'development' : 'production',
  optimization: !dev
    ? {
      minimize: true,
    }
    : {},
  plugins: dev
    ? [
      HTMLWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new IgnoreNotFoundExportPlugin(),
    ]
    : [HTMLWebpackPluginConfig, DefinePluginConfig],
};
