"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles(cb) {
    return gulp.src("src/styles/styles.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/styles"));
}

exports.sass = buildStyles;

exports.watch = function() {
    gulp.watch("src/styles/*.scss", buildStyles);
}