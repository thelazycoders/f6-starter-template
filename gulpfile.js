var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var concat = require('gulp-concat');  
var uglify = require('gulp-uglify'); 

var sassPaths = [
  'src/bower_components/normalize.scss/sass',
  'src/bower_components/foundation-sites/scss',
  'src/bower_components/motion-ui/src'
];


gulp.task('sass', function() {
  return gulp.src('src/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('app/assets/css'));
});

/*concanet n minify js files*/
var jsFiles = [
    'src/bower_components/jquery/dist/jquery.js',
    'src/bower_components/what-input/dist/what-input.js',
    'src/js/app.js'
];

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/assets/js'));
});
gulp.task('default', ['sass'], function() {
  gulp.watch(['assets/scss/**/*.scss', 'bower_components/foundation-sites/dist/js/**/*.js'], ['sass']);
});
