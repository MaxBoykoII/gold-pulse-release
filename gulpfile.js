const gulp = require('gulp');
const del = require('del');
const $ = require('gulp-load-plugins')({
    lazy: true
});
const tscConfig = require('./develop/tsconfig.json');
const runSequence = require('run-sequence');

/*
 * Tasks to clean aot and non-aot builds
 */

gulp.task('clean:client', () => {
    return del('./client');
});

/*
 * Tasks to compile scss to css for  aot and non-aot builds
 */

gulp.task('compile:scss', () => {
    return gulp.src(['./develop/app/scss/**/*.scss', '!./develop/app/scss/config/**/*.scss'])
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '>1%']
        }))
        .pipe(gulp.dest('./client/css'));
});

/*
 * Tasks to build libraries for aot and non-aot builds
 */

gulp.task('lib:client', () => {
    return gulp.src(['./develop/node_modules/**/*', './develop/bower_components/**/*'])
        .pipe(gulp.dest('./client/lib'));
});

/*
 * Copy tasks for aot and non-aot builds
 */

gulp.task('copy:client', () => {
    return gulp.src(['./develop/app/index.html', './develop/app/systemjs.config.js'])
        .pipe(gulp.dest('./client'));
});

gulp.task('templates:client', () => {
    return gulp.src('./develop/app/components/templates/**/*.html')
        .pipe(gulp.dest('./client/templates'));
});

/*
 * Compile ts for non-aot build
 */

gulp.task('compile:ts', () => {
    return gulp.src(['./develop/app/**/*.ts', './develop/typings/index.d.ts'])
        .pipe($.typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('./client/dist'));
});

/*
 * Build task for aot and non-aot builds
 */

gulp.task('build:client', () => {
    runSequence('clean:client', ['compile:scss', 'lib:client', 'copy:client', 'templates:client', 'compile:ts']);
});
