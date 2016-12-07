import gulp       from 'gulp';
import babel      from 'gulp-babel';
import concat     from 'gulp-concat';
import uglify     from 'gulp-uglify';
import mocha      from 'gulp-mocha';
import sourcemaps from 'gulp-sourcemaps';
import plumber    from 'gulp-plumber';

gulp.task( 'test', () => {

    return gulp.src( './test/bootstrap.js' )
               .pipe( plumber() )
               .pipe( mocha( { reporter: 'spec' } ) );

} );

gulp.task( 'compile', () => {

    return gulp.src( [ './src/**/*.js' ] )
               .pipe( plumber() )
               .pipe( babel({
                   presets: [ 'es2015' ]
               }) )
               .pipe( concat( 'dummy.min.js' ) )
               .pipe( sourcemaps.init() )
            //    .pipe( uglify( {
            //         compress: {
            //             negate_iife: false // jshint ignore:line
            //         },
            //         outSourceMaps: true
            //     } ) )
               .pipe( sourcemaps.write( './' ) )
               .pipe( gulp.dest( './dist' ) );

} );

gulp.task( 'watch', () => {

    gulp.watch( [ './src/**/*.*', './tests/**/*.*' ], [ 'compile', 'test' ] );

} );

gulp.task( 'default', [ 'compile', 'test' ] );
