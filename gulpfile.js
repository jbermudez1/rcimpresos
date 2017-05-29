var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var minify = require('gulp-minify');

function compile(watch) {
  var bundler = watchify(
    browserify('./src/index.js', { debug: true })
    .transform(babel.configure({presets: ["es2015"]})));
  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/js'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('compress', function() {
  gulp.src('./public/js/index.js')
    .pipe(minify({
        ext:{
            // src:'-debug.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);