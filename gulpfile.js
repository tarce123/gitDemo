'use strict'

//载入gulp包
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');

gulp.task("copy",function() {
	// body...

	gulp.src('project/index.html')
	.pipe(gulp.dest('dist/'));
});   

 
gulp.task("all",function(){
	/*gulp.watch('project/index.html',['copy']);*/

	gulp.watch('project/css/*.less',['style1']);
});


gulp.task('style1',function(){
	gulp.src('project/css/*.less')
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'))
});

