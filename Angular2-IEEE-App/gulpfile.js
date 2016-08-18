var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    tsProject.src()  
        .pipe(sourcemaps.init())           
        .pipe(ts(tsProject)).js 
        .pipe(sourcemaps.write('.'))        
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

gulp.task("watch",function () {
    gulp.watch('**/*.ts',["ts"]);
});

gulp.task("default",['ts','watch']);