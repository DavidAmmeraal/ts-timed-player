const webpack = require('webpack');

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = (base) => ({
  ...base,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'source-map',
  plugins: [
    ...base.plugins,
    definePlugin,
    new BundleAnalyzerPlugin()
  ]
});