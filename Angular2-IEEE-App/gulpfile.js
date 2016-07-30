var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    tsProject.src()        
        .pipe(ts(tsProject)).js        
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

gulp.task("watch",function () {
    gulp.watch('**/*.ts',["ts"]);
});

gulp.task("default",['ts','watch']);