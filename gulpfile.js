const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');

gulp.task('css', async function () {
    return gulp.src('components/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});