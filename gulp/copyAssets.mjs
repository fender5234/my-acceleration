import {isDev, dist} from './constants.js';
import gulp from 'gulp';

const SOURCES = ['source/**.html', 'source/fonts/**', 'source/img/**', 'source/favicon/**'];
const IMAGE_SOURCES = ['source/img/**/*.{png,jpg,webp}'];
const PP_SOURCES = 'source/pixelperfect/**/*.{png,jpg,webp}';
if (isDev) {
  SOURCES.push(PP_SOURCES);
  IMAGE_SOURCES.push(PP_SOURCES);
}

const copySvg = () => gulp.src('source/img/**/*.svg', {base: 'source'}).pipe(gulp.dest(dist));

const copyImages = () => gulp.src(IMAGE_SOURCES, {base: 'source'}).pipe(gulp.dest(dist));

const copy = () =>
  gulp
    .src(SOURCES, {
      base: 'source',
    })
    .pipe(gulp.dest(dist));

export {copy, copyImages, copySvg};
