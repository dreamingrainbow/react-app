const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    client: {
      overlay: false,
    },
    allowedHosts: ['localhost'],
  },
  optimization: {
    minimize: false,
  },
}); 