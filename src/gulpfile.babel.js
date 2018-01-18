import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import prettier from 'gulp-prettier';

gulp.task('compile', () => {
    return gulp
        .src([ 'src/**/*.js' ])
        .pipe(babel({ presets: [ 'env' ] }))
        .pipe(concat('dummy.min.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify({ compress: { negate_iife: false }, outSourceMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch([ './src/**/*.*' ], [ 'pretty', 'compile' ]);
});

gulp.task('pretty', () => {
    return gulp
        .src([ 'src/**/*.js', 'gulpfile.babel.js' ])
        .pipe(
            prettier({
                'singleQuote': true,
                'tabWidth': 4,
                'arrowParens': 'always',
                'trailingComma': 'none',
                'semi': true,
            }),
        )
        .pipe(gulp.dest('src'));
});

gulp.task('default', [ 'compile', 'pretty' ]);
