var gulp = require('gulp'); //Carga libreria gulp
var gulpsass = require('gulp-sass');
var gulpJade = require('gulp-jade');


gulp.task('compila_sass', function () {
  return gulp.src('./sass/main.scss') //Busca tu archivo scss
    .pipe(gulpsass()) //Llama a variable
    .pipe(gulp.dest('./css')); //Crea css
});

gulp.task('compila_jade', function () {
  return gulp.src('./jade/index.jade') //Busca tu archivo scss
    .pipe(gulpJade()) //Llama a variable
    .pipe(gulp.dest('./public')); //Crea css
});

gulp.task('vigila_sass',function(){
	  return gulp.watch('./sass/main.scss', ['compila_sass']); 
 });
gulp.task('vigila_jade', function () {
  return gulp.watch('./jade/index.jade', ['compila_jade'])
    
});
gulp.task ('default', ['vigila_jade','vigila_sass'])