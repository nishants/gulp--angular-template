var gulp = require('gulp'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    del = require('del'),

    homeCssComponents = [
      './style/loader.css',
      './style/properties.css'
    ],

    indexHtmlComponents = [
      './index/before.html',
      './index/loader.html',
      './index/after.html'
    ],

    appHtmlComponents = [
      "./app/**/*.html"
    ],

    appCSSComponents = [
      "./app/**/*.css"
    ],

    appJsComponents = [
      "./app/init.js",
      "./app/**/*.js"
    ],

    defaultTasks = [
      'clean',
      'assemble-css',
      'assemble-html',
      'assemble-app-css',
      'assemble-app-html',
      'assemble-app-js',
      'run'
    ],

    cleanupFiles = [
      'index.html',
      'home.css',
      'app.js',
      'app.html',
      'app.css',
    ];

gulp.task('clean', function () {
  del(cleanupFiles);
});

gulp.task('run', shell.task([
  'node runner.js'
]));

gulp.task('assemble-app-css', function () {
  return gulp.src(appCSSComponents)
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./'));
});

gulp.task('assemble-app-html', function () {
  return gulp.src(appHtmlComponents)
      .pipe(concat('app.html'))
      .pipe(gulp.dest('./'));
});

gulp.task('assemble-css', function () {
  return gulp.src(homeCssComponents)
      .pipe(concat('home.css'))
      .pipe(gulp.dest('./'));
});

gulp.task('assemble-html', function () {
  return gulp.src(indexHtmlComponents)
      .pipe(concat('index.html'))
      .pipe(gulp.dest('./'));
});

gulp.task('assemble-app-js', function () {
  return gulp.src(appJsComponents)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./'));
});

gulp.task('default', defaultTasks);
