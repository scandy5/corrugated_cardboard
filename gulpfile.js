var gulp		 = require('gulp');
var browserSync  = require('browser-sync');
var sass		 = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS 	 = require('gulp-concat-css');
var ftp 		 = require('gulp-ftp');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({
        	browsers: ['last 2 versions'],
        	cascade: false
        }))
        .pipe(concatCSS("style.css"))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

/*gulp.task('ftp', function(){
	return gulp.src('app/**')
	.pipe(ftp({
		host: 'website.com',
		user: 'johndoe' 
		pass: '1234'
		remotePath: ''
	}))
	.pipe(gutil.noop());
});*/
		
gulp.task('default', ['serve']);