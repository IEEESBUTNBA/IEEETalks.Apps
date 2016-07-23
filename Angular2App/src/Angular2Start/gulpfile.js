/// <binding Clean='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'es6-shim/es6-shim.js',
            'es6-shim/es6-shim.map',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js',
            'toastr/toastr.js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap.css.map',
        'node_modules/toastr/build/toastr.min.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));

    gulp.src([
        'node_modules/bootstrap/fonts/*.*',        
    ]).pipe(gulp.dest('./wwwroot/libs/fonts'));
});

var tsProject = ts.createProject('app/tsconfig.json');
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "app/**/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('app/**/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);

