var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade');


gulp.task('sass', function(){
	gulp.src('dev/sass/*.scss*')
		.pipe(sass({
			outputStyle: 'compressed'
			}))
		.pipe(gulp.dest('./css'));
});

gulp.task('jade', function(){
	gulp.src('dev/jade/*.jade')
		.pipe(jade({
			pretty:true
			}))
		.pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
	gulp.watch('dev/sass/*.scss', ['sass']);
	gulp.watch('dev/jade/*.jade', ['jade']);
	})