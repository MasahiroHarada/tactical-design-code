import gulp from 'gulp';
import gulpBabel from 'gulp-babel';

const config = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          ie: 11
        }
      }
    ]
  ]
};

/**
 * ES2015+ Transpile
 */
export function babel() {
  return gulp
    .src('src/js/**/*.js')
    .pipe(gulpBabel(config))
    .pipe(gulp.dest('dist/js'))
}
