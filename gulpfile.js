var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
gulp.task('hello', function(){
    console.log('hello kedis');
});
gulp.task('sass', function () {
  return gulp.src('./assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
gulp.task('watch', function () {
  gulp.watch('./assets/sass/*.*ss', ['sass']);
});
gulp.task('connect', function() {
  connect.server({
    root: [__dirname], livereload: true, port: 3000
  });
});
gulp.task('default', ['connect', 'watch']);


