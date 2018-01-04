var gulp = require('gulp');
var browserSync = require('browser-sync');
var webserver = require('gulp-webserver');


gulp.task('browser-sync', function() {
	broeserSync.init([], {

	});
});

//Next we set up a new task called webserver
gulp.task('webserver', function() {
	return gulp.src('./') //Here we point to the right directory.
	.pipe(webserver({ //Here we pipe and call webserver passing an object.
		port: '4000', //Here we define the port where the server will run.
		livereload: true, //Here we set livereload to true.
		open: true //Here we set open to true so the server opens the dev directory in the browser.
	}));
});

gulp.task('default', ['webserver']);