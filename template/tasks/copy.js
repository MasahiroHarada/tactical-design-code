import gulp from 'gulp'

// 画像とフォントは単純にコピー

export function copyImages() {
  return gulp
    .src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
}

export function copyFonts() {
  return gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
}
