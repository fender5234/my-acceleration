import {dist} from './gulp/constants.js';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import compileLayouts from './gulp/compileLayouts.mjs';
import compileStyles from './gulp/compileStyles.mjs';
import { copy, copyImages, copySvg } from './gulp/copyAssets.mjs';
import js from './gulp/compileScripts.mjs';
import {
  svgo,
  sprite,
  createWebp,
  optimizeImages
} from './gulp/optimizeImages.mjs';

const server = browserSync.create();
const streamStyles = () => compileStyles().pipe(server.stream());

const clean = () => del(dist);

const syncServer = () => {
  server.init({
    server: `${dist}/`,
    index: 'sitemap.html',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/**/*.html', gulp.series(copy, refresh));
  gulp.watch(
    ['source/layouts/**/*.twig', 'source/data/**/*.js'],
    gulp.series(compileLayouts, refresh)
  );
  gulp.watch('source/sass/**/*.{scss,sass}', streamStyles);
  gulp.watch('source/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(copySvg, sprite, refresh));
  gulp.watch(
    'source/img/**/*.{png,jpg,webp}',
    gulp.series(copyImages, refresh)
  );

  gulp.watch('source/favicon/**', gulp.series(copy, refresh));
  gulp.watch('source/video/**', gulp.series(copy, refresh));
  gulp.watch('source/downloads/**', gulp.series(copy, refresh));
  gulp.watch('source/*.php', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(
  clean,
  svgo,
  gulp.parallel(copy, compileLayouts, compileStyles, sprite, js)
);
const start = gulp.series(build, syncServer);

export { optimizeImages as imagemin, createWebp as webp, build, start };
