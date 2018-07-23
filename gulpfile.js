const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const minify = require('gulp-minify');
const replace = require('gulp-replace');
const bump = require('gulp-bump');
const shell = require('gulp-shell')
const p = require('./package.json')
const watch = require('gulp-watch');
const babel = require('gulp-babel');

gulp.task('clean', function () {
	return del([
		'build',
	]);
});

gulp.task('bump', function(){
	return gulp.src('./package.json')
		.pipe(bump({type:'patch'}))
		.pipe(gulp.dest('./'));
});



/* global gulp */
gulp.task('copy', function () {
	return gulp
		.src(['package.json', 'src/**/*.js'])
		.pipe(gulp.dest('build'));
});

/* global gulp */
gulp.task('copyPackage', function () {
	return gulp
		.src(['package.json', 'src/index.js'])
		.pipe(gulp.dest('build'));
});

/* global gulp */
gulp.task('copyStatic', function () {
	return gulp
		.src(['static/index.html', 'static/manifest.json', 'static/favicon.ico'])
		.pipe(gulp.dest('build'));
});

gulp.task('babel', function () {
    return  gulp.src(['src/**/*.js', '!src/components/**/*.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('build'))
});

// 	'parse deploy',
gulp.task('server', shell.task(['nodemon index.js',], {cwd: '_server/'}))
gulp.task('pull', shell.task(['git add . && git commit -am "auto gulp commit" && git pull',], {cwd: 'build/'}))
// gulp.task('publish', shell.task(['npm publish'], {cwd: 'build/'}))
gulp.task('push', shell.task([`git add . && git commit -am "auto gulp commit" && git push origin master`]));
gulp.task('domino', shell.task([`domino`]));

/* global gulp */
gulp.task('copy', function () {
	return gulp
		.src(['src/**/*'])
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);

gulp.task('set-dev-node-env', function() {
	return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
	return process.env.NODE_ENV = 'production';
});

gulp.task('deploy', ['set-prod-node-env'],function(callback) {
	runSequence(
        ['clean'],
        ['copy', 'copyPackage', 'copyStatic'],
		'domino',
		// 'babel',
		// 'copy-web',
		callback);
});


gulp.task('push',function(callback) {
	runSequence(
        'pull',
        'push',
		callback);
});

gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event

    gulp.run('server');

    watch('_server/**/*', function () {
        gulp.run('server');
    });

    return watch('src/**/*.js', function () {
    	gulp.run('deploy');
    });
});


gulp.task('default', ['deploy']);