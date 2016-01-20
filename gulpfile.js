var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var filesize = require('gulp-filesize');
var browserSync = require('browser-sync').create();

gulp.task('clean', function() {
	return gulp.src('build', {read: 'false'})
		.pipe(clean());
});

gulp.task('concat', function() {
	return gulp.src('app/scripts/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('build/scripts'))
		.pipe(filesize())
		.pipe(uglify())
		.pipe(rename('main-min.js'))
		.pipe(gulp.dest('build/scripts'))
		.pipe(filesize())
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});



/*
gulp.task('watch', function() {
	gulp.watch('app/scripts/*.js', ['concat']);
});
*/