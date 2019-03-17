const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
	return gulp
		.src('./assets/scss/doc.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./doc/assets/css/'))
})
