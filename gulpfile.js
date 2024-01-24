'use strict';

const gulp = require('gulp');
// const del = require('del');
const path = require('path');
const through2 = require('through2');

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function (callback) {
        var task = require(path).call(this, options);
        return task(callback);
    });
}

// iterate folders recursively

// find translation source file (en)

// iterate all other file strings and compare with source

// if string exists -> do nothing

// if no string -> add to file and mark as untranslated and put to translation pipe or not - based on config


gulp.task('check-json-lines-cat', function () {
    return gulp.src('catalogs/**/*.json') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-int', function () {
    return gulp.src('interfaces/**/*.json') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-calc', function () {
    return gulp.src('irricalc/**/*.json') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-admin', function () {
    return gulp.src('irrisadmin/**/*.json') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-seller', function () {
    return gulp.src('irriseller/**/*.json') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-price', function () {
    return gulp.src('irrisprice/**/*.json') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-planner', function () {
    return gulp.src('planner/**/*.js') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

gulp.task('check-json-lines-planner_emb', function () {
    return gulp.src('planner_embedded/**/*.js') // Adjust the path to your JSON files
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const lines = file.contents.toString().split('\n').length;
                console.log(`${file.relative}: ${lines} lines`);
            }
            cb(null, file);
        }));
});

// gulp.task('buildTest', gulp.series());
