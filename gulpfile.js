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

gulp.task('clean:public', () => {
    return del('./public');
});

gulp.task('clean:css', () => {
    return del('./develop/app/components/css');
});
/*
 * Tasks to compile scss to css for aot and non-aot builds
 */

gulp.task('client:scss', () => {
    return gulp.src(['./develop/app/scss/**/*.scss', '!./develop/app/scss/config/**/*.scss'])
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '>1%']
        }))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('public:scss', () => {
    return gulp.src(['./develop/app/scss/**/*.scss', '!./develop/app/scss/config/**/*.scss'])
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '>1%']
        }))
        .pipe(gulp.dest('./public/css'));
});
gulp.task('compile:component-scss', () => {
    return gulp.src(['./develop/app/scss/**/*.scss', '!./develop/app/scss/config/**/*.scss', '!./develop/app/scss/main.scss'])
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '>1%']
        }))
        .pipe(gulp.dest('./develop/app/components/css'));
});

/*
 * Tasks to build libraries for aot and non-aot builds
 */

gulp.task('lib:client', () => {
    return gulp.src(['./develop/node_modules/**/*', './develop/bower_components/**/*'])
        .pipe(gulp.dest('./client/lib'));
});

gulp.task('lib:public', () => {
    return gulp.src(['./develop/node_modules/**/*', './develop/bower_components/**/*'])
        .pipe(gulp.dest('./public/lib'));
});

/*
 * Copy tasks for aot and non-aot builds
 */

gulp.task('copy:client', () => {
    return gulp.src(['./develop/app/index.html', './develop/app/systemjs.config.js'])
        .pipe(gulp.dest('./client'));
});

gulp.task('copy:public', () => {
    return gulp.src('./develop/app/index-aot.html')
        .pipe($.rename('index.html'))
        .pipe(gulp.dest('./public'));
});

gulp.task('templates:client', () => {
    return gulp.src('./develop/app/components/templates/**/*.html')
        .pipe(gulp.dest('./client/templates'));
});

gulp.task('templates:public', () => {
    return gulp.src('./develop/app/components/templates/**/*.html')
        .pipe(gulp.dest('./public/templates'));
});

gulp.task('copy:dist', () => {
    return gulp.src('./develop/dist/**/*')
        .pipe(gulp.dest('./public/dist'));
});

/*
 * Compile ts for non-aot build
 */

gulp.task('compile:ts', () => {
    return gulp.src(['./develop/app/**/*.ts', './develop/typings/index.d.ts', '!./develop/app/main-aot.ts'])
        .pipe($.typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('./client/dist'));
});

/*
 * Build task for aot and non-aot builds
 */

gulp.task('build:client', () => {
    runSequence('clean:client', ['client:scss', 'lib:client', 'copy:client', 'templates:client', 'compile:ts']);
});

// run before aot
gulp.task('pre-aot', () => {
    runSequence(['clean:public', 'clean:css'], ['public:scss', 'lib:public', 'templates:public', 'compile:component-scss', 'copy:public']);
});

// run after aot

gulp.task('post-aot', () => {});
