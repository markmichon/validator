const path = require('path');
const webpack = require('webpack');
const DashBoardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
// Todo: Figure out extract text to pull sass into it's own file.
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const addPlugin = (add, plugin) => add ? plugin: undefined
const ifProd = plugin => addPlugin(env === 'production', plugin)
const removeEmpty = array => array.filter(i => !!i)

let config = {
  // context sets where to look. Allows for the rest of references to exclude
  // the /src part of the path.
  context: path.resolve(__dirname, 'src'),
  devtool: env === 'production' ? 'source-map' : 'eval',
  bail: env === 'production',
  entry: {
    // by setting a key, we can refer to it later
    app: './index.js',
  },
  output: {
    // [name] refers to the key name above "app"
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
    ]
  },
  plugins: removeEmpty(
    [
      new DashBoardPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })),
      ifProd(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env),
        },
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        }
      }))
    ]
  )
}

module.exports = config
