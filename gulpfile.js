var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jsHtmlComponents = [

    ],
    indexHtmlComponents = [
      './pages/index/before.html',
      './pages/index/app.html',
      './pages/index/after.html'];

gulp.task('default', function () {
  return gulp.src(indexHtmlComponents)
      .pipe(concat('index.html'))
      .pipe(gulp.dest('./'));
});
