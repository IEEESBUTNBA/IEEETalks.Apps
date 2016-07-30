var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    tsProject.src()        
        .pipe(ts(tsProject)).js        
        .pipe(gulp.dest('app/**'));
});


gulp.task("default",['ts']);