const path = require('path');
const webpack = require('webpack');
const DashBoardPlugin = require('webpack-dashboard/plugin');

// Todo: Figure out extract text to pull sass into it's own file.
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // context sets where to look. Allows for the rest of references to exclude
  // the /src part of the path.
  context: path.resolve(__dirname, 'src'),
  entry: {
    // by setting a key, we can refer to it later
    app: './index.js',
  },
  output: {
    // [name] refers to the key name above "app"
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
      // Javascript Loaders
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader' // expanded syntax as object with options
        }],
        exclude: '/node_modules/',
      },
      // CSS Loaders if css is imported into our JS files
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'], // shorter, default array syntax
      },
    ]
  },
  plugins: [
    new DashBoardPlugin()
  ]
};

module.exports = config;
