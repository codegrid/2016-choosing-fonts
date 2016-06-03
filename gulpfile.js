var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('server', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: './src'
    },
    ghostMode: false
  });

  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
})

gulp.task('sass', function(){
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);
