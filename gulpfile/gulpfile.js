var gulp = require('gulp');
var nightwatch=require('gulp-nightwatch');
 

gulp.task('nightwatch',function(){
return gulp.src('nightwatch.js')
    .pipe(nightwatch({
	configFile:'node_modules/nightwatch/bin/nightwatch.json'
	}))


});


gulp.task('default',['nightwatch'],function(){});