const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const deployConfig = require('./deploy-config');

// Get public path from deployment config
const publicPath = deployConfig.current.publicPath;

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

const copyPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: 'public/assets',
      to: 'assets',
      noErrorOnMissing: true
    }
  ]
});

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: publicPath,
    filename: 'js/[name].js',
  },
  plugins: [htmlPlugin, copyPlugin],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFiles: ['index.js', 'index.jsx'],
  },
}; 