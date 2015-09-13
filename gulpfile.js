var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var bower = require('gulp-bower');
var extend = require('extend');


gulp.task('bower', function() {
  return bower({ directory: 'assets/plugins'})
});

gulp.task('default', function() {
  return gulp.src('./src/app.js')
    .pipe(webpackStream( require('./webpack.config.js') ))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  return gulp.src('./src/app.js')
      .pipe(webpackStream( extend(require('./webpack.config.js'), {watch: true}) ))
      .pipe(gulp.dest('.'));
});
