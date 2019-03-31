import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleancss from 'gulp-clean-css';
import plumber from 'gulp-plumber';

/**
 * SCSS -> CSS
 */
export function sass() {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(cleancss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
}
