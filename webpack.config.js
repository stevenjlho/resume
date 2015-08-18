var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
  output: {
    filename: './assets/app.js'
	},
  module: {
    loaders: [
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
              'css?sourceMap'
            )
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
              'css?sourceMap!' +
              'sass?sourceMap'
            )
        },
        {
            test: /\.md$/,
            loader: 'html!markdown'
        }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Resume',
    }),
    new ExtractTextPlugin("./assets/app.css"),
    new BowerWebpackPlugin({
      modulesDirectories: ["./assets/plugins"],
      manifestFiles:      "bower.json",
      searchResolveModulesDirectories: true
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  devtool: 'source-map',
  watch: true
}
