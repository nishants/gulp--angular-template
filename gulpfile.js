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
      './pages/index/loader.html',
      './pages/index/after.html'
    ],

    appJsComponents = [
      "./app/init.js",
      "./app/**/*.js"
    ],

    defaultTasks = [
      'clean',
      'assemble-css',
      'assemble-html',
      'assemble-app-js',
      'run'
    ],

    cleanupFiles = [
      'index.html',
      'app.css',
      'app.js'
    ];

gulp.task('clean', function () {
  del(cleanupFiles);
});

gulp.task('run', shell.task([
  'node runner.js'
]));

gulp.task('assemble-css', function () {
  return gulp.src(appCssComponents)
      .pipe(concat('app.css'))
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
