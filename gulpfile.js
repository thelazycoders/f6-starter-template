var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var concat = require('gulp-concat');  
var uglify = require('gulp-uglify'); 

var sassPaths = [
  'src/bower_components/normalize.scss/sass',
  'src/bower_components/foundation-sites/scss',
  'src/bower_components/motion-ui/src',
  'src/bower_components/font-awesome/scss'
];


gulp.task('styles', function() {
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
    
    /*--- foundation core file ---*/
    'src/bower_components/foundation-sites/dist/js/plugins/foundation.core.js',
    
    /*--- foundation util files ---*/
    'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.keyboard.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.box.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.motion.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.nest.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.util.triggers.js',
    
    /*--- foundation plugins ---*/
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.abide.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.accordion.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.accordionMenu.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.drilldown.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.dropdown.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.equalizer.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.interchange.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.magellan.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.offcanvas.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.orbit.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.reveal.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.slider.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.sticky.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.tabs.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.toggler.js',
    //'src/bower_components/foundation-sites/dist/js/plugins/foundation.tooltip.js',

    //All js files from src/js directory
    'src/js/*.js'
];

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/assets/js'));
});

// Run styles, site-js and foundation-js
gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

//watch tasks
gulp.task('watch', ['styles'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['styles']);
  gulp.watch(['src/js/*.js', 'bower_components/foundation-sites/dist/js/**/*.js'], ['scripts']);
});
gulp.task('sass', ['styles'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['styles']);
});
gulp.task('js', ['scripts'], function() {
  gulp.watch(['src/js/*.js', 'bower_components/foundation-sites/dist/js/**/*.js'], ['scripts']);
});