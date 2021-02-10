var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

 var paths = {
    sass: ['./scss/**/*.scss'],
};

gulp.task('sass', async function () {
  return gulp.src('./scss/style.scss')
    .pipe(watch('./scss/style.scss'))
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', async function () {
    return gulp.watch(paths.sass, gulp.series('sass'));
});


