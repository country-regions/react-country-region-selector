module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  const _ = require('underscore');
  const countriesJSON = grunt.file.readJSON("node_modules/country-region-data/data.json");
  const packageFile   = grunt.file.readJSON("package.json");


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


  grunt.initConfig({
    template: {
      includeData: {
        options: {
          data: { __DATA__: JSON.stringify(minifyJSON(countriesJSON)) }
        },
        files: {
          "source/source-data.js": ["source/template.source-data.js"]
        }
      }

      //customBuild: {
      //  options: {
      //    data: {
      //      __DATA__: ""  // populated dynamically
      //    }
      //  },
      //  files: {
      //    "dist/crs.js": ["source/source-crs.js"],
      //  }
      //}
    },

    babel: {
      dist: {
        files: {
          'dist/rcrs.js': 'source/rcrs.jsx',
          'dist/rcrs-helper.js': 'source/rcrs-helper.jsx'
        },
        options: {
          presets: ['react', 'es2015']
        }
      }
    },

    browserify: {
      doc: {
        src: [
          './dist/rcrs.js',
          './dist/rcrs-helper.js',
          './doc/doc-source.jsx'
        ],
        dest: './doc/doc.min.js',
        options: {
          browserifyOptions: { debug: true },
          transform: [['babelify', { "presets": ['es2015', 'react'] }]]
        }
      }
    }
  });

  grunt.registerTask('default', ['template:includeData', 'babel:dist', 'browserify:doc']);

};
