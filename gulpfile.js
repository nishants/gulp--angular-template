var gulp = require('gulp'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    del = require('del'),

    appCssComponents = [
      './style/loader.css',
      './style/properties.css'
    ],

    indexHtmlComponents = [
      './pages/index/before.html',
      './pages/index/app.html',
      './pages/index/loader.html',
      './pages/index/after.html'],

    defaultTasks = [
      'clean', 
      'assemble-css',
      'assemble-html',
      'run'
    ];

gulp.task('clean', function () {
  del([
    'index.html',
    'style/app.css'
  ]);
});

gulp.task('run', shell.task([
  'node runner.js'
]));

gulp.task('assemble-css', function () {
  return gulp.src(appCssComponents)
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./style'));
});

gulp.task('assemble-html', function () {
  return gulp.src(indexHtmlComponents)
      .pipe(concat('index.html'))
      .pipe(gulp.dest('./'));
});

gulp.task('default', defaultTasks);
