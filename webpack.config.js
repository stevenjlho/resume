var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: __dirname + "/src/app.js",
    output: {
        publicPath: './assets/',
        path: __dirname + '/assets',
        filename: 'app.js'
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
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Resume',
            filename: '../index.html'
        }),
        new ExtractTextPlugin('app.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
