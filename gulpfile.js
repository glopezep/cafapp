var gulp = require('gulp')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var rename = require('gulp-rename')
var watchify = require('watchify')

var config = {
	js: {
		entry: 'src/client/index.js',
		dest: 'public'
	}
}

function compile (watch) {
	var bundle = browserify(config.js.entry, { debug: true })

	if (watch) {
		bundle = watchify(bundle)
		bundle.on('update', function updateBundle () {
			console.log('Bundling...')
			rebundle()
		})
	}

	function rebundle () {
		bundle
			.transform(babel)
			.bundle()
			.on('error', function errorBundle (err) { console.log(err) })
			.pipe(source(config.js.entry))
			.pipe(rename('app.js'))
			.pipe(gulp.dest(config.js.dest))
	}
	rebundle()
}

gulp.task('build', function buildJS () {
	compile()
})

gulp.task('build:watch', function buildWatchJS () {
	compile(true)
})

gulp.task('default', ['build:watch'])
