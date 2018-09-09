/* ======================================================

    Require

====================================================== */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var htmlhint = require("gulp-htmlhint");
var csslint = require('gulp-csslint');
var reload = browserSync.reload;

/* ======================================================

    Load tasks

====================================================== */
gulp.task('sass', function(){
    gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
        style : 'expanded' // Nested・Expanded・Compact・Compressed
    }))
    .pipe(gulp.dest('./common/css'));
});

gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch(['**/*.html', '**/*.css', '**/*.js'], reload);
});

gulp.task('browserSync', function() {
    browserSync({
        open: true,
        port: 80,
        proxy: 'http://cms-tpl/',
        notify: false
    });
});

gulp.task('html', function() {
    gulp.src('**/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
});

gulp.task('css', function() {
    gulp.src('./common/css/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter());
});

/* ======================================================

    Default tasks

====================================================== */
gulp.task('default', ['sass', 'watch', 'browserSync', 'html', 'css'], function() {

});