var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
var connect = require('gulp-connect');


//default, gulp concatCss, gulp cleanCss
gulp.task('default', function () {
  return gulp.src('public/*css/*.css')
  .pipe(concatCss("bundle.css"))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('app/'))
  .pipe(connect.reload());
});

//jsModified, gulp concat, gulp minify
gulp.task('jsModified', function() {
  return gulp.src('public/*js/*.js')
    .pipe(concat('all.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/'));
});

//gulp server, gulp livereload
//use: livereload