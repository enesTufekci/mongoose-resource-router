import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';

const plugins = gulpLoadPlugins();

const paths = {
  js: ['./**/*.js', '!lib/**', '!node_modules/**', '!coverage/**'],
  nonJs: ['./package.json', './.gitignore', './.env'],
  tests: './server/tests/*.js'
};

// Clean up lib and coverage directory
gulp.task('clean', () =>
  del.sync(['lib/**', 'lib/.*', 'coverage/**', '!lib', '!coverage'])
);

// Copy non-js files to lib
gulp.task('copy', () =>
  gulp.src(paths.nonJs)
    .pipe(plugins.newer('lib'))
    .pipe(gulp.dest('lib'))
);

// Compile ES6 to ES5 and copy to lib
gulp.task('babel', () =>
  gulp.src([...paths.js, '!gulpfile.babel.js'], { base: '.' })
    .pipe(plugins.newer('lib'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot(file) {
        return path.relative(file.path, __dirname);
      }
    }))
    .pipe(gulp.dest('lib'))
);

// Start server with restart on file changes
gulp.task('nodemon', ['copy', 'babel'], () =>
  plugins.nodemon({
    script: path.join('lib', 'index.js'),
    ext: 'js',
    ignore: ['node_modules/**/*.js', 'lib/**/*.js'],
    tasks: ['copy', 'babel']
  })
);

// gulp serve for development
gulp.task('serve', ['clean'], () => runSequence('nodemon'));

// default task: clean lib, compile js files and copy non-js files.
gulp.task('default', ['clean'], () => {
  runSequence(
    ['copy', 'babel']
  );
});
