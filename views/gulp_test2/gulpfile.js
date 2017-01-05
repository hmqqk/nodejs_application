/**
 * Created by liuhong on 2016/12/1.
 */
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('test2', function() {
    gulp.src('css/footer.css')
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen(); //要在这里调用listen()方法
    gulp.watch('css/footer.css', ['test2']);
});