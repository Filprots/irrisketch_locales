'use strict';

const gulp = require('gulp');
const del = require('del');
const path = require('path');

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





// gulp.task('buildTest', gulp.series());
