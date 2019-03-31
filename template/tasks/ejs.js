import gulp from 'gulp';
import gulpEjs from 'gulp-ejs';
import gulpPrettier from 'gulp-prettier';

const data = require('../src/template/data.json')

/**
 * EJS -> HTML
 */
export function ejs() {
  return gulp
    .src([
      'src/template/**/*.ejs',
      '!src/template/**/_*.ejs'
    ])
    .pipe(gulpEjs(data, {}, { ext: '.html' }))
    .pipe(gulpPrettier())
    .pipe(gulp.dest('dist'));
}
