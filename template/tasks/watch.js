import { watch, series } from 'gulp';
import { reload } from './server';
import { sass } from './sass';
import { ejs } from './ejs';
import { babel } from './babel'
import { copyImages, copyFonts } from './copy';

/**
 * ファイルの変更を監視
 */
export function watchFiles(cb) {
  watch('src/sass/**/**.scss', series(sass, reload));
  watch(['src/template/**/**.*'], series(ejs, reload));
  watch(['src/js/**/**.js'], series(babel, reload));
  watch(['src/images/**/*.*'], series(copyImages, reload));
  watch(['src/fonts/**/*.*'], series(copyFonts, reload));

  cb();
}
