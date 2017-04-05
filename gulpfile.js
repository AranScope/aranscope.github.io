
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('html', function(){
  return gulp.src('templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('public'))
});

gulp.task('css', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', [ 'html', 'css' ]);

