module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  const _ = require('underscore');

  grunt.initConfig({

    // this creates an es6 common JS file LINKING to the sources in /sources
    babel: {
      dist: {
        files: {
          'dist/rcrs.js': 'source/rcrs.jsx'
        },
        options: {
          presets: ['react', 'es2015']
        }
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", { "presets": ['es2015', 'react'] }]
          ],
          exclude: ['react', 'react-dom']
        },
        files: {
          'dist/rcrs-umd.js': ['source/rcrs.jsx']
        }
      },

      doc: {
        src: [
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

  grunt.registerTask('default', ['dist', 'doc']);
  grunt.registerTask('dist', ['template:includeData', 'babel:dist']);
  grunt.registerTask('doc', ['browserify:doc']);

};
