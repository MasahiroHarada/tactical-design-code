import { parallel, series } from 'gulp';
import { serve } from './tasks/server';
import { sass } from './tasks/sass';
import { ejs } from './tasks/ejs';
import { babel } from './tasks/babel';
import { copyImages, copyFonts } from './tasks/copy';
import { clear } from './tasks/clear';
import { watchFiles } from './tasks/watch';

export const dev = series(
  clear,
  parallel(sass, ejs, babel, copyImages, copyFonts),
  serve,
  watchFiles
);

export const build = series(
  clear,
  parallel(sass, ejs, babel, copyImages, copyFonts)
);
