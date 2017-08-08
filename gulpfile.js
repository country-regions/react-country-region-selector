const gulp = require('gulp'),
      gulpUtil = require('gulp-util'),
      rename = require('gulp-rename'),
      _ = require('underscore'),
      template = require('gulp-template'),
      runSequence = require('run-sequence'),
      initGulpTasks = require('react-component-gulp-tasks'),
      argv = require('yargs').argv;

// the country + region source data is from the country-region-data
const countriesJSON = JSON.parse(require('fs').readFileSync('./node_modules/country-region-data/data.json'));


// e.g. `gulp --countries="one,two,three"`
gulp.task('customBuild', function () {

  function filterCountries (js) {
    if (!_.has(argv, 'countries')) {
      return js;
    }
    let targetCountries = argv.countries.split(",");

    const filteredCountries = [];
    const found = [];
    _.each(js, (countryData) => {
      var countryShortCode = countryData[1];
      if (_.contains(targetCountries, countryShortCode)) {
        filteredCountries.push(countryData);
        found.push(countryShortCode);
      }
    });

    // if one or more of the countries wasn't found, they probably made a typo. Throw a warning and halt the process.
    if (targetCountries.length !== filteredCountries.length) {
      let msg = "The following countries weren't found. Check the data.json file in the source repo (https://github.com/benkeen/country-region-data) to ensure you entered the exact country short code:\n";
      _.each(_.difference(targetCountries, found), (shortCode) => { msg += "--" + shortCode + '\n'; } );
      throw new gulpUtil.PluginError({ plugin: 'react-country-region-selector', message: msg });
    }

    // all good! Let the user know what bundle is being created, just to remove any ambiguity
    console.log("Creating bundle with following countries: " + targetCountries.join(', '));

    return filteredCountries;
  }

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

  gulp.src('src/templates/source-data.template')
    .pipe(template({ __DATA__: JSON.stringify(filterCountries(minifyJSON(countriesJSON))) }))
    .pipe(rename('source-data.js'))
    .pipe(gulp.dest('src'))
});

const taskConfig = {
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
      'index.html',
      'css/github-light.css',
      'css/normalize.css',
      'css/stylesheet.css',
      'libs/highlight/highlight.pack.js',
      'libs/highlight/railscasts.css'
    ],
    scripts: [
      'examples.js'
    ]
  }
};


gulp.task('default', () => { runSequence(['customBuild', 'build'], () => {}); });

initGulpTasks(gulp, taskConfig);
