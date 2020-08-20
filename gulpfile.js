// под папку Practice

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var autopre = require('gulp-autoprefixer');
var sourceMap = require('gulp-sourcemaps');

var browserSync = require('browser-sync').create();
const { series } = require('gulp');
const { parallel } = require('gulp');



function toCss(done){

    gulp.src('./Parallax/scss/**/*')
      .pipe(sourceMap.init())
      .pipe(sass({
          errorLogToConsole: true,
          outputStyle: 'compressed'
      }))
      .on('error', console.error.bind(console))
      .pipe(autopre({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe( rename({suffix: '.min'}))
      .pipe(sourceMap.write('./'))
      .pipe( gulp.dest('./Parallax/css') )
      .pipe(browserSync.stream());

    done();
}

function minjs(done) {
    gulp.src("./Parallax/js/*.js")
    .pipe(minify({
        ext: {
            min: '.min.js'
        },
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest("./Parallax/js"));
    done();
}

function browserStarts(done) {
    browserSync.init({
        server: {
            baseDir: "./Parallax/"
        },
        port: 3000
    });
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function print(done) {

  console.log("Hello, mr. Max. Nice to see you again!");
  done();
}


function watchFiles() {
    gulp.watch("./Parallax/scss/**/*.scss", toCss);
    gulp.watch("./Parallax/**/*.html", browserReload);
    gulp.watch("./Parallax/**/*.php", browserReload);
    gulp.watch("./Parallax/**/*.js", browserReload);
}

exports.default = parallel(print, watchFiles, browserStarts);
exports.watchS = watchFiles;
exports.start = browserStarts;
exports.minjs = minjs;