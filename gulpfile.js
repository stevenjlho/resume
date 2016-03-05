var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    callback();
  });
});

