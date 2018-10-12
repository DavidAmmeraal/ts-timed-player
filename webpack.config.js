const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

const mergeConfig = env === 'production' ? require('./webpack.production') : require('./webpack.development');

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const src = path.resolve(__dirname, 'src');

module.exports = mergeConfig({
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
        loader: 'babel-loader!ts-loader'
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
      'util': path.resolve(src, 'util'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/build'),
  },
  mode: env,
  plugins: [
    htmlWebpackPlugin,
  ]
});
