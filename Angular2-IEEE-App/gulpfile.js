var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');


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



///minify && autoprefix css

gulp.task('autoprefixer', () =>
    gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);

gulp.task('minify-css', function() {
  return gulp.src('css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '.min'
        }))

    .pipe(gulp.dest('css/min'));
});

gulp.task("min-auto",['autoprefixer','minify-css']);

/// export to dist block

var distPath='../dist';

gulp.task('clean', function () {
  return del([
    distPath  
  ]);
});


gulp.task("scripts", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
             'ng2-inline-svg/lib/**',
             'toastr/**',
             'requirejs/require.js',
             'angular2-masonry/**/',
             'masonry-layout/**/',
             'angular2-infinite-scroll/**/'          
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest(distPath + "/node_modules/"));
});

gulp.task("style", () => {
    gulp.src([          
            'css/loading.css',
            'css/min/main.min.css',
            'css/main.css'        
    ]).pipe(gulp.dest(distPath + "/css"));
});

gulp.task("move-app", () => {
    gulp.src([
            'app/**/*.js',
             'app/**/*.js.map',
            'app/**/*.html'       
    ]).pipe(gulp.dest(distPath + "/app"));
});

gulp.task("move-common", () => {
    gulp.src(['index.html', 'systemjs.config.js'])
         .pipe(gulp.dest(distPath)),
    gulp.src('svg/**')      
        .pipe(gulp.dest(distPath + "/svg")),
    gulp.src('img/**')     
        .pipe(gulp.dest(distPath + "/img")),
    gulp.src('app/data/*.json')     
        .pipe(gulp.dest(distPath + "/app/data"))             
});

///export function

gulp.task("toDist",['scripts','move-app','style','move-common']);




