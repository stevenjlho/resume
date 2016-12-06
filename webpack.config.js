var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./config.json');


module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    publicPath: './assets/',
    path: path.resolve(__dirname, 'assets'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline'
              }
            }
          ]
        })
      },
      {
        test: /\.pug$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          // apply multiple loaders and options
          {
            loader: "pug-loader",
            options: {
              "global": config
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: path.resolve(__dirname, 'index.html'),
      template: path.resolve(__dirname, 'src', 'app.pug'),
      config: config
    }),
    new ExtractTextPlugin('app.css')
  ]
};
