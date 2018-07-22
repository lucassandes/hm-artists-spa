var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});
 

//Watch task
gulp.task('watch-sass',function() {
    gulp.watch('src/scss/**/*.scss',['styles']);
}); 