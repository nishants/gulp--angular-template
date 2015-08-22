var gulp = require('gulp'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),

    appCssComponents = [
      './style/loader.css',
      './style/properties.css'
    ],

    indexHtmlComponents = [
      './pages/index/before.html',
      './pages/index/app.html',
      './pages/index/loader.html',
      './pages/index/after.html'],

    defaultTasks = ["compile-css", "compile-html", "run",];

gulp.task('run', shell.task([
  'node runner.js'
]));

gulp.task('compile-css', function () {
  return gulp.src(appCssComponents)
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./style'));
});

gulp.task('compile-html', function () {
  return gulp.src(indexHtmlComponents)
      .pipe(concat('index.html'))
      .pipe(gulp.dest('./'));
});

gulp.task('default', defaultTasks);
