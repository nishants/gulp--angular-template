var gulp = require('gulp'),
    concat = require('gulp-concat'),
    appCssComponents = [
      './style/loader.css',
      './style/properties.css'
    ],

    indexHtmlComponents = [
      './pages/index/before.html',
      './pages/index/app.html',
      './pages/index/loader.html',
      './pages/index/after.html'],

    createAppCss = function () {
      return gulp.src(appCssComponents)
          .pipe(concat('app.css'))
          .pipe(gulp.dest('./style'));
    },

    createIndexHtml = function () {
      return gulp.src(indexHtmlComponents)
          .pipe(concat('index.html'))
          .pipe(gulp.dest('./'));
    };

gulp.task('default', function () {
  createIndexHtml();
  createAppCss();
});
