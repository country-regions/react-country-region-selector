const gulp = require('gulp'),
      rename = require('gulp-rename'),
      _ = require('underscore'),
      template = require('gulp-template'),
      runSequence = require('run-sequence'),
      initGulpTasks = require('react-component-gulp-tasks');

const pkg = JSON.parse(require('fs').readFileSync('./package.json'));
const countriesJSON = JSON.parse(require('fs').readFileSync('./node_modules/country-region-data/data.json'));


gulp.task('customizeSourceData', function () {
  function minifyJSON (json) {
    var js = [];
    json.forEach(function (countryData) {
      var pairs = [];
      countryData.regions.forEach(function (info) {
        if (_.has(info, 'shortCode')) {
          pairs.push(info.name + '~' + info.shortCode);
        } else {
          pairs.push(info.name);
        }
      });
      var regionListStr = pairs.join('|');
      js.push([
        countryData.countryName,
        countryData.countryShortCode,
        regionListStr
      ]);
    });
    return js;
  }

  gulp.src('src/templates/source-data.js')
    .pipe(template({ __DATA__: JSON.stringify(minifyJSON(countriesJSON)) }))
    .pipe(gulp.dest('src'))
});


var taskConfig = {
  component: {
    name: 'rcrs',
    src: 'src',
    dist: 'dist',
    dependencies: [
      'react',
      'react-dom',
      'underscore'
    ],
    pkgName: 'rcrs'
  },

  example: {
    src: 'examples/src/',
    dist: 'examples/dist',
    standalone: true,
    dependencies: [
      'react',
      'react-dom'
    ],
    files: [
      'index.html'
    ],
    scripts: [
      'examples.js'
    ]
  }
};


gulp.task('default', function () {
  runSequence(['customizeSourceData', 'build'], function () {
    console.log('Done.');
  });
});

initGulpTasks(gulp, taskConfig);
