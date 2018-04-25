import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('compile', () => {
    return gulp
        .src(['src/dummy.js'])
        .pipe(babel({ presets: ['env'] }))
        .pipe(rename('dummy.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', ['compile'], () => {
    return gulp
        .src('dist/dummy.js')
        .pipe(uglify())
        .pipe(rename('dummy.min.js'))
        .pipe(gulp.dest('dist'));
})

gulp.task('watch', () => {
    gulp.watch(['./src/dummy.js'], ['compile', 'uglify']);
});

gulp.task('default', ['compile', 'uglify']);
