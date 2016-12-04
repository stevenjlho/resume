var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./config.json');


module.exports = {
  entry: __dirname + "/src/app.js",
  output: {
    publicPath: './assets/',
    path: __dirname + '/assets',
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
      filename: '../index.html',
      template: 'src/app.pug',
      config: config
    }),
    new ExtractTextPlugin('app.css')
  ]
};
