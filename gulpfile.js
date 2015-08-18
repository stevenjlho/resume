var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower({ directory: './assets/plugins'})
});



gulp.task('webpack', function() {
  return gulp.src('./src/app.js')
    .pipe(webpackStream( require('./webpack.config.js') ))
    .pipe(gulp.dest('.'));
});
